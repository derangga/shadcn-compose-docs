<script setup lang="ts">
import { computed, ref } from "vue";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import "prismjs/components/prism-kotlin";
import Prism from "prismjs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useClipboard } from "@vueuse/core";
import { Check, Copy } from "lucide-vue-next";
import { toast } from "vue-sonner";

// State
const tailwindInput = ref("");
const kotlinOutput = ref("");
const showDialog = ref(false);

const highlightedCode = computed(() =>
  Prism.highlight(kotlinOutput.value, Prism.languages["kotlin"], "kotlin"),
);

const { copy, copied } = useClipboard({ source: kotlinOutput });

function tailwindToKotlin(
  css: string,
  interfaceName = "ShadcnColors",
  lightClassName = "LightShadcnColors",
  darkClassName = "DarkShadcnColors",
): string {
  // List of properties expected by the interface (keeps output complete)
  const props = [
    "background",
    "foreground",
    "card",
    "cardForeground",
    "popover",
    "popoverForeground",
    "primary",
    "primaryForeground",
    "secondary",
    "secondaryForeground",
    "muted",
    "mutedForeground",
    "accent",
    "accentForeground",
    "destructive",
    "destructiveForeground",
    "border",
    "input",
    "ring",
    "chart1",
    "chart2",
    "chart3",
    "chart4",
    "chart5",
    "sidebar",
    "sidebarForeground",
    "sidebarPrimary",
    "sidebarPrimaryForeground",
    "sidebarAccent",
    "sidebarAccentForeground",
    "sidebarBorder",
    "sidebarRing",
    "snackbar",
  ];

  // Helper: parse CSS blocks like ":root { ... }" or ".dark { ... }"
  function parseBlocks(input: string) {
    const blocks: Record<string, string> = {};
    const blockRe = /([^{]+)\{([^}]+)\}/gs;
    let m: RegExpExecArray | null;
    while ((m = blockRe.exec(input))) {
      const selector = m[1].trim();
      const body = m[2];
      blocks[selector] = body;
    }
    return blocks;
  }

  // Helper: parse variables inside a block body
  function parseVars(body: string) {
    const map: Record<string, string> = {};
    const varRe = /--([a-z0-9\-_]+)\s*:\s*([^;]+);/gi;
    let m: RegExpExecArray | null;
    while ((m = varRe.exec(body))) {
      const name = m[1].trim();
      const value = m[2].trim();
      map[name] = value;
    }
    return map;
  }

  function camelToKebab(c: string) {
    // insert dash before uppercase letters, convert to lower-case
    return c.replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
  }

  function colorToKotlin(value: string): string {
    value = value.trim().toLowerCase();

    if (value === "transparent") return "Color(0x00000000)";

    // hex forms: #rgb #rgba #rrggbb #rrggbbaa
    const hexRe = /^#([0-9a-f]{3,8})$/i;
    const mHex = value.match(hexRe);
    if (mHex) {
      let hex = mHex[1];
      if (hex.length === 3) {
        // expand #rgb -> rrggbb
        hex = hex
          .split("")
          .map((ch) => ch + ch)
          .join("");
        return `Color(0xFF${hex.toUpperCase()})`;
      }
      if (hex.length === 4) {
        // #rgba -> rrggbb aa (css) -> need AARRGGBB for Kotlin
        const r = hex[0] + hex[0];
        const g = hex[1] + hex[1];
        const b = hex[2] + hex[2];
        const a = hex[3] + hex[3];
        return `Color(0x${(a + r + g + b).toUpperCase()})`;
      }
      if (hex.length === 6) {
        return `Color(0xFF${hex.toUpperCase()})`;
      }
      if (hex.length === 8) {
        // CSS #RRGGBBAA -> Kotlin 0xAARRGGBB
        const rrggbb = hex.slice(0, 6);
        const aa = hex.slice(6, 8);
        return `Color(0x${(aa + rrggbb).toUpperCase()})`;
      }
    }

    // rgb(...) or rgba(...)
    const rgbRe = /^rgba?\(\s*([^)]+)\s*\)$/i;
    const mRgb = value.match(rgbRe);
    if (mRgb) {
      const parts = mRgb[1].split(",").map((s) => s.trim());
      if (parts.length >= 3) {
        function parseChannel(ch: string) {
          if (ch.endsWith("%")) {
            const n = parseFloat(ch);
            const v = Math.round((n / 100) * 255);
            return Math.max(0, Math.min(255, v));
          }
          return Math.max(0, Math.min(255, Math.round(parseFloat(ch))));
        }
        const r = parseChannel(parts[0]);
        const g = parseChannel(parts[1]);
        const b = parseChannel(parts[2]);
        let a = 1;
        if (parts.length === 4) {
          const rawA = parts[3];
          a = rawA.endsWith("%")
            ? Math.max(0, Math.min(1, parseFloat(rawA) / 100))
            : Math.max(0, Math.min(1, parseFloat(rawA)));
        }
        const ai = Math.round(a * 255);
        const toHex = (n: number) =>
          n.toString(16).padStart(2, "0").toUpperCase();
        return `Color(0x${toHex(ai)}${toHex(r)}${toHex(g)}${toHex(b)})`;
      }
    }

    // fallback: if it's a named color or unsupported value, return Color.Unspecified
    return "Color.Unspecified";
  }

  // Build Kotlin class text for a particular theme name and variable map
  function buildClass(themeClassName: string, vars: Record<string, string>) {
    // create map from prop -> kotlin color
    const propToColor: Record<string, string> = {};
    for (const p of props) {
      const kebab = camelToKebab(p); // e.g. "cardForeground" -> "card-foreground"
      // try exact kebab first, then try simple name fallback (like "background")
      if (vars.hasOwnProperty(kebab)) {
        propToColor[p] = colorToKotlin(vars[kebab]);
      } else if (vars.hasOwnProperty(p)) {
        // maybe variable declared without dashes (unlikely)
        propToColor[p] = colorToKotlin(vars[p]);
      } else if (p === "snackbar") {
        propToColor[p] = propToColor["background"];
      } else {
        // maybe CSS uses slightly different naming like "chart-1"
        // attempt to find by matching kebab with numbers removed/converted
        // fallback to unspecified
        propToColor[p] = "Color.Unspecified";
      }
    }

    const lines = [`object ${themeClassName} : ${interfaceName} {`];

    for (const p of props) {
      const col = propToColor[p];
      lines.push(`    override val ${p}: Color = ${col}`);
    }

    lines.push("}");
    return lines.join("\n");
  }

  const blocks = parseBlocks(css);

  // find :root or html for light, .dark for dark
  let lightVars: Record<string, string> = {};
  for (const sel of Object.keys(blocks)) {
    if (sel.includes(":root") || sel.trim() === "html") {
      lightVars = parseVars(blocks[sel]);
      break;
    }
  }
  // if not found by exact, try the first block as fallback
  if (Object.keys(lightVars).length === 0) {
    // pick the first non-.dark block if exists
    for (const sel of Object.keys(blocks)) {
      if (!sel.includes(".dark")) {
        lightVars = parseVars(blocks[sel]);
        break;
      }
    }
  }

  const darkSelectorKey = Object.keys(blocks).find((s) => s.includes(".dark"));
  const darkVars = darkSelectorKey ? parseVars(blocks[darkSelectorKey]) : {};

  // build output
  const header = [
    "",
    "// Generated by tailwindToKotlin",
    "import androidx.compose.ui.graphics.Color",
    "import com.drna.shadcn.compose.themes.ShadcnColors",
    "",
    "// NOTE: This file assumes the interface " +
      interfaceName +
      " is declared elsewhere.",
    "",
  ].join("\n");

  const classes: string[] = [];
  if (Object.keys(lightVars).length > 0) {
    classes.push(buildClass(lightClassName, lightVars));
  }
  if (Object.keys(darkVars).length > 0) {
    classes.push(buildClass(darkClassName, darkVars));
  }

  if (classes.length === 0) {
    // If parser found nothing, return a helpful message
    return (
      header + "// No :root or .dark variable blocks found in the input CSS.\n"
    );
  }

  return header + classes.join("\n\n");
}

function convertTailwind() {
  if (tailwindInput.value.trim() === "") {
    toast.error("Parse Failed", {
      description: "Tailwind code can't be empty",
    });
    return;
  }
  const result = tailwindToKotlin(tailwindInput.value.trim());
  kotlinOutput.value = result;
  showDialog.value = true;
}

function onOpenChange(value: boolean) {
  showDialog.value = value;
}
</script>

<template>
  <div class="not-prose container">
    <Card class="shadow-md">
      <CardHeader>
        <Label for="tailwind" class="text-xl font-semibold"
          >Tailwind CSS Input</Label
        >
      </CardHeader>
      <CardContent>
        <div>
          <Textarea
            id="tailwind"
            v-model="tailwindInput"
            placeholder="Enter Tailwind CSS code here..."
            class="h-[400px] resize-none"
          />
        </div>
      </CardContent>
      <CardFooter>
        <div class="w-full flex justify-end">
          <Button @click="convertTailwind" class="w-full md:w-auto">
            Convert
          </Button>
        </div>
      </CardFooter>
    </Card>
    <Dialog :open="showDialog" @update:open="onOpenChange">
      <DialogContent class="md:max-w-[720px]">
        <DialogHeader class="w-fit">
          <DialogTitle>Kotlin Class Output</DialogTitle>
        </DialogHeader>
        <div class="w-full overflow-x-hidden">
          <div
            class="prose dark:prose-invert border rounded-md overflow-hidden"
          >
            <div class="flex items-center justify-between px-4 py-2">
              <span class="text-sm font-medium capitalize"
                >CustomColors.kt</span
              >
              <Button @click="copy()" :class="{ 'text-green-400': copied }">
                <Check v-if="copied" class="w-4 h-4" />
                <Copy v-else class="w-4 h-4" />
                {{ copied ? "Copied!" : "Copy" }}
              </Button>
            </div>
            <div class="h-80 py-0 my-0">
              <pre class="language-kotlin h-full overflow-scroll">
                  <code class="language-kotlin" v-html="highlightedCode"></code>
                </pre>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

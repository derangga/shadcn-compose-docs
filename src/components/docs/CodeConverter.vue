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
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useClipboard } from "@vueuse/core";
import { Check, Copy, Info } from "lucide-vue-next";
import { toast } from "vue-sonner";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

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
  interfaceName = "ShadcnStyles",
  lightClassName = "LightStyles",
  darkClassName = "DarkStyles",
): string {
  // List of color properties expected by the interface
  const colorProps = [
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

  // List of shadow properties
  const shadowProps = [
    "shadow2xs",
    "shadowXs",
    "shadowSm",
    "shadow",
    "shadowMd",
    "shadowLg",
    "shadowXl",
    "shadow2xl",
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

  function hslToColor(h: number, s: number, l: number, a: number = 1): string {
    // Convert HSL to RGB
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let r = 0,
      g = 0,
      b = 0;
    if (h >= 0 && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (h >= 60 && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (h >= 180 && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (h >= 240 && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (h >= 300 && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    const ri = Math.round((r + m) * 255);
    const gi = Math.round((g + m) * 255);
    const bi = Math.round((b + m) * 255);
    const ai = Math.round(a * 255);

    const toHex = (n: number) => n.toString(16).padStart(2, "0").toUpperCase();
    return `Color(0x${toHex(ai)}${toHex(ri)}${toHex(gi)}${toHex(bi)})`;
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
        hex = hex
          .split("")
          .map((ch) => ch + ch)
          .join("");
        return `Color(0xFF${hex.toUpperCase()})`;
      }
      if (hex.length === 4) {
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
        const rrggbb = hex.slice(0, 6);
        const aa = hex.slice(6, 8);
        return `Color(0x${(aa + rrggbb).toUpperCase()})`;
      }
    }

    // hsl(...) or hsla(...)
    const hslRe = /^hsla?\(\s*([^)]+)\s*\)$/i;
    const mHsl = value.match(hslRe);
    if (mHsl) {
      const parts = mHsl[1].split(/[\s,\/]+/).filter((p) => p.trim());
      if (parts.length >= 3) {
        const h = parseFloat(parts[0]);
        const s = parseFloat(parts[1]) / 100;
        const l = parseFloat(parts[2]) / 100;
        let a = 1;
        if (parts.length >= 4) {
          a = parseFloat(parts[3]);
        }
        return hslToColor(h, s, l, a);
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

    return "Color.Unspecified";
  }

  function parseShadow(shadowValue: string): string | null {
    // Split by comma to handle multiple shadows
    const shadows = shadowValue.split(",").map((s) => s.trim());

    // Convert units to .dp
    const toDp = (val: string) => {
      const num = parseFloat(val);
      if (val.includes("rem") || val.includes("em")) {
        return num < 0 ? `(${num * 16}).dp` : `${num * 16}.dp`;
      } else {
        return num < 0 ? `(${num}).dp` : `${num}.dp`;
      }
    };

    const parsedShadows: string[] = [];

    for (const shadow of shadows) {
      // Parse box-shadow format: offsetX offsetY blurRadius [spread] color
      // Example: "0 1px 3px 0px hsl(0 0% 0% / 0.10)"
      const parts = shadow.match(
        /^([\d.-]+(?:px|rem|em)?)\s+([\d.-]+(?:px|rem|em)?)\s+([\d.-]+(?:px|rem|em)?)(?:\s+([\d.-]+(?:px|rem|em)?))?\s+(.+)$/,
      );

      if (!parts) continue;

      const offsetX = parts[1];
      const offsetY = parts[2];
      const blurRadius = parts[3];
      const spread = parts[4] || "0px";

      parsedShadows.push(`BoxShadow(
            offsetX = ${toDp(offsetX)},
            offsetY = ${toDp(offsetY)},
            blurRadius = ${toDp(blurRadius)},
            spread = ${toDp(spread)},
            color = MaterialTheme.styles.border
        )`);
    }

    if (parsedShadows.length === 0) return null;

    // Return as a list
    return `listOf(
        ${parsedShadows.join(",\n        ")}
    )`;
  }

  // Build Kotlin class text for a particular theme name and variable map
  function buildClass(themeClassName: string, vars: Record<string, string>) {
    // Create map from prop -> kotlin color
    const propToColor: Record<string, string> = {};
    for (const p of colorProps) {
      const kebab = camelToKebab(p);
      if (vars.hasOwnProperty(kebab)) {
        propToColor[p] = colorToKotlin(vars[kebab]);
      } else if (vars.hasOwnProperty(p)) {
        propToColor[p] = colorToKotlin(vars[p]);
      } else if (p === "snackbar") {
        propToColor[p] = propToColor["background"] || "Color.Unspecified";
      } else {
        propToColor[p] = "Color.Unspecified";
      }
    }

    // Create map from shadow prop -> kotlin BoxShadow
    const propToShadow: Record<string, string> = {};
    for (const p of shadowProps) {
      const kebab = camelToKebab(p);
      if (vars.hasOwnProperty(kebab)) {
        const shadowKotlin = parseShadow(vars[kebab]);
        if (shadowKotlin) {
          propToShadow[p] = shadowKotlin;
        }
      }
    }

    const lines = [`object ${themeClassName} : ${interfaceName} {`];

    // Add color properties
    for (const p of colorProps) {
      const col = propToColor[p];
      lines.push(`    override val ${p}: Color = ${col}`);
    }

    // Add shadow properties as @Composable functions
    for (const p of shadowProps) {
      if (propToShadow[p]) {
        lines.push(`    @Composable`);
        lines.push(
          `    override fun ${p}(): List<BoxShadow> = ${propToShadow[p]}`,
        );
      }
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
  if (Object.keys(lightVars).length === 0) {
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
    "import androidx.compose.material3.MaterialTheme",
    "import androidx.compose.runtime.Composable",
    "import androidx.compose.ui.graphics.Color",
    "import androidx.compose.ui.unit.dp",
    "import com.drna.shadcn.compose.themes.ShadcnStyles",
    "import com.drna.shadcn.compose.themes.BoxShadow",
    "import com.drna.shadcn.compose.themes.styles",
    "",
    "// NOTE: This file assumes the interface " +
      interfaceName +
      " and BoxShadow class are declared elsewhere.",
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
      <DialogContent class="md:max-w-3xl h-[80dvh] max-h-[min(700px,90dvh)]">
        <div class="size-full overflow-hidden">
          <h2 class="font-lg font-semibold mb-4">Kotlin Class Output</h2>
          <Alert class="mb-4 border-chart-3/50 bg-chart-1/50 text-chart-2">
            <Info />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription
              >Converting shadow configuration from css into native android have
              different behavior, you might need to re-adjust it based on your
              needed</AlertDescription
            >
          </Alert>
          <div class="size-full">
            <div class="border rounded-md md:max-w-full">
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
              <div class="py-0 my-0 flex-1">
                <pre class="language-kotlin h-[41vh] md:h-[50vh] !mb-0">
                                    <code class="language-kotlin" v-html="highlightedCode"/>
                                </pre>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

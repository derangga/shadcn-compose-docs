import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Check, Copy, Info } from "lucide-react";
import { toast } from "sonner";
import { tailwindToKotlin } from "@/lib/tailwind-to-kotlin";

export function CodeConverter() {
  const [tailwindInput, setTailwindInput] = useState("");
  const [kotlinOutput, setKotlinOutput] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [copied, setCopied] = useState(false);

  function convertTailwind() {
    if (tailwindInput.trim() === "") {
      toast.error("Parse Failed", {
        description: "Tailwind code can't be empty",
      });
      return;
    }
    const result = tailwindToKotlin(tailwindInput.trim());
    setKotlinOutput(result);
    setShowDialog(true);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(kotlinOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="not-prose container">
      <Card className="shadow-md">
        <CardHeader>
          <Label htmlFor="tailwind" className="text-xl font-semibold">
            Tailwind CSS Input
          </Label>
        </CardHeader>
        <CardContent>
          <Textarea
            id="tailwind"
            value={tailwindInput}
            onChange={(e) => setTailwindInput(e.target.value)}
            placeholder="Enter Tailwind CSS code here..."
            className="h-[400px] resize-none"
          />
        </CardContent>
        <CardFooter>
          <div className="w-full flex justify-end">
            <Button onClick={convertTailwind} className="w-full md:w-auto">
              Convert
            </Button>
          </div>
        </CardFooter>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="md:max-w-3xl h-[80dvh] max-h-[min(700px,90dvh)]">
          <div className="size-full overflow-hidden">
            <h2 className="font-lg font-semibold mb-4">Kotlin Class Output</h2>
            <Alert className="mb-4 border-chart-3/50 bg-chart-1/50 text-chart-2">
              <Info className="size-4" />
              <AlertTitle>Info</AlertTitle>
              <AlertDescription>
                Converting shadow configuration from CSS into native Android has
                different behavior, you might need to re-adjust it based on your
                needs.
              </AlertDescription>
            </Alert>
            <div className="size-full">
              <div className="border rounded-md md:max-w-full">
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-sm font-medium capitalize">
                    CustomColors.kt
                  </span>
                  <Button
                    onClick={copyToClipboard}
                    className={copied ? "text-green-400" : ""}
                  >
                    {copied ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </div>
                <div className="py-0 my-0 flex-1">
                  <pre className="h-[41vh] md:h-[50vh] !mb-0 p-4 overflow-auto bg-muted rounded-b-md">
                    <code className="text-sm font-mono">{kotlinOutput}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export type Content = {
  image: string;
  code: string;
};
export type Variant = {
  name: string;
  content: Content;
};
export function content() {
  const contents = new Map<string, Variant[]>();
  contents.set("accordion", [
    {
      name: "Usage",
      content: {
        image: "/src/assets/components/accordion/accordion.webp",
        code: `
fun Example() {
    val accordionItems = listOf(
        AccordionItemData(
            id = "item-1",
            header = { Text("Is it accessible?") },
            content = { Text("Yes. It adheres to the WAI-ARIA design pattern.") }
        ),
        AccordionItemData(
            id = "item-2",
            header = { Text("Is it styled?") },
            content = { Text("Yes. It comes with default styles that matches the other components' aesthetic.") }
        ),
        AccordionItemData(
            id = "item-3",
            header = { Text("Is it animated?") },
            content = { Text("Yes. It's animated by default, but you can disable it if you prefer.") }
        )
    )

    Column {
        Accordion(items = accordionItems)
    }
}        
        `,
      },
    },
  ]);
  contents.set("button", [
    {
      name: "Default",
      content: {
        image: "/src/assets/components/button/default.webp",
        code: `
Button(
    onClick = { },
) { Text("Normal") }
        `,
      },
    },
    {
      name: "Destructive",
      content: {
        image: "/src/assets/components/button/destructive.webp",
        code: `
Button(
    onClick = { },
    variant = ButtonVariant.Destructive,
) { Text("Destructive") }
            `,
      },
    },
    {
      name: "Secondary",
      content: {
        image: "/src/assets/components/button/secondary.webp",
        code: `
Button(
    onClick = { },
    variant = ButtonVariant.Secondary,
) { Text("Secondary") }
            `,
      },
    },
    {
      name: "Link",
      content: {
        image: "/src/assets/components/button/link.webp",
        code: `
Button(
    onClick = { },
    variant = ButtonVariant.Link,
) { Text("Link") }
            `,
      },
    },
    {
      name: "Ghost",
      content: {
        image: "/src/assets/components/button/ghost.webp",
        code: `
Button(
    onClick = { },
    variant = ButtonVariant.Ghost,
) { Text("Ghost") }
            `,
      },
    },
    {
      name: "Outline",
      content: {
        image: "/src/assets/components/button/outline.webp",
        code: `
Button(
    onClick = { },
    variant = ButtonVariant.Outline,
) { Text("Outline") }
            `,
      },
    },
    {
      name: "Icon",
      content: {
        image: "/src/assets/components/button/icon.webp",
        code: `
Button(
    onClick = { },
    size = ButtonSize.Icon,
    variant = ButtonVariant.Outline
) {
    Icon(Icons.Default.AccountCircle, contentDescription = "Icon")
}
            `,
      },
    },
    {
      name: "With Icon",
      content: {
        image: "/src/assets/components/button/with-icon.webp",
        code: `
Button(
    onClick = { },
    variant = ButtonVariant.Outline
) {
    Icon(imageVector = Icons.Default.AccountCircle, contentDescription = "Icon")
    Spacer(Modifier.width(8.dp))
    Text("Account")
}
            `,
      },
    },
  ]);
  return contents;
}

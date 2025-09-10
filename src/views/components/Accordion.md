---
title: Accordion
description: A vertically stacked set of interactive headings that each reveal a section of content.
---

<DocsPage
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Accordion.md">

## Usage

<TabPreview>

<template #Preview>

<Preview name="accordion" variant="default"/>

</template>

<template #Code>

```kotlin
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
```

</template>
</TabPreview>

</DocsPage>

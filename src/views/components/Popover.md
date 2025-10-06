---
title: Popover
description: Displays rich content in a portal, triggered by a button.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Popover.md">

## Usage

<TabPreview>

<template #Preview>
<Preview name="popover" variant="default" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Button
import com.drna.shadcn.compose.component.ButtonSize
import com.drna.shadcn.compose.component.ButtonVariant
import com.drna.shadcn.compose.component.Popover

@Composable
fun Example() {
    var showPopover by remember { mutableStateOf(false) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
    ) {
        Popover(
            open = showPopover,
            trigger = {
                Button(onClick = { showPopover = !showPopover }) {
                    Text("Open Popover")
                }
            },
        ) {
            Column(
                modifier = Modifier.padding(8.dp), // Inner padding for content
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Text("Place any content here.")
                Text("This is your popover content.")
                Button(
                    onClick = { showPopover = false },
                    variant = ButtonVariant.Secondary,
                    size = ButtonSize.Sm
                ) {
                    Text("Close")
                }
            }
        }
    }
}
```

</template>

</TabPreview>

</DocsPage>

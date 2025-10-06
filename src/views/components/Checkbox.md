---
title: Checkbox
description: A control that allows the user to toggle between checked and not checked.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Checkbox.md">

## Basic Usage

<TabPreview>

<template #Preview>
<Preview name="checkbox" variant="default"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Checkbox

@Composable
fun Example() {
    var checkedState by remember { mutableStateOf(false) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Checkbox(
                checked = checkedState,
                onCheckedChange = { checkedState = it }
            )
            Text("Basic Checkbox")
        }
    }
}
```

</template>

</TabPreview>

## Disabled

<TabPreview>

<template #Preview>
<Preview name="checkbox" variant="disabled"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Checkbox

fun Example() {
    var checkedState by remember { mutableStateOf(false) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Checkbox(
                checked = checkedState,
                onCheckedChange = { checkedState = it },
                enabled = false
            )
            Text("Disabled Checkbox")
        }
    }
}
```

</template>

</TabPreview>

## Custom Styles

<TabPreview>

<template #Preview>
<Preview name="checkbox" variant="custom-styles"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Checkbox

fun Example() {
    var checkedState by remember { mutableStateOf(false) }
    val borderColor = if (checkedState) {
        MaterialTheme.colors.chart3
    } else {
        MaterialTheme.colors.border
    }
    val background = if (checkedState) {
        MaterialTheme.colors.chart1
    } else {
        MaterialTheme.colors.background
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Box(
            modifier = Modifier
                .border(1.dp, borderColor, MaterialTheme.shapes.small)
                .background(background, MaterialTheme.shapes.small)
        ) {
            Row(
                verticalAlignment = Alignment.Top,
                horizontalArrangement = Arrangement.spacedBy(8.dp),
                modifier = Modifier.padding(12.dp)
            ) {
                Checkbox(
                    checked = checkedState,
                    onCheckedChange = { checkedState = it },
                    colors = CheckboxDefaults.colors().copy(
                        checkedColors = MaterialTheme.colors.chart3,
                        checkedBorderColors = MaterialTheme.colors.chart3
                    )
                )
                Column {
                    Text("Enable Notification")
                    Text(
                        "You can enable or disable anytime",
                        color = MaterialTheme.colors.mutedForeground
                    )
                }
            }
        }
    }
}
```

</template>

</TabPreview>

</DocsPage>

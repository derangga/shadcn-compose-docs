---
title: Switch
description: A control that allows the user to toggle between checked and not checked.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Switch.md">

## Usage

<TabPreview>

<template #Preview>
<Preview name="switch" variant="default"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Switch

@Composable
fun Example() {
    var switchChecked by remember { mutableStateOf(false) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
    ) {
        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            Switch(
                checked = switchChecked,
                onCheckedChange = { switchChecked = it }
            )
            Text("Enable feature", color = MaterialTheme.colors.foreground)
        }
    }
}
```

</template>

</TabPreview>

## Disabled

<TabPreview>

<template #Preview>
<Preview name="switch" variant="disabled"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Switch

@Composable
fun Example() {
    var switchChecked by remember { mutableStateOf(false) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
    ) {
        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            Switch(
                checked = switchChecked,
                onCheckedChange = { switchChecked = it },
                enabled = false
            )
            Text("Disabled option", color = MaterialTheme.colors.mutedForeground)
        }
    }
}
```

</template>

</TabPreview>

</DocsPage>

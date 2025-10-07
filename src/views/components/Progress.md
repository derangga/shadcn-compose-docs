---
title: Progress
description: Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Progress.md">

## Usage

<TabPreview>

<template #Preview>
<Preview name="progress" variant="default" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Progress

@Composable
fun Example() {
    var progress by remember { mutableFloatStateOf(0.0f) }

    // Simulate progress change
    LaunchedEffect(Unit) {
        while (true) {
            delay(1000)
            progress = (progress + 0.1f) % 1.0f
        }
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        Text(
            text = "Progress: ${(progress * 100).toInt()}%",
            color = MaterialTheme.colors.foreground,
            style = TextStyle(fontSize = 14.sp, fontWeight = FontWeight.Medium)
        )
        Progress(progress = progress)
    }
}
```

</template>

</TabPreview>

</DocsPage>

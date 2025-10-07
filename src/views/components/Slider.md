---
title: Slider
description: An input where the user selects a value from within a given range.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Slider.md">

## Usage

<TabPreview>

<template #Preview>
<Preview name="slider" variant="default" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Slider

@Composable
fun Example() {
    var sliderValue by remember { mutableFloatStateOf(0f) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {

        Slider(
            value = sliderValue,
            onValueChange = { sliderValue = it },
            valueRange = 0f..20f,
            steps = 0
        )
        Text(
            text = "Value: %.0f".format(sliderValue),
            color = MaterialTheme.colors.foreground,
            fontSize = 14.sp
        )
    }
}
```

</template>

</TabPreview>

</DocsPage>

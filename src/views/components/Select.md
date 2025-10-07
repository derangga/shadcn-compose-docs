---
title: Select
description: Displays a list of options for the user to pick from—triggered by a button.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Select.md">

## Usage

<TabPreview>

<template #Preview>
<Preview name="select" variant="default" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Select

@Composable
fun Example() {
    val fruits = remember {
        listOf(
            "Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape",
            "Honeydew", "Kiwi", "Lemon", "Mango", "Nectarine", "Orange", "Peach"
        )
    }
    var selectedFruit by remember { mutableStateOf<String?>(null) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        Select(
            options = fruits,
            selectedOption = selectedFruit,
            onOptionSelected = {
                selectedFruit = it
            },
            modifier = Modifier.width(280.dp),
            placeholder = "Select a fruit..."
        )

        Text(
            text = "Selected Fruit: ${selectedFruit ?: "None"}",
            color = MaterialTheme.colors.foreground,
            style = MaterialTheme.typography.bodyLarge
        )
    }
}
```

</template>

</TabPreview>

</DocsPage>

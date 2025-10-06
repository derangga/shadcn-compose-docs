---
title: Radio Group
description: A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/RadioGroup.md">

## Usage

<TabPreview>

<template #Preview>
<Preview name="radio-group" variant="default"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.RadioButtonWithLabel
import com.drna.shadcn.compose.component.RadioGroup

@Composable
fun Example() {
    var selectedOption by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
    ) {
        Text(
            text = "Select an option (Vertical):",
            color = MaterialTheme.colors.foreground,
            style = MaterialTheme.typography.bodyLarge,
            modifier = Modifier.padding(bottom = 8.dp)
        )
        RadioGroup(
            selectedValue = selectedOption,
            onValueChange = { selectedOption = it },
            orientation = LayoutOrientation.Vertical
        ) {
            RadioButtonWithLabel(value = "option-a", label = "Option A", selectedValue = selectedOption, onValueChange = { selectedOption = it })
            RadioButtonWithLabel(value = "option-b", label = "Option B", selectedValue = selectedOption, onValueChange = { selectedOption = it })
            RadioButtonWithLabel(value = "option-c", label = "Option C", selectedValue = selectedOption, onValueChange = { selectedOption = it })
            RadioButtonWithLabel(value = "option-d", label = "Option D (disabled)", selectedValue = selectedOption, onValueChange = { selectedOption = it }, enabled = false)
        }
        Spacer(modifier = Modifier.height(16.dp))
        Text(
            text = "Selected: $selectedOption",
            color = MaterialTheme.colors.foreground,
            style = MaterialTheme.typography.bodySmall
        )
    }
}
```

</template>

</TabPreview>

## Horizontal

<TabPreview>

<template #Preview>
<Preview name="radio-group" variant="horizontal"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.RadioButtonWithLabel
import com.drna.shadcn.compose.component.RadioGroup

@Composable
fun Example() {
    var selectedOption by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
    ) {
        Text(
            text = "Select a category (Horizontal):",
            color = MaterialTheme.colors.foreground,
            style = MaterialTheme.typography.bodyLarge,
            modifier = Modifier.padding(bottom = 8.dp)
        )
        RadioGroup(
            selectedValue = selectedOption,
            onValueChange = { selectedOption = it },
            orientation = LayoutOrientation.Horizontal
        ) {
            RadioButtonWithLabel(value = "radio-1", label = "Category 1", selectedValue = selectedOption, onValueChange = { selectedOption = it })
            RadioButtonWithLabel(value = "radio-2", label = "Category 2", selectedValue = selectedOption, onValueChange = { selectedOption = it })
            RadioButtonWithLabel(value = "radio-3", label = "Category 3", selectedValue = selectedOption, onValueChange = { selectedOption = it })
        }
        Spacer(modifier = Modifier.height(16.dp))
        Text(
            text = "Selected: $selectedOption",
            color = MaterialTheme.colors.foreground,
            style = MaterialTheme.typography.bodySmall
        )
    }
}
```

</template>

</TabPreview>

</DocsPage>

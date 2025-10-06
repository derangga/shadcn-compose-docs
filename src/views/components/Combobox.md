---
title: Combobox
description: Autocomplete input and command palette with a list of suggestions.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Combobox.md">

## Usage

<TabPreview>

<template #Preview>
<Preview name="combobox" variant="default" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.ComboBox

@Composable
fun Example() {
    val programmingLanguages = remember {
        listOf(
            "JavaScript", "Python", "Java", "C#", "C++", "Ruby", "Swift",
            "Go", "Kotlin", "PHP", "TypeScript", "Rust", "Dart", "Scala"
        )
    }

    var selectedLanguage by remember { mutableStateOf<String?>(null) }

    Column(
        modifier = Modifier
            .fillMaxSize()

            .padding(top = 24.dp, start = 16.dp, end = 16.dp)
            .verticalScroll(rememberScrollState()),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        ComboBox(
            options = programmingLanguages,
            selectedOption = selectedLanguage,
            onOptionSelected = {
                selectedLanguage = it
            },
            modifier = Modifier.width(280.dp),
            placeholder = "Select a language..."
        )

        Text(
            text = "Selected Language: ${selectedLanguage ?: "None"}",
            color = MaterialTheme.colors.foreground,
            style = MaterialTheme.typography.bodyLarge
        )
    }
}
```

</template>

</TabPreview>

</DocsPage>

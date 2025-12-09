---
title: Installation
description: Get started with our Shadcn Compose component library by following these simple installation steps.
---

<DocsPage
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="pages/docs/Installation.md">

## Prerequisites

Before you begin, make sure your project using Kotlin 2.2.0

## Installation Steps

<Steps>

#### Update gradle dependency

Update your `build.gradle` and you can check the [release tag](https://github.com/derangga/shadcn-ui-kmp/releases) for the latest version

<TabPreview name="Groovy" :names="['Groovy', 'Kotlin']">
<template #Groovy>

```gradle
dependencies {
    implementation 'io.github.derangga:shadcn-ui-kmp:0.2.0'
}
```

</template>

<template #Kotlin>

```kts
dependencies {
    implementation("io.github.derangga:shadcn-ui-kmp:0.2.0")
}
```

</template>
</TabPreview>

#### Replace existing theme with ShadcnTheme

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            ShadcnTheme {
                // rest of your screen navigation or components
            }
        }
    }
}
```

#### Add components

```kotlin
import com.shadcn.ui.components.Button
import com.shadcn.ui.components.Input

@Composable
fun ExampleInput() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(innerPadding)
    ) {
        var nameTxt by remember { mutableStateOf("John Doe") }
        Text(
            text = "Name",
            fontWeight = FontWeight.SemiBold,
            color = MaterialTheme.shadcnColors.foreground
        )
        Input(
            value = nameTxt,
            onValueChange = { nameTxt = it },
            placeholder = "Enter your name",
            singleLine = true
        )
        Button(onClick = {}) {
            Text("Save")
        }
    }
}
```

</Steps>

</DocsPage>

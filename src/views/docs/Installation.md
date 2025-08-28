---
title: Installation
description: Get started with our Shadcn Compose component library by following these simple installation steps.
---

<HeaderDocs :title="frontmatter.title" :description="frontmatter.description"/>

## Prerequisites

Before you begin, make sure you project have following this requirements:

- Kotlin 2.2.0
- Jetpack compose bom 2025.07.00
- Target minSDK 26: Required due to the use of java.time APIs (e.g., DayOfWeek.getDisplayName) in the Calendar component, which are available from API level 26.

## Installation Steps

<Steps>

#### Gradle Settings

<TabPreview name="Groovy" :names="['Groovy', 'Kotlin']">
<template #Groovy>

```gradle
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        mavenCentral()
        maven { url 'https://jitpack.io' }
    }
}
```

</template>

<template #Kotlin>

```kts
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        mavenCentral()
        maven { url = uri("https://jitpack.io") }
    }
}
```

</template>
</TabPreview>

#### Update gradle dependency

Update your `build.gradle`

<TabPreview name="Groovy" :names="['Groovy', 'Kotlin']">
<template #Groovy>

```gradle
dependencies {
    implementation 'com.github.derangga:shadcn-compose:0.1.2'
}
```

</template>

<template #Kotlin>

```kts
dependencies {
    implementation("com.github.derangga:shadcn-compose:0.1.2")
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
import com.drna.shadcn.compose.component.Button
import com.drna.shadcn.compose.component.Input

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

<EditThisPage source="https://github.com/derangga/shadcn-compose-docs"/>

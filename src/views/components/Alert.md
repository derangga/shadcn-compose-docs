---
title: Alert
description: Displays a callout for user attention.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Alert.md">

## Default

<TabPreview>

<template #Preview>
<Preview name="alert" variant="default"/>
</template>

<template #Code>

```kotlin
Alert(
    title = { Text("Heads up!") },
    description = { Text("You can add components to your app using the cli.") }
)
```

</template>

</TabPreview>

## Destructive

<TabPreview>

<template #Preview>
<Preview name="alert" variant="destructive"/>
</template>

<template #Code>

```kotlin
Alert(
    variant = AlertVariant.Destructive,
    title = { Text("Error") },
    description = { Text("Your session has expired. Please log in again.") }
)
```

</template>

</TabPreview>

## With Icon

<TabPreview>

<template #Preview>
<Preview name="alert" variant="with-icon"/>
</template>

<template #Code>

```kotlin
Alert(
    icon = {
        // Placeholder for an actual icon
        // For demonstration, a simple text icon
        Text("💡", fontSize = 24.sp)
    },
    title = { Text("Tip!") },
    description = { Text("This is a helpful tip for using the application effectively.") }
)
```

</template>

</TabPreview>

## Custom Styles

You can also customizing the alert color

<TabPreview>

<template #Preview>
<Preview name="alert" variant="custom-color"/>
</template>

<template #Code>

```kotlin
Alert(
    icon = {
        Icon(Icons.Default.Info, contentDescription = "Info", tint = MaterialTheme.shadcnColors.primaryForeground)
    },
    title = { Text("Information") },
    description = { Text("This is a helpful information that you need to know") },
    colors = AlertDefaults.colors().copy(
        backgroundColor = MaterialTheme.shadcnColors.chart2,
        borderColors = MaterialTheme.shadcnColors.chart2,
        titleColor = MaterialTheme.shadcnColors.primaryForeground,
        descriptionColor = MaterialTheme.shadcnColors.primaryForeground
    )
)
```

</template>

</TabPreview>

</DocsPage>

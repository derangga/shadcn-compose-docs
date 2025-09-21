---
title: Avatar
description: An image element with a fallback for representing the user.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Avatar.md">

## Basic Usage

<TabPreview>

<template #Preview>
<Preview name="avatar" variant="default"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Avatar

@Composable
fun Example() {
    Column(
        modifier = Modifier.padding(ip)
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Avatar(
            imageUrl = "https://avatars.githubusercontent.com/u/124599?v=4",
            contentDescription = "Avatar",
            fallbackText = "CN"
        )
    }
}
```

</template>

</TabPreview>

## With Text Fallback

<TabPreview>

<template #Preview>
<Preview name="avatar" variant="with-text-fallback"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Avatar

@Composable
fun Example() {
    Column(
        modifier = Modifier.padding(ip)
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Avatar(
            fallbackText = "CN"
        )
    }
}
```

</template>

</TabPreview>

## With Custom Fallback

<TabPreview>

<template #Preview>
<Preview name="avatar" variant="with-custom-fallback"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Avatar

@Composable
fun Example() {
    Column(
        modifier = Modifier.padding(ip)
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Avatar(
            imageUrl = "https://invalid-image-url.com/nonexistent.png",
            contentDescription = "Invalid Avatar",
            fallbackText = "ERR",
            errorContent = {
                Text("❌")
            }
        )
    }
}
```

</template>

</TabPreview>

## With Loading

<TabPreview>

<template #Preview>
<Preview name="avatar" variant="with-loading" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Avatar

@Composable
fun Example() {
    Column(
        modifier = Modifier.padding(ip)
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Avatar(
            imageUrl = "https://picsum.photos/200/300",
            contentDescription = "Random Image",
            fallbackText = "RI",
            loadingContent = {
                CircularProgressIndicator(modifier = Modifier.size(24.dp), color = MaterialTheme.shadcnColors.primary)
            }
        )
    }
}
```

</template>

</TabPreview>

</DocsPage>

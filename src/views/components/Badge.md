---
title: Badge
description: Displays a badge or a component that looks like a badge.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Badge.md">

## Basic Usage

<TabPreview>

<template #Preview>
<Preview name="badge" variant="notification-badge"/>
</template>

<template #Code>

```kotlin
import androidx.compose.material3.BadgedBox
import com.drna.shadcn.compose.component.Badge
import com.drna.shadcn.compose.component.BadgeVariant
import com.drna.shadcn.compose.component.Button
import com.drna.shadcn.compose.component.ButtonSize

@Composable
fun Example() {
    Column(
        modifier = Modifier.padding(ip)
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        BadgedBox(
            badge = {
                Badge(
                    variant = BadgeVariant.Destructive
                ) {
                    Text("8")
                }
            }
        ) {
            Button(
                size = ButtonSize.Icon,
                onClick = {}
            ) {
                Icon(Icons.Default.Notifications, contentDescription = "icon")
            }
        }
    }
}
```

</template>

</TabPreview>

## Default

<TabPreview>

<template #Preview>
<Preview name="badge" variant="default"/>
</template>

<template #Code>

```kotlin
import androidx.compose.material3.BadgedBox
import com.drna.shadcn.compose.component.Badge

@Composable
fun Example() {
    Column(
        modifier = Modifier.padding(ip)
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Badge {
            Text("Default")
        }
    }
}
```

</template>

</TabPreview>

## Secondary

<TabPreview>

<template #Preview>
<Preview name="badge" variant="secondary"/>
</template>

<template #Code>

```kotlin
import androidx.compose.material3.BadgedBox
import com.drna.shadcn.compose.component.Badge
import com.drna.shadcn.compose.component.BadgeVariant

@Composable
fun Example() {
    Column(
        modifier = Modifier.padding(ip)
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Badge(variant = BadgeVariant.Secondary) {
            Text("Secondary")
        }
    }
}
```

</template>

</TabPreview>

## Destructive

<TabPreview>

<template #Preview>
<Preview name="badge" variant="destructive"/>
</template>

<template #Code>

```kotlin
import androidx.compose.material3.BadgedBox
import com.drna.shadcn.compose.component.Badge
import com.drna.shadcn.compose.component.BadgeVariant

@Composable
fun Example() {
    Column(
        modifier = Modifier.padding(ip)
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Badge(variant = BadgeVariant.Destructive) {
            Text("Destructive")
        }
    }
}
```

</template>

</TabPreview>

## Outline

<TabPreview>

<template #Preview>
<Preview name="badge" variant="outline"/>
</template>

<template #Code>

```kotlin
import androidx.compose.material3.BadgedBox
import com.drna.shadcn.compose.component.Badge
import com.drna.shadcn.compose.component.BadgeVariant

@Composable
fun Example() {
    Column(
        modifier = Modifier.padding(ip)
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Badge(variant = BadgeVariant.Outline) {
            Text("Outline")
        }
    }
}
```

</template>

</TabPreview>

## Custom

<TabPreview>

<template #Preview>
<Preview name="badge" variant="custom"/>
</template>

<template #Code>

```kotlin
import androidx.compose.material3.BadgedBox
import com.drna.shadcn.compose.component.Badge

@Composable
fun Example() {
    Column(
        modifier = Modifier.padding(ip)
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Badge(backgroundColor = colors.chart3, roundedSize = 8.dp) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Icon(
                    Icons.Default.CheckCircle,
                    contentDescription = "icon",
                    tint = Color.White
                )
                Text("Custom background")
            }
        }
    }
}
```

</template>

</TabPreview>

</DocsPage>

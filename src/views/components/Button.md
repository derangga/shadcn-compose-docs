---
title: Button
description: Displays a button or a component that looks like a button.
---

<DocsPage
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Button.md">

## Default

<TabPreview>

<template #Preview>

<Preview name="button" variant="default"/>

</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Button

@Composable
fun Example() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Button(
            onClick = {
                // TODO: click action
            }
        ) {
            Text("Normal")
        }
    }
}
```

</template>

</TabPreview>

## Destructive

<TabPreview>

<template #Preview>
<Preview name="button" variant="destructive"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Button
import com.drna.shadcn.compose.component.ButtonVariant

@Composable
fun Example() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Button(
            onClick = {
                 // TODO: click action
            },
            variant = ButtonVariant.Destructive
        ) {
            Text("Destructive")
        }
    }
}
```

</template>

</TabPreview>

## Secondary

<TabPreview>

<template #Preview>
<Preview name="button" variant="secondary"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Button
import com.drna.shadcn.compose.component.ButtonVariant

@Composable
fun Example() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Button(
            onClick = {
                 // TODO: click action
            },
            variant = ButtonVariant.Secondary
        ) {
            Text("Secondary")
        }
    }
}
```

</template>

</TabPreview>

## Link

<TabPreview>

<template #Preview>
<Preview name="button" variant="link"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Button
import com.drna.shadcn.compose.component.ButtonVariant

@Composable
fun Example() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Button(
            onClick = {
                // TODO: click action
            },
            variant = ButtonVariant.Link,
        ) {
            Text("Link")
        }
    }
}
```

</template>

</TabPreview>

## Ghost

<TabPreview>

<template #Preview>
<Preview name="button" variant="ghost"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Button
import com.drna.shadcn.compose.component.ButtonVariant

@Composable
fun Example() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Button(
            onClick = {
                // TODO: click action
            },
            variant = ButtonVariant.Ghost,
        )
        {
            Text("Ghost")
        }
    }
}
```

</template>

</TabPreview>

## Outline

<TabPreview>

<template #Preview>
<Preview name="button" variant="outline"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Button
import com.drna.shadcn.compose.component.ButtonVariant

@Composable
fun Example() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Button(
            onClick = {
                // TODO: click action
            },
            variant = ButtonVariant.Outline,
        ) {
            Text("Outline")
        }
    }
}
```

</template>

</TabPreview>

## Icon

<TabPreview>
<template #Preview>
<Preview name="button" variant="icon"/>

</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Button
import com.drna.shadcn.compose.component.ButtonVariant

@Composable
fun Example() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Button(
            onClick = {
                // TODO: click action
            },
            size = ButtonSize.Icon,
            variant = ButtonVariant.Outline
        ) {
            Icon(Icons.Default.AccountCircle, contentDescription = "Icon")
        }
    }
}
```

</template>

</TabPreview>

## With Icon

<TabPreview>
<template #Preview>
<Preview name="button" variant="with-icon"/>

</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Button
import com.drna.shadcn.compose.component.ButtonVariant

@Composable
fun Example() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Button(
            onClick = {
                // TODO: click action
            }
        ) {
            Icon(imageVector = Icons.Default.AccountCircle, contentDescription = "Icon")
            Spacer(Modifier.width(8.dp))
            Text("Account")
        }
    }
}
```

</template>

</TabPreview>

</DocsPage>

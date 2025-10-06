---
title: Card
description: Displays a card with header, content, and footer.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Card.md">

## Basic Usage

<TabPreview>

<template #Preview>
<Preview name="card" variant="default"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Card
import com.drna.shadcn.compose.component.CardContent
import com.drna.shadcn.compose.component.CardDescription
import com.drna.shadcn.compose.component.CardFooter
import com.drna.shadcn.compose.component.CardHeader
import com.drna.shadcn.compose.component.CardTitle

@Composable
fun Example() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Card(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 12.dp),
        ) {
            CardHeader {
                CardTitle { Text("This is title") }
                CardDescription { Text("This is description") }
            }
            CardContent {
                Text("This is the main content of the card.")
                Spacer(modifier = Modifier.height(8.dp))
                Text("You can put any composables here.")
            }
            CardFooter {
                Text("This is footer")
            }
        }
    }
}
```

</template>

</TabPreview>

## With Background Image

<TabPreview>

<template #Preview>
<Preview name="card" variant="with-background-image"/>
</template>

<template #Code>

```kotlin
import coil3.compose.AsyncImage
import com.drna.shadcn.compose.component.Card

@Composable
fun Example() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Card(border = null) {
            AsyncImage(
                "https://heroui.com/images/hero-card.jpeg",
                contentDescription = "",
                modifier = Modifier.size(200.dp)
            )
        }
    }
}
```

</template>

</TabPreview>

## Custom Styles

### Colors

You can also set the card background color by passing `Color` to the `background`

```kotlin
Card(
    modifier = Modifier
        .size(200.dp),
    background = Color.Blue,
)
```

### Shadow

You can also adjust the card shadow by passing `BoxShadow` to the `shadow`.

```kotlin
Card(
    modifier = Modifier
        .size(200.dp),
    shadow = MaterialTheme.shadow.md,
)
```

Shadcn compose has a default shadow configuration, you can also override the shadow configuration by extending `ShadcnShadows` and pass it through `ShadcnTheme`

</DocsPage>

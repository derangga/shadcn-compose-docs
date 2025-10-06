---
title: Carousel
description: A carousel with motion and swipe.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Carousel.md">

## Basic Usage

<TabPreview>

<template #Preview>
<Preview name="carousel" variant="default" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Card
import com.drna.shadcn.compose.component.Carousel

fun Example() {
    val verticalAsset = listOf(R.drawable.store_1, R.drawable.store_2, R.drawable.store_3)

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Carousel(
            itemCount = verticalAsset.size,
            modifier = Modifier.fillMaxWidth(),
            showIndicator = true
        ) { position ->
            Card {
                AsyncImage(
                    verticalAsset[position],
                    contentDescription = "asset-${position}",
                    modifier = Modifier
                        .height(400.dp)
                )
            }
        }
    }
}
```

</template>

</TabPreview>

## Auto Scroll

<TabPreview>

<template #Preview>
<Preview name="carousel" variant="auto-scroll" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Card
import com.drna.shadcn.compose.component.Carousel

fun Example() {
    val verticalAsset = listOf(R.drawable.store_1, R.drawable.store_2, R.drawable.store_3)

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Carousel(
            itemCount = verticalAsset.size,
            autoScroll = true,
            showIndicator = true,
            autoScrollDelayMillis = 1000L,
            modifier = Modifier.fillMaxWidth()
        ) { position ->
            Card {
                AsyncImage(
                    verticalAsset[position],
                    contentDescription = "asset-${position}",
                    modifier = Modifier.height(400.dp)
                )
            }
        }
    }
}
```

</template>

</TabPreview>

## Customize Width Item

<TabPreview>

<template #Preview>
<Preview name="carousel" variant="customize-width" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Card
import com.drna.shadcn.compose.component.Carousel

fun Example() {
    val horizontalAsset = listOf(R.drawable.store_h_1, R.drawable.store_h_2, R.drawable.store_h_3)

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Carousel(
            itemCount = horizontalAsset.size,
            showIndicator = true,
            pageSize = PageSize.Fixed(300.dp),
            modifier = Modifier.fillMaxWidth(),
            itemSpacing = 12.dp
        ) { position ->
            Card {
                AsyncImage(
                    horizontalAsset[position],
                    contentDescription = "asset-${position}",
                    modifier = Modifier.height(200.dp)
                )
            }
        }
    }
}
```

</template>

</TabPreview>

</DocsPage>

---
title: Skeleton
description: Use to show a placeholder while content is loading.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Skeleton.md">

## Usage

<TabPreview>

<template #Preview>
<Preview name="skeleton" variant="default" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Skeleton

@Composable
fun Example() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            Skeleton(
                modifier = Modifier
                    .size(64.dp),
                shape = CircleShape
            )

            Column(
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Skeleton(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(20.dp)
                )

                Skeleton(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(20.dp)
                )
            }
        }
    }
}
```

</template>

</TabPreview>

</DocsPage>

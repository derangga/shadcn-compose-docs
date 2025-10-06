---
title: Drawer (Bottom Sheet)
description: Displays a bottom sheet.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/BottomSheet.md">

## Usage

<TabPreview>

<template #Preview>
<Preview name="drawer" variant="default"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Button
import com.drna.shadcn.compose.component.Drawer
import com.drna.shadcn.compose.component.DrawerAction
import com.drna.shadcn.compose.component.DrawerCancel
import com.drna.shadcn.compose.component.DrawerDescription
import com.drna.shadcn.compose.component.DrawerTitle

fun Example() {
    var showDialog by remember { mutableStateOf(false) }
    val sheetState = rememberModalBottomSheetState()
    val scope = rememberCoroutineScope()

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(start = 16.dp, end = 16.dp, top = 56.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Button(onClick = { showDialog = true }) {
            Text("Open Drawer")
        }

        Drawer(
            open = showDialog,
            onDismissRequest = { showDialog = false },
            sheetState = sheetState,
            title = { DrawerTitle { Text("Edit Profile") } },
            description = {
                DrawerDescription {
                    Text("Make changes to your profile here. Click save when you're done.")
                }
            },
            content = {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(vertical = 8.dp)
                ) {
                    Text(
                        text = "This is the main content area of the drawer.",
                        color = MaterialTheme.shadcnColors.foreground,
                        fontSize = 16.sp
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                    Text(
                        text = "You can place any composables here, like input fields, lists, etc.",
                        color = MaterialTheme.shadcnColors.mutedForeground,
                        fontSize = 14.sp
                    )
                }
            },
            footer = {
                DrawerCancel(onClick = {
                    scope.launch { sheetState.hide() }.invokeOnCompletion {
                        if (!sheetState.isVisible) {
                            showDialog = false
                        }
                    }
                }) {
                    Text("Cancel")
                }
                Spacer(modifier = Modifier.width(8.dp))
                DrawerAction(onClick = {
                    scope.launch { sheetState.hide() }.invokeOnCompletion {
                        if (!sheetState.isVisible) {
                            showDialog = false
                        }
                    }
                }) {
                    Text("Save changes")
                }
            }
        )
    }
}
```

</template>

</TabPreview>

</DocsPage>

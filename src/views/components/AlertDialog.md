---
title: Alert Dialog
description: A modal dialog that interrupts the user with important content and expects a response.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/AlertDialog.md">

## Usage

<TabPreview>

<template #Preview>
<Preview name="alert-dialog" variant="default" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.AlertDialog
import com.drna.shadcn.compose.component.AlertDialogAction
import com.drna.shadcn.compose.component.AlertDialogCancel
import com.drna.shadcn.compose.component.AlertDialogDescription
import com.drna.shadcn.compose.component.AlertDialogTitle
import com.drna.shadcn.compose.component.Button

@Composable
fun ExampleDialog() {
    var showDialog by remember { mutableStateOf(false) }

    Column(
        modifier = Modifier
            .fillMaxSize()
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Button(onClick = { showDialog = true }) {
            Text("Open Alert Dialog")
        }
    }

    AlertDialog(
        open = showDialog,
        onDismissRequest = { showDialog = false },
        title = { AlertDialogTitle { Text("Are you absolutely sure?") } },
        description = {
            AlertDialogDescription {
                Text("This action cannot be undone. This will permanently delete your account and remove your data from our servers.")
            }
        },
        actions = {
            AlertDialogCancel(onClick = {
                Toast.makeText(context, "Cancel clicked", Toast.LENGTH_SHORT).show()
                showDialog = false
            }) {
                Text("Cancel")
            }
            Spacer(modifier = Modifier.width(8.dp))
            AlertDialogAction(onClick = {
                Toast.makeText(context, "Continue clicked", Toast.LENGTH_SHORT).show()
                showDialog = false
            }) {
                Text("Continue")
            }
        }
    )
}
```

</template>

</TabPreview>

</DocsPage>

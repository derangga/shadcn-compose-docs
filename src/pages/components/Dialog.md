---
title: Dialog
description: A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="pages/components/Dialog.md">

## Basic Usage

<TabPreview>

<template #Preview>
<Preview name="dialog" variant="default" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.shadcn.ui.components.Button
import com.shadcn.ui.components.Dialog
import com.shadcn.ui.components.DialogAction
import com.shadcn.ui.components.DialogCancel
import com.shadcn.ui.components.DialogDescription
import com.shadcn.ui.components.DialogTitle

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
            Text("Open Dialog")
        }
    }

    Dialog(
            open = showDialog,
            onDismissRequest = { showDialog = false },
            header = {
                DialogTitle { Text("Exit application") }
                DialogDescription {
                    Text("Are you sure want to close the application")
                }
            },
            footer = {
                DialogCancel(onClick = { showDialog = false }) {
                    Text("No")
                }
                Spacer(modifier = Modifier.width(8.dp))
                DialogAction(onClick = { showDialog = false }) {
                    Text("Yes")
                }
            }
        )
}
```

</template>

</TabPreview>

## With Body Content

<TabPreview>

<template #Preview>
<Preview name="dialog" variant="with-form" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.shadcn.ui.components.Button
import com.shadcn.ui.components.Dialog
import com.shadcn.ui.components.DialogAction
import com.shadcn.ui.components.DialogCancel
import com.shadcn.ui.components.DialogDescription
import com.shadcn.ui.components.DialogTitle
import com.shadcn.ui.components.Input

@Composable
fun ExampleDialog() {
    var showDialog by remember { mutableStateOf(false) }
    var nameTxt by remember { mutableStateOf("John Doe") }
    var userTxt by remember { mutableStateOf("johndoe") }

    Column(
        modifier = Modifier
            .fillMaxSize()
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Button(onClick = { showDialog = true }) {
            Text("Open Dialog")
        }

        Dialog(
            open = showFormDialog,
            onDismissRequest = { showFormDialog = false },
            header = {
                DialogTitle { Text("Edit Profile") }
                DialogDescription {
                    Text("Make changes to your profile here. Click save when you're done.")
                }
            },
            body = {
                Text(
                    text = "Name",
                    fontWeight = FontWeight.SemiBold,
                )
                Input(
                    value = nameTxt,
                    onValueChange = { nameTxt = it },
                    placeholder = "Enter your name",
                    singleLine = true
                )
                Spacer(modifier = Modifier.height(12.dp))
                Text(
                    text = "Username",
                    fontWeight = FontWeight.SemiBold,
                )
                Input(
                    value = userTxt,
                    onValueChange = { userTxt = it },
                    placeholder = "Enter your username",
                    singleLine = true
                )
            },
            footer = {
                // Order: Cancel then Action, with spacing
                DialogCancel(onClick = { showFormDialog = false }) {
                    Text("Cancel")
                }
                Spacer(modifier = Modifier.width(8.dp))
                DialogAction(onClick = { showFormDialog = false }) {
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

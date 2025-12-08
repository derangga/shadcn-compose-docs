---
title: Dropdown Menu
description: Displays a menu to the user — such as a set of actions or functions — triggered by a button.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="pages/components/DropdownMenu.md">

## Usage

<TabPreview>

<template #Preview>
<Preview name="dropdown" variant="default" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.shadcn.ui.components.DropdownMenu
import com.shadcn.ui.components.DropdownMenuItem
import com.shadcn.ui.components.DropdownMenuSeparator

@Composable
fun Example() {
    var showDropdown by remember { mutableStateOf(false) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp)
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        DropdownMenu(
            expanded = showDropdown,
            onDismissRequest = { showDropdown = false },
            trigger = {
                Button(onClick = { showDropdown = !showDropdown }) {
                    Text("Open Menu")
                }
            }
        ) {
            DropdownMenuItem(onClick = { showDropdown = false /* Handle New Team */ }) {
                Text("New Team")
            }
            DropdownMenuItem(onClick = { showDropdown = false /* Handle Settings */ }) {
                Text("Settings")
            }
            DropdownMenuItem(onClick = { showDropdown = false /* Handle Keyboard shortcuts */ }) {
                Text("Keyboard shortcuts")
            }
            DropdownMenuSeparator()
            DropdownMenuItem(onClick = { showDropdown = false /* Handle GitHub */ }) {
                Text("GitHub")
            }
            DropdownMenuItem(onClick = { showDropdown = false /* Handle Support */ }) {
                Text("Support")
            }
            DropdownMenuItem(onClick = { }, enabled = false) {
                Text("API (Disabled)")
            }
            DropdownMenuSeparator()
            DropdownMenuItem(onClick = { showDropdown = false /* Handle Log out */ }) {
                Text("Log out")
            }
        }
    }
}
```

</template>

</TabPreview>

</DocsPage>

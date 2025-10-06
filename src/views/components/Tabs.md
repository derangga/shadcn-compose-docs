---
title: Tabs
description: A set of layered sections of content—known as tab panels—that are displayed one at a time.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Tabs.md">

## Usage

<TabPreview>

<template #Preview>
<Preview name="tabs" variant="default" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Button
import com.drna.shadcn.compose.component.ButtonSize
import com.drna.shadcn.compose.component.ButtonVariant
import com.drna.shadcn.compose.component.Input
import com.drna.shadcn.compose.component.Tabs
import com.drna.shadcn.compose.component.TabsContent

@Composable
fun Example() {
    var selectedTab by remember { mutableIntStateOf(0) }
    val tabs = listOf("Account", "Password", "Settings")

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
    ) {
        Tabs(
            selectedTabIndex = selectedTab,
            onTabSelected = { selectedTab = it },
            tabs = tabs,
            modifier = Modifier.fillMaxWidth()
        ) { tabIndex ->
            TabsContent {
                when (tabIndex) {
                    0 -> {
                        AccountTab()
                    }
                    1 -> {
                        PasswordTab()
                    }
                    2 -> {
                        SettingsTab()
                    }
                }
            }
        }
    }
}

@Composable
fun AccountTab() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
    ) {
        var nameTxt by remember { mutableStateOf("John Doe") }
        var userNameTxt by remember { mutableStateOf("johndoe") }
        Text(
            text = "Account",
            fontSize = 18.sp,
            fontWeight = FontWeight.SemiBold,
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = "Make changes to your account here. Click save when you're done.",
            fontSize = 14.sp,
            color = MaterialTheme.colors.mutedForeground
        )
        Spacer(modifier = Modifier.height(16.dp))
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
            value = userNameTxt,
            onValueChange = { userNameTxt = it },
            placeholder = "Enter your username",
            singleLine = true
        )
        Spacer(modifier = Modifier.height(12.dp))
        Button(onClick = {}) {
            Text("Save changes")
        }
    }
}

@Composable
fun PasswordTab() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
    ) {
        Text(
            text = "Password",
            fontSize = 18.sp,
            fontWeight = FontWeight.SemiBold,
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = "Change your password here. After saving, you'll be logged out.",
            fontSize = 14.sp,
            color = MaterialTheme.colors.mutedForeground
        )
    }
}

@Composable
fun SettingsTab() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
    ) {
        Text(
            text = "Settings",
            fontSize = 18.sp,
            fontWeight = FontWeight.SemiBold,
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = "Manage your account settings and preferences.",
            fontSize = 14.sp,
            color = MaterialTheme.colors.mutedForeground
        )
    }
}
```

</template>

</TabPreview>

</DocsPage>

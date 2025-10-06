---
title: Sonner
description: An opinionated toast component for Jetpack Compose.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Sonner.md">

## Configuration

To use a Sonner (snackbar) shadcn compose, you need to use `Scaffold` as a root composable component. The Sonner will be registered as global component. This is to prevent a common issue where Snackbars disappear when navigating between screens in Compose because each screen can have its own `Scaffold`. This idea was inspired by [Philipp Lackner](https://youtu.be/KFazs62lIkE?si=k88c6SstKwGdLWC6)

```kotlin
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.SnackbarResult
import com.drna.shadcn.compose.themes.ShadcnTheme
import com.drna.shadcn.compose.component.sooner.ObserveAsEvent
import com.drna.shadcn.compose.component.sooner.SonnerHost
import com.drna.shadcn.compose.component.sooner.SonnerProvider
import com.drna.shadcn.compose.component.sooner.showSonner

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            ShadcnTheme {
                val scope = rememberCoroutineScope()
                val snackbarHostState = remember { SnackbarHostState() }
                ObserveAsEvent(SonnerProvider.events) { event ->
                    scope.launch {
                        snackbarHostState.currentSnackbarData?.dismiss()
                        val result = snackbarHostState.showSonner(event)

                        if (result == SnackbarResult.ActionPerformed) {
                            event.action?.execute()
                        }
                    }
                }
                Scaffold(
                    modifier = Modifier.fillMaxSize(),
                    snackbarHost = {
                        SonnerHost(hostState = snackbarHostState)
                    },
                ) { ip ->
                    // Your entire app navigation or root layout
                    AppNavigation(modifier = Modifier.padding(ip))
                }
            }
        }
    }
}
```

## Basic Usage

<TabPreview>

<template #Preview>
<Preview name="sonner" variant="default" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Button
import com.drna.shadcn.compose.component.sooner.SonnerAction
import com.drna.shadcn.compose.component.sooner.SonnerProvider

@Composable
fun ExamplePage() {
    var showDropdown by remember { mutableStateOf(false) }
    val scope = rememberCoroutineScope()

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(start = 16.dp, end = 16.dp)
            .verticalScroll(rememberScrollState()),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Button(
            onClick = {
                scope.launch {
                    SonnerProvider.showMessage(
                        "This is a snackbar",
                        "Something important just happened."
                    )
                }
            }
        ) {
            Text("Open snackbar")
        }
    }
}
```

</template>

</TabPreview>

## Destructive

<TabPreview>

<template #Preview>
<Preview name="sonner" variant="destructive" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Button
import com.drna.shadcn.compose.component.sooner.SonnerAction
import com.drna.shadcn.compose.component.sooner.SonnerProvider

@Composable
fun ExamplePage() {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(start = 16.dp, end = 16.dp)
            .verticalScroll(rememberScrollState()),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Button(
            onClick = {
                scope.launch {
                    SonnerProvider.showError(
                        "This is error event",
                        "Something went wrong with your request",
                        withDismissAction = true,
                    )
                }
            }
        ) {
            Text("Open snackbar")
        }
    }
}
```

</template>

</TabPreview>

## With Action

<TabPreview>

<template #Preview>
<Preview name="sonner" variant="with-action" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Button
import com.drna.shadcn.compose.component.sooner.SonnerAction
import com.drna.shadcn.compose.component.sooner.SonnerProvider

@Composable
fun ExamplePage() {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(start = 16.dp, end = 16.dp)
            .verticalScroll(rememberScrollState()),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Button(
            onClick = {
                scope.launch {
                    SonnerProvider.showMessage(
                        "This is a snackbar",
                        "Something important just happened.",
                        action = SonnerAction("Action") {
                            Toast.makeText(context, "Action clicked", Toast.LENGTH_SHORT).show()
                        }
                    )
                }
            }
        ) {
            Text("Open snackbar with action")
        }
    }
}
```

</template>

</TabPreview>

</DocsPage>

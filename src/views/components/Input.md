---
title: Input
description: Displays a form input field or a component that looks like an input field.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Input.md">

## Basic Usage

<TabPreview>

<template #Preview>
<Preview name="input" variant="default"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Input

@Composable
fun Example() {
    var nameTxt by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
    ) {
        Input(
            value = nameTxt,
            onValueChange = { nameTxt = it },
            placeholder = "Enter your name",
        )
    }
}
```

</template>

</TabPreview>

## With Leading Icon

<TabPreview>

<template #Preview>
<Preview name="input" variant="with-leading-and-support-text"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Input
import com.drna.shadcn.compose.component.InputVariant

@Composable
fun Example() {
    var email by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
    ) {
        Input(
            value = email,
            onValueChange = { email = it },
            placeholder = "Enter your email",
            leadingIcon = { Icon(Icons.Default.Email, contentDescription = "Email icon") },
            variant = InputVariant.Outlined,
            supportingText = { Text("This is a helpful supporting text.") }
        )
    }
}
```

</template>

</TabPreview>

## With Visual Transformation

<TabPreview>

<template #Preview>
<Preview name="input" variant="visual-transformation"/>
</template>

<template #Code>

```kotlin
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import com.drna.shadcn.compose.component.Input

@Composable
fun Example() {
    var password by remember { mutableStateOf("") }
    var passwordVisible by remember { mutableStateOf(false) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
    ) {
        Input(
            value = password,
            onValueChange = { password = it },
            placeholder = "Password",
            visualTransformation = if (passwordVisible) VisualTransformation.None else PasswordVisualTransformation(),
            keyboardOptions = KeyboardOptions(
                keyboardType = KeyboardType.Password,
                imeAction = ImeAction.Done
            ),
            keyboardActions = KeyboardActions(onDone = {
                // Handle done action, e.g., login
                println("Password entered: $password")
            }),
            trailingIcon = {
                val image = if (passwordVisible)
                    Icons.Filled.Visibility
                else Icons.Filled.VisibilityOff
                Box(
                    modifier = Modifier.clickable { passwordVisible = !passwordVisible }
                ) {
                    Icon(imageVector = image, contentDescription = if (passwordVisible) "Hide password" else "Show password")
                }
            }
        )
    }
}
```

</template>

</TabPreview>

## Underline

<TabPreview>

<template #Preview>
<Preview name="input" variant="underline"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Input
import com.drna.shadcn.compose.component.InputVariant

@Composable
fun Example() {
    var multiLineText by remember {
        mutableStateOf("This is a multi-line text field example.\nIt can expand to show more content.")
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
    ) {
        Input(
            value = multiLineText,
            onValueChange = { multiLineText = it },
            placeholder = "Enter multi-line text",
            singleLine = false,
            maxLines = 5,
            variant = InputVariant.Underlined,
            keyboardOptions = KeyboardOptions(imeAction = ImeAction.Default)
        )
    }
}
```

</template>

</TabPreview>

## Disabled

<TabPreview>

<template #Preview>
<Preview name="input" variant="disabled"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Input

@Composable
fun Example() {
    var disabledText by remember { mutableStateOf("Disabled input") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
    ) {
        Input(
            value = disabledText,
            onValueChange = { },
            enabled = false
        )
    }
}
```

</template>

</TabPreview>

## Read-only

<TabPreview>

<template #Preview>
<Preview name="input" variant="read-only"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Input

@Composable
fun Example() {
    var readOnly by remember { mutableStateOf("Read-only input") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
    ) {
        Input(
            value = readOnly,
            onValueChange = { },
            readOnly = true
        )
    }
}
```

</template>

</TabPreview>

## With Error

<TabPreview>

<template #Preview>
<Preview name="input" variant="with-error"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Input

@Composable
fun Example() {
    var text by remember { mutableStateOf("Input with error") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp),
    ) {
        Input(
            value = text,
            onValueChange = { text = it },
            isError = true,
            supportingText = { Text("Invalid input", color = MaterialTheme.colors.destructive) }
        )
    }
}
```

</template>

</TabPreview>

</DocsPage>

---
title: Theming
description: Using Modifier and color utilities for theming.
---

<DocsPage
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/docs/Theming.md">

## Color

Shadcn Compose provides a ShadcnColors class that manages the color scheme configuration.
To customize the theme colors, simply override the ShadcnColors class and assign it to your ShadcnTheme instance.

<Steps>

#### Create custom color class

```kotlin
object ShadcnLightColors : ShadcnColors {
    override val background: Color = Color(0xFFF7F3F9)
    override val foreground: Color = Color(0xFF374151)
    override val card: Color = Color(0xFFFFFFFF)
    override val cardForeground: Color = Color(0xFF374151)
    override val popover: Color = Color(0xFFFFFFFF)
    override val popoverForeground: Color = Color(0xFF374151)
    override val primary: Color = Color(0xFFA78BFA)
    override val primaryForeground: Color = Color(0xFFFFFFFF)
    override val secondary: Color = Color(0xFFE9D8FD)
    override val secondaryForeground: Color = Color(0xFF4B5563)
    override val muted: Color = Color(0xFFF3E8FF)
    override val mutedForeground: Color = Color(0xFF6B7280)
    override val accent: Color = Color(0xFFF3E5F5)
    override val accentForeground: Color = Color(0xFF374151)
    override val destructive: Color = Color(0xFFFCA5A5)
    override val destructiveForeground: Color = Color(0xFFFFFFFF)
    override val border: Color = Color(0xFFE9D8FD)
    override val input: Color = Color(0xFFE9D8FD)
    override val ring: Color = Color(0xFFA78BFA)
    override val chart1: Color = Color.Unspecified
    override val chart2: Color = Color.Unspecified
    override val chart3: Color = Color.Unspecified
    override val chart4: Color = Color.Unspecified
    override val chart5: Color = Color.Unspecified
    override val sidebar: Color = Color(0xFFE9D8FD)
    override val sidebarForeground: Color = Color(0xFF374151)
    override val sidebarPrimary: Color = Color(0xFFA78BFA)
    override val sidebarPrimaryForeground: Color = Color(0xFFFFFFFF)
    override val sidebarAccent: Color = Color(0xFFF3E5F5)
    override val sidebarAccentForeground: Color = Color(0xFF374151)
    override val sidebarBorder: Color = Color(0xFFE9D8FD)
    override val sidebarRing: Color = Color(0xFFA78BFA)
    override val snackbar = Color(0xFFF7F3F9)
}
```

#### Use the custom color scheme

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            ShadcnTheme(
                shadcnLightColors = ShadcnLightColors,
            ) {
                // rest of your screen navigation or components
            }
        }
    }
}
```

</Steps>

## Radius

Shadcn Compose provides the ShadcnRadius class to define corner radius configurations used across components.
To adjust the radius values, override the ShadcnRadius class and assign it to your ShadcnTheme.

<Steps>

#### Create custom radius class

```kotlin
object Radius : ShadcnRadius {
    override val radius: Dp = 4.dp
    override val sm: Dp = max(0.dp, radius - 4.dp)
    override val md: Dp = max(0.dp, radius - 2.dp)
    override val lg: Dp = radius
    override val xl: Dp = max(0.dp, radius + 4.dp)
    override val full: Dp = 999.dp
}
```

#### Use the custom radius

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            ShadcnTheme(
                shadcnRadius = Radius,
            ) {
                // rest of your screen navigation or components
            }
        }
    }
}
```

</Steps>

</DocsPage>


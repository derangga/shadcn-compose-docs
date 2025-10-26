---
title: Sidebar
description: A composable, themeable sidebar component.
---

<DocsPage
    :title="frontmatter.title"
    :description="frontmatter.description"
    path="views/components/Sidebar.md">

Sidebars are one of the most complex components to build. They are central to any application and often contain a lot of moving parts.

## Structure

A Sidebar component is composed of the following parts:

- `SidebarProvider` - Handles collapsible state.
- `Sidebar` - The sidebar container.
- `SidebarHeader` and SidebarFooter - Sticky at the top and bottom of the sidebar.
- `SidebarContent` - Scrollable content.
- `SidebarGroup` - Section within the SidebarContent.
- `SidebarTrigger` - Trigger for the Sidebar.

<img src="https://shadcn-compose.site/assets/components/sidebar/sidebar-structure.webp" alt="sidebar-structure"/>

## Usage

<Steps>

#### Create Page

<CodeWithFilename filename="Page.kt">

```kotlin
@Composable
fun DashboardPage(nav: NavHostController) {
    Column {
        Text(text = "Welcome to the Dashboard!")
    }
}

@Composable
fun ProjectPage(nav: NavHostController) {
    Column {
        Text(text = "Welcome to the Project!")
    }
}

@Composable
fun TaskPage(nav: NavHostController) {
    Column {
        Text(text = "Welcome to the Task!")
    }
}
```

</CodeWithFilename>

#### Create Navigation

<CodeWithFilename filename="SidebarNavigation.kt">

```kotlin
@Composable
fun SidebarNavigation(sidebarNavHost: NavHostController) {
    NavHost(
        sidebarNavHost,
        modifier = Modifier,
        startDestination = SidebarRoute.Dashboard.path,
    ) {
        composable(SidebarRoute.Dashboard.path) {
            DashboardPage(sidebarNavHost)
        }
        composable(SidebarRoute.Project.path) {
            ProjectPage(sidebarNavHost)
        }
        composable(SidebarRoute.Task.path) {
            TaskPage(sidebarNavHost)
        }
    }
}
```

</CodeWithFilename>

#### Create AppSidebar

<CodeWithFilename filename="AppSidebar.kt">

```kotlin
import com.drna.shadcn.compose.component.sidebar.SidebarContent
import com.drna.shadcn.compose.component.sidebar.SidebarGroup
import com.drna.shadcn.compose.component.sidebar.SidebarGroupContent
import com.drna.shadcn.compose.component.sidebar.SidebarGroupLabel
import com.drna.shadcn.compose.component.sidebar.SidebarLayout
import com.drna.shadcn.compose.component.sidebar.SidebarMenu
import com.drna.shadcn.compose.component.sidebar.SidebarMenuButton

@Composable
fun AppSidebar(sidebarNav: NavHostController, selectedMenu: String, onMenuClick: (String) -> Unit) {
    val menus = listOf(
        Content("Dashboard", SidebarRoute.Dashboard.path),
        Content("Projects", SidebarRoute.Project.path),
        Content("Tasks", SidebarRoute.Task.path),
    )
    SidebarContent {
        SidebarGroup {
            SidebarGroupLabel("Navigation")
            SidebarGroupContent {
                SidebarMenu {
                    menus.forEach { item ->
                        SidebarMenuButton(
                            text = item.title,
                            onClick = {
                                onMenuClick(item.title)
                                sidebarNav.navigate(item.route)
                            },
                            isActive = selectedMenu == item.title
                        )
                    }
                }
            }
        }

        Spacer(modifier = Modifier.weight(1f))
    }
}
```

</CodeWithFilename>

#### Create SidebarLayout

<CodeWithFilename filename="Layout.kt">

```kotlin
import com.drna.shadcn.compose.component.sidebar.SidebarFooter
import com.drna.shadcn.compose.component.sidebar.SidebarHeader
import com.drna.shadcn.compose.component.sidebar.SidebarLayout
import com.drna.shadcn.compose.component.sidebar.SidebarMenuButton
import com.drna.shadcn.compose.component.sidebar.SidebarProvider
import com.drna.shadcn.compose.component.sidebar.SidebarTrigger

@Composable
fun SidebarLayoutPage() {
    var selectedItem by remember { mutableStateOf("Dashboard") }
    val sidebarNav = rememberNavController()
    SidebarProvider(defaultOpen = true) { // Start with sidebar open on desktop
        SidebarLayout(
            sidebarHeader = {
                SidebarHeader {
                    Text(
                        text = "My App",
                        fontSize = 18.sp,
                        fontWeight = FontWeight.Bold,
                        color = MaterialTheme.colors.sidebarForeground
                    )
                }
            },
            sidebarContent = {
                AppSidebar(sidebarNav, selectedItem) { selectedItem = it }
            },
            sidebarFooter = {
                SidebarFooter {
                    Text(
                        text = "© 2025 Shadcn Compose",
                        fontSize = 12.sp,
                        color = MaterialTheme.colors.mutedForeground
                    )
                }
            }
        ) {
            // Main content
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .background(MaterialTheme.colors.background)
                    .padding(16.dp)
            ) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    SidebarTrigger()
                    Spacer(modifier = Modifier.width(16.dp))
                    Text(
                        text = selectedItem,
                        fontSize = 24.sp,
                        fontWeight = FontWeight.Bold,
                        color = MaterialTheme.colors.foreground
                    )
                }

                Spacer(modifier = Modifier.height(24.dp))
                SidebarNavigation(sidebarNav)
            }
        }
    }
}
```

</CodeWithFilename>

#### Result
You've created your first sidebar, you should see something like this:

<img src="https://shadcn-compose.site/assets/components/sidebar/default.gif"/>

</Steps>

</DocsPage>

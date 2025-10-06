---
title: Date Picker
description: A date picker component with range and presets.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/DatePicker.md">

## Usage

<TabPreview>

<template #Preview>
<Preview name="datepicker" variant="default" assetExtension=".gif"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.DatePicker

@Composable
fun Example() {
    var selectedDate by remember { mutableStateOf<LocalDate?>(null) }
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(top = 24.dp, start = 16.dp, end = 16.dp)
            .verticalScroll(rememberScrollState()),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        DatePicker(
            selectedDate = selectedDate,
            onDateSelected = { selectedDate = it },
            modifier = Modifier.width(280.dp),
            placeholder = "Booking date",
            leadingIcon = {
                Icon(
                    imageVector = Icons.Default.DateRange,
                    contentDescription = "Pick date",
                    tint = MaterialTheme.colors.mutedForeground,
                    modifier = Modifier.size(20.dp)
                )
            }
        )

        Text(
            text = "Selected Date: ${selectedDate?.format(DateTimeFormatter.ofPattern("MMM dd, yyyy")) ?: "None"}",
            color = MaterialTheme.colors.foreground,
            style = MaterialTheme.typography.bodyLarge
        )
    }
}
```

</template>

</TabPreview>

</DocsPage>

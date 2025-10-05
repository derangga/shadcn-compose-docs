---
title: Calendar
description: A date field component that allows users to enter and edit date.
---

<DocsPage 
    :title="frontmatter.title" 
    :description="frontmatter.description"
    path="views/components/Calendar.md">

## Basic Usage

<TabPreview>

<template #Preview>
<Preview name="calendar" variant="default"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Calendar

fun Example() {
    var selectedDate by remember { mutableStateOf<LocalDate?>(LocalDate.now()) }

    Column(
        modifier = Modifier.padding(ip)
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Calendar(
            selectedDate = selectedDate,
            onDateSelected = { date ->
                selectedDate = date
            },
        )
    }
}
```

</template>

</TabPreview>

## Past or Today

Only enable calendar selection from past or today

<TabPreview>

<template #Preview>
<Preview name="calendar" variant="past-or-today"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Calendar
import com.drna.shadcn.compose.component.DateSelectionMode

fun Example() {
    var selectedDate by remember { mutableStateOf<LocalDate?>(LocalDate.now()) }

    Column(
        modifier = Modifier.padding(ip)
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Calendar(
            selectedDate = selectedDate,
            onDateSelected = { date ->
                selectedDate = date
            },
            dateSelectionMode = DateSelectionMode.PastOrToday
        )
    }
}
```

</template>

</TabPreview>

## Future or Today

Only enable calendar selection from future or today

<TabPreview>

<template #Preview>
<Preview name="calendar" variant="future-or-today"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Calendar
import com.drna.shadcn.compose.component.DateSelectionMode

fun Example() {
    var selectedDate by remember { mutableStateOf<LocalDate?>(LocalDate.now()) }

    Column(
        modifier = Modifier.padding(ip)
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Calendar(
            selectedDate = selectedDate,
            onDateSelected = { date ->
                selectedDate = date
            },
            dateSelectionMode = DateSelectionMode.FutureOrToday
        )
    }
}
```

</template>

</TabPreview>

## Custom Styles

You can also customize the calendar color style by passing `CalendarStyle` to the `colors`

<TabPreview>

<template #Preview>
<Preview name="calendar" variant="custom"/>
</template>

<template #Code>

```kotlin
import com.drna.shadcn.compose.component.Calendar
import com.drna.shadcn.compose.component.CalendarDefaults
import com.drna.shadcn.compose.component.DateSelectionMode

fun Example() {
    var selectedDate by remember { mutableStateOf<LocalDate?>(LocalDate.now()) }

    Column(
        modifier = Modifier.padding(ip)
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        val chart3 = MaterialTheme.shadcnColors.chart3
        val chart4 = MaterialTheme.shadcnColors.chart4
        Calendar(
            selectedDate = customDate,
            onDateSelected = { date ->
                customDate = date
            },
            colors = CalendarDefaults.colors {
                copy(
                    rightIconTint = chart4,
                    leftIconTint = chart4,
                    monthText = chart4,
                    yearText = chart4,
                    weekDaysText = chart4,
                    dateCellBgStyle = dateCellBgStyle.copy(
                        selectedDate = chart3,
                        todayUnselectedBg = chart3.copy(alpha = 0.1f),
                    ),
                    dateCellTextStyle = dateCellTextStyle.copy(
                        todayUnselected = chart3,
                        currentMonthUnselected = chart3,
                        previousAndNextDateMonth = chart3.copy(alpha = 0.3f),
                    )
                )
            }
        )
    }
}
```

</template>

</TabPreview>

</DocsPage>

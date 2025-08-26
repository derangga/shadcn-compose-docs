---
title: Button
description: Displays a button or a component that looks like a button.
---

<HeaderDocs :title="frontmatter.title" :description="frontmatter.description"/>

<ComponentPreview name="ButtonDemo"  />

## Usage

```kotlin
fun greet(name: String) = println("Hello, $name!")
```

```vue
<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <Button>Button</Button>
</template>
```

## Examples

### Primary

<ComponentPreview name="ButtonDemo"  />

---
lang: en-US
title: Checkbox filter
description: Description of the page
pageHeader: true
---

### Overview
This filter allows users to choose one or more options from a range of options, and to explore and discover content using key, high-level filter types. It’s used within the filter group on the filtered landing homepage and search landing page.

### Elements
<PreviewImage :image="$withBase('/images/filter-checkbox-sample.png')" :contents="[{ x: 0, y: 2, title: 'Container border', text: 'Container border' }, { x: 0, y: 14, title: 'Container centre', text: 'Container centre' }, { x: 1, y: 32, title: 'Tick icon', text: 'Tick icon' }, { x: 2.5, y: 73.5, title: 'Group label', text: 'Group label' }, { x: 4, y: 20.5, title: 'Checkbox label', text: 'Checkbox label' }]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

@[code{2-152} html](../../.vuepress/theme/layouts/components/CheckboxFilter.vue)>

  </CodeGroupItem>
  <CodeGroupItem title="JS">

@[code{163-167} js](../../.vuepress/theme/layouts/components/CheckboxFilter.vue)>

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variants
None.

### Behaviours
This filter appears on the news homepage and topic pages to simplify content search with key filter types: Category, entity, and published year. Multiple options can be selected at once to filter content.

The user may select multiple options. Selecting an empty checkbox will cause the selected state. Selecting it again will return the checkbox to the unselected state.

### Recommendations
This filter component style is the standard approach for displaying filters on lists.

### States
<strong>Unselected:</strong> An empty, unselected checkbox.
<strong>Selected:</strong> A filled checkbox with a tick.
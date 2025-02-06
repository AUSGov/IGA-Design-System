---
lang: en-US
title: Range Slider
description: Description of the page
pageHeader: true
---

### Overview
The range slider allows users to filter content between a time range. It’s used within the filter group on the filtered landing homepage and search landing page.

### Elements
<PreviewImage :image="$withBase('/images/filter-range-slider-sample.png')" :contents="[{ x: 0, y: 55, title: 'Base slider', text: 'Base slider' }, { x: 0, y: 80, title: 'Date selection', text: 'Date selection' }, { x: 2, y: 90, title: 'Circular indicator', text: 'Circular indicator' }, { x: 12, y: 70, title: 'Tooltip', text: 'Tooltip' }]">
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
The user can select and drag either end of the slider to shorten or widen the time range for filter results. As the user drags the ends of the slider, the time range corresponds to the point in the date range.

The tooltip dynamically displays the low value on the left and high value on the right.




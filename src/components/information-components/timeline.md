---
lang: en-US
title: Timeline
description: Description of the page
pageHeader: true
---

### Overview
A timeline organises a series of information in ascending or descending order.

### Elements
<PreviewImage :image="$withBase('/images/timeline-horizontal-sample.png')" :contents="[{ x: 0, y: 35, title: 'Title', text: 'Title' }, { x: 16, y: 54, title: 'Sub-title', text: 'Sub-title' }, { x: 16, y: 10, title: 'Description', text: 'Description' }, { x: 25, y: 44, title: 'Bar', text: 'Bar' }, { x: 36, y: 44, title: 'Circular indicator', text: 'Circular indicator' }]">
<template #code>
<CodeGroup>
<CodeGroupItem title="HTML">

@[code{2-53} html](../../.vuepress/theme/layouts/components/HorizontalTimeline.vue)>

</CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

<DemoVerticalTimeline/>

### Variations
- Vertical
- Horizontal
- Centre aligned
- Horizontal / Body width
- Vertical left aligned
- Vertical right aligned

### Behaviours
None.



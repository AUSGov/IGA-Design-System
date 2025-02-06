---
lang: en-US
title: Section banner
description: Description of the page
pageHeader: true
---

### Overview
The section banner appears on the news homepage and sub sections, the filtered landing pages, the publications homepage, and the search homepage. The section banner always includes imagery on the right, while prioritising the white title and summary over primary blue. It helps to create consistency at this level of the site.

### Elements
<PreviewImage :image="$withBase('/images/section-banner-sample.png')" :contents="[{ x: 3, y: 9, title: 'Title', text: 'Title' }, { x: 3, y: 48, title: 'Summary', text: 'Summary' }, { x: 68, y: 9, title: 'Image', text: 'Image' }]">
<template #code>
<CodeGroup>
<CodeGroupItem title="HTML">

@[code{2-12} html](../../.vuepress/theme/layouts/components/SectionBanner.vue)>

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
The image in the banner can be replaced according to the editorial strategy for the site section.

### Behaviours
None.

### Recommendations
This banner type is used for website section pages like the news and publication landing pages.

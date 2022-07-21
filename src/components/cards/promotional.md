---
lang: en-US
title: Promotional card and containers
description: Description of the page
pageHeader: true
---

### Overview
This card and its turquoise container draw attention and offer a quick scan of titles of related news, related publications, and case studies.

### Elements
<PreviewImage :image="$withBase('/images/promotional-card.png')" :contents="[{ x: 8, y: 15, title: 'Image', text: 'Promotional card image' }, { x: 7, y: 60, title: 'Title', text: 'Promotional card title' }, { x: 23, y: 74, title: 'Link arrow', text: 'Promotional card link arrow' }, { x: 0, y: 0, title: 'Container: Torquoise (featured)', text: 'Promotional card container torquoise featured' }, { x: 20, y: 0, title: 'Container: Title', text: 'Promotional card container title' }]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
<div class="card promotional-card">
    <div class="card-img-top">
        <div class="img-wrap">
            <img :src="$withBase('images/cards-sample-2.png')" alt="">
        </div>
    </div>
    <div class="card-body">
        <div class="card-subtitle">2 June 2022</div>
        <a href="#" class="card-title">Already been achieved in the transition, already been achieved today<span class="ms-2" v-html="linkArrowRight"></span></a>
    </div>
</div>
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
<div>
    <ul>
        <li>Container: 4 extra small (full width)</li>
        <li>Container: 3 extra small (body width)</li>
    </ul>
</div>

### Behaviours
None.

### Recommendations
Add content strategy guidelines and editorial rules here.

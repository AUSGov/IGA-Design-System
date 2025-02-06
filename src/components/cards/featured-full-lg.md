---
lang: en-US
title: Featured card full image large
description: Description of the page
pageHeader: true
---

### Overview
These featured cards are large in order to emphasise the image and offer a balance to layouts that include a lot of text or cards that display extra copy and metadata.

### Elements
<PreviewImage :image="$withBase('/images/featured-full-lg.png')" :contents="[{ x: 0, y: 0, title: 'Image', text: 'Featured card full image lg image' }, { x: 34, y: 59, title: 'Title', text: 'Featured card full image lg title' }, { x: 34, y: 59, title: 'Summary', text: 'Featured card full image lg summary'}, { x: 17, y: 81, title: 'Link arrow', text: 'Featured card full image lg link arrow'}, { x: 3, y: 51, title: 'Date (optional)', text: 'Featured card full image lg date'}]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
<a href="#" class="card event-card" style="background-image: url('/images/cards-sample-2.png');">
    <div class="card-body">
        <h5 class="card-subtitle">14 Feb 2022</h5>
        <div class="card-title">
            <span>Dark Energy Survey Evolves or a longer title with three lines</span>
            <span v-html="linkArrowRight"></span>
        </div>
    </div>
    <div class="card-summary">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus amet, duis nisl facilisi. Cursus massa diam volutpat vitae vulputate tellus nibh. Faucibus amet, duis nisl facilisi. Cursus massa diam volutpat vitae vulputate tellus nibh.</p>
    </div>
</a>
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
<div>
    <ul>
        <li>Large</li>
        <li>Contents left aligned</li>
        <li>Contents right aligned</li>
    </ul>
</div>

### Behaviours
None.

### Recommendations
This card type is generally used to highlight publications.

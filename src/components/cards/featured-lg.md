---
lang: en-US
title: Featured card large
description: Description of the page
pageHeader: true
---

### Overview
These cards may include a primary button to distinguish the content contained within from regular articles and news. The text button may also be used to highlight content without drawing attention to a particular call to action.

### Elements
<PreviewImage :image="$withBase('/images/featured-lg.png')" :contents="[{ x: 35, y: 1, title: 'Image', text: 'Featured card lg image' }, {title: 'Video (optional)', text: 'Featured card lg video'}, { x: 30, y: 15, title: 'Title', text: 'Featured card lg title' }, { x: 30, y: 35, title: 'Summary', text: 'Featured card lg summary'}, { x: 2, y: 1, title: 'Date (optional)', text: 'Featured card lg date'}, { x: 15, y: 1, title: 'Entity', text: 'Featured card lg entity'}, { x: 18, y: 80, title: 'Primary Button', text: 'Featured card lg primary button'}, {title: 'Text Button', text: 'Featured card lg text button'} ]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
  <div class="card featured-card-inline" :class="classes">
    <div class="row g-0">
        <div class="col-4 col-lg-8">
            <img :src="$withBase('images/cards-sample.png')" alt="">
        </div>
        <div class="col-8 col-lg-4">
            <div class="card-body">
                <h4 class="card-subtitle">Feb 2022 /<span class="text-gray-500">Industry Growth Centres</span></h4>
                <h5 class="card-title">Keeping Australia’s space sector soaring</h5>
                <p class="card-text">The Australian Government is cementing Australia as a leading space nation in the region, with a range of new investments and reforms.</p>
                <div class="link-wrap">
                    <a v-if="!buttonLink" href="#" class="link-icon">Link<span v-html="linkArrowRight"></span></a>
                    <a v-else href="#" class="btn btn-primary">Read more</a>
                </div>
            </div>
        </div>
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
        <li>Container: Full width</li>
        <li>Container: Body width</li>
        <li>Contents left aligned</li>
        <li>Contents right aligned</li>
    </ul>
</div>

### Behaviours
None.

### Recommendations
These cards are used to highlight news items or important child page content on landing pages.

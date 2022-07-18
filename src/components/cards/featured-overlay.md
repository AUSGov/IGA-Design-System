---
lang: en-US
title: Featured card overlay
description: Description of the page
pageHeader: true
---

### Overview
These cards may include a primary button to distinguish the content contained within from regular articles and news. The text button may also be used to highlight content without drawing attention to a particular call to action.

### Elements
<PreviewImage :image="$withBase('/images/featured-overlay.png')" :contents="[{ x: 5, y: 5, title: 'Box overlay', text: 'Featured card overlay box overlay' }, { x: 16, y: 15, title: 'Card label / keywords', text: 'Featured card overlay card label' }, { x: 2, y: 1, title: 'Image', text: 'Featured card overlay image'}, { x: 35, y: 35, title: 'Summary', text: 'Featured card overlay summary'}, { x: 24, y: 75, title: 'Primary Button', text: 'Featured card overlay primary button'}, {title: 'Text Button', text: 'Featured card overlay text button'}]">
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
        <li>Medium</li>
        <li>Large</li>
        <li>inline</li>
        <li>Full width</li>
        <li>Body width</li>
        <li>Left aligned copy</li>
        <li>Right aligned copy</li>
    </ul>
</div>

### Behaviours
None.

### Recommendations
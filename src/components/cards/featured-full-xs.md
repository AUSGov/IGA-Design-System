---
lang: en-US
title: Featured card full image extra small
description: Description of the page
pageHeader: true
---

### Overview
This card may be used to feature multiple related news articles, related publications, and case studies, while hiding the summary to give a more visual treatment to the page pattern.

### Elements
<PreviewImage :image="$withBase('/images/featured-full-xs.png')" :contents="[{ x: 16, y: 61, title: 'Title', text: 'Featured card xs title' }, { x: 5, y: 81, title: 'Link Arrow', text: 'Featured card xs link arrow' }, { x: 34, y: 59, title: 'Date', text: 'Featured card xs date'}, { x: 60, y: 61, title: 'Summary hover text', text: 'Featured card xs summary text when hovered'}]">
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
        <li>Container: 4 extra small (full width)</li>
        <li>Container: 3 extra small (body width)</li>
    </ul>
</div>

### Behaviours
On desktop, the summary appears on hover as a coloured overlay, moving from the bottom to the top of the card. Selecting the summary triggers the link to the content. The summary does not appear on mobile.

### Recommendations
These cards are generally used to link to publications.
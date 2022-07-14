---
lang: en-US
title: News article, case study, event banner
description: Description of the page
pageHeader: true
---

### Overview
This banner acts in an editorial way and is used on content-rich pages: News articles, case studies, and events.

### Elements
<PreviewImage :image="$withBase('/images/news-case-event-banner-sample.png')" :contents="[{ x: -2, y: 0, title: 'Title', text: 'Title' }, { x: -2, y: 17, title: 'Summary', text: 'Summary' }, { x: -2, y: 33, title: 'Date (optional)', text: 'Date (optional)' }, { title: 'Time (optional)', text: 'Time (optional)' }, { title: 'Event format (optional)', text: 'Event format (optional)' }, { x: 8, y: 33, title: 'Read time (optional)', text: 'Read time (optional)' }, { title: 'Entity (optional)', text: 'Entity (optional)' }, { x: -2, y: 28, title: 'Link (optional)', text: 'Link (optional)' }, { x: -2, y: 39, title: 'Content tags (optional)', text: 'Content tags (optional)' }, { x: -2, y: 50, title: 'Full-width image (optional)', text: 'Full-width image (optional)' }]">
<template #code>
<CodeGroup>
<CodeGroupItem title="HTML">

```html
  <div class="news-article">
    <div class="container">
      <div class="news-title">
        <h1 class="text-primary">Dark Energy Survey Evolves or a longer title with three</h1>
        <p class="body-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue neque tellus, pellentesque et scelerisque. Adipiscing elit. Congue neque tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <a href="#" class="link-icon mb-3">
        Link
        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.53125 8.16634C0.858152 8.16634 0.3125 8.78195 0.3125 9.54134C0.3125 10.2375 0.771 10.8127 1.36587 10.9038L1.53125 10.9163H24.2812C24.9543 10.9163 25.5 10.3007 25.5 9.54134C25.5 8.84523 25.0415 8.26994 24.4466 8.17889L24.2812 8.16634H1.53125Z" fill="#A44D8E"/><path d="M25.143 8.56907C24.7104 8.08091 24.0333 8.03654 23.5562 8.43594L23.4195 8.56907L16.9195 15.9024C16.4435 16.4394 16.4435 17.31 16.9195 17.8469C17.3521 18.3351 18.0292 18.3795 18.5063 17.9801L18.643 17.8469L25.143 10.5136C25.619 9.97664 25.619 9.10604 25.143 8.56907Z" fill="#A44D8E"/><path d="M18.643 1.23574C18.1671 0.698765 17.3954 0.698765 16.9195 1.23574C16.4868 1.72389 16.4474 2.48777 16.8015 3.02606L16.9195 3.18028L23.4195 10.5136C23.8954 11.0506 24.6671 11.0506 25.143 10.5136C25.5757 10.0255 25.6151 9.26157 25.261 8.72329L25.143 8.56907L18.643 1.23574Z" fill="#A44D8E"/></svg>
      </a>
      <div class="body-small mb-3 text-gray-500">24 November 2021 • 2 min read</div>
      <div class="categories mb-3">
        <a href="#" class="d-inline-block p-2 text-gray-500 rounded-pill">Advanced manufacturing</a>
        <a href="#" class="d-inline-block p-2 text-gray-500 rounded-pill">Space</a>
      </div>
      <figure class="figure">
        <img class="mb-2" :src="$withBase('/images/banner-sample.png')" alt="">
        <figcaption class="figure-caption text-end">Caption Image from Getty images.</figcaption>
      </figure>
    </div>
  </div>
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
Optional elements for this banner include image, content tags, and other metadata.

### Behaviours
When an image is used, it may have a caption underneath. When the banner image is not in use, a drop shadow appears to delineate the bottom of the banner from the article body.

### Recommendations
Add content strategy guidelines and editorial rules here.

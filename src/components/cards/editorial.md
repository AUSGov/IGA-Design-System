---
lang: en-US
title: Editorial card and containers
description: Description of the page
pageHeader: true
---

### Overview
The editorial card appears on news, publications, and case studies sections of the site. Event metadata can be added to this card, and it can be used on events pages and to promote events across other site sections.

### Elements
<PreviewImage :image="$withBase('/images/editorial-card.png')" :contents="[{ x: 2, y: 13, title: 'Image (Optional)', text: 'Editorial card image' }, { x: 20, y: 0, title: 'Title', text: 'Editorial card title' }, { x: 2, y: 59, title: 'Date (Optional)', text: 'Editorial card date' }, { x: 25, y: 59, title: 'Event Format', text: 'Editorial card event format' }, { x: 6, y: 59, title: 'Divider (event/optional)', text: 'Editorial card divider' }, { x: 32, y: 72, title: 'Container: Title', text: 'Editorial card container title' },  { x: 16, y: 86, title: 'Container: Introductory summary', text: 'Editorial card container introductory summary' }, { x: 62, y: 92, title: 'Conatinaer: Link to more content', text: 'Editorial card container link' }]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
<div class="card" :class="{['card-' + variant]: variant}">
    <div class="card-img-top">
        <div class="img-wrap">
            <img :src="$withBase('images/cards-sample.png')" alt="">
        </div>
    </div>
    <div class="card-body">
        <h4 v-if="subtitle" class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span></h4>
        <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
        <p v-if="text" class="card-text">Ship of the imagination star stuff harvesting star light descended from astronomers finite but unbounded realm of the galaxies.</p>
        <a v-if="link" href="#" class="card-link link-icon">Link <span v-html="linkArrowRight"></span></a>
    </div>
    <ul v-if="list" class="list-group list-group-flush">
        <li class="list-group-item">
            <span v-html="calendar" class="icon"></span><span>Wed 3 November 2021, 9:00am</span></li>
        <li class="list-group-item">
            <span v-html="gauge" class="icon"></span>
            <span>9:00 am to 10:00 am (GMT),<br/>8:00 pm to 9:00 pm (AEDT)</span>
        </li>
        <li class="list-group-item"><span v-html="location" class="icon"></span>Location, Online</li>
        <li class="list-group-item"><span v-html="home" class="icon"></span>Entity Name</li>
    </ul>
</div>
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
<div>
    <ul>
        <li>Extra small</li>
        <li>Small</li>
        <li>Medium</li>
        <li>Inline</li>
        <li>Container: Body width</li>
        <li>Container: Full width</li>
        <li>Container: Steel blue (featured)</li>
        <li>Container: 4 extra small (full width)</li>
        <li>Container: 3 extra small (body width)</li>
        <li>Container: 3 small</li>
        <li>Container: 2 medium </li>
        <li>Container: 3 extra small</li>
        <li>Container: 2 extra small and 1 medium</li>
        <li>Container: 2 medium and 2 extra small</li>
    </ul>
</div>

### Behaviours
This steel blue featured band allows cards to stand out and gives visual interest to landing pages or long content pages. The band is a visual indicator that the cards within this section are important or featured in some way. This can be used to separate brand content from other content, though for consistency, it is always steel blue.

### Recommendations
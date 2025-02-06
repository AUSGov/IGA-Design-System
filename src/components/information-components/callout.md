---
lang: en-US
title: Callout
description: Description of the page
pageHeader: true
---

### Overview
Callouts are a visual anchor to draw attention to important content, repeat and emphasise a key message, or connect a series of information chunks throughout the surrounding content.

### Elements
<PreviewImage :image="$withBase('/images/callout-sample.png')" :contents="[{ x: 0, y: 0, title: 'Box', text: 'Box' }, { x: 0, y: 8, title: 'Heading (XS)', text: 'Heading (XS)' }, { x: 0, y: 17, title: 'Title', text: 'Title' }, { x: 0, y: 38, title: 'Body text', text: 'Body text' }]">
<template #code>
<CodeGroup>
<CodeGroupItem title="HTML">

```html
<div class="callout-textbox">
  <div class="callout-container">
    <div class="heading-extra-small-caps text-primary mb-4">
      Action 1:
    </div>
    <div class="callout-subtitle">
      Investigate the costs and benefits, and whether there is a case for reform, in the key areas impacting the lives of people living with disability
    </div>
    <div class="callout-list link-large">
      <p>The Australian Government, in consultation with the Australian Building Codes Office and the states and territories, undertake regulatory impact analysis on:</p>
      <ul>
        <li class="link-large">whether accessible car-parking ratios are adequate</li>
        <li class="link-large">where automatic doors are used, including their use in accessible toilet facilities.</li>
        <li class="link-large">the adequacy of dimensions of openings and thoroughfares in the Premises Standards and the opportunity to align with the Disability Standards for Accessible Public Transport 2002 (Transport Standards).</li>
      </ul>
      <p>This work will provide evidence for any future changes to the Premises Standards and the National Construction Code (NCC).</p>
    </div>
  </div>
</div>
```

</CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
- Body width
- Full width

### Behaviours
These callouts act as regular body copy and may include in-text hyperlinks.



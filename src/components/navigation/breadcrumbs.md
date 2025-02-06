---
lang: en-US
title: Breadcrumbs
description: Description of the page
pageHeader: true
---

### Overview
The breadcrumb navigation allows users to quickly understand their current location and move up and down the levels of the site.

### Elements
<PreviewImage :image="$withBase('/images/breadcrumbs.png')" :contents="[{ x: -1, y: 100, title: 'Home Icon', text: 'Breadcrumbs home icon' }, { x: 4, y: -100, title: 'Secondary page label', text: 'Breadcrumbs secondary page label' }, { x: 7.5, y: 100, title: 'Forward slash', text: 'Breadcrumbs forward slash' }, { x: 15, y: -100, title: 'Current page label', text: 'Breadcrumbs current page label' }]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#" v-html="home"></a></li>
        <li class="breadcrumb-item"><a href="#">Breadcrumbs</a></li>
        <li class="breadcrumb-item active" aria-current="page">Breadcrumbs</li>
    </ol>
</nav>
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
Breadcrumbs appear in the banner on standard content and bio page patterns.

### Behaviours
None.



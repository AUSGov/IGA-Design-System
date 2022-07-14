---
lang: en-US
title: Standard content banner
description: Description of the page
pageHeader: true
---

### Overview
The standard banner appears on the filtered landing page for ADC.

### Elements
<PreviewImage :image="$withBase('/images/standard-banner-sample.png')" :contents="[{ x: 3, y: 9, title: 'Title', text: 'Title' }, { x: 3, y: 48, title: 'Summary', text: 'Summary' }, { title: 'ADC entity bar', text: 'ADC entity bar' }]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

``` html
  <div class="standard-banner">
    <div class="container">
      <div class="banner-content">
        <div class="banner-title">Emissions Reduction Assurance Committee</div>
        <p class="body-lead">The Emissions Reduction Assurance Committee (ERAC) is an independent statutory committee established under the Carbon Credits (Carbon Farming Initiative) Act 2011. </p>
      </div>
    </div>
  </div>
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
None.

### Behaviours
Rather than using imagery, the standard banner emphases the page title and summary, which flow into the page content like an introductory paragraph and place the focus on the filter results.

### Recommendations
Add content strategy guidelines and editorial rules here.

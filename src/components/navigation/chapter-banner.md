---
lang: en-US
title: Chapter Banner
description: Description of the page
pageHeader: true
---

### Overview
Users can move from one section to another within a publication.

### Elements
<PreviewImage :image="$withBase('/images/chapter-banner.png')" :contents="[{ x: 18, y: 49, title: 'Chapter title', text: 'Chapter banner title' }, { x: 76.5, y: 12, title: 'Share Icon', text: 'Chapter banner share icon' }, { x: 82, y: 34, title: 'Download Icon', text: 'Chapter banner download icon' }, { x: 86, y: 6, title: 'Chevron up', text: 'Chapter banner chevron up' }, { x: 90, y: 34, title: 'Chevron down', text: 'Chapter chevron down' }, { x: 95, y: 60, title: 'Image background (Optional)', text: 'Chapter banner image backround' }]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
  <div class="chapter-banners" :class="[{'text-dark': dark}, classes]" :style="image ? 'background-image:' + image : ''">
    <div class="banner-overlay"></div>
    <div class="container">
        <div class="icons">
            <span class="share" v-html="share"></span>
            <span class="download" v-html="download"></span>
            <div class="vr bg-black"></div>
            <span class="up" :class="{'text-gray-500': dark}" v-html="chevronUp"></span>
            <span class="down" :class="{'text-gray-500': dark}" v-html="chevronDown"></span>
        </div>
        <div class="display-medium">{{ title }}</div>
    </div>
</div>
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
This component can be used with and without an image. The icons and chevrons will be black or white depending on the background colour or image.

### Behaviours
**Share:** Copies the anchor link for the chapter section.

**Download:** Opens a popup that includes the file link for the section.

**Chapter banner:** Move up and down through entire sections of the publication.

### Recommendations
This component is used in publications with chapters.

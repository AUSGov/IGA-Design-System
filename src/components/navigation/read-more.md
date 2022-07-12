---
lang: en-US
title: Read More
description: Description of the page
pageHeader: true
---

### Overview
This component sits below the main content and connects related content from various content types to the information on the page. The read more component contains non-critical links, dynamically displayed using topic and brand tags. These allow for users to continue to explore different forms of content based on their interests.

### Elements
<PreviewImage :image="$withBase('/images/read-more.png')" :contents="[{ x: 10, y: 2, title: 'Title', text: 'Read more title' }, { x: 3, y: 25, title: 'Label', text: 'Read more label' }, { x: 10, y: 40, title: 'Divider', text: 'Read more divider' }]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
<div class="read-more" :class="classes">
    <div class="heading-medium mt-3 mb-3">Read more</div>
    <ul>
        <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
        <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
        <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
    </ul>
</div>
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
None.

### Behaviours
None.

### Recommendations

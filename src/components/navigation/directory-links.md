---
lang: en-US
title: Directory Links
description: Description of the page
pageHeader: true
---

### Overview
This navigation component connects the current content with high-level secondary content.

### Elements 
<PreviewImage :image="$withBase('/images/directory-links.png')" :contents="[{ x: 19, y: 2.5, title: 'Colored background', text: 'Directory links colored background' }, { x: 19, y: 18, title: 'Title', text: 'Directory links title' }, { x: 19, y: 49, title: 'Link label', text: 'Directory links label' }, { x: 76, y: 20, title: 'Divider', text: 'Directory links divider' }]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
 <div class="directory-links bg-light-teal">
    <div class="container-small">
        <div class="heading-medium">Directory Links</div>
        <div class="row">
            <div class="col-md-6">
                <ul>
                    <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
                    <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
                    <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
                </ul>
            </div>
            <div class="col-md-6">
                <ul>
                    <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
                    <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
                    <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
                </ul>
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
        <li>Body width</li>
        <li>Full width</li>
        <li>Background (shaded / optional)</li>
    </ul>
</div>

### Behaviours
None.


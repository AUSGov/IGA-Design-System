---
lang: en-US
title: Tags filter
description: Description of the page
pageHeader: true
---

### Overview
Tags are a quick and interactive filter type that allows users to navigate to content easily.

### Elements

<PreviewImage :image="$withBase('/images/tab-filter-selected-sample.png')" :contents="[{ x: 0, y: 3, title: 'Tab container', text: 'Tab container' }, { x: 4, y: 3, title: 'Label', text: 'Label' }]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
<nav class="filters">
  <div class="title-wrapper-container"><span class="title-container border-end border-2 lead">Entities</span></div>
  <div class="nav-group">
    <ul class="nav nav-tabs heading-extra-small">
      <li class="nav-item"><a aria-current="page" href="#">Anti-Dumping Commission</a></li>
      <li class="nav-item"><a href="#">Anti-Dumping Review Panel</a></li>
      <li class="nav-item"><a href="#">Ausindustry</a></li>
      <li class="nav-item"><a href="#">Australian Industry Participation Authority</a></li>
      <li class="nav-item"><a href="#">Australian SKA Office</a></li>
      <li class="nav-item"><a href="#">Australian SKA Office</a></li>
    </ul>
  </div>
  <div class="icon-container">
    <span class="icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.51721 4.26035C9.17008 3.91322 8.60727 3.91322 8.26013 4.26035C7.94456 4.57592 7.91587 5.06975 8.17407 5.41773L8.26013 5.51743L14.7423 12L8.26013 18.4826C7.94456 18.7981 7.91587 19.292 8.17407 19.64L8.26013 19.7397C8.57571 20.0552 9.06953 20.0839 9.41752 19.8257L9.51721 19.7397L16.6283 12.6285C16.9439 12.313 16.9726 11.8191 16.7144 11.4712L16.6283 11.3715L9.51721 4.26035Z" fill="#3F3B3B"></path></svg>
    </span>
  </div>
</nav>
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
None.

### Behaviours
None.



### States
<strong>Unselected:</strong> Black 600 with outline.
<strong>Selected:</strong> Primary (Pressed) filled.

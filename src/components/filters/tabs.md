---
lang: en-US
title: Tabs filter
description: Description of the page
pageHeader: true
---

### Overview
The tab filter organises related content and allows the user to search between groups of contextually related content, and move deeper into the topic and subtopics or entities. The tab filter appears on the news homepage, the news sub-topic page patterns.

### Elements

<PreviewImage :image="$withBase('/images/tab-filter-selected-sample.png')" :contents="[{ x: 0, y: 3, title: 'Tab filter strip', text: 'Tab filter strip' }, { x: 4, y: 3, title: 'Entity label', text: 'Entity label' }, { x: 13, y: 3, title: 'Topic label', text: 'Topic label' }, { title: 'Left chevron', text: 'Left chevron' }, { x: 90, y: 3, title: 'Right chevron', text: 'Right chevron' }]">
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
On the news homepage, the tab filter includes entities and topics. On the sub-topic page patterns, the tab filter shows only topics.

### Behaviours
By default, a chevron appears on the right for users to move through available options. As the user begins scrolling, a chevron appears to the left to allow them to move backward through the tabs.

### Recommendations
Add content strategy guidelines and editorial rules here.

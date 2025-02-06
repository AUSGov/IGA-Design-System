---
lang: en-US
title: Image
description: Description of the page
pageHeader: true
---

### Overview
Images create context and additional meaning in the content. They are flexible and can  

### Elements
<PreviewImage :image="$withBase('/images/media-image-sample.png')" :contents="[{ x: 81, y: 95, title: 'Accordion button (optional)', text: 'Accordion button (optional)' }, { x: 85, y: 100, title: 'Caption (optional)', text: 'Caption (optional)' }]">
<template #code>
<CodeGroup>
<CodeGroupItem title="HTML">

```html
<div class="media">
  <div class="media-container">
    <img src="images/media-sample.png" alt="">
    <div class="media-description" data-bs-toggle="collapse" data-bs-target="#mediaDescription" aria-expanded="false" aria-controls="mediaDescription">
      <a href="#" class="fw-bold me-2">Show text version</a>
      <span class="open"><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1328 10.0254C20.1328 4.64061 15.7676 0.275391 10.3828 0.275391C4.99804 0.275391 0.632812 4.64061 0.632812 10.0254C0.632812 15.4102 4.99804 19.7754 10.3828 19.7754C15.7676 19.7754 20.1328 15.4102 20.1328 10.0254ZM5.79553 8.47378C5.57857 8.25682 5.57857 7.90507 5.79553 7.68811C5.99277 7.49087 6.3014 7.47294 6.5189 7.63432L6.58121 7.68811L10.6328 11.7395L14.6844 7.68811C14.8817 7.49087 15.1903 7.47294 15.4078 7.63432L15.4701 7.68811C15.6673 7.88534 15.6853 8.19398 15.5239 8.41147L15.4701 8.47378L11.0257 12.9182C10.8284 13.1155 10.5198 13.1334 10.3023 12.972L10.24 12.9182L5.79553 8.47378ZM10.3828 18.2754C14.9392 18.2754 18.6328 14.5817 18.6328 10.0254C18.6328 5.46904 14.9392 1.77539 10.3828 1.77539C5.82646 1.77539 2.13281 5.46904 2.13281 10.0254C2.13281 14.5817 5.82646 18.2754 10.3828 18.2754Z" fill="#A44D8E"/></svg></span>
      <span class="close"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 19.5C15.1348 19.5 19.5 15.1348 19.5 9.75C19.5 4.36522 15.1348 0 9.75 0C4.36522 0 0 4.36522 0 9.75C0 15.1348 4.36522 19.5 9.75 19.5ZM5.14347 12.1232C4.93736 11.9171 4.93736 11.5829 5.14347 11.3768L9.36569 7.15458L9.42489 7.10348C9.6315 6.95018 9.92471 6.96721 10.1121 7.15458L14.3343 11.3768L14.3854 11.436C14.5387 11.6426 14.5217 11.9358 14.3343 12.1232L14.2751 12.1743C14.0685 12.3276 13.7753 12.3106 13.5879 12.1232L9.73889 8.27441L5.88986 12.1232L5.83067 12.1743C5.62405 12.3276 5.33084 12.3106 5.14347 12.1232Z" fill="#A44D8E"/></svg></span>
    </div>
    <div id="mediaDescription" class="accordion-collapse collapse">
      <div class="description-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit malesuada viverra est magna sapien iaculis. Vitae arcu id dignissim enim eget viverra. Integer cras pharetra egestas tempus et volutpat, blandit. Arcu tristique dolor at donec tempor in et dictum vitae. Consectetur ipsum aliquet maecenas elit rhoncus. Cursus vitae duis volutpat condimentum at dignissim rhoncus ut ac. Mauris lobortis lacus tellus risus amet. Vel aliquet bibendum a leo lobortis vulputate. Sit quis quis egestas est amet urna, enim enim.</p>
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
- Body width
- Centred
- Inline
- Lightbox

### Behaviours
Images can be stacked in 2 or 3 columns. The accordion buttons for “Show image text” reveals further information about the image. When selected, the image opens in a lightbox.



### States
Selected: Opens lightbox

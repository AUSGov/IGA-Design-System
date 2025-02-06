---
lang: en-US
title: Video
description: Description of the page
pageHeader: true
---

### Overview
Videos allow for a richer content experience and add an element of accessibility for users who prefer to consume information through rich media.

### Elements
<PreviewImage :image="$withBase('/images/media-video-sample.png')" :contents="[{ x: 40, y: 35, title: 'Play button', text: 'Play button' }, { x: 82, y: 77, title: 'Accordion button (optional)', text: 'Accordion button (optional)' }, { x: 30, y: 82, title: 'Transcript (optional)', text: 'Transcript (optional)' }]">
<template #code>
<CodeGroup>
<CodeGroupItem title="HTML">

```html
<div class="media">
  <div class="media-container">
    <div class="video-player">
      <div class="video">
        <iframe src="https://www.youtube.com/embed/8chx9Enq2po" frameborder="0" allow="autoplay"></iframe>
      </div>
      <div class="play-button">
        <span><svg width="107" height="107" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M98.082 52.3161C98.082 76.2907 78.6204 95.7259 54.6133 95.7259C30.6062 95.7259 11.1445 76.2907 11.1445 52.3161C11.1445 28.3415 30.6062 8.90625 54.6133 8.90625C78.6204 8.90625 98.082 28.3415 98.082 52.3161ZM41.5273 33.8075L41.5273 72.4736C41.5273 73.8916 43.0842 74.7604 44.2934 74.0172L75.7522 54.6842C76.9039 53.9764 76.9039 52.3047 75.7522 51.597L44.2934 32.2639C43.0842 31.5208 41.5273 32.3896 41.5273 33.8075ZM54.6133 14.332C75.6195 14.332 92.6484 31.3379 92.6484 52.3156C92.6484 73.2934 75.6195 90.2993 54.6133 90.2993C33.607 90.2993 16.5781 73.2934 16.5781 52.3156C16.5781 31.3379 33.607 14.332 54.6133 14.332Z" fill="white"></path></svg></span>
      </div>
    </div>
    <div class="media-description" data-bs-toggle="collapse" data-bs-target="#mediaDescription" aria-expanded="false" aria-controls="mediaDescription">
      <a href="#" class="fw-bold me-2">Show Transcript</a>
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
Videos are body width, excluding the homepage video banner and gallery.

### Behaviours
The video can be played and paused by the user. The accordion buttons for “Show transcript” reveals further information about the video. When selected, the video opens in a lightbox.



### States
Selected: Opens lightbox


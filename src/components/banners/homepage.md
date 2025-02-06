---
lang: en-US
title: Homepage banner
description: Description of the page
pageHeader: true
---

### Overview
The homepage banner is bespoke and may include a carousel of images and looping video or just a looping video.  

### Elements
<PreviewImage :image="$withBase('/images/homepage-banner-carousel-sample.png')" :contents="[{ x: 0, y: 0, title: 'Full image (optional)', text: 'Full image (optional)' }, { x: 0, y: 8, title: 'Video', text: 'Video' }, { x: 3, y: 55, title: 'Title (optional)', text: 'Title (optional)' }, { title: 'Link (optional)', text: 'Link (optional)' }, { x: 16, y: 82, title: 'Indicator dots (optional)', text: 'Indicator dots (optional)' }, { x: 12, y: 82, title: 'Left chevron (optional)', text: 'Left chevron (optional)' }, { x: 27, y: 82, title: 'Right chevron (optional)', text: 'Right chevron (optional)' }, { x: 3, y: 82, title: 'Video controls (play/pause buttons)', text: 'Video controls (play/pause buttons)' }]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

@[code{2-46} html](../../.vuepress/theme/layouts/components/Carousel.vue)>

  </CodeGroupItem>
  <CodeGroupItem title="JS">

```js
    const $carousel = $('.carousel')
    $carousel.each(function () {
      const $this = $(this)
      const $splide = $this.find('.splide')
      const carousel = new Splide($splide[0], {
        type: 'loop',
        gap: 0,
        pagination: true,
        arrows: false,
        padding: 0,
        updateOnMove: true,
        autoplay: true,
        video: {
          loop: true,
          hideControls: true,
          disableOverlayUI: true,
          playerOptions: {
            // youtube: {},
            // vimeo: {},
          },
        },
      })
      carousel.mount({ Video })

      const { Autoplay } = carousel.Components
      const $play = $this.find('.carousel-controls .play')
      $play.click(function (e) {
        e.stopPropagation()
        Autoplay.play()
      })
      const $pause = $this.find('.carousel-controls .pause')
      $pause.click(function (e) {
        e.stopPropagation()
        Autoplay.pause()
      })

      const $prev = $this.find('.carousel-controls .prev')
      $prev.click(function (e) {
        e.stopPropagation()
        carousel.go('<')
      })
      const $next = $this.find('.carousel-controls .next')
      $next.click(function (e) {
        e.stopPropagation()
        carousel.go('>')
      })
    })
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
Carousel and video.

### Behaviours
<strong>Carousel:</strong> Every 3 seconds, the banner automatically slides from right to left and the related indicator dot activates. Selecting the controls will move forward and backward through the banner.
<strong>Video:</strong> The video automatically plays on a loop. A button overtop allows the video to be manually paused and played.

### Recommendations
The banner type should only be used on the home page.

### States
<strong>Indicator dot (default):</strong> Black 400
<strong>Indicator dot (active):</strong> White and outlined
<strong>Play/pause</strong>

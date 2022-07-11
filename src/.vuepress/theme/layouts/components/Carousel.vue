<template>
  <div class="carousel">
    <div class="splide">
      <div class="splide__track">
        <div class="splide__list">
          <div class="splide__slide" data-splide-youtube="https://www.youtube.com/watch?v=8chx9Enq2po">
            <div class="img-outer">
              <div class="img-wrap">
                <img src="../../../public/images/carousel-sample.png" class="d-block w-100" alt="">
              </div>
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h2>Supporting economic growth and job creation for all Australians</h2>
            </div>
          </div>
          <div class="splide__slide">
            <div class="img-outer">
              <div class="img-wrap">
                <img src="../../../public/images/carousel-sample.png" class="d-block w-100" alt="">
              </div>
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h2>Supporting economic growth and job creation for all Australians</h2>
            </div>
          </div>
          <div class="splide__slide">
            <div class="img-outer">
              <div class="img-wrap">
                <img src="../../../public/images/carousel-sample.png" class="d-block w-100" alt="">
              </div>
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h2>Supporting economic growth and job creation for all Australians</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-controls">
        <div class="icon play" v-html="play"></div>
        <div class="icon pause" v-html="pause"></div>
        <div class="icon prev" v-html="chevronBack"></div>
        <div class="splide__pagination"></div>
        <div class="icon next" v-html="chevronForward"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { onMounted } from 'vue'
  import Splide from '@splidejs/splide'
  import { Video } from '@splidejs/splide-extension-video'
  import '@splidejs/splide/dist/css/splide.min.css'
  import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css'

  import chevronBack from '../../../public/icons/chevron-back.svg?raw'
  import chevronForward from '../../../public/icons/chevron-forward.svg?raw'
  import play from '../../../public/icons/video-play-sm.svg?raw'
  import pause from '../../../public/icons/video-pause.svg?raw'

  onMounted(() => {
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
  })
</script>
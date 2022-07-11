<template>
  <div class="gallery" :class="classes">
    <div class="splide splide-gallery-main">
      <div class="splide__track">
        <div class="splide__list">
          <div class="splide__slide" data-splide-youtube="https://www.youtube.com/watch?v=8chx9Enq2po">
            <div class="img-outer">
              <div class="img-wrap">
                <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
              </div>
            </div>
            <div class="play-button">
              <span v-html="videoPlay"></span>
            </div>
          </div>
          <div class="splide__slide" data-splide-vimeo="https://vimeo.com/250219970">
            <div class="img-outer">
              <div class="img-wrap">
                <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
              </div>
            </div>
            <div class="play-button">
              <span v-html="videoPlay"></span>
            </div>
          </div>
          <div class="splide__slide">
            <div class="img-outer">
              <div class="img-wrap">
                <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
              </div>
            </div>
          </div>
          <div class="splide__slide">
            <div class="img-outer">
              <div class="img-wrap">
                <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
              </div>
            </div>
          </div>
          <div class="splide__slide">
            <div class="img-outer">
              <div class="img-wrap">
                <img src="https://swiperjs.com/demos/images/nature-5.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev" v-html="chevronForward"></button>
        <button class="splide__arrow splide__arrow--next" v-html="chevronForward"></button>
      </div>
    </div>
    <div class="gallery-footer">
      <div class="splide splide-gallery-thumbnail">
        <div class="splide__track">
          <div class="splide__list">
            <div class="splide__slide">
              <div class="img-outer">
                <div class="img-wrap">
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                </div>
              </div>
              <div class="play-button">
                <span v-html="videoPlay"></span>
              </div>
            </div>
            <div class="splide__slide">
              <div class="img-outer">
                <div class="img-wrap">
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                </div>
              </div>
              <div class="play-button">
                <span v-html="videoPlay"></span>
              </div>
            </div>
            <div class="splide__slide">
              <div class="img-outer">
                <div class="img-wrap">
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
                </div>
              </div>
            </div>
            <div class="splide__slide">
              <div class="img-outer">
                <div class="img-wrap">
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                </div>
              </div>
            </div>
            <div class="splide__slide">
              <div class="img-outer">
                <div class="img-wrap">
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev" v-html="chevronForward"></button>
          <button class="splide__arrow splide__arrow--next" v-html="chevronForward"></button>
        </div>
      </div>
      <figcaption class="figure-caption text-end mb-2">Caption Image from Getty images.</figcaption>
      <div class="gallery-description" data-bs-toggle="collapse" data-bs-target="#galleryDescription" aria-expanded="false" aria-controls="galleryDescription">
        <a href="#" class="fw-bold me-2">Show transcript</a>
        <span class="open" v-html="circleChevronDown"></span>
        <span class="close" v-html="circleChevronDownFilled"></span>
      </div>
      <div id="galleryDescription" class="accordion-collapse collapse">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit malesuada viverra est magna sapien iaculis. Vitae arcu id dignissim enim eget viverra. Integer cras pharetra egestas tempus et volutpat, blandit. Arcu tristique dolor at donec tempor in et dictum vitae. Consectetur ipsum aliquet maecenas elit rhoncus. Cursus vitae duis volutpat condimentum at dignissim rhoncus ut ac. Mauris lobortis lacus tellus risus amet. Vel aliquet bibendum a leo lobortis vulputate. Sit quis quis egestas est amet urna, enim enim.</p>
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

  import circleChevronDown from '../../../public/icons/circle-chevron-down.svg?raw'
  import circleChevronDownFilled from '../../../public/icons/circle-chevron-down-filled.svg?raw'
  import chevronForward from '../../../public/icons/chevron-forward.svg?raw'
  import videoPlay from '../../../public/icons/video-play.svg?raw'

  const props = defineProps({
    classes: {
      type: String,
      default: ''
    }
  })

  onMounted(() => {
    const $galleries = $('.gallery')
    $galleries.each(function () {
      const $this = $(this)
      const bodyWidth = $this.hasClass('body-width')
      let mainBreakpoint = null
      let mainPadding = 0
      if (!bodyWidth) {
        mainPadding = 150
        mainBreakpoint = {
          576: {
            padding: 25,
          },
          768: {
            padding: 80,
          },
          992: {
            padding: 100,
          }
        }
      }
      const $main = $this.find('.splide-gallery-main')
      const main = new Splide($main[0], {
        type: 'loop',
        gap: 0,
        pagination: false,
        arrows: true,
        padding: mainPadding,
        updateOnMove: true,
        breakpoints: mainBreakpoint,
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
      const $thumbnail = $this.find('.splide-gallery-thumbnail')
      const thumbnail = new Splide($thumbnail[0], {
        type: 'loop',
        gap: 16,
        perPage: 6,
        rewind: true,
        pagination: false,
        isNavigation: true,
        focus: true,
        updateOnMove: true,
        breakpoints: {
          576: {
            gap: 4,
          },
          992: {
            gap: 8,
          }
        }
      })
      main.sync(thumbnail)
      main.mount({ Video })
      thumbnail.mount()
    })
  })
</script>

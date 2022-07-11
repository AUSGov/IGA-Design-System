<template>
  <div class="media">
    <div class="media-container">
      <img v-if="image" :src="$withBase('images/media-sample.png')" alt="">
      <div v-else class="video-player">
        <div class="video">
          <iframe src="https://www.youtube.com/embed/8chx9Enq2po" frameborder="0" allow="autoplay"></iframe>
<!--          <iframe src="https://player.vimeo.com/video/250219970?h=6fce725266" frameborder="0" allow="autoplay;"></iframe>-->
        </div>
        <div class="play-button">
          <span v-html="videoPlay"></span>
        </div>
      </div>
      <div class="media-description" data-bs-toggle="collapse" data-bs-target="#mediaDescription" aria-expanded="false" aria-controls="mediaDescription">
        <a href="#" class="fw-bold me-2">{{ image ? 'Show text version' : 'Show Transcript' }}</a>
        <span class="open" v-html="circleChevronDown"></span>
        <span class="close" v-html="circleChevronDownFilled"></span>
      </div>
      <div id="mediaDescription" class="accordion-collapse collapse">
        <div class="description-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit malesuada viverra est magna sapien iaculis. Vitae arcu id dignissim enim eget viverra. Integer cras pharetra egestas tempus et volutpat, blandit. Arcu tristique dolor at donec tempor in et dictum vitae. Consectetur ipsum aliquet maecenas elit rhoncus. Cursus vitae duis volutpat condimentum at dignissim rhoncus ut ac. Mauris lobortis lacus tellus risus amet. Vel aliquet bibendum a leo lobortis vulputate. Sit quis quis egestas est amet urna, enim enim.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { onMounted, ref } from 'vue'
  import Plyr from 'plyr'
  import 'plyr/dist/plyr.css'
  import circleChevronDown from '../../../public/icons/circle-chevron-down.svg?raw'
  import circleChevronDownFilled from '../../../public/icons/circle-chevron-down-filled.svg?raw'
  import videoPlay from '../../../public/icons/video-play.svg?raw'

  const image = ref(false)

  const props = defineProps({
    descriptionClasses: {
      type: String,
      default: null
    }
  })

  onMounted(() => {
    const players = $('.video-player .video')
    players.each(function () {
      const $this = $(this)
      const player = new Plyr($this, {
        // debug: true,
        loop: { active: true },
        autoplay: false,
        settings: [],
        controls: [],
        clickToPlay: true,
        hideControls: true,
        fullscreen: {
          enabled: false
        },
        vimeo: {
          controls: false,
          quality: '4K',
          responsive: true
        },
        youtube: {
          // playlist: id,
          controls: 0,
          quality: '4K',
          responsive: true
        }
      })
      const playButton = $this.next('.play-button')
      playButton.click(function () {
        if (player.playing) {
          player.pause()
        } else {
          player.play()
        }
      })
    })
  })
</script>
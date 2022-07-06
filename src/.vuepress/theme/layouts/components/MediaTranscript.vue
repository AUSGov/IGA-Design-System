<template>
  <div class="media">
    <div class="media-container">
      <img :src="$withBase('images/media-sample.png')" alt="">
      <div class="media-description" data-bs-toggle="collapse" data-bs-target="#mediaDescription" aria-expanded="false" aria-controls="mediaDescription">
        <a href="#" class="fw-bold me-2">Show Transcript</a>
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
  import circleChevronDown from '../../../public/icons/circle-chevron-down.svg?raw'
  import circleChevronDownFilled from '../../../public/icons/circle-chevron-down-filled.svg?raw'

  const props = defineProps({
    descriptionClasses: {
      type: String,
      default: null
    }
  })
</script>
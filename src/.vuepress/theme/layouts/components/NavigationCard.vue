<template>
  <div class="navigation-card" :class="{['navigation-card--' + variant]: variant, [classes]: classes}">
    <div class="navigation-card-content">
      <div v-if="image" class="img-wrap">
        <img :src="$withBase('images/cards-sample.png')" alt="">
      </div>
      <div class="navigation-card-body">
        <div class="navigation-card-title">Dark Energy Survey Evolves or a longer title with three of more lines more line</div>
        <p v-if="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#" class="link-icon">Link<span v-html="linkArrowRight"></span></a>
      </div>
    </div>
  </div>
</template>

<script>
  import linkArrowRight from '../../../public/icons/link-arrow-right.svg?raw'

  export default {
    props: {
      variant: {
        type: String,
        default: null
      },
      classes: {
        type: String,
        default: null
      },
      image: {
        type: Boolean,
        default: true,
      },
      text: {
        type: Boolean,
        default: true,
      },
    },
    data () {
      return {
        linkArrowRight,
      }
    }
  }
</script>
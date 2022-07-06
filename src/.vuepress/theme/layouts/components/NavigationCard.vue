<template>
  <div class="navigation-card" :class="{['navigation-card--' + variant]: variant, [classes]: classes}">
    <div class="navigation-card-content">
      <div v-if="image" class="img-wrap">
        <img :src="$withBase('images/cards-sample.png')" alt="">
      </div>
      <div class="navigation-card-body">
        <div class="navigation-card-title">{{ title }}</div>
        <p v-if="text">{{ content }}</p>
        <a v-if="link" href="#" class="link-icon" :class="linkClass">Link<span v-html="linkArrowRight"></span></a>
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
      linkClass: {
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
      link: {
        type: Boolean,
        default: true,
      },
      title: {
        type: String,
        default: 'Dark Energy Survey Evolves or a longer title with three of more lines more line'
      },
      content: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }
    },
    data () {
      return {
        linkArrowRight,
      }
    }
  }
</script>
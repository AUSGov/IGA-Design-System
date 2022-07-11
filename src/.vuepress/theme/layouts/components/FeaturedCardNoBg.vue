<template>
  <div class="card featured-card featured-card--no-bg" :class="classes" :style="'background-image:' + image + ';' ">
    <div class="card-body">
      <h4 class="card-title">{{ title }}</h4>
      <h5 class="card-subtitle">{{ date }}</h5>
      <div class="line-wrap">
        <a href="#" class="link-icon">{{ content }}<span v-html="linkArrowRight"></span></a>
      </div>
    </div>
  </div>
</template>

<script>
  import linkArrowRight from '../../../public/icons/link-arrow-right.svg?raw'

  export default {
    props: {
      classes: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default: 'We drive economic growth and job creation for all Australians.'
      },
      date: {
        type: String,
        default: '2 June 2022'
      },
      content: {
        type: String,
        default: 'Already been achieved in the transition, already been achieved in the transition is achieved'
      },
      image: {
        type: String,
        default: 'url(\'/images/cards-sample-2.png\')'
      }
    },
    data () {
      return {
        linkArrowRight
      }
    }
  }
</script>
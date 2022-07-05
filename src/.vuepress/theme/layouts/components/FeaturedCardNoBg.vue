<template>
  <div class="card featured-card featured-card--no-bg" :class="classes" style="background-image: url('/images/cards-sample-2.png');">
    <div class="card-body">
      <h4 class="card-title">We drive economic growth and job creation for all Australians.</h4>
      <h5 class="card-subtitle">2 June 2022</h5>
      <div class="line-wrap">
        <a href="#" class="link-icon">Already been achieved in the transition, already been achieved in the transition is achieved <span v-html="linkArrowRight"></span></a>
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
    },
    data () {
      return {
        linkArrowRight
      }
    }
  }
</script>
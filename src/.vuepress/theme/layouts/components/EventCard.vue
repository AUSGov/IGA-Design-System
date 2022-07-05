<template>
  <a href="#" class="card event-card" style="background-image: url('/images/cards-sample-2.png');">
    <div class="card-body">
      <h5 class="card-subtitle">14 Feb 2022</h5>
      <div class="card-title">
        <span>Dark Energy Survey Evolves or a longer title with three lines</span>
        <span v-html="linkArrowRight"></span>
      </div>
    </div>
    <div class="card-summary">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus amet, duis nisl facilisi. Cursus massa diam volutpat vitae vulputate tellus nibh. Faucibus amet, duis nisl facilisi. Cursus massa diam volutpat vitae vulputate tellus nibh.</p>
    </div>
  </a>
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
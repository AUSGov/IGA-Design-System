<template>
  <div class="card card--inline">
    <div class="row">
      <div class="col-8">
        <div class="card-body">
          <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
          <p class="card-text">Ship of the imagination star stuff harvesting star light descended from astronomers finite but unbounded realm of the galaxies.</p>
          <a v-if="link" href="#" class="card-link link-icon">Link <span v-html="linkArrowRight"></span></a>
        </div>
      </div>
      <div class="col-4">
        <img :src="$withBase('images/cards-sample.png')" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import linkArrowRight from '../../../public/icons/link-arrow-right.svg?raw'

  export default {
    props: {
      link: {
        type: Boolean,
        default: true,
      }
    },
    data () {
      return {
        linkArrowRight,
      }
    }
  }
</script>
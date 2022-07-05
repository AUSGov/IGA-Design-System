<template>
  <div class="card promotional-card">
    <div class="card-img-top">
      <div class="img-wrap">
        <img :src="$withBase('images/cards-sample-2.png')" alt="">
      </div>
    </div>
    <div class="card-body">
      <div class="card-subtitle">2 June 2022</div>
      <a href="#" class="card-title">Already been achieved in the transition, already been achieved today<span class="ms-2" v-html="linkArrowRight"></span></a>
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
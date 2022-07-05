<template>
  <div class="card featured-card-inline" :class="classes">
    <div class="row g-0">
      <div class="col-4 col-lg-8">
        <img :src="$withBase('images/cards-sample.png')" alt="">
      </div>
      <div class="col-8 col-lg-4">
        <div class="card-body">
          <h4 class="card-subtitle">Feb 2022 /<span class="text-gray-500">Industry Growth Centres</span></h4>
          <h5 class="card-title">Keeping Australia’s space sector soaring</h5>
          <p class="card-text">The Australian Government is cementing Australia as a leading space nation in the region, with a range of new investments and reforms.</p>
          <div class="link-wrap">
            <a v-if="!buttonLink" href="#" class="link-icon">Link<span v-html="linkArrowRight"></span></a>
            <a v-else href="#" class="btn btn-primary">Read more</a>
          </div>
        </div>
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
      buttonLink: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        linkArrowRight
      }
    }
  }
</script>
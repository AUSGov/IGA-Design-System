<template>
  <div class="card featured-card" :class="classes" style="background-image: url('/images/cards-sample.png');">
    <div class="card-body">
      <h5 class="card-subtitle">Who We Are</h5>
      <h4 class="card-title">We drive economic growth and job creation for all Australians.</h4>
      <a href="#" class="btn btn-primary fw-semi-bold">Find out About us</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      classes: {
        type: String,
        default: null
      },
    },
    data () {
      return {
      }
    }
  }
</script>
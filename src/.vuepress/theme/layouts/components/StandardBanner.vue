<template>
  <div class="standard-banner" :class="classes">
    <div class="container">
      <div class="banner-content">
        <div class="banner-title">Emissions Reduction Assurance Committee</div>
        <p class="body-lead">The Emissions Reduction Assurance Committee (ERAC) is an independent statutory committee established under the Carbon Credits (Carbon Farming Initiative) Act 2011. </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      classes: {
        type: String,
        default: null
      }
    }
  }
</script>
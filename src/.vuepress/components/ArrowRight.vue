<template>
  <span class="d-flex c-icon" v-html="arrowRight"></span>
</template>
<script>
  import arrowRight from '../public/icons/arrow-right.svg?raw'

  export default {
    data () {
      return {
        arrowRight
      }
    }
  }
</script>
<template>
  <div class="c-big-list">
    <ul>
      <li v-for="list in lists">{{ list }}</li>
    </ul>
  </div>
</template>
<script>
  import arrowRightCurve from '../public/icons/arrow-right-curve.svg?raw'

  export default {
    props: {
      lists: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        arrowRightCurve
      }
    }
  }
</script>

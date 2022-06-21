<template>
  <div class="c-arrows-list">
    <ul>
      <li v-for="list in lists">
        <span class="icon" v-html="arrowRightCurve"></span>
        <span class="text">{{ list }}</span>
      </li>
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

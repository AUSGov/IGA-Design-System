<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Inspiring Australia</span>
      </h4>
      <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
      <a href="#" class="card-link link-icon">Link <span v-html="linkArrowRight"></span></a>
    </div>
  </div>
</template>

<script>
  import linkArrowRight from '../../../public/icons/link-arrow-right.svg?raw'

  export default {
    data () {
      return {
        linkArrowRight
      }
    }
  }
</script>
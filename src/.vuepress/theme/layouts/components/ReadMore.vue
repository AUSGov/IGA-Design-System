<template>
  <div class="read-more" :class="classes">
    <div class="container">
      <div class="heading-medium mt-3 mb-3">Read more</div>
      <ul>
        <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
        <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
        <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
      </ul>
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
      }
    },
    data () {
      return {
        linkArrowRight
      }
    }
  }
</script>
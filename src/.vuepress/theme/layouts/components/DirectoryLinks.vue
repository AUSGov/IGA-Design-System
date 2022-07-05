<template>
  <div class="directory-links bg-light-teal">
    <div class="container">
      <div class="heading-medium">Directory Links</div>
      <div class="row">
        <div class="col-md-6">
          <ul>
            <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
            <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
            <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
          </ul>
        </div>
        <div class="col-md-6">
          <ul>
            <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
            <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
            <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
          </ul>
        </div>
      </div>
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
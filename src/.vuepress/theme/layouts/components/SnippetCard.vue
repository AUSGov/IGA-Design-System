<template>
  <div class="card snippet-card">
    <div class="card-header">Featured</div>
    <div class="card-body">
      <div class="card-title">Modern Manufacturing Initiative: Manufacturing Translation Stream</div>
      <div class="card-text">This stream helps Australian manufacturers turn good ideas into commercial outcomes. This stream helps Australian manufacturers turn good ideas into commercial outcomes.
        <a href="#">Read more</a>
      </div>
    </div>
    <a href="#" class="card-featured-link">Find manufacturing translation stream guidelines on business.gov.au<span class="icon" v-html="linkArrowRight"></span></a>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><a href="#" class="link-icon link-secondary">Find out more about manufacturing<span v-html="linkArrowRight"></span></a></li>
      <li class="list-group-item"><a href="#" class="link-icon link-secondary">Find Manufacturing news<span v-html="linkArrowRight"></span></a></li>
      <li class="list-group-item"><a href="#" class="link-icon link-secondary">Find Manufacturing publications<span v-html="linkArrowRight"></span></a></li>
    </ul>
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
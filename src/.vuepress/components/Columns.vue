<template>
  <div class="c-columns">
    <div class="row">
      <div v-for="content in contents" class="col-md-6 col-lg-4">
        <h4>{{ content.title }}</h4>
        <div v-html="content.text"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      contents: {
        type: Array,
        required: true
      }
    }
  }
</script>

<template>
  <div class="c-cards">
    <div class="row">
      <div v-for="card in contents" class="col-md-6 col-lg-4 mb-2">
        <Card v-bind.props="card" :compact="compact" :external="external" />
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
      },
      compact: {
        type: Boolean,
        default: false
      },
      external: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<template>
  <div class="c-cards">
    <div class="row g-4">
      <div v-for="card in contents" class="col-md-6 col-lg-4">
        <Card :image="card.image" :title="card.title" :components-link="card.componentsLink" :link-url="card.linkUrl" :link-text="card.linkText" :compact="compact"/>
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
      }
    }
  }
</script>

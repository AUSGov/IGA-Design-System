<template>
  <div class="c-two-cards">
    <div class="row">
      <div v-for="card in contents" class="col-md-6 card-wrap">
        <div class="card-content">
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
        </div>
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

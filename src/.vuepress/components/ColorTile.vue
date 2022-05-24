<template>
  <div class="col-4 col-md-3">
    <div class="card c-color-tile">
<!--      <div class="card-img-top" :class="'bg-' + colorKey"></div>-->
      <div class="card-img-top" :style="{'background-color': hex}"></div>
      <div class="card-body">
        <div class="title">{{ name }}</div>
        <span class="hex">{{ hex }}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      colorKey: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      hex: {
        type: String,
        required: true
      }
    },
  }
</script>

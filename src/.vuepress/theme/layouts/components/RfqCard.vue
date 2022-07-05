<template>
  <div class="card rfq-card" :class="classes">
    <div v-if="image" class="card-img-top">
      <div class="img-wrap">
        <img :src="$withBase('images/cards-sample-2.png')" alt="">
      </div>
    </div>
    <div class="card-body">
      <div class="card-content">
        <div class="card-title">Want to know more?<br>Contact us.</div>
        <div class="card-subtitle">Request a customised acoustic and vibration measurement quote.</div>
      </div>
      <a href="#" class="btn" :class="buttonClass ? buttonClass : 'btn-primary'">Quotation request</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      classes: {
        type: String,
        default: null
      },
      image: {
        type: Boolean,
        default: true
      },
      buttonClass: {
        type: String,
        default: null
      }
    },
    data () {
      return {
      }
    }
  }
</script>
<template>
  <div class="content-stepper" :class="classes">
    <div v-if="button" class="stepper-content">
      <button class="btn btn-promo btn-nav-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#onThisPageMenu" aria-controls="onThisPageMenu">
        <span class="expand" v-html="add"></span>
        <span class="close" v-html="closeThick"></span>
        <span class="ms-3">Navigate</span>
      </button>
    </div>
    <div v-else class="stepper-content"></div>
    <a href="#" class="stepper-pages">
      <div class="step-name">Previous</div>
      <div class="step-label">Premises Standards Review 2021</div>
    </a>
    <a href="#" class="stepper-pages">
      <div class="step-name">Next</div>
      <div class="step-label">About the 2021 review</div>
    </a>
  </div>
</template>

<script>
  import add from '../../../public/icons/add.svg?raw'
  import closeThick from '../../../public/icons/close-thick.svg?raw'

  export default {
    props: {
      button: {
        type: Boolean,
        default: true
      },
      classes: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        add,
        closeThick
      }
    }
  }
</script>
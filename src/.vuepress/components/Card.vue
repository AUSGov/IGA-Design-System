<template>
  <div class="card c-card" :class="{'c-card--compact': compact}">
    <div v-if="!compact" class="img-wrap card-img-top">
      <img v-if="image" :src="image" :alt="title">
    </div>
    <div class="card-body">
      <p class="h4">{{ title }}</p>
      <RouterLink v-if="linkUrl" :to="linkUrl">
        <span class="me-2">{{ linkText }}</span>
        <span class="icon" v-html="arrowRight">
        </span>
      </RouterLink>
    </div>
  </div>
</template>
<script>
  import arrowRight from '../public/icons/arrow-right.svg?raw'

  export default {
    props: {
      image: {
        type: String
      },
      title: {
        type: String
      },
      linkUrl: {
        type: String
      },
      linkText: {
        type: String
      },
      compact: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        arrowRight
      }
    }
  }
</script>

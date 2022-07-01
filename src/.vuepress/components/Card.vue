<template>
  <div class="card c-card" :class="{'c-card--compact': compact}">
    <div v-if="!compact && image" class="img-wrap card-img-top">
      <img v-if="image" :src="image" :alt="title">
    </div>
    <div class="card-body">
      <p class="h4">{{ title }}</p>
      <a v-if="componentsLink && componentsLink.length > 0" :href="componentsLink" target="_blank">Components<span class="icon ms-2" v-html="linkExternal"></span></a>
      <RouterLink v-if="linkUrl" :to="linkUrl">
        <span>{{ linkText }}</span>
        <span class="icon ms-2" v-html="arrowRight">
        </span>
      </RouterLink>
    </div>
  </div>
</template>
<script>
  import arrowRight from '../public/icons/arrow-long-right.svg?raw'
  import linkExternal from '../public/icons/link-external.svg?raw'

  export default {
    props: {
      image: {
        type: String
      },
      title: {
        type: String
      },
      componentsLink: {
        type: String,
        default: null
      },
      linkUrl: {
        type: String
      },
      linkText: {
        type: String,
        default: 'Link'
      },
      compact: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        arrowRight,
        linkExternal
      }
    }
  }
</script>

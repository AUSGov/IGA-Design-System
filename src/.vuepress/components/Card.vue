<template>
  <div class="card c-card" :class="{ 'c-card--compact': compact }">
    <template v-if="!compact">
      <div v-if="image" class="card-img-top img-wrap"><img :src="image" :alt="title"></div>
      <div v-else class="card-img-top" :style="{ backgroundColor }"></div>
    </template>
    <div class="card-body">
      <p class="h4">{{ title }}</p>
      <div v-if="text" class="text">{{ text }}</div>
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
      },
      bgColor: {
        type: String,
        default: '#ECF1F8'
      },
      text: {
        type: String,
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

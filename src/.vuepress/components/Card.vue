<template>
  <div class="card c-card" :class="{ 'c-card--compact': compact }">
    <div v-if="!compact && image" class="card-img-top img-wrap"><img :src="image" :alt="title"></div>
    <div class="card-body">
      <p class="h4">{{ title }}</p>
      <div v-if="text" class="text">{{ text }}</div>
      <template v-if="linkUrl">
        <a v-if="external" :href="linkUrl" target="_blank" class="link-icon link-external">
          <span>Raw HTML</span>
          <span class="icon" v-html="linkExternal"></span>
        </a>
        <RouterLink v-else :to="linkUrl" class="link-icon link-internal">
          <span>{{ linkText }}</span>
          <span class="icon" v-html="arrowRight">
          </span>
        </RouterLink>
      </template>
      <a v-if="htmlLink" :href="htmlLink" target="_blank" class="link-icon link-external">
        <span>Raw HTML</span>
        <span class="icon" v-html="linkExternal"></span>
      </a>
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
      htmlLink: {
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
      text: {
        type: String,
      },
      external: {
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

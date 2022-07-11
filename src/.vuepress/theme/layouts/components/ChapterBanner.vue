<template>
  <div class="chapter-banners" :class="[{'text-dark': dark}, classes]" :style="image ? 'background-image: url(\'' + image : '\');'">
    <div class="banner-overlay"></div>
    <div class="container">
      <div class="icons">
        <span class="share" v-html="share"></span>
        <span class="download" v-html="download"></span>
        <div class="vr bg-black"></div>
        <span class="up" :class="{'text-gray-500': dark}" v-html="chevronUp"></span>
        <span class="down" :class="{'text-gray-500': dark}" v-html="chevronDown"></span>
      </div>
      <div class="display-medium">{{ title }}</div>
    </div>
  </div>
</template>

<script>
  import chevronDown from '../../../public/icons/chevron-down.svg?raw'
  import chevronUp from '../../../public/icons/chevron-up.svg?raw'
  import share from '../../../public/icons/share.svg?raw'
  import download from '../../../public/icons/download.svg?raw'

  export default {
    props: {
      image: {
        type: String,
        default: null
      },
      dark: {
        type: Boolean,
        default: true
      },
      classes: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default: 'Glossary'
      }
    },
    data () {
      return {
        chevronDown,
        chevronUp,
        share,
        download
      }
    }
  }
</script>
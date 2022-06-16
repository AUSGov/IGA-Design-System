<template>
  <div class="c-code-demo">
    <div class="preview-container">
      <div class="top-container">
        <div v-if="allowFullScreen" @click="fullScreen = true" class="icon me-4" v-html="Expand"></div>
        <div @click="menu" class="icon" v-html="Hamburger"></div>
      </div>
      <div class="middle-container doi-content">
        <slot name="preview"></slot>
      </div>
      <div class="bottom-container">
        <button @click="viewCode = !viewCode" class="btn">View Code <span v-html="ChevronDown" class="icon"></span></button>
      </div>
    </div>
    <div v-if="allowVariations" class="variations-container" :class="{ show: showVariations }">
      <slot name="variations"></slot>
    </div>
    <div v-if="allowCodeView" class="code-container">
      <slot name="code"></slot>
    </div>
    <Teleport to="body">
    <div v-if="allowFullScreen" class="full-view-wrap" :class="{ show: showFullScreen }"></div>
    </Teleport>
  </div>
</template>
<script>
import ChevronDown from '../../public/icons/chevron-down.svg?raw'
import Expand from '../../public/icons/expand.svg?raw'
import Hamburger from '../../public/icons/hamburger.svg?raw'

export default {
  props: {
    allowFullScreen: {
      type: Boolean,
      default: true
    },
    allowVariations: {
      type: Boolean,
      default: true
    },
    allowCodeView: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      ChevronDown,
      Expand,
      Hamburger,
      showFullScreen: false,
      showVariations: false,
      showCodeView: false,
    }
  },
  created() {
    if(this.contents) {
      this.$watch('contents',() => {
        this.localContents = this.contents.map(content => {
          content.active = false
          return content
        })
      }, { immediate: true })
    }
  },
  methods: {
    scrollTo (image, index) {
      const item = this.$refs[image + '-' + index]
      window.scrollTo(0, item[0].offsetTop - 105)
      this.localContents[index].active = true
    },
    menu () {

    }
  }
}
</script>

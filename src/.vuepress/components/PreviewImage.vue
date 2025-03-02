<template>
  <div class="c-image-map">
    <div class="preview-container">
      <div class="top-container">
      </div>
      <div class="middle-container">
        <div class="image-container">
          <div class="image-wrap">
            <img :src="image" alt="">
          </div>
          <div v-if="contents">
            <template v-for="(content, index) in localContents">
              <div v-if="content.x !== undefined && content.y !== undefined" class="circle-point image-point" :style="{'top': content.y + '%', 'left': content.x + '%'}" @click.prevent="scrollTo(image, index)">
                <a href="#">{{ index + 1 }}</a>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="bottom-container">
        <div @click="viewCode = !viewCode" class="toggle">View Code <span v-html="ChevronDown" class="icon"></span></div>
      </div>
      <div v-if="viewCode" class="code-container">
        <slot name="code"></slot>
      </div>
    </div>
    <div v-if="contents" class="description-wrap">
      <ul>
        <li v-for="(content, index) in localContents" :key="index" :ref="image + '-' + index">
          <div class="title" @click="content.active = !content.active">
            <div class="circle-point">
              <span>{{ index + 1 }}</span>
            </div>
            <div class="h5">{{ content.title }}</div>
            <div class="toggle" v-html="ChevronDown"></div>
          </div>
          <div v-if="content.active" class="text" v-html="content.text"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import ChevronDown from '../public/icons/chevron-down.svg?raw'
  import Expand from '../public/icons/expand.svg?raw'
  import Hamburger from '../public/icons/hamburger-2.svg?raw'

  export default {
    props: {
      image: {
        type: String,
        required: true
      },
      contents: {
        type: Array,
      }
    },
    data () {
      return {
        ChevronDown,
        Expand,
        Hamburger,
        localContents: null,
        viewCode: false,
      }
    },
    // watch: {
    //   contents: {
    //     immediate: true,
    //     handler() {
    //       this.localContents = this.contents.map(content => {
    //         content.active = false
    //         return content
    //       })
    //     }
    //   }
    // },
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
    }
  }
</script>

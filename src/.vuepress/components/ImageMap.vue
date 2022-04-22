<template>
  <div class="c-image-map">
    <div class="image-container">
      <div class="image-wrap">
        <img :src="image" alt="">
      </div>
      <div v-for="(content, index) in localContents" class="circle-point image-point" :style="{'top': content.y + '%', 'left': content.x + '%'}" @click.prevent="scrollTo(image, index)">
        <a>{{ index + 1 }}</a>
      </div>
    </div>
    <div class="description-wrap">
      <ul>
        <li v-for="(content, index) in localContents" :key="index" :ref="image + '-' + index">
          <div class="title" @click="content.active = !content.active">
            <div class="circle-point">
              <span>{{ index + 1 }}</span>
            </div>
            <div class="h5">{{ content.title }}</div>
            <div class="toggle" v-html="ChevronDown"></div>
          </div>
          <div v-if="content.active" class="text">{{ content.text }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import ChevronDown from '../public/icons/chevron-down.svg?raw'

  export default {
    props: {
      image: {
        type: String,
        required: true
      },
      contents: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        ChevronDown,
        localContents: null
      }
    },
    watch: {
      contents: {
        immediate: true,
        handler() {
          this.localContents = this.contents.map(content => {
            content.active = false
            return content
          })
        }
      }
    },
    methods: {
      scrollTo (image, index) {
        const item = this.$refs[image + '-' + index]
        window.scrollTo(0, item[0].offsetTop - 105)
        this.localContents[index].active = true
      }
    }
  }
</script>

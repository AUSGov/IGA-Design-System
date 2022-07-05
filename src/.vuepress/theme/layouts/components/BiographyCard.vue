<template>
  <div class="biography-card" :class="classes">
    <img :src="$withBase('images/profile-sample.png')" alt="">
    <div class="biography-content">
      <div class="biography-name">Full Name</div>
      <div class="biography-position">Role or Title Executive General Manager</div>
      <p v-if="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, amet ut purus senectus. Sit magna porta velit egestas etiam vitae sagittis. Scelerisque arcu congue porttitor pellentesque scelerisque tortor diam arcu. A massa aenean cras est rutrum.</p>
      <a v-if="link" href="#" class="link-icon">Read more<span v-html="linkArrowRight"></span></a>
    </div>
  </div>
</template>

<script>
  import linkArrowRight from '../../../public/icons/link-arrow-right.svg?raw'

  export default {
    props: {
      classes: {
        type: String,
        default: null
      },
      text: {
        type: Boolean,
        default: false,
      },
      link: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        linkArrowRight
      }
    }
  }
</script>
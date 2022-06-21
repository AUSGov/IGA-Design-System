<template>
  Markdown
  <div :class="containerClass" v-html="rendered"></div>
</template>
<script>
import MarkdownIt from 'markdown-it'
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import { computed } from 'vue'

export default {
  props: {
    lang: {
      type: String,
      default: 'html'
    },
    code: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const containerClass = computed(() => {
      return `language-${props.lang} ext-${props.lang}`
    })
    const md = new MarkdownIt({
      html: true,
      highlight: function (str, lang) {
        return Prism.highlight(str, Prism.languages[lang], lang);
      }
    })
    const rendered = md.render('```' + props.lang + '\n\n' + props.code + '\n\n```')

    return {
      containerClass,
      rendered
    }
  }
}
</script>

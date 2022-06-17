<template>
  <div v-html="renderedMarkdown"></div>
</template>
<script>
import MarkdownIt from 'markdown-it'
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers'

export default {
  props: {
    markdown: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const md = new MarkdownIt({
      html: true,
      highlight: function (str, lang) {
        console.log('lang', lang)
        return Prism.highlight(str, Prism.languages.html, 'html');
      }
    })
    const renderedMarkdown = md.render('```html\n\n' + props.markdown + '\n\n```')

    return {
      renderedMarkdown
    }
  }
}
</script>

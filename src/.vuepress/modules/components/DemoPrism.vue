<template>
  <div id="code-demo" class="language-html ext-html line-numbers-mode" tabindex="0">
    <pre class="language-html"><code>{{ markdown }}</code></pre>
  </div>
</template>
<script>
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers'

export default {
  props: {
    markdown: {
      type: String,
      required: true,
    },
  },
  mounted () {
    Prism.manual = true
    console.log(Prism)
    this.$nextTick(() => {
      Prism.highlightAll()
    })
  }
}
</script>

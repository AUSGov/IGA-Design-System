<template>
  Prism
  <div ref="codeContainer" :class="containerClass" tabindex="0"><pre><code>{{ preview }}</code></pre></div>
</template>
<script>
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import { computed, watchEffect, ref } from 'vue'

export default {
  props: {
    lang: {
      type: String,
      default: 'html'
    },
    preview: {
      required: true
    },
    code: {
      required: true
    }
  },
  setup (props) {
    const containerClass = computed(() => {
      return `language-${props.lang} ext-${props.lang}`
    })
    const codeContainer = ref(null)
    const code = ref(props.code)
    const preview = ref(props.preview ? props.preview.innerHTML : '')
    console.log('props.preview', props.preview)
    console.log('props.code', props.code)

    Prism.manual = true
    Prism.hooks.add('before-sanity-check', function (env) {
      console.log('before-sanity-check', env, env.element)
      const match = /\r|\n/.exec(env.element.innerText)
      console.log('has line breaks', match)
      env.code = env.element.innerText
    })

    watchEffect(() => {
      console.log(`preview is ${props.preview}`)
      Prism.highlightElement(codeContainer)
    })

    return {
      codeContainer,
      containerClass,
      code,
      preview
    }
  }
}
</script>

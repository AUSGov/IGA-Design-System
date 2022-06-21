<template>
  <div ref="codeContainer" :class="containerClass" tabindex="0"><pre><code>{{ code }}</code></pre></div>
</template>
<script>
import { computed, watchEffect, watch, ref, nextTick, toRef } from 'vue'
import Prism from 'prismjs'
// Can't get line numbers working, who cares?
// import 'prismjs/plugins/line-numbers/prism-line-numbers'

export default {
  props: {
    lang: {
      type: String,
      default: 'html'
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

    Prism.manual = true
    Prism.hooks.add('before-sanity-check', function (env) {
      // console.log('before-sanity-check', env, env.element)
      // const match = /\r|\n/.exec(env.element.innerText)
      // console.log('has line breaks', match)
      env.code = env.element.innerText
    })

    // const codeReactive = toRef(props, 'code')
    watch(() => props.code, (newVal) => {
      console.log('watcher', newVal, props.code, codeContainer.value)
    })

    watchEffect(() => {
      console.log('watcheffect', props.code, codeContainer.value)
      const match = /\r|\n/.exec(props.code)
      console.log('hasLinebreaks', match)
      if (codeContainer.value) {
        codeContainer.value.getElementsByTagName('code')[0].innerText = props.code
        Prism.highlightAllUnder(codeContainer.value)
      }
    })

    return {
      codeContainer,
      containerClass,
      code: props.code
    }
  }
}
</script>

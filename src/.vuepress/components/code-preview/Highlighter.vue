<template>
  <div ref="codeContainer" :class="containerClass" tabindex="0"><pre class="show-line-numbers"><code>{{ code }}</code></pre><div class="line-numbers"></div></div>
</template>
<script>
import { computed, watchEffect, ref } from 'vue'
import Prism from 'prismjs'
// Can't get line numbers working, who cares?
import 'prismjs/plugins/line-numbers/prism-line-numbers'

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
      return `language-${props.lang} ext-${props.lang} line-numbers-mode`
    })
    const codeContainer = ref(null)

    Prism.manual = true
    Prism.hooks.add('before-sanity-check', function (env) {
      // console.log('before-sanity-check', env, env.element)
      // const match = /\r|\n/.exec(env.element.innerText)
      // console.log('has line breaks', match)
      env.code = env.element.innerText
    })

    /**
     * Plugin name which is used as a class name for <pre> which is activating the plugin
     *
     * @type {string}
     */
    const PLUGIN_NAME = 'show-line-numbers'

    /**
     * Regular expression used for determining line breaks
     *
     * @type {RegExp}
     */
    const NEW_LINE_EXP = /\n(?!$)/g


    /**
     * Global exports
     */
    const config = Prism.plugins.lineNumbers = {
      /**
       * Get node for provided line number
       *
       * @param {Element} element pre element
       * @param {number} number line number
       * @returns {Element|undefined}
       */
      getLine: function (element, number) {
        // console.log('getLine', element, number)
        if (element.tagName !== 'PRE' || !element.classList.contains(PLUGIN_NAME)) {
          return
        }

        const lineNumberRows = element.querySelector('.line-numbers')
        if (!lineNumberRows) {
          return
        }
        const lineNumberStart = parseInt(element.getAttribute('data-start'), 10) || 1
        const lineNumberEnd = lineNumberStart + (lineNumberRows.children.length - 1)

        if (number < lineNumberStart) {
          number = lineNumberStart
        }
        if (number > lineNumberEnd) {
          number = lineNumberEnd
        }

        const lineIndex = number - lineNumberStart

        return lineNumberRows.children[lineIndex]
      },

      /**
       * Resizes the line numbers of the given element.
       *
       * This function will not add line numbers. It will only resize existing ones.
       *
       * @param {HTMLElement} element A `<pre>` element with line numbers.
       * @returns {void}
       */
      resize: function (element) {
        return
      },

      /**
       * Whether the plugin can assume that the units font sizes and margins are not depended on the size of
       * the current viewport.
       *
       * Setting this to `true` will allow the plugin to do certain optimizations for better performance.
       *
       * Set this to `false` if you use any of the following CSS units: `vh`, `vw`, `vmin`, `vmax`.
       *
       * @type {boolean}
       */
      assumeViewportIndependence: true
    }

    Prism.hooks.add('complete', function (env) {
      if (!env.code) {
        return
      }

      const code = /** @type {Element} */ (env.element)
      const pre = /** @type {HTMLElement} */ (code.parentNode)
      const wrapper = /** @type {HTMLElement} */ (pre.parentNode)


      // works only for <code> wrapped inside <pre> (not inline)
      if (!pre || !/pre/i.test(pre.nodeName)) {
        return
      }

      // Abort if line numbers already exists
      const lineNumbers = wrapper.querySelector('.line-numbers')
      if (lineNumbers) {
        wrapper.removeChild(lineNumbers)
      }

      // only add line numbers if <code> or one of its ancestors has the `line-numbers` class
      if (!Prism.util.isActive(code, PLUGIN_NAME)) {
        return
      }

      // Remove the class 'line-numbers' from the <code>
      // code.classList.remove(PLUGIN_NAME)
      // Add the class 'line-numbers' to the <pre>
      pre.classList.add(PLUGIN_NAME)

      const match = env.code.match(NEW_LINE_EXP)
      const linesNum = match ? match.length + 1 : 1
      let lineNumbersWrapper

      const lines = new Array(linesNum + 1).join('<div class="line-number"></div>')

      lineNumbersWrapper = document.createElement('div')
      lineNumbersWrapper.setAttribute('aria-hidden', 'true')
      lineNumbersWrapper.className = 'line-numbers'
      lineNumbersWrapper.innerHTML = lines

      // if (pre.hasAttribute('data-start')) {
      //   pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('data-start'), 10) - 1)
      // }

      wrapper.appendChild(lineNumbersWrapper)

      Prism.hooks.run('line-numbers', env)
    })

    Prism.hooks.add('line-numbers', function (env) {
      env.plugins = env.plugins || {}
      env.plugins.lineNumbers = true
    })

    watchEffect(() => {
      // testing
      // console.log('watchEffect', props.code, codeContainer.value)
      // const match = /\r|\n/.exec(props.code)
      // console.log('hasLinebreaks', match)
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

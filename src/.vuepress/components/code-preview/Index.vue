<template>
  <div class="c-code-demo" :class="{ fullscreen: showFullScreen }">
    <div class="menu-container">
      <div class="top-container">
        <div class="responsive-controls">
          <button class="btn-icon me-2 btn" :class="{ active: responsiveSize === 'sm' }" v-html="ResponsiveMobile" @click="showSize('sm')"></button>
          <button class="btn-icon me-2 btn" :class="{ active: responsiveSize === 'md' }" v-html="ResponsiveTablet" @click="showSize('md')"></button>
          <button class="btn-icon me-2 btn" :class="{ active: responsiveSize === 'lg' }" v-html="ResponsiveDesktop" @click="showSize('lg')"></button>
        </div>
        <button v-if="allowFullScreen" @click="showFullScreen = !showFullScreen" class="btn-icon me-2 btn" v-html="fullScreenIcon"></button>
        <button @click="showVariations = !showVariations" class="btn-icon btn" v-html="Hamburger"></button>
        <div class="spacer" :class="{ show: showVariations }"></div>
      </div>
      <div class="preview-container">
        <div class="doi-content" ref="codeRef">
          <slot></slot>
        </div>
        <div class="spacer" :class="{ show: showVariations }"></div>
      </div>
      <div v-if="allowVariations" class="variations-container" :class="{ show: showVariations }">
        <div class="close-container"><button @click="showVariations = false" class="btn-icon btn" v-html="Close"></button></div>
        <div class="scroll-container">
          <div v-for="element in formConfig" :key="element.id">
            <component :is="element.type" @input="handleInput(element.id, $event)" v-bind.prop="element" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-container">
      <button @click="showCodeView = !showCodeView" class="btn btn-icon">
        <span class="me-2">View Code</span>
        <span v-html="ChevronDown"></span>
      </button>
    </div>
    <Transition v-if="allowCodeView" name="slide-down">
      <div v-if="showCodeView" class="code-container">
        <Highlighter v-if="code !== null" :code="code"/>
      </div>
    </Transition>
  </div>
  <Teleport to="body">
    <div v-if="allowFullScreen" class="fullscreen-container" :class="{ show: showFullScreen }" v-html="code"></div>
  </Teleport>
</template>
<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import ResponsiveDesktop from '../../public/icons/responsive-desktop.svg?raw'
import ResponsiveTablet from '../../public/icons/responsive-tablet.svg?raw'
import ResponsiveMobile from '../../public/icons/responsive-mobile.svg?raw'
import ChevronDown from '../../public/icons/chevron-down.svg?raw'
import Expand from '../../public/icons/expand.svg?raw'
import Collapse from '../../public/icons/collapse.svg?raw'
import Hamburger from '../../public/icons/hamburger-2.svg?raw'
import Close from '../../public/icons/close.svg?raw'
import Radio from './Radio.vue'
import Checkbox from './Checkbox.vue'
import Select from './Select.vue'
import Highlighter from './Highlighter.vue'

export default {
  components: {
    Highlighter,
    Checkbox,
    Radio,
    Select
  },
  props: {
    changePreview: {},
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
    },
    formConfig: {
      type: Object
    }
  },
  emits: ['formDataChanged'],
  setup (_, context) {
    const codeRef = ref(null)
    const code = ref(null)
    const formData = ref({})
    const showFullScreen = ref(false)
    const showVariations = ref(true)
    const showCodeView = ref(false)
    const fullScreenIcon = computed(() => {
      return showFullScreen.value ? Collapse : Expand
    })
    const responsiveSize = ref('lg')

    const updateCode = () => {
      if (codeRef.value) {
        const temp = codeRef.value.innerHTML
        code.value = temp.replace('<pre>\n', '').replace('\n</pre>', '').replace(/<!--[\s\S]*?-->/g, '')
      }
    }
    if (typeof MutationObserver !== "undefined") {
      const observer = new MutationObserver(updateCode)

      onMounted(() => {
        updateCode()
        observer.observe(codeRef.value, {
          attributes: true,
          childList: true,
          subtree: true,
          characterData: true
        })
      })
      onUnmounted(() => {
        observer.disconnect();
      })
    }
    return {
      ResponsiveDesktop,
      ResponsiveTablet,
      ResponsiveMobile,
      ChevronDown,
      Expand,
      Collapse,
      Hamburger,
      Close,
      formData,
      codeRef,
      code,
      showFullScreen,
      showVariations,
      showCodeView,
      fullScreenIcon,
      handleInput (id, e) {
        if (e.index) {
          if (e.checked) {
            formData.value[id] = { [e.index]: e.value }
          } else {
            delete formData.value[id][e.index]
          }
        } else {
          formData.value[id] = e.value
        }
        context.emit('formDataChanged', formData.value)
      },
      responsiveSize,
      showSize (size) {
        switch (size) {
          case 'sm': // 540px

            break
          case 'md': //	720px
            break
          case 'lg': // 960px
          default:

        }
        responsiveSize.value = size
      }
    }
  }
}
</script>

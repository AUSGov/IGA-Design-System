<template>
  <div class="c-code-demo" :class="{ fullscreen: showFullScreen }">
    <div class="menu-container">
      <div class="top-container">
        <button v-if="allowFullScreen" @click="showFullScreen = true" class="btn-icon me-2 btn" v-html="Expand"></button>
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
          <div v-for="(element, index) in formConfig" :key="element.slug">
            <component :is="element.type" @input="handleInput(element.key, $event)" v-bind.prop="element" :key="element.key" :slug="element.slug" :index="index" />
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
import { ref, onMounted, onUnmounted } from 'vue'
import ChevronDown from '../../public/icons/chevron-down.svg?raw'
import Expand from '../../public/icons/expand.svg?raw'
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

    const updateCode = () => {
      if (codeRef.value) {
        const temp = codeRef.value.innerHTML
        code.value = temp.replace('<pre>\n', '').replace('\n</pre>', '')
      }
    }
    const observer = new MutationObserver(updateCode)
    onMounted(() => {
      updateCode()
      observer.observe(codeRef.value, {
        attributes: true,
        childList: true,
        subtree: true
      });
    })
    onUnmounted(() => {
      observer.disconnect();
    })

    return {
      ChevronDown,
      Expand,
      Hamburger,
      Close,
      showFullScreen: ref(false),
      showVariations: ref(true),
      showCodeView: ref(true),
      formData,
      codeRef,
      code,
      componentType (type) {
        return 'demo-' + type
      },
      handleInput (key, e) {
        formData.value[key] = e.target.value
        context.emit('formDataChanged', formData.value)
      }
    }
  }
}
</script>

<template>
  <div class="c-code-demo">
    <div class="menu-container">
      <div class="top-container">
        <button v-if="allowFullScreen" @click="showFullScreen = true" class="icon me-2 btn" v-html="Expand"></button>
        <button @click="showVariations = !showVariations" class="icon btn" v-html="Hamburger"></button>
        <div class="spacer" :class="{ show: showVariations }"></div>
      </div>
      <div class="preview-container">
        <div class="doi-content">
          <slot name="preview" @click="previewClick" :test="test" :form-data="formData"></slot>
        </div>
        <div class="spacer" :class="{ show: showVariations }"></div>
      </div>
      <div v-if="allowVariations" class="variations-container" :class="{ show: showVariations }">
        <div class="close-container"><button @click="showVariations = false" class="icon btn" v-html="Close"></button></div>
        <component v-for="element in formConfig" :is="componentType(element.type)" @change="handleChange"/>
        <DemoCheckbox/>
        <DemoRadio/>
        <DemoSelect />
      </div>
    </div>
    <div class="bottom-container">
      <button @click="showCodeView = !showCodeView" class="btn">View Code <span v-html="ChevronDown" class="icon"></span></button>
    </div>
    <Transition v-if="allowCodeView" name="slide-down">
      <div v-if="showCodeView" class="code-container">
        <DemoMarkdown :markdown="codeRender"/>
        <DemoPrism :markdown="codeRender"/>
      </div>
    </Transition>
  </div>
  <Teleport to="body">
  <div v-if="allowFullScreen" class="fullscreen-container" :class="{ show: showFullScreen }">
    <slot name="fullscreen-preview"></slot>
  </div>
  </Teleport>
</template>
<script>
import ChevronDown from '../../public/icons/chevron-down.svg?raw'
import Expand from '../../public/icons/expand.svg?raw'
import Hamburger from '../../public/icons/hamburger.svg?raw'
import Close from '../../public/icons/demo-close.svg?raw'
import DemoRadio from './DemoRadio.vue'
import DemoCheckbox from './DemoCheckbox.vue'
import DemoSelect from './DemoSelect.vue'
import DemoMarkdown from './DemoMarkdown.vue'
import DemoPrism from './DemoPrism.vue'

export default {
  components: {
    DemoPrism,
    DemoMarkdown,
    DemoCheckbox,
    DemoRadio,
    DemoSelect
  },
  props: {
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
  data () {
    return {
      ChevronDown,
      Expand,
      Hamburger,
      Close,
      showFullScreen: false,
      showVariations: true,
      showCodeView: true,
      test: 'test variable',
      formData: {},
      codeRender: '<div>YAY</div>\n<a>Something</a>'
    }
  },
  methods: {
    scrollTo (image, index) {
      const item = this.$refs[image + '-' + index]
      window.scrollTo(0, item[0].offsetTop - 105)
      this.localContents[index].active = true
    },
    previewClick (e) {
      console.log('Preview slot click event', e)
    },
    componentType (type) { return 'demo-' + type },
    handleChange (e) {
      this.formData[e.key] = e.value
      // this.codeRender =
    }
  }
}
</script>

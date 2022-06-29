<template>
<CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
<template v-slot="slotProps">
<pre>

<a href="#" :class="linkClass" @click.prevent="clickChild">
  <span>Link Text</span>
  <svg v-if="linkType !== null" v-html="linkType" v-inline-svg></svg>
</a>

</pre>

</template>
</CodePreview>
</template>
<script setup>
import { ref, computed } from 'vue'
import CodePreview from './code-preview/Index.vue'
import LinkArrowRight from '../public/icons/link-arrow-right.svg?raw'
import LinkExternal from '../public/icons/link-external.svg?raw'

const formConfig = ref([
  {
    label: 'Variation',
    key: 'variation',
    type: 'select',
    options: [
      {
        key: 'linkPrimary',
        label: 'Primary',
        value: 'link-icon'
      },
      {
        key: 'linkSecondary',
        label: 'Secondary',
        value: 'link-icon link-secondary'
      }
    ]
  },
  {
    label: 'Type Radio',
    key: 'type',
    type: 'radio',
    options: [
      {
        key: 'none',
        label: 'None',
        value: 'none'
      },
      {
        key: 'internal',
        label: 'Internal',
        value: 'internal'
      },
      {
        key: 'external',
        label: 'External',
        value: 'external'
      }
    ]
  },
  {
    label: 'Type Checkbox',
    key: 'external',
    type: 'checkbox',
    options: [
      {
        key: 'internal',
        label: 'Internal',
        value: 'internal'
      },
      {
        key: 'external',
        label: 'External',
        value: 'external'
      }
    ]
  }
])
const counter = ref(0)
const formData = ref({})

const linkClass = computed(() => {
  const classes = ['link-' + counter.value]
  if(typeof formData.value.variation !== 'undefined') {
    classes.push('btn-' + formData.value.variation)
  }
  if(typeof formData.value.internal !== 'undefined') {
    classes.push('btn-' + formData.value.internal)
  }
  if(typeof formData.value.external !== 'undefined') {
    classes.push('btn-' + formData.value.external)
  }
  return classes.join(' ')
})

const linkType = computed(() => {
  console.log('linkType', formData.value.type)
  switch (formData.value.type) {
    case 'internal':
      return LinkArrowRight
    case 'external':
      return LinkExternal
    default:
      return null
  }
})

const clickChild = (e) => {
  // console.log('click child', e)
  counter.value++
}
const formDataChanged = (formDataExternal) => {
  // console.log('formDataChanged', formDataExternal)
  formData.value = formDataExternal
}
</script>

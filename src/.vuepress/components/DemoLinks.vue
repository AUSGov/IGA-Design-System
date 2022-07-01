<template>
<CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
<template v-slot="slotProps">
<pre>

<a href="#" :class="linkClass" @click.prevent>
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

const formConfig = [
  {
    label: 'Variation',
    id: 'variation',
    type: 'select',
    options: [
      {
        label: 'Primary',
        value: 'link-icon'
      },
      {
        label: 'Secondary',
        value: 'link-icon link-secondary'
      }
    ]
  },
  {
    label: 'Link Type',
    id: 'type',
    type: 'radio',
    options: [
      {
        label: 'Internal',
        value: '',
        checked: true
      },
      {
        label: 'External',
        value: 'link-external'
      }
    ]
  },
  {
    label: 'Disabled',
    id: 'disabledLink',
    type: 'checkbox',
    options: [
      {
        label: 'Disabled',
        value: 'disabled'
      }
    ]
  }
]
const formData = ref({})

const linkClass = computed(() => {
  const classes = []
  if(typeof formData.value.variation !== 'undefined') {
    classes.push(formData.value.variation)
  }
  if(typeof formData.value.type !== 'undefined') {
    classes.push(formData.value.type)
  }
  if (typeof formData.value.disabledLink !== 'undefined') {
    Object.keys(formData.value.disabledLink).forEach(el => {
      classes.push(formData.value.disabledLink[el])
    })
  }
  return classes.join(' ')
})

const linkType = computed(() => {
  switch (formData.value.type) {
    case '':
      return LinkArrowRight
    case 'link-external':
      return LinkExternal
    default:
      return null
  }
})

const formDataChanged = (formDataExternal) => {
  formData.value = formDataExternal
}
</script>

<template>
  <CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
    <template v-slot="slotProps">
      <pre>

        <BiographyCard :classes="classes" />

      </pre>
    </template>
  </CodePreview>
</template>
<script setup>
import { ref, computed } from 'vue'
import CodePreview from './code-preview/Index.vue'
import LinkArrowRight from '../public/icons/link-arrow-right.svg?raw'
import LinkExternal from '../public/icons/link-external.svg?raw'
import BiographyCard from "../theme/layouts/components/BiographyCard.vue"

const formConfig = [
  {
    label: 'Variation',
    id: 'variation',
    type: 'select',
    options: [
      {
        label: 'Centred',
        value: ''
      },
      {
        label: 'Small',
        value: '--full'
      },
      {
        label: 'Medium',
        value: '--secondary'
      },
      {
        label: 'Coloured bg',
        value: '--card'
      },
      {
        label: 'Right aligned',
        value: 'link-icon link-secondary'
      }
    ]
  },
]
const formData = ref({})

const classes = computed(() => {
  if(typeof formData.value.variation !== 'undefined') {
    return formData.value.variation
  }
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

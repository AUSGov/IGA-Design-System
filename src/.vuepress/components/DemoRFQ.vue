<template>
  <CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
    <template v-slot="slotProps">
      <pre>
        <RfqCard :classes="classes" :button-class="buttonClass" />
      </pre>
    </template>
  </CodePreview>
</template>
<script setup>
import { ref, computed } from 'vue'
import CodePreview from './code-preview/Index.vue'
import LinkArrowRight from '../public/icons/link-arrow-right.svg?raw'
import LinkExternal from '../public/icons/link-external.svg?raw'
import RfqCard from "../theme/layouts/components/RfqCard.vue"

const formConfig = [
  {
    label: 'Variation',
    id: 'variation',
    type: 'select',
    options: [
      {
        label: 'Inline',
        value: ''
      },
      {
        label: 'Body width',
        value: 'rfq-card--no-img'
      }
    ]
  },
  {
    label: 'Button Variation',
    id: 'buttonVariation',
    type: 'select',
    options: [
      {
        label: 'Blue button',
        value: ''
      },
      {
        label: 'NMI Red button',
        value: 'btn-quote'
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

const buttonClass = computed(() => {
  if(typeof formData.value.buttonVariation !== 'undefined') {
    return formData.value.buttonVariation
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

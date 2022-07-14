<template>
  <CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
    <template v-slot="slotProps">
      <pre>
        <BiographyCard :classes="classes" :text="true" :link="link" />
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
        value: ''
      },
      {
        label: 'Medium',
        value: 'biography-card--full'
      },
      {
        label: 'Coloured bg',
        value: 'biography-card--card'
      },
      {
        label: 'Right aligned',
        value: 'biography-card--secondary'
      }
    ]
  },
  {
    label: 'Link',
    id: 'link',
    type: 'radio',
    options: [
      {
        label: 'With Link',
        value: true,
        checked: true
      },
      {
        label: 'Without Link',
        value: false
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

const link = computed(() => {
  if(typeof formData.value.link !== 'undefined') {
    return formData.value.link === 'true'
  }
})

const formDataChanged = (formDataExternal) => {
  formData.value = formDataExternal
}
</script>

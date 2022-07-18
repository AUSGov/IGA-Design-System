<template>
  <CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
    <template v-slot="slotProps">
      <div class="row g-4">
        <div :class="containerClass">
          <NavigationCard :variant="variant" :classes="classes" />
        </div>
      </div>
    </template>
  </CodePreview>
</template>
<script setup>
import { ref, computed } from 'vue'
import CodePreview from './code-preview/Index.vue'
import LinkArrowRight from '../public/icons/link-arrow-right.svg?raw'
import NavigationCard from "../theme/layouts/components/NavigationCard.vue"

const formConfig = [
  {
    label: 'Variation',
    id: 'variation',
    type: 'select',
    options: [
      {
        label: 'Stacked',
        value: ''
      },
      {
        label: 'Inline',
        value: 'inline'
      },
    ]
  },
  {
    label: 'Background',
    id: 'background',
    type: 'radio',
    options: [
      {
        label: 'Default',
        value: '',
        checked: true
      },
      {
        label: 'Office Chief',
        value: 'bg-office-chief-economist text-white'
      },
      {
        label: 'Industry Sci',
        value: 'bg-industry-innovation-science text-white'
      },
      {
        label: 'National',
        value: 'bg-national-measurement-institute text-white'
      },
    ]
  },
  {
    label: 'Container',
    id: 'container',
    type: 'select',
    options: [
      {
        label: '2 small',
        value: 'col-md-4 col-lg-4'
      },
      {
        label: '3 small',
        value: 'col-md-4 col-lg-4'
      },
      {
        label: '2 medium',
        value: 'col-md-6 col-lg-6'
      },
      {
        label: '1 large',
        value: 'col-md-12 col-lg-12'
      },
    ]
  }
]
const formData = ref({})

const variant = computed(() => {
  if (typeof formData.value.variation !== 'undefined') {
    return formData.value.variation
  }
})

const classes = computed(() => {
  if (typeof formData.value.background !== 'undefined') {
    return formData.value.background
  }
})

const containerClass = computed(() => {
  if (typeof formData.value.container !== 'undefined') {
    return formData.value.container
  }
})

const formDataChanged = (formDataExternal) => {
  formData.value = formDataExternal
}
</script>

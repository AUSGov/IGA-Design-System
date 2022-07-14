<template>
  <CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
    <template v-slot="slotProps">
      <NavigationCard :classes="navigationClass" :variant="variant" />
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
        label: 'Small',
        value: 'sm'
      },
      {
        label: 'Medium',
        value: 'md'
      },
      {
        label: 'Large',
        value: 'lg'
      },
      {
        label: 'Inline',
        value: 'inline'
      },
      {
        label: 'left aligned',
        value: 'left'
      },
    ]
  }
]
const formData = ref({})

const navigationClass = computed(() => {
  const classes = []
  //NOTE i think size does not exist? ie. formData.value.[..] , where [..] is the id of your formConfig
  if (typeof formData.value.size !== 'undefined') {
    classes.push(formData.value.size)
  }
  if (typeof formData.value.disabledBtn !== 'undefined') {
    Object.keys(formData.value.disabledBtn).forEach(el => {
      classes.push(formData.value.disabledBtn[el])
    })
  }
  return classes.join(' ')
})

const variant = computed(() => {
  if (typeof formData.value.variation !== 'undefined') {
    return formData.value.variation
  }
})

const formDataChanged = (formDataExternal) => {
  formData.value = formDataExternal
}
</script>

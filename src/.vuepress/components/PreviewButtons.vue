<template>
<CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
<template v-slot="slotProps">
<pre>

<button class="btn" :class="btnClass">Button</button>

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
        key: 'btnPrimary',
        label: 'Primary',
        value: 'btn-primary'
      },
      {
        key: 'btnOutlinePrimary',
        label: 'Ghost',
        value: 'btn-outline-primary'
      }
    ]
  },
  {
    label: 'Size',
    key: 'size',
    type: 'radio',
    options: [
      // {
      //   label: 'Large',
      //   value: 'btn-lg'
      // },
      {
        label: 'Default',
        value: '',
        checked: true
      },
      {
        label: 'Small',
        value: 'btn-sm'
      }
    ]
  }
])
const formData = ref({})

const btnClass = computed(() => {
  const classes = []
  if (typeof formData.value.variation !== 'undefined') {
    classes.push(formData.value.variation)
  }
  if (typeof formData.value.size !== 'undefined') {
    classes.push(formData.value.size)
  }
  return classes.join(' ')
})

const formDataChanged = (formDataExternal) => {
  formData.value = formDataExternal
}
</script>

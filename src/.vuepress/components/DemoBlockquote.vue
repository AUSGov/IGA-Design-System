<template>
<CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
<template v-slot="slotProps">
<pre>

  <DoiBlockquote :classes="classes"/>

</pre>
</template>
</CodePreview>
</template>
<script setup>
import { computed, ref } from 'vue'
import CodePreview from './code-preview/Index.vue'
import DoiBlockquote from '../theme/layouts/components/DoiBlockquote.vue'

const formConfig = [
  {
    label: 'Alignment',
    id: 'alignment',
    type: 'select',
    options: [
      {
        label: 'Center aligned',
        value: ''
      },
      {
        label: 'Left aligned',
        value: 'left-align'
      }
    ]
  }
]
const formData = ref({})

const classes = computed(() => {
  if (typeof formData.value.alignment !== 'undefined') {
    return formData.value.alignment
  }
  return ''
})

const formDataChanged = (formDataExternal) => {
  formData.value = formDataExternal
}
</script>

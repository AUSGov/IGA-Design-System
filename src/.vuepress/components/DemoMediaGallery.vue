<template>
<CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
<template v-slot="slotProps">
<pre>

  <MediaGallery :classes="classes"/>

</pre>
</template>
</CodePreview>
</template>
<script setup>
  import { computed, ref } from 'vue'
import CodePreview from './code-preview/Index.vue'
import MediaGallery from '../theme/layouts/components/MediaGallery.vue'

const formConfig = [
  {
    label: 'Variation',
    id: 'variation',
    type: 'select',
    options: [
      {
        label: 'Full Width',
        value: ''
      },
      {
        label: 'Body Width',
        value: 'body-width'
      }
    ]
  }
]
const formData = ref({})

const classes = computed(() => {
  if (typeof formData.value.variation !== 'undefined') {
    return formData.value.variation
  }
  return ''
})

const formDataChanged = (formDataExternal) => {
  formData.value = formDataExternal
}
</script>

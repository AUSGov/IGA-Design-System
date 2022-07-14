<template>
<CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
<template v-slot="slotProps">
<pre>

  <PublicationBanner :classes="(small ? 'small ' : '') + (!image ? 'bg-primary': '')" :image="image"/>

</pre>
</template>
</CodePreview>
</template>
<script setup>
import { computed, ref } from 'vue'
import CodePreview from './code-preview/Index.vue'
import PublicationBanner from '../theme/layouts/components/PublicationBanner.vue'

const props = defineProps({
  small: {
    default: false
  }
})

const formConfig = [
  {
    label: 'Image',
    id: 'image',
    type: 'select',
    options: [
      {
        label: 'With Image',
        value: true
      },
      {
        label: 'No Image',
        value: false
      },
    ]
  }
]

const formData = ref({})

const image = computed(() => {
  let image = true
  if (typeof formData.value.image !== 'undefined') {
    image = formData.value.image === 'true'
  }
  console.log('image', image, typeof image)
  return image
})

const formDataChanged = (formDataExternal) => {
  formData.value = formDataExternal
}
</script>

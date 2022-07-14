<template>
<CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
<template v-slot="slotProps">
<pre>

  <VerticalTimeline/>

</pre>
</template>
</CodePreview>
</template>
<script setup>
import { ref } from 'vue'
import CodePreview from './code-preview/Index.vue'
import VerticalTimeline from '../theme/layouts/components/VerticalTimeline.vue'

const formConfig = []
const formData = ref({})

const formDataChanged = (formDataExternal) => {
  formData.value = formDataExternal
}
</script>

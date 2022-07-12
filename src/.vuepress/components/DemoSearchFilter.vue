<template>
<CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
<template v-slot="slotProps">
<pre>

  <SearchFilter/>

</pre>
</template>
</CodePreview>
</template>
<script setup>
import { ref } from 'vue'
import CodePreview from './code-preview/Index.vue'
import SearchFilter from '../theme/layouts/components/SearchFilter.vue'

const formConfig = []
const formData = ref({})

const formDataChanged = (formDataExternal) => {
  formData.value = formDataExternal
}
</script>

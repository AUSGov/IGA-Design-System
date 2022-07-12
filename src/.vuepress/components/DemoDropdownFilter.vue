<template>
<CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
<template v-slot="slotProps">
<pre>

  <DropdownFilter/>

</pre>
</template>
</CodePreview>
</template>
<script setup>
import { ref } from 'vue'
import CodePreview from './code-preview/Index.vue'
import DropdownFilter from '../theme/layouts/components/DropdownFilter.vue'

const formConfig = []
const formData = ref({})

const formDataChanged = (formDataExternal) => {
  formData.value = formDataExternal
}
</script>

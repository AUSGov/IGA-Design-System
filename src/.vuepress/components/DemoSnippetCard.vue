<template>
  <CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
    <template v-slot="slotProps">
      <SnippetCard />
    </template>
  </CodePreview>
</template>
<script setup>
import { ref, computed } from 'vue'
import CodePreview from './code-preview/Index.vue'
import SnippetCard from "../theme/layouts/components/SnippetCard.vue"

const formConfig = []
const formData = ref({})

const formDataChanged = (formDataExternal) => {
  formData.value = formDataExternal
}
</script>

<template>
  <pre>
    {{ props }}
  </pre>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
// const { label, key, type, options }
const props = defineProps({
  label: {},
  key: {},
  slug: {},
  type: {},
  options: {},
  index: {},
})

defineEmits(['change'])
// console.log('Select', label, key, type, options)
</script>

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
  type: {},
  options: {},
  index: {},
})

defineEmits(['change'])
// console.log('Radio', label, key, type, options)
</script>

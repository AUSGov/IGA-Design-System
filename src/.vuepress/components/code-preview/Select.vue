<template>
  <div class="form-group p-2">
    <label>{{ props.label }}</label>
    <select ref="input" class="form-select" @change="$emit('input', $event)">
      <option v-for="option in props.options" :key="option.key" :value="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const input = ref(null)
const props = defineProps({
  label: {},
  key: {},
  slug: {},
  type: {},
  options: {},
  index: {},
})
defineEmits(['input'])
onMounted(() => {
  input.value.dispatchEvent(new Event('change'))
})
</script>

<template>
  <div class="form-group p-2">
    <label>{{ props.label }}</label>
    <select ref="input" class="form-select form-select-sm" @change="$emit('input', { value: $event.target.value })">
      <option v-for="option in props.options" :key="option.key" :value="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  label: {},
  id: {},
  type: {},
  options: {}
})
defineEmits(['input'])

const input = ref(null)
onMounted(() => {
  input.value.dispatchEvent(new Event('change'))
})
</script>

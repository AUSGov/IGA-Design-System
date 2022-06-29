<template>
  <div ref="checks" class="form-group p-2">
    <label>{{ props.label }}</label>
    <div v-for="(option, i) in props.options" :key="'check-' + i" class="form-check">
      <input class="form-check-input" type="checkbox" :value="option.value" :id="'check-' + i" @input="$emit('input', { value: $event.target.value, index: i })" :checked="option.checked">
      <label class="form-check-label" :for="'check-' + i">{{ option.label }}</label>
    </div>
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

const checks = ref(null)
onMounted(() => {
  const inputs = checks.value.getElementsByTagName('input')
  for (let i = 0;i < inputs.length; i++) {
    if (inputs[i].checked) {
      inputs[i].dispatchEvent(new Event('input'))
    }
  }
})
</script>

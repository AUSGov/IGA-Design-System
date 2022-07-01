<template>
  <div ref="checks" class="form-group p-2">
    <label>{{ props.label }}</label>
    <div v-for="(option, i) in props.options" :key="props.id + '-' + i" class="form-check">
      <input class="form-check-input" type="checkbox" :value="option.value" :id="props.id + '-' + i" @input="$emit('input', { value: $event.target.value, checked: $event.target.checked, index: 'check-' + i })" :checked="option.checked">
      <label class="form-check-label" :for="props.id + '-' + i">{{ option.label }}</label>
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

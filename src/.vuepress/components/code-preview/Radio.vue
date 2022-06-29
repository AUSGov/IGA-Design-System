<template>
  <div ref="radios" class="form-group p-2">
    <label>{{ props.label }}</label>
    <div v-for="(option, i) in props.options" :key="'radio-' + i" class="form-check">
      <input class="form-check-input" type="radio" :value="option.value" :id="'radio-' + props.key + '-' + i" name="radio" @input="$emit('input', { value: $event.target.value })" :checked="option.checked">
      <label class="form-check-label" :for="'radio-' + props.key + '-' + i">{{ option.label }}</label>
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

const radios = ref(null)
onMounted(() => {
  const inputs = radios.value.getElementsByTagName('input')
  for (let i = 0;i < inputs.length; i++) {
    if (inputs[i].checked) {
      inputs[i].dispatchEvent(new Event('input'))
    }
  }
})
</script>

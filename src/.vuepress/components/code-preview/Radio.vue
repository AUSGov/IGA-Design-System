<template>
  <div class="form-group p-2">
    <label>{{ props.label }}</label>
    <div v-for="(option, i) in props.options" :key="'radio-' + i" class="form-check">
      <input class="form-check-input" type="radio" :value="option.value" :id="'radio-' + i" name="radio" @input="$emit('input', $event)">
      <label class="form-check-label" :for="'radio-' + i">{{ option.label }}</label>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  label: {},
  key: {},
  type: {},
  options: {},
  index: {},
})
defineEmits(['input'])
</script>

<template>
  <div class="form-group p-2">
    <label>{{ props.label }}</label>
    <div v-for="(option, i) in props.options" :key="'check-' + i" class="form-check">
      <input class="form-check-input" type="checkbox" :value="option.value" :id="'check-' + i" @input="$emit('input', $event)">
      <label class="form-check-label" :for="'check-' + i">{{ option.label }}</label>
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

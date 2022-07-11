<template>
  <div class="doi-switch form-switch">
    <span class="start-label">{{ startLabel }}</span>
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" :value="endLabel" checked>
    <span>{{ endLabel }}</span>
  </div>
</template>
<script setup>
  const props = defineProps({
    startLabel: {
      type: String,
      required: true
    },
    endLabel: {
      type: String,
      required: true
    }
  })
</script>
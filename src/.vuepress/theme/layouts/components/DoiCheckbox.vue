<template>
  <div class="check-container">
    <input v-if="checked" class="form-check-input" type="checkbox" value="" id="flexCheckFirst" checked>
    <input v-else class="form-check-input" type="checkbox" value="" id="flexCheckFirst">
    <label class="form-check-label" for="flexCheckFirst">
      Label
    </label>
  </div>
</template>
<script setup>
  const props = defineProps({
    checked: {
      type: Boolean,
      default: true
    }
  })
</script>
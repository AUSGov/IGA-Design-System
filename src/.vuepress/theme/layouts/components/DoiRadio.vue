<template>
  <div class="check-container" :class="classes">
    <input v-if="checked" class="form-check-input" id="flexRadio" type="radio" value="" aria-label="Radio button for following text input" checked>
    <input v-else class="form-check-input" id="flexRadio" type="radio" value="" aria-label="Radio button for following text input">
    <label class="form-check-label" for="flexRadio">
      Label
    </label>
  </div>
</template>
<script setup>
  const props = defineProps({
    classes: {
      type: String,
      default: null
    },
    checked: {
      type: Boolean,
      default: true
    }
  })
</script>
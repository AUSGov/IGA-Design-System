<template>
  <div class="input-container" :class="classes">
    <input type="text" id="component-input" class="form-control form-input" :class="inputClasses" placeholder="Placeholder">
    <div id="validationServerUsernameFeedback" class="invalid-feedback">
      <span v-html="warning"></span>
      <span>This field is required</span>
    </div>
  </div>
</template>
<script setup>
  import warning from "../../../public/icons/warning.svg?raw"

  const props = defineProps({
    classes: {
      type: String,
      default: null
    },
    inputClasses: {
      type: String,
      default: ''
    }
  })
</script>

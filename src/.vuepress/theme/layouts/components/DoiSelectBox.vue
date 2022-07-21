<template>
  <div class="input-container" :class="classes">
    <select id="component-select" class="" :class="selectClasses" title="Placeholder">
      <option value="1">Australian Industry Participation Authority</option>
      <option value="2">Anti-Dumping Commission</option>
      <option value="3">AusIndustry</option>
      <option value="3">Australian Industry Participation Authority...</option>
      <option value="3">Australian Radioactive Waste Authority</option>
    </select>
    <div id="component-select-feedback" class="invalid-feedback">
      <span v-html="warning"></span><span>This field is required</span>
    </div>
  </div>
</template>
<script setup>
  import warning from "../../../public/icons/warning.svg?raw"
  import { onMounted } from 'vue'

  const props = defineProps({
    classes: {
      type: String,
      default: null
    },
    selectClasses: {
      type: String,
      default: ''
    }
  })

  onMounted(() => {
    //form inputs
    $('select').selectpicker()
  })
</script>

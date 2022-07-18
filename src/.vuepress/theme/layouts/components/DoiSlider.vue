<template>
  <div class="slider-container">
    <input id="ex2" type="text" class="span2" value="" data-slider-min="2016" data-slider-max="2022" data-slider-step="1" data-slider-value="[2016,2022]" />
    <div class="label-container">
      <span class="start-label">2016</span>
      <span class="end-label">2022</span>
    </div>
  </div>
</template>
<script setup>
  import { onMounted}  from 'vue'

  onMounted(() => {
    $('#ex2').slider({
      tooltip_split: 'always'
    })
  })
</script>
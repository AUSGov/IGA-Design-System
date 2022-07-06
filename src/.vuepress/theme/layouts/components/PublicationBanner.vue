<template>
  <div class="publication-banner" :class="classes" style="background-image: url('/images/publication-banner-sample.png');" :style="image ? null : 'background-image: none'">
    <div class="banner-overlay"></div>
    <div class="container">
      <div class="banner-wrap">
        <div class="banner-title">Premises Standards Review 2021</div>
        <div class="banner-subtitle">A review of the Disability (Access to Premises - Building) Standards 2010</div>
        <div class="banner-date">
          <span>Date published: 29 September 2021</span>
          <span>Date published: 29 September 2021</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    image: {
      type: Boolean,
      default: true
    },
    classes: {
      type: String,
      default: null
    }
  })
</script>
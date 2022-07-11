<template>
  <div class="publication">
    <div class="publication-container ">
      <span class="publication-title">Topics</span>
      <div class="button-container heading-extra-small">
        <button class="topic-button"><span>Mining oil and gas</span></button>
        <button class="topic-button"><span>Critical Minerals</span></button>
      </div>
    </div>
    <div class="publication-container">
      <span class="publisher-title">Publisher</span>
      <span class="publisher-subtitle">Department of Industry, Science, Energy and Resources</span>
    </div>
    <div class="publication-container">
      <span class="publication-title">Subscribe for updates</span>
      <span class="publisher-subtitle">Modern Manufacturing Strategy Updates</span>
      <span class="publisher-content">Subscribing to updates ensures you'll receive the latest on funding and programs, and news and announcements. We recommend you subscribe to keep up to date on all Modern Manufacturing Strategy matters. </span>
      <button class="btn btn-primary caption-large"><span>Subscribe</span></button>
    </div>
    <div class="publication-container icon-container">
      <span class="icon-container" v-html="share"></span>
      <span class="icon-container" v-html="download"></span>
    </div>
    <div v-if="showDownload" class="publication-container heading-extra-small">
      <div v-for="index in 4" :key="index" class="pdf-container">
        <div class="pdf-title">Australia’s Long-Term Emission Reduction plan <span class="description-container">PDF 17.5MB</span>
        </div>
        <span class="icon-container" v-html="download"></span>
      </div>
    </div>
  </div>
</template>
<script setup>
  import download from '../../../public/icons/download.svg?raw'
  import share from '../../../public/icons/share.svg?raw'
  const props = defineProps({
    showDownload: {
      type: Boolean,
      default: true
    }
  })
</script>
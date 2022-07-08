<template>
  <div class="filter-button">
    <a href="#" class="d-inline-block rounded-pill">
      <span>Advanced manufacturing</span>
      <span v-html="close"></span>
    </a>
  </div>
</template>
<script setup>
  import close from "../../../public/icons/close.svg?raw"
</script>
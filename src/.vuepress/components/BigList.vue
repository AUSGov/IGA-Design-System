<template>
  <div class="c-big-list">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>
<script setup>
const { list } = defineProps({ list: String })
</script>

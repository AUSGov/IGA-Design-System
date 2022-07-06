<template>
  <div class="entity-bar" :class="classes">
    <span>{{ title }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      classes: {
        type: String,
        default: 'bg-primary'
      },
      title: {
        type: String
      }
    }
  }
</script>
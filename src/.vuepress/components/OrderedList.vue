<template>
  <div>
    <ol>
      <li v-for="content in contents" :key="content">
        {{ content }}
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
    props: {
      contents: {
        required: true,
        type: Array
      }
    }
  }
</script>
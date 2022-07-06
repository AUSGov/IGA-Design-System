<template>
  <div class="doi-table">
    <table class="table table-striped">
      <thead :class="classes" class="body-small">
      <tr class="table-header main">
        <td v-for="header in headers" :key="header" class="header-title">{{ header }}</td>
      </tr>
      <tr class="table-header mobile">
        <td>Table Title</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(content, rowIndex) in contents" :key="rowIndex" class="body-small">
        <td v-for="(value, index) in content" :key="index" class="table-content">
          <span class="content-title">{{ headers[index] }}: </span>{{ value }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  const props = defineProps({
    headers: {
      required: true,
      type: Array
    },
    contents: {
      required: true,
      type: Array
    },
    classes: {
      type: String,
      default: 'table-primary'
    }
  })
</script>
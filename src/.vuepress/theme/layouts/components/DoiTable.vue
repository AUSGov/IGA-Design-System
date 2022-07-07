<template>
  <div>
    <table class="table table-striped">
      <thead :class="classes">
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
        <tr>
          <td>Table Title</td>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(content, rowIndex) in contents" :key="rowIndex">
        <td v-for="(value, index) in content" :key="index">
          <span class="content-title">{{ headers[index] }}: </span><span class="content-value">{{ value }}</span>
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
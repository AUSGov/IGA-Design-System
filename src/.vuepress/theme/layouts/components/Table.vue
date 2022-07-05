<template>
  <div class="doi-table">
    <table class="table table-striped">
      <thead :class="classes" class="body-small">
      <tr class="table-header main">
        <td v-for="header in tableHeaders" :key="header" class="header-title">{{ header }}</td>
      </tr>
      <tr class="table-header mobile">
        <td>Table Title</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="content in tableContents" :key="content" class="body-small">
        <td v-for="key in Object.keys(content)" :key="key" class="table-content">
          <span class="content-title">{{ key }}: </span>{{ content[key] }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  const props = defineProps({
    tableHeaders: {
      required: true,
      type: Array
    },
    tableContents: {
      required: true,
      type: Array
    },
    classes: {
      required: true,
      type: String
    }
  })
</script>
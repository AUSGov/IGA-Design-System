<template>
  <div class="doi-table">
    <table class="table table-striped">
      <thead :class="classes" class="body-small">
      <tr class="table-header first">
        <td v-for="header in tableHeaders" :key="header" class="header-title">{{ header }}</td>
      </tr>
      <tr class="table-header last hide">
        <td>Table Title</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="content in tableContents" :key="content" class="body-small">
        <td v-for="key in Object.keys(content)" :key="key" class="table-content">
          <span class="content-title">{{ key }}: </span>{{ content[key] }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
  import { onMounted } from 'vue';
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
  onMounted(() => {
    //table
    modifyTable()
    $(window).resize(function() {
      modifyTable()
    })
    function modifyTable() {
      const width = $(window).width()
      const $tableHeaderFirst = $('.table-header.first')
      const $tableHeaderLast = $('.table-header.last')
      const $contentTitle = $('.content-title')
      if (width < 992) {
        $tableHeaderFirst.addClass('hide')
        $tableHeaderLast.removeClass('hide')
        $contentTitle.removeClass('hide')
      } else {
        $tableHeaderFirst.removeClass('hide')
        $tableHeaderLast.addClass('hide')
        $contentTitle.addClass('hide')
      }
    }
  })
</script>
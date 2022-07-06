<template>
  <div class="doi-table">
    <table class="table table-striped">
      <thead class="table-primary body-small">
      <tr class="table-header main">
        <td class="header-title">Title</td>
        <td class="header-title"></td>
        <td class="header-title">Date</td>
        <td class="header-title">Publisher</td>
      </tr>
      <tr class="table-header mobile">
        <td>Table Title</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="index in 18" :key="index" class="body-small">
        <td colspan="2" class="table-content"><span class="content-title">Title:</span>Lachlan water resource plan</td>
        <td class="table-content"><span class="content-title">Date:</span>13 Apr 2022	</td>
        <td class="table-content"><span class="content-title">Publisher:</span>AusIndustry</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
</script>
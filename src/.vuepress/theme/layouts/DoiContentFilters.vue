<template>
  <div class="doi-content">
    <div class="container pb-5">
      <h2 id="tabs-filter">Tag and Tabs Filter</h2>
      <TagTabsFilter />
    </div>
    <div class="container pb-5">
      <h2 id="checkbox-filter">Checkbox Filter</h2>
      <CheckboxFilter />
    </div>
    <div class="container pb-5">
      <h2 id="dropdown-filter">Dropdown Filter</h2>
      <DropdownFilter />
    </div>
    <div class="container pb-5">
      <h2 id="search-filters">Site Search</h2>
      <SearchFilter />
    </div>
  </div>
</template>
<script setup>
  import TagTabsFilter from "./components/TagTabsFilter.vue";
  import CheckboxFilter from "./components/CheckboxFilter.vue";
  import DropdownFilter from "./components/DropdownFilter.vue";
  import SearchFilter from "./components/SearchFilter.vue";
</script>

<template>
  <div class="doi-content">
    <div class="container pb-5">
      <h2 id="tabs-filter">Tag and Tabs Filter</h2>
      <TagTabsFilter title="Entities" :contents="['Anti-Dumping Commission', 'Anti-Dumping Review Panel', 'Ausindustry', 'Australian Industry Participation Authority', 'Australian SKA Office', 'Australian SKA Office']"/>
      <TagTabsFilter title="Topics" :contents="['Business', 'Building and construction', 'Corporate', 'Emissions reductions', 'Energy', 'Government to Government', 'Manufacturing', 'Manufacturing']"/>
    </div>
    <div class="container pb-5">
      <h2 id="checkbox-filter">Checkbox Filter</h2>
      <CheckboxFilter/>
    </div>
    <div class="container pb-5">
      <h2 id="dropdown-filter">Dropdown Filter</h2>
      <DropdownFilter/>
    </div>
    <div class="container pb-5">
      <h2 id="search-filters">Site Search</h2>
      <SearchFilter/>
    </div>
  </div>
</template>

<script setup>
  import TagTabsFilter from './components/TagTabsFilter.vue'
  import CheckboxFilter from './components/CheckboxFilter.vue'
  import DropdownFilter from './components/DropdownFilter.vue'
  import SearchFilter from './components/SearchFilter.vue'
</script>

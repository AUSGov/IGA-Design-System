<template>
  <div class="doi-content">
    <Header />
    <div class="pb-6">
      <SectionBanner />
      <DropdownFilter />
    </div>
    <div class="container pb-6">
      <PublicationTable />
      <Pagination />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import DropdownFilter from '../components/DropdownFilter.vue'
import CheckboxFilter from '../components/CheckboxFilter.vue'
import Pagination from '../components/Pagination.vue'
import PublicationTable from '../components/PublicationTable.vue'
import SectionBanner from '../components/SectionBanner.vue'
export default {
  components: {
    Header,
    Footer,
    DropdownFilter,
    CheckboxFilter,
    Pagination,
    PublicationTable,
    SectionBanner,
  }
}
</script>
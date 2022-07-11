<template>
  <div class="doi-content">
    <Header />
    <div class="pb-6">
      <SectionBanner />
      <DropdownFilter />
    </div>
    <div class="container pb-6">
      <DoiTable :headers="publicationTableHeaders" :contents="publicationTableContents"/>
      <Pagination />
    </div>
    <Footer />
  </div>
</template>

<script>
import CheckboxFilter from '../components/CheckboxFilter.vue'
import DoiTable from "../components/DoiTable.vue"
import DropdownFilter from '../components/DropdownFilter.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Pagination from '../components/Pagination.vue'
import SectionBanner from '../components/SectionBanner.vue'
export default {
  components: {
    CheckboxFilter,
    DoiTable,
    DropdownFilter,
    Header,
    Footer,
    Pagination,
    SectionBanner,
  },
  data() {
    return {
      publicationTableHeaders: ['Title', 'Date', 'Publisher'],
      publicationTableContents: [
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
      ],
    }
  }
}
</script>
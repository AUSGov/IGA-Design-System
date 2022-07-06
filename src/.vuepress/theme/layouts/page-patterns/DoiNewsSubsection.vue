<template>
  <div class="doi-content">
    <Header/>
    <EntityBar title="Emissions reduction Assurance Committee" classes="bg-aus-industry-participation-authority"/>
    <SectionBanner/>
    <TagTabsFilter title="Topics" :contents="['Business', 'Building and construction', 'Corporate', 'Emissions reductions', 'Energy', 'Government to Government', 'Manufacturing', 'Manufacturing']"/>
    <div class="container pt-6">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <div class="display-medium heading-underline">Latest Topic News</div>
        <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-4">
        <div class="display-medium heading-underline">Editorial</div>
        <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
      </div>
      <div class="row g-4">
        <div class="col-lg-6">
          <EditorialCard/>
        </div>
        <div class="col-lg-3">
          <EditorialCard variant="xs"/>
        </div>
        <div class="col-lg-3">
          <EditorialCard variant="xs"/>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-4">
        <div class="display-medium heading-underline">Featured News</div>
        <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
      </div>
      <div class="pb-6">
        <FeaturedCardInline :button-link="true"/>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-4">
        <div class="display-medium heading-underline">Events</div>
        <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
      </div>
      <div class="row pb-6 g-4">
        <div class="col-md-6 col-lg-3">
          <EventCard/>
        </div>
        <div class="col-md-6 col-lg-3">
          <EventCard/>
        </div>
        <div class="col-md-6 col-lg-3">
          <EventCard/>
        </div>
        <div class="col-md-6 col-lg-3">
          <EventCard/>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-4">
        <div class="display-medium heading-underline">Case Studies</div>
        <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-4">
        <div class="display-medium heading-underline">Editorial</div>
        <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
      </div>
      <div class="pb-6">
        <div class="row g-4">
          <div class="col-lg-3">
            <EditorialCard variant="xs"/>
          </div>
          <div class="col-lg-3">
            <EditorialCard variant="xs"/>
          </div>
          <div class="col-lg-3">
            <EditorialCard variant="xs"/>
          </div>
          <div class="col-lg-3">
            <EditorialCard variant="xs"/>
          </div>
        </div>
      </div>
    </div>
    <div class="container-small pb-6">
      <ReadMore/>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <CheckboxFilter/>
        </div>
        <div class="col-lg-9">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <div class="display-medium heading-underline">Filter results</div>
            <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
          </div>
          <EditorialCardInline/>
          <EditorialCardInline/>
          <EditorialCardInline/>
          <Pagination />
        </div>
      </div>
    </div>
    <SecondaryFooter/>
    <Footer/>
  </div>
</template>

<script>
  import linkArrowRight from '../../../public/icons/link-arrow-right.svg?raw'
  import Header from '../components/Header.vue'
  import EntityBar from '../components/EntityBar.vue'
  import SectionBanner from '../components/SectionBanner.vue'
  import TagTabsFilter from '../components/TagTabsFilter.vue'
  import FeaturedCardInline from '../components/FeaturedCardInline.vue'
  import EventCard from '../components/EventCard.vue'
  import EditorialCard from '../components/EditorialCard.vue'
  import DoiTable from '../components/DoiTable.vue'
  import ReadMore from '../components/ReadMore.vue'
  import Footer from '../components/Footer.vue'
  import EditorialCardInline from '../components/EditorialCardInline.vue'
  import CheckboxFilter from '../components/CheckboxFilter.vue'
  import Pagination from '../components/Pagination.vue'
  import SecondaryFooter from '../components/SecondaryFooter.vue'

  export default {
    components: {
      SecondaryFooter,
      Pagination,
      CheckboxFilter,
      EditorialCardInline,
      Footer,
      ReadMore,
      DoiTable,
      EditorialCard,
      EventCard,
      FeaturedCardInline,
      TagTabsFilter,
      SectionBanner,
      EntityBar,
      Header
    },
    data () {
      return {
        linkArrowRight,
        tableHeaders: ['Part', 'Title', 'Provisions of Access Code', 'Current referenced version', 'Proposed referenced version'],
        tableContents: [
          ['Part 1', 'General requirements for access – New building work (incorporating amendments 1 and 2)', 'A1.1, D3.1, D3.2, D3.3, D3.6, D3.8, D3.9, D3.10, D3.12, D5.2, D5.3, F2.4', '2009', '2021'],
          ['Part 1', 'General requirements for access – New building work (incorporating amendments 1 and 2)', 'A1.1, D3.1, D3.2, D3.3, D3.6, D3.8, D3.9, D3.10, D3.12, D5.2, D5.3, F2.4', '2009', '2021'],
          ['Part 1', 'General requirements for access – New building work (incorporating amendments 1 and 2)', 'A1.1, D3.1, D3.2, D3.3, D3.6, D3.8, D3.9, D3.10, D3.12, D5.2, D5.3, F2.4', '2009', '2021'],
          ['Part 1', 'General requirements for access – New building work (incorporating amendments 1 and 2)', 'A1.1, D3.1, D3.2, D3.3, D3.6, D3.8, D3.9, D3.10, D3.12, D5.2, D5.3, F2.4', '2009', '2021'],
        ],
      }
    }
  }
</script>
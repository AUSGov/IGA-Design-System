<template>
  <div class="doi-content">
    <Header/>
    <SectionBanner/>
    <TagTabsFilter title="Entities" :contents="['Anti-Dumping Commission', 'Anti-Dumping Review Panel', 'Ausindustry', 'Australian Industry Participation Authority', 'Australian SKA Office', 'Australian SKA Office']"/>
    <TagTabsFilter title="Topics" :contents="['Business', 'Building and construction', 'Corporate', 'Emissions reductions', 'Energy', 'Government to Government', 'Manufacturing', 'Manufacturing']"/>
    <div class="container-small">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <div class="display-medium heading-underline">Featured News</div>
        <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
      </div>
      <div class="pb-6">
        <FeaturedCardInline :button-link="true"/>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-4">
        <div class="display-medium heading-underline">Title</div>
        <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
      </div>
      <div class="row pb-6 g-4">
        <div class="col-md-6 col-lg-4">
          <EventCard/>
        </div>
        <div class="col-md-6 col-lg-4">
          <EventCard/>
        </div>
        <div class="col-md-6 col-lg-4">
          <EventCard/>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-4">
        <div class="display-medium heading-underline">Featured News</div>
        <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
      </div>
      <div class="pb-6">
        <div class="row g-4">
          <div class="col-12">
            <FeaturedCardInline :button-link="true"/>
          </div>
          <div class="col-lg-6">
            <EditorialCard/>
          </div>
          <div class="col-lg-6">
            <EditorialCard/>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- TODO <Table/>-->
    </div>
    <div class="container-small pb-6">
      <ReadMore/>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">

        </div>
        <div class="col-lg-9">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <div class="display-medium heading-underline">Filter results</div>
            <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
          </div>
          <EditorialCardInline/>
          <EditorialCardInline/>
          <EditorialCardInline/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import linkArrowRight from '../../../public/icons/link-arrow-right.svg?raw'
  import Header from '../components/Header.vue'
  import SectionBanner from '../components/SectionBanner.vue'
  import TagTabsFilter from '../components/TagTabsFilter.vue'
  import FeaturedCardInline from '../components/FeaturedCardInline.vue'
  import EventCard from '../components/EventCard.vue'
  import EditorialCard from '../components/EditorialCard.vue'
  import Table from '../components/Table.vue'
  import ReadMore from '../components/ReadMore.vue'
  import Footer from '../components/Footer.vue'
  import EditorialCardInline from '../components/EditorialCardInline.vue'

  export default {
    components: {
      EditorialCardInline,
      Footer,
      ReadMore,
      Table,
      EditorialCard,
      EventCard,
      FeaturedCardInline,
      TagTabsFilter,
      SectionBanner,
      Header
    },
    data () {
      return {
        linkArrowRight
      }
    }
  }
</script>
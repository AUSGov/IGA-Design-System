<template>
  <div class="doi-content py-5">
    <div id="featured-news" class="pb-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <div class="display-medium heading-underline">Featured News</div>
          <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
        </div>
        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <NewsCard/>
          </div>
          <div class="col-md-6 col-lg-3">
            <NewsCard/>
          </div>
          <div class="col-md-6 col-lg-3">
            <NewsCard/>
          </div>
          <div class="col-md-6 col-lg-3">
            <NewsCard/>
          </div>
        </div>
      </div>
    </div>

    <div id="editorials" class="pb-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <div class="display-medium heading-underline">Editorials</div>
          <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
        </div>

        <!-- Medium (base) and extra small card -->
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

          <!-- Small card -->
          <div class="col-lg-4">
            <EditorialCard variant="sm"/>
          </div>
          <div class="col-lg-4">
            <EditorialCard variant="sm"/>
          </div>
          <div class="col-lg-4">
            <EditorialCard variant="sm"/>
          </div>

          <!-- Extra small card -->
          <div class="col-lg-3">
            <EditorialCard variant="xs"/>
          </div>
          <div class="col-lg-3">
            <EditorialCard variant="xs" :subtitle="false"/>
          </div>
          <div class="col-lg-3">
            <EditorialCard variant="xs" :subtitle="false" :text="false"/>
          </div>
          <div class="col-lg-3">
            <EditorialCard variant="xs" :subtitle="false" :text="false" :link="false" :list="true"/>
          </div>
        </div>
        <h2 id="filtered-landing-page-card">Filtered Landing Page Card</h2>
        <EditorialCardInline :link="false"/>
        <EditorialCardInline/>
      </div>
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="featured-editorials">Featured Editorials</h2>
      </div>
      <div class="featured-editorials bg-light-teal-30">
        <div class="container">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <div class="display-medium heading-underline">Inspiring Australia</div>
            <a href="#" class="fw-bold link-icon">See all Inspiring Australia news<span v-html="linkArrowRight"></span></a>
          </div>
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
    </div>

    <div class="container pb-5">
      <h2 id="navigation-card">Navigation Card</h2>
      <div class="row g-5">
        <div class="col-md-6">
          <NavigationCard variant="inline"/>
        </div>
        <div class="col-md-6">
          <NavigationCard variant="inline" :text="false"/>
        </div>
        <div class="col-md-6">
          <NavigationCard variant="inline" :image="false"/>
        </div>
        <div class="col-md-6">
          <NavigationCard variant="inline" :text="false" :image="false"/>
        </div>
        <div class="col-md-6">
          <NavigationCard/>
        </div>
        <div class="col-md-6">
          <div class="pb-3">
            <NavigationCard variant="inline" classes="bg-primary text-white"/>
          </div>
          <NavigationCard variant="inline" classes="bg-industry-innovation-science text-white"/>
        </div>
      </div>
    </div>

    <div class="container">
      <h2 id="biography-card">Biography Card</h2>
      <div class="row g-5 pb-5">
        <div class="col-md-6">
          <BiographyCard/>
        </div>
        <div class="col-md-6">
          <BiographyCard classes="biography-card--secondary"/>
        </div>
        <div class="col-md-6">
          <BiographyCard classes="biography-card--full" :text="true" :link="true"/>
        </div>
        <div class="col-md-6">
          <BiographyCard classes="biography-card--full biography-card--secondary" :text="true" :link="true"/>
        </div>
        <div class="col-md-6">
          <BiographyCard classes="biography-card--card"/>
        </div>
      </div>

      <h2 id="featured-card">Featured Card</h2>
      <div class="pb-5">
        <FeaturedCard/>
      </div>
      <div class="pb-5">
        <FeaturedCard classes="featured-card--right"/>
      </div>
      <div class="pb-5">
        <FeaturedCardInline/>
      </div>
      <div class="pb-5">
        <FeaturedCardInline :button-link="true"/>
      </div>
      <div class="pb-5">
        <FeaturedCardInline classes="featured-card-inline--right" :button-link="true"/>
      </div>
      <div class="pb-5">
        <FeaturedCardNoBg/>
      </div>
      <div class="pb-5">
        <FeaturedCardNoBg classes="featured-card--right"/>
      </div>
      <h2 id="event-card">Event Card</h2>
      <div class="row pb-5 g-4">
        <div class="col-md-6 col-lg-3">
          <EventCard/>
        </div>
        <div class="col-md-6 col-lg-3">
          <EventCard/>
        </div>
      </div>
      <h2 id="promotional-cards">Promotional Card</h2>
    </div>
    <div class="promotional-cards bg-promo pb-5">
      <div class="container">
        <div class="row g-4 justify-content-center">
          <div class="col-6 col-lg-3">
            <PromotionalCard/>
          </div>
          <div class="col-6 col-lg-3">
            <PromotionalCard/>
          </div>
          <div class="col-6 col-lg-3">
            <PromotionalCard/>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 id="snippet-card">Snippet Card</h2>
      <div class="pb-5">
        <SnippetCard/>
      </div>
      <h2 id="rfq-card">RFQ Card</h2>
      <div class="pb-5">
        <RfqCard/>
      </div>
      <div class="pb-5">
        <RfqCard classes="rfq-card--no-img" :image="false" button-class="btn-quote"/>
      </div>
      <h2 id="adc-card">ADC Card</h2>
      <div class="pb-5">
        <AdcCard/>
      </div>
      <div class="pb-5">
        <h2 id="search-landing-card">Search landing card</h2>
        <SearchLandingCard/>
      </div>
    </div>
  </div>
</template>

<script>
  import linkArrowRight from '../../public/icons/link-arrow-right.svg?raw'
  import NewsCard from './components/NewsCard.vue'
  import EditorialCard from './components/EditorialCard.vue'
  import EditorialCardInline from './components/EditorialCardInline.vue'
  import NavigationCard from './components/NavigationCard.vue'
  import BiographyCard from './components/BiographyCard.vue'
  import FeaturedCard from './components/FeaturedCard.vue'
  import FeaturedCardInline from './components/FeaturedCardInline.vue'
  import FeaturedCardNoBg from './components/FeaturedCardNoBg.vue'
  import EventCard from './components/EventCard.vue'
  import PromotionalCard from './components/PromotionalCard.vue'
  import SnippetCard from './components/SnippetCard.vue'
  import RfqCard from './components/RfqCard.vue'
  import AdcCard from './components/AdcCard.vue'
  import SearchLandingCard from './components/SearchLandingCard.vue'

  export default {
    components: {
      SearchLandingCard,
      AdcCard,
      RfqCard,
      SnippetCard,
      PromotionalCard,
      EventCard,
      FeaturedCardNoBg,
      FeaturedCardInline,
      FeaturedCard,
      BiographyCard,
      NavigationCard,
      EditorialCardInline,
      EditorialCard,
      NewsCard
    },
    data () {
      return {
        linkArrowRight,
      }
    }
  }
</script>

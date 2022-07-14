<template>
  <div class="doi-content">
    <Header/>
    <NewsArticle/>
    <div class="container-small pt-6">
      <p class="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit malesuada viverra est magna sapien iaculis. Vitae arcu id dignissim enim eget viverra. Integer cras pharetra egestas tempus et volutpat, blandit. Arcu tristique dolor at donec tempor in et dictum vitae. Consectetur ipsum aliquet maecenas elit rhoncus. Cursus vitae duis volutpat condimentum at dignissim rhoncus ut ac. Mauris lobortis lacus tellus risus amet. Vel aliquet bibendum a leo lobortis vulputate. Sit quis quis egestas est amet urna, enim enim.</p>
      <MediaGallery classes="body-width"/>
      <div class="d-flex align-items-center justify-content-between mb-4">
        <div class="display-medium heading-underline">Case Studies</div>
        <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
      </div>
      <div class="row g-4 pb-6">
        <div class="col-md-6 col-lg-4">
          <EditorialCard variant="xs"/>
        </div>
        <div class="col-md-6 col-lg-4">
          <EditorialCard variant="xs"/>
        </div>
        <div class="col-md-6 col-lg-4">
          <EditorialCard variant="xs"/>
        </div>
      </div>
      <ReadMore class="pb-6"/>
    </div>
    <SecondaryFooter/>
    <Footer/>
  </div>
</template>

<script>
  import linkArrowRight from '../../../public/icons/link-arrow-right.svg?raw'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import SecondaryFooter from '../components/SecondaryFooter.vue'
  import NewsArticle from '../components/NewsArticle.vue'
  import MediaTranscript from '../components/MediaTranscript.vue'
  import FeaturedCardInline from '../components/FeaturedCardInline.vue'
  import NavigationCard from '../components/NavigationCard.vue'
  import EventCard from '../components/EventCard.vue'
  import EditorialCard from '../components/EditorialCard.vue'
  import MediaGallery from '../components/MediaGallery.vue'
  import ReadMore from '../components/ReadMore.vue'

  export default {
    components: {
      ReadMore,
      MediaGallery,
      EditorialCard,
      EventCard,
      NavigationCard,
      FeaturedCardInline,
      MediaTranscript,
      NewsArticle,
      SecondaryFooter,
      Footer,
      Header
    },
    data () {
      return {
        linkArrowRight
      }
    }
  }
</script>
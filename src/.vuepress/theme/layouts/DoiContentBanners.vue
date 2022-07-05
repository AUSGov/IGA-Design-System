<template>
  <div class="doi-content py-5">
    <div class="pb-5">
      <div class="container">
        <h2 id="carousel">Carousel</h2>
      </div>
      <Carousel />
      <CarouselSingle />
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="standard-banner">Standard Banner</h2>
      </div>
      <StandardBanner />
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="section-banner">Section Banner</h2>
      </div>
      <SectionBanner />
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="news-article">News article, case study, event banner</h2>
      </div>
      <NewsArticle />
    </div>


    <div class="pb-5">
      <div class="container">
        <h2 id="publication-banner">Publication banner</h2>
      </div>
      <PublicationBanner />
    </div>
  </div>
</template>

<script>
  import Carousel from "./components/Carousel.vue";
  import CarouselSingle from "./components/CarouselSingle.vue";
  import NewsArticle from "./components/NewsArticle.vue";
  import PublicationBanner from "./components/PublicationBanner.vue";
  import StandardBanner from "./components/StandardBanner.vue";
  import SectionBanner from './components/SectionBanner.vue'
  export default {
    components: {
      Carousel,
      CarouselSingle,
      NewsArticle,
      PublicationBanner,
      StandardBanner,
      SectionBanner,
    }
  }
</script>
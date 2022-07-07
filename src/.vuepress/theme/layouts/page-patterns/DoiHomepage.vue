<template>
  <div class="doi-content">
    <Header />
    <Carousel />
    <div class="container py-6 text-gray-700">
      <div class="pb-5">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <div class="display-medium heading-underline">Policy in focus</div>
        </div>
        <div class="row g-4 pb-5">
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
      <div class="pb-5">
        <div class="d-flex align-items-center justify-content-between pb-4">
          <div class="display-medium heading-underline">Featured Publications</div>
          <a href="#" class="fw-bold link-icon">More publications <span v-html="linkArrowRight"></span></a>
        </div>
        <div class="pb-5">
          <FeaturedCardNoBg title="Dark Energy Survey Evolves" />
        </div>
        <div class="pb-6">
          <FeaturedCardNoBg title="Dark Energy Survey Evolves" classes="featured-card--right" :image="'url(\'/images/boat-sample.png\')'" />
        </div>
        <div class="pb-4">
          <div class="d-flex align-items-center justify-content-between pb-4">
            <div class="display-medium heading-underline">Featured news</div>
            <a href="#" class="fw-bold link-icon">More news <span v-html="linkArrowRight"></span></a>
          </div>
        </div>
        <div class="pb-4">
          <div class="d-flex align-items-center justify-content-between pb-4">
            <div class="display-medium heading-underline">Editorial</div>
            <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <EditorialCard/>
            </div>
            <div class="col-lg-6">
              <EditorialCard/>
            </div>
          </div>
        </div>
        <div class="pb-4">
          <div class="d-flex align-items-center justify-content-between pb-4">
            <div class="display-medium heading-underline">Editorial</div>
            <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
          </div>
          <div class="row">
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
        <div class="py-6">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <div class="display-medium heading-underline">Our department</div>
          </div>
          <div class="row g-4 pb-5">
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
      <div>
        <FeaturedCard classes="featured-card--right"/>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
  import linkArrowRight from "../../../public/icons/link-arrow-right.svg?raw"
  import Carousel from "../components/Carousel.vue"
  import EditorialCard from "../components/EditorialCard.vue"
  import FeaturedCard from "../components/FeaturedCard.vue"
  import FeaturedCardNoBg from "../components/FeaturedCardNoBg.vue"
  import Header from "../components/Header.vue"
  import Footer from "../components/Footer.vue"
  import NewsCard from "../components/NewsCard.vue"
</script>
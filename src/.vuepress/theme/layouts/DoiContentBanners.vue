<template>
  <div class="doi-content py-5">
    <div class="pb-5">
      <div class="container">
        <h2 id="carousel">Carousel</h2>
      </div>
      <div id="carouselMultiple" class="carousel slide" data-bs-ride="false">
        <div class="carousel-controls">
          <div data-bs-target="#carouselMultiple" data-bs-slide="prev">
            <span class="icon" v-html="chevronBack"></span>
            <span class="visually-hidden">Previous</span>
          </div>
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselMultiple" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselMultiple" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div data-bs-target="#carouselMultiple" data-bs-slide="next">
            <span class="icon" v-html="chevronForward"></span>
            <span class="visually-hidden">Next</span>
          </div>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../public/images/carousel-sample.png" class="d-block w-100" alt="">
            <div class="carousel-caption d-none d-md-block">
              <h2>Supporting economic growth and job creation for all Australians</h2>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../../public/images/carousel-sample.png" class="d-block w-100" alt="">
            <div class="carousel-caption d-none d-md-block">
              <h2>Supporting economic growth and job creation for all Australians</h2>
            </div>
          </div>
        </div>
      </div>

      <div id="carouselSingle" class="carousel slide" data-bs-ride="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../public/images/carousel-sample.png" class="d-block w-100" alt="">
            <div class="carousel-caption d-none d-md-block">
              <h2>Supporting economic growth and job creation for all Australians</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="standard-banner">Standard Banner</h2>
      </div>
      <div class="standard-banner">
        <div class="container">
          <div class="banner-content">
            <div class="banner-title">Emissions Reduction Assurance Committee</div>
            <p class="body-lead">The Emissions Reduction Assurance Committee (ERAC) is an independent statutory committee established under the Carbon Credits (Carbon Farming Initiative) Act 2011. </p>
          </div>
        </div>
      </div>
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="section-banner">Section Banner</h2>
      </div>
      <div class="section-banner">
          <div class="container">
          <div class="banner-content">
            <div class="banner-title">Emissions Reduction Assurance Committee</div>
            <p class="body-lead">The Emissions Reduction Assurance Committee (ERAC) is an independent statutory committee established under the Carbon Credits (Carbon Farming Initiative) Act 2011. </p>
          </div>
        </div>
        <div class="img-wrap">
          <img :src="$withBase('/images/banner-sample.png')" alt="">
        </div>
      </div>
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="news-article">News article, case study, event banner</h2>
      </div>
      <div class="news-article">
        <div class="container">
          <h1 class="text-primary">Dark Energy Survey Evolves or a longer title with three</h1>
          <p class="body-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue neque tellus, pellentesque et scelerisque. Adipiscing elit. Congue neque tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" class="link-icon mb-3">Link<span v-html="linkArrowRight"></span></a>
          <div class="body-small mb-3 text-gray-500">24 November 2021 • 2 min read</div>
          <div class="categories mb-3">
            <a href="#" class="d-inline-block border p-2 text-gray-500 rounded-pill">Advanced manufacturing</a>
            <a href="#" class="d-inline-block border p-2 text-gray-500 rounded-pill">Space</a>
          </div>
          <figure class="figure">
            <img class="mb-2" :src="$withBase('/images/banner-sample.png')" alt="">
            <figcaption class="figure-caption text-end">Caption Image from Getty images.</figcaption>
          </figure>
        </div>
      </div>
    </div>


    <div class="pb-5">
      <div class="container">
        <h2 id="publication-banner">Publication banner</h2>
      </div>
      <div class="publication-banner full-height" style="background-image: url('/images/publication-banner-sample.png');">
        <div class="banner-overlay"></div>
        <div class="container">
          <div class="banner-wrap">
            <div class="banner-title">Premises Standards Review 2021</div>
            <div class="banner-subtitle">A review of the Disability (Access to Premises - Building) Standards 2010</div>
            <div class="banner-date">
              <span>Date published: 29 September 2021</span>
              <span>Date published: 29 September 2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import chevronBack from '../../public/icons/chevron-back.svg?raw'
  import chevronForward from '../../public/icons/chevron-forward.svg?raw'
  import linkArrowRight from '../../public/icons/link-arrow-right.svg?raw'

  export default {
    data () {
      return {
        chevronBack,
        chevronForward,
        linkArrowRight
      }
    }
  }
</script>
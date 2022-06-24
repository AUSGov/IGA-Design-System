<template>
  <div class="doi-content">
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

    <div class="standard-banner">
      <div class="container">
        <div class="banner-content">
          <div class="banner-title">Emissions Reduction Assurance Committee</div>
          <p class="body-lead">The Emissions Reduction Assurance Committee (ERAC) is an independent statutory committee established under the Carbon Credits (Carbon Farming Initiative) Act 2011. </p>
        </div>
      </div>
    </div>

    <div class="section-banner">
        <div class="container">
        <div class="banner-content">
          <div class="banner-title">Emissions Reduction Assurance Committee</div>
          <p class="body-lead">The Emissions Reduction Assurance Committee (ERAC) is an independent statutory committee established under the Carbon Credits (Carbon Farming Initiative) Act 2011. </p>
        </div>
      </div>
      <div class="img-wrap">
        <img src="../../public/images/banner-sample.png" alt="">
      </div>
    </div>

    <div class="publication-banner">
      <div class="banner-overlay"></div>
      <div class="container">
        <div class="banner-wrap">
          <div class="banner-title">Premises Standards Review 2021</div>
          <div class="banner-subtitle">A review of the Disability (Access to Premises - Building) Standards 2010</div>
          <div class="banner-date">Date published: 29 September 2021</div>
          <div class="banner-date">Date updated: 29 September 2021</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import chevronBack from '../../public/icons/chevron-back.svg?raw'
  import chevronForward from '../../public/icons/chevron-forward.svg?raw'

  export default {
    data () {
      return {
        chevronBack,
        chevronForward,
      }
    }
  }
</script>
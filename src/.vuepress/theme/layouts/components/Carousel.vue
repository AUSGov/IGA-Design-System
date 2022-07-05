<template>
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
        <img src="../../../public/images/carousel-sample.png" class="d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h2>Supporting economic growth and job creation for all Australians</h2>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../../../public/images/carousel-sample.png" class="d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block">
          <h2>Supporting economic growth and job creation for all Australians</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import chevronBack from '../../../public/icons/chevron-back.svg?raw'
  import chevronForward from '../../../public/icons/chevron-forward.svg?raw'
</script>
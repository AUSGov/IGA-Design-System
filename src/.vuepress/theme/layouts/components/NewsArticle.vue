<template>
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
</template>
<script setup>
  import linkArrowRight from '../../../public/icons/link-arrow-right.svg?raw'
</script>
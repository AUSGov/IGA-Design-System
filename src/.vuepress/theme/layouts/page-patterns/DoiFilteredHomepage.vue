<template>
  <div class="doi-content">
    <Header />
    <div class="pb-6">
      <SectionBanner />
    </div>
    <div class="container pb-6">
      <div class="row">
        <div class="col-lg-4">
          <div>
            <CheckboxFilter />
          </div>
        </div>
        <div class="col-lg-8">
          <div class="pb-5">
            <snippet-card />
          </div>
          <div class="pb-5">
            <snippet-card />
          </div>
          <div class="pb-5">
            <snippet-card />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
  import CheckboxFilter from "../components/CheckboxFilter.vue"
  import Footer from "../components/Footer.vue"
  import Header from "../components/Header.vue"
  import Pagination from "../components/Pagination.vue"
  import SectionBanner from "../components/SectionBanner.vue"
  import SnippetCard from "../components/SnippetCard.vue"
</script>
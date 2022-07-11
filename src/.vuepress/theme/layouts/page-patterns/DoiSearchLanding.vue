<template>
  <div class="doi-content">
    <Header />
    <SectionBanner />
    <div class="container-small py-5">
      <SearchFilter classes="shadow-none" :icon="false" />
    </div>
    <div class="container pb-6">
      <div class="row">
        <div class="col-lg-4">
          <CheckboxFilter />
        </div>
        <div class="col-lg-8">
          <div class="d-flex align-items-center justify-content-between pb-3">
            <div class="display-medium heading-underline text-gray-700">Currently displaying results for</div>
          </div>
          <div class="pb-3">
            <FilterButton />
          </div>
          <div class="row py-3 mb-5 border-top border-bottom border-black align-items-center">
            <div class="col-lg-3">
              <select title="Sort by:" class="mb-0 me-3">
                <option value="1">Relevancy</option>
                <option value="2">Date: Newest First</option>
                <option value="3">Date: Oldest First</option>
                <option value="4">Title: A - Z</option>
                <option value="5">Title: Z - A</option>
              </select>
            </div>
            <div class="col-lg-3">
              <select title="Results per page" class="mb-0">
                <option value="1">10 results per page</option>
                <option value="2">10 results per page</option>
                <option value="3">10 results per page</option>
                <option value="4">10 results per page</option>
                <option value="5">10 results per page</option>
              </select>
            </div>
            <div class="col-lg-6">
              <Pagination :text="false" />
            </div>
          </div>
          <div class="pb-5">
            <SearchLandingCard classes="text-gray-700" />
          </div>
          <div class="pb-5">
            <SearchLandingCard classes="text-gray-700" />
          </div>
          <div class="pb-5">
            <SearchLandingCard classes="text-gray-700" />
          </div>
          <div class="pb-5">
            <SearchLandingCard classes="text-gray-700" />
          </div>
          <div class="pb-5">
            <SearchLandingCard classes="text-gray-700" />
          </div>
          <div class="pb-4">
            <SearchLandingCard classes="text-gray-700" />
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
  import FilterButton from "../components/FilterButton.vue"
  import Footer from "../components/Footer.vue"
  import Header from "../components/Header.vue"
  import Pagination from "../components/Pagination.vue"
  import SearchFilter from "../components/SearchFilter.vue"
  import SectionBanner from "../components/SectionBanner.vue"
  import SearchLandingCard from "../components/SearchLandingCard.vue"
</script>
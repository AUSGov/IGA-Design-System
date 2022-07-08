<template>
  <div class="category-filters">
    <button class="button-container button-plain  heading-extra-small-caps" id="category-filter-button" type="button" data-bs-toggle="modal" data-bs-target="#filter-modal">
      <span class="filters-icon" v-html="filters"></span>
      <span >Filter</span>
    </button>
    <div class="category-filters-content">
      <div class="category-container">
        <div class="filter-container heading-extra-small-caps">
          <span class="filters-icon" v-html="filters"></span>
          <span class="title-label">Filters</span>
          <button class="button-plain close-icon" v-html="close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="container">
          <div class="row">
            <div v-for="index in 4" :key="index" class="col">
              <div class="title-container">
                Category
              </div>
              <div class="content-container">
                <select title="All Categories">
                  <option value="1">Australian Industry Participation Authority</option>
                  <option value="2">Anti-Dumping Commission</option>
                  <option value="3">AusIndustry</option>
                  <option value="4">Australian Industry Participation Authority...</option>
                  <option value="5">Australian Radioactive Waste Authority</option>
                </select>
              </div>
            </div>
            <div class="col">
              <div class="link-container link-large">
                <a href="#" class="link-icon apply-container">Apply<span v-html="arrowRight" /></a>
                <a href="#" class="link-icon reset-container"><span v-html="circleCross" />Reset</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import filters from '../../../public/icons/filters.svg?raw'
  import close from '../../../public/icons/close.svg?raw'
  import circleCross from '../../../public/icons/circle-cross.svg?raw'
  import arrowRight from '../../../public/icons/arrow-long-right.svg?raw'
  import { onMounted } from 'vue'

  onMounted(() => {
    $('select').selectpicker()
    $('button').removeClass('btn-light')
    category_wrap()

    $(window).resize(category_wrap)
  })

  const category_wrap = () => {
    const width = $(window).width()
    const $filterButton = $('#category-filter-button')
    const $filterModal = $('#filter-modal')
    const $categoryFiltersContent = $('.category-filters-content')
    const $row = $('.row')
    if (width < 768) {
      if ($filterModal.length === 0) {
        $categoryFiltersContent.wrapAll(
            '<div class="modal fade" id="filter-modal" tabIndex="-1" aria-labelledby="filterModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-scrollable"><div class="modal-content"></div></div></div>'
        )
      }
      if ($filterButton.hasClass('hide')) {
        $filterButton.removeClass('hide')
      }
      if(!$row.hasClass('row-cols-1')) {
        $row.addClass('row-cols-1')
      }
      return
    }
    //unwrap modal
    //hide button
    if ($filterModal.length !== 0) {
      $categoryFiltersContent.unwrap()
      $categoryFiltersContent.unwrap()
      $categoryFiltersContent.unwrap()
    }
    if (!$filterButton.hasClass('hide')) {
      $filterButton.addClass('hide')
    }
    if($row.hasClass('row-cols-1')) {
      $row.removeClass('row-cols-1')
    }
  }
</script>

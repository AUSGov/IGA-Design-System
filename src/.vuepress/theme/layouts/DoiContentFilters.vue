<template>
  <div class="doi-content">
    <nav class="filters">
      <div class="title-wrapper-container">
        <span class="title-container border-end border-2 lead">Entities</span>
      </div>
      <div class="nav-group">
        <ul class="nav nav-tabs heading-extra-small">
          <li class="nav-item">
            <a aria-current="page" href="#">Anti-Dumping Commission</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" href="#">Anti-Dumping Review Panel</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" href="#">Ausindustry</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" href="#">Australian Industry Participation Authority</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" href="#">Australian SKA Office</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" href="#">Australian SKA Office</a>
          </li>
        </ul>
      </div>
      <div class="icon-container">
        <span class="icon" v-html="chevronRight"></span>
      </div>
    </nav>
    <nav class="filters mb-5">
      <div class="title-wrapper-container">
        <span class="title-container border-end border-2 lead">Topics</span>
      </div>
      <div class="nav-group">
        <ul class="nav nav-tabs heading-extra-small">
          <li class="nav-item">
            <a aria-current="page" href="#">Business</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" href="#">Building and construction</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" href="#">Corporate</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" href="#">Emissions reductions</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" href="#">Energy</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" href="#">Government to Government</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" href="#">Manufacturing</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" href="#">Manufacturing</a>
          </li>
        </ul>
      </div>
      <div class="icon-container">
        <span class="icon" v-html="chevronRight"></span>
      </div>
    </nav>
    <div class="container">
      <div class="show-filters mb-5">
        <div class="buttons-container heading-small">
          <span class="icon" v-html="filters"></span>
          <button type="button" class="button-plain" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <span class="main-button-text">Show Filters</span>
            <span class="icon chevron-right" v-html="chevronRight"></span>
            <span class="icon chevron-down" v-html="chevronDown"></span>
          </button>
        </div>
        <div id="collapseOne" class="main-accordion accordion-collapse collapse show">
          <div class="filters-accordion">
            <div class="filters-accordion-container">
              <div class="buttons-container heading-small">
                <button type="button" class="button-plain collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTopic" aria-expanded="true" aria-controls="collapseToggle">
                  <span class="circle-add" v-html="circleAdd"></span>
                  <span class="circle-cross" v-html="circleCross"></span>
                  <span class="main-button-text">Topic</span>
                </button>
              </div>
              <div id="collapseTopic" class="accordion-collapse collapse accordion-content">
                <div class="content-container">
                  <select title="Choose a Topic">
                    <option value="1">Australian Industry Participation Authority</option>
                    <option value="2">Anti-Dumping Commission</option>
                    <option value="3">AusIndustry</option>
                    <option value="3">Australian Industry Participation Authority...</option>
                    <option value="3">Australian Radioactive Waste Authority</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="filters-accordion">
            <div class="filters-accordion-container">
              <div class="buttons-container heading-small">
                <button type="button" class="button-plain collapsed" data-bs-toggle="collapse" data-bs-target="#collapseEntity" aria-expanded="true" aria-controls="collapseToggle">
                  <span class="circle-add" v-html="circleAdd"></span>
                  <span class="circle-cross" v-html="circleCross"></span>
                  <span class="main-button-text">Entity</span>
                </button>
              </div>
              <div id="collapseEntity" class="accordion-collapse collapse accordion-content">
                <div class="content-container">
                  <div class="form-check">
                    <div class="pb-1">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckFirst">
                      <label class="form-check-label" for="flexCheckFirst">
                        Australian Industry Participation  Authority
                      </label>
                    </div>
                    <div class="pb-1">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckSecond">
                      <label class="form-check-label" for="flexCheckSecond">
                        Anti-Dumping Commission
                      </label>
                    </div>
                    <div class="pb-1">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckThird">
                      <label class="form-check-label" for="flexCheckThird">
                        AusIndustry
                      </label>
                    </div>
                    <div class="pb-1">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckFourth">
                      <label class="form-check-label" for="flexCheckFourth">
                        Australian Radioactive Waste Authority
                      </label>
                    </div>
                    <div class="pb-1">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckFifth">
                      <label class="form-check-label" for="flexCheckFifth">
                        Australian SKA Office
                      </label>
                    </div>
                    <div class="pb-1">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckSixth">
                      <label class="form-check-label" for="flexCheckSixth">
                        Australian Space Agency
                      </label>
                    </div>
                    <div class="pb-1">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckSeventh">
                      <label class="form-check-label" for="flexCheckSeventh">
                        Critical Minerals Facilitation Office
                      </label>
                    </div>
                    <div class="pb-1">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckEight">
                      <label class="form-check-label" for="flexCheckEight">
                        National Mesurement Institute
                      </label>
                    </div>
                    <div class="pb-1">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckNinth">
                      <label class="form-check-label" for="flexCheckNinth">
                        Office of the Chief Economist
                      </label>
                    </div>
                    <div class="pb-1">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckTenth">
                      <label class="form-check-label" for="flexCheckTenth">
                        Office of the Special Adviser to the Australian Government on Low Emissions Technology
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="filters-accordion">
            <div class="filters-accordion-container">
              <div class="buttons-container heading-small">
                <button type="button" class="button-plain collapsed" data-bs-toggle="collapse" data-bs-target="#collapseCategory" aria-expanded="true" aria-controls="collapseToggle">
                  <span class="circle-add" v-html="circleAdd"></span>
                  <span class="circle-cross" v-html="circleCross"></span>
                  <span class="main-button-text">Category</span>
                </button>
              </div>
              <div id="collapseCategory" class="accordion-collapse collapse accordion-content">
                <div class="content-container">
                  <select title="All Categories">
                    <option value="1">Australian Industry Participation Authority</option>
                    <option value="2">Anti-Dumping Commission</option>
                    <option value="3">AusIndustry</option>
                    <option value="3">Australian Industry Participation Authority...</option>
                    <option value="3">Australian Radioactive Waste Authority</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="filters-accordion">
            <div class="filters-accordion-container">
              <div class="buttons-container heading-small">
                <button type="button" class="button-plain collapsed" data-bs-toggle="collapse" data-bs-target="#collapseYear" aria-expanded="true" aria-controls="collapseToggle">
                  <span class="circle-add" v-html="circleAdd"></span>
                  <span class="circle-cross" v-html="circleCross"></span>
                  <span class="main-button-text">Year</span>
                </button>
              </div>
              <div id="collapseYear" class="accordion-collapse collapse accordion-content">
                <div class="content-container">
                  <div class="slider-container">
                    <input id="ex2" type="text" class="span2" value="" data-slider-min="2016" data-slider-max="2022" data-slider-step="1" data-slider-value="[2016,2022]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="category-filters mb-5">
      <button class="button-container button-plain  heading-extra-small-caps" id="category-filter-button" type="button" data-bs-toggle="modal" data-bs-target="#filter-modal">
        <span class="filters-icon" v-html="filters"></span>
        <span >Filter</span>
      </button>
      <div class="category-filters-content">
        <div class="container">
          <div class="filter-container heading-extra-small-caps">
            <span class="filters-icon" v-html="filters"></span>
            <span class="title-label">Filters</span>
            <button class="button-plain close-icon" v-html="close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="row">
            <div v-for="index in 5" :key="index" class="col">
              <div class="title-container">
                Category
              </div>
              <div class="content-container">
                <select title="All Categories">
                  <option value="1">Australian Industry Participation Authority</option>
                  <option value="2">Anti-Dumping Commission</option>
                  <option value="3">AusIndustry</option>
                  <option value="3">Australian Industry Participation Authority...</option>
                  <option value="3">Australian Radioactive Waste Authority</option>
                </select>
              </div>
            </div>
            <div class="col">
              <div class="link-container link-large">
                <span class="apply-container"><a href="#" class="link-icon">Apply<span v-html="arrowRight" /></a></span>
                <span><a href="#" class="link-icon"><span v-html="circleCross" />Reset</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="search-filters">
        <div class="search-filters-container">
          <form class="form-search button-plain" role="search">
            <span class="search-icon"><span v-html="hamburger" /></span>
            <input class="search-input" id="search-input" placeholder="Search" aria-label="Search">
            <button type="submit" class="submit-button hide button-plain" id="button-submit"><span v-html="arrowRight" /></button>
            <div>
              <button class="button-plain close-icon" v-html="close"></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import chevronRight from '../../public/icons/chevron-right.svg?raw'
  import chevronDown from '../../public/icons/chevron-down.svg?raw'
  import filters from '../../public/icons/filters.svg?raw'
  import close from '../../public/icons/close.svg?raw'
  import circleAdd from '../../public/icons/circle-add.svg?raw'
  import circleCross from '../../public/icons/circle-cross.svg?raw'
  import arrowRight from '../../public/icons/arrow-long-right.svg?raw'
  import hamburger from '../../public/icons/hamburger.svg?raw'

  $(document).ready(
    $(function () {
      const $input = $('#search-input')
      $('select').selectpicker()
      $('button').removeClass('btn-light')
      $('#ex2').slider({
        tooltip_split: 'always'
      })
      category_wrap()
      search_modify()
      $input.keyup(function() {
        console.log('in here')
        const $input = $('#search-input')
        const $buttonSubmit = $('#button-submit')
        if($input.val() !== '') {
          $buttonSubmit.removeClass('hide')
          return
        }
        $buttonSubmit.addClass('hide')
      })
    })
  )

  $(window).resize(function() {
    category_wrap()
    search_modify()
  })

  function search_modify() {
    const width = $(window).width()
    const $searchIcon = $('.search-icon')
    if(width < 768) {
      if(!$searchIcon.hasClass('hide')) {
        $searchIcon.addClass('hide')
      }
      return
    }
    if($searchIcon.hasClass('hide')) {
      $searchIcon.removeClass('hide')
    }
  }

  function category_wrap() {
    const width = $(window).width()
    const $filterButton = $('#category-filter-button')
    const $filterModal = $('#filter-modal')
    const $categoryFiltersContent = $('.category-filters-content')
    if(width < 768) {
      if($filterModal.length === 0) {
        $categoryFiltersContent.wrapAll(
            '<div class="modal fade" id="filter-modal" tabIndex="-1" aria-labelledby="filterModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-scrollable"><div class="modal-content"></div></div></div>'
        )
      }
      if($filterButton.hasClass('hide')) {
        $filterButton.removeClass('hide')
      }
      return
    }
    //unwrap modal
    //hide button
    if($filterModal.length !== 0) {
      $categoryFiltersContent.unwrap()
      $categoryFiltersContent.unwrap()
      $categoryFiltersContent.unwrap()
    }
    if(!$filterButton.hasClass('hide')) {
      $filterButton.addClass('hide')
    }
  }
</script>

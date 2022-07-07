<template>
  <div class="show-filters mb-5">
    <div class="buttons-container heading-small">
      <span class="icon" v-html="filters"></span>
      <button type="button" class="button-plain" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <span class="main-button-text">Show Filters</span>
        <span class="icon chevron-right" v-html="chevronForward"></span>
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
</template>
<script setup>
  import circleAdd from '../../../public/icons/circle-add.svg?raw'
  import circleCross from '../../../public/icons/circle-cross.svg?raw'
  import chevronForward from '../../../public/icons/chevron-forward.svg?raw'
  import chevronDown from '../../../public/icons/chevron-down.svg?raw'
  import filters from '../../../public/icons/filters.svg?raw'
  import { onMounted } from 'vue';

  onMounted(() => {
    $('select').selectpicker()
    $('button').removeClass('btn-light')
    $('#ex2').slider({
      tooltip_split: 'always'
    })
  })
</script>
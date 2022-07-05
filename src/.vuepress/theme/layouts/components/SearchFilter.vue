<template>
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
</template>
<script setup>
  import arrowRight from '../../../public/icons/arrow-long-right.svg?raw'
  import hamburger from '../../../public/icons/hamburger.svg?raw'
  import close from '../../../public/icons/close.svg?raw'
  import { onMounted } from 'vue';

  onMounted(() => {
    const $input = $('#search-input')
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
    search_modify()
  })

  $(window).resize(function() {
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
</script>

<template>
  <div class="paginate mt-4 mb-4">
    <div class="result-container">Showing 1100 - 1200 of 2034 results</div>
    <nav aria-label="Pagination">
      <ul class="pagination">
        <li class="page-item page-previous">
          <a class="page-icon" href="#" aria-label="Previous">
            <span aria-hidden="false" v-html="chevronBack"></span>
          </a>
        </li>
        <li v-for="index in 5" :key="index" class="page-item"><a class="page-link" data-page="index" href="#">{{ index }}</a></li>
        <li class="page-item page-next">
          <a class="page-icon" href="#" aria-label="Next">
            <span aria-hidden="false" v-html="chevronForward"></span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
  import chevronForward from '../../../public/icons/chevron-forward.svg?raw'
  import chevronBack from '../../../public/icons/chevron-back.svg?raw'
  import { onMounted } from 'vue';

  onMounted(() => {
    //pagination
    const $pageLink = $('.page-link')
    $pageLink.eq(1).addClass('active')
    //needs jquery logic to handle checking current page
  })
</script>
<template>
  <div class="paginate">
    <div v-if="text" class="result-container">Showing 1100 - 1200 of 2034 results</div>
    <nav aria-label="Pagination">
      <ul class="pagination">
        <li class="page-item page-previous">
          <a class="page-icon" href="#" aria-label="Previous">
            <span aria-hidden="false" v-html="chevronBack"></span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link active" data-page="index" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" data-page="index" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" data-page="index" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" data-page="index" href="#">4</a>
        </li>
        <li class="page-item">
          <a class="page-link" data-page="index" href="#">5</a>
        </li>
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

  const props = defineProps({
    text: {
      type: Boolean,
      default: null
    }
  })
</script>
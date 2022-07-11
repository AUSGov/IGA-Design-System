<template>
  <div class="promotional-cards bg-promo pb-5">
    <div class="container">
      <div class="row g-4 justify-content-center">
        <div class="col-6 col-lg-3">
          <PromotionalCard/>
        </div>
        <div class="col-6 col-lg-3">
          <PromotionalCard/>
        </div>
        <div class="col-6 col-lg-3">
          <PromotionalCard/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PromotionalCard from './PromotionalCard.vue'

  export default {
    components: {
      PromotionalCard
    }
  }
</script>
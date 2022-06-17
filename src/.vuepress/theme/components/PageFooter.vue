<template>
  <footer class="c-page-footer container-fluid">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-8">
        <div class="footer-wrap">
          <h2>Feedback?</h2>
          <p class="lead-text">We welcome all feedback, designs, or ideas in order to produce the best possible experience for our users. If you’re interested in contributing, submit your ideas to the team.</p>
          <a href="#" class="d-flex align-items-center"><span class="me-1">Contact the design system team</span><div class="d-flex btn-arrow" v-html="arrowRight"></div></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import arrowRight from '../../public/icons/link-arrow-right.svg?raw'

  export default {
    data () {
      return {
        arrowRight
      }
    }
  }
</script>

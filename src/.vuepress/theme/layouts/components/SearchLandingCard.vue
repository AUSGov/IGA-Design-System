<template>
  <div class="card search-landing-card" :class="classes">
    <h2 class="heading-medium">Dark Energy Survey Evolves or a longer title with three of more lines</h2>
    <h2 class="body-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis ut habitant sed egestas. Sagittis, phasellus dui integer at. Pretium leo enim purus nunc vitae, at tellus. Justo mi amet tellus massa dui lectus. Odio elementum justo, commodo ullamcorper facilisis nec. Sit ut non diam et.</h2>
    <div class="body-small text-gray-500">This is a part of publication page</div>
    <div class="body-small text-gray-500">Date published: 21 December 2021 | Date updated: 13 March 2022</div>
    <ul class="tags">
      <li>Entity Tag</li>
      <li>Topic Tag</li>
      <li>Other Tags</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      classes: {
        type: String,
        default: null
      }
    },
    data () {
      return {}
    }
  }
</script>
<template>
  <div class="card" :class="{['card-' + variant]: variant}">
    <div class="card-img-top">
      <div class="img-wrap">
        <img :src="$withBase('images/cards-sample.png')" alt="">
      </div>
    </div>
    <div class="card-body">
      <h4 v-if="subtitle" class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span></h4>
      <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
      <p v-if="text" class="card-text">Ship of the imagination star stuff harvesting star light descended from astronomers finite but unbounded realm of the galaxies.</p>
      <a v-if="link" href="#" class="card-link link-icon">Link <span v-html="linkArrowRight"></span></a>
    </div>
    <ul v-if="list" class="list-group list-group-flush">
      <li class="list-group-item">
        <span v-html="calendar" class="icon"></span><span>Wed 3 November 2021, 9:00am</span></li>
      <li class="list-group-item">
        <span v-html="gauge" class="icon"></span>
        <span>9:00 am to 10:00 am (GMT),<br/>8:00 pm to 9:00 pm (AEDT)</span>
      </li>
      <li class="list-group-item"><span v-html="location" class="icon"></span>Location, Online</li>
      <li class="list-group-item"><span v-html="home" class="icon"></span>Entity Name</li>
    </ul>
  </div>
</template>

<script>
  import linkArrowRight from '../../../public/icons/link-arrow-right.svg?raw'
  import calendar from '../../../public/icons/calendar.svg?raw'
  import gauge from '../../../public/icons/gauge.svg?raw'
  import location from '../../../public/icons/location.svg?raw'
  import home from '../../../public/icons/home-outline.svg?raw'

  export default {
    props: {
      variant: {
        type: String,
        default: null
      },
      subtitle: {
        type: Boolean,
        default: true,
      },
      text: {
        type: Boolean,
        default: true,
      },
      link: {
        type: Boolean,
        default: true,
      },
      list: {
        type: Boolean,
        default: false,
      }
    },
    data () {
      return {
        linkArrowRight,
        calendar,
        gauge,
        location,
        home
      }
    }
  }
</script>
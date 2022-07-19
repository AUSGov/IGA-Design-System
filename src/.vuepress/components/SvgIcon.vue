<template>
  <span class="c-icon" v-html="iconHtml"></span>
</template>

<script>
  import arrowRight from '../public/icons/arrow-right.svg?raw'
  import arrowUp from '../public/icons/arrow-up.svg?raw'
  import arrowDown from '../public/icons/arrow-down.svg?raw'
  import arrowLeft from '../public/icons/arrow-left.svg?raw'
  import arrowLongLeft from '../public/icons/arrow-long-left.svg?raw'
  import arrowLongRight from '../public/icons/arrow-long-right.svg?raw'
  import circleChevronRight from '../public/icons/circle-chevron-right.svg?raw'
  import circleChevronUp from '../public/icons/circle-chevron-up.svg?raw'
  import circleChevronDown from '../public/icons/circle-chevron-down.svg?raw'
  import circleChevronLeft from '../public/icons/circle-chevron-left.svg?raw'
  import circleChevronRightFilled from '../public/icons/circle-chevron-right-filled.svg?raw'
  import circleChevronUpFilled from '../public/icons/circle-chevron-up-filled.svg?raw'
  import circleChevronDownFilled from '../public/icons/circle-chevron-down-filled.svg?raw'
  import circleChevronLeftFilled from '../public/icons/circle-chevron-left-filled.svg?raw'
  import chevronForward from '../public/icons/chevron-forward.svg?raw'
  import chevronUp from '../public/icons/chevron-up.svg?raw'
  import chevronDown from '../public/icons/chevron-down.svg?raw'
  import chevronBack from '../public/icons/chevron-back.svg?raw'
  import caretForward from '../public/icons/caret-forward.svg?raw'
  import caretUp from '../public/icons/caret-up.svg?raw'
  import caretDown from '../public/icons/caret-down.svg?raw'
  import caretBack from '../public/icons/caret-back.svg?raw'
  import linkExternal from '../public/icons/link-external.svg?raw'
  import home from '../public/icons/home.svg?raw'
  import hamburger from '../public/icons/hamburger.svg?raw'
  import hamburgerLeft from '../public/icons/hamburger-left.svg?raw'
  import search from '../public/icons/search.svg?raw'
  import share from '../public/icons/share.svg?raw'
  import download from '../public/icons/download.svg?raw'
  import document from '../public/icons/document.svg?raw'
  import filters from '../public/icons/filters.svg?raw'
  import phone from '../public/icons/phone.svg?raw'
  import mailbox from '../public/icons/mailbox.svg?raw'
  import notification from '../public/icons/notification.svg?raw'
  import location from '../public/icons/location.svg?raw'
  import email from '../public/icons/email.svg?raw'
  import calendar from '../public/icons/calendar.svg?raw'
  import homeOutline from '../public/icons/home-outline.svg?raw'
  import facebook from '../public/icons/facebook.svg?raw'
  import instagram from '../public/icons/instagram.svg?raw'
  import linkedin from '../public/icons/linkedin.svg?raw'
  import twitter from '../public/icons/twitter.svg?raw'
  import youtube from '../public/icons/youtube.svg?raw'

  export default {
    props: {
      icon: {
        type: String
      }
    },
    computed: {
      iconHtml () {
        return this[this.icon]
      }
    },
    data () {
      return {
        arrowRight,
        arrowUp,
        arrowDown,
        arrowLeft,
        arrowLongLeft,
        arrowLongRight,
        circleChevronRight,
        circleChevronUp,
        circleChevronDown,
        circleChevronLeft,
        circleChevronRightFilled,
        circleChevronUpFilled,
        circleChevronDownFilled,
        circleChevronLeftFilled,
        chevronForward,
        chevronUp,
        chevronDown,
        chevronBack,
        caretForward,
        caretUp,
        caretDown,
        caretBack,
        linkExternal,
        home,
        hamburger,
        hamburgerLeft,
        search,
        share,
        download,
        document,
        filters,
        phone,
        mailbox,
        notification,
        location,
        email,
        calendar,
        homeOutline,
        facebook,
        instagram,
        linkedin,
        twitter,
        youtube
      }
    }
  }
</script>
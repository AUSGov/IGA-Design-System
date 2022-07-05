<template>
  <div class="secondary-footer secondary-footer--extended-contact secondary-footer--connect-with-us secondary-footer--subscribe-updates">
    <div class="container">
      <div class="row main-row">
        <div class="col-md base-contact">
          <div class="footer-title">Contact Us</div>
          <div class="mb-4 d-flex">
            <span class="icon" v-html="email"></span>
            <div class="d-flex flex-column">
              <span class="fw-semi-bold">General Enquiries</span>
              <a href="mailto:enquiries@space.gov.au">enquiries@space.gov.au</a>
              <span class="fw-semibold">Media Enquiries</span>
              <a href="mailto:enquiries@space.gov.au">enquiries@space.gov.au</a>
            </div>
          </div>
          <div class="d-flex">
            <span class="icon" v-html="phone"></span>
            <div class="d-flex flex-column">
              <a href="tel:+61 1800 497 182">1800 497 182 (within Australia)</a>
              <a href="tel:+61 2 6276 1166">+61 2 6276 1166</a>
            </div>
          </div>
        </div>
        <div class="col-md extended-contact">
          <div class="footer-title footer-title-placeholder"></div>
          <div class="mb-4 d-flex">
            <span class="icon" v-html="mailbox"></span>
            <div class="d-flex flex-column">
              <span>Australian Space Agency,</span>
              <span>GPO Box 2013,</span>
              <span>CANBERRA ACT 2601</span>
            </div>
          </div>
          <div class="d-flex">
            <span class="icon" v-html="location"></span>
            <div class="d-flex flex-column">
              <span>McEwin Building.</span>
              <span>Lot Fourteen, North Terrace,</span>
              <span>Adelaide SA 5000</span>
            </div>
          </div>
        </div>
        <div class="col-md connect-with-us">
          <div class="footer-title">Connect with us</div>
          <ul>
            <li class="mb-4">
              <span class="icon" v-html="twitter"></span>
              <span>Twitter</span>
            </li>
            <li class="mb-4">
              <span class="icon" v-html="linkedin"></span>
              <span>LinkedIn</span>
            </li>
            <li>
              <span class="icon" v-html="facebook"></span>
              <span>Facebook</span>
            </li>
          </ul>
        </div>
        <div class="col-md subscribe-updates">
          <div class="footer-title">Subscribe for updates</div>
          <span class="icon" v-html="notification"></span>
          <span>Subscribe for the latest news</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import email from '../../../public/icons/email.svg?raw'
  import phone from '../../../public/icons/phone.svg?raw'
  import location from '../../../public/icons/location.svg?raw'
  import twitter from '../../../public/icons/twitter.svg?raw'
  import facebook from '../../../public/icons/facebook.svg?raw'
  import instagram from '../../../public/icons/instagram.svg?raw'
  import linkedin from '../../../public/icons/linkedin.svg?raw'
  import youtube from '../../../public/icons/youtube.svg?raw'
  import externalLink from '../../../public/icons/link-external.svg?raw'
  import linkArrowRight from '../../../public/icons/link-arrow-right.svg?raw'
  import mailbox from '../../../public/icons/mailbox.svg?raw'
  import notification from '../../../public/icons/notification.svg?raw'

  export default {
    data () {
      return {
        email,
        phone,
        location,
        twitter,
        facebook,
        instagram,
        linkedin,
        youtube,
        externalLink,
        linkArrowRight,
        mailbox,
        notification
      }
    }
  }
</script>
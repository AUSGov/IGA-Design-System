<template>
  <footer class="footer">
    <div class="top-footer bg-gray-800">
      <div class="container">
        <div class="row g-lg-5 main-row">
          <div class="col-md-6">
            <div class="footer-menu">
              <div class="row">
                <div class="heading-extra-small-caps mb-3">Section Title</div>
                <div class="col-lg-6">
                  <ul>
                    <li><a href="#" class="link-icon link-secondary">People<span v-html="linkArrowRight"></span></a>
                    </li>
                    <li>
                      <a href="#" class="link-icon link-secondary">Corporate governance<span v-html="linkArrowRight"></span></a>
                    </li>
                    <li>
                      <a href="#" class="link-icon link-secondary">Access to information<span v-html="linkArrowRight"></span></a>
                    </li>
                    <li><a href="#" class="link-icon link-secondary">Work with us<span v-html="linkArrowRight"></span></a>
                    </li>
                    <li>
                      <a href="#" class="d-flex align-items-center">Ministers<span class="ms-1" v-html="externalLink"></span></a>
                    </li>
                    <li>
                      <a href="#" class="d-flex align-items-center">Public consultations<span class="ms-1" v-html="externalLink"></span></a>
                    </li>
                    <li>
                      <a href="#" class="d-flex align-items-center">Portfolio agencies and boards<span class="ms-1" v-html="externalLink"></span></a>
                    </li>
                  </ul>
                </div>
                <div class="d-none d-lg-block col-lg-6">
                  <ul>
                    <li><a href="#" class="link-icon link-secondary">People<span v-html="linkArrowRight"></span></a>
                    </li>
                    <li>
                      <a href="#" class="link-icon link-secondary">Corporate governance<span v-html="linkArrowRight"></span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="heading-extra-small-caps mb-3">Contact Us</div>
            <p>Department of Industry, Science, Energy & Resources</p>
            <ul class="contact-us">
              <li class="mb-3"><a href="#"><span class="icon" v-html="email"></span><span>General Enquiries</span></a>
              </li>
              <li class="mb-3">
                <a href="tel:#"><span class="icon" v-html="phone"></span><span>+61 2 6213 6000</span></a></li>
              <li class="mb-3">
                <a href="#" class="d-flex">
                  <span class="icon" v-html="location"></span>
                  <div class="d-flex flex-column">
                    <span>Industry House,</span>
                    <span>10 Binara Street</span>
                    <span>Canberra (in the CBD)</span>
                  </div>
                </a>
              </li>
            </ul>
            <span>Department of Industry</span>
            <div>ABN: 74 599 609 295</div>
          </div>
          <div class="col-md-12 col-lg-3">
            <div class="subscribe">
              <div class="heading-extra-small-caps mb-3">Subscribe For Updates</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
              <button class="btn btn-primary">Subscribe</button>
            </div>
            <div>
              <div class="heading-extra-small-caps mb-3">Connect with us:</div>
              <ul class="social-icons">
                <li><a href="#"><span class="icon" v-html="twitter"></span></a></li>
                <li><a href="#"><span class="icon" v-html="facebook"></span></a></li>
                <li><a href="#"><span class="icon" v-html="instagram"></span></a></li>
                <li><a href="#"><span class="icon" v-html="youtube"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-footer bg-gray-700">
      <div class="container">
        <div class="d-flex align-items-center justify-content-center flex-column flex-md-row">
          <div class="img-wrap mb-4 me-md-4">
            <img src="../../../public/images/acknowledgement.png" alt="">
          </div>
          <div class="d-flex flex-column description">
            <div class="heading-extra-small-caps mb-3">Acknowledgement of Country</div>
            <p>Our department recognises the First Peoples of this nation and their ongoing connection to culture and country. We acknowledge First Nations Peoples as the Traditional Owners, Custodians and Lore Keepers of the world's oldest living culture and pay respects to their Elders past, present and emerging.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import email from '../../../public/icons/email.svg?raw'
  import phone from '../../../public/icons/phone.svg?raw'
  import location from '../../../public/icons/location.svg?raw'
  import twitter from '../../../public/icons/twitter.svg?raw'
  import facebook from '../../../public/icons/facebook.svg?raw'
  import instagram from '../../../public/icons/instagram.svg?raw'
  import youtube from '../../../public/icons/youtube.svg?raw'
  import externalLink from '../../../public/icons/link-external.svg?raw'
  import linkArrowRight from '../../../public/icons/link-arrow-right.svg?raw'

  export default {
    data () {
      return {
        email,
        phone,
        location,
        twitter,
        facebook,
        instagram,
        youtube,
        externalLink,
        linkArrowRight
      }
    }
  }
</script>
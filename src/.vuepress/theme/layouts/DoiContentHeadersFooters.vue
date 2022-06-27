<template>
  <div class="doi-content">
    <nav class="navbar sticky-top navbar-expand-lg bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" v-html="hamburger"></span>
        </button>
        <a class="navbar-brand" href="/" v-html="logo"></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="mobile-close d-lg-none" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"><span class="icon" v-html="close"></span></div>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="whoWeAre" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Who we are
              </a>
              <div class="dropdown-menu" aria-labelledby="whoWeAre">
                <div class="row main-row">
                  <div class="col-md-6 col-lg-3">
                    <ul>
                      <li><a href="#">Anti-Dumping Commission</a></li>
                      <li><a href="#">Anti-Dumping Review Panel</a></li>
                      <li><a href="#">AusIndustry</a></li>
                    </ul>
                  </div>
                  <div class="col-md-6 col-lg-3">
                    <div class="content-group">
                      <div class="mega-menu-label"><a href="#">Ministers<span class="icon" v-html="linkArrowRight"></span></a></div>
                      <ul>
                        <li><a href="#">Ministers</a></li>
                      </ul>
                    </div>
                    <div class="content-group">
                      <div class="mega-menu-label"><a href="#">People<span class="icon" v-html="linkArrowRight"></span></a></div>
                      <ul>
                        <li><a href="#">Executive team</a></li>
                        <li><a href="#">Organisation chart</a></li>
                        <li><a href="#">International engagements</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3">
                    <div class="content-group">
                      <div class="mega-menu-label"><a href="#">Corporate Governance<span class="icon" v-html="linkArrowRight"></span></a></div>
                      <ul>
                        <li><a href="#">Annual report</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-3">
                    <div class="content-group">
                      <div class="mega-menu-label"><a href="#">Engage with us<span class="icon" v-html="linkArrowRight"></span></a></div>
                      <ul>
                        <li><a href="#">Contact us</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="policyTopics" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Policy topics
              </a>
              <ul class="dropdown-menu" aria-labelledby="policyTopics">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Initiatives and services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Regulations and standards</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Publications</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="engageWithUs" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Engage with us
              </a>
              <ul class="dropdown-menu" aria-labelledby="engageWithUs">
                <li><a class="dropdown-item" href="#">Action</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="search-wrap">
          <a href="#"><span class="icon" v-html="search"></span></a>
        </div>
      </div>
    </nav>

    <div class="entity-bar bg-aus-industry-participation-authority">
      <span>Emissions reduction Assurance Committee</span>
    </div>
    <div class="entity-bar bg-industry-innovation-science">
      <span>Industry Innovation and Science Australia Corporate</span>
    </div>
    <div class="entity-bar bg-inspiring-aus text-black">
      <span>National Measurement Institute</span>
    </div>

    <div class="global-footer">
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
                    Test
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
              <img src="../../public/images/acknowledgement.png" alt="">
            </div>
            <div class="d-flex flex-column description">
              <div class="heading-extra-small-caps mb-3">Acknowledgement of Country</div>
              <p>Our department recognises the First Peoples of this nation and their ongoing connection to culture and country. We acknowledge First Nations Peoples as the Traditional Owners, Custodians and Lore Keepers of the world's oldest living culture and pay respects to their Elders past, present and emerging.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

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
  </div>
</template>

<script>
  import logo from '../../public/images/diser-logo-black.svg?raw'
  import search from '../../public/icons/search.svg?raw'
  import hamburger from '../../public/icons/hamburger.svg?raw'
  import email from '../../public/icons/email.svg?raw'
  import phone from '../../public/icons/phone.svg?raw'
  import location from '../../public/icons/location.svg?raw'
  import twitter from '../../public/icons/twitter.svg?raw'
  import facebook from '../../public/icons/facebook.svg?raw'
  import instagram from '../../public/icons/instagram.svg?raw'
  import linkedin from '../../public/icons/linkedin.svg?raw'
  import youtube from '../../public/icons/youtube.svg?raw'
  import externalLink from '../../public/icons/external-link.svg?raw'
  import linkArrowRight from '../../public/icons/link-arrow-right.svg?raw'
  import chevronBack from '../../public/icons/chevron-back.svg?raw'
  import chevronForward from '../../public/icons/chevron-forward.svg?raw'
  import mailbox from '../../public/icons/mailbox.svg?raw'
  import notification from '../../public/icons/notification.svg?raw'
  import close from '../../public/icons/close.svg?raw'

  export default {
    data () {
      return {
        logo,
        search,
        hamburger,
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
        chevronBack,
        chevronForward,
        mailbox,
        notification,
        close
      }
    }
  }
</script>
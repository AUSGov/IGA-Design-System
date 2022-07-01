<template>
  <div class="doi-content py-5">
    <div class="container pb-5">
      <h2 id="breadcrumbs">Breadcrumbs</h2>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#" v-html="home"></a></li>
          <li class="breadcrumb-item"><a href="#">Breadcrumbs</a></li>
          <li class="breadcrumb-item active" aria-current="page">Breadcrumbs</li>
        </ol>
      </nav>
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="in-section-navigation">In Section Navigation</h2>
      </div>
      <div class="in-this-section-menu">
        <div class="container">
          <a href="#" class="menu-header body-large-bold" data-bs-toggle="collapse" data-bs-target="#inThisSectionMenu" aria-expanded="true" aria-controls="inThisSectionMenu">
            <span class="flex-grow-1">Navigate in this section menu</span>
            <span v-html="chevronDown"></span>
          </a>
        </div>
        <div class="menu-body">
          <div class="container">
            <div id="inThisSectionMenu" class="collapse show">
              <ul class="parent-menu" id="inThisSectionContent">
                <li>
                  <div class="menu-title collapsed" data-bs-toggle="collapse" data-bs-target="#inThisSectionMenuOne" aria-expanded="false" aria-controls="inThisSectionMenuOne">
                    <span class="expand" v-html="add"></span>
                    <span class="close" v-html="subtract"></span>
                    Navigate National Measurement Institute
                  </div>
                  <div class="collapse" id="inThisSectionMenuOne" data-bs-parent="#inThisSectionContent">
                    <ul class="child-menu">
                      <li>
                        <div class="menu-title collapsed" data-bs-toggle="collapse" data-bs-target="#tradeMeasurement" aria-expanded="false" aria-controls="tradeMeasurement">
                          <span class="expand" v-html="add"></span>
                          <span class="close" v-html="subtract"></span>
                          Trade Measurement
                        </div>
                        <div class="collapse" id="tradeMeasurement">
                          <ul class="grandchild-menu">
                            <li>
                              <a href="#">Buying and selling goods</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>In this section level two title</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="menu-title collapsed" data-bs-toggle="collapse" data-bs-target="#inThisSectionMenuTwo" aria-expanded="false" aria-controls="inThisSectionMenuTwo">
                    <span class="expand" v-html="add"></span>
                    <span class="close" v-html="subtract"></span>
                    Find a public weighbridge
                  </div>
                  <div class="collapse" id="inThisSectionMenuTwo" data-bs-parent="#inThisSectionContent">
                    <ul class="child-menu">
                      <li>
                        <a href="#">Trade Measurement</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="menu-title collapsed" data-bs-toggle="collapse" data-bs-target="#inThisSectionMenuThree" aria-expanded="false" aria-controls="inThisSectionMenuThree">
                    <span class="expand"></span>
                    In this section title
                  </div>
                  <div class="menu-title collapse" id="inThisSectionMenuThree" data-bs-parent="#inThisSectionContent">
                    <ul class="child-menu">
                      <li></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="on-this-page-menu" id="on-this-page-menu">
      <div class="nav-button">
        <button class="btn btn-promo btn-nav-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#onThisPageMenu" aria-controls="onThisPageMenu">
          <span class="expand" v-html="add"></span>
          <span class="close" v-html="closeThick"></span>
          <span class="navigate-label">Navigate</span>
        </button>
      </div>
      <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="onThisPageMenu">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Premises Standards Review 2021</h5>
        </div>
        <div class="offcanvas-body">
          <nav>
            <div class="menu-title title-default">Glossary</div>
            <ul class="parent-menu">
                <li><a href="#" class="link-icon link-secondary menu-title title-feature">Message from the Minister<span v-html="linkArrowRight"></span></a></li>
                <li><a href="#" class="link-icon link-secondary menu-title title-feature">Review at a glance<span v-html="linkArrowRight"></span></a></li>
                <li><a href="#" class="link-icon link-secondary menu-title title-feature">Background<span v-html="linkArrowRight"></span></a></li>
                <li>
                  <a href="#" class="link-icon link-secondary menu-title title-feature" data-bs-toggle="collapse" data-bs-target="#review" aria-expanded="true" aria-controls="review">
                    About the 2021 review<span v-html="linkArrowRight"></span>
                  </a>
                  <div class="children-menu collapse show" id="review">
                    <ul>
                      <li><a href="#" class="menu-title sub-section">Sub section 1</a></li>
                      <li><a href="#" class="menu-title sub-section">Sub section 2</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="#" class="link-icon link-secondary menu-title title-feature">Key themes emerging from the review<span v-html="linkArrowRight"></span></a></li>
                <li><a href="#" class="link-icon link-secondary menu-title title-feature">Opportunities for action<span v-html="linkArrowRight"></span></a></li>
                <li><a href="#" class="link-icon link-secondary menu-title title-feature">International approaches<span v-html="linkArrowRight"></span></a></li>
                <li><a href="#" class="link-icon link-secondary menu-title title-feature">Appendix A: Documents referenced by the Premises Standards<span v-html="linkArrowRight"></span></a></li>
                <li><a href="#" class="link-icon link-secondary menu-title title-feature">Appendix B: Second-phase consultations activities list<span v-html="linkArrowRight"></span></a></li>
            </ul>
            <div class="menu-title title-default">Bibliography</div>
          </nav>
        </div>
      </div>
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="content-stepper">Content Stepper</h2>
      </div>
      <div class="content-stepper">
        <div class="stepper-content">
          <button class="btn btn-promo btn-nav-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#onThisPageMenu" aria-controls="onThisPageMenu">
            <span class="expand" v-html="add"></span>
            <span class="close" v-html="closeThick"></span>
            <span class="ms-3">Navigate</span>
          </button>
        </div>
        <a href="#" class="stepper-pages">
          <div class="step-name">Previous</div>
          <div class="step-label">Premises Standards Review 2021</div>
        </a>
        <a href="#" class="stepper-pages">
          <div class="step-name">Next</div>
          <div class="step-label">About the 2021 review</div>
        </a>
      </div>
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="directory-links">Directory Links</h2>
      </div>
      <div class="directory-links bg-light-teal">
        <div class="container">
          <div class="heading-medium">Directory Links</div>
          <div class="row">
            <div class="col-md-6">
              <ul>
                <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
                <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
                <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul>
                <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
                <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
                <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="chapter-banners">Chapter Banners</h2>
      </div>
      <div class="chapter-banners text-dark">
        <div class="banner-overlay"></div>
        <div class="container">
          <div class="icons">
            <span class="share" v-html="share"></span>
            <span class="download" v-html="download"></span>
            <div class="vr bg-black"></div>
            <span class="up text-gray-500" v-html="chevronUp"></span>
            <span class="down text-gray-500" v-html="chevronDown"></span>
          </div>
          <div class="display-medium">Glossary</div>
        </div>
      </div>
      <div class="chapter-banners text-white" style="background-image: url('/images/banner-sample-2.jpeg');">
        <div class="banner-overlay"></div>
        <div class="container">
          <div class="icons">
            <span class="share" v-html="share"></span>
            <span class="download" v-html="download"></span>
            <div class="vr bg-black"></div>
            <span class="up" v-html="chevronUp"></span>
            <span class="down" v-html="chevronDown"></span>
          </div>
          <div class="display-medium">Glossary</div>
        </div>
      </div>
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="read-more">Read More</h2>
      </div>
      <div class="read-more">
        <div class="container">
  <!--      <div class="container" style="max-width: 500px">-->
          <div class="heading-medium mt-3 mb-3">Read more</div>
          <ul>
            <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
            <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
            <li><a href="#" class="link-icon link-secondary">Link<span v-html="linkArrowRight"></span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import home from '../../public/icons/home.svg?raw'
  import chevronUp from '../../public/icons/chevron-up.svg?raw'
  import chevronDown from '../../public/icons/chevron-down.svg?raw'
  import add from '../../public/icons/add.svg?raw'
  import subtract from '../../public/icons/subtract.svg?raw'
  import closeThick from '../../public/icons/close-thick.svg?raw'
  import linkArrowRight from '../../public/icons/link-arrow-right.svg?raw'
  import share from '../../public/icons/share.svg?raw'
  import download from '../../public/icons/download.svg?raw'

  export default {
    data () {
      return {
        home,
        chevronUp,
        chevronDown,
        add,
        subtract,
        closeThick,
        linkArrowRight,
        share,
        download
      }
    }
  }
</script>
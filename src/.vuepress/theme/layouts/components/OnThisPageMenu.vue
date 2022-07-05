<template>
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
</template>

<script>
  import linkArrowRight from '../../../public/icons/link-arrow-right.svg?raw'
  import add from '../../../public/icons/add.svg?raw'
  import closeThick from '../../../public/icons/close-thick.svg?raw'

  export default {
    data () {
      return {
        linkArrowRight,
        add,
        closeThick
      }
    }
  }
</script>
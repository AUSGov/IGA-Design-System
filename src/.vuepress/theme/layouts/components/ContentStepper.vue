<template>
  <div class="content-stepper" :class="classes">
    <div class="stepper-content">
      <div v-if="button" class="btn-group dropup">
        <button class="btn btn-promo btn-nav-menu dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="expand" v-html="add"></span>
          <span class="close" v-html="closeThick"></span>
          <span class="navigate-label">Navigate</span>
        </button>
        <div class="dropdown-menu">
          <div class="menu-title">Australian Government response: Inquiry into Australian Waste Management and Recycling Industries</div>
          <ul class="parent-menu">
            <li><a href="#" class="link-icon link-secondary title-default">Glossary<span v-html="linkArrowRight"></span></a></li>
            <li><a href="#" class="link-icon link-secondary title-feature">Message from the Minister<span v-html="linkArrowRight"></span></a></li>
            <li><a href="#" class="link-icon link-secondary title-feature">Review at a glance<span v-html="linkArrowRight"></span></a></li>
            <li><a href="#" class="link-icon link-secondary title-feature">Background<span v-html="linkArrowRight"></span></a></li>
            <li>
              <a href="#" class="link-icon link-secondary title-feature" data-bs-toggle="collapse" data-bs-target="#review" aria-expanded="true" aria-controls="review">
                About the 2021 review<span v-html="linkArrowRight"></span>
              </a>
              <div class="children-menu collapse show" id="review">
                <ul>
                  <li><a href="#" class="sub-section">Sub section 1</a></li>
                  <li><a href="#" class="sub-section">Sub section 2</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#" class="link-icon link-secondary title-feature">Key themes emerging from the review<span v-html="linkArrowRight"></span></a></li>
            <li><a href="#" class="link-icon link-secondary title-feature">Opportunities for action<span v-html="linkArrowRight"></span></a></li>
            <li><a href="#" class="link-icon link-secondary title-feature">International approaches<span v-html="linkArrowRight"></span></a></li>
            <li><a href="#" class="link-icon link-secondary title-feature">Appendix A: Documents referenced by the Premises Standards<span v-html="linkArrowRight"></span></a></li>
            <li><a href="#" class="link-icon link-secondary title-feature">Appendix B: Second-phase consultations activities list<span v-html="linkArrowRight"></span></a></li>
          </ul>
        </div>
      </div>
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
</template>

<script>
  import add from '../../../public/icons/add.svg?raw'
  import closeThick from '../../../public/icons/close-thick.svg?raw'
  import linkArrowRight from '../../../public/icons/link-arrow-right.svg?raw'

  export default {
    props: {
      button: {
        type: Boolean,
        default: true
      },
      classes: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        add,
        closeThick,
        linkArrowRight
      }
    }
  }
</script>
<template>
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
</template>

<script>
  import chevronDown from '../../../public/icons/chevron-down.svg?raw'
  import add from '../../../public/icons/add.svg?raw'
  import subtract from '../../../public/icons/subtract.svg?raw'

  export default {
    data () {
      return {
        chevronDown,
        add,
        subtract,
      }
    }
  }
</script>
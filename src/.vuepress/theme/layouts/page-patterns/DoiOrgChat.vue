<template>
  <div class="doi-content">
    <Header />
    <SectionBanner />
    <div class="bg-light-blue pb-6">
      <div class="container pt-6">
        <div class="d-flex align-items-center justify-content-between">
          <div class="display-medium heading-underline">Ministers</div>
          <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
        </div>
        <div class="container-small pt-4">
          <div class="row pb-4">
            <div class="col-lg-4">
              <BiographyCard />
            </div>
            <div class="col-lg-4">
              <BiographyCard />
            </div>
            <div class="col-lg-4">
              <BiographyCard />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <BiographyCard />
            </div>
            <div class="col-lg-4">
              <BiographyCard />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-6">
      <div class="pb-6 border-bottom border-gray-300">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <div class="display-medium heading-underline">Divisions and Entities</div>
          <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
        </div>
        <div class="pb-6">
          <BiographyCard classes="biography-card--secondary"/>
        </div>
        <div class="row heading-medium lead text-black pb-4">
          <div class="col-lg-3">AusIndustry</div>
          <div class="col-lg-3">Technology and National Security</div>
          <div class="col-lg-3">Questacon</div>
          <div class="col-lg-3">National Measurement Institute</div>
        </div>
        <div class="row pb-4">
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
        </div>
        <div class="row pb-4">
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
        </div>
        <div class="row pb-4">
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
        </div>
        <div class="row pb-4">
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
          <div class="col-lg-3"></div>
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
        </div>
        <div class="row pb-4">
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
          <div class="col-lg-3"></div>
          <div class="col-lg-3"></div>
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
        </div>
        <div class="row pb-4">
          <div class="col-lg-3"></div>
          <div class="col-lg-3"></div>
          <div class="col-lg-3"></div>
          <div class="col-lg-3"><BiographyCard classes="biography-card--card"/></div>
        </div>
      </div>
      <div class="pt-5">
        <div class="pb-4">
          <BiographyCard classes="biography-card--secondary"/>
        </div>
        <div class="row heading-medium lead text-black pb-4">
          <div class="col-lg-3">AusIndustry</div>
          <div class="col-lg-3">Technology and National Security</div>
        </div>
        <div class="row pb-4">
          <div class="col-lg-3"><BiographyCard classes="biography-card--card" :image="false" /></div>
          <div class="col-lg-3"><BiographyCard classes="biography-card--card" :image="false" /></div>
        </div>
        <div class="row pb-4">
          <div class="col-lg-3"><BiographyCard classes="biography-card--card" :image="false" /></div>
          <div class="col-lg-3"><BiographyCard classes="biography-card--card" :image="false" /></div>
        </div>
        <div class="row pb-4">
          <div class="col-lg-3"><BiographyCard classes="biography-card--card" :image="false" /></div>
          <div class="col-lg-3"></div>
        </div>
        <div class="row pb-4">
          <div class="col-lg-3"><BiographyCard classes="biography-card--card" :image="false" /></div>
          <div class="col-lg-3"></div>
        </div>
        <div class="row pb-4">
          <div class="col-lg-3"><BiographyCard classes="biography-card--card" :image="false" /></div>
          <div class="col-lg-3"></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
  import linkArrowRight from "../../../public/icons/link-arrow-right.svg?raw"
  import BiographyCard from "../components/BiographyCard.vue"
  import Footer from "../components/Footer.vue"
  import Header from '../components/Header.vue'
  import SectionBanner from "../components/SectionBanner.vue"
</script>
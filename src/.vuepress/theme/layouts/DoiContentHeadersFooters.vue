<template>
  <div class="doi-content">
    <Header/>
    <div class="py-5">
      <div class="container">
        <h2 id="entity-bar">Entity Bar</h2>
      </div>
      <EntityBar title="Emissions reduction Assurance Committee" classes="bg-aus-industry-participation-authority"/>
      <EntityBar title="Industry Innovation and Science Australia Corporate" classes="bg-industry-innovation-science"/>
      <EntityBar title="National Measurement Institute" classes="bg-inspiring-aus text-black"/>
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="global-footer">Global Footer</h2>
      </div>
      <Footer/>
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="secondary-footer">Secondary Footer</h2>
      </div>
      <SecondaryFooter/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import EntityBar from './components/EntityBar.vue'
  import Footer from './components/Footer.vue'
  import SecondaryFooter from './components/SecondaryFooter.vue'

  export default {
    components: {
      SecondaryFooter,
      Footer,
      EntityBar,
      Header
    }
  }
</script>
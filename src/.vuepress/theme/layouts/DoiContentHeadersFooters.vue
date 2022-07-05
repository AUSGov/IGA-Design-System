<template>
  <div class="doi-content">
    <Header/>
    <div class="py-5">
      <div class="container">
        <h2 id="entity-bar">Entity Bar</h2>
      </div>
      <EntityBar/>
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
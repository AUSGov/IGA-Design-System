<template>
  <div class="doi-content">
    <Header />
    <EntityBar title="ANTI - DUMPING COMMISSION" />
    <div style="margin-bottom: 3px;">
      <StandardBanner classes="title-large text-black shadow-sm"/>

    </div>
    <InSectionNavigation />
    <div class="container-small py-6">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit malesuada viverra est magna sapien iaculis. Vitae arcu id dignissim enim eget viverra. Integer cras pharetra egestas tempus et volutpat, blandit. Arcu tristique dolor at donec tempor in et dictum vitae. Consectetur ipsum aliquet maecenas elit rhoncus. Cursus vitae duis volutpat condimentum at dignissim rhoncus ut ac. Mauris lobortis lacus tellus risus amet. Vel aliquet bibendum a leo lobortis vulputate. Sit quis quis egestas est amet urna, enim enim.</p>
    </div>
    <DropdownFilter />
    <div class="container">
      <DoiSwitch start-label="Table" end-label="Card"/>
    </div>
    <div class="container-small pb-6">
      <div class="card-container">
        <div class="pb-5">
          <AdcCard />
        </div>
        <div class="pb-5">
          <AdcCard />
        </div>
        <div class="pb-5">
          <AdcCard />
        </div>
        <div class="pb-5">
          <AdcCard />
        </div>
        <div class="pb-5">
          <AdcCard />
        </div>
      </div>
      <div class="table-container">
        <table class="table table-striped">
          <thead class="table-primary" />
          <tbody />
        </table>
      </div>
      <div class="pb-6">
        <Pagination />
      </div>
      <ReadMore classes="hover-action" />
    </div>
    <SecondaryFooter :subscribe="false" />
    <Footer />
  </div>
</template>
<script setup>
  import AdcCard from "../components/AdcCard.vue"
  import DoiSwitch from "../components/DoiSwitch.vue"
  import DropdownFilter from "../components/DropdownFilter.vue"
  import EntityBar from "../components/EntityBar.vue"
  import Footer from "../components/Footer.vue"
  import Header from "../components/Header.vue"
  import InSectionNavigation from "../components/InSectionNavigation.vue"
  import Pagination from "../components/Pagination.vue"
  import ReadMore from "../components/ReadMore.vue"
  import SecondaryFooter from "../components/SecondaryFooter.vue"
  import StandardBanner from "../components/StandardBanner.vue"
  import { onMounted } from 'vue'

  onMounted(() => {
    const $switch = $('.doi-switch').find('.form-check-input')
    $switch.on('change', () => {
      if($switch.is(':checked')) {
        //card layout
        $('.card-container').removeClass('d-none')
        const $tableContainer = $('.table-container')
        $tableContainer.find('thead').empty()
        $tableContainer.find('tbody').empty()
      } else {
        //table layout
        $('.card-container').addClass('d-none')
        const $tables = $('.card-container').find('table')
        //get all tbody content from tables and clone into table-container's tbody
        const $tableContainer = $('.table-container')
        $('.card-container').find('thead').first().find('tr').clone().prependTo($tableContainer.find('thead'))
        $tableContainer.find('thead').addClass('table-primary')
        $tables.each((index, table) => {
          $(table).find('tbody').find('tr').clone().appendTo($tableContainer.find('tbody'))
        })
      }
    })
  })
</script>
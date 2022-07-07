<template>
  <div class="doi-content">
    <Header />
    <PublicationBanner />
    <div class="container py-6">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-7">
          <div class="link-large" style="padding-left: 4.75rem;">
            <h4 class="text-primary display-small">The Premises Standards help ensure people with disability have equal access to public buildings.</h4>
            <p>We review the Premises Standards every 5 years to:</p>
            <ul>
              <li class="link-large">check they are achieving their objectives</li>
              <li class="link-large">identify ways to improve them.</li>
            </ul>
            <p>As part of the 2021 review, we consulted over 500 people, including:</p>
            <ul>
              <li class="link-large">people with disability</li>
              <li class="link-large">other stakeholders in the disability sector</li>
              <li class="link-large">building professionals</li>
              <li class="link-large">employers</li>
              <li class="link-large">people in all levels of government.</li>
            </ul>
            <p>The review identified 4 actions the Australian Government can take to ensure the Premises Standards keep meeting their objectives. These actions will:</p>
            <ul>
              <li class="link-large">improve regulations for accessible carparks, automatic doors and the dimensions of openings</li>
              <li class="link-large">help people understand their rights and responsibilities under the standards</li>
              <li class="link-large">improve the data available for future reviews</li>
              <li class="link-large">increase consistency between the Premises Standards and other disability standards.</li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <Publication :show-download="false" />
        </div>
      </div>
    </div>
    <div class="container pb-6">
      <h4 class="text-primary display-medium mb-3">Explore the digital publication</h4>
      <div class="row g-4 pb-5">
        <div class="col-md-6 col-lg-4">
          <NavigationCard variant="inline" :image="false" title="Message from the Minister" content=""/>
        </div>
      </div>
      <h4 class="text-primary display-medium mb-3">About the industry</h4>
      <div class="row g-4 pb-5">
        <div class="col-md-6 col-lg-4">
          <NavigationCard variant="inline" title="LNG industry outlook" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/>
        </div>
        <div class="col-md-6 col-lg-4">
          <NavigationCard variant="inline" title="LNG industry outlook" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/>
        </div>
        <div class="col-md-6 col-lg-4">
          <NavigationCard variant="inline" title="LNG industry outlook" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/>
        </div>
      </div>
      <div class="pb-5">
        <h4 class="text-primary display-medium mb-3">Emerging LNG Markets</h4>
        <p>We review the Premises Standards every 5 years to:</p>
        <ul>
          <li>check they are achieving their objectives</li>
          <li>identify ways to improve them.</li>
        </ul>
      </div>
      <div class="row g-4 pb-6">
        <div class="col-md-6 col-lg-4">
          <NavigationCard variant="inline" title="China" content=""/>
        </div>
        <div class="col-md-6 col-lg-4">
          <NavigationCard variant="inline" title="India" content=""/>
        </div>
        <div class="col-md-6 col-lg-4">
          <NavigationCard variant="inline" title="India" content=""/>
        </div>
      </div>
      <div class="row g-4 pb-6">
        <div class="col-md-6 col-lg-4">
          <NavigationCard variant="" title="Dark Energy Survey Evolves or a longer title with three of more lines more line... " content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/>
        </div>
        <div class="col-md-6 col-lg-4">
          <NavigationCard variant="" title="Dark Energy Survey Evolves or a longer title with three of more lines more line... " content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/>
        </div>
        <div class="col-md-6 col-lg-4">
          <NavigationCard variant="" title="Dark Energy Survey Evolves or a longer title with three of more lines more line... " content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/>
        </div>
      </div>
    </div>
    <div class="pb-6">
      <ContentStepper :button="false" classes="bg-snow shadow-none" />
    </div>
    <div class="pb-6">
      <ReadMore classes="hover-action" />
    </div>
    <Footer />
  </div>
</template>
<script setup>
  import ContentStepper from "../components/ContentStepper.vue"
  import Footer from '../components/Footer.vue'
  import Header from '../components/Header.vue'
  import NavigationCard from '../components/NavigationCard.vue'
  import OnThisPageMenu from '../components/OnThisPageMenu.vue'
  import PublicationBanner from '../components/PublicationBanner.vue'
  import Publication from '../components/Publication.vue'
  import ReadMore from "../components/ReadMore.vue"
</script>
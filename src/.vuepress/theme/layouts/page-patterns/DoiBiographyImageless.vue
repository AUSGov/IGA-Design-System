<template>
  <div class="doi-content">
    <Header />
    <EntityBar title="EMISSIONS REDUCTION ASSURANCE COMMITTEE" />
    <div class="container">
      <Breadcrumb />
    </div>
    <div class="container-small pb-6">
      <div class="pb-6">
        <BiographyCard classes="border-promo" :image="false" />
        <div class="display-medium heading-underline center-promo pt-3"></div>
      </div>
      <div class="link-large text-gray-600 pb-6">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit malesuada viverra est magna sapien iaculis. Vitae arcu id dignissim enim eget viverra. Integer cras pharetra egestas tempus et volutpat, blandit. Arcu tristique dolor at donec tempor in et dictum vitae. Consectetur ipsum aliquet maecenas elit rhoncus. Cursus vitae duis volutpat condimentum at dignissim rhoncus ut ac. Mauris lobortis lacus tellus risus amet. Vel aliquet bibendum a leo lobortis vulputate. Sit quis quis egestas est amet urna, enim enim.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit malesuada viverra est magna sapien iaculis. Vitae arcu id dignissim enim eget viverra. Integer cras pharetra egestas tempus et volutpat, blandit. Arcu tristique dolor at donec tempor in et dictum vitae. Consectetur ipsum aliquet maecenas elit rhoncus. Cursus vitae duis volutpat condimentum at dignissim rhoncus ut ac. Mauris lobortis lacus tellus risus amet. Vel aliquet bibendum a leo lobortis vulputate. Sit quis quis egestas est amet urna, enim enim.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit malesuada viverra est magna sapien iaculis. Vitae arcu id dignissim enim eget viverra. Integer cras pharetra egestas tempus et volutpat, blandit. Arcu tristique dolor at donec tempor in et dictum vitae. Consectetur ipsum aliquet maecenas elit rhoncus. Cursus vitae duis volutpat condimentum at dignissim rhoncus ut ac. Mauris lobortis lacus tellus risus amet. Vel aliquet bibendum a leo lobortis vulputate. Sit quis quis egestas est amet urna, enim enim.</p>
      </div>
      <div class="pb-6">
        <ReadMore/>
      </div>
    </div>
    <SecondaryFooter :subscribe="false" />
    <Footer />
  </div>
</template>
<script setup>
import BiographyCard from "../components/BiographyCard.vue"
import Breadcrumb from "../components/Breadcrumb.vue"
import EntityBar from "../components/EntityBar.vue"
import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"
import ReadMore from "../components/ReadMore.vue"
import SecondaryFooter from "../components/SecondaryFooter.vue"
</script>
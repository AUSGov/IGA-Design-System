<template>
  <div class="doi-content">
    <Header />
    <div class="pb-6">
      <EntityBar title="EMISSIONS REDUCTION ASSURANCE COMMITTEE" />
    </div>
    <div class="container pb-5">
      <NewsArticle classes="text-gray-700" />
    </div>
    <OnThisPageMenu />
    <div class="container-small pb-6">
      <div class="pb-6">
        <ReadMore/>
      </div>
    </div>
    <SecondaryFooter :subscribe="false" />
    <Footer />
  </div>
</template>
<script setup>
import EntityBar from "../components/EntityBar.vue"
import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"
import NewsArticle from "../components/NewsArticle.vue"
import OnThisPageMenu from "../components/OnThisPageMenu.vue"
import ReadMore from "../components/ReadMore.vue"
import SecondaryFooter from "../components/SecondaryFooter.vue"
</script>
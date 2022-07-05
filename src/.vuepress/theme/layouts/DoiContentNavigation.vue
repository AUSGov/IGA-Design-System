<template>
  <div class="doi-content py-5">
    <div class="container pb-5">
      <h2 id="breadcrumbs">Breadcrumbs</h2>
      <Breadcrumb/>
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="in-section-navigation">In Section Navigation</h2>
      </div>
      <InSectionNavigation/>
    </div>

    <OnThisPageMenu/>

    <div class="pb-5">
      <div class="container">
        <h2 id="content-stepper">Content Stepper</h2>
      </div>
      <ContentStepper/>
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="directory-links">Directory Links</h2>
      </div>
      <DirectoryLinks/>
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="chapter-banners">Chapter Banners</h2>
      </div>
      <ChapterBanner/>
      <ChapterBanner :dark="false" classes="text-white" :image="true"/>
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="read-more">Read More</h2>
      </div>
      <ReadMore/>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from './components/Breadcrumb.vue'
  import InSectionNavigation from './components/InSectionNavigation.vue'
  import OnThisPageMenu from './components/OnThisPageMenu.vue'
  import ContentStepper from './components/ContentStepper.vue'
  import DirectoryLinks from './components/DirectoryLinks.vue'
  import ChapterBanner from './components/ChapterBanner.vue'
  import ReadMore from './components/ReadMore.vue'

  export default {
    components: {
      ReadMore,
      ChapterBanner,
      DirectoryLinks,
      ContentStepper,
      OnThisPageMenu,
      InSectionNavigation,
      Breadcrumb
    },
    data () {
      return {}
    }
  }
</script>
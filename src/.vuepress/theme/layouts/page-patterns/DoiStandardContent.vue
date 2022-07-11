<template>
  <div class="doi-content">
    <Header/>
    <EntityBar title="Emissions reduction Assurance Committee" classes="bg-aus-industry-participation-authority"/>
    <SectionBanner/>
    <InSectionNavigation/>
    <OnThisPageMenu/>
    <div class="container">
      <Breadcrumb/>
    </div>
    <div class="container-small pt-3">
      <p>The ERAC:</p>
      <ul>
        <li>assesses method determinations to ensure they comply with the Offsets Integrity Standards set out in the Act</li>
        <li>advises the Minister on whether to make, vary or revoke method determinations based on their assessment of their compliance with the Offsets Integrity Standards</li>
        <li>undertake periodic reviews and crediting period extension reviews of methods</li>
        <li>considers feedback from public consultation on method determinations</li>
        <li>undertakes public consultation on periodic and crediting period extension reviews</li>
        <li>advises the Minister and the department Secretary on the outcomes of reviews and method determination assessments</li>
      </ul>
      <p>Advice provided to the Minister by the ERAC is published with consultation information for each method.</p>
      <p class="mb-5">View all <a href="#">finalised methods.</a></p>
      <h2 class="display-medium">Review of methods</h2>
      <p>The ERAC conducts 2 types of method reviews.</p>
      <ul class="pb-5">
        <li>Periodic method reviews: finalised methods are reviewed by the ERAC. The ERAC examines whether the method is still compliant with the Offsets Integrity Standards.</li>
        <li>Crediting period extension reviews: projects have crediting periods set out in their respective method. The ERAC considers whether a method should have its reporting period extended. The ERAC’s decision is based on whether the projects registered under the method are still achieving a carbon abatement that is unlikely to happen in the ordinary course of events. Crediting periods can only be extended once.</li>
      </ul>
      <div class="pb-5">
        <div class="row">
          <div class="col-lg-4">
            <NavigationCard :text="false" :link="false"/>
          </div>
          <div class="col-lg-4">
            <NavigationCard :text="false" :link="false"/>
          </div>
          <div class="col-lg-4">
            <NavigationCard :text="false" :link="false"/>
          </div>
        </div>
      </div>
      <p>All reviews have a period of public consultation. ERAC considers submissions and advises the Minister on the outcome of their reviews. If the review recommends changes to a method—a variation—these changes will be:</p>
      <ul>
        <li>drafted by the Clean Energy Regulator</li>
        <li>assessed by the ERAC</li>
        <li>subject to further public consultation</li>
      </ul>
      <p>The Clean Energy Regulator is responsible for the consultation process. See previous consultations and reviews on our department’s Consultation Hub.</p>
      <p class="pb-5">Projects can still be registered with the Clean Energy Regulator while a method is under review unless the ERAC has issued a legislative instrument under section 27A of the Act suspending applications under the method.</p>
    </div>
    <div class="pb-5">
      <DirectoryLinks/>
    </div>
    <div class="container-small">
      <div class="pb-5">
        <FeaturedCardNoBg/>
      </div>
      <div class="pb-5">
        <FeaturedCardNoBg classes="featured-card--right"/>
      </div>
      <div class="pb-5">
        <FeaturedCardNoBg/>
      </div>
      <h2 class="display-medium">Body copy</h2>
      <p>The ERAC conducts 2 types of method reviews.</p>
      <ul>
        <li>Periodic method reviews: finalised methods are reviewed by the ERAC. The ERAC examines whether the method is still compliant with the Offsets Integrity Standards.</li>
        <li>Crediting period extension reviews: projects have crediting periods set out in their respective method. The ERAC considers whether a method should have its reporting period extended. The ERAC’s decision is based on whether the projects registered under the method are still achieving a carbon abatement that is unlikely to happen in the ordinary course of events. Crediting periods can only be extended once.</li>
      </ul>
      <p>All reviews have a period of public consultation. ERAC considers submissions and advises the Minister on the outcome of their reviews. If the review recommends changes to a method—a variation—these changes will be:</p>
      <ul>
        <li>drafted by the Clean Energy Regulator</li>
        <li>assessed by the ERAC</li>
        <li>subject to further public consultation</li>
      </ul>
      <p>The Clean Energy Regulator is responsible for the consultation process. See previous consultations and reviews on our department’s Consultation Hub.</p>
      <p class="pb-5">Projects can still be registered with the Clean Energy Regulator while a method is under review unless the ERAC has issued a legislative instrument under section 27A of the Act suspending applications under the method.</p>
     <FeaturedCardInline class="pb-5"/>
      <div class="row">
        <div class="col-lg-4">
          <EditorialCard variant="sm"/>
        </div>
        <div class="col-lg-4">
          <EditorialCard variant="sm"/>
        </div>
        <div class="col-lg-4">
          <EditorialCard variant="sm"/>
        </div>
      </div>
      <HorizontalTimeline/>
    </div>
    <div class="pb-6">
      <PromotionalCards/>
    </div>
    <div class="container-small">
      <div class="pb-6">
        <RfqCard classes="rfq-card--no-img" :image="false" button-class="btn-quote"/>
      </div>
      <div class="pb-5">
        <ReadMore/>
      </div>
      <h2 class="display-medium">Memberships</h2>
      <div class="row g-5 pb-5">
        <div class="col-6 col-lg-4">
          <BiographyCard/>
        </div>
        <div class="col-6 col-lg-4">
          <BiographyCard/>
        </div>
        <div class="col-6 col-lg-4">
          <BiographyCard/>
        </div>
        <div class="col-6 col-lg-4">
          <BiographyCard/>
        </div>
        <div class="col-6 col-lg-4">
          <BiographyCard/>
        </div>
        <div class="col-6 col-lg-4">
          <BiographyCard/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script setup>
import linkArrowRight from '../../../public/icons/link-arrow-right.svg?raw'
import Header from '../components/Header.vue'
import EntityBar from '../components/EntityBar.vue'
import SectionBanner from '../components/SectionBanner.vue'
import FeaturedCardInline from '../components/FeaturedCardInline.vue'
import EditorialCard from '../components/EditorialCard.vue'
import Footer from '../components/Footer.vue'
import InSectionNavigation from '../components/InSectionNavigation.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import NavigationCard from '../components/NavigationCard.vue'
import DirectoryLinks from '../components/DirectoryLinks.vue'
import FeaturedCardNoBg from '../components/FeaturedCardNoBg.vue'
import HorizontalTimeline from '../components/HorizontalTimeline.vue'
import PromotionalCards from '../components/PromotionalCards.vue'
import RfqCard from '../components/RfqCard.vue'
import ReadMore from '../components/ReadMore.vue'
import BiographyCard from '../components/BiographyCard.vue'
import OnThisPageMenu from '../components/OnThisPageMenu.vue'
</script>

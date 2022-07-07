<template>
  <div class="doi-content">
    <Header />
    <PublicationBanner />
    <OnThisPageMenu/>
    <div class="row py-6">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="link-large text-gray-600" style="padding-left: 4.75rem;">
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
    <ChapterBanner classes="bg-gray-100"/>
    <div class="container-small py-6">
      <DoiTable :headers="tableHeaders" :contents="tableContents" :classes="classes" />
    </div>
    <ChapterBanner classes="bg-gray-100" title="Message from the Minister" />
    <div class="container-small link-large text-gray-600 py-6">
      <div class="row">
        <div class="col-md-3 col-lg-3">
          <BiographyCard classes="offset" />
        </div>
        <div class="col-md-9 col-lg-9">
          <p class="text-primary link-large lead">Public buildings are central to the lives of Australians. They are where we work, shop, build community relationships and engage in Australian society. As an integral part of our society, it is important that people with disability have equal access to public buildings.</p>
          <p>I am pleased to present the outcomes of the 2021 Premises Standards Review. The Premises Standards support dignified access to public buildings for the 1 in 6 Australians living with disability.</p>
        </div>
      </div>
      <div class="row">
        <div>
          <p>The outcomes of the review align with the work of the Australian Government under Australia's Disability Strategy to ensure people living with disability can fulfil their potential as equal members of the community.</p>
          <p>This is a vision adopted by all governments, who have committed to a national, unified approach to improving the lives of people with disability, their families and carers, and to providing leadership for a community-wide shift in attitudes.</p>
          <p>The introduction of the Premises Standards in 2010 has improved access to public buildings and opportunities for people with disability. Safe and appropriate access to public buildings enhances the independence, health and economic security of people with disability. It improves employment opportunities and contributes to more inclusive communities. An accessible built environment also benefits other Australians, such as older Australians and those with temporary injuries.</p>
          <p>The 2021 Premises Standards Review aims to ensure that our Premises Standards are achieving their objectives, and to identify opportunities for improvement or areas where barriers exist. It has been undertaken during a tumultuous time, forcing us to be innovative in our approach to stakeholder consultation. While this could have been seen as a barrier, I am proud to say that it has ultimately resulted in broader participation and input than the traditional review process.</p>
          <p>I would like to thank everyone who came together to overcome the obstacles posed by COVID-19, in particular the disability sector, and contributed their valuable insights and lived experience to the review. Your input will help to ensure the Premises Standards continue to deliver the right outcomes for people with disability. I would also like to thank the Disability Discrimination Commissioner, Dr Ben Gauntlett, for his vital input to the review and chairing of the virtual town hall meeting.</p>
          <p>Improvements to the Premises Standards will help to ensure people with disability can achieve their potential through both increased employment and social opportunities. I look forward to working with my state and territory colleagues to progress the appropriate regulatory reforms based on the review findings.</p>
        </div>
      </div>
    </div>
    <ChapterBanner image="url(/images/banner-sample.png)" classes="text-white" title="Review at a glance" />
    <div class="container-small text-gray-700 link-large py-6">
      <h4 class="text-primary lead pb-4">The Disability (Access to Premises - Building) Standards 2010 (the Premises Standards) help people with disability have dignified access to buildings. Improved access to buildings can also benefit older people, people with injuries or illness, and parents and carers with young children.</h4>
      <div>
        <p>The Premises Standards also help building developers, certifiers and managers ensure that buildings comply with the Disability Discrimination Act 1992.</p>
        <p>The Premises Standards are reviewed at least once every 5 years. Senator the Hon Jonathon Duniam, Assistant Minister for Industry Development, is responsible for reviewing the Premises Standards in consultation with Senator the Hon Michaelia Cash, Attorney-General. The Department of Industry, Science, Energy and Resources supports the Minister in conducting the review.</p>
      </div>
      <div class="py-5">
        <p>The purpose of the review is to:</p>
        <ul>
          <li class="link-large">ensure the Premises Standards are achieving their objectives</li>
          <li class="link-large">help building industry stakeholders fulfil their responsibilities to people with disability</li>
          <li class="link-large">identify ways to improve the Premises Standards.</li>
        </ul>
        <p>It also examines practices in other countries to see if any lessons learnt overseas can be applied in Australia.</p>
      </div>
      <div>
        <h4 class="text-primary display-medium mb-3">What we heard</h4>
        <div class="pb-5">
          <p>People living with disability told us they find it easier to access premises that were built after the Premises Standards were introduced. This indicates that the Premises Standards are achieving their objectives.</p>
          <p>However, people living with disability also identified emerging issues and areas for improvement. These included:</p>
          <ul>
            <li class="link-large">inconsistent requirements for signage and luminance contrast</li>
            <li class="link-large">a lack of information on emerging wayfinding solutions</li>
            <li class="link-large">a lack of accessible carparks and automatic doors</li>
          </ul>
          <p>These issues need to be addressed to ensure the Premises Standards continue achieving their objectives.</p>
          <p>Building professionals told us they needed better guidance to help them comply with the Premises Standards. They were particularly concerned about how to apply the Premises Standards to significant works on older and heritage-listed buildings.</p>
          <p>Building professionals were also concerned about the inconsistencies among disability standards, state and territory requirements and the National Construction Code (NCC).</p>
          <p>Many businesses emphasised a need for practical guidance, such as check lists, to help them improve access for employees when negotiating commercial leases.</p>
          <p>Unfortunately this review could not address every issue raised by stakeholders. We will continue engaging with stakeholders to address other issues.</p>
        </div>
        <div class="pb-5">
          <h4 class="text-primary display-medium mb-3">Opportunities for action</h4>
          <p>The opportunities for action align with these areas. If agreed by the government, these actions will ensure the Premises Standards continue meeting their objectives.</p>
          <h6 class="text-gray-600 heading-medium lead">Regulatory reform</h6>
          <p>People living with disability told us they find it easier to access premises that were built after the Premises Standards were introduced. This indicates that the Premises Standards are achieving their objectives.</p>
          <p>However, people living with disability also identified emerging issues and areas for improvement. These included:</p>
          <ul>
            <li class="link-large">inconsistent requirements for signage and luminance contrast</li>
            <li class="link-large">a lack of information on emerging wayfinding solutions</li>
            <li class="link-large">a lack of accessible carparks and automatic doors</li>
          </ul>
        </div>
        <div class="pb-5">
          <CalloutModal>
            <div class="heading-extra-small-caps text-primary mb-4">
              Action 1:
            </div>
            <div class="callout-subtitle">
              Investigate the costs and benefits, and whether there is a case for reform, in the key areas impacting the lives of people living with disability
            </div>
            <div class="callout-list link-large">
              <p>The Australian Government, in consultation with the Australian Building Codes Office and the states and territories, undertake regulatory impact analysis on:</p>
              <ul>
                <li class="link-large">whether accessible car-parking ratios are adequate</li>
                <li class="link-large">where automatic doors are used, including their use in accessible toilet facilities.</li>
                <li class="link-large">the adequacy of dimensions of openings and thoroughfares in the Premises Standards and the opportunity to align with the Disability Standards for Accessible Public Transport 2002 (Transport Standards).</li>
              </ul>
              <p>This work will provide evidence for any future changes to the Premises Standards and the National Construction Code (NCC).</p>
            </div>
          </CalloutModal>
        </div>
        <div class="pb-5">
          <h6 class="text-gray-600 heading-medium lead">Information sharing</h6>
          <p>Over a quarter of submissions identified the need for new or updated guidance to help stakeholders understand their rights and responsibilities under the Premises Standards.</p>
          <p>The guidance most in need of updating is the Australian Human Rights Commission’s Guideline on the application of the Premises Standards. This is addressed by Action 2a.</p>
          <p>Stakeholders also raised the need for guidance on signage requirements, luminance contrasting and wayfinding solutions, which they felt were often overlooked. There is still no consensus amongst majority of the stakeholders on many of these issues, and developing guidance is the first step towards considering these issues in the Premises Standards.</p>
          <p>These are all addressed by Action 2b.</p>
          <p>To properly assess whether the Premises Standards are achieving their objectives, we need data to help us measure buildings’ compliance with the standards. This is addressed by Action 3.</p>
        </div>
        <div class="pb-5">
          <MediaTranscript class="content-right" />
        </div>
        <div class="pb-5">
          <CalloutModal>
            <div class="heading-extra-small-caps text-primary mb-4">
              Action 2A:
            </div>
            <div class="callout-subtitle">
              Update the Australian Human Rights Commission (AHRC) Guideline on the application of the Premises Standards to ensure people understand their rights and responsibilities under the Premises Standards
            </div>
            <div class="callout-list link-large">
              <p>The AHRC’s Guideline on the application of the Premises Standards is the guidance used most by the building profession and people living with disability.</p>
              <p>The opportunity exists for the AHRC, in conjunction with the Australian Government, to review and update the guideline to ensure it is:</p>
              <ul>
                <li class="link-large">up to date</li>
                <li class="link-large">relevant to stakeholders who want to understand their rights and responsibilities.</li>
              </ul>
              <p>This will lead to improved access to premises.</p>
            </div>
            <div class="heading-extra-small-caps text-primary mb-4">
              Action 2B:
            </div>
            <div class="callout-subtitle">
              Develop guidance to address new and emerging issues identified by stakeholders during the review, which impact their access to buildings or ability to comply with the Premises Standards
            </div>
            <div class="callout-list link-large">
              <p>There is an opportunity for the Australian Government, in consultation with people with disability, the AHRC and other relevant stakeholders, to identify, prioritise and develop guidance. This may include:</p>
              <ul>
                <li class="link-large">guidance on standardisation of signage requirements, luminance contrasting and emerging wayfinding solutions, which may form the basis of nationally consistent standards in future</li>
                <li class="link-large">information to improve awareness of people's rights and responsibilities under the Premises Standards, including compliance with the standards and how to lodge and resolve complaints</li>
                <li class="link-large">the best approach for handling issues related to heritage-listed and older buildings that may not be in the scope of the Premises Standards</li>
                <li class="link-large">best-practice advice and checklists for procurement specialists and employers to improve their awareness of, and compliance with, the Premises Standards</li>
                <li class="link-large">guidance on the intersecting issues between the Premises Standards and Transport Standards..</li>
              </ul>
            </div>
          </CalloutModal>
        </div>
        <div class="pb-5">
          <h6 class="text-gray-600 heading-medium lead">Governance</h6>
          <p>This review identified opportunities to amend the Premises Standards to improve their effectiveness. This is addressed by Action 4a.</p>
          <p>Disability standards including the Premises Standards, the NCC and other Australian standards are updated at different times. This leads to inconsistency across the standards, which causes confusion for stakeholders. The inconsistency is addressed by Action 4b.</p>
        </div>
      </div>
    </div>
    <ChapterBanner classes="bg-gray-100" title="About the 2021 review" />
    <div class="container-small py-6">
      <div class="pb-5">
        <h4 class="text-primary lead">The terms of reference (ToR) for the 2021 review were informed by stakeholders’ feedback during the initial discovery phase of the review. The responsible ministers for the review agreed to the ToR on 4 February 2021.</h4>
      </div>
      <div class="pb-5">
        <CalloutModal>
          <div class="callout-subtitle">
            Terms of reference
          </div>
          <div class="callout-list link-large">
            <p>The review of the Premises Standards will consider the effectiveness of the Premises Standards in achieving its objectives and identify any necessary amendments.</p>
            <p>In reviewing its effectiveness, this review will consider whether the Premises Standards has:</p>
            <ul>
              <li class="link-large">provided people with disability dignified, equitable, cost-effective and reasonably achievable access to public buildings, and facilities and services within buildings that they have a right to enter; and</li>
              <li class="link-large">given greater certainty to people working in the building industry that access to buildings is compliant with the Disability Discrimination Act 1992.</li>
            </ul>
            <p>The review will also:</p>
            <ul>
              <li class="link-large">consider the interaction between the Premises Standards and related regulations operating in the states and territories;</li>
              <li class="link-large">consider inconsistencies in the interpretation and application of the Premises Standards;</li>
              <li class="link-large">consider any outstanding recommendations from the first statutory review of the Premises Standards (2016); and</li>
              <li class="link-large">examine any other matters relevant to the Premises Standards and their interaction with current disability reviews and findings from the Royal Commission into Violence, Abuse, Neglect and Exploitation of People with Disability (the Disability Royal Commission) and the Royal Commission into Aged Care Quality and Safety.</li>
            </ul>
          </div>
        </CalloutModal>
      </div>
      <div>
        <h4 class="text-primary display-medium mb-4">Methodology</h4>
        <div style="padding-bottom: 36px;">
          <p>We undertook the 2021 review in 3 phases to target new stakeholders (participants living with disability who may not usually participate) and established stakeholders. We also conducted a literature review to explore policy options and implementation outcomes in other countries.</p>
          <p>The 2021 review implemented quantitative and qualitative data capture processes. These let us standardise and analyse insights from the first and second reviews (and any future reviews) to drive more evidence-based policy and decision making. All submissions were recorded in a table and then analysed manually (by reading, coding and analysing every submission) and via an artificial intelligence powered platform.</p>
          <p>Submissions often raised issues across multiple key themes. Key themes were broken down into sub-themes, which were further broken down into categories. This allowed the review team to identify issues that intersect across multiple themes.</p>
          <p>This approach informed the review’s understanding of the impact of specific issues across disability types, age groups and building types.</p>
        </div>
        <div class="pb-6">
          <DoiBlockquote />
        </div>
        <div>
          <h4 class="text-primary display-medium mb-4">Review process: discover, consult and engage</h4>
          <div class="text-gray-700 link-large pb-6">
            <h6 class="text-gray-600 heading-medium lead">Governance</h6>
            <p>The first phase of consultation – called the ‘discovery’ phase – started on 8 September 2020 and concluded on 30 November 2020. It focused on understanding stakeholders’ experience with the Premises Standards.</p>
            <p>The discovery phase used a semi-structured survey design and open-ended questions. It asked participants for their lived experience with buildings and examples of what did and did not work for them.</p>
            <p>Accessible Easy Read versions of the survey were available. We accepted multiple methods of participation, including:</p>
            <ul>
              <li class="link-large">emails</li>
              <li class="link-large">letters</li>
              <li class="link-large">audio and video submissions</li>
              <li class="link-large">telephone calls.</li>
            </ul>
            <p>We identified 6 key themes during the discovery phase (Figure 1):</p>
            <ul>
              <li class="link-large">consistency and clarity</li>
              <li class="link-large">compliance</li>
              <li class="link-large">access and egress</li>
              <li class="link-large">communication and wayfinding</li>
              <li class="link-large">communication and wayfinding</li>
              <li class="link-large">toilet and change room provisions</li>
              <li class="link-large">environmental sensitivities.</li>
            </ul>
            <p>Stakeholder submissions from the discovery phase shaped the terms of reference and consultation paper for the second phase of the review. The second phase began following the approval of the terms of reference by the Minister for Industry, Science and Technology and the Attorney-General. </p>
          </div>
          <div class="pb-5">
            <img :src="$withBase('images/review-process-sample.png')" alt="">
          </div>
          <div>
            <h6 class="text-gray-600 heading-medium lead">Consult</h6>
            <p>The second phase of the review started on 22 February 2021 and finished on 30 April 2021. It was designed to draw out views on specific issues with the Premises Standards and opportunities for improvement.</p>
            <p>We made the consultation paper available in an accessible Easy Read format. Submissions during the second phase of consultation provided more detailed and technical information compared to the discovery phase.</p>
            <p>Throughout the first and second phases of consultation, we received a total of 251 submissions from the online survey, emails, letters, audio and video, and telephone submissions. 69.3% of the submissions were received from organisations while 30.7% of the submissions were from individuals. Out of the 251 submissions too, 80.89% submissions were received from the disability sector, 9.2% from building industry and 10% from the government sectors.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container pb-6">
      <div class="row">
        <div class="col-lg-4">
          <DoiBlockquote classes="left-align" style="margin-right: 75px;" />
        </div>
        <div class="col-lg-8">
          <img :src="$withBase('images/piechart-sample.png')" alt="">
          <p class="text-gray-500 pt-2">Figure 1: Key themes identified in the discovery phase</p>
        </div>
      </div>
    </div>
    <div class="container-small text-gray-700 link-large pb-6">
      <h6 class="text-gray-600 heading-medium lead">Engage</h6>
      <p>The third phase of the review started on 31 March 2021 and concluded on 22 April 2021. For this phase we engaged The Social Deck, a consultancy with expertise in strategic communication and community engagement. The Social Deck provided expert facilitation and engagement tools to explore the issues raised in the first two phases of consultations.</p>
      <p>Along with 251 submissions received, The Social Deck conducted engagements using webinars, focus groups, in-depth interviews, discussion boards and workshops (see Figure 3). A total of 579 stakeholders from individuals and organisations from disability and building sectors and government bodies participated in these activities. Some stakeholders attended more than one activities.</p>
    </div>
    <div class="container pb-6">
      <div class="row">
        <div class="col-lg-4">
          <DoiBlockquote classes="left-align" style="margin-right: 75px;" />
        </div>
        <div class="col-lg-8">
          <img :src="$withBase('images/engage-sample.png')" alt="">
        </div>
      </div>
    </div>
    <div class="container pb-6">
      <img :src="$withBase('images/interest-group-sample.png')" alt="">
    </div>
    <div class="container-small pb-6">
      <img :src="$withBase('images/graph-sample.png')" alt="">
    </div>
    <ChapterBanner classes="bg-gray-100" title="Appendix A: Documents referenced  by the Premises Standards" />
    <div class="container-small py-6">
      <DoiTable :headers="tableHeadersAppendix" :contents="tableContentsAppendix" classes="table-critical-minerals-office"/>
    </div>
    <Footer />
  </div>
</template>
<script>
import BiographyCard from "../components/BiographyCard.vue"
import CalloutModal from "../components/CalloutModal.vue"
import ChapterBanner from "../components/ChapterBanner.vue"
import DoiBlockquote from "../components/DoiBlockquote.vue"
import DoiTable from "../components/DoiTable.vue"
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import MediaTranscript from "../components/MediaTranscript.vue"
import OnThisPageMenu from "../components/OnThisPageMenu.vue"
import Publication from "../components/Publication.vue"
import PublicationBanner from "../components/PublicationBanner.vue"

export default {
  components: {
    BiographyCard,
    CalloutModal,
    ChapterBanner,
    DoiBlockquote,
    DoiTable,
    Footer,
    Header,
    MediaTranscript,
    OnThisPageMenu,
    Publication,
    PublicationBanner,
  },
  data() {
    return {
      tableHeaders: ['Access and egress', 'Means of entry and exit to a building.'],
      tableContents: [
        ['Access and egress', 'Means of entry and exit to a building.'],
        ['Accessible', 'When a public building or place is accessible it means people can easily move in, out and around the building or space. Accessibility may be limited by physical, sensory and informational barriers.'],
        ['Access consultant', 'A specialist consultant who is trained to identify potential accessibility issues and provide advice on legal obligations.'],
        ['Access panel', 'A panel of experts who provide guidance to builders and developers about unjustifiable hardship issues.'],
        ['Bindi Maps', "A free mobile application that helps people find their way around indoor spaces that other navigation apps can't reach."],
        ['Blue Badge Map', 'Worldwide map and database of accessible (Blue Badge) carparking spaces'],
        ['Building certifier', 'A person with responsibility for, or control over, the building approval process for a building. For example, a private certifier, building surveyor or local council.'],
        ['Building developer', 'A person with responsibility for, or control over, a building’s design or construction. For example, a property developer, property owner, building designer, builder, project manager or project lessee.'],
      ],
      classes: 'table-dark-blue',
      tableHeadersAppendix: ['Part', 'Title', 'Provisions of Access Code', 'Current ref. version', 'Year'],
      tableContentsAppendix: [
          ['Part 1', 'General requirements for access – New building work (incorporating amendments 1 and 2)', 'A1.1, D3.1, D3.2, D3.3, D3.6, D3.8, D3.9, D3.10, D3.12, D5.2, D5.3, F2.4', '2009', '2021'],
          ['Part 1', 'General requirements for access – New building work (incorporating amendments 1 and 2)', 'A1.1, D3.1, D3.2, D3.3, D3.6, D3.8, D3.9, D3.10, D3.12, D5.2, D5.3, F2.4', '2009', '2021'],
          ['Part 1', 'General requirements for access – New building work (incorporating amendments 1 and 2)', 'A1.1, D3.1, D3.2, D3.3, D3.6, D3.8, D3.9, D3.10, D3.12, D5.2, D5.3, F2.4', '2009', '2021'],
          ['Part 1', 'General requirements for access – New building work (incorporating amendments 1 and 2)', 'A1.1, D3.1, D3.2, D3.3, D3.6, D3.8, D3.9, D3.10, D3.12, D5.2, D5.3, F2.4', '2009', '2021'],
          ['Part 1', 'General requirements for access – New building work (incorporating amendments 1 and 2)', 'A1.1, D3.1, D3.2, D3.3, D3.6, D3.8, D3.9, D3.10, D3.12, D5.2, D5.3, F2.4', '2009', '2021'],
          ['Part 1', 'General requirements for access – New building work (incorporating amendments 1 and 2)', 'A1.1, D3.1, D3.2, D3.3, D3.6, D3.8, D3.9, D3.10, D3.12, D5.2, D5.3, F2.4', '2009', '2021'],
      ]
    }
  }
}
</script>

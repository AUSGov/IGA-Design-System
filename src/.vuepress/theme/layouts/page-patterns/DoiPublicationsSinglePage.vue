<template>
  <div class="doi-content">
    <Header />
    <PublicationBanner />
    <div class="d-flex">
      <Publication />
    </div>
    <div class="container-small">
      <DoiTable :table-headers="tableHeaders" :table-contents="tableContents" :classes="classes" />
    </div>
    <Footer />
  </div>
</template>
<script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import Publication from "../components/Publication.vue";
  import PublicationBanner from "../components/PublicationBanner.vue";
  import DoiTable from "../components/DoiTable.vue";
  export default {
    components: {
      Footer,
      Header,
      Publication,
      PublicationBanner,
      DoiTable,
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
        classes: 'table-dark-blue'
      }
    }
  }
</script>
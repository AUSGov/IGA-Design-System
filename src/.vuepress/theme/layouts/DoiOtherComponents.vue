<template>
  <div class="doi-content">
    <div class="container pb-5">
      <h2 id="pagination">Pagination</h2>
      <Pagination />
    </div>
    <div class="container pb-5">
      <h2 id="table">Table</h2>
      <DoiTable :headers="tableHeaders" :contents="tableContents"/>
    </div>
    <div class="container pb-5">
      <h2 id="publication-table">Publication Table</h2>
      <DoiTable :headers="publicationTableHeaders" :contents="publicationTableContents"/>
    </div>
    <div class="container pb-5">
      <h2 id="publication">Publication</h2>
      <Publication />
    </div>
    <div class="container pb-5">
      <form class="form">
        <div class="form-inputs">
          <div class="inputs-container">
            <div class="input-container">
              <input type="text" id="component-input" class="form-control form-input" placeholder="Placeholder">
              <div class="error-container">
                <span v-html="warning"></span><span>How dare you!</span>
              </div>
            </div>
            <div class="input-container">
              <select id="component-select" title="Placeholder">
                <option value="1">Australian Industry Participation Authority</option>
                <option value="2">Anti-Dumping Commission</option>
                <option value="3">AusIndustry</option>
                <option value="3">Australian Industry Participation Authority...</option>
                <option value="3">Australian Radioactive Waste Authority</option>
              </select>
              <div class="error-container">
                <span v-html="warning"></span><span>How dare you!</span>
              </div>
            </div>
            <div class="check-container">
              <input class="form-check-input" type="radio" value="" aria-label="Radio button for following text input">
              <label class="form-check-label" for="flexCheckFirst">
                Label
              </label>
            </div>
            <div class="check-container">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckFirst">
              <label class="form-check-label" for="flexCheckFirst">
                Label
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="container pb-5">
      <h2 id="horizontal-timeline">Horizontal Timeline</h2>
      <HorizontalTimeline />
    </div>
    <div class="container pb-5">
      <h2 id="vertical-timeline">Vertical Timeline</h2>
      <VerticalTimeline />
    </div>
    <div class="container pb-5">
      <h2 id="callout">Callout</h2>
      <CalloutModal />
    </div>
    <div class="container pb-5">
      <h2 id="media-transcript">Media Transcript</h2>
      <MediaTranscript />
    </div>
    <div class="container pb-5">
      <h2 id="blockquote">Blockquote</h2>
      <Blockquote />
    </div>

    <div class="container">
      <h2 id="media-gallery">Media Gallery</h2>
      <MediaGallery />
    </div>
  </div>
</template>

<script>
  import MediaTranscript from "./components/MediaTranscript.vue"
  import Blockquote from "./components/DoiBlockquote.vue"
  import CalloutModal from "./components/CalloutModal.vue"
  import Pagination from './components/Pagination.vue'
  import Publication from './components/Publication.vue'
  import HorizontalTimeline from './components/HorizontalTimeline.vue'
  import DoiTable from './components/DoiTable.vue'
  import VerticalTimeline from "./components/VerticalTimeline.vue"
  import MediaGallery from "./components/MediaGallery.vue"

  export default {
    components: {
      Blockquote,
      CalloutModal,
      MediaGallery,
      HorizontalTimeline,
      Pagination,
      Publication,
      MediaTranscript,
      DoiTable,
      VerticalTimeline,
    },
    mounted () {
      //form inputs
      $('select').selectpicker()
    },
    data () {
      return {
        tableHeaders: ['Access and egress', 'Means of entry and exit to a building'],
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
        publicationTableHeaders: ['Title', 'Date', 'Publisher'],
        publicationTableContents: [
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
          ['Lachlan water resource plan', '13 Apr 2022', 'AusIndustry'],
        ],
      }
    }
  }
</script>

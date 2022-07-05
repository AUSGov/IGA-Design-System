<template>
  <div class="doi-content">
    <div class="container pb-5">
      <h2 id="pagination">Pagination</h2>
      <Pagination />
    </div>
    <div class="container pb-5">
      <h2 id="table">Table</h2>
      <Table />
    </div>
    <div class="container pb-5">
      <h2 id="publication-table">Publication Table</h2>
      <PublicationTable />
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
      <h2 id="gallery">Gallery</h2>
    </div>
    <Gallery />
  </div>
</template>

<script>
  import MediaTranscript from "./components/MediaTranscript.vue"
  import Blockquote from "./components/Blockquote.vue"
  import CalloutModal from "./components/CalloutModal.vue"
  import Pagination from './components/Pagination.vue'
  import PublicationTable from './components/PublicationTable.vue'
  import Publication from './components/Publication.vue'
  import HorizontalTimeline from './components/HorizontalTimeline.vue'
  import Table from './components/Table.vue'
  import VerticalTimeline from "./components/VerticalTimeline.vue"
  import Gallery from "./components/Gallery.vue"

  export default {
    components: {
      Blockquote,
      CalloutModal,
      Gallery,
      HorizontalTimeline,
      Pagination,
      Publication,
      PublicationTable,
      MediaTranscript,
      Table,
      VerticalTimeline,
    },
    mounted () {
      //form inputs
      $('select').selectpicker()
    }
  }
</script>

import { defineClientConfig } from '@vuepress/client'
import ParentPage from './theme/layouts/ParentPage.vue'
import DoiContent from './theme/layouts/DoiContent.vue'
import DoiContentHeadersFooters from './theme/layouts/DoiContentHeadersFooters.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ParentPage', ParentPage)
    app.component('DoiContent', DoiContent)
    app.component('DoiContentHeadersFooters', DoiContentHeadersFooters)
  },
})

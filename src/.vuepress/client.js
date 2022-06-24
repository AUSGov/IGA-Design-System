import { defineClientConfig } from '@vuepress/client'
import ParentPage from './theme/layouts/ParentPage.vue'
import DoiContent from './theme/layouts/DoiContent.vue'
import DoiContentHeadersFooters from './theme/layouts/DoiContentHeadersFooters.vue'
import DoiContentBanners from './theme/layouts/DoiContentBanners.vue'
import DoiContentFilters from './theme/layouts/DoiContentFilters.vue'

import 'bootstrap/dist/js/bootstrap.min'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ParentPage', ParentPage)
    app.component('DoiContent', DoiContent)
    app.component('DoiContentHeadersFooters', DoiContentHeadersFooters)
    app.component('DoiContentBanners', DoiContentBanners)
    app.component('DoiContentFilters', DoiContentFilters)
  },
})

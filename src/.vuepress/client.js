import { defineClientConfig } from '@vuepress/client'
import ParentPage from './theme/layouts/ParentPage.vue'
import DoiContent from './theme/layouts/DoiContent.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ParentPage', ParentPage)
    app.component('DoiContent', DoiContent)
  },
})

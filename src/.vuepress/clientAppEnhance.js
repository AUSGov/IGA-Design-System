import { defineClientAppEnhance } from '@vuepress/client'
import ParentPage from './theme/layouts/ParentPage.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('ParentPage', ParentPage)
})

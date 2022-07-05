import { defineClientConfig } from '@vuepress/client'
import ParentPage from './theme/layouts/ParentPage.vue'
import DoiContent from './theme/layouts/DoiContent.vue'
import DoiContentHeadersFooters from './theme/layouts/DoiContentHeadersFooters.vue'
import DoiContentBanners from './theme/layouts/DoiContentBanners.vue'
import DoiContentFilters from './theme/layouts/DoiContentFilters.vue'
import DoiContentNavigation from './theme/layouts/DoiContentNavigation.vue'
import DoiOtherComponents from './theme/layouts/DoiOtherComponents.vue'
import DoiContentCards from './theme/layouts/DoiContentCards.vue'

// page patterns
import DoiNewsHomepage from './theme/layouts/page-patterns/DoiNewsHomepage.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ParentPage', ParentPage)
    app.component('DoiContent', DoiContent)
    app.component('DoiContentHeadersFooters', DoiContentHeadersFooters)
    app.component('DoiContentBanners', DoiContentBanners)
    app.component('DoiContentFilters', DoiContentFilters)
    app.component('DoiContentNavigation', DoiContentNavigation)
    app.component('DoiOtherComponents', DoiOtherComponents)
    app.component('DoiContentCards', DoiContentCards)

    // page patterns
    app.component('DoiNewsHomepage', DoiNewsHomepage)

    app.directive('inline-svg', {
      updated: (element) => {
        if (element.children.length === 0) {
          return
        }
        const svg = element.children[0]
        if (svg.tagName.toLowerCase() !== 'svg') {
          return
        }
        for (let i = 0; i < svg.attributes.length; i++) {
          const attr = svg.attributes.item(i)
          element.setAttribute(attr.nodeName, attr.nodeValue)
        }
        svg.replaceWith(...svg.children)
      }
    })
  },
})

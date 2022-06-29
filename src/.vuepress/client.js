import { defineClientConfig } from '@vuepress/client'
import ParentPage from './theme/layouts/ParentPage.vue'
import DoiContent from './theme/layouts/DoiContent.vue'
import DoiContentHeadersFooters from './theme/layouts/DoiContentHeadersFooters.vue'
import DoiContentBanners from './theme/layouts/DoiContentBanners.vue'
import DoiContentFilters from './theme/layouts/DoiContentFilters.vue'
import DoiContentNavigation from './theme/layouts/DoiContentNavigation.vue'
import DoiOtherComponents from './theme/layouts/DoiOtherComponents.vue'

import 'https://code.jquery.com/jquery-3.6.0.min.js'
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
import 'https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/bootstrap-select.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/11.0.2/bootstrap-slider.min.js'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ParentPage', ParentPage)
    app.component('DoiContent', DoiContent)
    app.component('DoiContentHeadersFooters', DoiContentHeadersFooters)
    app.component('DoiContentBanners', DoiContentBanners)
    app.component('DoiContentFilters', DoiContentFilters)
    app.component('DoiContentNavigation', DoiContentNavigation)
    app.component('DoiOtherComponents', DoiOtherComponents)

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
        console.log(element.innerText)
      }
    })
  },
})

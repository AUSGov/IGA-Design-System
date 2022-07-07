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
import DoiNewsSubsection from './theme/layouts/page-patterns/DoiNewsSubsection.vue'
import DoiNewsArticle from './theme/layouts/page-patterns/DoiNewsArticle.vue'
import DoiPublicationsHomepage from './theme/layouts/page-patterns/DoiPublicationsHomepage.vue'
import DoiPublicationsSinglePage from './theme/layouts/page-patterns/DoiPublicationsSinglePage.vue'
import DoiPublicationsSingleBasic from './theme/layouts/page-patterns/DoiPublicationsSingleBasic.vue'
import DoiStandardContent from './theme/layouts/page-patterns/DoiStandardContent.vue'
import DoiPublicationsChaptered from './theme/layouts/page-patterns/DoiPublicationsChaptered.vue'
import DoiPublicationsChapteredChild from './theme/layouts/page-patterns/DoiPublicationsChapteredChild.vue'


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
    app.component('DoiNewsSubsection', DoiNewsSubsection)
    app.component('DoiNewsArticle', DoiNewsArticle)
    app.component('DoiPublicationsHomepage', DoiPublicationsHomepage)
    app.component('DoiPublicationsSinglePage', DoiPublicationsSinglePage)
    app.component('DoiPublicationsSingleBasic', DoiPublicationsSingleBasic)
    app.component('DoiPublicationsChaptered', DoiPublicationsChaptered)
    app.component('DoiPublicationsChapteredChild', DoiPublicationsChapteredChild)
    app.component('DoiStandardContent', DoiStandardContent)

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

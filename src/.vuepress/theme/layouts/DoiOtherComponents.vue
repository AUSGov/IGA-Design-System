<template>
  <div class="doi-content">
    <div class="container">
      <div class="paginate mt-5 mb-5">
        <div class="result-container">Showing 1 - 6 of 24 results</div>
        <nav aria-label="Pagination">
          <ul class="pagination first-page">
            <li class="page-item page-previous">
              <a class="page-icon" href="#" aria-label="Previous">
                <span aria-hidden="true" v-html="chevronBack"></span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" data-page="1" href="#">1</a></li>
            <li class="page-item"><a class="page-link" data-page="2" href="#">2</a></li>
            <li class="page-item"><a class="page-link" data-page="3" href="#">3</a></li>
            <li class="page-item page-next">
              <a class="page-icon" href="#" aria-label="Next">
                <span aria-hidden="true" v-html="chevronForward"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="container">
      <div class="doi-table">
        <table class="table table-striped">
          <thead class="table-critical-minerals-office body-small">
            <tr class="table-header first">
              <td class="header-title">Part</td>
              <td class="header-title">Title</td>
              <td class="header-title">Provisions of Access Code</td>
              <td class="header-title">Current referenced version</td>
              <td class="header-title">Proposed referenced version</td>
            </tr>
            <tr class="table-header last hide">
              <td>Table Title</td>
            </tr>
          </thead>
          <tbody>
          <tr v-for="index in 6" :key="index" class="body-small">
            <td class="table-content"><span class="content-title">Part:</span>Part 1</td>
            <td class="table-content"><span class="content-title">Title:</span>General requirements for access – New building work (incorporating amendments 1 and 2)</td>
            <td class="table-content"><span class="content-title">Provisions of Access Code:</span>A1.1, D3.1, D3.2, D3.3, D3.6, D3.8, D3.9, D3.10, D3.12, D5.2, D5.3, F2.4</td>
            <td class="table-content"><span class="content-title">Current referenced version:</span>2009</td>
            <td class="table-content"><span class="content-title">Proposed referenced version:</span>2021</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container mb-5">
      <div class="doi-table">
        <table class="table table-striped">
          <thead class="table-primary body-small">
          <tr class="table-header first">
            <td class="header-title">Title</td>
            <td class="header-title"></td>
            <td class="header-title">Date</td>
            <td class="header-title">Publisher</td>
          </tr>
          <tr class="table-header last hide">
            <td>Table Title</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="index in 18" :key="index" class="body-small">
            <td colspan="2" class="table-content"><span class="content-title">Title:</span>Lachlan water resource plan</td>
            <td class="table-content"><span class="content-title">Date:</span>13 Apr 2022	</td>
            <td class="table-content"><span class="content-title">Publisher:</span>AusIndustry</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container mb-5">
      <div class="publication">
        <div class="publication-container ">
          <span class="publication-title">Topics</span>
          <div class="button-container heading-extra-small">
            <button class="topic-button"><span>Mining oil and gas</span></button>
            <button class="topic-button"><span>Critical Minerals</span></button>
          </div>
        </div>
        <div class="publication-container">
          <span class="publisher-title">Publisher</span>
          <span class="publisher-subtitle">Department of Industry, Science, Energy and Resources</span>
        </div>
        <div class="publication-container">
          <span class="publication-title">Subscribe for updates</span>
          <span class="publisher-subtitle">Modern Manufacturing Strategy Updates</span>
          <span class="publisher-content">Subscribing to updates ensures you'll receive the latest on funding and programs, and news and announcements. We recommend you subscribe to keep up to date on all Modern Manufacturing Strategy matters. </span>
          <button class="btn btn-primary caption-large"><span>Subscribe</span></button>
        </div>
        <div class="publication-container icon-container">
          <span class="icon-container" v-html="share"></span>
          <span class="icon-container" v-html="download"></span>
        </div>
        <div class="publication-container heading-extra-small">
          <div v-for="index in 4" :key="index" class="pdf-container">
            <div class="pdf-title">Australia’s Long-Term Emission Reduction plan <span class="description-container">PDF 17.5MB</span>
            </div>
            <span class="icon-container" v-html="download"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="gallery">
      <div class="container">
        <div class="splide splide-gallery-main">
          <div class="splide__track">
            <div class="splide__list">
              <div class="splide__slide">
                <div class="img-outer">
                  <div class="img-wrap">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                  </div>
                </div>
              </div>
              <div class="splide__slide">
                <div class="img-outer">
                  <div class="img-wrap">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                  </div>
                </div>
              </div>
              <div class="splide__slide">
                <div class="img-outer">
                  <div class="img-wrap">
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
                  </div>
                </div>
              </div>
              <div class="splide__slide">
                <div class="img-outer">
                  <div class="img-wrap">
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                  </div>
                </div>
              </div>
              <div class="splide__slide">
                <div class="img-outer">
                  <div class="img-wrap">
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="splide__arrows">
            <button class="splide__arrow splide__arrow--prev" v-html="chevronForward"></button>
            <button class="splide__arrow splide__arrow--next" v-html="chevronForward"></button>
          </div>
        </div>
        <div class="gallery-footer">
          <div class="splide splide-gallery-thumbnail">
            <div class="splide__track">
              <div class="splide__list">
                <div class="splide__slide">
                  <div class="img-outer">
                    <div class="img-wrap">
                      <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                    </div>
                  </div>
                </div>
                <div class="splide__slide">
                  <div class="img-outer">
                    <div class="img-wrap">
                      <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                    </div>
                  </div>
                </div>
                <div class="splide__slide">
                  <div class="img-outer">
                    <div class="img-wrap">
                      <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
                    </div>
                  </div>
                </div>
                <div class="splide__slide">
                  <div class="img-outer">
                    <div class="img-wrap">
                      <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                    </div>
                  </div>
                </div>
                <div class="splide__slide">
                  <div class="img-outer">
                    <div class="img-wrap">
                      <img src="https://swiperjs.com/demos/images/nature-5.jpg"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="splide__arrows">
              <button class="splide__arrow splide__arrow--prev" v-html="chevronForward"></button>
              <button class="splide__arrow splide__arrow--next" v-html="chevronForward"></button>
            </div>
          </div>
          <figcaption class="figure-caption text-end mb-2">Caption Image from Getty images.</figcaption>
          <div class="gallery-description" data-bs-toggle="collapse" data-bs-target="#galleryDescription" aria-expanded="false" aria-controls="galleryDescription">
            <a href="#" class="fw-bold me-2">Show transcript</a>
            <span class="open" v-html="circleChevronDown"></span>
            <span class="close" v-html="circleChevronDownFilled"></span>
          </div>
          <div id="galleryDescription" class="accordion-collapse collapse">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit malesuada viverra est magna sapien iaculis. Vitae arcu id dignissim enim eget viverra. Integer cras pharetra egestas tempus et volutpat, blandit. Arcu tristique dolor at donec tempor in et dictum vitae. Consectetur ipsum aliquet maecenas elit rhoncus. Cursus vitae duis volutpat condimentum at dignissim rhoncus ut ac. Mauris lobortis lacus tellus risus amet. Vel aliquet bibendum a leo lobortis vulputate. Sit quis quis egestas est amet urna, enim enim.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Splide from '@splidejs/splide'
  import '@splidejs/splide/dist/css/splide.min.css'
  import chevronForward from '../../public/icons/chevron-forward.svg?raw'
  import chevronBack from '../../public/icons/chevron-back.svg?raw'
  import circleChevronDown from '../../public/icons/circle-chevron-down.svg?raw'
  import circleChevronDownFilled from '../../public/icons/circle-chevron-down-filled.svg?raw'
  import download from '../../public/icons/download.svg?raw'
  import share from '../../public/icons/share.svg?raw'

  export default {
    mounted () {
      //pagination
      const $pageLink = $('.page-link')
      $pageLink.first().addClass('active')
      //table
      modifyTable()
      $(window).resize(function() {
        modifyTable()
      })

      function modifyTable() {
        const width = $(window).width()
        const $tableHeaderFirst = $('.table-header.first')
        const $tableHeaderLast = $('.table-header.last')
        const $contentTitle = $('.content-title')
        if (width < 992) {
          $tableHeaderFirst.addClass('hide')
          $tableHeaderLast.removeClass('hide')
          $contentTitle.removeClass('hide')
        } else {
          $tableHeaderFirst.removeClass('hide')
          $tableHeaderLast.addClass('hide')
          $contentTitle.addClass('hide')
        }
      }

      //gallery
      const main = new Splide('.splide-gallery-main', {
        type: 'loop',
        gap: 0,
        rewind: true,
        pagination: false,
        arrows: true,
        padding: 150,
        breakpoints: {
          576: {
            padding: 50,
          },
          768: {
            padding: 80,
          },
          992: {
            padding: 100,
          }
        }
      })
      const thumbnail = new Splide('.splide-gallery-thumbnail', {
        type: 'loop',
        gap: 18,
        perPage: 6,
        rewind: true,
        pagination: false,
        isNavigation: true,
        focus: true,
        breakpoints: {
          576: {
            gap: 3,
          },
          992: {
            gap: 10,
          }
        }
      })
      main.sync(thumbnail)
      main.mount()
      thumbnail.mount()
    },
    data () {
      return {
        chevronForward,
        chevronBack,
        circleChevronDown,
        circleChevronDownFilled,
        download,
        share
      }
    }
  }
</script>

<template>
  <div class="doi-content">
    <div class="paginate">
      <nav aria-label="Pagination">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
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
  import circleChevronDown from '../../public/icons/circle-chevron-down.svg?raw'
  import circleChevronDownFilled from '../../public/icons/circle-chevron-down-filled.svg?raw'

  export default {
    mounted () {
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
        circleChevronDown,
        circleChevronDownFilled
      }
    }
  }
</script>

<template>
  <div class="doi-content">
    <div class="featured-news">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <div class="display-medium heading-underline">Featured News</div>
          <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
        </div>
        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body">
                <h4 class="card-subtitle heading-extra-small-caps">Feb 2022 /<br><span class="text-gray-500">Inspiring Australia</span>
                </h4>
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <a href="#" class="card-link link-icon">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body">
                <h4 class="card-subtitle heading-extra-small-caps">Feb 2022 /<br><span class="text-gray-500">Inspiring Australia</span>
                </h4>
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body">
                <h4 class="card-subtitle heading-extra-small-caps">Feb 2022 /<br><span class="text-gray-500">Inspiring Australia</span>
                </h4>
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body">
                <h4 class="card-subtitle heading-extra-small-caps">Feb 2022 /<br><span class="text-gray-500">Inspiring Australia</span>
                </h4>
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="editorials">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <div class="display-medium heading-underline">Editorial</div>
          <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
        </div>

        <!-- Medium (base) and extra small card -->
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="card card">
              <div class="card-img-top">
                <div class="img-wrap">
                  <img :src="$withBase('images/cards-sample.png')" alt="">
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-subtitle heading-extra-small-caps">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                </h4>
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <p class="card-text">Ship of the imagination star stuff harvesting star light descended from astronomers finite but unbounded realm of the galaxies.</p>
                <a href="#" class="card-link link-icon">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card card-xs">
              <div class="card-img-top">
                <div class="img-wrap">
                  <img :src="$withBase('images/cards-sample.png')" alt="">
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-subtitle heading-extra-small-caps">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                </h4>
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <p class="card-text">Ship of the imagination star stuff harvesting star light descended from astronomers finite but unbounded realm of the galaxies.</p>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card card-xs">
              <div class="card-img-top">
                <div class="img-wrap">
                  <img :src="$withBase('images/cards-sample.png')" alt="">
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-subtitle heading-extra-small-caps">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                </h4>
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <p class="card-text">Ship of the imagination star stuff harvesting star light descended from astronomers finite but unbounded realm of the galaxies.</p>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>

          <!-- Small card -->
          <div class="col-lg-4">
            <div class="card card-sm">
              <div class="card-img-top">
                <div class="img-wrap">
                  <img :src="$withBase('images/cards-sample.png')" alt="">
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-subtitle heading-extra-small-caps">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                </h4>
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <p class="card-text">Ship of the imagination star stuff harvesting star light descended from astronomers finite but unbounded realm of the galaxies.</p>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-sm">
              <div class="card-img-top">
                <div class="img-wrap">
                  <img :src="$withBase('images/cards-sample.png')" alt="">
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-subtitle heading-extra-small-caps">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                </h4>
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <p class="card-text">Ship of the imagination star stuff harvesting star light descended from astronomers finite but unbounded realm of the galaxies.</p>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-sm">
              <div class="card-img-top">
                <div class="img-wrap">
                  <img :src="$withBase('images/cards-sample.png')" alt="">
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-subtitle heading-extra-small-caps">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                </h4>
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <p class="card-text">Ship of the imagination star stuff harvesting star light descended from astronomers finite but unbounded realm of the galaxies.</p>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>

          <!-- Extra small card -->
          <div class="col-lg-3">
            <div class="card card-xs">
              <div class="card-img-top">
                <div class="img-wrap">
                  <img :src="$withBase('images/cards-sample.png')" alt="">
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-subtitle heading-extra-small-caps">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                </h4>
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <p class="card-text">Ship of the imagination star stuff harvesting star light descended from astronomers finite but unbounded realm of the galaxies.</p>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card card-xs">
              <div class="card-img-top">
                <div class="img-wrap">
                  <img :src="$withBase('images/cards-sample.png')" alt="">
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <p class="card-text">Ship of the imagination star stuff harvesting star light descended from astronomers finite but unbounded realm of the galaxies.</p>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card card-xs">
              <div class="card-img-top">
                <div class="img-wrap">
                  <img :src="$withBase('images/cards-sample.png')" alt="">
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card card-xs">
              <div class="card-img-top">
                <div class="img-wrap">
                  <img :src="$withBase('images/cards-sample.png')" alt="">
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <a href="#" class="card-link mb-3">Link <span v-html="linkArrowRight"></span></a>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <span v-html="calendar" class="icon"></span><span>Wed 3 November 2021, 9:00am</span></li>
                <li class="list-group-item">
                  <span v-html="gauge" class="icon"></span>
                  <span>9:00 am to 10:00 am (GMT),<br/>8:00 pm to 9:00 pm (AEDT)</span>
                </li>
                <li class="list-group-item"><span v-html="location" class="icon"></span>Location, Online</li>
                <li class="list-group-item"><span v-html="home" class="icon"></span>Entity Name</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="featured-editorials bg-light-teal-30">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <div class="display-medium heading-underline">Inspiring Australia</div>
          <a href="#" class="fw-bold link-icon">See all Inspiring Australia news<span v-html="linkArrowRight"></span></a>
        </div>
        <div class="row g-4">
          <div class="col-lg-3">
            <div class="card card-xs">
              <div class="card-img-top">
                <div class="img-wrap">
                  <img :src="$withBase('images/cards-sample.png')" alt="">
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-subtitle heading-extra-small-caps">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                </h4>
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <p class="card-text">Ship of the imagination star stuff harvesting star light descended from astronomers finite but unbounded realm of the galaxies.</p>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card card-xs">
              <div class="card-img-top">
                <div class="img-wrap">
                  <img :src="$withBase('images/cards-sample.png')" alt="">
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-subtitle heading-extra-small-caps">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                </h4>
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <p class="card-text">Ship of the imagination star stuff harvesting star light descended from astronomers finite but unbounded realm of the galaxies.</p>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card card-xs">
              <div class="card-img-top">
                <div class="img-wrap">
                  <img :src="$withBase('images/cards-sample.png')" alt="">
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-subtitle heading-extra-small-caps">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                </h4>
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <p class="card-text">Ship of the imagination star stuff harvesting star light descended from astronomers finite but unbounded realm of the galaxies.</p>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card card-xs">
              <div class="card-img-top">
                <div class="img-wrap">
                  <img :src="$withBase('images/cards-sample.png')" alt="">
                </div>
              </div>
              <div class="card-body">
                <h4 class="card-subtitle heading-extra-small-caps">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                </h4>
                <h3 class="card-title heading-small">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <p class="card-text">Ship of the imagination star stuff harvesting star light descended from astronomers finite but unbounded realm of the galaxies.</p>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row g-5">
        <div class="col-md-6">
          <div class="navigation-card navigation-card--inline">
            <div class="navigation-card-content">
              <div class="img-wrap">
                <img :src="$withBase('images/cards-sample.png')" alt="">
              </div>
              <div class="navigation-card-body">
                <div class="navigation-card-title">Dark Energy Survey Evolves or a longer title with three of more lines more line</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" class="link-icon">Link<span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="navigation-card navigation-card--inline">
            <div class="navigation-card-content">
              <div class="img-wrap">
                <img :src="$withBase('images/cards-sample.png')" alt="">
              </div>
              <div class="navigation-card-body">
                <div class="navigation-card-title">Dark Energy Survey Evolves or a longer title with three of more lines more line</div>
                <a href="#" class="link-icon">Link<span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="navigation-card navigation-card--inline">
            <div class="navigation-card-content">
              <div class="navigation-card-body">
                <div class="navigation-card-title">Dark Energy Survey Evolves or a longer title with three of more lines more line</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" class="link-icon">Link<span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="navigation-card navigation-card--inline">
            <div class="navigation-card-content">
              <div class="navigation-card-body">
                <div class="navigation-card-title">Dark Energy Survey Evolves or a longer title with three of more lines more line</div>
                <a href="#" class="link-icon">Link<span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="navigation-card">
            <div class="navigation-card-content">
              <div class="img-wrap">
                <img :src="$withBase('images/cards-sample.png')" alt="">
              </div>
              <div class="navigation-card-body">
                <div class="navigation-card-title">Dark Energy Survey Evolves or a longer title with three of more lines more line</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" class="link-icon">Link<span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="navigation-card navigation-card--inline bg-primary text-white">
            <div class="navigation-card-content">
              <div class="img-wrap">
                <img :src="$withBase('images/cards-sample.png')" alt="">
              </div>
              <div class="navigation-card-body">
                <div class="navigation-card-title">Dark Energy Survey Evolves or a longer title with three of more lines more line</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" class="link-icon">Link<span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="navigation-card navigation-card--inline bg-industry-innovation-science text-white">
            <div class="navigation-card-content">
              <div class="img-wrap">
                <img :src="$withBase('images/cards-sample.png')" alt="">
              </div>
              <div class="navigation-card-body">
                <div class="navigation-card-title">Dark Energy Survey Evolves or a longer title with three of more lines more line</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" class="link-icon">Link<span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row g-5">
        <div class="col-md-6">
          <div class="biography-card">
            <img :src="$withBase('images/profile-sample.png')" alt="">
            <div class="biography-content">
              <div class="biography-name">Full Name</div>
              <div class="biography-position">Role or Title Executive General Manager</div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="biography-card biography-card--secondary">
            <img :src="$withBase('images/profile-sample.png')" alt="">
            <div class="biography-content">
              <div class="biography-name">Full Name</div>
              <div class="biography-position">Role or Title Executive General Manager</div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="biography-card biography-card--full">
            <img :src="$withBase('images/profile-sample.png')" alt="">
            <div class="biography-content">
              <div class="biography-name">Full Name</div>
              <div class="biography-position">Role or Title Executive General Manager</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, amet ut purus senectus. Sit magna porta velit egestas etiam vitae sagittis. Scelerisque arcu congue porttitor pellentesque scelerisque tortor diam arcu. A massa aenean cras est rutrum.</p>
              <a href="#" class="link-icon">Read more<span v-html="linkArrowRight"></span></a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="biography-card biography-card--full biography-card--secondary">
            <img :src="$withBase('images/profile-sample.png')" alt="">
            <div class="biography-content">
              <div class="biography-name">Full Name</div>
              <div class="biography-position">Role or Title Executive General Manager</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, amet ut purus senectus. Sit magna porta velit egestas etiam vitae sagittis. Scelerisque arcu congue porttitor pellentesque scelerisque tortor diam arcu. A massa aenean cras est rutrum.</p>
              <a href="#" class="link-icon">Read more<span v-html="linkArrowRight"></span></a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="biography-card biography-card--card">
            <img :src="$withBase('images/profile-sample.png')" alt="">
            <div class="biography-content">
              <div class="biography-name">Full Name</div>
              <div class="biography-position">Role or Title Executive General Manager</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import linkArrowRight from '../../public/icons/link-arrow-right.svg?raw'
  import calendar from '../../public/icons/calendar.svg?raw'
  import gauge from '../../public/icons/gauge.svg?raw'
  import location from '../../public/icons/location.svg?raw'
  import home from '../../public/icons/home-outline.svg?raw'

  export default {
    data () {
      return {
        linkArrowRight,
        calendar,
        gauge,
        location,
        home
      }
    }
  }
</script>

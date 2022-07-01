<template>
  <div class="doi-content py-5">
    <div id="featured-news" class="featured-news pb-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <div class="display-medium heading-underline">Featured News</div>
          <a href="#" class="fw-bold link-icon">Find all <span v-html="linkArrowRight"></span></a>
        </div>
        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body">
                <h4 class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Inspiring Australia</span>
                </h4>
                <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <a href="#" class="card-link link-icon">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body">
                <h4 class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Inspiring Australia</span>
                </h4>
                <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body">
                <h4 class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Inspiring Australia</span>
                </h4>
                <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card">
              <div class="card-body">
                <h4 class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Inspiring Australia</span>
                </h4>
                <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="editorials" class="pb-5">
      <div class="editorials">
        <div class="container">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <div class="display-medium heading-underline">Editorials</div>
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
                  <h4 class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                  </h4>
                  <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
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
                  <h4 class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                  </h4>
                  <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
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
                  <h4 class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                  </h4>
                  <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
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
                  <h4 class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                  </h4>
                  <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
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
                  <h4 class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                  </h4>
                  <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
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
                  <h4 class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                  </h4>
                  <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
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
                  <h4 class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                  </h4>
                  <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
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
                  <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
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
                  <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
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
                  <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
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
    </div>

    <div class="pb-5">
      <div class="container">
        <h2 id="featured-editorials">Featured Editorials</h2>
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
                  <h4 class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                  </h4>
                  <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
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
                  <h4 class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                  </h4>
                  <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
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
                  <h4 class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                  </h4>
                  <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
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
                  <h4 class="card-subtitle">Feb 2022 /<br><span class="text-gray-500">Industry Growth Centres</span>
                  </h4>
                  <h3 class="card-title">Dark Energy Survey Evolves or a longer title with three of more lines more lines more lines more lines </h3>
                  <p class="card-text">Ship of the imagination star stuff harvesting star light descended from astronomers finite but unbounded realm of the galaxies.</p>
                  <a href="#" class="card-link">Link <span v-html="linkArrowRight"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container pb-5">
      <h2 id="navigation-card">Navigation Card</h2>
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
          <div class="pb-3">
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
      <h2 id="biography-card">Biography Card</h2>
      <div class="row g-5 pb-5">
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

      <h2 id="featured-card">Featured Card</h2>
      <div class="pb-5">
        <div class="card featured-card" style="background-image: url('/images/cards-sample.png');">
          <div class="card-body">
            <h5 class="card-subtitle">Who We Are</h5>
            <h4 class="card-title">We drive economic growth and job creation for all Australians.</h4>
            <a href="#" class="btn btn-primary fw-semi-bold">Find out About us</a>
          </div>
        </div>
      </div>
      <div class="pb-5">
        <div class="card featured-card featured-card--right" style="background-image: url('/images/cards-sample.png');">
          <div class="card-body">
            <h5 class="card-subtitle">Who We Are</h5>
            <h4 class="card-title">We drive economic growth and job creation for all Australians.</h4>
            <a href="#" class="btn btn-primary">Find out About us</a>
          </div>
        </div>
      </div>
      <div class="pb-5">
        <div class="card featured-card-inline">
          <div class="row g-0">
            <div class="col-4 col-lg-8">
              <img :src="$withBase('images/cards-sample.png')" alt="">
            </div>
            <div class="col-8 col-lg-4">
              <div class="card-body">
                <h4 class="card-subtitle">Feb 2022 /<span class="text-gray-500">Industry Growth Centres</span></h4>
                <h5 class="card-title">Keeping Australia’s space sector soaring</h5>
                <p class="card-text">The Australian Government is cementing Australia as a leading space nation in the region, with a range of new investments and reforms.</p>
                <div class="link-wrap">
                  <a href="#" class="link-icon">Link<span v-html="linkArrowRight"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-5">
        <div class="card featured-card-inline">
          <div class="row g-0">
            <div class="col-4 col-lg-8">
              <img :src="$withBase('images/cards-sample.png')" alt="">
            </div>
            <div class="col-8 col-lg-4">
              <div class="card-body">
                <h4 class="card-subtitle">Feb 2022 /<span class="text-gray-500">Industry Growth Centres</span></h4>
                <h5 class="card-title">Keeping Australia’s space sector soaring</h5>
                <p class="card-text">The Australian Government is cementing Australia as a leading space nation in the region, with a range of new investments and reforms.</p>
                <div class="link-wrap">
                  <a href="#" class="btn btn-primary">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-5">
        <div class="card featured-card-inline featured-card-inline--right">
          <div class="row g-0">
            <div class="col-4 col-lg-8">
              <img :src="$withBase('images/cards-sample.png')" alt="">
            </div>
            <div class="col-8 col-lg-4">
              <div class="card-body">
                <h4 class="card-subtitle">Feb 2022 /<span class="text-gray-500">Industry Growth Centres</span></h4>
                <h5 class="card-title">Keeping Australia’s space sector soaring</h5>
                <p class="card-text">The Australian Government is cementing Australia as a leading space nation in the region, with a range of new investments and reforms.</p>
                <div class="link-wrap">
                  <a href="#" class="btn btn-primary">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-5">
        <div class="card featured-card featured-card--no-bg" style="background-image: url('/images/cards-sample-2.png');">
          <div class="card-body">
            <h4 class="card-title">We drive economic growth and job creation for all Australians.</h4>
            <h5 class="card-subtitle">2 June 2022</h5>
            <div class="line-wrap">
              <a href="#" class="link-icon">Already been achieved in the transition, already been achieved in the transition is achieved <span v-html="linkArrowRight"></span></a>
            </div>
          </div>
        </div>
      </div>
      <div class="card featured-card featured-card--no-bg featured-card--right" style="background-image: url('/images/cards-sample-2.png');">
        <div class="card-body">
          <h4 class="card-title">We drive economic growth and job creation for all Australians.</h4>
          <h5 class="card-subtitle">2 June 2022</h5>
          <div class="line-wrap">
            <a href="#" class="link-icon">Already been achieved in the transition, already been achieved in the transition is achieved <span v-html="linkArrowRight"></span></a>
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

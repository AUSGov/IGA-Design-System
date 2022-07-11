---
lang: en-US
title: Header
description: Description of the page
pageHeader: true
---

### Overview
Along with site identity and search, the header anchors users in a high-level site structure. It appears on every page with a consistent set of key sections and direct links. The tab-style navigation allows for easy selection between core sections and content.

### Elements
<PreviewImage :image="$withBase('/images/global-header-sample.png')" :contents="[{ x: 1, y: 7.5, title: 'Logo', text: 'Logo of the header' }, { x: 16, y: 7.5, title: 'Label', text: 'Label of the logo' },{ x: 20, y: 7.5, title: 'Dropdown', text: ' Dropdown example'}, { x: 93, y: 7.5, title: 'Divider', text: ' Divider of the header'}, { x: 98, y: 7.5, title: 'Search', text: ' Search of the header'}]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
<nav id="header" class="navbar sticky-top navbar-expand-lg bg-light">
    <div class="header-wrap">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" v-html="hamburger"></span>
        </button>
        <a class="navbar-brand" href="/">
            <img :src="$withBase('images/DISR-logo.png')" alt="">
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="mobile-close d-lg-none" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"><span class="icon" v-html="close"></span></div>
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="whoWeAre" role="button" data-bs-toggle="dropdown" aria-expanded="false">Who we are</a>
                    <div class="dropdown-menu" aria-labelledby="whoWeAre">
                        <div class="row main-row">
                            <div class="col-md-6 col-lg-3">
                                <ul>
                                    <li><a href="#">Anti-Dumping Commission</a></li>
                                    <li><a href="#">Anti-Dumping Review Panel</a></li>
                                    <li><a href="#">AusIndustry</a></li>
                                </ul>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="content-group">
                                    <div class="mega-menu-label"><a href="#">Ministers<span class="icon" v-html="linkArrowRight"></span></a></div>
                                    <ul>
                                        <li><a href="#">Ministers</a></li>
                                    </ul>
                                </div>
                                <div class="content-group">
                                    <div class="mega-menu-label"><a href="#">People<span class="icon" v-html="linkArrowRight"></span></a></div>
                                    <ul>
                                        <li><a href="#">Executive team</a></li>
                                        <li><a href="#">Organisation chart</a></li>
                                        <li><a href="#">International engagements</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="content-group">
                                    <div class="mega-menu-label"><a href="#">Corporate Governance<span class="icon" v-html="linkArrowRight"></span></a></div>
                                    <ul>
                                        <li><a href="#">Annual report</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="content-group">
                                    <div class="mega-menu-label"><a href="#">Engage with us<span class="icon" v-html="linkArrowRight"></span></a></div>
                                    <ul>
                                        <li><a href="#">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="policyTopics" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Policy topics
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="policyTopics">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Initiatives and services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Regulations and standards</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Publications</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="engageWithUs" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Engage with us
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="engageWithUs">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="search-wrap">
            <a href="#"><span class="icon" v-html="search"></span></a>
        </div>
    </div>
</nav>
```
  </CodeGroupItem>
  <CodeGroupItem title="CSS" active>

```css
.navbar-brand {
  flex-grow: 1;
  text-align: center;
  justify-content: center;

  img {
    height: auto;
    width: 180px;
    object-fit: contain;
  }

  @include media-breakpoint-up(lg) {
    flex-grow: 0;

    img {
      width: 220px;
    }
  }
}

.navbar-expand-lg .navbar-nav .nav-link {
  color: rgb(50, 50, 50);
  font-weight: $font-weight-bold;
  text-decoration: none;
  border-radius: $btn-border-radius;

  &:hover {
    color: #fff;
    background-color: $primary;
  }

  @include media-breakpoint-up(lg) {
    font-size: 12px;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }

  @include media-breakpoint-up(xl) {
    font-size: 14px;
  }

  @include media-breakpoint-up(xxl) {
    font-size: 16px;
    padding-left: $navbar-nav-link-padding-x;
    padding-right: $navbar-nav-link-padding-x;
  }
}

.navbar-toggler {
  &:focus {
    box-shadow: none;
  }
}

.navbar-toggler-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-collapse {
  .icon {
    svg {
      width: 13px;

      path {
        fill: #fff;
      }
    }
  }

  .mobile-close {
    padding: 2rem;
    line-height: 1;
  }

  &.collapsing,
  &.show {
    background: $primary;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    visibility: visible;

    a {
      color: #fff;
    }
  }
}

.navbar-nav {
  margin: 0;
  padding: 0 2rem;

  @include media-breakpoint-up(lg) {
    padding: 0;
  }
}

.navbar {
  @include media-breakpoint-down(md) {
    padding-left: 1.5rem;
  }

  .header-wrap {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
  }

  .search-wrap {
    display: flex;
    border-left: 1px solid rgba(87, 87, 90, 0.2);
    padding-left: $navbar-nav-link-padding-x;
    padding-right: $navbar-nav-link-padding-x;
  }

  &.navbar-expand-lg {
    .dropdown-menu {
      position: fixed;
      top: 88px;
      bottom: 0;
      left: 0;
      right: 0;
      box-shadow: none;
      background-color: $primary;
      color: #fff;
      padding: 0 2rem;
      border: none;
      border-radius: 0;
      margin: 0;

      @include media-breakpoint-up(lg) {
        top: 100px;
        bottom: unset;
        padding: 3rem 2rem;
      }

      a {
        color: #fff;
        padding-left: 13px;
        font-size: 15px;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .mega-menu-label {
        border-left: 5px solid #fff;

        a {
          padding-left: 8px;
          font-weight: $font-weight-semi-bold;
        }
      }

      .main-row {
        --bs-gutter-x: 4rem;

        > [class*="col-"] {
          border-left: 1px solid rgba(255, 255, 255, 0.5);

          &:first-child {
            border-left: none;
          }
        }
      }

      .content-group {
        margin-bottom: 4rem;
      }

      .icon {
        margin-left: 7px;
      }
    }
  }
}
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variants
None.

### Behaviours
**Mobile:** The header menu items collapse into a left-panel hamburger menu.

**Header navigation:** Links should not open a new tab or link to another domain. The links drop down to the side menu in narrow screen widths. Header items with a sub-menu include a dropdown arrow icon.

**Sub-menu:** On click, the navigation items expand to reveal the mega menu.  

**Search:** On click, a search box expands to the right inside the header.

### Recommendations

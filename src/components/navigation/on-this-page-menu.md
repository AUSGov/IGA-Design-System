---
lang: en-US
title: On This Page Menu
description: Description of the page
pageHeader: true
---

### Overview
On this page is a navigation component used on pages that include long-form content, such as case studies and long standard content pages. Generally the page needs to have 3 or more headings to qualify. It allows users to scan long pages and skip to chapters of interest.

### Elements
<PreviewImage :image="$withBase('/images/on-this-page-menu.png')" :contents="[{ x: 0, y: 20, title: 'Anchor links', text: 'These links navigate to headings on the page'}, { x: 0, y: 86, title: 'Show more link', text: 'This show more link appears when there are 5 or more links. It can be clicked to show the hidden links in the menu.'}]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
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
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
None.

### Behaviours
If the on this page has 5 or more links, it will include a 'show more' and hide the additional links. This 'show more' link can be clicked to expand the menu and show the extra links.


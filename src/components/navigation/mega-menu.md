---
lang: en-US
title: Mega Menu
description: Description of the page
pageHeader: true
---

### Overview
The mega menu categorises the site’s parent and child landing pages, plus any important links to external sites. It works in parallel with the header to orient users and create a consistent navigation pattern, and allows them to access deeper into content based on what they’re here to achieve.

### Elements
<PreviewImage :image="$withBase('/images/mega-menu-sample.png')" :contents="[{ x: 1, y: 15, title: 'Label', text: 'Mega menu label'}, { x: 44, y: 15, title: 'Link arrow', text: 'Mega menu link arrow'}, { x: 50, y: 65, title: 'Dropdown (expand / collapse)', text: 'Mega menu dropdown'}, ]">
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

### Behaviours
When a header navigation label is selected, the mega menu opens below. On hover and click, the menu items become underlined and arrows also appear to indicate a link to an internal page. Labels that link off the site use the external link icon on hover and click.
Level 2 and 3 menu items are persistent. On click, level 3 menu items reveal level 4 child pages and are closed by making a selection or by clicking outside the menu area.
When selected, the items with a plus symbol will push down to show another page level. Selecting the minus will contract the menu.
Only a single topic can be expanded at once. The expanded section of the menu will collapse when another plus icon is selected.

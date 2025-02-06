---
lang: en-US
title: Secondary Footer
description: Description of the page
pageHeader: true
---

### Overview

The secondary footer sits directly above the global footer.

#### Example
<PreviewImage :image="$withBase('/images/secondary-footer-sample.png')" :contents="[{ x: 1, y: 7.5, title: 'Title', text: 'Secondary footer title' }, { x: 1, y: 25, title: 'Label', text: 'Secondary footer label' },{ x: 1, y: 60, title: 'Body copy', text: 'Secondary footer body copy'}, { x: 49, y: 20, title: 'Icon', text: 'Secondary footer icon'}]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
<div class="secondary-footer secondary-footer--extended-contact secondary-footer--connect-with-us secondary-footer--subscribe-updates">
    <div class="container">
        <div class="row main-row">
            <div class="col-md base-contact">
                <div class="footer-title">Contact Us</div>
                <div class="mb-4 d-flex">
                    <span class="icon" v-html="email"></span>
                    <div class="d-flex flex-column">
                        <span class="fw-semi-bold">General Enquiries</span>
                        <a href="mailto:enquiries@space.gov.au">enquiries@space.gov.au</a>
                        <span class="fw-semibold">Media Enquiries</span>
                        <a href="mailto:enquiries@space.gov.au">enquiries@space.gov.au</a>
                    </div>
                </div>
                <div class="d-flex">
                    <span class="icon" v-html="phone"></span>
                    <div class="d-flex flex-column">
                        <a href="tel:+61 1800 497 182">1800 497 182 (within Australia)</a>
                        <a href="tel:+61 2 6276 1166">+61 2 6276 1166</a>
                    </div>
                </div>
            </div>
            <div class="col-md extended-contact">
                <div class="footer-title footer-title-placeholder"></div>
                <div class="mb-4 d-flex">
                    <span class="icon" v-html="mailbox"></span>
                    <div class="d-flex flex-column">
                        <span>Australian Space Agency,</span>
                        <span>GPO Box 2013,</span>
                        <span>CANBERRA ACT 2601</span>
                    </div>
                </div>
                <div class="d-flex">
                    <span class="icon" v-html="location"></span>
                    <div class="d-flex flex-column">
                        <span>McEwin Building.</span>
                        <span>Lot Fourteen, North Terrace,</span>
                        <span>Adelaide SA 5000</span>
                    </div>
                </div>
            </div>
            <div class="col-md connect-with-us">
                <div class="footer-title">Connect with us</div>
                <ul>
                    <li class="mb-4">
                        <span class="icon" v-html="twitter"></span>
                        <span>Twitter</span>
                    </li>
                    <li class="mb-4">
                        <span class="icon" v-html="linkedin"></span>
                        <span>LinkedIn</span>
                    </li>
                    <li>
                        <span class="icon" v-html="facebook"></span>
                        <span>Facebook</span>
                    </li>
                </ul>
            </div>
            <div v-if="subscribe" class="col-md subscribe-updates">
                <div class="footer-title">Subscribe for updates</div>
                <span class="icon" v-html="notification"></span>
                <span>Subscribe for the latest news</span>
            </div>
        </div>
    </div>
</div>
```
  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variants

While the design of the secondary footer remains the same across the site, the sections of content can adapt to the information available for the entity. When a section is not populated with content, it will not display in the footer. 
For instance, if a subscribe link is included, the fourth column will appear. 
If not, the fourth column will be empty.


### Behaviours
None.

### Recommendations
The secondary footer is used for all contact details, newsletter links and social media accounts.

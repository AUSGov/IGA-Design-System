---
lang: en-US
title: Global Footer
description: Description of the page
pageHeader: true
---

### Overview

Creates a consistent and predictable user experience by combining core navigation and utility links, contact information, social media accounts, a subscription field, and Acknowledgement of Country at the bottom of all website pages.

### Elements

<PreviewImage :image="$withBase('/images/map-sample.png')" :contents="[{ x: 2, y: 2.5, title: 'Title', text: 'Footer title' }, { x: 2, y: 11, title: 'Label', text: 'Footer label' }, { x: 2, y: 20, title: 'External link', text: 'Footer external link' }, { x: 65, y: 12, title: 'Body Copy', text: 'Footer body copy' }, { x: 40, y: 24, title: 'Icon', text: 'Footer Icon' }, { x: 65, y: 28, title: 'Primary Button', text: 'Footer primary button' }, { x: 20, y: 80, title: 'Acknowledgment of Country', text: 'Footer Acknowledgment of Country' },]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
  <footer class="footer">
    <div class="top-footer bg-gray-800">
        <div class="container">
            <div class="row g-lg-5 main-row">
                <div class="col-md-6">
                    <div class="footer-menu">
                        <div class="row">
                            <div class="heading-extra-small-caps mb-3">Section Title</div>
                            <div class="col-lg-6">
                                <ul>
                                    <li><a href="#" class="link-icon link-secondary">People<span v-html="linkArrowRight"></span></a>
                                    </li>
                                    <li>
                                        <a href="#" class="link-icon link-secondary">Corporate governance<span v-html="linkArrowRight"></span></a>
                                    </li>
                                    <li>
                                        <a href="#" class="link-icon link-secondary">Access to information<span v-html="linkArrowRight"></span></a>
                                    </li>
                                    <li><a href="#" class="link-icon link-secondary">Work with us<span v-html="linkArrowRight"></span></a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex align-items-center">Ministers<span class="ms-1" v-html="externalLink"></span></a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex align-items-center">Public consultations<span class="ms-1" v-html="externalLink"></span></a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex align-items-center">Portfolio agencies and boards<span class="ms-1" v-html="externalLink"></span></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="d-none d-lg-block col-lg-6">
                                Test
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="heading-extra-small-caps mb-3">Contact Us</div>
                    <p>Department of Industry, Science, Energy & Resources</p>
                    <ul class="contact-us">
                        <li class="mb-3"><a href="#"><span class="icon" v-html="email"></span><span>General Enquiries</span></a>
                        </li>
                        <li class="mb-3">
                            <a href="tel:#"><span class="icon" v-html="phone"></span><span>+61 2 6213 6000</span></a></li>
                        <li class="mb-3">
                            <a href="#" class="d-flex">
                                <span class="icon" v-html="location"></span>
                                <div class="d-flex flex-column">
                                    <span>Industry House,</span>
                                    <span>10 Binara Street</span>
                                    <span>Canberra (in the CBD)</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <span>Department of Industry</span>
                    <div>ABN: 74 599 609 295</div>
                </div>
                <div class="col-md-12 col-lg-3">
                    <div class="subscribe">
                        <div class="heading-extra-small-caps mb-3">Subscribe For Updates</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        <button class="btn btn-primary">Subscribe</button>
                    </div>
                    <div>
                        <div class="heading-extra-small-caps mb-3">Connect with us:</div>
                        <ul class="social-icons">
                            <li><a href="#"><span class="icon" v-html="twitter"></span></a></li>
                            <li><a href="#"><span class="icon" v-html="facebook"></span></a></li>
                            <li><a href="#"><span class="icon" v-html="instagram"></span></a></li>
                            <li><a href="#"><span class="icon" v-html="youtube"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom-footer bg-gray-700">
        <div class="container">
            <div class="d-flex align-items-center justify-content-center flex-column flex-md-row">
                <div class="img-wrap mb-4 me-md-4">
                    <img src="../../../public/images/acknowledgement.png" alt="">
                </div>
                <div class="d-flex flex-column description">
                    <div class="heading-extra-small-caps mb-3">Acknowledgement of Country</div>
                    <p>Our department recognises the First Peoples of this nation and their ongoing connection to culture and country. We acknowledge First Nations Peoples as the Traditional Owners, Custodians and Lore Keepers of the world's oldest living culture and pay respects to their Elders past, present and emerging.</p>
                </div>
            </div>
        </div>
    </div>
</footer>
```

  </CodeGroupItem>

  <CodeGroupItem title="JS" active>

```js:no-line-numbers
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variants
None.

### Behaviours
None.

### Recommendations
Add content strategy guidelines and editorial rules here.

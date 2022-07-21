---
lang: en-US
title: Chapter Banner
description: Description of the page
pageHeader: true
---

### Overview
Used in the publication section, this navigation component allows users to move backward and forward in linear order through publications.

### Elements
<PreviewImage :image="$withBase('/images/content-stepper.png')" :contents="[{ x: 60.5, y: 34, title: 'Previous label', text: 'Content stepper previous label' }, { title: 'Content label', text: 'Content stepper content label' },  { x: 79, y: 34, title: 'Next label', text: 'Content stepper next label' }, { x: 96, y: 34, title: 'Divider', text: 'Content stepper divider' }, { x: 0, y: 34, title: 'Navigation (sticky variation only)', text: 'Content stepper navigation' }]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
<div class="content-stepper" :class="classes">
    <div class="stepper-content">
        <div v-if="button" class="btn-group dropup">
            <button class="btn btn-promo btn-nav-menu dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="expand" v-html="add"></span>
                <span class="close" v-html="closeThick"></span>
                <span class="navigate-label">Navigate</span>
            </button>
            <div class="dropdown-menu">
                <div class="menu-title">Australian Government response: Inquiry into Australian Waste Management and Recycling Industries</div>
                <ul class="parent-menu">
                    <li><a href="#" class="link-icon link-secondary title-default">Glossary<span v-html="linkArrowRight"></span></a></li>
                    <li><a href="#" class="link-icon link-secondary title-feature">Message from the Minister<span v-html="linkArrowRight"></span></a></li>
                    <li><a href="#" class="link-icon link-secondary title-feature">Review at a glance<span v-html="linkArrowRight"></span></a></li>
                    <li><a href="#" class="link-icon link-secondary title-feature">Background<span v-html="linkArrowRight"></span></a></li>
                    <li>
                        <a href="#" class="link-icon link-secondary title-feature" data-bs-toggle="collapse" data-bs-target="#review" aria-expanded="true" aria-controls="review">
                            About the 2021 review<span v-html="linkArrowRight"></span>
                        </a>
                        <div class="children-menu collapse show" id="review">
                            <ul>
                                <li><a href="#" class="sub-section">Sub section 1</a></li>
                                <li><a href="#" class="sub-section">Sub section 2</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#" class="link-icon link-secondary title-feature">Key themes emerging from the review<span v-html="linkArrowRight"></span></a></li>
                    <li><a href="#" class="link-icon link-secondary title-feature">Opportunities for action<span v-html="linkArrowRight"></span></a></li>
                    <li><a href="#" class="link-icon link-secondary title-feature">International approaches<span v-html="linkArrowRight"></span></a></li>
                    <li><a href="#" class="link-icon link-secondary title-feature">Appendix A: Documents referenced by the Premises Standards<span v-html="linkArrowRight"></span></a></li>
                    <li><a href="#" class="link-icon link-secondary title-feature">Appendix B: Second-phase consultations activities list<span v-html="linkArrowRight"></span></a></li>
                </ul>
            </div>
        </div>
    </div>
    <a href="#" class="stepper-pages">
        <div class="step-name">Previous</div>
        <div class="step-label">Premises Standards Review 2021</div>
    </a>
    <a href="#" class="stepper-pages">
        <div class="step-name">Next</div>
        <div class="step-label">About the 2021 review</div>
    </a>
</div>
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
Inline - The inline content stepper sits within the content

Sticky - As the name suggests it sticks to the bottom of the browser window above the content allowing it to be always available. This variation contains the flyout navigation to jump to another chapter.

### Behaviours
Selecting a label in the content stepper will open the corresponding content. Forward and back page functionality indicating the previous and next publications.

### Recommendations
Add content strategy guidelines and editorial rules here.

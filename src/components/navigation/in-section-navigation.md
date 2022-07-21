---
lang: en-US
title: In-section Navigation
description: Description of the page
pageHeader: true
---

### Overview
In this section navigation appears on standard pages and basic chaptered publications. It allows users to quickly scan the contents of a page and jump to relevant sections.

### Elements
<PreviewImage :image="$withBase('/images/in-this-section-menu.png')" :contents="[{ x: 18, y: 2.5, title: 'Section label', text: 'In-Section navigation section label' }, { x: 18, y: 18, title: 'Sub Section label', text: 'In-Section navigation sub section label' }, { x: 18, y: 45, title: 'Divider', text: 'In-Section navigation divider' }]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
  <div class="in-this-section-menu">
    <div class="container header-wrap">
        <a href="#" class="menu-header body-large-bold" data-bs-toggle="collapse" data-bs-target="#inThisSectionMenu" aria-expanded="true" aria-controls="inThisSectionMenu">
            <span class="flex-grow-1">Navigate in this section menu</span>
            <span v-html="chevronDown"></span>
        </a>
    </div>
    <div class="menu-body">
        <div class="container">
            <div id="inThisSectionMenu" class="collapse show">
                <ul class="parent-menu" id="inThisSectionContent">
                    <li>
                        <div class="menu-title collapsed" data-bs-toggle="collapse" data-bs-target="#inThisSectionMenuOne" aria-expanded="false" aria-controls="inThisSectionMenuOne">
                            <span class="expand" v-html="add"></span>
                            <span class="close" v-html="subtract"></span>
                            Navigate National Measurement Institute
                        </div>
                        <div class="collapse" id="inThisSectionMenuOne" data-bs-parent="#inThisSectionContent">
                            <ul class="child-menu">
                                <li>
                                    <div class="menu-title collapsed" data-bs-toggle="collapse" data-bs-target="#tradeMeasurement" aria-expanded="false" aria-controls="tradeMeasurement">
                                        <span class="expand" v-html="add"></span>
                                        <span class="close" v-html="subtract"></span>
                                        Trade Measurement
                                    </div>
                                    <div class="collapse" id="tradeMeasurement">
                                        <ul class="grandchild-menu">
                                            <li>
                                                <a href="#">Buying and selling goods</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>In this section level two title</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="menu-title collapsed" data-bs-toggle="collapse" data-bs-target="#inThisSectionMenuTwo" aria-expanded="false" aria-controls="inThisSectionMenuTwo">
                            <span class="expand" v-html="add"></span>
                            <span class="close" v-html="subtract"></span>
                            Find a public weighbridge
                        </div>
                        <div class="collapse" id="inThisSectionMenuTwo" data-bs-parent="#inThisSectionContent">
                            <ul class="child-menu">
                                <li>
                                    <a href="#">Trade Measurement</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="menu-title collapsed" data-bs-toggle="collapse" data-bs-target="#inThisSectionMenuThree" aria-expanded="false" aria-controls="inThisSectionMenuThree">
                            <span class="expand"></span>
                            In this section title
                        </div>
                        <div class="menu-title collapse" id="inThisSectionMenuThree" data-bs-parent="#inThisSectionContent">
                            <ul class="child-menu">
                                <li></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
In the chaptered publication page pattern, in this section navigation includes 2 to 5 levels. Everywhere else this navigation is used, it uses one level only.
In chaptered publications, the menu includes second-level links.

### Behaviours
The in this section menu will collapse and expand. This navigation interacts in the same way as the mega menu, though uses the plus and minus symbols to indicate expand and contract actions. When the chapter title is selected, the anchor links within the chapter appear.

### Recommendations
Add content strategy guidelines and editorial rules here.

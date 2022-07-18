---
lang: en-US
title: Industry.gov.au Design System
description: Our design system is made from interconnected patterns of repeating elements that combine to create a cohesive experience.  
pageHeader: true
---

# Getting Started

## How to use the site

## Conventions
Within the styleguide site all content that should be styled as on industry.gov.au should have a parent with the `.doi-content` class.  All the styles for this are in `/src/.vuepress/doi-content`.

Styles exclusive to the styleguide site itself are in `/src/.vuepress/styleguide`

## Bundled files
Are in the `/dist` directory

## How to include the styles and js dependencies
When integrating the styleguide include the `app.css` and `app.js` files from the /dist directory ensuring that you include the other js dependencies before `app.js`.

```html
<link rel="stylesheet" href="https://ausgov.github.io/iga-design-system/dist/app.css">

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/bootstrap-select.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/11.0.2/bootstrap-slider.min.js"></script>

<script src="https://ausgov.github.io/iga-design-system/dist/app.js"></script>
```

Download the files here.
* [app.css](https://ausgov.github.io/iga-design-system/dist/app.css)
* [app.js](https://ausgov.github.io/iga-design-system/dist/app.js)

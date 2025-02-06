# IGA Design System Style Guide

## Installation and build tools

Please use Node >= 16

`npm i` to install dependencies

`npm run dev` for the dev build which will run on localhost:8080 by default

`npm run build` to build the static version of the site for deployment to github pages (NOTE: the built files reside in the docs directory)

`npm run bundle` to bundle the styles and scripts together for deployment to the DOI website site.


### Bundling and integration

`npm run bundle` will create new app.js and app.css bundles in the /dist directory.  These can be integrated directly into a website and should provide all that is needed to integrate the design system.

## Deploy to github pages
Currently, you can do a production and bundle build and simply push this to github to create a new deployment of the pages.

If you want to setup a push to deploy scenario where the builds happen remotely you can find examples [here](https://v2.vuepress.vuejs.org/guide/deployment.html#github-pages).

# DOI Style Guide Site

## Installation and build tools

Please use Node >= 16

`npm i` to install dependencies

`npm run dev` for the dev build which will run on localhost:8080 by default

`npm run build` to build the static version of the site for deployment to github pages (NOTE: the built files reside in the docs directory)

`npm run bundle` to bundle the styles and scripts together for deployment to the DOI website site.

## General Intro and Site Structure

## Vuepress, Figma and Bootstrap Links

* [Finalised Designs](https://www.figma.com/file/QJl1NyuLPtW2HIMgWyjWTv/Dept.-of-Industry---Design-System?node-id=4944%3A50112)
* [Styleguide Website Design](https://www.figma.com/file/QJl1NyuLPtW2HIMgWyjWTv/Dept.-of-Industry---Design-System?node-id=1332%3A6545)

## HTML Templates
Can be found on the Page Patterns link in the main header

## Styles and Scripts

### Within the context of the Styleguide Site
1. All styles that relate to the **design system** are placed under the /src/.vuepress/styles/bootstrap directory.  
2. All styles that are only for the **styleguide website** are placed under the /src/.vuepress/styles/styleguide directory 

### Bundling and integration

`npm run bundle` will create new app.js and app.css bundles in the /dist directory.  These can be integrated directly into a website and should provide all that is needed to integrate the design system.

## Deploy to github pages
Currently, you can do a production and bundle build and simply push this to github to create a new deployment of the pages.

If you want to setup a push to deploy scenario where the builds happen remotely you can find examples [here](https://v2.vuepress.vuejs.org/guide/deployment.html#github-pages).

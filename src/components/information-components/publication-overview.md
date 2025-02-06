---
lang: en-US
title: Publication Overview
description: Description of the page
pageHeader: true
---

### Overview
The publication overview contains key reference information and actions. It is persistent on featured one-page and chaptered publications.

### Elements
<PreviewImage :image="$withBase('/images/publication-overview-sample.png')" :contents="[{ x: 0, y: 7, title: 'Tag', text: 'Tag' }, { x: 0, y: 18, title: 'Entity label', text: 'Entity label' }, { x: 0, y: 32, title: 'Subscribe overview', text: 'Subscribe overview' }, { x: 0, y: 57, title: 'Subscribe button', text: 'Subscribe button' }, { x: 0, y: 64, title: 'Share icon', text: 'Share icon' }, { x: 7, y: 64, title: 'Download icon', text: 'Download icon' }, { x: 0, y: 70, title: 'Divider', text: 'Divider' }, { x: 48, y: 70, title: 'Download list', text: 'Download list' }]">
<template #code>
<CodeGroup>
<CodeGroupItem title="HTML">

```html
<div class="publication">
  <div class="publication-container"><span class="publication-title">Topics</span>
    <div class="button-container heading-extra-small">
      <button class="topic-button"><span>Mining oil and gas</span></button>
      <button class="topic-button"><span>Critical Minerals</span></button>
    </div>
  </div>
  <div class="publication-container"><span class="publisher-title">Publisher</span>
    <span class="publisher-subtitle">Department of Industry, Science, Energy and Resources</span></div>
  <div class="publication-container"><span class="publication-title">Subscribe for updates</span>
    <span class="publisher-subtitle">Modern Manufacturing Strategy Updates</span>
    <span class="publisher-content">Subscribing to updates ensures you'll receive the latest on funding and programs, and news and announcements. We recommend you subscribe to keep up to date on all Modern Manufacturing Strategy matters. </span>
    <button class="btn btn-primary caption-large"><span>Subscribe</span></button>
  </div>
  <div class="publication-container icon-container">
    <span class="icon-container"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 5.75C14 3.67893 15.6789 2 17.75 2C19.8211 2 21.5 3.67893 21.5 5.75C21.5 7.82107 19.8211 9.5 17.75 9.5C16.5388 9.5 15.4617 8.92579 14.7761 8.03475L9.38211 10.8135C9.45907 11.1128 9.5 11.4266 9.5 11.75C9.5 12.0734 9.45907 12.3872 9.38211 12.6865L14.7761 15.4653C15.4617 14.5742 16.5388 14 17.75 14C19.8211 14 21.5 15.6789 21.5 17.75C21.5 19.8211 19.8211 21.5 17.75 21.5C15.6789 21.5 14 19.8211 14 17.75C14 17.4266 14.0409 17.1128 14.1179 16.8135L8.72386 14.0347C8.03827 14.9258 6.96119 15.5 5.75 15.5C3.67893 15.5 2 13.8211 2 11.75C2 9.67893 3.67893 8 5.75 8C6.96119 8 8.03827 8.57421 8.72386 9.46525L14.1179 6.68651C14.0409 6.38716 14 6.07336 14 5.75ZM7.80565 12.6661C7.79784 12.6793 7.79037 12.6928 7.78327 12.7065C7.76994 12.7324 7.75826 12.7587 7.74819 12.7853C7.37352 13.507 6.61933 14 5.75 14C4.50736 14 3.5 12.9926 3.5 11.75C3.5 10.5074 4.50736 9.5 5.75 9.5C6.61933 9.5 7.37352 9.99302 7.74819 10.7147C7.75826 10.7413 7.76994 10.7676 7.78327 10.7935C7.79037 10.8073 7.79784 10.8207 7.80566 10.8339C7.93056 11.1137 8 11.4238 8 11.75C8 12.0763 7.93056 12.3863 7.80565 12.6661ZM15.6944 16.8339C15.5694 17.1137 15.5 17.4237 15.5 17.75C15.5 18.9926 16.5074 20 17.75 20C18.9926 20 20 18.9926 20 17.75C20 16.5074 18.9926 15.5 17.75 15.5C16.8807 15.5 16.1265 15.993 15.7518 16.7147C15.7417 16.7413 15.7301 16.7676 15.7167 16.7935C15.7096 16.8072 15.7022 16.8207 15.6944 16.8339ZM17.75 8C16.8807 8 16.1265 7.50697 15.7518 6.78528C15.7417 6.7587 15.7301 6.73241 15.7167 6.70653C15.7096 6.69275 15.7022 6.67927 15.6943 6.66612C15.5694 6.38628 15.5 6.07625 15.5 5.75C15.5 4.50736 16.5074 3.5 17.75 3.5C18.9926 3.5 20 4.50736 20 5.75C20 6.99264 18.9926 8 17.75 8Z" fill="#3F3B3B"></path></svg></span>
    <span class="icon-container"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C12.3797 3.25 12.6935 3.53215 12.7432 3.89823L12.75 4V14.2757L16.664 10.2366C16.9418 9.94982 17.3766 9.92375 17.683 10.1584L17.7708 10.2366C18.0486 10.5233 18.0739 10.972 17.8466 11.2882L17.7708 11.3788L12.5534 16.7634C12.2755 17.0502 11.8408 17.0762 11.5344 16.8416L11.4466 16.7634L6.22922 11.3788C5.92359 11.0634 5.92359 10.552 6.22922 10.2366C6.50706 9.94982 6.94184 9.92375 7.24822 10.1584L7.336 10.2366L11.25 14.2757V4C11.25 3.58579 11.5858 3.25 12 3.25ZM20.7432 16.8982C20.6935 16.5322 20.3797 16.25 20 16.25C19.5858 16.25 19.25 16.5858 19.25 17V19L19.2435 19.1278C19.1795 19.7581 18.6472 20.25 18 20.25H6L5.87219 20.2435C5.24187 20.1795 4.75 19.6472 4.75 19V17L4.74315 16.8982C4.69349 16.5322 4.3797 16.25 4 16.25C3.58579 16.25 3.25 16.5858 3.25 17V19L3.25502 19.1675C3.3416 20.6083 4.53747 21.75 6 21.75H18L18.1675 21.745C19.6083 21.6584 20.75 20.4625 20.75 19V17L20.7432 16.8982Z" fill="#3F3B3B"></path></svg></span>
  </div>
  <div class="publication-container heading-extra-small">
    <div class="pdf-container">
      <div class="pdf-title">Australia’s Long-Term Emission Reduction plan
        <span class="description-container">PDF 17.5MB</span>
      </div>
      <span class="icon-container"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C12.3797 3.25 12.6935 3.53215 12.7432 3.89823L12.75 4V14.2757L16.664 10.2366C16.9418 9.94982 17.3766 9.92375 17.683 10.1584L17.7708 10.2366C18.0486 10.5233 18.0739 10.972 17.8466 11.2882L17.7708 11.3788L12.5534 16.7634C12.2755 17.0502 11.8408 17.0762 11.5344 16.8416L11.4466 16.7634L6.22922 11.3788C5.92359 11.0634 5.92359 10.552 6.22922 10.2366C6.50706 9.94982 6.94184 9.92375 7.24822 10.1584L7.336 10.2366L11.25 14.2757V4C11.25 3.58579 11.5858 3.25 12 3.25ZM20.7432 16.8982C20.6935 16.5322 20.3797 16.25 20 16.25C19.5858 16.25 19.25 16.5858 19.25 17V19L19.2435 19.1278C19.1795 19.7581 18.6472 20.25 18 20.25H6L5.87219 20.2435C5.24187 20.1795 4.75 19.6472 4.75 19V17L4.74315 16.8982C4.69349 16.5322 4.3797 16.25 4 16.25C3.58579 16.25 3.25 16.5858 3.25 17V19L3.25502 19.1675C3.3416 20.6083 4.53747 21.75 6 21.75H18L18.1675 21.745C19.6083 21.6584 20.75 20.4625 20.75 19V17L20.7432 16.8982Z" fill="#3F3B3B"></path></svg></span>
    </div>
    <div class="pdf-container">
      <div class="pdf-title">Australia’s Long-Term Emission Reduction plan
        <span class="description-container">PDF 17.5MB</span>
      </div>
      <span class="icon-container"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C12.3797 3.25 12.6935 3.53215 12.7432 3.89823L12.75 4V14.2757L16.664 10.2366C16.9418 9.94982 17.3766 9.92375 17.683 10.1584L17.7708 10.2366C18.0486 10.5233 18.0739 10.972 17.8466 11.2882L17.7708 11.3788L12.5534 16.7634C12.2755 17.0502 11.8408 17.0762 11.5344 16.8416L11.4466 16.7634L6.22922 11.3788C5.92359 11.0634 5.92359 10.552 6.22922 10.2366C6.50706 9.94982 6.94184 9.92375 7.24822 10.1584L7.336 10.2366L11.25 14.2757V4C11.25 3.58579 11.5858 3.25 12 3.25ZM20.7432 16.8982C20.6935 16.5322 20.3797 16.25 20 16.25C19.5858 16.25 19.25 16.5858 19.25 17V19L19.2435 19.1278C19.1795 19.7581 18.6472 20.25 18 20.25H6L5.87219 20.2435C5.24187 20.1795 4.75 19.6472 4.75 19V17L4.74315 16.8982C4.69349 16.5322 4.3797 16.25 4 16.25C3.58579 16.25 3.25 16.5858 3.25 17V19L3.25502 19.1675C3.3416 20.6083 4.53747 21.75 6 21.75H18L18.1675 21.745C19.6083 21.6584 20.75 20.4625 20.75 19V17L20.7432 16.8982Z" fill="#3F3B3B"></path></svg></span>
    </div>
    <div class="pdf-container">
      <div class="pdf-title">Australia’s Long-Term Emission Reduction plan
        <span class="description-container">PDF 17.5MB</span>
      </div>
      <span class="icon-container"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C12.3797 3.25 12.6935 3.53215 12.7432 3.89823L12.75 4V14.2757L16.664 10.2366C16.9418 9.94982 17.3766 9.92375 17.683 10.1584L17.7708 10.2366C18.0486 10.5233 18.0739 10.972 17.8466 11.2882L17.7708 11.3788L12.5534 16.7634C12.2755 17.0502 11.8408 17.0762 11.5344 16.8416L11.4466 16.7634L6.22922 11.3788C5.92359 11.0634 5.92359 10.552 6.22922 10.2366C6.50706 9.94982 6.94184 9.92375 7.24822 10.1584L7.336 10.2366L11.25 14.2757V4C11.25 3.58579 11.5858 3.25 12 3.25ZM20.7432 16.8982C20.6935 16.5322 20.3797 16.25 20 16.25C19.5858 16.25 19.25 16.5858 19.25 17V19L19.2435 19.1278C19.1795 19.7581 18.6472 20.25 18 20.25H6L5.87219 20.2435C5.24187 20.1795 4.75 19.6472 4.75 19V17L4.74315 16.8982C4.69349 16.5322 4.3797 16.25 4 16.25C3.58579 16.25 3.25 16.5858 3.25 17V19L3.25502 19.1675C3.3416 20.6083 4.53747 21.75 6 21.75H18L18.1675 21.745C19.6083 21.6584 20.75 20.4625 20.75 19V17L20.7432 16.8982Z" fill="#3F3B3B"></path></svg></span>
    </div>
    <div class="pdf-container">
      <div class="pdf-title">Australia’s Long-Term Emission Reduction plan
        <span class="description-container">PDF 17.5MB</span>
      </div>
      <span class="icon-container"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C12.3797 3.25 12.6935 3.53215 12.7432 3.89823L12.75 4V14.2757L16.664 10.2366C16.9418 9.94982 17.3766 9.92375 17.683 10.1584L17.7708 10.2366C18.0486 10.5233 18.0739 10.972 17.8466 11.2882L17.7708 11.3788L12.5534 16.7634C12.2755 17.0502 11.8408 17.0762 11.5344 16.8416L11.4466 16.7634L6.22922 11.3788C5.92359 11.0634 5.92359 10.552 6.22922 10.2366C6.50706 9.94982 6.94184 9.92375 7.24822 10.1584L7.336 10.2366L11.25 14.2757V4C11.25 3.58579 11.5858 3.25 12 3.25ZM20.7432 16.8982C20.6935 16.5322 20.3797 16.25 20 16.25C19.5858 16.25 19.25 16.5858 19.25 17V19L19.2435 19.1278C19.1795 19.7581 18.6472 20.25 18 20.25H6L5.87219 20.2435C5.24187 20.1795 4.75 19.6472 4.75 19V17L4.74315 16.8982C4.69349 16.5322 4.3797 16.25 4 16.25C3.58579 16.25 3.25 16.5858 3.25 17V19L3.25502 19.1675C3.3416 20.6083 4.53747 21.75 6 21.75H18L18.1675 21.745C19.6083 21.6584 20.75 20.4625 20.75 19V17L20.7432 16.8982Z" fill="#3F3B3B"></path></svg></span>
    </div>
  </div>
</div>
```

</CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
None.

### Behaviours
The share icon copies the link for the publication. The download icon opens a push down that includes the chapter file links. Each chapter is a downloadable file in the popup.





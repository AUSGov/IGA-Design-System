---
lang: en-US
title: Range Slider
description: Description of the page
pageHeader: true
---

### Overview
The range slider allows users to filter content between a time range. It’s used within the filter group on the filtered landing homepage and search landing page.

### Elements
<PreviewImage :image="$withBase('/images/filter-range-slider-sample.png')" :contents="[{ x: 0, y: 55, title: 'Base slider', text: 'Base slider' }, { x: 0, y: 80, title: 'Date selection', text: 'Date selection' }, { x: 2, y: 90, title: 'Circular indicator', text: 'Circular indicator' }, { x: 12, y: 70, title: 'Tooltip', text: 'Tooltip' }]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
<div class="show-filters mb-5">
  <div class="buttons-container heading-small">
    <span class="icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 1.5C10.0596 1.5 9.5 2.05964 9.5 2.75C9.5 3.44036 10.0596 4 10.75 4C11.4404 4 12 3.44036 12 2.75C12 2.05964 11.4404 1.5 10.75 1.5ZM13.3965 2C13.07 0.845748 12.0088 0 10.75 0C9.49122 0 8.42998 0.845748 8.10352 2H0.75C0.335786 2 0 2.33579 0 2.75C0 3.16421 0.335786 3.5 0.75 3.5H8.10352C8.42998 4.65425 9.49122 5.5 10.75 5.5C12.0088 5.5 13.07 4.65425 13.3965 3.5H16.75C17.1642 3.5 17.5 3.16421 17.5 2.75C17.5 2.33579 17.1642 2 16.75 2H13.3965ZM4.75 7.5C4.05964 7.5 3.5 8.05964 3.5 8.75C3.5 9.44036 4.05964 10 4.75 10C5.44036 10 6 9.44036 6 8.75C6 8.05964 5.44036 7.5 4.75 7.5ZM4.75 6C6.00878 6 7.07002 6.84575 7.39648 8H16.75C17.1642 8 17.5 8.33579 17.5 8.75C17.5 9.16421 17.1642 9.5 16.75 9.5H7.39648C7.07002 10.6543 6.00878 11.5 4.75 11.5C3.49122 11.5 2.42998 10.6543 2.10352 9.5H0.75C0.335786 9.5 0 9.16421 0 8.75C0 8.33579 0.335786 8 0.75 8H2.10352C2.42998 6.84575 3.49122 6 4.75 6ZM12.5 14.75C12.5 14.0596 13.0596 13.5 13.75 13.5C14.4404 13.5 15 14.0596 15 14.75C15 15.4404 14.4404 16 13.75 16C13.0596 16 12.5 15.4404 12.5 14.75ZM16.3965 14C16.07 12.8457 15.0088 12 13.75 12C12.4912 12 11.43 12.8457 11.1035 14H0.75C0.335786 14 0 14.3358 0 14.75C0 15.1642 0.335786 15.5 0.75 15.5H11.1035C11.43 16.6543 12.4912 17.5 13.75 17.5C15.0088 17.5 16.07 16.6543 16.3965 15.5H16.75C17.1642 15.5 17.5 15.1642 17.5 14.75C17.5 14.3358 17.1642 14 16.75 14H16.3965Z" fill="#3F3B3B"></path></svg></span>
    <button type="button" class="button-plain" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <span class="main-button-text">Show Filters</span>
      <span class="icon chevron-right"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.51721 4.26035C9.17008 3.91322 8.60727 3.91322 8.26013 4.26035C7.94456 4.57592 7.91587 5.06975 8.17407 5.41773L8.26013 5.51743L14.7423 12L8.26013 18.4826C7.94456 18.7981 7.91587 19.292 8.17407 19.64L8.26013 19.7397C8.57571 20.0552 9.06953 20.0839 9.41752 19.8257L9.51721 19.7397L16.6283 12.6285C16.9439 12.313 16.9726 11.8191 16.7144 11.4712L16.6283 11.3715L9.51721 4.26035Z" fill="#3F3B3B"></path></svg></span>
      <span class="icon chevron-down"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.26035 9.62854C3.91322 9.28141 3.91322 8.71859 4.26035 8.37146C4.57592 8.05589 5.06975 8.0272 5.41773 8.28539L5.51743 8.37146L12 14.8536L18.4826 8.37146C18.7981 8.05589 19.292 8.0272 19.64 8.28539L19.7397 8.37146C20.0552 8.68704 20.0839 9.18086 19.8257 9.52884L19.7397 9.62854L12.6285 16.7397C12.313 17.0552 11.8191 17.0839 11.4712 16.8257L11.3715 16.7397L4.26035 9.62854Z" fill="#3F3B3B"></path></svg></span>
    </button>
  </div>
  <div id="collapseOne" class="main-accordion accordion-collapse collapse show">
    <div class="filters-accordion">
      <div class="filters-accordion-container">
        <div class="buttons-container heading-small">
          <button type="button" class="button-plain collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTopic" aria-expanded="true" aria-controls="collapseToggle">
            <span class="circle-add"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 20.625C16.3157 20.625 20.625 16.3157 20.625 11C20.625 5.68426 16.3157 1.375 11 1.375C5.68426 1.375 1.375 5.68426 1.375 11C1.375 16.3157 5.68426 20.625 11 20.625ZM11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11.0002 3.3C11.3594 3.3 11.6564 3.56698 11.7034 3.91338L11.7098 4.00968V10.2903H17.6236C18.0155 10.2903 18.3332 10.6081 18.3332 11C18.3332 11.3593 18.0663 11.6562 17.7199 11.7032L17.6236 11.7097H11.7098V17.257C11.7098 17.6489 11.3921 17.9667 11.0002 17.9667C10.6409 17.9667 10.3439 17.6997 10.297 17.3533L10.2905 17.257V11.7097H4.37625C3.98431 11.7097 3.66658 11.392 3.66658 11C3.66658 10.6407 3.93356 10.3438 4.27996 10.2968L4.37625 10.2903H10.2905V4.00968C10.2905 3.61773 10.6082 3.3 11.0002 3.3Z" fill="#3F3B3B"></path></svg></span>
            <span class="circle-cross"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 20.625C16.3157 20.625 20.625 16.3157 20.625 11C20.625 5.68426 16.3157 1.375 11 1.375C5.68426 1.375 1.375 5.68426 1.375 11C1.375 16.3157 5.68426 20.625 11 20.625ZM11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM5.81432 5.81453C6.06837 5.56048 6.46711 5.53931 6.74528 5.75101L6.81795 5.81453L10.9998 9.99636L15.1816 5.81457C15.4587 5.53743 15.9081 5.53743 16.1852 5.81457C16.4393 6.06862 16.4604 6.46737 16.2487 6.74553L16.1852 6.81821L12.0034 11L16.1852 15.1818C16.4624 15.4589 16.4624 15.9083 16.1852 16.1854C15.9312 16.4395 15.5324 16.4606 15.2543 16.2489L15.1816 16.1854L10.9998 12.0036L6.81795 16.1855C6.54081 16.4626 6.09146 16.4626 5.81432 16.1855C5.56027 15.9314 5.5391 15.5327 5.7508 15.2545L5.81432 15.1818L9.99615 11L5.81432 6.81816C5.53717 6.54102 5.53717 6.09167 5.81432 5.81453Z" fill="#3F3B3B"></path></svg></span>
            <span class="main-button-text">Topic</span>
          </button>
        </div>
        <div id="collapseTopic" class="accordion-collapse collapse accordion-content">
          <div class="content-container">
            <div class="dropdown bootstrap-select"><select title="Choose a Topic" class="">
              <option class="bs-title-option" value=""></option>
              <option value="1">Australian Industry Participation Authority</option>
              <option value="2">Anti-Dumping Commission</option>
              <option value="3">AusIndustry</option>
              <option value="4">Australian Industry Participation Authority...</option>
              <option value="5">Australian Radioactive Waste Authority</option>
            </select>
              <button type="button" tabindex="-1" class="btn dropdown-toggle bs-placeholder" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Choose a Topic">
                <div class="filter-option">
                  <div class="filter-option-inner">
                    <div class="filter-option-inner-inner">Choose a Topic</div>
                  </div>
                </div>
              </button>
              <div class="dropdown-menu ">
                <div class="inner show" role="listbox" id="bs-select-1" tabindex="-1">
                  <ul class="dropdown-menu inner show" role="presentation"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="filters-accordion">
      <div class="filters-accordion-container">
        <div class="buttons-container heading-small">
          <button type="button" class="button-plain collapsed" data-bs-toggle="collapse" data-bs-target="#collapseEntity" aria-expanded="true" aria-controls="collapseToggle">
            <span class="circle-add"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 20.625C16.3157 20.625 20.625 16.3157 20.625 11C20.625 5.68426 16.3157 1.375 11 1.375C5.68426 1.375 1.375 5.68426 1.375 11C1.375 16.3157 5.68426 20.625 11 20.625ZM11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11.0002 3.3C11.3594 3.3 11.6564 3.56698 11.7034 3.91338L11.7098 4.00968V10.2903H17.6236C18.0155 10.2903 18.3332 10.6081 18.3332 11C18.3332 11.3593 18.0663 11.6562 17.7199 11.7032L17.6236 11.7097H11.7098V17.257C11.7098 17.6489 11.3921 17.9667 11.0002 17.9667C10.6409 17.9667 10.3439 17.6997 10.297 17.3533L10.2905 17.257V11.7097H4.37625C3.98431 11.7097 3.66658 11.392 3.66658 11C3.66658 10.6407 3.93356 10.3438 4.27996 10.2968L4.37625 10.2903H10.2905V4.00968C10.2905 3.61773 10.6082 3.3 11.0002 3.3Z" fill="#3F3B3B"></path></svg></span>
            <span class="circle-cross"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 20.625C16.3157 20.625 20.625 16.3157 20.625 11C20.625 5.68426 16.3157 1.375 11 1.375C5.68426 1.375 1.375 5.68426 1.375 11C1.375 16.3157 5.68426 20.625 11 20.625ZM11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM5.81432 5.81453C6.06837 5.56048 6.46711 5.53931 6.74528 5.75101L6.81795 5.81453L10.9998 9.99636L15.1816 5.81457C15.4587 5.53743 15.9081 5.53743 16.1852 5.81457C16.4393 6.06862 16.4604 6.46737 16.2487 6.74553L16.1852 6.81821L12.0034 11L16.1852 15.1818C16.4624 15.4589 16.4624 15.9083 16.1852 16.1854C15.9312 16.4395 15.5324 16.4606 15.2543 16.2489L15.1816 16.1854L10.9998 12.0036L6.81795 16.1855C6.54081 16.4626 6.09146 16.4626 5.81432 16.1855C5.56027 15.9314 5.5391 15.5327 5.7508 15.2545L5.81432 15.1818L9.99615 11L5.81432 6.81816C5.53717 6.54102 5.53717 6.09167 5.81432 5.81453Z" fill="#3F3B3B"></path></svg></span> 
            <span class="main-button-text">Entity</span>
          </button>
        </div>
        <div id="collapseEntity" class="accordion-collapse collapse accordion-content">
          <div class="content-container">
            <div class="form-check">
              <div class="pb-1">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckFirst">
                <label class="form-check-label" for="flexCheckFirst">Australian Industry Participation Authority</label>
              </div>
              <div class="pb-1">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckSecond">
                <label class="form-check-label" for="flexCheckSecond">Anti-Dumping Commission</label>
              </div>
              <div class="pb-1">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckThird">
                <label class="form-check-label" for="flexCheckThird">AusIndustry</label>
              </div>
              <div class="pb-1">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckFourth">
                <label class="form-check-label" for="flexCheckFourth">Australian Radioactive Waste Authority</label>
              </div>
              <div class="pb-1">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckFifth">
                <label class="form-check-label" for="flexCheckFifth">Australian SKA Office</label>
              </div>
              <div class="pb-1">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckSixth">
                <label class="form-check-label" for="flexCheckSixth">Australian Space Agency</label>
              </div>
              <div class="pb-1">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckSeventh">
                <label class="form-check-label" for="flexCheckSeventh">Critical Minerals Facilitation Office</label>
              </div>
              <div class="pb-1">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckEight">
                <label class="form-check-label" for="flexCheckEight">National Mesurement Institute</label>
              </div>
              <div class="pb-1">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckNinth">
                <label class="form-check-label" for="flexCheckNinth">Office of the Chief Economist</label>
              </div>
              <div class="pb-1">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckTenth">
                <label class="form-check-label" for="flexCheckTenth">Office of the Special Adviser to the Australian Government on Low Emissions Technology</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="filters-accordion">
      <div class="filters-accordion-container">
        <div class="buttons-container heading-small">
          <button type="button" class="button-plain collapsed" data-bs-toggle="collapse" data-bs-target="#collapseCategory" aria-expanded="true" aria-controls="collapseToggle">
            <span class="circle-add"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 20.625C16.3157 20.625 20.625 16.3157 20.625 11C20.625 5.68426 16.3157 1.375 11 1.375C5.68426 1.375 1.375 5.68426 1.375 11C1.375 16.3157 5.68426 20.625 11 20.625ZM11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11.0002 3.3C11.3594 3.3 11.6564 3.56698 11.7034 3.91338L11.7098 4.00968V10.2903H17.6236C18.0155 10.2903 18.3332 10.6081 18.3332 11C18.3332 11.3593 18.0663 11.6562 17.7199 11.7032L17.6236 11.7097H11.7098V17.257C11.7098 17.6489 11.3921 17.9667 11.0002 17.9667C10.6409 17.9667 10.3439 17.6997 10.297 17.3533L10.2905 17.257V11.7097H4.37625C3.98431 11.7097 3.66658 11.392 3.66658 11C3.66658 10.6407 3.93356 10.3438 4.27996 10.2968L4.37625 10.2903H10.2905V4.00968C10.2905 3.61773 10.6082 3.3 11.0002 3.3Z" fill="#3F3B3B"></path></svg></span>
            <span class="circle-cross"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 20.625C16.3157 20.625 20.625 16.3157 20.625 11C20.625 5.68426 16.3157 1.375 11 1.375C5.68426 1.375 1.375 5.68426 1.375 11C1.375 16.3157 5.68426 20.625 11 20.625ZM11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM5.81432 5.81453C6.06837 5.56048 6.46711 5.53931 6.74528 5.75101L6.81795 5.81453L10.9998 9.99636L15.1816 5.81457C15.4587 5.53743 15.9081 5.53743 16.1852 5.81457C16.4393 6.06862 16.4604 6.46737 16.2487 6.74553L16.1852 6.81821L12.0034 11L16.1852 15.1818C16.4624 15.4589 16.4624 15.9083 16.1852 16.1854C15.9312 16.4395 15.5324 16.4606 15.2543 16.2489L15.1816 16.1854L10.9998 12.0036L6.81795 16.1855C6.54081 16.4626 6.09146 16.4626 5.81432 16.1855C5.56027 15.9314 5.5391 15.5327 5.7508 15.2545L5.81432 15.1818L9.99615 11L5.81432 6.81816C5.53717 6.54102 5.53717 6.09167 5.81432 5.81453Z" fill="#3F3B3B"></path></svg></span>
            <span class="main-button-text">Category</span>
          </button>
        </div>
        <div id="collapseCategory" class="accordion-collapse collapse accordion-content">
          <div class="content-container">
            <select title="All Categories">
              <option value="1">Australian Industry Participation Authority</option>
              <option value="2">Anti-Dumping Commission</option>
              <option value="3">AusIndustry</option>
              <option value="3">Australian Industry Participation Authority...</option>
              <option value="3">Australian Radioactive Waste Authority</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="filters-accordion">
      <div class="filters-accordion-container">
        <div class="buttons-container heading-small">
          <button type="button" class="button-plain collapsed" data-bs-toggle="collapse" data-bs-target="#collapseYear" aria-expanded="true" aria-controls="collapseToggle">
            <span class="circle-add"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 20.625C16.3157 20.625 20.625 16.3157 20.625 11C20.625 5.68426 16.3157 1.375 11 1.375C5.68426 1.375 1.375 5.68426 1.375 11C1.375 16.3157 5.68426 20.625 11 20.625ZM11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11.0002 3.3C11.3594 3.3 11.6564 3.56698 11.7034 3.91338L11.7098 4.00968V10.2903H17.6236C18.0155 10.2903 18.3332 10.6081 18.3332 11C18.3332 11.3593 18.0663 11.6562 17.7199 11.7032L17.6236 11.7097H11.7098V17.257C11.7098 17.6489 11.3921 17.9667 11.0002 17.9667C10.6409 17.9667 10.3439 17.6997 10.297 17.3533L10.2905 17.257V11.7097H4.37625C3.98431 11.7097 3.66658 11.392 3.66658 11C3.66658 10.6407 3.93356 10.3438 4.27996 10.2968L4.37625 10.2903H10.2905V4.00968C10.2905 3.61773 10.6082 3.3 11.0002 3.3Z" fill="#3F3B3B"></path></svg></span>
            <span class="circle-cross"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 20.625C16.3157 20.625 20.625 16.3157 20.625 11C20.625 5.68426 16.3157 1.375 11 1.375C5.68426 1.375 1.375 5.68426 1.375 11C1.375 16.3157 5.68426 20.625 11 20.625ZM11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM5.81432 5.81453C6.06837 5.56048 6.46711 5.53931 6.74528 5.75101L6.81795 5.81453L10.9998 9.99636L15.1816 5.81457C15.4587 5.53743 15.9081 5.53743 16.1852 5.81457C16.4393 6.06862 16.4604 6.46737 16.2487 6.74553L16.1852 6.81821L12.0034 11L16.1852 15.1818C16.4624 15.4589 16.4624 15.9083 16.1852 16.1854C15.9312 16.4395 15.5324 16.4606 15.2543 16.2489L15.1816 16.1854L10.9998 12.0036L6.81795 16.1855C6.54081 16.4626 6.09146 16.4626 5.81432 16.1855C5.56027 15.9314 5.5391 15.5327 5.7508 15.2545L5.81432 15.1818L9.99615 11L5.81432 6.81816C5.53717 6.54102 5.53717 6.09167 5.81432 5.81453Z" fill="#3F3B3B"></path></svg></span>
            <span class="main-button-text">Year</span></button>
        </div>
        <div id="collapseYear" class="accordion-collapse collapse accordion-content">
          <div class="content-container">
            <div class="slider-container">
              <input id="ex2" type="text" class="span2" value="" data-slider-min="2016" data-slider-max="2022" data-slider-step="1" data-slider-value="[2016,2022]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

  </CodeGroupItem>
  <CodeGroupItem title="JS">

```js
    $('select').selectpicker()
    $('button').removeClass('btn-light')
    $('#ex2').slider({
      tooltip_split: 'always'
    })
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variants
None.

### Behaviours
The user can select and drag either end of the slider to shorten or widen the time range for filter results. As the user drags the ends of the slider, the time range corresponds to the point in the date range.

The tooltip dynamically displays the low value on the left and high value on the right.

### Recommendations
Add content strategy guidelines and editorial rules here.


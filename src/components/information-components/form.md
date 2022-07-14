---
lang: en-US
title: Form
description: Description of the page
pageHeader: true
---

### Overview
Forms allow users to configure options and submit information, such as feedback or personal details in order to subscribe to a newsletter.


### Elements
<PreviewImage :image="$withBase('/images/form-elements-sample.png')" :contents="[{ title: 'Title (heading levels / optional)', text: 'Title (heading levels / optional)' }, { title: 'Title (optional)', text: 'Title (optional)' }, { x: 0, y: 0, title: 'Field label', text: 'Field label' }, { title: 'Help text (optional)', text: 'Help text (optional)' }, { x: 0, y: 12, title: 'Placeholder text (optional)', text: 'Placeholder text (optional)' }, { x: 0, y: 30, title: 'Text field (optional)', text: 'Text field (optional)' }, { x: 34, y: 0, title: 'Dropdown (optional)', text: 'Dropdown (optional)' }, { x: 74, y: 15, title: 'Checkbox (optional)', text: 'Checkbox (optional)' }, { x: 74, y: -2, title: 'Radio button (optional)', text: 'Radio button (optional)' }, { x: 34, y: 20, title: 'Error state (optional)', text: 'Error state (optional)' }, { x: 34, y: 33, title: 'Disabled state (optional)', text: 'Disabled state (optional)' }, { title: 'Legal disclaimer (optional)', text: 'Legal disclaimer (optional)' }, { title: 'Primary button (optional)', text: 'Primary button (optional)' }, { title: 'Text button (optional)', text: 'Text button (optional)' }]">
<template #code>
<CodeGroup>
<CodeGroupItem title="HTML">

```html
<form class="form">
  <div class="form-inputs">
    <div class="inputs-container">
      <div class="input-container">
        <input type="text" id="component-input" class="form-control form-input" placeholder="Placeholder">
        <div class="error-container">
          <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.87105 1.31586C8.38961 0.450175 7.61059 0.451233 7.12974 1.31586L0.204546 13.7681C-0.276894 14.6338 0.120689 15.3337 1.09126 15.3337H14.9095C15.8771 15.3337 16.2771 14.6327 15.7962 13.7681L8.87105 1.31586ZM8 10.667C7.55092 10.667 7.17605 10.3244 7.13577 9.87708L6.78623 5.99495C6.72201 5.28164 7.2838 4.66699 8 4.66699C8.7162 4.66699 9.27799 5.28164 9.21377 5.99495L8.86423 9.87708C8.82395 10.3244 8.44908 10.667 8 10.667ZM6.66667 12.667C6.66667 13.4049 7.25641 14.0003 8 14.0003C8.74359 14.0003 9.33333 13.4049 9.33333 12.667C9.33333 11.9291 8.74359 11.3337 8 11.3337C7.25641 11.3337 6.66667 11.9291 6.66667 12.667Z" fill="#DC3545"/></svg></span><span>How dare you!</span>
        </div>
      </div>
      <div class="input-container">
        <select id="component-select" title="Placeholder">
          <option value="1">Australian Industry Participation Authority</option>
          <option value="2">Anti-Dumping Commission</option>
          <option value="3">AusIndustry</option>
          <option value="3">Australian Industry Participation Authority...</option>
          <option value="3">Australian Radioactive Waste Authority</option>
        </select>
        <div class="error-container">
          <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.87105 1.31586C8.38961 0.450175 7.61059 0.451233 7.12974 1.31586L0.204546 13.7681C-0.276894 14.6338 0.120689 15.3337 1.09126 15.3337H14.9095C15.8771 15.3337 16.2771 14.6327 15.7962 13.7681L8.87105 1.31586ZM8 10.667C7.55092 10.667 7.17605 10.3244 7.13577 9.87708L6.78623 5.99495C6.72201 5.28164 7.2838 4.66699 8 4.66699C8.7162 4.66699 9.27799 5.28164 9.21377 5.99495L8.86423 9.87708C8.82395 10.3244 8.44908 10.667 8 10.667ZM6.66667 12.667C6.66667 13.4049 7.25641 14.0003 8 14.0003C8.74359 14.0003 9.33333 13.4049 9.33333 12.667C9.33333 11.9291 8.74359 11.3337 8 11.3337C7.25641 11.3337 6.66667 11.9291 6.66667 12.667Z" fill="#DC3545"/></svg></span><span>How dare you!</span>
        </div>
      </div>
      <div class="check-container">
        <input class="form-check-input" type="radio" value="" aria-label="Radio button for following text input">
        <label class="form-check-label" for="flexCheckFirst">Label</label>
      </div>
      <div class="check-container">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckFirst">
        <label class="form-check-label" for="flexCheckFirst">Label</label>
      </div>
    </div>
  </div>
</form>
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
None.

### Behaviours
Required and optional fields can be used in the form. When the user does not enter a value or make a selection in a required field, error text appears and instructs the user to complete the action in order to submit the form.

### Recommendations
Add content strategy guidelines and editorial rules here.

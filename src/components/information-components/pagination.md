---
lang: en-US
title: Pagination
description: Description of the page
pageHeader: true
---

### Overview
Pagination allows data and content to spread across multiple screens. It’s represented as a sequence of numbers assigned to the bottom of filtered results components and filterable tables, and allows users to move or skip forward and back through these results or data.

### Elements
<PreviewImage :image="$withBase('/images/pagination-sample.png')" :contents="[{ x: 76, y: 0, title: 'Number', text: 'Number' }, { title: 'Previous chevron', text: 'Previous chevron' }, { x: 95, y: -80, title: 'Next chevron', text: 'Next chevron' }, { x: 80, y: -80, title: 'Current page indicator', text: 'Current page indicator' }, { title: 'Ellipsis', text: 'Ellipsis' }, { x: 0, y: -80, title: 'Page range', text: 'Page range' }]">
<template #code>
<CodeGroup>
<CodeGroupItem title="HTML">

```html
  <div class="paginate">
    <div class="result-container">Showing 1100 - 1200 of 2034 results</div>
    <nav aria-label="Pagination">
      <ul class="pagination">
        <li class="page-item page-previous">
          <a class="page-icon" href="#" aria-label="Previous">
            <span aria-hidden="false">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3715 4.26035C15.7186 3.91322 16.2814 3.91322 16.6285 4.26035C16.9441 4.57592 16.9728 5.06975 16.7146 5.41773L16.6285 5.51743L10.1464 12L16.6285 18.4826C16.9441 18.7981 16.9728 19.292 16.7146 19.64L16.6285 19.7397C16.313 20.0552 15.8191 20.0839 15.4712 19.8257L15.3715 19.7397L8.26035 12.6285C7.94477 12.313 7.91609 11.8191 8.17428 11.4712L8.26035 11.3715L15.3715 4.26035Z" fill="#3F3B3B"/></svg>
            </span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link active" data-page="index" href="#">1</a>
          <a class="page-link" data-page="index" href="#">2</a>
          <a class="page-link" data-page="index" href="#">3</a>
          <a class="page-link" data-page="index" href="#">4</a>
          <a class="page-link" data-page="index" href="#">5</a>
        </li>
        <li class="page-item page-next">
          <a class="page-icon" href="#" aria-label="Next">
            <span aria-hidden="false">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.51721 4.26035C9.17008 3.91322 8.60727 3.91322 8.26013 4.26035C7.94456 4.57592 7.91587 5.06975 8.17407 5.41773L8.26013 5.51743L14.7423 12L8.26013 18.4826C7.94456 18.7981 7.91587 19.292 8.17407 19.64L8.26013 19.7397C8.57571 20.0552 9.06953 20.0839 9.41752 19.8257L9.51721 19.7397L16.6283 12.6285C16.9439 12.313 16.9726 11.8191 16.7144 11.4712L16.6283 11.3715L9.51721 4.26035Z" fill="#3F3B3B"/></svg>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
The default number of filtered results displayed depends on the page or component pattern.

### Behaviours
Up to 8 pages display at one time. With page counts of 9 and above, an ellipses appears in the middle of the sequence to indicate a hidden midpoint, and the last page is shown at the end of the sequence.
The left and right chevron allow users to move page by page back and forward through the sequence. The left chevron appears when the user moves through the first sequence of pages.



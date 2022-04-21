---
lang: en-US
title: Components
description: Description of the components page
pageHeader: true
---

## Overview

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium.

<TwoCards :contents="[
    { title: 'When to use', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium.'},
    { title: 'When not to use', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium.'},
]"/>

## Image (Variants)

## Table
<div>
  <table class="table">
    <thead class="table-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Table Header</th>
        <th scope="col">Table Header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Table Body</td>
        <td>Table Body</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Table Body</td>
        <td>Table Body</td>
      </tr>
    </tbody>
  </table>
</div>

## Demo

<CodeGroup>
  <CodeGroupItem title="HTML">

```html
<p>Some random html</p>
<ul class="ul">
  <li>A list</li>
</ul>
<pre>This is code</pre>
```

  </CodeGroupItem>

  <CodeGroupItem title="JS" active>

```js:no-line-numbers
console.log('Hello, Styleguide!')
```

  </CodeGroupItem>
</CodeGroup>
---
lang: en-US
title: Secondary Footer
description: Description of the page
pageHeader: true
---

## Secondary Footer

### Overview

The secondary footer sits directly above the global footer.

#### Example

<CodeDemo :image="$withBase('/images/secondary-footer-sample.png')">
<template #code>
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
</template>
</CodeDemo>

### Elements

<CodeDemo :image="$withBase('/images/secondary-footer-sample.png')" :contents="[{ x: 1, y: 7.5, title: 'Contact Details', text: 'The entity’s phone number, email, and address.' }, { x: 48, y: 7.5, title: 'Community Engagement', text: 'Social media account links.' },{ x: 72, y: 7.5, title: 'Subscribe', text: ' A link directing users to details on how to stay up to date with the entity.'}]">
<template #code>
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
</template>
</CodeDemo>

### Variants

While the design of the secondary footer remains the same across the site, the sections of content can adapt to the information available for the entity. When a section is not populated with content, it will not display in the footer. 
For instance, if a subscribe link is included, the fourth column will appear. 
 If not, the fourth column will be empty.

<div>
  <table class="table">
    <thead class="table-light">
      <tr>
        <th scope="col">Variant</th>
        <th scope="col">Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Table Header</td>
        <td>Table Header</td>
      </tr>
      <tr>
        <td>Table Header</td>
        <td>Table Header</td>
      </tr>
      <tr>
        <td>Table Header</td>
        <td>Table Header</td>
      </tr>
      <tr>
        <td>Table Header</td>
        <td>Table Header</td>
      </tr>
    </tbody>
  </table>
</div>

### Behaviours

Mouse

Users can trigger a button by clicking anywhere within the button container.

Keyboard

Users can trigger a button by pressing Enter or Space while the button has focus. For additional keyboard interactions, see the accessibility tab.

### Recommendations

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in.Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in.Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium.

<div>
    <OrderedList :contents="['Lorem ipsum dolor', 'sit amet', 'consectetur', 'adipiscing elit', 'olutpat quisque', 'adipiscing in']"></OrderedList>
</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium.
### States
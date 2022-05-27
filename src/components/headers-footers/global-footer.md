---
lang: en-US
title: Global Footer
description: Description of the page
pageHeader: true
---

## Global

<ImageMap :image="$withBase('/images/map-sample.png')" :contents="[
{ x: 4, y: 8.5, title: 'Breadcrumbs', text: 'A breadcrumb, showing the navigation history.' },
{ x: 4, y: 20, title: 'Heading (sub-topic title)', text: 'A direct, short title focused on the main action the user will complete on the page.' },
]"/>

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
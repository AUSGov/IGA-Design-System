---
lang: en-US
title: Table
description: Description of the page
pageHeader: true
---

### Overview
Tables make it easier for users to consume data in a structured way. Tables can be standard or filterable.

### Elements
<PreviewImage :image="$withBase('/images/table-sample.png')" :contents="[{ title: 'Title (Headings levels / optional)', text: 'Title (Headings levels / optional)' }, { title: 'Header', text: 'Header' }, { x: -2, y: 0, title: 'Header column label', text: 'Header column label' }, { x: -2, y: 10, title: 'Row label', text: 'Row label' }, { title: 'Number of results (optional)', text: 'Number of results (optional)' }, { title: 'Pagination (optional)', text: 'Pagination (optional)' }]">
<template #code>
<CodeGroup>
<CodeGroupItem title="HTML">

```html
<table class="table table-striped">
  <thead class="table-primary">
  <tr>
    <th>Access and egress</th>
    <th>Means of entry and exit to a building</th>
  </tr>
  <tr>
    <th>Table Title</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td><span class="label">Access and egress: </span><span class="content-value">Access and egress</span></td>
    <td>
      <span class="label">Means of entry and exit to a building: </span><span class="content-value">Means of entry and exit to a building.</span>
    </td>
  </tr>
  <tr>
    <td><span class="label">Access and egress: </span><span class="content-value">Accessible</span></td>
    <td>
      <span class="label">Means of entry and exit to a building: </span><span class="content-value">When a public building or place is accessible it means people can easily move in, out and around the building or space. Accessibility may be limited by physical, sensory and informational barriers.</span>
    </td>
  </tr>
  <tr>
    <td><span class="label">Access and egress: </span><span class="content-value">Access consultant</span></td>
    <td>
      <span class="label">Means of entry and exit to a building: </span><span class="content-value">A specialist consultant who is trained to identify potential accessibility issues and provide advice on legal obligations.</span>
    </td>
  </tr>
  <tr>
    <td><span class="label">Access and egress: </span><span class="content-value">Access panel</span></td>
    <td>
      <span class="label">Means of entry and exit to a building: </span><span class="content-value">A panel of experts who provide guidance to builders and developers about unjustifiable hardship issues.</span>
    </td>
  </tr>
  <tr>
    <td><span class="label">Access and egress: </span><span class="content-value">Bindi Maps</span></td>
    <td>
      <span class="label">Means of entry and exit to a building: </span><span class="content-value">A free mobile application that helps people find their way around indoor spaces that other navigation apps can't reach.</span>
    </td>
  </tr>
  <tr>
    <td><span class="label">Access and egress: </span><span class="content-value">Blue Badge Map</span></td>
    <td>
      <span class="label">Means of entry and exit to a building: </span><span class="content-value">Worldwide map and database of accessible (Blue Badge) carparking spaces</span>
    </td>
  </tr>
  <tr>
    <td><span class="label">Access and egress: </span><span class="content-value">Building certifier</span></td>
    <td>
      <span class="label">Means of entry and exit to a building: </span><span class="content-value">A person with responsibility for, or control over, the building approval process for a building. For example, a private certifier, building surveyor or local council.</span>
    </td>
  </tr>
  <tr>
    <td><span class="label">Access and egress: </span><span class="content-value">Building developer</span></td>
    <td>
      <span class="label">Means of entry and exit to a building: </span><span class="content-value">A person with responsibility for, or control over, a building’s design or construction. For example, a property developer, property owner, building designer, builder, project manager or project lessee.</span>
    </td>
  </tr>
  </tbody>
</table>
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
- Body width
- Full width
- Entity colours
- Filterable table

### Behaviours
None.

### Recommendations
Add content strategy guidelines and editorial rules here.

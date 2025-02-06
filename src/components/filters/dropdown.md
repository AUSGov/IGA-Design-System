---
lang: en-US
title: Dropdown filter
description: Description of the page
pageHeader: true
---

### Overview
The dropdown filter expands to reveal a list of options, which the user can select to narrow their search and sort content. This filter is single-select. It’s used within the filter group on the filtered landing homepage and search landing page, as well as with multiple dropdown filters on the filtered landing page ADC.

### Elements
<DemoDropdownFilter/>

1. Dropdown label
2. Dropdown container
3. Interactive area
4. Option label
5. Chevron indicator

### Variants
This filter element is used with other filter types inside the filter component, and alongside 4 and 5 dropdown fields on the publication homepage and ADC filtered landing page.

### Behaviours
On the search landing page, the publication homepage, and the ADC filtered landing page, users select “Apply” to start the search and the label “Reset” replaces “Apply” once the user makes a selection.
Selecting the space outside of the list of dropdown options closes the component. Selecting the item in the list makes this label appear in the dropdown field.  

On the filter component on the news homepage and topic pages, the user can select “Clear all” to remove filters. On the publication homepage and ADC filtered landing page, “Reset” replaces “Apply” once the user makes a selection.

On the search landing page, the dropdown filter is used to sort results and increase or decrease the number of results per page.

### Recommendations
The dropdown filter style is the standard approach for display filters for table based lists.

### States
<strong>Closed:</strong> Black 700 (Base) placeholder text  
<strong>Open, unselected:</strong> Default Black 700 (Base)
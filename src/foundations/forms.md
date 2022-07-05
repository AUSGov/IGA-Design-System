---
lang: en-US
title: Foundations
description: The global rules and elements which govern the appearance, structure and behaviour of components.
pageHeader: true
---

# Forms

## Overview

Forms allow users to configure options and submit information, such as feedback or personal details in order to subscribe to a newsletter.

## Form elements

**Elements**
* Title (heading levels / optional)
* Title (optional)
* Field label
* Help text (optional)
* Placeholder text (optional)
* Text field (optional)
* Dropdown (optional)
* Checkbox (optional)
* Radio button (optional)
* Error state
* Disabled state
* Legal disclaimer (optional)
* Primary button (optional), see CTAs and buttons
* Text button (optional,), see CTAs and buttons

***
HTML Examples or imagery

<div class="doi-content">
    <div class="row">
        <div class="col-lg-4 col-md-6">
            <label for="validation1" class="form-label visually-hidden">Placeholder</label>
            <input type="text" class="form-control is-invalid" placeholder="Placeholder" id="validation1" aria-describedby="validation1Feedback" required>
            <div id="validation1Feedback" class="invalid-feedback">How dare you!</div>
        </div>
    </div>
</div>
***

**Form behaviours**

Required and optional fields can be used in the form. When the user does not enter a value or make a selection in a required field, error text appears and instructs the user to complete the action in order to submit the form.

**Text field**

* The field widths should reflect the intended length of the content while still aligning to the responsive column or mini unit grid.
* Make sure users can enter their information at smaller screen sizes.
* Truncate when an input is too long to be fully displayed in the field.
* Pre-populate known values when possible, such as a default IP address.
* The first required input field in a form should receive focus on presentation to a user.

**Dropdowns**

* When you have more than 5 options to present to the user, use a dropdown list, not a checkbox or a radio button.

**Radio buttons**

* Pre-select a default option for the user. If the user selects a different option, the default is deselected.
* For null options, provide a radio button with the label “None”.

**Radio buttons and checkboxes**

* Radio buttons and checkbox item text falls to the right of their controls.
* When possible, arrange the checkbox and radio button groups vertically for better scannability.

**Buttons**

* Use a primary button for the main action, and a secondary button for secondary actions like Cancel or Discard.
* Align buttons to the left on desktop and make full width on mobile.
* When placing buttons, put the highest priority (primary button) to the left. If there are 2 actions, use secondary on the right.
* There should be a maximum of 3 buttons.

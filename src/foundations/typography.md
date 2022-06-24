---
lang: en-US
title: Foundations
description: The global rules and elements which govern the appearance, structure and behaviour of components.
pageHeader: true
---

# Typography

## Heading styles
<div class="doi-content">
  <table class="table">
    <thead class="table-light">
      <tr>
        <th scope="col">Style</th>
        <th scope="col">Properties</th>
      </tr>
    </thead>
    <tbody>
      <TypographyRow styleTitle="Display Large" fontFamily="Public Sans" fontWeight="600" size="48px" lineHeight="56px">
        <template #styleContent>
            <div class="display-large">Display Large</div>
        </template>
      </TypographyRow>
      <TypographyRow styleClass="display-medium" styleTitle="Display Medium" fontFamily="Public Sans" fontWeight="600" size="36px" lineHeight="40px">
        <template #styleContent>
            <div class="display-medium">Display Medium</div>
        </template>
      </TypographyRow>
      <TypographyRow fontFamily="Public Sans" fontWeight="600" size="30px" lineHeight="36px" letterSpacing="-0.35 px">
        <template #styleContent>
            <div class="display-small">Display Small</div>
        </template>
      </TypographyRow>
      <TypographyRow fontFamily="Public Sans" fontWeight="600" size="32px" lineHeight="40px">
        <template #styleContent>
            <div class="heading-large">Heading Large</div>
        </template>
      </TypographyRow>
      <TypographyRow fontFamily="Public Sans" fontWeight="600" size="24px" lineHeight="24px" letterSpacing="-0.2">
        <template #styleContent>
            <div class="heading-medium">Heading Medium</div>
        </template>
      </TypographyRow>
      <TypographyRow fontFamily="Public Sans" fontWeight="600" size="21px" lineHeight="26px">
        <template #styleContent>
            <div class="heading-small">Heading Small</div>
        </template>
      </TypographyRow>
      <TypographyRow fontFamily="Public Sans" fontWeight="700" size="21px" lineHeight="24px" letterSpacing="0.04px">
        <template #styleContent>
            <div class="heading-extra-small">Heading Extra Small</div>
        </template>
      </TypographyRow>
      <TypographyRow styleClass="heading-extra-small-caps" styleTitle="Heading Extra Small Caps" fontFamily="Public Sans" fontWeight="600" size="14px" lineHeight="24px" letterSpacing="1px">
        <template #styleContent>
            <div class="heading-extra-small-caps">Heading Extra Small Caps</div>
        </template>
      </TypographyRow>
    </tbody>
  </table>
</div>

## Paragraph
<div class="doi-content">
  <table class="table">
    <thead class="table-light">
      <tr>
        <th scope="col">Style</th>
        <th scope="col">Properties</th>
      </tr>
    </thead>
    <tbody>
      <TypographyRow fontFamily="Public Sans" fontWeight="400" size="22px" lineHeight="32px">
        <template #styleContent>
            <div class="body-lead">Body Lead</div>
        </template>
      </TypographyRow>
      <TypographyRow fontFamily="Public Sans" fontWeight="400" size="18px" lineHeight="28px">
        <template #styleContent>
            <div class="body-large">Body Large</div>
        </template>
      </TypographyRow>
      <TypographyRow fontFamily="Public Sans" fontWeight="600" size="18px" lineHeight="28px">
        <template #styleContent>
            <div class="body-large-bold">Body Large Bold</div>
        </template>
      </TypographyRow>
      <TypographyRow fontFamily="Public Sans" fontWeight="400" size="16px" lineHeight="26px">
        <template #styleContent>
            <div class="body-medium">Body Medium</div>
        </template>
      </TypographyRow>
      <TypographyRow fontFamily="Public Sans" fontWeight="600" size="16px" lineHeight="26px">
        <template #styleContent>
            <div class="body-medium-bold">Body Medium Bold</div>
        </template>
      </TypographyRow>
      <TypographyRow fontFamily="Public Sans" fontWeight="400" size="14px" lineHeight="20px" letterSpacing="0.3px">
        <template #styleContent>
            <div class="body-small">Body Small</div>
        </template>
      </TypographyRow>
      <TypographyRow fontFamily="Public Sans" fontWeight="600" size="14px" lineHeight="20px" letterSpacing="0.3px">
        <template #styleContent>
            <div class="body-small-bold">Body Small Bold</div>
        </template>
      </TypographyRow>
    </tbody>
  </table>
</div>

## Captions

<div class="doi-content">
  <table class="table">
    <thead class="table-light">
      <tr>
        <th scope="col">Style</th>
        <th scope="col">Properties</th>
      </tr>
    </thead>
    <tbody>
      <TypographyRow fontFamily="Public Sans" fontWeight="400" size="15px" lineHeight="24px">
        <template #styleContent>
            <div class="caption-large">Caption Large</div>
        </template>
      </TypographyRow>
      <TypographyRow fontFamily="Public Sans" fontWeight="600" size="15px" lineHeight="28px">
        <template #styleContent>
            <div class="caption-bold">Caption Bold</div>
        </template>
      </TypographyRow>
    </tbody>
  </table>
</div>

## Links

<div class="doi-content">
  <table class="table">
    <thead class="table-light">
      <tr>
        <th scope="col">Style</th>
        <th scope="col">Properties</th>
      </tr>
    </thead>
    <tbody>
      <TypographyRow fontFamily="Public Sans" fontWeight="400" size="18px" lineHeight="28px">
        <template #styleContent>
            <div class="link-large">Lorem ipsum dolor sit amet <a href="#" class="link-large">link large</a> Lorem ipsum dolor sit</div>
        </template>
      </TypographyRow>
      <TypographyRow fontFamily="Public Sans" fontWeight="400" size="18px" lineHeight="28px">
        <template #styleContent>
            <div class="link-large">Lorem ipsum dolor sit amet <a href="#" class="link-large-hover">link large</a> Lorem ipsum dolor sit</div>
        </template>
      </TypographyRow>
    </tbody>
  </table>
</div>

## Lists

<div class="doi-content">
  <table class="table">
    <thead class="table-light">
      <tr>
        <th scope="col">Style</th>
        <th scope="col">Properties</th>
      </tr>
    </thead>
    <tbody>
      <TypographyRow fontFamily="Public Sans" fontWeight="400" size="18px" lineHeight="28px" discColor="#285576">
        <template #styleContent>
            <label class="body-large">Unordered List</label>
            <ul>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
            </ul>
        </template>
      </TypographyRow>
      <TypographyRow fontFamily="Public Sans" fontWeight="400" size="18px" lineHeight="28px" numberColor="#285576">
        <template #styleContent>
            <label class="body-large">Ordered List</label>
            <ol>
                <li><span>List Item 1</span></li>
                <li><span>List Item 2</span></li>
                <li><span>List Item 3</span></li>
            </ol>
        </template>
      </TypographyRow>
    </tbody>
  </table>
</div>

## Blockquote

<div class="doi-content">
  <table class="table">
    <thead class="table-light">
      <tr>
        <th scope="col">Style</th>
        <th scope="col">Properties</th>
      </tr>
    </thead>
    <tbody>
      <TypographyRow fontFamily="Public Sans" fontWeight="600" size="24px" lineHeight="32px"  >
        <template #styleContent>
            <blockquote>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, enim auctor nisi, vel.”</blockquote>
        </template>
      </TypographyRow>
      <TypographyRow fontFamily="Public Sans" fontWeight="300" size="16px" lineHeight="24px" textAlignment="Left, Centre">
        <template #styleContent>
            <cite>-Attribution</cite>
        </template>
      </TypographyRow>
    </tbody>
  </table>
</div>
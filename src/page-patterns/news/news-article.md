---
lang: en-US
title: News Article
description:
pageHeader: true
---

### Overview
The news article page pattern is designed to communicate a news story, communique, media release or speech. Many variations in information hierachy and additional components are available depending on content needs. This is the most used page pattern for various news article pages located in the news section of the website. For case studies, please refer to the case study page pattern.

### Components
<PreviewImage :image="$withBase('/images/news-article.png')" :contents="[{ x: 0, y: 8.3, title: 'Heading (page title)', text: 'A headline describing the topic and purpose of the news article.<ul><li> Suggested word limit of 20 words.</li></ul>' },{ x: 0, y: 11.3, title: 'Page summary', text: 'A few sentences briefly expanding on what the news article is about.<ul><li> Can mention important dates, such as when applications or consultations open/close.</li><li>Limit of 1-3 sentences.</li>.<li>This summary is used for page metadata, card summaries, social media sharing and Google.</li></ul>' }, { x: 0, y: 13.2, title: 'Metadata', text: 'News article metadata - date published, news category and reading time' },{ x: 0, y: 15, title: 'Tags', text: 'A list of one or more topics relevant to the news article' }, { x: 0, y: 23.2, title: 'Banner image', text: 'The main image presenting the news article. An optional caption can be applied.'}, { x: 0, y: 31.7, title: 'Lead text', text: 'The first paragraph has a larger text style to highlight the key idea of the news article.'}, { x: 0, y: 40, title: 'Body copy', text: 'The main content of the news article.<ul><li>If the body copy contains many paragraphs, use subheadings to break up the content.</li></ul>'}, { x: 0, y: 50.8, title: 'Call to action card', text: 'Used to highlight and direct users to the main call to action for the news article. This could be an application form, consultation, or any other relevant page. Refer to the call to action section on this page for variations and further guidance.'}, { x: 0, y: 60, title: 'More information links', text: 'Links to other pages related to the news article.<ul><li>If there is a media release, it is always the first link in this component</li><li>Only have a maximum of four links</li></ul>'}, { x: 0, y: 70, title: 'Contact footer', text: 'Displays contact information for the entity or group related to the news article. Must include at least one email.' }]">
<template #code>
<CodeGroup>
  <CodeGroupItem title="HTML">

```html
```

  </CodeGroupItem>
</CodeGroup>
</template>
</PreviewImage>

### Variations
You may need to use additional components based on your content needs. These components are listed in this section.

#### Image
This is used when you would like to include a relevant image, photo or diagram. The caption or written description below each image is optional.
<PreviewImage :image="$withBase('/images/news-image.png')">

</PreviewImage>

#### Video
Used when you would like to include or embed a relevant video.
<PreviewImage :image="$withBase('/images/news-video.png')">

</PreviewImage>


#### Blockquote
Used when you woud like to include a quote relevant to the news article. This draws attention to the quote and creates a visual break in the content.

#### Bio card(s)
Used for featuring information about people in a news article. Examples include prize/award recipients, members of a committee or organisation.

<PreviewImage :image="$withBase('/images/news-bios.png')">

</PreviewImage>


#### Callout
Used for giving additional important information or corrections. Examples include noting the original published date after it has been updated, or clarifying a piece of information that was correct at the time the article was written but has since changed.

<PreviewImage :image="$withBase('/images/news-callout.png')">

</PreviewImage>


#### Downloads
Used for providing a file or document related to the news article. Examples include information kits and stakeholder kits.

<PreviewImage :image="$withBase('/images/news-downloads.png')">

</PreviewImage>


### Call to action options
There are a few different design options for a call to action based on what is being linked to.



#### Standard CTA
The standard CTA is used for most call to action links. This includes a title and an optional summary.

<PreviewImage :image="$withBase('/images/news-cta1.png')">

</PreviewImage>

<PreviewImage :image="$withBase('/images/news-cta2.png')">

</PreviewImage>

#### Two standard CTA
Sometimes you will have two equally important call to action links. These use medium cards, side by side.

<PreviewImage :image="$withBase('/images/news-cta3.png')">

</PreviewImage>

#### Image CTA
We have a CTA with image option. Use this if there is a need to feature this CTA more prominently or there is a branded image requirement. Always have the image on the right hand size of the card.

<PreviewImage :image="$withBase('/images/news-cta4.png')">

</PreviewImage>

#### Featured CTA
This CTA is generally used when this news article or case study is part of a publication. The featured CTA links back to this publication and makes it clear that this news article is part of a broader product.

<PreviewImage :image="$withBase('/images/news-cta5.png')">

</PreviewImage>

### Recommendations


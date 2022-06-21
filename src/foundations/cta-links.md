---
lang: en-US
title: Foundations
description: The global rules and elements which govern the appearance, structure and behaviour of components.
pageHeader: true
---

# CTAs and links

## Buttons

Buttons guide users to take action on content. They begin with verbs to clearly describe the meaning of the action. Our design system includes 3 button styles.

This button style gives prominence to featured content and important user actions.

**Recommendations**

Labels for the primary button should be short and specific, communicating the prominent action a user could or should take.

<div class="doi-content cta-buttons-container">
    <table class="table table-borderless table-row-space-lg">
        <thead>
          <tr>
            <th scope="col"><span></span></th>
            <th scope="col">Primary</th>
            <th scope="col">Ghost</th>
            <th scope="col">Small Primary</th>
            <th scope="col">Small Ghost</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td class="row-heading">Default</td>
                <td><button class="btn btn-primary">Button</button></td>
                <td><button class="btn btn-outline-primary">Button</button></td>
                <td><button class="btn btn-sm btn-primary">Button</button></td>
                <td><button class="btn btn-sm btn-outline-primary">Button</button></td>
            </tr>
            <tr>
                <td class="row-heading">Hover</td>
                <td><button class="btn btn-primary hover">Button</button></td>
                <td><button class="btn btn-outline-primary hover">Button</button></td>
                <td><button class="btn btn-sm btn-primary hover">Button</button></td>
                <td><button class="btn btn-sm btn-outline-primary hover">Button</button></td>
            </tr>
            <tr>
                <td class="row-heading">Focus</td>
                <td><button class="btn btn-primary focus">Button</button></td>
                <td><button class="btn btn-outline-primary focus">Button</button></td>
                <td><button class="btn btn-sm btn-primary focus">Button</button></td>
                <td><button class="btn btn-sm btn-outline-primary focus">Button</button></td>
            </tr>
            <tr>
                <td class="row-heading">Disabled</td>
                <td><button class="btn btn-primary disabled">Button</button></td>
                <td><button class="btn btn-outline-primary disabled">Button</button></td>
                <td><button class="btn btn-sm btn-primary disabled">Button</button></td>
                <td><button class="btn btn-sm btn-outline-primary disabled">Button</button></td>
            </tr>
        </tbody>
    </table>
</div>

## Text button

Text buttons are used on their own, such as on cards, to help users navigate to content within the site or to external sites. 
They are a less prominent way to indicate multiple and repeated calls to action so as not to clutter the user interface. 

**Elements**

The text button uses the action magenta colour from the primary colour palette. In most cases, the text button includes the arrow icon in all states. In the read more component, the arrow appears on hover and click.

The text button uses a small arrow when linking internally within the site. When linked to an external webpage, the arrow is replaced with an external link icon.

Text buttons are white when used on shaded background entity cards.

Text buttons are typically left aligned within cards and “read more” containers. They are typically right aligned within sections of content, such as the “Find all” text button under the featured card container.

<div class="doi-content cta-links-container">
    <table class="table table-borderless table-row-space-lg">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Primary</th>
            <th scope="col">External</th>
            <th scope="col">Secondary</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td class="row-heading">Default</td>
                <td class="body-large">
                    <a href="#" class="link-icon">
                        <span>Link</span>
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.53125 8.16634C0.858152 8.16634 0.3125 8.78195 0.3125 9.54134C0.3125 10.2375 0.771 10.8127 1.36587 10.9038L1.53125 10.9163H24.2812C24.9543 10.9163 25.5 10.3007 25.5 9.54134C25.5 8.84523 25.0415 8.26994 24.4466 8.17889L24.2812 8.16634H1.53125Z" fill="#A44D8E"/>
                            <path d="M25.143 8.56907C24.7104 8.08091 24.0333 8.03654 23.5562 8.43594L23.4195 8.56907L16.9195 15.9024C16.4435 16.4394 16.4435 17.31 16.9195 17.8469C17.3521 18.3351 18.0292 18.3795 18.5063 17.9801L18.643 17.8469L25.143 10.5136C25.619 9.97664 25.619 9.10604 25.143 8.56907Z" fill="#A44D8E"/>
                            <path d="M18.643 1.23574C18.1671 0.698765 17.3954 0.698765 16.9195 1.23574C16.4868 1.72389 16.4474 2.48777 16.8015 3.02606L16.9195 3.18028L23.4195 10.5136C23.8954 11.0506 24.6671 11.0506 25.143 10.5136C25.5757 10.0255 25.6151 9.26157 25.261 8.72329L25.143 8.56907L18.643 1.23574Z" fill="#A44D8E"/>
                        </svg>
                    </a>
                </td>
                <td class="body-large">
                    <a href="#" class="link-icon link-external">
                        <span>Link</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5002 1.95831H13.1579L5.89155 9.2247L5.83104 9.2948C5.64949 9.53948 5.66966 9.8867 5.89155 10.1086C6.13563 10.3527 6.53136 10.3527 6.77544 10.1086L14.0418 2.8422V5.49998L14.0475 5.58479C14.0889 5.88985 14.3504 6.12498 14.6668 6.12498C15.012 6.12498 15.2918 5.84516 15.2918 5.49998V1.33331C15.2918 1.30518 15.2899 1.27704 15.2862 1.24912L15.2861 1.2485C15.2788 1.19462 15.2646 1.14292 15.2445 1.09431C15.2147 1.02231 15.171 0.954746 15.1131 0.895791L15.1039 0.886553C14.9912 0.776285 14.837 0.708313 14.6668 0.708313H14.6667H10.5002L10.4154 0.714019C10.1103 0.755404 9.87516 1.0169 9.87516 1.33331L9.88087 1.41812C9.92225 1.72318 10.1837 1.95831 10.5002 1.95831ZM7.79183 3.83331C7.79183 3.48813 7.51201 3.20831 7.16683 3.20831H3.00016L2.86056 3.21249C1.65992 3.28464 0.708496 4.2812 0.708496 5.49998V13L0.712678 13.1396C0.784826 14.3402 1.78139 15.2916 3.00016 15.2916H10.5002L10.6398 15.2875C11.8404 15.2153 12.7918 14.2188 12.7918 13V8.83331L12.7861 8.7485C12.7447 8.44344 12.4832 8.20831 12.1668 8.20831C11.8217 8.20831 11.5418 8.48813 11.5418 8.83331V13L11.5365 13.1065C11.4831 13.6318 11.0395 14.0416 10.5002 14.0416H3.00016L2.89366 14.0363C2.36839 13.9829 1.9585 13.5393 1.9585 13V5.49998L1.96387 5.39347C2.01722 4.86821 2.46082 4.45831 3.00016 4.45831H7.16683L7.25164 4.45261C7.5567 4.41122 7.79183 4.14973 7.79183 3.83331Z" fill="#3F3B3B"/>
                        </svg>
                    </a>
                </td>
                <td class="body-large">
                    <a href="#" class="link-icon link-secondary">
                        <span>Link</span>
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.53125 8.16634C0.858152 8.16634 0.3125 8.78195 0.3125 9.54134C0.3125 10.2375 0.771 10.8127 1.36587 10.9038L1.53125 10.9163H24.2812C24.9543 10.9163 25.5 10.3007 25.5 9.54134C25.5 8.84523 25.0415 8.26994 24.4466 8.17889L24.2812 8.16634H1.53125Z" fill="#A44D8E"/>
                            <path d="M25.143 8.56907C24.7104 8.08091 24.0333 8.03654 23.5562 8.43594L23.4195 8.56907L16.9195 15.9024C16.4435 16.4394 16.4435 17.31 16.9195 17.8469C17.3521 18.3351 18.0292 18.3795 18.5063 17.9801L18.643 17.8469L25.143 10.5136C25.619 9.97664 25.619 9.10604 25.143 8.56907Z" fill="#A44D8E"/>
                            <path d="M18.643 1.23574C18.1671 0.698765 17.3954 0.698765 16.9195 1.23574C16.4868 1.72389 16.4474 2.48777 16.8015 3.02606L16.9195 3.18028L23.4195 10.5136C23.8954 11.0506 24.6671 11.0506 25.143 10.5136C25.5757 10.0255 25.6151 9.26157 25.261 8.72329L25.143 8.56907L18.643 1.23574Z" fill="#A44D8E"/>
                        </svg>
                    </a>
                </td>
            </tr>
            <tr>
                <td class="row-heading">Hover</td>
                <td class="body-large">
                    <a href="#" class="link-icon hover">
                        <span>Link</span>
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.53125 8.16634C0.858152 8.16634 0.3125 8.78195 0.3125 9.54134C0.3125 10.2375 0.771 10.8127 1.36587 10.9038L1.53125 10.9163H24.2812C24.9543 10.9163 25.5 10.3007 25.5 9.54134C25.5 8.84523 25.0415 8.26994 24.4466 8.17889L24.2812 8.16634H1.53125Z" fill="#A44D8E"/>
                            <path d="M25.143 8.56907C24.7104 8.08091 24.0333 8.03654 23.5562 8.43594L23.4195 8.56907L16.9195 15.9024C16.4435 16.4394 16.4435 17.31 16.9195 17.8469C17.3521 18.3351 18.0292 18.3795 18.5063 17.9801L18.643 17.8469L25.143 10.5136C25.619 9.97664 25.619 9.10604 25.143 8.56907Z" fill="#A44D8E"/>
                            <path d="M18.643 1.23574C18.1671 0.698765 17.3954 0.698765 16.9195 1.23574C16.4868 1.72389 16.4474 2.48777 16.8015 3.02606L16.9195 3.18028L23.4195 10.5136C23.8954 11.0506 24.6671 11.0506 25.143 10.5136C25.5757 10.0255 25.6151 9.26157 25.261 8.72329L25.143 8.56907L18.643 1.23574Z" fill="#A44D8E"/>
                        </svg>
                    </a>
                </td>
                <td class="body-large">
                    <a href="#" class="link-icon link-external hover">
                        <span>Link</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5002 1.95831H13.1579L5.89155 9.2247L5.83104 9.2948C5.64949 9.53948 5.66966 9.8867 5.89155 10.1086C6.13563 10.3527 6.53136 10.3527 6.77544 10.1086L14.0418 2.8422V5.49998L14.0475 5.58479C14.0889 5.88985 14.3504 6.12498 14.6668 6.12498C15.012 6.12498 15.2918 5.84516 15.2918 5.49998V1.33331C15.2918 1.30518 15.2899 1.27704 15.2862 1.24912L15.2861 1.2485C15.2788 1.19462 15.2646 1.14292 15.2445 1.09431C15.2147 1.02231 15.171 0.954746 15.1131 0.895791L15.1039 0.886553C14.9912 0.776285 14.837 0.708313 14.6668 0.708313H14.6667H10.5002L10.4154 0.714019C10.1103 0.755404 9.87516 1.0169 9.87516 1.33331L9.88087 1.41812C9.92225 1.72318 10.1837 1.95831 10.5002 1.95831ZM7.79183 3.83331C7.79183 3.48813 7.51201 3.20831 7.16683 3.20831H3.00016L2.86056 3.21249C1.65992 3.28464 0.708496 4.2812 0.708496 5.49998V13L0.712678 13.1396C0.784826 14.3402 1.78139 15.2916 3.00016 15.2916H10.5002L10.6398 15.2875C11.8404 15.2153 12.7918 14.2188 12.7918 13V8.83331L12.7861 8.7485C12.7447 8.44344 12.4832 8.20831 12.1668 8.20831C11.8217 8.20831 11.5418 8.48813 11.5418 8.83331V13L11.5365 13.1065C11.4831 13.6318 11.0395 14.0416 10.5002 14.0416H3.00016L2.89366 14.0363C2.36839 13.9829 1.9585 13.5393 1.9585 13V5.49998L1.96387 5.39347C2.01722 4.86821 2.46082 4.45831 3.00016 4.45831H7.16683L7.25164 4.45261C7.5567 4.41122 7.79183 4.14973 7.79183 3.83331Z" fill="#3F3B3B"/>
                        </svg>
                    </a>
                </td>
                <td class="body-large">
                    <a href="#" class="link-icon link-secondary hover">
                        <span>Link</span>
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.53125 8.16634C0.858152 8.16634 0.3125 8.78195 0.3125 9.54134C0.3125 10.2375 0.771 10.8127 1.36587 10.9038L1.53125 10.9163H24.2812C24.9543 10.9163 25.5 10.3007 25.5 9.54134C25.5 8.84523 25.0415 8.26994 24.4466 8.17889L24.2812 8.16634H1.53125Z" fill="#A44D8E"/>
                            <path d="M25.143 8.56907C24.7104 8.08091 24.0333 8.03654 23.5562 8.43594L23.4195 8.56907L16.9195 15.9024C16.4435 16.4394 16.4435 17.31 16.9195 17.8469C17.3521 18.3351 18.0292 18.3795 18.5063 17.9801L18.643 17.8469L25.143 10.5136C25.619 9.97664 25.619 9.10604 25.143 8.56907Z" fill="#A44D8E"/>
                            <path d="M18.643 1.23574C18.1671 0.698765 17.3954 0.698765 16.9195 1.23574C16.4868 1.72389 16.4474 2.48777 16.8015 3.02606L16.9195 3.18028L23.4195 10.5136C23.8954 11.0506 24.6671 11.0506 25.143 10.5136C25.5757 10.0255 25.6151 9.26157 25.261 8.72329L25.143 8.56907L18.643 1.23574Z" fill="#A44D8E"/>
                        </svg>
                    </a>
                </td>
            </tr>
            <tr>
                <td class="row-heading">Pressed</td>
                <td class="body-large">
                    <a href="#" class="link-icon focus">
                        <span>Link</span>
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.53125 8.16634C0.858152 8.16634 0.3125 8.78195 0.3125 9.54134C0.3125 10.2375 0.771 10.8127 1.36587 10.9038L1.53125 10.9163H24.2812C24.9543 10.9163 25.5 10.3007 25.5 9.54134C25.5 8.84523 25.0415 8.26994 24.4466 8.17889L24.2812 8.16634H1.53125Z" fill="#A44D8E"/>
                            <path d="M25.143 8.56907C24.7104 8.08091 24.0333 8.03654 23.5562 8.43594L23.4195 8.56907L16.9195 15.9024C16.4435 16.4394 16.4435 17.31 16.9195 17.8469C17.3521 18.3351 18.0292 18.3795 18.5063 17.9801L18.643 17.8469L25.143 10.5136C25.619 9.97664 25.619 9.10604 25.143 8.56907Z" fill="#A44D8E"/>
                            <path d="M18.643 1.23574C18.1671 0.698765 17.3954 0.698765 16.9195 1.23574C16.4868 1.72389 16.4474 2.48777 16.8015 3.02606L16.9195 3.18028L23.4195 10.5136C23.8954 11.0506 24.6671 11.0506 25.143 10.5136C25.5757 10.0255 25.6151 9.26157 25.261 8.72329L25.143 8.56907L18.643 1.23574Z" fill="#A44D8E"/>
                        </svg>
                    </a>
                </td>
                <td class="body-large">
                    <a href="#" class="link-icon link-external focus">
                        <span>Link</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5002 1.95831H13.1579L5.89155 9.2247L5.83104 9.2948C5.64949 9.53948 5.66966 9.8867 5.89155 10.1086C6.13563 10.3527 6.53136 10.3527 6.77544 10.1086L14.0418 2.8422V5.49998L14.0475 5.58479C14.0889 5.88985 14.3504 6.12498 14.6668 6.12498C15.012 6.12498 15.2918 5.84516 15.2918 5.49998V1.33331C15.2918 1.30518 15.2899 1.27704 15.2862 1.24912L15.2861 1.2485C15.2788 1.19462 15.2646 1.14292 15.2445 1.09431C15.2147 1.02231 15.171 0.954746 15.1131 0.895791L15.1039 0.886553C14.9912 0.776285 14.837 0.708313 14.6668 0.708313H14.6667H10.5002L10.4154 0.714019C10.1103 0.755404 9.87516 1.0169 9.87516 1.33331L9.88087 1.41812C9.92225 1.72318 10.1837 1.95831 10.5002 1.95831ZM7.79183 3.83331C7.79183 3.48813 7.51201 3.20831 7.16683 3.20831H3.00016L2.86056 3.21249C1.65992 3.28464 0.708496 4.2812 0.708496 5.49998V13L0.712678 13.1396C0.784826 14.3402 1.78139 15.2916 3.00016 15.2916H10.5002L10.6398 15.2875C11.8404 15.2153 12.7918 14.2188 12.7918 13V8.83331L12.7861 8.7485C12.7447 8.44344 12.4832 8.20831 12.1668 8.20831C11.8217 8.20831 11.5418 8.48813 11.5418 8.83331V13L11.5365 13.1065C11.4831 13.6318 11.0395 14.0416 10.5002 14.0416H3.00016L2.89366 14.0363C2.36839 13.9829 1.9585 13.5393 1.9585 13V5.49998L1.96387 5.39347C2.01722 4.86821 2.46082 4.45831 3.00016 4.45831H7.16683L7.25164 4.45261C7.5567 4.41122 7.79183 4.14973 7.79183 3.83331Z" fill="#3F3B3B"/>
                        </svg>
                    </a>
                </td>
                <td class="body-large">
                    <a href="#" class="link-icon link-secondary focus">
                        <span>Link</span>
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.53125 8.16634C0.858152 8.16634 0.3125 8.78195 0.3125 9.54134C0.3125 10.2375 0.771 10.8127 1.36587 10.9038L1.53125 10.9163H24.2812C24.9543 10.9163 25.5 10.3007 25.5 9.54134C25.5 8.84523 25.0415 8.26994 24.4466 8.17889L24.2812 8.16634H1.53125Z" fill="#A44D8E"/>
                            <path d="M25.143 8.56907C24.7104 8.08091 24.0333 8.03654 23.5562 8.43594L23.4195 8.56907L16.9195 15.9024C16.4435 16.4394 16.4435 17.31 16.9195 17.8469C17.3521 18.3351 18.0292 18.3795 18.5063 17.9801L18.643 17.8469L25.143 10.5136C25.619 9.97664 25.619 9.10604 25.143 8.56907Z" fill="#A44D8E"/>
                            <path d="M18.643 1.23574C18.1671 0.698765 17.3954 0.698765 16.9195 1.23574C16.4868 1.72389 16.4474 2.48777 16.8015 3.02606L16.9195 3.18028L23.4195 10.5136C23.8954 11.0506 24.6671 11.0506 25.143 10.5136C25.5757 10.0255 25.6151 9.26157 25.261 8.72329L25.143 8.56907L18.643 1.23574Z" fill="#A44D8E"/>
                        </svg>
                    </a>
                </td>
            </tr>
            <tr>
                <td class="row-heading">Disabled</td>
                <td class="body-large">
                    <a href="#" class="link-icon disabled">
                        <span>Link</span>
                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.53125 8.16634C0.858152 8.16634 0.3125 8.78195 0.3125 9.54134C0.3125 10.2375 0.771 10.8127 1.36587 10.9038L1.53125 10.9163H24.2812C24.9543 10.9163 25.5 10.3007 25.5 9.54134C25.5 8.84523 25.0415 8.26994 24.4466 8.17889L24.2812 8.16634H1.53125Z" fill="#A44D8E"/>
                            <path d="M25.143 8.56907C24.7104 8.08091 24.0333 8.03654 23.5562 8.43594L23.4195 8.56907L16.9195 15.9024C16.4435 16.4394 16.4435 17.31 16.9195 17.8469C17.3521 18.3351 18.0292 18.3795 18.5063 17.9801L18.643 17.8469L25.143 10.5136C25.619 9.97664 25.619 9.10604 25.143 8.56907Z" fill="#A44D8E"/>
                            <path d="M18.643 1.23574C18.1671 0.698765 17.3954 0.698765 16.9195 1.23574C16.4868 1.72389 16.4474 2.48777 16.8015 3.02606L16.9195 3.18028L23.4195 10.5136C23.8954 11.0506 24.6671 11.0506 25.143 10.5136C25.5757 10.0255 25.6151 9.26157 25.261 8.72329L25.143 8.56907L18.643 1.23574Z" fill="#A44D8E"/>
                        </svg>
                    </a>
                </td>
                <td class="body-large">
                    <a href="#" class="link-icon link-external disabled">
                        <span>Link</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5002 1.95831H13.1579L5.89155 9.2247L5.83104 9.2948C5.64949 9.53948 5.66966 9.8867 5.89155 10.1086C6.13563 10.3527 6.53136 10.3527 6.77544 10.1086L14.0418 2.8422V5.49998L14.0475 5.58479C14.0889 5.88985 14.3504 6.12498 14.6668 6.12498C15.012 6.12498 15.2918 5.84516 15.2918 5.49998V1.33331C15.2918 1.30518 15.2899 1.27704 15.2862 1.24912L15.2861 1.2485C15.2788 1.19462 15.2646 1.14292 15.2445 1.09431C15.2147 1.02231 15.171 0.954746 15.1131 0.895791L15.1039 0.886553C14.9912 0.776285 14.837 0.708313 14.6668 0.708313H14.6667H10.5002L10.4154 0.714019C10.1103 0.755404 9.87516 1.0169 9.87516 1.33331L9.88087 1.41812C9.92225 1.72318 10.1837 1.95831 10.5002 1.95831ZM7.79183 3.83331C7.79183 3.48813 7.51201 3.20831 7.16683 3.20831H3.00016L2.86056 3.21249C1.65992 3.28464 0.708496 4.2812 0.708496 5.49998V13L0.712678 13.1396C0.784826 14.3402 1.78139 15.2916 3.00016 15.2916H10.5002L10.6398 15.2875C11.8404 15.2153 12.7918 14.2188 12.7918 13V8.83331L12.7861 8.7485C12.7447 8.44344 12.4832 8.20831 12.1668 8.20831C11.8217 8.20831 11.5418 8.48813 11.5418 8.83331V13L11.5365 13.1065C11.4831 13.6318 11.0395 14.0416 10.5002 14.0416H3.00016L2.89366 14.0363C2.36839 13.9829 1.9585 13.5393 1.9585 13V5.49998L1.96387 5.39347C2.01722 4.86821 2.46082 4.45831 3.00016 4.45831H7.16683L7.25164 4.45261C7.5567 4.41122 7.79183 4.14973 7.79183 3.83331Z" fill="#3F3B3B"/>
                        </svg>
                    </a>
                </td>
                <td class="body-large">
                    <a href="#" class="link-icon link-secondary disabled">
                        <span>Link</span>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<PreviewLinks/>

```html
<div>HTML stuff</div>
```

## Link

Links are used in body copy and help users to move from one page to another. Buttons perform actions, whereas links help users to navigate through content on the site. 

**Elements**

In-text links use the action magenta colour from the primary colour palette.

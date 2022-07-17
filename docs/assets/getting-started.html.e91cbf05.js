import{_ as s,o as a,c as n,e as t}from"./app.434ce2b8.js";const e={},p=t(`<h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1> <h2 id="how-to-use-the-site" tabindex="-1"><a class="header-anchor" href="#how-to-use-the-site" aria-hidden="true">#</a> How to use the site</h2> <h2 id="conventions" tabindex="-1"><a class="header-anchor" href="#conventions" aria-hidden="true">#</a> Conventions</h2> <p>Within the styleguide site all content that should be styled as on industry.gov.au should have a parent with the <code>.doi-content</code> class.  All the styles for this are in <code>/src/.vuepress/doi-content</code>.</p> <p>Styles exclusive to the styleguide site itself are in <code>/src/.vuepress/styleguide</code></p> <h2 id="bundled-files" tabindex="-1"><a class="header-anchor" href="#bundled-files" aria-hidden="true">#</a> Bundled files</h2> <p>Are in the <code>/dist</code> directory</p> <h2 id="how-to-include-the-styles-and-js-dependencies" tabindex="-1"><a class="header-anchor" href="#how-to-include-the-styles-and-js-dependencies" aria-hidden="true">#</a> How to include the styles and js dependencies</h2> <p>When integrating the styleguide include the <code>app.css</code> and <code>app.js</code> files from the /dist directory ensuring that you include the other js dependencies before <code>app.js</code>.</p> <div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://ausgov.github.io/iga-design-system/dist/app.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://code.jquery.com/jquery-3.6.0.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/bootstrap-select.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/11.0.2/bootstrap-slider.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://ausgov.github.io/iga-design-system/dist/app.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="app.css">https://ausgov.github.io/iga-design-system/dist/app.css</a> <a href="app.js">https://ausgov.github.io/iga-design-system/dist/app.js</a></p>`,20),o=[p];function c(i,l){return a(),n("div",null,o)}var r=s(e,[["render",c],["__file","getting-started.html.vue"]]);export{r as default};
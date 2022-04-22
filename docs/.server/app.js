"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vueRouter = require("vue-router");
var vue = require("vue");
require("@vue/devtools-api");
var core = require("@vueuse/core");
var nprogress$1 = require("nprogress");
var serverRenderer = require("vue/server-renderer");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var nprogress__namespace = /* @__PURE__ */ _interopNamespace(nprogress$1);
const ClientOnly = vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const pagesComponents = {
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$5;
  })),
  "v-32e68ee0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return atoms_html$2;
  })),
  "v-58900206": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return colourPalette_html$2;
  })),
  "v-3599c490": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return icons_html$2;
  })),
  "v-a200cf0a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return instructions_html$2;
  })),
  "v-953546a4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return test_html$2;
  })),
  "v-be99661e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return typography_html$2;
  })),
  "v-1020f180": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$3;
  })),
  "v-c4dcb49c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return banners_html$2;
  })),
  "v-285a8fe0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return entityBar_html$2;
  })),
  "v-90a2bd7e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return filteredLandingPages_html$2;
  })),
  "v-438a7798": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return globalFooter_html$2;
  })),
  "v-44c8766b": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return homepage_html$2;
  })),
  "v-d3ea9508": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return inSection_html$2;
  })),
  "v-64129767": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return navigatePubs_html$2;
  })),
  "v-529917f6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return navigation_html$2;
  })),
  "v-33c149a9": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return onThisPage_html$2;
  })),
  "v-9b4793cc": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return outlierComponentsPagePatterns_html$2;
  })),
  "v-6e2ac232": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return publications_html$2;
  })),
  "v-55c84a05": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return secondaryFooter_html$2;
  })),
  "v-43819bd4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return standardNews_html$2;
  })),
  "v-2c7cab58": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return tables_html$2;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$2;
  }))
};
const pagesData$1 = {
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html$1;
  }).then(({ data: data2 }) => data2),
  "v-32e68ee0": () => Promise.resolve().then(function() {
    return atoms_html;
  }).then(({ data: data2 }) => data2),
  "v-58900206": () => Promise.resolve().then(function() {
    return colourPalette_html;
  }).then(({ data: data2 }) => data2),
  "v-3599c490": () => Promise.resolve().then(function() {
    return icons_html;
  }).then(({ data: data2 }) => data2),
  "v-a200cf0a": () => Promise.resolve().then(function() {
    return instructions_html;
  }).then(({ data: data2 }) => data2),
  "v-953546a4": () => Promise.resolve().then(function() {
    return test_html;
  }).then(({ data: data2 }) => data2),
  "v-be99661e": () => Promise.resolve().then(function() {
    return typography_html;
  }).then(({ data: data2 }) => data2),
  "v-1020f180": () => Promise.resolve().then(function() {
    return index_html;
  }).then(({ data: data2 }) => data2),
  "v-c4dcb49c": () => Promise.resolve().then(function() {
    return banners_html;
  }).then(({ data: data2 }) => data2),
  "v-285a8fe0": () => Promise.resolve().then(function() {
    return entityBar_html;
  }).then(({ data: data2 }) => data2),
  "v-90a2bd7e": () => Promise.resolve().then(function() {
    return filteredLandingPages_html;
  }).then(({ data: data2 }) => data2),
  "v-438a7798": () => Promise.resolve().then(function() {
    return globalFooter_html;
  }).then(({ data: data2 }) => data2),
  "v-44c8766b": () => Promise.resolve().then(function() {
    return homepage_html;
  }).then(({ data: data2 }) => data2),
  "v-d3ea9508": () => Promise.resolve().then(function() {
    return inSection_html;
  }).then(({ data: data2 }) => data2),
  "v-64129767": () => Promise.resolve().then(function() {
    return navigatePubs_html;
  }).then(({ data: data2 }) => data2),
  "v-529917f6": () => Promise.resolve().then(function() {
    return navigation_html;
  }).then(({ data: data2 }) => data2),
  "v-33c149a9": () => Promise.resolve().then(function() {
    return onThisPage_html;
  }).then(({ data: data2 }) => data2),
  "v-9b4793cc": () => Promise.resolve().then(function() {
    return outlierComponentsPagePatterns_html;
  }).then(({ data: data2 }) => data2),
  "v-6e2ac232": () => Promise.resolve().then(function() {
    return publications_html;
  }).then(({ data: data2 }) => data2),
  "v-55c84a05": () => Promise.resolve().then(function() {
    return secondaryFooter_html;
  }).then(({ data: data2 }) => data2),
  "v-43819bd4": () => Promise.resolve().then(function() {
    return standardNews_html;
  }).then(({ data: data2 }) => data2),
  "v-2c7cab58": () => Promise.resolve().then(function() {
    return tables_html;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html;
  }).then(({ data: data2 }) => data2)
};
const pagesData = vue.ref(pagesData$1);
const pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = vue.ref(pageDataEmpty);
const usePageData = () => pageData;
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const usePageFrontmatter = () => {
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const pageHeadTitleSymbol = Symbol("");
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const routeLocaleSymbol = Symbol("");
const useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const siteData$1 = {
  "base": "/DOI-Styleguide/",
  "lang": "en-US",
  "title": "Department of Industry",
  "description": "Department of Industry style guide.",
  "head": [],
  "locales": {}
};
const siteData = vue.ref(siteData$1);
const useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page = usePageData();
    key = page.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout;
  }))
};
process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
const dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
const isLinkMailto = (link) => /^mailto:/.test(link);
const isLinkTel = (link) => /^tel:/.test(link);
const isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
const removeEndingSlash = (str) => str.replace(/\/$/, "");
const removeLeadingSlash = (str) => str.replace(/^\//, "");
const resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
const withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${removeLeadingSlash(url)}`;
};
const resolvers = vue.reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver === null || pageDataResolver === void 0 ? void 0 : pageDataResolver());
    return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  resolvePageHeadTitle: (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`,
  resolvePageLang: (pageData2) => pageData2.lang || "en",
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  resolveSiteLocaleData: (site2, routeLocale) => __spreadValues(__spreadValues({}, site2), site2.locales[routeLocale])
});
var vars$3 = "";
var externalLinkIcon = "";
const svg = vue.h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = vue.defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = vue.computed(() => {
      var _a;
      return (_a = props.locales[routeLocale.value]) !== null && _a !== void 0 ? _a : {
        openInNewWindow: "open in new window"
      };
    });
    return () => vue.h("span", [
      svg,
      vue.h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = { "/": { "openInNewWindow": "open in new window" } };
var clientAppEnhance0 = defineClientAppEnhance(({ app }) => {
  app.component("ExternalLinkIcon", vue.h(ExternalLinkIcon, { locales }));
});
var vars$2 = "";
var mediumZoom = "";
var clientAppEnhance1 = defineClientAppEnhance(({ app, router }) => {
  return;
});
const themeData$1 = {
  "logo": "/images/diser-logo.svg",
  "logoDark": "/images/diser-logo.svg",
  "contributors": false,
  "search": true,
  "navbar": [
    {
      "text": "Home",
      "link": "/"
    },
    {
      "text": "Instructions",
      "link": "/instructions"
    },
    {
      "text": "Typography",
      "link": "/typography"
    },
    {
      "text": "Colour Palette",
      "link": "/colour-palette"
    },
    {
      "text": "Icons",
      "link": "/icons"
    },
    {
      "text": "Atoms",
      "link": "/atoms"
    },
    {
      "text": "Components",
      "link": "/components/",
      "children": [
        {
          "text": "Navigation",
          "link": "/components/navigation"
        },
        {
          "text": "Banners",
          "link": "/components/banners"
        },
        {
          "text": "Entity Bar",
          "link": "/components/entity-bar"
        },
        {
          "text": "In Section",
          "link": "/components/in-section"
        },
        {
          "text": "On this page",
          "link": "/components/on-this-page"
        },
        {
          "text": "Navigate (pubs)",
          "link": "/components/navigate-pubs"
        },
        {
          "text": "Secondary Footer",
          "link": "/components/secondary-footer"
        },
        {
          "text": "Global Footer",
          "link": "/components/global-footer"
        },
        {
          "text": "Publications",
          "link": "/components/publications"
        },
        {
          "text": "Standard + News",
          "link": "/components/standard-news"
        },
        {
          "text": "Filtered Landing Pages",
          "link": "/components/filtered-landing-pages"
        },
        {
          "text": "Outlier Components and Page Patterns",
          "link": "/components/outlier-components-page-patterns"
        },
        {
          "text": "Homepage",
          "link": "/components/homepage"
        },
        {
          "text": "Tables",
          "link": "/components/tables"
        }
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
};
const themeData = vue.ref(themeData$1);
const useThemeData = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a;
  return __spreadValues(__spreadValues({}, theme), (_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale]);
};
var clientAppEnhance2 = defineClientAppEnhance(({ app }) => {
  const themeData2 = useThemeData();
  const routeLocale = app._context.provides[routeLocaleSymbol];
  const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
});
const _sfc_main$W = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${serverRenderer.ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
var CodeGroup = vue.defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = vue.ref(-1);
    const tabRefs = vue.ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a;
      const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return vue.h("div", { class: "code-group" }, [
        vue.h("div", { class: "code-group__nav" }, vue.h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return vue.h("li", { class: "code-group__li" }, vue.h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const __default__$1 = vue.defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$V = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
}));
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = vue.inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = core.usePreferredDark();
  const darkStorage = core.useStorage("vuepress-color-scheme", "auto");
  const isDarkMode = vue.computed({
    get() {
      if (!themeLocale.value.darkMode) {
        return false;
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  vue.provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  vue.onMounted(() => {
    vue.watch(isDarkMode, update, { immediate: true });
  });
  vue.onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = vueRouter.useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(__spreadValues({
    hash: route.hash,
    query: route.query,
    params: route.params
  }, resolvedRedirectObj));
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(item);
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = vue.computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  vue.provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a, _b, _c, _d;
  const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) !== null && _c !== void 0 ? _c : themeLocale.sidebarDepth) !== null && _d !== void 0 ? _d : 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = vueRouter.useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a;
    let childItem;
    if (isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return __spreadProps(__spreadValues({}, childItem), {
        children: childItem.children.map((item2) => handleChildItem(item2))
      });
    }
    if (childItem.link === route.path) {
      const headers = ((_a = page.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return __spreadProps(__spreadValues({}, childItem), {
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      });
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a;
  const route = vueRouter.useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
var index = "";
var clientAppEnhance3 = defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", _sfc_main$W);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", _sfc_main$V);
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    if (SearchComponent) {
      return vue.h(SearchComponent);
    }
    return null;
  });
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
var clientAppEnhance4 = ({ app }) => {
  app.component("ArrowsList", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ArrowsList$1;
  }))), app.component("Card", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Card$1;
  }))), app.component("Cards", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Cards$1;
  }))), app.component("ColorTile", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ColorTile$1;
  }))), app.component("ColorTiles", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ColorTiles$1;
  }))), app.component("Columns", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Columns$1;
  }))), app.component("ImageMap", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ImageMap$1;
  }))), app.component("SubMenuCards", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return SubMenuCards;
  }))), app.component("TwoCards", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return TwoCards$1;
  })));
};
const _sfc_main$U = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = vue.computed(() => themeLocale.value.home || routeLocale.value);
    const navbarBrandTitle = vue.computed(() => siteLocale.value.title);
    const navbarBrandLogo = vue.computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = vue.h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, () => img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({ to: vue.unref(navbarBrandLink) }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavbarBrandLogo, null, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(NavbarBrandLogo)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../theme/components/NavbarBrand.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const __default__ = vue.defineComponent({
  inheritAttrs: false
});
const _sfc_main$T = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = vueRouter.useRoute();
    const site2 = useSiteData();
    const { item } = vue.toRefs(props);
    const hasHttpProtocol = vue.computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = vue.computed(() => isLinkMailto(item.value.link) || isLinkTel(item.value.link));
    const linkTarget = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const isRouterLink = vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      const localeKeys = Object.keys(site2.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = vue.computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = vue.computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
      if (vue.unref(isRouterLink)) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
          class: { "router-link-active": vue.unref(isActive) },
          to: vue.unref(item).link,
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              _push2(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
              serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "before"),
                vue.createTextVNode(" " + vue.toDisplayString(vue.unref(item).text) + " ", 1),
                vue.renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "external-link",
          href: vue.unref(item).link,
          rel: vue.unref(linkRel),
          target: vue.unref(linkTarget),
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        _push(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(isBlankTarget)) {
          _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
}));
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/AutoLink.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const _sfc_main$S = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const _sfc_main$R = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = vue.toRefs(props);
    const dropdownAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const open = vue.ref(false);
    const route = vueRouter.useRoute();
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["navbar-dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="navbar-dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="arrow down"></span></button><button class="navbar-dropdown-title-mobile" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="${serverRenderer.ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$S, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="navbar-dropdown"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
              _push2(`<li class="navbar-dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="navbar-dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$T, { item: child }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="navbar-dropdown-subitem"${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$T, { item: grandchild }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(serverRenderer.ssrRenderComponent(_sfc_main$T, { item: child }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              vue.withDirectives(vue.createVNode("ul", { class: "navbar-dropdown" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                  return vue.openBlock(), vue.createBlock("li", {
                    key: child.text,
                    class: "navbar-dropdown-item"
                  }, [
                    child.children ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                      vue.createVNode("h4", { class: "navbar-dropdown-subtitle" }, [
                        child.link ? (vue.openBlock(), vue.createBlock(_sfc_main$T, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(child.text), 1))
                      ]),
                      vue.createVNode("ul", { class: "navbar-dropdown-subitem-wrapper" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(child.children, (grandchild) => {
                          return vue.openBlock(), vue.createBlock("li", {
                            key: grandchild.link,
                            class: "navbar-dropdown-subitem"
                          }, [
                            vue.createVNode(_sfc_main$T, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (vue.openBlock(), vue.createBlock(_sfc_main$T, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [vue.vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarDropdown.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _sfc_main$Q = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unknown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = vue.computed(() => themeLocale.value.repo);
      const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = vue.computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = vue.computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return vue.computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return __spreadProps(__spreadValues({}, item), {
          children: item.children.map(resolveNavbarItem)
        });
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = vue.computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(navbarLinks).length) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "navbar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(navbarLinks), (item) => {
          _push(`<div class="navbar-item">`);
          if (item.link) {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$T, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$R, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../theme/components/NavbarItems.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const _sfc_main$P = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-dark-button",
        title: vue.unref(themeLocale).toggleDarkMode
      }, _attrs))}><svg style="${serverRenderer.ssrRenderStyle(!vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${serverRenderer.ssrRenderStyle(vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
});
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const _sfc_main$O = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-sidebar-button",
        title: vue.unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const _sfc_main$N = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = vue.ref(null);
    const navbarBrand = vue.ref(null);
    const linksWrapperMaxWidth = vue.ref(0);
    const linksWrapperStyle = vue.computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const enableDarkMode = vue.computed(() => themeLocale.value.darkMode);
    vue.onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavbarSearch = vue.resolveComponent("NavbarSearch");
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$O, null, null, _parent));
      _push(`<span>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$U, null, null, _parent));
      _push(`</span><div class="navbar-items-wrapper" style="${serverRenderer.ssrRenderStyle(vue.unref(linksWrapperStyle))}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$Q, { class: "can-hide" }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (vue.unref(enableDarkMode)) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$P, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const _sfc_main$M = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (vue.unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(serverRenderer.ssrRenderComponent(_sfc_main$T, {
          class: "meta-item-label",
          item: vue.unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).lastUpdatedText)}: </span>`);
        _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="meta-item-info"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(lastUpdated))}</span>`);
            } else {
              return [
                vue.createVNode("span", { class: "meta-item-info" }, vue.toDisplayString(vue.unref(lastUpdated)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(contributors) && vue.unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${serverRenderer.ssrRenderAttr("title", `email: ${contributor.email}`)}>${serverRenderer.ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== vue.unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const _sfc_main$L = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(prevNavLink) || vue.unref(nextNavLink)) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (vue.unref(prevNavLink)) {
          _push(`<span class="prev">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$T, { item: vue.unref(prevNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(nextNavLink)) {
          _push(`<span class="next">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$T, { item: vue.unref(nextNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const _sfc_main$K = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$M, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$L, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Page.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$J = {};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "c-page-header" }, _attrs))}><div class="content"><h1>${serverRenderer.ssrInterpolate(_ctx.$frontmatter.title)}</h1>`);
  if (_ctx.$frontmatter.description) {
    _push(`<p class="lead-text">${serverRenderer.ssrInterpolate(_ctx.$frontmatter.description)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../theme/components/PageHeader.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
var PageHeader = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$x]]);
const _sfc_main$I = {};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs) {
  _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "c-page-footer row" }, _attrs))}><div class="col-12 col-md-6 col-lg-8"><div class="theme-default-content"><h2>Feedback?</h2><p class="lead-text">We welcome all feedback, designs, or ideas in order to produce the best possible experience for our users. If you\u2019re interested in contributing, submit your ideas to the team.</p><a href="#">Contact the design system team</a></div></div></footer>`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../theme/components/PageFooter.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
var PageFooter = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$w]]);
const _sfc_main$H = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const route = vueRouter.useRoute();
    const shouldShowNavbar = vue.computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    vue.onMounted(() => {
      const router = vueRouter.useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    const shouldBeActiveInSubpath = (item) => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.link);
      }
      return item.value.link !== "/";
    };
    const isActiveInSubpath = (item) => {
      if (!shouldBeActiveInSubpath) {
        return false;
      }
      return route.path.startsWith(item.link);
    };
    const isActive = (child) => {
      if (child.activeMatch) {
        return new RegExp(child.activeMatch).test(route.path);
      }
      return isActiveInSubpath(child);
    };
    vue.computed(() => {
      for (const item of themeLocale.value.navbar) {
        if (item.children && isActive(item)) {
          return item;
        }
      }
      return null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-container" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$N, null, null, _parent));
      }, _push, _parent);
      _push(`<div class="content-container">`);
      if (_ctx.$frontmatter.pageHeader) {
        _push(serverRenderer.ssrRenderComponent(PageHeader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="row"><div class="d-none d-md-block col-md-3 col-lg-2"></div><div class="col-12 col-md-6 col-lg-8">`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$K, vue.mergeProps({
        key: vue.unref(page).path
      }, _attrs), null, _parent));
      _push(`</div><div class="d-none d-md-block col-md-3 col-lg-2"></div></div></div>`);
      _push(serverRenderer.ssrRenderComponent(PageFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../theme/layouts/ParentPage.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
var clientAppEnhance5 = defineClientAppEnhance(({ app }) => {
  app.component("ParentPage", _sfc_main$H);
});
const clientAppEnhances = [
  clientAppEnhance0,
  clientAppEnhance1,
  clientAppEnhance2,
  clientAppEnhance3,
  clientAppEnhance4,
  clientAppEnhance5
];
function r(r2, e, n) {
  var i, t, o;
  e === void 0 && (e = 50), n === void 0 && (n = {});
  var a = (i = n.isImmediate) != null && i, u = (t = n.callback) != null && t, c = n.maxWait, v = Date.now(), l = [];
  function f() {
    if (c !== void 0) {
      var r3 = Date.now() - v;
      if (r3 + e >= c)
        return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    o !== void 0 && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
var vars$1 = "";
var backToTop = "";
const BackToTop = vue.defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = vue.ref(0);
    const show = vue.computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    vue.onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = vue.h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => vue.h(vue.Transition, {
      name: "back-to-top"
    }, () => show.value ? backToTopEl : null);
  }
});
const clientAppRootComponents = [
  BackToTop
];
var clientAppSetup0 = defineClientAppSetup(() => {
  return;
});
var vars = "";
var nprogress = "";
const useNprogress = () => {
  vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    nprogress__namespace.configure({ showSpinner: false });
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress__namespace.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress__namespace.done();
    });
  });
};
var clientAppSetup1 = defineClientAppSetup(() => {
  useNprogress();
});
var clientAppSetup2 = defineClientAppSetup(() => {
  setupDarkMode();
  setupSidebarItems();
});
const clientAppSetups = [
  clientAppSetup0,
  clientAppSetup1,
  clientAppSetup2
];
const routeItems = [
  ["v-8daa1a0e", "/", { "title": "Industry.gov.au" }, ["/index.html", "/README.md"]],
  ["v-32e68ee0", "/atoms.html", { "title": "Atoms" }, ["/atoms", "/atoms.md"]],
  ["v-58900206", "/colour-palette.html", { "title": "Colour Palette" }, ["/colour-palette", "/colour-palette.md"]],
  ["v-3599c490", "/icons.html", { "title": "Icons" }, ["/icons", "/icons.md"]],
  ["v-a200cf0a", "/instructions.html", { "title": "Instructions" }, ["/instructions", "/instructions.md"]],
  ["v-953546a4", "/test.html", { "title": "Home" }, ["/test", "/test.md"]],
  ["v-be99661e", "/typography.html", { "title": "Typography" }, ["/typography", "/typography.md"]],
  ["v-1020f180", "/components/", { "title": "Components" }, ["/components/index.html", "/components/README.md"]],
  ["v-c4dcb49c", "/components/banners.html", { "title": "Banners" }, ["/components/banners", "/components/banners.md"]],
  ["v-285a8fe0", "/components/entity-bar.html", { "title": "Entity Bar" }, ["/components/entity-bar", "/components/entity-bar.md"]],
  ["v-90a2bd7e", "/components/filtered-landing-pages.html", { "title": "" }, ["/components/filtered-landing-pages", "/components/filtered-landing-pages.md"]],
  ["v-438a7798", "/components/global-footer.html", { "title": "" }, ["/components/global-footer", "/components/global-footer.md"]],
  ["v-44c8766b", "/components/homepage.html", { "title": "" }, ["/components/homepage", "/components/homepage.md"]],
  ["v-d3ea9508", "/components/in-section.html", { "title": "" }, ["/components/in-section", "/components/in-section.md"]],
  ["v-64129767", "/components/navigate-pubs.html", { "title": "" }, ["/components/navigate-pubs", "/components/navigate-pubs.md"]],
  ["v-529917f6", "/components/navigation.html", { "title": "Navigation" }, ["/components/navigation", "/components/navigation.md"]],
  ["v-33c149a9", "/components/on-this-page.html", { "title": "" }, ["/components/on-this-page", "/components/on-this-page.md"]],
  ["v-9b4793cc", "/components/outlier-components-page-patterns.html", { "title": "" }, ["/components/outlier-components-page-patterns", "/components/outlier-components-page-patterns.md"]],
  ["v-6e2ac232", "/components/publications.html", { "title": "" }, ["/components/publications", "/components/publications.md"]],
  ["v-55c84a05", "/components/secondary-footer.html", { "title": "" }, ["/components/secondary-footer", "/components/secondary-footer.md"]],
  ["v-43819bd4", "/components/standard-news.html", { "title": "" }, ["/components/standard-news", "/components/standard-news.md"]],
  ["v-2c7cab58", "/components/tables.html", { "title": "" }, ["/components/tables", "/components/tables.md"]],
  ["v-3706649a", "/404.html", { "title": "" }, ["/404"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
const historyCreator = vueRouter.createMemoryHistory;
const createVueRouter = () => {
  const router = vueRouter.createRouter({
    history: historyCreator(removeEndingSlash(siteData.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  return router;
};
const setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const setupGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolvers.resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvers.resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = vue.computed(() => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvers.resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvers.resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
const setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const appCreator = vue.createSSRApp;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => vue.h(comp))
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
const _sfc_main$G = {};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs) {
  const _component_Cards = vue.resolveComponent("Cards");
  const _component_ArrowsList = vue.resolveComponent("ArrowsList");
  const _component_Columns = vue.resolveComponent("Columns");
  _push(`<!--[--><h2 id="about-our-design-system" tabindex="-1"><a class="header-anchor" href="#about-our-design-system" aria-hidden="true">#</a> About our design system</h2><p class="h4 fw-normal">Our digital front door guides users through an integrated and accessible experience, providing context to the breadth of news, stories, achievements, and engagement opportunities.</p><p class="h4 fw-normal">This modular approach brings to life our information architecture that prioritises critical and timely information, while also presenting information according to user needs and interests.</p>`);
  _push(serverRenderer.ssrRenderComponent(_component_Cards, { contents: [
    { image: "", title: "Foundations", linkUrl: "#", linkText: "Link" },
    { image: "", title: "Foundations", linkUrl: "#", linkText: "Link" },
    { image: "", title: "Foundations", linkUrl: "#", linkText: "Link" }
  ] }, null, _parent));
  _push(`<h2 id="principles" tabindex="-1"><a class="header-anchor" href="#principles" aria-hidden="true">#</a> Principles</h2><p>Our design system is consistent, but flexible; integrated, but modular. Integrated to optimise page patterns for particular purposes and modular to meet various user needs. As our department and our work evolves we can more easily introduce new patterns or combine them in new ways.</p><p class="h3">Our six governance principles from the website governance framework</p><p>We incorporate the six principles in our design system:</p>`);
  _push(serverRenderer.ssrRenderComponent(_component_ArrowsList, { lists: [
    "Information integrity",
    "Content management",
    "User focus",
    "Digital first",
    "Accessibility",
    "Readability"
  ] }, null, _parent));
  _push(`<p class="h3">How this translates to our design system</p><p class="fw-semi-bold">To visually capture these six principles, we\u2019ve defined key design system principles:</p>`);
  _push(serverRenderer.ssrRenderComponent(_component_Columns, { contents: [
    { title: "People First", text: "Our UI has no needless parts. Each element contributes to an accessible, scalable experience.<br/><br/>We place critical information in the use's focus and guide them with hierarchy and curation, using intuitive text styles, interactions, component designs, and page patterns." },
    { title: "Interconnected", text: "Our design system connects relevant, topic-based content with contextual navigation patterns and integrated hierarchy.<br/><br/>Hub, topic and sub-topic pages relate content and allow users to self-select, drill further into information, and discover interests along the way." },
    { title: "Transparent", text: "Our page patterns emphasise critical information, then contextually weave in news, publications, and events.<br/><br/>We curate related content through modular cards and offer users intuitive navigation patterns to search for and explore topics of interest." }
  ] }, null, _parent));
  _push(`<h2 id="related-links" tabindex="-1"><a class="header-anchor" href="#related-links" aria-hidden="true">#</a> Related Links</h2><p>Australian Government style manual</p><p><a href="#">How people find information</a></p><!--]-->`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.html.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
var index_html$4 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$v]]);
var index_html$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$F = {};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "atoms",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#atoms" aria-hidden="true">#</a> Atoms</h2>`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/atoms.html.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
var atoms_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$u]]);
var atoms_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": atoms_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = {};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "colour-palette",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#colour-palette" aria-hidden="true">#</a> Colour Palette</h2>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/colour-palette.html.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var colourPalette_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$t]]);
var colourPalette_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": colourPalette_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$D = {};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "icons",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#icons" aria-hidden="true">#</a> Icons</h2>`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/icons.html.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var icons_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$s]]);
var icons_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": icons_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$C = {};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "instructions",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h2>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/instructions.html.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var instructions_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$r]]);
var instructions_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": instructions_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = {};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs) {
  const _component_CodeGroup = vue.resolveComponent("CodeGroup");
  const _component_CodeGroupItem = vue.resolveComponent("CodeGroupItem");
  _push(`<!--[--><h1 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h2 id="this-is-a-heading" tabindex="-1"><a class="header-anchor" href="#this-is-a-heading" aria-hidden="true">#</a> This is a heading</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This is a tip</p></div><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p><details class="custom-container details"><summary>Click me to view the code</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, Styleguide!&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p><h2 id="codegroup-heading" tabindex="-1"><a class="header-anchor" href="#codegroup-heading" aria-hidden="true">#</a> Codegroup heading</h2>`);
  _push(serverRenderer.ssrRenderComponent(_component_CodeGroup, null, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "HTML" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-html ext-html line-numbers-mode"${_scopeId2}><pre class="language-html"${_scopeId2}><code${_scopeId2}><span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>p</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>Some random html<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>p</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>ul</span> <span class="token attr-name"${_scopeId2}>class</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>ul<span class="token punctuation"${_scopeId2}>&quot;</span></span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
    <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>li</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>A list<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>li</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>ul</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>pre</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>This is code<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>pre</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}><span class="line-number"${_scopeId2}>3</span><br${_scopeId2}><span class="line-number"${_scopeId2}>4</span><br${_scopeId2}><span class="line-number"${_scopeId2}>5</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-html ext-html line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-html" }, [
                    vue.createVNode("code", null, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("p")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("Some random html"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("p")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("ul")
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "class"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("ul"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("li")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("A list"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("li")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("ul")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("pre")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("This is code"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("pre")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n")
                    ])
                  ]),
                  vue.createVNode("div", {
                    class: "line-numbers",
                    "aria-hidden": "true"
                  }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "3"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "4"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "5"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, {
          title: "JS",
          active: ""
        }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-javascript ext-js"${_scopeId2}><pre class="language-javascript"${_scopeId2}><code${_scopeId2}>console<span class="token punctuation"${_scopeId2}>.</span><span class="token function"${_scopeId2}>log</span><span class="token punctuation"${_scopeId2}>(</span><span class="token string"${_scopeId2}>&#39;Hello, Styleguide!&#39;</span><span class="token punctuation"${_scopeId2}>)</span>
</code></pre></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-javascript ext-js" }, [
                  vue.createVNode("pre", { class: "language-javascript" }, [
                    vue.createVNode("code", null, [
                      vue.createTextVNode("console"),
                      vue.createVNode("span", { class: "token punctuation" }, "."),
                      vue.createVNode("span", { class: "token function" }, "log"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token string" }, "'Hello, Styleguide!'"),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createTextVNode("\n")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_CodeGroupItem, { title: "HTML" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-html ext-html line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-html" }, [
                  vue.createVNode("code", null, [
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("p")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("Some random html"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("p")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("ul")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "class"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("ul"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("li")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("A list"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("li")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("ul")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("pre")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("This is code"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("pre")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("div", {
                  class: "line-numbers",
                  "aria-hidden": "true"
                }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "3"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "4"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "5"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          }),
          vue.createVNode(_component_CodeGroupItem, {
            title: "JS",
            active: ""
          }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-javascript ext-js" }, [
                vue.createVNode("pre", { class: "language-javascript" }, [
                  vue.createVNode("code", null, [
                    vue.createTextVNode("console"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "log"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token string" }, "'Hello, Styleguide!'"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n")
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h2 id="test-heading" tabindex="-1"><a class="header-anchor" href="#test-heading" aria-hidden="true">#</a> Test heading</h2><h3 id="this-is-a-bootstrap-table" tabindex="-1"><a class="header-anchor" href="#this-is-a-bootstrap-table" aria-hidden="true">#</a> This is a bootstrap table</h3><div><table class="table table-light table-striped"><thead><tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr></thead><tbody><tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr></tbody></table></div><!--]-->`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/test.html.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var test_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$q]]);
var test_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": test_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$A = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  const _component_ColorTiles = vue.resolveComponent("ColorTiles");
  _push(`<!--[-->`);
  _push(serverRenderer.ssrRenderComponent(_component_ColorTiles, null, null, _parent));
  _push(`<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><p class="subheading">Sub Heading</p><p class="fw-semi-bold">Paragraph Semi-Bold</p><p>Paragraph</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium.</p><!--]-->`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/typography.html.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var typography_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$p]]);
var typography_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": typography_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
  const _component_TwoCards = vue.resolveComponent("TwoCards");
  const _component_SubMenuCards = vue.resolveComponent("SubMenuCards");
  const _component_ImageMap = vue.resolveComponent("ImageMap");
  const _component_CodeGroup = vue.resolveComponent("CodeGroup");
  const _component_CodeGroupItem = vue.resolveComponent("CodeGroupItem");
  _push(`<!--[--><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium.</p>`);
  _push(serverRenderer.ssrRenderComponent(_component_TwoCards, { contents: [
    { title: "When to use", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium." },
    { title: "When not to use", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium." }
  ] }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_SubMenuCards, null, null, _parent));
  _push(`<p>`);
  _push(serverRenderer.ssrRenderComponent(_component_ImageMap, {
    image: _ctx.$withBase("/images/map-sample.png"),
    contents: [
      { x: 4, y: 8.5, title: "Breadcrumbs", text: "A breadcrumb, showing the navigation history." },
      { x: 4, y: 20, title: "Heading (sub-topic title)", text: "A direct, short title focused on the main action the user will complete on the page." }
    ]
  }, null, _parent));
  _push(`</p><h2 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> Table</h2><div><table class="table"><thead class="table-light"><tr><th scope="col">#</th><th scope="col">Table Header</th><th scope="col">Table Header</th></tr></thead><tbody><tr><th scope="row">1</th><td>Table Body</td><td>Table Body</td></tr><tr><th scope="row">2</th><td>Table Body</td><td>Table Body</td></tr></tbody></table></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2>`);
  _push(serverRenderer.ssrRenderComponent(_component_CodeGroup, null, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "HTML" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-html ext-html line-numbers-mode"${_scopeId2}><pre class="language-html"${_scopeId2}><code${_scopeId2}><span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>p</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>Some random html<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>p</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>ul</span> <span class="token attr-name"${_scopeId2}>class</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>ul<span class="token punctuation"${_scopeId2}>&quot;</span></span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
  <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>li</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>A list<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>li</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>ul</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>pre</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>This is code<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>pre</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}><span class="line-number"${_scopeId2}>3</span><br${_scopeId2}><span class="line-number"${_scopeId2}>4</span><br${_scopeId2}><span class="line-number"${_scopeId2}>5</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-html ext-html line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-html" }, [
                    vue.createVNode("code", null, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("p")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("Some random html"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("p")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("ul")
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "class"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("ul"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("li")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("A list"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("li")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("ul")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("pre")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("This is code"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("pre")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n")
                    ])
                  ]),
                  vue.createVNode("div", {
                    class: "line-numbers",
                    "aria-hidden": "true"
                  }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "3"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "4"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "5"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, {
          title: "JS",
          active: ""
        }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-javascript ext-js"${_scopeId2}><pre class="language-javascript"${_scopeId2}><code${_scopeId2}>console<span class="token punctuation"${_scopeId2}>.</span><span class="token function"${_scopeId2}>log</span><span class="token punctuation"${_scopeId2}>(</span><span class="token string"${_scopeId2}>&#39;Hello, Styleguide!&#39;</span><span class="token punctuation"${_scopeId2}>)</span>
</code></pre></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-javascript ext-js" }, [
                  vue.createVNode("pre", { class: "language-javascript" }, [
                    vue.createVNode("code", null, [
                      vue.createTextVNode("console"),
                      vue.createVNode("span", { class: "token punctuation" }, "."),
                      vue.createVNode("span", { class: "token function" }, "log"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token string" }, "'Hello, Styleguide!'"),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createTextVNode("\n")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_CodeGroupItem, { title: "HTML" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-html ext-html line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-html" }, [
                  vue.createVNode("code", null, [
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("p")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("Some random html"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("p")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("ul")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "class"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("ul"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("li")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("A list"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("li")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("ul")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("pre")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("This is code"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("pre")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("div", {
                  class: "line-numbers",
                  "aria-hidden": "true"
                }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "3"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "4"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "5"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          }),
          vue.createVNode(_component_CodeGroupItem, {
            title: "JS",
            active: ""
          }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-javascript ext-js" }, [
                vue.createVNode("pre", { class: "language-javascript" }, [
                  vue.createVNode("code", null, [
                    vue.createTextVNode("console"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "log"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token string" }, "'Hello, Styleguide!'"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n")
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/index.html.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var index_html$2 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$o]]);
var index_html$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "banners",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#banners" aria-hidden="true">#</a> Banners</h2>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/banners.html.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var banners_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$n]]);
var banners_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": banners_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "entity-bar",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#entity-bar" aria-hidden="true">#</a> Entity Bar</h2>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/entity-bar.html.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var entityBar_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$m]]);
var entityBar_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": entityBar_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "filtered-landing-pages",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#filtered-landing-pages" aria-hidden="true">#</a> Filtered Landing Pages</h2>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/filtered-landing-pages.html.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var filteredLandingPages_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$l]]);
var filteredLandingPages_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": filteredLandingPages_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "global-footer",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#global-footer" aria-hidden="true">#</a> Global Footer</h2>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/global-footer.html.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var globalFooter_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$k]]);
var globalFooter_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": globalFooter_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "homepage",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#homepage" aria-hidden="true">#</a> Homepage</h2>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/homepage.html.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var homepage_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$j]]);
var homepage_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": homepage_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "in-section",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#in-section" aria-hidden="true">#</a> In Section</h2>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/in-section.html.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var inSection_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$i]]);
var inSection_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": inSection_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "navigate-pubs",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#navigate-pubs" aria-hidden="true">#</a> Navigate (pubs)</h2>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/navigate-pubs.html.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var navigatePubs_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$h]]);
var navigatePubs_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": navigatePubs_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "navigation",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#navigation" aria-hidden="true">#</a> Navigation</h2>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/navigation.html.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var navigation_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$g]]);
var navigation_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": navigation_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "on-this-page",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#on-this-page" aria-hidden="true">#</a> On this page</h2>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/on-this-page.html.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var onThisPage_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$f]]);
var onThisPage_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": onThisPage_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "outlier-components-and-page-patterns",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#outlier-components-and-page-patterns" aria-hidden="true">#</a> Outlier Components and Page Patterns</h2>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/outlier-components-page-patterns.html.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var outlierComponentsPagePatterns_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$e]]);
var outlierComponentsPagePatterns_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": outlierComponentsPagePatterns_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "publications",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#publications" aria-hidden="true">#</a> Publications</h2>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/publications.html.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var publications_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$d]]);
var publications_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": publications_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "secondary-footer",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#secondary-footer" aria-hidden="true">#</a> Secondary Footer</h2>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/secondary-footer.html.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var secondaryFooter_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$c]]);
var secondaryFooter_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": secondaryFooter_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "standard-news",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#standard-news" aria-hidden="true">#</a> Standard News</h2>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/standard-news.html.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var standardNews_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$b]]);
var standardNews_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": standardNews_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<h2${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "tables",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#tables" aria-hidden="true">#</a> Tables</h2>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/components/tables.html.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var tables_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$a]]);
var tables_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": tables_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/404.html.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var _404_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$9]]);
var _404_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404_html$1
}, Symbol.toStringTag, { value: "Module" }));
const data$m = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Industry.gov.au",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Industry.gov.au",
    "description": "Our design system is made from interconnected patterns of repeating elements that combine to create a cohesive experience.",
    "pageHeader": true
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "About our design system",
      "slug": "about-our-design-system",
      "children": []
    },
    {
      "level": 2,
      "title": "Principles",
      "slug": "principles",
      "children": []
    },
    {
      "level": 2,
      "title": "Related Links",
      "slug": "related-links",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1650502701e3
  },
  "filePathRelative": "README.md"
};
var index_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$m
}, Symbol.toStringTag, { value: "Module" }));
const data$l = {
  "key": "v-32e68ee0",
  "path": "/atoms.html",
  "title": "Atoms",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Atoms",
    "description": "Description of the atoms page",
    "pageHeader": true
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Atoms",
      "slug": "atoms",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649918072e3
  },
  "filePathRelative": "atoms.md"
};
var atoms_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$l
}, Symbol.toStringTag, { value: "Module" }));
const data$k = {
  "key": "v-58900206",
  "path": "/colour-palette.html",
  "title": "Colour Palette",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Colour Palette",
    "description": "Description of the colour palette page",
    "pageHeader": true
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Colour Palette",
      "slug": "colour-palette",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649918072e3
  },
  "filePathRelative": "colour-palette.md"
};
var colourPalette_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$k
}, Symbol.toStringTag, { value: "Module" }));
const data$j = {
  "key": "v-3599c490",
  "path": "/icons.html",
  "title": "Icons",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Icons",
    "description": "Description of the icons page",
    "pageHeader": true
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Icons",
      "slug": "icons",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649918072e3
  },
  "filePathRelative": "icons.md"
};
var icons_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$j
}, Symbol.toStringTag, { value: "Module" }));
const data$i = {
  "key": "v-a200cf0a",
  "path": "/instructions.html",
  "title": "Instructions",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Instructions",
    "description": "Description of the instructions page",
    "pageHeader": true
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Instructions",
      "slug": "instructions",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649918072e3
  },
  "filePathRelative": "instructions.md"
};
var instructions_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$i
}, Symbol.toStringTag, { value: "Module" }));
const data$h = {
  "key": "v-953546a4",
  "path": "/test.html",
  "title": "Home",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Home",
    "description": "Description of the home page",
    "pageHeader": true
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "This is a heading",
      "slug": "this-is-a-heading",
      "children": []
    },
    {
      "level": 2,
      "title": "Codegroup heading",
      "slug": "codegroup-heading",
      "children": []
    },
    {
      "level": 2,
      "title": "Test heading",
      "slug": "test-heading",
      "children": [
        {
          "level": 3,
          "title": "This is a bootstrap table",
          "slug": "this-is-a-bootstrap-table",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1650502701e3
  },
  "filePathRelative": "test.md"
};
var test_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$h
}, Symbol.toStringTag, { value: "Module" }));
const data$g = {
  "key": "v-be99661e",
  "path": "/typography.html",
  "title": "Typography",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Typography",
    "description": "Description of the typography page",
    "pageHeader": true
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649918072e3
  },
  "filePathRelative": "typography.md"
};
var typography_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$g
}, Symbol.toStringTag, { value: "Module" }));
const data$f = {
  "key": "v-1020f180",
  "path": "/components/",
  "title": "Components",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Components",
    "description": "Description of the components page",
    "pageHeader": true,
    "layout": "ParentPage"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Overview",
      "slug": "overview",
      "children": []
    },
    {
      "level": 2,
      "title": "Table",
      "slug": "table",
      "children": []
    },
    {
      "level": 2,
      "title": "Demo",
      "slug": "demo",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1650502701e3
  },
  "filePathRelative": "components/README.md"
};
var index_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$f
}, Symbol.toStringTag, { value: "Module" }));
const data$e = {
  "key": "v-c4dcb49c",
  "path": "/components/banners.html",
  "title": "Banners",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Banners",
    "description": "Description of the page",
    "pageHeader": true
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Banners",
      "slug": "banners",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1650337885e3
  },
  "filePathRelative": "components/banners.md"
};
var banners_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$e
}, Symbol.toStringTag, { value: "Module" }));
const data$d = {
  "key": "v-285a8fe0",
  "path": "/components/entity-bar.html",
  "title": "Entity Bar",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Entity Bar",
    "description": "Description of the page",
    "pageHeader": true
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Entity Bar",
      "slug": "entity-bar",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 165033935e4
  },
  "filePathRelative": "components/entity-bar.md"
};
var entityBar_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$d
}, Symbol.toStringTag, { value: "Module" }));
const data$c = {
  "key": "v-90a2bd7e",
  "path": "/components/filtered-landing-pages.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Filtered Landing Pages",
      "slug": "filtered-landing-pages",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 165033935e4
  },
  "filePathRelative": "components/filtered-landing-pages.md"
};
var filteredLandingPages_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$c
}, Symbol.toStringTag, { value: "Module" }));
const data$b = {
  "key": "v-438a7798",
  "path": "/components/global-footer.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Global Footer",
      "slug": "global-footer",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 165033935e4
  },
  "filePathRelative": "components/global-footer.md"
};
var globalFooter_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$b
}, Symbol.toStringTag, { value: "Module" }));
const data$a = {
  "key": "v-44c8766b",
  "path": "/components/homepage.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Homepage",
      "slug": "homepage",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 165033935e4
  },
  "filePathRelative": "components/homepage.md"
};
var homepage_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$a
}, Symbol.toStringTag, { value: "Module" }));
const data$9 = {
  "key": "v-d3ea9508",
  "path": "/components/in-section.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "In Section",
      "slug": "in-section",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 165033935e4
  },
  "filePathRelative": "components/in-section.md"
};
var inSection_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$9
}, Symbol.toStringTag, { value: "Module" }));
const data$8 = {
  "key": "v-64129767",
  "path": "/components/navigate-pubs.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Navigate (pubs)",
      "slug": "navigate-pubs",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 165033935e4
  },
  "filePathRelative": "components/navigate-pubs.md"
};
var navigatePubs_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$8
}, Symbol.toStringTag, { value: "Module" }));
const data$7 = {
  "key": "v-529917f6",
  "path": "/components/navigation.html",
  "title": "Navigation",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Navigation",
    "description": "Description of the page",
    "pageHeader": true
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Navigation",
      "slug": "navigation",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1650337885e3
  },
  "filePathRelative": "components/navigation.md"
};
var navigation_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$7
}, Symbol.toStringTag, { value: "Module" }));
const data$6 = {
  "key": "v-33c149a9",
  "path": "/components/on-this-page.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "On this page",
      "slug": "on-this-page",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 165033935e4
  },
  "filePathRelative": "components/on-this-page.md"
};
var onThisPage_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$6
}, Symbol.toStringTag, { value: "Module" }));
const data$5 = {
  "key": "v-9b4793cc",
  "path": "/components/outlier-components-page-patterns.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Outlier Components and Page Patterns",
      "slug": "outlier-components-and-page-patterns",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 165033935e4
  },
  "filePathRelative": "components/outlier-components-page-patterns.md"
};
var outlierComponentsPagePatterns_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$5
}, Symbol.toStringTag, { value: "Module" }));
const data$4 = {
  "key": "v-6e2ac232",
  "path": "/components/publications.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Publications",
      "slug": "publications",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 165033935e4
  },
  "filePathRelative": "components/publications.md"
};
var publications_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$4
}, Symbol.toStringTag, { value: "Module" }));
const data$3 = {
  "key": "v-55c84a05",
  "path": "/components/secondary-footer.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Secondary Footer",
      "slug": "secondary-footer",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 165033935e4
  },
  "filePathRelative": "components/secondary-footer.md"
};
var secondaryFooter_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$3
}, Symbol.toStringTag, { value: "Module" }));
const data$2 = {
  "key": "v-43819bd4",
  "path": "/components/standard-news.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Standard News",
      "slug": "standard-news",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 165033935e4
  },
  "filePathRelative": "components/standard-news.md"
};
var standardNews_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$2
}, Symbol.toStringTag, { value: "Module" }));
const data$1 = {
  "key": "v-2c7cab58",
  "path": "/components/tables.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Tables",
      "slug": "tables",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 165033935e4
  },
  "filePathRelative": "components/tables.md"
};
var tables_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$1
}, Symbol.toStringTag, { value: "Module" }));
const data = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "layout": "404"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": null
};
var _404_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-container" }, _attrs))}><div class="theme-default-content"><h1>404</h1><blockquote>${serverRenderer.ssrInterpolate(getMsg())}</blockquote>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: vue.unref(homeLink) }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(vue.unref(homeText))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(vue.unref(homeText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/404.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$j
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_Content = vue.resolveComponent("Content");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-default-content custom" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeContent.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = vue.computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(features).length) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "features" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(features), (feature) => {
          _push(`<div class="feature"><h2>${serverRenderer.ssrInterpolate(feature.title)}</h2><p>${serverRenderer.ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFeatures.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = vue.computed(() => frontmatter.value.footer);
    const footerHtml = vue.computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(footer)) {
        _push(`<!--[-->`);
        if (vue.unref(footerHtml)) {
          _push(`<div class="footer">${vue.unref(footer)}</div>`);
        } else {
          _push(`<div class="footer">${serverRenderer.ssrInterpolate(vue.unref(footer))}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFooter.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = vue.computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroText = vue.computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = vue.computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = vue.computed(() => {
      if (!isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value)
        return null;
      const img = vue.h("img", {
        src: withBase(heroImage.value),
        alt: heroAlt.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, () => img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hero" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(HomeHeroImage, null, null, _parent));
      if (vue.unref(heroText)) {
        _push(`<h1 id="main-title">${serverRenderer.ssrInterpolate(vue.unref(heroText))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(tagline)) {
        _push(`<p class="description">${serverRenderer.ssrInterpolate(vue.unref(tagline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(actions).length) {
        _push(`<p class="actions"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(actions), (action) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$T, {
            key: action.text,
            class: ["action-button", [action.type]],
            item: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeHero.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "home" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$f, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(HomeContent, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$g, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Home.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = vue.toRefs(props);
    const route = vueRouter.useRoute();
    const router = vueRouter.useRouter();
    const isActive = vue.computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = vue.computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpen = vue.ref(true);
    const onClick = vue.ref(void 0);
    if (item.value.collapsible) {
      isOpen.value = isActive.value;
      onClick.value = () => {
        isOpen.value = !isOpen.value;
      };
      router.afterEach(() => {
        isOpen.value = isActive.value;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SidebarItem = vue.resolveComponent("SidebarItem", true);
      _push(`<li${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (vue.unref(item).link) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$T, {
          class: vue.unref(itemClass),
          item: vue.unref(item)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if ((_a = vue.unref(item).children) == null ? void 0 : _a.length) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$S, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${serverRenderer.ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="sidebar-item-children"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
                _push2(serverRenderer.ssrRenderComponent(_component_SidebarItem, {
                  key: `${vue.unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: vue.unref(depth) + 1
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                vue.withDirectives(vue.createVNode("ul", { class: "sidebar-item-children" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                    return vue.openBlock(), vue.createBlock(_component_SidebarItem, {
                      key: `${vue.unref(depth)}${child.text}${child.link}`,
                      item: child,
                      depth: vue.unref(depth) + 1
                    }, null, 8, ["item", "depth"]);
                  }), 128))
                ], 512), [
                  [vue.vShow, isOpen.value]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../theme/components/SidebarItem.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarItems = useSidebarItems();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(sidebarItems).length) {
        _push(`<ul${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(sidebarItems), (item) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$d, {
            key: item.link || item.text,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItems.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar" }, _attrs))}><div class="subtitle">On This Page</div>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$Q, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../theme/components/SidebarPageSections.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unknown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = vue.computed(() => themeLocale.value.repo);
      const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = vue.computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = vue.computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return vue.computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return __spreadProps(__spreadValues({}, item), {
          children: item.children.map(resolveNavbarItem)
        });
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = vue.computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    const route = vueRouter.useRoute();
    const site2 = useSiteData();
    const hasHttpProtocol = (item) => isLinkHttp(item.link);
    const hasNonHttpProtocol = (item) => isLinkMailto(item.link) || isLinkTel(item.link);
    const linkTarget = (item) => {
      if (hasNonHttpProtocol(item))
        return void 0;
      if (item.target)
        return item.target;
      if (hasHttpProtocol(item))
        return "_blank";
      return void 0;
    };
    const isBlankTarget = (item) => linkTarget(item) === "_blank";
    const isRouterLink = (child) => !hasHttpProtocol(child) && !hasNonHttpProtocol(child) && !isBlankTarget(child);
    const shouldBeActiveInSubpath = (item) => {
      const localeKeys = Object.keys(site2.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.link);
      }
      return item.value.link !== "/";
    };
    const isActiveInSubpath = (item) => {
      if (!shouldBeActiveInSubpath) {
        return false;
      }
      return route.path.startsWith(item.link);
    };
    const isActive = (child) => {
      if (!isRouterLink(child)) {
        return false;
      }
      if (child.activeMatch) {
        return new RegExp(child.activeMatch).test(route.path);
      }
      return isActiveInSubpath(child);
    };
    const activeItem = vue.computed(() => {
      for (const item of navbarLinks.value) {
        if (!item.children) {
          continue;
        }
        for (const child of item.children) {
          if (isActive(child)) {
            return item;
          }
          if (!isRouterLink(child)) {
            continue;
          }
          if (item.activeMatch) {
            if (new RegExp(item.activeMatch).test(child.path)) {
              return item;
            }
            continue;
          }
          if (isActiveInSubpath(child)) {
            return item;
          }
        }
        if (item.children && isActive(item)) {
          return item;
        }
      }
      return null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar" }, _attrs))}>`);
      if (vue.unref(activeItem)) {
        _push(`<ul class="sidebar-items"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(activeItem).children, (child) => {
          _push(`<li class="navbar-dropdown-item">`);
          if (child.children) {
            _push(`<!--[--><h4 class="navbar-dropdown-subtitle">`);
            if (child.link) {
              _push(serverRenderer.ssrRenderComponent(_sfc_main$T, { item: child }, null, _parent));
            } else {
              _push(`<span>${serverRenderer.ssrInterpolate(child.text)}</span>`);
            }
            _push(`</h4><ul class="navbar-dropdown-subitem-wrapper"><!--[-->`);
            serverRenderer.ssrRenderList(child.children, (grandchild) => {
              _push(`<li class="navbar-dropdown-subitem">`);
              _push(serverRenderer.ssrRenderComponent(_sfc_main$T, { item: grandchild }, null, _parent));
              _push(`</li>`);
            });
            _push(`<!--]--></ul><!--]-->`);
          } else {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$T, { item: child }, null, _parent));
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../theme/components/SidebarSubMenu.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = vue.computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    vue.onMounted(() => {
      const router = vueRouter.useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-container" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$N, null, null, _parent));
      }, _push, _parent);
      _push(`<div class="content-container">`);
      if (_ctx.$frontmatter.pageHeader) {
        _push(serverRenderer.ssrRenderComponent(PageHeader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="row"><div class="col-12 col-sm-4 col-md-3 col-lg-2"><div id="sidebar-left">`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`</div></div><div class="col-12 col-sm-4 col-md-6 col-lg-8">`);
      if (vue.unref(frontmatter).home) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$e, null, null, _parent));
      } else {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$K, vue.mergeProps({
          key: vue.unref(page).path
        }, _attrs), null, _parent));
      }
      _push(`</div><div class="col-12 col-sm-4 col-md-3 col-lg-2"><div id="sidebar-right">`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$b, null, null, _parent));
      _push(`</div></div></div></div>`);
      _push(serverRenderer.ssrRenderComponent(PageFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../theme/layouts/Layout.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
var arrowRightCurve = '<svg width="39" height="30" viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M38.8369 16.8926C38.8369 17.0519 39 17.2112 39 17.2112V17.5298C39 17.6892 38.8369 17.8485 38.8369 17.8485L26.7614 29.6415C26.272 30.1195 25.6192 30.1195 25.2929 29.6415C24.8035 29.1636 24.8035 28.526 25.2929 28.2073L35.5738 18.1668L9.62759 18.1675C4.24261 18.1675 0 13.8646 0 8.765V1.11551C0 0.477919 0.489401 0 1.14221 0C1.79506 0 2.12134 0.477959 2.12134 1.11551V8.765C2.12134 12.7492 5.54815 16.0959 9.62776 16.0959H35.2473L24.9664 6.0554C24.477 5.57744 24.477 4.93989 24.9664 4.6212C25.1295 4.46188 25.4558 4.30256 25.7824 4.30256C26.1087 4.30256 26.2718 4.46189 26.5984 4.6212L38.6738 16.4143C38.6738 16.5736 38.6738 16.7329 38.8373 16.8922L38.8369 16.8926Z" fill="#323232"/>\n</svg>\n';
const _sfc_main$8 = {
  props: {
    lists: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      arrowRightCurve
    };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "c-arrows-list" }, _attrs))}><ul><!--[-->`);
  serverRenderer.ssrRenderList($props.lists, (list) => {
    _push(`<li><span class="icon">${$data.arrowRightCurve}</span><span class="text">${serverRenderer.ssrInterpolate(list)}</span></li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/ArrowsList.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var ArrowsList = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
var ArrowsList$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ArrowsList
}, Symbol.toStringTag, { value: "Module" }));
var arrowRight = '<svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1.53125 8.16634C0.858152 8.16634 0.3125 8.78195 0.3125 9.54134C0.3125 10.2375 0.771 10.8127 1.36587 10.9038L1.53125 10.9163H24.2812C24.9543 10.9163 25.5 10.3007 25.5 9.54134C25.5 8.84523 25.0415 8.26994 24.4466 8.17889L24.2812 8.16634H1.53125Z" fill="#A44D8E"/>\n    <path d="M25.143 8.56907C24.7104 8.08091 24.0333 8.03654 23.5562 8.43594L23.4195 8.56907L16.9195 15.9024C16.4435 16.4394 16.4435 17.31 16.9195 17.8469C17.3521 18.3351 18.0292 18.3795 18.5063 17.9801L18.643 17.8469L25.143 10.5136C25.619 9.97664 25.619 9.10604 25.143 8.56907Z" fill="#A44D8E"/>\n    <path d="M18.643 1.23574C18.1671 0.698765 17.3954 0.698765 16.9195 1.23574C16.4868 1.72389 16.4474 2.48777 16.8015 3.02606L16.9195 3.18028L23.4195 10.5136C23.8954 11.0506 24.6671 11.0506 25.143 10.5136C25.5757 10.0255 25.6151 9.26157 25.261 8.72329L25.143 8.56907L18.643 1.23574Z" fill="#A44D8E"/>\n</svg>\n';
const _sfc_main$7 = {
  props: {
    image: {
      type: String
    },
    title: {
      type: String
    },
    linkUrl: {
      type: String
    },
    linkText: {
      type: String
    }
  },
  data() {
    return {
      arrowRight
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "card c-card" }, _attrs))}><div class="img-wrap card-img-top">`);
  if ($props.image) {
    _push(`<img${serverRenderer.ssrRenderAttr("src", $props.image)}${serverRenderer.ssrRenderAttr("alt", $props.title)}>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="card-body"><p class="h4">${serverRenderer.ssrInterpolate($props.title)}</p>`);
  if ($props.linkUrl) {
    _push(`<a${serverRenderer.ssrRenderAttr("href", $props.linkUrl)}><span class="me-2">${serverRenderer.ssrInterpolate($props.linkText)}</span><span class="icon">${$data.arrowRight}</span></a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/Card.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var Card = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
var Card$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Card
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  props: {
    contents: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Card = vue.resolveComponent("Card");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "c-cards" }, _attrs))}><div class="row g-4"><!--[-->`);
  serverRenderer.ssrRenderList($props.contents, (card) => {
    _push(`<div class="col-md-6 col-lg-4">`);
    _push(serverRenderer.ssrRenderComponent(_component_Card, {
      image: card.image,
      title: card.title,
      "link-url": card.linkUrl,
      "link-text": card.linkText
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/Cards.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var Cards = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
var Cards$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Cards
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  props: {
    colorKey: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    hex: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "col-4 col-md-3 col-lg-2" }, _attrs))}><div class="card c-color-tile"><div class="card-img-top" style="${serverRenderer.ssrRenderStyle({ "background-color": $props.hex })}"></div><div class="card-body"><div class="title">${serverRenderer.ssrInterpolate($props.name)}</div><span class="hex">${serverRenderer.ssrInterpolate($props.hex)}</span></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/ColorTile.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var ColorTile = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
var ColorTile$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ColorTile
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ColorTile = vue.resolveComponent("ColorTile");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "c-color-tiles" }, _attrs))}><div class="row g-3 mb-3">`);
  _push(serverRenderer.ssrRenderComponent(_component_ColorTile, {
    "color-key": "primary",
    name: "Primary",
    hex: "#285576"
  }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_ColorTile, {
    "color-key": "secondary",
    name: "Secondary",
    hex: "#3E837C"
  }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_ColorTile, {
    "color-key": "promo",
    name: "Promo",
    hex: "#7AC4C3"
  }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_ColorTile, {
    "color-key": "action",
    name: "Action",
    hex: "#A44D8E"
  }, null, _parent));
  _push(`</div><div class="row g-3">`);
  _push(serverRenderer.ssrRenderComponent(_component_ColorTile, {
    "color-key": "gray-900",
    name: "900",
    hex: "#212121"
  }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_ColorTile, {
    "color-key": "gray-800",
    name: "800",
    hex: "#424242"
  }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_ColorTile, {
    "color-key": "gray-700",
    name: "700",
    hex: "#616161"
  }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_ColorTile, {
    "color-key": "gray-600",
    name: "600",
    hex: "#757575"
  }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_ColorTile, {
    "color-key": "gray-500",
    name: "500",
    hex: "#9E9E9E"
  }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_ColorTile, {
    "color-key": "gray-400",
    name: "400",
    hex: "#BDBDBD"
  }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_ColorTile, {
    "color-key": "gray-300",
    name: "300",
    hex: "#E0E0E0"
  }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_ColorTile, {
    "color-key": "gray-200",
    name: "200",
    hex: "#eeeeee"
  }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_ColorTile, {
    "color-key": "gray-100",
    name: "100",
    hex: "#F5F5F5"
  }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_ColorTile, {
    "color-key": "gray-50",
    name: "50",
    hex: "#FAFAFA"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/ColorTiles.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var ColorTiles = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
var ColorTiles$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ColorTiles
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  props: {
    contents: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "c-columns" }, _attrs))}><div class="row"><!--[-->`);
  serverRenderer.ssrRenderList($props.contents, (content) => {
    _push(`<div class="col-md-6 col-lg-4"><h4>${serverRenderer.ssrInterpolate(content.title)}</h4><div>${content.text}</div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/Columns.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Columns = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
var Columns$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Columns
}, Symbol.toStringTag, { value: "Module" }));
var ChevronDown = '<svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.26035 2.62854C0.913217 2.28141 0.913217 1.71859 1.26035 1.37146C1.57592 1.05589 2.06975 1.0272 2.41773 1.28539L2.51743 1.37146L9 7.85363L15.4826 1.37146C15.7981 1.05589 16.292 1.0272 16.64 1.28539L16.7397 1.37146C17.0552 1.68704 17.0839 2.18086 16.8257 2.52884L16.7397 2.62854L9.62854 9.73965C9.31296 10.0552 8.81914 10.0839 8.47116 9.82572L8.37146 9.73965L1.26035 2.62854Z" fill="#57575A" stroke="#57575A"/>\n</svg>\n';
const _sfc_main$2 = {
  props: {
    image: {
      type: String,
      required: true
    },
    contents: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      ChevronDown,
      localContents: null
    };
  },
  watch: {
    contents: {
      immediate: true,
      handler() {
        this.localContents = this.contents.map((content) => {
          content.active = false;
          return content;
        });
      }
    }
  },
  methods: {
    scrollTo(image, index2) {
      const item = this.$refs[image + "-" + index2];
      window.scrollTo(0, item[0].offsetTop - 105);
      this.localContents[index2].active = true;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "c-image-map" }, _attrs))}><div class="image-container"><div class="image-wrap"><img${serverRenderer.ssrRenderAttr("src", $props.image)} alt=""></div><!--[-->`);
  serverRenderer.ssrRenderList($data.localContents, (content, index2) => {
    _push(`<div class="circle-point image-point" style="${serverRenderer.ssrRenderStyle({ "top": content.y + "%", "left": content.x + "%" })}"><a>${serverRenderer.ssrInterpolate(index2 + 1)}</a></div>`);
  });
  _push(`<!--]--></div><div class="description-wrap"><ul><!--[-->`);
  serverRenderer.ssrRenderList($data.localContents, (content, index2) => {
    _push(`<li><div class="title"><div class="circle-point"><span>${serverRenderer.ssrInterpolate(index2 + 1)}</span></div><div class="h5">${serverRenderer.ssrInterpolate(content.title)}</div><div class="toggle">${$data.ChevronDown}</div></div>`);
    if (content.active) {
      _push(`<div class="text">${serverRenderer.ssrInterpolate(content.text)}</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/ImageMap.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var ImageMap = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
var ImageMap$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ImageMap
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const route = vueRouter.useRoute();
    const shouldBeActiveInSubpath = (item) => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.link);
      }
      return item.value.link !== "/";
    };
    const isActiveInSubpath = (item) => {
      if (!shouldBeActiveInSubpath) {
        return false;
      }
      return route.path.startsWith(item.link);
    };
    const isActive = (child) => {
      if (child.activeMatch) {
        return new RegExp(child.activeMatch).test(route.path);
      }
      return isActiveInSubpath(child);
    };
    const subMenu = vue.computed(() => {
      const parentMenu = themeLocale.value.navbar.find((item) => item.children && isActive(item));
      if (!parentMenu) {
        return null;
      }
      let result = [];
      console.log("children", parentMenu.children);
      for (const child of parentMenu.children) {
        result.push({
          image: "",
          title: child.text,
          linkUrl: child.link,
          linkText: "Link"
        });
      }
      return result;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Cards = vue.resolveComponent("Cards");
      if (vue.unref(subMenu)) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "c-sub-menu-cards" }, _attrs))}>`);
        _push(serverRenderer.ssrRenderComponent(_component_Cards, { contents: vue.unref(subMenu) }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/SubMenuCards.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var SubMenuCards = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  props: {
    contents: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "c-two-cards" }, _attrs))}><div class="row"><!--[-->`);
  serverRenderer.ssrRenderList($props.contents, (card) => {
    _push(`<div class="col-md-6 card-wrap"><div class="card-content"><h3>${serverRenderer.ssrInterpolate(card.title)}</h3><p>${serverRenderer.ssrInterpolate(card.text)}</p></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/TwoCards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var TwoCards = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
var TwoCards$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": TwoCards
}, Symbol.toStringTag, { value: "Module" }));
exports.createVueApp = createVueApp;

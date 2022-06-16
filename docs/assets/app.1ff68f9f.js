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
const import_meta = {};
const scriptRel = "modulepreload";
const seen = {};
const base = "/DOI-Styleguide/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const pagesData$1 = {
  "v-8daa1a0e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./index.html.9cbccddb.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-3ef8b1f8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3ef8b1f8" */
    "./accessibility.html.20cf1d23.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-52062726": () => __vitePreload(() => import(
    /* webpackChunkName: "v-52062726" */
    "./introduction.html.b9daa78f.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-7224785e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7224785e" */
    "./page-patterns.html.cb4b7945.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-953546a4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-953546a4" */
    "./test.html.7c73c4e9.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-1020f180": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1020f180" */
    "./index.html.7e973bc3.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-ec6a10f0": () => __vitePreload(() => import(
    /* webpackChunkName: "v-ec6a10f0" */
    "./index.html.38a912ff.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-6eb03d17": () => __vitePreload(() => import(
    /* webpackChunkName: "v-6eb03d17" */
    "./colour-palette.html.a35fef88.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-0ff3f3b6": () => __vitePreload(() => import(
    /* webpackChunkName: "v-0ff3f3b6" */
    "./cta-links.html.5d850e21.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-77f48efc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-77f48efc" */
    "./typography.html.336c85f5.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-3860ac4e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3860ac4e" */
    "./biography.html.ba278064.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-f4398dba": () => __vitePreload(() => import(
    /* webpackChunkName: "v-f4398dba" */
    "./homepage.html.8d02b92c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-69b4c86c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-69b4c86c" */
    "./news-case-event.html.7497ede4.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-44aa7896": () => __vitePreload(() => import(
    /* webpackChunkName: "v-44aa7896" */
    "./publication.html.59277a06.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-398d9b95": () => __vitePreload(() => import(
    /* webpackChunkName: "v-398d9b95" */
    "./standard-content-adc.html.bd245059.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-15d89c88": () => __vitePreload(() => import(
    /* webpackChunkName: "v-15d89c88" */
    "./standard-content.html.f0747e97.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-de7ecd86": () => __vitePreload(() => import(
    /* webpackChunkName: "v-de7ecd86" */
    "./bio.html.1ad79a47.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-02b5e3eb": () => __vitePreload(() => import(
    /* webpackChunkName: "v-02b5e3eb" */
    "./event.html.c881da51.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-24dadf94": () => __vitePreload(() => import(
    /* webpackChunkName: "v-24dadf94" */
    "./filtered.html.0aa6b5b8.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-1686c20c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1686c20c" */
    "./news.html.e6d4883e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-7ff2de99": () => __vitePreload(() => import(
    /* webpackChunkName: "v-7ff2de99" */
    "./publication.html.8af3f90f.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-d049d46a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-d049d46a" */
    "./request-for-quote.html.e6539ac8.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-5d1bc6bc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5d1bc6bc" */
    "./checkbox.html.208f0bd4.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-1440f514": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1440f514" */
    "./dropdown.html.04b78679.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-54a55072": () => __vitePreload(() => import(
    /* webpackChunkName: "v-54a55072" */
    "./tabs.html.3bac9a99.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-43a6ffe8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-43a6ffe8" */
    "./tags.html.56a2ceb0.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-0bf947dc": () => __vitePreload(() => import(
    /* webpackChunkName: "v-0bf947dc" */
    "./global-footer.html.05de0095.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-4941c50e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4941c50e" */
    "./header.html.acae3ecf.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-ebed8532": () => __vitePreload(() => import(
    /* webpackChunkName: "v-ebed8532" */
    "./secondary-footer.html.d62b1b68.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-3e01df16": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3e01df16" */
    "./alert.html.aedc2639.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-30861021": () => __vitePreload(() => import(
    /* webpackChunkName: "v-30861021" */
    "./callout.html.9ec112c0.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-0642af97": () => __vitePreload(() => import(
    /* webpackChunkName: "v-0642af97" */
    "./document-download.html.62592209.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-a2a1a9a4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-a2a1a9a4" */
    "./filterable-table.html.aea99187.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-2ea63fc6": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2ea63fc6" */
    "./form.html.ce37eec2.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-3ba80226": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3ba80226" */
    "./media.html.eb84d493.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-3c69c507": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3c69c507" */
    "./pagination.html.145762da.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-14e01543": () => __vitePreload(() => import(
    /* webpackChunkName: "v-14e01543" */
    "./table.html.9942b5ec.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-5d423ac0": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5d423ac0" */
    "./timeline.html.c4bec86a.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-5b11f538": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5b11f538" */
    "./breadcrumbs.html.bb585b0a.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-ca2bbd60": () => __vitePreload(() => import(
    /* webpackChunkName: "v-ca2bbd60" */
    "./in-section-navigation.html.3bca2ce7.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-b5c0254c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-b5c0254c" */
    "./mega-menu.html.832dd991.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-75635350": () => __vitePreload(() => import(
    /* webpackChunkName: "v-75635350" */
    "./on-this-page-menu.html.0edb8dff.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-6eb84da4": () => __vitePreload(() => import(
    /* webpackChunkName: "v-6eb84da4" */
    "./publication-section-divider.html.391793e2.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-d41deffe": () => __vitePreload(() => import(
    /* webpackChunkName: "v-d41deffe" */
    "./tile-navigation.html.d4529a09.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-3706649a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./404.html.ce538133.js"
  ), true ? [] : void 0).then(({ data }) => data)
};
function makeMap(str, expectsLowerCase) {
  const map2 = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map2[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map2[val.toLowerCase()] : (val) => !!map2[val];
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$1(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$1(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const toDisplayString = (val) => {
  return isString$1(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray(val) && !isPlainObject$1(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function warn$2(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.active = true;
    this.effects = [];
    this.cleanups = [];
    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  run(fn) {
    if (this.active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else {
      warn$2(`cannot run an inactive effect scope.`);
    }
  }
  on() {
    activeEffectScope = this;
  }
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this.active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.active = false;
    }
  }
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else {
    warn$2(`onScopeDispose() is called when there is no active effect scope to be associated with.`);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    const eventInfo = { effect: activeEffect, target, type, key };
    trackEffects(dep, eventInfo);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (activeEffect.onTrack) {
      activeEffect.onTrack(Object.assign({ effect: activeEffect }, debuggerEventExtraInfo));
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const eventInfo = { target, type, key, newValue, oldValue, oldTarget };
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0], eventInfo);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects), eventInfo);
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray(dep) ? dep : [...dep];
  for (const effect of effects) {
    if (effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
  for (const effect of effects) {
    if (!effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if (effect.onTrigger) {
      effect.onTrigger(extend({ effect }, debuggerEventExtraInfo));
    }
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol));
const get = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow && !isReadonly(value)) {
      if (!isShallow$1(value)) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    {
      warn$2(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  },
  deleteProperty(target, key) {
    {
      warn$2(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const shallowReadonlyHandlers = /* @__PURE__ */ extend({}, readonlyHandlers, {
  get: shallowReadonlyGet
});
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = isMap(target) ? new Map(target) : new Set(target);
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
    }
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow$1(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()), {
        target: ref2,
        type: "get",
        key: "value"
      });
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep, {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal
      });
    }
  }
}
function isRef(r2) {
  return !!(r2 && r2.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    newVal = this.__v_isShallow ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = this.__v_isShallow ? newVal : toReactive(newVal);
      triggerRefValue(this, newVal);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
function toRefs(object) {
  if (!isProxy(object)) {
    console.warn(`toRefs() expects a reactive object but received a plain one.`);
  }
  const ret = isArray(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = toRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
}
function toRef(object, key, defaultValue) {
  const val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = () => {
      console.warn("Write operation failed: computed value is readonly");
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  if (debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}
const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
function warn$1(msg, ...args) {
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11, [
      msg + args.join(""),
      instance && instance.proxy,
      trace.map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
      trace
    ]);
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString$1(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
const ErrorTypeStrings = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = ErrorTypeStrings[type];
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    const info = ErrorTypeStrings[type];
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue$1 = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue$1.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue$1[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if ((!queue$1.length || !queue$1.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    if (job.id == null) {
      queue$1.push(job);
    } else {
      queue$1.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i = queue$1.indexOf(job);
  if (i > flushIndex) {
    queue$1.splice(i, 1);
  }
}
function queueCb(cb, activeQueue, pendingQueue, index2) {
  if (!isArray(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index2 + 1 : index2)) {
      pendingQueue.push(cb);
    }
  } else {
    pendingQueue.push(...cb);
  }
  queueFlush();
}
function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen2, parentJob = null) {
  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
    pendingPreFlushCbs.length = 0;
    {
      seen2 = seen2 || /* @__PURE__ */ new Map();
    }
    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      if (checkRecursiveUpdates(seen2, activePreFlushCbs[preFlushIndex])) {
        continue;
      }
      activePreFlushCbs[preFlushIndex]();
    }
    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null;
    flushPreFlushCbs(seen2, parentJob);
  }
}
function flushPostFlushCbs(seen2) {
  flushPreFlushCbs();
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    {
      seen2 = seen2 || /* @__PURE__ */ new Map();
    }
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (checkRecursiveUpdates(seen2, activePostFlushCbs[postFlushIndex])) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen2) {
  isFlushPending = false;
  isFlushing = true;
  {
    seen2 = seen2 || /* @__PURE__ */ new Map();
  }
  flushPreFlushCbs(seen2);
  queue$1.sort((a, b) => getId(a) - getId(b));
  const check = (job) => checkRecursiveUpdates(seen2, job);
  try {
    for (flushIndex = 0; flushIndex < queue$1.length; flushIndex++) {
      const job = queue$1[flushIndex];
      if (job && job.active !== false) {
        if (check(job)) {
          continue;
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue$1.length = 0;
    flushPostFlushCbs(seen2);
    isFlushing = false;
    currentFlushPromise = null;
    if (queue$1.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
      flushJobs(seen2);
    }
  }
}
function checkRecursiveUpdates(seen2, fn) {
  if (!seen2.has(fn)) {
    seen2.set(fn, 1);
  } else {
    const count = seen2.get(fn);
    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName(instance.type);
      warn$1(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`);
      return true;
    } else {
      seen2.set(fn, count + 1);
    }
  }
}
let isHmrUpdating = false;
const hmrDirtyComponents = /* @__PURE__ */ new Set();
{
  getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
const map = /* @__PURE__ */ new Map();
function registerHMR(instance) {
  const id = instance.type.__hmrId;
  let record = map.get(id);
  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }
  record.instances.add(instance);
}
function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }
  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */ new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
  const record = map.get(id);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach((instance) => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}
function reload(id, newComp) {
  const record = map.get(id);
  if (!record)
    return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances = [...record.instances];
  for (const instance of instances) {
    const oldComp = normalizeClassComponent(instance.type);
    if (!hmrDirtyComponents.has(oldComp)) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.add(oldComp);
    }
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      hmrDirtyComponents.add(oldComp);
      instance.ceReload(newComp.styles);
      hmrDirtyComponents.delete(oldComp);
    } else if (instance.parent) {
      queueJob(instance.parent.update);
      if (instance.parent.type.__asyncLoader && instance.parent.ceReload) {
        instance.parent.ceReload(newComp.styles);
      }
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
  }
  queuePostFlushCb(() => {
    for (const instance of instances) {
      hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
    }
  });
}
function updateComponentDef(oldComp, newComp) {
  extend(oldComp, newComp);
  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return (id, arg) => {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
    }
  };
}
let devtools;
let buffer = [];
let devtoolsNotInstalled = false;
function emit(event, ...args) {
  if (devtools) {
    devtools.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({ event, args });
  }
}
function setDevtoolsHook(hook, target) {
  var _a2, _b;
  devtools = hook;
  if (devtools) {
    devtools.enabled = true;
    buffer.forEach(({ event, args }) => devtools.emit(event, ...args));
    buffer = [];
  } else if (typeof window !== "undefined" && window.HTMLElement && !((_b = (_a2 = window.navigator) === null || _a2 === void 0 ? void 0 : _a2.userAgent) === null || _b === void 0 ? void 0 : _b.includes("jsdom"))) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook(newHook, target);
    });
    setTimeout(() => {
      if (!devtools) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version2) {
  emit("app:init", app, version2, {
    Fragment,
    Text,
    Comment,
    Static
  });
}
function devtoolsUnmountApp(app) {
  emit("app:unmount", app);
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook("component:added");
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated");
const devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook("component:removed");
function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
  };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:start");
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:end");
function createDevtoolsPerformanceHook(hook) {
  return (component, type, time) => {
    emit(hook, component.appContext.app, component.uid, component, type, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit("component:emit", component.appContext.app, component, event, params);
}
function emit$1(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  {
    const { emitsOptions, propsOptions: [propsOptions] } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
          warn$1(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`);
        }
      } else {
        const validator = emitsOptions[event];
        if (isFunction(validator)) {
          const isValid = validator(...rawArgs);
          if (!isValid) {
            warn$1(`Invalid event arguments: event validation failed for event "${event}".`);
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => a.trim());
    }
    if (number) {
      args = rawArgs.map(toNumber);
    }
  }
  {
    devtoolsComponentEmit(instance, event, args);
  }
  {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn$1(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(event)}" instead of "${event}".`);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    cache.set(comp, null);
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  cache.set(comp, normalized);
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    const res = fn(...args);
    setCurrentRenderingInstance(prevInstance);
    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }
    {
      devtoolsComponentUpdated(ctx);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
let accessedAttrs = false;
function markAttrsAccessed() {
  accessedAttrs = true;
}
function renderComponentRoot(instance) {
  const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit: emit2, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance);
  {
    accessedAttrs = false;
  }
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (attrs === props) {
        markAttrsAccessed();
      }
      result = normalizeVNode(render2.length > 1 ? render2(props, true ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },
        slots,
        emit: emit2
      } : { attrs, slots, emit: emit2 }) : render2(props, null));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  let setRoot = void 0;
  if (result.patchFlag > 0 && result.patchFlag & 2048) {
    [root, setRoot] = getChildRoot(result);
  }
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root = cloneVNode(root, fallthroughAttrs);
      } else if (!accessedAttrs && root.type !== Comment) {
        const allAttrs = Object.keys(attrs);
        const eventAttrs = [];
        const extraAttrs = [];
        for (let i = 0, l = allAttrs.length; i < l; i++) {
          const key = allAttrs[i];
          if (isOn(key)) {
            if (!isModelListener(key)) {
              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
            }
          } else {
            extraAttrs.push(key);
          }
        }
        if (extraAttrs.length) {
          warn$1(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`);
        }
        if (eventAttrs.length) {
          warn$1(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
        }
      }
    }
  }
  if (vnode.dirs) {
    if (!isElementRoot(root)) {
      warn$1(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
    }
    root = cloneVNode(root);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    if (!isElementRoot(root)) {
      warn$1(`Component inside <Transition> renders non-element root node that cannot be animated.`);
    }
    root.transition = vnode.transition;
  }
  if (setRoot) {
    setRoot(root);
  } else {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getChildRoot = (vnode) => {
  const rawChildren = vnode.children;
  const dynamicChildren = vnode.dynamicChildren;
  const childRoot = filterSingleRoot(rawChildren);
  if (!childRoot) {
    return [vnode, void 0];
  }
  const index2 = rawChildren.indexOf(childRoot);
  const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
  const setRoot = (updatedRoot) => {
    rawChildren[index2] = updatedRoot;
    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
      }
    }
  };
  return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children) {
  let singleRoot;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isVNode(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
const isElementRoot = (vnode) => {
  return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if ((prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  }
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function provide(key, value) {
  if (!currentInstance) {
    {
      warn$1(`provide() can only be used inside setup().`);
    }
  } else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else {
      warn$1(`injection "${String(key)}" not found.`);
    }
  } else {
    warn$1(`inject() can only be used inside setup() or functional components.`);
  }
}
function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  if (!isFunction(cb)) {
    warn$1(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  if (!cb) {
    if (immediate !== void 0) {
      warn$1(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
    }
    if (deep !== void 0) {
      warn$1(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
    }
  }
  const warnInvalidSource = (s) => {
    warn$1(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
  };
  const instance = currentInstance;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow$1(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow$1(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else {
        warnInvalidSource(s);
      }
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
    warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    return NOOP;
  }
  let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    scheduler = () => queuePreFlushCb(job);
  }
  const effect = new ReactiveEffect(getter, scheduler);
  {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  }
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }
  return () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen2) {
  if (!isObject(value) || value["__v_skip"]) {
    return value;
  }
  seen2 = seen2 || /* @__PURE__ */ new Set();
  if (seen2.has(value)) {
    return value;
  }
  seen2.add(value);
  if (isRef(value)) {
    traverse(value.value, seen2);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen2);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen2);
    });
  } else if (isPlainObject$1(value)) {
    for (const key in value) {
      traverse(value[key], seen2);
    }
  }
  return value;
}
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevTransitionKey;
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      let child = children[0];
      if (children.length > 1) {
        let hasFound = false;
        for (const c of children) {
          if (c.type !== Comment) {
            if (hasFound) {
              warn$1("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            child = c;
            hasFound = true;
          }
        }
      }
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") {
        warn$1(`invalid <transition> mode: ${mode}`);
      }
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = false;
      const { getTransitionKey } = innerChild.type;
      if (getTransitionKey) {
        const key = getTransitionKey();
        if (prevTransitionKey === void 0) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      }
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            instance.update();
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el._leaveCb = () => {
              earlyRemove();
              el._leaveCb = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance) {
  const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(hook, instance, 9, args);
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args);
    if (isArray(hook)) {
      if (hook.every((hook2) => hook2.length <= 1))
        done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el._leaveCb) {
        el._leaveCb(true);
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        leavingVNode.el._leaveCb();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el._enterCb = (cancelled) => {
        if (called)
          return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el._enterCb = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el._enterCb) {
        el._enterCb(true);
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el._leaveCb = (cancelled) => {
        if (called)
          return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el._leaveCb = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props, state, instance);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128)
        keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}
function defineComponent(options) {
  return isFunction(options) ? { setup: options, name: options.name } : options;
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
function defineAsyncComponent(source) {
  if (isFunction(source)) {
    source = { loader: source };
  }
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay: delay2 = 200,
    timeout,
    suspensible = true,
    onError: userOnError
  } = source;
  let pendingRequest = null;
  let resolvedComp;
  let retries = 0;
  const retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  const load = () => {
    let thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise((resolve2, reject) => {
          const userRetry = () => resolve2(retry());
          const userFail = () => reject(err);
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then((comp) => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if (!comp) {
        warn$1(`Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`);
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      if (comp && !isObject(comp) && !isFunction(comp)) {
        throw new Error(`Invalid async component load result: ${comp}`);
      }
      resolvedComp = comp;
      return comp;
    }));
  };
  return defineComponent({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      const instance = currentInstance;
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance);
      }
      const onError = (err) => {
        pendingRequest = null;
        handleError(err, instance, 13, !errorComponent);
      };
      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then((comp) => {
          return () => createInnerComp(comp, instance);
        }).catch((err) => {
          onError(err);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err
          }) : null;
        });
      }
      const loaded = ref(false);
      const error = ref();
      const delayed = ref(!!delay2);
      if (delay2) {
        setTimeout(() => {
          delayed.value = false;
        }, delay2);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded.value && !error.value) {
            const err = new Error(`Async component timed out after ${timeout}ms.`);
            onError(err);
            error.value = err;
          }
        }, timeout);
      }
      load().then(() => {
        loaded.value = true;
        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          queueJob(instance.parent.update);
        }
      }).catch((err) => {
        onError(err);
        error.value = err;
      });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}
function createInnerComp(comp, { vnode: { ref: ref2, props, children, shapeFlag }, parent }) {
  const vnode = createVNode(comp, props, children);
  vnode.ref = ref2;
  return vnode;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(type, hook, keepAliveRoot, true);
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else {
    const apiName = toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ""));
    warn$1(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn$1("Do not use built-in directive ids as custom directive id: " + name);
  }
}
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
    warn$1(`withDirectives can only be used inside render functions.`);
    return vnode;
  }
  const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (isFunction(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }
    if (dir.deep) {
      traverse(value);
    }
    bindings.push({
      dir,
      instance,
      value,
      oldValue: void 0,
      arg,
      modifiers
    });
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(Component, false);
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
    if (!res && maybeSelfReference) {
      return Component;
    }
    if (warnMissing && !res) {
      const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
      warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
    }
    return res;
  } else {
    warn$1(`resolve${capitalize(type.slice(0, -1))} can only be used in render() or setup().`);
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache, index2) {
  let ret;
  const cached = cache && cache[index2];
  if (isArray(source) || isString$1(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    }
  } else if (typeof source === "number") {
    if (!Number.isInteger(source)) {
      warn$1(`The v-for range expect an integer value but got ${source}.`);
    }
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index2] = ret;
  }
  return ret;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
    return createVNode("slot", name === "default" ? null : { name }, fallback && fallback());
  }
  let slot = slots[name];
  if (slot && slot.length > 1) {
    warn$1(`SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`);
    slot = () => [];
  }
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
  $: (i) => i,
  $el: (i) => i.vnode.el,
  $data: (i) => i.data,
  $props: (i) => shallowReadonly(i.props),
  $attrs: (i) => shallowReadonly(i.attrs),
  $slots: (i) => shallowReadonly(i.slots),
  $refs: (i) => shallowReadonly(i.refs),
  $parent: (i) => getPublicInstance(i.parent),
  $root: (i) => getPublicInstance(i.root),
  $emit: (i) => i.emit,
  $options: (i) => resolveMergedOptions(i),
  $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
  $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
  $watch: (i) => instanceWatch.bind(i)
});
const isReservedPrefix = (key) => key === "_" || key === "$";
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if (key === "__isVue") {
      return true;
    }
    if (setupState !== EMPTY_OBJ && setupState.__isScriptSetup && hasOwn(setupState, key)) {
      return setupState[key];
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
        markAttrsAccessed();
      }
      return publicGetter(instance);
    } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else if (currentRenderingInstance && (!isString$1(key) || key.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn$1(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
      } else if (instance === currentRenderingInstance) {
        warn$1(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
      }
    }
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      warn$1(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      warn$1(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`, instance);
      return false;
    } else {
      if (key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || setupState !== EMPTY_OBJ && hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
{
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn$1(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
  };
}
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      set: NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const { ctx, propsOptions: [propsOptions] } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const { ctx, setupState } = instance;
  Object.keys(toRaw(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn$1(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP
      });
    }
  });
}
function createDuplicateChecker() {
  const cache = /* @__PURE__ */ Object.create(null);
  return (type, key) => {
    if (cache[key]) {
      warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
    } else {
      cache[key] = type;
    }
  };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    expose,
    inheritAttrs,
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = createDuplicateChecker();
  {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props", key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        }
        {
          checkDuplicateProperties("Methods", key);
        }
      } else {
        warn$1(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
      }
    }
  }
  if (dataOptions) {
    if (!isFunction(dataOptions)) {
      warn$1(`The data option must be a function. Plain object usage is no longer supported.`);
    }
    const data = dataOptions.call(publicThis, publicThis);
    if (isPromise(data)) {
      warn$1(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
    }
    if (!isObject(data)) {
      warn$1(`data() should return an object.`);
    } else {
      instance.data = reactive(data);
      {
        for (const key in data) {
          checkDuplicateProperties("Data", key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (get2 === NOOP) {
        warn$1(`Computed property "${key}" has no getter.`);
      }
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : () => {
        warn$1(`Write operation failed: computed property "${key}" is readonly.`);
      };
      const c = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
      {
        checkDuplicateProperties("Computed", key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key, opt.default, true);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v) => injected.value = v
        });
      } else {
        {
          warn$1(`injected property "${key}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`);
        }
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
    {
      checkDuplicateProperties("Inject", key);
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString$1(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    } else {
      warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject(raw)) {
    if (isArray(raw)) {
      raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      } else {
        warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else {
    warn$1(`Invalid watch option: "${key}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base2 = instance.type;
  const { mixins, extends: extendsOptions } = base2;
  const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
  const cached = cache.get(base2);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base2;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) => mergeOptions$1(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions$1(resolved, base2, optionMergeStrategies);
  }
  cache.set(base2, resolved);
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions$1(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
      warn$1(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const { props, attrs, vnode: { patchFlag } } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (!(instance.type.__hmrId || instance.parent && instance.parent.type.__hmrId) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[0]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    cache.set(comp, EMPTY_ARR);
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if (!isString$1(raw[i])) {
        warn$1(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject(raw)) {
      warn$1(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : opt;
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0] = booleanIndex > -1;
          prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  cache.set(comp, res);
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  } else {
    warn$1(`Invalid prop name: "${key}" is a reserved property.`);
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray(expectedTypes)) {
    return expectedTypes.findIndex((t) => isSameType(t, type));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = toRaw(props);
  const options = instance.propsOptions[0];
  for (const key in options) {
    let opt = options[key];
    if (opt == null)
      continue;
    validateProp(key, resolvedValues[key], opt, !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
  }
}
function validateProp(name, value, prop, isAbsent) {
  const { type, required, validator } = prop;
  if (required && isAbsent) {
    warn$1('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  if (type != null && type !== true) {
    let isValid = false;
    const types = isArray(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn$1(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value)) {
    warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
const isSimpleType = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol,BigInt");
function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (isSimpleType(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();
    if (!valid && t === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else if (expectedType === "null") {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot$1 = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (currentInstance) {
      warn$1(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
    }
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot$1(key, value, ctx);
    } else if (value != null) {
      {
        warn$1(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
      }
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  if (!isKeepAlive(instance.vnode) && true) {
    warn$1(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
  }
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      instance.slots = toRaw(children);
      def(children, "_", type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (isHmrUpdating) {
        extend(slots, children);
      } else if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        extend(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid = 0;
function createAppAPI(render, hydrate) {
  return function createApp(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = Object.assign({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      warn$1(`root props passed to app.mount() must be an object.`);
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    let isMounted = false;
    const app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        {
          warn$1(`app.config cannot be replaced. Modify individual options instead.`);
        }
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin)) {
          warn$1(`Plugin has already been applied to target app.`);
        } else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else {
          warn$1(`A plugin must either be a function or an object with an "install" function.`);
        }
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else {
            warn$1("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
          }
        }
        return app;
      },
      component(name, component) {
        {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if (context.components[name]) {
          warn$1(`Component "${name}" has already been registered in target app.`);
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if (context.directives[name]) {
          warn$1(`Directive "${name}" has already been registered in target app.`);
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          if (rootContainer.__vue_app__) {
            warn$1(`There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
          }
          const vnode = createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          {
            context.reload = () => {
              render(cloneVNode(vnode), rootContainer, isSVG);
            };
          }
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        } else {
          warn$1(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
        }
      },
      unmount() {
        if (isMounted) {
          render(null, app._container);
          {
            app._instance = null;
            devtoolsUnmountApp(app);
          }
          delete app._container.__vue_app__;
        } else {
          warn$1(`Cannot unmount an app that is not mounted.`);
        }
      },
      provide(key, value) {
        if (key in context.provides) {
          warn$1(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
        }
        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray(rawRef)) {
    rawRef.forEach((r2, i) => setRef(r2, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  if (!owner) {
    warn$1(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
    return;
  }
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString$1(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString$1(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray(existing) && remove(existing, refValue);
          } else {
            if (!isArray(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (hasOwn(setupState, ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                ref2.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (hasOwn(setupState, ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          ref2.value = value;
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else {
          warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
        }
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else {
      warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
    }
  }
}
let hasMismatch = false;
const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== "foreignObject";
const isComment = (node) => node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
  const { mt: mountComponent, p: patch, o: { patchProp: patchProp2, createText, nextSibling, parentNode, remove: remove2, insert, createComment } } = rendererInternals;
  const hydrate = (vnode, container) => {
    if (!container.hasChildNodes()) {
      warn$1(`Attempting to hydrate existing markup but container is empty. Performing full mount instead.`);
      patch(null, vnode, container);
      flushPostFlushCbs();
      container._vnode = vnode;
      return;
    }
    hasMismatch = false;
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    container._vnode = vnode;
    if (hasMismatch && true) {
      console.error(`Hydration completed but contains mismatches.`);
    }
  };
  const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
    const isFragmentStart = isComment(node) && node.data === "[";
    const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
    const { type, ref: ref2, shapeFlag, patchFlag } = vnode;
    const domType = node.nodeType;
    vnode.el = node;
    if (patchFlag === -2) {
      optimized = false;
      vnode.dynamicChildren = null;
    }
    let nextNode = null;
    switch (type) {
      case Text:
        if (domType !== 3) {
          if (vnode.children === "") {
            insert(vnode.el = createText(""), parentNode(node), node);
            nextNode = node;
          } else {
            nextNode = onMismatch();
          }
        } else {
          if (node.data !== vnode.children) {
            hasMismatch = true;
            warn$1(`Hydration text mismatch:
- Client: ${JSON.stringify(node.data)}
- Server: ${JSON.stringify(vnode.children)}`);
            node.data = vnode.children;
          }
          nextNode = nextSibling(node);
        }
        break;
      case Comment:
        if (domType !== 8 || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }
        break;
      case Static:
        if (domType !== 1 && domType !== 3) {
          nextNode = onMismatch();
        } else {
          nextNode = node;
          const needToAdoptContent = !vnode.children.length;
          for (let i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent)
              vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }
            nextNode = nextSibling(nextNode);
          }
          return nextNode;
        }
        break;
      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        }
        break;
      default:
        if (shapeFlag & 1) {
          if (domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
          }
        } else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          const container = parentNode(node);
          mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
          nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
          if (nextNode && isComment(nextNode) && nextNode.data === "teleport end") {
            nextNode = nextSibling(nextNode);
          }
          if (isAsyncWrapper(vnode)) {
            let subTree;
            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
            }
            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64) {
          if (domType !== 8) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
          }
        } else if (shapeFlag & 128) {
          nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
        } else {
          warn$1("Invalid HostVNode type:", type, `(${typeof type})`);
        }
    }
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode);
    }
    return nextNode;
  };
  const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const { type, props, patchFlag, shapeFlag, dirs } = vnode;
    const forcePatchValue = type === "input" && dirs || type === "option";
    {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        if (forcePatchValue || !optimized || patchFlag & (16 | 32)) {
          for (const key in props) {
            if (forcePatchValue && key.endsWith("value") || isOn(key) && !isReservedProp(key)) {
              patchProp2(el, key, null, props[key], false, void 0, parentComponent);
            }
          }
        } else if (props.onClick) {
          patchProp2(el, "onClick", null, props.onClick, false, void 0, parentComponent);
        }
      }
      let vnodeHooks;
      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
        queueEffectWithSuspense(() => {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
      if (shapeFlag & 16 && !(props && (props.innerHTML || props.textContent))) {
        let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
        let hasWarned = false;
        while (next) {
          hasMismatch = true;
          if (!hasWarned) {
            warn$1(`Hydration children mismatch in <${vnode.type}>: server rendered element contains more child nodes than client vdom.`);
            hasWarned = true;
          }
          const cur = next;
          next = next.nextSibling;
          remove2(cur);
        }
      } else if (shapeFlag & 8) {
        if (el.textContent !== vnode.children) {
          hasMismatch = true;
          warn$1(`Hydration text content mismatch in <${vnode.type}>:
- Client: ${el.textContent}
- Server: ${vnode.children}`);
          el.textContent = vnode.children;
        }
      }
    }
    return el.nextSibling;
  };
  const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!parentVNode.dynamicChildren;
    const children = parentVNode.children;
    const l = children.length;
    let hasWarned = false;
    for (let i = 0; i < l; i++) {
      const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
      if (node) {
        node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
      } else if (vnode.type === Text && !vnode.children) {
        continue;
      } else {
        hasMismatch = true;
        if (!hasWarned) {
          warn$1(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: server rendered element contains fewer child nodes than client vdom.`);
          hasWarned = true;
        }
        patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
      }
    }
    return node;
  };
  const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    const { slotScopeIds: fragmentSlotScopeIds } = vnode;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    const container = parentNode(node);
    const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
    if (next && isComment(next) && next.data === "]") {
      return nextSibling(vnode.anchor = next);
    } else {
      hasMismatch = true;
      insert(vnode.anchor = createComment(`]`), container, next);
      return next;
    }
  };
  const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
    hasMismatch = true;
    warn$1(`Hydration node mismatch:
- Client vnode:`, vnode.type, `
- Server rendered DOM:`, node, node.nodeType === 3 ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``);
    vnode.el = null;
    if (isFragment) {
      const end = locateClosingAsyncAnchor(node);
      while (true) {
        const next2 = nextSibling(node);
        if (next2 && next2 !== end) {
          remove2(next2);
        } else {
          break;
        }
      }
    }
    const next = nextSibling(node);
    const container = parentNode(node);
    remove2(node);
    patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
    return next;
  };
  const locateClosingAsyncAnchor = (node) => {
    let match = 0;
    while (node) {
      node = nextSibling(node);
      if (node && isComment(node)) {
        if (node.data === "[")
          match++;
        if (node.data === "]") {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }
    return node;
  };
  return [hydrate, hydrateNode];
}
let supported$1;
let perf$1;
function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported$1()) {
    perf$1.mark(`vue-${type}-${instance.uid}`);
  }
  {
    devtoolsPerfStart(instance, type, isSupported$1() ? perf$1.now() : Date.now());
  }
}
function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported$1()) {
    const startTag = `vue-${type}-${instance.uid}`;
    const endTag = startTag + `:end`;
    perf$1.mark(endTag);
    perf$1.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
    perf$1.clearMarks(startTag);
    perf$1.clearMarks(endTag);
  }
  {
    devtoolsPerfEnd(instance, type, isSupported$1() ? perf$1.now() : Date.now());
  }
}
function isSupported$1() {
  if (supported$1 !== void 0) {
    return supported$1;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported$1 = true;
    perf$1 = window.performance;
  } else {
    supported$1 = false;
  }
  return supported$1;
}
function initFeatureFlags() {
  const needWarn = [];
  if (needWarn.length) {
    const multi = needWarn.length > 1;
    console.warn(`Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
  {
    initFeatureFlags();
  }
  const target = getGlobalThis();
  target.__VUE__ = true;
  {
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref2, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        } else {
          patchStaticNode(n1, n2, container, isSVG);
        }
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else {
          warn$1("Invalid VNode type:", type, `(${typeof type})`);
        }
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
  };
  const patchStaticNode = (n1, n2, container, isSVG) => {
    if (n2.children !== n1.children) {
      const anchor = hostNextSibling(n1.anchor);
      removeStaticNode(n1);
      [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
    {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
      if (shapeFlag & 8) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        for (const key in props) {
          if (key !== "value" && !isReservedProp(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if ("value" in props) {
          hostPatchProp(el, "value", null, props.value);
        }
        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    }
    {
      Object.defineProperty(el, "__vnode", {
        value: vnode,
        enumerable: false
      });
      Object.defineProperty(el, "__vueParentComponent", {
        value: parentComponent,
        enumerable: false
      });
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (isHmrUpdating) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
      if (parentComponent && parentComponent.type.__hmrId) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (isHmrUpdating || patchFlag & 2048) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
        if (parentComponent && parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2);
        } else if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true);
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (instance.type.__hmrId) {
      registerHMR(instance);
    }
    {
      pushWarningContext(initialVNode);
      startMeasure(instance, `mount`);
    }
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      {
        startMeasure(instance, `init`);
      }
      setupComponent(instance);
      {
        endMeasure(instance, `init`);
      }
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
    {
      popWarningContext();
      endMeasure(instance, `mount`);
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        {
          pushWarningContext(n2);
        }
        updateComponentPreRender(instance, n2, optimized);
        {
          popWarningContext();
        }
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            {
              startMeasure(instance, `render`);
            }
            instance.subTree = renderComponentRoot(instance);
            {
              endMeasure(instance, `render`);
            }
            {
              startMeasure(instance, `hydrate`);
            }
            hydrateNode(el, instance.subTree, instance, parentSuspense, null);
            {
              endMeasure(instance, `hydrate`);
            }
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(() => !instance.isUnmounted && hydrateSubTree());
          } else {
            hydrateSubTree();
          }
        } else {
          {
            startMeasure(instance, `render`);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          {
            endMeasure(instance, `render`);
          }
          {
            startMeasure(instance, `patch`);
          }
          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
          {
            endMeasure(instance, `patch`);
          }
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        {
          devtoolsComponentAdded(instance);
        }
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        let originNext = next;
        let vnodeHook;
        {
          pushWarningContext(next || instance.vnode);
        }
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        {
          startMeasure(instance, `render`);
        }
        const nextTree = renderComponentRoot(instance);
        {
          endMeasure(instance, `render`);
        }
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        {
          startMeasure(instance, `patch`);
        }
        patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, isSVG);
        {
          endMeasure(instance, `patch`);
        }
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
        }
        {
          devtoolsComponentUpdated(instance);
        }
        {
          popWarningContext();
        }
      }
    };
    const effect = instance.effect = new ReactiveEffect(componentUpdateFn, () => queueJob(update), instance.scope);
    const update = instance.update = () => effect.run();
    update.id = instance.uid;
    toggleRecurse(instance, true);
    {
      effect.onTrack = instance.rtc ? (e) => invokeArrayFns(instance.rtc, e) : void 0;
      effect.onTrigger = instance.rtg ? (e) => invokeArrayFns(instance.rtg, e) : void 0;
      update.ownerInstance = instance;
    }
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(void 0, instance.update);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          if (keyToNewIndexMap.has(nextChild.key)) {
            warn$1(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
          }
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++)
        newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove3 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove3();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove3, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const { type, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
        vnode.children.forEach((child) => {
          if (child.type === Comment) {
            hostRemove(child.el);
          } else {
            remove2(child);
          }
        });
      } else {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    if (instance.type.__hmrId) {
      unregisterHMR(instance);
    }
    const { bum, scope, update, subTree, um } = instance;
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
    {
      devtoolsComponentRemoved(instance);
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
const isTeleport = (type) => type.__isTeleport;
const Fragment = Symbol("Fragment");
const Text = Symbol("Text");
const Comment = Symbol("Comment");
const Static = Symbol("Static");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  if (n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
    return false;
  }
  return n1.type === n2.type && n1.key === n2.key;
}
const createVNodeWithArgsTransform = (...args) => {
  return _createVNode(...args);
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
  return ref2 != null ? isString$1(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString$1(children) ? 8 : 16;
  }
  if (vnode.key !== vnode.key) {
    warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
  }
  if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = createVNodeWithArgsTransform;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if (!type) {
      warn$1(`Invalid vnode type when creating vnode: ${type}.`);
    }
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(type, props, true);
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString$1(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject(style)) {
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString$1(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  if (shapeFlag & 4 && isProxy(type)) {
    type = toRaw(type);
    warn$1(`Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type);
  }
  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children: patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}
function deepCloneVNode(vnode) {
  const cloned = cloneVNode(vnode);
  if (isArray(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray(child)) {
    return createVNode(Fragment, null, child.slice());
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid$1++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    emit: null,
    emitted: null,
    propsDefaults: EMPTY_OBJ,
    inheritAttrs: type.inheritAttrs,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = createDevRenderContext(instance);
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit$1.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
const isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, config) {
  const appIsNativeTag = config.isNativeTag || NO;
  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn$1("Do not use built-in or reserved HTML elements as component id: " + name);
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  var _a2;
  const Component = instance.type;
  {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }
    if (Component.components) {
      const names = Object.keys(Component.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component.directives) {
      const names = Object.keys(Component.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component.compilerOptions && isRuntimeOnly()) {
      warn$1(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  {
    exposePropsOnRenderContext(instance);
  }
  const { setup } = Component;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance, 0, [shallowReadonly(instance.props), setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
        if (!instance.suspense) {
          const name = (_a2 = Component.name) !== null && _a2 !== void 0 ? _a2 : "Anonymous";
          warn$1(`Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
        }
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    if (isVNode(setupResult)) {
      warn$1(`setup() should not return VNodes directly - return a render function instead.`);
    }
    {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (setupResult !== void 0) {
    warn$1(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
  }
  finishComponentSetup(instance, isSSR);
}
let compile;
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template;
      if (template) {
        {
          startMeasure(instance, `compile`);
        }
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(extend({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
        {
          endMeasure(instance, `compile`);
        }
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions(instance);
    resetTracking();
    unsetCurrentInstance();
  }
  if (!Component.render && instance.render === NOOP && !isSSR) {
    if (Component.template) {
      warn$1(`Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
    } else {
      warn$1(`Component is missing template or render function.`);
    }
  }
}
function createAttrsProxy(instance) {
  return new Proxy(instance.attrs, {
    get(target, key) {
      markAttrsAccessed();
      track(instance, "get", "$attrs");
      return target[key];
    },
    set() {
      warn$1(`setupContext.attrs is readonly.`);
      return false;
    },
    deleteProperty() {
      warn$1(`setupContext.attrs is readonly.`);
      return false;
    }
  });
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    if (instance.exposed) {
      warn$1(`expose() should be called only once per setup().`);
    }
    instance.exposed = exposed || {};
  };
  let attrs;
  {
    return Object.freeze({
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      get slots() {
        return shallowReadonly(instance.slots);
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function initCustomFormatter() {
  if (typeof window === "undefined") {
    return;
  }
  const vueStyle = { style: "color:#3ba776" };
  const numberStyle = { style: "color:#0b1bc9" };
  const stringStyle = { style: "color:#b62e24" };
  const keywordStyle = { style: "color:#9d288c" };
  const formatter = {
    header(obj) {
      if (!isObject(obj)) {
        return null;
      }
      if (obj.__isVue) {
        return ["div", vueStyle, `VueInstance`];
      } else if (isRef(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, genRefFlag(obj)],
          "<",
          formatValue(obj.value),
          `>`
        ];
      } else if (isReactive(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
          "<",
          formatValue(obj),
          `>${isReadonly(obj) ? ` (readonly)` : ``}`
        ];
      } else if (isReadonly(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
          "<",
          formatValue(obj),
          ">"
        ];
      }
      return null;
    },
    hasBody(obj) {
      return obj && obj.__isVue;
    },
    body(obj) {
      if (obj && obj.__isVue) {
        return [
          "div",
          {},
          ...formatInstance(obj.$)
        ];
      }
    }
  };
  function formatInstance(instance) {
    const blocks = [];
    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock("props", toRaw(instance.props)));
    }
    if (instance.setupState !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("setup", instance.setupState));
    }
    if (instance.data !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("data", toRaw(instance.data)));
    }
    const computed2 = extractKeys(instance, "computed");
    if (computed2) {
      blocks.push(createInstanceBlock("computed", computed2));
    }
    const injected = extractKeys(instance, "inject");
    if (injected) {
      blocks.push(createInstanceBlock("injected", injected));
    }
    blocks.push([
      "div",
      {},
      [
        "span",
        {
          style: keywordStyle.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: instance }]
    ]);
    return blocks;
  }
  function createInstanceBlock(type, target) {
    target = extend({}, target);
    if (!Object.keys(target).length) {
      return ["span", {}];
    }
    return [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        type
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(target).map((key) => {
          return [
            "div",
            {},
            ["span", keywordStyle, key + ": "],
            formatValue(target[key], false)
          ];
        })
      ]
    ];
  }
  function formatValue(v, asRaw = true) {
    if (typeof v === "number") {
      return ["span", numberStyle, v];
    } else if (typeof v === "string") {
      return ["span", stringStyle, JSON.stringify(v)];
    } else if (typeof v === "boolean") {
      return ["span", keywordStyle, v];
    } else if (isObject(v)) {
      return ["object", { object: asRaw ? toRaw(v) : v }];
    } else {
      return ["span", stringStyle, String(v)];
    }
  }
  function extractKeys(instance, type) {
    const Comp = instance.type;
    if (isFunction(Comp)) {
      return;
    }
    const extracted = {};
    for (const key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }
    return extracted;
  }
  function isKeyOfType(Comp, key, type) {
    const opts = Comp[type];
    if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
      return true;
    }
    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }
    if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
      return true;
    }
  }
  function genRefFlag(v) {
    if (isShallow(v)) {
      return `ShallowRef`;
    }
    if (v.effect) {
      return `ComputedRef`;
    }
    return `Ref`;
  }
  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}
const version = "3.2.37";
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is, props) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector2) => doc.querySelector(selector2),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  cloneNode(el) {
    const cloned = el.cloneNode(true);
    if (`_value` in el) {
      cloned._value = el._value;
    }
    return cloned;
  },
  insertStaticContent(content, parent, anchor, isSVG, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;
      if (isSVG) {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      before ? before.nextSibling : parent.firstChild,
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString$1(next);
  if (next && !isCssString) {
    for (const key in next) {
      setStyle(style, key, next[key]);
    }
    if (prev && !isString$1(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
  } else {
    const currentDisplay = style.display;
    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
    if ("_vod" in el) {
      style.display = currentDisplay;
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null)
      val = "";
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean2 = isSpecialBooleanAttr(key);
    if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean2 ? "" : value);
    }
  }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  if (key === "value" && el.tagName !== "PROGRESS" && !el.tagName.includes("-")) {
    el._value = value;
    const newValue = value == null ? "" : value;
    if (el.value !== newValue || el.tagName === "OPTION") {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
    {
      warn$1(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: value ${value} is invalid.`, e);
    }
  }
  needRemove && el.removeAttribute(key);
}
const [_getNow, skipTimestampCheck] = /* @__PURE__ */ (() => {
  let _getNow2 = Date.now;
  let skipTimestampCheck2 = false;
  if (typeof window !== "undefined") {
    if (Date.now() > document.createEvent("Event").timeStamp) {
      _getNow2 = performance.now.bind(performance);
    }
    const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
    skipTimestampCheck2 = !!(ffMatch && Number(ffMatch[1]) <= 53);
  }
  return [_getNow2, skipTimestampCheck2];
})();
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const reset = () => {
  cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(reset), cachedNow = _getNow());
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  return [hyphenate(name.slice(2)), options];
}
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    const timeStamp = e.timeStamp || _getNow();
    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
    }
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
  } else {
    return value;
  }
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && nativeOnRE.test(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key) && isString$1(value)) {
    return false;
  }
  return key in el;
}
const TRANSITION = "transition";
const ANIMATION = "animation";
const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Transition.props = /* @__PURE__ */ extend({}, BaseTransition.props, DOMTransitionPropsValidators);
const callHook = (hook, args = []) => {
  if (isArray(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  validateDuration(res);
  return res;
}
function validateDuration(val) {
  if (typeof val !== "number") {
    warn$1(`<transition> explicit duration is not a valid number - got ${JSON.stringify(val)}.`);
  } else if (isNaN(val)) {
    warn$1(`<transition> explicit duration is NaN - the duration expression might be incorrect.`);
  }
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const { _vtc } = el;
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el._vtc = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(TRANSITION + "Delay");
  const transitionDurations = getStyleProperties(TRANSITION + "Duration");
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(ANIMATION + "Delay");
  const animationDurations = getStyleProperties(ANIMATION + "Duration");
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers) => {
  return (event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers))
        return;
    }
    return fn(event, ...args);
  };
};
const vShow = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue)
      return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el._vod : "none";
}
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer;
let enabledHydration = false;
function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
  enabledHydration = true;
  return renderer;
}
const createSSRApp = (...args) => {
  const app = ensureHydrationRenderer().createApp(...args);
  {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (container) {
      return mount(container, true, container instanceof SVGElement);
    }
  };
  return app;
};
function injectNativeTagCheck(app) {
  Object.defineProperty(app.config, "isNativeTag", {
    value: (tag) => isHTMLTag(tag) || isSVGTag(tag),
    writable: false
  });
}
function injectCompilerOptionsCheck(app) {
  {
    const isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, "isCustomElement", {
      get() {
        return isCustomElement;
      },
      set() {
        warn$1(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
      }
    });
    const compilerOptions = app.config.compilerOptions;
    const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
    Object.defineProperty(app.config, "compilerOptions", {
      get() {
        warn$1(msg);
        return compilerOptions;
      },
      set() {
        warn$1(msg);
      }
    });
  }
}
function normalizeContainer(container) {
  if (isString$1(container)) {
    const res = document.querySelector(container);
    if (!res) {
      warn$1(`Failed to mount app: mount target selector "${container}" returned null.`);
    }
    return res;
  }
  if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
    warn$1(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
  }
  return container;
}
function initDev() {
  {
    initCustomFormatter();
  }
}
{
  initDev();
}
const siteData$1 = JSON.parse('{"base":"/DOI-Styleguide/","lang":"en-US","title":"Department of Industry","description":"Department of Industry style guide.","head":[],"locales":{}}');
var resolveHeadIdentifier = ([
  tag,
  attrs,
  content
]) => {
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
var dedupeHead = (head) => {
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
var isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
var isLinkMailto = (link) => /^mailto:/.test(link);
var isLinkTel = (link) => /^tel:/.test(link);
var isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
var removeEndingSlash = (str) => str.replace(/\/$/, "");
var removeLeadingSlash = (str) => str.replace(/^\//, "");
var resolveLocalePath = (locales2, routePath) => {
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
const pagesComponents = {
  "v-8daa1a0e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./index.html.ee4c2147.js"
  ), true ? [] : void 0)),
  "v-3ef8b1f8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3ef8b1f8" */
    "./accessibility.html.10e61490.js"
  ), true ? [] : void 0)),
  "v-52062726": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-52062726" */
    "./introduction.html.4f7e128d.js"
  ), true ? [] : void 0)),
  "v-7224785e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7224785e" */
    "./page-patterns.html.c64cb825.js"
  ), true ? [] : void 0)),
  "v-953546a4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-953546a4" */
    "./test.html.1a1b0670.js"
  ), true ? [] : void 0)),
  "v-1020f180": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1020f180" */
    "./index.html.007a8a8c.js"
  ), true ? [] : void 0)),
  "v-ec6a10f0": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-ec6a10f0" */
    "./index.html.f55ea4c4.js"
  ), true ? [] : void 0)),
  "v-6eb03d17": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-6eb03d17" */
    "./colour-palette.html.fa274244.js"
  ), true ? [] : void 0)),
  "v-0ff3f3b6": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-0ff3f3b6" */
    "./cta-links.html.000d76ed.js"
  ), true ? [] : void 0)),
  "v-77f48efc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-77f48efc" */
    "./typography.html.18530bcb.js"
  ), true ? [] : void 0)),
  "v-3860ac4e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3860ac4e" */
    "./biography.html.06a86f9b.js"
  ), true ? [] : void 0)),
  "v-f4398dba": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-f4398dba" */
    "./homepage.html.5955a39c.js"
  ), true ? [] : void 0)),
  "v-69b4c86c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-69b4c86c" */
    "./news-case-event.html.25521eda.js"
  ), true ? [] : void 0)),
  "v-44aa7896": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-44aa7896" */
    "./publication.html.1422a696.js"
  ), true ? [] : void 0)),
  "v-398d9b95": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-398d9b95" */
    "./standard-content-adc.html.05867ade.js"
  ), true ? [] : void 0)),
  "v-15d89c88": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-15d89c88" */
    "./standard-content.html.22cbb64e.js"
  ), true ? [] : void 0)),
  "v-de7ecd86": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-de7ecd86" */
    "./bio.html.45603c3b.js"
  ), true ? [] : void 0)),
  "v-02b5e3eb": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-02b5e3eb" */
    "./event.html.d2374049.js"
  ), true ? [] : void 0)),
  "v-24dadf94": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-24dadf94" */
    "./filtered.html.32b22859.js"
  ), true ? [] : void 0)),
  "v-1686c20c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1686c20c" */
    "./news.html.78ea045e.js"
  ), true ? [] : void 0)),
  "v-7ff2de99": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-7ff2de99" */
    "./publication.html.a4d993d8.js"
  ), true ? [] : void 0)),
  "v-d049d46a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-d049d46a" */
    "./request-for-quote.html.9c56658d.js"
  ), true ? [] : void 0)),
  "v-5d1bc6bc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5d1bc6bc" */
    "./checkbox.html.056db50b.js"
  ), true ? [] : void 0)),
  "v-1440f514": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1440f514" */
    "./dropdown.html.ffa392f5.js"
  ), true ? [] : void 0)),
  "v-54a55072": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-54a55072" */
    "./tabs.html.0d402d0b.js"
  ), true ? [] : void 0)),
  "v-43a6ffe8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-43a6ffe8" */
    "./tags.html.a2a191b1.js"
  ), true ? [] : void 0)),
  "v-0bf947dc": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-0bf947dc" */
    "./global-footer.html.57bd1180.js"
  ), true ? [] : void 0)),
  "v-4941c50e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4941c50e" */
    "./header.html.b339fec7.js"
  ), true ? [] : void 0)),
  "v-ebed8532": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-ebed8532" */
    "./secondary-footer.html.62bab21e.js"
  ), true ? [] : void 0)),
  "v-3e01df16": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3e01df16" */
    "./alert.html.8be0add0.js"
  ), true ? [] : void 0)),
  "v-30861021": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-30861021" */
    "./callout.html.b08f0dd0.js"
  ), true ? [] : void 0)),
  "v-0642af97": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-0642af97" */
    "./document-download.html.655a3dce.js"
  ), true ? [] : void 0)),
  "v-a2a1a9a4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-a2a1a9a4" */
    "./filterable-table.html.0683f549.js"
  ), true ? [] : void 0)),
  "v-2ea63fc6": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2ea63fc6" */
    "./form.html.3e510bca.js"
  ), true ? [] : void 0)),
  "v-3ba80226": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3ba80226" */
    "./media.html.b1ef45f9.js"
  ), true ? [] : void 0)),
  "v-3c69c507": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3c69c507" */
    "./pagination.html.746bff83.js"
  ), true ? [] : void 0)),
  "v-14e01543": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-14e01543" */
    "./table.html.fb8d94ad.js"
  ), true ? [] : void 0)),
  "v-5d423ac0": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5d423ac0" */
    "./timeline.html.0070f304.js"
  ), true ? [] : void 0)),
  "v-5b11f538": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5b11f538" */
    "./breadcrumbs.html.ef02ac45.js"
  ), true ? [] : void 0)),
  "v-ca2bbd60": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-ca2bbd60" */
    "./in-section-navigation.html.600d3dad.js"
  ), true ? [] : void 0)),
  "v-b5c0254c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-b5c0254c" */
    "./mega-menu.html.9de5d1da.js"
  ), true ? [] : void 0)),
  "v-75635350": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-75635350" */
    "./on-this-page-menu.html.3e1c38ef.js"
  ), true ? [] : void 0)),
  "v-6eb84da4": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-6eb84da4" */
    "./publication-section-divider.html.0733e715.js"
  ), true ? [] : void 0)),
  "v-d41deffe": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-d41deffe" */
    "./tile-navigation.html.22fd7512.js"
  ), true ? [] : void 0)),
  "v-3706649a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./404.html.6fa2c1df.js"
  ), true ? [] : void 0))
};
const layoutComponents = {
  "404": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "layout-404" */
    "./404.44fea08b.js"
  ), true ? [] : void 0)),
  "Layout": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "layout-Layout" */
    "./Layout.bb4a61b2.js"
  ), true ? ["assets/Layout.bb4a61b2.js","assets/PageFooter.441e9861.js","assets/arrow-right.3745e7aa.js"] : void 0)),
  "ParentPage": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "layout-ParentPage" */
    "./ParentPage.5e3895fc.js"
  ), true ? ["assets/ParentPage.5e3895fc.js","assets/PageFooter.441e9861.js","assets/arrow-right.3745e7aa.js"] : void 0))
};
var pagesData = ref(pagesData$1);
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
var pageData = ref(pageDataEmpty);
var usePageData = () => pageData;
if (import_meta.webpackHot || false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data) => {
    pagesData.value[data.key] = () => Promise.resolve(data);
    if (data.key === pageData.value.key) {
      pageData.value = data;
    }
  };
}
var pageFrontmatterSymbol = Symbol("");
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol("");
var usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol("");
var pageLangSymbol = Symbol("");
var usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var routeLocaleSymbol = Symbol("");
var useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = ref(siteData$1);
var useSiteData = () => siteData;
if (import_meta.webpackHot || false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data) => {
    siteData.value = data;
  };
}
var siteLocaleDataSymbol = Symbol("");
var useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var updateHeadSymbol = Symbol("");
var resolvers = reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 != null ? pageData2 : pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString$1(frontmatter.description) ? frontmatter.description : siteLocale.description;
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
  resolveSiteLocaleData: (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale])
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b;
      return isMounted.value ? (_b = (_a2 = ctx.slots).default) == null ? void 0 : _b.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page = usePageData();
    const pageComponent = computed(() => pagesComponents[props.pageKey || page.value.key]);
    return () => pageComponent.value ? h(pageComponent.value) : h("div", "404 Not Found");
  }
});
var Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString$1(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || resolveComponent(layoutName, false);
    });
    return () => h(layoutComponent.value);
  }
});
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base2 = useSiteData().value.base;
  return `${base2}${removeLeadingSlash(url)}`;
};
var defineClientConfig = (clientConfig) => clientConfig;
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
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
}
const isProxyAvailable = typeof Proxy === "function";
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
let supported;
let perf;
function isPerformanceSupported() {
  var _a2;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else if (typeof global !== "undefined" && ((_a2 = global.perf_hooks) === null || _a2 === void 0 ? void 0 : _a2.performance)) {
    supported = true;
    perf = global.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}
class ApiProxy {
  constructor(plugin, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin.settings) {
      for (const id in plugin.settings) {
        const item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e) {
        }
        currentSettings = value;
      },
      now() {
        return now();
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve2) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: resolve2
              });
            });
          };
        }
      }
    });
  }
  async setRealTarget(target) {
    this.target = target;
    for (const item of this.onQueue) {
      this.target.on[item.method](...item.args);
    }
    for (const item of this.targetQueue) {
      item.resolve(await this.target[item.method](...item.args));
    }
  }
}
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target = getTarget();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy)
      setupFn(proxy.proxiedTarget);
  }
}
/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const PolySymbol = (name) => hasSymbol ? Symbol("[vue-router]: " + name) : "[vue-router]: " + name;
const matchedRouteKey = /* @__PURE__ */ PolySymbol("router view location matched");
const viewDepthKey = /* @__PURE__ */ PolySymbol("router view depth");
const routerKey = /* @__PURE__ */ PolySymbol("router");
const routeLocationKey = /* @__PURE__ */ PolySymbol("route location");
const routerViewLocationKey = /* @__PURE__ */ PolySymbol("router view location");
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === "Module";
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop$1 = () => {
};
function warn(msg) {
  const args = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + msg].concat(args));
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const searchPos = location2.indexOf("?");
  const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base2) {
  if (!base2 || !pathname.toLowerCase().startsWith(base2.toLowerCase()))
    return pathname;
  return pathname.slice(base2.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a, b) {
  const aLastIndex = a.matched.length - 1;
  const bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length)
    return false;
  for (const key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a, b) {
  return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
  return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!from.startsWith("/")) {
    warn(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
    return to;
  }
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (position === 1 || segment === ".")
      continue;
    if (segment === "..")
      position--;
    else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base2) {
  if (!base2) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base2 = baseEl && baseEl.getAttribute("href") || "/";
      base2 = base2.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base2 = "/";
    }
  }
  if (base2[0] !== "/" && base2[0] !== "#")
    base2 = "/" + base2;
  return removeTrailingSlash(base2);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base2, location2) {
  return base2.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset2) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset2.behavior,
    left: elRect.left - docRect.left - (offset2.left || 0),
    top: elRect.top - docRect.top - (offset2.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    if (typeof position.el === "string") {
      if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
        try {
          const foundEl = document.querySelector(position.el);
          if (isIdSelector && foundEl) {
            warn(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
            return;
          }
        } catch (err) {
          warn(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
          return;
        }
      }
    }
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      warn(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base2, location2) {
  const { pathname, search, hash } = location2;
  const hashPos = base2.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base2.slice(hashPos)) ? base2.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base2);
  return path + search + hash;
}
function useHistoryListeners(base2, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base2, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index2 = listeners.indexOf(callback);
      if (index2 > -1)
        listeners.splice(index2, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener);
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base2) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base2, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      position: history2.length - 1,
      replaced: true,
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace2) {
    const hashIndex = base2.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base2 : base2.slice(hashIndex)) + to : createBaseLocation() + base2 + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        warn("Error with push/replace State", err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    const state = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign({}, historyState.value, history2.state, {
      forward: to,
      scroll: computeScrollPosition()
    });
    if (!history2.state) {
      warn(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`);
    }
    changeLocation(currentState.current, currentState, true);
    const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base2) {
  base2 = normalizeBase(base2);
  const historyNavigation = useHistoryStateNavigation(base2);
  const historyListeners = useHistoryListeners(base2, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign({
    location: "",
    base: base2,
    go,
    createHref: createHref.bind(null, base2)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("navigation failure");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
const ErrorTypeMessages = {
  [1]({ location: location2, currentLocation }) {
    return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
  },
  [2]({ from, to }) {
    return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
  },
  [4]({ from, to }) {
    return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
  },
  [8]({ from, to }) {
    return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
  },
  [16]({ from, to }) {
    return `Avoided redundant navigation to current location: "${from.fullPath}".`;
  }
};
function createRouterError(type, params) {
  {
    return assign(new Error(ErrorTypeMessages[type](params)), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const propertiesToLog = ["params", "query", "hash"];
function stringifyRoute(to) {
  if (typeof to === "string")
    return to;
  if ("path" in to)
    return to.path;
  const location2 = {};
  for (const key of propertiesToLog) {
    if (key in to)
      location2[key] = to[key];
  }
  return JSON.stringify(location2, null, 2);
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [90];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i = 1; i < match.length; i++) {
      const value = match[i] || "";
      const key = keys[i - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (Array.isArray(param) && !repeatable)
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          const text = Array.isArray(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2 && segments.length > 1) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path;
  }
  return {
    re,
    score,
    keys,
    parse,
    stringify
  };
}
function compareScoreArray(a, b) {
  let i = 0;
  while (i < a.length && i < b.length) {
    const diff = b[i] - a[i];
    if (diff)
      return diff;
    i++;
  }
  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a, b) {
  let i = 0;
  const aScore = a.score;
  const bScore = b.score;
  while (i < aScore.length && i < bScore.length) {
    const comp = compareScoreArray(aScore[i], bScore[i]);
    if (comp)
      return comp;
    i++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Route paths should start with a "/": "${path}" should be "/${path}".`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer2}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i = 0;
  let char;
  let buffer2 = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer2)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer2
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer2}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer2,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer2 = "";
  }
  function addCharToBuffer() {
    buffer2 += char;
  }
  while (i < path.length) {
    char = path[i++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer2) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer2}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  {
    const existingKeys = /* @__PURE__ */ new Set();
    for (const key of parser.keys) {
      if (existingKeys.has(key.name))
        warn(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
      existingKeys.add(key.name);
    }
  }
  const matcher = assign(parser, {
    record,
    parent,
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign({}, mainNormalizedRecord, {
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      if (normalizedRecord.path === "*") {
        throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\nSee more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (parent && path[0] === "/")
        checkMissingParamsInAbsolutePath(matcher, parent);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
        {
          checkSameParams(originalRecord, matcher);
        }
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if ("children" in mainNormalizedRecord) {
        const children = mainNormalizedRecord.children;
        for (let i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      }
      originalRecord = originalRecord || matcher;
      insertMatcher(matcher);
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop$1;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index2 = matchers.indexOf(matcherRef);
      if (index2 > -1) {
        matchers.splice(index2, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i = 0;
    while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
      i++;
    matchers.splice(i, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
      path = matcher.stringify(params);
    } else if ("path" in location2) {
      path = location2.path;
      if (!path.startsWith("/")) {
        warn(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`);
      }
      matcher = matchers.find((m) => m.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes.forEach((route) => addRoute(route));
  return { addRoute, resolve: resolve2, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || {} : { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "boolean" ? props : props[name];
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }
  return options;
}
function isSameParam(a, b) {
  return a.name === b.name && a.optional === b.optional && a.repeatable === b.repeatable;
}
function checkSameParams(a, b) {
  for (const key of a.keys) {
    if (!key.optional && !b.keys.find(isSameParam.bind(null, key)))
      return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" should have the exact same param named "${key.name}"`);
  }
  for (const key of b.keys) {
    if (!key.optional && !a.keys.find(isSameParam.bind(null, key)))
      return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" should have the exact same param named "${key.name}"`);
  }
}
function checkMissingParamsInAbsolutePath(record, parent) {
  for (const key of parent.keys) {
    if (!record.keys.find(isSameParam.bind(null, key)))
      return warn(`Absolute path "${record.record.path}" should have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
  }
}
function isRecordChildOf(record, parent) {
  return parent.children.some((child) => child === record || isRecordChildOf(record, child));
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
    warn(`Error decoding "${text}". Using original value`);
  }
  return "" + text;
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!Array.isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = Array.isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = Array.isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
function useCallbacks() {
  let handlers2 = [];
  function add2(handler) {
    handlers2.push(handler);
    return () => {
      const i = handlers2.indexOf(handler);
      if (i > -1)
        handlers2.splice(i, 1);
    };
  }
  function reset2() {
    handlers2 = [];
  }
  return {
    add: add2,
    list: () => handlers2,
    reset: reset2
  };
}
function guardToPromiseFn(guard, to, from, record, name) {
  const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false)
        reject(createRouterError(4, {
          from,
          to
        }));
      else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
          enterCallbackArray.push(valid);
        resolve2();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to, from, canOnlyBeCalledOnce(next, to, from));
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    if (guard.length > 2) {
      const message = `The "next" callback was never called inside of ${guard.name ? '"' + guard.name + '"' : ""}:
${guard.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof guardReturn === "object" && "then" in guardReturn) {
        guardCall = guardCall.then((resolvedValue) => {
          if (!next._called) {
            warn(message);
            return Promise.reject(new Error("Invalid navigation guard"));
          }
          return resolvedValue;
        });
      } else if (guardReturn !== void 0) {
        if (!next._called) {
          warn(message);
          reject(new Error("Invalid navigation guard"));
          return;
        }
      }
    }
    guardCall.catch((err) => reject(err));
  });
}
function canOnlyBeCalledOnce(next, to, from) {
  let called = 0;
  return function() {
    if (called++ === 1)
      warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
    next._called = true;
    if (called === 1)
      next.apply(null, arguments);
  };
}
function extractComponentsGuards(matched, guardType, to, from) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      {
        if (!rawComponent || typeof rawComponent !== "object" && typeof rawComponent !== "function") {
          warn(`Component "${name}" in record with path "${record.path}" is not a valid component. Received "${String(rawComponent)}".`);
          throw new Error("Invalid route component");
        } else if ("then" in rawComponent) {
          warn(`Component "${name}" in record with path "${record.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const promise2 = rawComponent;
          rawComponent = () => promise2;
        } else if (rawComponent.__asyncLoader && !rawComponent.__warnedDefineAsync) {
          rawComponent.__warnedDefineAsync = true;
          warn(`Component "${name}" in record with path "${record.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`);
        }
      }
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
      } else {
        let componentPromise = rawComponent();
        if (!("catch" in componentPromise)) {
          warn(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
          componentPromise = Promise.resolve(componentPromise);
        }
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink(props) {
  const router = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index2 > -1)
      return index2;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2;
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent(e)) {
      return router[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop$1);
    }
    return Promise.resolve();
  }
  if (isBrowser) {
    const instance = getCurrentInstance();
    if (instance) {
      const linkContextDevtools = {
        route: route.value,
        isActive: isActive.value,
        isExactActive: isExactActive.value
      };
      instance.__vrl_devtools = instance.__vrl_devtools || [];
      instance.__vrl_devtools.push(linkContextDevtools);
      watchEffect(() => {
        linkContextDevtools.route = route.value;
        linkContextDevtools.isActive = isActive.value;
        linkContextDevtools.isExactActive = isExactActive.value;
      }, { flush: "post" });
    }
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
    return;
  if (e.defaultPrevented)
    return;
  if (e.button !== void 0 && e.button !== 0)
    return;
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e.preventDefault)
    e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: { MODE: 3 },
  setup(props, { attrs, slots }) {
    warnDeprecatedUsage();
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const depth = inject(viewDepthKey, 0);
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth]);
    provide(viewDepthKey, depth + 1);
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[props.name];
      const currentName = props.name;
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[props.name];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      if (isBrowser && component.ref) {
        const info = {
          depth,
          name: matchedRoute.name,
          path: matchedRoute.path,
          meta: matchedRoute.meta
        };
        const internalInstances = Array.isArray(component.ref) ? component.ref.map((r2) => r2.i) : [component.ref.i];
        internalInstances.forEach((instance) => {
          instance.__vrv_devtools = info;
        });
      }
      return normalizeSlot(slots.default, { Component: component, route }) || component;
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function warnDeprecatedUsage() {
  const instance = getCurrentInstance();
  const parentName = instance.parent && instance.parent.type.name;
  if (parentName && (parentName === "KeepAlive" || parentName.includes("Transition"))) {
    const comp = parentName === "KeepAlive" ? "keep-alive" : "transition";
    warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${comp}>
    <component :is="Component" />
  </${comp}>
</router-view>`);
  }
}
function formatRouteLocation(routeLocation, tooltip) {
  const copy = assign({}, routeLocation, {
    matched: routeLocation.matched.map((matched) => omit(matched, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: true,
      display: routeLocation.fullPath,
      tooltip,
      value: copy
    }
  };
}
function formatDisplay(display) {
  return {
    _custom: {
      display
    }
  };
}
let routerId = 0;
function addDevtools(app, router, matcher) {
  if (router.__hasDevtools)
    return;
  router.__hasDevtools = true;
  const id = routerId++;
  setupDevtoolsPlugin({
    id: "org.vuejs.router" + (id ? "." + id : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app
  }, (api) => {
    api.on.inspectComponent((payload, ctx) => {
      if (payload.instanceData) {
        payload.instanceData.state.push({
          type: "Routing",
          key: "$route",
          editable: false,
          value: formatRouteLocation(router.currentRoute.value, "Current Route")
        });
      }
    });
    api.on.visitComponentTree(({ treeNode: node, componentInstance }) => {
      if (componentInstance.__vrv_devtools) {
        const info = componentInstance.__vrv_devtools;
        node.tags.push({
          label: (info.name ? `${info.name.toString()}: ` : "") + info.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: PINK_500
        });
      }
      if (Array.isArray(componentInstance.__vrl_devtools)) {
        componentInstance.__devtoolsApi = api;
        componentInstance.__vrl_devtools.forEach((devtoolsData) => {
          let backgroundColor = ORANGE_400;
          let tooltip = "";
          if (devtoolsData.isExactActive) {
            backgroundColor = LIME_500;
            tooltip = "This is exactly active";
          } else if (devtoolsData.isActive) {
            backgroundColor = BLUE_600;
            tooltip = "This link is active";
          }
          node.tags.push({
            label: devtoolsData.route.path,
            textColor: 0,
            tooltip,
            backgroundColor
          });
        });
      }
    });
    watch(router.currentRoute, () => {
      refreshRoutesView();
      api.notifyComponentUpdate();
      api.sendInspectorTree(routerInspectorId);
      api.sendInspectorState(routerInspectorId);
    });
    const navigationsLayerId = "router:navigations:" + id;
    api.addTimelineLayer({
      id: navigationsLayerId,
      label: `Router${id ? " " + id : ""} Navigations`,
      color: 4237508
    });
    router.onError((error, to) => {
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: "Error during Navigation",
          subtitle: to.fullPath,
          logType: "error",
          time: api.now(),
          data: { error },
          groupId: to.meta.__navigationId
        }
      });
    });
    let navigationId = 0;
    router.beforeEach((to, from) => {
      const data = {
        guard: formatDisplay("beforeEach"),
        from: formatRouteLocation(from, "Current Location during this navigation"),
        to: formatRouteLocation(to, "Target location")
      };
      Object.defineProperty(to.meta, "__navigationId", {
        value: navigationId++
      });
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          time: api.now(),
          title: "Start of navigation",
          subtitle: to.fullPath,
          data,
          groupId: to.meta.__navigationId
        }
      });
    });
    router.afterEach((to, from, failure) => {
      const data = {
        guard: formatDisplay("afterEach")
      };
      if (failure) {
        data.failure = {
          _custom: {
            type: Error,
            readOnly: true,
            display: failure ? failure.message : "",
            tooltip: "Navigation Failure",
            value: failure
          }
        };
        data.status = formatDisplay("\u274C");
      } else {
        data.status = formatDisplay("\u2705");
      }
      data.from = formatRouteLocation(from, "Current Location during this navigation");
      data.to = formatRouteLocation(to, "Target location");
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: "End of navigation",
          subtitle: to.fullPath,
          time: api.now(),
          data,
          logType: failure ? "warning" : "default",
          groupId: to.meta.__navigationId
        }
      });
    });
    const routerInspectorId = "router-inspector:" + id;
    api.addInspector({
      id: routerInspectorId,
      label: "Routes" + (id ? " " + id : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function refreshRoutesView() {
      if (!activeRoutesPayload)
        return;
      const payload = activeRoutesPayload;
      let routes = matcher.getRoutes().filter((route) => !route.parent);
      routes.forEach(resetMatchStateOnRouteRecord);
      if (payload.filter) {
        routes = routes.filter((route) => isRouteMatching(route, payload.filter.toLowerCase()));
      }
      routes.forEach((route) => markRouteRecordActive(route, router.currentRoute.value));
      payload.rootNodes = routes.map(formatRouteRecordForInspector);
    }
    let activeRoutesPayload;
    api.on.getInspectorTree((payload) => {
      activeRoutesPayload = payload;
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        refreshRoutesView();
      }
    });
    api.on.getInspectorState((payload) => {
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        const routes = matcher.getRoutes();
        const route = routes.find((route2) => route2.record.__vd_id === payload.nodeId);
        if (route) {
          payload.state = {
            options: formatRouteRecordMatcherForStateInspector(route)
          };
        }
      }
    });
    api.sendInspectorTree(routerInspectorId);
    api.sendInspectorState(routerInspectorId);
  });
}
function modifierForKey(key) {
  if (key.optional) {
    return key.repeatable ? "*" : "?";
  } else {
    return key.repeatable ? "+" : "";
  }
}
function formatRouteRecordMatcherForStateInspector(route) {
  const { record } = route;
  const fields = [
    { editable: false, key: "path", value: record.path }
  ];
  if (record.name != null) {
    fields.push({
      editable: false,
      key: "name",
      value: record.name
    });
  }
  fields.push({ editable: false, key: "regexp", value: route.re });
  if (route.keys.length) {
    fields.push({
      editable: false,
      key: "keys",
      value: {
        _custom: {
          type: null,
          readOnly: true,
          display: route.keys.map((key) => `${key.name}${modifierForKey(key)}`).join(" "),
          tooltip: "Param keys",
          value: route.keys
        }
      }
    });
  }
  if (record.redirect != null) {
    fields.push({
      editable: false,
      key: "redirect",
      value: record.redirect
    });
  }
  if (route.alias.length) {
    fields.push({
      editable: false,
      key: "aliases",
      value: route.alias.map((alias) => alias.record.path)
    });
  }
  fields.push({
    key: "score",
    editable: false,
    value: {
      _custom: {
        type: null,
        readOnly: true,
        display: route.score.map((score) => score.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: route.score
      }
    }
  });
  return fields;
}
const PINK_500 = 15485081;
const BLUE_600 = 2450411;
const LIME_500 = 8702998;
const CYAN_400 = 2282478;
const ORANGE_400 = 16486972;
const DARK = 6710886;
function formatRouteRecordForInspector(route) {
  const tags = [];
  const { record } = route;
  if (record.name != null) {
    tags.push({
      label: String(record.name),
      textColor: 0,
      backgroundColor: CYAN_400
    });
  }
  if (record.aliasOf) {
    tags.push({
      label: "alias",
      textColor: 0,
      backgroundColor: ORANGE_400
    });
  }
  if (route.__vd_match) {
    tags.push({
      label: "matches",
      textColor: 0,
      backgroundColor: PINK_500
    });
  }
  if (route.__vd_exactActive) {
    tags.push({
      label: "exact",
      textColor: 0,
      backgroundColor: LIME_500
    });
  }
  if (route.__vd_active) {
    tags.push({
      label: "active",
      textColor: 0,
      backgroundColor: BLUE_600
    });
  }
  if (record.redirect) {
    tags.push({
      label: "redirect: " + (typeof record.redirect === "string" ? record.redirect : "Object"),
      textColor: 16777215,
      backgroundColor: DARK
    });
  }
  let id = record.__vd_id;
  if (id == null) {
    id = String(routeRecordId++);
    record.__vd_id = id;
  }
  return {
    id,
    label: record.path,
    tags,
    children: route.children.map(formatRouteRecordForInspector)
  };
}
let routeRecordId = 0;
const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
  const isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
  route.__vd_exactActive = route.__vd_active = isExactActive;
  if (!isExactActive) {
    route.__vd_active = currentRoute.matched.some((match) => isSameRouteRecord(match, route.record));
  }
  route.children.forEach((childRoute) => markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
  route.__vd_match = false;
  route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
  const found = String(route.re).match(EXTRACT_REGEXP_RE);
  route.__vd_match = false;
  if (!found || found.length < 3) {
    return false;
  }
  const nonEndingRE = new RegExp(found[1].replace(/\$$/, ""), found[2]);
  if (nonEndingRE.test(filter)) {
    route.children.forEach((child) => isRouteMatching(child, filter));
    if (route.record.path !== "/" || filter === "/") {
      route.__vd_match = route.re.test(filter);
      return true;
    }
    return false;
  }
  const path = route.record.path.toLowerCase();
  const decodedPath = decode(path);
  if (!filter.startsWith("/") && (decodedPath.includes(filter) || path.includes(filter)))
    return true;
  if (decodedPath.startsWith(filter) || path.startsWith(filter))
    return true;
  if (route.record.name && String(route.record.name).includes(filter))
    return true;
  return route.children.some((child) => isRouteMatching(child, filter));
}
function omit(obj, keys) {
  const ret = {};
  for (const key in obj) {
    if (!keys.includes(key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
}
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  if (!routerHistory)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = applyToParams.bind(null, decode);
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    } else {
      warn(`Cannot remove non-existent route "${String(name)}"`);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      {
        if (href2.startsWith("//"))
          warn(`Location "${rawLocation}" resolved to "${href2}". A resolved location cannot start with multiple slashes.`);
        else if (!matchedRoute2.matched.length) {
          warn(`No match found for location with path "${rawLocation}"`);
        }
      }
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      if ("params" in rawLocation && !("name" in rawLocation) && Object.keys(rawLocation.params).length) {
        warn(`Path "${rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
      }
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    if (hash && !hash.startsWith("#")) {
      warn(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
    }
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    {
      if (href.startsWith("//")) {
        warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
      } else if (!matchedRoute.matched.length) {
        warn(`No match found for location with path "${"path" in rawLocation ? rawLocation.path : rawLocation}"`);
      }
    }
    return assign({
      fullPath,
      hash,
      query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
        newTargetLocation.params = {};
      }
      if (!("path" in newTargetLocation) && !("name" in newTargetLocation)) {
        warn(`Invalid redirect found:
${JSON.stringify(newTargetLocation, null, 2)}
 when navigating to "${to.fullPath}". A redirect must contain a name or path. This will break in production.`);
        throw new Error("Invalid redirect");
      }
      return assign({
        query: to.query,
        hash: to.hash,
        params: to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
        state: data,
        force,
        replace: replace2
      }), redirectedFrom || targetLocation);
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(from, from, true, false);
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(failure2, 2)) {
          if (isSameRouteLocation(stringifyQuery$1, resolve2(failure2.to), toLocation) && redirectedFrom && (redirectedFrom._count = redirectedFrom._count ? redirectedFrom._count + 1 : 1) > 10) {
            warn(`Detected an infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`);
            return Promise.reject(new Error("Infinite redirect in navigation guard"));
          }
          return pushWithRedirect(assign(locationAsObject(failure2.to), {
            state: data,
            force,
            replace: replace2
          }), redirectedFrom || toLocation);
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of to.matched) {
        if (record.beforeEnter && !from.matched.includes(record)) {
          if (Array.isArray(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    for (const guard of afterGuards.list())
      guard(to, from, failure);
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop$1);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(error, 4 | 8)) {
          return error;
        }
        if (isNavigationFailure(error, 2)) {
          pushWithRedirect(error.to, toLocation).then((failure) => {
            if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop$1);
          return Promise.reject();
        }
        if (info.delta)
          routerHistory.go(-info.delta, false);
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(toLocation, from, false);
        if (failure) {
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop$1);
    });
  }
  let readyHandlers = useCallbacks();
  let errorHandlers = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorHandlers.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      {
        warn("uncaught error during route navigation:");
      }
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve3, reject) => {
      readyHandlers.add([resolve3, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve3, reject]) => err ? reject(err) : resolve3());
      readyHandlers.reset();
    }
    return err;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router = {
    currentRoute,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady,
    install(app) {
      const router2 = this;
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router2;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
          warn("Unexpected error when starting the router:", err);
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        reactiveRoute[key] = computed(() => currentRoute.value[key]);
      }
      app.provide(routerKey, router2);
      app.provide(routeLocationKey, reactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
      if (isBrowser) {
        addDevtools(app, router2, matcher);
      }
    }
  };
  return router;
}
function runGuardQueue(guards) {
  return guards.reduce((promise2, guard) => promise2.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i = 0; i < len; i++) {
    const recordFrom = from.matched[i];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
function useRoute() {
  return inject(routeLocationKey);
}
const useActiveHeaderLinks = ({ headerLinkSelector: headerLinkSelector2, headerAnchorSelector: headerAnchorSelector2, delay: delay2, offset: offset2 = 5 }) => {
  const router = useRouter();
  const page = usePageData();
  const setActiveRouteHash = () => {
    var _a2, _b, _c, _d;
    const scrollTop = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop);
    const isAtPageTop = Math.abs(scrollTop - 0) < offset2;
    if (isAtPageTop) {
      replaceWithoutScrollBehavior(router, {
        hash: "",
        force: true
      });
      return;
    }
    const scrollBottom = window.innerHeight + scrollTop;
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const isAtPageBottom = Math.abs(scrollHeight - scrollBottom) < offset2;
    const headerLinks = Array.from(document.querySelectorAll(headerLinkSelector2));
    const headerAnchors = Array.from(document.querySelectorAll(headerAnchorSelector2));
    const existedHeaderAnchors = headerAnchors.filter((anchor) => headerLinks.some((link) => link.hash === anchor.hash));
    for (let i = 0; i < existedHeaderAnchors.length; i++) {
      const anchor = existedHeaderAnchors[i];
      const nextAnchor = existedHeaderAnchors[i + 1];
      const hasPassedCurrentAnchor = scrollTop >= ((_b = (_a2 = anchor.parentElement) == null ? void 0 : _a2.offsetTop) != null ? _b : 0) - offset2;
      const hasNotPassedNextAnchor = !nextAnchor || scrollTop < ((_d = (_c = nextAnchor.parentElement) == null ? void 0 : _c.offsetTop) != null ? _d : 0) - offset2;
      const isActive = hasPassedCurrentAnchor && hasNotPassedNextAnchor;
      if (!isActive)
        continue;
      const routeHash = decodeURIComponent(router.currentRoute.value.hash);
      const anchorHash = decodeURIComponent(anchor.hash);
      if (routeHash === anchorHash)
        return;
      if (isAtPageBottom) {
        for (let j = i + 1; j < existedHeaderAnchors.length; j++) {
          if (routeHash === decodeURIComponent(existedHeaderAnchors[j].hash)) {
            return;
          }
        }
      }
      replaceWithoutScrollBehavior(router, {
        hash: anchorHash,
        force: true
      });
      return;
    }
  };
  const onScroll = r(setActiveRouteHash, delay2);
  onMounted(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll);
  });
  watch(() => page.value.path, onScroll);
};
const replaceWithoutScrollBehavior = async (router, ...args) => {
  const { scrollBehavior } = router.options;
  router.options.scrollBehavior = void 0;
  await router.replace(...args).finally(() => router.options.scrollBehavior = scrollBehavior);
};
const headerLinkSelector = "a.sidebar-item";
const headerAnchorSelector = ".header-anchor";
const delay$1 = 300;
const offset = 5;
var clientConfig0 = defineClientConfig({
  setup() {
    useActiveHeaderLinks({
      headerLinkSelector,
      headerAnchorSelector,
      delay: delay$1,
      offset
    });
  }
});
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
var vars$3 = /* @__PURE__ */ (() => ":root {\n  --back-to-top-z-index: 5;\n\n  --back-to-top-color: #3eaf7c;\n  --back-to-top-color-hover: #71cda3;\n}\n")();
var backToTop = /* @__PURE__ */ (() => ".back-to-top {\n  cursor: pointer;\n  position: fixed;\n  bottom: 2rem;\n  right: 2.5rem;\n  width: 2rem;\n  height: 1.2rem;\n  background-color: var(--back-to-top-color);\n  -webkit-mask: url('/DOI-Styleguide/assets/back-to-top.8efcbe56.svg') no-repeat;\n          mask: url('/DOI-Styleguide/assets/back-to-top.8efcbe56.svg') no-repeat;\n  z-index: var(--back-to-top-z-index);\n}\n\n.back-to-top:hover {\n  background-color: var(--back-to-top-color-hover);\n}\n\n@media (max-width: 959px) {\n  .back-to-top {\n    display: none;\n  }\n}\n\n.back-to-top-enter-active,\n.back-to-top-leave-active {\n  transition: opacity 0.3s;\n}\n\n.back-to-top-enter-from,\n.back-to-top-leave-to {\n  opacity: 0;\n}\n")();
const BackToTop = defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = ref(0);
    const show = computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => h(Transition, {
      name: "back-to-top"
    }, () => show.value ? backToTopEl : null);
  }
});
var clientConfig1 = defineClientConfig({
  rootComponents: [BackToTop]
});
var vars$2 = /* @__PURE__ */ (() => ":root {\n  --external-link-icon-color: #aaa;\n}\n")();
var externalLinkIcon = /* @__PURE__ */ (() => ".external-link-icon {\n  position: relative;\n  display: inline-block;\n  color: var(--external-link-icon-color);\n  vertical-align: middle;\n  top: -1px;\n}\n\n.external-link-icon-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n")();
const svg = h("svg", {
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
  h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
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
    const locale = computed(() => {
      var _a2;
      return (_a2 = props.locales[routeLocale.value]) != null ? _a2 : {
        openInNewWindow: "open in new window"
      };
    });
    return () => h("span", [
      svg,
      h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = { "/": { "openInNewWindow": "open in new window" } };
var clientConfig2 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h(ExternalLinkIcon, { locales }));
  }
});
/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var isSupported = function isSupported2(node) {
  return node.tagName === "IMG";
};
var isNodeList = function isNodeList2(selector2) {
  return NodeList.prototype.isPrototypeOf(selector2);
};
var isNode = function isNode2(selector2) {
  return selector2 && selector2.nodeType === 1;
};
var isSvg = function isSvg2(image) {
  var source = image.currentSrc || image.src;
  return source.substr(-4).toLowerCase() === ".svg";
};
var getImagesFromSelector = function getImagesFromSelector2(selector2) {
  try {
    if (Array.isArray(selector2)) {
      return selector2.filter(isSupported);
    }
    if (isNodeList(selector2)) {
      return [].slice.call(selector2).filter(isSupported);
    }
    if (isNode(selector2)) {
      return [selector2].filter(isSupported);
    }
    if (typeof selector2 === "string") {
      return [].slice.call(document.querySelectorAll(selector2)).filter(isSupported);
    }
    return [];
  } catch (err) {
    throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
  }
};
var createOverlay = function createOverlay2(background) {
  var overlay = document.createElement("div");
  overlay.classList.add("medium-zoom-overlay");
  overlay.style.background = background;
  return overlay;
};
var cloneTarget = function cloneTarget2(template) {
  var _template$getBounding = template.getBoundingClientRect(), top = _template$getBounding.top, left = _template$getBounding.left, width = _template$getBounding.width, height = _template$getBounding.height;
  var clone = template.cloneNode();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  clone.removeAttribute("id");
  clone.style.position = "absolute";
  clone.style.top = top + scrollTop + "px";
  clone.style.left = left + scrollLeft + "px";
  clone.style.width = width + "px";
  clone.style.height = height + "px";
  clone.style.transform = "";
  return clone;
};
var createCustomEvent = function createCustomEvent2(type, params) {
  var eventParams = _extends({
    bubbles: false,
    cancelable: false,
    detail: void 0
  }, params);
  if (typeof window.CustomEvent === "function") {
    return new CustomEvent(type, eventParams);
  }
  var customEvent = document.createEvent("CustomEvent");
  customEvent.initCustomEvent(type, eventParams.bubbles, eventParams.cancelable, eventParams.detail);
  return customEvent;
};
var mediumZoom$1 = function mediumZoom(selector2) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var Promise2 = window.Promise || function Promise3(fn) {
    function noop2() {
    }
    fn(noop2, noop2);
  };
  var _handleClick = function _handleClick2(event) {
    var target = event.target;
    if (target === overlay) {
      close();
      return;
    }
    if (images.indexOf(target) === -1) {
      return;
    }
    toggle({ target });
  };
  var _handleScroll = function _handleScroll2() {
    if (isAnimating || !active.original) {
      return;
    }
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (Math.abs(scrollTop - currentScroll) > zoomOptions2.scrollOffset) {
      setTimeout(close, 150);
    }
  };
  var _handleKeyUp = function _handleKeyUp2(event) {
    var key = event.key || event.keyCode;
    if (key === "Escape" || key === "Esc" || key === 27) {
      close();
    }
  };
  var update = function update2() {
    var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var newOptions = options2;
    if (options2.background) {
      overlay.style.background = options2.background;
    }
    if (options2.container && options2.container instanceof Object) {
      newOptions.container = _extends({}, zoomOptions2.container, options2.container);
    }
    if (options2.template) {
      var template = isNode(options2.template) ? options2.template : document.querySelector(options2.template);
      newOptions.template = template;
    }
    zoomOptions2 = _extends({}, zoomOptions2, newOptions);
    images.forEach(function(image) {
      image.dispatchEvent(createCustomEvent("medium-zoom:update", {
        detail: { zoom }
      }));
    });
    return zoom;
  };
  var clone = function clone2() {
    var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return mediumZoom(_extends({}, zoomOptions2, options2));
  };
  var attach = function attach2() {
    for (var _len = arguments.length, selectors = Array(_len), _key = 0; _key < _len; _key++) {
      selectors[_key] = arguments[_key];
    }
    var newImages = selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []);
    newImages.filter(function(newImage) {
      return images.indexOf(newImage) === -1;
    }).forEach(function(newImage) {
      images.push(newImage);
      newImage.classList.add("medium-zoom-image");
    });
    eventListeners.forEach(function(_ref) {
      var type = _ref.type, listener = _ref.listener, options2 = _ref.options;
      newImages.forEach(function(image) {
        image.addEventListener(type, listener, options2);
      });
    });
    return zoom;
  };
  var detach = function detach2() {
    for (var _len2 = arguments.length, selectors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      selectors[_key2] = arguments[_key2];
    }
    if (active.zoomed) {
      close();
    }
    var imagesToDetach = selectors.length > 0 ? selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []) : images;
    imagesToDetach.forEach(function(image) {
      image.classList.remove("medium-zoom-image");
      image.dispatchEvent(createCustomEvent("medium-zoom:detach", {
        detail: { zoom }
      }));
    });
    images = images.filter(function(image) {
      return imagesToDetach.indexOf(image) === -1;
    });
    return zoom;
  };
  var on = function on2(type, listener) {
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image) {
      image.addEventListener("medium-zoom:" + type, listener, options2);
    });
    eventListeners.push({ type: "medium-zoom:" + type, listener, options: options2 });
    return zoom;
  };
  var off = function off2(type, listener) {
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image) {
      image.removeEventListener("medium-zoom:" + type, listener, options2);
    });
    eventListeners = eventListeners.filter(function(eventListener) {
      return !(eventListener.type === "medium-zoom:" + type && eventListener.listener.toString() === listener.toString());
    });
    return zoom;
  };
  var open = function open2() {
    var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref2.target;
    var _animate = function _animate2() {
      var container = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      var viewportWidth = void 0;
      var viewportHeight = void 0;
      if (zoomOptions2.container) {
        if (zoomOptions2.container instanceof Object) {
          container = _extends({}, container, zoomOptions2.container);
          viewportWidth = container.width - container.left - container.right - zoomOptions2.margin * 2;
          viewportHeight = container.height - container.top - container.bottom - zoomOptions2.margin * 2;
        } else {
          var zoomContainer = isNode(zoomOptions2.container) ? zoomOptions2.container : document.querySelector(zoomOptions2.container);
          var _zoomContainer$getBou = zoomContainer.getBoundingClientRect(), _width = _zoomContainer$getBou.width, _height = _zoomContainer$getBou.height, _left = _zoomContainer$getBou.left, _top = _zoomContainer$getBou.top;
          container = _extends({}, container, {
            width: _width,
            height: _height,
            left: _left,
            top: _top
          });
        }
      }
      viewportWidth = viewportWidth || container.width - zoomOptions2.margin * 2;
      viewportHeight = viewportHeight || container.height - zoomOptions2.margin * 2;
      var zoomTarget = active.zoomedHd || active.original;
      var naturalWidth = isSvg(zoomTarget) ? viewportWidth : zoomTarget.naturalWidth || viewportWidth;
      var naturalHeight = isSvg(zoomTarget) ? viewportHeight : zoomTarget.naturalHeight || viewportHeight;
      var _zoomTarget$getBoundi = zoomTarget.getBoundingClientRect(), top = _zoomTarget$getBoundi.top, left = _zoomTarget$getBoundi.left, width = _zoomTarget$getBoundi.width, height = _zoomTarget$getBoundi.height;
      var scaleX = Math.min(naturalWidth, viewportWidth) / width;
      var scaleY = Math.min(naturalHeight, viewportHeight) / height;
      var scale = Math.min(scaleX, scaleY);
      var translateX = (-left + (viewportWidth - width) / 2 + zoomOptions2.margin + container.left) / scale;
      var translateY = (-top + (viewportHeight - height) / 2 + zoomOptions2.margin + container.top) / scale;
      var transform = "scale(" + scale + ") translate3d(" + translateX + "px, " + translateY + "px, 0)";
      active.zoomed.style.transform = transform;
      if (active.zoomedHd) {
        active.zoomedHd.style.transform = transform;
      }
    };
    return new Promise2(function(resolve2) {
      if (target && images.indexOf(target) === -1) {
        resolve2(zoom);
        return;
      }
      var _handleOpenEnd = function _handleOpenEnd2() {
        isAnimating = false;
        active.zoomed.removeEventListener("transitionend", _handleOpenEnd2);
        active.original.dispatchEvent(createCustomEvent("medium-zoom:opened", {
          detail: { zoom }
        }));
        resolve2(zoom);
      };
      if (active.zoomed) {
        resolve2(zoom);
        return;
      }
      if (target) {
        active.original = target;
      } else if (images.length > 0) {
        var _images = images;
        active.original = _images[0];
      } else {
        resolve2(zoom);
        return;
      }
      active.original.dispatchEvent(createCustomEvent("medium-zoom:open", {
        detail: { zoom }
      }));
      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      isAnimating = true;
      active.zoomed = cloneTarget(active.original);
      document.body.appendChild(overlay);
      if (zoomOptions2.template) {
        var template = isNode(zoomOptions2.template) ? zoomOptions2.template : document.querySelector(zoomOptions2.template);
        active.template = document.createElement("div");
        active.template.appendChild(template.content.cloneNode(true));
        document.body.appendChild(active.template);
      }
      document.body.appendChild(active.zoomed);
      window.requestAnimationFrame(function() {
        document.body.classList.add("medium-zoom--opened");
      });
      active.original.classList.add("medium-zoom-image--hidden");
      active.zoomed.classList.add("medium-zoom-image--opened");
      active.zoomed.addEventListener("click", close);
      active.zoomed.addEventListener("transitionend", _handleOpenEnd);
      if (active.original.getAttribute("data-zoom-src")) {
        active.zoomedHd = active.zoomed.cloneNode();
        active.zoomedHd.removeAttribute("srcset");
        active.zoomedHd.removeAttribute("sizes");
        active.zoomedHd.src = active.zoomed.getAttribute("data-zoom-src");
        active.zoomedHd.onerror = function() {
          clearInterval(getZoomTargetSize);
          console.warn("Unable to reach the zoom image target " + active.zoomedHd.src);
          active.zoomedHd = null;
          _animate();
        };
        var getZoomTargetSize = setInterval(function() {
          if (active.zoomedHd.complete) {
            clearInterval(getZoomTargetSize);
            active.zoomedHd.classList.add("medium-zoom-image--opened");
            active.zoomedHd.addEventListener("click", close);
            document.body.appendChild(active.zoomedHd);
            _animate();
          }
        }, 10);
      } else if (active.original.hasAttribute("srcset")) {
        active.zoomedHd = active.zoomed.cloneNode();
        active.zoomedHd.removeAttribute("sizes");
        active.zoomedHd.removeAttribute("loading");
        var loadEventListener = active.zoomedHd.addEventListener("load", function() {
          active.zoomedHd.removeEventListener("load", loadEventListener);
          active.zoomedHd.classList.add("medium-zoom-image--opened");
          active.zoomedHd.addEventListener("click", close);
          document.body.appendChild(active.zoomedHd);
          _animate();
        });
      } else {
        _animate();
      }
    });
  };
  var close = function close2() {
    return new Promise2(function(resolve2) {
      if (isAnimating || !active.original) {
        resolve2(zoom);
        return;
      }
      var _handleCloseEnd = function _handleCloseEnd2() {
        active.original.classList.remove("medium-zoom-image--hidden");
        document.body.removeChild(active.zoomed);
        if (active.zoomedHd) {
          document.body.removeChild(active.zoomedHd);
        }
        document.body.removeChild(overlay);
        active.zoomed.classList.remove("medium-zoom-image--opened");
        if (active.template) {
          document.body.removeChild(active.template);
        }
        isAnimating = false;
        active.zoomed.removeEventListener("transitionend", _handleCloseEnd2);
        active.original.dispatchEvent(createCustomEvent("medium-zoom:closed", {
          detail: { zoom }
        }));
        active.original = null;
        active.zoomed = null;
        active.zoomedHd = null;
        active.template = null;
        resolve2(zoom);
      };
      isAnimating = true;
      document.body.classList.remove("medium-zoom--opened");
      active.zoomed.style.transform = "";
      if (active.zoomedHd) {
        active.zoomedHd.style.transform = "";
      }
      if (active.template) {
        active.template.style.transition = "opacity 150ms";
        active.template.style.opacity = 0;
      }
      active.original.dispatchEvent(createCustomEvent("medium-zoom:close", {
        detail: { zoom }
      }));
      active.zoomed.addEventListener("transitionend", _handleCloseEnd);
    });
  };
  var toggle = function toggle2() {
    var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref3.target;
    if (active.original) {
      return close();
    }
    return open({ target });
  };
  var getOptions = function getOptions2() {
    return zoomOptions2;
  };
  var getImages = function getImages2() {
    return images;
  };
  var getZoomedImage = function getZoomedImage2() {
    return active.original;
  };
  var images = [];
  var eventListeners = [];
  var isAnimating = false;
  var scrollTop = 0;
  var zoomOptions2 = options;
  var active = {
    original: null,
    zoomed: null,
    zoomedHd: null,
    template: null
  };
  if (Object.prototype.toString.call(selector2) === "[object Object]") {
    zoomOptions2 = selector2;
  } else if (selector2 || typeof selector2 === "string") {
    attach(selector2);
  }
  zoomOptions2 = _extends({
    margin: 0,
    background: "#fff",
    scrollOffset: 40,
    container: null,
    template: null
  }, zoomOptions2);
  var overlay = createOverlay(zoomOptions2.background);
  document.addEventListener("click", _handleClick);
  document.addEventListener("keyup", _handleKeyUp);
  document.addEventListener("scroll", _handleScroll);
  window.addEventListener("resize", close);
  var zoom = {
    open,
    close,
    toggle,
    update,
    clone,
    attach,
    detach,
    on,
    off,
    getOptions,
    getImages,
    getZoomedImage
  };
  return zoom;
};
function styleInject(css2, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css2 || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css2;
  } else {
    style.appendChild(document.createTextNode(css2));
  }
}
var css$1 = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
styleInject(css$1);
var mediumZoom$2 = mediumZoom$1;
const mediumZoomSymbol = Symbol("mediumZoom");
var vars$1 = /* @__PURE__ */ (() => ":root {\n  --medium-zoom-z-index: 100;\n  --medium-zoom-bg-color: #ffffff;\n  --medium-zoom-opacity: 1;\n}\n")();
var mediumZoom2 = /* @__PURE__ */ (() => ".medium-zoom-overlay {\n  /* override element style set by medium-zoom script */\n  background-color: var(--medium-zoom-bg-color) !important;\n  z-index: var(--medium-zoom-z-index);\n}\n\n.medium-zoom-overlay ~ img {\n  z-index: calc(var(--medium-zoom-z-index) + 1);\n}\n\n.medium-zoom--opened .medium-zoom-overlay {\n  opacity: var(--medium-zoom-opacity);\n}\n")();
const selector = ".theme-default-content > img, .theme-default-content :not(a) > img";
const zoomOptions = {};
const delay = 300;
var clientConfig3 = defineClientConfig({
  enhance({ app, router }) {
    const zoom = mediumZoom$2(zoomOptions);
    zoom.refresh = (sel = selector) => {
      zoom.detach();
      zoom.attach(sel);
    };
    app.provide(mediumZoomSymbol, zoom);
    router.afterEach(() => {
      setTimeout(() => zoom.refresh(), delay);
    });
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n) => {
    const started = nprogress$1.isStarted();
    n = clamp(n, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n === 1 ? null : n;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n = nprogress$1.status;
    if (!n) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
    }
    n = clamp(n + amount, 0, 0.994);
    return nprogress$1.set(n);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n, min, max) => {
  if (n < min)
    return min;
  if (n > max)
    return max;
  return n;
};
const toBarPerc = (n) => (-1 + n) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i--) {
      vendorName = cssPrefixes[i] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
var vars = /* @__PURE__ */ (() => ":root {\n  --nprogress-color: #29d;\n  --nprogress-z-index: 1031;\n}\n")();
var nprogress = /* @__PURE__ */ (() => "#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: var(--nprogress-color);\n  position: fixed;\n  z-index: var(--nprogress-z-index);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n}\n")();
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
var clientConfig4 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse(`{"logo":"/images/diser-logo.svg","logoDark":"/images/diser-logo.svg","contributors":false,"search":true,"navbar":[{"text":"Introduction","link":"/introduction"},{"text":"Foundations","link":"/foundations/colour-palette","children":[{"text":"Colour Palette","link":"/foundations/colour-palette"},{"text":"Typography","link":"/foundations/typography"},{"text":"CTAs and links","link":"/foundations/cta-links"}]},{"text":"Components","link":"/components/","children":[{"text":"Headers and footers","link":"/components/headers-footers/header","children":[{"text":"Header","link":"/components/headers-footers/header"},{"text":"Global Footer","link":"/components/headers-footers/global-footer"},{"text":"Secondary Footer","link":"/components/headers-footers/secondary-footer"}]},{"text":"Navigation","link":"/components/navigation/mega-menu","children":[{"text":"Mega Menu","link":"/components/navigation/mega-menu"},{"text":"Breadcrumbs","link":"/components/navigation/breadcrumbs"},{"text":"In-section navigation","link":"/components/navigation/in-section-navigation"},{"text":"On this page menu","link":"/components/navigation/on-this-page-menu"},{"text":"Tile navigation","link":"/components/navigation/tile-navigation"},{"text":"Publication section divider","link":"/components/navigation/publication-section-divider"}]},{"text":"Cards and Card Containers","link":"/components/cards/publication","children":[{"text":"Publication card and containers","link":"/components/cards/publication"},{"text":"News card and containers","link":"/components/cards/news"},{"text":"Event card and containers","link":"/components/cards/event"},{"text":"Filtered landing page card","link":"/components/cards/filtered-landing-page"},{"text":"Bio card","link":"/components/cards/bio"},{"text":"Request for quote (NMI)","link":"/components/cards/request-for-quote"}]},{"text":"Filters","link":"/components/filters/checkbox","children":[{"text":"Checkbox filter","link":"/components/filters/checkbox"},{"text":"Tabs filter","link":"/components/filters/tabs"},{"text":"Dropdown filter","link":"/components/filters/dropdown"},{"text":"Tags filter","link":"/components/filters/tags"}]},{"text":"Banners","link":"/components/banners/homepage","children":[{"text":"Homepage banner","link":"/components/banners/homepage"},{"text":"Standard content banner","link":"/components/banners/standard-content"},{"text":"Standard content ADC banner","link":"/components/banners/standard-content-adc"},{"text":"Publication banners","link":"/components/banners/publication"},{"text":"News article, case study, event banner","link":"/components/banners/news-case-event"},{"text":"Biography banner","link":"/components/banners/biography"}]},{"text":"Information Components","link":"/components/information-components/alert","children":[{"text":"Alert","link":"/components/information-components/alert"},{"text":"Callout","link":"/components/information-components/callout"},{"text":"Document download","link":"/components/information-components/document-download"},{"text":"Form","link":"/components/information-components/form"},{"text":"Media","link":"/components/information-components/media"},{"text":"Pagination","link":"/components/information-components/pagination"},{"text":"Table","link":"/components/information-components/table"},{"text":"Filterable table","link":"/components/information-components/filterable-table"},{"text":"Timeline","link":"/components/information-components/timeline"}]}]},{"text":"Page Patterns","link":"/page-patterns"},{"text":"Accessibility","link":"/accessibility"}],"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebar":"auto","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","lastUpdated":true,"lastUpdatedText":"Last Updated","contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`);
const themeData = ref(themeData$1);
const useThemeData = () => themeData;
if (import_meta.webpackHot || false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data) => {
    themeData.value = data;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a2;
  return __spreadValues(__spreadValues({}, theme), (_a2 = theme.locales) == null ? void 0 : _a2[routeLocale]);
};
var clientConfig5 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
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
    {
      setupDevtoolsPlugin({
        app,
        id: "org.vuejs.vuepress.plugin-theme-data",
        label: "VuePress Theme Data Plugin",
        packageName: "@vuepress/plugin-theme-data",
        homepage: "https://v2.vuepress.vuejs.org",
        logo: "https://v2.vuepress.vuejs.org/images/hero.png",
        componentStateTypes: ["VuePress"]
      }, (api) => {
        api.on.inspectComponent((payload) => {
          payload.instanceData.state.push({
            type: "VuePress",
            key: "themeData",
            editable: false,
            value: themeData2.value
          }, {
            type: "VuePress",
            key: "themeLocaleData",
            editable: false,
            value: themeLocaleData.value
          });
        });
      });
    }
  }
});
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Badge",
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["badge", __props.type]),
        style: normalizeStyle({
          verticalAlign: __props.vertical
        })
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(__props.text), 1)
        ])
      ], 6);
    };
  }
});
var Badge = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "Badge.vue"]]);
const CodeGroup = defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = ref(-1);
    const tabRefs = ref([]);
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
      var _a2;
      const items = (((_a2 = slots.default) == null ? void 0 : _a2.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
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
      return h("div", { class: "code-group" }, [
        h("div", { class: "code-group__nav" }, h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return h("li", { class: "code-group__li" }, h("button", {
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
const _hoisted_1 = ["aria-selected"];
const __default__ = defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["code-group-item", { "code-group-item__active": __props.active }]),
        "aria-selected": __props.active
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1);
    };
  }
}));
var CodeGroupItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "CodeGroupItem.vue"]]);
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
var _a;
const isClient = typeof window !== "undefined";
const isString = (val) => typeof val === "string";
const noop = () => {
};
isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive, pause, resume, eventFilter };
}
function tryOnBeforeMount(fn, sync = true) {
  if (getCurrentInstance())
    onBeforeMount(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter = bypassFilter
  } = _a2, watchOptions = __objRest$5(_a2, [
    "eventFilter"
  ]);
  return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter: filter
  } = _a2, watchOptions = __objRest$1(_a2, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(source, cb, __spreadProps$1(__spreadValues$1({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}
function unrefElement(elRef) {
  var _a2;
  const plain = unref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported3 = Boolean(window2 && "matchMedia" in window2);
  let mediaQuery;
  const matches = ref(false);
  const update = () => {
    if (!isSupported3)
      return;
    if (!mediaQuery)
      mediaQuery = window2.matchMedia(query);
    matches.value = mediaQuery.matches;
  };
  tryOnBeforeMount(() => {
    update();
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
    tryOnScopeDispose(() => {
      if ("removeEventListener" in mediaQuery)
        mediaQuery.removeEventListener("change", update);
      else
        mediaQuery.removeListener(update);
    });
  });
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : Array.isArray(rawInit) ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
function useStorage(key, initialValue, storage, options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const data = (shallow ? shallowRef : ref)(initialValue);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = unref(initialValue);
  const type = guessSerializerType(rawInit);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), { flush, deep, eventFilter });
  if (window2 && listenToStorageChanges)
    useEventListener(window2, "storage", update);
  update();
  return data;
  function write(v) {
    try {
      if (v == null)
        storage.removeItem(key);
      else
        storage.setItem(key, serializer.write(v));
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      const rawValue = event ? event.newValue : storage.getItem(key);
      if (rawValue == null) {
        if (writeDefaults && rawInit !== null)
          storage.setItem(key, serializer.write(rawInit));
        return rawInit;
      } else if (typeof rawValue !== "string") {
        return rawValue;
      } else {
        return serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    } finally {
      resumeWatch();
    }
  }
  function update(event) {
    if (event && event.key !== key)
      return;
    data.value = read(event);
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = usePreferredDark();
  const darkStorage = useStorage("vuepress-color-scheme", themeLocale.value.colorMode);
  const isDarkMode = computed({
    get() {
      if (!themeLocale.value.colorModeSwitch) {
        return themeLocale.value.colorMode === "dark";
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
  provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window == null ? void 0 : window.document.querySelector("html");
    htmlEl == null ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  onMounted(() => {
    watch(isDarkMode, update, { immediate: true });
  });
  onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched == null ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString$1(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(__spreadValues({
    hash: route.hash,
    query: route.query,
    params: route.params
  }, resolvedRedirectObj));
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(encodeURI(item));
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
    promise = new Promise((resolve2) => promiseResolve = resolve2);
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a2, _b, _c, _d;
  const sidebarConfig = (_b = (_a2 = frontmatter.sidebar) != null ? _a2 : themeLocale.sidebar) != null ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) != null ? _c : themeLocale.sidebarDepth) != null ? _d : 2;
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
  const route = useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a2;
    let childItem;
    if (isString$1(item)) {
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
      const headers = ((_a2 = page.value.headers[0]) == null ? void 0 : _a2.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return __spreadProps(__spreadValues({}, childItem), {
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      });
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a2;
  const route = useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a2 = sidebarConfig[sidebarPath]) != null ? _a2 : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
var index = /* @__PURE__ */ (() => `/* Fonts */
@import url("https://use.typekit.net/rnj7aix.css");
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap");
/*!
 *  Hack typeface https://github.com/source-foundry/Hack
 *  License: https://github.com/source-foundry/Hack/blob/master/LICENSE.md
 */
/* FONT PATHS
 * -------------------------- */
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap");
:root {
  --c-brand: #3eaf7c;
  --c-brand-light: #4abf8a;
  --c-bg: #ffffff;
  --c-bg-light: #f3f4f5;
  --c-bg-lighter: #eeeeee;
  --c-bg-navbar: var(--c-bg);
  --c-bg-sidebar: var(--c-bg);
  --c-bg-arrow: #cccccc;
  --c-text: #2c3e50;
  --c-text-accent: var(--c-brand);
  --c-text-light: #3a5169;
  --c-text-lighter: #4e6e8e;
  --c-text-lightest: #6a8bad;
  --c-text-quote: #999999;
  --c-border: #eaecef;
  --c-border-dark: #dfe2e5;
  --c-tip: #42b983;
  --c-tip-bg: var(--c-bg-light);
  --c-tip-title: var(--c-text);
  --c-tip-text: var(--c-text);
  --c-tip-text-accent: var(--c-text-accent);
  --c-warning: #e7c000;
  --c-warning-bg: #fffae3;
  --c-warning-title: #ad9000;
  --c-warning-text: #746000;
  --c-warning-text-accent: var(--c-text);
  --c-danger: #cc0000;
  --c-danger-bg: #ffe0e0;
  --c-danger-title: #990000;
  --c-danger-text: #660000;
  --c-danger-text-accent: var(--c-text);
  --c-details-bg: #eeeeee;
  --c-badge-tip: var(--c-tip);
  --c-badge-warning: var(--c-warning);
  --c-badge-danger: var(--c-danger);
  --t-color: 0.3s ease;
  --t-transform: 0.3s ease;
  --code-bg-color: #282c34;
  --code-hl-bg-color: rgba(0, 0, 0, 0.66);
  --code-ln-color: #9e9e9e;
  --code-ln-wrapper-width: 3.5rem;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  --font-family-code: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  --navbar-height: 3.6rem;
  --navbar-padding-v: 0.7rem;
  --navbar-padding-h: 1.5rem;
  --sidebar-width: 20rem;
  --sidebar-width-mobile: calc(var(--sidebar-width) * 0.82);
  --content-width: 740px;
  --homepage-width: 960px;
}

.back-to-top {
  --back-to-top-color: var(--c-brand);
  --back-to-top-color-hover: var(--c-brand-light);
}

.DocSearch {
  --docsearch-primary-color: var(--c-brand);
  --docsearch-text-color: var(--c-text);
  --docsearch-highlight-color: var(--c-brand);
  --docsearch-muted-color: var(--c-text-quote);
  --docsearch-container-background: rgba(9, 10, 17, 0.8);
  --docsearch-modal-background: var(--c-bg-light);
  --docsearch-searchbox-background: var(--c-bg-lighter);
  --docsearch-searchbox-focus-background: var(--c-bg);
  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--c-brand);
  --docsearch-hit-color: var(--c-text-light);
  --docsearch-hit-active-color: var(--c-bg);
  --docsearch-hit-background: var(--c-bg);
  --docsearch-hit-shadow: 0 1px 3px 0 var(--c-border-dark);
  --docsearch-footer-background: var(--c-bg);
}

.external-link-icon {
  --external-link-icon-color: var(--c-text-quote);
}

.medium-zoom-overlay {
  --medium-zoom-bg-color: var(--c-bg);
}

#nprogress {
  --nprogress-color: var(--c-brand);
}

.pwa-popup {
  --pwa-popup-text-color: var(--c-text);
  --pwa-popup-bg-color: var(--c-bg);
  --pwa-popup-border-color: var(--c-brand);
  --pwa-popup-shadow: 0 4px 16px var(--c-brand);
  --pwa-popup-btn-text-color: var(--c-bg);
  --pwa-popup-btn-bg-color: var(--c-brand);
  --pwa-popup-btn-hover-bg-color: var(--c-brand-light);
}

.search-box {
  --search-bg-color: var(--c-bg);
  --search-accent-color: var(--c-brand);
  --search-text-color: var(--c-text);
  --search-border-color: var(--c-border);
  --search-item-text-color: var(--c-text-lighter);
  --search-item-focus-bg-color: var(--c-bg-light);
}

html.dark {
  --c-brand: #3aa675;
  --c-brand-light: #349469;
  --c-bg: #22272e;
  --c-bg-light: #2b313a;
  --c-bg-lighter: #262c34;
  --c-text: #adbac7;
  --c-text-light: #96a7b7;
  --c-text-lighter: #8b9eb0;
  --c-text-lightest: #8094a8;
  --c-border: #3e4c5a;
  --c-border-dark: #34404c;
  --c-tip: #318a62;
  --c-warning: #ceab00;
  --c-warning-bg: #7e755b;
  --c-warning-title: #ceac03;
  --c-warning-text: #362e00;
  --c-danger: #940000;
  --c-danger-bg: #806161;
  --c-danger-title: #610000;
  --c-danger-text: #3a0000;
  --c-details-bg: #323843;
  --code-hl-bg-color: #363b46;
}

html.dark .DocSearch {
  --docsearch-logo-color: var(--c-text);
  --docsearch-modal-shadow: inset 1px 1px 0 0 #2c2e40, 0 3px 8px 0 #000309;
  --docsearch-key-shadow: inset 0 -2px 0 0 #282d55, inset 0 0 1px 1px #51577d,
    0 2px 2px 0 rgba(3, 4, 9, 0.3);
  --docsearch-key-gradient: linear-gradient(-225deg, #444950, #1c1e21);
  --docsearch-footer-shadow: inset 0 1px 0 0 rgba(73, 76, 106, 0.5),
    0 -4px 8px 0 rgba(0, 0, 0, 0.2);
}

html,
body {
  padding: 0;
  margin: 0;
  background-color: var(--c-bg);
  transition: background-color var(--t-color);
}

html.dark {
  color-scheme: dark;
}

html {
  font-size: 16px;
}

body {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1rem;
  color: var(--c-text);
}

a {
  font-weight: 500;
  color: var(--c-text-accent);
  text-decoration: none;
  overflow-wrap: break-word;
}

p a code {
  font-weight: 400;
  color: var(--c-text-accent);
}

kbd {
  font-family: var(--font-family-code);
  color: var(--c-text);
  background: var(--c-bg-lighter);
  border: solid 0.15rem var(--c-border-dark);
  border-bottom: solid 0.25rem var(--c-border-dark);
  border-radius: 0.15rem;
  padding: 0 0.15em;
}

code {
  font-family: var(--font-family-code);
  color: var(--c-text-lighter);
  padding: 0.25rem 0.5rem;
  margin: 0;
  font-size: 0.85em;
  background-color: var(--c-bg-lighter);
  border-radius: 3px;
  overflow-wrap: break-word;
  transition: background-color var(--t-color);
}

blockquote {
  font-size: 1rem;
  color: var(--c-text-quote);
  border-left: 0.2rem solid var(--c-border-dark);
  margin: 1rem 0;
  padding: 0.25rem 0 0.25rem 1rem;
}
blockquote > p {
  margin: 0;
}

ul,
ol {
  padding-left: 1.2em;
}

strong {
  font-weight: 600;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  line-height: 1.25;
}
h1:focus-visible,
h2:focus-visible,
h3:focus-visible,
h4:focus-visible,
h5:focus-visible,
h6:focus-visible {
  outline: none;
}
h1:hover .header-anchor,
h2:hover .header-anchor,
h3:hover .header-anchor,
h4:hover .header-anchor,
h5:hover .header-anchor,
h6:hover .header-anchor {
  opacity: 1;
}

h1 {
  font-size: 2.2rem;
}

h2 {
  font-size: 1.65rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--c-border);
  transition: border-color var(--t-color);
}

h3 {
  font-size: 1.35rem;
}

h4 {
  font-size: 1.15rem;
}

h5 {
  font-size: 1.05rem;
}

h6 {
  font-size: 1rem;
}

a.header-anchor {
  font-size: 0.85em;
  float: left;
  margin-left: -0.87em;
  padding-right: 0.23em;
  margin-top: 0.125em;
  opacity: 0;
}
a.header-anchor:hover {
  text-decoration: none;
}
a.header-anchor:focus-visible {
  opacity: 1;
}

p,
ul,
ol {
  line-height: 1.7;
}

hr {
  border: 0;
  border-top: 1px solid var(--c-border);
}

table {
  border-collapse: collapse;
  margin: 1rem 0;
  display: block;
  overflow-x: auto;
  transition: border-color var(--t-color);
}

tr {
  border-top: 1px solid var(--c-border-dark);
  transition: border-color var(--t-color);
}
tr:nth-child(2n) {
  background-color: var(--c-bg-light);
  transition: background-color var(--t-color);
}

th,
td {
  padding: 0.6em 1em;
  border: 1px solid var(--c-border-dark);
  transition: border-color var(--t-color);
}

.arrow {
  display: inline-block;
  width: 0;
  height: 0;
}
.arrow.up {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 6px solid var(--c-bg-arrow);
}
.arrow.down {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 6px solid var(--c-bg-arrow);
}
.arrow.right {
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 6px solid var(--c-bg-arrow);
}
.arrow.left {
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-right: 6px solid var(--c-bg-arrow);
}

.badge {
  display: inline-block;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  border-radius: 3px;
  padding: 0 6px;
  color: var(--c-bg);
  vertical-align: top;
  transition: color var(--t-color), background-color var(--t-color);
}
.badge.tip {
  background-color: var(--c-badge-tip);
}
.badge.warning {
  background-color: var(--c-badge-warning);
}
.badge.danger {
  background-color: var(--c-badge-danger);
}
.table-of-contents .badge {
  vertical-align: middle;
}
.badge + .badge {
  margin-left: 5px;
}

code[class*=language-],
pre[class*=language-] {
  color: #ccc;
  background: none;
  font-family: var(--font-family-code);
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*=language-] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*=language-],
pre[class*=language-] {
  background: #2d2d2d;
}

/* Inline code */
:not(pre) > code[class*=language-] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #999;
}

.token.punctuation {
  color: #ccc;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color: #ec5975;
}

.token.function-name {
  color: #6196cc;
}

.token.boolean,
.token.number,
.token.function {
  color: #f08d49;
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: #f8c555;
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: #cc99cd;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
  color: #7ec699;
}

.token.operator,
.token.entity,
.token.url {
  color: #67cdcc;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: #3eaf7c;
}

.theme-default-content pre,
.theme-default-content pre[class*=language-] {
  line-height: 1.4;
  padding: 1.3rem 1.5rem;
  margin: 0.85rem 0;
  border-radius: 6px;
  overflow: auto;
}
.theme-default-content pre code,
.theme-default-content pre[class*=language-] code {
  color: #fff;
  padding: 0;
  background-color: transparent;
  border-radius: 0;
  overflow-wrap: unset;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
.theme-default-content .line-number {
  font-family: var(--font-family-code);
}

div[class*=language-] {
  position: relative;
  background-color: var(--code-bg-color);
  border-radius: 6px;
}
div[class*=language-]::before {
  position: absolute;
  z-index: 3;
  top: 0.8em;
  right: 1em;
  font-size: 0.75rem;
  color: var(--code-ln-color);
}
div[class*=language-] pre,
div[class*=language-] pre[class*=language-] {
  background: transparent !important;
  position: relative;
  z-index: 1;
}
div[class*=language-] .highlight-lines {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  padding-top: 1.3rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 1.4;
}
div[class*=language-] .highlight-lines .highlight-line {
  background-color: var(--code-hl-bg-color);
}
div[class*=language-]:not(.line-numbers-mode) .line-numbers {
  display: none;
}
div[class*=language-].line-numbers-mode .highlight-lines .highlight-line {
  position: relative;
}
div[class*=language-].line-numbers-mode .highlight-lines .highlight-line::before {
  content: " ";
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  display: block;
  width: var(--code-ln-wrapper-width);
  height: 100%;
}
div[class*=language-].line-numbers-mode pre {
  margin-left: var(--code-ln-wrapper-width);
  padding-left: 1rem;
  vertical-align: middle;
}
div[class*=language-].line-numbers-mode .line-numbers {
  position: absolute;
  top: 0;
  width: var(--code-ln-wrapper-width);
  text-align: center;
  color: var(--code-ln-color);
  padding-top: 1.25rem;
  line-height: 1.4;
  counter-reset: line-number;
}
div[class*=language-].line-numbers-mode .line-numbers .line-number {
  position: relative;
  z-index: 3;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  height: 1.4em;
}
div[class*=language-].line-numbers-mode .line-numbers .line-number::before {
  counter-increment: line-number;
  content: counter(line-number);
  font-size: 0.85em;
}
div[class*=language-].line-numbers-mode::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: var(--code-ln-wrapper-width);
  height: 100%;
  border-radius: 6px 0 0 6px;
  border-right: 1px solid var(--code-hl-bg-color);
}

div[class*=language-].ext-c:before {
  content: "c";
}

div[class*=language-].ext-cpp:before {
  content: "cpp";
}

div[class*=language-].ext-cs:before {
  content: "cs";
}

div[class*=language-].ext-css:before {
  content: "css";
}

div[class*=language-].ext-dart:before {
  content: "dart";
}

div[class*=language-].ext-docker:before {
  content: "docker";
}

div[class*=language-].ext-fs:before {
  content: "fs";
}

div[class*=language-].ext-go:before {
  content: "go";
}

div[class*=language-].ext-html:before {
  content: "html";
}

div[class*=language-].ext-java:before {
  content: "java";
}

div[class*=language-].ext-js:before {
  content: "js";
}

div[class*=language-].ext-json:before {
  content: "json";
}

div[class*=language-].ext-kt:before {
  content: "kt";
}

div[class*=language-].ext-less:before {
  content: "less";
}

div[class*=language-].ext-makefile:before {
  content: "makefile";
}

div[class*=language-].ext-md:before {
  content: "md";
}

div[class*=language-].ext-php:before {
  content: "php";
}

div[class*=language-].ext-py:before {
  content: "py";
}

div[class*=language-].ext-rb:before {
  content: "rb";
}

div[class*=language-].ext-rs:before {
  content: "rs";
}

div[class*=language-].ext-sass:before {
  content: "sass";
}

div[class*=language-].ext-scss:before {
  content: "scss";
}

div[class*=language-].ext-sh:before {
  content: "sh";
}

div[class*=language-].ext-styl:before {
  content: "styl";
}

div[class*=language-].ext-ts:before {
  content: "ts";
}

div[class*=language-].ext-toml:before {
  content: "toml";
}

div[class*=language-].ext-vue:before {
  content: "vue";
}

div[class*=language-].ext-yml:before {
  content: "yml";
}

@media (max-width: 419px) {
  .theme-default-content div[class*=language-] {
    margin: 0.85rem -1.5rem;
    border-radius: 0;
  }
}
/**
 * code-group
 */
.code-group__nav {
  margin-top: 0.85rem;
  margin-bottom: calc(-1.7rem - 6px);
  padding-bottom: calc(1.7rem - 6px);
  padding-left: 10px;
  padding-top: 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: var(--code-bg-color);
}

.code-group__ul {
  margin: auto 0;
  padding-left: 0;
  display: inline-flex;
  list-style: none;
}

.code-group__nav-tab {
  border: 0;
  padding: 5px;
  cursor: pointer;
  background-color: transparent;
  font-size: 0.85em;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

.code-group__nav-tab:focus {
  outline: none;
}

.code-group__nav-tab:focus-visible {
  outline: 1px solid rgba(255, 255, 255, 0.9);
}

.code-group__nav-tab-active {
  border-bottom: var(--c-brand) 1px solid;
}

@media (max-width: 419px) {
  .code-group__nav {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    border-radius: 0;
  }
}
/**
 * code-group-item
 */
.code-group-item {
  display: none;
}

.code-group-item__active {
  display: block;
}

.code-group-item > pre {
  background-color: orange;
}

.custom-container {
  transition: color var(--t-color), border-color var(--t-color), background-color var(--t-color);
}
.custom-container .custom-container-title {
  font-weight: 600;
}
.custom-container .custom-container-title:not(:only-child) {
  margin-bottom: -0.4rem;
}
.custom-container.tip, .custom-container.warning, .custom-container.danger {
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;
}
.custom-container.tip {
  border-color: var(--c-tip);
  background-color: var(--c-tip-bg);
  color: var(--c-tip-text);
}
.custom-container.tip .custom-container-title {
  color: var(--c-tip-title);
}
.custom-container.tip a {
  color: var(--c-tip-text-accent);
}
.custom-container.warning {
  border-color: var(--c-warning);
  background-color: var(--c-warning-bg);
  color: var(--c-warning-text);
}
.custom-container.warning .custom-container-title {
  color: var(--c-warning-title);
}
.custom-container.warning a {
  color: var(--c-warning-text-accent);
}
.custom-container.danger {
  border-color: var(--c-danger);
  background-color: var(--c-danger-bg);
  color: var(--c-danger-text);
}
.custom-container.danger .custom-container-title {
  color: var(--c-danger-title);
}
.custom-container.danger a {
  color: var(--c-danger-text-accent);
}
.custom-container.details {
  display: block;
  position: relative;
  border-radius: 2px;
  margin: 1.6em 0;
  padding: 1.6em;
  background-color: var(--c-details-bg);
}
.custom-container.details h4 {
  margin-top: 0;
}
.custom-container.details figure:last-child,
.custom-container.details p:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
}
.custom-container.details summary {
  outline: none;
  cursor: pointer;
}

.home {
  padding: var(--navbar-height) 2rem 0;
  max-width: var(--homepage-width);
  margin: 0px auto;
  display: block;
}
.home .hero {
  text-align: center;
}
.home .hero img {
  max-width: 100%;
  max-height: 280px;
  display: block;
  margin: 3rem auto 1.5rem;
}
.home .hero h1 {
  font-size: 3rem;
}
.home .hero h1,
.home .hero .description,
.home .hero .actions {
  margin: 1.8rem auto;
}
.home .hero .actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.home .hero .description {
  max-width: 35rem;
  font-size: 1.6rem;
  line-height: 1.3;
  color: var(--c-text-lightest);
}
.home .hero .action-button {
  display: inline-block;
  font-size: 1.2rem;
  padding: 0.8rem 1.6rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  transition: background-color var(--t-color);
  box-sizing: border-box;
}
.home .hero .action-button.primary {
  color: var(--c-bg);
  background-color: var(--c-brand);
  border-color: var(--c-brand);
}
.home .hero .action-button.primary:hover {
  background-color: var(--c-brand-light);
}
.home .hero .action-button.secondary {
  color: var(--c-brand);
  background-color: var(--c-bg);
  border-color: var(--c-brand);
}
.home .hero .action-button.secondary:hover {
  color: var(--c-bg);
  background-color: var(--c-brand-light);
}
.home .features {
  border-top: 1px solid var(--c-border);
  transition: border-color var(--t-color);
  padding: 1.2rem 0;
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-between;
}
.home .feature {
  flex-grow: 1;
  flex-basis: 30%;
  max-width: 30%;
}
.home .feature h2 {
  font-size: 1.4rem;
  font-weight: 500;
  border-bottom: none;
  padding-bottom: 0;
  color: var(--c-text-light);
}
.home .feature p {
  color: var(--c-text-lighter);
}
.home .theme-default-content {
  padding: 0;
  margin: 0;
}
.home .footer {
  padding: 2.5rem;
  border-top: 1px solid var(--c-border);
  text-align: center;
  color: var(--c-text-lighter);
  transition: border-color var(--t-color);
}

@media (max-width: 719px) {
  .home .features {
    flex-direction: column;
  }
  .home .feature {
    max-width: 100%;
    padding: 0 2.5rem;
  }
}
@media (max-width: 419px) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .home .hero img {
    max-height: 210px;
    margin: 2rem auto 1.2rem;
  }
  .home .hero h1 {
    font-size: 2rem;
  }
  .home .hero h1,
.home .hero .description,
.home .hero .actions {
    margin: 1.2rem auto;
  }
  .home .hero .description {
    font-size: 1.2rem;
  }
  .home .hero .action-button {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
  .home .feature h2 {
    font-size: 1.25rem;
  }
}
.page {
  padding-top: var(--navbar-height);
  padding-left: var(--sidebar-width);
}

.navbar {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: var(--navbar-height);
  box-sizing: border-box;
  border-bottom: 1px solid var(--c-border);
  background-color: var(--c-bg-navbar);
  transition: background-color var(--t-color), border-color var(--t-color);
}

.sidebar {
  font-size: 16px;
  width: var(--sidebar-width);
  position: fixed;
  z-index: 10;
  margin: 0;
  top: var(--navbar-height);
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px solid var(--c-border);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--c-brand) var(--c-border);
  background-color: var(--c-bg-sidebar);
  transition: transform var(--t-transform), background-color var(--t-color), border-color var(--t-color);
}
.sidebar::-webkit-scrollbar {
  width: 7px;
}
.sidebar::-webkit-scrollbar-track {
  background-color: var(--c-border);
}
.sidebar::-webkit-scrollbar-thumb {
  background-color: var(--c-brand);
}

.sidebar-mask {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: none;
}

.theme-container.sidebar-open .sidebar-mask {
  display: block;
}
.theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(1) {
  transform: rotate(45deg) translate3d(5.5px, 5.5px, 0);
}
.theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(2) {
  transform: scale3d(0, 1, 1);
}
.theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(3) {
  transform: rotate(-45deg) translate3d(6px, -6px, 0);
}
.theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(1), .theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(3) {
  transform-origin: center;
}
.theme-container.no-navbar .theme-default-content h1,
.theme-container.no-navbar .theme-default-content h2,
.theme-container.no-navbar .theme-default-content h3,
.theme-container.no-navbar .theme-default-content h4,
.theme-container.no-navbar .theme-default-content h5,
.theme-container.no-navbar .theme-default-content h6 {
  margin-top: 1.5rem;
  padding-top: 0;
}
.theme-container.no-navbar .page {
  padding-top: 0;
}
.theme-container.no-navbar .sidebar {
  top: 0;
}

@media (min-width: 720px) {
  .theme-container.no-sidebar .sidebar {
    display: none;
  }
  .theme-container.no-sidebar .page {
    padding-left: 0;
  }
}
.theme-default-content a:hover {
  text-decoration: underline;
}
.theme-default-content img {
  max-width: 100%;
}
.theme-default-content h1,
.theme-default-content h2,
.theme-default-content h3,
.theme-default-content h4,
.theme-default-content h5,
.theme-default-content h6 {
  margin-top: calc(0.5rem - var(--navbar-height));
  padding-top: calc(1rem + var(--navbar-height));
  margin-bottom: 0;
}
.theme-default-content h1:first-child,
.theme-default-content h2:first-child,
.theme-default-content h3:first-child,
.theme-default-content h4:first-child,
.theme-default-content h5:first-child,
.theme-default-content h6:first-child {
  margin-bottom: 1rem;
}
.theme-default-content h1:first-child + p,
.theme-default-content h1:first-child + pre,
.theme-default-content h1:first-child + .custom-container,
.theme-default-content h2:first-child + p,
.theme-default-content h2:first-child + pre,
.theme-default-content h2:first-child + .custom-container,
.theme-default-content h3:first-child + p,
.theme-default-content h3:first-child + pre,
.theme-default-content h3:first-child + .custom-container,
.theme-default-content h4:first-child + p,
.theme-default-content h4:first-child + pre,
.theme-default-content h4:first-child + .custom-container,
.theme-default-content h5:first-child + p,
.theme-default-content h5:first-child + pre,
.theme-default-content h5:first-child + .custom-container,
.theme-default-content h6:first-child + p,
.theme-default-content h6:first-child + pre,
.theme-default-content h6:first-child + .custom-container {
  margin-top: 2rem;
}

@media (max-width: 959px) {
  .sidebar {
    font-size: 15px;
    width: var(--sidebar-width-mobile);
  }
  .page {
    padding-left: var(--sidebar-width-mobile);
  }
}
@media (max-width: 719px) {
  .sidebar {
    top: 0;
    padding-top: var(--navbar-height);
    transform: translateX(-100%);
  }
  .page {
    padding-left: 0;
  }
  .theme-container.sidebar-open .sidebar {
    transform: translateX(0);
  }
  .theme-container.no-navbar .sidebar {
    padding-top: 0;
  }
}
@media (max-width: 419px) {
  h1 {
    font-size: 1.9rem;
  }
}
.navbar {
  --navbar-line-height: calc(
    var(--navbar-height) - 2 * var(--navbar-padding-v)
  );
  padding: var(--navbar-padding-v) var(--navbar-padding-h);
  line-height: var(--navbar-line-height);
}
.navbar .logo {
  height: var(--navbar-line-height);
  margin-right: var(--navbar-padding-v);
  vertical-align: top;
}
.navbar .site-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--c-text);
  position: relative;
}
.navbar .navbar-items-wrapper {
  display: flex;
  position: absolute;
  box-sizing: border-box;
  top: var(--navbar-padding-v);
  right: var(--navbar-padding-h);
  height: var(--navbar-line-height);
  padding-left: var(--navbar-padding-h);
  white-space: nowrap;
  font-size: 0.9rem;
}
.navbar .navbar-items-wrapper .search-box {
  flex: 0 0 auto;
  vertical-align: top;
}

@media (max-width: 719px) {
  .navbar {
    padding-left: 4rem;
  }
  .navbar .can-hide {
    display: none;
  }
  .navbar .site-name {
    width: calc(100vw - 9.4rem);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
/**
 * navbar-items
 */
.navbar-items {
  display: inline-block;
}
.navbar-items a {
  display: inline-block;
  line-height: 1.4rem;
  color: inherit;
}
.navbar-items a:hover, .navbar-items a.router-link-active {
  color: var(--c-text-accent);
}
.navbar-items .navbar-item {
  position: relative;
  display: inline-block;
  margin-left: 1.5rem;
  line-height: var(--navbar-line-height);
}
.navbar-items .navbar-item:first-child {
  margin-left: 0;
}

@media (max-width: 719px) {
  .navbar-items .navbar-item {
    margin-left: 0;
  }
}
@media (min-width: 719px) {
  .navbar-items a:hover, .navbar-items a.router-link-active {
    color: var(--c-text);
  }
  .navbar-item > a:hover, .navbar-item > a.router-link-active {
    margin-bottom: -2px;
    border-bottom: 2px solid var(--c-text-accent);
  }
}
/**
 * toggle sidebar button
 */
.toggle-sidebar-button {
  position: absolute;
  top: 0.6rem;
  left: 1rem;
  display: none;
  padding: 0.6rem;
  cursor: pointer;
}

.toggle-sidebar-button .icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  cursor: inherit;
}
.toggle-sidebar-button .icon span {
  display: inline-block;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: var(--c-text);
  transition: transform var(--t-transform);
}
.toggle-sidebar-button .icon span:nth-child(2) {
  margin: 6px 0;
}

@media screen and (max-width: 719px) {
  .toggle-sidebar-button {
    display: block;
  }
}
/**
 * toggle color mode button
 */
.toggle-color-mode-button {
  display: flex;
  margin: auto;
  margin-left: 1rem;
  border: 0;
  background: none;
  color: var(--c-text);
  opacity: 0.8;
  cursor: pointer;
}
.toggle-color-mode-button:hover {
  opacity: 1;
}
.toggle-color-mode-button .icon {
  width: 1.25rem;
  height: 1.25rem;
}

.DocSearch {
  transition: background-color var(--t-color);
}

.navbar-dropdown-wrapper {
  cursor: pointer;
}
.navbar-dropdown-wrapper .navbar-dropdown-title, .navbar-dropdown-wrapper .navbar-dropdown-title-mobile {
  display: block;
  font-size: 0.9rem;
  font-family: inherit;
  cursor: inherit;
  padding: inherit;
  line-height: 1.4rem;
  background: transparent;
  border: none;
  font-weight: 500;
  color: var(--c-text);
}
.navbar-dropdown-wrapper .navbar-dropdown-title:hover, .navbar-dropdown-wrapper .navbar-dropdown-title-mobile:hover {
  border-color: transparent;
}
.navbar-dropdown-wrapper .navbar-dropdown-title .arrow, .navbar-dropdown-wrapper .navbar-dropdown-title-mobile .arrow {
  vertical-align: middle;
  margin-top: -1px;
  margin-left: 0.4rem;
}
.navbar-dropdown-wrapper .navbar-dropdown-title-mobile {
  display: none;
  font-weight: 600;
  font-size: inherit;
}
.navbar-dropdown-wrapper .navbar-dropdown-title-mobile:hover {
  color: var(--c-text-accent);
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item {
  color: inherit;
  line-height: 1.7rem;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle {
  margin: 0.45rem 0 0;
  border-top: 1px solid var(--c-border);
  padding: 1rem 0 0.45rem 0;
  font-size: 0.9rem;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle > span {
  padding: 0 1.5rem 0 1.25rem;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle > a {
  font-weight: inherit;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle > a.router-link-active::after {
  display: none;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subitem-wrapper {
  padding: 0;
  list-style: none;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subitem-wrapper .navbar-dropdown-subitem {
  font-size: 0.9em;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item a {
  display: block;
  line-height: 1.7rem;
  position: relative;
  border-bottom: none;
  font-weight: 400;
  margin-bottom: 0;
  padding: 0 1.5rem 0 1.25rem;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item a:hover {
  color: var(--c-text-accent);
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item a.router-link-active {
  color: var(--c-text-accent);
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item a.router-link-active::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid var(--c-text-accent);
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  position: absolute;
  top: calc(50% - 2px);
  left: 9px;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item:first-child .navbar-dropdown-subtitle {
  margin-top: 0;
  padding-top: 0;
  border-top: 0;
}

@media (max-width: 719px) {
  .navbar-dropdown-wrapper.open .navbar-dropdown-title, .navbar-dropdown-wrapper.open .navbar-dropdown-title-mobile {
    margin-bottom: 0.5rem;
  }
  .navbar-dropdown-wrapper .navbar-dropdown-title, .navbar-dropdown-wrapper .navbar-dropdown-title-mobile {
    display: none;
  }
  .navbar-dropdown-wrapper .navbar-dropdown-title-mobile {
    display: block;
  }
  .navbar-dropdown-wrapper .navbar-dropdown {
    transition: height 0.1s ease-out;
    overflow: hidden;
  }
  .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle {
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle, .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item > a {
    font-size: 15px;
    line-height: 2rem;
  }
  .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subitem {
    font-size: 14px;
    padding-left: 1rem;
  }
}
@media (min-width: 720px) {
  .navbar-dropdown-wrapper {
    height: 1.8rem;
  }
  .navbar-dropdown-wrapper:hover .navbar-dropdown, .navbar-dropdown-wrapper.open .navbar-dropdown {
    display: block !important;
  }
  .navbar-dropdown-wrapper.open:blur {
    display: none;
  }
  .navbar-dropdown-wrapper .navbar-dropdown {
    display: none;
    height: auto !important;
    box-sizing: border-box;
    max-height: calc(100vh - 2.7rem);
    overflow-y: auto;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: var(--c-bg-navbar);
    padding: 0.6rem 0;
    border: 1px solid var(--c-border);
    border-bottom-color: var(--c-border-dark);
    text-align: left;
    border-radius: 0.25rem;
    white-space: nowrap;
    margin: 0;
  }
}
.page {
  padding-bottom: 2rem;
  display: block;
}
.page .theme-default-content {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 2rem 2.5rem;
  padding-top: 0;
}
@media (max-width: 959px) {
  .page .theme-default-content {
    padding: 2rem;
  }
}
@media (max-width: 419px) {
  .page .theme-default-content {
    padding: 1.5rem;
  }
}

.page-meta {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 2rem 2.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;
}
@media (max-width: 959px) {
  .page-meta {
    padding: 2rem;
  }
}
@media (max-width: 419px) {
  .page-meta {
    padding: 1.5rem;
  }
}
.page-meta .meta-item {
  cursor: default;
  margin-top: 0.8rem;
}
.page-meta .meta-item .meta-item-label {
  font-weight: 500;
  color: var(--c-text-lighter);
}
.page-meta .meta-item .meta-item-info {
  font-weight: 400;
  color: var(--c-text-quote);
}
.page-meta .edit-link {
  display: inline-block;
  margin-right: 0.25rem;
}
.page-meta .last-updated {
  float: right;
}

@media (max-width: 719px) {
  .page-meta .last-updated {
    font-size: 0.8em;
    float: none;
  }
  .page-meta .contributors {
    font-size: 0.8em;
  }
}
.page-nav {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 2rem 2.5rem;
  padding-top: 1rem;
  padding-bottom: 0;
}
@media (max-width: 959px) {
  .page-nav {
    padding: 2rem;
  }
}
@media (max-width: 419px) {
  .page-nav {
    padding: 1.5rem;
  }
}
.page-nav .inner {
  min-height: 2rem;
  margin-top: 0;
  border-top: 1px solid var(--c-border);
  transition: border-color var(--t-color);
  padding-top: 1rem;
  overflow: auto;
}
.page-nav .prev a:before {
  content: "\u2190";
}
.page-nav .next {
  float: right;
}
.page-nav .next a:after {
  content: "\u2192";
}

.sidebar ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.sidebar a {
  display: inline-block;
}
.sidebar .navbar-items {
  display: none;
  border-bottom: 1px solid var(--c-border);
  transition: border-color var(--t-color);
  padding: 0.5rem 0 0.75rem 0;
}
.sidebar .navbar-items a {
  font-weight: 600;
}
.sidebar .navbar-items .navbar-item {
  display: block;
  line-height: 1.25rem;
  font-size: 1.1em;
  padding: 0.5rem 0 0.5rem 1.5rem;
}
.sidebar .sidebar-items {
  padding: 1.5rem 0;
}

@media (max-width: 719px) {
  .sidebar .navbar-items {
    display: block;
  }
  .sidebar .navbar-items .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item a.router-link-active::after {
    top: calc(1rem - 2px);
  }
  .sidebar .sidebar-items {
    padding: 1rem 0;
  }
}
.sidebar-item {
  cursor: default;
  border-left: 0.25rem solid transparent;
  color: var(--c-text);
}
.sidebar-item:focus-visible {
  outline-width: 1px;
  outline-offset: -1px;
}
.sidebar-item.active:not(p.sidebar-heading) {
  font-weight: 600;
  color: var(--c-text-accent);
  border-left-color: var(--c-text-accent);
}
.sidebar-item.sidebar-heading {
  transition: color 0.15s ease;
  font-size: 1.1em;
  font-weight: bold;
  padding: 0.35rem 1.5rem 0.35rem 1.25rem;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
}
.sidebar-item.sidebar-heading.collapsible {
  cursor: pointer;
}
.sidebar-item.sidebar-heading.collapsible + .sidebar-item-children {
  transition: height 0.1s ease-out;
  overflow: hidden;
  margin-bottom: 0.75rem;
}
.sidebar-item.sidebar-heading .arrow {
  position: relative;
  top: -0.12em;
  left: 0.5em;
}
.sidebar-item:not(.sidebar-heading) {
  font-size: 1em;
  font-weight: 400;
  display: inline-block;
  margin: 0;
  padding: 0.35rem 1rem 0.35rem 2rem;
  line-height: 1.4;
  width: 100%;
  box-sizing: border-box;
}
.sidebar-item:not(.sidebar-heading) + .sidebar-item-children {
  padding-left: 1rem;
  font-size: 0.95em;
}
.sidebar-item-children .sidebar-item-children .sidebar-item:not(.sidebar-heading) {
  padding: 0.25rem 1rem 0.25rem 1.75rem;
}
.sidebar-item-children .sidebar-item-children .sidebar-item:not(.sidebar-heading).active {
  font-weight: 500;
  border-left-color: transparent;
}
a.sidebar-heading + .sidebar-item-children .sidebar-item:not(.sidebar-heading).active {
  border-left-color: transparent;
}

a.sidebar-item {
  cursor: pointer;
}
a.sidebar-item:hover {
  color: var(--c-text-accent);
}

.table-of-contents .badge {
  vertical-align: middle;
}

/**
 * dropdown
 */
.dropdown-enter-from,
.dropdown-leave-to {
  height: 0 !important;
}

/**
 * fade-slide-y
 */
.fade-slide-y-enter-active {
  transition: all 0.2s ease;
}

.fade-slide-y-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-slide-y-enter-from,
.fade-slide-y-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

@font-face {
  font-family: "Hack";
  src: url("/DOI-Styleguide/fonts/hack-regular-subset.woff2?sha=3114f1256") format("woff2"), url("/DOI-Styleguide/fonts/hack-regular-subset.woff?sha=3114f1256") format("woff");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Hack";
  src: url("/DOI-Styleguide/fonts/hack-bold-subset.woff2?sha=3114f1256") format("woff2"), url("/DOI-Styleguide/fonts/hack-bold-subset.woff?sha=3114f1256") format("woff");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Hack";
  src: url("/DOI-Styleguide/fonts/hack-italic-subset.woff2?sha=3114f1256") format("woff2"), url("/fonts/hack-italic-webfont.woff?sha=3114f1256") format("woff");
  font-weight: 400;
  font-style: italic;
}
@font-face {
  font-family: "Hack";
  src: url("/DOI-Styleguide/fonts/hack-bolditalic-subset.woff2?sha=3114f1256") format("woff2"), url("/DOI-Styleguide/fonts/hack-bolditalic-subset.woff?sha=3114f1256") format("woff");
  font-weight: 700;
  font-style: italic;
}
/* Global styles */
/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors
 * Copyright 2011-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
/* CUSTOM DOI VARIABLES */
/* Primary Colours */
/* Gray Colours */
/* Brand Colours */
/* Colors */
/* Borders */
/* Font sizes */
/* Font weights */
/* Font Family */
/* Button Padding */
/* Link */
.bg-promo {
  background-color: #7ac4c3;
}

.bg-primary {
  background-color: #285576;
}

.bg-secondary {
  background-color: #3e837c;
}

.bg-action {
  background-color: #a44d8e;
}

.bg-dark-blue {
  background-color: #0B253B;
}

.bg-gray-100 {
  background-color: #f5f5f5;
}

.bg-gray-200 {
  background-color: #eeeeee;
}

.bg-gray-300 {
  background-color: #e0e0e0;
}

.bg-gray-400 {
  background-color: #bdbdbd;
}

.bg-gray-500 {
  background-color: #9e9e9e;
}

.bg-gray-600 {
  background-color: #757575;
}

.bg-gray-700 {
  background-color: #616161;
}

.bg-gray-800 {
  background-color: #424242;
}

.bg-gray-900 {
  background-color: #212121;
}

.bg-anti-dumping-commission {
  background-color: #202A4C;
}

.bg-anti-dumping-review-panel {
  background-color: #202A4C;
}

.bg-aus-industry {
  background-color: #254F90;
}

.bg-aus-industry-participation-authority {
  background-color: #005677;
}

.bg-aus-ska-office {
  background-color: #243E86;
}

.bg-aus-space-agency {
  background-color: #004976;
}

.bg-aus-space-discovery-centre {
  background-color: #004976;
}

.bg-critical-minerals-office {
  background-color: #A62B23;
}

.bg-industry-growth-centres {
  background-color: #005677;
}

.bg-industry-innovation-science {
  background-color: #6334D8;
}

.bg-inspiring-aus {
  background-color: #95CDE8;
}

.bg-national-measurement-institute {
  background-color: #A6192E;
}

.bg-office-chief-economist {
  background-color: #005DAF;
}

.bg-office-special-adviser {
  background-color: #005677;
}

.bg-pm-prize {
  background-color: #7E2923;
}

:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #757575;
  --bs-gray-dark: #424242;
  --bs-gray-100: #f5f5f5;
  --bs-gray-200: #eeeeee;
  --bs-gray-300: #e0e0e0;
  --bs-gray-400: #bdbdbd;
  --bs-gray-500: #9e9e9e;
  --bs-gray-600: #757575;
  --bs-gray-700: #616161;
  --bs-gray-800: #424242;
  --bs-gray-900: #212121;
  --bs-primary: #285576;
  --bs-secondary: #3e837c;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f5f5f5;
  --bs-dark: #212121;
  --bs-primary-rgb: 40, 85, 118;
  --bs-secondary-rgb: 62, 131, 124;
  --bs-success-rgb: 25, 135, 84;
  --bs-info-rgb: 13, 202, 240;
  --bs-warning-rgb: 255, 193, 7;
  --bs-danger-rgb: 220, 53, 69;
  --bs-light-rgb: 245, 245, 245;
  --bs-dark-rgb: 33, 33, 33;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-body-color-rgb: 33, 33, 33;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1.125rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #212121;
  --bs-body-bg: #fff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

hr {
  margin: 1rem 0;
  color: inherit;
  background-color: currentColor;
  border: 0;
  opacity: 0.25;
}

hr:not([size]) {
  height: 1px;
}

.doi-content h1, .doi-content h2, .doi-content h3, .doi-content h4, .doi-content h5, .doi-content h6, .doi-content .h1, .doi-content .h2, .doi-content .h3, .doi-content .h4, .doi-content .h5, .doi-content .h6, h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h1, .doi-content .h1, .h1 {
  font-size: calc(1.4999625rem + 2.99955vw);
}
@media (min-width: 1200px) {
  h1, .doi-content .h1, .h1 {
    font-size: 3.749625rem;
  }
}

h2, .doi-content .h2, .h2 {
  font-size: calc(1.35rem + 1.2vw);
}
@media (min-width: 1200px) {
  h2, .doi-content .h2, .h2 {
    font-size: 2.25rem;
  }
}

h3, .doi-content .h3, .h3 {
  font-size: calc(1.3125375rem + 0.75045vw);
}
@media (min-width: 1200px) {
  h3, .doi-content .h3, .h3 {
    font-size: 1.875375rem;
  }
}

h4, .doi-content .h4, .h4 {
  font-size: calc(1.2749625rem + 0.29955vw);
}
@media (min-width: 1200px) {
  h4, .doi-content .h4, .h4 {
    font-size: 1.499625rem;
  }
}

h5, .doi-content .h5, .h5 {
  font-size: calc(1.2562875rem + 0.07545vw);
}
@media (min-width: 1200px) {
  h5, .doi-content .h5, .h5 {
    font-size: 1.312875rem;
  }
}

h6, .doi-content .h6, .h6 {
  font-size: 1.125rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-bs-original-title] {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
  cursor: help;
  -webkit-text-decoration-skip-ink: none;
          text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: 2rem;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small, .doi-content .small, .small {
  font-size: 0.875em;
}

mark, .doi-content .mark, .mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: #a44d8e;
  text-decoration: underline;
}
a:hover {
  color: #703561;
  text-decoration: underline;
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-family: var(--bs-font-monospace);
  font-size: 1em;
  direction: ltr /* rtl:ignore */;
  unicode-bidi: bidi-override;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

code {
  font-size: 0.875em;
  color: #d63384;
  word-wrap: break-word;
}
a > code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 0.875em;
  color: #fff;
  background-color: #212121;
  border-radius: 0.2rem;
}
kbd kbd {
  padding: 0;
  font-size: 1em;
  font-weight: 700;
}

figure {
  margin: 0 0 1rem;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #757575;
  text-align: left;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}

[list]::-webkit-calendar-picker-indicator {
  display: none;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  legend {
    font-size: 1.5rem;
  }
}
legend + * {
  clear: left;
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::-webkit-file-upload-button {
  font: inherit;
}

::file-selector-button {
  font: inherit;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

iframe {
  border: 0;
}

summary {
  display: list-item;
  cursor: pointer;
}

progress {
  vertical-align: baseline;
}

[hidden] {
  display: none !important;
}

.lead {
  font-size: calc(1.265625rem + 0.1875vw);
  font-weight: 300;
}
@media (min-width: 1200px) {
  .lead {
    font-size: 1.40625rem;
  }
}

.display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-1 {
    font-size: 5rem;
  }
}

.display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-2 {
    font-size: 4.5rem;
  }
}

.display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-3 {
    font-size: 4rem;
  }
}

.display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}

.display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
  }
}

.display-6 {
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-6 {
    font-size: 2.5rem;
  }
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 0.875em;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: calc(1.265625rem + 0.1875vw);
}
@media (min-width: 1200px) {
  .blockquote {
    font-size: 1.40625rem;
  }
}
.blockquote > :last-child {
  margin-bottom: 0;
}

.blockquote-footer {
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 0.875em;
  color: #757575;
}
.blockquote-footer::before {
  content: "\u2014\xA0";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 0.1875rem;
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 0.875em;
  color: #757575;
}

.container,
.container-fluid,
.doi-content .container-sm,
.doi-content .container-md,
.doi-content .container-lg,
.doi-content .container-xl,
.doi-content .container-xxl,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .doi-content .container, .doi-content .container-sm, .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .doi-content .container, .doi-content .container-sm, .doi-content .container-md, .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .doi-content .container, .doi-content .container-sm, .doi-content .container-md, .doi-content .container-lg, .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .doi-content .container, .doi-content .container-sm, .doi-content .container-md, .doi-content .container-lg, .doi-content .container-xl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .doi-content .container, .doi-content .container-sm, .doi-content .container-md, .doi-content .container-lg, .doi-content .container-xl, .doi-content .container-xxl, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}

.col {
  flex: 1 0 0%;
}

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.33333333%;
}

.offset-2 {
  margin-left: 16.66666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333333%;
}

.offset-5 {
  margin-left: 41.66666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333333%;
}

.offset-8 {
  margin-left: 66.66666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333333%;
}

.offset-11 {
  margin-left: 91.66666667%;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

.g-1,
.gx-1 {
  --bs-gutter-x: 0.25rem;
}

.g-1,
.gy-1 {
  --bs-gutter-y: 0.25rem;
}

.g-2,
.gx-2 {
  --bs-gutter-x: 0.5rem;
}

.g-2,
.gy-2 {
  --bs-gutter-y: 0.5rem;
}

.g-3,
.gx-3 {
  --bs-gutter-x: 1rem;
}

.g-3,
.gy-3 {
  --bs-gutter-y: 1rem;
}

.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem;
}

.g-5,
.gx-5 {
  --bs-gutter-x: 3rem;
}

.g-5,
.gy-5 {
  --bs-gutter-y: 3rem;
}

@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%;
  }
  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.33333333%;
  }
  .offset-sm-2 {
    margin-left: 16.66666667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.33333333%;
  }
  .offset-sm-5 {
    margin-left: 41.66666667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.33333333%;
  }
  .offset-sm-8 {
    margin-left: 66.66666667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.33333333%;
  }
  .offset-sm-11 {
    margin-left: 91.66666667%;
  }
  .g-sm-0,
.gx-sm-0 {
    --bs-gutter-x: 0;
  }
  .g-sm-0,
.gy-sm-0 {
    --bs-gutter-y: 0;
  }
  .g-sm-1,
.gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-sm-1,
.gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-sm-2,
.gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-sm-2,
.gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-sm-3,
.gx-sm-3 {
    --bs-gutter-x: 1rem;
  }
  .g-sm-3,
.gy-sm-3 {
    --bs-gutter-y: 1rem;
  }
  .g-sm-4,
.gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-sm-4,
.gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-sm-5,
.gx-sm-5 {
    --bs-gutter-x: 3rem;
  }
  .g-sm-5,
.gy-sm-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }
  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.33333333%;
  }
  .offset-md-2 {
    margin-left: 16.66666667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.33333333%;
  }
  .offset-md-5 {
    margin-left: 41.66666667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.33333333%;
  }
  .offset-md-8 {
    margin-left: 66.66666667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.33333333%;
  }
  .offset-md-11 {
    margin-left: 91.66666667%;
  }
  .g-md-0,
.gx-md-0 {
    --bs-gutter-x: 0;
  }
  .g-md-0,
.gy-md-0 {
    --bs-gutter-y: 0;
  }
  .g-md-1,
.gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-md-1,
.gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-md-2,
.gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-md-2,
.gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-md-3,
.gx-md-3 {
    --bs-gutter-x: 1rem;
  }
  .g-md-3,
.gy-md-3 {
    --bs-gutter-y: 1rem;
  }
  .g-md-4,
.gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-md-4,
.gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-md-5,
.gx-md-5 {
    --bs-gutter-x: 3rem;
  }
  .g-md-5,
.gy-md-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }
  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.33333333%;
  }
  .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.33333333%;
  }
  .offset-lg-5 {
    margin-left: 41.66666667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.33333333%;
  }
  .offset-lg-8 {
    margin-left: 66.66666667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.33333333%;
  }
  .offset-lg-11 {
    margin-left: 91.66666667%;
  }
  .g-lg-0,
.gx-lg-0 {
    --bs-gutter-x: 0;
  }
  .g-lg-0,
.gy-lg-0 {
    --bs-gutter-y: 0;
  }
  .g-lg-1,
.gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-lg-1,
.gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-lg-2,
.gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-lg-2,
.gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-lg-3,
.gx-lg-3 {
    --bs-gutter-x: 1rem;
  }
  .g-lg-3,
.gy-lg-3 {
    --bs-gutter-y: 1rem;
  }
  .g-lg-4,
.gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-lg-4,
.gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-lg-5,
.gx-lg-5 {
    --bs-gutter-x: 3rem;
  }
  .g-lg-5,
.gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0%;
  }
  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xl-11 {
    margin-left: 91.66666667%;
  }
  .g-xl-0,
.gx-xl-0 {
    --bs-gutter-x: 0;
  }
  .g-xl-0,
.gy-xl-0 {
    --bs-gutter-y: 0;
  }
  .g-xl-1,
.gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xl-1,
.gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xl-2,
.gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xl-2,
.gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xl-3,
.gx-xl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xl-3,
.gy-xl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xl-4,
.gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xl-4,
.gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xl-5,
.gx-xl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xl-5,
.gy-xl-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%;
  }
  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xxl-0 {
    margin-left: 0;
  }
  .offset-xxl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xxl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xxl-3 {
    margin-left: 25%;
  }
  .offset-xxl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xxl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xxl-6 {
    margin-left: 50%;
  }
  .offset-xxl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xxl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xxl-9 {
    margin-left: 75%;
  }
  .offset-xxl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xxl-11 {
    margin-left: 91.66666667%;
  }
  .g-xxl-0,
.gx-xxl-0 {
    --bs-gutter-x: 0;
  }
  .g-xxl-0,
.gy-xxl-0 {
    --bs-gutter-y: 0;
  }
  .g-xxl-1,
.gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xxl-1,
.gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xxl-2,
.gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xxl-2,
.gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xxl-3,
.gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xxl-3,
.gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xxl-4,
.gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xxl-4,
.gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xxl-5,
.gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xxl-5,
.gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }
}
.table {
  --bs-table-bg: transparent;
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: #212121;
  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --bs-table-active-color: #212121;
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: #212121;
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1rem;
  color: #212121;
  vertical-align: top;
  border-color: #e0e0e0;
}
.table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
.table > tbody {
  vertical-align: inherit;
}
.table > thead {
  vertical-align: bottom;
}
.table > :not(:first-child) {
  border-top: 2px solid currentColor;
}

.caption-top {
  caption-side: top;
}

.table-sm > :not(caption) > * > * {
  padding: 0.25rem 0.25rem;
}

.table-bordered > :not(caption) > * {
  border-width: 1px 0;
}
.table-bordered > :not(caption) > * > * {
  border-width: 0 1px;
}

.table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}
.table-borderless > :not(:first-child) {
  border-top-width: 0;
}

.table-striped > tbody > tr:nth-of-type(odd) > * {
  --bs-table-accent-bg: var(--bs-table-striped-bg);
  color: var(--bs-table-striped-color);
}

.table-active {
  --bs-table-accent-bg: var(--bs-table-active-bg);
  color: var(--bs-table-active-color);
}

.table-hover > tbody > tr:hover > * {
  --bs-table-accent-bg: var(--bs-table-hover-bg);
  color: var(--bs-table-hover-color);
}

.table-primary {
  --bs-table-bg: #d4dde4;
  --bs-table-striped-bg: #c9d2d9;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bfc7cd;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c4ccd3;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #bfc7cd;
}

.table-secondary {
  --bs-table-bg: #d8e6e5;
  --bs-table-striped-bg: #cddbda;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #c2cfce;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c8d5d4;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #c2cfce;
}

.table-success {
  --bs-table-bg: #d1e7dd;
  --bs-table-striped-bg: #c7dbd2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bcd0c7;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c1d6cc;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #bcd0c7;
}

.table-info {
  --bs-table-bg: #cff4fc;
  --bs-table-striped-bg: #c5e8ef;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #badce3;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfe2e9;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #badce3;
}

.table-warning {
  --bs-table-bg: #fff3cd;
  --bs-table-striped-bg: #f2e7c3;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #e6dbb9;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #ece1be;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #e6dbb9;
}

.table-danger {
  --bs-table-bg: #f8d7da;
  --bs-table-striped-bg: #eccccf;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfc2c4;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5c7ca;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #dfc2c4;
}

.table-light {
  --bs-table-bg: #f5f5f5;
  --bs-table-striped-bg: #e9e9e9;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dddddd;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e3e3e3;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #dddddd;
}

.table-dark {
  --bs-table-bg: #212121;
  --bs-table-striped-bg: #2c2c2c;
  --bs-table-striped-color: #fff;
  --bs-table-active-bg: #373737;
  --bs-table-active-color: #fff;
  --bs-table-hover-bg: #323232;
  --bs-table-hover-color: #fff;
  color: #fff;
  border-color: #373737;
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1199.98px) {
  .table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1399.98px) {
  .table-responsive-xxl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.form-label {
  margin-bottom: 0.5rem;
}

.col-form-label {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: calc(1.265625rem + 0.1875vw);
}
@media (min-width: 1200px) {
  .col-form-label-lg {
    font-size: 1.40625rem;
  }
}

.col-form-label-sm {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: 0.984375rem;
}

.form-text {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #757575;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.5rem 2.1875rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212121;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border-radius: 0.1875rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control[type=file] {
  overflow: hidden;
}
.form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control:focus {
  color: #212121;
  background-color: #fff;
  border-color: #94aabb;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
}
.form-control::-webkit-date-and-time-value {
  height: 1.5em;
}
.form-control::-moz-placeholder {
  color: #757575;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #757575;
  opacity: 1;
}
.form-control::placeholder {
  color: #757575;
  opacity: 1;
}
.form-control:disabled, .form-control[readonly] {
  background-color: #eeeeee;
  opacity: 1;
}
.form-control::-webkit-file-upload-button {
  padding: 0.5rem 2.1875rem;
  margin: -0.5rem -2.1875rem;
  -webkit-margin-end: 2.1875rem;
          margin-inline-end: 2.1875rem;
  color: #212121;
  background-color: #eeeeee;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-control::file-selector-button {
  padding: 0.5rem 2.1875rem;
  margin: -0.5rem -2.1875rem;
  -webkit-margin-end: 2.1875rem;
          margin-inline-end: 2.1875rem;
  color: #212121;
  background-color: #eeeeee;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }
  .form-control::file-selector-button {
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #e2e2e2;
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: #e2e2e2;
}
.form-control::-webkit-file-upload-button {
  padding: 0.5rem 2.1875rem;
  margin: -0.5rem -2.1875rem;
  -webkit-margin-end: 2.1875rem;
          margin-inline-end: 2.1875rem;
  color: #212121;
  background-color: #eeeeee;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #e2e2e2;
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  margin-bottom: 0;
  line-height: 1.5;
  color: #212121;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}
.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  min-height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1.8125rem;
  font-size: 0.984375rem;
  border-radius: 0.2rem;
}
.form-control-sm::-webkit-file-upload-button {
  padding: 0.5rem 1.8125rem;
  margin: -0.5rem -1.8125rem;
  -webkit-margin-end: 1.8125rem;
          margin-inline-end: 1.8125rem;
}
.form-control-sm::file-selector-button {
  padding: 0.5rem 1.8125rem;
  margin: -0.5rem -1.8125rem;
  -webkit-margin-end: 1.8125rem;
          margin-inline-end: 1.8125rem;
}
.form-control-sm::-webkit-file-upload-button {
  padding: 0.5rem 1.8125rem;
  margin: -0.5rem -1.8125rem;
  -webkit-margin-end: 1.8125rem;
          margin-inline-end: 1.8125rem;
}

.form-control-lg {
  min-height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: calc(1.265625rem + 0.1875vw);
  border-radius: 0.3rem;
}
@media (min-width: 1200px) {
  .form-control-lg {
    font-size: 1.40625rem;
  }
}
.form-control-lg::-webkit-file-upload-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}
.form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}
.form-control-lg::-webkit-file-upload-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

textarea.form-control {
  min-height: calc(1.5em + 1rem + 2px);
}
textarea.form-control-sm {
  min-height: calc(1.5em + 1rem + 2px);
}
textarea.form-control-lg {
  min-height: calc(1.5em + 1rem + 2px);
}

.form-control-color {
  width: 3rem;
  height: auto;
  padding: 0.5rem;
}
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control-color::-moz-color-swatch {
  height: 1.5em;
  border-radius: 0.1875rem;
}
.form-control-color::-webkit-color-swatch {
  height: 1.5em;
  border-radius: 0.1875rem;
}

.form-select {
  display: block;
  width: 100%;
  padding: 0.5rem 6.5625rem 0.5rem 2.1875rem;
  -moz-padding-start: calc(2.1875rem - 3px);
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212121;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23424242' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 2.1875rem center;
  background-size: 16px 12px;
  border: 1px solid #bdbdbd;
  border-radius: 0.1875rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-select {
    transition: none;
  }
}
.form-select:focus {
  border-color: #94aabb;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
}
.form-select[multiple], .form-select[size]:not([size="1"]) {
  padding-right: 2.1875rem;
  background-image: none;
}
.form-select:disabled {
  background-color: #eeeeee;
}
.form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #212121;
}

.form-select-sm {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.8125rem;
  font-size: 0.984375rem;
  border-radius: 0.2rem;
}

.form-select-lg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: calc(1.265625rem + 0.1875vw);
  border-radius: 0.3rem;
}
@media (min-width: 1200px) {
  .form-select-lg {
    font-size: 1.40625rem;
  }
}

.form-check {
  display: block;
  min-height: 1.6875rem;
  padding-left: 1.5em;
  margin-bottom: 0.125rem;
}
.form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}

.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  -webkit-print-color-adjust: exact;
          color-adjust: exact;
}
.form-check-input[type=checkbox] {
  border-radius: 0.25em;
}
.form-check-input[type=radio] {
  border-radius: 50%;
}
.form-check-input:active {
  filter: brightness(90%);
}
.form-check-input:focus {
  border-color: #94aabb;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
}
.form-check-input:checked {
  background-color: #285576;
  border-color: #285576;
}
.form-check-input:checked[type=checkbox] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type=radio] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
.form-check-input[type=checkbox]:indeterminate {
  background-color: #285576;
  border-color: #285576;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  opacity: 0.5;
}

.form-switch {
  padding-left: 2.5em;
}
.form-switch .form-check-input {
  width: 2em;
  margin-left: -2.5em;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  background-position: left center;
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-switch .form-check-input {
    transition: none;
  }
}
.form-switch .form-check-input:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2394aabb'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
  background-position: right center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}

.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-check[disabled] + .btn, .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}

.form-range {
  width: 100%;
  height: 1.5rem;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.form-range:focus {
  outline: 0;
}
.form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
}
.form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
}
.form-range::-moz-focus-outer {
  border: 0;
}
.form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #285576;
  border: 0;
  border-radius: 1rem;
  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
          appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-webkit-slider-thumb {
    -webkit-transition: none;
    transition: none;
  }
}
.form-range::-webkit-slider-thumb:active {
  background-color: #bfccd6;
}
.form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #e0e0e0;
  border-color: transparent;
  border-radius: 1rem;
}
.form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #285576;
  border: 0;
  border-radius: 1rem;
  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -moz-appearance: none;
       appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-moz-range-thumb {
    -moz-transition: none;
    transition: none;
  }
}
.form-range::-moz-range-thumb:active {
  background-color: #bfccd6;
}
.form-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #e0e0e0;
  border-color: transparent;
  border-radius: 1rem;
}
.form-range:disabled {
  pointer-events: none;
}
.form-range:disabled::-webkit-slider-thumb {
  background-color: #9e9e9e;
}
.form-range:disabled::-moz-range-thumb {
  background-color: #9e9e9e;
}

.form-floating {
  position: relative;
}
.form-floating > .form-control,
.form-floating > .form-select {
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}
.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem 2.1875rem;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-floating > label {
    transition: none;
  }
}
.form-floating > .form-control {
  padding: 1rem 2.1875rem;
}
.form-floating > .form-control::-moz-placeholder {
  color: transparent;
}
.form-floating > .form-control:-ms-input-placeholder {
  color: transparent;
}
.form-floating > .form-control::placeholder {
  color: transparent;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:not(:-ms-input-placeholder) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:not(:-ms-input-placeholder) ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:-webkit-autofill ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control,
.input-group > .form-select {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus {
  z-index: 3;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 3;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.5rem 2.1875rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212121;
  text-align: center;
  white-space: nowrap;
  background-color: #eeeeee;
  border: 1px solid #bdbdbd;
  border-radius: 0.1875rem;
}

.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text,
.input-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: calc(1.265625rem + 0.1875vw);
  border-radius: 0.3rem;
}
@media (min-width: 1200px) {
  .input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text,
.input-group-lg > .btn {
    font-size: 1.40625rem;
  }
}

.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text,
.input-group-sm > .btn {
  padding: 0.5rem 1.8125rem;
  font-size: 0.984375rem;
  border-radius: 0.2rem;
}

.input-group-lg > .form-select,
.input-group-sm > .form-select {
  padding-right: 8.75rem;
}

.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),
.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #198754;
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.984375rem;
  color: #fff;
  background-color: rgba(25, 135, 84, 0.9);
  border-radius: 0.1875rem;
}

.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip,
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .form-control:valid, .form-control.is-valid {
  border-color: #198754;
  padding-right: calc(1.5em + 1rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.25rem) center;
  background-size: calc(0.75em + 0.5rem) calc(0.75em + 0.5rem);
}
.was-validated .form-control:valid:focus, .form-control.is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.was-validated textarea.form-control:valid, textarea.form-control.is-valid {
  padding-right: calc(1.5em + 1rem);
  background-position: top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem);
}

.was-validated .form-select:valid, .form-select.is-valid {
  border-color: #198754;
}
.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"] {
  padding-right: 12.03125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23424242' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-position: right 2.1875rem center, center right 6.5625rem;
  background-size: 16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem);
}
.was-validated .form-select:valid:focus, .form-select.is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.was-validated .form-check-input:valid, .form-check-input.is-valid {
  border-color: #198754;
}
.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {
  background-color: #198754;
}
.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: #198754;
}

.form-check-inline .form-check-input ~ .valid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group .form-control:valid, .input-group .form-control.is-valid,
.was-validated .input-group .form-select:valid,
.input-group .form-select.is-valid {
  z-index: 1;
}
.was-validated .input-group .form-control:valid:focus, .input-group .form-control.is-valid:focus,
.was-validated .input-group .form-select:valid:focus,
.input-group .form-select.is-valid:focus {
  z-index: 3;
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.984375rem;
  color: #fff;
  background-color: rgba(220, 53, 69, 0.9);
  border-radius: 0.1875rem;
}

.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip,
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 1rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.25rem) center;
  background-size: calc(0.75em + 0.5rem) calc(0.75em + 0.5rem);
}
.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 1rem);
  background-position: top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem);
}

.was-validated .form-select:invalid, .form-select.is-invalid {
  border-color: #dc3545;
}
.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"] {
  padding-right: 12.03125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23424242' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-position: right 2.1875rem center, center right 6.5625rem;
  background-size: 16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem);
}
.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.was-validated .form-check-input:invalid, .form-check-input.is-invalid {
  border-color: #dc3545;
}
.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {
  background-color: #dc3545;
}
.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: #dc3545;
}

.form-check-inline .form-check-input ~ .invalid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group .form-control:invalid, .input-group .form-control.is-invalid,
.was-validated .input-group .form-select:invalid,
.input-group .form-select.is-invalid {
  z-index: 2;
}
.was-validated .input-group .form-control:invalid:focus, .input-group .form-control.is-invalid:focus,
.was-validated .input-group .form-select:invalid:focus,
.input-group .form-select.is-invalid:focus {
  z-index: 3;
}

.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212121;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.5rem 2.1875rem;
  font-size: 1.125rem;
  border-radius: 0.1875rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #212121;
  text-decoration: none;
}
.btn-check:focus + .btn, .btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
}
.btn:disabled, .btn.disabled, fieldset:disabled .btn {
  pointer-events: none;
  opacity: 0.65;
}

.btn-primary {
  color: #fff;
  background-color: #285576;
  border-color: #285576;
}
.btn-primary:hover {
  color: #fff;
  background-color: #224864;
  border-color: #20445e;
}
.btn-check:focus + .btn-primary, .btn-primary:focus {
  color: #fff;
  background-color: #224864;
  border-color: #20445e;
  box-shadow: 0 0 0 0.25rem rgba(72, 111, 139, 0.5);
}
.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #20445e;
  border-color: #1e4059;
}
.btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(72, 111, 139, 0.5);
}
.btn-primary:disabled, .btn-primary.disabled {
  color: #fff;
  background-color: #285576;
  border-color: #285576;
}

.btn-secondary {
  color: #000;
  background-color: #3e837c;
  border-color: #3e837c;
}
.btn-secondary:hover {
  color: #000;
  background-color: #5b9690;
  border-color: #518f89;
}
.btn-check:focus + .btn-secondary, .btn-secondary:focus {
  color: #000;
  background-color: #5b9690;
  border-color: #518f89;
  box-shadow: 0 0 0 0.25rem rgba(53, 111, 105, 0.5);
}
.btn-check:checked + .btn-secondary, .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active, .show > .btn-secondary.dropdown-toggle {
  color: #000;
  background-color: #659c96;
  border-color: #518f89;
}
.btn-check:checked + .btn-secondary:focus, .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus, .show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(53, 111, 105, 0.5);
}
.btn-secondary:disabled, .btn-secondary.disabled {
  color: #000;
  background-color: #3e837c;
  border-color: #3e837c;
}

.btn-success {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-success:hover {
  color: #fff;
  background-color: #157347;
  border-color: #146c43;
}
.btn-check:focus + .btn-success, .btn-success:focus {
  color: #fff;
  background-color: #157347;
  border-color: #146c43;
  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.btn-check:checked + .btn-success, .btn-check:active + .btn-success, .btn-success:active, .btn-success.active, .show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #146c43;
  border-color: #13653f;
}
.btn-check:checked + .btn-success:focus, .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus, .show > .btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.btn-success:disabled, .btn-success.disabled {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}

.btn-info {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-info:hover {
  color: #000;
  background-color: #31d2f2;
  border-color: #25cff2;
}
.btn-check:focus + .btn-info, .btn-info:focus {
  color: #000;
  background-color: #31d2f2;
  border-color: #25cff2;
  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.btn-check:checked + .btn-info, .btn-check:active + .btn-info, .btn-info:active, .btn-info.active, .show > .btn-info.dropdown-toggle {
  color: #000;
  background-color: #3dd5f3;
  border-color: #25cff2;
}
.btn-check:checked + .btn-info:focus, .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus, .show > .btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.btn-info:disabled, .btn-info.disabled {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}

.btn-warning {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-warning:hover {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
}
.btn-check:focus + .btn-warning, .btn-warning:focus {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-check:checked + .btn-warning, .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active, .show > .btn-warning.dropdown-toggle {
  color: #000;
  background-color: #ffcd39;
  border-color: #ffc720;
}
.btn-check:checked + .btn-warning:focus, .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus, .show > .btn-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-warning:disabled, .btn-warning.disabled {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
}
.btn-check:focus + .btn-danger, .btn-danger:focus {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-check:checked + .btn-danger, .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active, .show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #b02a37;
  border-color: #a52834;
}
.btn-check:checked + .btn-danger:focus, .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus, .show > .btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-danger:disabled, .btn-danger.disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-light {
  color: #000;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
}
.btn-light:hover {
  color: #000;
  background-color: #f7f7f7;
  border-color: #f6f6f6;
}
.btn-check:focus + .btn-light, .btn-light:focus {
  color: #000;
  background-color: #f7f7f7;
  border-color: #f6f6f6;
  box-shadow: 0 0 0 0.25rem rgba(208, 208, 208, 0.5);
}
.btn-check:checked + .btn-light, .btn-check:active + .btn-light, .btn-light:active, .btn-light.active, .show > .btn-light.dropdown-toggle {
  color: #000;
  background-color: #f7f7f7;
  border-color: #f6f6f6;
}
.btn-check:checked + .btn-light:focus, .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus, .show > .btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(208, 208, 208, 0.5);
}
.btn-light:disabled, .btn-light.disabled {
  color: #000;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
}

.btn-dark {
  color: #fff;
  background-color: #212121;
  border-color: #212121;
}
.btn-dark:hover {
  color: #fff;
  background-color: #1c1c1c;
  border-color: #1a1a1a;
}
.btn-check:focus + .btn-dark, .btn-dark:focus {
  color: #fff;
  background-color: #1c1c1c;
  border-color: #1a1a1a;
  box-shadow: 0 0 0 0.25rem rgba(66, 66, 66, 0.5);
}
.btn-check:checked + .btn-dark, .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active, .show > .btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #1a1a1a;
  border-color: #191919;
}
.btn-check:checked + .btn-dark:focus, .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus, .show > .btn-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(66, 66, 66, 0.5);
}
.btn-dark:disabled, .btn-dark.disabled {
  color: #fff;
  background-color: #212121;
  border-color: #212121;
}

.btn-outline-primary {
  color: #285576;
  border-color: #285576;
}
.btn-outline-primary:hover {
  color: #fff;
  background-color: #285576;
  border-color: #285576;
}
.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.5);
}
.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {
  color: #fff;
  background-color: #285576;
  border-color: #285576;
}
.btn-check:checked + .btn-outline-primary:focus, .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.5);
}
.btn-outline-primary:disabled, .btn-outline-primary.disabled {
  color: #285576;
  background-color: transparent;
}

.btn-outline-secondary {
  color: #3e837c;
  border-color: #3e837c;
}
.btn-outline-secondary:hover {
  color: #000;
  background-color: #3e837c;
  border-color: #3e837c;
}
.btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {
  box-shadow: 0 0 0 0.25rem rgba(62, 131, 124, 0.5);
}
.btn-check:checked + .btn-outline-secondary, .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show {
  color: #000;
  background-color: #3e837c;
  border-color: #3e837c;
}
.btn-check:checked + .btn-outline-secondary:focus, .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(62, 131, 124, 0.5);
}
.btn-outline-secondary:disabled, .btn-outline-secondary.disabled {
  color: #3e837c;
  background-color: transparent;
}

.btn-outline-success {
  color: #198754;
  border-color: #198754;
}
.btn-outline-success:hover {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-check:focus + .btn-outline-success, .btn-outline-success:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-check:checked + .btn-outline-success, .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-check:checked + .btn-outline-success:focus, .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-outline-success:disabled, .btn-outline-success.disabled {
  color: #198754;
  background-color: transparent;
}

.btn-outline-info {
  color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-outline-info:hover {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-check:focus + .btn-outline-info, .btn-outline-info:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-check:checked + .btn-outline-info, .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-check:checked + .btn-outline-info:focus, .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-outline-info:disabled, .btn-outline-info.disabled {
  color: #0dcaf0;
  background-color: transparent;
}

.btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
}
.btn-outline-warning:hover {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-check:checked + .btn-outline-warning, .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-check:checked + .btn-outline-warning:focus, .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-outline-warning:disabled, .btn-outline-warning.disabled {
  color: #ffc107;
  background-color: transparent;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}
.btn-outline-danger:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-check:checked + .btn-outline-danger, .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-check:checked + .btn-outline-danger:focus, .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-outline-danger:disabled, .btn-outline-danger.disabled {
  color: #dc3545;
  background-color: transparent;
}

.btn-outline-light {
  color: #f5f5f5;
  border-color: #f5f5f5;
}
.btn-outline-light:hover {
  color: #000;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
}
.btn-check:focus + .btn-outline-light, .btn-outline-light:focus {
  box-shadow: 0 0 0 0.25rem rgba(245, 245, 245, 0.5);
}
.btn-check:checked + .btn-outline-light, .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show {
  color: #000;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
}
.btn-check:checked + .btn-outline-light:focus, .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(245, 245, 245, 0.5);
}
.btn-outline-light:disabled, .btn-outline-light.disabled {
  color: #f5f5f5;
  background-color: transparent;
}

.btn-outline-dark {
  color: #212121;
  border-color: #212121;
}
.btn-outline-dark:hover {
  color: #fff;
  background-color: #212121;
  border-color: #212121;
}
.btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {
  box-shadow: 0 0 0 0.25rem rgba(33, 33, 33, 0.5);
}
.btn-check:checked + .btn-outline-dark, .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show {
  color: #fff;
  background-color: #212121;
  border-color: #212121;
}
.btn-check:checked + .btn-outline-dark:focus, .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(33, 33, 33, 0.5);
}
.btn-outline-dark:disabled, .btn-outline-dark.disabled {
  color: #212121;
  background-color: transparent;
}

.btn-link {
  font-weight: 400;
  color: #a44d8e;
  text-decoration: underline;
}
.btn-link:hover {
  color: #703561;
  text-decoration: underline;
}
.btn-link:focus {
  text-decoration: underline;
}
.btn-link:disabled, .btn-link.disabled {
  color: #757575;
}

.btn-lg {
  padding: 0.5rem 1rem;
  font-size: calc(1.265625rem + 0.1875vw);
  border-radius: 0.3rem;
}
@media (min-width: 1200px) {
  .btn-lg {
    font-size: 1.40625rem;
  }
}

.btn-sm {
  padding: 0.5rem 1.8125rem;
  font-size: 0.984375rem;
  border-radius: 0.2rem;
}

.btn-primary {
  color: white;
  background-color: #285576;
  border-color: #285576;
}
.btn-primary:hover {
  color: #fff;
  background-color: #244D6B;
  border-color: #244D6B;
}
.btn-check:focus + .btn-primary, .btn-primary:focus {
  color: #fff;
  background-color: #244D6B;
  border-color: #244D6B;
  box-shadow: 0 0 0 0.25rem rgba(72, 111, 139, 0.5);
}
.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #20445e;
  border-color: #1e4059;
}
.btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(72, 111, 139, 0.5);
}
.btn-primary:disabled, .btn-primary.disabled {
  color: white;
  background-color: #D1D7E0;
  border-color: #D1D7E0;
}
.btn-check:focus + .btn-primary, .btn-primary:focus {
  box-shadow: 0 0 0 0.25rem #649DC7;
}

.btn-outline-primary {
  color: #285576;
  border-color: #285576;
}
.btn-outline-primary:hover {
  color: #244D6B;
  background-color: white;
  border-color: #244D6B;
}
.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.5);
}
.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {
  color: #000;
  background-color: white;
  border-color: #244D6B;
}
.btn-check:checked + .btn-outline-primary:focus, .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.5);
}
.btn-outline-primary:disabled, .btn-outline-primary.disabled {
  color: #285576;
  background-color: transparent;
}
.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {
  box-shadow: 0 0 0 0.25rem #649DC7;
}
.btn-outline-primary:disabled, .btn-outline-primary.disabled {
  color: #D1D7E0;
  border-color: #D1D7E0;
  background-color: transparent;
}

a.link-secondary {
  color: black;
}
a.link-secondary svg {
  opacity: 0;
}
a.link-secondary:hover svg {
  opacity: 100%;
}
a.link-secondary:hover svg path {
  fill: black;
}
a.link-secondary:focus svg {
  opacity: 100%;
}
a.link-secondary:focus svg path {
  fill: black;
}
a:hover,
a .hover {
  text-underline-offset: 0.125rem;
}
a:focus,
a .focus {
  text-decoration: underline;
  text-underline-offset: 0.125rem;
  color: #703561;
}
a.disabled {
  pointer-events: none;
  opacity: 0.5;
  text-decoration: none;
}

.link-icon {
  width: auto;
  height: auto;
}
.link-icon.link-external svg {
  margin-left: 0.48rem;
  width: 14px;
  height: 14px;
  margin-bottom: 0.1rem;
}
.link-icon svg {
  margin-left: 0.734rem;
  width: 13px;
  height: 9px;
}

h1, .doi-content .h1,
.h1 {
  font-size: 60px;
  line-height: 1;
  font-weight: 700;
}

h2, .doi-content .h2,
.h2 {
  font-size: 36px;
  line-height: 1.2;
  font-weight: 600;
}

h3, .doi-content .h3,
.h3 {
  font-size: 30px;
  line-height: 1.2;
  margin-bottom: 1rem;
  font-weight: 600;
}

h4, .doi-content .h4,
.h4 {
  font-size: 24px;
  line-height: 1.2;
  font-weight: 600;
}

h5, .doi-content .h5,
.h5 {
  font-size: 21px;
  line-height: 1.2;
  font-weight: 600;
}

.subheading {
  text-transform: uppercase;
  color: #888888;
  font-size: 15px;
}

.display-large {
  font-family: "Public Sans", sans-serif;
  font-size: 48px;
  font-weight: bold;
  line-height: 56px;
}

.display-medium {
  font-family: "Public Sans", sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 40px;
}

.display-small {
  font-family: "Public Sans", sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.35px;
}

.heading-large {
  font-family: "Public Sans", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
}

.heading-medium {
  font-family: "Public Sans", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.2px;
}

.heading-small {
  font-family: "Public Sans", sans-serif;
  font-size: 21px;
  font-weight: 600;
  line-height: 24px;
}

.heading-extra-small {
  font-family: "Public Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.04px;
}

.heading-extra-small-caps {
  font-family: "Public Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.body-lead {
  font-family: "Public Sans", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
}

.body-large {
  font-family: "Public Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}

.body-large-bold {
  font-family: "Public Sans", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
}

.body-medium {
  font-family: "Public Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
}

.body-medium-bold {
  font-family: "Public Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
}

.body-small {
  font-family: "Public Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
}

.body-small-bold {
  font-family: "Public Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.3px;
}

.caption-large {
  font-family: "Public Sans", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
}

.caption-bold {
  font-family: "Public Sans", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
}

.link-large {
  font-family: "Public Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}

.link-large-hover {
  font-family: "Public Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}
.link-large-hover:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}

ul {
  font-family: "Public Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  margin-left: 1rem;
}
ul li::marker {
  color: #285576;
}

ol {
  font-family: "Public Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  counter-reset: item;
  margin-left: 1rem;
}
ol li::marker {
  color: #285576;
}

blockquote {
  font-family: "Public Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  color: #285576;
  border-left: none;
}

cite {
  font-family: "Public Sans", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-align: center;
  color: #285576;
}

.dropup,
.dropend,
.dropdown,
.dropstart {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1.125rem;
  color: #212121;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.1875rem;
}
.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: 0.125rem;
}

.dropdown-menu-start {
  --bs-position: start;
}
.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}

.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
  }
  .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-md-end {
    --bs-position: end;
  }
  .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}

.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212121;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.dropdown-item:hover, .dropdown-item:focus {
  color: #1e1e1e;
  text-decoration: none;
  background-color: #eeeeee;
}
.dropdown-item.active, .dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #285576;
}
.dropdown-item.disabled, .dropdown-item:disabled {
  color: #9e9e9e;
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 0.984375rem;
  color: #757575;
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: 0.25rem 1rem;
  color: #212121;
}

.dropdown-menu-dark {
  color: #e0e0e0;
  background-color: #424242;
  border-color: rgba(0, 0, 0, 0.15);
}
.dropdown-menu-dark .dropdown-item {
  color: #e0e0e0;
}
.dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
}
.dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {
  color: #fff;
  background-color: #285576;
}
.dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {
  color: #9e9e9e;
}
.dropdown-menu-dark .dropdown-divider {
  border-color: rgba(0, 0, 0, 0.15);
}
.dropdown-menu-dark .dropdown-item-text {
  color: #e0e0e0;
}
.dropdown-menu-dark .dropdown-header {
  color: #9e9e9e;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #a44d8e;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
.nav-link:hover, .nav-link:focus {
  color: #703561;
  text-decoration: none;
}
.nav-link.disabled {
  color: #757575;
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  border-bottom: 1px solid #e0e0e0;
}
.nav-tabs .nav-link {
  margin-bottom: -1px;
  background: none;
  border: 1px solid transparent;
  border-top-left-radius: 0.1875rem;
  border-top-right-radius: 0.1875rem;
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  border-color: #eeeeee #eeeeee #e0e0e0;
  isolation: isolate;
}
.nav-tabs .nav-link.disabled {
  color: #757575;
  background-color: transparent;
  border-color: transparent;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #616161;
  background-color: #fff;
  border-color: #e0e0e0 #e0e0e0 #fff;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  background: none;
  border: 0;
  border-radius: 0.1875rem;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #285576;
}

.nav-fill > .nav-link,
.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified > .nav-link,
.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
  width: 100%;
}

.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.doi-content .navbar > .container,
.doi-content .navbar > .container-fluid,
.doi-content .navbar > .container-sm,
.doi-content .navbar > .container-md,
.doi-content .navbar > .container-lg,
.doi-content .navbar > .container-xl,
.doi-content .navbar > .container-xxl, .navbar > .container,
.navbar > .container-fluid,
.navbar > .container-sm,
.navbar > .container-md,
.navbar > .container-lg,
.navbar > .container-xl,
.navbar > .container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  padding-top: 0.2890625rem;
  padding-bottom: 0.2890625rem;
  margin-right: 1rem;
  font-size: calc(1.265625rem + 0.1875vw);
  text-decoration: none;
  white-space: nowrap;
}
@media (min-width: 1200px) {
  .navbar-brand {
    font-size: 1.40625rem;
  }
}
.navbar-brand:hover, .navbar-brand:focus {
  text-decoration: none;
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}
.navbar-nav .dropdown-menu {
  position: static;
}

.navbar-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: calc(1.265625rem + 0.1875vw);
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.1875rem;
  transition: box-shadow 0.15s ease-in-out;
}
@media (min-width: 1200px) {
  .navbar-toggler {
    font-size: 1.40625rem;
  }
}
@media (prefers-reduced-motion: reduce) {
  .navbar-toggler {
    transition: none;
  }
}
.navbar-toggler:hover {
  text-decoration: none;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 0.25rem;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.navbar-nav-scroll {
  max-height: var(--bs-scroll-height, 75vh);
  overflow-y: auto;
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-sm .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
  .navbar-expand-sm .offcanvas-header {
    display: none;
  }
  .navbar-expand-sm .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .navbar-expand-sm .offcanvas-top,
.navbar-expand-sm .offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .navbar-expand-sm .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-md .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
  .navbar-expand-md .offcanvas-header {
    display: none;
  }
  .navbar-expand-md .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .navbar-expand-md .offcanvas-top,
.navbar-expand-md .offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .navbar-expand-md .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-lg .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
  .navbar-expand-lg .offcanvas-header {
    display: none;
  }
  .navbar-expand-lg .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .navbar-expand-lg .offcanvas-top,
.navbar-expand-lg .offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .navbar-expand-lg .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-xl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
  .navbar-expand-xl .offcanvas-header {
    display: none;
  }
  .navbar-expand-xl .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .navbar-expand-xl .offcanvas-top,
.navbar-expand-xl .offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .navbar-expand-xl .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1400px) {
  .navbar-expand-xxl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xxl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xxl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xxl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-xxl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xxl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xxl .navbar-toggler {
    display: none;
  }
  .navbar-expand-xxl .offcanvas-header {
    display: none;
  }
  .navbar-expand-xxl .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .navbar-expand-xxl .offcanvas-top,
.navbar-expand-xxl .offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .navbar-expand-xxl .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
.navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.navbar-expand .navbar-nav {
  flex-direction: row;
}
.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
.navbar-expand .navbar-nav-scroll {
  overflow: visible;
}
.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.navbar-expand .navbar-toggler {
  display: none;
}
.navbar-expand .offcanvas-header {
  display: none;
}
.navbar-expand .offcanvas {
  position: inherit;
  bottom: 0;
  z-index: 1000;
  flex-grow: 1;
  visibility: visible !important;
  background-color: transparent;
  border-right: 0;
  border-left: 0;
  transition: none;
  transform: none;
}
.navbar-expand .offcanvas-top,
.navbar-expand .offcanvas-bottom {
  height: auto;
  border-top: 0;
  border-bottom: 0;
}
.navbar-expand .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}

.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.55);
}
.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
  color: rgba(0, 0, 0, 0.7);
}
.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0, 0, 0, 0.3);
}
.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.55);
  border-color: rgba(0, 0, 0, 0.1);
}
.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-light .navbar-text {
  color: rgba(0, 0, 0, 0.55);
}
.navbar-light .navbar-text a,
.navbar-light .navbar-text a:hover,
.navbar-light .navbar-text a:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-dark .navbar-brand {
  color: #fff;
}
.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
  color: #fff;
}
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.55);
}
.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 0.75);
}
.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}
.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .nav-link.active {
  color: #fff;
}
.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.55);
  border-color: rgba(255, 255, 255, 0.1);
}
.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.55);
}
.navbar-dark .navbar-text a,
.navbar-dark .navbar-text a:hover,
.navbar-dark .navbar-text a:focus {
  color: #fff;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.1875rem;
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: calc(0.1875rem - 1px);
  border-top-right-radius: calc(0.1875rem - 1px);
}
.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: calc(0.1875rem - 1px);
  border-bottom-left-radius: calc(0.1875rem - 1px);
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}

.card-title {
  margin-bottom: 0.5rem;
}

.card-subtitle {
  margin-top: -0.25rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}
.card-link + .card-link {
  margin-left: 1rem;
}

.card-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.card-header:first-child {
  border-radius: calc(0.1875rem - 1px) calc(0.1875rem - 1px) 0 0;
}

.card-footer {
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.card-footer:last-child {
  border-radius: 0 0 calc(0.1875rem - 1px) calc(0.1875rem - 1px);
}

.card-header-tabs {
  margin-right: -0.5rem;
  margin-bottom: -0.5rem;
  margin-left: -0.5rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  border-radius: calc(0.1875rem - 1px);
}

.card-img,
.card-img-top,
.card-img-bottom {
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.1875rem - 1px);
  border-top-right-radius: calc(0.1875rem - 1px);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: calc(0.1875rem - 1px);
  border-bottom-left-radius: calc(0.1875rem - 1px);
}

.card-group > .card {
  margin-bottom: 0.75rem;
}
@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-top,
.card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-bottom,
.card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-top,
.card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-bottom,
.card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1.125rem;
  color: #212121;
  text-align: left;
  background-color: #fff;
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button {
    transition: none;
  }
}
.accordion-button:not(.collapsed) {
  color: #244d6a;
  background-color: #eaeef1;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
}
.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23244d6a'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: rotate(-180deg);
}
.accordion-button::after {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-left: auto;
  content: "";
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212121'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 1.25rem;
  transition: transform 0.2s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button::after {
    transition: none;
  }
}
.accordion-button:hover {
  z-index: 2;
}
.accordion-button:focus {
  z-index: 3;
  border-color: #94aabb;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
}

.accordion-header {
  margin-bottom: 0;
}

.accordion-item {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.accordion-item:first-of-type {
  border-top-left-radius: 0.1875rem;
  border-top-right-radius: 0.1875rem;
}
.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: calc(0.1875rem - 1px);
  border-top-right-radius: calc(0.1875rem - 1px);
}
.accordion-item:not(:first-of-type) {
  border-top: 0;
}
.accordion-item:last-of-type {
  border-bottom-right-radius: 0.1875rem;
  border-bottom-left-radius: 0.1875rem;
}
.accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: calc(0.1875rem - 1px);
  border-bottom-left-radius: calc(0.1875rem - 1px);
}
.accordion-item:last-of-type .accordion-collapse {
  border-bottom-right-radius: 0.1875rem;
  border-bottom-left-radius: 0.1875rem;
}

.accordion-body {
  padding: 1rem 1.25rem;
}

.accordion-flush .accordion-collapse {
  border-width: 0;
}
.accordion-flush .accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.accordion-flush .accordion-item:first-child {
  border-top: 0;
}
.accordion-flush .accordion-item:last-child {
  border-bottom: 0;
}
.accordion-flush .accordion-item .accordion-button {
  border-radius: 0;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0;
  margin-bottom: 1rem;
  list-style: none;
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}
.breadcrumb-item + .breadcrumb-item::before {
  float: left;
  padding-right: 0.5rem;
  color: #757575;
  content: var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */;
}
.breadcrumb-item.active {
  color: #757575;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
}

.page-link {
  position: relative;
  display: block;
  color: #a44d8e;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .page-link {
    transition: none;
  }
}
.page-link:hover {
  z-index: 2;
  color: #703561;
  text-decoration: none;
  background-color: #eeeeee;
  border-color: #e0e0e0;
}
.page-link:focus {
  z-index: 3;
  color: #703561;
  background-color: #eeeeee;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
}

.page-item:not(:first-child) .page-link {
  margin-left: -1px;
}
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #285576;
  border-color: #285576;
}
.page-item.disabled .page-link {
  color: #757575;
  pointer-events: none;
  background-color: #fff;
  border-color: #e0e0e0;
}

.page-link {
  padding: 0.375rem 0.75rem;
}

.page-item:first-child .page-link {
  border-top-left-radius: 0.1875rem;
  border-bottom-left-radius: 0.1875rem;
}
.page-item:last-child .page-link {
  border-top-right-radius: 0.1875rem;
  border-bottom-right-radius: 0.1875rem;
}

.pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: calc(1.265625rem + 0.1875vw);
}
@media (min-width: 1200px) {
  .pagination-lg .page-link {
    font-size: 1.40625rem;
  }
}
.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}
.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.pagination-sm .page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.984375rem;
}
.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}
.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

.badge {
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.1875rem;
}
.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.1875rem;
}

.list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.list-group-numbered > li::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}

.list-group-item-action {
  width: 100%;
  color: #616161;
  text-align: inherit;
}
.list-group-item-action:hover, .list-group-item-action:focus {
  z-index: 1;
  color: #616161;
  text-decoration: none;
  background-color: #f5f5f5;
}
.list-group-item-action:active {
  color: #212121;
  background-color: #eeeeee;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  color: #212121;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled, .list-group-item:disabled {
  color: #757575;
  pointer-events: none;
  background-color: #fff;
}
.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #285576;
  border-color: #285576;
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}

.list-group-horizontal {
  flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child {
  border-bottom-left-radius: 0.1875rem;
  border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child {
  border-top-right-radius: 0.1875rem;
  border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: 1px;
  border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: -1px;
  border-left-width: 1px;
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child {
    border-bottom-left-radius: 0.1875rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child {
    border-top-right-radius: 0.1875rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child {
    border-bottom-left-radius: 0.1875rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child {
    border-top-right-radius: 0.1875rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child {
    border-bottom-left-radius: 0.1875rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child {
    border-top-right-radius: 0.1875rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child {
    border-bottom-left-radius: 0.1875rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child {
    border-top-right-radius: 0.1875rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1400px) {
  .list-group-horizontal-xxl {
    flex-direction: row;
  }
  .list-group-horizontal-xxl > .list-group-item:first-child {
    border-bottom-left-radius: 0.1875rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item:last-child {
    border-top-right-radius: 0.1875rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
.list-group-flush {
  border-radius: 0;
}
.list-group-flush > .list-group-item {
  border-width: 0 0 1px;
}
.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  color: #183347;
  background-color: #d4dde4;
}
.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
  color: #183347;
  background-color: #bfc7cd;
}
.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #183347;
  border-color: #183347;
}

.list-group-item-secondary {
  color: #254f4a;
  background-color: #d8e6e5;
}
.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
  color: #254f4a;
  background-color: #c2cfce;
}
.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #254f4a;
  border-color: #254f4a;
}

.list-group-item-success {
  color: #0f5132;
  background-color: #d1e7dd;
}
.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
  color: #0f5132;
  background-color: #bcd0c7;
}
.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #0f5132;
  border-color: #0f5132;
}

.list-group-item-info {
  color: #055160;
  background-color: #cff4fc;
}
.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
  color: #055160;
  background-color: #badce3;
}
.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #055160;
  border-color: #055160;
}

.list-group-item-warning {
  color: #664d03;
  background-color: #fff3cd;
}
.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
  color: #664d03;
  background-color: #e6dbb9;
}
.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #664d03;
  border-color: #664d03;
}

.list-group-item-danger {
  color: #842029;
  background-color: #f8d7da;
}
.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
  color: #842029;
  background-color: #dfc2c4;
}
.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #842029;
  border-color: #842029;
}

.list-group-item-light {
  color: #626262;
  background-color: #fdfdfd;
}
.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
  color: #626262;
  background-color: #e4e4e4;
}
.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #626262;
  border-color: #626262;
}

.list-group-item-dark {
  color: #141414;
  background-color: lightgray;
}
.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
  color: #141414;
  background-color: #bebebe;
}
.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #141414;
  border-color: #141414;
}

.btn-close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  border: 0;
  border-radius: 0.1875rem;
  opacity: 0.5;
}
.btn-close:hover {
  color: #000;
  text-decoration: none;
  opacity: 0.75;
}
.btn-close:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
  opacity: 1;
}
.btn-close:disabled, .btn-close.disabled {
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  opacity: 0.25;
}

.btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1055;
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}
.modal.show .modal-dialog {
  transform: none;
}
.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  height: calc(100% - 1rem);
}
.modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
}
.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.modal-backdrop.fade {
  opacity: 0;
}
.modal-backdrop.show {
  opacity: 0.5;
}

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #e0e0e0;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.modal-header .btn-close {
  padding: 0.5rem 0.5rem;
  margin: -0.5rem -0.5rem -0.5rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #e0e0e0;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
.modal-footer > * {
  margin: 0.25rem;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }
  .modal-dialog-scrollable {
    height: calc(100% - 3.5rem);
  }
  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }
  .modal-sm {
    max-width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg,
.modal-xl {
    max-width: 800px;
  }
}
@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}
.modal-fullscreen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
.modal-fullscreen .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
.modal-fullscreen .modal-header {
  border-radius: 0;
}
.modal-fullscreen .modal-body {
  overflow-y: auto;
}
.modal-fullscreen .modal-footer {
  border-radius: 0;
}

@media (max-width: 575.98px) {
  .modal-fullscreen-sm-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-sm-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-sm-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 767.98px) {
  .modal-fullscreen-md-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-md-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-md-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 991.98px) {
  .modal-fullscreen-lg-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-lg-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-lg-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1199.98px) {
  .modal-fullscreen-xl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-xl-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1399.98px) {
  .modal-fullscreen-xxl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xxl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-xxl-down .modal-footer {
    border-radius: 0;
  }
}
.tooltip {
  position: absolute;
  z-index: 1080;
  display: block;
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.984375rem;
  word-wrap: break-word;
  opacity: 0;
}
.tooltip.show {
  opacity: 0.9;
}
.tooltip .tooltip-arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}
.tooltip .tooltip-arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top, .doi-content .bs-tooltip-auto[data-popper-placement^=top], .bs-tooltip-auto[data-popper-placement^=top] {
  padding: 0.4rem 0;
}
.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {
  bottom: 0;
}
.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
  top: -1px;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: #000;
}

.bs-tooltip-end, .doi-content .bs-tooltip-auto[data-popper-placement^=right], .bs-tooltip-auto[data-popper-placement^=right] {
  padding: 0 0.4rem;
}
.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
  right: -1px;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #000;
}

.bs-tooltip-bottom, .doi-content .bs-tooltip-auto[data-popper-placement^=bottom], .bs-tooltip-auto[data-popper-placement^=bottom] {
  padding: 0.4rem 0;
}
.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {
  top: 0;
}
.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
  bottom: -1px;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #000;
}

.bs-tooltip-start, .doi-content .bs-tooltip-auto[data-popper-placement^=left], .bs-tooltip-auto[data-popper-placement^=left] {
  padding: 0 0.4rem;
}
.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
  left: -1px;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #000;
}

.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.1875rem;
}

.popover {
  position: absolute;
  top: 0;
  left: 0 /* rtl:ignore */;
  z-index: 1070;
  display: block;
  max-width: 276px;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.984375rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}
.popover .popover-arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
}
.popover .popover-arrow::before, .popover .popover-arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-popover-top > .popover-arrow, .doi-content .bs-popover-auto[data-popper-placement^=top] > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {
  bottom: calc(-0.5rem - 1px);
}
.bs-popover-top > .popover-arrow::before, .doi-content .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {
  bottom: 0;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-top > .popover-arrow::after, .doi-content .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  bottom: 1px;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: #fff;
}

.bs-popover-end > .popover-arrow, .doi-content .bs-popover-auto[data-popper-placement^=right] > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {
  left: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
}
.bs-popover-end > .popover-arrow::before, .doi-content .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {
  left: 0;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-end > .popover-arrow::after, .doi-content .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  left: 1px;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: #fff;
}

.bs-popover-bottom > .popover-arrow, .doi-content .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {
  top: calc(-0.5rem - 1px);
}
.bs-popover-bottom > .popover-arrow::before, .doi-content .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {
  top: 0;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-bottom > .popover-arrow::after, .doi-content .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  top: 1px;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: #fff;
}
.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -0.5rem;
  content: "";
  border-bottom: 1px solid #f0f0f0;
}

.bs-popover-start > .popover-arrow, .doi-content .bs-popover-auto[data-popper-placement^=left] > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {
  right: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
}
.bs-popover-start > .popover-arrow::before, .doi-content .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {
  right: 0;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-start > .popover-arrow::after, .doi-content .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  right: 1px;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: #fff;
}

.popover-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 1.125rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.popover-header:empty {
  display: none;
}

.popover-body {
  padding: 1rem 1rem;
  color: #212121;
}

.placeholder {
  display: inline-block;
  min-height: 1em;
  vertical-align: middle;
  cursor: wait;
  background-color: currentColor;
  opacity: 0.5;
}
.placeholder.btn::before {
  display: inline-block;
  content: "";
}

.placeholder-xs {
  min-height: 0.6em;
}

.placeholder-sm {
  min-height: 0.8em;
}

.placeholder-lg {
  min-height: 1.2em;
}

.placeholder-glow .placeholder {
  -webkit-animation: placeholder-glow 2s ease-in-out infinite;
          animation: placeholder-glow 2s ease-in-out infinite;
}

@-webkit-keyframes placeholder-glow {
  50% {
    opacity: 0.2;
  }
}

@keyframes placeholder-glow {
  50% {
    opacity: 0.2;
  }
}
.placeholder-wave {
  -webkit-mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
          mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
  -webkit-mask-size: 200% 100%;
          mask-size: 200% 100%;
  -webkit-animation: placeholder-wave 2s linear infinite;
          animation: placeholder-wave 2s linear infinite;
}

@-webkit-keyframes placeholder-wave {
  100% {
    -webkit-mask-position: -200% 0%;
            mask-position: -200% 0%;
  }
}

@keyframes placeholder-wave {
  100% {
    -webkit-mask-position: -200% 0%;
            mask-position: -200% 0%;
  }
}
:root {
  --c-brand: #3eaf7c;
  --c-brand-light: #4abf8a;
  --doi-primary: #285576;
  --doi-secondary: #3E837C;
  --doi-promo: #7AC4C3;
  --doi-action: #A44D8E;
  --doi-dark-blue: #0B253B;
  --doi-cyan: #CAE7E7;
  --c-bg: #ffffff;
  --c-bg-light: #f3f4f5;
  --c-bg-lighter: #eeeeee;
  --c-bg-navbar: var(--doi-dark-blue);
  --c-bg-sidebar: var(--c-bg);
  --c-bg-arrow: #cccccc;
  --c-text: #2c3e50;
  --c-text-navbar: #F8FBFB;
  --c-text-accent: var(--doi-action);
  --c-text-light: #3a5169;
  --c-text-lighter: #4e6e8e;
  --c-text-lightest: #6a8bad;
  --c-text-quote: #999999;
  --c-border: #eaecef;
  --c-border-dark: #dfe2e5;
  --c-tip: #42b983;
  --c-tip-bg: var(--c-bg-light);
  --c-tip-title: var(--c-text);
  --c-tip-text: var(--c-text);
  --c-tip-text-accent: var(--c-text-accent);
  --c-warning: #e7c000;
  --c-warning-bg: #fffae3;
  --c-warning-title: #ad9000;
  --c-warning-text: #746000;
  --c-warning-text-accent: var(--c-text);
  --c-danger: #cc0000;
  --c-danger-bg: #ffe0e0;
  --c-danger-title: #990000;
  --c-danger-text: #660000;
  --c-danger-text-accent: var(--c-text);
  --c-details-bg: #eeeeee;
  --c-badge-tip: var(--c-tip);
  --c-badge-warning: var(--c-warning);
  --c-badge-danger: var(--c-danger);
  --t-color: 0.3s ease;
  --t-transform: 0.3s ease;
  --code-bg-color: #282c34;
  --code-hl-bg-color: rgba(0, 0, 0, 0.66);
  --code-ln-color: #9e9e9e;
  --code-ln-wrapper-width: 3.5rem;
  --font-family: proxima-nova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  --font-family-code: "Hack", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  --font-weight-semi-bold: 600;
  --font-size-lead-text: 33px;
  --navbar-height: 105px;
  --navbar-padding-v: 1.5rem;
  --navbar-padding-h: 1.5rem;
  --sidebar-width: 20rem;
  --sidebar-width-mobile: calc(var(--sidebar-width) * 0.82);
  --content-width: 1440px;
  --homepage-width: 1440px;
}

.back-to-top {
  --back-to-top-color: var(--c-brand);
  --back-to-top-color-hover: var(--c-brand-light);
}

.DocSearch {
  --docsearch-primary-color: var(--c-brand);
  --docsearch-text-color: var(--c-text);
  --docsearch-highlight-color: var(--c-brand);
  --docsearch-muted-color: var(--c-text-quote);
  --docsearch-container-background: rgba(9, 10, 17, 0.8);
  --docsearch-modal-background: var(--c-bg-light);
  --docsearch-searchbox-background: var(--c-bg-lighter);
  --docsearch-searchbox-focus-background: var(--c-bg);
  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--c-brand);
  --docsearch-hit-color: var(--c-text-light);
  --docsearch-hit-active-color: var(--c-bg);
  --docsearch-hit-background: var(--c-bg);
  --docsearch-hit-shadow: 0 1px 3px 0 var(--c-border-dark);
  --docsearch-footer-background: var(--c-bg);
}

.external-link-icon {
  --external-link-icon-color: var(--c-text-quote);
}

.medium-zoom-overlay {
  --medium-zoom-bg-color: var(--c-bg);
}

#nprogress {
  --nprogress-color: var(--c-brand);
}

.pwa-popup {
  --pwa-popup-text-color: var(--c-text);
  --pwa-popup-bg-color: var(--c-bg);
  --pwa-popup-border-color: var(--c-brand);
  --pwa-popup-shadow: 0 4px 16px var(--c-brand);
  --pwa-popup-btn-text-color: var(--c-bg);
  --pwa-popup-btn-bg-color: var(--c-brand);
  --pwa-popup-btn-hover-bg-color: var(--c-brand-light);
}

.search-box {
  --search-bg-color: var(--c-bg);
  --search-accent-color: var(--c-brand);
  --search-text-color: var(--c-text);
  --search-border-color: var(--c-border);
  --search-item-text-color: var(--c-text-lighter);
  --search-item-focus-bg-color: var(--c-bg-light);
}

html.dark {
  --c-brand: #3aa675;
  --c-brand-light: #349469;
  --c-bg: #22272e;
  --c-bg-light: #2b313a;
  --c-bg-lighter: #262c34;
  --c-text: #adbac7;
  --c-text-light: #96a7b7;
  --c-text-lighter: #8b9eb0;
  --c-text-lightest: #8094a8;
  --c-border: #3e4c5a;
  --c-border-dark: #34404c;
  --c-tip: #318a62;
  --c-warning: #ceab00;
  --c-warning-bg: #7e755b;
  --c-warning-title: #ceac03;
  --c-warning-text: #362e00;
  --c-danger: #940000;
  --c-danger-bg: #806161;
  --c-danger-title: #610000;
  --c-danger-text: #3a0000;
  --c-details-bg: #323843;
  --code-hl-bg-color: #363b46;
}

html.dark .DocSearch {
  --docsearch-logo-color: var(--c-text);
  --docsearch-modal-shadow: inset 1px 1px 0 0 #2c2e40, 0 3px 8px 0 #000309;
  --docsearch-key-shadow: inset 0 -2px 0 0 #282d55, inset 0 0 1px 1px #51577d,
    0 2px 2px 0 rgba(3, 4, 9, 0.3);
  --docsearch-key-gradient: linear-gradient(-225deg, #444950, #1c1e21);
  --docsearch-footer-shadow: inset 0 1px 0 0 rgba(73, 76, 106, 0.5),
    0 -4px 8px 0 rgba(0, 0, 0, 0.2);
}

/* Responsive breakpoints */
/* Code languages */
/* Colours */
/* General */
/* Fonts */
.fw-semi-bold {
  font-weight: 600;
}

/* Cards */
/* Spacings */
html,
body {
  padding: 0;
  margin: 0;
  background-color: var(--c-bg);
  transition: background-color var(--t-color);
}

html.dark {
  color-scheme: dark;
}
html.dark body {
  background-color: var(--c-bg);
  color: var(--c-text);
}

body {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: var(--c-text);
}

a {
  font-weight: 500;
  color: var(--c-text-accent);
  text-decoration: none;
  overflow-wrap: break-word;
}
a.header-anchor {
  font-size: 0.85em;
  float: left;
  margin-left: -0.87em;
  padding-right: 0.23em;
  margin-top: 0.125em;
  opacity: 0;
}
a.header-anchor:hover {
  text-decoration: none;
}
a.header-anchor:focus-visible {
  opacity: 1;
}

p a code {
  font-weight: 400;
  color: var(--c-text-accent);
}

kbd {
  font-family: var(--font-family-code);
  color: var(--c-text);
  background: var(--c-bg-lighter);
  border: solid 0.15rem var(--c-border-dark);
  border-bottom: solid 0.25rem var(--c-border-dark);
  border-radius: 0.15rem;
  padding: 0 0.15em;
}

code {
  font-family: var(--font-family-code);
  color: var(--c-text-lighter);
  padding: 0.25rem 0.5rem;
  margin: 0;
  font-size: 0.85em;
  background-color: var(--c-bg-light);
  border-radius: 3px;
  overflow-wrap: break-word;
  transition: background-color var(--t-color);
}

ul,
ol {
  padding-left: 1.2em;
  line-height: 1.3;
}

strong {
  font-weight: 600;
}

h1, .doi-content .h1,
.h1,
h2,
.doi-content .h2,
.h2,
h3,
.doi-content .h3,
.h3,
h4,
.doi-content .h4,
.h4,
h5,
.doi-content .h5,
.h5,
h6,
.doi-content .h6,
.h6 {
  padding: 1rem 0 0 0;
  margin: 0 0 1.5rem 0;
  border-bottom: 0;
}
h1:focus-visible,
.h1:focus-visible,
h2:focus-visible,
.h2:focus-visible,
h3:focus-visible,
.h3:focus-visible,
h4:focus-visible,
.h4:focus-visible,
h5:focus-visible,
.h5:focus-visible,
h6:focus-visible,
.h6:focus-visible {
  outline: none;
}
h1:hover .header-anchor,
.h1:hover .header-anchor,
h2:hover .header-anchor,
.h2:hover .header-anchor,
h3:hover .header-anchor,
.h3:hover .header-anchor,
h4:hover .header-anchor,
.h4:hover .header-anchor,
h5:hover .header-anchor,
.h5:hover .header-anchor,
h6:hover .header-anchor,
.h6:hover .header-anchor {
  opacity: 1;
}

hr {
  border: 0;
  border-top: 1px solid var(--c-border);
}

img {
  max-width: 100%;
}

/* Default component styles */
.arrow {
  display: inline-block;
  width: 0;
  height: 0;
}
.arrow.up {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 6px solid var(--c-bg-arrow);
}
.arrow.down {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 6px solid var(--c-bg-arrow);
}
.arrow.right {
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 6px solid var(--c-bg-arrow);
}
.arrow.left {
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-right: 6px solid var(--c-bg-arrow);
}

.badge {
  display: inline-block;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  border-radius: 3px;
  padding: 0 6px;
  color: var(--c-bg);
  vertical-align: top;
  transition: color var(--t-color), background-color var(--t-color);
}
.badge.tip {
  background-color: var(--c-badge-tip);
}
.badge.warning {
  background-color: var(--c-badge-warning);
}
.badge.danger {
  background-color: var(--c-badge-danger);
}
.table-of-contents .badge {
  vertical-align: middle;
}
.badge + .badge {
  margin-left: 5px;
}

code[class*=language-],
pre[class*=language-] {
  color: #ccc;
  background: none;
  font-family: var(--font-family-code);
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*=language-] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*=language-],
pre[class*=language-] {
  background: #2d2d2d;
}

/* Inline code */
:not(pre) > code[class*=language-] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #999;
}

.token.punctuation {
  color: #ccc;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color: #ec5975;
}

.token.function-name {
  color: #6196cc;
}

.token.boolean,
.token.number,
.token.function {
  color: #f08d49;
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: #f8c555;
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: #cc99cd;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
  color: #7ec699;
}

.token.operator,
.token.entity,
.token.url {
  color: #67cdcc;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: #3eaf7c;
}

pre,
pre[class*=language-] {
  line-height: 1.4;
  padding: 1.3rem 1.5rem;
  margin: 0.85rem 0;
  border-radius: 6px;
  overflow: auto;
}
pre code,
pre[class*=language-] code {
  color: #fff;
  padding: 0;
  background-color: transparent;
  border-radius: 0;
  overflow-wrap: unset;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.line-number {
  font-family: var(--font-family-code);
}

div[class*=language-] {
  position: relative;
  background-color: var(--code-bg-color);
  border-radius: 6px;
}
div[class*=language-]::before {
  position: absolute;
  z-index: 3;
  top: 0.8em;
  right: 1em;
  font-size: 0.75rem;
  color: var(--code-ln-color);
}
div[class*=language-] pre,
div[class*=language-] pre[class*=language-] {
  background: transparent !important;
  position: relative;
  z-index: 1;
}
div[class*=language-] .highlight-lines {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  padding-top: 1.3rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 1.4;
}
div[class*=language-] .highlight-lines .highlight-line {
  background-color: var(--code-hl-bg-color);
}
div[class*=language-]:not(.line-numbers-mode) .line-numbers {
  display: none;
}
div[class*=language-].line-numbers-mode .highlight-lines .highlight-line {
  position: relative;
}
div[class*=language-].line-numbers-mode .highlight-lines .highlight-line::before {
  content: " ";
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  display: block;
  width: var(--code-ln-wrapper-width);
  height: 100%;
}
div[class*=language-].line-numbers-mode pre {
  margin-left: var(--code-ln-wrapper-width);
  padding-left: 1rem;
  vertical-align: middle;
}
div[class*=language-].line-numbers-mode .line-numbers {
  position: absolute;
  top: 0;
  width: var(--code-ln-wrapper-width);
  text-align: center;
  color: var(--code-ln-color);
  padding-top: 1.25rem;
  line-height: 1.4;
}
div[class*=language-].line-numbers-mode .line-numbers br {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
div[class*=language-].line-numbers-mode .line-numbers .line-number {
  position: relative;
  z-index: 3;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  font-size: 0.85em;
  line-height: 0;
}
div[class*=language-].line-numbers-mode::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: var(--code-ln-wrapper-width);
  height: 100%;
  border-radius: 6px 0 0 6px;
  border-right: 1px solid var(--code-hl-bg-color);
}

div[class*=language-].ext-c:before {
  content: "c";
}

div[class*=language-].ext-cpp:before {
  content: "cpp";
}

div[class*=language-].ext-cs:before {
  content: "cs";
}

div[class*=language-].ext-css:before {
  content: "css";
}

div[class*=language-].ext-dart:before {
  content: "dart";
}

div[class*=language-].ext-docker:before {
  content: "docker";
}

div[class*=language-].ext-fs:before {
  content: "fs";
}

div[class*=language-].ext-go:before {
  content: "go";
}

div[class*=language-].ext-html:before {
  content: "html";
}

div[class*=language-].ext-java:before {
  content: "java";
}

div[class*=language-].ext-js:before {
  content: "js";
}

div[class*=language-].ext-json:before {
  content: "json";
}

div[class*=language-].ext-kt:before {
  content: "kt";
}

div[class*=language-].ext-less:before {
  content: "less";
}

div[class*=language-].ext-makefile:before {
  content: "makefile";
}

div[class*=language-].ext-md:before {
  content: "md";
}

div[class*=language-].ext-php:before {
  content: "php";
}

div[class*=language-].ext-py:before {
  content: "py";
}

div[class*=language-].ext-rb:before {
  content: "rb";
}

div[class*=language-].ext-rs:before {
  content: "rs";
}

div[class*=language-].ext-sass:before {
  content: "sass";
}

div[class*=language-].ext-scss:before {
  content: "scss";
}

div[class*=language-].ext-sh:before {
  content: "sh";
}

div[class*=language-].ext-styl:before {
  content: "styl";
}

div[class*=language-].ext-ts:before {
  content: "ts";
}

div[class*=language-].ext-toml:before {
  content: "toml";
}

div[class*=language-].ext-vue:before {
  content: "vue";
}

div[class*=language-].ext-yml:before {
  content: "yml";
}

@media (max-width: 419px) {
  div[class*=language-] {
    margin: 0.85rem -1.5rem;
    border-radius: 0;
  }
}
/**
 * code-group
 */
.code-group__nav {
  margin-top: 0.85rem;
  margin-bottom: calc(-1.7rem - 6px);
  padding-bottom: calc(1.7rem - 6px);
  padding-left: 10px;
  padding-top: 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: var(--code-bg-color);
}

.code-group__ul {
  margin: auto 0;
  padding-left: 0;
  display: inline-flex;
  list-style: none;
}

.code-group__nav-tab {
  border: 0;
  padding: 5px;
  cursor: pointer;
  background-color: transparent;
  font-size: 0.85em;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

.code-group__nav-tab:focus {
  outline: none;
}

.code-group__nav-tab:focus-visible {
  outline: 1px solid rgba(255, 255, 255, 0.9);
}

.code-group__nav-tab-active {
  border-bottom: var(--c-brand) 1px solid;
}

@media (max-width: 419px) {
  .code-group__nav {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    border-radius: 0;
  }
}
/**
 * code-group-item
 */
.code-group-item {
  display: none;
}

.code-group-item__active {
  display: block;
}

.code-group-item > pre {
  background-color: orange;
}

.custom-container {
  transition: color var(--t-color), border-color var(--t-color), background-color var(--t-color);
}
.custom-container .custom-container-title {
  font-weight: 600;
}
.custom-container .custom-container-title:not(:only-child) {
  margin-bottom: -0.4rem;
}
.custom-container.tip, .custom-container.warning, .custom-container.danger {
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;
}
.custom-container.tip {
  border-color: var(--c-tip);
  background-color: var(--c-tip-bg);
  color: var(--c-tip-text);
}
.custom-container.tip .custom-container-title {
  color: var(--c-tip-title);
}
.custom-container.tip a {
  color: var(--c-tip-text-accent);
}
.custom-container.warning {
  border-color: var(--c-warning);
  background-color: var(--c-warning-bg);
  color: var(--c-warning-text);
}
.custom-container.warning .custom-container-title {
  color: var(--c-warning-title);
}
.custom-container.warning a {
  color: var(--c-warning-text-accent);
}
.custom-container.danger {
  border-color: var(--c-danger);
  background-color: var(--c-danger-bg);
  color: var(--c-danger-text);
}
.custom-container.danger .custom-container-title {
  color: var(--c-danger-title);
}
.custom-container.danger a {
  color: var(--c-danger-text-accent);
}
.custom-container.details {
  display: block;
  position: relative;
  border-radius: 2px;
  margin: 1.6em 0;
  padding: 1.6em;
  background-color: var(--c-details-bg);
}
.custom-container.details h4, .custom-container.details .h4 {
  margin-top: 0;
}
.custom-container.details figure:last-child,
.custom-container.details p:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
}
.custom-container.details summary {
  outline: none;
  cursor: pointer;
}

.c-icon svg {
  width: auto;
  height: 17px;
}

.home {
  padding: var(--navbar-height) 2rem 0;
  max-width: var(--homepage-width);
  margin: 0px auto;
  display: block;
}
.home .hero {
  text-align: center;
}
.home .hero img {
  max-width: 100%;
  max-height: 280px;
  display: block;
  margin: 3rem auto 1.5rem;
}
.home .hero h1, .home .hero .h1 {
  font-size: 3rem;
}
.home .hero h1, .home .hero .h1,
.home .hero .description,
.home .hero .actions {
  margin: 1.8rem auto;
}
.home .hero .actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.home .hero .description {
  max-width: 35rem;
  font-size: 1.6rem;
  line-height: 1.3;
  color: var(--c-text-lightest);
}
.home .hero .action-button {
  display: inline-block;
  font-size: 1.2rem;
  padding: 0.8rem 1.6rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  transition: background-color var(--t-color);
  box-sizing: border-box;
}
.home .hero .action-button.primary {
  color: var(--c-bg);
  background-color: var(--c-brand);
  border-color: var(--c-brand);
}
.home .hero .action-button.primary:hover {
  background-color: var(--c-brand-light);
}
.home .hero .action-button.secondary {
  color: var(--c-brand);
  background-color: var(--c-bg);
  border-color: var(--c-brand);
}
.home .hero .action-button.secondary:hover {
  color: var(--c-bg);
  background-color: var(--c-brand-light);
}
.home .features {
  border-top: 1px solid var(--c-border);
  transition: border-color var(--t-color);
  padding: 1.2rem 0;
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-between;
}
.home .feature {
  flex-grow: 1;
  flex-basis: 30%;
  max-width: 30%;
}
.home .feature h2, .home .feature .h2 {
  font-size: 1.4rem;
  font-weight: 500;
  border-bottom: none;
  padding-bottom: 0;
  color: var(--c-text-light);
}
.home .feature p {
  color: var(--c-text-lighter);
}
.home .footer {
  padding: 2.5rem;
  border-top: 1px solid var(--c-border);
  text-align: center;
  color: var(--c-text-lighter);
  transition: border-color var(--t-color);
}

@media (max-width: 719px) {
  .home .features {
    flex-direction: column;
  }
  .home .feature {
    max-width: 100%;
    padding: 0 2.5rem;
  }
}
@media (max-width: 419px) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .home .hero img {
    max-height: 210px;
    margin: 2rem auto 1.2rem;
  }
  .home .hero h1, .home .hero .h1 {
    font-size: 2rem;
  }
  .home .hero h1, .home .hero .h1,
.home .hero .description,
.home .hero .actions {
    margin: 1.2rem auto;
  }
  .home .hero .description {
    font-size: 1.2rem;
  }
  .home .hero .action-button {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
  .home .feature h2, .home .feature .h2 {
    font-size: 1.25rem;
  }
}
/* Table width fix */
table.table {
  display: table;
}

table {
  border-collapse: collapse;
  margin: 1rem 0;
  display: block;
  overflow-x: auto;
  transition: border-color var(--t-color);
}
table.table > :not(:first-child) {
  border-top: none;
}

thead.borderless tr, tbody.borderless tr {
  border-bottom: none;
  width: 100%;
}
tr {
  border-bottom: 1px solid var(--c-border-dark);
  transition: border-color var(--t-color);
}
tr:nth-child(2n) {
  background-color: transparent;
}

th,
td {
  padding: 0.6em 1em;
  border: none;
  transition: border-color var(--t-color);
  vertical-align: middle;
}

.page-content {
  padding: 0 2rem;
}

.content-container {
  padding-top: var(--navbar-height);
}

.content-group {
  margin-bottom: 4rem;
}

.navbar {
  --navbar-line-height: calc(var(--navbar-height) - 2 * var(--navbar-padding-v));
  line-height: var(--navbar-line-height);
  background: var(--c-bg-navbar);
  border-bottom: none;
  position: fixed;
  padding: var(--navbar-padding-v) var(--navbar-padding-h);
}
.navbar .logo {
  height: var(--navbar-line-height);
  vertical-align: top;
}
.navbar .site-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--c-text-navbar);
  position: relative;
}
.navbar .navbar-items-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 4rem;
  flex-grow: 1;
  position: unset;
}
.navbar .navbar-items-wrapper .navbar-items {
  flex-grow: 1;
}
.navbar .navbar-items-wrapper .search-box {
  flex: 0 0 auto;
  vertical-align: top;
}

@media (max-width: 719px) {
  .navbar {
    padding-left: 4rem;
  }
  .navbar .can-hide {
    display: none;
  }
  .navbar .site-name {
    width: calc(100vw - 9.4rem);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
/**
 * navbar-items
 */
.navbar-items {
  display: inline-block;
}
.navbar-items a {
  display: inline-block;
  line-height: 1.4rem;
  color: var(--c-text-navbar);
}
.navbar-items a:hover, .navbar-items a.router-link-active {
  color: var(--c-text-navbar);
}
.navbar-items .navbar-item {
  position: relative;
  display: inline-block;
  margin-left: 1.5rem;
  line-height: var(--navbar-line-height);
}
.navbar-items .navbar-item:first-child {
  margin-left: 0;
}

@media (max-width: 719px) {
  .navbar-items .navbar-item {
    margin-left: 0;
  }
}
@media (min-width: 719px) {
  .navbar-items a:hover, .navbar-items a.router-link-active {
    color: var(--c-text-navbar);
  }
  .navbar-item > a:hover, .navbar-item > a.router-link-active {
    margin-bottom: -2px;
    border-bottom: 2px solid var(--doi-action);
  }
}
/**
 * toggle sidebar button
 */
.toggle-sidebar-button {
  position: absolute;
  top: 0.6rem;
  left: 1rem;
  display: none;
  padding: 0.6rem;
  cursor: pointer;
}

.toggle-sidebar-button .icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  cursor: inherit;
}
.toggle-sidebar-button .icon span {
  display: inline-block;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: var(--c-text);
  transition: transform var(--t-transform);
}
.toggle-sidebar-button .icon span:nth-child(2) {
  margin: 6px 0;
}

@media screen and (max-width: 719px) {
  .toggle-sidebar-button {
    display: block;
  }
}
/**
 * toggle dark button
 */
.toggle-dark-button {
  display: flex;
  margin: auto;
  margin-left: 1rem;
  border: 0;
  background: none;
  color: var(--c-text-navbar);
  opacity: 0.8;
  cursor: pointer;
}
.toggle-dark-button:hover {
  opacity: 1;
}
.toggle-dark-button .icon {
  width: 1.25rem;
  height: 1.25rem;
}

.DocSearch {
  transition: background-color var(--t-color);
}

.navbar-dropdown-wrapper {
  cursor: pointer;
}
.navbar-dropdown-wrapper .navbar-dropdown-title, .navbar-dropdown-wrapper .navbar-dropdown-title-mobile {
  display: block;
  font-size: 0.9rem;
  font-family: inherit;
  cursor: inherit;
  padding: inherit;
  line-height: 1.4rem;
  background: transparent;
  border: none;
  font-weight: 500;
  color: var(--c-text-navbar);
}
.navbar-dropdown-wrapper .navbar-dropdown-title:hover, .navbar-dropdown-wrapper .navbar-dropdown-title-mobile:hover {
  border-color: transparent;
}
.navbar-dropdown-wrapper .navbar-dropdown-title .arrow, .navbar-dropdown-wrapper .navbar-dropdown-title-mobile .arrow {
  vertical-align: middle;
  margin-top: -1px;
  margin-left: 0.4rem;
}
.navbar-dropdown-wrapper .navbar-dropdown-title-mobile {
  display: none;
  font-weight: 600;
  font-size: inherit;
}
.navbar-dropdown-wrapper .navbar-dropdown-title-mobile:hover {
  color: var(--c-text-accent);
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item {
  color: inherit;
  line-height: 1.7rem;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle {
  margin: 0.45rem 0 0;
  border-top: 1px solid var(--c-border);
  padding: 1rem 0 0.45rem 0;
  font-size: 0.9rem;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle > span {
  padding: 0 1.5rem 0 1.25rem;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle > a {
  font-weight: inherit;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle > a.router-link-active::after {
  display: none;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subitem-wrapper {
  padding: 0;
  list-style: none;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subitem-wrapper .navbar-dropdown-subitem {
  font-size: 0.9em;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item a {
  display: block;
  line-height: 1.7rem;
  position: relative;
  border-bottom: none;
  font-weight: 400;
  margin-bottom: 0;
  padding: 0 1.5rem 0 1.25rem;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item a:hover {
  color: var(--c-text-accent);
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item a.router-link-active {
  color: var(--c-text-accent);
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item a.router-link-active::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid var(--c-text-accent);
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  position: absolute;
  top: calc(50% - 2px);
  left: 9px;
}
.navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item:first-child .navbar-dropdown-subtitle {
  margin-top: 0;
  padding-top: 0;
  border-top: 0;
}

@media (max-width: 719px) {
  .navbar-dropdown-wrapper.open .navbar-dropdown-title, .navbar-dropdown-wrapper.open .navbar-dropdown-title-mobile {
    margin-bottom: 0.5rem;
  }
  .navbar-dropdown-wrapper .navbar-dropdown-title, .navbar-dropdown-wrapper .navbar-dropdown-title-mobile {
    display: none;
  }
  .navbar-dropdown-wrapper .navbar-dropdown-title-mobile {
    display: block;
  }
  .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle {
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subtitle, .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item > a {
    font-size: 15px;
    line-height: 2rem;
  }
  .navbar-dropdown-wrapper .navbar-dropdown .navbar-dropdown-item .navbar-dropdown-subitem {
    font-size: 14px;
    padding-left: 1rem;
  }
}
@media (min-width: 720px) {
  .navbar-dropdown-wrapper {
    height: 1.8rem;
  }
  .navbar-dropdown-wrapper:hover .navbar-dropdown, .navbar-dropdown-wrapper.open .navbar-dropdown {
    display: block !important;
  }
  .navbar-dropdown-wrapper.open:blur {
    display: none;
  }
  .navbar-dropdown-wrapper .navbar-dropdown {
    display: none;
    height: auto !important;
    box-sizing: border-box;
    max-height: calc(100vh - 2.7rem);
    overflow-y: auto;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: var(--c-bg-navbar);
    padding: 0.6rem 0;
    border: 1px solid var(--c-border);
    border-bottom-color: var(--c-border-dark);
    text-align: left;
    border-radius: 0.25rem;
    white-space: nowrap;
    margin: 0;
  }
}
.page {
  min-height: calc(100vh - var(--navbar-height));
  padding: 7rem 0 0 0;
  display: block;
}

.page-meta {
  padding: 1rem 0;
  margin: 0;
  max-width: none;
  overflow: auto;
}
.page-meta .meta-item {
  cursor: default;
  margin-top: 0.8rem;
}
.page-meta .meta-item .meta-item-label {
  font-weight: 500;
  color: var(--c-text-lighter);
}
.page-meta .meta-item .meta-item-info {
  font-weight: 400;
  color: var(--c-text-quote);
}
.page-meta .edit-link {
  display: inline-block;
  margin-right: 0.25rem;
}
.page-meta .last-updated {
  float: none;
}

@media (max-width: 719px) {
  .page-meta .last-updated {
    font-size: 0.8em;
    float: none;
  }
  .page-meta .contributors {
    font-size: 0.8em;
  }
}
.page-nav {
  padding-top: 1rem;
  padding-bottom: 0;
}
.page-nav .inner {
  min-height: 2rem;
  margin-top: 0;
  border-top: 1px solid var(--c-border);
  transition: border-color var(--t-color);
  padding-top: 1rem;
  overflow: auto;
}
.page-nav .prev a:before {
  content: "\u2190";
}
.page-nav .next {
  float: right;
}
.page-nav .next a:after {
  content: "\u2192";
}

.sidebar {
  position: unset;
  top: unset;
  bottom: unset;
  margin: 0;
  padding: 7rem 0 0 0;
  overflow-y: auto;
  width: auto;
  max-width: var(--sidebar-width);
  transition: transform var(--t-transform), background-color var(--t-color), border-color var(--t-color);
}
.sidebar .subtitle {
  padding: 1.5rem 0;
  text-transform: uppercase;
  color: #888888;
  font-size: 15px;
}
.sidebar ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.sidebar a {
  display: inline-block;
  color: #000;
  font-weight: 600;
}
.sidebar a:hover {
  color: var(--c-text-accent);
}
.sidebar .navbar-items {
  display: none;
  border-bottom: 1px solid var(--c-border);
  transition: border-color var(--t-color);
  padding: 0.5rem 0 0.75rem 0;
}
.sidebar .navbar-items a {
  font-weight: 600;
}
.sidebar .navbar-items .navbar-item {
  display: block;
  line-height: 1.25rem;
  font-size: 1.1em;
  padding: 0.5rem 0 0.5rem 1.5rem;
}
.sidebar .sidebar-items {
  padding: 0;
}

@media (max-width: 719px) {
  .sidebar .navbar-items {
    display: block;
  }
  .sidebar .navbar-items .navbar-dropdown-wrapper,
.sidebar .navbar-items .navbar-dropdown,
.sidebar .navbar-items .navbar-dropdown-item,
.sidebar .navbar-items a.router-link-active::after {
    top: calc(1rem - 2px);
  }
  .sidebar .sidebar-items {
    padding: 0;
  }
}
.sidebar-mask {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: none;
}

.theme-container.sidebar-open .sidebar-mask {
  display: block;
}
.theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(1) {
  transform: rotate(45deg) translate3d(5.5px, 5.5px, 0);
}
.theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(2) {
  transform: scale3d(0, 1, 1);
}
.theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(3) {
  transform: rotate(-45deg) translate3d(6px, -6px, 0);
}
.theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(1), .theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(3) {
  transform-origin: center;
}

@media (min-width: 720px) {
  .theme-container.no-sidebar .sidebar {
    display: none;
  }
  .theme-container.no-sidebar .page {
    padding-left: 0;
  }
}
@media (max-width: 719px) {
  .sidebar {
    top: 0;
    transform: translateX(-100%);
  }
  .page {
    padding-left: 0;
  }
  .theme-container.sidebar-open .sidebar {
    transform: translateX(0);
  }
  .theme-container.no-navbar .sidebar {
    padding-top: 0;
  }
}
#sidebar-left {
  position: -webkit-sticky;
  position: sticky;
  top: var(--navbar-height);
}
#sidebar-left .sidebar {
  left: 0;
  border-right: none;
  padding-left: 1.25rem;
}
#sidebar-left a {
  margin: 0;
  padding: 0.5rem 1rem 0.5rem 0;
}
#sidebar-left a.router-link-active, #sidebar-left a:hover {
  color: var(--c-text-accent);
}

#sidebar-right {
  position: -webkit-sticky;
  position: sticky;
  top: var(--navbar-height);
}
#sidebar-right .sidebar {
  left: unset;
  right: 0;
  border-right: none;
}
#sidebar-right a {
  margin: 0;
  padding: 0.5rem 1rem 0.5rem 0;
}
#sidebar-right a.active {
  color: var(--c-text-accent);
}

.sidebar-item {
  cursor: default;
  border-left: none;
  color: var(--c-text);
}
.sidebar-item:focus-visible {
  outline-width: 1px;
  outline-offset: -1px;
}
.sidebar-item.active:not(p.sidebar-heading) {
  font-weight: 600;
  color: var(--c-text-accent);
  border-left: none;
}
.sidebar-item.sidebar-heading {
  transition: color 0.15s ease;
  font-size: 1.1em;
  font-weight: bold;
  padding: 0 0 0.35rem 0;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
}
.sidebar-item.sidebar-heading.collapsible {
  cursor: pointer;
}
.sidebar-item.sidebar-heading.collapsible + .sidebar-item-children {
  margin-bottom: 0.75rem;
}
.sidebar-item.sidebar-heading .arrow {
  position: relative;
  top: -0.12em;
  left: 0.5em;
}
.sidebar-item:not(.sidebar-heading) {
  font-size: 1em;
  font-weight: 400;
  display: inline-block;
  margin: 0;
  padding: 0 0 0.35rem 0;
  line-height: 1.4;
  width: 100%;
  box-sizing: border-box;
}
.sidebar-item:not(.sidebar-heading) + .sidebar-item-children {
  padding-left: 1rem;
  font-size: 0.95em;
}
.sidebar-item-children .sidebar-item-children .sidebar-item:not(.sidebar-heading) {
  padding: 0.25rem 1rem 0.25rem 1.75rem;
}
.sidebar-item-children .sidebar-item-children .sidebar-item:not(.sidebar-heading).active {
  font-weight: 500;
  border-left: none;
}
a.sidebar-heading + .sidebar-item-children .sidebar-item:not(.sidebar-heading).active {
  border-left: none;
}

a.sidebar-item {
  cursor: pointer;
}
a.sidebar-item:hover {
  color: var(--c-text-accent);
}

.table-of-contents .badge {
  vertical-align: middle;
}

/**
 * dropdown
 */
.dropdown-enter-from,
.dropdown-leave-to {
  height: 0 !important;
}

/**
 * fade-slide-y
 */
.fade-slide-y-enter-active {
  transition: all 0.2s ease;
}

.fade-slide-y-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-slide-y-enter-from,
.fade-slide-y-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

/* Custom component styles */
.c-arrows-list {
  margin-bottom: 2rem;
}
.c-arrows-list ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.c-arrows-list ul li {
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.5rem;
  font-size: 28px;
  font-weight: 600;
}
.c-arrows-list ul .icon {
  margin-right: 1rem;
}
.c-arrows-list ul .text {
  line-height: 1;
}

.c-card {
  height: 100%;
  border: 1px solid #f5f5f5;
}
.c-card .img-wrap {
  background: rgba(216, 216, 216, 0.3);
  height: 0;
  padding-bottom: 76%;
  border-radius: 12px 12px 0 0;
}
.c-card .img-wrap img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.c-card .card-body {
  padding: 1rem 1.5rem 1.5rem 1.5rem;
}
.c-card .h4 {
  padding: 0;
  margin-bottom: 1.5rem;
}
.c-card a {
  font-weight: 700;
  display: flex;
  align-items: center;
}
.c-card .icon {
  display: flex;
}
.c-card .icon svg {
  width: 12px;
  height: auto;
}
.c-card .icon img {
  height: 100%;
  width: auto;
  -o-object-fit: contain;
     object-fit: contain;
}
.c-card--compact {
  border: 1px solid #c4c4c4;
}
.c-card--compact .card-body {
  padding: 1.5rem;
}

.c-cards {
  margin-bottom: 4rem;
}

.c-color-tile .card-img-top {
  height: 0;
  padding-bottom: 100%;
  border-radius: 12px 12px 0 0;
}
.c-color-tile .card-body {
  padding: 1rem 1.5rem 1.5rem 1.5rem;
  color: #424242;
}
.c-color-tile .title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
}
.c-color-tile .hex {
  color: #83858D;
}

.c-color-tiles {
  margin-bottom: 4rem;
}

.c-columns {
  margin-bottom: 4rem;
}

.btn-primary.hover {
  background-color: #244D6B;
  border-color: #244D6B;
}
.btn-primary.focus {
  border-color: #244D6B;
  box-shadow: 0 0 0 0.25rem #649DC7;
}

.btn-outline-primary.hover {
  border-color: #244D6B;
}
.btn-outline-primary.focus {
  border-color: #244D6B;
  box-shadow: 0 0 0 0.25rem #649DC7;
}

a.link-secondary {
  color: black;
}
a.link-secondary svg {
  opacity: 0;
}
a.link-secondary:hover, a.link-secondary.hover {
  color: black;
}
a.link-secondary:hover svg, a.link-secondary.hover svg {
  opacity: 100%;
}
a.link-secondary:hover svg path, a.link-secondary.hover svg path {
  fill: black;
}
a.link-secondary:focus, a.link-secondary.focus {
  color: black;
}
a.link-secondary:focus svg, a.link-secondary.focus svg {
  opacity: 100%;
}
a.link-secondary:focus svg path, a.link-secondary.focus svg path {
  fill: black;
}
a.hover {
  color: #703561;
  text-decoration: underline;
  text-underline-offset: 0.125rem;
}
a.focus {
  text-decoration: underline;
  text-underline-offset: 0.125rem;
  color: #703561;
}
a .disabled {
  color: #a44d8e;
  pointer-events: none;
  opacity: 0.5;
  text-decoration: none;
}

.c-image-map .preview-container {
  border: 1px solid #000;
  border-radius: 12px;
}
.c-image-map .top-container {
  background-color: #eeeeee;
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
  border-radius: 12px 12px 0 0;
}
.c-image-map .top-container .icon {
  cursor: pointer;
}
.c-image-map .top-container .icon svg {
  width: 25px;
  height: 25px;
}
.c-image-map .middle-container {
  padding: 2rem;
}
.c-image-map .image-container {
  position: relative;
}
.c-image-map .bottom-container {
  display: flex;
  justify-content: flex-end;
  padding: 0 2rem 2rem 2rem;
}
.c-image-map .bottom-container .toggle {
  cursor: pointer;
}
.c-image-map .circle-point {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: #a44d8e;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
}
.c-image-map .image-point {
  position: absolute;
  cursor: pointer;
  z-index: 10;
}
.c-image-map .image-point a {
  color: #fff;
  text-align: center;
  font-weight: 700;
}
.c-image-map .image-point a:hover {
  text-decoration: none;
}
.c-image-map ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.c-image-map .title {
  display: flex;
  align-items: center;
  padding: 1rem 0;
  cursor: pointer;
}
.c-image-map .title .circle-point {
  margin-right: 8px;
}
.c-image-map .title .h5 {
  margin: 0;
  padding: 0;
  flex-grow: 1;
}
.c-image-map .code-container {
  padding: 1rem 2rem;
}
.c-image-map .full-view-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #fff;
}

.c-page-header {
  background-color: var(--doi-dark-blue);
  color: var(--c-text-navbar);
  display: flex;
  flex-direction: column;
  width: 100%;
}
.c-page-header .content {
  padding: 15rem var(--navbar-padding-h) 2.5rem var(--navbar-padding-h);
}
.c-page-header h1, .c-page-header .h1 {
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  font-weight: var(--font-weight-semi-bold);
  font-size: 3.75rem;
}
.c-page-header .lead-text {
  font-size: var(--font-size-lead-text);
  margin-bottom: 0;
  max-width: 1200px;
}

.c-page-footer {
  background-color: var(--doi-cyan);
  color: #323232;
}
.c-page-footer .row {
  justify-content: center;
}
.c-page-footer .footer-wrap {
  padding: 2rem 0;
}
.c-page-footer h2, .c-page-footer .h2 {
  font-size: 36px;
  border-bottom: none;
  margin-bottom: 1.5rem;
  font-weight: var(--font-weight-semi-bold);
}
.c-page-footer .lead-text {
  font-size: var(--font-size-lead-text);
  margin-bottom: 2rem;
}
.c-page-footer a {
  color: var(--c-text-accent);
  text-decoration: underline;
}
.c-page-footer .btn-arrow svg {
  height: 17px;
}

.c-two-cards {
  margin-bottom: 4rem;
}
.c-two-cards .card-content {
  padding: 1rem;
  border-radius: 6px;
}
.c-two-cards .row .card-wrap:first-child .card-content {
  background-color: rgb(234, 245, 245);
}
.c-two-cards .row .card-wrap:last-child .card-content {
  background-color: rgba(255, 224, 227, 0.6);
}

.typography-row {
  width: 100%;
}
.typography-row .row-container {
  width: 50%;
}
.typography-row .property-content {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.doi-content {
  /*!
   * Bootstrap v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors
   * Copyright 2011-2021 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
  @import url("https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap");
  /* CUSTOM DOI VARIABLES */
  /* Primary Colours */
  /* Gray Colours */
  /* Brand Colours */
  /* Colors */
  /* Borders */
  /* Font sizes */
  /* Font weights */
  /* Font Family */
  /* Button Padding */
  /* Link */
  /* rtl:raw:
  [type="tel"],
  [type="url"],
  [type="email"],
  [type="number"] {
    direction: ltr;
  }
  */
}
.doi-content .bg-promo {
  background-color: #7ac4c3;
}
.doi-content .bg-primary {
  background-color: #285576;
}
.doi-content .bg-secondary {
  background-color: #3e837c;
}
.doi-content .bg-action {
  background-color: #a44d8e;
}
.doi-content .bg-dark-blue {
  background-color: #0B253B;
}
.doi-content .bg-gray-100 {
  background-color: #f5f5f5;
}
.doi-content .bg-gray-200 {
  background-color: #eeeeee;
}
.doi-content .bg-gray-300 {
  background-color: #e0e0e0;
}
.doi-content .bg-gray-400 {
  background-color: #bdbdbd;
}
.doi-content .bg-gray-500 {
  background-color: #9e9e9e;
}
.doi-content .bg-gray-600 {
  background-color: #757575;
}
.doi-content .bg-gray-700 {
  background-color: #616161;
}
.doi-content .bg-gray-800 {
  background-color: #424242;
}
.doi-content .bg-gray-900 {
  background-color: #212121;
}
.doi-content .bg-anti-dumping-commission {
  background-color: #202A4C;
}
.doi-content .bg-anti-dumping-review-panel {
  background-color: #202A4C;
}
.doi-content .bg-aus-industry {
  background-color: #254F90;
}
.doi-content .bg-aus-industry-participation-authority {
  background-color: #005677;
}
.doi-content .bg-aus-ska-office {
  background-color: #243E86;
}
.doi-content .bg-aus-space-agency {
  background-color: #004976;
}
.doi-content .bg-aus-space-discovery-centre {
  background-color: #004976;
}
.doi-content .bg-critical-minerals-office {
  background-color: #A62B23;
}
.doi-content .bg-industry-growth-centres {
  background-color: #005677;
}
.doi-content .bg-industry-innovation-science {
  background-color: #6334D8;
}
.doi-content .bg-inspiring-aus {
  background-color: #95CDE8;
}
.doi-content .bg-national-measurement-institute {
  background-color: #A6192E;
}
.doi-content .bg-office-chief-economist {
  background-color: #005DAF;
}
.doi-content .bg-office-special-adviser {
  background-color: #005677;
}
.doi-content .bg-pm-prize {
  background-color: #7E2923;
}
.doi-content :root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #757575;
  --bs-gray-dark: #424242;
  --bs-gray-100: #f5f5f5;
  --bs-gray-200: #eeeeee;
  --bs-gray-300: #e0e0e0;
  --bs-gray-400: #bdbdbd;
  --bs-gray-500: #9e9e9e;
  --bs-gray-600: #757575;
  --bs-gray-700: #616161;
  --bs-gray-800: #424242;
  --bs-gray-900: #212121;
  --bs-primary: #285576;
  --bs-secondary: #3e837c;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f5f5f5;
  --bs-dark: #212121;
  --bs-primary-rgb: 40, 85, 118;
  --bs-secondary-rgb: 62, 131, 124;
  --bs-success-rgb: 25, 135, 84;
  --bs-info-rgb: 13, 202, 240;
  --bs-warning-rgb: 255, 193, 7;
  --bs-danger-rgb: 220, 53, 69;
  --bs-light-rgb: 245, 245, 245;
  --bs-dark-rgb: 33, 33, 33;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-body-color-rgb: 33, 33, 33;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1.125rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #212121;
  --bs-body-bg: #fff;
}
.doi-content *,
.doi-content *::before,
.doi-content *::after {
  box-sizing: border-box;
}
@media (prefers-reduced-motion: no-preference) {
  .doi-content :root {
    scroll-behavior: smooth;
  }
}
.doi-content body {
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.doi-content hr {
  margin: 1rem 0;
  color: inherit;
  background-color: currentColor;
  border: 0;
  opacity: 0.25;
}
.doi-content hr:not([size]) {
  height: 1px;
}
.doi-content h6, .doi-content .h6, .doi-content h5, .doi-content .h5, .doi-content h4, .doi-content .h4, .doi-content h3, .doi-content .h3, .doi-content h2, .doi-content .h2, .doi-content h1, .doi-content .h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
.doi-content h1, .doi-content .h1 {
  font-size: calc(1.4999625rem + 2.99955vw);
}
@media (min-width: 1200px) {
  .doi-content h1, .doi-content .h1 {
    font-size: 3.749625rem;
  }
}
.doi-content h2, .doi-content .h2 {
  font-size: calc(1.35rem + 1.2vw);
}
@media (min-width: 1200px) {
  .doi-content h2, .doi-content .h2 {
    font-size: 2.25rem;
  }
}
.doi-content h3, .doi-content .h3 {
  font-size: calc(1.3125375rem + 0.75045vw);
}
@media (min-width: 1200px) {
  .doi-content h3, .doi-content .h3 {
    font-size: 1.875375rem;
  }
}
.doi-content h4, .doi-content .h4 {
  font-size: calc(1.2749625rem + 0.29955vw);
}
@media (min-width: 1200px) {
  .doi-content h4, .doi-content .h4 {
    font-size: 1.499625rem;
  }
}
.doi-content h5, .doi-content .h5 {
  font-size: calc(1.2562875rem + 0.07545vw);
}
@media (min-width: 1200px) {
  .doi-content h5, .doi-content .h5 {
    font-size: 1.312875rem;
  }
}
.doi-content h6, .doi-content .h6 {
  font-size: 1.125rem;
}
.doi-content p {
  margin-top: 0;
  margin-bottom: 1rem;
}
.doi-content abbr[title],
.doi-content abbr[data-bs-original-title] {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
  cursor: help;
  -webkit-text-decoration-skip-ink: none;
          text-decoration-skip-ink: none;
}
.doi-content address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}
.doi-content ol,
.doi-content ul {
  padding-left: 2rem;
}
.doi-content ol,
.doi-content ul,
.doi-content dl {
  margin-top: 0;
  margin-bottom: 1rem;
}
.doi-content ol ol,
.doi-content ul ul,
.doi-content ol ul,
.doi-content ul ol {
  margin-bottom: 0;
}
.doi-content dt {
  font-weight: 700;
}
.doi-content dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}
.doi-content blockquote {
  margin: 0 0 1rem;
}
.doi-content b,
.doi-content strong {
  font-weight: bolder;
}
.doi-content small, .doi-content .small {
  font-size: 0.875em;
}
.doi-content mark, .doi-content .mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}
.doi-content sub,
.doi-content sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}
.doi-content sub {
  bottom: -0.25em;
}
.doi-content sup {
  top: -0.5em;
}
.doi-content a {
  color: #a44d8e;
  text-decoration: underline;
}
.doi-content a:hover {
  color: #703561;
  text-decoration: underline;
}
.doi-content a:not([href]):not([class]), .doi-content a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}
.doi-content pre,
.doi-content code,
.doi-content kbd,
.doi-content samp {
  font-family: var(--bs-font-monospace);
  font-size: 1em;
  direction: ltr /* rtl:ignore */;
  unicode-bidi: bidi-override;
}
.doi-content pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
}
.doi-content pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}
.doi-content code {
  font-size: 0.875em;
  color: #d63384;
  word-wrap: break-word;
}
a > .doi-content code {
  color: inherit;
}
.doi-content kbd {
  padding: 0.2rem 0.4rem;
  font-size: 0.875em;
  color: #fff;
  background-color: #212121;
  border-radius: 0.2rem;
}
.doi-content kbd kbd {
  padding: 0;
  font-size: 1em;
  font-weight: 700;
}
.doi-content figure {
  margin: 0 0 1rem;
}
.doi-content img,
.doi-content svg {
  vertical-align: middle;
}
.doi-content table {
  caption-side: bottom;
  border-collapse: collapse;
}
.doi-content caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #757575;
  text-align: left;
}
.doi-content th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}
.doi-content thead,
.doi-content tbody,
.doi-content tfoot,
.doi-content tr,
.doi-content td,
.doi-content th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}
.doi-content label {
  display: inline-block;
}
.doi-content button {
  border-radius: 0;
}
.doi-content button:focus:not(:focus-visible) {
  outline: 0;
}
.doi-content input,
.doi-content button,
.doi-content select,
.doi-content optgroup,
.doi-content textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
.doi-content button,
.doi-content select {
  text-transform: none;
}
.doi-content [role=button] {
  cursor: pointer;
}
.doi-content select {
  word-wrap: normal;
}
.doi-content select:disabled {
  opacity: 1;
}
.doi-content [list]::-webkit-calendar-picker-indicator {
  display: none;
}
.doi-content button,
.doi-content [type=button],
.doi-content [type=reset],
.doi-content [type=submit] {
  -webkit-appearance: button;
}
.doi-content button:not(:disabled),
.doi-content [type=button]:not(:disabled),
.doi-content [type=reset]:not(:disabled),
.doi-content [type=submit]:not(:disabled) {
  cursor: pointer;
}
.doi-content ::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
.doi-content textarea {
  resize: vertical;
}
.doi-content fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
.doi-content legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  .doi-content legend {
    font-size: 1.5rem;
  }
}
.doi-content legend + * {
  clear: left;
}
.doi-content ::-webkit-datetime-edit-fields-wrapper,
.doi-content ::-webkit-datetime-edit-text,
.doi-content ::-webkit-datetime-edit-minute,
.doi-content ::-webkit-datetime-edit-hour-field,
.doi-content ::-webkit-datetime-edit-day-field,
.doi-content ::-webkit-datetime-edit-month-field,
.doi-content ::-webkit-datetime-edit-year-field {
  padding: 0;
}
.doi-content ::-webkit-inner-spin-button {
  height: auto;
}
.doi-content [type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}
.doi-content ::-webkit-search-decoration {
  -webkit-appearance: none;
}
.doi-content ::-webkit-color-swatch-wrapper {
  padding: 0;
}
.doi-content ::-webkit-file-upload-button {
  font: inherit;
}
.doi-content ::file-selector-button {
  font: inherit;
}
.doi-content ::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}
.doi-content output {
  display: inline-block;
}
.doi-content iframe {
  border: 0;
}
.doi-content summary {
  display: list-item;
  cursor: pointer;
}
.doi-content progress {
  vertical-align: baseline;
}
.doi-content [hidden] {
  display: none !important;
}
.doi-content .lead {
  font-size: calc(1.265625rem + 0.1875vw);
  font-weight: 300;
}
@media (min-width: 1200px) {
  .doi-content .lead {
    font-size: 1.40625rem;
  }
}
.doi-content .display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .doi-content .display-1 {
    font-size: 5rem;
  }
}
.doi-content .display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .doi-content .display-2 {
    font-size: 4.5rem;
  }
}
.doi-content .display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .doi-content .display-3 {
    font-size: 4rem;
  }
}
.doi-content .display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .doi-content .display-4 {
    font-size: 3.5rem;
  }
}
.doi-content .display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .doi-content .display-5 {
    font-size: 3rem;
  }
}
.doi-content .display-6 {
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .doi-content .display-6 {
    font-size: 2.5rem;
  }
}
.doi-content .list-unstyled {
  padding-left: 0;
  list-style: none;
}
.doi-content .list-inline {
  padding-left: 0;
  list-style: none;
}
.doi-content .list-inline-item {
  display: inline-block;
}
.doi-content .list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}
.doi-content .initialism {
  font-size: 0.875em;
  text-transform: uppercase;
}
.doi-content .blockquote {
  margin-bottom: 1rem;
  font-size: calc(1.265625rem + 0.1875vw);
}
@media (min-width: 1200px) {
  .doi-content .blockquote {
    font-size: 1.40625rem;
  }
}
.doi-content .blockquote > :last-child {
  margin-bottom: 0;
}
.doi-content .blockquote-footer {
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 0.875em;
  color: #757575;
}
.doi-content .blockquote-footer::before {
  content: "\u2014\xA0";
}
.doi-content .img-fluid {
  max-width: 100%;
  height: auto;
}
.doi-content .img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 0.1875rem;
  max-width: 100%;
  height: auto;
}
.doi-content .figure {
  display: inline-block;
}
.doi-content .figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}
.doi-content .figure-caption {
  font-size: 0.875em;
  color: #757575;
}
.doi-content .container,
.doi-content .container-fluid,
.doi-content .container-xxl,
.doi-content .container-xl,
.doi-content .container-lg,
.doi-content .container-md,
.doi-content .container-sm {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .doi-content .container-sm, .doi-content .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .doi-content .container-md, .doi-content .container-sm, .doi-content .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .doi-content .container-lg, .doi-content .container-md, .doi-content .container-sm, .doi-content .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .doi-content .container-xl, .doi-content .container-lg, .doi-content .container-md, .doi-content .container-sm, .doi-content .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .doi-content .container-xxl, .doi-content .container-xl, .doi-content .container-lg, .doi-content .container-md, .doi-content .container-sm, .doi-content .container {
    max-width: 1320px;
  }
}
.doi-content .row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.doi-content .row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}
.doi-content .col {
  flex: 1 0 0%;
}
.doi-content .row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}
.doi-content .row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}
.doi-content .row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}
.doi-content .row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}
.doi-content .row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}
.doi-content .row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}
.doi-content .row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}
.doi-content .col-auto {
  flex: 0 0 auto;
  width: auto;
}
.doi-content .col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}
.doi-content .col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}
.doi-content .col-3 {
  flex: 0 0 auto;
  width: 25%;
}
.doi-content .col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}
.doi-content .col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}
.doi-content .col-6 {
  flex: 0 0 auto;
  width: 50%;
}
.doi-content .col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}
.doi-content .col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}
.doi-content .col-9 {
  flex: 0 0 auto;
  width: 75%;
}
.doi-content .col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}
.doi-content .col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}
.doi-content .col-12 {
  flex: 0 0 auto;
  width: 100%;
}
.doi-content .offset-1 {
  margin-left: 8.33333333%;
}
.doi-content .offset-2 {
  margin-left: 16.66666667%;
}
.doi-content .offset-3 {
  margin-left: 25%;
}
.doi-content .offset-4 {
  margin-left: 33.33333333%;
}
.doi-content .offset-5 {
  margin-left: 41.66666667%;
}
.doi-content .offset-6 {
  margin-left: 50%;
}
.doi-content .offset-7 {
  margin-left: 58.33333333%;
}
.doi-content .offset-8 {
  margin-left: 66.66666667%;
}
.doi-content .offset-9 {
  margin-left: 75%;
}
.doi-content .offset-10 {
  margin-left: 83.33333333%;
}
.doi-content .offset-11 {
  margin-left: 91.66666667%;
}
.doi-content .g-0,
.doi-content .gx-0 {
  --bs-gutter-x: 0;
}
.doi-content .g-0,
.doi-content .gy-0 {
  --bs-gutter-y: 0;
}
.doi-content .g-1,
.doi-content .gx-1 {
  --bs-gutter-x: 0.25rem;
}
.doi-content .g-1,
.doi-content .gy-1 {
  --bs-gutter-y: 0.25rem;
}
.doi-content .g-2,
.doi-content .gx-2 {
  --bs-gutter-x: 0.5rem;
}
.doi-content .g-2,
.doi-content .gy-2 {
  --bs-gutter-y: 0.5rem;
}
.doi-content .g-3,
.doi-content .gx-3 {
  --bs-gutter-x: 1rem;
}
.doi-content .g-3,
.doi-content .gy-3 {
  --bs-gutter-y: 1rem;
}
.doi-content .g-4,
.doi-content .gx-4 {
  --bs-gutter-x: 1.5rem;
}
.doi-content .g-4,
.doi-content .gy-4 {
  --bs-gutter-y: 1.5rem;
}
.doi-content .g-5,
.doi-content .gx-5 {
  --bs-gutter-x: 3rem;
}
.doi-content .g-5,
.doi-content .gy-5 {
  --bs-gutter-y: 3rem;
}
@media (min-width: 576px) {
  .doi-content .col-sm {
    flex: 1 0 0%;
  }
  .doi-content .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .doi-content .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .doi-content .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .doi-content .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .doi-content .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .doi-content .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .doi-content .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .doi-content .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .doi-content .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .doi-content .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .doi-content .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .doi-content .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .doi-content .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .doi-content .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .doi-content .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .doi-content .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .doi-content .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .doi-content .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .doi-content .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .doi-content .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .doi-content .offset-sm-0 {
    margin-left: 0;
  }
  .doi-content .offset-sm-1 {
    margin-left: 8.33333333%;
  }
  .doi-content .offset-sm-2 {
    margin-left: 16.66666667%;
  }
  .doi-content .offset-sm-3 {
    margin-left: 25%;
  }
  .doi-content .offset-sm-4 {
    margin-left: 33.33333333%;
  }
  .doi-content .offset-sm-5 {
    margin-left: 41.66666667%;
  }
  .doi-content .offset-sm-6 {
    margin-left: 50%;
  }
  .doi-content .offset-sm-7 {
    margin-left: 58.33333333%;
  }
  .doi-content .offset-sm-8 {
    margin-left: 66.66666667%;
  }
  .doi-content .offset-sm-9 {
    margin-left: 75%;
  }
  .doi-content .offset-sm-10 {
    margin-left: 83.33333333%;
  }
  .doi-content .offset-sm-11 {
    margin-left: 91.66666667%;
  }
  .doi-content .g-sm-0,
.doi-content .gx-sm-0 {
    --bs-gutter-x: 0;
  }
  .doi-content .g-sm-0,
.doi-content .gy-sm-0 {
    --bs-gutter-y: 0;
  }
  .doi-content .g-sm-1,
.doi-content .gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }
  .doi-content .g-sm-1,
.doi-content .gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }
  .doi-content .g-sm-2,
.doi-content .gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }
  .doi-content .g-sm-2,
.doi-content .gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }
  .doi-content .g-sm-3,
.doi-content .gx-sm-3 {
    --bs-gutter-x: 1rem;
  }
  .doi-content .g-sm-3,
.doi-content .gy-sm-3 {
    --bs-gutter-y: 1rem;
  }
  .doi-content .g-sm-4,
.doi-content .gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }
  .doi-content .g-sm-4,
.doi-content .gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }
  .doi-content .g-sm-5,
.doi-content .gx-sm-5 {
    --bs-gutter-x: 3rem;
  }
  .doi-content .g-sm-5,
.doi-content .gy-sm-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .doi-content .col-md {
    flex: 1 0 0%;
  }
  .doi-content .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .doi-content .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .doi-content .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .doi-content .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .doi-content .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .doi-content .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .doi-content .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .doi-content .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .doi-content .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .doi-content .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .doi-content .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .doi-content .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .doi-content .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .doi-content .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .doi-content .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .doi-content .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .doi-content .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .doi-content .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .doi-content .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .doi-content .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .doi-content .offset-md-0 {
    margin-left: 0;
  }
  .doi-content .offset-md-1 {
    margin-left: 8.33333333%;
  }
  .doi-content .offset-md-2 {
    margin-left: 16.66666667%;
  }
  .doi-content .offset-md-3 {
    margin-left: 25%;
  }
  .doi-content .offset-md-4 {
    margin-left: 33.33333333%;
  }
  .doi-content .offset-md-5 {
    margin-left: 41.66666667%;
  }
  .doi-content .offset-md-6 {
    margin-left: 50%;
  }
  .doi-content .offset-md-7 {
    margin-left: 58.33333333%;
  }
  .doi-content .offset-md-8 {
    margin-left: 66.66666667%;
  }
  .doi-content .offset-md-9 {
    margin-left: 75%;
  }
  .doi-content .offset-md-10 {
    margin-left: 83.33333333%;
  }
  .doi-content .offset-md-11 {
    margin-left: 91.66666667%;
  }
  .doi-content .g-md-0,
.doi-content .gx-md-0 {
    --bs-gutter-x: 0;
  }
  .doi-content .g-md-0,
.doi-content .gy-md-0 {
    --bs-gutter-y: 0;
  }
  .doi-content .g-md-1,
.doi-content .gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }
  .doi-content .g-md-1,
.doi-content .gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }
  .doi-content .g-md-2,
.doi-content .gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }
  .doi-content .g-md-2,
.doi-content .gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }
  .doi-content .g-md-3,
.doi-content .gx-md-3 {
    --bs-gutter-x: 1rem;
  }
  .doi-content .g-md-3,
.doi-content .gy-md-3 {
    --bs-gutter-y: 1rem;
  }
  .doi-content .g-md-4,
.doi-content .gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }
  .doi-content .g-md-4,
.doi-content .gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }
  .doi-content .g-md-5,
.doi-content .gx-md-5 {
    --bs-gutter-x: 3rem;
  }
  .doi-content .g-md-5,
.doi-content .gy-md-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .doi-content .col-lg {
    flex: 1 0 0%;
  }
  .doi-content .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .doi-content .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .doi-content .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .doi-content .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .doi-content .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .doi-content .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .doi-content .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .doi-content .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .doi-content .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .doi-content .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .doi-content .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .doi-content .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .doi-content .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .doi-content .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .doi-content .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .doi-content .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .doi-content .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .doi-content .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .doi-content .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .doi-content .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .doi-content .offset-lg-0 {
    margin-left: 0;
  }
  .doi-content .offset-lg-1 {
    margin-left: 8.33333333%;
  }
  .doi-content .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .doi-content .offset-lg-3 {
    margin-left: 25%;
  }
  .doi-content .offset-lg-4 {
    margin-left: 33.33333333%;
  }
  .doi-content .offset-lg-5 {
    margin-left: 41.66666667%;
  }
  .doi-content .offset-lg-6 {
    margin-left: 50%;
  }
  .doi-content .offset-lg-7 {
    margin-left: 58.33333333%;
  }
  .doi-content .offset-lg-8 {
    margin-left: 66.66666667%;
  }
  .doi-content .offset-lg-9 {
    margin-left: 75%;
  }
  .doi-content .offset-lg-10 {
    margin-left: 83.33333333%;
  }
  .doi-content .offset-lg-11 {
    margin-left: 91.66666667%;
  }
  .doi-content .g-lg-0,
.doi-content .gx-lg-0 {
    --bs-gutter-x: 0;
  }
  .doi-content .g-lg-0,
.doi-content .gy-lg-0 {
    --bs-gutter-y: 0;
  }
  .doi-content .g-lg-1,
.doi-content .gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }
  .doi-content .g-lg-1,
.doi-content .gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }
  .doi-content .g-lg-2,
.doi-content .gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }
  .doi-content .g-lg-2,
.doi-content .gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }
  .doi-content .g-lg-3,
.doi-content .gx-lg-3 {
    --bs-gutter-x: 1rem;
  }
  .doi-content .g-lg-3,
.doi-content .gy-lg-3 {
    --bs-gutter-y: 1rem;
  }
  .doi-content .g-lg-4,
.doi-content .gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }
  .doi-content .g-lg-4,
.doi-content .gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }
  .doi-content .g-lg-5,
.doi-content .gx-lg-5 {
    --bs-gutter-x: 3rem;
  }
  .doi-content .g-lg-5,
.doi-content .gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .doi-content .col-xl {
    flex: 1 0 0%;
  }
  .doi-content .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .doi-content .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .doi-content .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .doi-content .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .doi-content .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .doi-content .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .doi-content .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .doi-content .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .doi-content .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .doi-content .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .doi-content .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .doi-content .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .doi-content .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .doi-content .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .doi-content .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .doi-content .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .doi-content .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .doi-content .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .doi-content .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .doi-content .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .doi-content .offset-xl-0 {
    margin-left: 0;
  }
  .doi-content .offset-xl-1 {
    margin-left: 8.33333333%;
  }
  .doi-content .offset-xl-2 {
    margin-left: 16.66666667%;
  }
  .doi-content .offset-xl-3 {
    margin-left: 25%;
  }
  .doi-content .offset-xl-4 {
    margin-left: 33.33333333%;
  }
  .doi-content .offset-xl-5 {
    margin-left: 41.66666667%;
  }
  .doi-content .offset-xl-6 {
    margin-left: 50%;
  }
  .doi-content .offset-xl-7 {
    margin-left: 58.33333333%;
  }
  .doi-content .offset-xl-8 {
    margin-left: 66.66666667%;
  }
  .doi-content .offset-xl-9 {
    margin-left: 75%;
  }
  .doi-content .offset-xl-10 {
    margin-left: 83.33333333%;
  }
  .doi-content .offset-xl-11 {
    margin-left: 91.66666667%;
  }
  .doi-content .g-xl-0,
.doi-content .gx-xl-0 {
    --bs-gutter-x: 0;
  }
  .doi-content .g-xl-0,
.doi-content .gy-xl-0 {
    --bs-gutter-y: 0;
  }
  .doi-content .g-xl-1,
.doi-content .gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .doi-content .g-xl-1,
.doi-content .gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .doi-content .g-xl-2,
.doi-content .gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .doi-content .g-xl-2,
.doi-content .gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .doi-content .g-xl-3,
.doi-content .gx-xl-3 {
    --bs-gutter-x: 1rem;
  }
  .doi-content .g-xl-3,
.doi-content .gy-xl-3 {
    --bs-gutter-y: 1rem;
  }
  .doi-content .g-xl-4,
.doi-content .gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .doi-content .g-xl-4,
.doi-content .gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .doi-content .g-xl-5,
.doi-content .gx-xl-5 {
    --bs-gutter-x: 3rem;
  }
  .doi-content .g-xl-5,
.doi-content .gy-xl-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .doi-content .col-xxl {
    flex: 1 0 0%;
  }
  .doi-content .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .doi-content .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .doi-content .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .doi-content .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .doi-content .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .doi-content .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .doi-content .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .doi-content .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .doi-content .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .doi-content .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .doi-content .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .doi-content .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .doi-content .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .doi-content .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .doi-content .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .doi-content .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .doi-content .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .doi-content .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .doi-content .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .doi-content .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .doi-content .offset-xxl-0 {
    margin-left: 0;
  }
  .doi-content .offset-xxl-1 {
    margin-left: 8.33333333%;
  }
  .doi-content .offset-xxl-2 {
    margin-left: 16.66666667%;
  }
  .doi-content .offset-xxl-3 {
    margin-left: 25%;
  }
  .doi-content .offset-xxl-4 {
    margin-left: 33.33333333%;
  }
  .doi-content .offset-xxl-5 {
    margin-left: 41.66666667%;
  }
  .doi-content .offset-xxl-6 {
    margin-left: 50%;
  }
  .doi-content .offset-xxl-7 {
    margin-left: 58.33333333%;
  }
  .doi-content .offset-xxl-8 {
    margin-left: 66.66666667%;
  }
  .doi-content .offset-xxl-9 {
    margin-left: 75%;
  }
  .doi-content .offset-xxl-10 {
    margin-left: 83.33333333%;
  }
  .doi-content .offset-xxl-11 {
    margin-left: 91.66666667%;
  }
  .doi-content .g-xxl-0,
.doi-content .gx-xxl-0 {
    --bs-gutter-x: 0;
  }
  .doi-content .g-xxl-0,
.doi-content .gy-xxl-0 {
    --bs-gutter-y: 0;
  }
  .doi-content .g-xxl-1,
.doi-content .gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .doi-content .g-xxl-1,
.doi-content .gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .doi-content .g-xxl-2,
.doi-content .gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .doi-content .g-xxl-2,
.doi-content .gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .doi-content .g-xxl-3,
.doi-content .gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }
  .doi-content .g-xxl-3,
.doi-content .gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }
  .doi-content .g-xxl-4,
.doi-content .gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .doi-content .g-xxl-4,
.doi-content .gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .doi-content .g-xxl-5,
.doi-content .gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }
  .doi-content .g-xxl-5,
.doi-content .gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }
}
.doi-content .table {
  --bs-table-bg: transparent;
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: #212121;
  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --bs-table-active-color: #212121;
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: #212121;
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1rem;
  color: #212121;
  vertical-align: top;
  border-color: #e0e0e0;
}
.doi-content .table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
.doi-content .table > tbody {
  vertical-align: inherit;
}
.doi-content .table > thead {
  vertical-align: bottom;
}
.doi-content .table > :not(:first-child) {
  border-top: 2px solid currentColor;
}
.doi-content .caption-top {
  caption-side: top;
}
.doi-content .table-sm > :not(caption) > * > * {
  padding: 0.25rem 0.25rem;
}
.doi-content .table-bordered > :not(caption) > * {
  border-width: 1px 0;
}
.doi-content .table-bordered > :not(caption) > * > * {
  border-width: 0 1px;
}
.doi-content .table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}
.doi-content .table-borderless > :not(:first-child) {
  border-top-width: 0;
}
.doi-content .table-striped > tbody > tr:nth-of-type(odd) > * {
  --bs-table-accent-bg: var(--bs-table-striped-bg);
  color: var(--bs-table-striped-color);
}
.doi-content .table-active {
  --bs-table-accent-bg: var(--bs-table-active-bg);
  color: var(--bs-table-active-color);
}
.doi-content .table-hover > tbody > tr:hover > * {
  --bs-table-accent-bg: var(--bs-table-hover-bg);
  color: var(--bs-table-hover-color);
}
.doi-content .table-primary {
  --bs-table-bg: #d4dde4;
  --bs-table-striped-bg: #c9d2d9;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bfc7cd;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c4ccd3;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #bfc7cd;
}
.doi-content .table-secondary {
  --bs-table-bg: #d8e6e5;
  --bs-table-striped-bg: #cddbda;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #c2cfce;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c8d5d4;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #c2cfce;
}
.doi-content .table-success {
  --bs-table-bg: #d1e7dd;
  --bs-table-striped-bg: #c7dbd2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bcd0c7;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c1d6cc;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #bcd0c7;
}
.doi-content .table-info {
  --bs-table-bg: #cff4fc;
  --bs-table-striped-bg: #c5e8ef;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #badce3;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfe2e9;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #badce3;
}
.doi-content .table-warning {
  --bs-table-bg: #fff3cd;
  --bs-table-striped-bg: #f2e7c3;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #e6dbb9;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #ece1be;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #e6dbb9;
}
.doi-content .table-danger {
  --bs-table-bg: #f8d7da;
  --bs-table-striped-bg: #eccccf;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfc2c4;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5c7ca;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #dfc2c4;
}
.doi-content .table-light {
  --bs-table-bg: #f5f5f5;
  --bs-table-striped-bg: #e9e9e9;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dddddd;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e3e3e3;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #dddddd;
}
.doi-content .table-dark {
  --bs-table-bg: #212121;
  --bs-table-striped-bg: #2c2c2c;
  --bs-table-striped-color: #fff;
  --bs-table-active-bg: #373737;
  --bs-table-active-color: #fff;
  --bs-table-hover-bg: #323232;
  --bs-table-hover-color: #fff;
  color: #fff;
  border-color: #373737;
}
.doi-content .table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
@media (max-width: 575.98px) {
  .doi-content .table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .doi-content .table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .doi-content .table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1199.98px) {
  .doi-content .table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1399.98px) {
  .doi-content .table-responsive-xxl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.doi-content .form-label {
  margin-bottom: 0.5rem;
}
.doi-content .col-form-label {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}
.doi-content .col-form-label-lg {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: calc(1.265625rem + 0.1875vw);
}
@media (min-width: 1200px) {
  .doi-content .col-form-label-lg {
    font-size: 1.40625rem;
  }
}
.doi-content .col-form-label-sm {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: 0.984375rem;
}
.doi-content .form-text {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #757575;
}
.doi-content .form-control {
  display: block;
  width: 100%;
  padding: 0.5rem 2.1875rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212121;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border-radius: 0.1875rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .doi-content .form-control {
    transition: none;
  }
}
.doi-content .form-control[type=file] {
  overflow: hidden;
}
.doi-content .form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.doi-content .form-control:focus {
  color: #212121;
  background-color: #fff;
  border-color: #94aabb;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
}
.doi-content .form-control::-webkit-date-and-time-value {
  height: 1.5em;
}
.doi-content .form-control::-moz-placeholder {
  color: #757575;
  opacity: 1;
}
.doi-content .form-control:-ms-input-placeholder {
  color: #757575;
  opacity: 1;
}
.doi-content .form-control::placeholder {
  color: #757575;
  opacity: 1;
}
.doi-content .form-control:disabled, .doi-content .form-control[readonly] {
  background-color: #eeeeee;
  opacity: 1;
}
.doi-content .form-control::-webkit-file-upload-button {
  padding: 0.5rem 2.1875rem;
  margin: -0.5rem -2.1875rem;
  -webkit-margin-end: 2.1875rem;
          margin-inline-end: 2.1875rem;
  color: #212121;
  background-color: #eeeeee;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.doi-content .form-control::file-selector-button {
  padding: 0.5rem 2.1875rem;
  margin: -0.5rem -2.1875rem;
  -webkit-margin-end: 2.1875rem;
          margin-inline-end: 2.1875rem;
  color: #212121;
  background-color: #eeeeee;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .doi-content .form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }
  .doi-content .form-control::file-selector-button {
    transition: none;
  }
}
.doi-content .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #e2e2e2;
}
.doi-content .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: #e2e2e2;
}
.doi-content .form-control::-webkit-file-upload-button {
  padding: 0.5rem 2.1875rem;
  margin: -0.5rem -2.1875rem;
  -webkit-margin-end: 2.1875rem;
          margin-inline-end: 2.1875rem;
  color: #212121;
  background-color: #eeeeee;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .doi-content .form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }
}
.doi-content .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #e2e2e2;
}
.doi-content .form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  margin-bottom: 0;
  line-height: 1.5;
  color: #212121;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}
.doi-content .form-control-plaintext.form-control-sm, .doi-content .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}
.doi-content .form-control-sm {
  min-height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1.8125rem;
  font-size: 0.984375rem;
  border-radius: 0.2rem;
}
.doi-content .form-control-sm::-webkit-file-upload-button {
  padding: 0.5rem 1.8125rem;
  margin: -0.5rem -1.8125rem;
  -webkit-margin-end: 1.8125rem;
          margin-inline-end: 1.8125rem;
}
.doi-content .form-control-sm::file-selector-button {
  padding: 0.5rem 1.8125rem;
  margin: -0.5rem -1.8125rem;
  -webkit-margin-end: 1.8125rem;
          margin-inline-end: 1.8125rem;
}
.doi-content .form-control-sm::-webkit-file-upload-button {
  padding: 0.5rem 1.8125rem;
  margin: -0.5rem -1.8125rem;
  -webkit-margin-end: 1.8125rem;
          margin-inline-end: 1.8125rem;
}
.doi-content .form-control-lg {
  min-height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: calc(1.265625rem + 0.1875vw);
  border-radius: 0.3rem;
}
@media (min-width: 1200px) {
  .doi-content .form-control-lg {
    font-size: 1.40625rem;
  }
}
.doi-content .form-control-lg::-webkit-file-upload-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}
.doi-content .form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}
.doi-content .form-control-lg::-webkit-file-upload-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}
.doi-content textarea.form-control {
  min-height: calc(1.5em + 1rem + 2px);
}
.doi-content textarea.form-control-sm {
  min-height: calc(1.5em + 1rem + 2px);
}
.doi-content textarea.form-control-lg {
  min-height: calc(1.5em + 1rem + 2px);
}
.doi-content .form-control-color {
  width: 3rem;
  height: auto;
  padding: 0.5rem;
}
.doi-content .form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.doi-content .form-control-color::-moz-color-swatch {
  height: 1.5em;
  border-radius: 0.1875rem;
}
.doi-content .form-control-color::-webkit-color-swatch {
  height: 1.5em;
  border-radius: 0.1875rem;
}
.doi-content .form-select {
  display: block;
  width: 100%;
  padding: 0.5rem 6.5625rem 0.5rem 2.1875rem;
  -moz-padding-start: calc(2.1875rem - 3px);
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212121;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23424242' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 2.1875rem center;
  background-size: 16px 12px;
  border: 1px solid #bdbdbd;
  border-radius: 0.1875rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .doi-content .form-select {
    transition: none;
  }
}
.doi-content .form-select:focus {
  border-color: #94aabb;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
}
.doi-content .form-select[multiple], .doi-content .form-select[size]:not([size="1"]) {
  padding-right: 2.1875rem;
  background-image: none;
}
.doi-content .form-select:disabled {
  background-color: #eeeeee;
}
.doi-content .form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #212121;
}
.doi-content .form-select-sm {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.8125rem;
  font-size: 0.984375rem;
  border-radius: 0.2rem;
}
.doi-content .form-select-lg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: calc(1.265625rem + 0.1875vw);
  border-radius: 0.3rem;
}
@media (min-width: 1200px) {
  .doi-content .form-select-lg {
    font-size: 1.40625rem;
  }
}
.doi-content .form-check {
  display: block;
  min-height: 1.6875rem;
  padding-left: 1.5em;
  margin-bottom: 0.125rem;
}
.doi-content .form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}
.doi-content .form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  -webkit-print-color-adjust: exact;
          color-adjust: exact;
}
.doi-content .form-check-input[type=checkbox] {
  border-radius: 0.25em;
}
.doi-content .form-check-input[type=radio] {
  border-radius: 50%;
}
.doi-content .form-check-input:active {
  filter: brightness(90%);
}
.doi-content .form-check-input:focus {
  border-color: #94aabb;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
}
.doi-content .form-check-input:checked {
  background-color: #285576;
  border-color: #285576;
}
.doi-content .form-check-input:checked[type=checkbox] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}
.doi-content .form-check-input:checked[type=radio] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
.doi-content .form-check-input[type=checkbox]:indeterminate {
  background-color: #285576;
  border-color: #285576;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.doi-content .form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}
.doi-content .form-check-input[disabled] ~ .form-check-label, .doi-content .form-check-input:disabled ~ .form-check-label {
  opacity: 0.5;
}
.doi-content .form-switch {
  padding-left: 2.5em;
}
.doi-content .form-switch .form-check-input {
  width: 2em;
  margin-left: -2.5em;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  background-position: left center;
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .doi-content .form-switch .form-check-input {
    transition: none;
  }
}
.doi-content .form-switch .form-check-input:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2394aabb'/%3e%3c/svg%3e");
}
.doi-content .form-switch .form-check-input:checked {
  background-position: right center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.doi-content .form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}
.doi-content .btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.doi-content .btn-check[disabled] + .btn, .doi-content .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}
.doi-content .form-range {
  width: 100%;
  height: 1.5rem;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.doi-content .form-range:focus {
  outline: 0;
}
.doi-content .form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
}
.doi-content .form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
}
.doi-content .form-range::-moz-focus-outer {
  border: 0;
}
.doi-content .form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #285576;
  border: 0;
  border-radius: 1rem;
  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
          appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .doi-content .form-range::-webkit-slider-thumb {
    -webkit-transition: none;
    transition: none;
  }
}
.doi-content .form-range::-webkit-slider-thumb:active {
  background-color: #bfccd6;
}
.doi-content .form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #e0e0e0;
  border-color: transparent;
  border-radius: 1rem;
}
.doi-content .form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #285576;
  border: 0;
  border-radius: 1rem;
  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -moz-appearance: none;
       appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .doi-content .form-range::-moz-range-thumb {
    -moz-transition: none;
    transition: none;
  }
}
.doi-content .form-range::-moz-range-thumb:active {
  background-color: #bfccd6;
}
.doi-content .form-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #e0e0e0;
  border-color: transparent;
  border-radius: 1rem;
}
.doi-content .form-range:disabled {
  pointer-events: none;
}
.doi-content .form-range:disabled::-webkit-slider-thumb {
  background-color: #9e9e9e;
}
.doi-content .form-range:disabled::-moz-range-thumb {
  background-color: #9e9e9e;
}
.doi-content .form-floating {
  position: relative;
}
.doi-content .form-floating > .form-control,
.doi-content .form-floating > .form-select {
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}
.doi-content .form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem 2.1875rem;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .doi-content .form-floating > label {
    transition: none;
  }
}
.doi-content .form-floating > .form-control {
  padding: 1rem 2.1875rem;
}
.doi-content .form-floating > .form-control::-moz-placeholder {
  color: transparent;
}
.doi-content .form-floating > .form-control:-ms-input-placeholder {
  color: transparent;
}
.doi-content .form-floating > .form-control::placeholder {
  color: transparent;
}
.doi-content .form-floating > .form-control:not(:-moz-placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.doi-content .form-floating > .form-control:not(:-ms-input-placeholder) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.doi-content .form-floating > .form-control:focus, .doi-content .form-floating > .form-control:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.doi-content .form-floating > .form-control:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.doi-content .form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.doi-content .form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.doi-content .form-floating > .form-control:not(:-ms-input-placeholder) ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.doi-content .form-floating > .form-control:focus ~ label,
.doi-content .form-floating > .form-control:not(:placeholder-shown) ~ label,
.doi-content .form-floating > .form-select ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.doi-content .form-floating > .form-control:-webkit-autofill ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.doi-content .input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.doi-content .input-group > .form-control,
.doi-content .input-group > .form-select {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.doi-content .input-group > .form-control:focus,
.doi-content .input-group > .form-select:focus {
  z-index: 3;
}
.doi-content .input-group .btn {
  position: relative;
  z-index: 2;
}
.doi-content .input-group .btn:focus {
  z-index: 3;
}
.doi-content .input-group-text {
  display: flex;
  align-items: center;
  padding: 0.5rem 2.1875rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212121;
  text-align: center;
  white-space: nowrap;
  background-color: #eeeeee;
  border: 1px solid #bdbdbd;
  border-radius: 0.1875rem;
}
.doi-content .input-group-lg > .form-control,
.doi-content .input-group-lg > .form-select,
.doi-content .input-group-lg > .input-group-text,
.doi-content .input-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: calc(1.265625rem + 0.1875vw);
  border-radius: 0.3rem;
}
@media (min-width: 1200px) {
  .doi-content .input-group-lg > .form-control,
.doi-content .input-group-lg > .form-select,
.doi-content .input-group-lg > .input-group-text,
.doi-content .input-group-lg > .btn {
    font-size: 1.40625rem;
  }
}
.doi-content .input-group-sm > .form-control,
.doi-content .input-group-sm > .form-select,
.doi-content .input-group-sm > .input-group-text,
.doi-content .input-group-sm > .btn {
  padding: 0.5rem 1.8125rem;
  font-size: 0.984375rem;
  border-radius: 0.2rem;
}
.doi-content .input-group-lg > .form-select,
.doi-content .input-group-sm > .form-select {
  padding-right: 8.75rem;
}
.doi-content .input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
.doi-content .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.doi-content .input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),
.doi-content .input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.doi-content .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.doi-content .valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #198754;
}
.doi-content .valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.984375rem;
  color: #fff;
  background-color: rgba(25, 135, 84, 0.9);
  border-radius: 0.1875rem;
}
.was-validated .doi-content:valid ~ .valid-feedback,
.was-validated .doi-content:valid ~ .valid-tooltip, .doi-content.is-valid ~ .valid-feedback,
.doi-content.is-valid ~ .valid-tooltip {
  display: block;
}
.was-validated .doi-content .form-control:valid, .doi-content .form-control.is-valid {
  border-color: #198754;
  padding-right: calc(1.5em + 1rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.25rem) center;
  background-size: calc(0.75em + 0.5rem) calc(0.75em + 0.5rem);
}
.was-validated .doi-content .form-control:valid:focus, .doi-content .form-control.is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
.was-validated .doi-content textarea.form-control:valid, .doi-content textarea.form-control.is-valid {
  padding-right: calc(1.5em + 1rem);
  background-position: top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem);
}
.was-validated .doi-content .form-select:valid, .doi-content .form-select.is-valid {
  border-color: #198754;
}
.was-validated .doi-content .form-select:valid:not([multiple]):not([size]), .was-validated .doi-content .form-select:valid:not([multiple])[size="1"], .doi-content .form-select.is-valid:not([multiple]):not([size]), .doi-content .form-select.is-valid:not([multiple])[size="1"] {
  padding-right: 12.03125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23424242' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-position: right 2.1875rem center, center right 6.5625rem;
  background-size: 16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem);
}
.was-validated .doi-content .form-select:valid:focus, .doi-content .form-select.is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
.was-validated .doi-content .form-check-input:valid, .doi-content .form-check-input.is-valid {
  border-color: #198754;
}
.was-validated .doi-content .form-check-input:valid:checked, .doi-content .form-check-input.is-valid:checked {
  background-color: #198754;
}
.was-validated .doi-content .form-check-input:valid:focus, .doi-content .form-check-input.is-valid:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
.was-validated .doi-content .form-check-input:valid ~ .form-check-label, .doi-content .form-check-input.is-valid ~ .form-check-label {
  color: #198754;
}
.doi-content .form-check-inline .form-check-input ~ .valid-feedback {
  margin-left: 0.5em;
}
.was-validated .doi-content .input-group .form-control:valid, .doi-content .input-group .form-control.is-valid,
.was-validated .doi-content .input-group .form-select:valid,
.doi-content .input-group .form-select.is-valid {
  z-index: 1;
}
.was-validated .doi-content .input-group .form-control:valid:focus, .doi-content .input-group .form-control.is-valid:focus,
.was-validated .doi-content .input-group .form-select:valid:focus,
.doi-content .input-group .form-select.is-valid:focus {
  z-index: 3;
}
.doi-content .invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}
.doi-content .invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.984375rem;
  color: #fff;
  background-color: rgba(220, 53, 69, 0.9);
  border-radius: 0.1875rem;
}
.was-validated .doi-content:invalid ~ .invalid-feedback,
.was-validated .doi-content:invalid ~ .invalid-tooltip, .doi-content.is-invalid ~ .invalid-feedback,
.doi-content.is-invalid ~ .invalid-tooltip {
  display: block;
}
.was-validated .doi-content .form-control:invalid, .doi-content .form-control.is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 1rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.25rem) center;
  background-size: calc(0.75em + 0.5rem) calc(0.75em + 0.5rem);
}
.was-validated .doi-content .form-control:invalid:focus, .doi-content .form-control.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.was-validated .doi-content textarea.form-control:invalid, .doi-content textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 1rem);
  background-position: top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem);
}
.was-validated .doi-content .form-select:invalid, .doi-content .form-select.is-invalid {
  border-color: #dc3545;
}
.was-validated .doi-content .form-select:invalid:not([multiple]):not([size]), .was-validated .doi-content .form-select:invalid:not([multiple])[size="1"], .doi-content .form-select.is-invalid:not([multiple]):not([size]), .doi-content .form-select.is-invalid:not([multiple])[size="1"] {
  padding-right: 12.03125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23424242' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-position: right 2.1875rem center, center right 6.5625rem;
  background-size: 16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem);
}
.was-validated .doi-content .form-select:invalid:focus, .doi-content .form-select.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.was-validated .doi-content .form-check-input:invalid, .doi-content .form-check-input.is-invalid {
  border-color: #dc3545;
}
.was-validated .doi-content .form-check-input:invalid:checked, .doi-content .form-check-input.is-invalid:checked {
  background-color: #dc3545;
}
.was-validated .doi-content .form-check-input:invalid:focus, .doi-content .form-check-input.is-invalid:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.was-validated .doi-content .form-check-input:invalid ~ .form-check-label, .doi-content .form-check-input.is-invalid ~ .form-check-label {
  color: #dc3545;
}
.doi-content .form-check-inline .form-check-input ~ .invalid-feedback {
  margin-left: 0.5em;
}
.was-validated .doi-content .input-group .form-control:invalid, .doi-content .input-group .form-control.is-invalid,
.was-validated .doi-content .input-group .form-select:invalid,
.doi-content .input-group .form-select.is-invalid {
  z-index: 2;
}
.was-validated .doi-content .input-group .form-control:invalid:focus, .doi-content .input-group .form-control.is-invalid:focus,
.was-validated .doi-content .input-group .form-select:invalid:focus,
.doi-content .input-group .form-select.is-invalid:focus {
  z-index: 3;
}
.doi-content .btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212121;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.5rem 2.1875rem;
  font-size: 1.125rem;
  border-radius: 0.1875rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .doi-content .btn {
    transition: none;
  }
}
.doi-content .btn:hover {
  color: #212121;
  text-decoration: none;
}
.btn-check:focus + .doi-content .btn, .doi-content .btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
}
.doi-content .btn:disabled, .doi-content .btn.disabled, fieldset:disabled .doi-content .btn {
  pointer-events: none;
  opacity: 0.65;
}
.doi-content .btn-primary {
  color: #fff;
  background-color: #285576;
  border-color: #285576;
}
.doi-content .btn-primary:hover {
  color: #fff;
  background-color: #224864;
  border-color: #20445e;
}
.btn-check:focus + .doi-content .btn-primary, .doi-content .btn-primary:focus {
  color: #fff;
  background-color: #224864;
  border-color: #20445e;
  box-shadow: 0 0 0 0.25rem rgba(72, 111, 139, 0.5);
}
.btn-check:checked + .doi-content .btn-primary, .btn-check:active + .doi-content .btn-primary, .doi-content .btn-primary:active, .doi-content .btn-primary.active, .show > .doi-content .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #20445e;
  border-color: #1e4059;
}
.btn-check:checked + .doi-content .btn-primary:focus, .btn-check:active + .doi-content .btn-primary:focus, .doi-content .btn-primary:active:focus, .doi-content .btn-primary.active:focus, .show > .doi-content .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(72, 111, 139, 0.5);
}
.doi-content .btn-primary:disabled, .doi-content .btn-primary.disabled {
  color: #fff;
  background-color: #285576;
  border-color: #285576;
}
.doi-content .btn-secondary {
  color: #000;
  background-color: #3e837c;
  border-color: #3e837c;
}
.doi-content .btn-secondary:hover {
  color: #000;
  background-color: #5b9690;
  border-color: #518f89;
}
.btn-check:focus + .doi-content .btn-secondary, .doi-content .btn-secondary:focus {
  color: #000;
  background-color: #5b9690;
  border-color: #518f89;
  box-shadow: 0 0 0 0.25rem rgba(53, 111, 105, 0.5);
}
.btn-check:checked + .doi-content .btn-secondary, .btn-check:active + .doi-content .btn-secondary, .doi-content .btn-secondary:active, .doi-content .btn-secondary.active, .show > .doi-content .btn-secondary.dropdown-toggle {
  color: #000;
  background-color: #659c96;
  border-color: #518f89;
}
.btn-check:checked + .doi-content .btn-secondary:focus, .btn-check:active + .doi-content .btn-secondary:focus, .doi-content .btn-secondary:active:focus, .doi-content .btn-secondary.active:focus, .show > .doi-content .btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(53, 111, 105, 0.5);
}
.doi-content .btn-secondary:disabled, .doi-content .btn-secondary.disabled {
  color: #000;
  background-color: #3e837c;
  border-color: #3e837c;
}
.doi-content .btn-success {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.doi-content .btn-success:hover {
  color: #fff;
  background-color: #157347;
  border-color: #146c43;
}
.btn-check:focus + .doi-content .btn-success, .doi-content .btn-success:focus {
  color: #fff;
  background-color: #157347;
  border-color: #146c43;
  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.btn-check:checked + .doi-content .btn-success, .btn-check:active + .doi-content .btn-success, .doi-content .btn-success:active, .doi-content .btn-success.active, .show > .doi-content .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #146c43;
  border-color: #13653f;
}
.btn-check:checked + .doi-content .btn-success:focus, .btn-check:active + .doi-content .btn-success:focus, .doi-content .btn-success:active:focus, .doi-content .btn-success.active:focus, .show > .doi-content .btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.doi-content .btn-success:disabled, .doi-content .btn-success.disabled {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.doi-content .btn-info {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.doi-content .btn-info:hover {
  color: #000;
  background-color: #31d2f2;
  border-color: #25cff2;
}
.btn-check:focus + .doi-content .btn-info, .doi-content .btn-info:focus {
  color: #000;
  background-color: #31d2f2;
  border-color: #25cff2;
  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.btn-check:checked + .doi-content .btn-info, .btn-check:active + .doi-content .btn-info, .doi-content .btn-info:active, .doi-content .btn-info.active, .show > .doi-content .btn-info.dropdown-toggle {
  color: #000;
  background-color: #3dd5f3;
  border-color: #25cff2;
}
.btn-check:checked + .doi-content .btn-info:focus, .btn-check:active + .doi-content .btn-info:focus, .doi-content .btn-info:active:focus, .doi-content .btn-info.active:focus, .show > .doi-content .btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.doi-content .btn-info:disabled, .doi-content .btn-info.disabled {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.doi-content .btn-warning {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.doi-content .btn-warning:hover {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
}
.btn-check:focus + .doi-content .btn-warning, .doi-content .btn-warning:focus {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-check:checked + .doi-content .btn-warning, .btn-check:active + .doi-content .btn-warning, .doi-content .btn-warning:active, .doi-content .btn-warning.active, .show > .doi-content .btn-warning.dropdown-toggle {
  color: #000;
  background-color: #ffcd39;
  border-color: #ffc720;
}
.btn-check:checked + .doi-content .btn-warning:focus, .btn-check:active + .doi-content .btn-warning:focus, .doi-content .btn-warning:active:focus, .doi-content .btn-warning.active:focus, .show > .doi-content .btn-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.doi-content .btn-warning:disabled, .doi-content .btn-warning.disabled {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.doi-content .btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.doi-content .btn-danger:hover {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
}
.btn-check:focus + .doi-content .btn-danger, .doi-content .btn-danger:focus {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-check:checked + .doi-content .btn-danger, .btn-check:active + .doi-content .btn-danger, .doi-content .btn-danger:active, .doi-content .btn-danger.active, .show > .doi-content .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #b02a37;
  border-color: #a52834;
}
.btn-check:checked + .doi-content .btn-danger:focus, .btn-check:active + .doi-content .btn-danger:focus, .doi-content .btn-danger:active:focus, .doi-content .btn-danger.active:focus, .show > .doi-content .btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.doi-content .btn-danger:disabled, .doi-content .btn-danger.disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.doi-content .btn-light {
  color: #000;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
}
.doi-content .btn-light:hover {
  color: #000;
  background-color: #f7f7f7;
  border-color: #f6f6f6;
}
.btn-check:focus + .doi-content .btn-light, .doi-content .btn-light:focus {
  color: #000;
  background-color: #f7f7f7;
  border-color: #f6f6f6;
  box-shadow: 0 0 0 0.25rem rgba(208, 208, 208, 0.5);
}
.btn-check:checked + .doi-content .btn-light, .btn-check:active + .doi-content .btn-light, .doi-content .btn-light:active, .doi-content .btn-light.active, .show > .doi-content .btn-light.dropdown-toggle {
  color: #000;
  background-color: #f7f7f7;
  border-color: #f6f6f6;
}
.btn-check:checked + .doi-content .btn-light:focus, .btn-check:active + .doi-content .btn-light:focus, .doi-content .btn-light:active:focus, .doi-content .btn-light.active:focus, .show > .doi-content .btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(208, 208, 208, 0.5);
}
.doi-content .btn-light:disabled, .doi-content .btn-light.disabled {
  color: #000;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
}
.doi-content .btn-dark {
  color: #fff;
  background-color: #212121;
  border-color: #212121;
}
.doi-content .btn-dark:hover {
  color: #fff;
  background-color: #1c1c1c;
  border-color: #1a1a1a;
}
.btn-check:focus + .doi-content .btn-dark, .doi-content .btn-dark:focus {
  color: #fff;
  background-color: #1c1c1c;
  border-color: #1a1a1a;
  box-shadow: 0 0 0 0.25rem rgba(66, 66, 66, 0.5);
}
.btn-check:checked + .doi-content .btn-dark, .btn-check:active + .doi-content .btn-dark, .doi-content .btn-dark:active, .doi-content .btn-dark.active, .show > .doi-content .btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #1a1a1a;
  border-color: #191919;
}
.btn-check:checked + .doi-content .btn-dark:focus, .btn-check:active + .doi-content .btn-dark:focus, .doi-content .btn-dark:active:focus, .doi-content .btn-dark.active:focus, .show > .doi-content .btn-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(66, 66, 66, 0.5);
}
.doi-content .btn-dark:disabled, .doi-content .btn-dark.disabled {
  color: #fff;
  background-color: #212121;
  border-color: #212121;
}
.doi-content .btn-outline-primary {
  color: #285576;
  border-color: #285576;
}
.doi-content .btn-outline-primary:hover {
  color: #fff;
  background-color: #285576;
  border-color: #285576;
}
.btn-check:focus + .doi-content .btn-outline-primary, .doi-content .btn-outline-primary:focus {
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.5);
}
.btn-check:checked + .doi-content .btn-outline-primary, .btn-check:active + .doi-content .btn-outline-primary, .doi-content .btn-outline-primary:active, .doi-content .btn-outline-primary.active, .doi-content .btn-outline-primary.dropdown-toggle.show {
  color: #fff;
  background-color: #285576;
  border-color: #285576;
}
.btn-check:checked + .doi-content .btn-outline-primary:focus, .btn-check:active + .doi-content .btn-outline-primary:focus, .doi-content .btn-outline-primary:active:focus, .doi-content .btn-outline-primary.active:focus, .doi-content .btn-outline-primary.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.5);
}
.doi-content .btn-outline-primary:disabled, .doi-content .btn-outline-primary.disabled {
  color: #285576;
  background-color: transparent;
}
.doi-content .btn-outline-secondary {
  color: #3e837c;
  border-color: #3e837c;
}
.doi-content .btn-outline-secondary:hover {
  color: #000;
  background-color: #3e837c;
  border-color: #3e837c;
}
.btn-check:focus + .doi-content .btn-outline-secondary, .doi-content .btn-outline-secondary:focus {
  box-shadow: 0 0 0 0.25rem rgba(62, 131, 124, 0.5);
}
.btn-check:checked + .doi-content .btn-outline-secondary, .btn-check:active + .doi-content .btn-outline-secondary, .doi-content .btn-outline-secondary:active, .doi-content .btn-outline-secondary.active, .doi-content .btn-outline-secondary.dropdown-toggle.show {
  color: #000;
  background-color: #3e837c;
  border-color: #3e837c;
}
.btn-check:checked + .doi-content .btn-outline-secondary:focus, .btn-check:active + .doi-content .btn-outline-secondary:focus, .doi-content .btn-outline-secondary:active:focus, .doi-content .btn-outline-secondary.active:focus, .doi-content .btn-outline-secondary.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(62, 131, 124, 0.5);
}
.doi-content .btn-outline-secondary:disabled, .doi-content .btn-outline-secondary.disabled {
  color: #3e837c;
  background-color: transparent;
}
.doi-content .btn-outline-success {
  color: #198754;
  border-color: #198754;
}
.doi-content .btn-outline-success:hover {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-check:focus + .doi-content .btn-outline-success, .doi-content .btn-outline-success:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-check:checked + .doi-content .btn-outline-success, .btn-check:active + .doi-content .btn-outline-success, .doi-content .btn-outline-success:active, .doi-content .btn-outline-success.active, .doi-content .btn-outline-success.dropdown-toggle.show {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-check:checked + .doi-content .btn-outline-success:focus, .btn-check:active + .doi-content .btn-outline-success:focus, .doi-content .btn-outline-success:active:focus, .doi-content .btn-outline-success.active:focus, .doi-content .btn-outline-success.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.doi-content .btn-outline-success:disabled, .doi-content .btn-outline-success.disabled {
  color: #198754;
  background-color: transparent;
}
.doi-content .btn-outline-info {
  color: #0dcaf0;
  border-color: #0dcaf0;
}
.doi-content .btn-outline-info:hover {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-check:focus + .doi-content .btn-outline-info, .doi-content .btn-outline-info:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-check:checked + .doi-content .btn-outline-info, .btn-check:active + .doi-content .btn-outline-info, .doi-content .btn-outline-info:active, .doi-content .btn-outline-info.active, .doi-content .btn-outline-info.dropdown-toggle.show {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-check:checked + .doi-content .btn-outline-info:focus, .btn-check:active + .doi-content .btn-outline-info:focus, .doi-content .btn-outline-info:active:focus, .doi-content .btn-outline-info.active:focus, .doi-content .btn-outline-info.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.doi-content .btn-outline-info:disabled, .doi-content .btn-outline-info.disabled {
  color: #0dcaf0;
  background-color: transparent;
}
.doi-content .btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
}
.doi-content .btn-outline-warning:hover {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-check:focus + .doi-content .btn-outline-warning, .doi-content .btn-outline-warning:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-check:checked + .doi-content .btn-outline-warning, .btn-check:active + .doi-content .btn-outline-warning, .doi-content .btn-outline-warning:active, .doi-content .btn-outline-warning.active, .doi-content .btn-outline-warning.dropdown-toggle.show {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-check:checked + .doi-content .btn-outline-warning:focus, .btn-check:active + .doi-content .btn-outline-warning:focus, .doi-content .btn-outline-warning:active:focus, .doi-content .btn-outline-warning.active:focus, .doi-content .btn-outline-warning.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.doi-content .btn-outline-warning:disabled, .doi-content .btn-outline-warning.disabled {
  color: #ffc107;
  background-color: transparent;
}
.doi-content .btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}
.doi-content .btn-outline-danger:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-check:focus + .doi-content .btn-outline-danger, .doi-content .btn-outline-danger:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-check:checked + .doi-content .btn-outline-danger, .btn-check:active + .doi-content .btn-outline-danger, .doi-content .btn-outline-danger:active, .doi-content .btn-outline-danger.active, .doi-content .btn-outline-danger.dropdown-toggle.show {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-check:checked + .doi-content .btn-outline-danger:focus, .btn-check:active + .doi-content .btn-outline-danger:focus, .doi-content .btn-outline-danger:active:focus, .doi-content .btn-outline-danger.active:focus, .doi-content .btn-outline-danger.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.doi-content .btn-outline-danger:disabled, .doi-content .btn-outline-danger.disabled {
  color: #dc3545;
  background-color: transparent;
}
.doi-content .btn-outline-light {
  color: #f5f5f5;
  border-color: #f5f5f5;
}
.doi-content .btn-outline-light:hover {
  color: #000;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
}
.btn-check:focus + .doi-content .btn-outline-light, .doi-content .btn-outline-light:focus {
  box-shadow: 0 0 0 0.25rem rgba(245, 245, 245, 0.5);
}
.btn-check:checked + .doi-content .btn-outline-light, .btn-check:active + .doi-content .btn-outline-light, .doi-content .btn-outline-light:active, .doi-content .btn-outline-light.active, .doi-content .btn-outline-light.dropdown-toggle.show {
  color: #000;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
}
.btn-check:checked + .doi-content .btn-outline-light:focus, .btn-check:active + .doi-content .btn-outline-light:focus, .doi-content .btn-outline-light:active:focus, .doi-content .btn-outline-light.active:focus, .doi-content .btn-outline-light.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(245, 245, 245, 0.5);
}
.doi-content .btn-outline-light:disabled, .doi-content .btn-outline-light.disabled {
  color: #f5f5f5;
  background-color: transparent;
}
.doi-content .btn-outline-dark {
  color: #212121;
  border-color: #212121;
}
.doi-content .btn-outline-dark:hover {
  color: #fff;
  background-color: #212121;
  border-color: #212121;
}
.btn-check:focus + .doi-content .btn-outline-dark, .doi-content .btn-outline-dark:focus {
  box-shadow: 0 0 0 0.25rem rgba(33, 33, 33, 0.5);
}
.btn-check:checked + .doi-content .btn-outline-dark, .btn-check:active + .doi-content .btn-outline-dark, .doi-content .btn-outline-dark:active, .doi-content .btn-outline-dark.active, .doi-content .btn-outline-dark.dropdown-toggle.show {
  color: #fff;
  background-color: #212121;
  border-color: #212121;
}
.btn-check:checked + .doi-content .btn-outline-dark:focus, .btn-check:active + .doi-content .btn-outline-dark:focus, .doi-content .btn-outline-dark:active:focus, .doi-content .btn-outline-dark.active:focus, .doi-content .btn-outline-dark.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(33, 33, 33, 0.5);
}
.doi-content .btn-outline-dark:disabled, .doi-content .btn-outline-dark.disabled {
  color: #212121;
  background-color: transparent;
}
.doi-content .btn-link {
  font-weight: 400;
  color: #a44d8e;
  text-decoration: underline;
}
.doi-content .btn-link:hover {
  color: #703561;
  text-decoration: underline;
}
.doi-content .btn-link:focus {
  text-decoration: underline;
}
.doi-content .btn-link:disabled, .doi-content .btn-link.disabled {
  color: #757575;
}
.doi-content .btn-lg {
  padding: 0.5rem 1rem;
  font-size: calc(1.265625rem + 0.1875vw);
  border-radius: 0.3rem;
}
@media (min-width: 1200px) {
  .doi-content .btn-lg {
    font-size: 1.40625rem;
  }
}
.doi-content .btn-sm {
  padding: 0.5rem 1.8125rem;
  font-size: 0.984375rem;
  border-radius: 0.2rem;
}
.doi-content .btn-primary {
  color: white;
  background-color: #285576;
  border-color: #285576;
}
.doi-content .btn-primary:hover {
  color: #fff;
  background-color: #244D6B;
  border-color: #244D6B;
}
.btn-check:focus + .doi-content .btn-primary, .doi-content .btn-primary:focus {
  color: #fff;
  background-color: #244D6B;
  border-color: #244D6B;
  box-shadow: 0 0 0 0.25rem rgba(72, 111, 139, 0.5);
}
.btn-check:checked + .doi-content .btn-primary, .btn-check:active + .doi-content .btn-primary, .doi-content .btn-primary:active, .doi-content .btn-primary.active, .show > .doi-content .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #20445e;
  border-color: #1e4059;
}
.btn-check:checked + .doi-content .btn-primary:focus, .btn-check:active + .doi-content .btn-primary:focus, .doi-content .btn-primary:active:focus, .doi-content .btn-primary.active:focus, .show > .doi-content .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(72, 111, 139, 0.5);
}
.doi-content .btn-primary:disabled, .doi-content .btn-primary.disabled {
  color: white;
  background-color: #D1D7E0;
  border-color: #D1D7E0;
}
.btn-check:focus + .doi-content .btn-primary, .doi-content .btn-primary:focus {
  box-shadow: 0 0 0 0.25rem #649DC7;
}
.doi-content .btn-outline-primary {
  color: #285576;
  border-color: #285576;
}
.doi-content .btn-outline-primary:hover {
  color: #244D6B;
  background-color: white;
  border-color: #244D6B;
}
.btn-check:focus + .doi-content .btn-outline-primary, .doi-content .btn-outline-primary:focus {
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.5);
}
.btn-check:checked + .doi-content .btn-outline-primary, .btn-check:active + .doi-content .btn-outline-primary, .doi-content .btn-outline-primary:active, .doi-content .btn-outline-primary.active, .doi-content .btn-outline-primary.dropdown-toggle.show {
  color: #000;
  background-color: white;
  border-color: #244D6B;
}
.btn-check:checked + .doi-content .btn-outline-primary:focus, .btn-check:active + .doi-content .btn-outline-primary:focus, .doi-content .btn-outline-primary:active:focus, .doi-content .btn-outline-primary.active:focus, .doi-content .btn-outline-primary.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.5);
}
.doi-content .btn-outline-primary:disabled, .doi-content .btn-outline-primary.disabled {
  color: #285576;
  background-color: transparent;
}
.btn-check:focus + .doi-content .btn-outline-primary, .doi-content .btn-outline-primary:focus {
  box-shadow: 0 0 0 0.25rem #649DC7;
}
.doi-content .btn-outline-primary:disabled, .doi-content .btn-outline-primary.disabled {
  color: #D1D7E0;
  border-color: #D1D7E0;
  background-color: transparent;
}
.doi-content a.link-secondary {
  color: black;
}
.doi-content a.link-secondary svg {
  opacity: 0;
}
.doi-content a.link-secondary:hover svg {
  opacity: 100%;
}
.doi-content a.link-secondary:hover svg path {
  fill: black;
}
.doi-content a.link-secondary:focus svg {
  opacity: 100%;
}
.doi-content a.link-secondary:focus svg path {
  fill: black;
}
.doi-content a:hover,
.doi-content a .hover {
  text-underline-offset: 0.125rem;
}
.doi-content a:focus,
.doi-content a .focus {
  text-decoration: underline;
  text-underline-offset: 0.125rem;
  color: #703561;
}
.doi-content a.disabled {
  pointer-events: none;
  opacity: 0.5;
  text-decoration: none;
}
.doi-content .link-icon {
  width: auto;
  height: auto;
}
.doi-content .link-icon.link-external svg {
  margin-left: 0.48rem;
  width: 14px;
  height: 14px;
  margin-bottom: 0.1rem;
}
.doi-content .link-icon svg {
  margin-left: 0.734rem;
  width: 13px;
  height: 9px;
}
.doi-content h1,
.doi-content .h1 {
  font-size: 60px;
  line-height: 1;
  font-weight: 700;
}
.doi-content h2,
.doi-content .h2 {
  font-size: 36px;
  line-height: 1.2;
  font-weight: 600;
}
.doi-content h3,
.doi-content .h3 {
  font-size: 30px;
  line-height: 1.2;
  margin-bottom: 1rem;
  font-weight: 600;
}
.doi-content h4,
.doi-content .h4 {
  font-size: 24px;
  line-height: 1.2;
  font-weight: 600;
}
.doi-content h5,
.doi-content .h5 {
  font-size: 21px;
  line-height: 1.2;
  font-weight: 600;
}
.doi-content .subheading {
  text-transform: uppercase;
  color: #888888;
  font-size: 15px;
}
.doi-content .display-large {
  font-family: "Public Sans", sans-serif;
  font-size: 48px;
  font-weight: bold;
  line-height: 56px;
}
.doi-content .display-medium {
  font-family: "Public Sans", sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 40px;
}
.doi-content .display-small {
  font-family: "Public Sans", sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.35px;
}
.doi-content .heading-large {
  font-family: "Public Sans", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
}
.doi-content .heading-medium {
  font-family: "Public Sans", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.2px;
}
.doi-content .heading-small {
  font-family: "Public Sans", sans-serif;
  font-size: 21px;
  font-weight: 600;
  line-height: 24px;
}
.doi-content .heading-extra-small {
  font-family: "Public Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.04px;
}
.doi-content .heading-extra-small-caps {
  font-family: "Public Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.doi-content .body-lead {
  font-family: "Public Sans", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
}
.doi-content .body-large {
  font-family: "Public Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}
.doi-content .body-large-bold {
  font-family: "Public Sans", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
}
.doi-content .body-medium {
  font-family: "Public Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
}
.doi-content .body-medium-bold {
  font-family: "Public Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
}
.doi-content .body-small {
  font-family: "Public Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
}
.doi-content .body-small-bold {
  font-family: "Public Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.3px;
}
.doi-content .caption-large {
  font-family: "Public Sans", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
}
.doi-content .caption-bold {
  font-family: "Public Sans", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
}
.doi-content .link-large {
  font-family: "Public Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}
.doi-content .link-large-hover {
  font-family: "Public Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}
.doi-content .link-large-hover:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}
.doi-content ul {
  font-family: "Public Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  margin-left: 1rem;
}
.doi-content ul li::marker {
  color: #285576;
}
.doi-content ol {
  font-family: "Public Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  counter-reset: item;
  margin-left: 1rem;
}
.doi-content ol li::marker {
  color: #285576;
}
.doi-content blockquote {
  font-family: "Public Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  color: #285576;
  border-left: none;
}
.doi-content cite {
  font-family: "Public Sans", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-align: center;
  color: #285576;
}
.doi-content .dropup,
.doi-content .dropend,
.doi-content .dropdown,
.doi-content .dropstart {
  position: relative;
}
.doi-content .dropdown-toggle {
  white-space: nowrap;
}
.doi-content .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.doi-content .dropdown-toggle:empty::after {
  margin-left: 0;
}
.doi-content .dropdown-menu {
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1.125rem;
  color: #212121;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.1875rem;
}
.doi-content .dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: 0.125rem;
}
.doi-content .dropdown-menu-start {
  --bs-position: start;
}
.doi-content .dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}
.doi-content .dropdown-menu-end {
  --bs-position: end;
}
.doi-content .dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}
@media (min-width: 576px) {
  .doi-content .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .doi-content .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .doi-content .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .doi-content .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .doi-content .dropdown-menu-md-start {
    --bs-position: start;
  }
  .doi-content .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .doi-content .dropdown-menu-md-end {
    --bs-position: end;
  }
  .doi-content .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .doi-content .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .doi-content .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .doi-content .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .doi-content .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .doi-content .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .doi-content .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .doi-content .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .doi-content .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .doi-content .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .doi-content .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .doi-content .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .doi-content .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.doi-content .dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}
.doi-content .dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.doi-content .dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}
.doi-content .dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}
.doi-content .dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.doi-content .dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.doi-content .dropend .dropdown-toggle::after {
  vertical-align: 0;
}
.doi-content .dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}
.doi-content .dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.doi-content .dropstart .dropdown-toggle::after {
  display: none;
}
.doi-content .dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.doi-content .dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.doi-content .dropstart .dropdown-toggle::before {
  vertical-align: 0;
}
.doi-content .dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}
.doi-content .dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212121;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.doi-content .dropdown-item:hover, .doi-content .dropdown-item:focus {
  color: #1e1e1e;
  text-decoration: none;
  background-color: #eeeeee;
}
.doi-content .dropdown-item.active, .doi-content .dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #285576;
}
.doi-content .dropdown-item.disabled, .doi-content .dropdown-item:disabled {
  color: #9e9e9e;
  pointer-events: none;
  background-color: transparent;
}
.doi-content .dropdown-menu.show {
  display: block;
}
.doi-content .dropdown-header {
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 0.984375rem;
  color: #757575;
  white-space: nowrap;
}
.doi-content .dropdown-item-text {
  display: block;
  padding: 0.25rem 1rem;
  color: #212121;
}
.doi-content .dropdown-menu-dark {
  color: #e0e0e0;
  background-color: #424242;
  border-color: rgba(0, 0, 0, 0.15);
}
.doi-content .dropdown-menu-dark .dropdown-item {
  color: #e0e0e0;
}
.doi-content .dropdown-menu-dark .dropdown-item:hover, .doi-content .dropdown-menu-dark .dropdown-item:focus {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
}
.doi-content .dropdown-menu-dark .dropdown-item.active, .doi-content .dropdown-menu-dark .dropdown-item:active {
  color: #fff;
  background-color: #285576;
}
.doi-content .dropdown-menu-dark .dropdown-item.disabled, .doi-content .dropdown-menu-dark .dropdown-item:disabled {
  color: #9e9e9e;
}
.doi-content .dropdown-menu-dark .dropdown-divider {
  border-color: rgba(0, 0, 0, 0.15);
}
.doi-content .dropdown-menu-dark .dropdown-item-text {
  color: #e0e0e0;
}
.doi-content .dropdown-menu-dark .dropdown-header {
  color: #9e9e9e;
}
.doi-content .nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.doi-content .nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #a44d8e;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .doi-content .nav-link {
    transition: none;
  }
}
.doi-content .nav-link:hover, .doi-content .nav-link:focus {
  color: #703561;
  text-decoration: none;
}
.doi-content .nav-link.disabled {
  color: #757575;
  pointer-events: none;
  cursor: default;
}
.doi-content .nav-tabs {
  border-bottom: 1px solid #e0e0e0;
}
.doi-content .nav-tabs .nav-link {
  margin-bottom: -1px;
  background: none;
  border: 1px solid transparent;
  border-top-left-radius: 0.1875rem;
  border-top-right-radius: 0.1875rem;
}
.doi-content .nav-tabs .nav-link:hover, .doi-content .nav-tabs .nav-link:focus {
  border-color: #eeeeee #eeeeee #e0e0e0;
  isolation: isolate;
}
.doi-content .nav-tabs .nav-link.disabled {
  color: #757575;
  background-color: transparent;
  border-color: transparent;
}
.doi-content .nav-tabs .nav-link.active,
.doi-content .nav-tabs .nav-item.show .nav-link {
  color: #616161;
  background-color: #fff;
  border-color: #e0e0e0 #e0e0e0 #fff;
}
.doi-content .nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.doi-content .nav-pills .nav-link {
  background: none;
  border: 0;
  border-radius: 0.1875rem;
}
.doi-content .nav-pills .nav-link.active,
.doi-content .nav-pills .show > .nav-link {
  color: #fff;
  background-color: #285576;
}
.doi-content .nav-fill > .nav-link,
.doi-content .nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}
.doi-content .nav-justified > .nav-link,
.doi-content .nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}
.doi-content .nav-fill .nav-item .nav-link,
.doi-content .nav-justified .nav-item .nav-link {
  width: 100%;
}
.doi-content .tab-content > .tab-pane {
  display: none;
}
.doi-content .tab-content > .active {
  display: block;
}
.doi-content .navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.doi-content .navbar > .container,
.doi-content .navbar > .container-fluid,
.doi-content .navbar > .container-sm,
.doi-content .navbar > .container-md,
.doi-content .navbar > .container-lg,
.doi-content .navbar > .container-xl,
.doi-content .navbar > .container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.doi-content .navbar-brand {
  padding-top: 0.2890625rem;
  padding-bottom: 0.2890625rem;
  margin-right: 1rem;
  font-size: calc(1.265625rem + 0.1875vw);
  text-decoration: none;
  white-space: nowrap;
}
@media (min-width: 1200px) {
  .doi-content .navbar-brand {
    font-size: 1.40625rem;
  }
}
.doi-content .navbar-brand:hover, .doi-content .navbar-brand:focus {
  text-decoration: none;
}
.doi-content .navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.doi-content .navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}
.doi-content .navbar-nav .dropdown-menu {
  position: static;
}
.doi-content .navbar-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.doi-content .navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}
.doi-content .navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: calc(1.265625rem + 0.1875vw);
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.1875rem;
  transition: box-shadow 0.15s ease-in-out;
}
@media (min-width: 1200px) {
  .doi-content .navbar-toggler {
    font-size: 1.40625rem;
  }
}
@media (prefers-reduced-motion: reduce) {
  .doi-content .navbar-toggler {
    transition: none;
  }
}
.doi-content .navbar-toggler:hover {
  text-decoration: none;
}
.doi-content .navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 0.25rem;
}
.doi-content .navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}
.doi-content .navbar-nav-scroll {
  max-height: var(--bs-scroll-height, 75vh);
  overflow-y: auto;
}
@media (min-width: 576px) {
  .doi-content .navbar-expand-sm {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .doi-content .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .doi-content .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .doi-content .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .doi-content .navbar-expand-sm .navbar-nav-scroll {
    overflow: visible;
  }
  .doi-content .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .doi-content .navbar-expand-sm .navbar-toggler {
    display: none;
  }
  .doi-content .navbar-expand-sm .offcanvas-header {
    display: none;
  }
  .doi-content .navbar-expand-sm .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .doi-content .navbar-expand-sm .offcanvas-top,
.doi-content .navbar-expand-sm .offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .doi-content .navbar-expand-sm .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 768px) {
  .doi-content .navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .doi-content .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .doi-content .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .doi-content .navbar-expand-md .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .doi-content .navbar-expand-md .navbar-nav-scroll {
    overflow: visible;
  }
  .doi-content .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .doi-content .navbar-expand-md .navbar-toggler {
    display: none;
  }
  .doi-content .navbar-expand-md .offcanvas-header {
    display: none;
  }
  .doi-content .navbar-expand-md .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .doi-content .navbar-expand-md .offcanvas-top,
.doi-content .navbar-expand-md .offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .doi-content .navbar-expand-md .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 992px) {
  .doi-content .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .doi-content .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .doi-content .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .doi-content .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .doi-content .navbar-expand-lg .navbar-nav-scroll {
    overflow: visible;
  }
  .doi-content .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .doi-content .navbar-expand-lg .navbar-toggler {
    display: none;
  }
  .doi-content .navbar-expand-lg .offcanvas-header {
    display: none;
  }
  .doi-content .navbar-expand-lg .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .doi-content .navbar-expand-lg .offcanvas-top,
.doi-content .navbar-expand-lg .offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .doi-content .navbar-expand-lg .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1200px) {
  .doi-content .navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .doi-content .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .doi-content .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .doi-content .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .doi-content .navbar-expand-xl .navbar-nav-scroll {
    overflow: visible;
  }
  .doi-content .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .doi-content .navbar-expand-xl .navbar-toggler {
    display: none;
  }
  .doi-content .navbar-expand-xl .offcanvas-header {
    display: none;
  }
  .doi-content .navbar-expand-xl .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .doi-content .navbar-expand-xl .offcanvas-top,
.doi-content .navbar-expand-xl .offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .doi-content .navbar-expand-xl .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1400px) {
  .doi-content .navbar-expand-xxl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .doi-content .navbar-expand-xxl .navbar-nav {
    flex-direction: row;
  }
  .doi-content .navbar-expand-xxl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .doi-content .navbar-expand-xxl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .doi-content .navbar-expand-xxl .navbar-nav-scroll {
    overflow: visible;
  }
  .doi-content .navbar-expand-xxl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .doi-content .navbar-expand-xxl .navbar-toggler {
    display: none;
  }
  .doi-content .navbar-expand-xxl .offcanvas-header {
    display: none;
  }
  .doi-content .navbar-expand-xxl .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none;
  }
  .doi-content .navbar-expand-xxl .offcanvas-top,
.doi-content .navbar-expand-xxl .offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }
  .doi-content .navbar-expand-xxl .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
.doi-content .navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.doi-content .navbar-expand .navbar-nav {
  flex-direction: row;
}
.doi-content .navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.doi-content .navbar-expand .navbar-nav .nav-link {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
.doi-content .navbar-expand .navbar-nav-scroll {
  overflow: visible;
}
.doi-content .navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.doi-content .navbar-expand .navbar-toggler {
  display: none;
}
.doi-content .navbar-expand .offcanvas-header {
  display: none;
}
.doi-content .navbar-expand .offcanvas {
  position: inherit;
  bottom: 0;
  z-index: 1000;
  flex-grow: 1;
  visibility: visible !important;
  background-color: transparent;
  border-right: 0;
  border-left: 0;
  transition: none;
  transform: none;
}
.doi-content .navbar-expand .offcanvas-top,
.doi-content .navbar-expand .offcanvas-bottom {
  height: auto;
  border-top: 0;
  border-bottom: 0;
}
.doi-content .navbar-expand .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}
.doi-content .navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}
.doi-content .navbar-light .navbar-brand:hover, .doi-content .navbar-light .navbar-brand:focus {
  color: rgba(0, 0, 0, 0.9);
}
.doi-content .navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.55);
}
.doi-content .navbar-light .navbar-nav .nav-link:hover, .doi-content .navbar-light .navbar-nav .nav-link:focus {
  color: rgba(0, 0, 0, 0.7);
}
.doi-content .navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0, 0, 0, 0.3);
}
.doi-content .navbar-light .navbar-nav .show > .nav-link,
.doi-content .navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
}
.doi-content .navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.55);
  border-color: rgba(0, 0, 0, 0.1);
}
.doi-content .navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.doi-content .navbar-light .navbar-text {
  color: rgba(0, 0, 0, 0.55);
}
.doi-content .navbar-light .navbar-text a,
.doi-content .navbar-light .navbar-text a:hover,
.doi-content .navbar-light .navbar-text a:focus {
  color: rgba(0, 0, 0, 0.9);
}
.doi-content .navbar-dark .navbar-brand {
  color: #fff;
}
.doi-content .navbar-dark .navbar-brand:hover, .doi-content .navbar-dark .navbar-brand:focus {
  color: #fff;
}
.doi-content .navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.55);
}
.doi-content .navbar-dark .navbar-nav .nav-link:hover, .doi-content .navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 0.75);
}
.doi-content .navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}
.doi-content .navbar-dark .navbar-nav .show > .nav-link,
.doi-content .navbar-dark .navbar-nav .nav-link.active {
  color: #fff;
}
.doi-content .navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.55);
  border-color: rgba(255, 255, 255, 0.1);
}
.doi-content .navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.doi-content .navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.55);
}
.doi-content .navbar-dark .navbar-text a,
.doi-content .navbar-dark .navbar-text a:hover,
.doi-content .navbar-dark .navbar-text a:focus {
  color: #fff;
}
.doi-content .card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.1875rem;
}
.doi-content .card > hr {
  margin-right: 0;
  margin-left: 0;
}
.doi-content .card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.doi-content .card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: calc(0.1875rem - 1px);
  border-top-right-radius: calc(0.1875rem - 1px);
}
.doi-content .card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: calc(0.1875rem - 1px);
  border-bottom-left-radius: calc(0.1875rem - 1px);
}
.doi-content .card > .card-header + .list-group,
.doi-content .card > .list-group + .card-footer {
  border-top: 0;
}
.doi-content .card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
.doi-content .card-title {
  margin-bottom: 0.5rem;
}
.doi-content .card-subtitle {
  margin-top: -0.25rem;
  margin-bottom: 0;
}
.doi-content .card-text:last-child {
  margin-bottom: 0;
}
.doi-content .card-link:hover {
  text-decoration: none;
}
.doi-content .card-link + .card-link {
  margin-left: 1rem;
}
.doi-content .card-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.doi-content .card-header:first-child {
  border-radius: calc(0.1875rem - 1px) calc(0.1875rem - 1px) 0 0;
}
.doi-content .card-footer {
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.doi-content .card-footer:last-child {
  border-radius: 0 0 calc(0.1875rem - 1px) calc(0.1875rem - 1px);
}
.doi-content .card-header-tabs {
  margin-right: -0.5rem;
  margin-bottom: -0.5rem;
  margin-left: -0.5rem;
  border-bottom: 0;
}
.doi-content .card-header-pills {
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}
.doi-content .card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  border-radius: calc(0.1875rem - 1px);
}
.doi-content .card-img,
.doi-content .card-img-top,
.doi-content .card-img-bottom {
  width: 100%;
}
.doi-content .card-img,
.doi-content .card-img-top {
  border-top-left-radius: calc(0.1875rem - 1px);
  border-top-right-radius: calc(0.1875rem - 1px);
}
.doi-content .card-img,
.doi-content .card-img-bottom {
  border-bottom-right-radius: calc(0.1875rem - 1px);
  border-bottom-left-radius: calc(0.1875rem - 1px);
}
.doi-content .card-group > .card {
  margin-bottom: 0.75rem;
}
@media (min-width: 576px) {
  .doi-content .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .doi-content .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .doi-content .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .doi-content .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .doi-content .card-group > .card:not(:last-child) .card-img-top,
.doi-content .card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }
  .doi-content .card-group > .card:not(:last-child) .card-img-bottom,
.doi-content .card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }
  .doi-content .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .doi-content .card-group > .card:not(:first-child) .card-img-top,
.doi-content .card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }
  .doi-content .card-group > .card:not(:first-child) .card-img-bottom,
.doi-content .card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}
.doi-content .accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1.125rem;
  color: #212121;
  text-align: left;
  background-color: #fff;
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .doi-content .accordion-button {
    transition: none;
  }
}
.doi-content .accordion-button:not(.collapsed) {
  color: #244d6a;
  background-color: #eaeef1;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
}
.doi-content .accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23244d6a'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: rotate(-180deg);
}
.doi-content .accordion-button::after {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-left: auto;
  content: "";
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212121'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 1.25rem;
  transition: transform 0.2s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .doi-content .accordion-button::after {
    transition: none;
  }
}
.doi-content .accordion-button:hover {
  z-index: 2;
}
.doi-content .accordion-button:focus {
  z-index: 3;
  border-color: #94aabb;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
}
.doi-content .accordion-header {
  margin-bottom: 0;
}
.doi-content .accordion-item {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.doi-content .accordion-item:first-of-type {
  border-top-left-radius: 0.1875rem;
  border-top-right-radius: 0.1875rem;
}
.doi-content .accordion-item:first-of-type .accordion-button {
  border-top-left-radius: calc(0.1875rem - 1px);
  border-top-right-radius: calc(0.1875rem - 1px);
}
.doi-content .accordion-item:not(:first-of-type) {
  border-top: 0;
}
.doi-content .accordion-item:last-of-type {
  border-bottom-right-radius: 0.1875rem;
  border-bottom-left-radius: 0.1875rem;
}
.doi-content .accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: calc(0.1875rem - 1px);
  border-bottom-left-radius: calc(0.1875rem - 1px);
}
.doi-content .accordion-item:last-of-type .accordion-collapse {
  border-bottom-right-radius: 0.1875rem;
  border-bottom-left-radius: 0.1875rem;
}
.doi-content .accordion-body {
  padding: 1rem 1.25rem;
}
.doi-content .accordion-flush .accordion-collapse {
  border-width: 0;
}
.doi-content .accordion-flush .accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.doi-content .accordion-flush .accordion-item:first-child {
  border-top: 0;
}
.doi-content .accordion-flush .accordion-item:last-child {
  border-bottom: 0;
}
.doi-content .accordion-flush .accordion-item .accordion-button {
  border-radius: 0;
}
.doi-content .breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0;
  margin-bottom: 1rem;
  list-style: none;
}
.doi-content .breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}
.doi-content .breadcrumb-item + .breadcrumb-item::before {
  float: left;
  padding-right: 0.5rem;
  color: #757575;
  content: var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */;
}
.doi-content .breadcrumb-item.active {
  color: #757575;
}
.doi-content .pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
}
.doi-content .page-link {
  position: relative;
  display: block;
  color: #a44d8e;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .doi-content .page-link {
    transition: none;
  }
}
.doi-content .page-link:hover {
  z-index: 2;
  color: #703561;
  text-decoration: none;
  background-color: #eeeeee;
  border-color: #e0e0e0;
}
.doi-content .page-link:focus {
  z-index: 3;
  color: #703561;
  background-color: #eeeeee;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
}
.doi-content .page-item:not(:first-child) .page-link {
  margin-left: -1px;
}
.doi-content .page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #285576;
  border-color: #285576;
}
.doi-content .page-item.disabled .page-link {
  color: #757575;
  pointer-events: none;
  background-color: #fff;
  border-color: #e0e0e0;
}
.doi-content .page-link {
  padding: 0.375rem 0.75rem;
}
.doi-content .page-item:first-child .page-link {
  border-top-left-radius: 0.1875rem;
  border-bottom-left-radius: 0.1875rem;
}
.doi-content .page-item:last-child .page-link {
  border-top-right-radius: 0.1875rem;
  border-bottom-right-radius: 0.1875rem;
}
.doi-content .pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: calc(1.265625rem + 0.1875vw);
}
@media (min-width: 1200px) {
  .doi-content .pagination-lg .page-link {
    font-size: 1.40625rem;
  }
}
.doi-content .pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}
.doi-content .pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.doi-content .pagination-sm .page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.984375rem;
}
.doi-content .pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}
.doi-content .pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}
.doi-content .badge {
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.1875rem;
}
.doi-content .badge:empty {
  display: none;
}
.doi-content .btn .badge {
  position: relative;
  top: -1px;
}
.doi-content .list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.1875rem;
}
.doi-content .list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.doi-content .list-group-numbered > li::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}
.doi-content .list-group-item-action {
  width: 100%;
  color: #616161;
  text-align: inherit;
}
.doi-content .list-group-item-action:hover, .doi-content .list-group-item-action:focus {
  z-index: 1;
  color: #616161;
  text-decoration: none;
  background-color: #f5f5f5;
}
.doi-content .list-group-item-action:active {
  color: #212121;
  background-color: #eeeeee;
}
.doi-content .list-group-item {
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  color: #212121;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.doi-content .list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.doi-content .list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.doi-content .list-group-item.disabled, .doi-content .list-group-item:disabled {
  color: #757575;
  pointer-events: none;
  background-color: #fff;
}
.doi-content .list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #285576;
  border-color: #285576;
}
.doi-content .list-group-item + .doi-content .list-group-item {
  border-top-width: 0;
}
.doi-content .list-group-item + .doi-content .list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}
.doi-content .list-group-horizontal {
  flex-direction: row;
}
.doi-content .list-group-horizontal > .list-group-item:first-child {
  border-bottom-left-radius: 0.1875rem;
  border-top-right-radius: 0;
}
.doi-content .list-group-horizontal > .list-group-item:last-child {
  border-top-right-radius: 0.1875rem;
  border-bottom-left-radius: 0;
}
.doi-content .list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.doi-content .list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: 1px;
  border-left-width: 0;
}
.doi-content .list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: -1px;
  border-left-width: 1px;
}
@media (min-width: 576px) {
  .doi-content .list-group-horizontal-sm {
    flex-direction: row;
  }
  .doi-content .list-group-horizontal-sm > .list-group-item:first-child {
    border-bottom-left-radius: 0.1875rem;
    border-top-right-radius: 0;
  }
  .doi-content .list-group-horizontal-sm > .list-group-item:last-child {
    border-top-right-radius: 0.1875rem;
    border-bottom-left-radius: 0;
  }
  .doi-content .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .doi-content .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .doi-content .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 768px) {
  .doi-content .list-group-horizontal-md {
    flex-direction: row;
  }
  .doi-content .list-group-horizontal-md > .list-group-item:first-child {
    border-bottom-left-radius: 0.1875rem;
    border-top-right-radius: 0;
  }
  .doi-content .list-group-horizontal-md > .list-group-item:last-child {
    border-top-right-radius: 0.1875rem;
    border-bottom-left-radius: 0;
  }
  .doi-content .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .doi-content .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .doi-content .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 992px) {
  .doi-content .list-group-horizontal-lg {
    flex-direction: row;
  }
  .doi-content .list-group-horizontal-lg > .list-group-item:first-child {
    border-bottom-left-radius: 0.1875rem;
    border-top-right-radius: 0;
  }
  .doi-content .list-group-horizontal-lg > .list-group-item:last-child {
    border-top-right-radius: 0.1875rem;
    border-bottom-left-radius: 0;
  }
  .doi-content .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .doi-content .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .doi-content .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1200px) {
  .doi-content .list-group-horizontal-xl {
    flex-direction: row;
  }
  .doi-content .list-group-horizontal-xl > .list-group-item:first-child {
    border-bottom-left-radius: 0.1875rem;
    border-top-right-radius: 0;
  }
  .doi-content .list-group-horizontal-xl > .list-group-item:last-child {
    border-top-right-radius: 0.1875rem;
    border-bottom-left-radius: 0;
  }
  .doi-content .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .doi-content .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .doi-content .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1400px) {
  .doi-content .list-group-horizontal-xxl {
    flex-direction: row;
  }
  .doi-content .list-group-horizontal-xxl > .list-group-item:first-child {
    border-bottom-left-radius: 0.1875rem;
    border-top-right-radius: 0;
  }
  .doi-content .list-group-horizontal-xxl > .list-group-item:last-child {
    border-top-right-radius: 0.1875rem;
    border-bottom-left-radius: 0;
  }
  .doi-content .list-group-horizontal-xxl > .list-group-item.active {
    margin-top: 0;
  }
  .doi-content .list-group-horizontal-xxl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .doi-content .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
.doi-content .list-group-flush {
  border-radius: 0;
}
.doi-content .list-group-flush > .list-group-item {
  border-width: 0 0 1px;
}
.doi-content .list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}
.doi-content .list-group-item-primary {
  color: #183347;
  background-color: #d4dde4;
}
.doi-content .list-group-item-primary.list-group-item-action:hover, .doi-content .list-group-item-primary.list-group-item-action:focus {
  color: #183347;
  background-color: #bfc7cd;
}
.doi-content .list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #183347;
  border-color: #183347;
}
.doi-content .list-group-item-secondary {
  color: #254f4a;
  background-color: #d8e6e5;
}
.doi-content .list-group-item-secondary.list-group-item-action:hover, .doi-content .list-group-item-secondary.list-group-item-action:focus {
  color: #254f4a;
  background-color: #c2cfce;
}
.doi-content .list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #254f4a;
  border-color: #254f4a;
}
.doi-content .list-group-item-success {
  color: #0f5132;
  background-color: #d1e7dd;
}
.doi-content .list-group-item-success.list-group-item-action:hover, .doi-content .list-group-item-success.list-group-item-action:focus {
  color: #0f5132;
  background-color: #bcd0c7;
}
.doi-content .list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #0f5132;
  border-color: #0f5132;
}
.doi-content .list-group-item-info {
  color: #055160;
  background-color: #cff4fc;
}
.doi-content .list-group-item-info.list-group-item-action:hover, .doi-content .list-group-item-info.list-group-item-action:focus {
  color: #055160;
  background-color: #badce3;
}
.doi-content .list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #055160;
  border-color: #055160;
}
.doi-content .list-group-item-warning {
  color: #664d03;
  background-color: #fff3cd;
}
.doi-content .list-group-item-warning.list-group-item-action:hover, .doi-content .list-group-item-warning.list-group-item-action:focus {
  color: #664d03;
  background-color: #e6dbb9;
}
.doi-content .list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #664d03;
  border-color: #664d03;
}
.doi-content .list-group-item-danger {
  color: #842029;
  background-color: #f8d7da;
}
.doi-content .list-group-item-danger.list-group-item-action:hover, .doi-content .list-group-item-danger.list-group-item-action:focus {
  color: #842029;
  background-color: #dfc2c4;
}
.doi-content .list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #842029;
  border-color: #842029;
}
.doi-content .list-group-item-light {
  color: #626262;
  background-color: #fdfdfd;
}
.doi-content .list-group-item-light.list-group-item-action:hover, .doi-content .list-group-item-light.list-group-item-action:focus {
  color: #626262;
  background-color: #e4e4e4;
}
.doi-content .list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #626262;
  border-color: #626262;
}
.doi-content .list-group-item-dark {
  color: #141414;
  background-color: lightgray;
}
.doi-content .list-group-item-dark.list-group-item-action:hover, .doi-content .list-group-item-dark.list-group-item-action:focus {
  color: #141414;
  background-color: #bebebe;
}
.doi-content .list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #141414;
  border-color: #141414;
}
.doi-content .btn-close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  border: 0;
  border-radius: 0.1875rem;
  opacity: 0.5;
}
.doi-content .btn-close:hover {
  color: #000;
  text-decoration: none;
  opacity: 0.75;
}
.doi-content .btn-close:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(40, 85, 118, 0.25);
  opacity: 1;
}
.doi-content .btn-close:disabled, .doi-content .btn-close.disabled {
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  opacity: 0.25;
}
.doi-content .btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}
.doi-content .modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1055;
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}
.doi-content .modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}
.modal.fade .doi-content .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .doi-content .modal-dialog {
    transition: none;
  }
}
.modal.show .doi-content .modal-dialog {
  transform: none;
}
.modal.modal-static .doi-content .modal-dialog {
  transform: scale(1.02);
}
.doi-content .modal-dialog-scrollable {
  height: calc(100% - 1rem);
}
.doi-content .modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
}
.doi-content .modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}
.doi-content .modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}
.doi-content .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}
.doi-content .modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.doi-content .modal-backdrop.fade {
  opacity: 0;
}
.doi-content .modal-backdrop.show {
  opacity: 0.5;
}
.doi-content .modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #e0e0e0;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.doi-content .modal-header .btn-close {
  padding: 0.5rem 0.5rem;
  margin: -0.5rem -0.5rem -0.5rem auto;
}
.doi-content .modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}
.doi-content .modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}
.doi-content .modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #e0e0e0;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
.doi-content .modal-footer > * {
  margin: 0.25rem;
}
@media (min-width: 576px) {
  .doi-content .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }
  .doi-content .modal-dialog-scrollable {
    height: calc(100% - 3.5rem);
  }
  .doi-content .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }
  .doi-content .modal-sm {
    max-width: 300px;
  }
}
@media (min-width: 992px) {
  .doi-content .modal-lg,
.doi-content .modal-xl {
    max-width: 800px;
  }
}
@media (min-width: 1200px) {
  .doi-content .modal-xl {
    max-width: 1140px;
  }
}
.doi-content .modal-fullscreen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
.doi-content .modal-fullscreen .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
.doi-content .modal-fullscreen .modal-header {
  border-radius: 0;
}
.doi-content .modal-fullscreen .modal-body {
  overflow-y: auto;
}
.doi-content .modal-fullscreen .modal-footer {
  border-radius: 0;
}
@media (max-width: 575.98px) {
  .doi-content .modal-fullscreen-sm-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .doi-content .modal-fullscreen-sm-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .doi-content .modal-fullscreen-sm-down .modal-header {
    border-radius: 0;
  }
  .doi-content .modal-fullscreen-sm-down .modal-body {
    overflow-y: auto;
  }
  .doi-content .modal-fullscreen-sm-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 767.98px) {
  .doi-content .modal-fullscreen-md-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .doi-content .modal-fullscreen-md-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .doi-content .modal-fullscreen-md-down .modal-header {
    border-radius: 0;
  }
  .doi-content .modal-fullscreen-md-down .modal-body {
    overflow-y: auto;
  }
  .doi-content .modal-fullscreen-md-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 991.98px) {
  .doi-content .modal-fullscreen-lg-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .doi-content .modal-fullscreen-lg-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .doi-content .modal-fullscreen-lg-down .modal-header {
    border-radius: 0;
  }
  .doi-content .modal-fullscreen-lg-down .modal-body {
    overflow-y: auto;
  }
  .doi-content .modal-fullscreen-lg-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1199.98px) {
  .doi-content .modal-fullscreen-xl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .doi-content .modal-fullscreen-xl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .doi-content .modal-fullscreen-xl-down .modal-header {
    border-radius: 0;
  }
  .doi-content .modal-fullscreen-xl-down .modal-body {
    overflow-y: auto;
  }
  .doi-content .modal-fullscreen-xl-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1399.98px) {
  .doi-content .modal-fullscreen-xxl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .doi-content .modal-fullscreen-xxl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .doi-content .modal-fullscreen-xxl-down .modal-header {
    border-radius: 0;
  }
  .doi-content .modal-fullscreen-xxl-down .modal-body {
    overflow-y: auto;
  }
  .doi-content .modal-fullscreen-xxl-down .modal-footer {
    border-radius: 0;
  }
}
.doi-content .tooltip {
  position: absolute;
  z-index: 1080;
  display: block;
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.984375rem;
  word-wrap: break-word;
  opacity: 0;
}
.doi-content .tooltip.show {
  opacity: 0.9;
}
.doi-content .tooltip .tooltip-arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}
.doi-content .tooltip .tooltip-arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}
.doi-content .bs-tooltip-top, .doi-content .bs-tooltip-auto[data-popper-placement^=top] {
  padding: 0.4rem 0;
}
.doi-content .bs-tooltip-top .tooltip-arrow, .doi-content .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {
  bottom: 0;
}
.doi-content .bs-tooltip-top .tooltip-arrow::before, .doi-content .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
  top: -1px;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: #000;
}
.doi-content .bs-tooltip-end, .doi-content .bs-tooltip-auto[data-popper-placement^=right] {
  padding: 0 0.4rem;
}
.doi-content .bs-tooltip-end .tooltip-arrow, .doi-content .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.doi-content .bs-tooltip-end .tooltip-arrow::before, .doi-content .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
  right: -1px;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #000;
}
.doi-content .bs-tooltip-bottom, .doi-content .bs-tooltip-auto[data-popper-placement^=bottom] {
  padding: 0.4rem 0;
}
.doi-content .bs-tooltip-bottom .tooltip-arrow, .doi-content .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {
  top: 0;
}
.doi-content .bs-tooltip-bottom .tooltip-arrow::before, .doi-content .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
  bottom: -1px;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #000;
}
.doi-content .bs-tooltip-start, .doi-content .bs-tooltip-auto[data-popper-placement^=left] {
  padding: 0 0.4rem;
}
.doi-content .bs-tooltip-start .tooltip-arrow, .doi-content .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.doi-content .bs-tooltip-start .tooltip-arrow::before, .doi-content .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
  left: -1px;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #000;
}
.doi-content .tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.1875rem;
}
.doi-content .popover {
  position: absolute;
  top: 0;
  left: 0 /* rtl:ignore */;
  z-index: 1070;
  display: block;
  max-width: 276px;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.984375rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}
.doi-content .popover .popover-arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
}
.doi-content .popover .popover-arrow::before, .doi-content .popover .popover-arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}
.doi-content .bs-popover-top > .popover-arrow, .doi-content .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {
  bottom: calc(-0.5rem - 1px);
}
.doi-content .bs-popover-top > .popover-arrow::before, .doi-content .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {
  bottom: 0;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: rgba(0, 0, 0, 0.25);
}
.doi-content .bs-popover-top > .popover-arrow::after, .doi-content .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  bottom: 1px;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: #fff;
}
.doi-content .bs-popover-end > .popover-arrow, .doi-content .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {
  left: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
}
.doi-content .bs-popover-end > .popover-arrow::before, .doi-content .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {
  left: 0;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.doi-content .bs-popover-end > .popover-arrow::after, .doi-content .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  left: 1px;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: #fff;
}
.doi-content .bs-popover-bottom > .popover-arrow, .doi-content .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {
  top: calc(-0.5rem - 1px);
}
.doi-content .bs-popover-bottom > .popover-arrow::before, .doi-content .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {
  top: 0;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}
.doi-content .bs-popover-bottom > .popover-arrow::after, .doi-content .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  top: 1px;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: #fff;
}
.doi-content .bs-popover-bottom .popover-header::before, .doi-content .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -0.5rem;
  content: "";
  border-bottom: 1px solid #f0f0f0;
}
.doi-content .bs-popover-start > .popover-arrow, .doi-content .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {
  right: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
}
.doi-content .bs-popover-start > .popover-arrow::before, .doi-content .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {
  right: 0;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.doi-content .bs-popover-start > .popover-arrow::after, .doi-content .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  right: 1px;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: #fff;
}
.doi-content .popover-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 1.125rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.doi-content .popover-header:empty {
  display: none;
}
.doi-content .popover-body {
  padding: 1rem 1rem;
  color: #212121;
}
.doi-content .placeholder {
  display: inline-block;
  min-height: 1em;
  vertical-align: middle;
  cursor: wait;
  background-color: currentColor;
  opacity: 0.5;
}
.doi-content .placeholder.btn::before {
  display: inline-block;
  content: "";
}
.doi-content .placeholder-xs {
  min-height: 0.6em;
}
.doi-content .placeholder-sm {
  min-height: 0.8em;
}
.doi-content .placeholder-lg {
  min-height: 1.2em;
}
.doi-content .placeholder-glow .placeholder {
  -webkit-animation: placeholder-glow 2s ease-in-out infinite;
          animation: placeholder-glow 2s ease-in-out infinite;
}
@keyframes placeholder-glow {
  50% {
    opacity: 0.2;
  }
}
.doi-content .placeholder-wave {
  -webkit-mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
          mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
  -webkit-mask-size: 200% 100%;
          mask-size: 200% 100%;
  -webkit-animation: placeholder-wave 2s linear infinite;
          animation: placeholder-wave 2s linear infinite;
}
@keyframes placeholder-wave {
  100% {
    -webkit-mask-position: -200% 0%;
            mask-position: -200% 0%;
  }
}`)();
var clientConfig6 = defineClientConfig({
  enhance({ app, router }) {
    app.component("Badge", Badge);
    app.component("CodeGroup", CodeGroup);
    app.component("CodeGroupItem", CodeGroupItem);
    app.component("AutoLinkExternalIcon", () => {
      const ExternalLinkIcon2 = app.component("ExternalLinkIcon");
      if (ExternalLinkIcon2) {
        return h(ExternalLinkIcon2);
      }
      return null;
    });
    app.component("NavbarSearch", () => {
      const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
      if (SearchComponent) {
        return h(SearchComponent);
      }
      return null;
    });
    const scrollBehavior = router.options.scrollBehavior;
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();
      return scrollBehavior(...args);
    };
  },
  setup() {
    setupDarkMode();
    setupSidebarItems();
  }
});
var clientConfig7 = {
  enhance: ({ app }) => {
    app.component("ArrowRight", defineAsyncComponent(() => __vitePreload(() => import("./ArrowRight.76b0949a.js"), true ? ["assets/ArrowRight.76b0949a.js","assets/arrow-right.3745e7aa.js"] : void 0))), app.component("ArrowsList", defineAsyncComponent(() => __vitePreload(() => import("./ArrowsList.ebbfaf34.js"), true ? [] : void 0))), app.component("Card", defineAsyncComponent(() => __vitePreload(() => import("./Card.47589787.js"), true ? ["assets/Card.47589787.js","assets/arrow-right.3745e7aa.js"] : void 0))), app.component("Cards", defineAsyncComponent(() => __vitePreload(() => import("./Cards.dcdb97c8.js"), true ? [] : void 0))), app.component("CodeDemo", defineAsyncComponent(() => __vitePreload(() => import("./CodeDemo.aca60e63.js"), true ? [] : void 0))), app.component("ColorTile", defineAsyncComponent(() => __vitePreload(() => import("./ColorTile.d8ad1269.js"), true ? [] : void 0))), app.component("ColorTiles", defineAsyncComponent(() => __vitePreload(() => import("./ColorTiles.80a4d72c.js"), true ? [] : void 0))), app.component("Columns", defineAsyncComponent(() => __vitePreload(() => import("./Columns.529999c2.js"), true ? [] : void 0))), app.component("OrderedList", defineAsyncComponent(() => __vitePreload(() => import("./OrderedList.5a9d7e74.js"), true ? [] : void 0))), app.component("SubMenuCards", defineAsyncComponent(() => __vitePreload(() => import("./SubMenuCards.905137bf.js"), true ? [] : void 0))), app.component("TwoCards", defineAsyncComponent(() => __vitePreload(() => import("./TwoCards.af07fc3f.js"), true ? [] : void 0))), app.component("TypographyRow", defineAsyncComponent(() => __vitePreload(() => import("./TypographyRow.41ae6a79.js"), true ? [] : void 0)));
  }
};
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  clientConfig7
];
const pagesRoutes = [
  ["v-8daa1a0e", "/", { "title": "DOI Styleguide" }, ["/index.html", "/README.md"]],
  ["v-3ef8b1f8", "/accessibility.html", { "title": "Accessibility" }, ["/accessibility", "/accessibility.md"]],
  ["v-52062726", "/introduction.html", { "title": "Industry.gov.au" }, ["/introduction", "/introduction.md"]],
  ["v-7224785e", "/page-patterns.html", { "title": "Page Patterns" }, ["/page-patterns", "/page-patterns.md"]],
  ["v-953546a4", "/test.html", { "title": "Home" }, ["/test", "/test.md"]],
  ["v-1020f180", "/components/", { "title": "Components" }, ["/components/index.html", "/components/README.md"]],
  ["v-ec6a10f0", "/foundations/", { "title": "Foundations" }, ["/foundations/index.html", "/foundations/README.md"]],
  ["v-6eb03d17", "/foundations/colour-palette.html", { "title": "Foundations" }, ["/foundations/colour-palette", "/foundations/colour-palette.md"]],
  ["v-0ff3f3b6", "/foundations/cta-links.html", { "title": "Foundations" }, ["/foundations/cta-links", "/foundations/cta-links.md"]],
  ["v-77f48efc", "/foundations/typography.html", { "title": "Foundations" }, ["/foundations/typography", "/foundations/typography.md"]],
  ["v-3860ac4e", "/components/banners/biography.html", { "title": "Biography banner" }, ["/components/banners/biography", "/components/banners/biography.md"]],
  ["v-f4398dba", "/components/banners/homepage.html", { "title": "Homepage banner" }, ["/components/banners/homepage", "/components/banners/homepage.md"]],
  ["v-69b4c86c", "/components/banners/news-case-event.html", { "title": "News article, case study, event banner" }, ["/components/banners/news-case-event", "/components/banners/news-case-event.md"]],
  ["v-44aa7896", "/components/banners/publication.html", { "title": "Publication banner" }, ["/components/banners/publication", "/components/banners/publication.md"]],
  ["v-398d9b95", "/components/banners/standard-content-adc.html", { "title": "Standard content ADC banner" }, ["/components/banners/standard-content-adc", "/components/banners/standard-content-adc.md"]],
  ["v-15d89c88", "/components/banners/standard-content.html", { "title": "Standard content banner" }, ["/components/banners/standard-content", "/components/banners/standard-content.md"]],
  ["v-de7ecd86", "/components/cards/bio.html", { "title": "Bio card" }, ["/components/cards/bio", "/components/cards/bio.md"]],
  ["v-02b5e3eb", "/components/cards/event.html", { "title": "Event card and containers" }, ["/components/cards/event", "/components/cards/event.md"]],
  ["v-24dadf94", "/components/cards/filtered.html", { "title": "Filtered card and containers" }, ["/components/cards/filtered", "/components/cards/filtered.md"]],
  ["v-1686c20c", "/components/cards/news.html", { "title": "News card and containers" }, ["/components/cards/news", "/components/cards/news.md"]],
  ["v-7ff2de99", "/components/cards/publication.html", { "title": "Publication card and containers" }, ["/components/cards/publication", "/components/cards/publication.md"]],
  ["v-d049d46a", "/components/cards/request-for-quote.html", { "title": "Request for quote" }, ["/components/cards/request-for-quote", "/components/cards/request-for-quote.md"]],
  ["v-5d1bc6bc", "/components/filters/checkbox.html", { "title": "Checkbox filter" }, ["/components/filters/checkbox", "/components/filters/checkbox.md"]],
  ["v-1440f514", "/components/filters/dropdown.html", { "title": "Dropdown filter" }, ["/components/filters/dropdown", "/components/filters/dropdown.md"]],
  ["v-54a55072", "/components/filters/tabs.html", { "title": "Tabs filter" }, ["/components/filters/tabs", "/components/filters/tabs.md"]],
  ["v-43a6ffe8", "/components/filters/tags.html", { "title": "Tags filter" }, ["/components/filters/tags", "/components/filters/tags.md"]],
  ["v-0bf947dc", "/components/headers-footers/global-footer.html", { "title": "Global Footer" }, ["/components/headers-footers/global-footer", "/components/headers-footers/global-footer.md"]],
  ["v-4941c50e", "/components/headers-footers/header.html", { "title": "Header" }, ["/components/headers-footers/header", "/components/headers-footers/header.md"]],
  ["v-ebed8532", "/components/headers-footers/secondary-footer.html", { "title": "Secondary Footer" }, ["/components/headers-footers/secondary-footer", "/components/headers-footers/secondary-footer.md"]],
  ["v-3e01df16", "/components/information-components/alert.html", { "title": "Alert" }, ["/components/information-components/alert", "/components/information-components/alert.md"]],
  ["v-30861021", "/components/information-components/callout.html", { "title": "Callout" }, ["/components/information-components/callout", "/components/information-components/callout.md"]],
  ["v-0642af97", "/components/information-components/document-download.html", { "title": "Document download" }, ["/components/information-components/document-download", "/components/information-components/document-download.md"]],
  ["v-a2a1a9a4", "/components/information-components/filterable-table.html", { "title": "Filterable Table" }, ["/components/information-components/filterable-table", "/components/information-components/filterable-table.md"]],
  ["v-2ea63fc6", "/components/information-components/form.html", { "title": "Form" }, ["/components/information-components/form", "/components/information-components/form.md"]],
  ["v-3ba80226", "/components/information-components/media.html", { "title": "Media" }, ["/components/information-components/media", "/components/information-components/media.md"]],
  ["v-3c69c507", "/components/information-components/pagination.html", { "title": "Pagination" }, ["/components/information-components/pagination", "/components/information-components/pagination.md"]],
  ["v-14e01543", "/components/information-components/table.html", { "title": "Table" }, ["/components/information-components/table", "/components/information-components/table.md"]],
  ["v-5d423ac0", "/components/information-components/timeline.html", { "title": "Timeline" }, ["/components/information-components/timeline", "/components/information-components/timeline.md"]],
  ["v-5b11f538", "/components/navigation/breadcrumbs.html", { "title": "Breadcrumbs" }, ["/components/navigation/breadcrumbs", "/components/navigation/breadcrumbs.md"]],
  ["v-ca2bbd60", "/components/navigation/in-section-navigation.html", { "title": "In-section Navigation" }, ["/components/navigation/in-section-navigation", "/components/navigation/in-section-navigation.md"]],
  ["v-b5c0254c", "/components/navigation/mega-menu.html", { "title": "Mega Menu" }, ["/components/navigation/mega-menu", "/components/navigation/mega-menu.md"]],
  ["v-75635350", "/components/navigation/on-this-page-menu.html", { "title": "On This Page Menu" }, ["/components/navigation/on-this-page-menu", "/components/navigation/on-this-page-menu.md"]],
  ["v-6eb84da4", "/components/navigation/publication-section-divider.html", { "title": "Publication Section Divider" }, ["/components/navigation/publication-section-divider", "/components/navigation/publication-section-divider.md"]],
  ["v-d41deffe", "/components/navigation/tile-navigation.html", { "title": "Tile Navigation" }, ["/components/navigation/tile-navigation", "/components/navigation/tile-navigation.md"]],
  ["v-3706649a", "/404.html", { "title": "" }, ["/404"]]
];
var createRoutes = () => pagesRoutes.reduce((result, [name, path, meta, redirects]) => {
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
var historyCreator = createWebHistory;
var createVueRouter = () => {
  const router = createRouter({
    history: historyCreator(removeEndingSlash(siteData.value.base)),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION_NORMALIZED) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) == null ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
var COMPONENT_STATE_TYPE = "VuePress";
var setupDevtools = (app, globalComputed) => {
  setupDevtoolsPlugin({
    app,
    id: "org.vuejs.vuepress",
    label: "VuePress",
    packageName: "@vuepress/client",
    homepage: "https://v2.vuepress.vuejs.org",
    logo: "https://v2.vuepress.vuejs.org/images/hero.png",
    componentStateTypes: [COMPONENT_STATE_TYPE]
  }, (api) => {
    api.on.inspectComponent((payload) => {
      payload.instanceData.state.push(...Object.entries(globalComputed).map(([name, item]) => ({
        type: COMPONENT_STATE_TYPE,
        key: name,
        editable: false,
        value: item.value
      })));
    });
  });
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router) => {
  const routeLocale = computed(() => resolvers.resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = computed(() => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = computed(() => resolvers.resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = computed(() => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = computed(() => resolvers.resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = computed(() => resolvers.resolvePageLang(pageData.value));
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
var setupUpdateHead = () => {
  const route = useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  const headTags = ref([]);
  const loadHead = () => {
    head.value.forEach((item) => {
      const tag = queryHeadTag(item);
      if (tag) {
        headTags.value.push(tag);
      }
    });
  };
  const updateHead = () => {
    document.documentElement.lang = lang.value;
    headTags.value.forEach((item) => {
      if (item.parentNode === document.head) {
        document.head.removeChild(item);
      }
    });
    headTags.value.splice(0, headTags.value.length);
    head.value.forEach((item) => {
      const tag = createHeadTag(item);
      if (tag !== null) {
        document.head.appendChild(tag);
        headTags.value.push(tag);
      }
    });
  };
  provide(updateHeadSymbol, updateHead);
  onMounted(() => {
    loadHead();
    updateHead();
    watch(() => route.path, () => updateHead());
  });
};
var queryHeadTag = ([
  tagName,
  attrs,
  content = ""
]) => {
  const attrsSelector = Object.entries(attrs).map(([key, value]) => {
    if (isString$1(value)) {
      return `[${key}="${value}"]`;
    }
    if (value === true) {
      return `[${key}]`;
    }
    return "";
  }).join("");
  const selector2 = `head > ${tagName}${attrsSelector}`;
  const tags = Array.from(document.querySelectorAll(selector2));
  const matchedTag = tags.find((item) => item.innerText === content);
  return matchedTag || null;
};
var createHeadTag = ([
  tagName,
  attrs,
  content
]) => {
  if (!isString$1(tagName)) {
    return null;
  }
  const tag = document.createElement(tagName);
  if (isPlainObject(attrs)) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (isString$1(value)) {
        tag.setAttribute(key, value);
      } else if (value === true) {
        tag.setAttribute(key, "");
      }
    });
  }
  if (isString$1(content)) {
    tag.appendChild(document.createTextNode(content));
  }
  return tag;
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      return () => [
        h(RouterView),
        ...clientConfigs.flatMap(({ rootComponents = [] }) => rootComponents.map((component) => h(component)))
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  const globalComputed = setupGlobalComputed(app, router);
  {
    setupDevtools(app, globalComputed);
  }
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
{
  createVueApp().then(({ app, router }) => {
    router.isReady().then(() => {
      app.mount("#app");
    });
  });
}
export { useRouter as A, ref as B, ClientOnly as C, withDirectives as D, vShow as E, Fragment as F, useSidebarItems as G, onMounted as H, watch as I, renderSlot as J, onUnmounted as K, usePageData as L, mergeProps as M, isLinkHttp as N, isLinkMailto as O, isLinkTel as P, useSiteData as Q, removeLeadingSlash as R, removeEndingSlash as S, Transition as T, isString$1 as U, useNavLink as V, normalizeStyle as W, isPlainObject as X, withModifiers as Y, _export_sfc as _, createVNode as a, createBaseVNode as b, createElementBlock as c, createVueApp, createTextVNode as d, createStaticVNode as e, defineComponent as f, useThemeLocaleData as g, unref as h, usePageFrontmatter as i, computed as j, isArray as k, renderList as l, createCommentVNode as m, useSiteLocaleData as n, openBlock as o, useDarkMode as p, createBlock as q, resolveComponent as r, normalizeClass as s, toDisplayString as t, useRouteLocale as u, h as v, withCtx as w, withBase as x, toRefs as y, useRoute as z };

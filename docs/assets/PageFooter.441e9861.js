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
import { f as defineComponent, z as useRoute, y as toRefs, j as computed, r as resolveComponent, h as unref, o as openBlock, q as createBlock, w as withCtx, M as mergeProps, c as createElementBlock, J as renderSlot, d as createTextVNode, t as toDisplayString, m as createCommentVNode, N as isLinkHttp, O as isLinkMailto, P as isLinkTel, Q as useSiteData, _ as _export_sfc, u as useRouteLocale, n as useSiteLocaleData, g as useThemeLocaleData, p as useDarkMode, a as createVNode, v as h, x as withBase, C as ClientOnly, T as Transition, B as ref, I as watch, b as createBaseVNode, s as normalizeClass, D as withDirectives, E as vShow, F as Fragment, l as renderList, R as removeLeadingSlash, S as removeEndingSlash, A as useRouter, U as isString, V as useNavLink, e as createStaticVNode, H as onMounted, W as normalizeStyle, L as usePageData, i as usePageFrontmatter, G as useSidebarItems, X as isPlainObject } from "./app.1ff68f9f.js";
import { a as arrowRight } from "./arrow-right.3745e7aa.js";
const _hoisted_1$a = ["href", "rel", "target", "aria-label"];
const __default__ = defineComponent({
  inheritAttrs: false
});
const _sfc_main$d = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __name: "AutoLink",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const site = useSiteData();
    const { item } = toRefs(props);
    const hasHttpProtocol = computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = computed(() => isLinkMailto(item.value.link) || isLinkTel(item.value.link));
    const linkTarget = computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const isRouterLink = computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_AutoLinkExternalIcon = resolveComponent("AutoLinkExternalIcon");
      return unref(isRouterLink) ? (openBlock(), createBlock(_component_RouterLink, mergeProps({
        key: 0,
        class: { "router-link-active": unref(isActive) },
        to: unref(item).link,
        "aria-label": unref(linkAriaLabel)
      }, _ctx.$attrs), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "before"),
          createTextVNode(" " + toDisplayString(unref(item).text) + " ", 1),
          renderSlot(_ctx.$slots, "after")
        ]),
        _: 3
      }, 16, ["class", "to", "aria-label"])) : (openBlock(), createElementBlock("a", mergeProps({
        key: 1,
        class: "external-link",
        href: unref(item).link,
        rel: unref(linkRel),
        target: unref(linkTarget),
        "aria-label": unref(linkAriaLabel)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "before"),
        createTextVNode(" " + toDisplayString(unref(item).text) + " ", 1),
        unref(isBlankTarget) ? (openBlock(), createBlock(_component_AutoLinkExternalIcon, { key: 0 })) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "after")
      ], 16, _hoisted_1$a));
    };
  }
}));
var AutoLink = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "AutoLink.vue"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "NavbarBrand",
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = computed(() => themeLocale.value.home || routeLocale.value);
    const navbarBrandTitle = computed(() => siteLocale.value.title);
    const navbarBrandLogo = computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return h(ClientOnly, () => img);
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createBlock(_component_RouterLink, { to: unref(navbarBrandLink) }, {
        default: withCtx(() => [
          createVNode(NavbarBrandLogo)
        ]),
        _: 1
      }, 8, ["to"]);
    };
  }
});
var NavbarBrand = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "NavbarBrand.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "DropdownTransition",
  setup(__props) {
    const setHeight = (items) => {
      items.style.height = items.scrollHeight + "px";
    };
    const unsetHeight = (items) => {
      items.style.height = "";
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "dropdown",
        onEnter: setHeight,
        onAfterEnter: unsetHeight,
        onBeforeLeave: setHeight
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      });
    };
  }
});
var DropdownTransition = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "DropdownTransition.vue"]]);
const _hoisted_1$9 = ["aria-label"];
const _hoisted_2$8 = { class: "title" };
const _hoisted_3$7 = /* @__PURE__ */ createBaseVNode("span", { class: "arrow down" }, null, -1);
const _hoisted_4$5 = ["aria-label"];
const _hoisted_5$2 = { class: "title" };
const _hoisted_6$2 = { class: "navbar-dropdown" };
const _hoisted_7$2 = { class: "navbar-dropdown-subtitle" };
const _hoisted_8$2 = { key: 1 };
const _hoisted_9$2 = { class: "navbar-dropdown-subitem-wrapper" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "NavbarDropdown",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = toRefs(props);
    const dropdownAriaLabel = computed(() => item.value.ariaLabel || item.value.text);
    const open = ref(false);
    const route = useRoute();
    watch(() => route.path, () => {
      open.value = false;
    });
    const handleDropdown = (e) => {
      const isTriggerByTab = e.detail === 0;
      if (isTriggerByTab) {
        open.value = !open.value;
      } else {
        open.value = false;
      }
    };
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["navbar-dropdown-wrapper", { open: open.value }])
      }, [
        createBaseVNode("button", {
          class: "navbar-dropdown-title",
          type: "button",
          "aria-label": unref(dropdownAriaLabel),
          onClick: handleDropdown
        }, [
          createBaseVNode("span", _hoisted_2$8, toDisplayString(unref(item).text), 1),
          _hoisted_3$7
        ], 8, _hoisted_1$9),
        createBaseVNode("button", {
          class: "navbar-dropdown-title-mobile",
          type: "button",
          "aria-label": unref(dropdownAriaLabel),
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          createBaseVNode("span", _hoisted_5$2, toDisplayString(unref(item).text), 1),
          createBaseVNode("span", {
            class: normalizeClass(["arrow", open.value ? "down" : "right"])
          }, null, 2)
        ], 8, _hoisted_4$5),
        createVNode(DropdownTransition, null, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("ul", _hoisted_6$2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(item).children, (child) => {
                return openBlock(), createElementBlock("li", {
                  key: child.text,
                  class: "navbar-dropdown-item"
                }, [
                  child.children ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createBaseVNode("h4", _hoisted_7$2, [
                      child.link ? (openBlock(), createBlock(AutoLink, {
                        key: 0,
                        item: child,
                        onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && child.children.length === 0 && (open.value = false)
                      }, null, 8, ["item", "onFocusout"])) : (openBlock(), createElementBlock("span", _hoisted_8$2, toDisplayString(child.text), 1))
                    ]),
                    createBaseVNode("ul", _hoisted_9$2, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(child.children, (grandchild) => {
                        return openBlock(), createElementBlock("li", {
                          key: grandchild.link,
                          class: "navbar-dropdown-subitem"
                        }, [
                          createVNode(AutoLink, {
                            item: grandchild,
                            onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, unref(item).children) && (open.value = false)
                          }, null, 8, ["item", "onFocusout"])
                        ]);
                      }), 128))
                    ])
                  ], 64)) : (openBlock(), createBlock(AutoLink, {
                    key: 1,
                    item: child,
                    onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && (open.value = false)
                  }, null, 8, ["item", "onFocusout"]))
                ]);
              }), 128))
            ], 512), [
              [vShow, open.value]
            ])
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
var NavbarDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "NavbarDropdown.vue"]]);
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
const _hoisted_1$8 = {
  key: 0,
  class: "navbar-items"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "NavbarItems",
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return computed(() => {
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
      const repo = computed(() => themeLocale.value.repo);
      const repoType = computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return computed(() => {
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
      return computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _cache) => {
      return unref(navbarLinks).length ? (openBlock(), createElementBlock("nav", _hoisted_1$8, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(navbarLinks), (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.text,
            class: "navbar-item"
          }, [
            item.link ? (openBlock(), createBlock(AutoLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : (openBlock(), createBlock(NavbarDropdown, {
              key: 1,
              item
            }, null, 8, ["item"]))
          ]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var NavbarItems = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "NavbarItems.vue"]]);
const _hoisted_1$7 = ["title"];
const _hoisted_2$7 = {
  class: "icon",
  focusable: "false",
  viewBox: "0 0 32 32"
};
const _hoisted_3$6 = /* @__PURE__ */ createStaticVNode('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>', 9);
const _hoisted_12 = [
  _hoisted_3$6
];
const _hoisted_13 = {
  class: "icon",
  focusable: "false",
  viewBox: "0 0 32 32"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",
  fill: "currentColor"
}, null, -1);
const _hoisted_15 = [
  _hoisted_14
];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ToggleColorModeButton",
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const toggleColorMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "toggle-color-mode-button",
        title: unref(themeLocale).toggleColorMode,
        onClick: toggleColorMode
      }, [
        withDirectives((openBlock(), createElementBlock("svg", _hoisted_2$7, _hoisted_12, 512)), [
          [vShow, !unref(isDarkMode)]
        ]),
        withDirectives((openBlock(), createElementBlock("svg", _hoisted_13, _hoisted_15, 512)), [
          [vShow, unref(isDarkMode)]
        ])
      ], 8, _hoisted_1$7);
    };
  }
});
var ToggleColorModeButton = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "ToggleColorModeButton.vue"]]);
const _hoisted_1$6 = ["title"];
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createBaseVNode("span")
], -1);
const _hoisted_3$5 = [
  _hoisted_2$6
];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ToggleSidebarButton",
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "toggle-sidebar-button",
        title: unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle"))
      }, _hoisted_3$5, 8, _hoisted_1$6);
    };
  }
});
var ToggleSidebarButton = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "ToggleSidebarButton.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = ref(null);
    const navbarBrand = ref(null);
    const linksWrapperMaxWidth = ref(0);
    const linksWrapperStyle = computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    onMounted(() => {
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
    return (_ctx, _cache) => {
      const _component_NavbarSearch = resolveComponent("NavbarSearch");
      return openBlock(), createElementBlock("header", {
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, [
        createVNode(ToggleSidebarButton, {
          onToggle: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-sidebar"))
        }),
        createBaseVNode("span", {
          ref_key: "navbarBrand",
          ref: navbarBrand
        }, [
          createVNode(NavbarBrand)
        ], 512),
        createBaseVNode("div", {
          class: "navbar-items-wrapper",
          style: normalizeStyle(unref(linksWrapperStyle))
        }, [
          renderSlot(_ctx.$slots, "before"),
          createVNode(NavbarItems, { class: "can-hide" }),
          renderSlot(_ctx.$slots, "after"),
          unref(themeLocale).colorModeSwitch ? (openBlock(), createBlock(ToggleColorModeButton, { key: 0 })) : createCommentVNode("", true),
          createVNode(_component_NavbarSearch)
        ], 4)
      ], 512);
    };
  }
});
var Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "Navbar.vue"]]);
const _hoisted_1$5 = { class: "page-meta" };
const _hoisted_2$5 = {
  key: 0,
  class: "meta-item edit-link"
};
const _hoisted_3$4 = {
  key: 1,
  class: "meta-item last-updated"
};
const _hoisted_4$4 = { class: "meta-item-label" };
const _hoisted_5$1 = { class: "meta-item-info" };
const _hoisted_6$1 = {
  key: 2,
  class: "meta-item contributors"
};
const _hoisted_7$1 = { class: "meta-item-label" };
const _hoisted_8$1 = { class: "meta-item-info" };
const _hoisted_9$1 = ["title"];
const _hoisted_10 = /* @__PURE__ */ createTextVNode(", ");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PageMeta",
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
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
      return computed(() => {
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
      return computed(() => {
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
    return (_ctx, _cache) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      return openBlock(), createElementBlock("footer", _hoisted_1$5, [
        unref(editNavLink) ? (openBlock(), createElementBlock("div", _hoisted_2$5, [
          createVNode(AutoLink, {
            class: "meta-item-label",
            item: unref(editNavLink)
          }, null, 8, ["item"])
        ])) : createCommentVNode("", true),
        unref(lastUpdated) ? (openBlock(), createElementBlock("div", _hoisted_3$4, [
          createBaseVNode("span", _hoisted_4$4, toDisplayString(unref(themeLocale).lastUpdatedText) + ": ", 1),
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createBaseVNode("span", _hoisted_5$1, toDisplayString(unref(lastUpdated)), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        unref(contributors) && unref(contributors).length ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
          createBaseVNode("span", _hoisted_7$1, toDisplayString(unref(themeLocale).contributorsText) + ": ", 1),
          createBaseVNode("span", _hoisted_8$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(contributors), (contributor, index) => {
              return openBlock(), createElementBlock(Fragment, { key: index }, [
                createBaseVNode("span", {
                  class: "contributor",
                  title: `email: ${contributor.email}`
                }, toDisplayString(contributor.name), 9, _hoisted_9$1),
                index !== unref(contributors).length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  _hoisted_10
                ], 64)) : createCommentVNode("", true)
              ], 64);
            }), 128))
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var PageMeta = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "PageMeta.vue"]]);
const _hoisted_1$4 = {
  key: 0,
  class: "page-nav"
};
const _hoisted_2$4 = { class: "inner" };
const _hoisted_3$3 = {
  key: 0,
  class: "prev"
};
const _hoisted_4$3 = {
  key: 1,
  class: "next"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PageNav",
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
      const index = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index !== -1) {
        const targetItem = sidebarItems2[index + offset];
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
    const route = useRoute();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _cache) => {
      return unref(prevNavLink) || unref(nextNavLink) ? (openBlock(), createElementBlock("nav", _hoisted_1$4, [
        createBaseVNode("p", _hoisted_2$4, [
          unref(prevNavLink) ? (openBlock(), createElementBlock("span", _hoisted_3$3, [
            createVNode(AutoLink, { item: unref(prevNavLink) }, null, 8, ["item"])
          ])) : createCommentVNode("", true),
          unref(nextNavLink) ? (openBlock(), createElementBlock("span", _hoisted_4$3, [
            createVNode(AutoLink, { item: unref(nextNavLink) }, null, 8, ["item"])
          ])) : createCommentVNode("", true)
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
var PageNav = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "PageNav.vue"]]);
const _hoisted_1$3 = { class: "page" };
const _hoisted_2$3 = { class: "theme-default-content" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Page",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("main", _hoisted_1$3, [
        renderSlot(_ctx.$slots, "top"),
        createBaseVNode("div", _hoisted_2$3, [
          renderSlot(_ctx.$slots, "content-top"),
          createVNode(_component_Content),
          renderSlot(_ctx.$slots, "content-bottom")
        ]),
        createVNode(PageMeta),
        createVNode(PageNav),
        renderSlot(_ctx.$slots, "bottom")
      ]);
    };
  }
});
var Page = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "Page.vue"]]);
const _hoisted_1$2 = { class: "sidebar" };
const _hoisted_2$2 = {
  key: 0,
  class: "sidebar-items"
};
const _hoisted_3$2 = { class: "subtitle" };
const _hoisted_4$2 = { class: "navbar-dropdown-subitem-wrapper" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SidebarSubMenu",
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return computed(() => {
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
      const repo = computed(() => themeLocale.value.repo);
      const repoType = computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return computed(() => {
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
      return computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    const route = useRoute();
    const site = useSiteData();
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
      if (!isRouterLink(child)) {
        return false;
      }
      if (child.activeMatch) {
        return new RegExp(child.activeMatch).test(route.path);
      }
      return isActiveInSubpath(child);
    };
    const activeItem = computed(() => {
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", _hoisted_1$2, [
        unref(activeItem) ? (openBlock(), createElementBlock("ul", _hoisted_2$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(activeItem).children, (child) => {
            return openBlock(), createElementBlock("li", {
              key: child.text,
              class: "navbar-dropdown-item"
            }, [
              child.children ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createBaseVNode("div", _hoisted_3$2, [
                  createBaseVNode("span", null, toDisplayString(child.text), 1)
                ]),
                createBaseVNode("ul", _hoisted_4$2, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(child.children, (grandchild) => {
                    return openBlock(), createElementBlock("li", {
                      key: grandchild.link,
                      class: "navbar-dropdown-subitem"
                    }, [
                      createVNode(AutoLink, { item: grandchild }, null, 8, ["item"])
                    ]);
                  }), 128))
                ])
              ], 64)) : (openBlock(), createBlock(AutoLink, {
                key: 1,
                item: child
              }, null, 8, ["item"]))
            ]);
          }), 128))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var SidebarSubMenu = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "SidebarSubMenu.vue"]]);
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "c-page-header" };
const _hoisted_2$1 = { class: "container-fluid" };
const _hoisted_3$1 = { class: "content" };
const _hoisted_4$1 = {
  key: 0,
  class: "lead-text"
};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("div", _hoisted_3$1, [
        createBaseVNode("h1", null, toDisplayString(_ctx.$frontmatter.title), 1),
        _ctx.$frontmatter.description ? (openBlock(), createElementBlock("p", _hoisted_4$1, toDisplayString(_ctx.$frontmatter.description), 1)) : createCommentVNode("", true)
      ])
    ])
  ]);
}
var PageHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "PageHeader.vue"]]);
const _sfc_main = {
  data() {
    return {
      arrowRight
    };
  }
};
const _hoisted_1 = { class: "c-page-footer container-fluid" };
const _hoisted_2 = { class: "row" };
const _hoisted_3 = { class: "col-12 col-md-6 col-lg-8" };
const _hoisted_4 = { class: "footer-wrap" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h2", null, "Feedback?", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", { class: "lead-text" }, "We welcome all feedback, designs, or ideas in order to produce the best possible experience for our users. If you\u2019re interested in contributing, submit your ideas to the team.", -1);
const _hoisted_7 = {
  href: "#",
  class: "d-flex align-items-center"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", { class: "me-1" }, "Contact the design system team", -1);
const _hoisted_9 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("footer", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          _hoisted_5,
          _hoisted_6,
          createBaseVNode("a", _hoisted_7, [
            _hoisted_8,
            createBaseVNode("div", {
              class: "d-flex btn-arrow",
              innerHTML: $data.arrowRight
            }, null, 8, _hoisted_9)
          ])
        ])
      ])
    ])
  ]);
}
var PageFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "PageFooter.vue"]]);
export { AutoLink as A, DropdownTransition as D, NavbarItems as N, PageFooter as P, SidebarSubMenu as S, Navbar as a, PageHeader as b, Page as c };

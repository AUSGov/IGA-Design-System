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
import { _ as _export_sfc, d as resolveComponent, o as openBlock, c as createElementBlock, e as createVNode, f as defineComponent, p as usePageFrontmatter, h as computed, q as isArray, i as unref, F as Fragment, r as renderList, a as createBaseVNode, t as toDisplayString, b as createCommentVNode, s as useSiteLocaleData, v as useDarkMode, x as createBlock, y as normalizeClass, z as _sfc_main$a, A as h, B as withBase, C as ClientOnly, D as toRefs, g as useRoute, E as useRouter, G as isActiveSidebarItem, H as ref, k as withCtx, I as withDirectives, J as vShow, K as _sfc_main$b, L as useSidebarItems, M as _sfc_main$c, N as renderSlot, O as isLinkHttp, P as isLinkMailto, Q as isLinkTel, m as useRouteLocale, u as useThemeLocaleData, R as resolveRepoType, S as isString, T as useNavLink, U as useSiteData, V as onMounted, W as onUnmounted, X as _sfc_main$d, Y as PageHeader, Z as _sfc_main$e, $ as Transition, a0 as PageFooter, a1 as usePageData } from "./app.26042352.js";
const _sfc_main$9 = {};
const _hoisted_1$9 = { class: "theme-default-content custom" };
function _sfc_render(_ctx, _cache) {
  const _component_Content = resolveComponent("Content");
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    createVNode(_component_Content)
  ]);
}
var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render]]);
const _hoisted_1$8 = {
  key: 0,
  class: "features"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _cache) => {
      return unref(features).length ? (openBlock(), createElementBlock("div", _hoisted_1$8, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(features), (feature) => {
          return openBlock(), createElementBlock("div", {
            key: feature.title,
            class: "feature"
          }, [
            createBaseVNode("h2", null, toDisplayString(feature.title), 1),
            createBaseVNode("p", null, toDisplayString(feature.details), 1)
          ]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$7 = ["innerHTML"];
const _hoisted_2$4 = ["textContent"];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = computed(() => frontmatter.value.footer);
    const footerHtml = computed(() => frontmatter.value.footerHtml);
    return (_ctx, _cache) => {
      return unref(footer) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        unref(footerHtml) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "footer",
          innerHTML: unref(footer)
        }, null, 8, _hoisted_1$7)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: "footer",
          textContent: toDisplayString(unref(footer))
        }, null, 8, _hoisted_2$4))
      ], 64)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$6 = { class: "hero" };
const _hoisted_2$3 = {
  key: 0,
  id: "main-title"
};
const _hoisted_3$2 = {
  key: 1,
  class: "description"
};
const _hoisted_4$2 = {
  key: 2,
  class: "actions"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroText = computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = computed(() => {
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
      const img = h("img", {
        src: withBase(heroImage.value),
        alt: heroAlt.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return h(ClientOnly, () => img);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", _hoisted_1$6, [
        createVNode(HomeHeroImage),
        unref(heroText) ? (openBlock(), createElementBlock("h1", _hoisted_2$3, toDisplayString(unref(heroText)), 1)) : createCommentVNode("", true),
        unref(tagline) ? (openBlock(), createElementBlock("p", _hoisted_3$2, toDisplayString(unref(tagline)), 1)) : createCommentVNode("", true),
        unref(actions).length ? (openBlock(), createElementBlock("p", _hoisted_4$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(actions), (action) => {
            return openBlock(), createBlock(_sfc_main$a, {
              key: action.text,
              class: normalizeClass(["action-button", [action.type]]),
              item: action
            }, null, 8, ["class", "item"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$5 = { class: "home" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1$5, [
        createVNode(_sfc_main$6),
        createVNode(_sfc_main$8),
        createVNode(HomeContent),
        createVNode(_sfc_main$7)
      ]);
    };
  }
});
const _hoisted_1$4 = { class: "sidebar-item-children" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
    const { item, depth } = toRefs(props);
    const route = useRoute();
    const router = useRouter();
    const isActive = computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpen = ref(true);
    const onClick = ref(void 0);
    if (item.value.collapsible) {
      isOpen.value = isActive.value;
      onClick.value = () => {
        isOpen.value = !isOpen.value;
      };
      router.afterEach(() => {
        isOpen.value = isActive.value;
      });
    }
    return (_ctx, _cache) => {
      var _a;
      const _component_SidebarItem = resolveComponent("SidebarItem", true);
      return openBlock(), createElementBlock("li", null, [
        unref(item).link ? (openBlock(), createBlock(_sfc_main$a, {
          key: 0,
          class: normalizeClass(unref(itemClass)),
          item: unref(item)
        }, null, 8, ["class", "item"])) : createCommentVNode("", true),
        ((_a = unref(item).children) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_sfc_main$b, { key: 1 }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("ul", _hoisted_1$4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(item).children, (child) => {
                return openBlock(), createBlock(_component_SidebarItem, {
                  key: `${unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: unref(depth) + 1
                }, null, 8, ["item", "depth"]);
              }), 128))
            ], 512), [
              [vShow, isOpen.value]
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$3 = {
  key: 0,
  class: "sidebar-items"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const sidebarItems = useSidebarItems();
    return (_ctx, _cache) => {
      return unref(sidebarItems).length ? (openBlock(), createElementBlock("ul", _hoisted_1$3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sidebarItems), (item) => {
          return openBlock(), createBlock(_sfc_main$4, {
            key: item.link || item.text,
            item
          }, null, 8, ["item"]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$2 = { class: "sidebar" };
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("div", { class: "subtitle" }, "On This Page", -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", _hoisted_1$2, [
        _hoisted_2$2,
        createVNode(_sfc_main$c),
        renderSlot(_ctx.$slots, "top"),
        createVNode(_sfc_main$3),
        renderSlot(_ctx.$slots, "bottom")
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "sidebar" };
const _hoisted_2$1 = {
  key: 0,
  class: "sidebar-items"
};
const _hoisted_3$1 = { class: "navbar-dropdown-subtitle" };
const _hoisted_4$1 = { key: 1 };
const _hoisted_5$1 = { class: "navbar-dropdown-subitem-wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("aside", _hoisted_1$1, [
        unref(activeItem) ? (openBlock(), createElementBlock("ul", _hoisted_2$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(activeItem).children, (child) => {
            return openBlock(), createElementBlock("li", {
              key: child.text,
              class: "navbar-dropdown-item"
            }, [
              child.children ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createBaseVNode("h4", _hoisted_3$1, [
                  child.link ? (openBlock(), createBlock(_sfc_main$a, {
                    key: 0,
                    item: child
                  }, null, 8, ["item"])) : (openBlock(), createElementBlock("span", _hoisted_4$1, toDisplayString(child.text), 1))
                ]),
                createBaseVNode("ul", _hoisted_5$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(child.children, (grandchild) => {
                    return openBlock(), createElementBlock("li", {
                      key: grandchild.link,
                      class: "navbar-dropdown-subitem"
                    }, [
                      createVNode(_sfc_main$a, { item: grandchild }, null, 8, ["item"])
                    ]);
                  }), 128))
                ])
              ], 64)) : (openBlock(), createBlock(_sfc_main$a, {
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
const _hoisted_1 = { class: "theme-container" };
const _hoisted_2 = { class: "content-container" };
const _hoisted_3 = { class: "row" };
const _hoisted_4 = { class: "col-12 col-sm-4 col-md-3 col-lg-2" };
const _hoisted_5 = { id: "sidebar-left" };
const _hoisted_6 = { class: "col-12 col-sm-4 col-md-6 col-lg-8" };
const _hoisted_7 = { class: "col-12 col-sm-4 col-md-3 col-lg-2" };
const _hoisted_8 = { id: "sidebar-right" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    onMounted(() => {
      const router = useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "navbar", {}, () => [
          createVNode(_sfc_main$d)
        ]),
        createBaseVNode("div", _hoisted_2, [
          _ctx.$frontmatter.pageHeader ? (openBlock(), createBlock(PageHeader, { key: 0 })) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_sfc_main$1)
              ])
            ]),
            createBaseVNode("div", _hoisted_6, [
              unref(frontmatter).home ? (openBlock(), createBlock(_sfc_main$5, { key: 0 })) : (openBlock(), createBlock(Transition, {
                key: 1,
                name: "fade-slide-y",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(_sfc_main$e, {
                    key: unref(page).path
                  }))
                ]),
                _: 1
              }))
            ]),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createVNode(_sfc_main$2)
              ])
            ])
          ])
        ]),
        createVNode(PageFooter)
      ]);
    };
  }
});
export { _sfc_main as default };

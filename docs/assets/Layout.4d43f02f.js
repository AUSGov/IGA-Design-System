import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, f as defineComponent, i as usePageFrontmatter, j as computed, k as isArray, h as unref, F as Fragment, l as renderList, b as createBaseVNode, t as toDisplayString, m as createCommentVNode, d as createTextVNode, n as useSiteLocaleData, p as useDarkMode, q as createBlock, s as normalizeClass, A as AutoLink, v as h, x as withBase, C as ClientOnly, y as toRefs, z as useRoute, B as useRouter, D as ref, w as withCtx, E as withDirectives, G as vShow, H as DropdownTransition, I as useSidebarItems, J as onMounted, K as watch, N as NavbarItems, L as renderSlot, g as useThemeLocaleData, M as onUnmounted, O as Navbar, S as SidebarSubMenu, P as Page, T as Transition, Q as PageFooter, R as usePageData, U as PageHeader } from "./app.a42ce5a5.js";
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
const _sfc_main$8 = {};
const _hoisted_1$8 = { class: "theme-default-content" };
function _sfc_render(_ctx, _cache) {
  const _component_Content = resolveComponent("Content");
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createVNode(_component_Content)
  ]);
}
var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render], ["__file", "HomeContent.vue"]]);
const _hoisted_1$7 = {
  key: 0,
  class: "features"
};
const _hoisted_2$6 = /* @__PURE__ */ createTextVNode();
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "HomeFeatures",
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _cache) => {
      return unref(features).length ? (openBlock(), createElementBlock("div", _hoisted_1$7, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(features), (feature) => {
          return openBlock(), createElementBlock("div", {
            key: feature.title,
            class: "feature"
          }, [
            createBaseVNode("h2", null, toDisplayString(feature.title), 1),
            _hoisted_2$6,
            createBaseVNode("p", null, toDisplayString(feature.details), 1)
          ]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var HomeFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "HomeFeatures.vue"]]);
const _hoisted_1$6 = ["innerHTML"];
const _hoisted_2$5 = ["textContent"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HomeFooter",
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
        }, null, 8, _hoisted_1$6)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: "footer",
          textContent: toDisplayString(unref(footer))
        }, null, 8, _hoisted_2$5))
      ], 64)) : createCommentVNode("", true);
    };
  }
});
var HomeFooter = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "HomeFooter.vue"]]);
const _hoisted_1$5 = { class: "hero" };
const _hoisted_2$4 = /* @__PURE__ */ createTextVNode();
const _hoisted_3$3 = {
  key: 0,
  id: "main-title"
};
const _hoisted_4$3 = /* @__PURE__ */ createTextVNode();
const _hoisted_5$2 = {
  key: 1,
  class: "description"
};
const _hoisted_6$2 = /* @__PURE__ */ createTextVNode();
const _hoisted_7$1 = {
  key: 2,
  class: "actions"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HomeHero",
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
      return openBlock(), createElementBlock("header", _hoisted_1$5, [
        createVNode(HomeHeroImage),
        _hoisted_2$4,
        unref(heroText) ? (openBlock(), createElementBlock("h1", _hoisted_3$3, toDisplayString(unref(heroText)), 1)) : createCommentVNode("", true),
        _hoisted_4$3,
        unref(tagline) ? (openBlock(), createElementBlock("p", _hoisted_5$2, toDisplayString(unref(tagline)), 1)) : createCommentVNode("", true),
        _hoisted_6$2,
        unref(actions).length ? (openBlock(), createElementBlock("p", _hoisted_7$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(actions), (action) => {
            return openBlock(), createBlock(AutoLink, {
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
var HomeHero = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "HomeHero.vue"]]);
const _hoisted_1$4 = { class: "home" };
const _hoisted_2$3 = /* @__PURE__ */ createTextVNode();
const _hoisted_3$2 = /* @__PURE__ */ createTextVNode();
const _hoisted_4$2 = /* @__PURE__ */ createTextVNode();
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Home",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1$4, [
        createVNode(HomeHero),
        _hoisted_2$3,
        createVNode(HomeFeatures),
        _hoisted_3$2,
        createVNode(HomeContent),
        _hoisted_4$2,
        createVNode(HomeFooter)
      ]);
    };
  }
});
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "Home.vue"]]);
const _hoisted_1$3 = /* @__PURE__ */ createTextVNode();
const _hoisted_2$2 = { class: "sidebar-item-children" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItem",
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
        unref(item).link ? (openBlock(), createBlock(AutoLink, {
          key: 0,
          class: normalizeClass(unref(itemClass)),
          item: unref(item)
        }, null, 8, ["class", "item"])) : createCommentVNode("", true),
        _hoisted_1$3,
        ((_a = unref(item).children) == null ? void 0 : _a.length) ? (openBlock(), createBlock(DropdownTransition, { key: 1 }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("ul", _hoisted_2$2, [
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
var SidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "SidebarItem.vue"]]);
const _hoisted_1$2 = {
  key: 0,
  class: "sidebar-items"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItems",
  setup(__props) {
    const route = useRoute();
    const sidebarItems = useSidebarItems();
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        const sidebar = document.querySelector(".sidebar");
        if (!sidebar)
          return;
        const activeSidebarItem = document.querySelector(`.sidebar a.sidebar-item[href="${route.path}${hash}"]`);
        if (!activeSidebarItem)
          return;
        const { top: sidebarTop, height: sidebarHeight } = sidebar.getBoundingClientRect();
        const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
        if (activeSidebarItemTop < sidebarTop) {
          activeSidebarItem.scrollIntoView(true);
        } else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) {
          activeSidebarItem.scrollIntoView(false);
        }
      });
    });
    return (_ctx, _cache) => {
      return unref(sidebarItems).length ? (openBlock(), createElementBlock("ul", _hoisted_1$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sidebarItems), (item) => {
          return openBlock(), createBlock(SidebarItem, {
            key: item.link || item.text,
            item
          }, null, 8, ["item"]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var SidebarItems = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "SidebarItems.vue"]]);
const _hoisted_1$1 = { class: "sidebar" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "subtitle" }, "On This Page", -1);
const _hoisted_3$1 = /* @__PURE__ */ createTextVNode();
const _hoisted_4$1 = /* @__PURE__ */ createTextVNode();
const _hoisted_5$1 = /* @__PURE__ */ createTextVNode();
const _hoisted_6$1 = /* @__PURE__ */ createTextVNode();
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SidebarPageSections",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", _hoisted_1$1, [
        _hoisted_2$1,
        _hoisted_3$1,
        createVNode(NavbarItems),
        _hoisted_4$1,
        renderSlot(_ctx.$slots, "top"),
        _hoisted_5$1,
        createVNode(SidebarItems),
        _hoisted_6$1,
        renderSlot(_ctx.$slots, "bottom")
      ]);
    };
  }
});
var SidebarPageSections = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "SidebarPageSections.vue"]]);
const _hoisted_1 = { class: "theme-container" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode();
const _hoisted_3 = { class: "content-container" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode();
const _hoisted_5 = { class: "container-fluid" };
const _hoisted_6 = { class: "row" };
const _hoisted_7 = { class: "col-12 col-sm-4 col-md-3 col-lg-2" };
const _hoisted_8 = { id: "sidebar-left" };
const _hoisted_9 = /* @__PURE__ */ createTextVNode();
const _hoisted_10 = { class: "col-12 col-sm-4 col-md-6 col-lg-8" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode();
const _hoisted_12 = { class: "col-12 col-sm-4 col-md-3 col-lg-2" };
const _hoisted_13 = { id: "sidebar-right" };
const _hoisted_14 = /* @__PURE__ */ createTextVNode();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Layout",
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
          createVNode(Navbar)
        ]),
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          _ctx.$frontmatter.pageHeader ? (openBlock(), createBlock(PageHeader, { key: 0 })) : createCommentVNode("", true),
          _hoisted_4,
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createVNode(SidebarSubMenu)
                ])
              ]),
              _hoisted_9,
              createBaseVNode("div", _hoisted_10, [
                unref(frontmatter).home ? (openBlock(), createBlock(Home, { key: 0 })) : (openBlock(), createBlock(Transition, {
                  key: 1,
                  name: "fade-slide-y",
                  mode: "out-in"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Page, {
                      key: unref(page).path
                    }))
                  ]),
                  _: 1
                }))
              ]),
              _hoisted_11,
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("div", _hoisted_13, [
                  createVNode(SidebarPageSections)
                ])
              ])
            ])
          ])
        ]),
        _hoisted_14,
        createVNode(PageFooter)
      ]);
    };
  }
});
var Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Layout.vue"]]);
export { Layout as default };

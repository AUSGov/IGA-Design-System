import { _ as _export_sfc, d as resolveComponent, o as openBlock, c as createElementBlock, g as createVNode, l as defineComponent, x as usePageFrontmatter, p as computed, y as isArray, q as unref, F as Fragment, r as renderList, b as createBaseVNode, t as toDisplayString, e as createCommentVNode, z as useSiteLocaleData, A as useDarkMode, f as createBlock, n as normalizeClass, B as _sfc_main$9, C as h, D as withBase, E as ClientOnly, G as toRefs, m as useRoute, H as useRouter, I as isActiveSidebarItem, J as ref, w as withCtx, K as withDirectives, L as vShow, M as _sfc_main$a, N as useSidebarItems, O as _sfc_main$b, h as renderSlot, u as useThemeLocaleData, P as onMounted, Q as onUnmounted, R as _sfc_main$c, S as PageHeader, T as _sfc_main$d, U as _sfc_main$e, V as Transition, W as PageFooter, X as usePageData } from "./app.f4761922.js";
const _sfc_main$8 = {};
const _hoisted_1$8 = { class: "theme-default-content custom" };
function _sfc_render(_ctx, _cache) {
  const _component_Content = resolveComponent("Content");
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createVNode(_component_Content)
  ]);
}
var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render]]);
const _hoisted_1$7 = {
  key: 0,
  class: "features"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
            createBaseVNode("p", null, toDisplayString(feature.details), 1)
          ]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$6 = ["innerHTML"];
const _hoisted_2$3 = ["textContent"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
        }, null, 8, _hoisted_2$3))
      ], 64)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$5 = { class: "hero" };
const _hoisted_2$2 = {
  key: 0,
  id: "main-title"
};
const _hoisted_3$1 = {
  key: 1,
  class: "description"
};
const _hoisted_4$1 = {
  key: 2,
  class: "actions"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
        unref(heroText) ? (openBlock(), createElementBlock("h1", _hoisted_2$2, toDisplayString(unref(heroText)), 1)) : createCommentVNode("", true),
        unref(tagline) ? (openBlock(), createElementBlock("p", _hoisted_3$1, toDisplayString(unref(tagline)), 1)) : createCommentVNode("", true),
        unref(actions).length ? (openBlock(), createElementBlock("p", _hoisted_4$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(actions), (action) => {
            return openBlock(), createBlock(_sfc_main$9, {
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
const _hoisted_1$4 = { class: "home" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1$4, [
        createVNode(_sfc_main$5),
        createVNode(_sfc_main$7),
        createVNode(HomeContent),
        createVNode(_sfc_main$6)
      ]);
    };
  }
});
const _hoisted_1$3 = { class: "sidebar-item-children" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
        unref(item).link ? (openBlock(), createBlock(_sfc_main$9, {
          key: 0,
          class: normalizeClass(unref(itemClass)),
          item: unref(item)
        }, null, 8, ["class", "item"])) : createCommentVNode("", true),
        ((_a = unref(item).children) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_sfc_main$a, { key: 1 }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("ul", _hoisted_1$3, [
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
const _hoisted_1$2 = {
  key: 0,
  class: "sidebar-items"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const sidebarItems = useSidebarItems();
    return (_ctx, _cache) => {
      return unref(sidebarItems).length ? (openBlock(), createElementBlock("ul", _hoisted_1$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sidebarItems), (item) => {
          return openBlock(), createBlock(_sfc_main$3, {
            key: item.link || item.text,
            item
          }, null, 8, ["item"]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$1 = { class: "sidebar" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "subtitle" }, "On This Page", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", _hoisted_1$1, [
        _hoisted_2$1,
        createVNode(_sfc_main$b),
        renderSlot(_ctx.$slots, "top"),
        createVNode(_sfc_main$2),
        renderSlot(_ctx.$slots, "bottom")
      ]);
    };
  }
});
const _hoisted_1 = { class: "theme-container" };
const _hoisted_2 = { class: "content-container" };
const _hoisted_3 = { class: "container-fluid" };
const _hoisted_4 = { class: "row" };
const _hoisted_5 = { class: "col-12 col-sm-4 col-md-3 col-lg-2" };
const _hoisted_6 = { id: "sidebar-left" };
const _hoisted_7 = { class: "col-12 col-sm-4 col-md-6 col-lg-8" };
const _hoisted_8 = { class: "col-12 col-sm-4 col-md-3 col-lg-2" };
const _hoisted_9 = { id: "sidebar-right" };
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
          createVNode(_sfc_main$c)
        ]),
        createBaseVNode("div", _hoisted_2, [
          _ctx.$frontmatter.pageHeader ? (openBlock(), createBlock(PageHeader, { key: 0 })) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createVNode(_sfc_main$d)
                ])
              ]),
              createBaseVNode("div", _hoisted_7, [
                unref(frontmatter).home ? (openBlock(), createBlock(_sfc_main$4, { key: 0 })) : (openBlock(), createBlock(Transition, {
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
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  createVNode(_sfc_main$1)
                ])
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

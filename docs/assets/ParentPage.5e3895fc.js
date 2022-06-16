import { _ as _export_sfc, f as defineComponent, i as usePageFrontmatter, g as useThemeLocaleData, z as useRoute, j as computed, G as useSidebarItems, B as ref, H as onMounted, A as useRouter, K as onUnmounted, o as openBlock, c as createElementBlock, J as renderSlot, a as createVNode, b as createBaseVNode, q as createBlock, m as createCommentVNode, w as withCtx, T as Transition, h as unref, L as usePageData } from "./app.1ff68f9f.js";
import { a as Navbar, S as SidebarSubMenu, P as PageFooter, b as PageHeader, c as Page } from "./PageFooter.441e9861.js";
import "./arrow-right.3745e7aa.js";
const _hoisted_1 = { class: "theme-container" };
const _hoisted_2 = { class: "content-container" };
const _hoisted_3 = { class: "row" };
const _hoisted_4 = { class: "col-12 col-sm-4 col-md-3 col-lg-2" };
const _hoisted_5 = { id: "sidebar-left" };
const _hoisted_6 = { class: "col-12 col-md-6 col-lg-8" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "d-none d-md-block col-md-3 col-lg-2" }, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ParentPage",
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const route = useRoute();
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
    computed(() => {
      for (const item of themeLocale.value.navbar) {
        if (item.children && isActive(item)) {
          return item;
        }
      }
      return null;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "navbar", {}, () => [
          createVNode(Navbar)
        ]),
        createBaseVNode("div", _hoisted_2, [
          _ctx.$frontmatter.pageHeader ? (openBlock(), createBlock(PageHeader, { key: 0 })) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(SidebarSubMenu)
              ])
            ]),
            createBaseVNode("div", _hoisted_6, [
              createVNode(Transition, {
                name: "fade-slide-y",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Page, {
                    key: unref(page).path
                  }))
                ]),
                _: 1
              })
            ]),
            _hoisted_7
          ])
        ]),
        createVNode(PageFooter)
      ]);
    };
  }
});
var ParentPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "ParentPage.vue"]]);
export { ParentPage as default };

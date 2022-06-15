import { l as defineComponent, u as useThemeLocaleData, m as useRoute, p as computed, d as resolveComponent, q as unref, o as openBlock, c as createElementBlock, F as Fragment, r as renderList, e as createCommentVNode, b as createBaseVNode, t as toDisplayString, g as createVNode } from "./app.f4761922.js";
const _hoisted_1 = {
  key: 0,
  class: "c-sub-menu-cards"
};
const _hoisted_2 = { class: "mb-12" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const route = useRoute();
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
    console.log("children", themeLocale);
    const subMenu = computed(() => {
      const parentMenu = themeLocale.value.navbar.find((item) => item.children && isActive(item));
      if (!parentMenu) {
        return null;
      }
      let result = [];
      for (const child of parentMenu.children) {
        if (!child.children || !child.children.length) {
          continue;
        }
        let processedChildren = child.children.map((item) => ({
          title: item.text,
          linkUrl: item.link,
          linkText: "Link"
        }));
        result.push({
          title: child.text,
          children: processedChildren
        });
      }
      return result;
    });
    return (_ctx, _cache) => {
      const _component_Cards = resolveComponent("Cards");
      return unref(subMenu) ? (openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(subMenu), (menu) => {
          return openBlock(), createElementBlock("div", _hoisted_2, [
            createBaseVNode("h2", null, toDisplayString(menu.title), 1),
            createVNode(_component_Cards, {
              contents: menu.children,
              compact: true
            }, null, 8, ["contents"])
          ]);
        }), 256))
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };

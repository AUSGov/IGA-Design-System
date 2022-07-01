import { _ as _export_sfc, f as defineComponent, g as useThemeLocaleData, z as useRoute, j as computed, r as resolveComponent, h as unref, o as openBlock, c as createElementBlock, F as Fragment, l as renderList, m as createCommentVNode, b as createBaseVNode, t as toDisplayString, a as createVNode, d as createTextVNode } from "./app.7c3b1c07.js";
const _hoisted_1 = {
  key: 0,
  class: "c-sub-menu-cards"
};
const _hoisted_2 = { class: "mb-12" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SubMenuCards",
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const route = useRoute();
    console.log(themeLocale);
    const shouldBeActiveInSubpath = (item) => {
      const localeKeys = Object.keys(item.value.locales);
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
          componentsLink: item.componentsLink,
          linkUrl: item.link,
          linkText: "Documentation"
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
            _hoisted_3,
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
var SubMenuCards = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "SubMenuCards.vue"]]);
export { SubMenuCards as default };

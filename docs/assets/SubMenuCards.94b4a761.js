import { h as defineComponent, u as useThemeLocaleData, i as useRoute, j as computed, b as resolveComponent, k as unref, o as openBlock, c as createElementBlock, f as createVNode, d as createCommentVNode } from "./app.da321abc.js";
const _hoisted_1 = {
  key: 0,
  class: "c-sub-menu-cards"
};
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
        result.push({
          image: "",
          title: child.text,
          linkUrl: child.link,
          linkText: "Link"
        });
      }
      return result;
    });
    return (_ctx, _cache) => {
      const _component_Cards = resolveComponent("Cards");
      return unref(subMenu) ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_Cards, { contents: unref(subMenu) }, null, 8, ["contents"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };

import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, F as Fragment, l as renderList, t as toDisplayString, s as normalizeClass, h as unref, X as LinkExternal, V as LinkArrowRight, d as createTextVNode } from "./app.70bda88c.js";
const _hoisted_1 = { class: "c-row-link-list" };
const _hoisted_2 = { class: "text" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode();
const _hoisted_4 = ["href"];
const _hoisted_5 = { class: "text" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode();
const _hoisted_7 = ["innerHTML"];
const _sfc_main = {
  __name: "RowLinkList",
  props: { list: Array },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.list, (item) => {
            return openBlock(), createElementBlock("li", null, [
              createBaseVNode("div", _hoisted_2, toDisplayString(item.text), 1),
              _hoisted_3,
              createBaseVNode("a", {
                href: item.linkUrl,
                class: normalizeClass({ "link-external": __props.list.linkExternal, "link-internal": !__props.list.linkExternal })
              }, [
                createBaseVNode("span", _hoisted_5, toDisplayString(item.linkText), 1),
                _hoisted_6,
                createBaseVNode("span", {
                  class: "icon",
                  innerHTML: item.linkExternal ? unref(LinkExternal) : unref(LinkArrowRight)
                }, null, 8, _hoisted_7)
              ], 10, _hoisted_4)
            ]);
          }), 256))
        ])
      ]);
    };
  }
};
var RowLinkList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "RowLinkList.vue"]]);
export { RowLinkList as default };

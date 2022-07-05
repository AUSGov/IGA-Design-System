import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, F as Fragment, l as renderList, t as toDisplayString } from "./app.70bda88c.js";
const _hoisted_1 = { class: "c-big-list" };
const _sfc_main = {
  __name: "BigList",
  props: { list: String },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.list, (item) => {
            return openBlock(), createElementBlock("li", null, toDisplayString(item), 1);
          }), 256))
        ])
      ]);
    };
  }
};
var BigList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "BigList.vue"]]);
export { BigList as default };

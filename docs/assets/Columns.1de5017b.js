import { o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, r as renderList, t as toDisplayString } from "./app.0553396d.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {
  props: {
    contents: {
      type: Array,
      required: true
    }
  }
};
const _hoisted_1 = { class: "c-columns" };
const _hoisted_2 = { class: "row" };
const _hoisted_3 = { class: "col-md-6 col-lg-4" };
const _hoisted_4 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.contents, (content) => {
        return openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("h4", null, toDisplayString(content.title), 1),
          createBaseVNode("div", {
            innerHTML: content.text
          }, null, 8, _hoisted_4)
        ]);
      }), 256))
    ])
  ]);
}
var Columns = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Columns as default };

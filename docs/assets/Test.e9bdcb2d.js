import { o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString } from "./app.924566f6.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {
  data() {
    return {
      stuff: "STUFF"
    };
  }
};
const _hoisted_1 = { class: "mt-4" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "Some code", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("p", null, "This is a test component " + toDisplayString($data.stuff), 1),
    _hoisted_2
  ]);
}
var Test = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Test as default };

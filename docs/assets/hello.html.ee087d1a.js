import { o as openBlock, c as createElementBlock, a as createBaseVNode, e as createTextVNode } from "./app.67910bc6.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = {
  id: "hello",
  tabindex: "-1"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("a", {
  class: "header-anchor",
  href: "#hello",
  "aria-hidden": "true"
}, "#", -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" Hello!");
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("h1", _hoisted_1, _hoisted_4);
}
var hello_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { hello_html as default };

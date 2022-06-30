import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, s as normalizeClass, t as toDisplayString, d as createTextVNode } from "./app.8c37e554.js";
const _sfc_main = {
  props: {
    colorKey: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    hex: {
      type: String,
      required: true
    }
  }
};
const _hoisted_1 = { class: "col-4 col-md-3" };
const _hoisted_2 = { class: "card c-color-tile" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode();
const _hoisted_4 = { class: "card-body" };
const _hoisted_5 = { class: "title" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode();
const _hoisted_7 = { class: "hex" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", {
        class: normalizeClass(["card-img-top", "bg-" + $props.colorKey])
      }, null, 2),
      _hoisted_3,
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("div", _hoisted_5, toDisplayString($props.name), 1),
        _hoisted_6,
        createBaseVNode("span", _hoisted_7, toDisplayString($props.hex), 1)
      ])
    ])
  ]);
}
var ColorTile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ColorTile.vue"]]);
export { ColorTile as default };

import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, n as normalizeStyle, t as toDisplayString } from "./app.555e31a1.js";
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
const _hoisted_1 = { class: "col-4 col-md-3 col-lg-2" };
const _hoisted_2 = { class: "card c-color-tile" };
const _hoisted_3 = { class: "card-body" };
const _hoisted_4 = { class: "title" };
const _hoisted_5 = { class: "hex" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", {
        class: "card-img-top",
        style: normalizeStyle({ "background-color": $props.hex })
      }, null, 4),
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, toDisplayString($props.name), 1),
        createBaseVNode("span", _hoisted_5, toDisplayString($props.hex), 1)
      ])
    ])
  ]);
}
var ColorTile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ColorTile as default };

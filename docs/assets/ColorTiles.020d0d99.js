import { _ as _export_sfc, d as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, g as createVNode } from "./app.f4761922.js";
const _sfc_main = {};
const _hoisted_1 = { class: "c-color-tiles" };
const _hoisted_2 = { class: "row g-3 mb-3" };
const _hoisted_3 = { class: "row g-3" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ColorTile = resolveComponent("ColorTile");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_ColorTile, {
        "color-key": "primary",
        name: "Primary",
        hex: "#285576"
      }),
      createVNode(_component_ColorTile, {
        "color-key": "secondary",
        name: "Secondary",
        hex: "#3E837C"
      }),
      createVNode(_component_ColorTile, {
        "color-key": "promo",
        name: "Promo",
        hex: "#7AC4C3"
      }),
      createVNode(_component_ColorTile, {
        "color-key": "action",
        name: "Action",
        hex: "#A44D8E"
      })
    ]),
    createBaseVNode("div", _hoisted_3, [
      createVNode(_component_ColorTile, {
        "color-key": "gray-900",
        name: "900",
        hex: "#212121"
      }),
      createVNode(_component_ColorTile, {
        "color-key": "gray-800",
        name: "800",
        hex: "#424242"
      }),
      createVNode(_component_ColorTile, {
        "color-key": "gray-700",
        name: "700",
        hex: "#616161"
      }),
      createVNode(_component_ColorTile, {
        "color-key": "gray-600",
        name: "600",
        hex: "#757575"
      }),
      createVNode(_component_ColorTile, {
        "color-key": "gray-500",
        name: "500",
        hex: "#9E9E9E"
      }),
      createVNode(_component_ColorTile, {
        "color-key": "gray-400",
        name: "400",
        hex: "#BDBDBD"
      }),
      createVNode(_component_ColorTile, {
        "color-key": "gray-300",
        name: "300",
        hex: "#E0E0E0"
      }),
      createVNode(_component_ColorTile, {
        "color-key": "gray-200",
        name: "200",
        hex: "#eeeeee"
      }),
      createVNode(_component_ColorTile, {
        "color-key": "gray-100",
        name: "100",
        hex: "#F5F5F5"
      }),
      createVNode(_component_ColorTile, {
        "color-key": "gray-50",
        name: "50",
        hex: "#FAFAFA"
      })
    ])
  ]);
}
var ColorTiles = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ColorTiles as default };

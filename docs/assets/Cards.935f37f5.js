import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, F as Fragment, l as renderList, a as createVNode, Y as mergeProps } from "./app.70bda88c.js";
const _sfc_main = {
  props: {
    contents: {
      type: Array,
      required: true
    },
    compact: {
      type: Boolean,
      default: false
    }
  }
};
const _hoisted_1 = { class: "c-cards" };
const _hoisted_2 = { class: "row" };
const _hoisted_3 = { class: "col-md-6 col-lg-4 mb-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Card = resolveComponent("Card");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.contents, (card) => {
        return openBlock(), createElementBlock("div", _hoisted_3, [
          createVNode(_component_Card, mergeProps(card, { compact: $props.compact }), null, 16, ["compact"])
        ]);
      }), 256))
    ])
  ]);
}
var Cards = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Cards.vue"]]);
export { Cards as default };

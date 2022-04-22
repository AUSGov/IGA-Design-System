import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, r as renderList, t as toDisplayString } from "./app.555e31a1.js";
const _sfc_main = {
  props: {
    contents: {
      type: Array,
      required: true
    }
  }
};
const _hoisted_1 = { class: "c-two-cards" };
const _hoisted_2 = { class: "row" };
const _hoisted_3 = { class: "col-md-6 card-wrap" };
const _hoisted_4 = { class: "card-content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.contents, (card) => {
        return openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("h3", null, toDisplayString(card.title), 1),
            createBaseVNode("p", null, toDisplayString(card.text), 1)
          ])
        ]);
      }), 256))
    ])
  ]);
}
var TwoCards = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { TwoCards as default };

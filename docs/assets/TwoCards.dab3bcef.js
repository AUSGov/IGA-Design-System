import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, F as Fragment, l as renderList, t as toDisplayString, d as createTextVNode } from "./app.8f5c60f1.js";
import "https://code.jquery.com/jquery-3.6.0.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/bootstrap-select.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/11.0.2/bootstrap-slider.min.js";
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
const _hoisted_5 = /* @__PURE__ */ createTextVNode();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.contents, (card) => {
        return openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("h3", null, toDisplayString(card.title), 1),
            _hoisted_5,
            createBaseVNode("p", null, toDisplayString(card.text), 1)
          ])
        ]);
      }), 256))
    ])
  ]);
}
var TwoCards = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "TwoCards.vue"]]);
export { TwoCards as default };

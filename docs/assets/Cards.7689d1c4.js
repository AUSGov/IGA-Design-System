import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, F as Fragment, l as renderList, a as createVNode } from "./app.8c37e554.js";
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
const _hoisted_2 = { class: "row g-4" };
const _hoisted_3 = { class: "col-md-6 col-lg-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Card = resolveComponent("Card");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.contents, (card) => {
        return openBlock(), createElementBlock("div", _hoisted_3, [
          createVNode(_component_Card, {
            image: card.image,
            title: card.title,
            "link-url": card.linkUrl,
            "link-text": card.linkText,
            compact: $props.compact
          }, null, 8, ["image", "title", "link-url", "link-text", "compact"])
        ]);
      }), 256))
    ])
  ]);
}
var Cards = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Cards.vue"]]);
export { Cards as default };

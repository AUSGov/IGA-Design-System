import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, h as renderSlot, t as toDisplayString, e as createCommentVNode } from "./app.f4761922.js";
const _sfc_main = {
  props: {
    fontFamily: {
      required: true,
      type: String
    },
    fontWeight: {
      required: true,
      type: String
    },
    size: {
      required: true,
      type: String
    },
    lineHeight: {
      required: true,
      type: String
    },
    letterSpacing: {
      type: String
    },
    textAlignment: {
      type: String
    },
    discColor: {
      type: String
    },
    numberColor: {
      type: String
    }
  }
};
const _hoisted_1 = { class: "typography-row" };
const _hoisted_2 = { class: "row-container" };
const _hoisted_3 = { class: "row-container" };
const _hoisted_4 = { class: "property-container" };
const _hoisted_5 = { class: "property-content" };
const _hoisted_6 = { class: "property-content" };
const _hoisted_7 = { class: "property-content" };
const _hoisted_8 = { class: "property-content" };
const _hoisted_9 = {
  key: 0,
  class: "property-content"
};
const _hoisted_10 = {
  key: 1,
  class: "property-content"
};
const _hoisted_11 = {
  key: 2,
  class: "property-content"
};
const _hoisted_12 = {
  key: 3,
  class: "property-content"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("tr", _hoisted_1, [
    createBaseVNode("td", _hoisted_2, [
      renderSlot(_ctx.$slots, "styleContent")
    ]),
    createBaseVNode("td", _hoisted_3, [
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("div", _hoisted_5, "Font family: " + toDisplayString($props.fontFamily), 1),
        createBaseVNode("div", _hoisted_6, "Font weight: " + toDisplayString($props.fontWeight), 1),
        createBaseVNode("div", _hoisted_7, "Size: " + toDisplayString($props.size), 1),
        createBaseVNode("div", _hoisted_8, "Line height: " + toDisplayString($props.lineHeight), 1),
        $props.letterSpacing ? (openBlock(), createElementBlock("div", _hoisted_9, "Letter spacing: " + toDisplayString($props.letterSpacing), 1)) : createCommentVNode("", true),
        $props.textAlignment ? (openBlock(), createElementBlock("div", _hoisted_10, "Text alignment: " + toDisplayString($props.textAlignment), 1)) : createCommentVNode("", true),
        $props.discColor ? (openBlock(), createElementBlock("div", _hoisted_11, "Disc colour: " + toDisplayString($props.discColor), 1)) : createCommentVNode("", true),
        $props.numberColor ? (openBlock(), createElementBlock("div", _hoisted_12, "Number colour: " + toDisplayString($props.numberColor), 1)) : createCommentVNode("", true)
      ])
    ])
  ]);
}
var TypographyRow = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { TypographyRow as default };

import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, L as renderSlot, t as toDisplayString, m as createCommentVNode, d as createTextVNode } from "./app.8c37e554.js";
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
const _hoisted_3 = /* @__PURE__ */ createTextVNode();
const _hoisted_4 = { class: "row-container" };
const _hoisted_5 = { class: "property-container" };
const _hoisted_6 = { class: "property-content" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode();
const _hoisted_8 = { class: "property-content" };
const _hoisted_9 = /* @__PURE__ */ createTextVNode();
const _hoisted_10 = { class: "property-content" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode();
const _hoisted_12 = { class: "property-content" };
const _hoisted_13 = /* @__PURE__ */ createTextVNode();
const _hoisted_14 = {
  key: 0,
  class: "property-content"
};
const _hoisted_15 = /* @__PURE__ */ createTextVNode();
const _hoisted_16 = {
  key: 1,
  class: "property-content"
};
const _hoisted_17 = /* @__PURE__ */ createTextVNode();
const _hoisted_18 = {
  key: 2,
  class: "property-content"
};
const _hoisted_19 = /* @__PURE__ */ createTextVNode();
const _hoisted_20 = {
  key: 3,
  class: "property-content"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("tr", _hoisted_1, [
    createBaseVNode("td", _hoisted_2, [
      renderSlot(_ctx.$slots, "styleContent")
    ]),
    _hoisted_3,
    createBaseVNode("td", _hoisted_4, [
      createBaseVNode("div", _hoisted_5, [
        createBaseVNode("div", _hoisted_6, "Font family: " + toDisplayString($props.fontFamily), 1),
        _hoisted_7,
        createBaseVNode("div", _hoisted_8, "Font weight: " + toDisplayString($props.fontWeight), 1),
        _hoisted_9,
        createBaseVNode("div", _hoisted_10, "Size: " + toDisplayString($props.size), 1),
        _hoisted_11,
        createBaseVNode("div", _hoisted_12, "Line height: " + toDisplayString($props.lineHeight), 1),
        _hoisted_13,
        $props.letterSpacing ? (openBlock(), createElementBlock("div", _hoisted_14, "Letter spacing: " + toDisplayString($props.letterSpacing), 1)) : createCommentVNode("", true),
        _hoisted_15,
        $props.textAlignment ? (openBlock(), createElementBlock("div", _hoisted_16, "Text alignment: " + toDisplayString($props.textAlignment), 1)) : createCommentVNode("", true),
        _hoisted_17,
        $props.discColor ? (openBlock(), createElementBlock("div", _hoisted_18, "Disc colour: " + toDisplayString($props.discColor), 1)) : createCommentVNode("", true),
        _hoisted_19,
        $props.numberColor ? (openBlock(), createElementBlock("div", _hoisted_20, "Number colour: " + toDisplayString($props.numberColor), 1)) : createCommentVNode("", true)
      ])
    ])
  ]);
}
var TypographyRow = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "TypographyRow.vue"]]);
export { TypographyRow as default };

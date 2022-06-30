import { _ as _export_sfc, W as arrowRight, r as resolveComponent, o as openBlock, c as createElementBlock, m as createCommentVNode, b as createBaseVNode, t as toDisplayString, q as createBlock, w as withCtx, s as normalizeClass, d as createTextVNode } from "./app.8c37e554.js";
const _sfc_main = {
  props: {
    image: {
      type: String
    },
    title: {
      type: String
    },
    linkUrl: {
      type: String
    },
    linkText: {
      type: String
    },
    compact: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      arrowRight
    };
  }
};
const _hoisted_1 = {
  key: 0,
  class: "img-wrap card-img-top"
};
const _hoisted_2 = ["src", "alt"];
const _hoisted_3 = /* @__PURE__ */ createTextVNode();
const _hoisted_4 = { class: "card-body" };
const _hoisted_5 = { class: "h4" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode();
const _hoisted_7 = { class: "me-2" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode();
const _hoisted_9 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["card c-card", { "c-card--compact": $props.compact }])
  }, [
    !$props.compact && $props.image ? (openBlock(), createElementBlock("div", _hoisted_1, [
      $props.image ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: $props.image,
        alt: $props.title
      }, null, 8, _hoisted_2)) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _hoisted_3,
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode("p", _hoisted_5, toDisplayString($props.title), 1),
      _hoisted_6,
      $props.linkUrl ? (openBlock(), createBlock(_component_RouterLink, {
        key: 0,
        to: $props.linkUrl
      }, {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_7, toDisplayString($props.linkText), 1),
          _hoisted_8,
          createBaseVNode("span", {
            class: "icon",
            innerHTML: $data.arrowRight
          }, null, 8, _hoisted_9)
        ]),
        _: 1
      }, 8, ["to"])) : createCommentVNode("", true)
    ])
  ], 2);
}
var Card = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Card.vue"]]);
export { Card as default };

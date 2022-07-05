import { _ as _export_sfc, W as arrowRight, X as LinkExternal, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, t as toDisplayString, q as createBlock, w as withCtx, s as normalizeClass, d as createTextVNode } from "./app.0f8f1ecf.js";
const _sfc_main = {
  props: {
    image: {
      type: String
    },
    title: {
      type: String
    },
    componentsLink: {
      type: String,
      default: null
    },
    linkUrl: {
      type: String
    },
    linkText: {
      type: String,
      default: "Link"
    },
    compact: {
      type: Boolean,
      default: false
    },
    text: {
      type: String
    }
  },
  data() {
    return {
      arrowRight,
      linkExternal: LinkExternal
    };
  }
};
const _hoisted_1 = {
  key: 0,
  class: "card-img-top img-wrap"
};
const _hoisted_2 = ["src", "alt"];
const _hoisted_3 = /* @__PURE__ */ createTextVNode();
const _hoisted_4 = { class: "card-body" };
const _hoisted_5 = { class: "h4" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode();
const _hoisted_7 = {
  key: 0,
  class: "text"
};
const _hoisted_8 = /* @__PURE__ */ createTextVNode();
const _hoisted_9 = ["href"];
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Components");
const _hoisted_11 = ["innerHTML"];
const _hoisted_12 = /* @__PURE__ */ createTextVNode();
const _hoisted_13 = /* @__PURE__ */ createTextVNode();
const _hoisted_14 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["card c-card", { "c-card--compact": $props.compact }])
  }, [
    !$props.compact && $props.image ? (openBlock(), createElementBlock("div", _hoisted_1, [
      createBaseVNode("img", {
        src: $props.image,
        alt: $props.title
      }, null, 8, _hoisted_2)
    ])) : createCommentVNode("", true),
    _hoisted_3,
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode("p", _hoisted_5, toDisplayString($props.title), 1),
      _hoisted_6,
      $props.text ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString($props.text), 1)) : createCommentVNode("", true),
      _hoisted_8,
      $props.componentsLink && $props.componentsLink.length > 0 ? (openBlock(), createElementBlock("a", {
        key: 1,
        href: $props.componentsLink,
        target: "_blank"
      }, [
        _hoisted_10,
        createBaseVNode("span", {
          class: "icon ms-2",
          innerHTML: $data.linkExternal
        }, null, 8, _hoisted_11)
      ], 8, _hoisted_9)) : createCommentVNode("", true),
      _hoisted_12,
      $props.linkUrl ? (openBlock(), createBlock(_component_RouterLink, {
        key: 2,
        to: $props.linkUrl
      }, {
        default: withCtx(() => [
          createBaseVNode("span", null, toDisplayString($props.linkText), 1),
          _hoisted_13,
          createBaseVNode("span", {
            class: "icon ms-2",
            innerHTML: $data.arrowRight
          }, null, 8, _hoisted_14)
        ]),
        _: 1
      }, 8, ["to"])) : createCommentVNode("", true)
    ])
  ], 2);
}
var Card = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Card.vue"]]);
export { Card as default };

import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createCommentVNode, t as toDisplayString } from "./app.26042352.js";
var arrowRight = '<svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1.53125 8.16634C0.858152 8.16634 0.3125 8.78195 0.3125 9.54134C0.3125 10.2375 0.771 10.8127 1.36587 10.9038L1.53125 10.9163H24.2812C24.9543 10.9163 25.5 10.3007 25.5 9.54134C25.5 8.84523 25.0415 8.26994 24.4466 8.17889L24.2812 8.16634H1.53125Z" fill="#A44D8E"/>\n    <path d="M25.143 8.56907C24.7104 8.08091 24.0333 8.03654 23.5562 8.43594L23.4195 8.56907L16.9195 15.9024C16.4435 16.4394 16.4435 17.31 16.9195 17.8469C17.3521 18.3351 18.0292 18.3795 18.5063 17.9801L18.643 17.8469L25.143 10.5136C25.619 9.97664 25.619 9.10604 25.143 8.56907Z" fill="#A44D8E"/>\n    <path d="M18.643 1.23574C18.1671 0.698765 17.3954 0.698765 16.9195 1.23574C16.4868 1.72389 16.4474 2.48777 16.8015 3.02606L16.9195 3.18028L23.4195 10.5136C23.8954 11.0506 24.6671 11.0506 25.143 10.5136C25.5757 10.0255 25.6151 9.26157 25.261 8.72329L25.143 8.56907L18.643 1.23574Z" fill="#A44D8E"/>\n</svg>\n';
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
    }
  },
  data() {
    return {
      arrowRight
    };
  }
};
const _hoisted_1 = { class: "card c-card" };
const _hoisted_2 = { class: "img-wrap card-img-top" };
const _hoisted_3 = ["src", "alt"];
const _hoisted_4 = { class: "card-body" };
const _hoisted_5 = { class: "h4" };
const _hoisted_6 = ["href"];
const _hoisted_7 = { class: "me-2" };
const _hoisted_8 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      $props.image ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: $props.image,
        alt: $props.title
      }, null, 8, _hoisted_3)) : createCommentVNode("", true)
    ]),
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode("p", _hoisted_5, toDisplayString($props.title), 1),
      $props.linkUrl ? (openBlock(), createElementBlock("a", {
        key: 0,
        href: $props.linkUrl
      }, [
        createBaseVNode("span", _hoisted_7, toDisplayString($props.linkText), 1),
        createBaseVNode("span", {
          class: "icon",
          innerHTML: $data.arrowRight
        }, null, 8, _hoisted_8)
      ], 8, _hoisted_6)) : createCommentVNode("", true)
    ])
  ]);
}
var Card = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Card as default };

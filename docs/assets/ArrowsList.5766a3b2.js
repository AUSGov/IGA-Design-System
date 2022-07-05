import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, F as Fragment, l as renderList, t as toDisplayString, d as createTextVNode } from "./app.0f8f1ecf.js";
var arrowRightCurve = '<svg width="39" height="30" viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M38.8369 16.8926C38.8369 17.0519 39 17.2112 39 17.2112V17.5298C39 17.6892 38.8369 17.8485 38.8369 17.8485L26.7614 29.6415C26.272 30.1195 25.6192 30.1195 25.2929 29.6415C24.8035 29.1636 24.8035 28.526 25.2929 28.2073L35.5738 18.1668L9.62759 18.1675C4.24261 18.1675 0 13.8646 0 8.765V1.11551C0 0.477919 0.489401 0 1.14221 0C1.79506 0 2.12134 0.477959 2.12134 1.11551V8.765C2.12134 12.7492 5.54815 16.0959 9.62776 16.0959H35.2473L24.9664 6.0554C24.477 5.57744 24.477 4.93989 24.9664 4.6212C25.1295 4.46188 25.4558 4.30256 25.7824 4.30256C26.1087 4.30256 26.2718 4.46189 26.5984 4.6212L38.6738 16.4143C38.6738 16.5736 38.6738 16.7329 38.8373 16.8922L38.8369 16.8926Z" fill="#323232"/>\n</svg>\n';
const _sfc_main = {
  props: {
    lists: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      arrowRightCurve
    };
  }
};
const _hoisted_1 = { class: "c-arrows-list" };
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = /* @__PURE__ */ createTextVNode();
const _hoisted_4 = { class: "text" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("ul", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.lists, (list) => {
        return openBlock(), createElementBlock("li", null, [
          createBaseVNode("span", {
            class: "icon",
            innerHTML: $data.arrowRightCurve
          }, null, 8, _hoisted_2),
          _hoisted_3,
          createBaseVNode("span", _hoisted_4, toDisplayString(list), 1)
        ]);
      }), 256))
    ])
  ]);
}
var ArrowsList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ArrowsList.vue"]]);
export { ArrowsList as default };

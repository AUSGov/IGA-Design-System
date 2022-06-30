import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, b as createBaseVNode, d as createTextVNode } from "./app.6cb8e3e4.js";
import "https://code.jquery.com/jquery-3.6.0.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/bootstrap-select.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/11.0.2/bootstrap-slider.min.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "overview",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#overview",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Overview")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode();
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium.", -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode();
const _hoisted_5 = /* @__PURE__ */ createTextVNode();
function _sfc_render(_ctx, _cache) {
  const _component_TwoCards = resolveComponent("TwoCards");
  const _component_SubMenuCards = resolveComponent("SubMenuCards");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createVNode(_component_TwoCards, { contents: [
      { title: "When to use", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium." },
      { title: "When not to use", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium." }
    ] }, null, 8, ["contents"]),
    _hoisted_5,
    createVNode(_component_SubMenuCards)
  ]);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export { index_html as default };

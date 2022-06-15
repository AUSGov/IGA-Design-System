import { _ as _export_sfc, d as resolveComponent, o as openBlock, c as createElementBlock, g as createVNode, F as Fragment, b as createBaseVNode, i as createTextVNode } from "./app.f4761922.js";
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
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium.", -1);
function _sfc_render(_ctx, _cache) {
  const _component_TwoCards = resolveComponent("TwoCards");
  const _component_SubMenuCards = resolveComponent("SubMenuCards");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createVNode(_component_TwoCards, { contents: [
      { title: "When to use", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium." },
      { title: "When not to use", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mauris fermentum volutpat quisque. Et egestas sem tellus duis dignissim adipiscing in. Nec porttitor adipiscing nam lobortis urna non pharetra, ullamcorper. Ipsum nulla proin donec faucibus in pretium." }
    ] }, null, 8, ["contents"]),
    createVNode(_component_SubMenuCards)
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };

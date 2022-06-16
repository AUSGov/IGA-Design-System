import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, b as createBaseVNode, d as createTextVNode } from "./app.1ff68f9f.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "about-our-design-system",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#about-our-design-system",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" About our design system")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", { class: "h4 fw-normal" }, "Our digital front door guides users through an integrated and accessible experience, providing context to the breadth of news, stories, achievements, and engagement opportunities.", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", { class: "h4 fw-normal" }, "This modular approach brings to life our information architecture that prioritises critical and timely information, while also presenting information according to user needs and interests.", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "principles",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#principles",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Principles")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, "Our design system is consistent, but flexible; integrated, but modular. Integrated to optimise page patterns for particular purposes and modular to meet various user needs. As our department and our work evolves we can more easily introduce new patterns or combine them in new ways.", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", { class: "h3" }, "Our six governance principles from the website governance framework", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", null, "We incorporate the six principles in our design system:", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", { class: "h3" }, "How this translates to our design system", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("p", { class: "fw-semi-bold" }, "To visually capture these six principles, we\u2019ve defined key design system principles:", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "related-links",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#related-links",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Related Links")
], -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", null, "Australian Government style manual", -1);
const _hoisted_12 = {
  href: "#",
  class: "d-flex align-items-center"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("span", { class: "me-1" }, "How people find information", -1);
function _sfc_render(_ctx, _cache) {
  const _component_Cards = resolveComponent("Cards");
  const _component_ArrowsList = resolveComponent("ArrowsList");
  const _component_Columns = resolveComponent("Columns");
  const _component_ArrowRight = resolveComponent("ArrowRight");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createVNode(_component_Cards, { contents: [
      { image: "", title: "Foundations", linkUrl: "#", linkText: "Link" },
      { image: "", title: "Foundations", linkUrl: "#", linkText: "Link" },
      { image: "", title: "Foundations", linkUrl: "#", linkText: "Link" }
    ] }),
    _hoisted_4,
    _hoisted_5,
    _hoisted_6,
    _hoisted_7,
    createVNode(_component_ArrowsList, { lists: [
      "Information integrity",
      "Content management",
      "User focus",
      "Digital first",
      "Accessibility",
      "Readability"
    ] }),
    _hoisted_8,
    _hoisted_9,
    createVNode(_component_Columns, { contents: [
      { title: "People First", text: "Our UI has no needless parts. Each element contributes to an accessible, scalable experience.<br/><br/>We place critical information in the use's focus and guide them with hierarchy and curation, using intuitive text styles, interactions, component designs, and page patterns." },
      { title: "Interconnected", text: "Our design system connects relevant, topic-based content with contextual navigation patterns and integrated hierarchy.<br/><br/>Hub, topic and sub-topic pages relate content and allow users to self-select, drill further into information, and discover interests along the way." },
      { title: "Transparent", text: "Our page patterns emphasise critical information, then contextually weave in news, publications, and events.<br/><br/>We curate related content through modular cards and offer users intuitive navigation patterns to search for and explore topics of interest." }
    ] }, null, 8, ["contents"]),
    _hoisted_10,
    _hoisted_11,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_12, [
        _hoisted_13,
        createVNode(_component_ArrowRight)
      ])
    ])
  ]);
}
var introduction_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "introduction.html.vue"]]);
export { introduction_html as default };

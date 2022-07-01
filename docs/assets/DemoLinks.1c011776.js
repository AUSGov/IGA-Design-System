import { _ as _export_sfc, D as ref, j as computed, X as LinkExternal, V as LinkArrowRight, a3 as resolveDirective, o as openBlock, q as createBlock, w as withCtx, b as createBaseVNode, s as normalizeClass, h as unref, a4 as withModifiers, E as withDirectives, c as createElementBlock, m as createCommentVNode, d as createTextVNode } from "./app.a3502130.js";
import CodePreview from "./Index.182c2b79.js";
import "./hamburger-2.8adf8044.js";
import "./Radio.78695e13.js";
import "./Checkbox.ff378613.js";
import "./Select.0db67f0c.js";
import "./Highlighter.6a27ff39.js";
import "./prism-line-numbers.dc22a1e8.js";
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\n");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\n  ");
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", null, "Link Text", -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\n  ");
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\n");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\n\n");
const _sfc_main = {
  __name: "DemoLinks",
  setup(__props) {
    const formConfig = ref([
      {
        label: "Variation",
        id: "variation",
        type: "select",
        options: [
          {
            label: "Primary",
            value: "link-icon"
          },
          {
            label: "Secondary",
            value: "link-icon link-secondary"
          }
        ]
      },
      {
        label: "Link Type",
        id: "type",
        type: "radio",
        options: [
          {
            label: "Internal",
            value: "",
            checked: true
          },
          {
            label: "External",
            value: "link-external"
          }
        ]
      }
    ]);
    const formData = ref({});
    const linkClass = computed(() => {
      const classes = [];
      if (typeof formData.value.variation !== "undefined") {
        classes.push(formData.value.variation);
      }
      if (typeof formData.value.type !== "undefined") {
        classes.push(formData.value.type);
      }
      return classes.join(" ");
    });
    const linkType = computed(() => {
      switch (formData.value.type) {
        case "internal":
          return LinkArrowRight;
        case "external":
          return LinkExternal;
        default:
          return null;
      }
    });
    const formDataChanged = (formDataExternal) => {
      formData.value = formDataExternal;
    };
    return (_ctx, _cache) => {
      const _directive_inline_svg = resolveDirective("inline-svg");
      return openBlock(), createBlock(CodePreview, {
        formConfig: formConfig.value,
        onFormDataChanged: formDataChanged
      }, {
        default: withCtx((slotProps) => [
          createBaseVNode("pre", null, [
            _hoisted_1,
            createBaseVNode("a", {
              href: "#",
              class: normalizeClass(unref(linkClass)),
              onClick: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["prevent"]))
            }, [
              _hoisted_2,
              _hoisted_3,
              _hoisted_4,
              unref(linkType) !== null ? withDirectives((openBlock(), createElementBlock("svg", {
                key: 0,
                innerHTML: unref(linkType)
              }, null, 8, _hoisted_5)), [
                [_directive_inline_svg]
              ]) : createCommentVNode("", true),
              _hoisted_6
            ], 2),
            _hoisted_7
          ])
        ]),
        _: 1
      }, 8, ["formConfig"]);
    };
  }
};
var DemoLinks = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "DemoLinks.vue"]]);
export { DemoLinks as default };

import { _ as _export_sfc, D as ref, j as computed, V as LinkArrowRight, a4 as resolveDirective, o as openBlock, q as createBlock, w as withCtx, b as createBaseVNode, s as normalizeClass, h as unref, Z as withModifiers, E as withDirectives, c as createElementBlock, m as createCommentVNode, d as createTextVNode } from "./app.8f5c60f1.js";
import CodePreview from "./Index.535ee61b.js";
import "https://code.jquery.com/jquery-3.6.0.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/bootstrap-select.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/11.0.2/bootstrap-slider.min.js";
import "./hamburger-2.8adf8044.js";
import "./Radio.6d2de393.js";
import "./Checkbox.c4fca057.js";
import "./Select.0be49fe1.js";
import "./Highlighter.fa5d494f.js";
import "./prism-line-numbers.dc22a1e8.js";
var LinkExternal = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5002 1.95831H13.1579L5.89155 9.2247L5.83104 9.2948C5.64949 9.53948 5.66966 9.8867 5.89155 10.1086C6.13563 10.3527 6.53136 10.3527 6.77544 10.1086L14.0418 2.8422V5.49998L14.0475 5.58479C14.0889 5.88985 14.3504 6.12498 14.6668 6.12498C15.012 6.12498 15.2918 5.84516 15.2918 5.49998V1.33331C15.2918 1.30518 15.2899 1.27704 15.2862 1.24912L15.2861 1.2485C15.2788 1.19462 15.2646 1.14292 15.2445 1.09431C15.2147 1.02231 15.171 0.954746 15.1131 0.895791L15.1039 0.886553C14.9912 0.776285 14.837 0.708313 14.6668 0.708313H14.6667H10.5002L10.4154 0.714019C10.1103 0.755404 9.87516 1.0169 9.87516 1.33331L9.88087 1.41812C9.92225 1.72318 10.1837 1.95831 10.5002 1.95831ZM7.79183 3.83331C7.79183 3.48813 7.51201 3.20831 7.16683 3.20831H3.00016L2.86056 3.21249C1.65992 3.28464 0.708496 4.2812 0.708496 5.49998V13L0.712678 13.1396C0.784826 14.3402 1.78139 15.2916 3.00016 15.2916H10.5002L10.6398 15.2875C11.8404 15.2153 12.7918 14.2188 12.7918 13V8.83331L12.7861 8.7485C12.7447 8.44344 12.4832 8.20831 12.1668 8.20831C11.8217 8.20831 11.5418 8.48813 11.5418 8.83331V13L11.5365 13.1065C11.4831 13.6318 11.0395 14.0416 10.5002 14.0416H3.00016L2.89366 14.0363C2.36839 13.9829 1.9585 13.5393 1.9585 13V5.49998L1.96387 5.39347C2.01722 4.86821 2.46082 4.45831 3.00016 4.45831H7.16683L7.25164 4.45261C7.5567 4.41122 7.79183 4.14973 7.79183 3.83331Z" fill="#3F3B3B"/></svg>\n';
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\n");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\n  ");
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", null, "Link Text", -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\n  ");
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\n");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\n\n");
const _sfc_main = {
  __name: "PreviewLinks",
  setup(__props) {
    const formConfig = ref([
      {
        label: "Variation",
        id: "variation",
        type: "select",
        options: [
          {
            key: "linkPrimary",
            label: "Primary",
            value: "link-icon"
          },
          {
            key: "linkSecondary",
            label: "Secondary",
            value: "link-icon link-secondary"
          }
        ]
      },
      {
        label: "Type Radio",
        id: "type",
        type: "radio",
        options: [
          {
            label: "Internal",
            value: "internal",
            checked: true
          },
          {
            label: "External",
            value: "external"
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
var PreviewLinks = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "PreviewLinks.vue"]]);
export { PreviewLinks as default };

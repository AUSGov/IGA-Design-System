import { _ as _export_sfc, D as ref, j as computed, o as openBlock, q as createBlock, w as withCtx, b as createBaseVNode, s as normalizeClass, h as unref, d as createTextVNode } from "./app.67d63164.js";
import CodePreview from "./Index.769e4909.js";
import "./hamburger-2.8adf8044.js";
import "./Radio.35133306.js";
import "./Checkbox.28ccdbd3.js";
import "./Select.85452bcb.js";
import "./Highlighter.613e837d.js";
import "./prism-line-numbers.dc22a1e8.js";
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\n");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\n\n");
const _sfc_main = {
  __name: "DemoButtons",
  setup(__props) {
    const formConfig = [
      {
        label: "Variation",
        id: "variation",
        type: "select",
        options: [
          {
            label: "Primary",
            value: "btn-primary"
          },
          {
            label: "Ghost",
            value: "btn-outline-primary"
          }
        ]
      },
      {
        label: "Size",
        id: "size",
        type: "radio",
        options: [
          {
            label: "Default",
            value: "",
            checked: true
          },
          {
            label: "Small",
            value: "btn-sm"
          }
        ]
      },
      {
        label: "Disabled",
        id: "disabledBtn",
        type: "checkbox",
        options: [
          {
            label: "Disabled",
            value: "disabled"
          }
        ]
      }
    ];
    const formData = ref({});
    const btnClass = computed(() => {
      const classes = [];
      if (typeof formData.value.variation !== "undefined") {
        classes.push(formData.value.variation);
      }
      if (typeof formData.value.size !== "undefined") {
        classes.push(formData.value.size);
      }
      if (typeof formData.value.disabledBtn !== "undefined") {
        Object.keys(formData.value.disabledBtn).forEach((el) => {
          classes.push(formData.value.disabledBtn[el]);
        });
      }
      return classes.join(" ");
    });
    const formDataChanged = (formDataExternal) => {
      formData.value = formDataExternal;
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(CodePreview, {
        formConfig,
        onFormDataChanged: formDataChanged
      }, {
        default: withCtx((slotProps) => [
          createBaseVNode("pre", null, [
            _hoisted_1,
            createBaseVNode("button", {
              class: normalizeClass(["btn", unref(btnClass)])
            }, "Button", 2),
            _hoisted_2
          ])
        ]),
        _: 1
      });
    };
  }
};
var DemoButtons = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "DemoButtons.vue"]]);
export { DemoButtons as default };

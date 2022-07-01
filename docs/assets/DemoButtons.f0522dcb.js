import { _ as _export_sfc, D as ref, j as computed, o as openBlock, q as createBlock, w as withCtx, b as createBaseVNode, s as normalizeClass, h as unref, d as createTextVNode } from "./app.06d7b283.js";
import CodePreview from "./Index.c804ac96.js";
import "./hamburger-2.8adf8044.js";
import "./Radio.0205f05f.js";
import "./Checkbox.0c2006ec.js";
import "./Select.36e15c91.js";
import "./Highlighter.bac8ac9d.js";
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

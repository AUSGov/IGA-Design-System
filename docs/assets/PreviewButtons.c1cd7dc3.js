import { _ as _export_sfc, D as ref, j as computed, o as openBlock, q as createBlock, w as withCtx, b as createBaseVNode, s as normalizeClass, h as unref, d as createTextVNode } from "./app.6cb8e3e4.js";
import CodePreview from "./Index.5b9957b7.js";
import "https://code.jquery.com/jquery-3.6.0.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/bootstrap-select.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/11.0.2/bootstrap-slider.min.js";
import "./hamburger-2.8adf8044.js";
import "./Radio.e137636a.js";
import "./Checkbox.ac9cdf27.js";
import "./Select.e1233b12.js";
import "./Highlighter.02693ea4.js";
import "./prism-line-numbers.dc22a1e8.js";
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\n");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\n\n");
const _sfc_main = {
  __name: "PreviewButtons",
  setup(__props) {
    const formConfig = ref([
      {
        label: "Variation",
        key: "variation",
        type: "select",
        options: [
          {
            key: "btnPrimary",
            label: "Primary",
            value: "btn-primary"
          },
          {
            key: "btnOutlinePrimary",
            label: "Ghost",
            value: "btn-outline-primary"
          }
        ]
      },
      {
        label: "Size",
        key: "size",
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
      }
    ]);
    const formData = ref({});
    const btnClass = computed(() => {
      const classes = [];
      if (typeof formData.value.variation !== "undefined") {
        classes.push(formData.value.variation);
      }
      if (typeof formData.value.size !== "undefined") {
        classes.push(formData.value.size);
      }
      return classes.join(" ");
    });
    const formDataChanged = (formDataExternal) => {
      formData.value = formDataExternal;
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(CodePreview, {
        formConfig: formConfig.value,
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
      }, 8, ["formConfig"]);
    };
  }
};
var PreviewButtons = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "PreviewButtons.vue"]]);
export { PreviewButtons as default };

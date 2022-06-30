import { _ as _export_sfc, D as ref, J as onMounted, o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, F as Fragment, l as renderList, d as createTextVNode } from "./app.8f5c60f1.js";
import "https://code.jquery.com/jquery-3.6.0.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/bootstrap-select.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/11.0.2/bootstrap-slider.min.js";
const _hoisted_1 = /* @__PURE__ */ createTextVNode();
const _hoisted_2 = ["value", "id", "onInput", "checked"];
const _hoisted_3 = /* @__PURE__ */ createTextVNode();
const _hoisted_4 = ["for"];
const _sfc_main = {
  __name: "Checkbox",
  props: {
    label: {},
    id: {},
    type: {},
    options: {}
  },
  emits: ["input"],
  setup(__props) {
    const props = __props;
    const checks = ref(null);
    onMounted(() => {
      const inputs = checks.value.getElementsByTagName("input");
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
          inputs[i].dispatchEvent(new Event("input"));
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "checks",
        ref: checks,
        class: "form-group p-2"
      }, [
        createBaseVNode("label", null, toDisplayString(props.label), 1),
        _hoisted_1,
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.options, (option, i) => {
          return openBlock(), createElementBlock("div", {
            key: "check-" + i,
            class: "form-check"
          }, [
            createBaseVNode("input", {
              class: "form-check-input",
              type: "checkbox",
              value: option.value,
              id: "check-" + i,
              onInput: ($event) => _ctx.$emit("input", { value: $event.target.value, index: i }),
              checked: option.checked
            }, null, 40, _hoisted_2),
            _hoisted_3,
            createBaseVNode("label", {
              class: "form-check-label",
              for: "check-" + i
            }, toDisplayString(option.label), 9, _hoisted_4)
          ]);
        }), 128))
      ], 512);
    };
  }
};
var Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Checkbox.vue"]]);
export { Checkbox as default };

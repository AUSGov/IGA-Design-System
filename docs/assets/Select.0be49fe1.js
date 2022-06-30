import { _ as _export_sfc, D as ref, J as onMounted, o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, F as Fragment, l as renderList, d as createTextVNode } from "./app.8f5c60f1.js";
import "https://code.jquery.com/jquery-3.6.0.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/bootstrap-select.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/11.0.2/bootstrap-slider.min.js";
const _hoisted_1 = { class: "form-group p-2" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode();
const _hoisted_3 = ["value"];
const _sfc_main = {
  __name: "Select",
  props: {
    label: {},
    id: {},
    type: {},
    options: {}
  },
  emits: ["input"],
  setup(__props) {
    const props = __props;
    const input = ref(null);
    onMounted(() => {
      input.value.dispatchEvent(new Event("change"));
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("label", null, toDisplayString(props.label), 1),
        _hoisted_2,
        createBaseVNode("select", {
          ref_key: "input",
          ref: input,
          class: "form-select form-select-sm",
          onChange: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("input", { value: $event.target.value }))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.options, (option) => {
            return openBlock(), createElementBlock("option", {
              key: option.key,
              value: option.value
            }, toDisplayString(option.label), 9, _hoisted_3);
          }), 128))
        ], 544)
      ]);
    };
  }
};
var Select = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Select.vue"]]);
export { Select as default };

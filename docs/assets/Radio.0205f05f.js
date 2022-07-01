import { _ as _export_sfc, D as ref, J as onMounted, o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, F as Fragment, l as renderList, d as createTextVNode } from "./app.06d7b283.js";
const _hoisted_1 = /* @__PURE__ */ createTextVNode();
const _hoisted_2 = ["value", "id", "checked"];
const _hoisted_3 = /* @__PURE__ */ createTextVNode();
const _hoisted_4 = ["for"];
const _sfc_main = {
  __name: "Radio",
  props: {
    label: {},
    id: {},
    type: {},
    options: {}
  },
  emits: ["input"],
  setup(__props) {
    const props = __props;
    const radios = ref(null);
    onMounted(() => {
      const inputs = radios.value.getElementsByTagName("input");
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
          inputs[i].dispatchEvent(new Event("input"));
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "radios",
        ref: radios,
        class: "form-group p-2"
      }, [
        createBaseVNode("label", null, toDisplayString(props.label), 1),
        _hoisted_1,
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.options, (option, i) => {
          return openBlock(), createElementBlock("div", {
            key: "radio-" + i,
            class: "form-check"
          }, [
            createBaseVNode("input", {
              class: "form-check-input",
              type: "radio",
              value: option.value,
              id: "radio-" + props.id + "-" + i,
              name: "radio",
              onInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("input", { value: $event.target.value })),
              checked: option.checked
            }, null, 40, _hoisted_2),
            _hoisted_3,
            createBaseVNode("label", {
              class: "form-check-label",
              for: "radio-" + props.id + "-" + i
            }, toDisplayString(option.label), 9, _hoisted_4)
          ]);
        }), 128))
      ], 512);
    };
  }
};
var Radio = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Radio.vue"]]);
export { Radio as default };

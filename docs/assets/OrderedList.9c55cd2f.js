import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, F as Fragment, l as renderList, t as toDisplayString } from "./app.355c2b0e.js";
const _sfc_main = {
  props: {
    contents: {
      required: true,
      type: Array
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("ol", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.contents, (content) => {
        return openBlock(), createElementBlock("li", { key: content }, toDisplayString(content), 1);
      }), 128))
    ])
  ]);
}
var OrderedList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "OrderedList.vue"]]);
export { OrderedList as default };

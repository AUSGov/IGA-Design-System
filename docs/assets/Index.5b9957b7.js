import { _ as _export_sfc, D as ref, J as onMounted, M as onUnmounted, X as ChevronDown, $ as Close, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, s as normalizeClass, L as renderSlot, F as Fragment, l as renderList, q as createBlock, w as withCtx, T as Transition, a0 as Teleport, d as createTextVNode, a1 as mergeProps, a2 as resolveDynamicComponent } from "./app.6cb8e3e4.js";
import { E as Expand, H as Hamburger } from "./hamburger-2.8adf8044.js";
import Radio from "./Radio.e137636a.js";
import Checkbox from "./Checkbox.ac9cdf27.js";
import Select from "./Select.e1233b12.js";
import Highlighter from "./Highlighter.02693ea4.js";
import "https://code.jquery.com/jquery-3.6.0.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/bootstrap-select.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/11.0.2/bootstrap-slider.min.js";
import "./prism-line-numbers.dc22a1e8.js";
const _sfc_main = {
  components: {
    Highlighter,
    Checkbox,
    Radio,
    Select
  },
  props: {
    changePreview: {},
    allowFullScreen: {
      type: Boolean,
      default: true
    },
    allowVariations: {
      type: Boolean,
      default: true
    },
    allowCodeView: {
      type: Boolean,
      default: true
    },
    formConfig: {
      type: Object
    }
  },
  emits: ["formDataChanged"],
  setup(_, context) {
    const codeRef = ref(null);
    const code = ref(null);
    const formData = ref({});
    const updateCode = () => {
      if (codeRef.value) {
        const temp = codeRef.value.innerHTML;
        code.value = temp.replace("<pre>\n", "").replace("\n</pre>", "").replace(/<!--[\s\S]*?-->/g, "");
      }
    };
    const observer = new MutationObserver(updateCode);
    onMounted(() => {
      updateCode();
      observer.observe(codeRef.value, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true
      });
    });
    onUnmounted(() => {
      observer.disconnect();
    });
    return {
      ChevronDown,
      Expand,
      Hamburger,
      Close,
      showFullScreen: ref(false),
      showVariations: ref(true),
      showCodeView: ref(true),
      formData,
      codeRef,
      code,
      componentType(type) {
        return "demo-" + type;
      },
      handleInput(key, e) {
        if (e.index) {
          formData.value[key][e.index] = e.value;
        } else {
          formData.value[key] = e.value;
        }
        context.emit("formDataChanged", formData.value);
      }
    };
  }
};
const _hoisted_1 = { class: "menu-container" };
const _hoisted_2 = { class: "top-container" };
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = /* @__PURE__ */ createTextVNode();
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = /* @__PURE__ */ createTextVNode();
const _hoisted_7 = /* @__PURE__ */ createTextVNode();
const _hoisted_8 = { class: "preview-container" };
const _hoisted_9 = {
  class: "doi-content",
  ref: "codeRef"
};
const _hoisted_10 = /* @__PURE__ */ createTextVNode();
const _hoisted_11 = /* @__PURE__ */ createTextVNode();
const _hoisted_12 = { class: "close-container" };
const _hoisted_13 = ["innerHTML"];
const _hoisted_14 = /* @__PURE__ */ createTextVNode();
const _hoisted_15 = { class: "scroll-container" };
const _hoisted_16 = /* @__PURE__ */ createTextVNode();
const _hoisted_17 = { class: "bottom-container" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("span", { class: "me-2" }, "View Code", -1);
const _hoisted_19 = /* @__PURE__ */ createTextVNode();
const _hoisted_20 = ["innerHTML"];
const _hoisted_21 = /* @__PURE__ */ createTextVNode();
const _hoisted_22 = {
  key: 0,
  class: "code-container"
};
const _hoisted_23 = /* @__PURE__ */ createTextVNode();
const _hoisted_24 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Highlighter = resolveComponent("Highlighter");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", {
      class: normalizeClass(["c-code-demo", { fullscreen: $setup.showFullScreen }])
    }, [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          $props.allowFullScreen ? (openBlock(), createElementBlock("button", {
            key: 0,
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.showFullScreen = true),
            class: "btn-icon me-2 btn",
            innerHTML: $setup.Expand
          }, null, 8, _hoisted_3)) : createCommentVNode("", true),
          _hoisted_4,
          createBaseVNode("button", {
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.showVariations = !$setup.showVariations),
            class: "btn-icon btn",
            innerHTML: $setup.Hamburger
          }, null, 8, _hoisted_5),
          _hoisted_6,
          createBaseVNode("div", {
            class: normalizeClass(["spacer", { show: $setup.showVariations }])
          }, null, 2)
        ]),
        _hoisted_7,
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            renderSlot(_ctx.$slots, "default")
          ], 512),
          _hoisted_10,
          createBaseVNode("div", {
            class: normalizeClass(["spacer", { show: $setup.showVariations }])
          }, null, 2)
        ]),
        _hoisted_11,
        $props.allowVariations ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["variations-container", { show: $setup.showVariations }])
        }, [
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("button", {
              onClick: _cache[2] || (_cache[2] = ($event) => $setup.showVariations = false),
              class: "btn-icon btn",
              innerHTML: $setup.Close
            }, null, 8, _hoisted_13)
          ]),
          _hoisted_14,
          createBaseVNode("div", _hoisted_15, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.formConfig, (element) => {
              return openBlock(), createElementBlock("div", {
                key: element.id
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(element.type), mergeProps({
                  onInput: ($event) => $setup.handleInput(element.key, $event)
                }, element), null, 16, ["onInput"]))
              ]);
            }), 128))
          ])
        ], 2)) : createCommentVNode("", true)
      ]),
      _hoisted_16,
      createBaseVNode("div", _hoisted_17, [
        createBaseVNode("button", {
          onClick: _cache[3] || (_cache[3] = ($event) => $setup.showCodeView = !$setup.showCodeView),
          class: "btn btn-icon"
        }, [
          _hoisted_18,
          _hoisted_19,
          createBaseVNode("span", { innerHTML: $setup.ChevronDown }, null, 8, _hoisted_20)
        ])
      ]),
      _hoisted_21,
      $props.allowCodeView ? (openBlock(), createBlock(Transition, {
        key: 0,
        name: "slide-down"
      }, {
        default: withCtx(() => [
          $setup.showCodeView ? (openBlock(), createElementBlock("div", _hoisted_22, [
            $setup.code !== null ? (openBlock(), createBlock(_component_Highlighter, {
              key: 0,
              code: $setup.code
            }, null, 8, ["code"])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ], 2),
    _hoisted_23,
    (openBlock(), createBlock(Teleport, { to: "body" }, [
      $props.allowFullScreen ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["fullscreen-container", { show: $setup.showFullScreen }]),
        innerHTML: $setup.code
      }, null, 10, _hoisted_24)) : createCommentVNode("", true)
    ]))
  ], 64);
}
var CodePreview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Index.vue"]]);
export { CodePreview as default };

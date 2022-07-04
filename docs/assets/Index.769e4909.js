import { _ as _export_sfc, D as ref, j as computed, J as onMounted, M as onUnmounted, Y as ChevronDown, Z as Close, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, s as normalizeClass, m as createCommentVNode, L as renderSlot, F as Fragment, l as renderList, q as createBlock, w as withCtx, T as Transition, $ as Teleport, d as createTextVNode, a0 as mergeProps, a1 as resolveDynamicComponent } from "./app.67d63164.js";
import { E as Expand, H as Hamburger } from "./hamburger-2.8adf8044.js";
import Radio from "./Radio.35133306.js";
import Checkbox from "./Checkbox.28ccdbd3.js";
import Select from "./Select.85452bcb.js";
import Highlighter from "./Highlighter.613e837d.js";
import "./prism-line-numbers.dc22a1e8.js";
var ResponsiveDesktop = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M19 4H5C3.875 4 3 4.90625 3 6V15C3 16.125 3.875 17 5 17H9.65625L9.0625 19H7.5C7.21875 19 7 19.25 7 19.5C7 19.7812 7.21875 20 7.5 20H16.5C16.75 20 17 19.7812 17 19.5C17 19.25 16.75 19 16.5 19H14.9062L14.3125 17H19C20.0938 17 21 16.125 21 15V6C21 4.90625 20.0938 4 19 4ZM10.0938 19L10.7188 17H13.25L13.875 19H10.0938ZM20 15C20 15.5625 19.5312 16 19 16H5C4.4375 16 4 15.5625 4 15V13H20V15ZM20 12H4V6C4 5.46875 4.4375 5 5 5H19C19.5312 5 20 5.46875 20 6V12Z" fill="#212121"/>\n</svg>\n';
var ResponsiveTablet = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M17 4H7C5.875 4 5 4.90625 5 6V18C5 19.125 5.875 20 7 20H17C18.0938 20 19 19.125 19 18V6C19 4.90625 18.0938 4 17 4ZM18 18C18 18.5625 17.5312 19 17 19H7C6.4375 19 6 18.5625 6 18V6C6 5.46875 6.4375 5 7 5H17C17.5312 5 18 5.46875 18 6V18ZM13 16.5H11C10.7188 16.5 10.5 16.75 10.5 17C10.5 17.2812 10.7188 17.5 11 17.5H13C13.25 17.5 13.5 17.2812 13.5 17C13.5 16.75 13.25 16.5 13 16.5Z" fill="#212121"/>\n</svg>\n';
var ResponsiveMobile = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M15 4H9C7.875 4 7 4.90625 7 6V18C7 19.125 7.875 20 9 20H15C16.0938 20 17 19.125 17 18V6C17 4.90625 16.0938 4 15 4ZM16 18C16 18.5625 15.5312 19 15 19H9C8.4375 19 8 18.5625 8 18V6C8 5.46875 8.4375 5 9 5H15C15.5312 5 16 5.46875 16 6V18ZM13 16.5H11C10.7188 16.5 10.5 16.75 10.5 17C10.5 17.2812 10.7188 17.5 11 17.5H13C13.25 17.5 13.5 17.2812 13.5 17C13.5 16.75 13.25 16.5 13 16.5Z" fill="#212121"/>\n</svg>\n';
var Collapse = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M22.097 9.47604V11.0962H12.9046V1.90381H14.5248L14.5305 8.32125L21.5225 1.32928L22.6715 2.47833L15.6796 9.47029L22.097 9.47604ZM1.9046 14.524L1.9046 12.9038H11.097V22.0962H9.47683L9.47109 15.6788L2.47913 22.6707L1.33008 21.5217L8.32204 14.5297L1.9046 14.524Z" fill="#3F3B3B"/>\n</svg>\n';
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
    const showFullScreen = ref(false);
    const showVariations = ref(true);
    const showCodeView = ref(false);
    const fullScreenIcon = computed(() => {
      return showFullScreen.value ? Collapse : Expand;
    });
    const responsiveSize = ref("lg");
    const updateCode = () => {
      if (codeRef.value) {
        const temp = codeRef.value.innerHTML;
        code.value = temp.replace("<pre>\n", "").replace("\n</pre>", "").replace(/<!--[\s\S]*?-->/g, "");
      }
    };
    if (typeof MutationObserver !== "undefined") {
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
    }
    return {
      ResponsiveDesktop,
      ResponsiveTablet,
      ResponsiveMobile,
      ChevronDown,
      Expand,
      Collapse,
      Hamburger,
      Close,
      formData,
      codeRef,
      code,
      showFullScreen,
      showVariations,
      showCodeView,
      fullScreenIcon,
      handleInput(id, e) {
        if (e.index) {
          if (e.checked) {
            formData.value[id] = { [e.index]: e.value };
          } else {
            delete formData.value[id][e.index];
          }
        } else {
          formData.value[id] = e.value;
        }
        context.emit("formDataChanged", formData.value);
      },
      responsiveSize,
      showSize(size) {
        responsiveSize.value = size;
      }
    };
  }
};
const _hoisted_1 = { class: "menu-container" };
const _hoisted_2 = { class: "top-container" };
const _hoisted_3 = { class: "responsive-controls" };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = /* @__PURE__ */ createTextVNode();
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = /* @__PURE__ */ createTextVNode();
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = /* @__PURE__ */ createTextVNode();
const _hoisted_10 = ["innerHTML"];
const _hoisted_11 = /* @__PURE__ */ createTextVNode();
const _hoisted_12 = ["innerHTML"];
const _hoisted_13 = /* @__PURE__ */ createTextVNode();
const _hoisted_14 = /* @__PURE__ */ createTextVNode();
const _hoisted_15 = { class: "preview-container" };
const _hoisted_16 = /* @__PURE__ */ createTextVNode();
const _hoisted_17 = /* @__PURE__ */ createTextVNode();
const _hoisted_18 = { class: "close-container" };
const _hoisted_19 = ["innerHTML"];
const _hoisted_20 = /* @__PURE__ */ createTextVNode();
const _hoisted_21 = { class: "scroll-container" };
const _hoisted_22 = /* @__PURE__ */ createTextVNode();
const _hoisted_23 = { class: "bottom-container" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", { class: "me-2" }, "View Code", -1);
const _hoisted_25 = /* @__PURE__ */ createTextVNode();
const _hoisted_26 = ["innerHTML"];
const _hoisted_27 = /* @__PURE__ */ createTextVNode();
const _hoisted_28 = {
  key: 0,
  class: "code-container"
};
const _hoisted_29 = /* @__PURE__ */ createTextVNode();
const _hoisted_30 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Highlighter = resolveComponent("Highlighter");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", {
      class: normalizeClass(["c-code-demo", { fullscreen: $setup.showFullScreen }])
    }, [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              class: normalizeClass(["btn-icon me-2 btn", { active: $setup.responsiveSize === "sm" }]),
              innerHTML: $setup.ResponsiveMobile,
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.showSize("sm"))
            }, null, 10, _hoisted_4),
            _hoisted_5,
            createBaseVNode("button", {
              class: normalizeClass(["btn-icon me-2 btn", { active: $setup.responsiveSize === "md" }]),
              innerHTML: $setup.ResponsiveTablet,
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.showSize("md"))
            }, null, 10, _hoisted_6),
            _hoisted_7,
            createBaseVNode("button", {
              class: normalizeClass(["btn-icon me-2 btn", { active: $setup.responsiveSize === "lg" }]),
              innerHTML: $setup.ResponsiveDesktop,
              onClick: _cache[2] || (_cache[2] = ($event) => $setup.showSize("lg"))
            }, null, 10, _hoisted_8)
          ]),
          _hoisted_9,
          $props.allowFullScreen ? (openBlock(), createElementBlock("button", {
            key: 0,
            onClick: _cache[3] || (_cache[3] = ($event) => $setup.showFullScreen = !$setup.showFullScreen),
            class: "btn-icon me-2 btn",
            innerHTML: $setup.fullScreenIcon
          }, null, 8, _hoisted_10)) : createCommentVNode("", true),
          _hoisted_11,
          createBaseVNode("button", {
            onClick: _cache[4] || (_cache[4] = ($event) => $setup.showVariations = !$setup.showVariations),
            class: "btn-icon btn",
            innerHTML: $setup.Hamburger
          }, null, 8, _hoisted_12),
          _hoisted_13,
          createBaseVNode("div", {
            class: normalizeClass(["spacer", { show: $setup.showVariations }])
          }, null, 2)
        ]),
        _hoisted_14,
        createBaseVNode("div", _hoisted_15, [
          createBaseVNode("div", {
            class: normalizeClass(["doi-content", "size-" + $setup.responsiveSize]),
            ref: "codeRef"
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2),
          _hoisted_16,
          createBaseVNode("div", {
            class: normalizeClass(["spacer", { show: $setup.showVariations }])
          }, null, 2)
        ]),
        _hoisted_17,
        $props.allowVariations ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["variations-container", { show: $setup.showVariations }])
        }, [
          createBaseVNode("div", _hoisted_18, [
            createBaseVNode("button", {
              onClick: _cache[5] || (_cache[5] = ($event) => $setup.showVariations = false),
              class: "btn-icon btn",
              innerHTML: $setup.Close
            }, null, 8, _hoisted_19)
          ]),
          _hoisted_20,
          createBaseVNode("div", _hoisted_21, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.formConfig, (element) => {
              return openBlock(), createElementBlock("div", {
                key: element.id
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(element.type), mergeProps({
                  onInput: ($event) => $setup.handleInput(element.id, $event)
                }, element), null, 16, ["onInput"]))
              ]);
            }), 128))
          ])
        ], 2)) : createCommentVNode("", true)
      ]),
      _hoisted_22,
      createBaseVNode("div", _hoisted_23, [
        createBaseVNode("button", {
          onClick: _cache[6] || (_cache[6] = ($event) => $setup.showCodeView = !$setup.showCodeView),
          class: "btn btn-icon"
        }, [
          _hoisted_24,
          _hoisted_25,
          createBaseVNode("span", { innerHTML: $setup.ChevronDown }, null, 8, _hoisted_26)
        ])
      ]),
      _hoisted_27,
      $props.allowCodeView ? (openBlock(), createBlock(Transition, {
        key: 0,
        name: "slide-down"
      }, {
        default: withCtx(() => [
          $setup.showCodeView ? (openBlock(), createElementBlock("div", _hoisted_28, [
            $setup.code !== null ? (openBlock(), createBlock(_component_Highlighter, {
              key: 0,
              code: $setup.code
            }, null, 8, ["code"])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ], 2),
    _hoisted_29,
    (openBlock(), createBlock(Teleport, { to: "body" }, [
      $props.allowFullScreen ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["fullscreen-container", { show: $setup.showFullScreen }]),
        innerHTML: $setup.code
      }, null, 10, _hoisted_30)) : createCommentVNode("", true)
    ]))
  ], 64);
}
var CodePreview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Index.vue"]]);
export { CodePreview as default };

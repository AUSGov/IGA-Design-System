import { _ as _export_sfc, j as computed, D as ref, a2 as watchEffect, o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, s as normalizeClass } from "./app.06d7b283.js";
import { P as Prism } from "./prism-line-numbers.dc22a1e8.js";
const _sfc_main = {
  props: {
    lang: {
      type: String,
      default: "html"
    },
    code: {
      required: true
    }
  },
  setup(props) {
    const containerClass = computed(() => {
      return `language-${props.lang} ext-${props.lang} line-numbers-mode`;
    });
    const codeContainer = ref(null);
    Prism.manual = true;
    Prism.hooks.add("before-sanity-check", function(env) {
      env.code = env.element.innerText;
    });
    const PLUGIN_NAME = "show-line-numbers";
    const NEW_LINE_EXP = /\n(?!$)/g;
    Prism.plugins.lineNumbers = {
      getLine: function(element, number) {
        console.log("getLine", element, number);
        if (element.tagName !== "PRE" || !element.classList.contains(PLUGIN_NAME)) {
          return;
        }
        const lineNumberRows = element.querySelector(".line-numbers");
        if (!lineNumberRows) {
          return;
        }
        const lineNumberStart = parseInt(element.getAttribute("data-start"), 10) || 1;
        const lineNumberEnd = lineNumberStart + (lineNumberRows.children.length - 1);
        if (number < lineNumberStart) {
          number = lineNumberStart;
        }
        if (number > lineNumberEnd) {
          number = lineNumberEnd;
        }
        const lineIndex = number - lineNumberStart;
        return lineNumberRows.children[lineIndex];
      },
      resize: function(element) {
        return;
      },
      assumeViewportIndependence: true
    };
    Prism.hooks.add("complete", function(env) {
      if (!env.code) {
        return;
      }
      const code = env.element;
      const pre = code.parentNode;
      const wrapper = pre.parentNode;
      if (!pre || !/pre/i.test(pre.nodeName)) {
        return;
      }
      const lineNumbers = wrapper.querySelector(".line-numbers");
      if (lineNumbers) {
        wrapper.removeChild(lineNumbers);
      }
      if (!Prism.util.isActive(code, PLUGIN_NAME)) {
        return;
      }
      pre.classList.add(PLUGIN_NAME);
      const match = env.code.match(NEW_LINE_EXP);
      const linesNum = match ? match.length + 1 : 1;
      let lineNumbersWrapper;
      const lines = new Array(linesNum + 1).join('<div class="line-number"></div>');
      lineNumbersWrapper = document.createElement("div");
      lineNumbersWrapper.setAttribute("aria-hidden", "true");
      lineNumbersWrapper.className = "line-numbers";
      lineNumbersWrapper.innerHTML = lines;
      wrapper.appendChild(lineNumbersWrapper);
      Prism.hooks.run("line-numbers", env);
    });
    Prism.hooks.add("line-numbers", function(env) {
      env.plugins = env.plugins || {};
      env.plugins.lineNumbers = true;
    });
    watchEffect(() => {
      if (codeContainer.value) {
        codeContainer.value.getElementsByTagName("code")[0].innerText = props.code;
        Prism.highlightAllUnder(codeContainer.value);
      }
    });
    return {
      codeContainer,
      containerClass,
      code: props.code
    };
  }
};
const _hoisted_1 = { class: "show-line-numbers" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "line-numbers" }, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "codeContainer",
    class: normalizeClass($setup.containerClass),
    tabindex: "0"
  }, [
    createBaseVNode("pre", _hoisted_1, [
      createBaseVNode("code", null, toDisplayString($setup.code), 1)
    ]),
    _hoisted_2
  ], 2);
}
var Highlighter = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Highlighter.vue"]]);
export { Highlighter as default };

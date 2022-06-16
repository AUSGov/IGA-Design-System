import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, F as Fragment, l as renderList, m as createCommentVNode, J as renderSlot, d as createTextVNode, W as normalizeStyle, Y as withModifiers, t as toDisplayString } from "./app.1ff68f9f.js";
var ChevronDown = '<svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.26035 2.62854C0.913217 2.28141 0.913217 1.71859 1.26035 1.37146C1.57592 1.05589 2.06975 1.0272 2.41773 1.28539L2.51743 1.37146L9 7.85363L15.4826 1.37146C15.7981 1.05589 16.292 1.0272 16.64 1.28539L16.7397 1.37146C17.0552 1.68704 17.0839 2.18086 16.8257 2.52884L16.7397 2.62854L9.62854 9.73965C9.31296 10.0552 8.81914 10.0839 8.47116 9.82572L8.37146 9.73965L1.26035 2.62854Z" fill="#57575A" stroke="#57575A"/>\n</svg>\n';
var Expand = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1893 4.75H16C15.6203 4.75 15.3065 4.46785 15.2568 4.10177L15.25 4C15.25 3.6203 15.5322 3.30651 15.8982 3.25685L16 3.25H19.9998H20H20.0003C20.1921 3.25007 20.384 3.3233 20.5303 3.46967C20.6024 3.54174 20.6567 3.62482 20.6933 3.7135C20.7174 3.77175 20.7344 3.83368 20.7432 3.89823L20.7432 3.89894C20.7477 3.93246 20.75 3.96623 20.75 4V8C20.75 8.41421 20.4142 8.75 20 8.75C19.6203 8.75 19.3065 8.46785 19.2568 8.10177L19.25 8V5.81066L14.5303 10.5303C14.2374 10.8232 13.7626 10.8232 13.4697 10.5303C13.2034 10.2641 13.1792 9.8474 13.3971 9.55379L13.4697 9.46967L18.1893 4.75ZM4 15.25C4.3797 15.25 4.69349 15.5322 4.74315 15.8982L4.75 16V18.1893L9.46967 13.4697C9.76256 13.1768 10.2374 13.1768 10.5303 13.4697C10.7966 13.7359 10.8208 14.1526 10.6029 14.4462L10.5303 14.5303L5.81066 19.25H8C8.3797 19.25 8.69349 19.5322 8.74315 19.8982L8.75 20C8.75 20.3797 8.46785 20.6935 8.10177 20.7432L8 20.75H4C3.89811 20.75 3.80096 20.7297 3.71238 20.6929C3.62412 20.6563 3.54143 20.6021 3.46967 20.5303C3.39777 20.4584 3.34353 20.3756 3.30693 20.2871C3.28269 20.2287 3.26563 20.1665 3.25685 20.1018L3.2568 20.101C3.25227 20.0675 3.25 20.0338 3.25 20V16C3.25 15.5858 3.58579 15.25 4 15.25Z" fill="#212121"/>\n</svg>\n';
var Hamburger = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 8.75C24 8.33579 23.5395 8 22.9714 8H1.02857L0.889 8.00685C0.386954 8.05651 0 8.3703 0 8.75C0 9.16421 0.460507 9.5 1.02857 9.5H22.9714L23.111 9.49315C23.613 9.44349 24 9.1297 24 8.75ZM23.75 16C23.75 15.5858 23.4142 15.25 23 15.25H7L6.89823 15.2568C6.53215 15.3065 6.25 15.6203 6.25 16C6.25 16.4142 6.58579 16.75 7 16.75H23L23.1018 16.7432C23.4678 16.6935 23.75 16.3797 23.75 16Z" fill="#212121"/>\n</svg>\n';
const _sfc_main = {
  props: {
    image: {
      type: String,
      required: true
    },
    contents: {
      type: Array
    }
  },
  data() {
    return {
      ChevronDown,
      Expand,
      Hamburger,
      localContents: null,
      fullScreen: false,
      viewCode: false
    };
  },
  created() {
    if (this.contents) {
      this.$watch("contents", () => {
        this.localContents = this.contents.map((content) => {
          content.active = false;
          return content;
        });
      }, { immediate: true });
    }
  },
  methods: {
    scrollTo(image, index) {
      const item = this.$refs[image + "-" + index];
      window.scrollTo(0, item[0].offsetTop - 105);
      this.localContents[index].active = true;
    },
    menu() {
    }
  }
};
const _hoisted_1 = { class: "c-image-map" };
const _hoisted_2 = { class: "preview-container" };
const _hoisted_3 = { class: "top-container" };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = { class: "middle-container" };
const _hoisted_7 = { class: "image-container" };
const _hoisted_8 = { class: "image-wrap" };
const _hoisted_9 = ["src"];
const _hoisted_10 = { key: 0 };
const _hoisted_11 = ["onClick"];
const _hoisted_12 = { class: "bottom-container" };
const _hoisted_13 = /* @__PURE__ */ createTextVNode("View Code ");
const _hoisted_14 = ["innerHTML"];
const _hoisted_15 = {
  key: 0,
  class: "code-container"
};
const _hoisted_16 = {
  key: 0,
  class: "description-wrap"
};
const _hoisted_17 = ["onClick"];
const _hoisted_18 = { class: "circle-point" };
const _hoisted_19 = { class: "h5" };
const _hoisted_20 = ["innerHTML"];
const _hoisted_21 = {
  key: 0,
  class: "text"
};
const _hoisted_22 = {
  key: 1,
  class: "full-view-wrap"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", {
          onClick: _cache[0] || (_cache[0] = ($event) => $data.fullScreen = true),
          class: "icon me-4",
          innerHTML: $data.Expand
        }, null, 8, _hoisted_4),
        createBaseVNode("div", {
          onClick: _cache[1] || (_cache[1] = (...args) => $options.menu && $options.menu(...args)),
          class: "icon",
          innerHTML: $data.Hamburger
        }, null, 8, _hoisted_5)
      ]),
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("img", {
              src: $props.image,
              alt: ""
            }, null, 8, _hoisted_9)
          ]),
          $props.contents ? (openBlock(), createElementBlock("div", _hoisted_10, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.localContents, (content, index) => {
              return openBlock(), createElementBlock("div", {
                class: "circle-point image-point",
                style: normalizeStyle({ "top": content.y + "%", "left": content.x + "%" }),
                onClick: withModifiers(($event) => $options.scrollTo($props.image, index), ["prevent"])
              }, [
                createBaseVNode("a", null, toDisplayString(index + 1), 1)
              ], 12, _hoisted_11);
            }), 256))
          ])) : createCommentVNode("", true)
        ])
      ]),
      createBaseVNode("div", _hoisted_12, [
        createBaseVNode("div", {
          onClick: _cache[2] || (_cache[2] = ($event) => $data.viewCode = !$data.viewCode),
          class: "toggle"
        }, [
          _hoisted_13,
          createBaseVNode("span", {
            innerHTML: $data.ChevronDown,
            class: "icon"
          }, null, 8, _hoisted_14)
        ])
      ]),
      $data.viewCode ? (openBlock(), createElementBlock("div", _hoisted_15, [
        renderSlot(_ctx.$slots, "code")
      ])) : createCommentVNode("", true)
    ]),
    $props.contents ? (openBlock(), createElementBlock("div", _hoisted_16, [
      createBaseVNode("ul", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.localContents, (content, index) => {
          return openBlock(), createElementBlock("li", {
            key: index,
            ref_for: true,
            ref: $props.image + "-" + index
          }, [
            createBaseVNode("div", {
              class: "title",
              onClick: ($event) => content.active = !content.active
            }, [
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("span", null, toDisplayString(index + 1), 1)
              ]),
              createBaseVNode("div", _hoisted_19, toDisplayString(content.title), 1),
              createBaseVNode("div", {
                class: "toggle",
                innerHTML: $data.ChevronDown
              }, null, 8, _hoisted_20)
            ], 8, _hoisted_17),
            content.active ? (openBlock(), createElementBlock("div", _hoisted_21, toDisplayString(content.text), 1)) : createCommentVNode("", true)
          ]);
        }), 128))
      ])
    ])) : createCommentVNode("", true),
    $data.fullScreen ? (openBlock(), createElementBlock("div", _hoisted_22)) : createCommentVNode("", true)
  ]);
}
var CodeDemo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "CodeDemo.vue"]]);
export { CodeDemo as default };

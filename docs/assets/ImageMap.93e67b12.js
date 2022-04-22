import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, r as renderList, n as normalizeStyle, w as withModifiers, t as toDisplayString, b as createCommentVNode } from "./app.26042352.js";
var ChevronDown = '<svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.26035 2.62854C0.913217 2.28141 0.913217 1.71859 1.26035 1.37146C1.57592 1.05589 2.06975 1.0272 2.41773 1.28539L2.51743 1.37146L9 7.85363L15.4826 1.37146C15.7981 1.05589 16.292 1.0272 16.64 1.28539L16.7397 1.37146C17.0552 1.68704 17.0839 2.18086 16.8257 2.52884L16.7397 2.62854L9.62854 9.73965C9.31296 10.0552 8.81914 10.0839 8.47116 9.82572L8.37146 9.73965L1.26035 2.62854Z" fill="#57575A" stroke="#57575A"/>\n</svg>\n';
const _sfc_main = {
  props: {
    image: {
      type: String,
      required: true
    },
    contents: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      ChevronDown,
      localContents: null
    };
  },
  watch: {
    contents: {
      immediate: true,
      handler() {
        this.localContents = this.contents.map((content) => {
          content.active = false;
          return content;
        });
      }
    }
  },
  methods: {
    scrollTo(image, index) {
      const item = this.$refs[image + "-" + index];
      window.scrollTo(0, item[0].offsetTop - 105);
      this.localContents[index].active = true;
    }
  }
};
const _hoisted_1 = { class: "c-image-map" };
const _hoisted_2 = { class: "image-container" };
const _hoisted_3 = { class: "image-wrap" };
const _hoisted_4 = ["src"];
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "description-wrap" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "circle-point" };
const _hoisted_9 = { class: "h5" };
const _hoisted_10 = ["innerHTML"];
const _hoisted_11 = {
  key: 0,
  class: "text"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("img", {
          src: $props.image,
          alt: ""
        }, null, 8, _hoisted_4)
      ]),
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.localContents, (content, index) => {
        return openBlock(), createElementBlock("div", {
          class: "circle-point image-point",
          style: normalizeStyle({ "top": content.y + "%", "left": content.x + "%" }),
          onClick: withModifiers(($event) => $options.scrollTo($props.image, index), ["prevent"])
        }, [
          createBaseVNode("a", null, toDisplayString(index + 1), 1)
        ], 12, _hoisted_5);
      }), 256))
    ]),
    createBaseVNode("div", _hoisted_6, [
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
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("span", null, toDisplayString(index + 1), 1)
              ]),
              createBaseVNode("div", _hoisted_9, toDisplayString(content.title), 1),
              createBaseVNode("div", {
                class: "toggle",
                innerHTML: $data.ChevronDown
              }, null, 8, _hoisted_10)
            ], 8, _hoisted_7),
            content.active ? (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString(content.text), 1)) : createCommentVNode("", true)
          ]);
        }), 128))
      ])
    ])
  ]);
}
var ImageMap = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ImageMap as default };

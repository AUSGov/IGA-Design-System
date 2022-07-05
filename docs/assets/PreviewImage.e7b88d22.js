import { _ as _export_sfc, Z as ChevronDown, o as openBlock, c as createElementBlock, b as createBaseVNode, F as Fragment, l as renderList, m as createCommentVNode, L as renderSlot, d as createTextVNode, a5 as normalizeStyle, a4 as withModifiers, t as toDisplayString } from "./app.0f8f1ecf.js";
import { E as Expand, H as Hamburger } from "./hamburger-2.8adf8044.js";
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
const _hoisted_5 = /* @__PURE__ */ createTextVNode();
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = /* @__PURE__ */ createTextVNode();
const _hoisted_8 = { class: "middle-container" };
const _hoisted_9 = { class: "image-container" };
const _hoisted_10 = { class: "image-wrap" };
const _hoisted_11 = ["src"];
const _hoisted_12 = /* @__PURE__ */ createTextVNode();
const _hoisted_13 = { key: 0 };
const _hoisted_14 = ["onClick"];
const _hoisted_15 = /* @__PURE__ */ createTextVNode();
const _hoisted_16 = { class: "bottom-container" };
const _hoisted_17 = /* @__PURE__ */ createTextVNode("View Code ");
const _hoisted_18 = ["innerHTML"];
const _hoisted_19 = /* @__PURE__ */ createTextVNode();
const _hoisted_20 = {
  key: 0,
  class: "code-container"
};
const _hoisted_21 = /* @__PURE__ */ createTextVNode();
const _hoisted_22 = {
  key: 0,
  class: "description-wrap"
};
const _hoisted_23 = ["onClick"];
const _hoisted_24 = { class: "circle-point" };
const _hoisted_25 = /* @__PURE__ */ createTextVNode();
const _hoisted_26 = { class: "h5" };
const _hoisted_27 = /* @__PURE__ */ createTextVNode();
const _hoisted_28 = ["innerHTML"];
const _hoisted_29 = /* @__PURE__ */ createTextVNode();
const _hoisted_30 = {
  key: 0,
  class: "text"
};
const _hoisted_31 = /* @__PURE__ */ createTextVNode();
const _hoisted_32 = {
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
        _hoisted_5,
        createBaseVNode("div", {
          onClick: _cache[1] || (_cache[1] = (...args) => $options.menu && $options.menu(...args)),
          class: "icon",
          innerHTML: $data.Hamburger
        }, null, 8, _hoisted_6)
      ]),
      _hoisted_7,
      createBaseVNode("div", _hoisted_8, [
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("img", {
              src: $props.image,
              alt: ""
            }, null, 8, _hoisted_11)
          ]),
          _hoisted_12,
          $props.contents ? (openBlock(), createElementBlock("div", _hoisted_13, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.localContents, (content, index) => {
              return openBlock(), createElementBlock("div", {
                class: "circle-point image-point",
                style: normalizeStyle({ "top": content.y + "%", "left": content.x + "%" }),
                onClick: withModifiers(($event) => $options.scrollTo($props.image, index), ["prevent"])
              }, [
                createBaseVNode("a", null, toDisplayString(index + 1), 1)
              ], 12, _hoisted_14);
            }), 256))
          ])) : createCommentVNode("", true)
        ])
      ]),
      _hoisted_15,
      createBaseVNode("div", _hoisted_16, [
        createBaseVNode("div", {
          onClick: _cache[2] || (_cache[2] = ($event) => $data.viewCode = !$data.viewCode),
          class: "toggle"
        }, [
          _hoisted_17,
          createBaseVNode("span", {
            innerHTML: $data.ChevronDown,
            class: "icon"
          }, null, 8, _hoisted_18)
        ])
      ]),
      _hoisted_19,
      $data.viewCode ? (openBlock(), createElementBlock("div", _hoisted_20, [
        renderSlot(_ctx.$slots, "code")
      ])) : createCommentVNode("", true)
    ]),
    _hoisted_21,
    $props.contents ? (openBlock(), createElementBlock("div", _hoisted_22, [
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
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("span", null, toDisplayString(index + 1), 1)
              ]),
              _hoisted_25,
              createBaseVNode("div", _hoisted_26, toDisplayString(content.title), 1),
              _hoisted_27,
              createBaseVNode("div", {
                class: "toggle",
                innerHTML: $data.ChevronDown
              }, null, 8, _hoisted_28)
            ], 8, _hoisted_23),
            _hoisted_29,
            content.active ? (openBlock(), createElementBlock("div", _hoisted_30, toDisplayString(content.text), 1)) : createCommentVNode("", true)
          ]);
        }), 128))
      ])
    ])) : createCommentVNode("", true),
    _hoisted_31,
    $data.fullScreen ? (openBlock(), createElementBlock("div", _hoisted_32)) : createCommentVNode("", true)
  ]);
}
var PreviewImage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "PreviewImage.vue"]]);
export { PreviewImage as default };

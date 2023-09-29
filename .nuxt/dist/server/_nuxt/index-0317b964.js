import { _ as __nuxt_component_0$1 } from "./Navbar-cdd8363b.js";
import { _ as __nuxt_component_1 } from "./Header-1ae676b7.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-6bdec6f5.js";
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "./index-e12b288f.js";
import { u as useHead } from "../server.mjs";
import "ufo";
import "hookable";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "destr";
import "defu";
const data = [
  {
    id: 1,
    date: "August 6, 2022",
    title: "Free advertising for your online business.",
    image: "/dark/assets/imgs/blog/h1.jpg",
    tags: [
      "Marketing",
      "Design"
    ]
  },
  {
    id: 2,
    date: "August 6, 2022",
    title: "Business meeting 2023 in San Francisco.",
    image: "/dark/assets/imgs/blog/h2.jpg",
    tags: [
      "Marketing",
      "Design"
    ]
  },
  {
    id: 3,
    date: "August 6, 2022",
    title: "Free advertising for your online business.",
    image: "/dark/assets/imgs/blog/h3.jpg",
    tags: [
      "Marketing",
      "Design"
    ]
  },
  {
    id: 4,
    date: "August 6, 2022",
    title: "Business meeting 2023 in San Francisco.",
    image: "/dark/assets/imgs/blog/h4.jpg",
    tags: [
      "Marketing",
      "Design"
    ]
  },
  {
    id: 5,
    date: "August 6, 2022",
    title: "Free advertising for your online business.",
    image: "/dark/assets/imgs/blog/h5.jpg",
    tags: [
      "Marketing",
      "Design"
    ]
  },
  {
    id: 6,
    date: "August 6, 2022",
    title: "Business meeting 2023 in San Francisco.",
    image: "/dark/assets/imgs/blog/h6.jpg",
    tags: [
      "Marketing",
      "Design"
    ]
  }
];
const _sfc_main$1 = {
  __name: "List",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list-half section-padding sub-bg" }, _attrs))}><div class="container"><div class="row"><!--[-->`);
      ssrRenderList(unref(data), (item, index) => {
        _push(`<div class="col-lg-6"><div class="${ssrRenderClass(`item ${index !== unref(data).length - 1 ? "mb-50" : ""}`)}"><div class="row"><div class="col-md-6 img"><img${ssrRenderAttr("src", item.image)} alt=""></div><div class="col-md-6 main-bg cont valign"><div class="full-width"><span class="date fz-12 ls1 text-u opacity-7 mb-15">${ssrInterpolate(item.date)}</span><h5>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/blog-details" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h5><div class="tags colorbg mt-15"><!--[-->`);
        ssrRenderList(item.tags, (tag, i) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/dark/blog-list",
            class: "me-1",
            key: i
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(tag)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(tag), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Blog/List.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const metadata = {
      subTitle: "DOME 2.0 戶外穹頂劇場",
      title: "臺灣當代文化實驗場（C-LAB）自 2020 年正式啟動「科技媒體實驗平台」，著重於媒體實驗創新與社會鏈結，以跨域、共創、協作方式，打造文化與科技的實驗平台。"
    };
    useHead({
      titleTemplate: `%s - Blog List`,
      bodyAttrs: {
        class: "main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0$1;
      const _component_InnerPagesBlogHeader = __nuxt_component_1;
      const _component_InnerPagesBlogList = __nuxt_component_2;
      const _component_StartupFooter = resolveComponent("StartupFooter");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, null, null, _parent));
      _push(`<main class="main-bg">`);
      _push(ssrRenderComponent(_component_InnerPagesBlogHeader, { data: metadata }, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesBlogList, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_StartupFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/blog-list/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-0317b964.js.map

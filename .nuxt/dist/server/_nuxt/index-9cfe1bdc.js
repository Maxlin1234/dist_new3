import { _ as __nuxt_component_0 } from "./Navbar-86353f14.js";
import { _ as __nuxt_component_1 } from "./Header-a0c6da77.js";
import { _ as __nuxt_component_2 } from "./Classic-1075e540.js";
import { _ as __nuxt_component_2$1 } from "./Footer-d5f7be9e.js";
import { useSSRContext } from "vue";
import "vue-router";
import "./index-e12b288f.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
import "./app-data-475c97b4.js";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "@unhead/shared";
import "destr";
import "defu";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const metadata = {
      subTitle: "OUR BLOG",
      title: "Latest News."
    };
    useHead({
      titleTemplate: `%s - Blog Classic`,
      bodyAttrs: {
        class: "main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_InnerPagesBlogHeader = __nuxt_component_1;
      const _component_InnerPagesBlogClassic = __nuxt_component_2;
      const _component_StartupFooter = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, { lightMode: true }, null, _parent));
      _push(`<main class="main-bg">`);
      _push(ssrRenderComponent(_component_InnerPagesBlogHeader, { data: metadata }, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesBlogClassic, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_StartupFooter, { lightMode: true }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/blog-classic/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-9cfe1bdc.js.map

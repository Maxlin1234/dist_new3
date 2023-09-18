import { _ as __nuxt_component_0, a as __nuxt_component_1 } from "./Menu-300ddcd2.js";
import { _ as __nuxt_component_2 } from "./InteractiveCenter-ccffbf54.js";
import { useSSRContext } from "vue";
import "vue-router";
import "./index-e12b288f.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "./nuxt-link-6bdec6f5.js";
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
import "destr";
import "defu";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Interactive`,
      bodyAttrs: {
        class: "main-bg inter-center"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShowcasesNavigation = __nuxt_component_0;
      const _component_ShowcasesMenu = __nuxt_component_1;
      const _component_ShowcasesInteractiveCenter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ShowcasesNavigation, null, null, _parent));
      _push(ssrRenderComponent(_component_ShowcasesMenu, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_ShowcasesInteractiveCenter, null, null, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/showcase-interactive-center/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-ef3607bd.js.map

import { useSSRContext } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/vue/index.mjs';

const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Blog/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Header-1ae676b7.mjs.map

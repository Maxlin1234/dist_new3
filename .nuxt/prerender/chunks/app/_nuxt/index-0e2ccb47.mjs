import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './Menu-300ddcd2.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from '../server.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/ufo/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/hookable/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/unctx/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/h3/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/unhead/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/destr/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/scule/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/klona/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/ohash/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/radix3/dist/index.mjs';

const data = [
  {
    id: 1,
    number: "01",
    type: "Design",
    title: "Everybody sunshine",
    image: "/dark/assets/imgs/works/full/1.jpg"
  },
  {
    id: 2,
    number: "02",
    type: "Branding",
    title: "Who Dares Wins",
    image: "/dark/assets/imgs/works/full/2.jpg"
  },
  {
    id: 3,
    number: "03",
    type: "Branding",
    title: "Fountain Studio",
    image: "/dark/assets/imgs/works/full/3.jpg"
  },
  {
    id: 4,
    number: "04",
    type: "Photography",
    title: "April willow flower",
    image: "/dark/assets/imgs/works/full/4.jpg"
  },
  {
    id: 5,
    number: "05",
    type: "Design",
    title: "Step Over",
    image: "/dark/assets/imgs/works/full/1.jpg"
  },
  {
    id: 6,
    number: "06",
    type: "ART Design",
    title: "Snowy Zero",
    image: "/dark/assets/imgs/works/full/2.jpg"
  },
  {
    id: 7,
    number: "07",
    type: "Design",
    title: "Fun Bike",
    image: "/dark/assets/imgs/works/full/3.jpg"
  },
  {
    id: 8,
    number: "08",
    type: "Apps",
    title: "Mobile Apps",
    image: "/dark/assets/imgs/works/full/4.jpg"
  }
];
const _sfc_main$1 = {
  __name: "InteractiveCenter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "inter-links-center section-padding" }, _attrs))}><div class="container-xxl"><div class="row"><div class="col-12"><div class="links-text d-flex justify-content-center"><ul class="rest"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<li${ssrRenderAttr("data-tab", `tab-${item.id}`)}><h2><span class="num">${ssrInterpolate(item.number)}.</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/project-details1" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="tag sub-title"${_scopeId}>${ssrInterpolate(item.type)}</span> <span class="text"${_scopeId}>${ssrInterpolate(item.title)}</span>`);
            } else {
              return [
                createVNode("span", { class: "tag sub-title" }, toDisplayString(item.type), 1),
                createTextVNode(),
                createVNode("span", { class: "text" }, toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h2></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div><div class="links-img"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="img"${ssrRenderAttr("id", `tab-${item.id}`)}><img${ssrRenderAttr("src", item.image)} alt=""></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Showcases/InteractiveCenter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
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
      _push(ssrRenderComponent(_component_ShowcasesNavigation, { alwaysDark: true }, null, _parent));
      _push(ssrRenderComponent(_component_ShowcasesMenu, { lightMode: true }, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_ShowcasesInteractiveCenter, null, null, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/showcase-interactive-center/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-0e2ccb47.mjs.map

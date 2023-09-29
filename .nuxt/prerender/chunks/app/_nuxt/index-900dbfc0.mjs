import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './Menu-300ddcd2.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createVNode } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/vue/server-renderer/index.mjs';
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
    background: "/dark/assets/imgs/works/full/1.jpg",
    year: "2023",
    type: "Branding",
    title: "Basket Lamp"
  },
  {
    id: 2,
    background: "/dark/assets/imgs/works/full/2.jpg",
    year: "2023",
    type: "Branding",
    title: "Moon Light"
  },
  {
    id: 3,
    background: "/dark/assets/imgs/works/full/3.jpg",
    year: "2023",
    type: "Branding",
    title: "Red Glasses"
  },
  {
    id: 4,
    background: "/dark/assets/imgs/works/full/4.jpg",
    year: "2023",
    type: "Branding",
    title: "Waffile Maker"
  },
  {
    id: 5,
    background: "/dark/assets/imgs/works/full/5.jpg",
    year: "2023",
    type: "Branding",
    title: "Headphone"
  }
];
const _sfc_main$1 = {
  __name: "CircleSlider",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `position-re ${__props.lightMode ? "bg-dark" : ""}`
      }, _attrs))}><div class="frame"><nav class="slides-nav"><div class="slide-nav-butn"><button class="slides-nav__button slides-nav__button--prev" aria-label="Previous slide"><svg><path d="M1.176 11.532a.5.5 0 00-.352.936c5.228 1.96 9.475 5.555 12.752 10.797a.5.5 0 00.848-.53c-3.39-5.424-7.81-9.163-13.248-11.203z"></path><path d="M1.176 12.468a.5.5 0 01-.352-.936C6.052 9.572 10.3 5.978 13.576.735a.5.5 0 01.848.53c-3.39 5.424-7.81 9.163-13.248 11.203z"></path><path d="M1 12.5a.5.5 0 110-1h53a.5.5 0 110 1H1z"></path></svg></button><button class="slides-nav__button slides-nav__button--next" aria-label="Next slide"><svg><path d="M53.824 11.532a.5.5 0 01.352.936c-5.228 1.96-9.475 5.555-12.752 10.797a.5.5 0 01-.848-.53c3.39-5.424 7.81-9.163 13.248-11.203z"></path><path d="M53.824 12.468a.5.5 0 00.352-.936C48.948 9.572 44.7 5.978 41.424.735a.5.5 0 00-.848.53c3.39 5.424 7.81 9.163 13.248 11.203z"></path><path d="M54 12.5a.5.5 0 100-1H1a.5.5 0 100 1h53z"></path></svg></button></div><div class="slides-nav__index"><span class="slides-nav__index-current"><span>1</span></span> \u2014 <span class="slides-nav__index-total">5</span></div></nav></div><div class="slideshow"><!--[-->`);
      ssrRenderList(unref(data), (item, index) => {
        _push(`<figure class="${ssrRenderClass(`slide ${index === 0 ? "slide--current" : ""}`)}"><div class="slide__img-wrap"><div class="slide__img bg-img"${ssrRenderAttr("data-background", item.background)}></div></div><figcaption class="slide__caption"><h1 class="slides__caption-headline"><span class="text-row sub-title mb-15"><span>\xA9 ${ssrInterpolate(item.year)} ${ssrInterpolate(item.type)}</span></span><span class="text-row"><span>${ssrInterpolate(item.title)}</span></span></h1>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "slides__caption-link sub-title mt-30",
          href: "/dark/project-details1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Explore</span>`);
            } else {
              return [
                createVNode("span", null, "Explore")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</figcaption></figure>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Showcases/CircleSlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Circle Slider`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShowcasesNavigation = __nuxt_component_0;
      const _component_ShowcasesMenu = __nuxt_component_1;
      const _component_ShowcasesCircleSlider = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ShowcasesNavigation, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_ShowcasesMenu, { lightMode: true }, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_ShowcasesCircleSlider, { lightMode: true }, null, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/showcase-circle-slider/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-900dbfc0.mjs.map

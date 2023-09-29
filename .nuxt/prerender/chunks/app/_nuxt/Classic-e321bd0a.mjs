import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/vue/server-renderer/index.mjs';
import { d as data } from './blog-cbc1d2f4.mjs';

const _sfc_main = {
  __name: "Classic",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list section-padding sub-bg" }, _attrs))}><div class="container"><div class="sec-head mb-80"><div class="row"><div class="col-lg-8"><h6 class="sub-title wow fadeInUp">sessions</h6><h2 class="d-rotate wow"><span class="rotate-text" style="${ssrRenderStyle({ "font-size": "1.2em" })}">\u7BC0\u76EE\u5834\u6B21</span></h2></div><div class="col-lg-4 d-flex align-items-center"><div class="full-width d-flex justify-content-end justify-end"><div class="vew-all wow fadeIn"></div></div></div></div></div><!--[-->`);
      ssrRenderList(unref(data), (item, index) => {
        _push(`<div class="${ssrRenderClass(`item bord-thin-top ${index === unref(data).length - 1 ? "bord-thin-bottom" : ""} wow fadeInUp`)}"${ssrRenderAttr("data-wow-delay", `${index * 0 + 0}s`)}><div class="row"><div class="col-lg-3"><div class="info md-mb30"><div class="d-flex align-items-center"><div class="author"><div class="img"></div></div></div></div></div><div class="col-lg-6"><div class="cont"><h5 class="mb-10 underline">`);
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
        _push(`</h5><div class="tags"><!--[-->`);
        ssrRenderList(item.tags, (tag, idx) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/dark/blog-classic",
            key: idx
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
        _push(`<!--]--></div></div></div><div class="col-lg-3 d-flex align-items-center justify-end"><div class="ml-auto"><span class="date sub-title fz-13 opacity-8 mb-30">${ssrInterpolate(item.date)}</span></div></div></div><div class="background bg-img valign text-center"${ssrRenderAttr("data-background", item.image)} data-overlay-dark="4"><div class="more ontop full-width"></div></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Blog/Classic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Classic-e321bd0a.mjs.map

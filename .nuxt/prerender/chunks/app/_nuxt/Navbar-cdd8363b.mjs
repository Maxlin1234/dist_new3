import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, onUnmounted, mergeProps, withCtx, createVNode } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/vue/server-renderer/index.mjs';

const _imports_0 = "" + publicAssetsURL("dark/assets/imgs/LOGO.png");
const _imports_1 = "" + publicAssetsURL("dark/assets/imgs/LOGOwhite.png");
const _sfc_main = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: ["lightMode", "mainBg", "subBg", "noStatic", "curve"],
  setup(__props) {
    function handleScroll() {
      const bodyScroll = window.scrollY;
      const navbar = document.querySelector(".navbar");
      if (bodyScroll > 300)
        navbar.classList.add("nav-scroll");
      else
        navbar.classList.remove("nav-scroll");
    }
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: `navbar navbar-expand-lg ${__props.curve ? "nav-crev" : ""} ${__props.noStatic ? "" : "static"} ${__props.mainBg ? "main-bg" : ""} ${__props.subBg ? "sub-bg" : ""}`
      }, _attrs))}><div class="container"><a class="logo icon-img-100" href="#">`);
      if (__props.lightMode) {
        _push(`<img${ssrRenderAttr("src", _imports_0)} alt="logo">`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "width": "160px", "height": "24px" })}" alt="logo">`);
      }
      _push(`</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-bar"><i class="fas fa-bars"></i></span></button><div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-item",
        to: `/${__props.lightMode ? "light" : "dark"}/home-onepage`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="rolling-text" style="${ssrRenderStyle({ "font-size": "1.5em" })}"${_scopeId}>\u9996\u9801</span>`);
          } else {
            return [
              createVNode("span", {
                class: "rolling-text",
                style: { "font-size": "1.5em" }
              }, "\u9996\u9801")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-item",
        to: `/${__props.lightMode ? "light" : "dark"}/page-about`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="rolling-text" style="${ssrRenderStyle({ "font-size": "1.5em" })}"${_scopeId}>\u95DC\u65BC\u6211\u5011</span>`);
          } else {
            return [
              createVNode("span", {
                class: "rolling-text",
                style: { "font-size": "1.5em" }
              }, "\u95DC\u65BC\u6211\u5011")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-item",
        to: `/${__props.lightMode ? "light" : "dark"}/sessions`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="rolling-text" style="${ssrRenderStyle({ "font-size": "1.5em" })}"${_scopeId}>\u56DB\u5927\u55AE\u5143</span>`);
          } else {
            return [
              createVNode("span", {
                class: "rolling-text",
                style: { "font-size": "1.5em" }
              }, "\u56DB\u5927\u55AE\u5143")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-item",
        to: `/${__props.lightMode ? "light" : "dark"}/schedule`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="rolling-text" style="${ssrRenderStyle({ "font-size": "1.5em" })}"${_scopeId}>\u7BC0\u76EE\u5834\u6B21</span>`);
          } else {
            return [
              createVNode("span", {
                class: "rolling-text",
                style: { "font-size": "1.5em" }
              }, "\u7BC0\u76EE\u5834\u6B21")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></li></ul></div></div></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Navbar-cdd8363b.mjs.map

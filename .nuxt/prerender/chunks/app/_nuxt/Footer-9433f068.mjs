import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, unref, createTextVNode, toDisplayString, onUnmounted } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D4/geekfolio_nuxtjs/node_modules/vue/server-renderer/index.mjs';
import { d as data$2 } from './blog-cbc1d2f4.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { i as isInView } from './isInView-318b554b.mjs';
import { _ as __nuxt_component_0$1 } from './client-only-29ef7f45.mjs';

const _imports_0$2 = "" + publicAssetsURL("dark/assets/imgs/background/font.png");
const _sfc_main$b = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header-main full-height valign bg-img parallaxie",
        "data-background": "/dark/assets/imgs/background/14.jpg",
        "data-overlay-dark": "2"
      }, _attrs))}><div class="container ontop"><div class="row"><div class="col-lg-8"><div class="caption" style="${ssrRenderStyle({ "margin-bottom": "150px" })}"><div class="fonts"><img${ssrRenderAttr("src", _imports_0$2)}></div></div></div><div class="col-lg-4 d-flex align-items-end justify-content-end justify-end"><div class="d-flex align-items-center"><div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/portfolio-grid",
        class: "hover-this"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="circle-button hover-anim"${_scopeId}><div class="rotate-circle fz-30 text-u"${_scopeId}><svg class="textcircle" viewBox="0 0 500 500"${_scopeId}><defs${_scopeId}><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"${_scopeId}></path></defs><text${_scopeId}><textPath xlink:href="#textcircle" textLength="900"${_scopeId}>DOME 2.0 - DOME 2.0 -</textPath></text></svg></div><div class="arrow"${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></div></div>`);
          } else {
            return [
              createVNode("div", { class: "circle-button hover-anim" }, [
                createVNode("div", { class: "rotate-circle fz-30 text-u" }, [
                  (openBlock(), createBlock("svg", {
                    class: "textcircle",
                    viewBox: "0 0 500 500"
                  }, [
                    createVNode("defs", null, [
                      createVNode("path", {
                        id: "textcircle",
                        d: "M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                      })
                    ]),
                    createVNode("text", null, [
                      createVNode("textPath", {
                        "xlink:href": "#textcircle",
                        textLength: "900"
                      }, "DOME 2.0 - DOME 2.0 -")
                    ])
                  ]))
                ]),
                createVNode("div", { class: "arrow" }, [
                  (openBlock(), createBlock("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 18 18",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                      fill: "currentColor"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><h6 class="sub-title">09.22 - 10.01<br>10.14 - 12.24</h6></div></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Header.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$b;
const _sfc_main$a = {
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list section-padding sub-bg" }, _attrs))}><div class="container"><div class="sec-head mb-80"><div class="row"><div class="col-lg-8"><h6 class="sub-title wow fadeInUp">sessions</h6><h2 class="d-rotate wow"><span class="rotate-text">\u7BC0\u76EE\u5834\u6B21</span></h2></div><div class="col-lg-4 d-flex align-items-center"><div class="full-width d-flex justify-content-end justify-end"><div class="vew-all wow fadeIn"></div></div></div></div></div><!--[-->`);
      ssrRenderList(unref(data$2), (item, index) => {
        _push(`<div class="${ssrRenderClass(`item bord-thin-top ${index === unref(data$2).length - 1 ? "bord-thin-bottom" : ""} wow fadeInUp`)}"${ssrRenderAttr("data-wow-delay", `${index * 0 + 0}s`)}><div class="row"><div class="col-lg-3"><div class="info md-mb30"><div class="d-flex align-items-center"><div class="author"><div class="img"></div></div></div></div></div><div class="col-lg-6"><div class="cont"><h5 class="mb-10 underline">`);
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Blog.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$a;
const _imports_0$1 = "" + publicAssetsURL("dark/assets/imgs/about/\u9ED1\u5DDD.jpg");
const _sfc_main$9 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about section-padding" }, _attrs))}><div class="container"><div class="row md-marg"><div class="col-lg-6 valign"><div class="cont md-mb50"><h6 class="sub-title opacity-8 wow fadeInUp"></h6><h2 class="d-slideup wow"><span class="sideup-text"><span class="up-text">FUTURE VISION LAB 2023<span class="sub-font"></span></span></span><span class="sideup-text"><span class="up-text"></span></span></h2><div class="text mt-20 wow fadeIn" data-wow-delay=".5s"><p>\u81FA\u7063\u7576\u4EE3\u6587\u5316\u5BE6\u9A57\u5834\uFF08C-LAB\uFF09\u81EA 2020 \u5E74\u6B63\u5F0F\u555F\u52D5\u300C\u79D1\u6280\u5A92\u9AD4\u5BE6\u9A57\u5E73\u53F0\u300D\uFF0C\u8457\u91CD\u65BC\u5A92\u9AD4\u5BE6\u9A57\u5275\u65B0\u8207\u793E\u6703\u93C8\u7D50\uFF0C\u4EE5\u8DE8\u57DF\u3001\u5171\u5275\u3001\u5354\u4F5C\u65B9\u5F0F\uFF0C\u6253\u9020\u6587\u5316\u8207\u79D1\u6280\u7684\u5BE6\u9A57\u5E73\u53F0\u3002 \u6574\u5408\u81FA\u7063\u6587\u5316\u8207\u79D1\u6280\u7684\u8CC7\u6E90\uFF0C\u5A92\u5408\u6587\u5316\u8207\u79D1\u6280\u9818\u57DF\u5171\u5275\uFF0C\u5176\u4E2D\u300C\u672A\u4F86\u8996\u89BA\u5BE6\u9A57\u5BA4\u300D\u63A2\u7D22\u79D1\u6280\u5A92\u9AD4\u7684\u8996\u89BA\u6975\u9650\u70BA\u5BE6\u9A57\u76EE\u6A19\uFF0C\u4EE5\u81FA\u7063\u5149\u96FB\u6280\u8853\u8207\u7522\u696D\u70BA\u57FA\u790E\uFF0C\u8F14\u4EE5\u5F71\u50CF\u7684\u904B\u7B97\u3001\u5275\u4F5C\u8207\u8EDF\u786C\u9AD4\u6574\u5408\uFF0C\u4F01\u5716\u52FE\u52D2\u51FA\u672A\u4F86\u8996\u89BA\u7684\u8DE8\u57DF\u9858\u666F\u3002 </p></div></div></div><div class="col-lg-6"><div class="img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/About.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Marq.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$7 = {
  __name: "Services",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services section-padding pb-0 block-pattern" }, _attrs))}><div class="container"><div class="sec-head mb-80"><div class="row"><div class="col-lg-5"><h6 class="sub-title opacity-8 wow fadeInUp"></h6><h2 class="d-rotate wow"></h2></div><div class="col-lg-4 d-flex align-items-center"><div class="text d-rotate wow md-mb30"><p class="rotate-text"></p></div></div></div></div></div><div class="container-fluid rest"><div class="serv-items-crev"></div></div><div class="bg-pattern bg-img"${ssrRenderAttr("data-background", `${__props.lightMode ? "/light/" : "/dark/"}assets/imgs/patterns/bg-line-1.svg`)}></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Services.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$7;
const data$1 = [
  {
    id: 1,
    image: "assets/imgs/portfolio/gallery/1.jpg",
    number: "01.",
    type: "TAICCA Spotlight",
    title: "\u79FB\u52D5\u6545\u4E8B\u5C4B\u300A\u6708\u7403\u5EA6\u5047\u6751\u300B",
    text: "\u79FB\u52D5\u6545\u4E8B\u5C4B\u662F\u4E00\u500B\u8DE8\u8D8A\u908A\u5883\u70BA\u6982\u5FF5\u5275\u4F5C\u7684\u89AA\u5B50\u5287\u5834\uFF0C\u91DD\u5C0D\u5152\u7AE5\u85DD\u8853\u53CA\u79D1\u6280\u4E92\u52D5\u767C\u5C55\u5275\u65B0\u9AD4\u9A57\uFF0C\u7D50\u5408\u81FA\u7063\u5E74\u8F15\u85DD\u8853\u5BB6\u5408\u4F5C\u767C\u5C55\u539F\u5275\u52D5\u756B\uFF0C\u4EE5\u5305\u570D\u89C0\u773E\u7684\u6C89\u6D78\u5F0F\u52D5\u756B\u70BA\u6F14\u51FA\u4E3B\u8EF8\uFF0C\u7531\u5287\u5834\u8AAA\u66F8\u4EBA\u5F15\u9818\u89C0\u773E\u5011\u9032\u5165\u6545\u4E8B\uFF0C\u85C9\u7531\u6A21\u64EC\u60C5\u5883\u914D\u5408\u5287\u5834\u8072\u5149\u7B49\u6578\u4F4D\u5A92\u9AD4\u88DD\u7F6E\uFF0C\u71DF\u9020\u4E00\u500B\u5B8C\u5168\u8EAB\u6B77\u5176\u5883\u3001\u5145\u6EFF\u8C50\u5BCC\u60F3\u50CF\u7684\u5275\u65B0\u5287\u5834\u4E92\u52D5\u9AD4\u9A57\u3002 "
  },
  {
    id: 2,
    image: "assets/imgs/portfolio/gallery/2.jpg",
    number: "02.",
    type: "SAT Fest",
    title: " \u99AC\u723E\u6ED5\u30FB\u827E\u85A9\u514B\u30FB\u5FB7\u5E0C\u723E\u300A\u8702\u6E67\u300B (\u5FB7\u570B) ",
    text: "\u7FA4\u9AD4\u7684\u8702\u6E67\u662F\u4E00\u7A2E\u70BA\u4E86\u751F\u5B58\u800C\u7522\u751F\u7684\u884C\u70BA\u73FE\u8C61\uFF0C\u4F46\u66F4\u591A\u6642\u5019\uFF0C\u5B83\u662F\u6EC5\u7D55\u7684\u524D\u594F\u3002 \u7D50\u7FA4\u98DB\u884C\uFF0C\u5F9E\u5FB7\u570B\u8DE8\u8D8A\u963F\u723E\u5351\u65AF\u5C71\uFF0C\u76F4\u5954\u5730\u4E2D\u6D77\u3002\u5C0F\u578B\u9CE5\u9077\u5F99\u7684\u904E\u7A0B\u4E2D\uFF0C\u8DEF\u7D93\u67AF\u7AED\u3001\u904E\u5EA6\u958B\u767C\u7684\u571F\u5730\u3002\u77E5\u66F4\u9CE5\u3001\u5C71\u96C0\u548C\u9EBB\u96C0\u901A\u5E38\u4E0D\u6703\u9077\u79FB\u5982\u6B64\u9059\u9060\u7684\u8DDD\u96E2\uFF0C\u4F46\u5728\u4E0D\u4E45\u7684\u5C07\u4F86\uFF0C\u9019\u6A23\u7684\u73FE\u8C61\u53EF\u80FD\u6703\u767C\u751F\u3002\u300A\u8702\u6E67\u300B\u9019\u4EF6\u4F5C\u54C1\u5448\u73FE\u7531\u4E09\u7DAD\u5716\u6240\u62FC\u8CBC\u51FA\u7684\u9CE5\u77B0\u8996\u89D2\uFF0C\u5C55\u793A\u6C23\u5019\u8B8A\u5316\u5F8C\u6B50\u6D32\u7684\u90E8\u5206\u6A23\u8C8C\u3002"
  },
  {
    id: 3,
    image: "assets/imgs/portfolio/gallery/3.jpg",
    number: "03.",
    type: "TAICCA Spotlight",
    title: "\u8B1D\u6587\u6BC5\u300A\u5F7C\u5CB8 in DOME\u300B",
    text: "\u8B1D\u6587\u6BC5\u662F\u4E00\u4F4D\u7814\u7A76\u7269\u7406\u8207\u6578\u4F4D\u865B\u64EC\u4E4B\u806F\u7E6B\u6027\u7684\u85DD\u8853\u5275\u4F5C\u8005\u3002\u4ED6\u60F3\u50CF\u51FA\u65B0\u7684\u4E16\u754C\uFF0C\u4E26\u5728\u85DD\u8853\u8A2D\u8A08\u3001\u5EFA\u7BC9\u7A7A\u9593\u3001\u96FB\u8166\u6A21\u64EC\u5716\u50CF\u9593\u5617\u8A66\u5275\u9020\u4E00\u500B\u80FD\u5920\u7522\u751F\u93C8\u7D50\u7684\u8A9E\u8A00\u8207\u7F8E\u5B78\u3002"
  }
];
const _sfc_main$6 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    function handleShowTabs() {
      isInView({
        selector: ".portfolio-fixed .sub-bg .cont",
        isElements: true,
        callback(element) {
          element.classList.add("current");
          document.querySelector("#" + element.getAttribute("data-tab")).classList.add("current");
        },
        whenOutOfView(element) {
          element.classList.remove("current");
          document.querySelector("#" + element.getAttribute("data-tab")).classList.remove("current");
        }
      });
      const leftSide = document.getElementById("sticky_item");
      if (!leftSide)
        return;
      const width = leftSide.getBoundingClientRect().width;
      const portfolio = document.querySelector(".portfolio-fixed").getBoundingClientRect();
      if (portfolio.top < 75 && portfolio.height / 2 < portfolio.bottom) {
        leftSide.style.position = "fixed";
        leftSide.style.top = "0px";
        leftSide.style.width = width + "px";
        leftSide.classList.remove("is_stuck");
      } else if (portfolio.height / 2 > portfolio.bottom) {
        leftSide.style.position = "absolute";
        leftSide.style.top = "auto";
        leftSide.style.bottom = "0";
        leftSide.style.width = width + "px";
        leftSide.classList.add("is_stuck");
        document.querySelector(`#tab-${document.querySelectorAll("[data-tab]").length}`).classList.add("current");
      } else {
        leftSide.style.position = "relative";
        leftSide.style.top = "unset";
        leftSide.style.bottom = "unset";
        leftSide.style.width = "auto";
      }
    }
    onUnmounted(() => {
      window.removeEventListener("scroll", handleShowTabs);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "portfolio-fixed",
        style: { "margin-top": "60px" }
      }, _attrs))}><div class="container-fluid rest"><div class="row"><div class="col-lg-6 rest" style="${ssrRenderStyle({ "position": "relative" })}"><div class="left" id="sticky_item"><!--[-->`);
      ssrRenderList(unref(data$1), (item, index) => {
        _push(`<div${ssrRenderAttr("id", `tab-${index + 1}`)} class="img bg-img"${ssrRenderAttr("data-background", `${__props.lightMode ? "/light/" : "/dark/"}${item.image}`)}></div>`);
      });
      _push(`<!--]--></div></div><div class="col-lg-6 sub-bg right"><!--[-->`);
      ssrRenderList(unref(data$1), (item, index) => {
        _push(`<div class="${ssrRenderClass(`cont ${index === 0 ? "active" : ""}`)}"${ssrRenderAttr("data-tab", `tab-${index + 1}`)}><div class="img-hiden"><img${ssrRenderAttr("src", `${__props.lightMode ? "/light/" : "/dark/"}${item.image}`)} alt=""></div><span class="sub-title mb-15">${ssrInterpolate(item.number)} ${ssrInterpolate(item.type)}</span><h2 class="mb-15">${ssrInterpolate(item.title)}.</h2><div class="row"><div class="col-md-9"><p>${ssrInterpolate(item.text)}.</p><div class="vew-all mt-50 ml-25"></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Portfolio.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$6;
const _imports_0 = "" + publicAssetsURL("dark/assets/imgs/about/sq1.jpg");
const _imports_1 = "" + publicAssetsURL("dark/assets/imgs/about/sq2.jpg");
const _sfc_main$5 = {
  __name: "Intro",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "intro-corp section-padding" }, _attrs))}><div class="container"><div class="row justify-content-around"><div class="col-lg-5 valign md-mb50"><div class="imgs mb-80"><div class="img1 wow fadeInUp"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="img2 wow fadeInLeft"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div></div><div class="col-lg-5 valign"><div class="cont"><div class="text"><h2 class="d-slideup wow"><span class="sideup-text"><span class="up-text">\u56DB\u5927\u985E\u5225</span></span><span class="sideup-text"></span><span class="sideup-text"></span></h2></div><div class="accordion bord mt-40"><div class="item mb-15 wow fadeInUp" data-wow-delay=".1s"><div class="title"><h6 class="fz-18">TAICCA Spotlight</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">2023 \u81FA\u7063\u6587\u535A\u6703\uFF0CFUTURE VISION LAB 2023\u8207\u6587\u7B56\u9662\u651C\u624B\uFF0C\u5408\u4F5C\u7B56\u5283\u300CTAICCA Spotlight\u55AE\u5143\u300D\uFF0C\u4E26\u5728\u521D\u767B\u5834\u7684 Dome 2.0 \u5C07 4 \u652F\u512A\u79C0\u7684\u53F0\u7063\u539F\u751F\u4F5C\u54C1\u5E36\u7D66\u89C0\u773E\u3002 \u5F9E\u7D50\u5408\u81FA\u7063\u63D2\u756B\u7684\u4E92\u52D5\u5152\u7AE5\u5287\u5834\u3001\u7372\u5F97\u570B\u969B\u5F71\u5C55\u5927\u734E\u80AF\u5B9A\u7684VR\u4F5C\u54C1\u8F49\u8B6F\u3001\u5728\u5730\u7E6A\u672C\u8207\u52D5\u756B\u5718\u968A\u7684\u8DE8\u57DF\u5171\u5275\u3001\u5230\u50B3\u7D71\u85DD\u8853\u8207\u81FA\u7063\u5730\u666F\u7684\u7D50\u5408\uFF0C\u300CTAICCA Spotlight\u300D\u55AE\u5143\u5E0C\u671B\u80FD\u5920\u5E36\u9818\u89C0\u773E\u8E0F\u5165\u4E0D\u4E00\u6A23\u7684\u8996\u89BA\u8207\u8072\u97F3\u9957\u5BB4\uFF0C\u5728\u5168\u65B0\u6253\u9020\u7684\u7A79\u9802\u5287\u5834\u4E2D\uFF0C\u6C89\u6D78\u65BC\u81FA\u7063\u6587\u5316\u8207\u8C50\u76DB\u7684\u5275\u4F5C\u529B\u5E36\u4F86\u7684\u611F\u52D5\u3002 </p></div></div><div class="item mb-15 wow fadeInUp" data-wow-delay=".3s"><div class="title"><h6 class="fz-18">\u5FB5\u4EF6\u4F5C\u54C1</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">\u4F34\u96A8\u786C\u9AD4\u5168\u9762\u5347\u7D1A\u5F8C\uFF0C\u300CFUTURE VISION LAB 2023\u300D\u91DD\u5C0D\u500B\u4EBA\u6216\u5718\u968A\u958B\u653E\u5FB5\u4EF6\uFF0C\u5FB5\u96C6\u6C89\u6D78\u5F71\u97F3\u8207\u8DE8\u57DF\u5C55\u6F14\u4E4B\u4F5C\u54C1\uFF0C\u5C55\u73FE\u81FA\u7063\u84EC\u52C3\u7684\u5275\u4F5C\u52D5\u80FD\u3002</p></div></div><div class="item wow fadeInUp" data-wow-delay=".5s"><div class="title"><h6 class="fz-18">SAT Fest</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">\u4ECA\u5E74\u300C\u79D1\u6280\u5A92\u9AD4\u5BE6\u9A57\u5E73\u53F0\u300D\u8207\u52A0\u62FF\u5927 SAT \u79D1\u6280\u85DD\u8853\u4E2D\u5FC3\uFF08The Society for Arts and Technology\uFF09\u5408\u4F5C\uFF0C\u5C55\u51FA SAT Fest \u85DD\u8853\u7BC0\u7684\u7CBE\u9078\u4F5C\u54C1\u5171 7 \u4EF6\u3002\u81EA 2012 \u5E74\u9996\u5C46\u4EE5\u4F86\uFF0CSAT Fest \u5DF2\u6210\u70BA\u6C88\u6D78\u5F0F\u5275\u4F5C\u7684\u91CD\u8981\u6D3B\u52D5\uFF0C\u70BA\u5BE6\u9A57\u548C\u85DD\u8853\u7684\u5BE6\u8E10\u63D0\u4F9B\u4E86\u5145\u8DB3\u7684\u5275\u4F5C\u8207\u5C55\u6F14\u7A7A\u9593\u3002 SAT Fest \u96C6\u7D50\u4E86\u591A\u5143\u4E14\u98A8\u683C\u5404\u7570\u7684\u7A79\u9802\u6295\u5F71\u7CBE\u9078\u77ED\u7247\uFF0C\u6FC0\u767C\u4E86\u6578\u5343\u540D\u89C0\u773E\u7684\u60F3\u50CF\u529B\uFF0C\u4E26\u5C55\u73FE\u4E86\u4E00\u767E\u591A\u540D\u4F86\u81EA\u52A0\u62FF\u5927\u548C\u570B\u969B\u7684\u8996\u89BA\u548C\u8072\u97F3\u85DD\u8853\u5BB6\u7684\u5275\u4F5C\u5B87\u5B99\u548C\u5275\u610F\u8996\u91CE\u3002</p></div></div><div class="item wow fadeInUp" data-wow-delay=".7s"><div class="title"><h6 class="fz-18">\u7B56\u5283\u9080\u8ACB</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">\u300CFUTURE VISION LAB 2023\u300D\u9080\u8ACB\u66FE\u53C3\u8207FUTURE VISION LAB\u5BE6\u9A57\u8A08\u756B\u7684\u53F0\u7063\u85DD\u8853\u5BB6\u548C\u5275\u4F5C\u5718\u968A\uFF0C\u4EE5\u5176\u8C50\u5BCC\u7684\u6C89\u6D78\u5167\u5BB9\u88FD\u4F5C\u7D93\u9A57\u548C\u5275\u65B0\u7684\u8996\u89D2\uFF0C\u878D\u5408\u4ECA\u5E74\u65B0\u5834\u57DF\u7684\u898F\u683C\uFF0C\u9032\u884C\u5168\u65B0\u88FD\u4F5C\u548C\u539F\u4F5C\u6539\u88FD\u3002 \u5728\u6587\u535A\u6703\u671F\u9593\uFF0C\u5C07\u5C55\u51FA\u5171\u8A08\u5341\u4EF6\u4EE4\u4EBA\u9A5A\u8277\u7684\u4F5C\u54C1\uFF0C\u6DB5\u84CB\u591A\u7A2E\u8868\u73FE\u5F62\u5F0F\uFF0C\u5982\u6F14\u7B97\u751F\u6210\u3001\u5BE6\u9A57\u52D5\u756B\u3001\u96FB\u5F71\u77ED\u7247\u4EE5\u53CA\u5BE6\u9A57\u6027\u5C55\u6F14\uFF0C\u5448\u73FE\u591A\u5143\u800C\u8C50\u5BCC\u7684\u85DD\u8853\u98A8\u8C8C\uFF0C\u5C55\u73FE\u53F0\u7063\u85DD\u8853\u5BB6\u548C\u5275\u4F5C\u5718\u968A\u7684\u5275\u610F\u80FD\u91CF\u3002 </p></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Intro.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testim-crv section-padding main-colorbg text-dark position-re" }, _attrs))}><div class="container ontop"><div class="row"><div class="col-md-6"><div class="sec-head md-mb50"><h6 class="sub-title wow fadeInUp">ARTIST</h6><h2 class="d-rotate wow"><span class="rotate-text">\u85DD\u8853\u5BB6\u4ECB\u7D39</span></h2></div></div><div class="col-md-6 valign"><div class="swiper-controls testim-controls arrow-out d-flex justify-content-end justify-end-sm full-width"><div class="d-flex"><div class="swiper-button-prev"><span class="left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="#1d1d1d"></path></svg></span></div><div class="swiper-button-next ml-50"><span class="right"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="#1d1d1d"></path></svg></span></div></div></div></div><div class="col-12 mt-80"><div class="testim-swiper testim-swiper3 to-out">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></div><div class="bg-pattern bg-img bg-repeat" data-background="/dark/assets/imgs/patterns/noise.png"></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Testimonials.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_8 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "ImageSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "back-image states bg-img parallaxie",
        "data-background": "/dark/assets/imgs/background/13.jpg",
        "data-overlay-dark": "3"
      }, _attrs))}><div class="container box position-re"><ul class="rest"><li class="sd-dark"><span class="numb">DOME 2.0</span></li><li class="blur"><h5><br>\u6236\u5916\u7A79\u9802\u5287\u5834</h5><span class="icon pe-7s-paper-plane"></span></li></ul></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/ImageSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_9 = _sfc_main$3;
const data = [
  {
    id: 1,
    image: "/dark/assets/imgs/arch/works/1.jpg",
    year: "2023",
    type: "\u8FF7\u5BAE\u662F\u4E00\u500B\u4FC3\u4F7F\u4EBA\u4E0D\u65B7\u79FB\u52D5\u7684\u7A7A\u9593\u3002 \u4FEF\u8996\u4E0B\u770B\uFF0C\u6211\u5011\u5C0D\u7DDA\u689D\u3001\u5716\u578B\u6216\u9EDE\u7DB4\u7269\u7522\u751F\u5BA2\u89C0\u53EF\u5340\u5206\u7684\u6982\u5FF5\u3002 \u5728\u8FF7\u5BAE\u4E2D\uFF0C\u7A7A\u9593\u69CB\u6210\u7684\u89C0\u770B\u8A8D\u77E5\u4E0A\u7684\u7279\u5B9A\u8996\u89BA\u885D\u64CA\uFF0C\u7121\u6CD5\u64FA\u812B\u4E14\u9677\u5165\u65B9\u5411\u8FF7\u5931\u7684\u72C0\u614B\u81F4\u4F7F\u6211\u5011\u8F49\u63DB\u5C0D\u751F\u6D3B\u7684\u4E3B\u89C0\u611F\u77E5\u3002 \u6BCF\u4E00\u79D2\u5C0D\u65BC\u8FF7\u5BAE\u7A7A\u9593\u7684\u611F\u77E5\u90FD\u96A8\u8457\u6211\u5011\u4E0D\u9593\u6BB5\u7684\u79FB\u52D5\u8B8A\u5316\u3002 \u5EE3\u5834\u3001\u8857\u9053\u3001\u901A\u9053\u3001\u8D70\u5ECA\u3001\u623F\u9593\u7BC9\u69CB\u4E86\u57CE\u5E02\u8FF7\u5BAE\u7684\u52D5\u614B\u6210\u5F62\uFF0C\u540C\u6642\u5617\u8A66\u96C6\u7D50\u8FF7\u5BAE\u672C\u8EAB\u5EFA\u7BC9\u7684\u5947\u5E7B\u611F\u8207\u7A7F\u8D8A\u6642\u7A7A\u7684\u8996\u89BA\u9AD4\u9A57\u81F3\u9019\u90E8\u77ED\u7247\u3002",
    width: 5
  },
  {
    id: 2,
    image: "/dark/assets/imgs/arch/works/3.jpg",
    year: "2023",
    type: "\u5927\u81EA\u7136\u662F\u5947\u5999\u800C\u8070\u660E\u7684\u3002\u6B63\u5982\u9054\u723E\u6587\u6559\u5C0E\u7684\uFF0C\u80FD\u6709\u6548\u5730\u5373\u8208\u767C\u63EE\u624D\u80FD\u81F4\u52DD\u3002 \u6709\u4E9B\u7269\u7A2E\u5728\u53D7\u5230\u5A01\u8105\u6642\uFF0C\u6703\u6062\u5FA9\u5230\u65E9\u671F\u7684\u5F62\u614B\uFF0C\u6709\u4E9B\u7269\u7A2E\u5247\u6703\u8207\u9130\u8FD1\u7684\u751F\u7269\u5EFA\u7ACB\u5BC4\u751F\u95DC\u4FC2\uFF0C\u800C\u6700\u5177\u5275\u9020\u529B\u7684\u7269\u7A2E\u6703\u6539\u8B8A\u81EA\u5DF1\u7684\u8EAB\u9AD4\u4F86\u6A21\u4EFF\u548C\u5F15\u8A98\u6BEB\u7121\u6212\u5FC3\u7684\u5925\u4F34\u3002\u300A\u862D\u82B1\u8207\u871C\u8702\u300B\u662F\u4E00\u9996\u8868\u73FE\u4E3B\u7FA9\u7684 VR \u980C\u8A5E\uFF0C\u900F\u904E\u4E00\u7CFB\u5217\u57FA\u56E0\u611B\u60C5\u6545\u4E8B\u9032\u884C\u63A2\u7D22\uFF0C\u6B4C\u980C\u751F\u547D\u70BA\u4E86\u751F\u5B58\u7684\u640F\u9B25\u7CBE\u795E\u3002",
    width: 6
  },
  {
    id: 3,
    image: "/dark/assets/imgs/arch/works/2.jpg",
    year: "2023",
    type: "\u7FA4\u9AD4\u7684\u8702\u6E67\u662F\u4E00\u7A2E\u70BA\u4E86\u751F\u5B58\u800C\u7522\u751F\u7684\u884C\u70BA\u73FE\u8C61\uFF0C\u4F46\u66F4\u591A\u6642\u5019\uFF0C\u5B83\u662F\u6EC5\u7D55\u7684\u524D\u594F\u3002 \u7D50\u7FA4\u98DB\u884C\uFF0C\u5F9E\u5FB7\u570B\u8DE8\u8D8A\u963F\u723E\u5351\u65AF\u5C71\uFF0C\u76F4\u5954\u5730\u4E2D\u6D77\u3002\u5C0F\u578B\u9CE5\u9077\u5F99\u7684\u904E\u7A0B\u4E2D\uFF0C\u8DEF\u7D93\u67AF\u7AED\u3001\u904E\u5EA6\u958B\u767C\u7684\u571F\u5730\u3002\u77E5\u66F4\u9CE5\u3001\u5C71\u96C0\u548C\u9EBB\u96C0\u901A\u5E38\u4E0D\u6703\u9077\u79FB\u5982\u6B64\u9059\u9060\u7684\u8DDD\u96E2\uFF0C\u4F46\u5728\u4E0D\u4E45\u7684\u5C07\u4F86\uFF0C\u9019\u6A23\u7684\u73FE\u8C61\u53EF\u80FD\u6703\u767C\u751F\u3002\u300A\u8702\u6E67\u300B\u9019\u4EF6\u4F5C\u54C1\u5448\u73FE\u7531\u4E09\u7DAD\u5716\u6240\u62FC\u8CBC\u51FA\u7684\u9CE5\u77B0\u8996\u89D2\uFF0C\u5C55\u793A\u6C23\u5019\u8B8A\u5316\u5F8C\u6B50\u6D32\u7684\u90E8\u5206\u6A23\u8C8C\u3002",
    width: 6
  },
  {
    id: 4,
    image: "/dark/assets/imgs/arch/works/4.jpg",
    year: "2023",
    type: "\u4E00\u500B\u95DC\u65BC\u8A18\u61B6\u548C\u5931\u667A\u75C7\u7684\u6545\u4E8B\u3002\u56DE\u9867\u8A18\u61B6\u6642\u5149\uFF0C\u756B\u9762\u96A8\u884C\u76E4\u7E5E\uFF0C\u9010\u6F38\u9677\u5165\u5931\u667A\u75C7\u7684\u6DF1\u6DF5\uFF0C\u5728\u5976\u5976\u5BB6\u5EA6\u904E\u7684\u6642\u5149\u8B8A\u5F97\u8D8A\u4F86\u8D8A\u56F0\u60D1\u3002 \u8457\u96FB\u5F71\u7684\u9032\u5C55\uFF0C\u8A18\u61B6\u77C7\u4E0A\u4E00\u5C64\u6CE5\u6FD8\u7684\u6E3E\u6C8C\u548C\u6DF7\u4E82\uFF0C\u800C\u63CF\u8FF0\u56DE\u61B6\u7684\u52D5\u756B\u5834\u666F\uFF0C\u4E5F\u6F38\u6F38\u589E\u6DFB\u4E86\u602A\u5947\u611F\u3002 ",
    width: 6
  },
  {
    id: 5,
    image: "/dark/assets/imgs/arch/works/5.jpg",
    year: "2023",
    type: "\u5728\u300A\u661F\u969B\u300B\u4E2D\uFF0C\u6211\u5011\u7684\u5730\u7403\u662F\u5DF2\u77E5\u5B55\u80B2\u751F\u547D\u7684\u552F\u4E00\u661F\u9AD4\uFF0C\u900F\u904E\u5916\u592A\u7A7A\u4E2D\u4E00\u500B\u667A\u6167\u672C\u9AD4\u7684\u93E1\u982D\u5C55\u73FE\u51FA\u4F86\u3002\u96A8\u8457\u93E1\u982D\u7684\u65CB\u8F49\u653E\u5927\u8207\u7E2E\u5C0F\uFF0C\u4F34\u96A8\u8457\u85DD\u8853\u60F3\u50CF\uFF0C\u89C0\u5BDF\u4E4B\u65C5\u5E36\u4F86\u4E86\u751F\u614B\u8B8A\u5316\u548C\u6A5F\u68B0\u8996\u89BA\u7684\u591A\u5C3A\u5EA6\u767C\u6398\uFF1A\u706B\u7130\u5486\u54EE\u4FB5\u5165\u91CE\u751F\u751F\u7269\u5C45\u4F4F\u7684\u5EE3\u95CA\u68EE\u6797\uFF0C\u5230\u878D\u5316\u7684\u51B0\u5C71\u63ED\u793A\u96B1\u85CF\u7684\u8CC7\u8A0A\uFF0C\u5F9E\u53E4\u4EE3\u507D\u79D1\u5B78\uFF08\u5360\u661F\u8853\uFF09\u7684\u5716\u8868\uFF0C\u5230\u4EBA\u5DE5\u667A\u6167\u4E16\u4EE3\u7684\u6F5B\u884C\u6B65\u4F10\uFF1B\u5F9E\u6578\u64DA\u9A45\u52D5\u7684\u98A8\u666F\uFF0C\u5230\u6F14\u7B97\u751F\u6210\u7684\u8996\u89BA\u4F5C\u54C1\uFF1B\u5F9E\u6C23\u5019\u8B8A\u5316\u5230\u751F\u7269\u9077\u5F99\u3002\u9019\u500B\u97F3\u50CF\u4F5C\u54C1\u63D0\u51FA\u4E86\u4E00\u500B\u63A2\u554F\uFF1A\u70BA\u4F55\u8981\u5728\u5DF2\u77E5\u8207\u672A\u77E5\u3001\u58D3\u7E2E\u8207\u5C55\u958B\u7684\u60C5\u5883\u4E0B\u63A2\u7D22\u592A\u7A7A\uFF1F",
    width: 6
  },
  {
    id: 6,
    image: "/dark/assets/imgs/arch/works/6.jpg",
    year: "2023",
    type: "\u4F60\u4E0A\u4E00\u6B21\u771F\u6B63\u82B1\u6642\u9593\u53BB\u4ED4\u7D30\u89C0\u5BDF\u4E00\u500B\u5C0F\u5C0F\u7684\u666E\u901A\u7269\u54C1\u662F\u4EC0\u9EBC\u6642\u5019\uFF1F\u6211\u5011\u6BCF\u65E5\u63A5\u89F8\u5927\u91CF\u7684\u5716\u7247\u548C\u8A0A\u865F\u6642\uFF0C\u4E5F\u88AB\u8A13\u7DF4\u5982\u4F55\u5FEB\u901F\u6ED1\u904E\u8CC7\u8A0A\u548C\u8655\u7406\u5927\u91CF\u7684\u5167\u5BB9\u3002\u9019\u4EF6\u4F5C\u54C1\u662F\u95DC\u65BC\u5F9E\u4E0D\u9593\u65B7\u7684\u6578\u64DA\u6D2A\u6D41\u4E2D\u7372\u5F97\u4F11\u606F\uFF0C\u7DE9\u4E0B\u6B65\u8ABF\uFF0C\u6C89\u601D\u90A3\u4E9B\u6211\u5011\u7D93\u5E38\u5FFD\u7565\u5FAE\u5C0F\u537B\u5E73\u51E1\u7684\u7F8E\u597D\u4E8B\u7269\u3002\u300A\u98A8\u4FE1\u5B50 XYZ\u300B\u900F\u904E\u4F7F\u7528 3D \u651D\u5F71\u6E2C\u91CF\u6383\u63CF\u98A8\u4FE1\u5B50\u7684\u82B1\u5E8F\uFF0C\u63A2\u7D22\u5176\u4E2D\u860A\u542B\u7684\u984F\u8272\u8207\u8272\u8ABF\u3002\u85C9\u7528\u96FB\u8166\u5373\u6642\u8655\u7406\u7684\u8ABF\u7BC0\u548C\u626D\u66F2\u6548\u679C\uFF0C\u5C07\u91CF\u6E2C\u7269\u9AD4\u7684\u8996\u89BA\u7279\u5FB5\u8F49\u5316\u70BA\u4E0D\u540C\u7684\u5716\u50CF\u7BC0\u594F\u3002\u4F5C\u54C1\u97F3\u6A02\u4F86\u81EA\u6CD5\u570B\u624D\u83EF\u6A6B\u6EA2\u7684\u97F3\u6A02\u5BB6\u514B\u840A\u9580\u30FB\u666E\u7279\u6D85\uFF08Cl\xE9ment Putegnat\uFF09\u73FE\u5834\u55AE\u7C27\u7BA1\uFF0F\u5FAA\u74B0\u6F14\u594F\u6703\u7684\u9304\u97F3\uFF0C\u70BA\u4F5C\u54C1\u589E\u6DFB\u4E86\u4E00\u5C64\u8072\u97F3\u6027\u7684\u8A69\u610F\u3002",
    width: 6
  },
  {
    id: 7,
    image: "/dark/assets/imgs/arch/works/7.jpg",
    year: "2023",
    type: "\u300A\u5C0E\u8AD6\uFF1A\u8A08\u91CF\u7D93\u6FDF\u5B78\u300B\u662F\u5C0D\u751F\u6210\u8996\u89BA\u7684\u63A2\u7D22\uFF0C\u900F\u904E\u5BCC\u542B\u5275\u9020\u6027\u7684\u5F71\u50CF\u5C55\u73FE\u4E86\u7D93\u6FDF\u9AD4\u6A21\u578B\u5316\u5F8C\u6240\u7522\u751F\u7684\u591A\u5143\u5143\u7D20\u3002\u5728\u9019\u90E8\u77ED\u7247\u4E2D\uFF0C\u66F2\u7DDA\u5F9E\u7D93\u6FDF\u5B78\u7406\u8AD6\u4E2D\u89E3\u653E\u51FA\u4F86\uFF0C\u50CF\u662F\u5728\u4E00\u500B\u5145\u6EFF\u751F\u6C23\u7684\u6578\u64DA\u5B87\u5B99\u4E2D\u81EA\u7531\u79FB\u52D5\uFF0C\u9032\u884C\u8457\u5EE3\u95CA\u7684\u300C\u81EA\u76F8\u95DC\u300D\u51FD\u6578\u7DE8\u821E\uFF1B\u5716\u5F62\u7DB2\u683C\u754C\u9762\u9032\u5316\u7684\u904E\u7A0B\u4E2D\uFF0C\u5275\u9020\u51FA\u65B0\u7684\u7A7A\u9593\u3001\u5EE3\u95CA\u7684\u754C\u7DDA\u548C\u661F\u5149\u7480\u74A8\u7684\u5929\u9802\u3002",
    width: 6
  },
  {
    id: 8,
    image: "/dark/assets/imgs/arch/works/8.jpg",
    year: "2023",
    type: "\u795E\u5947\u52D5\u7269\u7814\u7A76\u6240\u56DE\u4F86\u4E86\uFF01\u7D50\u5408\u4E2D\u79CB\u7BC0\u3001\u4E16\u754C\u5404\u5730\u6708\u4EAE\u5143\u7D20\u7684\u89AA\u5B50\u5287\u76EE\uFF0C\u4E2D\u79CB\u9650\u5B9A\u6F14\u51FA\uFF1A\u6708\u7403\u5EA6\u5047\u6751\u3002",
    width: 6
  },
  {
    id: 9,
    image: "/dark/assets/imgs/arch/works/9.jpg",
    year: "2023",
    type: "\u5922\u60F3\u52D5\u756B\u8DE8\u9818\u57DF\u8207\u5927\u584A\u6587\u5316\u5408\u4F5C\uFF0C\u5C07\u9EC3\u6E58\u73B2\u8001\u5E2B\u7E6A\u88FD\u7684\u53F0\u7063\u7B2C\u4E00\u672C\u6C34\u5F69\u53E4\u5178\u690D\u7269\u7E6A\u672C\u300A\u690D\u7269\u60C5\u4EBA\u300B\u7CFB\u5217\u4F5C\u54C1\u91CD\u65B0\u8A6E\u91CB\u3002\u6C89\u6D78\u5F0F\u7684\u52D5\u756B\u8A2D\u8A08\u4EE5\u591A\u7DAD\u89D2\u5EA6\u5C55\u73FE\u8C50\u5BCC\u7684\u300C\u690D\u7269\u60C5\u4EBA\u300D\u9762\u8C8C\uFF0C\u4E26\u900F\u904E\u6C89\u6D78\u5F0F\u6295\u5F71\u5448\u73FE\u690D\u7269\u5F9E\u751F\u9577\u5230\u76DB\u958B\u3001\u5F9E\u7D20\u96C5\u5230\u7D62\u721B\u7684\u904E\u7A0B\uFF0C\u8B93\u77ED\u66AB\u7684\u82B1\u671F\u6210\u70BA\u6578\u4F4D\u6642\u4EE3\u6C38\u6046\u7684\u7DBB\u653E\uFF0C\u89C0\u8005\u4E5F\u80FD\u5728\u5176\u4E2D\u8DDF\u96A8\u8072\u5149\uFF0C\u4F38\u5C55\u3001\u62CD\u7167\u7D00\u9304\u81EA\u5DF1\u7F8E\u9E97\u7DBB\u653E\u7684\u7368\u7279\u82B1\u8A9E\u3002",
    width: 6
  },
  {
    id: 10,
    image: "/dark/assets/imgs/arch/works/10.jpg",
    year: "2023",
    type: "\u9996\u90E8 VR \u4F5C\u54C1\u5C31\u5165\u570D\u7FE0\u8C9D\u5361\u5F71\u5C55\u6C88\u6D78\u5F0F\u55AE\u5143\uFF0C\u5C0E\u6F14\u8B1D\u6587\u6BC5\u5C07\u9019\u500B\u4ECB\u65BC\u9ED1\u8207\u767D\u4E4B\u9593\u3001\u5982\u5922\u4F3C\u5E7B\u7684\u79C1\u5BC6\u65C5\u7A0B\uFF0C\u4EE5\u7A79\u9802\u5287\u5834\u4F5C\u70BA\u8F09\u9AD4\u8F49\u5316\uFF0C\u5617\u8A66\u74B0\u666F\u9AD4\u9A57\u7684\u5168\u65B0\u53EF\u80FD\u6027\uFF0C\u5E36\u9818\u89C0\u773E\u9032\u5165\u4E00\u6B21\u96C6\u9AD4\u7684\u8A69\u610F\u51A5\u60F3\u3002",
    width: 6
  },
  {
    id: 11,
    image: "/dark/assets/imgs/arch/works/11.jpg",
    year: "2023",
    type: "\u300A\u5F9E\u5FC3\u58A8\u97FB\u300B\u662F\u4E00\u9805\u7D50\u5408\u50B3\u7D71\u6C34\u58A8\u756B\u3001\u4E92\u52D5\u79D1\u6280\u3001\u6C89\u6D78\u5F0F\u6295\u5F71\u7684\u85DD\u8853\u5C55\u89BD\uFF0C\u5411\u5927\u773E\u5448\u73FE\u81FA\u5317\u57CE\u5E02\u4E4B\u7F8E\u3002\u6295\u5F71\u5167\u5BB9\u8207\u85DD\u8853\u5BB6\u8A31\u6587\u878D\u6559\u6388\u5408\u4F5C\uFF0C\u4EE5\u6C34\u58A8\u7CBE\u795E\u7D50\u5408\u65B0\u5A92\u9AD4\u85DD\u8853\uFF0C\u5C07\u56DB\u7A2E\u66F8\u6CD5\u7528\u7B46\u72C0\u614B\u8F49\u5316\u70BA\u6295\u5F71\u8996\u89BA\u5E95\u860A\uFF1A\u300C\u5165\u92D2\u300D\u4F5C\u70BA\u8D77\u7B46\uFF0C\u4EE5\u5DE8\u578B\u66F8\u6CD5\u5C55\u73FE\u6C34\u58A8\u4E4B\u7F8E\uFF1B\u63A5\u7E8C\u7684\u300C\u4E2D\u92D2\u300D\u5EF6\u7E8C\u66F8\u6CD5\u7DDA\u689D\u5411\u4E0B\u6D41\u6DCC\uFF1B\u300C\u6298\u92D2\u300D\u5C55\u73FE\u96D9\u5317\u5404\u666F\u9EDE\u7279\u8272\uFF1B\u4F5C\u70BA\u6536\u7B46\u7684\u300C\u56DE\u92D2\u300D\uFF0C\u5F77\u5F7F\u5C07\u6574\u9AD4\u756B\u9762\u56DE\u52FE\u4E00\u822C\uFF0C\u8F49\u8B8A\u70BA\u9CE5\u77B0\u8996\u89D2\u7684\u96D9\u5317\u5730\u5716\uFF0C\u4FEF\u77B0\u571F\u5730\u7684\u7D93\u8108\u3002",
    width: 6
  },
  {
    id: 12,
    image: "/dark/assets/imgs/arch/works/12.jpg",
    year: "2023",
    type: "\u300A\u9748\u9B42\u7684\u526F\u7FFC\uFF1A\u7A79\u4E18\u300B\u662F\u5C0D\u65BC\u4EBA\u5DE5\u667A\u6167\u4F5C\u70BA\u4E00\u7A2E\u5DE5\u5177\u7684\u5047\u8A2D\u63D0\u554F\u51FA\u767C\uFF0C\u6240\u5EF6\u4F38\u7684\u8996\u89BA\u523A\u6FC0\u8207\u63A2\u7D22\u3002\u5B83\u63D0\u4F9B\u4E86\u4E00\u7A2E\u975E\u4EBA\u985E\u8996\u89BA\u7684\u7D44\u69CB\u65B9\u5F0F\uFF0C\u5982\u9B54\u6CD5\u822C\u5730\u5C07\u95DC\u9375\u5B57\u5D4C\u5165\u5F71\u50CF\u8207\u8072\u97FF\u4E2D\u3002\u4F5C\u54C1\u8A66\u5716\u5F9E\u5EFA\u7BC9\u5B78\u3001\u5730\u8CEA\u5B78\u8207\u5929\u6587\u5B78\u7B49\u5716\u50CF\u8CC7\u6599\u5207\u5165\uFF0C\u5F9E\u4EBA\u5DE5\u667A\u6167\u6240\u7522\u51FA\u7684\u8996\u89BA\u67B6\u69CB\uFF0C\u63A2\u8A0EAI\u8996\u89BA\u6240\u63CF\u8FF0\u7684\u4EBA\u985E\u77E5\u8B58\u6A23\u8C8C\uFF0C\u4E26\u7A81\u986F\u975E\u4EBA\u985E\u8996\u89BA\u8A8D\u77E5\u7684\u9055\u548C\u611F\u3002\u85C9\u6B64\u63D0\u554F\u4EBA\u5DE5\u667A\u6167\u7684\u5F71\u50CF\u7522\u51FA\uFF0C\u662F\u5F15\u9818\u4EBA\u985E\u9748\u9B42\u7A81\u7834\u73FE\u6709\u8A8D\u77E5\u5F15\u5C0E\u7684\u526F\u7FFC\uFF0C\u9084\u662F\u4E3B\u5C0E\u8457\u4E00\u5F35\u5F35\u96B1\u85CF\u8457\u7B49\u50F9\u4EA4\u63DB\u7684\u5951\u7D04\uFF0C\u800C\u6211\u5011\u4E26\u4E0D\u77E5\u9053\u5BE6\u969B\u4E0A\u80CC\u8CA0\u7684\u4EA4\u63DB\u5167\u5BB9\u3002",
    width: 6
  },
  {
    id: 13,
    image: "/dark/assets/imgs/arch/works/13.jpg",
    year: "2023",
    type: "\u4EBA\u5DE5\u667A\u6167\u3001\u6A5F\u5668\u4EBA\u3001\u50AC\u7720\u3001\u5167\u7701\u3001\u65C5\u7A0B\u3001\u9AD4\u9A57\u3001\u6C89\u601D\u3001\u8A69\u6027\u3001\u6578\u4F4D\u666F\u89C0\u3001\u61F8\u6D6E\u3001\u6C89\u6D78\u5F0F",
    width: 6
  },
  {
    id: 14,
    image: "/dark/assets/imgs/arch/works/14.jpg",
    year: "2023",
    type: "\u8DE8\u5A92\u9AD4\u8A08\u756B\u300AMati\xE8re premi\xE8re/Raw Material\u300B\u900F\u904E3D\u5F71\u50CF\u81EA\u6211\u6355\u6349\uFF0C\u5C07\u5370\u5237\u6578\u4F4D\u7E6A\u5716\u3001\u52D5\u756B\u3001\u865B\u64EC\u73FE\u5BE6 (VR) \u548C\u7403\u5E55\u8996\u89BA\u9AD4\u9A57\u8F49\u5316\u81F3\u865B\u64EC\u74B0\u5883\u3002 ",
    width: 6
  },
  {
    id: 15,
    image: "/dark/assets/imgs/arch/works/15.jpg",
    year: "2023",
    type: "\u300C\u7E41\u300D\u662F\u4E00\u500B\u878D\u5408\u81EA\u7136\u904B\u4F5C\u8207\u79E9\u5E8F\u8B8A\u5316\u7684\u6C89\u6D78\u5F0F\u8996\u89BA\u4F5C\u54C1\uFF0C\u5E36\u9818\u6211\u5011\u9032\u5165\u6D41\u52D5\u7684\u4E16\u754C\u3002\u85C9\u7531\u60F3\u50CF\u5728\u4E0D\u540C\u5834\u57DF\u4E2D\u7A7A\u6C23\u7684\u821E\u52D5\u5C55\u73FE\u67D4\u548C\u8207\u72C2\u66B4\uFF0C\u5448\u73FE\u51FA\u98A8\u6240\u5E36\u4F86\u7684\u97FB\u5F8B\u6027\u548C\u4E0D\u7A69\u5B9A\u6027\u3002\u611F\u53D7\u5230\u81EA\u7136\u4E2D\u6C23\u6D41\u7684\u80FD\u91CF\uFF0C\u5F9E\u5F37\u52C1\u7684\u98A8\u7A7F\u68AD\u5230\u548C\u7DE9\u7684\u5FAE\u98A8\u8F15\u62C2\uFF1B\u6F6E\u6C50\u662F\u5F15\u529B\u4EA4\u4E92\u4F5C\u7528\u7684\u81EA\u7136\u8868\u73FE\uFF0C\u727D\u5F15\u8457\u5927\u81EA\u7136\u7684\u8D77\u4F0F\uFF0C\u8046\u807D\u6F6E\u6C34\u7684\u547C\u5438\uFF0C\u611F\u53D7\u5927\u81EA\u7136\u8C50\u76C8\u7684\u529B\u91CF\u548C\u7BC0\u594F\u3002\u98A8\u7684\u87BA\u65CB\u3001\u6F6E\u6C50\u7684\u9031\u671F\u548C\u5E7E\u4F55\u5F62\u72C0\u7684\u5206\u5F62\u8B8A\u5316\uFF0C\u878D\u5408\u5448\u73FE\u51FA\u4E00\u7A2E\u5947\u7279\u7684\u548C\u8AE7\u611F\u3002",
    width: 6
  },
  {
    id: 16,
    image: "/dark/assets/imgs/arch/works/16.jpg",
    year: "2023",
    type: "\u7576\u8E0F\u5165\u90A3\u500B\u5145\u6EFF\u672A\u77E5\u4E14\u6B98\u7834\u4E0D\u582A\u7684\u5730\u666F\u6642\uFF0C\u5F77\u5F7F\u6574\u500B\u4E16\u754C\u90FD\u8B8A\u5F97\u975C\u8B10\u8D77\u4F86\u3002\u8173\u6B65\u8072\u5728\u6FD5\u8EDF\u7684\u6C99\u8DEF\u4E0A\u6D88\u8072\u533F\u8DE1\uFF0C\u5F77\u5F7F\u5728\u63D0\u9192\u8457\u9019\u88E1\u7D93\u6B77\u904E\u7121\u6578\u6B21\u7684\u6BC0\u6EC5\u8207\u91CD\u5EFA\u3002\u5373\u4F7F\u5728\u9019\u500B\u7834\u6557\u7684\u4E16\u754C\u88E1\uFF0C\u9084\u662F\u80FD\u5920\u611F\u53D7\u5230\u67D0\u4E9B\u7570\u5E38\u7684\u80FD\u91CF\u6D41\u52D5\u5728\u74B0\u5883\u4E4B\u4E2D\uFF0C\u9019\u88E1\u7684\u4E00\u5207\u90FD\u662F\u5982\u6B64\u964C\u751F\u53C8\u719F\u6089\uFF0C\u7121\u6CD5\u6E05\u6670\u8FA8\u5225\u8F2A\u5ED3\u7684\u907A\u8DE1\u5728\u773C\u524D\u5D84\u9732\u51FA\u4F86\uFF0C\u8B93\u6211\u5011\u7121\u6CD5\u60F3\u8C61\u6B64\u8655\u6700\u539F\u59CB\u7684\u6A21\u6A23\uFF0C\u8B93\u6211\u5011\u7684\u611F\u5B98\u611F\u5230\u7121\u6240\u9069\u5F9E\u3002\u800C\u9019\uFF0C\u6216\u8A31\u5C31\u662F\u6211\u5011\u4F86\u5230\u9019\u7684\u539F\u56E0\u3002 ",
    width: 6
  },
  {
    id: 17,
    image: "/dark/assets/imgs/arch/works/17.jpg",
    year: "2023",
    type: "\u865B\u64EC\u4E16\u754C\u6240\u5E36\u4F86\u4E4B\u7B2C\u4E8C\u73FE\u5BE6\uFF0C\u4EBA\u5011\u4EE5\u4F55\u7A2E\u8EAB\u5206\u3001\u611F\u5B98\u72C0\u614B\u53BB\u9762\u5C0D\u9019\u6A23\u7684\u79D1\u6280\u8DA8\u5411\u3002 \u4F5C\u54C1\u7684\u5F62\u5F0F\u7531\u6C11\u9593\u4FE1\u4EF0\u4E2D\u7684\u300C\u89C0\u843D\u9670\u300D\u89C0\u9748\u8853\u7684\u5F62\u5F0F\u70BA\u767C\u5C55\u4E3B\u8EF8\uFF0C\u5728\u89C0\u843D\u9670\u7684\u5100\u5F0F\u904E\u7A0B\u4E2D\uFF0C\u5275\u4F5C\u5718\u968A\u89BA\u5F97\u6CD5\u5E2B\u8207\u77C7\u773C\u6C11\u773E\u9593\u7684\u9023\u7D50\u975E\u5E38\u6709\u8DA3\uFF0C\u9019\u500B\u5B58\u65BC\u610F\u8B58\u4E4B\u4E2D\u7684\u63CF\u8FF0\uFF0C\u4E5F\u662F\u9010\u6F38\u69CB\u7BC9\u300C\u666F\u300D\u7684\u904E\u7A0B\uFF0C\u8B93\u6C11\u773E\u5982\u540C\u8EAB\u8655\u73FE\u5834\u3002\u4F5C\u54C1\u8A66\u5716\u5C0E\u5165\u9019\u6A23\u7684\u5F62\u5F0F\uFF0C\u5F9E\u7121\u7684\u5834\u666F\u958B\u59CB\uFF0C\u5728\u8072\u97FF\u5F15\u5C0E\u4E0B\uFF0C\u6F38\u6F38\u4EE5\u7269\u4EF6\u53BB\u5EFA\u69CB\u51FA\u5834\u666F\u3001\u4E16\u754C\uFF0C\u8A66\u5716\u5728\u865B\u64EC\u5834\u666F\u5EFA\u69CB\u7684\u904E\u7A0B\u4E2D\uFF0C\u5BE6\u9A57\u865B\u64EC\u73FE\u5BE6\u53CD\u5411\u6D78\u5165\u7684\u904E\u7A0B\u3002 ",
    width: 6
  },
  {
    id: 18,
    image: "/dark/assets/imgs/arch/works/18.jpg",
    year: "2023",
    type: "\u3008\u6C89\u6D78\u5834\u57DF\u4F5C\u54C1\u7CBE\u9078\uFF1A20-23\u3009\u7CBE\u9078\u9B4F\u5EF7\u5B87\u81EA2020\u5E74\u81F32023\u5E74\u9593\u5275\u4F5C\u7684\u6C89\u6D78\u5834\u57DF\u4F5C\u54C1\uFF0C\u5305\u542B\u3008\u4E16\u754C\u662F\u5B8C\u5F62 \uFF0C\u800C\u5B83\u5D29\u58DE\u4E86\u3009\u3001\u3008\u6DF7\u6C8C\u6587\u6CD5\u3009\u548C\uFF1CAutonomica\uFF1E\u3002\u4E09\u8005\u7686\u662F\u6587\u5B57\u548C\u8A9E\u8A00\u7684\u5F71\u50CF\u5316\u5BE6\u9A57\u3002 ",
    width: 6
  },
  {
    id: 19,
    image: "/dark/assets/imgs/arch/works/19.jpg",
    year: "2023",
    type: "\u8EBA\u5728\u623F\u9593\u88E1\uFF0C\u671B\u8457\u5929\u82B1\u677F\uFF0C\u601D\u7DD2\u51FA\u4E86\u9580\u8D70\u5411\u9060\u5C71\u3002\u6F14\u51FA\u5F9E\u4E00\u500B\u5931\u7720\u7684\u98A8\u666F\u958B\u59CB\uFF0C\u89C0\u773E\u5728\u9ED1\u6697\u4E2D\u8EBA\u8457\u4E00\u6BB5\u6642\u9593\u4E4B\u5F8C\uFF0C\u6162\u6162\u770B\u5230\u4E00\u500B\u623F\u9593\u5929\u82B1\u677F\u7684\u5F71\u50CF\uFF0C\u5929\u82B1\u677F\u7684\u71C8\u3002\u89D2\u843D\u6697\u8655\u6709\u4E9B\u96DC\u4E82\u7684\u7DDA\u689D\u5728\u7AC4\u52D5\u3002\u63A5\u8457\u900F\u904E\u5728\u623F\u5C4B\u5167\u6F02\u6D6E\u63A2\u7D22\uFF0C\u6162\u6162\u5E36\u5230\u5C4B\u5916\u7684\u98A8\u666F\uFF0C\u9023\u7E8C\u7684\u8DEF\u71C8\u3001\u623F\u5C4B\uFF0C\u8D70\u51FA\u57CE\u5E02\uFF0C\u7D93\u904E\u4E00\u6BB5\u9ED1\u6697\u4E4B\u5F8C\u773C\u524D\u51FA\u73FE\u4E00\u4E9B\u690D\u7269\uFF0C\u9032\u5165\u68EE\u6797\uFF0C\u8D8A\u4F86\u8D8A\u591A\u8D85\u73FE\u5BE6\u7684\u5E7B\u89BA\u666F\u8C61\uFF0C\u89C0\u773E\u5728\u9019\u8D9F\u5922\u5883\u822C\u7684\u591C\u904A\u4E4B\u5F8C\u56DE\u5230\u5931\u7720\u7684\u623F\u9593\uFF0C\u6F14\u51FA\u7D50\u675F\uFF0C\u8D77\u8EAB\u5E36\u8457\u9019\u4E00\u5834\u5922\u5883\u96E2\u958B\u3002",
    width: 6
  },
  {
    id: 20,
    image: "/dark/assets/imgs/arch/works/20.jpg",
    year: "2023",
    type: "\u300CINNERSTAR\u300D\u662F\u7531\u9EC3\u5049\u548C\u912D\u9053\u5143\u5171\u540C\u5448\u73FE\u7684Audio-Visual\u7CFB\u5217\u4F5C\u54C1\uFF0C\u4E3B\u984C\u570D\u7E5E\u5728\u5B87\u5B99\u8207\u5FC3\u9748\u4E4B\u9593\uFF0C\u7531\u4E0D\u540C\u5929\u6587\u73FE\u8C61\u4F5C\u70BA\u9748\u611F\u5207\u5165\uFF0C\u9032\u800C\u4EE5\u54F2\u5B78\u89D2\u5EA6\u63A2\u8A0E\u4EBA\u7684\u610F\u8B58\u8207\u5B58\u5728\u3002 \u300AINNERSTAR 01 : Reddening\u300B\u70BA\u6B64\u7CFB\u5217\u9996\u4F5C\uFF0C\u7D05\u5316\u73FE\u8C61\uFF08Reddening\uFF09\u6307\u661F\u969B\u7269\u8CEA\u8207\u5149\u4EA4\u4E92\u4F5C\u7528\u7684\u7D50\u679C\uFF0C\u7522\u751F\u5982\u6CE2\u9577\u7684\u4F4D\u79FB\u7B49\u5E38\u898B\u7684\u6563\u5C04\u73FE\u8C61\u3002\u5F9E\u5176\u76F8\u95DC\u6578\u64DA\u53CA\u7269\u7406\u6027\u8CEA\u4F5C\u70BA\u8996\u89BA\u53CA\u8072\u97F3\u4E0A\u7684\u53C3\u8003\u4F9D\u64DA\uFF0C\u4E26\u4EE5\u6C89\u6D78\u5F0F\u74B0\u7E5E\u7A79\u9802\u6295\u5F71A/V\u4F5C\u54C1\u5448\u73FE\uFF0C\u4EE5\u7729\u7030\u7684\u5F71\u50CF\u8207\u8072\u97FF\u5305\u8986\u7A7A\u9593\uFF0C\u85C9\u6B64\u4F7F\u89C0\u8005\u5982\u8EAB\u65BC\u5FC3\u4E2D\u6DF1\u8655\uFF0C\u627E\u5230\u5C6C\u65BC\u81EA\u6211\u7684\u6642\u523B\uFF1B\u5BF0\u5B87\u4E4B\u4E0B\uFF0C\u661F\u8FB0\u65BC\u5FC3\uFF0C\u543E\u5373\u5B87\u5B99\u3002",
    width: 6
  },
  {
    id: 21,
    image: "/dark/assets/imgs/arch/works/21.jpg",
    year: "2023",
    type: "\u9019\u662F\u4E00\u500B\u591A\u4EBA\u5728\u7DDA\u7684\u4E92\u52D5\u6A5F\u5236\uFF0C\u89C0\u773E\u900F\u904E\u624B\u6A5F\u9023\u7D50\u5230 Web App \u5F8C\u5373\u5728\u6F14\u51FA\u904E\u7A0B\u4E2D\u96A8\u6642\u96A8\u5730\u64CD\u4F5C\u4F86\u7522\u751F\u4E92\u52D5\u8207\u5C0D\u8A71\u95DC\u4FC2\u3002\u4ECB\u9762\u5305\u542B\u591A\u7A2E\u53EF\u767C\u9001\u8207\u63A5\u6536\u5C01\u5305\u7684\u5C6C\u6027\u5143\u4EF6\uFF0C\u5982\u4E00\u500B\u6309\u9215\u3001\u4E00\u53E5\u8A0A\u606F\u3001\u4E00\u6BB5\u8702\u9CF4\u8072\u53CA\u4E00\u4E32\u4F3C\u61C2\u975E\u61C2\u7684\u6578\u64DA\u5305\uFF0C\u90FD\u5C07\u5728\u5169\u5730\u6FC0\u70C8\u5C0D\u649E\u3002",
    width: 6
  }
];
const _sfc_main$2 = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio sub-bg section-padding" }, _attrs))}><div class="container"><div class="sec-leter-head mb-80"><div class="d-flex align-items-center"><div class="leter"><h4>P</h4></div><div class="line"></div></div><div class="title"><h6 class="sub-title">\u4F5C\u54C1\u4ECB\u7D39</h6></div></div><div class="row justify-content-center"><div class="col-lg-5"><div class="item md-mb80"><div class="o-hidden"><div class="img imago wow"><a href="project-details1"><img${ssrRenderAttr("src", unref(data)[0].image)} alt="\u7121\u6CD5\u986F\u793A\u5716\u7247"></a></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u8B1D\u723E\u84CB\xB7\u666E\u7F85\u79D1\u83F2\u8036\u592B\u300A\u8FF7\u5BAE\u300B\uFF08\u5FB7\u570B\uFF09</h6><p>${ssrInterpolate(unref(data)[0].type)}</p></div><div class="ml-auto"></div></div></div></div><div class="col-lg-6 valign"><div class="item full-width"><div class="row justify-content-center"><div class="col-lg-8"><div class="o-hidden"><div class="img imago wow"><a href="project-details1"><img${ssrRenderAttr("src", unref(data)[1].image)} alt="\u7121\u6CD5\u986F\u793A\u5716\u7247"></a></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 \u5F17\u6717\u897F\u65AF\xB7\u963F\u4EE3\u723E\xB7\u9EA5\u80AF\u9F4A\u300A\u862D\u82B1\u8207\u871C\u8702\u300B\uFF08\u52A0\u62FF\u5927\uFF09</h6><p>${ssrInterpolate(unref(data)[1].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6 valign"><div class="item mt-80 full-width"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><a href="project-details1"><img${ssrRenderAttr("src", unref(data)[2].image)} alt=""></a></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u99AC\u723E\u6ED5\xB7\u827E\u85A9\u514B\xB7\u5FB7\u5E0C\u723E\u300A\u8702\u6E67\u300B (\u5FB7\u570B) </h6><p>${ssrInterpolate(unref(data)[2].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[3].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u5927\u885B\xB7\u52A0\u5FB7\u7D0D\u300A\u5976\u5976\u7684\u623F\u5B50\u300B\uFF08\u52A0\u62FF\u5927\uFF09 </h6><p>${ssrInterpolate(unref(data)[3].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[4].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u5F35\u5473\u8FEA\u3001\u6208\u7DAD\u7490\u3001\u8607\u5C11\u79B9\u300A\u661F\u969B\u300B </h6><p>${ssrInterpolate(unref(data)[4].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[5].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 \u585E\u5DF4\u65AF\u8482\u5B89\u30FB\u62C9\u5E03\u9B6F\u5C3C\u548C\u514B\u840A\u9580\u7279\u30FB\u666E\u6CF0\u683C\u7D0D\u300A\u5091\u8F9B\u7279.XYZ\u300B </h6><p>${ssrInterpolate(unref(data)[5].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[6].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u8389\u8FEA\u4E9E\u30FB\u96C5\u79D1\u8AFE\u592B\u65AF\u57FA\u300A\u5C0E\u8AD6\uFF1A\u8A08\u91CF\u7D93\u6FDF\u5B78\u300B</h6><p>${ssrInterpolate(unref(data)[6].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[7].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u79FB\u52D5\u6545\u4E8B\u5C4B\u300A\u6708\u7403\u5EA6\u5047\u6751\u300B</h6><p>${ssrInterpolate(unref(data)[7].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[8].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u5922\u60F3\u52D5\u756B\u300A\u690D\u7269\u60C5\u4EBA\u300B</h6><p>${ssrInterpolate(unref(data)[8].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[9].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u8B1D\u6587\u6BC5\u300A\u5F7C\u5CB8 in DOME\u300B</h6><p>${ssrInterpolate(unref(data)[9].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[10].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u8E8D\u754C\u65B0\u5A92\u9AD4\u300A\u5F9E\u5FC3\u58A8\u97FB\u300B</h6><p>${ssrInterpolate(unref(data)[10].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[11].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u5433\u79C9\u8056\u300A\u9748\u9B42\u7684\u526F\u7FFC\uFF1A\u7A79\u4E18\u300B</h6><p>${ssrInterpolate(unref(data)[11].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[12].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 Jeremy Oury\u300AEXO CORTEX 2.0\u300B</h6><p>${ssrInterpolate(unref(data)[12].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[13].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 Yan Breuleux\u300AMati\xE8re Premi\xE8re/Raw Materia\u300B</h6><p>${ssrInterpolate(unref(data)[13].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[14].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 \u7396\u683C\u8A2D\u8A08\u300A\u7E41\u300B</h6><p>${ssrInterpolate(unref(data)[14].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[15].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 NANONANO\u300Anarrative of landscape\u300B</h6><p>${ssrInterpolate(unref(data)[15].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[16].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 XTRUX x \u665FSHENG\u300A\u89C0\u300B</h6><p>${ssrInterpolate(unref(data)[16].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[17].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 \u9B4F\u5EF7\u5B87\u300A\u6C89\u6D78\u5834\u57DF\u4F5C\u54C1\u7CBE\u9078\uFF1A20-23\u300B</h6><p>${ssrInterpolate(unref(data)[17].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[18].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 \u838A\u79BE\u300A\u591C\u904A 2023\u300B</h6><p>${ssrInterpolate(unref(data)[18].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[19].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 \u9EC3\u5049\uFF38\u912D\u9053\u5143\u300AINNERSTAR 01 : Reddening\u300B</h6><p>${ssrInterpolate(unref(data)[19].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[20].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}"> \u25C9 \u8521\u5947\u5B8F\u300A\u5C01\u5305\u5C0D\u649E\u6A5F\u300B</h6><p>${ssrInterpolate(unref(data)[20].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"></div></div><div class="cont mt-30 d-flex"><div></div><div class="ml-auto"></div></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Team.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_10 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(_attrs)}><div class="footer-container"><div class="container pb-80 pt-80 ontop"><div class="row"><div class="col-lg-3"><div class="colum md-mb50"><div class="tit mb-20"><h6>\u5730\u5740</h6></div><div class="text"><p>106\u81FA\u5317\u5E02\u5927\u5B89\u5340\u5EFA\u570B\u5357\u8DEF\u4E00\u6BB5177\u865F</p></div></div></div><div class="col-lg-3 offset-lg-1"><div class="colum md-mb50"><div class="tit mb-20"><h6>\u806F\u7D61\u65B9\u5F0F</h6></div><div class="text"><p class="mb-10"><a href="#0">rdpd@clab.org.tw</a></p><h5><a href="#">+886 2 87735087</a></h5></div></div></div><div class="col-lg-2 md-mb50"><div class="tit mb-20"><h6>\u5B98\u65B9\u5E33\u865F</h6></div><ul class="rest social-text"><li><a href="https://www.facebook.com/profile.php?id=100079147550663">Facebook</a></li><li><a href="https://www.instagram.com/clab.futurevisionlab/">Instagram</a></li></ul></div><div class="col-lg-3"><div class="tit mb-20"></div><div class="subscribe"></div></div></div></div><div class="sub-footer pt-40 pb-40 bord-thin-top ontop"><div class="container"><div class="row"><div class="col-lg-4"></div><div class="col-lg-8"><div class="copyright d-flex"><div class="ml-auto"></div></div></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_12 = _sfc_main;

export { __nuxt_component_1 as _, __nuxt_component_2 as a, __nuxt_component_3 as b, __nuxt_component_4 as c, __nuxt_component_5 as d, __nuxt_component_6 as e, __nuxt_component_7 as f, __nuxt_component_8 as g, __nuxt_component_9 as h, __nuxt_component_10 as i, __nuxt_component_11 as j, __nuxt_component_12 as k };
//# sourceMappingURL=Footer-9433f068.mjs.map

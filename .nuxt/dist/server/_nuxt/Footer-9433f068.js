import { _ as __nuxt_component_0 } from "./nuxt-link-6bdec6f5.js";
import { mergeProps, withCtx, createVNode, openBlock, createBlock, useSSRContext, unref, createTextVNode, toDisplayString, onUnmounted } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { d as data$2 } from "./blog-cbc1d2f4.js";
import { _ as _export_sfc } from "../server.mjs";
import "swiper/vue";
import "swiper";
import { i as isInView } from "./isInView-318b554b.js";
import { _ as __nuxt_component_0$1 } from "./client-only-29ef7f45.js";
const _imports_0$2 = "" + __publicAssetsURL("dark/assets/imgs/background/font.png");
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list section-padding sub-bg" }, _attrs))}><div class="container"><div class="sec-head mb-80"><div class="row"><div class="col-lg-8"><h6 class="sub-title wow fadeInUp">sessions</h6><h2 class="d-rotate wow"><span class="rotate-text">節目場次</span></h2></div><div class="col-lg-4 d-flex align-items-center"><div class="full-width d-flex justify-content-end justify-end"><div class="vew-all wow fadeIn"></div></div></div></div></div><!--[-->`);
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
const _imports_0$1 = "" + __publicAssetsURL("dark/assets/imgs/about/黑川.jpg");
const _sfc_main$9 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about section-padding" }, _attrs))}><div class="container"><div class="row md-marg"><div class="col-lg-6 valign"><div class="cont md-mb50"><h6 class="sub-title opacity-8 wow fadeInUp"></h6><h2 class="d-slideup wow"><span class="sideup-text"><span class="up-text">FUTURE VISION LAB 2023<span class="sub-font"></span></span></span><span class="sideup-text"><span class="up-text"></span></span></h2><div class="text mt-20 wow fadeIn" data-wow-delay=".5s"><p>臺灣當代文化實驗場（C-LAB）自 2020 年正式啟動「科技媒體實驗平台」，著重於媒體實驗創新與社會鏈結，以跨域、共創、協作方式，打造文化與科技的實驗平台。 整合臺灣文化與科技的資源，媒合文化與科技領域共創，其中「未來視覺實驗室」探索科技媒體的視覺極限為實驗目標，以臺灣光電技術與產業為基礎，輔以影像的運算、創作與軟硬體整合，企圖勾勒出未來視覺的跨域願景。 </p></div></div></div><div class="col-lg-6"><div class="img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div></div></div></section>`);
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
    title: "移動故事屋《月球度假村》",
    text: "移動故事屋是一個跨越邊境為概念創作的親子劇場，針對兒童藝術及科技互動發展創新體驗，結合臺灣年輕藝術家合作發展原創動畫，以包圍觀眾的沉浸式動畫為演出主軸，由劇場說書人引領觀眾們進入故事，藉由模擬情境配合劇場聲光等數位媒體裝置，營造一個完全身歷其境、充滿豐富想像的創新劇場互動體驗。 "
  },
  {
    id: 2,
    image: "assets/imgs/portfolio/gallery/2.jpg",
    number: "02.",
    type: "SAT Fest",
    title: " 馬爾滕・艾薩克・德希爾《蜂湧》 (德國) ",
    text: "群體的蜂湧是一種為了生存而產生的行為現象，但更多時候，它是滅絕的前奏。 結群飛行，從德國跨越阿爾卑斯山，直奔地中海。小型鳥遷徙的過程中，路經枯竭、過度開發的土地。知更鳥、山雀和麻雀通常不會遷移如此遙遠的距離，但在不久的將來，這樣的現象可能會發生。《蜂湧》這件作品呈現由三維圖所拼貼出的鳥瞰視角，展示氣候變化後歐洲的部分樣貌。"
  },
  {
    id: 3,
    image: "assets/imgs/portfolio/gallery/3.jpg",
    number: "03.",
    type: "TAICCA Spotlight",
    title: "謝文毅《彼岸 in DOME》",
    text: "謝文毅是一位研究物理與數位虛擬之聯繫性的藝術創作者。他想像出新的世界，並在藝術設計、建築空間、電腦模擬圖像間嘗試創造一個能夠產生鏈結的語言與美學。"
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
const _imports_0 = "" + __publicAssetsURL("dark/assets/imgs/about/sq1.jpg");
const _imports_1 = "" + __publicAssetsURL("dark/assets/imgs/about/sq2.jpg");
const _sfc_main$5 = {
  __name: "Intro",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "intro-corp section-padding" }, _attrs))}><div class="container"><div class="row justify-content-around"><div class="col-lg-5 valign md-mb50"><div class="imgs mb-80"><div class="img1 wow fadeInUp"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="img2 wow fadeInLeft"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div></div><div class="col-lg-5 valign"><div class="cont"><div class="text"><h2 class="d-slideup wow"><span class="sideup-text"><span class="up-text">四大類別</span></span><span class="sideup-text"></span><span class="sideup-text"></span></h2></div><div class="accordion bord mt-40"><div class="item mb-15 wow fadeInUp" data-wow-delay=".1s"><div class="title"><h6 class="fz-18">TAICCA Spotlight</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">2023 臺灣文博會，FUTURE VISION LAB 2023與文策院攜手，合作策劃「TAICCA Spotlight單元」，並在初登場的 Dome 2.0 將 4 支優秀的台灣原生作品帶給觀眾。 從結合臺灣插畫的互動兒童劇場、獲得國際影展大獎肯定的VR作品轉譯、在地繪本與動畫團隊的跨域共創、到傳統藝術與臺灣地景的結合，「TAICCA Spotlight」單元希望能夠帶領觀眾踏入不一樣的視覺與聲音饗宴，在全新打造的穹頂劇場中，沉浸於臺灣文化與豐盛的創作力帶來的感動。 </p></div></div><div class="item mb-15 wow fadeInUp" data-wow-delay=".3s"><div class="title"><h6 class="fz-18">徵件作品</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">伴隨硬體全面升級後，「FUTURE VISION LAB 2023」針對個人或團隊開放徵件，徵集沉浸影音與跨域展演之作品，展現臺灣蓬勃的創作動能。</p></div></div><div class="item wow fadeInUp" data-wow-delay=".5s"><div class="title"><h6 class="fz-18">SAT Fest</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">今年「科技媒體實驗平台」與加拿大 SAT 科技藝術中心（The Society for Arts and Technology）合作，展出 SAT Fest 藝術節的精選作品共 7 件。自 2012 年首屆以來，SAT Fest 已成為沈浸式創作的重要活動，為實驗和藝術的實踐提供了充足的創作與展演空間。 SAT Fest 集結了多元且風格各異的穹頂投影精選短片，激發了數千名觀眾的想像力，並展現了一百多名來自加拿大和國際的視覺和聲音藝術家的創作宇宙和創意視野。</p></div></div><div class="item wow fadeInUp" data-wow-delay=".7s"><div class="title"><h6 class="fz-18">策劃邀請</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">「FUTURE VISION LAB 2023」邀請曾參與FUTURE VISION LAB實驗計畫的台灣藝術家和創作團隊，以其豐富的沉浸內容製作經驗和創新的視角，融合今年新場域的規格，進行全新製作和原作改製。 在文博會期間，將展出共計十件令人驚艷的作品，涵蓋多種表現形式，如演算生成、實驗動畫、電影短片以及實驗性展演，呈現多元而豐富的藝術風貌，展現台灣藝術家和創作團隊的創意能量。 </p></div></div></div></div></div></div></div></section>`);
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testim-crv section-padding main-colorbg text-dark position-re" }, _attrs))}><div class="container ontop"><div class="row"><div class="col-md-6"><div class="sec-head md-mb50"><h6 class="sub-title wow fadeInUp">ARTIST</h6><h2 class="d-rotate wow"><span class="rotate-text">藝術家介紹</span></h2></div></div><div class="col-md-6 valign"><div class="swiper-controls testim-controls arrow-out d-flex justify-content-end justify-end-sm full-width"><div class="d-flex"><div class="swiper-button-prev"><span class="left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="#1d1d1d"></path></svg></span></div><div class="swiper-button-next ml-50"><span class="right"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="#1d1d1d"></path></svg></span></div></div></div></div><div class="col-12 mt-80"><div class="testim-swiper testim-swiper3 to-out">`);
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
      }, _attrs))}><div class="container box position-re"><ul class="rest"><li class="sd-dark"><span class="numb">DOME 2.0</span></li><li class="blur"><h5><br>戶外穹頂劇場</h5><span class="icon pe-7s-paper-plane"></span></li></ul></div></div>`);
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
    type: "迷宮是一個促使人不斷移動的空間。 俯視下看，我們對線條、圖型或點綴物產生客觀可區分的概念。 在迷宮中，空間構成的觀看認知上的特定視覺衝擊，無法擺脫且陷入方向迷失的狀態致使我們轉換對生活的主觀感知。 每一秒對於迷宮空間的感知都隨著我們不間段的移動變化。 廣場、街道、通道、走廊、房間築構了城市迷宮的動態成形，同時嘗試集結迷宮本身建築的奇幻感與穿越時空的視覺體驗至這部短片。",
    width: 5
  },
  {
    id: 2,
    image: "/dark/assets/imgs/arch/works/3.jpg",
    year: "2023",
    type: "大自然是奇妙而聰明的。正如達爾文教導的，能有效地即興發揮才能致勝。 有些物種在受到威脅時，會恢復到早期的形態，有些物種則會與鄰近的生物建立寄生關係，而最具創造力的物種會改變自己的身體來模仿和引誘毫無戒心的夥伴。《蘭花與蜜蜂》是一首表現主義的 VR 頌詞，透過一系列基因愛情故事進行探索，歌頌生命為了生存的搏鬥精神。",
    width: 6
  },
  {
    id: 3,
    image: "/dark/assets/imgs/arch/works/2.jpg",
    year: "2023",
    type: "群體的蜂湧是一種為了生存而產生的行為現象，但更多時候，它是滅絕的前奏。 結群飛行，從德國跨越阿爾卑斯山，直奔地中海。小型鳥遷徙的過程中，路經枯竭、過度開發的土地。知更鳥、山雀和麻雀通常不會遷移如此遙遠的距離，但在不久的將來，這樣的現象可能會發生。《蜂湧》這件作品呈現由三維圖所拼貼出的鳥瞰視角，展示氣候變化後歐洲的部分樣貌。",
    width: 6
  },
  {
    id: 4,
    image: "/dark/assets/imgs/arch/works/4.jpg",
    year: "2023",
    type: "一個關於記憶和失智症的故事。回顧記憶時光，畫面隨行盤繞，逐漸陷入失智症的深淵，在奶奶家度過的時光變得越來越困惑。 著電影的進展，記憶矇上一層泥濘的渾沌和混亂，而描述回憶的動畫場景，也漸漸增添了怪奇感。 ",
    width: 6
  },
  {
    id: 5,
    image: "/dark/assets/imgs/arch/works/5.jpg",
    year: "2023",
    type: "在《星際》中，我們的地球是已知孕育生命的唯一星體，透過外太空中一個智慧本體的鏡頭展現出來。隨著鏡頭的旋轉放大與縮小，伴隨著藝術想像，觀察之旅帶來了生態變化和機械視覺的多尺度發掘：火焰咆哮侵入野生生物居住的廣闊森林，到融化的冰山揭示隱藏的資訊，從古代偽科學（占星術）的圖表，到人工智慧世代的潛行步伐；從數據驅動的風景，到演算生成的視覺作品；從氣候變化到生物遷徙。這個音像作品提出了一個探問：為何要在已知與未知、壓縮與展開的情境下探索太空？",
    width: 6
  },
  {
    id: 6,
    image: "/dark/assets/imgs/arch/works/6.jpg",
    year: "2023",
    type: "你上一次真正花時間去仔細觀察一個小小的普通物品是什麼時候？我們每日接觸大量的圖片和訊號時，也被訓練如何快速滑過資訊和處理大量的內容。這件作品是關於從不間斷的數據洪流中獲得休息，緩下步調，沉思那些我們經常忽略微小卻平凡的美好事物。《風信子 XYZ》透過使用 3D 攝影測量掃描風信子的花序，探索其中蘊含的顏色與色調。藉用電腦即時處理的調節和扭曲效果，將量測物體的視覺特徵轉化為不同的圖像節奏。作品音樂來自法國才華橫溢的音樂家克萊門・普特涅（Clément Putegnat）現場單簧管／循環演奏會的錄音，為作品增添了一層聲音性的詩意。",
    width: 6
  },
  {
    id: 7,
    image: "/dark/assets/imgs/arch/works/7.jpg",
    year: "2023",
    type: "《導論：計量經濟學》是對生成視覺的探索，透過富含創造性的影像展現了經濟體模型化後所產生的多元元素。在這部短片中，曲線從經濟學理論中解放出來，像是在一個充滿生氣的數據宇宙中自由移動，進行著廣闊的「自相關」函數編舞；圖形網格界面進化的過程中，創造出新的空間、廣闊的界線和星光璀璨的天頂。",
    width: 6
  },
  {
    id: 8,
    image: "/dark/assets/imgs/arch/works/8.jpg",
    year: "2023",
    type: "神奇動物研究所回來了！結合中秋節、世界各地月亮元素的親子劇目，中秋限定演出：月球度假村。",
    width: 6
  },
  {
    id: 9,
    image: "/dark/assets/imgs/arch/works/9.jpg",
    year: "2023",
    type: "夢想動畫跨領域與大塊文化合作，將黃湘玲老師繪製的台灣第一本水彩古典植物繪本《植物情人》系列作品重新詮釋。沉浸式的動畫設計以多維角度展現豐富的「植物情人」面貌，並透過沉浸式投影呈現植物從生長到盛開、從素雅到絢爛的過程，讓短暫的花期成為數位時代永恆的綻放，觀者也能在其中跟隨聲光，伸展、拍照紀錄自己美麗綻放的獨特花語。",
    width: 6
  },
  {
    id: 10,
    image: "/dark/assets/imgs/arch/works/10.jpg",
    year: "2023",
    type: "首部 VR 作品就入圍翠貝卡影展沈浸式單元，導演謝文毅將這個介於黑與白之間、如夢似幻的私密旅程，以穹頂劇場作為載體轉化，嘗試環景體驗的全新可能性，帶領觀眾進入一次集體的詩意冥想。",
    width: 6
  },
  {
    id: 11,
    image: "/dark/assets/imgs/arch/works/11.jpg",
    year: "2023",
    type: "《從心墨韻》是一項結合傳統水墨畫、互動科技、沉浸式投影的藝術展覽，向大眾呈現臺北城市之美。投影內容與藝術家許文融教授合作，以水墨精神結合新媒體藝術，將四種書法用筆狀態轉化為投影視覺底蘊：「入鋒」作為起筆，以巨型書法展現水墨之美；接續的「中鋒」延續書法線條向下流淌；「折鋒」展現雙北各景點特色；作為收筆的「回鋒」，彷彿將整體畫面回勾一般，轉變為鳥瞰視角的雙北地圖，俯瞰土地的經脈。",
    width: 6
  },
  {
    id: 12,
    image: "/dark/assets/imgs/arch/works/12.jpg",
    year: "2023",
    type: "《靈魂的副翼：穹丘》是對於人工智慧作為一種工具的假設提問出發，所延伸的視覺刺激與探索。它提供了一種非人類視覺的組構方式，如魔法般地將關鍵字嵌入影像與聲響中。作品試圖從建築學、地質學與天文學等圖像資料切入，從人工智慧所產出的視覺架構，探討AI視覺所描述的人類知識樣貌，並突顯非人類視覺認知的違和感。藉此提問人工智慧的影像產出，是引領人類靈魂突破現有認知引導的副翼，還是主導著一張張隱藏著等價交換的契約，而我們並不知道實際上背負的交換內容。",
    width: 6
  },
  {
    id: 13,
    image: "/dark/assets/imgs/arch/works/13.jpg",
    year: "2023",
    type: "人工智慧、機器人、催眠、內省、旅程、體驗、沉思、詩性、數位景觀、懸浮、沉浸式",
    width: 6
  },
  {
    id: 14,
    image: "/dark/assets/imgs/arch/works/14.jpg",
    year: "2023",
    type: "跨媒體計畫《Matière première/Raw Material》透過3D影像自我捕捉，將印刷數位繪圖、動畫、虛擬現實 (VR) 和球幕視覺體驗轉化至虛擬環境。 ",
    width: 6
  },
  {
    id: 15,
    image: "/dark/assets/imgs/arch/works/15.jpg",
    year: "2023",
    type: "「繁」是一個融合自然運作與秩序變化的沉浸式視覺作品，帶領我們進入流動的世界。藉由想像在不同場域中空氣的舞動展現柔和與狂暴，呈現出風所帶來的韻律性和不穩定性。感受到自然中氣流的能量，從強勁的風穿梭到和緩的微風輕拂；潮汐是引力交互作用的自然表現，牽引著大自然的起伏，聆聽潮水的呼吸，感受大自然豐盈的力量和節奏。風的螺旋、潮汐的週期和幾何形狀的分形變化，融合呈現出一種奇特的和諧感。",
    width: 6
  },
  {
    id: 16,
    image: "/dark/assets/imgs/arch/works/16.jpg",
    year: "2023",
    type: "當踏入那個充滿未知且殘破不堪的地景時，彷彿整個世界都變得靜謐起來。腳步聲在濕軟的沙路上消聲匿跡，彷彿在提醒著這裡經歷過無數次的毀滅與重建。即使在這個破敗的世界裡，還是能夠感受到某些異常的能量流動在環境之中，這裡的一切都是如此陌生又熟悉，無法清晰辨別輪廓的遺跡在眼前嶄露出來，讓我們無法想象此處最原始的模樣，讓我們的感官感到無所適從。而這，或許就是我們來到這的原因。 ",
    width: 6
  },
  {
    id: 17,
    image: "/dark/assets/imgs/arch/works/17.jpg",
    year: "2023",
    type: "虛擬世界所帶來之第二現實，人們以何種身分、感官狀態去面對這樣的科技趨向。 作品的形式由民間信仰中的「觀落陰」觀靈術的形式為發展主軸，在觀落陰的儀式過程中，創作團隊覺得法師與矇眼民眾間的連結非常有趣，這個存於意識之中的描述，也是逐漸構築「景」的過程，讓民眾如同身處現場。作品試圖導入這樣的形式，從無的場景開始，在聲響引導下，漸漸以物件去建構出場景、世界，試圖在虛擬場景建構的過程中，實驗虛擬現實反向浸入的過程。 ",
    width: 6
  },
  {
    id: 18,
    image: "/dark/assets/imgs/arch/works/18.jpg",
    year: "2023",
    type: "〈沉浸場域作品精選：20-23〉精選魏廷宇自2020年至2023年間創作的沉浸場域作品，包含〈世界是完形 ，而它崩壞了〉、〈混沌文法〉和＜Autonomica＞。三者皆是文字和語言的影像化實驗。 ",
    width: 6
  },
  {
    id: 19,
    image: "/dark/assets/imgs/arch/works/19.jpg",
    year: "2023",
    type: "躺在房間裡，望著天花板，思緒出了門走向遠山。演出從一個失眠的風景開始，觀眾在黑暗中躺著一段時間之後，慢慢看到一個房間天花板的影像，天花板的燈。角落暗處有些雜亂的線條在竄動。接著透過在房屋內漂浮探索，慢慢帶到屋外的風景，連續的路燈、房屋，走出城市，經過一段黑暗之後眼前出現一些植物，進入森林，越來越多超現實的幻覺景象，觀眾在這趟夢境般的夜遊之後回到失眠的房間，演出結束，起身帶著這一場夢境離開。",
    width: 6
  },
  {
    id: 20,
    image: "/dark/assets/imgs/arch/works/20.jpg",
    year: "2023",
    type: "「INNERSTAR」是由黃偉和鄭道元共同呈現的Audio-Visual系列作品，主題圍繞在宇宙與心靈之間，由不同天文現象作為靈感切入，進而以哲學角度探討人的意識與存在。 《INNERSTAR 01 : Reddening》為此系列首作，紅化現象（Reddening）指星際物質與光交互作用的結果，產生如波長的位移等常見的散射現象。從其相關數據及物理性質作為視覺及聲音上的參考依據，並以沉浸式環繞穹頂投影A/V作品呈現，以眩瀰的影像與聲響包覆空間，藉此使觀者如身於心中深處，找到屬於自我的時刻；寰宇之下，星辰於心，吾即宇宙。",
    width: 6
  },
  {
    id: 21,
    image: "/dark/assets/imgs/arch/works/21.jpg",
    year: "2023",
    type: "這是一個多人在線的互動機制，觀眾透過手機連結到 Web App 後即在演出過程中隨時隨地操作來產生互動與對話關係。介面包含多種可發送與接收封包的屬性元件，如一個按鈕、一句訊息、一段蜂鳴聲及一串似懂非懂的數據包，都將在兩地激烈對撞。",
    width: 6
  }
];
const _sfc_main$2 = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio sub-bg section-padding" }, _attrs))}><div class="container"><div class="sec-leter-head mb-80"><div class="d-flex align-items-center"><div class="leter"><h4>P</h4></div><div class="line"></div></div><div class="title"><h6 class="sub-title">作品介紹</h6></div></div><div class="row justify-content-center"><div class="col-lg-5"><div class="item md-mb80"><div class="o-hidden"><div class="img imago wow"><a href="project-details1"><img${ssrRenderAttr("src", unref(data)[0].image)} alt="無法顯示圖片"></a></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">◉ 謝爾蓋·普羅科菲耶夫《迷宮》（德國）</h6><p>${ssrInterpolate(unref(data)[0].type)}</p></div><div class="ml-auto"></div></div></div></div><div class="col-lg-6 valign"><div class="item full-width"><div class="row justify-content-center"><div class="col-lg-8"><div class="o-hidden"><div class="img imago wow"><a href="project-details1"><img${ssrRenderAttr("src", unref(data)[1].image)} alt="無法顯示圖片"></a></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">◉ 弗朗西斯·阿代爾·麥肯齊《蘭花與蜜蜂》（加拿大）</h6><p>${ssrInterpolate(unref(data)[1].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6 valign"><div class="item mt-80 full-width"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><a href="project-details1"><img${ssrRenderAttr("src", unref(data)[2].image)} alt=""></a></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">◉ 馬爾滕·艾薩克·德希爾《蜂湧》 (德國) </h6><p>${ssrInterpolate(unref(data)[2].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[3].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">◉ 大衛·加德納《奶奶的房子》（加拿大） </h6><p>${ssrInterpolate(unref(data)[3].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[4].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">◉ 張味迪、戈維璐、蘇少禹《星際》 </h6><p>${ssrInterpolate(unref(data)[4].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[5].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">◉ 塞巴斯蒂安・拉布魯尼和克萊門特・普泰格納《傑辛特.XYZ》 </h6><p>${ssrInterpolate(unref(data)[5].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[6].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">◉ 莉迪亞・雅科諾夫斯基《導論：計量經濟學》</h6><p>${ssrInterpolate(unref(data)[6].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[7].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">◉ 移動故事屋《月球度假村》</h6><p>${ssrInterpolate(unref(data)[7].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[8].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">◉ 夢想動畫《植物情人》</h6><p>${ssrInterpolate(unref(data)[8].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[9].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">◉ 謝文毅《彼岸 in DOME》</h6><p>${ssrInterpolate(unref(data)[9].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[10].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">◉ 躍界新媒體《從心墨韻》</h6><p>${ssrInterpolate(unref(data)[10].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[11].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">◉ 吳秉聖《靈魂的副翼：穹丘》</h6><p>${ssrInterpolate(unref(data)[11].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[12].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">◉ Jeremy Oury《EXO CORTEX 2.0》</h6><p>${ssrInterpolate(unref(data)[12].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[13].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">◉ Yan Breuleux《Matière Première/Raw Materia》</h6><p>${ssrInterpolate(unref(data)[13].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[14].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">◉ 玖格設計《繁》</h6><p>${ssrInterpolate(unref(data)[14].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[15].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">◉ NANONANO《narrative of landscape》</h6><p>${ssrInterpolate(unref(data)[15].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[16].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">◉ XTRUX x 晟SHENG《觀》</h6><p>${ssrInterpolate(unref(data)[16].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[17].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">◉ 魏廷宇《沉浸場域作品精選：20-23》</h6><p>${ssrInterpolate(unref(data)[17].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[18].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">◉ 莊禾《夜遊 2023》</h6><p>${ssrInterpolate(unref(data)[18].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[19].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">◉ 黃偉Ｘ鄭道元《INNERSTAR 01 : Reddening》</h6><p>${ssrInterpolate(unref(data)[19].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data)[20].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}"> ◉ 蔡奇宏《封包對撞機》</h6><p>${ssrInterpolate(unref(data)[20].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"></div></div><div class="cont mt-30 d-flex"><div></div><div class="ml-auto"></div></div></div></div></div></div></div></div></section>`);
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
      _push(`<footer${ssrRenderAttrs(_attrs)}><div class="footer-container"><div class="container pb-80 pt-80 ontop"><div class="row"><div class="col-lg-3"><div class="colum md-mb50"><div class="tit mb-20"><h6>地址</h6></div><div class="text"><p>106臺北市大安區建國南路一段177號</p></div></div></div><div class="col-lg-3 offset-lg-1"><div class="colum md-mb50"><div class="tit mb-20"><h6>聯絡方式</h6></div><div class="text"><p class="mb-10"><a href="#0">rdpd@clab.org.tw</a></p><h5><a href="#">+886 2 87735087</a></h5></div></div></div><div class="col-lg-2 md-mb50"><div class="tit mb-20"><h6>官方帳號</h6></div><ul class="rest social-text"><li><a href="https://www.facebook.com/profile.php?id=100079147550663">Facebook</a></li><li><a href="https://www.instagram.com/clab.futurevisionlab/">Instagram</a></li></ul></div><div class="col-lg-3"><div class="tit mb-20"></div><div class="subscribe"></div></div></div></div><div class="sub-footer pt-40 pb-40 bord-thin-top ontop"><div class="container"><div class="row"><div class="col-lg-4"></div><div class="col-lg-8"><div class="copyright d-flex"><div class="ml-auto"></div></div></div></div></div></div></div></footer>`);
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
export {
  __nuxt_component_1 as _,
  __nuxt_component_2 as a,
  __nuxt_component_3 as b,
  __nuxt_component_4 as c,
  __nuxt_component_5 as d,
  __nuxt_component_6 as e,
  __nuxt_component_7 as f,
  __nuxt_component_8 as g,
  __nuxt_component_9 as h,
  __nuxt_component_10 as i,
  __nuxt_component_11 as j,
  __nuxt_component_12 as k
};
//# sourceMappingURL=Footer-9433f068.js.map

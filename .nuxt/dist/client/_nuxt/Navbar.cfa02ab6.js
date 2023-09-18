import{_ as p}from"./nuxt-link.7f66a425.js";import{h as m,i as v,o as r,b as h,f as s,e as o,w as t,j as a,k as w}from"./entry.468990d5.js";const f=""+globalThis.__publicAssetsURL("dark/assets/imgs/LOGO.png"),b=""+globalThis.__publicAssetsURL("dark/assets/imgs/LOGOwhite.png"),k={class:"container"},x={class:"logo icon-img-100",href:"#"},S={key:0,src:f,alt:"logo"},L={key:1,src:b,style:{width:"160px",height:"24px"},alt:"logo"},M=s("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"icon-bar"},[s("i",{class:"fas fa-bars"})])],-1),y={class:"navbar-nav"},C=s("a",{class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},[s("span",{class:"rolling-text"},"首頁")],-1),B={class:"dropdown-menu mega-menu"},$={class:"container"},q={class:"row"},N={class:"col-lg-3"},O={class:"clumn"},T=s("div",{class:"title"},[s("h6",{class:"sub-title ls1"},"Home Dark")],-1),I={class:"links"},V={class:"col-lg-3"},A={class:"clumn"},D=s("div",{class:"title"},[s("h6",{class:"sub-title ls1"},"Showcases")],-1),P={class:"links"},U={class:"col-lg-3"},z={class:"clumn"},E=s("div",{class:"title"},[s("h6",{class:"sub-title ls1"},"Showcases Light")],-1),F={class:"links"},j=s("a",{class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},[s("span",{class:"rolling-text"},"關於我們")],-1),G={class:"dropdown-menu"},H={class:"nav-item"},R=s("span",{class:"rolling-text"},"作品介紹",-1),Y=s("a",{class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},[s("span",{class:"rolling-text"},"最新消息")],-1),J={class:"dropdown-menu"},K={class:"nav-item"},Q=s("span",{class:"rolling-text"},"聯絡我們",-1),W=s("div",{class:"form-group"},[s("input",{type:"text",name:"search",placeholder:"Search"}),s("button",null,[s("span",{class:"pe-7s-search"})])],-1),X=s("span",{class:"pe-7s-search open-search"},null,-1),Z=s("span",{class:"pe-7s-close close-search"},null,-1),ss=[X,Z],ts={__name:"Navbar",props:["lightMode","mainBg","subBg","noStatic","curve"],setup(l){function u(){const n=window.scrollY,c=document.querySelector(".navbar");n>300?c.classList.add("nav-scroll"):c.classList.remove("nav-scroll")}function i(n){n.currentTarget.querySelector(".dropdown-menu").classList.add("show")}function d(n){n.currentTarget.querySelector(".dropdown-menu").classList.remove("show")}function g(){document.querySelector(".navbar .navbar-collapse").classList.toggle("show")}function _(){let n=document.querySelector(".navbar .search-form"),c=document.querySelector(".search-form .close-search");n.classList.toggle("open"),n.classList.contains("open")?c.style.display="block":c.style.display="none"}return m(()=>{window.addEventListener("scroll",u)}),v(()=>{window.removeEventListener("scroll",u)}),(n,c)=>{const e=p;return r(),h("nav",{class:w(`navbar navbar-expand-lg ${l.curve?"nav-crev":""} ${l.noStatic?"":"static"} ${l.mainBg?"main-bg":""} ${l.subBg?"sub-bg":""}`)},[s("div",k,[s("a",x,[l.lightMode?(r(),h("img",S)):(r(),h("img",L))]),M,s("div",{class:"collapse navbar-collapse justify-content-center",id:"navbarSupportedContent",onClick:g},[s("ul",y,[s("li",{class:"nav-item dropdown",onMousemove:i,onMouseleave:d},[C,s("div",B,[s("div",$,[s("div",q,[s("div",N,[s("div",O,[T,s("div",I,[o(e,{class:"dropdown-item",to:"/dark/home-corporate"},{default:t(()=>[a("Corporate Business")]),_:1}),o(e,{class:"dropdown-item",to:"/dark/home-onepage"},{default:t(()=>[a("Home One page")]),_:1}),o(e,{class:"dropdown-item",to:"/dark/home-architecture"},{default:t(()=>[a("Architecture")]),_:1})])])]),s("div",V,[s("div",A,[D,s("div",P,[o(e,{class:"dropdown-item",to:"/dark/showcase-parallax-slider"},{default:t(()=>[a("Parallax Slider")]),_:1}),o(e,{class:"dropdown-item",to:"/dark/showcase-frame-slider"},{default:t(()=>[a("Frame Slider")]),_:1}),o(e,{class:"dropdown-item",to:"/dark/showcase-circle-slider"},{default:t(()=>[a("Circle Slider")]),_:1}),o(e,{class:"dropdown-item",to:"/dark/showcase-carousel"},{default:t(()=>[a("Showcase Carousel")]),_:1}),o(e,{class:"dropdown-item",to:"/dark/showcase-interactive-center-horizontal"},{default:t(()=>[a("Interactive Links1")]),_:1}),o(e,{class:"dropdown-item",to:"/dark/showcase-interactive-center"},{default:t(()=>[a("Interactive Links2 ")]),_:1}),o(e,{class:"dropdown-item",to:"/dark/showcase-parallax"},{default:t(()=>[a("Vertical Parallax")]),_:1})])])]),s("div",U,[s("div",z,[E,s("div",F,[o(e,{class:"dropdown-item",to:"/light/showcase-parallax-slider"},{default:t(()=>[a("Parallax Slider")]),_:1}),o(e,{class:"dropdown-item",to:"/light/showcase-carousel"},{default:t(()=>[a("Showcase Carousel")]),_:1}),o(e,{class:"dropdown-item",to:"/light/showcase-frame-slider"},{default:t(()=>[a("Frame Slider")]),_:1}),o(e,{class:"dropdown-item",to:"/light/showcase-circle-slider"},{default:t(()=>[a("Circle Slider")]),_:1}),o(e,{class:"dropdown-item",to:"/light/showcase-interactive-center-horizontal"},{default:t(()=>[a("Interactive Links1")]),_:1}),o(e,{class:"dropdown-item",to:"/light/showcase-interactive-center"},{default:t(()=>[a("Interactive Links2 ")]),_:1}),o(e,{class:"dropdown-item",to:"/light/showcase-parallax"},{default:t(()=>[a("Vertical Parallax")]),_:1})])])])])])])],32),s("li",{class:"nav-item dropdown",onMousemove:i,onMouseleave:d},[j,s("div",G,[o(e,{class:"dropdown-item",to:`/${l.lightMode?"light":"dark"}/page-about`},{default:t(()=>[a("About")]),_:1},8,["to"]),o(e,{class:"dropdown-item",to:`/${l.lightMode?"light":"dark"}/page-contact`},{default:t(()=>[a("Contact Us")]),_:1},8,["to"])])],32),s("li",H,[o(e,{class:"nav-link",to:`/${l.lightMode?"light":"dark"}/portfolio-grid-2`},{default:t(()=>[R]),_:1},8,["to"])]),s("li",{class:"nav-item dropdown",onMousemove:i,onMouseleave:d},[Y,s("div",J,[o(e,{class:"dropdown-item",to:`/${l.lightMode?"light":"dark"}/blog-classic`},{default:t(()=>[a("Blog Standerd ")]),_:1},8,["to"]),o(e,{class:"dropdown-item",to:`/${l.lightMode?"light":"dark"}/blog-list`},{default:t(()=>[a("Blog List")]),_:1},8,["to"]),o(e,{class:"dropdown-item",to:`/${l.lightMode?"light":"dark"}/blog-half-img`},{default:t(()=>[a("Image Out Frame ")]),_:1},8,["to"]),o(e,{class:"dropdown-item",to:`/${l.lightMode?"light":"dark"}/blog-details`},{default:t(()=>[a("Blog Details ")]),_:1},8,["to"])])],32),s("li",K,[o(e,{class:"nav-link",to:`/${l.lightMode?"light":"dark"}/page-contact`},{default:t(()=>[Q]),_:1},8,["to"])])])]),s("div",{class:"search-form"},[W,s("div",{class:"search-icon",onClick:_},ss)])])],2)}}};export{ts as _};

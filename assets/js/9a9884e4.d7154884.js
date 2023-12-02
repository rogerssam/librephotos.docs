"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[7684],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),h=o,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6862:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={slug:"2023w37",title:"Development: 2023 - Week 36/37",authors:["niaz"],tags:["release"]},i=void 0,l={permalink:"/blog/2023w37",editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/blog/2023-09-15-2023w37.md",source:"@site/blog/2023-09-15-2023w37.md",title:"Development: 2023 - Week 36/37",description:"I want to answer two questions: What is the best way to implement automatic image captioning, and what systems are the users of LibrePhotos using?",date:"2023-09-15T00:00:00.000Z",formattedDate:"September 15, 2023",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:1.125,hasTruncateMarker:!1,authors:[{name:"Niaz Faridani-Rad",title:"Maintainer of LibrePhotos",url:"https://github.com/derneuere",imageURL:"https://github.com/derneuere.png",key:"niaz"}],frontMatter:{slug:"2023w37",title:"Development: 2023 - Week 36/37",authors:["niaz"],tags:["release"]},prevItem:{title:"Development: 2023 - October",permalink:"/blog/2023w43"},nextItem:{title:"Development: 2023 - August",permalink:"/blog/2023w35"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I want to answer two questions: What is the best way to implement automatic image captioning, and what systems are the users of LibrePhotos using?"),(0,o.kt)("p",null,"Fill out this questionnaire, to help me out! ",(0,o.kt)("a",{parentName:"p",href:"https://forms.gle/vJjzxwpXf5vwTm9v9"},"https://forms.gle/vJjzxwpXf5vwTm9v9")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Upstream:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\ude80 LibrePhotos: You can now choose a different geocoding provider (Implemented by ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/sickelap"},"sickelap"),")"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\ude80 LibrePhotos: We now provide an image with GPU support. Follow these ",(0,o.kt)("a",{parentName:"li",href:"https://docs.librephotos.com/docs/installation/environment-variables/"},"instructions")),(0,o.kt)("li",{parentName:"ul"},"\u2728 Frontend: You can now remove a face from a person in the ligthbox"),(0,o.kt)("li",{parentName:"ul"},"\u2728 Frontend: You can now rename or remove a person in the face dashboard"),(0,o.kt)("li",{parentName:"ul"},"\u2728 LibrePhotos: Removed startup warnings"),(0,o.kt)("li",{parentName:"ul"},"\u2728 LibrePhotos: A lot of new and improved translations from the community"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd28 Frontend: Fixed the place tree"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd28 Frontend: Fixed a couple of issues when downloading server stats"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd28 Frontend: Refetch photodetails when generating a caption"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd28 LibrePhotos: Fixed more edge cases when reading face regions from exif"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd28 LibrePhotos: Fixed an issue, where the same face would be detected twice")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"New Issues:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\udca1 Album tags (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/1009"},"Link"),")")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If you are interested on how I develop this application, you can watch me develop features live on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.youtube.com/channel/UCZJ2pk2BPKxwbuCV9LWDR0w"},"my channel"))),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sponsoring development:")),(0,o.kt)("p",null,"My work is sponsored by ",(0,o.kt)("strong",{parentName:"p"},"10")," awesome people!"),(0,o.kt)("p",null,"If you like the work I do, then you can support me via ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/sponsors/derneuere"},"GitHub sponsors"))," or via ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.paypal.com/donate/?hosted_button_id=5JWVM2UR4LM96"},"PayPal"))))}c.isMDXComponent=!0}}]);
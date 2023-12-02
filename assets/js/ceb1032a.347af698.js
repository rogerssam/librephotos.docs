"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[3378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),h=o,b=m["".concat(p,".").concat(h)]||m[h]||c[h]||a;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={slug:"2023w48",title:"Development: 2023 - November",authors:["niaz"],tags:["release"]},l=void 0,i={permalink:"/blog/2023w48",editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/blog/2023-12-01-2023w48.md",source:"@site/blog/2023-12-01-2023w48.md",title:"Development: 2023 - November",description:"Survey:",date:"2023-12-01T00:00:00.000Z",formattedDate:"December 1, 2023",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:.88,hasTruncateMarker:!1,authors:[{name:"Niaz Faridani-Rad",title:"Maintainer of LibrePhotos",url:"https://github.com/derneuere",imageURL:"https://github.com/derneuere.png",key:"niaz"}],frontMatter:{slug:"2023w48",title:"Development: 2023 - November",authors:["niaz"],tags:["release"]},nextItem:{title:"Development: 2023 - October",permalink:"/blog/2023w43"}},p={authorsImageUrls:[void 0]},s=[],u={toc:s},m="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Survey:")),(0,o.kt)("p",null,"I want to answer two questions: What is the best way to implement automatic image captioning, and what systems are the users of LibrePhotos using?"),(0,o.kt)("p",null,"Fill out this questionnaire, to help me out! ",(0,o.kt)("a",{parentName:"p",href:"https://forms.gle/vJjzxwpXf5vwTm9v9"},"https://forms.gle/vJjzxwpXf5vwTm9v9")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Upstream:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\ude80 LibrePhotos: You can now download a new image captioning model called BLIP"),(0,o.kt)("li",{parentName:"ul"},"\u2728 Frontend: Shared album will now be visible in URL, which allows for deep-linking. (Implemented by ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/sickelap"},"sickelap"),")"),(0,o.kt)("li",{parentName:"ul"},"\u2728 Frontend: Tons of maintainability issue fixed by ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/sickelap"},"sickelap")),(0,o.kt)("li",{parentName:"ul"},"\u2728 LibrePhotos: Progress of downloading models is now visible in the logs"),(0,o.kt)("li",{parentName:"ul"},"\u2728 LibrePhotos: Updated around a bunch of dependencies and updated language strings from the community"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd28 LibrePhotos: Download of pictures should work now, even if the zip file is large. Fixed by ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AnkurPrabhu"},"AnkurPrabhu"))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If you are interested on how I develop this application, you can watch me develop features live on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.youtube.com/channel/UCZJ2pk2BPKxwbuCV9LWDR0w"},"my channel"))),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sponsoring development:")),(0,o.kt)("p",null,"My work is sponsored by ",(0,o.kt)("strong",{parentName:"p"},"10")," awesome people!"),(0,o.kt)("p",null,"If you like the work I do, then you can support me via ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/sponsors/derneuere"},"GitHub sponsors"))," or via ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.paypal.com/donate/?hosted_button_id=5JWVM2UR4LM96"},"PayPal"))))}c.isMDXComponent=!0}}]);
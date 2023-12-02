"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[8070],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(r),c=n,k=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return r?a.createElement(k,i(i({ref:t},h),{},{components:r})):a.createElement(k,i({ref:t},h))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7314:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={slug:"2022w50",title:"Development: 2022 - Week 46 / 47 / 48 / 49 / 50",authors:["niaz"],tags:["release"]},i=void 0,s={permalink:"/blog/2022w50",editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/blog/2022-12-24-2022w50.md",source:"@site/blog/2022-12-24-2022w50.md",title:"Development: 2022 - Week 46 / 47 / 48 / 49 / 50",description:"Upstream:",date:"2022-12-24T00:00:00.000Z",formattedDate:"December 24, 2022",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:1.355,hasTruncateMarker:!1,authors:[{name:"Niaz Faridani-Rad",title:"Maintainer of LibrePhotos",url:"https://github.com/derneuere",imageURL:"https://github.com/derneuere.png",key:"niaz"}],frontMatter:{slug:"2022w50",title:"Development: 2022 - Week 46 / 47 / 48 / 49 / 50",authors:["niaz"],tags:["release"]},prevItem:{title:"Development: 2023 - January / February",permalink:"/blog/2023w08"},nextItem:{title:"Development: 2022 - Week 42 / 43 / 44 / 45",permalink:"/blog/2022w45"}},l={authorsImageUrls:[void 0]},p=[],h={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Upstream:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude80 LibrePhotos: You can now reset datetime rules (Implemented by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/sickelap"},"sickelap"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude80 Docker-Compose: The backend image is now 800 MB smaller (Implemented by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/JcMinarro"},"JcMinarro"),")"),(0,n.kt)("li",{parentName:"ul"},"\u2728 Frontend: You can now see which datetime rules are a default (Implemented by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/sickelap"},"sickelap"),")"),(0,n.kt)("li",{parentName:"ul"},"\u2728 Frontend: You can now search datetime rules (Implemented by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/sickelap"},"sickelap"),")"),(0,n.kt)("li",{parentName:"ul"},"\u2728 Frontend: Migrated more pages to RTK (Implemented by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/sickelap"},"sickelap"),")"),(0,n.kt)("li",{parentName:"ul"},"\u2728 Frontend: Added the first E2E test for the frontend (Implemented by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/sickelap"},"sickelap"),")"),(0,n.kt)("li",{parentName:"ul"},"\u2728 Translations: More Vietnamese, Spanish, Italian, Ukrainian, Norwegian, Russian, German translations by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/stnokott"},"stnokott"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Vistaus"},"Vistaus"),", Matthew Wu (\u5434\u5609\u4fca), ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hsa00000"},"hsa00000"),", J. Lavoie, BMN, ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/loulou91"},"loulou91"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/RandomHacks-Git"},"RandomHacks-Git"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/IhorHordiichuk"},"IhorHordiichuk"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nerodacles"},"Nerodacles"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/TouchySpidey"},"TouchySpidey"),", Gau Map, ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gallegonovato"},"gallegonovato")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd28 Frontend: Images no longer leak between users when switching accounts (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/453"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd28 Frontend: Settings page now loads values correctly (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/673"},"Link"),")")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"New Issues:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2753 Newbie basics: how to share (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/705"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\u2753 Library Scans (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/704"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc1b sorting by 'date' becomes sorting by 'confidence' after a browser refresh (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/703"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc1b Standard local install, cannot connect to BE (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/700"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\u2753 Unable to Share Photos with Other users (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/697"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 Integrate pull request preview environments (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/696"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 Base URL functionality (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/694"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 Use EXIF metadata to supplement labelling people (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/690"},"Link"),")"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc1b When searching a person, it does not appear (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LibrePhotos/librephotos/issues/686"},"Link"),")")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"If you are interested on how I develop this application, you can watch me develop features live on ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.youtube.com/channel/UCZJ2pk2BPKxwbuCV9LWDR0w"},"my channel"))),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sponsoring development:")),(0,n.kt)("p",null,"My work is sponsored by ",(0,n.kt)("strong",{parentName:"p"},"13")," awesome people!"),(0,n.kt)("p",null,"If you like the work I do, then you can support me via ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/sponsors/derneuere"},"GitHub sponsors"))," or via ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.paypal.com/donate/?hosted_button_id=5JWVM2UR4LM96"},"PayPal"))))}m.isMDXComponent=!0}}]);
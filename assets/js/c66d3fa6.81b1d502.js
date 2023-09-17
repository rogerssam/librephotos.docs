"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[7050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"\ud83d\udcd6 Advanced docker-compose usage",excerpt:"Here are a couple of advanced tips",sidebar_position:5},i=void 0,l={unversionedId:"installation/environment-variables",id:"installation/environment-variables",title:"\ud83d\udcd6 Advanced docker-compose usage",description:"Utilizing GPU Acceleration",source:"@site/docs/installation/environment-variables.md",sourceDirName:"installation",slug:"/installation/environment-variables",permalink:"/docs/installation/environment-variables",draft:!1,editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/docs/installation/environment-variables.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\ud83d\udcd6 Advanced docker-compose usage",excerpt:"Here are a couple of advanced tips",sidebar_position:5},sidebar:"userguide",previous:{title:"\ud83d\udcbb Local",permalink:"/docs/installation/manual-debian-install"},next:{title:"User Guide",permalink:"/docs/user-guide/"}},s={},c=[{value:"Utilizing GPU Acceleration",id:"utilizing-gpu-acceleration",level:3},{value:"Changing the container names",id:"changing-the-container-names",level:3},{value:"Old environment variables",id:"old-environment-variables",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"utilizing-gpu-acceleration"},"Utilizing GPU Acceleration"),(0,r.kt)("p",null,"To leverage GPU acceleration for neural networks and face detection, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Update NVIDIA GPU Driver:"),"\nEnsure you have the latest NVIDIA GPU driver installed on your system. You can download and install it from the official NVIDIA website.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Install NVIDIA Container Toolkit:"),"\nInstall the NVIDIA Container Toolkit, which enables GPU support within Docker containers. You can do this by running the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install nvidia-container-toolkit\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Update Docker Compose Configuration:"),"\nModify your ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file to specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"reallibrephotos/librephotos-gpu")," image as the backend for your application. Locate the relevant service definition for your backend, and update it to use the GPU-enabled image. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  backend:\n    image: reallibrephotos/librephotos-gpu:${tag}\n    # ... other configuration settings ...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configure GPU Resources in Docker Compose:"),"\nAdd a ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy")," section to your Docker Compose file to allocate GPU resources to the backend service. Ensure you specify the correct GPU driver, count, and capabilities. Here's an example of how to do this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  backend:\n    image: reallibrephotos/librephotos-gpu:${tag}\n    # ... other configuration settings ...\n    deploy:\n      resources:\n        reservations:\n          devices:\n            - driver: nvidia\n              count: 1\n              capabilities: [gpu]\n")))),(0,r.kt)("h3",{id:"changing-the-container-names"},"Changing the container names"),(0,r.kt)("p",null,"Follow the normal instructions as per your chosen build, but after updating the .env file to choose your container names, run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make rename\n")),(0,r.kt)("p",null,"Then you can resume following the normal instructions."),(0,r.kt)("h3",{id:"old-environment-variables"},"Old environment variables"),(0,r.kt)("p",null,"These are now site settings. If you set these values, they will act as the default on the first set-up."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Comma delimited list of patterns to ignore (e.g. "@eaDir,#recycle" for synology devices)\nskipPatterns=\n# Allow uploading files\nallowUpload=true\n# Number of workers, when scanning pictures. This setting can dramatically affect the ram usage.\n# Each worker needs 800MB of RAM. Change at your own will. Default is 1.\nHEAVYWEIGHT_PROCESS=1\n# Do you want to see on a map where all your photos where taken (if a location is stored in your photos)\n# Get a Map box API Key https://account.mapbox.com/auth/signup/\nmapApiKey=\n# Username for the Administrator login.\nuserName=admin\n# Password for the administrative user you set above.\nuserPass=admin\n# Email for the administrative user.\nadminEmail=admin@example.com\n')))}m.isMDXComponent=!0}}]);
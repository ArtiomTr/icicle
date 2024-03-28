"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[208],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6163:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(8168),i=(t(6540),t(5680));t(1873);const a={},o="Vector Operations",c={unversionedId:"icicle/golang-bindings/vec-ops",id:"icicle/golang-bindings/vec-ops",title:"Vector Operations",description:"Overview",source:"@site/docs/icicle/golang-bindings/vec-ops.md",sourceDirName:"icicle/golang-bindings",slug:"/icicle/golang-bindings/vec-ops",permalink:"/icicle/golang-bindings/vec-ops",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/golang-bindings/vec-ops.md",tags:[],version:"current",lastUpdatedBy:"Artiom Tretjakovas",lastUpdatedAt:1711613391,formattedLastUpdatedAt:"3/28/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"NTT",permalink:"/icicle/golang-bindings/ntt"},next:{title:"Rust bindings",permalink:"/icicle/rust-bindings"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Example",id:"example",level:2},{value:"Vector addition",id:"vector-addition",level:3},{value:"Vector Subtraction",id:"vector-subtraction",level:3},{value:"Vector Multiplication",id:"vector-multiplication",level:3},{value:"VecOps Method",id:"vecops-method",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"VecOpsConfig",id:"vecopsconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Default Configuration",id:"default-configuration",level:3}],p={toc:s},u="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"vector-operations"},"Vector Operations"),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"The VecOps API provides efficient vector operations such as addition, subtraction, and multiplication."),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("h3",{id:"vector-addition"},"Vector addition"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/wrappers/golang/cuda_runtime"\n)\n\nfunc main() {\n    testSize := 1 << 12\n    a := GenerateScalars(testSize)\n    b := GenerateScalars(testSize)\n    out := make(core.HostSlice[ScalarField], testSize)\n    cfg := core.DefaultVecOpsConfig()\n\n    // Perform vector addition\n    err := VecOp(a, b, out, cfg, core.Add)\n    if err != cr.CudaSuccess {\n        panic("Vector addition failed")\n    }\n}\n')),(0,i.yg)("h3",{id:"vector-subtraction"},"Vector Subtraction"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/wrappers/golang/cuda_runtime"\n)\n\nfunc main() {\n    testSize := 1 << 12\n    a := GenerateScalars(testSize)\n    b := GenerateScalars(testSize)\n    out := make(core.HostSlice[ScalarField], testSize)\n    cfg := core.DefaultVecOpsConfig()\n\n    // Perform vector subtraction\n    err := VecOp(a, b, out, cfg, core.Sub)\n    if err != cr.CudaSuccess {\n        panic("Vector subtraction failed")\n    }\n}\n')),(0,i.yg)("h3",{id:"vector-multiplication"},"Vector Multiplication"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/wrappers/golang/cuda_runtime"\n)\n\nfunc main() {\n    testSize := 1 << 12\n    a := GenerateScalars(testSize)\n    b := GenerateScalars(testSize)\n    out := make(core.HostSlice[ScalarField], testSize)\n    cfg := core.DefaultVecOpsConfig()\n\n    // Perform vector multiplication\n    err := VecOp(a, b, out, cfg, core.Mul)\n    if err != cr.CudaSuccess {\n        panic("Vector multiplication failed")\n    }\n}\n')),(0,i.yg)("h2",{id:"vecops-method"},"VecOps Method"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func VecOp(a, b, out core.HostOrDeviceSlice, config core.VecOpsConfig, op core.VecOps) (ret cr.CudaError)\n")),(0,i.yg)("h3",{id:"parameters"},"Parameters"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"a"),": The first input vector."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"b"),": The second input vector."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"out"),": The output vector where the result of the operation will be stored."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"config"),": A ",(0,i.yg)("inlineCode",{parentName:"li"},"VecOpsConfig")," object containing various configuration options for the vector operations."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"op"),": The operation to perform, specified as one of the constants (",(0,i.yg)("inlineCode",{parentName:"li"},"Sub"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"Add"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"Mul"),") from the ",(0,i.yg)("inlineCode",{parentName:"li"},"VecOps")," type.")),(0,i.yg)("h3",{id:"return-value"},"Return Value"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"CudaError"),": Returns a CUDA error code indicating the success or failure of the vector operation.")),(0,i.yg)("h2",{id:"vecopsconfig"},"VecOpsConfig"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"VecOpsConfig")," structure holds configuration parameters for the vector operations, allowing customization of its behavior."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type VecOpsConfig struct {\n    Ctx cr.DeviceContext\n    isAOnDevice bool\n    isBOnDevice bool\n    isResultOnDevice bool\n    IsResultMontgomeryForm bool\n    IsAsync bool\n}\n")),(0,i.yg)("h3",{id:"fields"},"Fields"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Ctx"),": Device context containing details like device ID and stream ID."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"isAOnDevice"),": Indicates if vector ",(0,i.yg)("inlineCode",{parentName:"li"},"a")," is located on the device."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"isBOnDevice"),": Indicates if vector ",(0,i.yg)("inlineCode",{parentName:"li"},"b")," is located on the device."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"isResultOnDevice"),": Specifies where the result vector should be stored (device or host memory)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"IsResultMontgomeryForm"),": Determines if the result vector should be in Montgomery form."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"IsAsync"),": Controls whether the vector operation runs asynchronously.")),(0,i.yg)("h3",{id:"default-configuration"},"Default Configuration"),(0,i.yg)("p",null,"Use ",(0,i.yg)("inlineCode",{parentName:"p"},"DefaultVecOpsConfig")," to obtain a default configuration, customizable as needed."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func DefaultVecOpsConfig() VecOpsConfig\n")))}g.isMDXComponent=!0},1873:(e,n,t)=>{t(6540)}}]);
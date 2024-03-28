"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[824],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||g[m]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));n(1873);const o={},s="Run ICICLE on Google Colab",i={unversionedId:"icicle/colab-instructions",id:"icicle/colab-instructions",title:"Run ICICLE on Google Colab",description:"Google Colab lets you use a GPU free of charge, it's an Nvidia T4 GPU with 16 GB of memory, capable of running latest CUDA (tested on Cuda 12.2)",source:"@site/docs/icicle/colab-instructions.md",sourceDirName:"icicle",slug:"/icicle/colab-instructions",permalink:"/icicle/colab-instructions",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/colab-instructions.md",tags:[],version:"current",lastUpdatedBy:"Artiom Tretjakovas",lastUpdatedAt:1711613391,formattedLastUpdatedAt:"3/28/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Supporting Additional Curves",permalink:"/icicle/supporting-additional-curves"},next:{title:"ZKContainer",permalink:"/ZKContainers"}},l={},c=[{value:"Prepare Colab environment",id:"prepare-colab-environment",level:2},{value:"Cloning ICICLE and running test",id:"cloning-icicle-and-running-test",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...o}=e;return(0,a.yg)(p,(0,r.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"run-icicle-on-google-colab"},"Run ICICLE on Google Colab"),(0,a.yg)("p",null,"Google Colab lets you use a GPU free of charge, it's an Nvidia T4 GPU with 16 GB of memory, capable of running latest CUDA (tested on Cuda 12.2)\nAs Colab is able to interact with shell commands, a user can also install a framework and load git repositories into Colab space."),(0,a.yg)("h2",{id:"prepare-colab-environment"},"Prepare Colab environment"),(0,a.yg)("p",null,"First thing to do in a notebook is to set the runtime type to a T4 GPU."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'in the upper corner click on the dropdown menu and select "change runtime type"')),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Change runtime",src:n(3747).A,width:"423",height:"388"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'In the window select "T4 GPU" and press Save')),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"T4 GPU",src:n(1547).A,width:"582",height:"424"})),(0,a.yg)("p",null,"Installing Rust is rather simple, just execute the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"!apt install rustc cargo\n")),(0,a.yg)("p",null,"To test the installation of Rust:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"!rustc --version\n!cargo --version\n")),(0,a.yg)("p",null,"A successful installation will result in a rustc and cargo version print, a faulty installation will look like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"/bin/bash: line 1: rustc: command not found\n/bin/bash: line 1: cargo: command not found\n")),(0,a.yg)("p",null,"Now we will check the environment:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"!nvcc --version\n!gcc --version\n!cmake --version\n!nvidia-smi\n")),(0,a.yg)("p",null,"A correct environment should print the result with no bash errors for ",(0,a.yg)("inlineCode",{parentName:"p"},"nvidia-smi")," command and result in a ",(0,a.yg)("strong",{parentName:"p"},"Teslt T4 GPU")," type:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"nvcc: NVIDIA (R) Cuda compiler driver\nCopyright (c) 2005-2023 NVIDIA Corporation\nBuilt on Tue_Aug_15_22:02:13_PDT_2023\nCuda compilation tools, release 12.2, V12.2.140\nBuild cuda_12.2.r12.2/compiler.33191640_0\ngcc (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0\nCopyright (C) 2021 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n\ncmake version 3.27.9\n\nCMake suite maintained and supported by Kitware (kitware.com/cmake).\nWed Jan 17 13:10:18 2024\n+---------------------------------------------------------------------------------------+\n| NVIDIA-SMI 535.104.05             Driver Version: 535.104.05   CUDA Version: 12.2     |\n|-----------------------------------------+----------------------+----------------------+\n| GPU  Name                 Persistence-M | Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp   Perf          Pwr:Usage/Cap |         Memory-Usage | GPU-Util  Compute M. |\n|                                         |                      |               MIG M. |\n|=========================================+======================+======================|\n|   0  Tesla T4                       Off | 00000000:00:04.0 Off |                    0 |\n| N/A   39C    P8               9W /  70W |      0MiB / 15360MiB |      0%      Default |\n|                                         |                      |                  N/A |\n+-----------------------------------------+----------------------+----------------------+\n\n+---------------------------------------------------------------------------------------+\n| Processes:                                                                            |\n|  GPU   GI   CI        PID   Type   Process name                            GPU Memory |\n|        ID   ID                                                             Usage      |\n|=======================================================================================|\n|  No running processes found                                                           |\n+---------------------------------------------------------------------------------------+\n")),(0,a.yg)("h2",{id:"cloning-icicle-and-running-test"},"Cloning ICICLE and running test"),(0,a.yg)("p",null,"Now we are ready to clone ICICE repository,"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"!git clone https://github.com/ingonyama-zk/icicle.git\n")),(0,a.yg)("p",null,"We now can browse the repository and run tests to check the runtime environment:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"!ls -la\n%cd icicle\n")),(0,a.yg)("p",null,"Let's run a test!\nNavigate to icicle/wrappers/rust/icicle-curves/icicle-bn254 and run cargo test:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"%cd wrappers/rust/icicle-curves/icicle-bn254/\n!cargo test --release\n")),(0,a.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},"Compiling the first time may take a while"))),(0,a.yg)("p",null,"Test run should end like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"running 15 tests\ntest curve::tests::test_ark_point_convert ... ok\ntest curve::tests::test_ark_scalar_convert ... ok\ntest curve::tests::test_affine_projective_convert ... ok\ntest curve::tests::test_point_equality ... ok\ntest curve::tests::test_field_convert_montgomery ... ok\ntest curve::tests::test_scalar_equality ... ok\ntest curve::tests::test_points_convert_montgomery ... ok\ntest msm::tests::test_msm ... ok\ntest msm::tests::test_msm_skewed_distributions ... ok\ntest ntt::tests::test_ntt ... ok\ntest ntt::tests::test_ntt_arbitrary_coset ... ok\ntest msm::tests::test_msm_batch has been running for over 60 seconds\ntest msm::tests::test_msm_batch ... ok\ntest ntt::tests::test_ntt_coset_from_subgroup ... ok\ntest ntt::tests::test_ntt_device_async ... ok\ntest ntt::tests::test_ntt_batch ... ok\n\ntest result: ok. 15 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 99.39s\n")),(0,a.yg)("p",null,"Viola, ICICLE in Colab!"))}g.isMDXComponent=!0},3747:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/colab_change_runtime-eda3091877f78ec971a41338d6b33c2c.png"},1547:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/t4_gpu-798c30098fd3b77784113e9a13659489.png"},1873:(e,t,n)=>{n(6540)}}]);
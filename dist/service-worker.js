if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const f=e=>i(e,r),c={module:{uri:r},exports:s,require:f};t[r]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(o(...e),s)))}}define(["./workbox-1c3383c2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./index.html",revision:"af4d520f9931984e8fad8c3fc87917f0"},{url:"bundle.js",revision:"6afd936bf86c8c8bfa71f59f322a33db"}],{})}));
//# sourceMappingURL=service-worker.js.map
if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const c=e=>n(e,o),d={module:{uri:o},exports:r,require:c};s[o]=Promise.all(t.map((e=>d[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-32827819"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.min.js",revision:"7cfa85743d56e7d301cbc95c565f09d4"},{url:"styles.css",revision:"de3c269bdaef33a9d9fee147b081ef36"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.NetworkFirst,"GET")}));
//# sourceMappingURL=sw.js.map

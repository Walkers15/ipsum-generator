(function(){"use strict";var e={6576:function(e,t,n){var o=n(9242),u=n(2026),l=n(3396),r=n(7139),a=n.p+"img/favicon.21e7a6c4.png";const i=(0,l._)("img",{alt:"Faker.js logo",style:{width:"100px",height:"100px"},src:a},null,-1),s=(0,l._)("div",null,[(0,l._)("h1",null,"Ipsum Generator"),(0,l._)("p",null,"No-ads Online Lorem Ipsum Generator")],-1),c={class:"m-0"},p=(0,l._)("div",null,null,-1),d=(0,l._)("div",null,[(0,l.Uk)("Made By "),(0,l._)("a",{href:"https://github.com/Walkers15"},"Walkers15"),(0,l.Uk)(" / Ipsum By "),(0,l._)("a",{href:"https://fakerjs.dev/"},"Faker.js")],-1);function f(e,t,n,o,u,a){const f=(0,l.up)("b-form-select"),m=(0,l.up)("b-col"),g=(0,l.up)("b-form-input"),v=(0,l.up)("b-button"),h=(0,l.up)("b-row"),b=(0,l.up)("b-card"),y=(0,l.up)("b-container");return(0,l.wg)(),(0,l.iD)(l.HY,null,[i,s,(0,l._)("div",null,[(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{cols:"4"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{modelValue:u.languageSelected,"onUpdate:modelValue":t[0]||(t[0]=e=>u.languageSelected=e),options:u.languageOptions},null,8,["modelValue","options"])])),_:1}),(0,l.Wm)(m,{cols:"3"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{modelValue:u.typeSelected,"onUpdate:modelValue":t[1]||(t[1]=e=>u.typeSelected=e),options:u.typeOptions},null,8,["modelValue","options"])])),_:1}),(0,l.Wm)(m,{cols:"3"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{type:"number",modelValue:u.count,"onUpdate:modelValue":t[2]||(t[2]=e=>u.count=e),placeholder:"Count"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(m,{cols:"2"},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{variant:"primary",onClick:a.makeIpsum},{default:(0,l.w5)((()=>[(0,l.Uk)("Ipsum!")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,l.Wm)(b,{class:"mt-3",header:"Ipsum Result"},{default:(0,l.w5)((()=>[(0,l._)("pre",c,(0,r.zw)(u.text),1)])),_:1})])),_:1})]),p,d],64)}var m=n(6943),g={name:"App",components:{},data(){return{languageSelected:"en",languageOptions:[{value:"en",text:"English"},{value:"ko",text:"Korean"},{value:"ja",text:"Japanese"},{value:"zh_CN",text:"Chinese"}],typeSelected:0,typeOptions:[{value:0,text:"paragraphs"},{value:1,text:"words"},{value:2,text:"sentences"},{value:3,text:"lines"}],count:3,text:""}},methods:{async makeIpsum(){if(this.count<=0)return alert("count가 0 이하입니다!"),void(this.count=3);const e=await m.Z.get(`https://mapled.kro.kr/ipsum?language=${this.languageSelected}&type=${this.typeSelected}&count=${this.count}`);this.text=e.data.ipsum}},compatConfig:{MODE:3}},v=n(89);const h=(0,v.Z)(g,[["render",f]]);var b=h;(0,o.ri)(b).use(u.ZP).mount("#app")}},t={};function n(o){var u=t[o];if(void 0!==u)return u.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,u,l){if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],u=e[c][1],l=e[c][2];for(var a=!0,i=0;i<o.length;i++)(!1&l||r>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[i])}))?o.splice(i--,1):(a=!1,l<r&&(r=l));if(a){e.splice(c--,1);var s=u();void 0!==s&&(t=s)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,u,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/ipsum-generator/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var u,l,r=o[0],a=o[1],i=o[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(u in a)n.o(a,u)&&(n.m[u]=a[u]);if(i)var c=i(n)}for(t&&t(o);s<r.length;s++)l=r[s],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},o=self["webpackChunkipsum_generator"]=self["webpackChunkipsum_generator"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6576)}));o=n.O(o)})();
//# sourceMappingURL=app.37ab6e1a.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{422:function(t,e,n){"use strict";var r=n(7),o=n(423),c=n(193),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);r(r.P+r.F*l,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},423:function(t,e,n){var r=n(23),o=n(194),c=n(42);t.exports=function(t,e,n,l){var f=String(c(t)),d=f.length,m=void 0===n?" ":String(n),h=r(e);if(h<=d||""==m)return f;var v=h-d,x=o.call(m,Math.ceil(v/m.length));return x.length>v&&(x=x.slice(0,v)),l?x+f:f+x}},444:function(t,e,n){var content=n(487);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(88).default)("6759f5ab",content,!0,{sourceMap:!1})},486:function(t,e,n){"use strict";var r=n(444);n.n(r).a},487:function(t,e,n){(e=n(87)(!1)).push([t.i,".Index{margin:0 auto;height:calc(100vh - 4rem);display:flex;justify-content:center;align-items:center;text-align:center}.Index .index-content{max-width:100%}.Index .ctf-logo{font-family:Fredoka One,cursive;font-size:8rem;font-weight:300;color:#0096fa;-webkit-text-fill-color:transparent;background:linear-gradient(90deg,#974dff,#29d277);-webkit-background-clip:text;background-clip:text;display:block;letter-spacing:1px;mix-blend-mode:screen}@media (max-width:900px){.Index .ctf-logo{font-size:18vw}}.Index .subtitle{font-family:Roboto,sans-serif;font-size:1.5rem;margin-top:-1rem;opacity:.3}.Index .buttons{display:flex;margin-top:1rem;justify-content:center}.Index .button{display:block;margin:0 .5rem;width:10rem;height:2.6rem;line-height:2.6rem;border-radius:9999px;font-size:1.5rem;font-family:Fredoka One,cursive;font-weight:300}.Index .button.login{background:linear-gradient(90deg,#6299a7,#21207d)}.Index .button.register{background:linear-gradient(90deg,#ffc107,#f44336)}.Index .timer{margin-top:1rem;font-family:Roboto,sans-serif;font-size:4rem}",""]),t.exports=e},502:function(t,e,n){"use strict";n.r(e);n(21),n(11),n(10),n(17),n(35),n(36),n(6),n(422);var r=n(4),o=n(126),c=n(34);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f=new Date("2020-07-11T07:00:00Z").getTime(),d=new Date("2020-07-12T07:00:00Z").getTime(),m={components:{IsoLink:o.a},data:function(){return{remainingTime:this.getRemaining()}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({timer:function(){var t=Math.floor(this.remainingTime/1e3/60/60/24).toString().padStart(2,"0"),e=(Math.floor(this.remainingTime/1e3/60/60)%24).toString().padStart(2,"0"),n=(Math.floor(this.remainingTime/1e3/60)%60).toString().padStart(2,"0"),r=(Math.floor(this.remainingTime/1e3)%60).toString().padStart(2,"0");return"".concat(t,":").concat(e,":").concat(n,":").concat(r)}},Object(c.c)(["isLoggedIn"])),mounted:function(){var t=this;this.interval=setInterval((function(){t.remainingTime=t.getRemaining()}),1e3)},destroyed:function(){clearInterval(this.interval)},methods:{getRemaining:function(){var t=Date.now();return t>d?0:t>f?d-t:f-t}},head:function(){return{title:"TSG CTF"}}},h=(n(486),n(28)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"Index"},[n("div",{staticClass:"index-content"},[n("h1",{staticClass:"ctf-logo"},[t._v("TSG CTF")]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v("Pwn, Rev, Web, Crypto, etc...")]),t._v(" "),n("div",{staticClass:"timer"},[t._v(t._s(t.timer))]),t._v(" "),t.isLoggedIn?t._e():n("div",{staticClass:"buttons"},[n("iso-link",{staticClass:"button login",attrs:{to:"/login"}},[t._v("Login")]),t._v(" "),n("iso-link",{staticClass:"button register",attrs:{to:"/register"}},[t._v("Register")])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);
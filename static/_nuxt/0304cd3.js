(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{425:function(t,e,n){"use strict";var r=n(7),o=n(426),c=n(195),f=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);r(r.P+r.F*f,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},426:function(t,e,n){var r=n(25),o=n(196),c=n(43);t.exports=function(t,e,n,f){var l=String(c(t)),d=l.length,m=void 0===n?" ":String(n),h=r(e);if(h<=d||""==m)return l;var v=h-d,O=o.call(m,Math.ceil(v/m.length));return O.length>v&&(O=O.slice(0,v)),f?O+l:l+O}},429:function(t,e,n){"use strict";var r=n(8),o=n(38),c=n(44),f=n(124),l=n(86),d=n(19),m=n(64).f,h=n(88).f,v=n(16).f,O=n(430).trim,N=r.Number,y=N,S=N.prototype,j="Number"==c(n(87)(S)),w="trim"in String.prototype,_=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=w?e.trim():O(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,f=e.slice(2),i=0,d=f.length;i<d;i++)if((code=f.charCodeAt(i))<48||code>o)return NaN;return parseInt(f,r)}}return+e};if(!N(" 0o1")||!N("0b1")||N("+0x1")){N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(j?d((function(){S.valueOf.call(n)})):"Number"!=c(n))?f(new y(_(e)),n,N):_(e)};for(var x,E=n(13)?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;E.length>I;I++)o(y,x=E[I])&&!o(N,x)&&v(N,x,h(y,x));N.prototype=S,S.constructor=N,n(20)(r,"Number",N)}},430:function(t,e,n){var r=n(7),o=n(43),c=n(19),f=n(431),l="["+f+"]",d=RegExp("^"+l+l+"*"),m=RegExp(l+l+"*$"),h=function(t,e,n){var o={},l=c((function(){return!!f[t]()||"​"!="​"[t]()})),d=o[t]=l?e(v):f[t];n&&(o[n]=d),r(r.P+r.F*l,"String",o)},v=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(m,"")),t};t.exports=h},431:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},432:function(t,e,n){"use strict";n(21),n(11),n(9),n(18),n(30),n(31),n(6),n(425);var r=n(4),o=(n(429),n(24));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{class:{required:!1,default:"",type:String},datetime:{required:!0,type:Number},autoUpdate:{required:!0,type:Number}},computed:f(f({},Object(o.c)(["isStatic"])),{},{klass:function(){return this.class},date:function(){return new Date(this.datetime)},dateText:function(){var t=(this.date.getUTCMonth()+1).toString().padStart(2,"0"),e=this.date.getUTCDate().toString().padStart(2,"0"),n=this.date.getUTCHours().toString().padStart(2,"0"),r=this.date.getUTCMinutes().toString().padStart(2,"0"),o=this.date.getUTCSeconds().toString().padStart(2,"0");return"".concat(t,"/").concat(e," ").concat(n,":").concat(r,":").concat(o)}})},d=n(29),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isStatic?n("time",{class:t.klass,attrs:{datetime:t.datetime}},[t._v("\n\t"+t._s(t.dateText)+"\n")]):n("timeago",{class:t.klass,attrs:{datetime:t.datetime,"auto-update":t.autoUpdate}})}),[],!1,null,null,null);e.a=component.exports},438:function(t,e,n){var content=n(466);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("e5268c2a",content,!0,{sourceMap:!1})},465:function(t,e,n){"use strict";n(438)},466:function(t,e,n){(e=n(83)(!1)).push([t.i,'.Notifications>.title{margin-bottom:5rem}.Notifications .notification{width:100%;max-width:50rem;background:hsla(0,0%,100%,.2);box-shadow:0 0 8px #000;position:relative;color:#fff;margin:1rem auto;padding:.8rem 10rem 1rem 1rem;box-sizing:border-box;border-radius:3px}.Notifications .notification .title{font-size:2rem}.Notifications .notification .date{position:absolute;bottom:1rem;right:1rem}.Notifications .notification .content{white-space:pre-line}.Notifications .no-notification{text-align:center;font-size:2.5rem;font-family:"Fredoka One",cursive;font-weight:300;padding:0;line-height:2rem}',""]),t.exports=e},495:function(t,e,n){"use strict";n.r(e);n(21),n(11),n(9),n(6),n(18),n(12);var r=n(2),o=n(4),c=n(432),f=n(24);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={components:{IsoTimeago:c.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.b)({notifications:"notifications/getNotifications"})),asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.store.dispatch("notifications/updateNotifications",t);case 2:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Notifications - TSG CTF"}}},m=(n(465),n(29)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"Notifications"},[t._m(0),t._v(" "),t._l(t.notifications,(function(e){return n("div",{key:e.id,staticClass:"notification"},[n("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"content"},[t._v(t._s(e.content))]),t._v(" "),n("iso-timeago",{staticClass:"date",attrs:{datetime:e.date,"auto-update":60}})],1)})),t._v(" "),0===t.notifications.length?n("div",{staticClass:"no-notification"},[t._v("\n\t\tNo notifications yet!\n\t")]):t._e()],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title"},[e("span",[this._v("Notifications")])])}],!1,null,null,null);e.default=component.exports}}]);
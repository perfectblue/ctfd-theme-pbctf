(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{422:function(t,e,r){var content=r(424);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("53eee732",content,!0,{sourceMap:!1})},423:function(t,e,r){"use strict";r(422)},424:function(t,e,r){(e=r(83)(!1)).push([t.i,"@-webkit-keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}",""]),t.exports=e},425:function(t,e,r){"use strict";var n=r(7),o=r(426),c=r(194),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);n(n.P+n.F*l,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},426:function(t,e,r){var n=r(25),o=r(195),c=r(43);t.exports=function(t,e,r,l){var m=String(c(t)),f=m.length,d=void 0===r?" ":String(r),h=n(e);if(h<=f||""==d)return m;var v=h-f,y=o.call(d,Math.ceil(v/d.length));return y.length>v&&(y=y.slice(0,v)),l?y+m:m+y}},427:function(t,e,r){"use strict";var n={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},o=(r(423),r(29)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"v-spinner"},[e("div",{staticClass:"v-pulse v-pulse1",style:[this.spinnerStyle,this.spinnerDelay1]}),e("div",{staticClass:"v-pulse v-pulse2",style:[this.spinnerStyle,this.spinnerDelay2]}),e("div",{staticClass:"v-pulse v-pulse3",style:[this.spinnerStyle,this.spinnerDelay3]})])}),[],!1,null,null,null);e.a=component.exports},429:function(t,e,r){"use strict";var n=r(8),o=r(38),c=r(44),l=r(124),m=r(86),f=r(19),d=r(64).f,h=r(88).f,v=r(16).f,y=r(430).trim,_=n.Number,O=_,S=_.prototype,w="Number"==c(r(87)(S)),j="trim"in String.prototype,x=function(t){var e=m(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=j?e.trim():y(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(w?f((function(){S.valueOf.call(r)})):"Number"!=c(r))?l(new O(x(e)),r,_):x(e)};for(var T,C=r(13)?d(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;C.length>I;I++)o(O,T=C[I])&&!o(_,T)&&v(_,T,h(O,T));_.prototype=S,S.constructor=_,r(20)(n,"Number",_)}},430:function(t,e,r){var n=r(7),o=r(43),c=r(19),l=r(431),m="["+l+"]",f=RegExp("^"+m+m+"*"),d=RegExp(m+m+"*$"),h=function(t,e,r){var o={},m=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=o[t]=m?e(v):l[t];r&&(o[r]=f),n(n.P+n.F*m,"String",o)},v=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(d,"")),t};t.exports=h},431:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},432:function(t,e,r){"use strict";r(21),r(11),r(9),r(18),r(30),r(31),r(6),r(425);var n=r(4),o=(r(429),r(24));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={props:{class:{required:!1,default:"",type:String},datetime:{required:!0,type:Number},autoUpdate:{required:!0,type:Number}},computed:l(l({},Object(o.c)(["isStatic"])),{},{klass:function(){return this.class},date:function(){return new Date(this.datetime)},dateText:function(){var t=(this.date.getUTCMonth()+1).toString().padStart(2,"0"),e=this.date.getUTCDate().toString().padStart(2,"0"),r=this.date.getUTCHours().toString().padStart(2,"0"),n=this.date.getUTCMinutes().toString().padStart(2,"0"),o=this.date.getUTCSeconds().toString().padStart(2,"0");return"".concat(t,"/").concat(e," ").concat(r,":").concat(n,":").concat(o)}})},f=r(29),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isStatic?r("time",{class:t.klass,attrs:{datetime:t.datetime}},[t._v("\n\t"+t._s(t.dateText)+"\n")]):r("timeago",{class:t.klass,attrs:{datetime:t.datetime,"auto-update":t.autoUpdate}})}),[],!1,null,null,null);e.a=component.exports},447:function(t,e,r){var content=r(489);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("64d04996",content,!0,{sourceMap:!1})},488:function(t,e,r){"use strict";r(447)},489:function(t,e,r){(e=r(83)(!1)).push([t.i,'.Team .title{text-transform:none;margin-bottom:0;z-index:-1;display:flex;justify-content:center;flex-direction:column;align-items:center}.Team .title:before{content:"Team";font-family:serif;font-family:initial;color:hsla(0,0%,100%,.6);font-size:1rem;line-height:.2rem;text-align:center;left:0;right:0;bottom:calc(100% - .3rem)}.Team .score{font-size:2rem}.Team .members-head,.Team .score{text-align:center;font-family:"Roboto"}.Team .members-head{font-size:1.2rem;margin-top:2rem}.Team .members{display:flex;flex-wrap:wrap;width:100%;max-width:30rem;margin:0 auto;justify-content:center}.Team .member{font-size:1.5rem;margin:0 .5rem}.Team table{max-width:1000px;margin-top:4rem}.Team thead{font-size:1.4rem}.Team tbody{font-size:1.2rem}',""]),t.exports=e},504:function(t,e,r){"use strict";r.r(e);r(21),r(11),r(18),r(22);var n=r(47),o=(r(89),r(32),r(85),r(9),r(6),r(17),r(23)),c=(r(12),r(2)),l=r(4),m=r(24),f=r(432);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{PulseLoader:r(427).a,IsoTimeago:f.a},computed:h(h({team:function(t){return this.teams.get(parseInt(this.$route.params.id))||{}},score:function(t){return this.$store.getters["scoreboard/getScore"](parseInt(this.$route.params.id))||{}}},Object(m.c)({isStatic:"isStatic",isLoggedIn:"isLoggedIn",isVerified:"isVerified",teams:function(t){return t.teams.teams}})),Object(m.b)({getUser:"users/getUser"})),asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.store.dispatch("teams/getTeam",h(h({},t),{},{id:t.route.params.id})),t.store.dispatch("scoreboard/updateScoreboard",t)]);case 2:r=e.sent,n=Object(o.a)(r,1),null===n[0]&&t.error({statusCode:404,message:"Team not found"});case 6:case"end":return e.stop()}}),e)})))()},mounted:function(){if(this.isStatic||this.isLoggedIn)if(this.isStatic||this.isVerified){var t=Array.from(new Set([].concat(Object(n.a)(this.team.solves.map((function(t){return t.user}))),Object(n.a)(this.team.members))));this.$store.dispatch("users/getUsers",{$axios:this.$axios,ids:t})}else this.$router.replace({path:"/confirm"});else this.$router.replace({path:"/login"})},methods:{formatOrdinals:function(i){var t=i%10,e=i%100;return"".concat(i,1===t&&11!==e?"st":2===t&&12!==e?"nd":3===t&&13!==e?"rd":"th")}},head:function(){return{title:"Team ".concat(this.team&&this.team.name," - pbctf")}}},y=(r(488),r(29)),component=Object(y.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"Team"},[r("h2",{staticClass:"title"},[r("span",[t._v(t._s(t.team.name))])]),t._v(" "),r("div",{staticClass:"score"},[t._v(t._s(t.formatOrdinals(t.score.pos))+" "+t._s(t.score.score)+"pts")]),t._v(" "),r("div",{staticClass:"members-head"},[t._v("Members")]),t._v(" "),r("div",{staticClass:"members"},t._l(t.team.members,(function(e){return r("div",{key:e,staticClass:"member"},[t.getUser(e)?r("span",[t._v(t._s(t.getUser(e).name))]):r("pulse-loader",{attrs:{color:"white",size:"10px"}})],1)})),0),t._v(" "),r("div",{staticClass:"table-wrap"},[r("table",{staticClass:"scoreboard"},[t._m(0),t._v(" "),r("tbody",t._l(t.team.solves,(function(e){return r("tr",{key:e.challenge_id},[r("td",[r("b",[t._v(t._s(e.challenge.name))])]),t._v(" "),r("td",[t._v(t._s(e.challenge.category))]),t._v(" "),r("td",[t._v(t._s(e.challenge.value))]),t._v(" "),r("td",[t.getUser(e.user)?r("span",[t._v("\n\t\t\t\t\t\t\t"+t._s(t.getUser(e.user).name)+"\n\t\t\t\t\t\t")]):r("pulse-loader",{attrs:{color:"white",size:"10px"}})],1),t._v(" "),r("td",[r("iso-timeago",{attrs:{datetime:e.date,"auto-update":60}})],1)])})),0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("td",{attrs:{scope:"col"}},[r("b",[t._v("Challenge")])]),t._v(" "),r("td",{attrs:{scope:"col"}},[r("b",[t._v("Category")])]),t._v(" "),r("td",{attrs:{scope:"col"}},[r("b",[t._v("Value")])]),t._v(" "),r("td",{attrs:{scope:"col"}},[r("b",[t._v("Solver")])]),t._v(" "),r("td",{attrs:{scope:"col"}},[r("b",[t._v("Time")])])])])}],!1,null,null,null);e.default=component.exports}}]);
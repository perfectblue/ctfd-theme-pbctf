(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{425:function(e,t,n){var content=n(427);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(84).default)("53eee732",content,!0,{sourceMap:!1})},426:function(e,t,n){"use strict";n(425)},427:function(e,t,n){(t=n(83)(!1)).push([e.i,"@-webkit-keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}",""]),e.exports=t},428:function(e,t,n){"use strict";var r=n(8),o=n(38),l=n(44),c=n(125),d=n(86),h=n(19),f=n(64).f,m=n(88).f,v=n(16).f,C=n(429).trim,y=r.Number,x=y,w=y.prototype,k="Number"==l(n(87)(w)),_="trim"in String.prototype,S=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,l=(t=_?t.trim():C(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var code,c=t.slice(2),i=0,h=c.length;i<h;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+t};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof y&&(k?h((function(){w.valueOf.call(n)})):"Number"!=l(n))?c(new x(S(t)),n,y):S(t)};for(var M,j=n(13)?f(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;j.length>O;O++)o(x,M=j[O])&&!o(y,M)&&v(y,M,m(x,M));y.prototype=w,w.constructor=y,n(20)(r,"Number",y)}},429:function(e,t,n){var r=n(7),o=n(43),l=n(19),c=n(430),d="["+c+"]",h=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),m=function(e,t,n){var o={},d=l((function(){return!!c[e]()||"​"!="​"[e]()})),h=o[e]=d?t(v):c[e];n&&(o[n]=h),r(r.P+r.F*d,"String",o)},v=m.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(h,"")),2&t&&(e=e.replace(f,"")),e};e.exports=m},430:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},433:function(e,t,n){"use strict";var r={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},o=(n(426),n(31)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"v-spinner"},[t("div",{staticClass:"v-pulse v-pulse1",style:[this.spinnerStyle,this.spinnerDelay1]}),t("div",{staticClass:"v-pulse v-pulse2",style:[this.spinnerStyle,this.spinnerDelay2]}),t("div",{staticClass:"v-pulse v-pulse3",style:[this.spinnerStyle,this.spinnerDelay3]})])}),[],!1,null,null,null);t.a=component.exports},437:function(e,t,n){var content=n(460);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(84).default)("4313fac7",content,!0,{sourceMap:!1})},438:function(e,t,n){var content=n(464);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(84).default)("76f3c576",content,!0,{sourceMap:!1})},459:function(e,t,n){"use strict";n(437)},460:function(e,t,n){var r=n(83),o=n(199),l=n(461),c=n(462);t=r(!1);var d=o(l),h=o(c);t.push([e.i,".Challenge{margin-bottom:10px;display:flex;text-align:left;background:rgba(0,0,0,.2);border-radius:.5rem}.Challenge .list-marker{flex:0 0 48px;position:relative}.Challenge .list-marker .checkbox{width:42px;height:42px;position:absolute;top:3px;left:0;background:url("+d+");background-size:cover;opacity:.8}.Challenge .list-marker .checkbox.solved{background:url("+h+')}.Challenge .list-content{width:100%}.Challenge:not(:last-child) .list-marker:before{content:"";position:absolute;background:hsla(0,0%,100%,.5);top:46px;left:20px;bottom:-10px;width:3px;border-radius:3px}.Challenge .title{font-size:2.5rem;font-family:"Roboto",cursive;font-weight:300;display:inline-block;letter-spacing:1px;cursor:pointer}.Challenge .title-name{color:#52baff;-webkit-text-fill-color:transparent;background:linear-gradient(90deg,#ffdb4d,#ff0);-webkit-background-clip:text;background-clip:text}.Challenge .points{background:hsla(0,0%,100%,.6);display:inline-block;color:#0d030e;-webkit-text-fill-color:#0d030e;font-size:1.2rem;margin-left:.2rem;padding:.1rem .3rem;vertical-align:middle;letter-spacing:0;border-radius:3px}.Challenge .subtitle{line-height:2rem}.Challenge .tag{margin:0 .3rem;padding:.2rem .8rem;background:hsla(0,0%,100%,.5);color:#333;border-radius:10rem;font-weight:700;font-size:.8rem}.Challenge .tag.beginner{background:#52baff}.Challenge .tag.broken{background:#ff5252}.Challenge .content{background:hsla(0,0%,100%,.2);padding:1rem;width:auto;box-sizing:border-box;border-radius:1rem;position:relative;border-top-right-radius:0;margin:1rem 2rem 1.5rem .5rem}.Challenge .content.is-solves-open{margin-top:0;border-top-left-radius:0}.Challenge .solve-count{background:#2f2f44;position:absolute;bottom:100%;right:0;padding:0 .3rem;border-radius:5px;border-bottom-right-radius:0;border-bottom-left-radius:0;cursor:pointer}.Challenge .solve-count.someone-solved{background:#ff5722}.Challenge .solve-count.solved{background:#4caf50}.Challenge .solve-count.is-solves-open{bottom:calc(100% + 2rem)}.Challenge .solves{display:block;height:2rem;line-height:2rem;padding:0 .5rem;margin-top:1rem;margin-left:.5rem;border-top-left-radius:1rem;text-align:right;background:#272b24;overflow:hidden}.Challenge .solves .first-blood{color:red;vertical-align:text-top}.Challenge .solves a{color:#03a9f4}.Challenge .description-header{display:flex;justify-content:space-between}.Challenge .author{display:block}.Challenge .description{font-size:1.2rem;margin-bottom:1rem;font-family:Roboto,sans-serif;letter-spacing:.05em;display:flex;line-height:1.6em}.Challenge .description .description-column{flex:1 0 0;padding:0 .5rem}.Challenge .description .description-column:nth-child(2) p{font-weight:400;letter-spacing:0}.Challenge .description strong{color:#ffeb3b}.Challenge .description p{margin:.5rem 0;font-weight:700}.Challenge .description a{color:#03a9f4}.Challenge .description code{background:#333;padding:.1rem .5rem;font-weight:400}.Challenge .description pre{background:#333;padding:.5rem;white-space:pre-line;word-break:break-all}.Challenge .description pre code{background:transparent;padding:0}.Challenge .description hr{opacity:.4;margin:1.5rem 1rem}.Challenge .description img{max-width:100%}.Challenge .attachments{display:flex;flex-wrap:wrap}.Challenge .attachment{width:15rem;margin:.5rem;height:3rem;line-height:3rem;background:#222;border-radius:3px;text-align:center}.Challenge .attachment:before{content:"";background:url(https://cdn.jsdelivr.net/gh/google/material-design-icons@2.2.0/file/2x_web/ic_attachment_white_18dp.png);background-size:cover;display:inline-block;width:1.4rem;height:1.4rem;vertical-align:middle}.Challenge .description-loading{height:6rem;display:flex;justify-content:center;align-items:center}.Challenge .flag-form{display:flex;margin-top:1rem}.Challenge .flag-input{flex:1 1 0;width:0;height:2.5rem;border-radius:9999px;margin-right:.5rem;padding:0 1rem;font-family:"Roboto",sans-serif;font-size:1.4rem;background:#ddd;color:#333}.Challenge .flag-input[disabled]{background:#aaa;color:#000}.Challenge .flag-input.yay{background:linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab,#ee7752,#e73c7e,#23a6d5,#23d5ab,#ee7752,#e73c7e,#23a6d5,#23d5ab,#ee7752,#e73c7e,#23a6d5,#23d5ab,#ee7752,#e73c7e,#23a6d5,#23d5ab);background-size:1000% 1000%;-webkit-animation:Gradient 3s ease-out 1 both;animation:Gradient 3s ease-out 1 both;color:#fff;font-size:2rem;font-family:"Roboto",cursive;font-weight:300}@-webkit-keyframes Gradient{0%{background-position:0 50%}to{background-position:100% 50%}}@keyframes Gradient{0%{background-position:0 50%}to{background-position:100% 50%}}.Challenge .flag-input.boo{-webkit-animation-name:shake;animation-name:shake;-webkit-animation-duration:.7s,.35s;animation-duration:.7s,.35s;-webkit-animation-iteration-count:1,2;animation-iteration-count:1,2}@-webkit-keyframes shake{0%,20%,40%,60%,80%{transform:translateX(8px)}50%{color:#cd5c5c}10%,30%,50%,70%,90%{transform:translateX(-8px)}}@keyframes shake{0%,20%,40%,60%,80%{transform:translateX(8px)}50%{color:#cd5c5c}10%,30%,50%,70%,90%{transform:translateX(-8px)}}.Challenge .flag-submit{flex:0 0 6rem}.Challenge .flag-submit[disabled]{cursor:default;background:#888}',""]),e.exports=t},461:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+DQogIDx0aXRsZT5jaGVja2JveF9vZmY8L3RpdGxlPg0KICA8cGF0aCBkPSJNMTYsNS45NEExMC4wNiwxMC4wNiwwLDEsMCwyNi4wNiwxNiwxMC4wNSwxMC4wNSwwLDAsMCwxNiw1Ljk0Wk0yMSwyMWE3LjEsNy4xLDAsMSwxLDIuMDgtNUE3LDcsMCwwLDEsMjEsMjFaIiBzdHlsZT0iZmlsbDogI2ZmZiIvPg0KPC9zdmc+DQo="},462:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+DQogIDx0aXRsZT5jaGVja2JveDwvdGl0bGU+DQogIDxnIHN0eWxlPSJvcGFjaXR5OiAwLjgxIj4NCiAgICA8cGF0aCBkPSJNMTEuMiwxNS44NSwxNS42MywyMGEyLDIsMCwwLDAsMi44My0uMTJsMTMtMTQuNjNhMiwyLDAsMSwwLTIuOTUtMi42M0wxNi44NywxNS43NmwtMy0yLjc5YTIsMiwwLDEsMC0yLjcxLDIuODhaIiBzdHlsZT0iZmlsbDogIzAwZTYwMCIvPg0KICA8L2c+DQogIDxwYXRoIGQ9Ik0yMi44MSwxOEE3LjE0LDcuMTQsMCwwLDEsMjEsMjEsNy4xMSw3LjExLDAsMSwxLDE5LjUsOS44M2wyLTIuMjVBMTAuMDYsMTAuMDYsMCwxLDAsMjYuMDYsMTZhMTAuNjEsMTAuNjEsMCwwLDAtLjEyLTEuNTFaIiBzdHlsZT0iZmlsbDogIzAwZTYwMDtvcGFjaXR5OiAwLjgxIi8+DQo8L3N2Zz4NCg=="},463:function(e,t,n){"use strict";n(438)},464:function(e,t,n){(t=n(83)(!1)).push([e.i,'.Challenges{max-width:800px;margin:0 auto;min-height:100vh}.Challenges .title{margin-bottom:0;word-break:break-word}.Challenges .hide-solved{text-align:center;font-family:"Roboto";font-size:1.2rem}.Challenges .ended{font-size:2rem;font-family:"Roboto",cursive;font-weight:300;text-transform:uppercase;letter-spacing:1px;margin-bottom:1rem;word-break:break-word}.Challenges .category,.Challenges .ended{text-align:center;margin-top:3rem}.Challenges .category-name{display:inline-block;text-transform:capitalize;font-family:"Roboto";font-size:2rem;text-align:center;padding:.5rem 1rem;background:#520514;position:relative;margin-bottom:1rem}.Challenges .category-name:before{content:"";position:absolute;border:1px dashed #fff;top:.2rem;left:.2rem;right:.2rem;bottom:.2rem;opacity:.5}.Challenges .challenges{list-style:none;padding:0}.Challenges .not-started{text-align:center;font-size:2.5rem;font-family:"Roboto",cursive;font-weight:300;padding:0;margin-top:6rem;line-height:2rem}',""]),e.exports=t},497:function(e,t,n){"use strict";n.r(t);n(21),n(11),n(18),n(9),n(4),n(17),n(12);var r=n(2),o=(n(85),n(5)),l=n(24),c=(n(126),n(50),n(198),n(433)),d=n(124),h=(n(428),{name:"LiquidSpotIcon",props:{title:{type:String,default:"Liquid Spot icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),f=n(31),m=Object(f.a)(h,(function(e,t){var n=t._c;return n("span",t._g(t._b({staticClass:"material-design-icon liquid-spot-icon",class:[t.data.class,t.data.staticClass],attrs:{"aria-hidden":t.props.decorative,"aria-label":t.props.title,role:"img"}},"span",t.data.attrs,!1),t.listeners),[n("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.props.fillColor,width:t.props.size,height:t.props.size,viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M18.14 16.7C17.23 18.21 16.08 17.73 15 17.09S12.9 15.68 12.25 16.59C11.54 17.37 12.09 18.62 12.37 19.72C12.65 20.83 12.67 21.79 10.9 22C9.5 21.81 9.58 20.65 9.81 19.42C10.04 18.19 10.4 16.89 9.5 16.43C8.78 15.95 8.28 16.78 7.65 17.6C7 18.41 6.26 19.2 5.04 18.62C3.94 17.71 4.36 17.18 4.94 16.5S6.27 14.91 5.84 13.31C5.66 12.66 4.76 12.81 3.87 12.79C3 12.77 2.12 12.59 2.03 11.29C1.96 10.5 2.55 10.18 3.16 9.93C3.78 9.68 4.41 9.5 4.42 8.87C4.45 8.26 4.04 7.83 3.78 7.38S3.41 6.46 4.03 5.76C5.08 4.9 5.92 5.63 6.76 6.42S8.43 8.04 9.46 7.39C10.28 6.85 9.53 5.9 8.95 4.97S7.96 3.15 9.46 2.74C10.76 2.38 11.26 3.27 11.71 4.3C12.17 5.33 12.57 6.5 13.67 6.71C15.24 7 16.38 5.16 17.47 3.7S19.63 1.15 21 2.95C22.5 4.84 21.07 5.72 19.4 6.5C17.73 7.23 15.81 7.87 16.27 9.28C16.54 10.1 17.42 9.65 18.35 9.34C19.27 9.03 20.26 8.86 20.74 10.27C21.25 11.76 20.04 12.1 18.68 12.24C17.32 12.38 15.8 12.32 15.7 13C15.59 13.71 16.5 14 17.29 14.42C18.08 14.85 18.75 15.42 18.14 16.7M20.5 19C19.55 19 19.06 18.26 19.06 17.5C19.06 16.74 19.54 16 20.5 16C21.5 16 22 16.74 22 17.5C22 18.26 21.5 19 20.5 19Z"}},[t.props.decorative?t._e():n("title",[t._v(t._s(t.props.title))])])])])}),[],!0,null,null,null).exports;function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function C(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={components:{PulseLoader:c.a,IsoLink:d.a,LiquidSpot:m},props:{challenge:{required:!0,type:Object}},data:function(){return{isOpen:!1,yay:!1,boo:!1,flagText:"",solves:void 0,isSolvesOpen:!1}},computed:C(C({},Object(l.c)(["isEnded","isStatic"])),{},{tags:function(){return this.challenge.tags.map((function(e){return e.value})).filter((function(e){return!e.match(/author:/i)}))},author:function(){var e=this.challenge.tags.find((function(e){return e.value.match(/author:/i)}));if(e)return e.value.split(":")[1].trim()}}),methods:{onClickTitle:function(){this.isOpen?this.isOpen=!1:(this.isStatic||this.$store.dispatch("challenges/getDetail",{$axios:this.$axios,id:this.challenge.id}),this.isOpen=!0)},formatOrdinals:function(i){var e=i%10,t=i%100;return"".concat(i,1===e&&11!==t?"st":2===e&&12!==t?"nd":3===e&&13!==t?"rd":"th")},getFileName:function(path){var e=new URL(path,location.href).pathname.split("/");return e[e.length-1]},getFileLink:function(path){if(!this.isStatic)return path;var e=new URL(path,location.href).pathname.split("/"),t=e[e.length-1],n=e[e.length-2];return"https://storage.googleapis.com/pbctf-2021-ctfd/".concat(n,"/").concat(t)},getSolvesText:function(e){return"".concat(e," ").concat(1===e?"solve":"solves")},getPlaceholderText:function(e){return e.solved?"You already solved this challenge!":this.isEnded?"Contest has been ended":"pbctf{......}"},toggleSolves:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isSolvesOpen){t.next=3;break}return e.isSolvesOpen=!1,t.abrupt("return");case 3:return e.isSolvesOpen=!0,t.next=6,e.$axios.get("/api/v1/challenges/".concat(e.challenge.id,"/solves"));case 6:n=t.sent,data=n.data,e.solves=data.data;case 9:case"end":return t.stop()}}),t)})))()},getDescription:function(){var e=this.challenge.details.description.split(/^---$/m);return e.length>=2?e[1]:e[0]},onSubmitFlag:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var form,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t.boo=!1,form=new FormData(e.target),r=form.get("flag"),n.next=6,t.$axios.post("/api/v1/challenges/attempt",{challenge_id:parseInt(t.challenge.id),submission:r},{headers:{"content-type":"application/json"}});case 6:if(o=n.sent,"correct"!==o.data.data.status){n.next=15;break}return t.yay=!0,t.flagText="Brilliant!",n.next=13,t.$store.dispatch("challenges/updateChallenges",{$axios:t.$axios});case 13:n.next=16;break;case 15:t.boo=!0;case 16:case"end":return n.stop()}}),n)})))()}}};n(459);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k={components:{Challenge:Object(f.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Challenge"},[n("div",{staticClass:"list-marker"},[n("div",{staticClass:"checkbox",class:{solved:e.challenge.solved}})]),e._v(" "),n("div",{staticClass:"list-content"},[n("div",{staticClass:"title",on:{click:e.onClickTitle}},[n("span",{staticClass:"title-name"},[e._v(e._s(e.challenge.name))]),e._v(" "),n("span",{staticClass:"points"},[e._v(" "+e._s(e.challenge.value)+"pts ")])]),e._v(" "),n("div",{staticClass:"subtitle"},[e._v("\n\t\t\t"+e._s(e.challenge.solves)+" solves -\n\t\t\t"),e._l(e.tags,(function(t){return n("span",{key:t,staticClass:"tag",class:[t]},[e._v("\n\t\t\t\t"+e._s(t)+"\n\t\t\t")])}))],2),e._v(" "),e._v('" class="solves">\n\t\t\t'),void 0===e.solves?n("span",[e._v("Loading...")]):n("span",e._l(100,(function(t){return n("span",{key:t},[e._l(e.solves,(function(t,i){return n("span",{key:t.account_id},[e._v("\n\t\t\t\t\t\t"+e._s(e.formatOrdinals(i+1))+":\n\t\t\t\t\t\t"),n("iso-link",{attrs:{to:"/teams/"+t.account_id}},[e._v(e._s(t.name))]),e._v(" "),0===i?n("liquid-spot",{staticClass:"first-blood",attrs:{name:"first blood"}}):e._e()],1)})),e._v(" "),n("span",{style:{display:"inline-block",width:"3rem"}})],2)})),0),e._v(" "),e.isOpen?n("div",{staticClass:"content",class:{"is-solves-open":e.isSolvesOpen}},[e.challenge.details?n("div",{staticClass:"details"},[n("div",{staticClass:"solve-count",class:{"someone-solved":e.challenge.details.solves>0,"is-solves-open":e.isSolvesOpen,solved:e.challenge.solved},on:{click:e.toggleSolves}},[e._v("\n\t\t\t\t\t"+e._s(e.getSolvesText(e.challenge.details.solves))+"\n\t\t\t\t")]),e._v(" "),n("div",{staticClass:"description-header"},[e.author?n("div",{staticClass:"author"},[n("span",{staticClass:"author-name"},[e._v("Author: "+e._s(e.author))])]):e._e()]),e._v(" "),n("div",{staticClass:"description"},[n("div",{staticClass:"description-column",domProps:{innerHTML:e._s(e.$md.render(e.getDescription()))}})]),e._v(" "),n("div",{staticClass:"attachments"},e._l(e.challenge.details.files,(function(t){return n("a",{key:t,staticClass:"attachment",attrs:{href:e.getFileLink(t),target:"_blank",rel:"noopener noreferrer"}},[e._v("\n\t\t\t\t\t\t"+e._s(e.getFileName(t))+"\n\t\t\t\t\t")])})),0)]):n("div",{staticClass:"description-loading"},[n("pulse-loader",{attrs:{color:"white"}})],1),e._v(" "),n("form",{staticClass:"flag-form",on:{submit:e.onSubmitFlag}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.flagText,expression:"flagText"}],staticClass:"flag-input",class:{yay:e.yay,boo:e.boo},attrs:{type:"text",name:"flag",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",readonly:e.yay,placeholder:e.getPlaceholderText(e.challenge),disabled:e.challenge.solved||e.isEnded},domProps:{value:e.flagText},on:{input:function(t){t.target.composing||(e.flagText=t.target.value)}}}),e._v(" "),n("button",{staticClass:"flag-submit",attrs:{type:"submit",disabled:e.yay||e.challenge.solved||e.isEnded}},[e._v("Send")])])]):e._e()])])}),[],!1,null,null,null).exports},data:function(){return{melody:0,isHideSolved:!1}},computed:w(w({},Object(l.b)({categories:"challenges/getCategories"})),Object(l.c)({isStatic:"isStatic",isLoggedIn:"isLoggedIn",isStarted:"isStarted",isEnded:"isEnded",isVerified:"isVerified",isInTeam:"isInTeam",challenges:function(e){return e.challenges.challenges}})),watch:{isInTeam:function(e){!1===e&&this.$router.replace({path:"/team"})}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.store.dispatch("updateDates",e),e.store.dispatch("challenges/updateChallenges",e),e.store.dispatch("challenges/updateChallengeSolves",e)]);case 2:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;this.isStatic||this.isVerified?this.isStatic||this.isLoggedIn?(this.isStatic||this.isInTeam||this.$router.replace({path:"/team"}),this.melody=Math.floor(4*Math.random()),this.isStatic||(this.interval=setInterval((function(){e.$store.dispatch("updateDates",{$axios:e.$axios}),e.$store.dispatch("challenges/updateChallenges",{$axios:e.$axios}),e.$store.dispatch("challenges/updateChallengeSolves",{$axios:e.$axios})}),6e4))):this.$router.replace({path:"/login"}):this.$router.replace({path:"/confirm"})},destroyed:function(){clearInterval(this.interval)},head:function(){return{title:"Challenges - pbctf"}}},_=(n(463),Object(f.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"Challenges"},[e._m(0),e._v(" "),e.isStarted?n("div",{staticClass:"hide-solved"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isHideSolved,expression:"isHideSolved"}],attrs:{id:"checkbox",type:"checkbox"},domProps:{checked:Array.isArray(e.isHideSolved)?e._i(e.isHideSolved,null)>-1:e.isHideSolved},on:{change:function(t){var n=e.isHideSolved,r=t.target,o=!!r.checked;if(Array.isArray(n)){var l=e._i(n,null);r.checked?l<0&&(e.isHideSolved=n.concat([null])):l>-1&&(e.isHideSolved=n.slice(0,l).concat(n.slice(l+1)))}else e.isHideSolved=o}}}),e._v(" "),n("label",{attrs:{for:"checkbox"}},[e._v("Hide solved")])]):e._e(),e._v(" "),e.isEnded?n("div",{staticClass:"ended"},[e._v("pbctf has been ended!"),n("br"),e._v("Thank you for your pariticipation!")]):e._e(),e._v(" "),e.isStarted?n("div",e._l(e.categories,(function(t){return n("div",{key:t.name,staticClass:"category"},[n("h3",{staticClass:"category-name"},[e._v(e._s(t.name))]),e._v(" "),n("ul",{staticClass:"challenges"},e._l(t.challenges.filter((function(t){var n=t.solved;return!e.isHideSolved||!n})),(function(e){return n("challenge",{key:e.id,attrs:{challenge:e}})})),1)])})),0):n("div",{staticClass:"not-started"},[n("p",[e._v("CTF has not started yet. Stay Tuned!")])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{staticClass:"title"},[t("span",[this._v("Challenges")])])}],!1,null,null,null));t.default=_.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{428:function(t,e,r){"use strict";var n=0;function o(t){if(!n){var s=document.createElement("script");s.setAttribute("src",t),document.body.appendChild(s),n=new Promise((function(t){s.onload=function(){t(window.twttr)}}))}return n}var l={id:{type:String,required:!0},sourceType:{type:String},slug:{type:String},options:Object};t.exports={addPlatformScript:o,twitterEmbedComponent:function(t){return{data:function(){return{isLoaded:!1,isAvailable:!1}},props:Object.assign({},l,t.props),mounted:function(){var e,r=this;e="profile"===this.sourceType?{sourceType:this.sourceType,screenName:this.id}:"list"===this.sourceType?{sourceType:this.sourceType,ownerScreenName:this.id,slug:this.slug}:this.id,Promise.resolve(window.twttr?window.twttr:o("//platform.twitter.com/widgets.js")).then((function(n){return t.embedComponent(n,e,r.$el,r.options)})).then((function(data){r.isAvailable=void 0!==data,r.isLoaded=!0}))},render:function(t){if(this.isLoaded&&this.isAvailable)return t("div",{class:this.$props.widgetClass});if(this.isLoaded&&!this.isAvailable&&this.$props.errorMessage){var e=t("div",{class:this.$props.errorMessageClass,domProps:{innerHTML:this.$props.errorMessage}});return t("div",[e])}return t("div",{class:this.$props.widgetClass},this.$slots.default)}}}}},433:function(t,e,r){var content=r(455);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("504d216a",content,!0,{sourceMap:!1})},449:function(t,e,r){t.exports=r.p+"img/binja.123fcbb.png"},450:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Tweet",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"Moment",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"Timeline",{enumerable:!0,get:function(){return l.default}});var n=c(r(451)),o=c(r(452)),l=c(r(453));function c(t){return t&&t.__esModule?t:{default:t}}},451:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(428).twitterEmbedComponent)({embedComponent:function(t){for(var e,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(e=t.widgets).createTweetEmbed.apply(e,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Tweet."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});e.default=n},452:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(428).twitterEmbedComponent)({embedComponent:function(t){for(var e,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(e=t.widgets).createMoment.apply(e,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Moment."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});e.default=n},453:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(428).twitterEmbedComponent)({embedComponent:function(t){for(var e,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(e=t.widgets).createTimeline.apply(e,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Timeline."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});e.default=n},454:function(t,e,r){"use strict";r(433)},455:function(t,e,r){(e=r(83)(!1)).push([t.i,'.About,.About h3{text-align:center}.About h3{font-size:2rem;font-family:"Roboto",sans-serif;font-weight:300;text-transform:uppercase;letter-spacing:1px;margin-top:3rem;margin-bottom:1rem;word-break:break-word}.About .period{text-align:center;font-size:3rem;line-height:3rem}.About ol,.About p,.About ul{font-family:"Roboto";width:100%;max-width:50rem;margin:0 auto;font-size:1.4rem;line-height:2rem}.About h1,.About h2,.About h3,.About p{padding-bottom:4pt}.About ul.credits{list-style-type:none;column-count:2;-webkit-columns:2;-moz-columns:2}.About ul.socials{display:flex;justify-content:center;flex-wrap:wrap;padding:0}.About ul.socials li{flex:0 0 20rem;height:30rem;overflow-y:auto;display:flex;flex-direction:column;align-items:center;font-size:1rem;margin:0 1rem .6rem}.About img{display:inline-block;width:80vw;max-width:20rem;margin:0 auto 1rem}.About img.sponsor{display:inline;height:80px;max-width:unset;width:auto}.About .logo{-o-object-fit:cover;object-fit:cover;border-radius:50%;max-width:10rem}.About a{color:#90cbff}',""]),t.exports=e},502:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title"},[e("span",[this._v("About")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"period"},[e("a",{attrs:{href:"https://www.timeanddate.com/worldclock/fixedtime.html?iso=20201205T00",target:"_blank",rel:"noopener"}},[this._v("12/05 00:00")]),this._v("\n\t\t\t-\n\t\t\t"),e("a",{attrs:{href:"https://www.timeanddate.com/worldclock/fixedtime.html?iso=20201206T1159",target:"_blank",rel:"noopener"}},[this._v("12/06 23:59")]),this._v(" "),e("small",[this._v("UTC")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("iframe",{attrs:{src:"https://discord.com/widget?id=748672086838607943&theme=dark",allowtransparency:"true",frameborder:"0",width:"350",height:"500",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"}},[e("a",{attrs:{href:"https://discord.gg/8BhEHts",target:"_blank",rel:"noopener"}},[this._v("Discord")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("1st: 5 Binary Ninja personal licenses, $300 cash")]),t._v(" "),r("li",[t._v("2nd: 3 personal licenses, $200 cash")]),t._v(" "),r("li",[t._v("3rd: 1 personal license, $100 cash")]),t._v(" "),r("li",[t._v("1 personal license for best write-up using Binary Ninja Cloud")]),t._v(" "),r("small",[t._v("* May be subject to change")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{display:"block",margin:"0 auto","text-align":"center"}},[e("a",{attrs:{href:"https://vector35.com",target:"_blank",rel:"noopener"}},[e("img",{staticClass:"sponsor",attrs:{src:r(196)}})]),this._v(" "),e("a",{attrs:{href:"https://vector35.com",target:"_blank",rel:"noopener"}},[e("img",{staticClass:"sponsor",attrs:{src:r(449)}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Vector 35 makes "),e("a",{attrs:{href:"https://binary.ninja"}},[this._v("Binary Ninja")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you're interested in building reverse engineering tools, "),e("a",{attrs:{href:"https://vector35.com/hiring.html"}},[this._v("contact us")]),this._v(".\n\t\t\n\t\t")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://perfect.blue",target:"_blank",rel:"noopener"}},[e("img",{staticClass:"logo",attrs:{src:"https://blog.perfect.blue/img/logo.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n\t\t\tpbctf is organized by "),e("a",{attrs:{href:"https://perfect.blue",target:"_blank",rel:"noopener"}},[this._v("perfect blue")]),this._v(".\n\t\t")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"credits"},[r("li",[r("a",{attrs:{href:"https://twitter.com/ret2jazzy",target:"_blank",rel:"noopener"}},[t._v("@ret2jazzy")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/aaditya_purani",target:"_blank",rel:"noopener"}},[t._v("@aaditya_purani")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/gf_256",target:"_blank",rel:"noopener"}},[t._v("@gf_256")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/sampriti0",target:"_blank",rel:"noopener"}},[t._v("@sampriti0")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/_neptunia_",target:"_blank",rel:"noopener"}},[t._v("@_neptunia_")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/wcbowling",target:"_blank",rel:"noopener"}},[t._v("@wcbowling")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/kidofarcrania",target:"_blank",rel:"noopener"}},[t._v("@kidofarcrania")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/0x464c457f",target:"_blank",rel:"noopener"}},[t._v("@0x464c457f")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/RBTree_",target:"_blank",rel:"noopener"}},[t._v("@RBTree_")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/Corb3nik",target:"_blank",rel:"noopener"}},[t._v("@Corb3nik")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/_VoidMercy",target:"_blank",rel:"noopener"}},[t._v("@_VoidMercy")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/bemusicscript",target:"_blank",rel:"noopener"}},[t._v("@bemusicscript")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/Unblvr1",target:"_blank",rel:"noopener"}},[t._v("@Unblvr1")])])])}],o={components:{Timeline:r(450).Timeline},head:function(){return{title:"About - pbctf"}}},l=(r(454),r(29)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"About"},[t._m(0),t._v(" "),r("h3",[t._v("Period")]),t._v(" "),t._m(1),t._v(" "),r("h3",[t._v("Social")]),t._v(" "),r("ul",{staticClass:"socials"},[t._m(2),t._v(" "),r("li",[r("timeline",{attrs:{id:"pb_ctf","source-type":"profile",options:{tweetLimit:"3",theme:"dark",height:"500"}}},[r("a",{attrs:{href:"https://twitter.com/pb_ctf",target:"_blank",rel:"noopener"}},[t._v("Tweets from @pb_ctf")])])],1)]),t._v(" "),r("h3",[t._v("Prizes")]),t._v(" "),t._m(3),t._v(" "),r("h3",[t._v("Sponsors")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),r("h3",[t._v("Staff")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),r("p",[t._v("Below is the full list of perfect blue members (and guests) who contributed to this pbctf edition. Many thanks to their efforts!")]),t._v(" "),t._m(9)])}),n,!1,null,null,null);e.default=component.exports}}]);
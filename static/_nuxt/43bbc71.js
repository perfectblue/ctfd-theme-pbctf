(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{432:function(e,t,r){"use strict";var o=0;function n(e){if(!o){var s=document.createElement("script");s.setAttribute("src",e),document.body.appendChild(s),o=new Promise((function(e){s.onload=function(){e(window.twttr)}}))}return o}var l={id:{type:String,required:!0},sourceType:{type:String},slug:{type:String},options:Object};e.exports={addPlatformScript:n,twitterEmbedComponent:function(e){return{data:function(){return{isLoaded:!1,isAvailable:!1}},props:Object.assign({},l,e.props),mounted:function(){var t,r=this;t="profile"===this.sourceType?{sourceType:this.sourceType,screenName:this.id}:"list"===this.sourceType?{sourceType:this.sourceType,ownerScreenName:this.id,slug:this.slug}:this.id,Promise.resolve(window.twttr?window.twttr:n("//platform.twitter.com/widgets.js")).then((function(o){return e.embedComponent(o,t,r.$el,r.options)})).then((function(data){r.isAvailable=void 0!==data,r.isLoaded=!0}))},render:function(e){if(this.isLoaded&&this.isAvailable)return e("div",{class:this.$props.widgetClass});if(this.isLoaded&&!this.isAvailable&&this.$props.errorMessage){var t=e("div",{class:this.$props.errorMessageClass,domProps:{innerHTML:this.$props.errorMessage}});return e("div",[t])}return e("div",{class:this.$props.widgetClass},this.$slots.default)}}}}},437:function(e,t,r){var content=r(459);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(84).default)("504d216a",content,!0,{sourceMap:!1})},454:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Tweet",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Moment",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Timeline",{enumerable:!0,get:function(){return l.default}});var o=c(r(455)),n=c(r(456)),l=c(r(457));function c(e){return e&&e.__esModule?e:{default:e}}},455:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(0,r(432).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return(t=e.widgets).createTweetEmbed.apply(t,o)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Tweet."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=o},456:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(0,r(432).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return(t=e.widgets).createMoment.apply(t,o)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Moment."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=o},457:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(0,r(432).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return(t=e.widgets).createTimeline.apply(t,o)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Timeline."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=o},458:function(e,t,r){"use strict";r(437)},459:function(e,t,r){(t=r(83)(!1)).push([e.i,'.About,.About h3{text-align:center}.About h3{font-size:2rem;font-family:"Roboto",sans-serif;font-weight:300;text-transform:uppercase;letter-spacing:1px;margin-top:3rem;margin-bottom:1rem;word-break:break-word}.About .period{text-align:center;font-size:3rem;line-height:3rem}.About ol,.About p,.About ul{font-family:"Roboto";width:100%;max-width:50rem;margin:0 auto;font-size:1.4rem;line-height:2rem}.About h1,.About h2,.About h3,.About p{padding-bottom:4pt}.About ul.credits{list-style-type:none;column-count:2;-webkit-columns:2;-moz-columns:2}.About ul.socials{display:flex;justify-content:center;flex-wrap:wrap;padding:0}.About ul.socials li{flex:0 0 20rem;height:30rem;overflow-y:auto;display:flex;flex-direction:column;align-items:center;font-size:1rem;margin:0 1rem .6rem}.About img{display:inline-block;width:80vw;max-width:20rem;margin:0 auto 1rem}.About img.sponsor{display:inline;height:80px;max-width:unset;width:auto}.About .logo{-o-object-fit:cover;object-fit:cover;border-radius:50%;max-width:10rem}.About a{color:#90cbff}',""]),e.exports=t},499:function(e,t,r){"use strict";r.r(t);var o={components:{Timeline:r(454).Timeline},head:function(){return{title:"About - Blue Water CTF"}}},n=(r(458),r(32)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"About"},[e._m(0),e._v(" "),r("h3",[e._v("Period")]),e._v(" "),e._m(1),e._v(" "),r("h3",[e._v("Social")]),e._v(" "),r("ul",{staticClass:"socials"},[e._m(2),e._v(" "),r("li",[r("timeline",{attrs:{id:"pb_ctf","source-type":"profile",options:{tweetLimit:"3",theme:"dark",height:"500"}}},[r("a",{attrs:{href:"https://twitter.com/pb_ctf",target:"_blank",rel:"noopener"}},[e._v("Tweets from @pb_ctf")])])],1)]),e._v(" "),r("h3",[e._v("Staff")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),r("br"),r("p",[e._v("Below is the full list of people who contributed to Blue Water CTF 2024 edition. Many thanks to their efforts!")]),e._v(" "),e._m(6)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{staticClass:"title"},[t("span",[this._v("About")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"period"},[t("a",{attrs:{href:"https://www.timeanddate.com/worldclock/fixedtime.html?iso=20241012T1400",target:"_blank",rel:"noopener"}},[this._v("10/12 14:00")]),this._v("\n\t\t\t-\n\t\t\t"),t("a",{attrs:{href:"https://www.timeanddate.com/worldclock/fixedtime.html?iso=20241014T0200",target:"_blank",rel:"noopener"}},[this._v("10/14 02:00")]),this._v(" "),t("small",[this._v("UTC")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("iframe",{attrs:{src:"https://discord.com/widget?id=748672086838607943&theme=dark",width:"350",height:"500",allowtransparency:"true",frameborder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"}},[t("a",{attrs:{href:"https://discord.gg/7mNgBEHreu",target:"_blank",rel:"noopener"}},[this._v("Discord")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"https://perfect.blue",target:"_blank",rel:"noopener"}},[t("img",{staticClass:"logo",attrs:{src:"https://blog.perfect.blue/img/logo.png"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"https://waterpaddler.team",target:"_blank",rel:"noopener"}},[t("img",{staticClass:"logo",attrs:{src:"https://ctftime.org/media/cache/84/94/8494a42b84778569b83b8258d72de82d.png"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n\t\t\tBlue Water CTF is organized by "),t("a",{attrs:{href:"https://perfect.blue",target:"_blank",rel:"noopener"}},[this._v("perfect blue")]),this._v(" and "),t("a",{attrs:{href:"https://waterpaddler.team",target:"_blank",rel:"noopener"}},[this._v("Water Paddler ")]),this._v(".\n\t\t")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"credits"},[r("li",[r("a",{attrs:{href:"https://x.com/kidOfArcrania",target:"_blank",rel:"noopener"}},[e._v("@kidOfArcrania")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://x.com/j0nathanj",target:"_blank",rel:"noopener"}},[e._v("@j0nathanj")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://x.com/udp_ctf",target:"_blank",rel:"noopener"}},[e._v("@udp_ctf")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://x.com/TheGrandPew",target:"_blank",rel:"noopener"}},[e._v("@TheGrandPew")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://x.com/_Nobodyisnobody",target:"_blank",rel:"noopener"}},[e._v("@_Nobodyisnobody")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://x.com/ah_p_uh",target:"_blank",rel:"noopener"}},[e._v("@ah_p_uh")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://x.com/RBTree_",target:"_blank",rel:"noopener"}},[e._v("@RBTree_")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://x.com/vie_pls",target:"_blank",rel:"noopener"}},[e._v("@vie_pls")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://x.com/ret2jazzy",target:"_blank",rel:"noopener"}},[e._v("@ret2jazzy")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://x.com/josep68_",target:"_blank",rel:"noopener"}},[e._v("@josep68_")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://x.com/Strellic_",target:"_blank",rel:"noopener"}},[e._v("@Strellic_")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://x.com/sshckk",target:"_blank",rel:"noopener"}},[e._v("@sshckk")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://x.com/SuperFashi1",target:"_blank",rel:"noopener"}},[e._v("@SuperFashi1")])])])}],!1,null,null,null);t.default=component.exports}}]);
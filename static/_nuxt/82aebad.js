(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{441:function(e,t,r){var content=r(472);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(84).default)("8be87fea",content,!0,{sourceMap:!1})},471:function(e,t,r){"use strict";r(441)},472:function(e,t,r){(t=r(83)(!1)).push([e.i,'.Rules h1,.Rules h2,.Rules h3{font-family:"Roboto",cursive;font-weight:300;text-align:center;text-transform:uppercase;letter-spacing:1px;margin-top:3rem;margin-bottom:1rem;word-break:break-word}.Rules h1{font-size:2rem}.Rules h2{font-size:1.5rem}.Rules h3{font-size:1rem}.Rules strong{color:#ffeb3b}.Rules ol,.Rules p,.Rules ul{font-family:"Roboto";width:100%;max-width:50rem;margin:0 auto;font-size:1.4rem;line-height:2rem}',""]),e.exports=t},494:function(e,t,r){"use strict";r.r(t);r(21),r(11),r(9),r(6),r(18);var n=r(4),o=(r(12),r(2)),c=r(24);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.store.dispatch("updateRules",e);case 2:case"end":return t.stop()}}),t)})))()},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.c)(["rules"])),head:function(){return{title:"Rules - pbctf"}}},h=(r(471),r(29)),component=Object(h.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"Rules"},[this._m(0),this._v(" "),t("div",{staticClass:"description",domProps:{innerHTML:this._s(this.$md.render(this.rules))}})])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{staticClass:"title"},[t("span",[this._v("Rules")])])}],!1,null,null,null);t.default=component.exports}}]);
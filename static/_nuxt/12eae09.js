(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{440:function(e,t,r){var content=r(470);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(84).default)("1f5991fb",content,!0,{sourceMap:!1})},469:function(e,t,r){"use strict";r(440)},470:function(e,t,r){(t=r(83)(!1)).push([e.i,".Reset{text-align:center}.Reset .title{margin-bottom:3rem}.Reset .subtitle{margin-bottom:1rem;font-size:1.5rem}",""]),e.exports=t},497:function(e,t,r){"use strict";r.r(t);r(21),r(11),r(9),r(6),r(18),r(12);var n=r(2),o=r(4),c=r(24);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={data:function(){return{isError:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.c)(["isLoggedIn","csrfToken"])),asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.store.dispatch("updateCsrfToken",e);case 2:case"end":return t.stop()}}),t)})))()},mounted:function(){document.referrer&&("/reset_password"===new URL(document.referrer).pathname&&(this.isError=!0))},head:function(){return{title:"Reset Password - TSG CTF"}}},h=(r(469),r(29)),component=Object(h.a)(l,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"Reset"},[t("h2",{staticClass:"title"},[t("span",[this._v("Reset Password")])]),this._v(" "),t("p",[this._v("Sorry, please contact an organizer to have your password reset")])])}],!1,null,null,null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{441:function(t,e,r){var content=r(480);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(88).default)("48f6fc54",content,!0,{sourceMap:!1})},479:function(t,e,r){"use strict";var n=r(441);r.n(n).a},480:function(t,e,r){(e=r(87)(!1)).push([t.i,".NewTeam{text-align:center}.NewTeam .title{margin-bottom:0}.NewTeam .subtitle{margin-bottom:2rem;font-size:1.5rem}.NewTeam .subtitle a{color:#90cbff}.NewTeam .form-group{display:flex;justify-content:center;line-height:2rem;padding:.6rem 0;align-items:center}.NewTeam label{font-size:1rem;width:10rem;text-align:right;padding-right:1rem}.NewTeam .form-control{font-size:1.2rem;width:20rem}.NewTeam button[type=submit]{width:10rem;margin:1rem 0}",""]),t.exports=e},496:function(t,e,r){"use strict";r.r(e);r(21),r(11),r(10),r(6),r(17),r(12);var n=r(2),o=r(4),c=r(34);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={data:function(){return{isError:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["csrfToken"])),asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.store.dispatch("updateCsrfToken",t);case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){document.referrer&&("/teams/new"===new URL(document.referrer).pathname&&(this.isError=!0))},head:function(){return{title:"Create Team - TSG CTF"}}},l=(r(479),r(28)),component=Object(l.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"NewTeam"},[t._m(0),t._v(" "),r("div",{staticClass:"subtitle"},[t._v("After creating your team, share the team name and password with your teammates so they can join your team.")]),t._v(" "),r("form",{staticClass:"login-form",attrs:{method:"post","accept-charset":"utf-8",autocomplete:"off"}},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("input",{attrs:{type:"hidden",name:"nonce"},domProps:{value:t.csrfToken}})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title"},[e("span",[this._v("Create Team")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name-input"}},[this._v("\n\t\t\t\tTeam Name\n\t\t\t")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{id:"name-input",type:"text",name:"name"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password-input"}},[this._v("\n\t\t\t\tTeam Password\n\t\t\t")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{id:"password-input",type:"password",name:"password"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{attrs:{id:"submit",type:"submit",tabindex:"5"}},[this._v("\n\t\t\t\tCreate\n\t\t\t")])])}],!1,null,null,null);e.default=component.exports}}]);
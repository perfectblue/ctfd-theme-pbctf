(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{442:function(t,e,r){var content=r(474);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("18dea18d",content,!0,{sourceMap:!1})},473:function(t,e,r){"use strict";r(442)},474:function(t,e,r){(e=r(83)(!1)).push([t.i,".scoreboard{background:rgba(0,0,0,.2)}.Scoreboard table .place{padding-right:1rem;width:6rem;text-align:right}.Scoreboard .team{max-width:18rem;text-overflow:ellipsis;overflow:hidden}.Scoreboard .team-flag{display:inline-block;width:27px;height:18px;background-size:contain;background-position:50%;background-repeat:no-repeat}.Scoreboard tr.active{background:rgba(255,0,0,.3)}.Scoreboard table a{color:#ffcd19}",""]),t.exports=e},493:function(t,e,r){"use strict";r.r(e);r(21),r(11),r(9),r(6),r(18),r(12);var o=r(2),c=r(4),n=r(24);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{IsoLink:r(123).a},computed:d(d({},Object(n.b)({scoreboard:"scoreboard/getScoreboard"})),Object(n.c)({isStatic:"isStatic",myTeam:"team"})),asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.store.dispatch("scoreboard/update",t);case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;this.isStatic||(this.interval=setInterval((function(){t.$store.dispatch("scoreboard/update",{$axios:t.$axios})}),6e4))},destroyed:function(){clearInterval(this.interval)},methods:{getFlagStyle:function(t){return null===t||""===t?{backgroundColor:"transparent"}:{backgroundImage:"url(https://cdn.jsdelivr.net/gh/behdad/region-flags@gh-pages/svg/".concat(t.toUpperCase(),".svg)")}}},head:function(){return{title:"Scoreboard - pbctf"}}},h=(r(473),r(29)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"Scoreboard"},[t._m(0),t._v(" "),r("div",{staticClass:"table-wrap"},[r("table",{staticClass:"scoreboard"},[t._m(1),t._v(" "),r("tbody",t._l(t.scoreboard,(function(e){return r("tr",{key:e.name,class:{active:e.account_id===t.myTeam.id}},[r("th",{staticClass:"place",attrs:{scope:"row"}},[t._v(t._s(e.pos))]),t._v(" "),r("td",{staticClass:"team"},[r("div",{staticClass:"team-flag",style:t.getFlagStyle(e.country)}),t._v(" "),r("iso-link",{attrs:{to:"/teams/"+e.account_id}},[t._v(t._s(e.name))])],1),t._v(" "),r("td",[t._v(t._s(e.score))])])})),0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title"},[e("span",[this._v("Score"),e("wbr"),this._v("board")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("td",{staticClass:"place",attrs:{scope:"col"}},[e("b",[this._v("Place")])]),this._v(" "),e("td",{attrs:{scope:"col"}},[e("b",[this._v("Team")])]),this._v(" "),e("td",{attrs:{scope:"col"}},[e("b",[this._v("Score")])])])])}],!1,null,null,null);e.default=component.exports}}]);
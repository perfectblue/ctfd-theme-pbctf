(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{422:function(t,e,r){var content=r(424);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("53eee732",content,!0,{sourceMap:!1})},423:function(t,e,r){"use strict";r(422)},424:function(t,e,r){(e=r(83)(!1)).push([t.i,"@-webkit-keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}",""]),t.exports=e},427:function(t,e,r){"use strict";var n={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},o=(r(423),r(29)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"v-spinner"},[e("div",{staticClass:"v-pulse v-pulse1",style:[this.spinnerStyle,this.spinnerDelay1]}),e("div",{staticClass:"v-pulse v-pulse2",style:[this.spinnerStyle,this.spinnerDelay2]}),e("div",{staticClass:"v-pulse v-pulse3",style:[this.spinnerStyle,this.spinnerDelay3]})])}),[],!1,null,null,null);e.a=component.exports},443:function(t,e,r){var content=r(481);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("707eaf2b",content,!0,{sourceMap:!1})},476:function(t,e,r){var n=r(7),o=r(198)(!1);n(n.S,"Object",{values:function(t){return o(t)}})},477:function(t,e,r){var n=r(478);t.exports=function(t){return(null==t?0:t.length)?n(t,1):[]}},478:function(t,e,r){var n=r(199),o=r(479);t.exports=function t(e,r,m,l,c){var f=-1,v=e.length;for(m||(m=o),c||(c=[]);++f<v;){var d=e[f];r>0&&m(d)?r>1?t(d,r-1,m,l,c):n(c,d):l||(c[c.length]=d)}return c}},479:function(t,e,r){var n=r(65),o=r(126),m=r(26),l=n?n.isConcatSpreadable:void 0;t.exports=function(t){return m(t)||o(t)||!!(l&&t&&t[l])}},480:function(t,e,r){"use strict";r(443)},481:function(t,e,r){(e=r(83)(!1)).push([t.i,'.Settings{text-align:center}.Settings .title{margin-bottom:0}.Settings .subtitle{font-size:2rem;font-family:"Roboto",cursive;font-weight:300;text-align:center;text-transform:uppercase;letter-spacing:1px;margin-top:3rem;margin-bottom:1rem;word-break:break-word}.Settings .subtitle a{color:#90cbff}.Settings .form-group{display:flex;justify-content:center;line-height:2rem;padding:.6rem 0;align-items:center}.Settings label{font-size:1rem;flex:0 0 10rem;width:10rem;text-align:right;padding-right:1rem}.Settings .form-control{flex:1 1 0;width:0;font-size:1.2rem;max-width:20rem}.Settings .result{font-size:1.5rem;font-family:"Roboto",cursive;font-weight:300}.Settings .result .success{color:#45d823}.Settings .result .errors{color:#f44336;padding:0;line-height:2rem}.Settings button[type=submit]{width:10rem;margin:1rem 0}',""]),t.exports=e},501:function(t,e,r){"use strict";r.r(e);r(21),r(11),r(18),r(9),r(6),r(476),r(85),r(12);var n=r(2),o=r(4),m=r(427),l=r(477),c=r.n(l),f=r(24);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={components:{PulseLoader:m.a},data:function(){return{userForm:{name:"",email:"",confirm:"",password:"",affiliation:"",website:"",country:"",isSuccess:!1,isSubmitting:!1,errors:[]},teamForm:{name:"",confirm:"",password:"",affiliation:"",website:"",country:"",isSuccess:!1,isSubmitting:!1,errors:[]}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.c)(["isLoggedIn","isInTeam","csrfToken","user","team","countries"])),watch:{user:function(t){Object.assign(this.userForm,t)},team:function(t){Object.assign(this.teamForm,t)}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.store.dispatch("updateCsrfToken",t);case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){this.isLoggedIn?(Object.assign(this.userForm,this.user),Object.assign(this.teamForm,this.team)):this.$router.replace({path:"/login"})},methods:{onSubmitUser:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var form,n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),form=new FormData(t.target),e.userForm.isSubmitting=!0,e.userForm.isSuccess=!1,e.userForm.errors=[],r.next=7,e.$axios.patch("/api/v1/users/me",Object.fromEntries(form),{headers:{"content-type":"application/json"},validateStatus:null});case 7:if(n=r.sent,data=n.data,e.userForm.isSubmitting=!1,!data.success){r.next=16;break}return e.userForm.isSuccess=!0,r.next=14,e.$store.dispatch("updateUser",{$axios:e.$axios});case 14:r.next=17;break;case 16:e.userForm.errors=c()(Object.values(data.errors));case 17:case"end":return r.stop()}}),r)})))()},onSubmitTeam:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var form,n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),form=new FormData(t.target),e.teamForm.isSubmitting=!0,e.teamForm.isSuccess=!1,e.teamForm.errors=[],r.next=7,e.$axios.patch("/api/v1/teams/me",Object.fromEntries(form),{headers:{"content-type":"application/json"},validateStatus:null});case 7:if(n=r.sent,data=n.data,e.teamForm.isSubmitting=!1,!data.success){r.next=16;break}return e.teamForm.isSuccess=!0,r.next=14,e.$store.dispatch("updateTeam",{$axios:e.$axios});case 14:r.next=17;break;case 16:e.teamForm.errors=c()(Object.values(data.errors));case 17:case"end":return r.stop()}}),r)})))()}},head:function(){return{title:"Settings - pbctf"}}},w=(r(480),r(29)),component=Object(w.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"Settings"},[t._m(0),t._v(" "),r("div",{staticClass:"subtitle"},[t._v("\n\t\tUser settings\n\t")]),t._v(" "),r("form",{attrs:{id:"user-settings-form",method:"post","accept-charset":"utf-8",autocomplete:"off",role:"form"},on:{submit:t.onSubmitUser}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"user-name-input"}},[t._v("\n\t\t\t\tUser Name\n\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.userForm.name,expression:"userForm.name"}],staticClass:"form-control",attrs:{id:"user-name-input",type:"text",name:"name"},domProps:{value:t.userForm.name},on:{input:function(e){e.target.composing||t.$set(t.userForm,"name",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"user-email-input"}},[t._v("\n\t\t\t\tEmail\n\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.userForm.email,expression:"userForm.email"}],staticClass:"form-control",attrs:{id:"user-email-input",type:"email",name:"email"},domProps:{value:t.userForm.email},on:{input:function(e){e.target.composing||t.$set(t.userForm,"email",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"user-confirm-input"}},[t._v("\n\t\t\t\tCurrent Password\n\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.userForm.confirm,expression:"userForm.confirm"}],staticClass:"form-control",attrs:{id:"user-confirm-input",type:"password",name:"confirm"},domProps:{value:t.userForm.confirm},on:{input:function(e){e.target.composing||t.$set(t.userForm,"confirm",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"user-password-input"}},[t._v("\n\t\t\t\tNew Password\n\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.userForm.password,expression:"userForm.password"}],staticClass:"form-control",attrs:{id:"user-password-input",type:"password",name:"password"},domProps:{value:t.userForm.password},on:{input:function(e){e.target.composing||t.$set(t.userForm,"password",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"user-affiliation-input"}},[t._v("\n\t\t\t\tAffiliation\n\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.userForm.affiliation,expression:"userForm.affiliation"}],staticClass:"form-control",attrs:{id:"user-affiliation-input",type:"text",name:"affiliation"},domProps:{value:t.userForm.affiliation},on:{input:function(e){e.target.composing||t.$set(t.userForm,"affiliation",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"user-website-input"}},[t._v("\n\t\t\t\tWebsite\n\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.userForm.website,expression:"userForm.website"}],staticClass:"form-control",attrs:{id:"user-website-input",type:"url",name:"website"},domProps:{value:t.userForm.website},on:{input:function(e){e.target.composing||t.$set(t.userForm,"website",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"user-country-input"}},[t._v("\n\t\t\t\tCountry\n\t\t\t")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.userForm.country,expression:"userForm.country"}],staticClass:"form-control",attrs:{id:"user-country-input",name:"country"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.userForm,"country",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}}),t._v(" "),t._l(t.countries,(function(e){var code=e[0],n=e[1];return r("option",{key:code,domProps:{value:code}},[t._v("\n\t\t\t\t\t"+t._s(n)+"\n\t\t\t\t")])}))],2)]),t._v(" "),r("div",{staticClass:"form-group"},[t.userForm.isSubmitting?r("pulse-loader",{attrs:{color:"white"}}):r("button",{attrs:{id:"user-submit",type:"submit",tabindex:"5"}},[t._v("\n\t\t\t\tSubmit\n\t\t\t")])],1),t._v(" "),r("div",{staticClass:"result"},[t.userForm.isSuccess?r("span",{staticClass:"success"},[t._v("\n\t\t\t\tYour profile has been updated\n\t\t\t")]):t._e(),t._v(" "),t.userForm.errors.length>0?r("ul",{staticClass:"errors"},t._l(t.userForm.errors,(function(e){return r("li",{key:e},[t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")])})),0):t._e()])]),t._v(" "),t.isInTeam?r("div",{staticClass:"subtitle"},[t._v("\n\t\tTeam settings\n\t")]):t._e(),t._v(" "),t.isInTeam?r("form",{attrs:{id:"team-settings-form",method:"post","accept-charset":"utf-8",autocomplete:"off",role:"form"},on:{submit:t.onSubmitTeam}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"team-name-input"}},[t._v("\n\t\t\t\tTeam Name\n\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.teamForm.name,expression:"teamForm.name"}],staticClass:"form-control",attrs:{id:"team-name-input",type:"text",name:"name"},domProps:{value:t.teamForm.name},on:{input:function(e){e.target.composing||t.$set(t.teamForm,"name",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"team-confirm-input"}},[t._v("\n\t\t\t\tCurrent Password\n\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.teamForm.confirm,expression:"teamForm.confirm"}],staticClass:"form-control",attrs:{id:"team-confirm-input",type:"password",name:"confirm"},domProps:{value:t.teamForm.confirm},on:{input:function(e){e.target.composing||t.$set(t.teamForm,"confirm",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"team-password-input"}},[t._v("\n\t\t\t\tNew Password\n\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.teamForm.password,expression:"teamForm.password"}],staticClass:"form-control",attrs:{id:"team-password-input",type:"password",name:"password"},domProps:{value:t.teamForm.password},on:{input:function(e){e.target.composing||t.$set(t.teamForm,"password",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"team-affiliation-input"}},[t._v("\n\t\t\t\tAffiliation\n\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.teamForm.affiliation,expression:"teamForm.affiliation"}],staticClass:"form-control",attrs:{id:"team-affiliation-input",type:"text",name:"affiliation"},domProps:{value:t.teamForm.affiliation},on:{input:function(e){e.target.composing||t.$set(t.teamForm,"affiliation",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"team-website-input"}},[t._v("\n\t\t\t\tWebsite\n\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.teamForm.website,expression:"teamForm.website"}],staticClass:"form-control",attrs:{id:"team-website-input",type:"url",name:"website"},domProps:{value:t.teamForm.website},on:{input:function(e){e.target.composing||t.$set(t.teamForm,"website",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"team-country-input"}},[t._v("\n\t\t\t\tCountry\n\t\t\t")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.teamForm.country,expression:"teamForm.country"}],staticClass:"form-control",attrs:{id:"team-country-input",name:"country"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.teamForm,"country",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}}),t._v(" "),t._l(t.countries,(function(e){var code=e[0],n=e[1];return r("option",{key:code,domProps:{value:code}},[t._v("\n\t\t\t\t\t"+t._s(n)+"\n\t\t\t\t")])}))],2)]),t._v(" "),r("div",{staticClass:"form-group"},[t.teamForm.isSubmitting?r("pulse-loader",{attrs:{color:"white"}}):r("button",{attrs:{id:"team-submit",type:"submit",tabindex:"5"}},[t._v("\n\t\t\t\tSubmit\n\t\t\t")])],1),t._v(" "),r("div",{staticClass:"result"},[t.teamForm.isSuccess?r("span",{staticClass:"success"},[t._v("\n\t\t\t\tYour profile has been updated\n\t\t\t")]):t._e(),t._v(" "),t.teamForm.errors.length>0?r("ul",{staticClass:"errors"},t._l(t.teamForm.errors,(function(e){return r("li",{key:e},[t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")])})),0):t._e()])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title"},[e("span",[this._v("Settings")])])}],!1,null,null,null);e.default=component.exports}}]);
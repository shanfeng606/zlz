(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{297:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},298:function(t,e,n){var r=n(24),i="["+n(297)+"]",a=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},299:function(t,e,n){"use strict";var r=n(1),i=n(298).trim;r({target:"String",proto:!0,forced:n(300)("trim")},{trim:function(){return i(this)}})},300:function(t,e,n){var r=n(2),i=n(297);t.exports=function(t){return r((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},307:function(t,e,n){},308:function(t,e,n){},309:function(t,e,n){},319:function(t,e,n){"use strict";var r=n(307);n.n(r).a},320:function(t,e,n){"use strict";var r=n(308);n.n(r).a},321:function(t,e,n){"use strict";var r=n(309);n.n(r).a},324:function(t,e,n){"use strict";n(92),n(67),n(93);var r={name:"zlzLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"zlzSider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},i=(n(319),n(41)),a=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"c0c41622",null);e.a=a.exports},325:function(t,e,n){"use strict";var r={name:"zlzSider",data:function(){return{visible:!0}}},i=(n(321),n(41)),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"56032f25",null);e.a=a.exports},326:function(t,e,n){"use strict";var r=n(41),i=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"28d7b9fc",null);e.a=i.exports},327:function(t,e,n){"use strict";var r=n(41),i=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"7aa5e17c",null);e.a=i.exports},328:function(t,e,n){"use strict";n(320);var r=n(41),i=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"89317aaa",null);e.a=i.exports},349:function(t,e,n){},396:function(t,e,n){"use strict";var r=n(349);n.n(r).a},421:function(t,e,n){"use strict";n.r(e);n(42),n(65),n(299);var r=n(324),i=n(326),a=n(327),o=n(328),s=n(325),c={components:{GLayout:r.a,GHeader:i.a,GFooter:a.a,GContent:o.a,GSider:s.a},data:function(){return{content:'\n        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">\n          <g-header style="height: 50px; background:lightskyblue;">\n            header\n          </g-header>\n          <g-layout>\n            <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">\n              sider\n            </g-sider>\n            <g-content style="height: 100px; background:deepskyblue;">\n              content\n            </g-content>\n          </g-layout>\n          <g-footer style="height: 50px; background:lightskyblue;">\n            footer\n          </g-footer>\n        </g-layout>\n    '.replace(/^ {8}/gm,"").trim()}}},u=(n(396),n(41)),l=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),n("g-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[n("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      header\n    ")]),t._v(" "),n("g-layout",[n("g-sider",{staticStyle:{height:"100px",background:"#d0e9ff",width:"200px",color:"black"}},[t._v("\n        sider\n      ")]),t._v(" "),n("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n        content\n      ")])],1),t._v(" "),n("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      footer\n    ")])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码")])])}],!1,null,"4ca35168",null);e.default=l.exports}}]);
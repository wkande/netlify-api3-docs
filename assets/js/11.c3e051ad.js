(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{333:function(e,t,n){},353:function(e,t,n){e.exports=function(){var e="undefined"!=typeof window,t="undefined"!=typeof navigator,n=e&&("ontouchstart"in window||t&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var t=e.event,n=e.handler;(0,e.middleware)(t)&&n(t)}function r(e,t){var r=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||n,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe)}}(t.value),o=r.handler,a=r.middleware,c=r.detectIframe;if(r.isActive){if(e["__v-click-outside"]=r.events.map((function(t){return{event:t,srcTarget:document.documentElement,handler:function(t){return function(e){var t=e.el,n=e.event,r=e.handler,o=e.middleware,a=n.path||n.composedPath&&n.composedPath();(a?a.indexOf(t)<0:!t.contains(n.target))&&i({event:n,handler:r,middleware:o})}({el:e,event:t,handler:o,middleware:a})}}})),c){var d={event:"blur",srcTarget:window,handler:function(t){return function(e){var t=e.el,n=e.event,r=e.handler,o=e.middleware;setTimeout((function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!t.contains(e)&&i({event:n,handler:r,middleware:o})}),0)}({el:e,event:t,handler:o,middleware:a})}};e["__v-click-outside"]=[].concat(e["__v-click-outside"],[d])}e["__v-click-outside"].forEach((function(t){var n=t.event,i=t.srcTarget,r=t.handler;return setTimeout((function(){e["__v-click-outside"]&&i.addEventListener(n,r,!1)}),0)}))}}function o(e){(e["__v-click-outside"]||[]).forEach((function(e){return e.srcTarget.removeEventListener(e.event,e.handler,!1)})),delete e["__v-click-outside"]}var a=e?{bind:r,update:function(e,t){var n=t.value,i=t.oldValue;JSON.stringify(n)!==JSON.stringify(i)&&(o(e),r(e,{value:n}))},unbind:o}:{};return{install:function(e){e.directive("click-outside",a)},directive:a}}()},354:function(e,t,n){"use strict";n(333)},379:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n(353),o=n.n(r);i.a.use(o.a);var a={name:"versions-modal",props:{env:String,showModal:Boolean,versions:Array},methods:{onClickOutside:function(e,t){this.$emit("clicked")}}},c=(n(354),n(9)),d=Object(c.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showModal?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.onClickOutside,expression:"onClickOutside"}],staticClass:"modal"},[e.showModal?n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-body"},[n("div",{staticStyle:{"border-bottom":"1px solid lightgrey"}},[e._v("Versions")]),e._v(" "),e._l(e.versions,(function(t){return n("div",{on:{click:function(n){return e.onClickOutside(t.url,n)}}},["next"!=t.name||"next"===t.name&&"development"===e.env?n("router-link",{attrs:{to:t.url}},[n("span",{staticClass:"label"},[e._v(e._s(t.name))])]):e._e()],1)}))],2)]):e._e()]):e._e()}),[],!1,null,null,null);t.default=d.exports}}]);
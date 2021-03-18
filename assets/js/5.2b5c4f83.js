(window.webpackJsonp=window.webpackJsonp||[]).push([[5,11],{333:function(e,t,r){},349:function(e,t,r){e.exports={env:"production",versions:[{name:"next",url:"/next/grp-providers/"},{name:"pre-alpha",url:"/pre-alpha/"}],sidebarHeaders:[{vrs:"pre-alpha",current:!0,buttons:[]},{vrs:"next",buttons:[{isActive:!1,info:!0,baseUrl:"/next/",img:"info-circle"},{isActive:!1,label:"Members",baseUrl:"/next/grp-members/",img:"users"},{isActive:!1,label:"Requesters",baseUrl:"/next/grp-requesters/",img:"eye"},{isActive:!0,label:"Providers",baseUrl:"/next/grp-providers/",img:"sitemap"}]}],head:[["link",{rel:"icon",href:"/img/small-logo.png"}]],title:"Documentation",base:"/api3-docs/",description:"Technical Documentation for API3 ",markdown:{lineNumbers:!0,toc:{includeLevel:[2,3]}},themeConfig:{startPath:"/pre-alpha/",sidebarDepth:0,displayAllHeaders:!1,logo:"/img/logo.png",nav:[{text:"Discord (Dev)",link:"https://discord.gg/qnRrcfnm5W"},{text:"Telegram (Chat)",link:"https://t.me/API3DAO"},{text:"GitHub",link:"https://github.com/api3dao/api3-docs"}],sidebar:{"/next/":r(350),"/pre-alpha/":r(351),"/dev/":r(352)},smoothScroll:!1},plugins:[["@vuepress/medium-zoom"],["vuepress-plugin-element-tabs"],["@vuepress/last-updated"],["@vuepress/back-to-top",!0],["@vuepress/search",{searchMaxSuggestions:15}]]}},350:function(e,t){e.exports=[{title:"Introduction",children:["","contributing","fundamentals/apis","fundamentals/first-party-oracles","fundamentals/decentrally-governed-oracle-networks","fundamentals/dapis"]},{title:"Providers",children:[{title:"Airnode",initialOpenGroupIndex:-1,collapsable:!0,children:[{title:"Design Philosophy",path:"grp-providers/airnode/design-philosophy"},{title:"Implementation",path:"grp-providers/airnode/implementation"},{title:"Ethereum Providers",path:"grp-providers/airnode/ethereum-providers"},{title:"Specifications",children:[{title:"Oracle Integration Specifications (OIS)",path:"grp-providers/airnode/specifications/ois"},"grp-providers/airnode/specifications/airnode-abi-specifications","grp-providers/airnode/specifications/config-json","grp-providers/airnode/specifications/security-json","grp-providers/airnode/specifications/reserved-parameters"]}]},{title:"Request-Response Protocol",collapsable:!0,children:["grp-providers/protocols/request-response/general-structure","grp-providers/protocols/request-response/provider","grp-providers/protocols/request-response/endpoint","grp-providers/protocols/request-response/authorizer","grp-providers/protocols/request-response/requester","grp-providers/protocols/request-response/client","grp-providers/protocols/request-response/designated-wallet","grp-providers/protocols/request-response/endorsement","grp-providers/protocols/request-response/template","grp-providers/protocols/request-response/request"]},{title:"Guides",collapsable:!0,children:["grp-providers/guides/provider/api-integration","grp-providers/guides/provider/configuring-airnode","grp-providers/guides/provider/deploying-airnode","grp-providers/guides/provider/setting-authorizers",{title:"Docker",children:["grp-providers/guides/docker/client-image","grp-providers/guides/docker/deployer-image"]},{title:"Templates",children:["grp-providers/guides/templates/ois-json","grp-providers/guides/templates/config-json","grp-providers/guides/templates/security-json"]}]},{title:"Tutorials",collapsable:!0,children:["grp-providers/tutorials/airnode-starter",{title:"Config Examples",children:["grp-providers/tutorials/config-examples/authorizers-json","grp-providers/tutorials/config-examples/config-example-json","grp-providers/tutorials/config-examples/example-env","grp-providers/tutorials/config-examples/security-json"]}]}]},{title:"Requesters",children:[{title:"Requester",collapsable:!1,children:["grp-requesters/guides/requester/creating-a-requester","grp-requesters/guides/requester/developing-a-client-contract"]},{title:"Smart Contracts Platform",collapsable:!1,children:["grp-requesters/guides/smart-contracts-platform/is-my-platform-compatible","grp-requesters/guides/smart-contracts-platform/self-serve-integration"]},{title:"Request-Response Protocol",collapsable:!0,children:[]}]},{title:"Members",children:["grp-members/"]}]},351:function(e,t){e.exports=[{title:"Introduction",collapsable:!1,children:[{title:"What is API3?",path:"/pre-alpha/"},"introduction/contributing"]},{title:"Fundamentals",collapsable:!1,children:[{title:"API",path:"fundamentals/apis"},"fundamentals/first-party-oracles","fundamentals/decentrally-governed-oracle-networks",{title:"dAPI",path:"fundamentals/dapis"}]},{title:"Airnode",collapsable:!1,children:[{title:"Design Philosophy",path:"airnode/design-philosophy"},{title:"Implementation",path:"airnode/implementation"},{title:"Ethereum Providers",path:"airnode/ethereum-providers"},{title:"Specifications",children:[{title:"Oracle Integration Specifications (OIS)",path:"airnode/specifications/ois"},"airnode/specifications/airnode-abi-specifications","airnode/specifications/config-json","airnode/specifications/security-json","airnode/specifications/reserved-parameters"]}]},{title:"Request-Response Protocol",children:["protocols/request-response/general-structure","protocols/request-response/provider","protocols/request-response/endpoint","protocols/request-response/authorizer","protocols/request-response/requester","protocols/request-response/client","protocols/request-response/designated-wallet","protocols/request-response/endorsement","protocols/request-response/template","protocols/request-response/request"]},{title:"Guides",initialOpenGroupIndex:-1,collapsable:!1,children:[{title:"Provider",children:["guides/provider/api-integration","guides/provider/configuring-airnode","guides/provider/deploying-airnode","guides/provider/setting-authorizers"]},{title:"Requester",children:["guides/requester/creating-a-requester","guides/requester/developing-a-client-contract"]},{title:"Smart Contracts Platform",children:["guides/smart-contracts/is-my-platform-compatible","guides/smart-contracts/self-serve-integration"]},{title:"Docker",children:["guides/docker/client-image","guides/docker/deployer-image"]},{title:"Templates",children:["guides/templates/ois-json","guides/templates/config-json","guides/templates/security-json"]}]},{title:"Tutorials",collapsable:!1,children:["tutorials/airnode-starter",{title:"Config Examples",children:["tutorials/config-examples/authorizers-json","tutorials/config-examples/config-example-json","tutorials/config-examples/example-env","tutorials/config-examples/security-json"]}]}]},352:function(e,t){e.exports=[{title:"Development",collapsable:!1,children:["/dev/","/dev/theme","/dev/plugins","/dev/override-components","/dev/custom-components","/dev/versioning","/dev/github-actions","/dev/deployment","/dev/migration-plan","/dev/quirks"]}]},353:function(e,t,r){e.exports=function(){var e="undefined"!=typeof window,t="undefined"!=typeof navigator,r=e&&("ontouchstart"in window||t&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var t=e.event,r=e.handler;(0,e.middleware)(t)&&r(t)}function s(e,t){var s=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||r,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe)}}(t.value),o=s.handler,n=s.middleware,a=s.detectIframe;if(s.isActive){if(e["__v-click-outside"]=s.events.map((function(t){return{event:t,srcTarget:document.documentElement,handler:function(t){return function(e){var t=e.el,r=e.event,s=e.handler,o=e.middleware,n=r.path||r.composedPath&&r.composedPath();(n?n.indexOf(t)<0:!t.contains(r.target))&&i({event:r,handler:s,middleware:o})}({el:e,event:t,handler:o,middleware:n})}}})),a){var l={event:"blur",srcTarget:window,handler:function(t){return function(e){var t=e.el,r=e.event,s=e.handler,o=e.middleware;setTimeout((function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!t.contains(e)&&i({event:r,handler:s,middleware:o})}),0)}({el:e,event:t,handler:o,middleware:n})}};e["__v-click-outside"]=[].concat(e["__v-click-outside"],[l])}e["__v-click-outside"].forEach((function(t){var r=t.event,i=t.srcTarget,s=t.handler;return setTimeout((function(){e["__v-click-outside"]&&i.addEventListener(r,s,!1)}),0)}))}}function o(e){(e["__v-click-outside"]||[]).forEach((function(e){return e.srcTarget.removeEventListener(e.event,e.handler,!1)})),delete e["__v-click-outside"]}var n=e?{bind:s,update:function(e,t){var r=t.value,i=t.oldValue;JSON.stringify(r)!==JSON.stringify(i)&&(o(e),s(e,{value:r}))},unbind:o}:{};return{install:function(e){e.directive("click-outside",n)},directive:n}}()},354:function(e,t,r){"use strict";r(333)},375:function(e,t,r){},379:function(e,t,r){"use strict";r.r(t);var i=r(0),s=r(353),o=r.n(s);i.a.use(o.a);var n={name:"versions-modal",props:{env:String,showModal:Boolean,versions:Array},methods:{onClickOutside:function(e,t){this.$emit("clicked")}}},a=(r(354),r(9)),l=Object(a.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.showModal?r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.onClickOutside,expression:"onClickOutside"}],staticClass:"modal"},[e.showModal?r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-body"},[r("div",{staticStyle:{"border-bottom":"1px solid lightgrey"}},[e._v("Versions")]),e._v(" "),e._l(e.versions,(function(t){return r("div",{on:{click:function(r){return e.onClickOutside(t.url,r)}}},["next"!=t.name||"next"===t.name&&"development"===e.env?r("router-link",{attrs:{to:t.url}},[r("span",{staticClass:"label"},[e._v(e._s(t.name))])]):e._e()],1)}))],2)]):e._e()]):e._e()}),[],!1,null,null,null);t.default=l.exports},401:function(e,t,r){"use strict";r(375)},414:function(e,t,r){"use strict";r.r(t);var i=r(349),s={name:"versions",components:{VersionsModal:r(379).default},data:function(){return{environment:i.env,showModal:!1,versions:i.versions}},methods:{openModal:function(){this.showModal=!this.showModal},onChildClick:function(){this.showModal=!1}}},o=(r(401),r(9)),n=Object(o.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"nav-site"},[r("button",{staticClass:"navsite-btn",on:{click:e.openModal}},[e._v("\n    "+e._s(this.$page.path.split("/")[1].replace(/\//g,""))+"\n  ")]),e._v(" "),e.showModal?r("VersionsModal",{attrs:{showModal:e.showModal,env:e.environment,versions:e.versions},on:{clicked:e.onChildClick}}):e._e()],1)}),[],!1,null,"5472342a",null);t.default=n.exports}}]);
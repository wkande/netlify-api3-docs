(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{545:function(s,t,e){"use strict";e.r(t);var a=e(6),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[e("code",[s._v("security.json")]),s._v(" is the file the deployer uses to push API credentials along with the serverless function.")]),s._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"title"},[s._v("TODO")]),e("p",[s._v("The two fields mentioned are not in the code sample below but are in the one below the first.\nThis page needs work with some details about security.")])]),e("h2",{attrs:{id:"fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fields"}},[s._v("#")]),s._v(" Fields")]),s._v(" "),e("p",[s._v("Has two fields:")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("apiCredentials")]),s._v(": Keeps the values of the security scheme parameters and the necessary fields to identify them")]),s._v(" "),e("li",[e("code",[s._v("id")]),s._v(": A UUID for the specific "),e("code",[s._v("config.json")]),s._v(" file and its corresponding "),e("code",[s._v("security.json")]),s._v(" file")])]),s._v(" "),e("h3",{attrs:{id:"apicredentials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicredentials"}},[s._v("#")]),s._v(" "),e("code",[s._v("apiCredentials")])]),s._v(" "),e("p",[s._v("An example:")]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myOisTitle"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"securitySchemeName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mySecurityScheme"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysupersecretkey"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"the-user-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-user-flow"}},[s._v("#")]),s._v(" The user flow")]),s._v(" "),e("p",[s._v("Here is an example "),e("code",[s._v("security.json")]),s._v(" file that is generated by a third party (e.g., an integration platform):")]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"apiCredentials"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myOisTitle"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"securitySchemeName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mySecurityScheme"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<TO_BE_FILLED>"')]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9a52131e-babd-11ea-b3de-0242ac130004"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("The first option here is for the user to open "),e("code",[s._v("security.json")]),s._v(" and replace "),e("code",[s._v("<TO_BE_FILLED>")]),s._v(" with their API key. Alternatively, the user may directly attempt to deploy with "),e("code",[s._v("security.json")]),s._v(" and the corresponding "),e("code",[s._v("config.json")]),s._v(" (which has the same "),e("code",[s._v("id")]),s._v("), where the deployment script parses "),e("code",[s._v("security.json")]),s._v(" and asks for the user to provide the values of each of the security credentials (this is not implemented yet, see the "),e("a",{attrs:{href:"https://github.com/api3dao/airnode/issues/163",target:"_blank",rel:"noopener noreferrer"}},[s._v("related issue"),e("OutboundLink")],1),s._v(").")])])}),[],!1,null,null,null);t.default=n.exports}}]);
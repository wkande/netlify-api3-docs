(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{487:function(e,t,a){"use strict";a.r(t);var s=a(9),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("TocHeader"),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#type"}},[e._v("_type")])]),a("li",[a("a",{attrs:{href:"#path"}},[e._v("_path")])]),a("li",[a("a",{attrs:{href:"#times"}},[e._v("_times")])])])]),a("p"),e._v(" "),a("p",[e._v("A requester can pass request parameters either by referencing a "),a("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/template.html"}},[e._v("template")]),e._v(" that contains them, or as an argument of the request-making methods of "),a("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/general-structure.html#airnodesol"}},[e._v("Airnode.sol")]),e._v(".\nIn either case, these parameters are encoded in a "),a("code",[e._v("bytes")]),e._v("-type variable using "),a("RouterLink",{attrs:{to:"/pre-alpha/airnode/specifications/airnode-abi-specifications.html"}},[e._v("Airnode ABI")]),e._v(".\nThere are two types of parameters:")],1),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://api3dao.github.io/api3-docs/pre-alpha/airnode/specifications/ois.html#_5-5-parameters",target:"_blank",rel:"noopener noreferrer"}},[e._v("Endpoint parameters"),a("OutboundLink")],1),e._v(" mapped to API operation parameters")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://api3dao.github.io/api3-docs/pre-alpha/airnode/specifications/ois.html#_5-4-reservedparameters",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reserved parameters"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Reserved parameters signal to the provider to perform a specific operation while fulfilling the request.\nReserved parameter names start with "),a("code",[e._v("_")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[e._v("#")]),e._v(" "),a("code",[e._v("_type")])]),e._v(" "),a("p",[e._v("Can be "),a("code",[e._v("int256")]),e._v(", "),a("code",[e._v("bool")]),e._v(", or "),a("code",[e._v("bytes32")]),e._v(".\nSignifies what Solidity type the API response will be typecast to before fulfillment.\nSee the "),a("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/pre-alpha/packages/adapter#conversion-behaviour",target:"_blank",rel:"noopener noreferrer"}},[e._v("conversion behavior docs"),a("OutboundLink")],1),e._v(" for details.")]),e._v(" "),a("h2",{attrs:{id:"path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" "),a("code",[e._v("_path")])]),e._v(" "),a("p",[e._v("Assuming that the API response will be a JSON object, defines the field to be used to fulfill the request using dot notation.\nFor example, if the API returns")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "field1": {\n    "fieldA": [\n      "valueA1",\n      "valueA2"\n    ],\n    "fieldB: "valueB"\n  },\n  "field2": {\n    "fieldZ": "valueZ"\n  }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[e._v("and "),a("code",[e._v("_path")]),e._v(" is "),a("code",[e._v("field1.fieldA.1")]),e._v(", the response will be "),a("code",[e._v("valueA2")]),e._v(".")]),e._v(" "),a("p",[e._v("If the response is a literal value (i.e., not a JSON object) and "),a("code",[e._v("_path")]),e._v(" is not provided, Airnode will use the literal value to fulfill the request.")]),e._v(" "),a("h2",{attrs:{id:"times"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#times"}},[e._v("#")]),e._v(" "),a("code",[e._v("_times")])]),e._v(" "),a("p",[e._v("If "),a("code",[e._v("_type")]),e._v(" is "),a("code",[e._v("int256")]),e._v(" and a "),a("code",[e._v("_times")]),e._v(" parameter is provided, Airnode multiplies the value returned by the API with the "),a("code",[e._v("_times")]),e._v(" parameter before fulfilling the request.\nFor example, if the API returns:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "data": "1.238",\n  "apiVersion": "1.0.4"\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("and the reserved parameters are")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("_type: int256\n_path: data\n_times: 100\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("the request will be fulfilled with the value "),a("code",[e._v("123")]),e._v(".\nNote that the number gets multiplied by "),a("code",[e._v("100")]),e._v(", and then gets floored.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);
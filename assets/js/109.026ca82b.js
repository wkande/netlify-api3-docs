(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{508:function(e,t,s){"use strict";s.r(t);var a=s(9),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),s("TocHeader"),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#deriving-the-address-of-the-designated-wallet"}},[e._v("Deriving the address of the designated wallet")])]),s("li",[s("a",{attrs:{href:"#the-path-convention"}},[e._v("The path convention")])]),s("li",[s("a",{attrs:{href:"#the-custodial-nature-of-the-designated-wallets"}},[e._v("The custodial nature of the designated wallets")])]),s("li",[s("a",{attrs:{href:"#withdrawals"}},[e._v("Withdrawals")])]),s("li",[s("a",{attrs:{href:"#how-to-have-the-provider-cover-the-gas-costs"}},[e._v("How to have the provider cover the gas costs?")])])])]),s("p"),e._v(" "),s("p",[e._v("Each "),s("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/provider.html"}},[e._v("provider")]),e._v(" keeps a designated wallet for each "),s("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/requester.html"}},[e._v("requester")]),e._v(".\n"),s("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/client.html"}},[e._v("Clients")]),e._v(" "),s("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/endorsement.html"}},[e._v("endorsed")]),e._v(" by a requester can specify their requests to be fulfilled by the said requester's designated wallet.\nThis allows the requester to cover the gas cost of request fulfillments.")],1),e._v(" "),s("h2",{attrs:{id:"deriving-the-address-of-the-designated-wallet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deriving-the-address-of-the-designated-wallet"}},[e._v("#")]),e._v(" Deriving the address of the designated wallet")]),e._v(" "),s("p",[e._v("Requesters need to keep their designated wallet topped up if they want the provider to be able to fulfill requests made by their clients.\nA requester can derive their designated wallet for a specific provider in JS (using ethers.js) as:")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("hdNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" ethers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("HDNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("fromExtendedKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("xpub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\ndesignatedWalletNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" hdNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("derivePath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("m/0/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("${")]),e._v("requesterIndex"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\ndesignatedWalletAddress "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" designatedWalletNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("where "),s("code",[e._v("xpub")]),e._v(" is retrieved from "),s("code",[e._v("ProviderStore.sol")]),e._v(" using the "),s("code",[e._v("providerId")]),e._v(", and "),s("code",[e._v("requesterIndex")]),e._v(" is assigned by "),s("code",[e._v("RequesterStore.sol")]),e._v(" when the requester record was created.\n(For more information on deriving wallets from a private key using a path, see "),s("a",{attrs:{href:"https://github.com/ethereumbook/ethereumbook/blob/develop/05wallets.asciidoc#hd_wallets",target:"_blank",rel:"noopener noreferrer"}},[e._v("HD wallets"),s("OutboundLink")],1),e._v(".)")]),e._v(" "),s("h2",{attrs:{id:"the-path-convention"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-path-convention"}},[e._v("#")]),e._v(" The path convention")]),e._v(" "),s("p",[e._v("The path of a designated wallet for the request–response protocol is "),s("code",[e._v("m/0/${requesterIndex}")]),e._v(".\nThis means that we assume that "),s("code",[e._v("requesterIndex")]),e._v(" will be less than "),s("code",[e._v("2^31")]),e._v(" (yet this can be extended by using schemes such as "),s("code",[e._v("m/0/${requestInd % 2^31}/${requestInd / 2^31}")]),e._v(").\nOther branches such as "),s("code",[e._v("m/1/...")]),e._v(", "),s("code",[e._v("m/2/...")]),e._v(", etc. are reserved for other protocols (e.g., the pub–sub protocol).")]),e._v(" "),s("h2",{attrs:{id:"the-custodial-nature-of-the-designated-wallets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-custodial-nature-of-the-designated-wallets"}},[e._v("#")]),e._v(" The custodial nature of the designated wallets")]),e._v(" "),s("p",[e._v("The requester must keep it in mind that a designated wallet is custodial, i.e., the provider keeps their private key, and the funds are trusted with them.\nTherefore, a requester should not fund their designated wallet of a provider more than an amount that they can trust the provider with.\nThis risk becomes negligible when:")]),e._v(" "),s("ol",[s("li",[e._v("The provider is a first-party oracle, because first-party oracles are trustworthy")]),e._v(" "),s("li",[e._v("The provider is being used for a high value use-case, which already implies a high level of trust")])]),e._v(" "),s("p",[e._v("If the requester does not trust the provider at all, they can fund the designated just enough to cover a single fulfillment for each request.\nTherefore, this scheme both supports the traditional per-call payments, but also allows the protocol to leverage the trustworthiness of providers to reduce unnecessary gas costs caused by microtransactions.")]),e._v(" "),s("h2",{attrs:{id:"withdrawals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#withdrawals"}},[e._v("#")]),e._v(" Withdrawals")]),e._v(" "),s("p",[e._v("If the requester decides that they will not use a designated wallet any longer, they can make a request to withdraw funds from it.\nThe provider's Airnode listens for withdrawal requests and fulfills them automatically.\nTherefore, the requester should be able to receive their funds from their designated wallet in a few minutes notice.\nThe designated wallet does not get deleted, and can be used in the future simply by funding it again.")]),e._v(" "),s("h2",{attrs:{id:"how-to-have-the-provider-cover-the-gas-costs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-have-the-provider-cover-the-gas-costs"}},[e._v("#")]),e._v(" How to have the provider cover the gas costs?")]),e._v(" "),s("p",[e._v("Although the designated wallet scheme allows the requester to cover the fulfillment gas costs, it is just as easy to have the provider cover the gas costs.\nThe only thing that needs to be done in this case is for the provider to top up the designated wallet, instead of the requester.\nFurthermore, this scheme allows hybrid use-cases where the provider covers the fulfillment gas costs for one requester (e.g., because they have made a special service agreement with them), while requires others to cover their own fulfillment gas costs.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{530:function(e,t,s){"use strict";s.r(t);var a=s(6),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("A provider is an entity (individual, business, etc.) that operates an Airnode to serve one or more APIs to smart contracts. Each provider has only one private key, which they use across all chains.")]),e._v(" "),s("h2",{attrs:{id:"providerid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#providerid"}},[e._v("#")]),e._v(" "),s("code",[e._v("providerId")])]),e._v(" "),s("p",[e._v("Providers are identified by their "),s("code",[e._v("providerId")]),e._v(", which is of type "),s("code",[e._v("bytes32")]),e._v(". A provider's "),s("code",[e._v("providerId")]),e._v(" is derived from their private key, and there is a one-to-one mapping between the two. Since the provider uses the same private key across all chains, they will have the same "),s("code",[e._v("providerId")]),e._v(" across all chains.")]),e._v(" "),s("p",[e._v("To derive "),s("code",[e._v("providerId")]),e._v(" in Solidity:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("providerId = keccak256(abi.encode(masterWalletAddress));\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("To derive "),s("code",[e._v("providerId")]),e._v(" in JS (using ethers.js):")]),e._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("providerId "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" ethers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("keccak256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ethers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("defaultAbiCoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("encode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'address'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("masterWalletAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("where "),s("code",[e._v("masterWalletAddress")]),e._v(" is the address of the wallet derived from the private key of the provider with the path "),s("code",[e._v("m")]),e._v(". (For deriving wallets from a private key using a path, see "),s("a",{attrs:{href:"https://github.com/ethereumbook/ethereumbook/blob/develop/05wallets.asciidoc#hd_wallets",target:"_blank",rel:"noopener noreferrer"}},[e._v("HD wallets"),s("OutboundLink")],1),e._v(".) Here is an example of how one derives the master wallet address from the mnemonic in JS (using ethers.js):")]),e._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("masterHdNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" ethers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("HDNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("fromMnemonic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("mnemonic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nmasterWalletAddress "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" masterHdNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h2",{attrs:{id:"creating-a-provider-record"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-provider-record"}},[e._v("#")]),e._v(" Creating a provider record")]),e._v(" "),s("p",[e._v("Before being able to serve on a chain, a provider has to have a record created. To do this, the provider's master wallet has to be used to call "),s("code",[e._v("createProvider()")]),e._v(" of "),s("code",[e._v("ProviderStore.sol")]),e._v(", where the contract assigns the corresponding "),s("code",[e._v("providerId")]),e._v(" as such:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function createProvider(\n    address admin,\n    string calldata xpub\n    )\n    external\n    payable\n    override\n    returns (bytes32 providerId)\n    {\n        providerId = keccak256(abi.encode(msg.sender));\n        ...\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("Note that since "),s("code",[e._v("msg.sender")]),e._v(" is used to derive the "),s("code",[e._v("providerId")]),e._v(", no one but the provider can claim their "),s("code",[e._v("providerId")]),e._v(" on any chain.")]),e._v(" "),s("p",[e._v("This provider record creation is done automatically by Airnode. The provider only needs to fund their master wallet for it to be able to afford this transaction, and the master wallet will send the remaining funds to "),s("code",[e._v("providerAdmin")]),e._v(" along with this transaction. The Airnode deployment displays instructions for how to do this, and the "),s("code",[e._v("masterWalletAddress")]),e._v(" is included in the receipt that the deployer outputs for future reference.")]),e._v(" "),s("h2",{attrs:{id:"provideradmin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#provideradmin"}},[e._v("#")]),e._v(" "),s("code",[e._v("providerAdmin")])]),e._v(" "),s("p",[s("code",[e._v("providerAdmin")]),e._v(" is an address that is authorized to update provider-related properties (e.g., endpoint authorizers). Airnode sets a "),s("code",[e._v("providerAdmin")]),e._v(" while creating the provider record, and this is sourced from "),s("RouterLink",{attrs:{to:"/airnode/config-json.html"}},[s("code",[e._v("config.json")])]),e._v(" under the name "),s("code",[e._v("providerAdminForRecordCreation")]),e._v(".")],1),e._v(" "),s("p",[s("code",[e._v("providerAdmin")]),e._v(" can transfer its authority to another address. The master wallet can reclaim the authority by calling "),s("code",[e._v("createProvider()")]),e._v(" and setting another "),s("code",[e._v("providerAdmin")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"xpub"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xpub"}},[e._v("#")]),e._v(" "),s("code",[e._v("xpub")])]),e._v(" "),s("p",[e._v("The provider announces their extended public key ("),s("code",[e._v("xpub")]),e._v(") in "),s("code",[e._v("ProviderStore.sol")]),e._v(" for requesters to be able to derive their designated wallets. The "),s("code",[e._v("xpub")]),e._v(" that the provider has announced is not verified on-chain. However, the requester can verify it off-chain. For example, in JS (using ethers.js):")]),e._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("hdNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" ethers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("HDNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("fromExtendedKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("xpub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nmasterNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" hdNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("derivePath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'m'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nproviderIdDerivedFromXpub "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("keccak256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("abi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("encode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("masterNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("providerIdDerivedFromXpub "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" providerId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("See the "),s("RouterLink",{attrs:{to:"/request-response-protocol/designated-wallet.html"}},[e._v("section about designated wallets")]),e._v(" to see how requesters can use "),s("code",[e._v("xpub")]),e._v(" to derive their designated wallets.")],1),e._v(" "),s("h2",{attrs:{id:"setting-endpoint-authorizers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-endpoint-authorizers"}},[e._v("#")]),e._v(" Setting endpoint authorizers")]),e._v(" "),s("p",[e._v("An important responsibility of the "),s("code",[e._v("providerAdmin")]),e._v(" is to set endpoint authorizers. Authorizers are used to enforce rules about which requests will be responded to, and this can be used to enforce KYC, monthly subscription payments, etc. See the sections about "),s("RouterLink",{attrs:{to:"/request-response-protocol/endpoint.html"}},[e._v("endpoints")]),e._v(" and "),s("RouterLink",{attrs:{to:"/request-response-protocol/authorizer.html"}},[e._v("authorizers")]),e._v(" for more details.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);
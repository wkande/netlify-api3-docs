(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{420:function(s,t,e){"use strict";e.r(t);var a=e(9),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[s._v("#")]),s._v(" "+s._s(s.$frontmatter.title))]),s._v(" "),e("TocHeader"),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#test-links"}},[s._v("Test Links")])]),e("li",[e("a",{attrs:{href:"#understand-deploy-sh"}},[s._v("Understand deploy.sh")])]),e("li",[e("a",{attrs:{href:"#deploying"}},[s._v("Deploying")])])])]),e("p"),s._v(" "),e("p",[s._v("The project docs are deployed to the "),e("strong",[s._v("api3-docs")]),s._v(" remote repo gh-pages using the "),e("strong",[s._v("deploy.sh")]),s._v(" bash script. The script is run locally from a local branch that will be used for the build, usually master. Local master must be up-to-date with all changes by contributors.")]),s._v(" "),e("h2",{attrs:{id:"test-links"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-links"}},[s._v("#")]),s._v(" Test Links")]),s._v(" "),e("p",[s._v("Before building be sure to test all hyperlinks in the project. The test commands are only good for hyperlinks in markdown files. Hyperlinks inside custom Vue components must be tested manually.")]),s._v(" "),e("p",[s._v("Check all production version folders including "),e("em",[s._v("/dev")]),s._v(".")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" test:links:prod\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("A separate command checks the "),e("em",[s._v("/next")]),s._v(" folder which is not considered production ready. It should be noted that the GitHub Action "),e("RouterLink",{attrs:{to:"/dev/github-actions.html#markdown-link-check"}},[s._v("markdown-link-check")]),s._v(" to check hyperlinks never checks the "),e("em",[s._v("/next")]),s._v(" folder.")],1),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" test:links:next\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"understand-deploy-sh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#understand-deploy-sh"}},[s._v("#")]),s._v(" Understand deploy.sh")]),s._v(" "),e("ol",[e("li",[s._v("Builds a static website and places it in "),e("strong",[s._v(".vuepress/dist")]),s._v(".")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# build the docs")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("The deployment must be run from the .vuepress/dist folder.")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# navigate to the build output directory")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("The .vuepress/dist folder is staged to be pushed.")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Deploying the locally built /dist folder to master:gh-pages as its own commit history.'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("A git push is "),e("em",[s._v("forced")]),s._v(" onto the remote branch gh-pages.")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@github.com:api3dao/api3-docs.git master:gh-pages\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"deploying"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying"}},[s._v("#")]),s._v(" Deploying")]),s._v(" "),e("p",[s._v("It is important to pull down the master branch (step 4) after the remote master repo has been merged with all contributors. This insures the local build of the dist folder gets the latest from all contributors.")]),s._v(" "),e("ol",[e("li",[s._v("Verify the proper versions ("),e("strong",[s._v("versions key")]),s._v(") are listed in config.json.")]),s._v(" "),e("li",[s._v("Verify the repo target in "),e("code",[s._v("deploy.sh")]),s._v(" is set to api3dao/api3-docs.")]),s._v(" "),e("li",[s._v("Run "),e("code",[s._v("yarn test:links:prod")]),s._v(" to verify hyperlinks.")]),s._v(" "),e("li",[s._v("Git\n"),e("ul",[e("li",[s._v("Commit and push local work to the remote repo.")]),s._v(" "),e("li",[s._v("From the remote repo, merge contributing branches to master.")]),s._v(" "),e("li",[s._v("Switch to local master branch.")]),s._v(" "),e("li",[s._v("Pull remote master to local repo.")])])]),s._v(" "),e("li",[s._v("Deploy\n"),e("ul",[e("li",[s._v("Deploy from a desired local branch, usually "),e("strong",[s._v("master")]),s._v(".")]),s._v(" "),e("li",[s._v("Execute "),e("code",[s._v("deploy.sh")]),s._v(" to deploy.")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd <root of project>")]),s._v("\nwarren@Warrens-Mac-mini.local /Users/warren/DEV/api3-docs "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Verify the branch that is set.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" deploy.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("li",[s._v("Switch to next local development branch.")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);
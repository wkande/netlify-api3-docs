(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{422:function(e,t,a){"use strict";a.r(t);var s=a(9),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("TocHeader"),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#phase-1-new-stage-branch-completed-2021-02-16"}},[e._v("~~Phase 1 - New Stage Branch~~ (completed 2021-02-16)")])]),a("li",[a("a",{attrs:{href:"#phase-2-depart-from-gitbook"}},[e._v("Phase 2 - Depart from GitBook")])])])]),a("p"),e._v(" "),a("p",[e._v("The following instructions are to migrate a local repo to the api3dao/api3-docs remote repo in the form of a new remote branch named "),a("strong",[e._v("stage")]),e._v(". The stage branch is temporary until it is merged to master and then deleted.")]),e._v(" "),a("h2",{attrs:{id:"phase-1-new-stage-branch-completed-2021-02-16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phase-1-new-stage-branch-completed-2021-02-16"}},[e._v("#")]),e._v(" "),a("s",[e._v("Phase 1 - New Stage Branch")]),e._v(" (completed 2021-02-16)")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Turn off the GitHub integration setting at GitBook.")])]),e._v(" "),a("li",[a("p",[e._v("Change repo in /.vuepress/config.json")])]),e._v(" "),a("li",[a("p",[e._v("Change the "),a("code",[e._v("deploy.sh")]),e._v(" (local stage branch) script to point to the remote repo api3dao/api3-docs.")])]),e._v(" "),a("li",[a("p",[e._v("Change the base path in VuePress /.vuepress/config.json from /vuepress-docs/ to /api3-docs/.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("title: 'Documentation',\nbase: '/api3-docs/',\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Push local branch "),a("strong",[e._v("stage")]),e._v(" to remote api3dao/api3-docs.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("First change the git remote url of the local repo. Verify the change in .git/config.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote set-url origin git@github.com:api3dao/api3-docs.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# OR to remove old stage reference first (will re-add)")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote -v \n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote remove origin \n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" origin git@github.com:api3dao/api3-docs.git  \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Now push (force) from local stage branch to remote api3dao/api3-docs. This will create a new stage branch at the remote repo.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push -f origin stage\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])])]),e._v(" "),a("li",[a("p",[e._v("Until the remote stage branch is merged to master at the remote repo do not pull the remote master to local master. Run deploy.sh from the local "),a("strong",[e._v("stage")]),e._v(" branch (only work with local stage, stay out of local master).")])])]),e._v(" "),a("h2",{attrs:{id:"phase-2-depart-from-gitbook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phase-2-depart-from-gitbook"}},[e._v("#")]),e._v(" Phase 2 - Depart from GitBook")]),e._v(" "),a("p",[e._v("After it is decided to merge the remote stage branch to master proceed with the following.")]),e._v(" "),a("ol",[a("li",[e._v("Remove GitBook integrations from the repo settings.")]),e._v(" "),a("li",[e._v("Commit any local repo work.")]),e._v(" "),a("li",[e._v("Force merge remote stage onto master.")]),e._v(" "),a("li",[e._v("Clone a new copy of the remote repo to work from.")]),e._v(" "),a("li",[e._v("Start following the instructions in dev_notes.md to deploy the docs to master:gh-pages.")]),e._v(" "),a("li",[e._v("Point web URL to "),a("a",{attrs:{href:"https://api3dao.github.io/api3-docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://api3dao.github.io/api3-docs/"),a("OutboundLink")],1),e._v(".")])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);
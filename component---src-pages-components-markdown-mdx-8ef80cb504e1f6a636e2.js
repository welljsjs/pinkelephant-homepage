"use strict";(self.webpackChunkthe_pink_elephant=self.webpackChunkthe_pink_elephant||[]).push([[4530],{2296:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),r=a(8650),s=a.n(r),o=a(1082),i=a(1025),m=a(1908),l=a(5900),c=a.n(l),d=function(e){var t,a=e.title,r=e.theme,s=e.tabs,o=void 0===s?[]:s;return n.createElement("div",{className:c()("PageHeader-module--page-header--36a7c",(t={},t["PageHeader-module--with-tabs--bdb43"]=o.length,t["PageHeader-module--dark-mode--58278"]="dark"===r,t))},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,r=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,s=a||r,i=s.baseUrl,m=s.subDirectory,l=i+"/edit/"+s.branch+m+"/src/pages"+t;return i?n.createElement("div",{className:"cds--row EditLink-module--row--04499"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--203ae",href:l},"Edit this page on GitHub"))):null},u=a(849),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,i=r.split("/").filter(Boolean).slice(-1)[0],m=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),m=a===i,l=new RegExp(i+"/?(#.*)?$"),d=r.replace(l,a);return n.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--68107"]=m,t),"PageTabs-module--list-item--d36e2")},n.createElement(o.Link,{className:"PageTabs-module--link--2b3ff",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--c4bab"},m))))))},t}(n.Component),k=g,b=a(5391),A=a(5387),w=a(4389),N=function(e){var t=e.date,a=new Date(t);return t?n.createElement(w.X2,{className:"last-modified-date-module--row--5c9a1"},n.createElement(w.sg,null,n.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,r=e.location,l=e.Title,c=t.frontmatter,h=void 0===c?{}:c,g=t.relativePagePath,w=t.titleType,y=h.tabs,f=h.title,E=h.theme,x=h.description,v=h.keywords,C=h.date,j=(0,A.Z)().interiorTheme,T=(0,o.useStaticQuery)("2456312558").site.pathPrefix,P=T?r.pathname.replace(T,""):r.pathname,B=y?P.split("/").filter(Boolean).slice(-1)[0]||s()(y[0],{lower:!0}):"",Q=E||j;return n.createElement(m.Z,{tabs:y,homepage:!1,theme:Q,pageTitle:f,pageDescription:x,pageKeywords:v,titleType:w},n.createElement(d,{title:l?n.createElement(l,null):f,label:"label",tabs:y,theme:Q}),y&&n.createElement(k,{title:f,slug:P,tabs:y,currentTab:B}),n.createElement(b.Z,{padded:!0},a,n.createElement(p,{relativePagePath:g}),n.createElement(N,{date:C})),n.createElement(u.Z,{pageContext:t,location:r,slug:P,tabs:y,currentTab:B}),n.createElement(i.Z,null))}},529:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return h}});var n=a(3366),r=(a(7294),a(4983)),s=a(2296),o=["components"],i={},m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},l=m("PageDescription"),c=m("AnchorLinks"),d=m("AnchorLink"),p={_frontmatter:i},u=s.Z;function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)(u,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"PageDescription"},(0,r.kt)("p",null,"These are the built in components that you’ll have access to simply by using\nmarkdown. The whitespace around these components ",(0,r.kt)("strong",{parentName:"p"},"is significant"),". If you\nencounter any errors, make sure you format the markdown and surounding space\nproperly."),(0,r.kt)("p",null,"For most pages, we recommend starting with a ",(0,r.kt)("inlineCode",{parentName:"p"},"PageDescription")," followed by\n",(0,r.kt)("inlineCode",{parentName:"p"},"AnchorLinks")," if the content is long enough.")),(0,r.kt)(c,{mdxType:"AnchorLinks"},(0,r.kt)(d,{mdxType:"AnchorLink"},"Text decoration"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Headers"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Lists"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Links"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Images"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Code blocks"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Tables"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Blockquotes and citations"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Comments")),(0,r.kt)("h2",null,"Text decoration"),(0,r.kt)("p",null,"Emphasis, aka italics, with ",(0,r.kt)("em",{parentName:"p"},"asterisks")," or ",(0,r.kt)("em",{parentName:"p"},"underscores"),". Strong emphasis, aka\nbold, with ",(0,r.kt)("strong",{parentName:"p"},"asterisks")," or ",(0,r.kt)("strong",{parentName:"p"},"underscores"),". Combined emphasis with ",(0,r.kt)("strong",{parentName:"p"},"asterisks\nand ",(0,r.kt)("em",{parentName:"strong"},"underscores")),". Strikethrough uses two tildes. ",(0,r.kt)("del",{parentName:"p"},"Scratch this.")),(0,r.kt)("h3",null,"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown","https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown":!0},"Emphasis, aka italics, with _asterisks_ or _underscores_. Strong emphasis, aka\nbold, with **asterisks** or **underscores**. Combined emphasis with **asterisks\nand _underscores_**. Strikethrough uses two tildes. ~~Scratch this.~~\n")),(0,r.kt)("h2",null,"Headers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," It’s generally considered\n",(0,r.kt)("a",{parentName:"p",href:"https://webaim.org/techniques/semanticstructure/#contentstructure"},"best practice"),"\nto include just one ",(0,r.kt)("inlineCode",{parentName:"p"},"h1")," heading per page. This heading signals the title or\nprimary subject matter of the content to your audience. Because the title\ncomponent generated at the top of each page already uses an ",(0,r.kt)("inlineCode",{parentName:"p"},"h1")," heading, we\nrecommend using ",(0,r.kt)("inlineCode",{parentName:"p"},"h2")," tags for section headings within your content."),(0,r.kt)("h2",null,"H2"),(0,r.kt)("h3",null,"H3"),(0,r.kt)("h4",null,"H4"),(0,r.kt)("h5",null,"H5"),(0,r.kt)("h3",null,"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"},"## H2\n\n### H3\n\n#### H4\n\n##### H5\n")),(0,r.kt)("h2",null,"Lists"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unordered lists")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unordered list can use asterisks"),(0,r.kt)("li",{parentName:"ul"},"Or hyphens to create list items"),(0,r.kt)("li",{parentName:"ul"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\nincididunt ut labore et"),(0,r.kt)("li",{parentName:"ul"},"dolore magna aliqua. Pharetra massa massa ultricies mi quis. Adipiscing enim\neu turpis egestas pretium aenean."),(0,r.kt)("li",{parentName:"ul"},"Massa eget egestas purus viverra accumsan in nisl nisi."),(0,r.kt)("li",{parentName:"ul"},"Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi\ntristique.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ordered lists")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First ordered list item"),(0,r.kt)("li",{parentName:"ol"},"Item with a nested item",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Nested list item"))),(0,r.kt)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),(0,r.kt)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),(0,r.kt)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),(0,r.kt)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),(0,r.kt)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),(0,r.kt)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),(0,r.kt)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),(0,r.kt)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),(0,r.kt)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nested lists")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unordered list can use asterisks",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Nested list item"))),(0,r.kt)("li",{parentName:"ul"},"Or hyphens to create list items")),(0,r.kt)("h3",null,"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"},"- Unordered list can use asterisks\n\n* Or hyphens to create list items\n\n- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n  incididunt ut labore et\n- dolore magna aliqua. Pharetra massa massa ultricies mi quis. Adipiscing enim\n  eu turpis egestas pretium aenean.\n- Massa eget egestas purus viverra accumsan in nisl nisi.\n- Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi\n  tristique.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"},"1. First ordered list item\n2. Item with a nested item\n   1. Nested list item\n3. In markdown, the actual numbers don’t matter, just that it’s a number\n4. In markdown, the actual numbers don’t matter, just that it’s a number\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"},"1. First ordered list item\n1. Item with a nested item\n   1. Nested list item\n1. In markdown, the actual numbers don’t matter, just that it’s a number\n")),(0,r.kt)("h2",null,"Links"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/components/demo"},"I’m a local link")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.carbondesignsystem.com"},"I’m a markdown link")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.carbondesignsystem.com",title:"Carbon’s Homepage"},"I’m a markdown link with title")),(0,r.kt)("p",null,"URLs and URLs in angle brackets will automatically get turned into links.\n",(0,r.kt)("a",{parentName:"p",href:"http://www.example.com"},"http://www.example.com")," or ",(0,r.kt)("a",{parentName:"p",href:"http://www.example.com"},"http://www.example.com")," and sometimes example.com\n(but not on Github, for example)."),(0,r.kt)("h3",null,"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"},"[I’m a markdown link](https://www.carbondesignsystem.com)\n\n[I’m a markdown link with title](https://www.carbondesignsystem.com 'Google’s Homepage')\n\n[I’m a local link](/components/demo)\n\nURLs and URLs in angle brackets will automatically get turned into links.\nhttp://www.example.com or <http://www.example.com> and sometimes example.com\n(but not on Github, for example).\n\nSome text to show that the reference links can follow later.\n")),(0,r.kt)("h2",null,"Images"),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB4U1emQYP/8QAGhAAAgIDAAAAAAAAAAAAAAAAAAECMRESMv/aAAgBAQABBQJW9cEbnyf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAADAQAAAAAAAAAAAAAAAAAAESAh/9oACAEBAAY/AjHP/8QAGhABAAIDAQAAAAAAAAAAAAAAAQAhEDFRYf/aAAgBAQABPyEjbUPb9cOspQN8x//aAAwDAQACAAMAAAAQdC//xAAVEQEBAAAAAAAAAAAAAAAAAAAQIf/aAAgBAwEBPxCn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGhABAAMBAQEAAAAAAAAAAAAAAQARUSExgf/aAAgBAQABPxAxd1XscuAySvhKiAcpcI7EDgRez//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("picture",{parentName:"span"},"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/static/962da2dc621f778bde6ec0b513feb8f9/0eda2/quantum.webp 288w","/static/962da2dc621f778bde6ec0b513feb8f9/460e2/quantum.webp 576w","/static/962da2dc621f778bde6ec0b513feb8f9/e0ca3/quantum.webp 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/static/962da2dc621f778bde6ec0b513feb8f9/69549/quantum.jpg 288w","/static/962da2dc621f778bde6ec0b513feb8f9/473e3/quantum.jpg 576w","/static/962da2dc621f778bde6ec0b513feb8f9/2e753/quantum.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/jpeg"}),"\n          ",(0,r.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/static/962da2dc621f778bde6ec0b513feb8f9/2e753/quantum.jpg",alt:"Alt text goes here",title:"Alt text goes here",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,r.kt)("h3",null,"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"},"![Alt text goes here](images/quantum.jpg)\n")),(0,r.kt)("h2",null,"Code blocks"),(0,r.kt)("p",null,"You can read in depth about syntax highlighting and advanced code snippet\nfeatures on the ",(0,r.kt)("a",{parentName:"p",href:"/components/code-blocks"},"Code blocks")," page."),(0,r.kt)("p",null,"Inline ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"back-ticks around")," it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"Title",Title:!0},"Blocks of code have three back-ticks above and below.\n\nYou can specify a language by placing it after the backticks.\n\nYou can also supply a source code URL or title to go at the top of the code\nblock\n")),(0,r.kt)("h3",null,"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"},"Inline `code` has `back-ticks around` it.\n\n```markdown Title\nBlocks have three back-ticks above and below. Pretend the backslashes aren’t\nthere.\n```\n")),(0,r.kt)("p",null,"You can view a list of included languages at the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js"},"react-prism-renderer repo"),"."),(0,r.kt)("h2",null,"Tables"),(0,r.kt)("p",null,"Colons can be used to align columns."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tables"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Are"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Cool"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"col 3 is"),(0,r.kt)("td",{parentName:"tr",align:"center"},"right-aligned"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"col 2 is"),(0,r.kt)("td",{parentName:"tr",align:"center"},"centered"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2")))),(0,r.kt)("p",null,"There must be at least 3 dashes separating each header cell. The outer pipes (|)\nare optional, and you don’t need to make the raw Markdown line up prettily. You\ncan also use inline Markdown."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Markdown"),(0,r.kt)("th",{parentName:"tr",align:null},"Less"),(0,r.kt)("th",{parentName:"tr",align:null},"Pretty"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Still")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"renders")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"nicely"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"3")))),(0,r.kt)("h3",null,"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"},"Colons can be used to align columns.\n\n| Tables        |      Are      |   Cool |\n| ------------- | :-----------: | -----: |\n| col 3 is      | right-aligned | \\$1600 |\n| col 2 is      |   centered    |   \\$12 |\n| zebra stripes |   are neat    |    \\$1 |\n\nThere must be at least 3 dashes separating each header cell. The outer pipes (|)\nare optional, and you don’t need to make the raw Markdown line up prettily. You\ncan also use inline Markdown.\n\n| Markdown | Less      | Pretty     |\n| -------- | --------- | ---------- |\n| _Still_  | `renders` | **nicely** |\n| 1        | 2         | 3          |\n")),(0,r.kt)("h2",null,"Blockquotes and citations"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Without aesthetic, design is either the humdrum repetition of familiar clichés\nor a wild scramble for novelty. Without aesthetic, the computer is but a\nmindless speed machine, producing effects without substance, form without\nrelevant content, or content without meaningful form."),(0,r.kt)("cite",null,"– Paul Rand")),(0,r.kt)("h3",null,"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"path=components/markdown src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",path:"components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"},"> Without aesthetic, design is either the humdrum repetition of familiar clichés\n> or a wild scramble for novelty. Without aesthetic, the computer is but a\n> mindless speed machine, producing effects without substance, form without\n> relevant content, or content without meaningful form.\n>\n> <cite>– Paul Rand</cite>\n")),(0,r.kt)("h2",null,"Comments"),(0,r.kt)("p",null,"Comments can be added that will not display on the page, but will be visible in\nthe markdown source."),(0,r.kt)("h3",null,"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"},"Comments can be added that will not display on the page, but will be visible in\nthe markdown source.\n\n\x3c!-- Comments like this are visible in code, but are not visible on the page --\x3e\n")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-markdown-mdx-8ef80cb504e1f6a636e2.js.map
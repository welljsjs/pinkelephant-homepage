"use strict";(self.webpackChunkthe_pink_elephant=self.webpackChunkthe_pink_elephant||[]).push([[982,2227,8827],{2296:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),i=a(8650),r=a.n(i),o=a(1082),l=a(1025),s=a(1908),c=a(5900),d=a.n(c),m=function(e){var t,a=e.title,i=e.theme,r=e.tabs,o=void 0===r?[]:r;return n.createElement("div",{className:d()("PageHeader-module--page-header--36a7c",(t={},t["PageHeader-module--with-tabs--bdb43"]=o.length,t["PageHeader-module--dark-mode--58278"]="dark"===i,t))},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,i=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||i,l=r.baseUrl,s=r.subDirectory,c=l+"/edit/"+r.branch+s+"/src/pages"+t;return l?n.createElement("div",{className:"cds--row EditLink-module--row--04499"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--203ae",href:c},"Edit this page on GitHub"))):null},g=a(849),u=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,l=i.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),s=a===l,c=new RegExp(l+"/?(#.*)?$"),m=i.replace(c,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--68107"]=s,t),"PageTabs-module--list-item--d36e2")},n.createElement(o.Link,{className:"PageTabs-module--link--2b3ff",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--c4bab"},s))))))},t}(n.Component),b=h,k=a(5391),A=a(5387),f=a(4389),N=function(e){var t=e.date,a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--5c9a1"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,i=e.location,c=e.Title,d=t.frontmatter,u=void 0===d?{}:d,h=t.relativePagePath,f=t.titleType,y=u.tabs,C=u.title,w=u.theme,v=u.description,T=u.keywords,M=u.date,E=(0,A.Z)().interiorTheme,x=(0,o.useStaticQuery)("2456312558").site.pathPrefix,B=x?i.pathname.replace(x,""):i.pathname,P=y?B.split("/").filter(Boolean).slice(-1)[0]||r()(y[0],{lower:!0}):"",H=w||E;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:H,pageTitle:C,pageDescription:v,pageKeywords:T,titleType:f},n.createElement(m,{title:c?n.createElement(c,null):C,label:"label",tabs:y,theme:H}),y&&n.createElement(b,{title:C,slug:B,tabs:y,currentTab:P}),n.createElement(k.Z,{padded:!0},a,n.createElement(p,{relativePagePath:h}),n.createElement(N,{date:M})),n.createElement(g.Z,{pageContext:t,location:i,slug:B,tabs:y,currentTab:P}),n.createElement(l.Z,null))}},2514:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return A}});var n=a(3366),i=(a(7294),a(4983)),r=a(2296),o=["components"],l={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},c=s("PageDescription"),d=s("InlineNotification"),m=s("Title"),p=s("CardGroup"),g=s("MiniCard"),u=s("Row"),h=s("Column"),b={_frontmatter:l},k=r.Z;function A(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)(k,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"PageDescription"},(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<MiniCard>")," component can be used in place of a ",(0,i.kt)("inlineCode",{parentName:"p"},"<ResourceCard>")," if your\ncontent allows it. Unless it is sitting beside your main content, it should\nalways be wrapped inside of a ",(0,i.kt)("inlineCode",{parentName:"p"},"<CardGroup>"),". This allows the correct gutter and\nborder placement between a group of cards.")),(0,i.kt)(d,{mdxType:"InlineNotification"},"Although the mini-resource card has a similar geometry to the button component, they should not be used in place of a button. Buttons encourage action from the user and affect the website's front-end or back-end. The resource cards, both large and mini are essentially links. They are used for navigation and actions that do not affect the website."),(0,i.kt)("h2",null,"Example"),(0,i.kt)(m,{mdxType:"Title"},"Group"),(0,i.kt)(p,{mdxType:"CardGroup"},(0,i.kt)(g,{title:"26 characters per MiniCard",href:"/demo",mdxType:"MiniCard"},(0,i.kt)("img",{src:"/18f3a3dc6c5ae9221446f35a437b2780/adobe-icon.svg",alt:"Adobe Acrobat icon"})),(0,i.kt)(g,{title:"Use the default icon",href:"/demo",mdxType:"MiniCard"}),(0,i.kt)(g,{title:"Choose from other icons",href:"/demo",actionIcon:"arrowRight",mdxType:"MiniCard"}),(0,i.kt)(g,{title:"Or bring your own",href:"/demo",mdxType:"MiniCard"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"95%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAADe0lEQVQ4y4WTT2hcdRDHv2/f1rpKFFsseO1JUFFviggVPBT/nISCeNAc2ibZl7XENGmOVvRQRWqoVYMigkYS9+1mN4sHDy0oNHYtBHe3hwaUmjZ2897L262m63Z3fzMy8162aQ/6g+E3zMz38+Y3wwPnABIrwqJFoMt7QcvJXfSr/TBVB/aZZbxKK0+N0cozb6lfG3hOc8vJ3R3eoxoqwGIXIBcxbBEJ/hrgL7GLzts/m1pyk6o726YCptp9TOvTTOunmGr3s8YkJzXn7TJ/hQf5m5ghQO3wB8viOYCzcOmczebiTjYVi6l6N1P9Q8PNs11unulS/aSh6j0kOamhJZs5iwJnAVpKYAtoS4BdjLMLpvKOjqnZhio20Z/HiZtnicICUbgQ+dfeJaokSWvKOzrkgtnFlMCEBS7o25+WBOUEaBtTBdPVCQEwhQvM4aKa+s0zTFenSGt+SRDlLFati2eFBa4gxXmscA7MefToApjWRomv/8jUKDE1v2eOTXyJaW7tCEmtaGLtb3wB96I3i6yZB5t5qyM3XXqFeKNE7H3L5M0x+3N6b/clxxslppUDFGu7cvdmUUA4jtNBBrzxJrqBA2p/PkBcShHlU8wLKaaF6N7ua66UoptfDFAwClKtMMYxgxsfAP4IvvPTYG8IncakzoPYBVFWfRm6Wjwr8TXfOAb2DqMjWn8E+dY0gGuvA423kfQdLAVOBG1/AuYiSMG5eFkyp1z8sSKo/SnYH0JHNL6DcjiFu+pvAPAd2L4D+KPYEzi47A+DG5Poaie5CEq3uiON5cCNY+hKbeBg1XfwkDIc2PDT26AOHgscbHpD4H8+Ro+Lfcj27rh9Gj2pCRy0fAdPKCONpNwRcORWIMhgv3w5nFCA2QL1n+/CyJy1uwxe6sOGI448Fd5hwB+8DXpIuzwFo7PcWk4RJJ1rdxmMbDXivQb4h1QXHXGCo0BwRL+SqA8C3hDeC8cV1JW5xfPshkd1syfWB6NaX7RjUWO3HQloMgOrfgC48jKwfhCzrZPaWUes9RHYO4j5Ky8A5lHVWDL74E5YH+r0zfp9H5AHEuEEfjJz8jeAw0mcKwPJy8/rUxPx/P77CNAbjgR/7Acu7sUD7RmstmewdukR7F59MYZFNbj52f8Aw7F482ng+nHYf58Abkzj8dY0ntx8H/jrHdi6uHQ0uzvPv7ZAHJs9yKMlAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("picture",{parentName:"span"},"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/static/28b17f4b368ca58d4d47e5136b85f0d3/63380/sketch-icon.webp 200w"],sizes:"(max-width: 200px) 100vw, 200px",type:"image/webp"}),"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/static/28b17f4b368ca58d4d47e5136b85f0d3/59afc/sketch-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",type:"image/png"}),"\n          ",(0,i.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/static/28b17f4b368ca58d4d47e5136b85f0d3/59afc/sketch-icon.png",alt:"Github icon",title:"Github icon",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.kt)(m,{mdxType:"Title"},"Aside"),(0,i.kt)(u,{mdxType:"Row"},(0,i.kt)(h,{colLg:8,mdxType:"Column"},(0,i.kt)("p",null,"When you have the mini resource card sitting aside the main content, be sure to\nadd the ",(0,i.kt)("inlineCode",{parentName:"p"},"gutterLg"),", properties to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<MiniCard>"),". This will ensure the\nMiniCard has the appropriate gutters at the approriate breakpoints.")),(0,i.kt)(g,{gutterLg:!0,title:"By itself, as an Aside",href:"https://gatsby.carbondesignsystem.com",mdxType:"MiniCard"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"95%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAADe0lEQVQ4y4WTT2hcdRDHv2/f1rpKFFsseO1JUFFviggVPBT/nISCeNAc2ibZl7XENGmOVvRQRWqoVYMigkYS9+1mN4sHDy0oNHYtBHe3hwaUmjZ2897L262m63Z3fzMy8162aQ/6g+E3zMz38+Y3wwPnABIrwqJFoMt7QcvJXfSr/TBVB/aZZbxKK0+N0cozb6lfG3hOc8vJ3R3eoxoqwGIXIBcxbBEJ/hrgL7GLzts/m1pyk6o726YCptp9TOvTTOunmGr3s8YkJzXn7TJ/hQf5m5ghQO3wB8viOYCzcOmczebiTjYVi6l6N1P9Q8PNs11unulS/aSh6j0kOamhJZs5iwJnAVpKYAtoS4BdjLMLpvKOjqnZhio20Z/HiZtnicICUbgQ+dfeJaokSWvKOzrkgtnFlMCEBS7o25+WBOUEaBtTBdPVCQEwhQvM4aKa+s0zTFenSGt+SRDlLFati2eFBa4gxXmscA7MefToApjWRomv/8jUKDE1v2eOTXyJaW7tCEmtaGLtb3wB96I3i6yZB5t5qyM3XXqFeKNE7H3L5M0x+3N6b/clxxslppUDFGu7cvdmUUA4jtNBBrzxJrqBA2p/PkBcShHlU8wLKaaF6N7ua66UoptfDFAwClKtMMYxgxsfAP4IvvPTYG8IncakzoPYBVFWfRm6Wjwr8TXfOAb2DqMjWn8E+dY0gGuvA423kfQdLAVOBG1/AuYiSMG5eFkyp1z8sSKo/SnYH0JHNL6DcjiFu+pvAPAd2L4D+KPYEzi47A+DG5Poaie5CEq3uiON5cCNY+hKbeBg1XfwkDIc2PDT26AOHgscbHpD4H8+Ro+Lfcj27rh9Gj2pCRy0fAdPKCONpNwRcORWIMhgv3w5nFCA2QL1n+/CyJy1uwxe6sOGI448Fd5hwB+8DXpIuzwFo7PcWk4RJJ1rdxmMbDXivQb4h1QXHXGCo0BwRL+SqA8C3hDeC8cV1JW5xfPshkd1syfWB6NaX7RjUWO3HQloMgOrfgC48jKwfhCzrZPaWUes9RHYO4j5Ky8A5lHVWDL74E5YH+r0zfp9H5AHEuEEfjJz8jeAw0mcKwPJy8/rUxPx/P77CNAbjgR/7Acu7sUD7RmstmewdukR7F59MYZFNbj52f8Aw7F482ng+nHYf58Abkzj8dY0ntx8H/jrHdi6uHQ0uzvPv7ZAHJs9yKMlAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("picture",{parentName:"span"},"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/static/28b17f4b368ca58d4d47e5136b85f0d3/63380/sketch-icon.webp 200w"],sizes:"(max-width: 200px) 100vw, 200px",type:"image/webp"}),"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/static/28b17f4b368ca58d4d47e5136b85f0d3/59afc/sketch-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",type:"image/png"}),"\n          ",(0,i.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/static/28b17f4b368ca58d4d47e5136b85f0d3/59afc/sketch-icon.png",alt:"Sketch icon",title:"Sketch icon",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.kt)("h2",null,"Code"),(0,i.kt)(m,{mdxType:"Title"},"Group"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/MiniCard/MiniCard.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/MiniCard",path:"components/MiniCard/MiniCard.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/MiniCard"},'<CardGroup>\n  <MiniCard title="26 characters per MiniCard" href="/demo">\n    ![Adobe Acrobat icon](/images/adobe-icon.svg)\n  </MiniCard>\n  <MiniCard title="Use the default icon" href="/demo" />\n  <MiniCard\n    title="Choose from other icons"\n    href="/demo"\n    actionIcon="arrowRight"\n  />\n  <MiniCard title="Or bring your own" href="/demo">\n    ![Github icon](/images/sketch-icon.png)\n  </MiniCard>\n</CardGroup>\n')),(0,i.kt)(m,{mdxType:"Title"},"Aside"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/MiniCard/MiniCard.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/MiniCard",path:"components/MiniCard/MiniCard.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/MiniCard"},'<Row>\n<Column colLg={8}>\n\nWhen you have the mini resource card sitting aside the main content, be sure to\nadd the `gutterLg`, properties to the `<MiniCard>`. This will ensure the\nMiniCard has the appropriate gutters at the approriate breakpoints.\n\n</Column>\n<MiniCard\n  gutterLg\n  title="By itself, as an Aside"\n  href="https://gatsby.carbondesignsystem.com"\n  >\n\n![Sketch icon](/images/sketch-icon.png)\n\n</MiniCard>\n</Row>\n')),(0,i.kt)("h3",null,"Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"propType"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"children"),(0,i.kt)("td",{parentName:"tr",align:null},"node"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Use 32x32 image as child, will display in right-hand corner of the card")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"href"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Set url for card")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"title"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Title for the card")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"actionIcon"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"launch")),(0,i.kt)("td",{parentName:"tr",align:null},"Action icon, default is launch, options are ",(0,i.kt)("inlineCode",{parentName:"td"},"launch"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"arrowRight"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"download"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"disabled"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"email"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"className"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Add custom class name")))))}A.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-mini-card-mdx-4c478c65a83d54cc981c.js.map
"use strict";(self.webpackChunkthe_pink_elephant=self.webpackChunkthe_pink_elephant||[]).push([[1381],{2296:function(A,e,t){t.d(e,{Z:function(){return N}});var a=t(7294),i=t(8650),n=t.n(i),s=t(1082),r=t(1025),o=t(1908),c=t(5900),l=t.n(c),d=function(A){var e,t=A.title,i=A.theme,n=A.tabs,s=void 0===n?[]:n;return a.createElement("div",{className:l()("PageHeader-module--page-header--36a7c",(e={},e["PageHeader-module--with-tabs--bdb43"]=s.length,e["PageHeader-module--dark-mode--58278"]="dark"===i,e))},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))},p=function(A){var e=A.relativePagePath,t=A.repository,i=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,n=t||i,r=n.baseUrl,o=n.subDirectory,c=r+"/edit/"+n.branch+o+"/src/pages"+e;return r?a.createElement("div",{className:"cds--row EditLink-module--row--04499"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--203ae",href:c},"Edit this page on GitHub"))):null},m=t(849),g=t(1721),b=function(A){function e(){return A.apply(this,arguments)||this}return(0,g.Z)(e,A),e.prototype.render=function(){var A=this.props,e=A.title,t=A.tabs,i=A.slug,r=i.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(A){var e,t=n()(A,{lower:!0,strict:!0}),o=t===r,c=new RegExp(r+"/?(#.*)?$"),d=i.replace(c,t);return a.createElement("li",{key:A,className:l()((e={},e["PageTabs-module--selected-item--68107"]=o,e),"PageTabs-module--list-item--d36e2")},a.createElement(s.Link,{className:"PageTabs-module--link--2b3ff",to:""+d},A))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--c4bab"},o))))))},e}(a.Component),E=b,u=t(5391),B=t(5387),h=t(4389),w=function(A){var e=A.date,t=new Date(e);return e?a.createElement(h.X2,{className:"last-modified-date-module--row--5c9a1"},a.createElement(h.sg,null,a.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},N=function(A){var e=A.pageContext,t=A.children,i=A.location,c=A.Title,l=e.frontmatter,g=void 0===l?{}:l,b=e.relativePagePath,h=e.titleType,N=g.tabs,j=g.title,k=g.theme,Q=g.description,f=g.keywords,D=g.date,Y=(0,B.Z)().interiorTheme,y=(0,s.useStaticQuery)("2456312558").site.pathPrefix,x=y?i.pathname.replace(y,""):i.pathname,P=N?x.split("/").filter(Boolean).slice(-1)[0]||n()(N[0],{lower:!0}):"",v=k||Y;return a.createElement(o.Z,{tabs:N,homepage:!1,theme:v,pageTitle:j,pageDescription:Q,pageKeywords:f,titleType:h},a.createElement(d,{title:c?a.createElement(c,null):j,label:"label",tabs:N,theme:v}),N&&a.createElement(E,{title:j,slug:x,tabs:N,currentTab:P}),a.createElement(u.Z,{padded:!0},t,a.createElement(p,{relativePagePath:b}),a.createElement(w,{date:D})),a.createElement(m.Z,{pageContext:e,location:i,slug:x,tabs:N,currentTab:P}),a.createElement(r.Z,null))}},2898:function(A,e,t){t.r(e),t.d(e,{_frontmatter:function(){return r},default:function(){return m}});var a=t(3366),i=(t(7294),t(4983)),n=t(2296),s=["components"],r={},o=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}},c=o("PageDescription"),l=o("ArtDirection"),d={_frontmatter:r},p=n.Z;function m(A){var e=A.components,t=(0,a.Z)(A,s);return(0,i.kt)(p,Object.assign({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"PageDescription"},(0,i.kt)("p",null,"On the web,\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Art_direction"},"art direction"),"\nrefers to changing the image rendered at different display sizes. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"ArtDirection")," component allows you to provide multiple images achieve this\ngoal.")),(0,i.kt)("h2",null,"Example"),(0,i.kt)(l,{mdxType:"ArtDirection"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAcedYA//xAAYEAEAAwEAAAAAAAAAAAAAAAABAhEgMf/aAAgBAQABBQI6xox//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAEgMlH/2gAIAQEABj8CwsnH/8QAGBABAAMBAAAAAAAAAAAAAAAAAQARYSD/2gAIAQEAAT8hFgU0wrDEc//aAAwDAQACAAMAAAAQs8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAaEAEBAAIDAAAAAAAAAAAAAAABEQAgMZGx/9oACAEBAAE/EAIRY0h1lUa8rfNf/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("picture",{parentName:"span"},"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/static/5f7834458ce96d6084183dd6b544432d/0eda2/mobile.webp 288w","/static/5f7834458ce96d6084183dd6b544432d/460e2/mobile.webp 576w","/static/5f7834458ce96d6084183dd6b544432d/e0ca3/mobile.webp 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/static/5f7834458ce96d6084183dd6b544432d/69549/mobile.jpg 288w","/static/5f7834458ce96d6084183dd6b544432d/473e3/mobile.jpg 576w","/static/5f7834458ce96d6084183dd6b544432d/2e753/mobile.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/jpeg"}),"\n          ",(0,i.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/static/5f7834458ce96d6084183dd6b544432d/2e753/mobile.jpg",alt:"Mobile image",title:"Mobile image",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAcedYA//xAAYEAACAwAAAAAAAAAAAAAAAAAAAQIRIP/aAAgBAQABBQIcaz//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAEAAwAAAAAAAAAAAAAAAAABACAy/9oACAEBAAY/Apoa/wD/xAAYEAEBAQEBAAAAAAAAAAAAAAABEWEAIP/aAAgBAQABPyEKhZvEKYjz/9oADAMBAAIAAwAAABAzz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABkQAQEAAwEAAAAAAAAAAAAAAAERACAxsf/aAAgBAQABPxAlAFiuGUZbKq+a/wD/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("picture",{parentName:"span"},"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/static/e6054767c240469eea72a2b02940941c/0eda2/tablet.webp 288w","/static/e6054767c240469eea72a2b02940941c/460e2/tablet.webp 576w","/static/e6054767c240469eea72a2b02940941c/e0ca3/tablet.webp 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/static/e6054767c240469eea72a2b02940941c/69549/tablet.jpg 288w","/static/e6054767c240469eea72a2b02940941c/473e3/tablet.jpg 576w","/static/e6054767c240469eea72a2b02940941c/2e753/tablet.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/jpeg"}),"\n          ",(0,i.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/static/e6054767c240469eea72a2b02940941c/2e753/tablet.jpg",alt:"Tablet image",title:"Tablet image",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAciVYA//xAAYEAEAAwEAAAAAAAAAAAAAAAABAhEgIf/aAAgBAQABBQILWPMf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAQUAAAAAAAAAAAAAAAAAAAIRIDEy/9oACAEBAAY/ArY0mP8A/8QAGRABAAIDAAAAAAAAAAAAAAAAARFhACAh/9oACAEBAAE/IeQizgkpqHX/2gAMAwEAAgADAAAAEHPP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGhABAQACAwAAAAAAAAAAAAAAAREAICFRcf/aAAgBAQABPxAJCj04iKQtFfONf//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("picture",{parentName:"span"},"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/static/c7b03eb575e60d6e73a360765d60f8eb/0eda2/desktop.webp 288w","/static/c7b03eb575e60d6e73a360765d60f8eb/460e2/desktop.webp 576w","/static/c7b03eb575e60d6e73a360765d60f8eb/e0ca3/desktop.webp 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,i.kt)("source",{parentName:"picture",srcSet:["/static/c7b03eb575e60d6e73a360765d60f8eb/69549/desktop.jpg 288w","/static/c7b03eb575e60d6e73a360765d60f8eb/473e3/desktop.jpg 576w","/static/c7b03eb575e60d6e73a360765d60f8eb/2e753/desktop.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/jpeg"}),"\n          ",(0,i.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/static/c7b03eb575e60d6e73a360765d60f8eb/2e753/desktop.jpg",alt:"Desktop image",title:"Desktop image",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.kt)("h2",null,"Code"),(0,i.kt)("p",null,"You can place up to three images inside of the ArtDirection component. The first\nwill be used for mobile, the second for tablet, and the third for desktop. If\nonly two images are provided, the second image will be used for both tablet and\ndesktop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/ArtDirection.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/ArtDirection",path:"components/ArtDirection.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/ArtDirection"},"<ArtDirection>\n\n![Mobile image](./mobile.jpg)\n\n![Tablet image](./tablet.jpg)\n\n![Desktop image](./desktop.jpg)\n\n</ArtDirection>\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-art-direction-index-mdx-b8e99e994db2eae86e8b.js.map
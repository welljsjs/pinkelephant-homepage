"use strict";(self.webpackChunkthe_pink_elephant=self.webpackChunkthe_pink_elephant||[]).push([[6376],{2296:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),l=a(8650),o=a.n(l),r=a(1082),i=a(1025),s=a(1908),c=a(5900),d=a.n(c),m=function(e){var t,a=e.title,l=e.theme,o=e.tabs,r=void 0===o?[]:o;return n.createElement("div",{className:d()("PageHeader-module--page-header--36a7c",(t={},t["PageHeader-module--with-tabs--bdb43"]=r.length,t["PageHeader-module--dark-mode--58278"]="dark"===l,t))},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,l=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||l,i=o.baseUrl,s=o.subDirectory,c=i+"/edit/"+o.branch+s+"/src/pages"+t;return i?n.createElement("div",{className:"cds--row EditLink-module--row--04499"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--203ae",href:c},"Edit this page on GitHub"))):null},u=a(849),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,l=e.slug,i=l.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),s=a===i,c=new RegExp(i+"/?(#.*)?$"),m=l.replace(c,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--68107"]=s,t),"PageTabs-module--list-item--d36e2")},n.createElement(r.Link,{className:"PageTabs-module--link--2b3ff",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--c4bab"},s))))))},t}(n.Component),b=g,k=a(5391),f=a(5387),v=a(4389),N=function(e){var t=e.date,a=new Date(t);return t?n.createElement(v.X2,{className:"last-modified-date-module--row--5c9a1"},n.createElement(v.sg,null,n.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,l=e.location,c=e.Title,d=t.frontmatter,h=void 0===d?{}:d,g=t.relativePagePath,v=t.titleType,w=h.tabs,y=h.title,E=h.theme,P=h.description,T=h.keywords,D=h.date,C=(0,f.Z)().interiorTheme,x=(0,r.useStaticQuery)("2456312558").site.pathPrefix,F=x?l.pathname.replace(x,""):l.pathname,S=w?F.split("/").filter(Boolean).slice(-1)[0]||o()(w[0],{lower:!0}):"",Z=E||C;return n.createElement(s.Z,{tabs:w,homepage:!1,theme:Z,pageTitle:y,pageDescription:P,pageKeywords:T,titleType:v},n.createElement(m,{title:c?n.createElement(c,null):y,label:"label",tabs:w,theme:Z}),w&&n.createElement(b,{title:y,slug:F,tabs:w,currentTab:S}),n.createElement(k.Z,{padded:!0},a,n.createElement(p,{relativePagePath:g}),n.createElement(N,{date:D})),n.createElement(u.Z,{pageContext:t,location:l,slug:F,tabs:w,currentTab:S}),n.createElement(i.Z,null))}},189:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return p}});var n,l=a(3366),o=(a(7294),a(4983)),r=a(2296),i=["components"],s={},c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),d={_frontmatter:s},m=r.Z;function p(e){var t=e.components,a=(0,l.Z)(e,i);return(0,o.kt)(m,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<FeedbackDialog>")," component is a non-modal dialog that allows your users to\nprovide low-friction, anonymous feedback for a specific page.")),(0,o.kt)("h2",null,"Activating the dialog"),(0,o.kt)("p",null,"The Feedback button only becomes visible once you’ve supplied an ",(0,o.kt)("inlineCode",{parentName:"p"},"onSubmit"),"\nhandler. To do that, we’ll need to shadow the ",(0,o.kt)("inlineCode",{parentName:"p"},"FeedbackDialog")," component."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new javascript file under\n",(0,o.kt)("inlineCode",{parentName:"p"},"src/gatsby-theme-carbon/components/FeedbackDialog/FeedbackDialog.js"),".\nMatching the filepath exactly is important here.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the following snippet into your new file"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ThemeFeedbackDialog from 'gatsby-theme-carbon/src/components/FeedbackDialog/FeedbackDialog';\n\nconst FeedbackDialog = ({ props }) => {\n  const onSubmit = (data) => {\n    console.log({ ...data });\n  };\n\n  return <ThemeFeedbackDialog {...props} onSubmit={onSubmit} />;\n};\n\nexport default FeedbackDialog;\n")),(0,o.kt)("h2",null,"Creating a handler"),(0,o.kt)("p",null,"Next, you’ll need a place to send the data. For the Carbon website, we use a\nserverless function that forwards the data to a\n",(0,o.kt)("a",{parentName:"p",href:"https://www.surveygizmo.com/"},"SurveyGizmo")," quiz. You can see that function\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/blob/master/api/survey.ts"},"here"),"."),(0,o.kt)("p",null,"The handler can send a fetch request off to the endpoint you create. Update the\n",(0,o.kt)("inlineCode",{parentName:"p"},"onSubmit")," handler to send the data wherever you want. This function receives\nthe following arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"experience"),": “Negative”, “Positive” or “Neutral”"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"comment"),": An optional comment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),": the window location when the survey was submitted")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const FeedbackDialog = ({ props }) => {\n  const onSubmit = data => {\n    fetch(process.env.API_ENDPOINT, {\n      method: 'POST',\n      body: JSON.stringify(data),\n  });\n\n  return <ThemeFeedbackDialog {...props} onSubmit={onSubmit} />;\n};\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-feedback-dialog-mdx-36ba5becc5b340de7adf.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{EYWl:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("TJpk"),i=n.n(o),l=n("Wbzz");function c(e){var t=e.meta,n=e.image,r=e.title,o=e.description,c=e.slug,s=e.lang,m=void 0===s?"en":s;return a.a.createElement(l.StaticQuery,{query:"336482444",render:function(e){var l=e.site.siteMetadata,s=o||l.description,u=n?l.siteUrl+"/"+n:null,p=""+l.siteUrl+c;return a.a.createElement(i.a,Object.assign({htmlAttributes:{lang:m}},r?{titleTemplate:"%s — "+l.title,title:r}:{title:l.title+" — A blog by Ray Toh"},{meta:[{name:"description",content:s},{property:"og:url",content:p},{property:"og:title",content:r||l.title},{property:"og:description",content:s},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.social.twitter},{name:"twitter:title",content:r||l.title},{name:"twitter:description",content:s}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(t)}))}})}c.defaultProps={meta:[],title:"",slug:""},t.a=c},JLKy:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);t.a=function(e){var t=e.children,n=e.style,r=void 0===n?{}:n;return a.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},r)},t)}},L6NH:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n("KQm4");function a(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function o(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var a=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,Object(r.a)(a))}},SbOt:function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),o=n.n(a),i=n("caJ7"),l=n.n(i),c=n("p3AD"),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2)}},o.a.createElement("img",{src:l.a,alt:"Ray Toh",style:{marginRight:Object(c.a)(.5),marginBottom:0,width:Object(c.a)(2),height:Object(c.a)(2),borderRadius:"50%"}}),o.a.createElement("p",{style:{maxWidth:310}},"Personal blog by"," ",o.a.createElement("a",{href:"https://raythx.com",target:"_blank",rel:"noopener noreferrer"},"Ray Toh"),". ",o.a.createElement("br",null),"I document my programming journey."))},t}(o.a.Component);t.a=s},TshS:function(e,t,n){"use strict";n.r(t);var r=n("dI71"),a=n("Wbzz"),o=n("L6NH"),i=n("SbOt"),l=n("q1tI"),c=n.n(l),s=n("p3AD"),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return c.a.createElement("footer",{style:{marginTop:Object(s.a)(2.5),paddingTop:Object(s.a)(1)}},c.a.createElement("div",{style:{float:"right"}},c.a.createElement("a",{href:"https://raythx.com/",target:"_blank",rel:"noopener noreferrer"},"website")),c.a.createElement("a",{href:"https://github.com/raythx98",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",c.a.createElement("a",{href:"https://www.facebook.com/raythx98/",target:"_blank",rel:"noopener noreferrer"},"facebook")," ","•"," ",c.a.createElement("a",{href:"https://www.linkedin.com/in/raythx/",target:"_blank",rel:"noopener noreferrer"},"linkedin"))},t}(c.a.Component),u=n("7oih"),p=n("JLKy"),d=n("EYWl"),f=n("mwIZ"),h=n.n(f),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=h()(this,"props.data.site.siteMetadata.title"),t=this.props.pageContext.langKey,n=h()(this,"props.data.allMarkdownRemark.edges");return c.a.createElement(u.a,{location:this.props.location,title:e},c.a.createElement(d.a,null),c.a.createElement("aside",null,c.a.createElement(i.a,null)),c.a.createElement("main",null,"en"!==t&&"ru"!==t&&c.a.createElement(p.a,null,"These articles have been"," ",c.a.createElement("a",{href:"https://github.com/gaearon/overreacted.io#contributing-translations",target:"_blank",rel:"noopener noreferrer"},"translated by the community"),"."),n.map((function(e){var n=e.node,r=h()(n,"frontmatter.title")||n.fields.slug;return c.a.createElement("article",{key:n.fields.slug},c.a.createElement("header",null,c.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(s.a)(1),marginBottom:Object(s.a)(1/4)}},c.a.createElement(a.Link,{style:{boxShadow:"none"},to:n.fields.slug,rel:"bookmark"},r)),c.a.createElement("small",null,Object(o.a)(n.frontmatter.date,t)," • "+Object(o.b)(n.timeToRead))),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:n.frontmatter.spoiler}}))}))),c.a.createElement(m,null))},t}(c.a.Component);t.default=b},caJ7:function(e,t,n){e.exports=n.p+"static/profile-pic-2ef54ead05b1214149aa3fc4d4b46ddd.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-2bdd723fbea8dac665b8.js.map
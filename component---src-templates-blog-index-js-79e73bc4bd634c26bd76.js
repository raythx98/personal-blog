(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{EYWl:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("TJpk"),l=n.n(o),i=n("Wbzz");function c(e){let{meta:t,image:n,title:r,description:o,slug:c,lang:s="en"}=e;return a.a.createElement(i.StaticQuery,{query:"336482444",render:e=>{const{siteMetadata:i}=e.site,m=o||i.description,p=n?i.siteUrl+"/"+n:null,u=""+i.siteUrl+c;return a.a.createElement(l.a,Object.assign({htmlAttributes:{lang:s}},r?{titleTemplate:"%s — "+i.title,title:r}:{title:i.title+" — A blog by Ray Toh"},{meta:[{name:"description",content:m},{property:"og:url",content:u},{property:"og:title",content:r||i.title},{property:"og:description",content:m},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.social.twitter},{name:"twitter:title",content:r||i.title},{name:"twitter:description",content:m}].concat(p?[{property:"og:image",content:p},{name:"twitter:image",content:p}]:[]).concat(t)}))}})}c.defaultProps={meta:[],title:"",slug:""},t.a=c},JLKy:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);t.a=function(e){let{children:t,style:n={}}=e;return a.a.createElement("p",{style:{fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all",...n}},t)}},L6NH:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n("KQm4");function a(e){let t=Math.ceil(e/3);return t>5?new Array(Math.floor(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function o(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);const a=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,Object(r.a)(a))}},SbOt:function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),o=n.n(a),l=n("caJ7"),i=n.n(l),c=n("p3AD");let s=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2)}},o.a.createElement("img",{src:i.a,alt:"Ray Toh",style:{marginRight:Object(c.a)(.5),marginBottom:0,width:Object(c.a)(2),height:Object(c.a)(2),borderRadius:"50%"}}),o.a.createElement("p",{style:{maxWidth:310}},"Personal blog by"," ",o.a.createElement("a",{href:"https://raythx.com",target:"_blank",rel:"noopener noreferrer"},"Ray Toh"),". ",o.a.createElement("br",null),"I document my programming journey."))},t}(o.a.Component);t.a=s},TshS:function(e,t,n){"use strict";n.r(t);var r=n("dI71"),a=n("Wbzz"),o=n("L6NH"),l=n("SbOt"),i=n("q1tI"),c=n.n(i),s=n("p3AD");var m=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return c.a.createElement("footer",{style:{marginTop:Object(s.a)(2.5),paddingTop:Object(s.a)(1)}},c.a.createElement("div",{style:{float:"right"}},c.a.createElement("a",{href:"https://raythx.com/",target:"_blank",rel:"noopener noreferrer"},"website")),c.a.createElement("a",{href:"https://github.com/raythx98",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",c.a.createElement("a",{href:"https://www.facebook.com/raythx98/",target:"_blank",rel:"noopener noreferrer"},"facebook")," ","•"," ",c.a.createElement("a",{href:"https://www.linkedin.com/in/raythx/",target:"_blank",rel:"noopener noreferrer"},"linkedin"))},t}(c.a.Component),p=n("7oih"),u=n("JLKy"),d=n("EYWl"),f=n("mwIZ"),h=n.n(f);let b=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){const e=h()(this,"props.data.site.siteMetadata.title"),t=this.props.pageContext.langKey,n=h()(this,"props.data.allMarkdownRemark.edges");return c.a.createElement(p.a,{location:this.props.location,title:e},c.a.createElement(d.a,null),c.a.createElement("aside",null,c.a.createElement(l.a,null)),c.a.createElement("main",null,"en"!==t&&"ru"!==t&&c.a.createElement(u.a,null,"These articles have been"," ",c.a.createElement("a",{href:"https://github.com/gaearon/overreacted.io#contributing-translations",target:"_blank",rel:"noopener noreferrer"},"translated by the community"),"."),n.map(e=>{let{node:n}=e;const r=h()(n,"frontmatter.title")||n.fields.slug;return c.a.createElement("article",{key:n.fields.slug},c.a.createElement("header",null,c.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(s.a)(1),marginBottom:Object(s.a)(1/4)}},c.a.createElement(a.Link,{style:{boxShadow:"none"},to:n.fields.slug,rel:"bookmark"},r)),c.a.createElement("small",null,Object(o.a)(n.frontmatter.date,t)," • "+Object(o.b)(n.timeToRead))),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:n.frontmatter.spoiler}}))})),c.a.createElement(m,null))},t}(c.a.Component);t.default=b},caJ7:function(e,t,n){e.exports=n.p+"static/profile-pic-2ef54ead05b1214149aa3fc4d4b46ddd.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-79e73bc4bd634c26bd76.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{EYWl:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("TJpk"),i=n.n(l),o=n("Wbzz");function s(e){var t=e.meta,n=e.image,a=e.title,l=e.description,s=e.slug,c=e.lang,u=void 0===c?"en":c;return r.a.createElement(o.StaticQuery,{query:"336482444",render:function(e){var o=e.site.siteMetadata,c=l||o.description,m=n?o.siteUrl+"/"+n:null,p=""+o.siteUrl+s;return r.a.createElement(i.a,Object.assign({htmlAttributes:{lang:u}},a?{titleTemplate:"%s — "+o.title,title:a}:{title:o.title+" — A blog by Ray Toh"},{meta:[{name:"description",content:c},{property:"og:url",content:p},{property:"og:title",content:a||o.title},{property:"og:description",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.social.twitter},{name:"twitter:title",content:a||o.title},{name:"twitter:description",content:c}].concat(m?[{property:"og:image",content:m},{name:"twitter:image",content:m}]:[]).concat(t)}))}})}s.defaultProps={meta:[],title:"",slug:""},t.a=s},JLKy:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){var t=e.children,n=e.style,a=void 0===n?{}:n;return r.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},a)},t)}},L6NH:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l}));var a=n("KQm4");function r(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function l(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var r=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,Object(a.a)(r))}},MvKu:function(e,t,n){},SbOt:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),l=n.n(r),i=n("caJ7"),o=n.n(i),s=n("p3AD"),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return l.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2)}},l.a.createElement("img",{src:o.a,alt:"Ray Toh",style:{marginRight:Object(s.a)(.5),marginBottom:0,width:Object(s.a)(2),height:Object(s.a)(2),borderRadius:"50%"}}),l.a.createElement("p",{style:{maxWidth:310}},"Personal blog by"," ",l.a.createElement("a",{href:"https://raythx.com",target:"_blank",rel:"noopener noreferrer"},"Ray Toh"),". ",l.a.createElement("br",null),"I document my programming journey."))},t}(l.a.Component);t.a=c},caJ7:function(e,t,n){e.exports=n.p+"static/profile-pic-2ef54ead05b1214149aa3fc4d4b46ddd.jpg"},k7Sn:function(e,t){t.supportedLanguages={en:"English",ru:"Русский",tr:"Türkçe",es:"Español",ko:"한국어",sv:"Svenska",it:"Italiano",id:"Bahasa Indonesia","pt-br":"Português do Brasil",pl:"Polski","zh-hant":"繁體中文","zh-hans":"简体中文",ja:"日本語",fr:"Français",he:"עברית",hu:"Magyar",vi:"Tiếng Việt",th:"ไทย",my:"မြန်မာဘာသာ",sk:"Slovenčina",te:"తెలుగు",uk:"Українська",bg:"Български",cs:"Čeština",de:"Deutsch",nl:"Nederlands",nb:"Norsk",fa:"فارسی",ar:"العربية",sr:"srpski"}},"vPK/":function(e,t,n){},yZlL:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),r=n("q1tI"),l=n.n(r),i=n("Wbzz"),o=n("mwIZ"),s=n.n(o),c=(n("vPK/"),n("SbOt")),u=n("7oih"),m=n("EYWl"),p=(n("MvKu"),l.a.Component,n("JLKy")),d=n("L6NH"),g=n("p3AD"),f=n("k7Sn"),h={"https://reactjs.org":{"pt-br":"https://pt-br.reactjs.org"}},b=function(e){return f.supportedLanguages[e].replace(/ /g," ")},y=(l.a.Component,function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=s()(this.props,"data.site.siteMetadata.title"),a=this.props.pageContext,r=a.previous,o=a.next,p=a.slug,y=a.translations,E=a.translatedLinks,v=e.fields.langKey,k=e.html;k=function(e,t){var n=e.match(/https?:\/\/(www)?[^\/\s)"?]+/gm);return n&&f.supportedLanguages[t]?(n.forEach((function(n){h[n]&&h[n][t]&&(e=e.replace(n,h[n][t]))})),e):e}(k,v),E.forEach((function(e){var t="/"+v+e;k=k.replace(new RegExp('"'+(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+'"'),"g"),'"'+t+'"')})),(y=y.slice()).sort((function(e,t){return b(e)<b(t)?-1:1})),function(e){switch(e){case"ru":case"bg":Promise.all([n.e(0),n.e(6)]).then(n.t.bind(null,"EsZP",7)),Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,"s85H",7));break;case"uk":Promise.all([n.e(0),n.e(6)]).then(n.t.bind(null,"EsZP",7)),Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,"s85H",7)),Promise.all([n.e(0),n.e(7)]).then(n.t.bind(null,"Mq6Z",7)),Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,"e/YJ",7));break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"he":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":Promise.all([n.e(0),n.e(7)]).then(n.t.bind(null,"Mq6Z",7)),Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,"e/YJ",7));break;case"vi":Promise.all([n.e(0),n.e(20)]).then(n.t.bind(null,"Vjog",7)),Promise.all([n.e(0),n.e(19)]).then(n.t.bind(null,"Pf5Y",7));break;case"fa":Promise.all([n.e(0),n.e(18)]).then(n.t.bind(null,"BiVN",7));break;case"ar":Promise.all([n.e(0),n.e(17)]).then(n.t.bind(null,"xpFW",7))}}(v);var w=function(e,t){var n=e.replace(t+"/","");return function(e){return"en"===e?n:"/"+e+n}}(p,v)("en");w.slice(1,w.length-1),encodeURIComponent("https://overreacted.io"+w);return l.a.createElement(u.a,{location:this.props.location,title:t},l.a.createElement(m.a,{lang:v,title:e.frontmatter.title,description:e.frontmatter.spoiler,slug:e.fields.slug}),l.a.createElement("main",null,l.a.createElement("article",null,l.a.createElement("header",null,l.a.createElement("h1",{style:{color:"var(--textTitle)"}},e.frontmatter.title),l.a.createElement("p",{style:Object.assign({},Object(g.b)(-.2),{display:"block",marginBottom:Object(g.a)(1),marginTop:Object(g.a)(-.8)})},Object(d.a)(e.frontmatter.date,v)," • "+Object(d.b)(e.timeToRead))),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:k}}),l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/raythx/",target:"_blank",rel:"noopener noreferrer"},"Connect on Linkedin")," • ",l.a.createElement("a",{href:"mailto:hongxian@comp.nus.edu.sg",target:"_blank",rel:"noopener noreferrer"},"Email me"))))),l.a.createElement("aside",null,l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:Object(g.a)(.25)}}),l.a.createElement(c.a,null),l.a.createElement(i.Link,{to:"/",style:{marginRight:20}},"← Homepage"),l.a.createElement("nav",null,l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.a.createElement("li",null,r&&l.a.createElement(i.Link,{to:r.fields.slug,rel:"prev",style:{marginRight:20}},"← ",r.frontmatter.title)),l.a.createElement("li",null,o&&l.a.createElement(i.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))))))},t}(l.a.Component));t.default=y}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-dd9a55c0474ba4655782.js.map
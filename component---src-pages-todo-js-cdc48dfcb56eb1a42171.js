(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"11qr":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return x}));var r=a("q1tI"),n=a.n(r),c=a("wx14"),l=a("zLVn"),o=a("TSYQ"),i=a.n(o),s=a("vUet"),d=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.fluid,o=e.as,d=void 0===o?"div":o,u=e.className,f=Object(l.a)(e,["bsPrefix","fluid","as","className"]),m=Object(s.a)(a,"container"),v="string"==typeof r?"-"+r:"-fluid";return n.a.createElement(d,Object(c.a)({ref:t},f,{className:i()(u,r?""+m+v:m)}))}));d.displayName="Container",d.defaultProps={fluid:!1};var u=d,f=a("3Z9Z"),m=a("JI6e"),v=a("ma3e"),p=a("Bl7J"),h=a("vrFN"),x=(t.default=function(e){var t=e.data,a=e.location,r=t.site.siteMetadata.title;return n.a.createElement(p.a,{location:a,title:r},n.a.createElement(h.a,{title:"Todo"}),n.a.createElement("h2",{style:{color:"#8C749F"}},"To Do List"),n.a.createElement(u,null,n.a.createElement(f.a,null,n.a.createElement(m.a,null,n.a.createElement("h4",{style:{color:"#D2ACD1"}},"To Do"),[{id:0,text:"UI/UX",checked:!1},{id:1,text:"카테고리별 게시글 분류",checked:!0},{id:2,text:"댓글 기능",checked:!1},{id:3,text:"Google 검색 등록",checked:!1},{id:4,text:"비밀글 기능",checked:!1},{id:5,text:"방문자수 체크",checked:!1},{id:6,text:"ABOUT ME 꾸미기",checked:!1}].map((function(e,t){return n.a.createElement("div",{key:t},e.checked?n.a.createElement(v.a,null):n.a.createElement(v.d,null),n.a.createElement("p",{style:{display:"inline-block",marginLeft:10}},e.text))}))),n.a.createElement(m.a,null,n.a.createElement("h4",{style:{color:"#D2ACD1"}},"Add Category"),[{id:0,text:"이력서 / 포트폴리오",checked:!1},{id:1,text:"자격증(ADsP)",checked:!1},{id:2,text:"컴퓨터공학적 지식",checked:!1},{id:3,text:"KAGGLE 개인 프로젝트",checked:!1},{id:4,text:"영어 공부",checked:!1},{id:5,text:"취미 생활",checked:!1}].map((function(e,t){return n.a.createElement("div",{key:t},e.checked?n.a.createElement(v.a,null):n.a.createElement(v.d,null),n.a.createElement("p",{style:{display:"inline-block",marginLeft:10}},e.text))}))))))},"3159585216")},"3Z9Z":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("TSYQ"),l=a.n(c),o=a("q1tI"),i=a.n(o),s=a("vUet"),d=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.noGutters,u=e.as,f=void 0===u?"div":u,m=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(s.a)(a,"row"),p=v+"-cols",h=[];return d.forEach((function(e){var t,a=m[e];delete m[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&h.push(""+p+r+"-"+t)})),i.a.createElement(f,Object(r.a)({ref:t},m,{className:l.a.apply(void 0,[c,v,o&&"no-gutters"].concat(h))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u},JI6e:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("TSYQ"),l=a.n(c),o=a("q1tI"),i=a.n(o),s=a("vUet"),d=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.as,u=void 0===o?"div":o,f=Object(n.a)(e,["bsPrefix","className","as"]),m=Object(s.a)(a,"col"),v=[],p=[];return d.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],"object"==typeof n&&null!=n){var c=n.span;t=void 0===c||c,a=n.offset,r=n.order}else t=n;var l="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+m+l:""+m+l+"-"+t),null!=r&&p.push("order"+l+"-"+r),null!=a&&p.push("offset"+l+"-"+a)})),v.length||v.push(m),i.a.createElement(u,Object(r.a)({},f,{ref:t,className:l.a.apply(void 0,[c].concat(v,p))}))}));u.displayName="Col",t.a=u},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a("q1tI"),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=r.createContext&&r.createContext(n),l=function(){return(l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};function i(e){return function(t){return r.createElement(s,l({attr:l({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.createElement(t.tag,l({key:a},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var a,n=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var c=e.attr,i=e.title,s=o(e,["attr","title"]);return r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,c,s,{className:a,style:l({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==c?r.createElement(c.Consumer,null,(function(e){return t(e)})):t(n)}}}]);
//# sourceMappingURL=component---src-pages-todo-js-cdc48dfcb56eb1a42171.js.map
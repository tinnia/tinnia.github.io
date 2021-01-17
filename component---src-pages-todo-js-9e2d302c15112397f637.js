/*! For license information please see component---src-pages-todo-js-9e2d302c15112397f637.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"11qr":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return h}));var n=a("q1tI"),r=a.n(n),c=a("wx14"),l=a("zLVn"),i=a("TSYQ"),o=a.n(i),s=a("vUet"),u=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.fluid,i=e.as,u=void 0===i?"div":i,d=e.className,f=Object(l.a)(e,["bsPrefix","fluid","as","className"]),p=Object(s.a)(a,"container"),v="string"==typeof n?"-"+n:"-fluid";return r.a.createElement(u,Object(c.a)({ref:t},f,{className:o()(d,n?""+p+v:p)}))}));u.displayName="Container",u.defaultProps={fluid:!1};var d=u,f=a("3Z9Z"),p=a("JI6e"),v=a("ma3e"),m=a("Bl7J"),x=a("vrFN"),h=(t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata.title;return r.a.createElement(m.a,{location:a,title:n},r.a.createElement(x.a,{title:"Todo"}),r.a.createElement("h2",{style:{color:"#8C749F"}},"To Do List"),r.a.createElement(d,null,r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement("h4",{style:{color:"#D2ACD1"}},"To Do"),[{id:0,text:"UI/UX",checked:!1},{id:1,text:"카테고리별 게시글 분류",checked:!0},{id:2,text:"댓글 기능",checked:!1},{id:3,text:"Google 검색 등록",checked:!1},{id:4,text:"비밀글 기능",checked:!1},{id:5,text:"방문자수 체크",checked:!1},{id:6,text:"ABOUT ME 꾸미기",checked:!1}].map((function(e,t){return r.a.createElement("div",{key:t},e.checked?r.a.createElement(v.a,null):r.a.createElement(v.b,null),r.a.createElement("p",{style:{display:"inline-block",marginLeft:10}},e.text))}))),r.a.createElement(p.a,null,r.a.createElement("h4",{style:{color:"#D2ACD1"}},"Add Category"),[{id:0,text:"이력서 / 포트폴리오",checked:!1},{id:1,text:"자격증(ADsP)",checked:!1},{id:2,text:"컴퓨터공학적 지식",checked:!1},{id:3,text:"KAGGLE 개인 프로젝트",checked:!1},{id:4,text:"영어 공부",checked:!1},{id:5,text:"취미 생활",checked:!1}].map((function(e,t){return r.a.createElement("div",{key:t},e.checked?r.a.createElement(v.a,null):r.a.createElement(v.b,null),r.a.createElement("p",{style:{display:"inline-block",marginLeft:10}},e.text))}))))))},"3159585216")},"3Z9Z":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),c=a("TSYQ"),l=a.n(c),i=a("q1tI"),o=a.n(i),s=a("vUet"),u=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.noGutters,d=e.as,f=void 0===d?"div":d,p=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(s.a)(a,"row"),m=v+"-cols",x=[];return u.forEach((function(e){var t,a=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&x.push(""+m+n+"-"+t)})),o.a.createElement(f,Object(n.a)({ref:t},p,{className:l.a.apply(void 0,[c,v,i&&"no-gutters"].concat(x))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},JI6e:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),c=a("TSYQ"),l=a.n(c),i=a("q1tI"),o=a.n(i),s=a("vUet"),u=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.as,d=void 0===i?"div":i,f=Object(r.a)(e,["bsPrefix","className","as"]),p=Object(s.a)(a,"col"),v=[],m=[];return u.forEach((function(e){var t,a,n,r=f[e];if(delete f[e],"object"==typeof r&&null!=r){var c=r.span;t=void 0===c||c,a=r.offset,n=r.order}else t=r;var l="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+p+l:""+p+l+"-"+t),null!=n&&m.push("order"+l+"-"+n),null!=a&&m.push("offset"+l+"-"+a)})),v.length||v.push(p),o.a.createElement(d,Object(n.a)({},f,{ref:t,className:l.a.apply(void 0,[c].concat(v,m))}))}));d.displayName="Col",t.a=d},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},vUet:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("wx14");var n=a("q1tI"),r=a.n(n),c=r.a.createContext({});c.Consumer,c.Provider;function l(e,t){var a=Object(n.useContext)(c);return e||a[t]||t}},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-todo-js-9e2d302c15112397f637.js.map
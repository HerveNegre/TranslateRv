(this["webpackJsonpmulti-langs"]=this["webpackJsonpmulti-langs"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),i=n(3),a=n.n(i),r=(n(9),n(10),{FR:{title:"Bienvenue sur le site",txt:"D\xe9couvrez nos fonctionnalit\xe9s !"},EN:{title:"Welcome to the site",txt:"Discover our features !"},ES:{title:"Bienvenido al sitio",txt:"\xa1Descubra nuestras caracter\xedsticas!"}}),l=n(4),o=n(0),u=Object(c.createContext)(),j=navigator.language.slice(0,2).toUpperCase();-1===["EN","FR","ES"].indexOf(j)&&(j="EN");var d=function(t){var e=Object(c.useState)(j),n=Object(l.a)(e,2),s=n[0],i=n[1];return Object(o.jsx)(u.Provider,{value:{lang:s,toggleLang:function(t){i(t)}},children:t.children})};function g(){var t=Object(c.useContext)(u).lang;return Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h1",{className:"title",children:r[t].title}),Object(o.jsx)("p",{className:"content-txt",children:r[t].txt})]})}n(12);var v=n.p+"static/media/france.40c79af5.svg",x=n.p+"static/media/united-kingdom.2d19fed4.svg",b=n.p+"static/media/spain.32e1e489.svg";function f(){var t=Object(c.useContext)(u).toggleLang;return Object(o.jsxs)("div",{className:"container-langs",children:[Object(o.jsx)("img",{onClick:function(){return t("FR")},src:"/TranslateRv"+v,alt:"france"}),Object(o.jsx)("img",{onClick:function(){return t("EN")},src:"/TranslateRv"+x,alt:"english"}),Object(o.jsx)("img",{onClick:function(){return t("ES")},src:"/TranslateRv"+b,alt:"spain"})]})}var O=function(){return Object(o.jsxs)(d,{children:[Object(o.jsx)(f,{}),Object(o.jsx)(g,{})]})};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.16ee54f5.chunk.js.map
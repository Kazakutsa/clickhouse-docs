"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[86443],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),y=o,f=m["".concat(c,".").concat(y)]||m[y]||p[y]||s;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13853:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={},c="system.contributors",l={unversionedId:"zh/operations/system-tables/contributors",id:"zh/operations/system-tables/contributors",title:"system.contributors",description:"system-contributors}",source:"@site/docs/zh/operations/system-tables/contributors.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/contributors",permalink:"/zh/operations/system-tables/contributors",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/operations/system-tables/contributors.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"system.columns",permalink:"/zh/operations/system-tables/columns"},next:{title:"system.crash_log",permalink:"/zh/operations/system-tables/crash-log"}},u={},p=[],m={toc:p};function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system-contributors"},"system.contributors"),(0,s.kt)("p",null,"\u6b64\u7cfb\u7edf\u8868\u5305\u542b\u6709\u5173\u8d21\u732e\u8005\u7684\u4fe1\u606f\u3002\u6392\u5217\u987a\u5e8f\u662f\u5728\u67e5\u8be2\u6267\u884c\u65f6\u968f\u673a\u751f\u6210\u7684\u3002"),(0,s.kt)("p",null,"\u5217:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name")," (String) \u2014 git \u65e5\u5fd7\u4e2d\u7684\u8d21\u732e\u8005 (\u4f5c\u8005) \u540d\u5b57\u3002")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.contributors LIMIT 10\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Olga Khvostikova \u2502\n\u2502 Max Vetrov       \u2502\n\u2502 LiuYangkuan      \u2502\n\u2502 svladykin        \u2502\n\u2502 zamulla          \u2502\n\u2502 \u0160imon Podlipsk\xfd  \u2502\n\u2502 BayoNet          \u2502\n\u2502 Ilya Khomutov    \u2502\n\u2502 Amy Krishnevsky  \u2502\n\u2502 Loud_Scream      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"\u8981\u5728\u8868\u4e2d\u627e\u5230\u4f60\u81ea\u5df1\uff0c\u8bf7\u8fd9\u6837\u67e5\u8be2:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.contributors WHERE name = 'Olga Khvostikova'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Olga Khvostikova \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/system-tables/contributors"},"\u539f\u6587")," "))}y.isMDXComponent=!0}}]);
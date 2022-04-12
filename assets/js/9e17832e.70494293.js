"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[77946],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),o=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(r),f=a,k=m["".concat(i,".").concat(f)]||m[f]||c[f]||l;return r?n.createElement(k,p(p({ref:t},u),{},{components:r})):n.createElement(k,p({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var o=2;o<l;o++)p[o]=r[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},185:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),p=["components"],s={},i="system.grants",o={unversionedId:"ru/operations/system-tables/grants",id:"ru/operations/system-tables/grants",title:"system.grants",description:"system_tables-grants}",source:"@site/docs/ru/operations/system-tables/grants.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/grants",permalink:"/ru/operations/system-tables/grants",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/operations/system-tables/grants.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.functions",permalink:"/ru/operations/system-tables/functions"},next:{title:"system.graphite_retentions",permalink:"/ru/operations/system-tables/graphite_retentions"}},u={},c=[],m={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"system_tables-grants"},"system.grants"),(0,l.kt)("p",null,"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u0432 ClickHouse."),(0,l.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"user_name")," (",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0443\u0447\u0451\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"role_name")," (",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0420\u043e\u043b\u044c, \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u0430\u044f \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"access_type")," (",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0434\u043b\u044f \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ClickHouse.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"database")," (",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0418\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"table")," (",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0418\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"column")," (",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0418\u043c\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u0430, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u0441\u0442\u0443\u043f.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"is_partial_revoke")," (",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0431\u044b\u043b\u0438 \u043b\u0438 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u044b \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"0")," \u2014 \u0421\u0442\u0440\u043e\u043a\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0439 \u043e\u0442\u0437\u044b\u0432.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"1")," \u2014 \u0421\u0442\u0440\u043e\u043a\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0433\u0440\u0430\u043d\u0442.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"grant_option")," (",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u0441 \u043e\u043f\u0446\u0438\u0435\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH GRANT OPTION"),", \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c. ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/grant#grant-privigele-syntax"},"GRANT"),"."))))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[2631],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52330:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),s=["components"],u={},o="system.distribution_queue",l={unversionedId:"ru/operations/system-tables/distribution_queue",id:"ru/operations/system-tables/distribution_queue",title:"system.distribution_queue",description:"systemtables-distributionqueue}",source:"@site/docs/ru/operations/system-tables/distribution_queue.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/distribution_queue",permalink:"/ru/operations/system-tables/distribution_queue",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/operations/system-tables/distribution_queue.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.distributed_ddl_queue",permalink:"/ru/operations/system-tables/distributed_ddl_queue"},next:{title:"system.enabled_roles",permalink:"/ru/operations/system-tables/enabled-roles"}},p={},c=[],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-distribution_queue"},"system.distribution_queue"),(0,i.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u0438 \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u043d\u0430 \u0448\u0430\u0440\u0434\u044b. \u042d\u0442\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u043d\u043e\u0432\u044b\u0435 \u043a\u0443\u0441\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u043f\u0443\u0442\u0435\u043c \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u043d\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 Distributed \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0432 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435."),(0,i.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"database")," (",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"table")," (",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"data_path")," (",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u043f\u0443\u0442\u044c \u043a \u043f\u0430\u043f\u043a\u0435 \u0441 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0444\u0430\u0439\u043b\u0430\u043c\u0438.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"is_blocked")," (",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u0444\u043b\u0430\u0433, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u043d\u0430 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0443 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0430 \u0448\u0430\u0440\u0434\u044b.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"error_count")," (",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0448\u0438\u0431\u043e\u043a.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"data_files")," (",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 \u0432 \u043f\u0430\u043f\u043a\u0435.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"data_compressed_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u0436\u0430\u0442\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u0430\u0445 \u0432 \u0431\u0430\u0439\u0442\u0430\u0445.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"last_exception")," (",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432\u043e\u0437\u043d\u0438\u043a\u0448\u0435\u0439 \u043e\u0448\u0438\u0431\u043a\u0435, \u0435\u0441\u043b\u0438 \u0442\u0430\u043a\u043e\u0432\u044b\u0435 \u0438\u043c\u0435\u044e\u0442\u0441\u044f."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.distribution_queue LIMIT 1 FORMAT Vertical;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:              default\ntable:                 dist\ndata_path:             ./store/268/268bc070-3aad-4b1a-9cf2-4987580161af/default@127%2E0%2E0%2E2:9000/\nis_blocked:            1\nerror_count:           0\ndata_files:            1\ndata_compressed_bytes: 499\nlast_exception:\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/distributed"},"\u0414\u0432\u0438\u0436\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446 Distributed"))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[12777],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,k=m["".concat(o,".").concat(f)]||m[f]||c[f]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81144:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],s={sidebar_label:"FROM"},o="\u0421\u0435\u043a\u0446\u0438\u044f FROM",p={unversionedId:"ru/sql-reference/statements/select/from",id:"ru/sql-reference/statements/select/from",title:"\u0421\u0435\u043a\u0446\u0438\u044f FROM",description:"select-from}",source:"@site/docs/ru/sql-reference/statements/select/from.md",sourceDirName:"ru/sql-reference/statements/select",slug:"/ru/sql-reference/statements/select/from",permalink:"/ru/sql-reference/statements/select/from",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/statements/select/from.md",tags:[],version:"current",frontMatter:{sidebar_label:"FROM"},sidebar:"russia",previous:{title:"FORMAT",permalink:"/ru/sql-reference/statements/select/format"},next:{title:"GROUP BY",permalink:"/ru/sql-reference/statements/select/group-by"}},u={},c=[{value:"\u041c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 FINAL",id:"select-from-final",level:2},{value:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438",id:"drawbacks",level:3},{value:"\u0414\u0435\u0442\u0430\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",id:"implementation-details",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select-from"},"\u0421\u0435\u043a\u0446\u0438\u044f FROM"),(0,l.kt)("p",null,"\u0412 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM")," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u0443\u0434\u0443\u0442 \u0447\u0438\u0442\u0430\u0442\u044c\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0435:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/statements/select/"},"\u041f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441")," {## TODO: better link ##}"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/table-functions/#table-functions"},"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f"))),(0,l.kt)("p",null,"\u0421\u0435\u043a\u0446\u0438\u044f ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/select/join"},"JOIN")," \u0438 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/select/array-join"},"ARRAY JOIN")," \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u044b \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM"),"."),(0,l.kt)("p",null,"\u041f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441 \u2014 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0437\u0430\u043f\u0440\u043e\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d \u0432 \u043a\u0440\u0443\u0433\u043b\u044b\u0445 \u0441\u043a\u043e\u0431\u043a\u0430\u0445 \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM"),"."),(0,l.kt)("p",null,"\u0421\u0435\u043a\u0446\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM")," \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e, \u0447\u0442\u043e \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/select/join"},"CROSS JOIN")," \u043d\u0430 \u043d\u0438\u0445."),(0,l.kt)("h2",{id:"select-from-final"},"\u041c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 FINAL"),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 ",(0,l.kt)("inlineCode",{parentName:"p"},"FINAL"),", \u0442\u043e ClickHouse \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043c\u0451\u0440\u0436\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u0434 \u0432\u044b\u0434\u0430\u0447\u0435\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430, \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044f \u0432\u0441\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u0434\u0432\u0438\u0436\u043a\u043e\u043c \u0442\u0430\u0431\u043b\u0438\u0446 \u043f\u0440\u0438 \u043c\u0451\u0440\u0436\u0430\u0445."),(0,l.kt)("p",null,"\u041e\u043d \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c \u043f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 ",(0,l.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),"- \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e \u0434\u0432\u0438\u0436\u043a\u043e\u0432. \u0422\u0430\u043a\u0436\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/mergetree-family/replication"},"Replicated")," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"li"},"MergeTree")," \u0434\u0432\u0438\u0436\u043a\u043e\u0432."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/view"},"View"),", ",(0,l.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/buffer"},"Buffer"),", ",(0,l.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/distributed"},"Distributed"),", \u0438 ",(0,l.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/materializedview"},"MaterializedView"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043f\u043e\u0432\u0435\u0440\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u0434\u0432\u0438\u0436\u043a\u043e\u0432, \u0435\u0441\u043b\u0438 \u043e\u043d\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0441 \u0434\u0432\u0438\u0436\u043a\u0430\u043c\u0438 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"MergeTree"),".")),(0,l.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"FINAL")," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u043e \u0438, \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0431\u044b\u0441\u0442\u0440\u0435\u0435. \u041d\u043e \u0438\u043c\u0435\u044e\u0442\u0441\u044f \u0441\u0435\u0440\u044c\u0435\u0437\u043d\u044b\u0435 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438 \u043f\u0440\u0438 \u0438\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 (\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0438\u0436\u0435). \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/ru/operations/settings/#max-final-threads"},"max_final_threads")," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0442\u043e\u043a\u043e\u0432."),(0,l.kt)("h3",{id:"drawbacks"},"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438"),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"FINAL")," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043c\u0435\u0434\u043b\u0435\u043d\u0435\u0435, \u0447\u0435\u043c \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0431\u0435\u0437 \u043d\u0435\u0433\u043e, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0414\u0430\u043d\u043d\u044b\u0435 \u043c\u0451\u0440\u0436\u0430\u0442\u0441\u044f \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,l.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u0441 \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"li"},"FINAL")," \u0447\u0438\u0442\u0430\u044e\u0442 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430 \u0432 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u043c \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u0438\u0437\u0431\u0435\u0433\u0430\u0439\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"strong"},"FINAL"),".")," \u041e\u0431\u0449\u0438\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0442, \u0447\u0442\u043e \u0444\u043e\u043d\u043e\u0432\u044b\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b \u0434\u0432\u0438\u0436\u043a\u043e\u0432 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u0435\u0449\u0451 \u043d\u0435 \u0441\u043b\u0443\u0447\u0438\u043b\u0438\u0441\u044c  (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u0430\u043c\u0438 \u043e\u0442\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u044e\u0442 \u0434\u0443\u0431\u043b\u0438\u043a\u0430\u0442\u044b). {## TODO: examples ##}"),(0,l.kt)("h2",{id:"implementation-details"},"\u0414\u0435\u0442\u0430\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0441\u0435\u043a\u0446\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM")," \u043e\u043f\u0443\u0449\u0435\u043d\u0430, \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"system.one"),".\n\u0422\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"system.one")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0440\u043e\u0432\u043d\u043e \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u043e\u043a\u0443."),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0438\u0437 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0432\u044b\u043d\u0438\u043c\u0430\u044e\u0442\u0441\u044f \u0432\u0441\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435. \u0418\u0437 \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432\u044b\u043a\u0438\u0434\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u043d\u0435 \u043d\u0443\u0436\u043d\u044b\u0435 \u0434\u043b\u044f \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043d\u0435 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043e \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT count() FROM t)"),", \u0442\u043e \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432\u0441\u0451 \u0440\u0430\u0432\u043d\u043e \u0432\u044b\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u043a\u0430\u043a\u043e\u0439-\u043d\u0438\u0431\u0443\u0434\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446 (\u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u0441\u0430\u043c\u044b\u0439 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439), \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a."))}f.isMDXComponent=!0}}]);
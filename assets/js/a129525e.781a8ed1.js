"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[23386],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),g=i,f=c["".concat(p,".").concat(g)]||c[g]||m[g]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5537:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={sidebar_label:"\u0421\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e Log",sidebar_position:29},p="\u0421\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e Log",u={unversionedId:"ru/engines/table-engines/log-family/index",id:"ru/engines/table-engines/log-family/index",title:"\u0421\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e Log",description:"semeistvo-log}",source:"@site/docs/ru/engines/table-engines/log-family/index.md",sourceDirName:"ru/engines/table-engines/log-family",slug:"/ru/engines/table-engines/log-family/",permalink:"/ru/engines/table-engines/log-family/",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/engines/table-engines/log-family/index.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{sidebar_label:"\u0421\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e Log",sidebar_position:29},sidebar:"russia",previous:{title:"GraphiteMergeTree",permalink:"/ru/engines/table-engines/mergetree-family/graphitemergetree"},next:{title:"StripeLog",permalink:"/ru/engines/table-engines/log-family/stripelog"}},s={},m=[{value:"\u041e\u0431\u0449\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430",id:"obshchie-svoistva",level:2},{value:"\u041e\u0442\u043b\u0438\u0447\u0438\u044f",id:"otlichiia",level:2}],c={toc:m};function g(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"semeistvo-log"},"\u0421\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e Log"),(0,a.kt)("p",null,"\u0414\u0432\u0438\u0436\u043a\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u044b \u0434\u043b\u044f \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0431\u044b\u0441\u0442\u0440\u043e \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u0442\u0430\u0431\u043b\u0438\u0446 \u0441 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043e\u0431\u044a\u0451\u043c\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 (\u043c\u0435\u043d\u0435\u0435 1 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u0430 \u0441\u0442\u0440\u043e\u043a), \u0430 \u0437\u0430\u0442\u0435\u043c \u0447\u0438\u0442\u0430\u0442\u044c \u0438\u0445 \u0446\u0435\u043b\u0438\u043a\u043e\u043c."),(0,a.kt)("p",null,"\u0414\u0432\u0438\u0436\u043a\u0438 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/log-family/stripelog"},"StripeLog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/log-family/log"},"Log")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/log-family/tinylog"},"TinyLog"))),(0,a.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0435 \u0434\u0432\u0438\u0436\u043a\u0438 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"Log")," \u043c\u043e\u0433\u0443\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445 ",(0,a.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-hdfs"},"HDFS")," \u0438\u043b\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-s3"},"S3"),"."),(0,a.kt)("h2",{id:"obshchie-svoistva"},"\u041e\u0431\u0449\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"),(0,a.kt)("p",null,"\u0414\u0432\u0438\u0436\u043a\u0438:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u0425\u0440\u0430\u043d\u044f\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u0434\u0438\u0441\u043a\u0435.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043a\u043e\u043d\u0435\u0446 \u0444\u0430\u0439\u043b\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0438\u0441\u0438.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0434\u0430\u043d\u043d\u044b\u043c."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 `INSERT` \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0435\u0442\u0441\u044f, \u0430 \u0434\u0440\u0443\u0433\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0447\u0442\u0435\u043d\u0438\u0435 \u0438 \u0437\u0430\u043f\u0438\u0441\u044c \u043e\u0436\u0438\u0434\u0430\u044e\u0442 \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0415\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u0437\u0430\u043f\u0438\u0441\u044c \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435\u0442, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u0442\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u0447\u0442\u0435\u043d\u0438\u0435.\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u041d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/alter/#mutations"},"\u043c\u0443\u0442\u0430\u0446\u0438\u0438"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u041d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u0438\u043d\u0434\u0435\u043a\u0441\u044b."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"\u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u044b `SELECT` \u043d\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445.\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0430\u0442\u043e\u043c\u0430\u0440\u043d\u043e."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0441 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0451\u043d\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438, \u0435\u0441\u043b\u0438 \u0447\u0442\u043e-\u0442\u043e \u043f\u0440\u0435\u0440\u0432\u0451\u0442 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e \u0437\u0430\u043f\u0438\u0441\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0430\u0432\u0430\u0440\u0438\u0439\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u0430).\n")))),(0,a.kt)("h2",{id:"otlichiia"},"\u041e\u0442\u043b\u0438\u0447\u0438\u044f"),(0,a.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"TinyLog")," \u0441\u0430\u043c\u044b\u0439 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0432 \u0441\u0435\u043c\u044c\u0435 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0441\u0430\u043c\u044b\u0435 \u043d\u0438\u0437\u043a\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c. \u0414\u0432\u0438\u0436\u043e\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"TinyLog")," \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0447\u0442\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0442\u043e\u043a\u043e\u0432. \u0414\u0432\u0438\u0436\u043e\u043a \u0447\u0438\u0442\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435, \u0447\u0435\u043c \u043e\u0431\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u0434\u0432\u0438\u0436\u043a\u0430 \u0441 \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u044b\u043c \u0447\u0442\u0435\u043d\u0438\u0435\u043c, \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043f\u043e\u0447\u0442\u0438 \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0436\u0435 \u0434\u0435\u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0440\u043e\u0432, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0438 \u0434\u0432\u0438\u0436\u043e\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"Log"),", \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0445\u0440\u0430\u043d\u0438\u0442 \u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435. \u0415\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f\u0445 \u0441 \u043d\u0438\u0437\u043a\u043e\u0439 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u043e\u0439."),(0,a.kt)("p",null,"\u0414\u0432\u0438\u0436\u043a\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"Log")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"StripeLog")," \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u043e\u0435 \u0447\u0442\u0435\u043d\u0438\u0435. \u041f\u0440\u0438 \u0447\u0442\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, ClickHouse \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0442\u043e\u043a\u043e\u0432. \u041a\u0430\u0436\u0434\u044b\u0439 \u043f\u043e\u0442\u043e\u043a \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u0434\u0430\u043d\u043d\u044b\u0445. \u0414\u0432\u0438\u0436\u043e\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"Log")," \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435. \u0414\u0432\u0438\u0436\u043e\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"StripeLog")," \u0445\u0440\u0430\u043d\u0438\u0442 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043e\u0434\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0434\u0432\u0438\u0436\u043e\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"StripeLog")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043c\u0435\u043d\u044c\u0448\u0435 \u0434\u0435\u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0440\u043e\u0432 \u0432 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435, \u0430 \u0434\u0432\u0438\u0436\u043e\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"Log")," \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445."))}g.isMDXComponent=!0}}]);
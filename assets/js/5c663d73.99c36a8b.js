"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[23835],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74889:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={sidebar_position:49,sidebar_label:"PROJECTION"},p="\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043f\u0440\u043e\u0435\u043a\u0446\u0438\u044f\u043c\u0438",c={unversionedId:"ru/sql-reference/statements/alter/projection",id:"ru/sql-reference/statements/alter/projection",title:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043f\u0440\u043e\u0435\u043a\u0446\u0438\u044f\u043c\u0438",description:"manipulations-with-projections}",source:"@site/docs/ru/sql-reference/statements/alter/projection.md",sourceDirName:"ru/sql-reference/statements/alter",slug:"/ru/sql-reference/statements/alter/projection",permalink:"/ru/sql-reference/statements/alter/projection",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/statements/alter/projection.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{sidebar_position:49,sidebar_label:"PROJECTION"},sidebar:"russia",previous:{title:"SETTINGS PROFILE",permalink:"/ru/sql-reference/statements/alter/settings-profile"},next:{title:"VIEW",permalink:"/ru/sql-reference/statements/alter/view"}},s={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"manipulations-with-projections"},"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043f\u0440\u043e\u0435\u043a\u0446\u0438\u044f\u043c\u0438"),(0,i.kt)("p",null,"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 ",(0,i.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/mergetree-family/mergetree#projections"},"\u043f\u0440\u043e\u0435\u043a\u0446\u0438\u044f\u043c\u0438"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db].name ADD PROJECTION name ( SELECT <COLUMN LIST EXPR> [GROUP BY] [ORDER BY] )")," \u2014 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0446\u0438\u0438 \u0432 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db].name DROP PROJECTION name")," \u2014 \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0446\u0438\u0438 \u0438\u0437 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0444\u0430\u0439\u043b\u044b \u043f\u0440\u043e\u0435\u043a\u0446\u0438\u0438 \u0441 \u0434\u0438\u0441\u043a\u0430.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db.]table MATERIALIZE PROJECTION name IN PARTITION partition_name")," \u2014 \u043f\u0435\u0440\u0435\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u043f\u0440\u043e\u0435\u043a\u0446\u0438\u044e \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438. \u0420\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u043a\u0430\u043a ",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/alter/#mutations"},"\u043c\u0443\u0442\u0430\u0446\u0438\u044f"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db.]table CLEAR PROJECTION name IN PARTITION partition_name")," \u2014 \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0444\u0430\u0439\u043b\u044b \u043f\u0440\u043e\u0435\u043a\u0446\u0438\u0438 \u0441 \u0434\u0438\u0441\u043a\u0430 \u0431\u0435\u0437 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f."))),(0,i.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"ADD"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DROP")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"CLEAR")," \u2014 \u043b\u0435\u0433\u043a\u043e\u0432\u0435\u0441\u043d\u044b, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u043d\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u0435\u043d\u044f\u044e\u0442 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u044f\u044e\u0442 \u0444\u0430\u0439\u043b\u044b."),(0,i.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u0443\u044e\u0442\u0441\u044f, \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u0443\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0435\u043a\u0446\u0438\u0439 \u0432 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ZooKeeper."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":::note\n\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043f\u0440\u043e\u0435\u043a\u0446\u0438\u044f\u043c\u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0441 \u0434\u0432\u0438\u0436\u043a\u043e\u043c [`*MergeTree`](/ru/engines/table-engines/mergetree-family/mergetree) (\u0432\u043a\u043b\u044e\u0447\u0430\u044f [replicated](/ru/engines/table-engines/mergetree-family/replication) \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b).\n:::\n")))}f.isMDXComponent=!0}}]);
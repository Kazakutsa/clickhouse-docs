"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[45596],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=c(n),b=a,m=g["".concat(s,".").concat(b)]||g[b]||p[b]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},32722:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_position:7,sidebar_label:"SQLite"},s="SQLite",c={unversionedId:"zh/engines/table-engines/integrations/sqlite",id:"zh/engines/table-engines/integrations/sqlite",title:"SQLite",description:"sqlite}",source:"@site/docs/zh/engines/table-engines/integrations/sqlite.md",sourceDirName:"zh/engines/table-engines/integrations",slug:"/zh/engines/table-engines/integrations/sqlite",permalink:"/zh/engines/table-engines/integrations/sqlite",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/engines/table-engines/integrations/sqlite.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"SQLite"},sidebar:"chinese",previous:{title:"S3",permalink:"/zh/engines/table-engines/integrations/s3"},next:{title:"EmbeddedRocksDB",permalink:"/zh/engines/table-engines/integrations/embedded-rocksdb"}},u={},p=[{value:"\u521b\u5efa\u6570\u636e\u8868",id:"creating-a-table",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"usage-example",level:2}],g={toc:p};function b(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sqlite"},"SQLite"),(0,i.kt)("p",null,"\u8be5\u5f15\u64ce\u5141\u8bb8\u5bfc\u5165\u548c\u5bfc\u51fa\u6570\u636e\u5230SQLite\uff0c\u5e76\u652f\u6301\u67e5\u8be2SQLite\u8868\u76f4\u63a5\u4eceClickHouse\u3002"),(0,i.kt)("h2",{id:"creating-a-table"},"\u521b\u5efa\u6570\u636e\u8868"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"    CREATE TABLE [IF NOT EXISTS] [db.]table_name \n    (\n        name1 [type1], \n        name2 [type2], ...\n    ) ENGINE = SQLite('db_path', 'table')\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5f15\u64ce\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"db_path")," \u2014 SQLite\u6570\u636e\u5e93\u6587\u4ef6\u7684\u5177\u4f53\u8def\u5f84\u5730\u5740\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," \u2014 SQLite\u6570\u636e\u5e93\u4e2d\u7684\u8868\u540d\u3002")),(0,i.kt)("h2",{id:"usage-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,i.kt)("p",null,"\u663e\u793a\u521b\u5efa\u8868\u7684\u67e5\u8be2\u8bed\u53e5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE sqlite_db.table2;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"CREATE TABLE SQLite.table2\n( \n    `col1` Nullable(Int32), \n    `col2` Nullable(String)\n) \nENGINE = SQLite('sqlite.db','table2');\n")),(0,i.kt)("p",null,"\u4ece\u6570\u636e\u8868\u67e5\u8be2\u6570\u636e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM sqlite_db.table2 ORDER BY col1;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500col1\u2500\u252c\u2500col2\u2500\u2500\u2510\n\u2502    1 \u2502 text1 \u2502\n\u2502    2 \u2502 text2 \u2502\n\u2502    3 \u2502 text3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8be6\u89c1")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/engines/database-engines/sqlite"},"SQLite")," \u5f15\u64ce"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/table-functions/sqlite"},"sqlite")," \u8868\u65b9\u6cd5\u51fd\u6570")))}b.isMDXComponent=!0}}]);
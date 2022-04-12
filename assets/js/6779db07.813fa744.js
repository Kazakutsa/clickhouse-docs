"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[32110],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return N}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),N=l,d=m["".concat(p,".").concat(N)]||m[N]||u[N]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44259:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],o={},p="mysql",s={unversionedId:"zh/sql-reference/table-functions/mysql",id:"zh/sql-reference/table-functions/mysql",title:"mysql",description:"mysql}",source:"@site/docs/zh/sql-reference/table-functions/mysql.md",sourceDirName:"zh/sql-reference/table-functions",slug:"/zh/sql-reference/table-functions/mysql",permalink:"/zh/sql-reference/table-functions/mysql",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/sql-reference/table-functions/mysql.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"sqlite",permalink:"/zh/sql-reference/table-functions/sqlite"},next:{title:"remote, remoteSecure",permalink:"/zh/sql-reference/table-functions/remote"}},c={},u=[{value:"\u7528\u6cd5\u793a\u4f8b",id:"usage-example",level:2},{value:"\u53e6\u8bf7\u53c2\u9605",id:"see-also",level:2}],m={toc:u};function N(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql"},"mysql"),(0,r.kt)("p",null,"\u5141\u8bb8\u5bf9\u5b58\u50a8\u5728\u8fdc\u7a0bMySQL\u670d\u52a1\u5668\u4e0a\u7684\u6570\u636e\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u67e5\u8be2\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql('host:port', 'database', 'table', 'user', 'password'[, replace_query, 'on_duplicate_clause']);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"host:port")," \u2014 MySQL\u670d\u52a1\u5668\u5730\u5740.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"database")," \u2014 \u8fdc\u7a0b\u6570\u636e\u5e93\u540d\u79f0.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"table")," \u2014 \u8fdc\u7a0b\u8868\u540d\u79f0.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"user")," \u2014 MySQL\u7528\u6237.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"password")," \u2014 \u7528\u6237\u5bc6\u7801.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"replace_query")," \u2014 \u5c06INSERT INTO",(0,r.kt)("inlineCode",{parentName:"p"},"\u67e5\u8be2\u8f6c\u6362\u4e3a"),"REPLACE INTO",(0,r.kt)("inlineCode",{parentName:"p"},"\u7684\u6807\u5fd7\u3002\u5982\u679c "),"replace_query=1`\uff0c\u67e5\u8be2\u88ab\u66ff\u6362\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"on_duplicate_clause")," \u2014 \u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"ON DUPLICATE KEY on_duplicate_clause")," \u8868\u8fbe\u5f0f\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," \u67e5\u8be2\u3002\u660e\u786e\u89c4\u5b9a\u53ea\u80fd\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"replace_query = 0")," \uff0c\u5982\u679c\u4f60\u540c\u65f6\u8bbe\u7f6ereplace_query = 1",(0,r.kt)("inlineCode",{parentName:"p"},"\u548c"),"on_duplicate_clause`\uff0cClickHouse\u5c06\u4ea7\u751f\u5f02\u5e38\u3002"),(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT INTO t (c1,c2) VALUES ('a', 2) ON DUPLICATE KEY UPDATE c2 = c2 + 1")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"on_duplicate_clause"),"\u8fd9\u91cc\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE c2 = c2 + 1"),"\u3002\u8bf7\u67e5\u9605MySQL\u6587\u6863\uff0c\u6765\u627e\u5230\u53ef\u4ee5\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"ON DUPLICATE KEY"),"\u4e00\u8d77\u4f7f\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"on_duplicate_clause"),"\u5b50\u53e5\u3002"))),(0,r.kt)("p",null,"\u7b80\u5355\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," \u5b50\u53e5\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"=, !=, >, >=, <, <=")," \u5c06\u5373\u65f6\u5728MySQL\u670d\u52a1\u5668\u4e0a\u6267\u884c\u3002\u5176\u4f59\u7684\u6761\u4ef6\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"LIMIT")," \u53ea\u6709\u5728\u5bf9MySQL\u7684\u67e5\u8be2\u5b8c\u6210\u540e\uff0c\u624d\u4f1a\u5728ClickHouse\u4e2d\u6267\u884c\u91c7\u6837\u7ea6\u675f\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"|"),"\u5e76\u5217\u8fdb\u884c\u591a\u526f\u672c\u67e5\u8be2\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM mysql(`mysql{1|2|3}:3306`, 'mysql_database', 'mysql_table', 'user', 'password');\n")),(0,r.kt)("p",null,"\u6216"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM mysql(`mysql1:3306|mysql2:3306|mysql3:3306`, 'mysql_database', 'mysql_table', 'user', 'password');\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,r.kt)("p",null,"\u4e0e\u539f\u59cbMySQL\u8868\u5177\u6709\u76f8\u540c\u5217\u7684\u8868\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,'!!! note "\u6ce8\u610f"\n\u5728',(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u67e5\u8be2\u4e2d\u4e3a\u4e86\u533a\u5206",(0,r.kt)("inlineCode",{parentName:"p"},"mysql(...)"),"\u4e0e\u5e26\u6709\u5217\u540d\u5217\u8868\u7684\u8868\u540d\u7684\u8868\u51fd\u6570\uff0c\u4f60\u5fc5\u987b\u4f7f\u7528\u5173\u952e\u5b57",(0,r.kt)("inlineCode",{parentName:"p"},"FUNCTION"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"TABLE FUNCTION"),"\u3002\u67e5\u770b\u5982\u4e0b\u793a\u4f8b\u3002"),(0,r.kt)("h2",{id:"usage-example"},"\u7528\u6cd5\u793a\u4f8b"),(0,r.kt)("p",null,"MySQL\u4e2d\u7684\u8868:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"mysql> CREATE TABLE `test`.`test` (\n    ->   `int_id` INT NOT NULL AUTO_INCREMENT,\n    ->   `int_nullable` INT NULL DEFAULT NULL,\n    ->   `float` FLOAT NOT NULL,\n    ->   `float_nullable` FLOAT NULL DEFAULT NULL,\n    ->   PRIMARY KEY (`int_id`));\nQuery OK, 0 rows affected (0,09 sec)\n\nmysql> insert into test (`int_id`, `float`) VALUES (1,2);\nQuery OK, 1 row affected (0,00 sec)\n\nmysql> select * from test;\n+------+----------+-----+----------+\n| int_id | int_nullable | float | float_nullable |\n+------+----------+-----+----------+\n|      1 |         NULL |     2 |           NULL |\n+------+----------+-----+----------+\n1 row in set (0,00 sec)\n")),(0,r.kt)("p",null,"\u4eceClickHouse\u4e2d\u67e5\u8be2\u6570\u636e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mysql('localhost:3306', 'test', 'test', 'bayonet', '123')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500int_nullable\u2500\u252c\u2500float\u2500\u252c\u2500float_nullable\u2500\u2510\n\u2502      1 \u2502         \u1d3a\u1d41\u1d38\u1d38 \u2502     2 \u2502           \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u66ff\u6362\u548c\u63d2\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION mysql('localhost:3306', 'test', 'test', 'bayonet', '123', 1) (int_id, float) VALUES (1, 3);\nINSERT INTO TABLE FUNCTION mysql('localhost:3306', 'test', 'test', 'bayonet', '123', 0, 'UPDATE int_id = int_id + 1') (int_id, float) VALUES (1, 4);\nSELECT * FROM mysql('localhost:3306', 'test', 'test', 'bayonet', '123');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500float\u2500\u2510\n\u2502      1 \u2502     3 \u2502\n\u2502      2 \u2502     4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"see-also"},"\u53e6\u8bf7\u53c2\u9605"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/integrations/mysql"},"\u8be5 \u2018MySQL\u2019 \u8868\u5f15\u64ce")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources#dicts-external_dicts_dict_sources-mysql"},"\u4f7f\u7528MySQL\u4f5c\u4e3a\u5916\u90e8\u5b57\u5178\u7684\u6765\u6e90"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/table_functions/mysql/"},"\u539f\u59cb\u6587\u7ae0")," "))}N.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[48478],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return b}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),b=l,k=d["".concat(s,".").concat(b)]||d[b]||p[b]||r;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98662:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),i=["components"],o={sidebar_position:2,sidebar_label:"ODBC"},s="ODBC",c={unversionedId:"ru/engines/table-engines/integrations/odbc",id:"ru/engines/table-engines/integrations/odbc",title:"ODBC",description:"table-engine-odbc}",source:"@site/docs/ru/engines/table-engines/integrations/odbc.md",sourceDirName:"ru/engines/table-engines/integrations",slug:"/ru/engines/table-engines/integrations/odbc",permalink:"/ru/engines/table-engines/integrations/odbc",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/engines/table-engines/integrations/odbc.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"ODBC"},sidebar:"russia",previous:{title:"\u0414\u0432\u0438\u0436\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446 \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438",permalink:"/ru/engines/table-engines/integrations/"},next:{title:"JDBC",permalink:"/ru/engines/table-engines/integrations/jdbc"}},u={},p=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",id:"sozdanie-tablitsy",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"primer-ispolzovaniia",level:2},{value:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435",id:"smotrite-takzhe",level:2}],d={toc:p};function b(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"table-engine-odbc"},"ODBC"),(0,r.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 ClickHouse \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u0432\u043d\u0435\u0448\u043d\u0438\u043c \u0431\u0430\u0437\u0430\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open_Database_Connectivity"},"ODBC"),"."),(0,r.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 ODBC \u0431\u044b\u043b\u043e \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u043c, ClickHouse \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u0443\u044e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-odbc-bridge"),". \u0415\u0441\u043b\u0438 \u0434\u0440\u0430\u0439\u0432\u0435\u0440 ODBC \u043f\u043e\u0434\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0438\u0437 ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),", \u0442\u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u043e\u043c \u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0430\u0432\u0430\u0440\u0438\u0439\u043d\u043e\u0439 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse. ClickHouse \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-odbc-bridge")," \u043f\u043e \u043c\u0435\u0440\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438. \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0438\u0437 \u0442\u043e\u0433\u043e \u0436\u0435 \u043f\u0430\u043a\u0435\u0442\u0430, \u0447\u0442\u043e \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),"."),(0,r.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,r.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/integrations/odbc"},"Nullable"),"."),(0,r.kt)("h2",{id:"sozdanie-tablitsy"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1],\n    name2 [type2],\n    ...\n)\nENGINE = ODBC(connection_settings, external_database, external_table)\n")),(0,r.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,r.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/integrations/odbc#create-table-query"},"CREATE TABLE"),"."),(0,r.kt)("p",null,"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u043e\u0439 \u0421\u0423\u0411\u0414:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0418\u043c\u0435\u043d\u0430 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0442\u0430\u043a\u0438\u043c\u0438 \u0436\u0435, \u043a\u0430\u043a \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435, \u043d\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u044d\u0442\u0438\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0438 \u0432 \u043b\u044e\u0431\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435."),(0,r.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f\u044b \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0442\u0438\u043f\u043e\u0432 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435. ClickHouse \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f ",(0,r.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/odbc#type_conversion_function-cast"},"\u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u044c")," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a \u0442\u0438\u043f\u0430\u043c \u0434\u0430\u043d\u043d\u044b\u0445 ClickHouse."),(0,r.kt)("li",{parentName:"ul"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,r.kt)("a",{parentName:"li",href:"/ru/operations/settings/#external-table-functions-use-nulls"},"external_table_functions_use_nulls")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043a\u0430\u043a \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c Nullable \u0441\u0442\u043e\u043b\u0431\u0446\u044b. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 1. \u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 0, \u0442\u043e \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043d\u0435 \u0434\u0435\u043b\u0430\u0435\u0442 Nullable \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u0430 \u0432\u043c\u0435\u0441\u0442\u043e NULL \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u0441\u043a\u0430\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430. \u042d\u0442\u043e \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e \u0434\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 NULL \u0432\u043d\u0443\u0442\u0440\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connection_settings")," \u2014 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0435\u043a\u0446\u0438\u0438 \u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,r.kt)("inlineCode",{parentName:"li"},"odbc.ini"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"external_database")," \u2014 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u043e \u0432\u043d\u0435\u0448\u043d\u0435\u0439 \u0421\u0423\u0411\u0414."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"external_table")," \u2014 \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 ",(0,r.kt)("inlineCode",{parentName:"li"},"external_database"),".")),(0,r.kt)("h2",{id:"primer-ispolzovaniia"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0418\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 MySQL \u0447\u0435\u0440\u0435\u0437 ODBC")),(0,r.kt)("p",null,"\u042d\u0442\u043e\u0442 \u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u043b\u0441\u044f \u0432 Ubuntu Linux 18.04 \u0434\u043b\u044f MySQL server 5.7."),(0,r.kt)("p",null,"\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e unixODBC \u0438 MySQL Connector \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b."),(0,r.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e (\u0435\u0441\u043b\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0438\u0437 \u043f\u0430\u043a\u0435\u0442\u043e\u0432) ClickHouse \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u0438\u043c\u0435\u043d\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse"),". \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u044d\u0442\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 MySQL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo mysql\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE USER 'clickhouse'@'localhost' IDENTIFIED BY 'clickhouse';\nmysql> GRANT ALL PRIVILEGES ON *.* TO 'clickhouse'@'clickhouse' WITH GRANT OPTION;\n")),(0,r.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u043c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/odbc.ini"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat /etc/odbc.ini\n[mysqlconn]\nDRIVER = /usr/local/lib/libmyodbc5w.so\nSERVER = 127.0.0.1\nPORT = 3306\nDATABASE = test\nUSERNAME = clickhouse\nPASSWORD = clickhouse\n")),(0,r.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,r.kt)("inlineCode",{parentName:"p"},"isql")," \u0438\u0437 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 unixODBC."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ isql -v mysqlconn\n+---------------------------------------+\n| Connected!                            |\n|                                       |\n...\n")),(0,r.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0432 MySQL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"mysql> CREATE TABLE `test`.`test` (\n    ->   `int_id` INT NOT NULL AUTO_INCREMENT,\n    ->   `int_nullable` INT NULL DEFAULT NULL,\n    ->   `float` FLOAT NOT NULL,\n    ->   `float_nullable` FLOAT NULL DEFAULT NULL,\n    ->   PRIMARY KEY (`int_id`));\nQuery OK, 0 rows affected (0,09 sec)\n\nmysql> insert into test (`int_id`, `float`) VALUES (1,2);\nQuery OK, 1 row affected (0,00 sec)\n\nmysql> select * from test;\n+--------+--------------+-------+----------------+\n| int_id | int_nullable | float | float_nullable |\n+--------+--------------+-------+----------------+\n|      1 |         NULL |     2 |           NULL |\n+--------+--------------+-------+----------------+\n1 row in set (0,00 sec)\n")),(0,r.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0432 ClickHouse, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b MySQL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE odbc_t\n(\n    `int_id` Int32,\n    `float_nullable` Nullable(Float32)\n)\nENGINE = ODBC('DSN=mysqlconn', 'test', 'test')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM odbc_t\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500float_nullable\u2500\u2510\n\u2502      1 \u2502           \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"smotrite-takzhe"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/odbc#dicts-external_dicts_dict_sources-odbc"},"\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438 ODBC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/odbc"},"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f odbc"))))}b.isMDXComponent=!0}}]);
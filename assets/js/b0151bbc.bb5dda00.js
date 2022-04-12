"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[50059],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},o=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),o=u(t),k=i,c=o["".concat(s,".").concat(k)]||o[k]||m[k]||a;return t?r.createElement(c,l(l({ref:n},p),{},{components:t})):r.createElement(c,l({ref:n},p))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=o;var g={};for(var s in n)hasOwnProperty.call(n,s)&&(g[s]=n[s]);g.originalType=e,g.mdxType="string"==typeof e?e:i,l[1]=g;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}o.displayName="MDXCreateElement"},16642:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return g},metadata:function(){return u},toc:function(){return m}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],g={sidebar_label:"\u0414\u0432\u0438\u0436\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446",sidebar_position:26},s="\u0414\u0432\u0438\u0436\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446",u={unversionedId:"ru/engines/table-engines/index",id:"ru/engines/table-engines/index",title:"\u0414\u0432\u0438\u0436\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446",description:"table_engines}",source:"@site/docs/ru/engines/table-engines/index.md",sourceDirName:"ru/engines/table-engines",slug:"/ru/engines/table-engines/",permalink:"/ru/engines/table-engines/",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/engines/table-engines/index.md",tags:[],version:"current",sidebarPosition:26,frontMatter:{sidebar_label:"\u0414\u0432\u0438\u0436\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446",sidebar_position:26},sidebar:"russia",previous:{title:"Engines",permalink:"/category/engines"},next:{title:"MergeTree Family",permalink:"/ru/engines/table-engines/mergetree-family/"}},p={},m=[{value:"\u0421\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 \u0434\u0432\u0438\u0436\u043a\u043e\u0432",id:"engine-families",level:2},{value:"MergeTree",id:"mergetree",level:3},{value:"Log",id:"log",level:3},{value:"\u0414\u0432\u0438\u0436\u043a\u0438 \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438",id:"integration-engines",level:3},{value:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0432\u0438\u0436\u043a\u0438",id:"spetsialnye-dvizhki",level:3},{value:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0432\u0438\u0436\u043a\u0438",id:"special-engines",level:3},{value:"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b",id:"table_engines-virtual_columns",level:2}],o={toc:m};function k(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"table_engines"},"\u0414\u0432\u0438\u0436\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446"),(0,a.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b (\u0442\u0438\u043f \u0442\u0430\u0431\u043b\u0438\u0446\u044b) \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041a\u0430\u043a \u0438 \u0433\u0434\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0435, \u043a\u0443\u0434\u0430 \u0438\u0445 \u043f\u0438\u0441\u0430\u0442\u044c \u0438 \u043e\u0442\u043a\u0443\u0434\u0430 \u0447\u0438\u0442\u0430\u0442\u044c."),(0,a.kt)("li",{parentName:"ul"},"\u041a\u0430\u043a\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0438 \u043a\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c."),(0,a.kt)("li",{parentName:"ul"},"\u041a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0434\u0430\u043d\u043d\u044b\u043c."),(0,a.kt)("li",{parentName:"ul"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432, \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c."),(0,a.kt)("li",{parentName:"ul"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043b\u0438 \u043c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,a.kt)("li",{parentName:"ul"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,a.kt)("h2",{id:"engine-families"},"\u0421\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 \u0434\u0432\u0438\u0436\u043a\u043e\u0432"),(0,a.kt)("h3",{id:"mergetree"},"MergeTree"),(0,a.kt)("p",null,"\u041d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0435 \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0432\u0438\u0436\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446 \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u0447 \u0441 \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u043e\u0439. \u041e\u0431\u0449\u0438\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c \u044d\u0442\u0438\u0445 \u0434\u0432\u0438\u0436\u043a\u043e\u0432 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0431\u044b\u0441\u0442\u0440\u0430\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0444\u043e\u043d\u043e\u0432\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439 \u0434\u0430\u043d\u043d\u044b\u0445. \u0414\u0432\u0438\u0436\u043a\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"*MergeTree")," \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044e \u0434\u0430\u043d\u043d\u044b\u0445 (\u0432 ",(0,a.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/mergetree-family/replication#replication"},"Replicated","*")," \u0432\u0435\u0440\u0441\u0438\u044f\u0445 \u0434\u0432\u0438\u0436\u043a\u043e\u0432), \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u0434\u0432\u0438\u0436\u043a\u043e\u0432."),(0,a.kt)("p",null,"\u0414\u0432\u0438\u0436\u043a\u0438 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/mergetree-family/mergetree#mergetree"},"MergeTree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/mergetree-family/replacingmergetree#replacingmergetree"},"ReplacingMergeTree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/mergetree-family/summingmergetree#summingmergetree"},"SummingMergeTree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/mergetree-family/aggregatingmergetree#aggregatingmergetree"},"AggregatingMergeTree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/mergetree-family/collapsingmergetree#table_engine-collapsingmergetree"},"CollapsingMergeTree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/mergetree-family/versionedcollapsingmergetree#versionedcollapsingmergetree"},"VersionedCollapsingMergeTree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/mergetree-family/graphitemergetree#graphitemergetree"},"GraphiteMergeTree"))),(0,a.kt)("h3",{id:"log"},"Log"),(0,a.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u044b\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/log-family/"},"\u0434\u0432\u0438\u0436\u043a\u0438")," \u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e. \u041e\u043d\u0438 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b, \u043a\u043e\u0433\u0434\u0430 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 (\u0434\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e 1 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u0430 \u0441\u0442\u0440\u043e\u043a) \u0438 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0438\u0445 \u043f\u043e\u0437\u0436\u0435 \u0446\u0435\u043b\u0438\u043a\u043e\u043c."),(0,a.kt)("p",null,"\u0414\u0432\u0438\u0436\u043a\u0438 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/log-family/tinylog#tinylog"},"TinyLog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/log-family/stripelog#stripelog"},"StripeLog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/log-family/log#log"},"Log"))),(0,a.kt)("h3",{id:"integration-engines"},"\u0414\u0432\u0438\u0436\u043a\u0438 \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438"),(0,a.kt)("p",null,"\u0414\u0432\u0438\u0436\u043a\u0438 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c\u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("p",null,"\u0414\u0432\u0438\u0436\u043a\u0438 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/kafka#kafka"},"Kafka")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/mysql#mysql"},"MySQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/odbc#table-engine-odbc"},"ODBC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/jdbc#table-engine-jdbc"},"JDBC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/s3#table-engine-s3"},"S3"))),(0,a.kt)("h3",{id:"spetsialnye-dvizhki"},"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0432\u0438\u0436\u043a\u0438"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/odbc"},"ODBC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/jdbc"},"JDBC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/mysql"},"MySQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/mongodb"},"MongoDB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/hdfs"},"HDFS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/kafka"},"Kafka")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/embedded-rocksdb"},"EmbeddedRocksDB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/rabbitmq"},"RabbitMQ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/integrations/postgresql"},"PostgreSQL"))),(0,a.kt)("h3",{id:"special-engines"},"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0432\u0438\u0436\u043a\u0438"),(0,a.kt)("p",null,"\u0414\u0432\u0438\u0436\u043a\u0438 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/distributed#distributed"},"Distributed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/materializedview#materializedview"},"MaterializedView")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/dictionary#dictionary"},"Dictionary")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/merge#merge"},"Merge")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/file#file"},"File")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/null#null"},"Null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/set#set"},"Set")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/join#join"},"Join")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/url#table_engines-url"},"URL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/view#table_engines-view"},"View")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/memory#memory"},"Memory")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/engines/table-engines/special/buffer#buffer"},"Buffer"))),(0,a.kt)("h2",{id:"table_engines-virtual_columns"},"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b"),(0,a.kt)("p",null,"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u2014 \u044d\u0442\u043e \u043d\u0435\u043e\u0442\u044a\u0435\u043c\u043b\u0435\u043c\u044b\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0434\u0432\u0438\u0436\u043a\u0430 \u0442\u0430\u0431\u043b\u0438\u0446, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c \u043a\u043e\u0434\u0435 \u0434\u0432\u0438\u0436\u043a\u0430."),(0,a.kt)("p",null,"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u043d\u0435 \u043d\u0430\u0434\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," \u0438 \u043e\u043d\u0438 \u043d\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"DESCRIBE TABLE"),". \u0422\u0430\u043a\u0436\u0435 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0432 \u043d\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0435."),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0433\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT *")," \u043d\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432."),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u043c, \u0438\u043c\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c. \u041d\u0435 \u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0442\u0430\u043a. \u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043c\u043e\u0447\u044c \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u043e\u0432, \u0438\u043c\u0435\u043d\u0430 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043e\u0431\u044b\u0447\u043d\u043e \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u044f\u044e\u0442\u0441\u044f \u043f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u0435\u043c."))}k.isMDXComponent=!0}}]);
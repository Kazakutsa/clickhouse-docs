"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[13156],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},391:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={},o="query_thread_log",u={unversionedId:"en/operations/system-tables/query_thread_log",id:"en/operations/system-tables/query_thread_log",title:"query_thread_log",description:"systemtables-querythread_log}",source:"@site/docs/en/operations/system-tables/query_thread_log.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/query_thread_log",permalink:"/en/operations/system-tables/query_thread_log",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/operations/system-tables/query_thread_log.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"query_log",permalink:"/en/operations/system-tables/query_log"},next:{title:"query_views_log",permalink:"/en/operations/system-tables/query_views_log"}},p={},m=[],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-query_thread_log"},"query_thread_log"),(0,i.kt)("p",null,"Contains information about threads that execute queries, for example, thread name, thread start time, duration of query processing."),(0,i.kt)("p",null,"To start logging:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure parameters in the ",(0,i.kt)("a",{parentName:"li",href:"/en/operations/server-configuration-parameters/settings#server_configuration_parameters-query_thread_log"},"query_thread_log")," section."),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("a",{parentName:"li",href:"/en/operations/settings/#settings-log-query-threads"},"log_query_threads")," to 1.")),(0,i.kt)("p",null,"The flushing period of data is set in ",(0,i.kt)("inlineCode",{parentName:"p"},"flush_interval_milliseconds")," parameter of the ",(0,i.kt)("a",{parentName:"p",href:"/en/operations/server-configuration-parameters/settings#server_configuration_parameters-query_thread_log"},"query_thread_log")," server settings section. To force flushing, use the ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/system#query_language-system-flush_logs"},"SYSTEM FLUSH LOGS")," query."),(0,i.kt)("p",null,"ClickHouse does not delete data from the table automatically. See ",(0,i.kt)("a",{parentName:"p",href:"/en/operations/system-tables/#system-tables-introduction"},"Introduction")," for more details."),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("a",{parentName:"p",href:"/en/operations/settings/#log-queries-probability"},"log_queries_probability")," setting to reduce the number of queries, registered in the ",(0,i.kt)("inlineCode",{parentName:"p"},"query_thread_log")," table."),(0,i.kt)("p",null,"Columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/date"},"Date"),") \u2014 The date when the thread has finished execution of the query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 The date and time when the thread has finished execution of the query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time_microsecinds")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 The date and time when the thread has finished execution of the query with microseconds precision."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_start_time")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 Start time of query execution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_start_time_microseconds")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/datetime64"},"DateTime64"),") \u2014 Start time of query execution with microsecond precision."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_duration_ms")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Duration of query execution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read_rows")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Number of read rows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Number of read bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"written_rows")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 For ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT")," queries, the number of written rows. For other queries, the column value is 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"written_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 For ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT")," queries, the number of written bytes. For other queries, the column value is 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"memory_usage")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"Int64"),") \u2014 The difference between the amount of allocated and freed memory in context of this thread."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"peak_memory_usage")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"Int64"),") \u2014 The maximum difference between the amount of allocated and freed memory in context of this thread."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"thread_name")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the thread."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"thread_number")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Internal thread ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"thread_id")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"Int32"),") \u2014 thread ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"master_thread_id")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 OS initial ID of initial thread."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Query string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_initial_query")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Query type. Possible values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1 \u2014 Query was initiated by the client."),(0,i.kt)("li",{parentName:"ul"},"0 \u2014 Query was initiated by another query for distributed query execution."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the user who initiated the current query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_id")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 ID of the query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/domains/ipv6"},"IPv6"),") \u2014 IP address that was used to make the query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt16"),") \u2014 The client port that was used to make the query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initial_user")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the user who ran the initial query (for distributed query execution)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initial_query_id")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 ID of the initial query (for distributed query execution)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initial_address")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/domains/ipv6"},"IPv6"),") \u2014 IP address that the parent query was launched from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initial_port")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt16"),") \u2014 The client port that was used to make the parent query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"interface")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Interface that the query was initiated from. Possible values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1 \u2014 TCP."),(0,i.kt)("li",{parentName:"ul"},"2 \u2014 HTTP."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"os_user")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 OS\u2019s username who runs ",(0,i.kt)("a",{parentName:"li",href:"/en/interfaces/cli"},"clickhouse-client"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_hostname")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Hostname of the client machine where the ",(0,i.kt)("a",{parentName:"li",href:"/en/interfaces/cli"},"clickhouse-client")," or another TCP client is run."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_name")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 The ",(0,i.kt)("a",{parentName:"li",href:"/en/interfaces/cli"},"clickhouse-client")," or another TCP client name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_revision")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Revision of the ",(0,i.kt)("a",{parentName:"li",href:"/en/interfaces/cli"},"clickhouse-client")," or another TCP client."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_version_major")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Major version of the ",(0,i.kt)("a",{parentName:"li",href:"/en/interfaces/cli"},"clickhouse-client")," or another TCP client."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_version_minor")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Minor version of the ",(0,i.kt)("a",{parentName:"li",href:"/en/interfaces/cli"},"clickhouse-client")," or another TCP client."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_version_patch")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Patch component of the ",(0,i.kt)("a",{parentName:"li",href:"/en/interfaces/cli"},"clickhouse-client")," or another TCP client version."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http_method")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 HTTP method that initiated the query. Possible values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"0 \u2014 The query was launched from the TCP interface."),(0,i.kt)("li",{parentName:"ul"},"1 \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," method was used."),(0,i.kt)("li",{parentName:"ul"},"2 \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," method was used."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http_user_agent")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 The ",(0,i.kt)("inlineCode",{parentName:"li"},"UserAgent")," header passed in the HTTP request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"quota_key")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 The \u201cquota key\u201d specified in the ",(0,i.kt)("a",{parentName:"li",href:"/en/operations/quotas"},"quotas")," setting (see ",(0,i.kt)("inlineCode",{parentName:"li"},"keyed"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"revision")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 ClickHouse revision."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ProfileEvents")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/array"},"Map(String, UInt64)"),") \u2014 ProfileEvents that measure different metrics for this thread. The description of them could be found in the table ",(0,i.kt)("a",{parentName:"li",href:"#system_tables-events"},"system.events"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"}," SELECT * FROM system.query_thread_log LIMIT 1 \\G\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:                    2020-09-11\nevent_time:                    2020-09-11 10:08:17\nevent_time_microseconds:       2020-09-11 10:08:17.134042\nquery_start_time:              2020-09-11 10:08:17\nquery_start_time_microseconds: 2020-09-11 10:08:17.063150\nquery_duration_ms:             70\nread_rows:                     0\nread_bytes:                    0\nwritten_rows:                  1\nwritten_bytes:                 12\nmemory_usage:                  4300844\npeak_memory_usage:             4300844\nthread_name:                   TCPHandler\nthread_id:                     638133\nmaster_thread_id:              638133\nquery:                         INSERT INTO test1 VALUES\nis_initial_query:              1\nuser:                          default\nquery_id:                      50a320fd-85a8-49b8-8761-98a86bcbacef\naddress:                       ::ffff:127.0.0.1\nport:                          33452\ninitial_user:                  default\ninitial_query_id:              50a320fd-85a8-49b8-8761-98a86bcbacef\ninitial_address:               ::ffff:127.0.0.1\ninitial_port:                  33452\ninterface:                     1\nos_user:                       bharatnc\nclient_hostname:               tower\nclient_name:                   ClickHouse\nclient_revision:               54437\nclient_version_major:          20\nclient_version_minor:          7\nclient_version_patch:          2\nhttp_method:                   0\nhttp_user_agent:\nquota_key:\nrevision:                      54440\nProfileEvents:        {'Query':1,'SelectQuery':1,'ReadCompressedBytes':36,'CompressedReadBufferBlocks':1,'CompressedReadBufferBytes':10,'IOBufferAllocs':1,'IOBufferAllocBytes':89,'ContextLock':15,'RWLockAcquiredReadLocks':1}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/operations/system-tables/query_log#system_tables-query_log"},"system.query_log")," \u2014 Description of the ",(0,i.kt)("inlineCode",{parentName:"li"},"query_log")," system table which contains common information about queries execution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/operations/system-tables/query_views_log#system_tables-query_views_log"},"system.query_views_log")," \u2014 This table contains information about each view executed during a query.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/query_thread_log"},"Original article")," "))}d.isMDXComponent=!0}}]);
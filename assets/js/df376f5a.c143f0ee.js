"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[50567],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(t),m=a,g=f["".concat(i,".").concat(m)]||f[m]||l[m]||o;return t?n.createElement(g,u(u({ref:r},s),{},{components:t})):n.createElement(g,u({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var p=2;p<o;p++)u[p]=t[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},86618:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),u=["components"],c={sidebar_position:154},i="kurtSamp",p={unversionedId:"ru/sql-reference/aggregate-functions/reference/kurtsamp",id:"ru/sql-reference/aggregate-functions/reference/kurtsamp",title:"kurtSamp",description:"kurtsamp}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/kurtsamp.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/kurtsamp",permalink:"/ru/sql-reference/aggregate-functions/reference/kurtsamp",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/aggregate-functions/reference/kurtsamp.md",tags:[],version:"current",sidebarPosition:154,frontMatter:{sidebar_position:154},sidebar:"russia",previous:{title:"kurtPop",permalink:"/ru/sql-reference/aggregate-functions/reference/kurtpop"},next:{title:"uniq",permalink:"/ru/sql-reference/aggregate-functions/reference/uniq"}},s={},l=[],f={toc:l};function m(e){var r=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kurtsamp"},"kurtSamp"),(0,o.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 ",(0,o.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0_(%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F_%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%BA%D0%B8)"},"\u0432\u044b\u0431\u043e\u0440\u043e\u0447\u043d\u044b\u0439 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u044d\u043a\u0441\u0446\u0435\u0441\u0441\u0430")," \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438."),(0,o.kt)("p",null,"\u041e\u043d \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043d\u0435\u0441\u043c\u0435\u0449\u0435\u043d\u043d\u0443\u044e \u043e\u0446\u0435\u043d\u043a\u0443 \u044d\u043a\u0441\u0446\u0435\u0441\u0441\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0439 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u044b, \u0435\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0442 \u0435\u0435 \u0432\u044b\u0431\u043e\u0440\u043a\u0443."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"kurtSamp(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 ",(0,o.kt)("a",{parentName:"p",href:"/ru/sql-reference/syntax#syntax-expressions"},"\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),", \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,o.kt)("p",null,"\u041a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u044d\u043a\u0441\u0446\u0435\u0441\u0441\u0430 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f. \u0422\u0438\u043f \u2014 ",(0,o.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/float"},"Float64"),". \u0415\u0441\u043b\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"n <= 1")," (",(0,o.kt)("inlineCode",{parentName:"p"},"n")," \u2014 \u0440\u0430\u0437\u043c\u0435\u0440 \u0432\u044b\u0431\u043e\u0440\u043a\u0438), \u0442\u043e\u0433\u0434\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"nan"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT kurtSamp(value) FROM series_with_value_column;\n")))}m.isMDXComponent=!0}}]);
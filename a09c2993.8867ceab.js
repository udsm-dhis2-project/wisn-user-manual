(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(97)),i=["components"],s={id:"intro",title:"Introduction",sidebar_label:"Introduction",slug:"/"},c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Welcome to WISN + POA",source:"@site/docs/introduction.md",slug:"/",permalink:"/wisn-user-manual/docs/",editUrl:"https://github.com/udsm-dhis2-project/wisn-user-manual/edit/main/docs/introduction.md",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Home",permalink:"/wisn-user-manual/docs/home/home"}},l=[{value:"Background",id:"background",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"WISN + POA NATIONAL for Users",id:"wisn--poa-national-for-users",children:[]}],u={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"welcome-to-wisn--poa"},"Welcome to WISN + POA"),Object(a.b)("h3",{id:"background"},"Background"),Object(a.b)("p",null," As is the case seen in developing countries, Tanzania faces a huge issue of HRH supply and demand. In Tanzania,  based on the latest report from the Ministry of Health (MoH) there is a 48% shortage of healthcare workers. In order to  tackle this issue Touch Foundation in collaboration with the President\u2019s Office Regional Administration and Local  Government and USAID to develop the Prioritization and Optimization Analysis (POA) Tool. The tool aims to improve  HRH Planning and Management through utilization of data-driven tools. In particular, POA aims to support relevant  authorities (LGA\u2019s, Ministries etc.) in prioritizing and allocating of HRH staff of various cadres to health facilities based  on documented priorities and actual demands. POA is used along with WISN (Workload Indicators of Staffing Need);  a tool developed by the World Health Organization (WHO) as a human resource management and planning tool for  measuring service delivery workload of health workers in health facilities based on routinely collected service delivery  data. POA, therefore, leverages output reports from WISN for efficient prioritization and optimization functionalities. "),Object(a.b)("p",null," After success of developing and deploying the POA tool at the Local Government Authority (LGA)  level, Touch Foundation continued to facilitate creation of  an automated system for the national level government."),Object(a.b)("h3",{id:"purpose"},"Purpose"),Object(a.b)("p",null,"The purpose of WISN + POA SYSTEM user manual document is to provide guidelines to system users on how to use the system, their roles and permissions. The document further explains the dependency of different system users, their roles and permissions in different setups of DHIS2 platform."),Object(a.b)("h3",{id:"wisn--poa-national-for-users"},"WISN + POA NATIONAL for Users"),Object(a.b)("p",null,"All WISN + POA NATIONAL users must log into the system using their given username and passwords. No any user can get access to the system without having their accounts created and logged in correctly with a username and password that matches the one stored in the WISN + POA NATIONAL  database. Once on the internet and upon entering the correct address of the system, any WISN + POA NATIONAL  user will be directed to the login page (Figure).System can be reached through this URL: ",Object(a.b)("a",{parentName:"p",href:"https://wisnpoa.interactiveapps.org/national"},"https://wisnpoa.interactiveapps.org/national")))}d.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
(this["webpackJsonpcreate-groups-with-users"]=this["webpackJsonpcreate-groups-with-users"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),u=n.n(c),s=n(10),a=n.n(s),o=(n(17),n(3)),i=(n(18),u.a.createContext()),l=n(4),b=n(7),d=n(1),j=(n(19),function(e){var t=e.props,n=t.id,c=t.label,u=t.disabled,s=t.onClick;return Object(r.jsx)("button",{disabled:!!u,onClick:s,id:n,children:c})});n(20);function f(e){var t=e.list,n=e.updateGroup,c=e.removeGroup,u=e.sortGroup,s={id:"update",label:"Update",onClick:function(e,t){return n(e,t)}},a={id:"remove",label:"Remove"},o=["Name","Description","Users","Update","Remove"].map((function(e,t){return Object(r.jsx)("th",{onClick:function(t){return u(e)},children:e},t)}));return Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:o})}),Object(r.jsx)("tbody",{children:t.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.desc}),Object(r.jsx)("td",{children:e.users&&e.users.length>0?e.users.filter((function(e){return!0===e.selected})).map((function(e){return e.name})).join(", "):null}),Object(r.jsx)("td",{children:Object(r.jsx)(j,{props:Object(d.a)(Object(d.a)({},s),{},{onClick:function(t){return n(e)}})})}),Object(r.jsx)("td",{children:Object(r.jsx)(j,{props:Object(d.a)(Object(d.a)({},a),{},{onClick:function(t){return c(e,t)}})})})]},e.name)}))})]})}n(21);var p=function(e){var t=e.props,n=t.id,c=t.label,u=t.value,s=t.name,a=t.placeholder,o=t.onChange;return Object(r.jsxs)("div",{className:"input-wrapper",children:[c?Object(r.jsx)("label",{htmlFor:n,children:c}):null,Object(r.jsx)("input",{type:"search",name:s,id:n,value:u,placeholder:a,onChange:o})]})},O=(n(22),n(23),function(e){var t=e.user,n=e.toggleUser,c=t.Image,u=t.name;return Object(r.jsxs)("div",{onClick:n,className:"user"+(t.selected?" active":""),children:[Object(r.jsx)("img",{alt:"",src:c}),Object(r.jsx)("span",{children:u})]})}),A=(n(24),function(e){var t=e.list,n=e.toggleUser;return Object(r.jsx)("div",{id:"userList",children:t.map((function(e,t){return Object(r.jsx)(O,{toggleUser:function(t){return n(t,e)},user:e},t)}))})}),h=(n(25),function(e){return Object(r.jsx)(i.Consumer,{children:function(t){return t.showModal?Object(r.jsxs)("div",{className:"modal",children:[Object(r.jsx)("span",{id:"close",onClick:t.toggleModal,children:"X"}),e.children]}):null}})}),g=(n(26),n(9)),m=n.n(g),v=n(11),x="https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json",F=function(e){var t=e.addGroup,n=e.existingGroup,u=e.title,s=Object(c.useState)(n),a=Object(o.a)(s,2),i=a[0],f=a[1];Object(c.useEffect)((function(){f(n)}),[n]),function(e,t,n){var r=Object(c.useState)(null),u=Object(o.a)(r,2),s=u[0],a=u[1],i=Object(c.useState)(!1),l=Object(o.a)(i,2),b=l[0],d=l[1],j=Object(c.useState)(!1),f=Object(o.a)(j,2),p=f[0],O=f[1];Object(c.useEffect)((function(){!function(){var r=Object(v.a)(m.a.mark((function r(){var c,u;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,d(!0),r.next=4,fetch(e,t,n);case 4:if(!(c=r.sent)){r.next=12;break}return r.next=8,c.json();case 8:u=r.sent,a(u),n(u),d(!1);case 12:r.next=18;break;case 14:r.prev=14,r.t0=r.catch(0),O(!0),d(!1);case 18:case"end":return r.stop()}}),r,null,[[0,14]])})));return function(){return r.apply(this,arguments)}}()()}),[])}(x,null,(function(e){f((function(t){return Object(d.a)(Object(d.a)({},t),{},{users:0===n.users.length?e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{selected:!1})})):n.users})}))}));function O(e){var t=e.target,n=t.name,r=t.value;f((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(l.a)({},n,r))}))}var g={id:"name",label:"Name",placeholder:"Enter name",value:i.name,name:"name",onChange:function(e){return O(e)}},F={id:"desc",label:"Group Description",name:"desc",placeholder:"Enter description",value:i.desc,onChange:function(e){return O(e)}},C={id:"update",label:u,onClick:function(){t(i),f((function(e){return{users:e.users.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{selected:!1})})),name:"",desc:""}}))}};return Object(r.jsx)(h,{children:Object(r.jsxs)("div",{id:"modifyGroup",children:[Object(r.jsx)("h1",{className:"header",children:u}),Object(r.jsxs)("div",{id:"groupDtls",children:[Object(r.jsx)("img",{alt:"logo",src:"data:image/png;base64,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"}),Object(r.jsxs)("div",{id:"groupFields",children:[Object(r.jsx)(p,{props:g}),Object(r.jsx)(p,{props:F})]})]}),i.users?Object(r.jsx)(A,{list:i.users,toggleUser:function(e,t){return function(e,t){f((function(e){return Object(d.a)(Object(d.a)({},e),{},{users:(n=e.users,r=t,r.selected=!r.selected,n.find((function(e){return e.id===r.id}))?n.map((function(e){return e.id===r.id?Object(d.a)(Object(d.a)({},e),{},{selected:!r.selected}):e})):[].concat(Object(b.a)(n),[r]))});var n,r}))}(0,t)}}):null,Object(r.jsx)("div",{className:"buttons",children:Object(r.jsx)(j,{props:C})})]})})},C=function(){var e=Object(c.useState)({groups:[],filterGroups:[],filterInput:"",sortDescending:{Name:!1,Description:!1,Users:!1},currentGroup:{name:"",desc:"",users:[]},modalTitle:"Create Group"}),t=Object(o.a)(e,2),n=t[0],u=t[1],s=Object(c.useContext)(i),a={id:"update",label:"Create Group",onClick:function(){u((function(e){return Object(d.a)(Object(d.a)({},e),{},{currentGroup:{name:"",desc:"",users:e.currentGroup.users.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{selected:!1})}))},modalTitle:"Create Group"})})),!1===s.showModal&&s.toggleModal()}},O={id:"filter",name:"search",placeholder:"Search groups",value:n.filterInput,onChange:function(e){return h(e)}},A=function(e){return Array.isArray(e)?e.map((function(e){return e.name})).join(""):e},h=function(e){var t=e.target.value;u((function(e){return Object(d.a)(Object(d.a)({},e),{},{filterInput:t,filterGroups:e.groups.filter((function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1}))})}))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("header",{children:[Object(r.jsx)(p,{props:O}),Object(r.jsx)(j,{props:a})]}),Object(r.jsx)(f,{list:n.filterGroups,updateGroup:function(e){u((function(t){return Object(d.a)(Object(d.a)({},t),{},{currentGroup:e,modalTitle:"Update Group"})})),!1===s.showModal&&s.toggleModal()},sortGroup:function(e){var t,r={Name:"name",Description:"desc",Users:"users"}[e];t=n.sortDescending[e]?[].concat(n.groups).sort((function(e,t){return A(e[r])>A(t[r])?-1:1})):[].concat(n.groups).sort((function(e,t){return A(e[r])<A(t[r])?-1:1})),u((function(r){return Object(d.a)(Object(d.a)({},r),{},{groups:t,filterGroups:t,sortDescending:Object(d.a)(Object(d.a)({},r.sortDescending),{},Object(l.a)({},e,!n.sortDescending[e]))})}))},removeGroup:function(e){u((function(t){return Object(d.a)(Object(d.a)({},t),{},{groups:t.groups.filter((function(t){return t.name!==e.name})),filterGroups:t.groups.filter((function(t){return t.name!==e.name}))})}))}}),s.showModal?Object(r.jsx)(F,{existingGroup:n.currentGroup,addGroup:function(e){var t=n.groups,r=t.find((function(t){return t.name===e.name}));u((function(n){var c=r?t.map((function(t){return t.name===e.name?Object(d.a)(Object(d.a)({},t),{},{desc:e.desc,users:e.users}):t})):[].concat(Object(b.a)(n.groups),[Object(d.a)(Object(d.a)({},e),{},{users:e.users})]);return Object(d.a)(Object(d.a)({},n),{},{groups:c,filterGroups:c,modalTitle:"Create Group"})}))},title:n.modalTitle}):null]})};var G=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),n=t[0],u=t[1];return Object(r.jsx)(i.Provider,{value:{showModal:n,toggleModal:function(){return u((function(e){return!e}))}},children:Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(C,{})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,u=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),u(e),s(e)}))};a.a.render(Object(r.jsx)(u.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root")),N()}],[[28,1,2]]]);
//# sourceMappingURL=main.f9ac6764.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(14),r=n.n(i),s=(n(19),n(3)),o=(n(20),n(4)),l=n.n(o),u=(n(39),n(0));var d=function(e){return Object(u.jsx)("div",{className:"label ".concat(e.label.replace(" ","")),children:e.label})};n(41);var h=function(e){var t;return Object(u.jsxs)("div",{className:"ticket",children:[Object(u.jsx)("div",{className:"hideTicketButton",onClick:e.hideTicket,children:"Hide"}),Object(u.jsx)("h2",{children:e.ticket.title}),Object(u.jsx)("p",{children:e.ticket.content}),Object(u.jsx)("div",{className:"labelList",children:null===(t=e.labels)||void 0===t?void 0:t.map((function(e,t){return Object(u.jsx)(d,{label:e},t)}))}),Object(u.jsxs)("p",{className:"details",children:[Object(u.jsx)("span",{children:e.ticket.userEmail})," | ",Object(u.jsx)("span",{children:j(new Date(e.ticket.creationTime))})]})]})};function j(e){var t=e.getDate(),n=e.getMonth()+1,c=e.getFullYear(),a=e.getHours()>12?{hr:e.getHours()-12,ampm:"PM"}:{hr:e.getHours(),ampm:"AM"},i=a.hr,r=a.ampm,s=e.getMinutes(),o=e.getSeconds();return"".concat(t,"/").concat(n,"/").concat(c,", ").concat(i,":").concat(s,":").concat(o," ").concat(r)}n(42);var b=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],i=n[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("input",{id:"searchInput",type:"text",value:a,onChange:function(t){var n=t.target.value;i(n),e.searchHandler(n)},placeholder:"Enter search text"})})};var p=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),r=Object(s.a)(i,2),o=r[0],d=r[1];return Object(c.useEffect)((function(){l.a.get("/api/tickets").then((function(e){var t=e.data;return a(t)}))}),[]),Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("h1",{children:"Ticket Manager"}),Object(u.jsx)(b,{searchHandler:function(e){if("string"!==typeof e)throw new Error("search input must be of type String");l.a.get("/api/tickets?searchText="+e).then((function(e){var t=e.data;return a(t)}))}}),Object(u.jsxs)("div",{className:"ticketList",children:[Object(u.jsxs)("span",{className:"ticketListDetails",children:["showing ",n.length," results (",Object(u.jsx)("span",{id:"hideTicketsCounter",className:"hideTicketsCounter",children:o.length})," hidden - ",Object(u.jsx)("span",{id:"restoreHideTickets",onClick:function(){d([])},children:"restore"}),")"]}),n.map((function(e,t){return o.includes(t)?null:Object(u.jsx)(h,{ticket:e,labels:e.labels,hideTicket:function(){return e=t,void(o.includes(e)||d(o.concat([e])));var e}},t)}))]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.1e06f778.chunk.js.map
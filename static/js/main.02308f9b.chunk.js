(this["webpackJsonpcrazy-panda"]=this["webpackJsonpcrazy-panda"]||[]).push([[0],{21:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(14),s=n.n(r),i=(n(21),n(5)),l=n.n(i),o=n(15),u=n(3),j=n(16),b=n.n(j),d=(n(41),n(42),n(0)),h=function(e){var t=e.countries,n=e.loading,a=Object(c.useState)([]),r=Object(u.a)(a,2),s=r[0],i=r[1],l=Object(c.useState)(!1),o=Object(u.a)(l,2),j=o[0],b=o[1],h=Object(c.useState)(""),O=Object(u.a)(h,2),f=O[0],m=O[1];if(Object(c.useEffect)((function(){i(t)}),[t]),n)return Object(d.jsx)("h2",{children:"Loading..."});var p=function(e){if(b(!j),j){var n=t.concat().sort((function(t,n){return t[e]>n[e]?1:-1}));i(n)}else{var c=t.concat().sort((function(t,n){return t[e]<n[e]?1:-1}));i(c)}},x=s.filter((function(e){return e.name.toLowerCase().includes(f.toLowerCase())}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("form",{children:Object(d.jsxs)("div",{className:"form-group mb-3",children:[Object(d.jsx)("label",{className:"mb-1",children:"Search:"}),Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter search...",onChange:function(e){m(e.target.value)}})]})}),Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{className:"table-head",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"table-head-item",scope:"col",onClick:function(){p("area")},children:"Area"}),Object(d.jsx)("th",{className:"table-head-item",scope:"col",children:"Flag"}),Object(d.jsx)("th",{className:"table-head-item",scope:"col",onClick:function(){p("name")},children:"Country"}),Object(d.jsx)("th",{className:"table-head-item",scope:"col",onClick:function(){p("capital")},children:"Capital"}),Object(d.jsx)("th",{className:"table-head-item",scope:"col",onClick:function(){p("population")},children:"Population"})]})}),Object(d.jsx)("tbody",{children:x.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",children:e.area}),Object(d.jsx)("td",{children:Object(d.jsx)("img",{className:"ml-2",src:e.flag,alt:"flag",style:{width:25}})}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.capital}),Object(d.jsx)("td",{children:e.population})]},e.numericCode)}))})]})]})},O=(n(44),function(e){for(var t=e.countriesPerPage,n=e.totalCountries,c=e.paginate,a=e.currentPage,r=[],s=1;s<=Math.ceil(n/t);s++)r.push(s);return Object(d.jsx)("div",{children:Object(d.jsx)("ul",{className:"pagination",children:r.map((function(e){var t=a===e?"active":"";return Object(d.jsx)("li",{className:"page-item",children:Object(d.jsx)("button",{className:"page-link ".concat(t),onClick:function(){return c(e)},children:e})},e)}))})})});var f=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(u.a)(r,2),i=s[0],j=s[1],f=Object(c.useState)(1),m=Object(u.a)(f,2),p=m[0],x=m[1],g=Object(c.useState)(50),v=Object(u.a)(g,1)[0];Object(c.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,b.a.get("https://restcountries.eu/rest/v2/all");case 3:t=e.sent,a(t.data),j(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var C=p*v,N=C-v,P=n.slice(N,C),k=n.length/v;return Object(d.jsxs)("div",{className:"container mt-5",children:[Object(d.jsx)("h1",{className:"text-primary",children:"Countries"}),Object(d.jsx)(h,{countries:P,loading:i}),Object(d.jsx)(O,{currentPage:p,paginate:function(e){x(e)},countriesPerPage:v,totalCountries:n.length}),Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){return p<=1?null:x((function(e){return e-1}))},children:"Prev Page"}),Object(d.jsx)("button",{className:"btn btn-primary ms-2",onClick:function(){return p>=k?null:x((function(e){return e+1}))},children:"Next Page"})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),m()}},[[45,1,2]]]);
//# sourceMappingURL=main.02308f9b.chunk.js.map
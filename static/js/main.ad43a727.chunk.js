(this.webpackJsonpcontact_manager=this.webpackJsonpcontact_manager||[]).push([[0],{34:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(24),s=a.n(r),i=a(27),l=a(6),o=a(7),u=a.n(o),j=a(10),d=a(3),b=a(0);var m=function(){return Object(b.jsx)("div",{className:"ui segment",style:{background:"bisque"},children:Object(b.jsx)("h3",{className:"ui center aligned header",children:"Contact Manager"})})},O=a(2),h=a(8);var x=function(e){var t=Object(O.f)(),a=Object(n.useState)({name:"",email:""}),c=Object(d.a)(a,2),r=c[0],s=c[1];return Object(b.jsxs)("div",{className:"contact-form",children:[Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:Object(b.jsx)("h4",{children:"Add Contact"})}),Object(b.jsxs)("form",{className:"ui form",onSubmit:function(a){a.preventDefault(),""!==r.name&&""!==r.email?(e.addContactHandler(r),s({name:"",email:""}),t("/")):alert("All fields are mandatory!!!")},autoComplete:"off",children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:r.name,onChange:function(e){return s(Object(l.a)(Object(l.a)({},r),{},{name:e.target.value}))}})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:r.email,onChange:function(e){return s(Object(l.a)(Object(l.a)({},r),{},{email:e.target.value}))}})]}),Object(b.jsx)("button",{className:"ui button",type:"submit",children:"Submit"})]})]}),Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("button",{className:"ui button blue right floated",style:{marginTop:"10px"},children:"Contact List"})})]})},p=a.p+"static/media/user.a6143582.png";var f=function(e){var t=e.contact,a=t.id,n=t.name,c=t.email,r=Object(O.f)();return Object(b.jsxs)("div",{className:"item",id:a,style:{background:"#e5e5e5",marginBottom:"5px",padding:"10px"},onMouseOver:function(){document.getElementById(a).style.boxShadow="2px 2px 5px 2px grey"},onMouseOut:function(){document.getElementById(a).style.boxShadow=""},children:[Object(b.jsxs)("div",{className:"right floated content",children:[Object(b.jsx)("i",{className:"edit alternate outline icon",style:{color:"blue",marginTop:"7px",marginRight:"10px",cursor:"pointer"},onClick:function(){return r("/edit/".concat(a),{state:e.contact})}}),Object(b.jsx)("i",{className:"trash alternate outline icon",style:{color:"red",marginTop:"7px",cursor:"pointer"},onClick:function(){return function(t){window.confirm("Do you want to delete contact?")&&e.handleContact(t)}(a)}})]}),Object(b.jsx)("img",{className:"ui avatar image",src:p,alt:"user"}),Object(b.jsxs)("div",{className:"content",onClick:function(){r("/view/".concat(a),{state:e.contact})},style:{cursor:"pointer"},children:[Object(b.jsx)("div",{className:"header",children:n}),Object(b.jsx)("div",{className:"description",children:c})]})]})};var v=function(e){var t=e.contactList,a=e.removeContactHandler,n=function(e){a(e)},c=t.map((function(e){return Object(b.jsx)(f,{contact:e,handleContact:n},e.id)}));return Object(b.jsxs)("div",{className:"contacts",style:{margin:"60px 20px"},children:[Object(b.jsx)("h3",{children:"All Contacts:-"}),Object(b.jsxs)("div",{className:"ui search",children:[Object(b.jsxs)("div",{className:"ui icon input",style:{width:"50%"},children:[Object(b.jsx)("input",{type:"text",placeholder:"Search Contacts",className:"prompt",onChange:function(t){e.searchHandler(t.target.value)}}),Object(b.jsx)("i",{className:"search icon"})]}),Object(b.jsx)(h.b,{to:"/add",children:Object(b.jsx)("button",{className:"ui button green",style:{float:"right"},children:"Create new contact"})})]}),Object(b.jsx)("div",{className:"ui relaxed divided list",id:"list-items",style:{marginTop:"30px"},children:c.length>0?c:Object(b.jsx)("p",{style:{fontSize:"1.5em"},children:"No Contacts"})})]})};var g=function(e){var t=Object(O.e)();console.log(t.state);var a=t.state,n=a.name,c=a.email;return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"ui centered card",children:[Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("img",{src:p,alt:"user"})}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"header",children:n}),Object(b.jsx)("div",{className:"description",children:c})]}),Object(b.jsx)(h.b,{to:"/",className:"ui button blue",children:"Back to Contact List"})]})})},N=(a(34),a(25)),y=a(26),C=a.n(y).a.create({baseURL:"http://localhost:3006/"});var w=function(e){var t=Object(O.f)(),a=Object(O.e)().state,c=a.id,r=a.name,s=a.email,i=Object(n.useState)({id:c,name:r,email:s}),o=Object(d.a)(i,2),u=o[0],j=o[1];return Object(b.jsx)("div",{className:"contact-form",children:Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:Object(b.jsx)("h4",{children:"Edit Contact"})}),Object(b.jsxs)("form",{className:"ui form",onSubmit:function(a){a.preventDefault(),""!==u.name&&""!==u.email?(e.updateContactHandler(u),j({name:"",email:""}),t("/")):alert("All fields are mandatory!!!")},autoComplete:"off",children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:u.name,onChange:function(e){return j(Object(l.a)(Object(l.a)({},u),{},{name:e.target.value}))}})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:u.email,onChange:function(e){return j(Object(l.a)(Object(l.a)({},u),{},{email:e.target.value}))}})]}),Object(b.jsx)("button",{className:"ui button",type:"submit",children:"Submit"})]})]})})};var S=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(d.a)(r,2),o=s[0],p=s[1],f=Object(n.useState)([]),y=Object(d.a)(f,2),S=y[0],k=y[1],E=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("/contacts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(l.a)({id:Object(N.uuid)()},t),e.next=3,C.post("/contacts",n);case 3:r=e.sent,c([].concat(Object(i.a)(a),[r.data])),console.log(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.put("/contacts/".concat(t.id),t);case 2:n=e.sent,r=n.data.id,c(a.map((function(e){return e.id===r?Object(l.a)({},n.data):e})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.delete("/contacts/".concat(t));case 2:n=a.filter((function(e){return e.id!==t})),c(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:(t=e.sent)&&c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(n.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(a))}),[a]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(h.a,{children:[Object(b.jsx)(m,{}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{path:"/add",element:Object(b.jsx)(x,{addContactHandler:H})}),Object(b.jsx)(O.a,{path:"/edit/*",element:Object(b.jsx)(w,{updateContactHandler:L})}),Object(b.jsx)(O.a,{path:"/",element:Object(b.jsx)(v,{contactList:o.length<1?a:S,removeContactHandler:A,getContactDetails:function(e){return 0},searchHandler:function(e){if(p(e),""!==e){var t=a.filter((function(t){return Object.values(t).join(" ").toLowerCase().includes(e.toLowerCase())}));k(t)}else k(a)}})}),Object(b.jsx)(O.a,{path:"/view/:id",element:Object(b.jsx)(g,{})})]})]})})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.ad43a727.chunk.js.map
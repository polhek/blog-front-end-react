(this["webpackJsonpblog-frondend-react"]=this["webpackJsonpblog-frondend-react"]||[]).push([[0],{41:function(e,t,s){},42:function(e,t,s){},73:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(17),l=s.n(c),a=(s(41),s(42),s(12)),o=s(0),r=function(){return Object(o.jsxs)("header",{className:"bg-gray-700 flex justify-between h-14 p-10 items-center text-white ",children:[Object(o.jsx)("h1",{className:"font-bold text-2xl",children:"Blog-frontend"}),Object(o.jsx)(a.b,{to:"/admin",children:Object(o.jsx)("button",{className:"bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 shadow rounded-full",children:"Admin page"})})]})},i=s(5),d=s(4),u=s.n(d),j=s(8),b=s(18),h=function(e){var t=e.text,s=e.author,n=e.id,c=e.fetchAllComment,l=Object(j.c)((function(e){return e.loggedIn}));return Object(o.jsxs)("div",{className:"rounded bg-gray-100 p-3 mt-2 flex flex-col justify-center items-stretch",children:[Object(o.jsxs)("div",{className:"flex items-center justify-between",children:[Object(o.jsx)("p",{children:t}),Object(o.jsxs)("div",{className:"flex justify-end items-center",children:[Object(o.jsx)("span",{className:"font-bold mr-2",children:"By:"})," ",s]})]}),l&&Object(o.jsx)("div",{className:"mt-2 flex justify-end",children:Object(o.jsxs)("button",{onClick:function(){var e=localStorage.getItem("token");e&&u.a.delete("/api/comments/".concat(n,"/delete"),{headers:{Authorization:e}}).then((function(e){console.log(e),c()})).catch((function(e){return console.log(e)}))},className:"flex items-center bg-red-600 hover:bg-red-900 p-1 rounded-xl text-white",children:[Object(o.jsx)(b.b,{className:"mr-1"})," Delete comment!"]})})]})},m=function(e){var t=e.postID,s=e.fetchAllComment,c=Object(n.useState)(""),l=Object(i.a)(c,2),a=l[0],r=l[1],d=Object(n.useState)(""),j=Object(i.a)(d,2),b=j[0],h=j[1];return Object(o.jsx)("div",{className:"mt-2 p-3 flex flex-row w-full",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u.a.post("/api/comments/create",{text:b,author:a,postID:t}).then((function(e){h(""),r(""),s()}),(function(e){console.log(e)}))},className:"w-full",children:[Object(o.jsx)("h3",{className:"font-bold text-lg",children:"Add New Comment:"}),Object(o.jsxs)("div",{className:"flex flex-row m-2 items-center w-100",children:[Object(o.jsx)("label",{htmlFor:"username",className:"pr-5",children:"Username:"}),Object(o.jsx)("input",{className:"bg-gray-700 rounded-xl p-1 w-full text-white",value:a,onChange:function(e){r(e.target.value)},type:"text",placeholder:"Enter your username!",required:!0})]}),Object(o.jsxs)("div",{className:"flex flex-row m-2 items-center w-100",children:[Object(o.jsx)("label",{htmlFor:"comment ",className:"pr-5",children:"Comment:"}),Object(o.jsx)("input",{className:"bg-gray-700 rounded-xl p-1 w-full text-white",value:b,onChange:function(e){h(e.target.value)},placeholder:"Your comment goes here!",type:"text",required:!0})]}),Object(o.jsx)("button",{type:"submit",className:"flex flex-row items-center bg-gray-500 hover:bg-gray-800 rounded-full p-2 text-white  ",children:"Send comment!"})]})})},x=function(e){var t=e.postID,s=e.comments,n=e.showComments,c=e.fetchAllComment,l={visibility:n?"visible":"hidden",maxHeight:n?"100%":"0",opacity:n?1:0,transition:"all 0.5s ease-in-out"};return Object(o.jsxs)("div",{style:l,className:"bg-gray-200 p-5  rounded shadow ",children:[Object(o.jsx)("h3",{className:"font-bold",children:"Comments:"}),s&&s.map((function(e){return Object(o.jsx)(h,{text:e.text,author:e.author,id:e._id,fetchAllComment:c},e._id)})),Object(o.jsx)(m,{postID:t,fetchAllComment:c})]})},f=s(35),g=s.n(f),p=function(e){var t=e.post,s=e.fetchAllComment,c=Object(n.useState)(!1),l=Object(i.a)(c,2),a=l[0],r=l[1],d=new Date(t.createdAt),u={backgroundColor:!a&&"white",background:a?"none":"white"};return Object(o.jsxs)("div",{style:u,className:"w-100 w-3/5 flex flex-col mt-10 rounded",children:[Object(o.jsxs)("div",{className:"bg-white rounded-xl shadow ",children:[Object(o.jsxs)("div",{className:"flex justify-between p-5",children:[Object(o.jsxs)("h2",{children:["Title: ",t.title]}),Object(o.jsxs)("h2",{children:["Author: ",t.author.username]})]}),Object(o.jsx)("p",{className:"p-5",children:t.text}),Object(o.jsxs)("div",{className:"p-5 flex justify-between",children:[Object(o.jsxs)("button",{onClick:function(){r(!a)},className:"flex flex-row items-center bg-gray-500 hover:bg-gray-800 rounded-full p-2 text-white  ",children:[Object(o.jsx)(b.a,{className:"mr-2"})," ",t.comments.length]}),Object(o.jsxs)("h3",{children:["Created at:",Object(o.jsx)(g.a,{className:"px-1",format:"YYYY-MM-DD HH:mm",children:d})]})]})]}),Object(o.jsx)(x,{comments:t.comments,postID:t._id,showComments:a,fetchAllComment:s})]})},O=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1],l=Object(j.b)();Object(n.useEffect)((function(){a(),r()}),[]);var a=function(){u.a.get("/api/posts").then((function(e){c(e.data.posts)})).catch((function(e){console.log(e)}))},r=function(){var e=localStorage.getItem("token");u.a.get("/api/users/profile",{headers:{Authorization:e}}).then((function(e){var t=e.data;l({type:"SET_USER",payload:t})})).catch((function(e){console.log(e)}))};return Object(o.jsx)("div",{className:"flex justify-center flex-col items-center mt-10",children:s&&s.map((function(e){if(e.status)return Object(o.jsx)(p,{post:e,fetchAllComment:a},e._id)}))})},v=function(e){var t=e.post,s=e.fetchAdminComments,n=Object(j.c)((function(e){return e.user})),c=function(){console.log("lounched");var e=localStorage.getItem("token");e&&u.a.put("/api/posts/".concat(t._id,"/update"),{title:t.title,text:t.text,userID:n._id,status:!t.status},{headers:{Authorization:e},params:{id:t._id}}).then((function(e){console.log(e.status),s()})).catch((function(e){return console.log(e)}))};return Object(o.jsx)("div",{className:"bg-white flex rounded-xl  mt-10 p-5 shadow-xl border",children:Object(o.jsxs)("li",{className:"flex justify-around items-center",children:[Object(o.jsx)("span",{className:"font-bold",children:"Blog title:"})," ",t.title,Object(o.jsx)("span",{className:"mx-3 font-bold",children:"Published:"}),t.status?Object(o.jsx)("span",{className:"text-green-700 bg-green-100 rounded",children:"Yes"}):Object(o.jsx)("span",{className:"text-red-600 bg-red-100 rounded",children:"No"}),t.status?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"font-bold mx-4",children:"You want to unpublish this blog?"}),Object(o.jsx)("button",{onClick:c,className:"bg-red-600 p-1 rounded hover:bg-red-800 hover:shadow",children:Object(o.jsx)("span",{className:"text-white",children:"Unpublish blog!"})})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"font-bold mx-4",children:"You want to publish this blog?"}),Object(o.jsx)("button",{onClick:c,className:"bg-blue-600 p-1 rounded hover:bg-blue-800 hover:shadow",children:Object(o.jsx)("span",{className:"text-white",children:"Publish blog!"})})]}),Object(o.jsx)("p",{className:"font-bold mx-4",children:"You want to delete this blog?"}),Object(o.jsx)("button",{onClick:function(){console.log("delete lounched!!");var e=localStorage.getItem("token");e&&u.a.delete("/api/posts/".concat(t._id,"/delete"),{headers:{Authorization:e},params:{id:t._id}}).then((function(e){console.log(e.status),s()})).catch((function(e){console.log(e)}))},className:"bg-blue-600 p-1 rounded hover:bg-blue-800 hover:shadow",children:Object(o.jsx)("span",{className:"text-white",children:"Delete blog!"})})]})})},w=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1];Object(n.useEffect)((function(){l()}),[]);var l=function(){u.a.get("/api/posts").then((function(e){c(e.data.posts)})).catch((function(e){console.log(e)}))};return Object(o.jsxs)("div",{className:"flex justify-center w-100 flex-col items-center",children:[Object(o.jsx)("ol",{className:"list-decimal w-full flex flex-col items-center justify-center",children:s.map((function(e){return Object(o.jsx)(v,{post:e,fetchAdminComments:l},e._id)}))}),Object(o.jsx)("div",{className:"mt-40",children:Object(o.jsx)(a.b,{to:"/new-post",children:Object(o.jsx)("button",{className:"bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 shadow rounded-full",children:"New Blog Post"})})})]})},N=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],l=Object(n.useState)(""),a=Object(i.a)(l,2),r=a[0],d=a[1],b=Object(j.b)(),h=Object(j.c)((function(e){return e.loggedIn}));return h?h?Object(o.jsx)(w,{}):void 0:Object(o.jsx)("div",{className:"  flex justify-center",children:Object(o.jsx)("div",{className:"bg-white rounded-xl h-full  mt-52 p-5 shadow-xl border w-2/5",children:Object(o.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),b((t={username:s,password:r},function(e){u.a.post("https://fierce-everglades-07063.herokuapp.com/api/users/login",{username:t.username,password:t.password}).then((function(t){console.log(t.data),localStorage.setItem("token",t.data.token),e({type:"SET_USER",payload:t.data.user})}))}))},children:[Object(o.jsx)("h3",{className:"font-bold text-lg",children:"Enter Admin Username and Password:"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"username",children:"Admin username:"}),Object(o.jsx)("input",{className:"bg-gray-500 rounded p-1 text-white m-2 w-2/3",type:"text",value:s,onChange:function(e){c(e.target.value)},required:!0})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"password",children:"Admin password:"}),Object(o.jsx)("input",{className:"bg-gray-500 rounded p-1 text-white m-2 w-2/3",type:"password",value:r,onChange:function(e){d(e.target.value)},required:!0})]}),Object(o.jsx)("div",{className:"flex w-100 justify-center",children:Object(o.jsx)("button",{type:"submit",className:"flex flex-row items-center bg-gray-500 hover:bg-gray-800 rounded-full p-2 text-white  ",children:"Admin login!"})})]})})})},y=s(3),C=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],l=Object(n.useState)(""),a=Object(i.a)(l,2),r=a[0],d=a[1],b=Object(j.c)((function(e){return e.user})),h=Object(y.f)(),m=function(){var e=localStorage.getItem("token");e&&u.a.post("/api/posts/create",{title:s,text:r,userID:b._id},{headers:{Authorization:e}}).then((function(e){console.log(e.status),d(""),c(""),h.push("")})).catch((function(e){console.log(e)}))};return Object(o.jsx)("div",{className:"flex justify-center",children:Object(o.jsx)("div",{className:"mt-10 w-2/3",children:Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),m()},children:Object(o.jsxs)("div",{className:"bg-white p-10 rounded-xl shadow",children:[Object(o.jsx)("h3",{className:"font-bold text-3xl",children:"Add new blog-post:"}),Object(o.jsxs)("div",{className:"flex flex-col",children:[Object(o.jsx)("label",{htmlFor:"title",className:"font-bold",children:"Title of blogpost:"}),Object(o.jsx)("input",{type:"text",value:s,onChange:function(e){c(e.target.value)},className:"bg-gray-200 py-2 px-1 rounded",placeholder:"Enter title of blogpost",required:!0})]}),Object(o.jsxs)("div",{className:"flex flex-col",children:[Object(o.jsx)("label",{htmlFor:"text",className:"font-bold",children:"Blog text:"}),Object(o.jsx)("textarea",{type:"text",value:r,onChange:function(e){d(e.target.value)},className:"bg-gray-200 h-96 rounded p-1",required:!0})]}),Object(o.jsx)("button",{type:"submit",className:"mt-3 bg-blue-600 p-1 rounded hover:bg-blue-800 hover:shadow",children:Object(o.jsx)("span",{className:"text-white",children:"Add blogpost!"})})]})})})})};var S=function(){return Object(o.jsx)(a.a,{children:Object(o.jsxs)("div",{className:"bg-gray-300",children:[Object(o.jsx)(r,{}),Object(o.jsxs)(y.c,{children:[Object(o.jsx)(y.a,{path:"/admin",children:Object(o.jsx)(N,{})}),Object(o.jsx)(y.a,{path:"/new-post",children:Object(o.jsx)(C,{})}),Object(o.jsx)(y.a,{path:"",exact:!0,children:Object(o.jsx)(O,{})})]})]})})},A=s(14),I=s(15),k={loggedIn:!1,user:{}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(I.a)(Object(I.a)({},e),{},{loggedIn:!0,user:Object(I.a)({},t.payload)});case"LOG_OUT":return localStorage.clear(),Object(I.a)(Object(I.a)({},e),{},{loggedIn:!1,user:{}});default:return e}},_=s(36);u.a.defaults.baseURL="https://fierce-everglades-07063.herokuapp.com/";var E=Object(A.d)(D,Object(A.c)(Object(A.a)(_.a),window.devToolsExtension?window.devToolsExtension():function(e){return e}));l.a.render(Object(o.jsx)(j.a,{store:E,children:Object(o.jsx)(S,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.f75e8fed.chunk.js.map
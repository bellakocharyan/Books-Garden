(this["webpackJsonpteam-project"]=this["webpackJsonpteam-project"]||[]).push([[7],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),o=a(8),c=a(10),u=function(){var e=Object(n.useContext)(c.a).translate,t=Object(n.useState)(""),a=Object(r.a)(t,2),u=a[0],i=a[1],m=Object(n.useState)(""),s=Object(r.a)(m,2),p=s[0],d=s[1],E=Object(n.useState)(""),b=Object(r.a)(E,2),f=b[0],h=b[1],v=Object(n.useState)(""),g=Object(r.a)(v,2),j=g[0],O=g[1],k=Object(n.useState)(null),y=Object(r.a)(k,2),N=y[0],C=y[1],S=Object(n.useState)(""),T=Object(r.a)(S,2),w=T[0],q=T[1],x=Object(n.useState)(0),B=Object(r.a)(x,2),D=B[0],R=B[1];return l.a.createElement("form",{className:"admin-add-books",onSubmit:function(e){e.preventDefault(),o.b.ref("images/".concat(N.name)).put(N).on("state_changed",(function(e){var t=Math.floor(e.bytesTransferred/e.totalBytes*100);R(t)}),(function(e){console.log(e)}),(function(){o.b.ref("images").child(N.name).getDownloadURL().then((function(e){return q(e)}))})),o.a.firestore().collection("books").add({title:u,author:p,category:f,price:parseInt(j),URL:w}).then((function(){i(""),d(""),h(""),O(""),C(null),R(0),q("")}))}},l.a.createElement("h4",null,e("addBook")),l.a.createElement("div",{className:"float-left"},l.a.createElement("div",{className:"input-line"},l.a.createElement("label",null,"Title:"),l.a.createElement("br",null),l.a.createElement("input",{className:"add-book",type:"text",value:u,onChange:function(e){return i(e.currentTarget.value)},placeholder:"Enter book title...",required:!0})),l.a.createElement("div",{className:"input-line"},l.a.createElement("label",null,e("author"),":"),l.a.createElement("br",null),l.a.createElement("input",{className:"add-book",type:"text",value:p,onChange:function(e){return d(e.currentTarget.value)},placeholder:"Enter book author...",required:!0})),l.a.createElement("div",{className:"input-line"},l.a.createElement("label",null,e("price"),":"),l.a.createElement("br",null),l.a.createElement("input",{className:"add-book",type:"number",value:j,onChange:function(e){return O(e.currentTarget.value)},placeholder:"Enter price...",required:!0})),l.a.createElement("div",{className:"input-line"},l.a.createElement("label",null,"Category"),l.a.createElement("select",{value:f,onChange:function(e){return h(e.currentTarget.value)},required:!0},l.a.createElement("option",{value:""}," ----"),l.a.createElement("option",null," Biographies & Memoirs"),l.a.createElement("option",null," Children's Books"),l.a.createElement("option",null," Computers & Technology"),l.a.createElement("option",null," Education & Teaching"),l.a.createElement("option",null," History"),l.a.createElement("option",null," Action & Adventure"),l.a.createElement("option",null," Classics"),l.a.createElement("option",null," Detectives "),l.a.createElement("option",null," Dramas & Plays"),l.a.createElement("option",null," Fantasy"),l.a.createElement("option",null," Horror"),l.a.createElement("option",null," Romance"),l.a.createElement("option",null," ",e("novels"))))),l.a.createElement("div",{className:" float-left upload-img"},l.a.createElement("div",{className:"upload-img"},l.a.createElement("img",{src:w||"https://via.placeholder.com/100x120",alt:"Preveiw",height:"120",width:"100"}),l.a.createElement("br",null),l.a.createElement("progress",{value:D,max:"100"}),l.a.createElement("input",{type:"file",onChange:function(e){if(e.target.files[0]){var t=e.target.files[0];C(t);var a=new FileReader;a.onloadend=function(){q(a.result)},a.readAsDataURL(t)}},required:!0})),l.a.createElement("button",null,e("addBook"))))};function i(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(u,null))}a.d(t,"default",(function(){return i}))}}]);
//# sourceMappingURL=7.18612dd0.chunk.js.map
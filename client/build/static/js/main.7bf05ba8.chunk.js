(this.webpackJsonpgooglekeep=this.webpackJsonpgooglekeep||[]).push([[0],{163:function(e,t,c){},166:function(e,t,c){},168:function(e,t,c){},170:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(59),a=c.n(s),i=c(35),l=c(9),o=c(11),j=c.n(o),d=c(19),u=c(4),b=c(1);var p=function(){var e=(new Date).getFullYear();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("footer",{style:{backgroundColor:"#2c90c6",position:"fixed",bottom:0,padding:"3px"},className:"tagline",children:Object(b.jsxs)("p",{style:{color:"white"},children:["Copyright \xa9 ",e," | Developed By"," ",Object(b.jsxs)("span",{style:{backgroundColor:"#d8b91c",padding:"5px",color:"black",cursor:"pointer"},onClick:function(){return window.open("https://www.linkedin.com/in/enthuashu/")},children:["Ashutosh Mishra"," "]})," "]})})})},h=c.p+"static/media/logo.c1135f52.png",x=c(17),O=c.n(x),f=Object(n.createContext)();function g(e){var t=e.children,c=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),a=Object(u.a)(s,2),i=a[0],o=a[1],b=Object(n.useState)(!0),p=Object(u.a)(b,2),h=p[0],x=p[1],f=Object(l.f)(),g=Object(n.useState)(!1),m=Object(u.a)(g,2),v=m[0],y=m[1],w=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/user/logout").then((function(e){e.data.success&&(f("/"),o(!1),r(null))})).catch((function(){f("/")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function k(){return _.apply(this,arguments)}function _(){return(_=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,O()({method:"get",url:"/api/user/current"}).then((function(e){r({email:e.data.email,name:e.data.name,profilePic:e.data.profilePic}),o(!0),x(!1)})).catch((function(){o(!1),r(null),x(!1)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){k()}),[]),{isUser:i,user:c,setUser:r,signOut:w,sessionExpire:v,setSessionExpire:y,getUser:k,isLoading:h}}();return Object(b.jsx)(f.Provider,{value:c,children:t})}var m=function(){return Object(n.useContext)(f)};var v=function(){var e=m(),t=e.isUser,c=e.signOut,n=Object(l.f)();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{class:"navbar navbar-light",style:{backgroundColor:"#2c90c6"},children:Object(b.jsxs)("div",{class:"container-fluid",children:[Object(b.jsx)("div",{class:"navbar-logo",children:Object(b.jsx)("img",{onClick:function(){return n("/dashboard")},src:h,alt:"Test",width:"150",height:"60",style:{cursor:"pointer"}})}),t?Object(b.jsx)("button",{class:"btn text-dark",style:{background:"#f5d020",fontWeight:"bold"},type:"submit",onClick:function(){return c()},children:"LOG OUT"}):Object(b.jsx)("button",{class:"btn text-dark",style:{background:"#f5d020",fontWeight:"bold"},type:"submit",onClick:function(){return n("/register")},children:"GET STARTED"})]})})})},y=c(13),w=c(60),k=c.n(w),_=c(49),C=c.n(_),S=function(){var e=Object(l.f)(),t=m(),c=t.isUser,r=t.getUser,s=Object(n.useState)(""),a=Object(u.a)(s,2),i=a[0],o=a[1],x=Object(n.useState)(""),f=Object(u.a)(x,2),g=f[0],w=f[1],_=function(){var t=Object(d.a)(j.a.mark((function t(c){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,t.next=4,O.a.post("/api/user/login",{email:i,password:g});case 4:t.sent.data.success&&(r(),y.b.success("Logged in Successfully!"),e("/dashboard")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),y.b.error(t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return c&&e("/dashboard"),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{}),Object(b.jsx)("div",{className:"mt-4",children:Object(b.jsx)("img",{alt:"Test",src:h,height:"70"})}),Object(b.jsx)("p",{class:"texto mb-4",children:" Login"}),Object(b.jsx)("div",{class:"Registro",children:Object(b.jsxs)("form",{onSubmit:_,children:[Object(b.jsx)("span",{children:Object(b.jsx)(k.a,{})}),Object(b.jsx)("input",{type:"text",id:"email",required:!0,placeholder:"Enter Email",autocomplete:"off",value:i,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("span",{children:Object(b.jsx)(C.a,{})}),Object(b.jsx)("input",{type:"password",name:"password",id:"password",style:{marginBottom:"20px"},required:!0,placeholder:"Enter Password",autocomplete:"off",value:g,onChange:function(e){return w(e.target.value)}}),Object(b.jsx)("input",{type:"submit",value:"Login",title:"Login"}),Object(b.jsx)("p",{onClick:function(){return e("/register")},style:{cursor:"pointer",color:"grey"},children:"Not yet Registered? Register here"})]})}),Object(b.jsx)(p,{})]})},F=c(8),P=c(52),E=c(93),N=c.n(E),T=c(47),D=c(208),R=c(206),M=c(213),A=c(212),L=c(211),I=c(94),U=c.n(I);var B=function(e){var t=Object(n.useState)(!1),c=Object(u.a)(t,2),r=c[0],s=c[1],a=Object(n.useState)(""),i=Object(u.a)(a,2),l=i[0],o=i[1],p=Object(n.useState)(""),h=Object(u.a)(p,2),x=h[0],f=h[1],g=function(){var t=Object(d.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==x.length){t.next=2;break}return t.abrupt("return",y.b.error("Tweet field empty"));case 2:return t.prev=2,t.next=5,O.a.post("/api/user/addtweet",{title:l,content:x});case 5:t.sent.data.success&&(y.b.success("Tweet posted successfully!"),e.getTweets(),f(""),o("")),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),y.b.error(t.t0.response.data.error);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"main_note",children:Object(b.jsxs)("form",{className:"formnote",children:[r?Object(b.jsx)("input",{onChange:function(e){return o(e.target.value)},value:l,name:"title",type:"text",placeholder:"Title",autoComplete:"off",style:{color:"black"}}):null,Object(b.jsx)("textarea",{rows:"",column:"",onChange:function(e){return f(e.target.value)},onClick:function(){s(!0)},onDoubleClick:function(){s(!1)},value:x,name:"content",placeholder:"What's on your mind...",style:{color:"white"}}),r?Object(b.jsxs)("div",{class:"btn-holder",children:[" ",Object(b.jsx)("button",{type:"button",style:{float:"right",backgroundColor:"#f5d020"},onClick:function(){return g()},className:"btn",children:Object(b.jsx)(U.a,{})})]}):null]})})})},W=(c(39),c(61)),q=c.n(W),z=c(210),J=c(74),G=c.n(J),H=function(e){var t=G()(e),c=G()(),n=t.diff(c,"days");if(n<-1)return Math.abs(n)+" days ago";if(-1===n)return Math.abs(n)+" day ago";var r=parseFloat(t.diff(c,"minutes")/60);if(r<=-1){var s=Math.round(r);return 1==Math.abs(s)?Math.abs(s)+" hour ago":Math.abs(s)+" hours ago"}return Math.abs(Math.round(60*r))+" mins ago"},V=function(e){var t=e.tweets,c=e.handleDelete;return Object(b.jsx)("div",{children:Object(b.jsx)("div",{class:"cards",children:t.length>0?t.map((function(e,t){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{class:"card card-1",children:[Object(b.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"3px"},children:Object(b.jsx)(z.a,{src:e.id.profilePic})}),Object(b.jsx)("h1",{style:{fontWeight:"bold"},class:"card__title",children:e.title}),Object(b.jsx)("div",{class:"card__icon",children:Object(b.jsx)("i",{class:"fas fa-bolt"})}),Object(b.jsx)("p",{class:"card__exit",children:Object(b.jsx)("i",{class:"fas fa-times"})}),Object(b.jsx)("h2",{class:"card__title content",children:'"'.concat(e.content,'"')}),Object(b.jsx)("p",{class:"card__apply",children:Object(b.jsxs)("a",{style:{fontStyle:"italic"},class:"card__link",children:["- By ",e.id.name," ",Object(b.jsx)("i",{class:"fas fa-arrow-right"})]})}),Object(b.jsxs)("div",{class:"btn-holder",children:[" ",Object(b.jsx)("p",{style:{float:"right",fontSize:"12px",padding:"5px"},children:H(e.createdAt)}),Object(b.jsx)("button",{type:"button",style:{float:"left",backgroundColor:"#2c90c6",padding:"4px"},title:"Delete Tweet",onClick:function(){return c(e._id)},className:"btn",children:Object(b.jsx)(q.a,{style:{color:"black"}})})]})]},t)})})):null})})};var X=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/user/mytweets");case 2:t=e.sent,r(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Are you sure to delete this tweet?")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,O.a.delete("/api/user/delete/".concat(t));case 4:e.sent.data.success&&(y.b.success("Tweet deleted"),s());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(B,{getTweets:s}),Object(b.jsx)(V,{tweets:c,handleDelete:a})]})},Y=c(95),K=c.n(Y),Q=function(e){var t=e.tweets,c=e.handleFav;return Object(b.jsx)("div",{children:Object(b.jsx)("div",{class:"cards",children:t.length>0?t.map((function(e,t){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{class:"card dyno".concat(t%4),children:[Object(b.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"3px"},children:Object(b.jsx)(z.a,{src:e.id.profilePic})}),Object(b.jsx)("h1",{style:{fontWeight:"bold"},class:"card__title",children:e.title}),Object(b.jsx)("div",{class:"card__icon",children:Object(b.jsx)("i",{class:"fas fa-bolt"})}),Object(b.jsx)("p",{class:"card__exit",children:Object(b.jsx)("i",{class:"fas fa-times"})}),Object(b.jsx)("h2",{class:"card__title content",children:'"'.concat(e.content,'"')}),Object(b.jsx)("p",{class:"card__apply",children:Object(b.jsxs)("a",{style:{fontStyle:"italic"},class:"card__link",children:["- By ",e.id.name," ",Object(b.jsx)("i",{class:"fas fa-arrow-right"})]})}),Object(b.jsxs)("div",{class:"btn-holder",children:[" ",Object(b.jsx)("p",{style:{float:"right",fontSize:"12px",padding:"4px 0px 0px 0px"},children:H(e.createdAt)}),Object(b.jsx)("button",{type:"button",style:{float:"left",backgroundColor:"#0cbaba",padding:"4px"},title:"Save in Favourites",onClick:function(){return c(e._id,e.id._id)},className:"btn",children:Object(b.jsx)(K.a,{style:{color:"yellow"}})})]})]},t)})})):null})})};var Z=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/user/alltweets");case 2:t=e.sent,r(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(d.a)(j.a.mark((function e(t,c){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/user/fav/".concat(t,"/").concat(c));case 2:(n=e.sent).data.success&&y.b.success(n.data.message);case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(Q,{tweets:c,handleFav:a})})},$=function(e){var t=e.tweets,c=e.handleDelete;return Object(b.jsx)("div",{children:Object(b.jsx)("div",{class:"cards",children:t.length>0?t.map((function(e,t){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{class:"card dyno".concat(t%4),children:[Object(b.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"3px"},children:Object(b.jsx)(z.a,{src:e.tweetedby.profilePic})}),Object(b.jsx)("h1",{style:{fontWeight:"bold"},class:"card__title",children:e.tweetid.title}),Object(b.jsx)("div",{class:"card__icon",children:Object(b.jsx)("i",{class:"fas fa-bolt"})}),Object(b.jsx)("p",{class:"card__exit",children:Object(b.jsx)("i",{class:"fas fa-times"})}),Object(b.jsx)("h2",{class:"card__title content",children:'"'.concat(e.tweetid.content,'"')}),Object(b.jsx)("p",{class:"card__apply",children:Object(b.jsxs)("a",{style:{fontStyle:"italic"},class:"card__link",children:["- By ",e.tweetedby.name," ",Object(b.jsx)("i",{class:"fas fa-arrow-right"})]})}),Object(b.jsxs)("div",{class:"btn-holder",children:[" ",Object(b.jsx)("p",{style:{float:"right",fontSize:"12px",padding:"5px"},children:H(e.createdAt)}),Object(b.jsx)("button",{type:"button",style:{float:"left",backgroundColor:"#2c90c6",padding:"4px"},title:"Delete Tweet",onClick:function(){return c(e._id)},className:"btn",children:Object(b.jsx)(q.a,{style:{color:"black"}})})]})]},t)})})):Object(b.jsx)("h1",{children:"No Tweets yet added"})})})};var ee=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/user/favtweets");case 2:t=e.sent,r(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Are you sure to remove this tweet?")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,O.a.delete("/api/user/deletefav/".concat(t));case 4:e.sent.data.success&&(y.b.success("Tweet removed"),s());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)($,{tweets:c,handleDelete:a})})},te=(c(163),c(96)),ce=c.n(te),ne=c.p+"static/media/about.204642d3.jpeg",re=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{class:"card-container mb-4 developer",children:[Object(b.jsx)("span",{class:"pro",children:"DEVELOPER"}),Object(b.jsx)("img",{height:170,width:170,class:"round ",src:ne,alt:"user"}),Object(b.jsx)("h3",{style:{margin:"10px 0",fontWeight:"bold"},children:"Ashutosh Mishra"}),Object(b.jsx)("h6",{style:{margin:"5px 0"},children:"Gorakhpur, UP, India"}),Object(b.jsx)("p",{style:{fontSize:"14px",lineHeight:"21px"},children:"Full Stack MERN Developer"}),Object(b.jsx)("div",{class:"buttons",children:Object(b.jsxs)("button",{onClick:function(){return window.open("https://www.linkedin.com/in/enthuashu/")},class:"primary mt-2",children:[Object(b.jsx)(ce.a,{})," Linkedin"]})}),Object(b.jsxs)("div",{class:"skills",children:[Object(b.jsx)("h6",{children:"Skills"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"REACTJS"}),Object(b.jsx)("li",{children:"NODEJS"}),Object(b.jsx)("li",{children:"EXPRESSJS"}),Object(b.jsx)("li",{children:"MONGODB"}),Object(b.jsx)("li",{children:"REDUX"}),Object(b.jsx)("br",{}),Object(b.jsx)("li",{children:"SOCKET"}),Object(b.jsx)("li",{children:"AWS"}),Object(b.jsx)("li",{children:"JAVASCRIPT"}),Object(b.jsx)("li",{children:"C++"}),Object(b.jsx)("li",{children:"HTML"}),Object(b.jsx)("li",{children:"CSS"})]})]})]})})},se=function(){var e=m().user,t=Object(n.useState)(0),c=Object(u.a)(t,2),r=c[0],s=c[1],a=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/user/number");case 2:t=e.sent,s(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a()})),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{class:"container  d-flex justify-content-center",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("div",{class:"our-team",children:[Object(b.jsx)("div",{class:"picture",children:Object(b.jsx)("img",{class:"img-fluid",src:e.profilePic})}),Object(b.jsxs)("div",{class:"team-content",children:[Object(b.jsx)("h3",{class:"title",children:e.name}),Object(b.jsx)("h4",{class:"name",children:e.email}),Object(b.jsxs)("h4",{style:{color:"white",padding:"2px"},class:"name",children:[" ",r," tweets posted"]})]}),Object(b.jsx)("ul",{class:"social"})]})}),Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsx)(re,{})})]})})})};function ae(e){var t=e.children,c=e.value,n=e.index,r=Object(P.a)(e,["children","value","index"]);return Object(b.jsx)("div",Object(F.a)(Object(F.a)({role:"tabpanel",hidden:c!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},r),{},{children:c===n&&Object(b.jsx)(L.a,{sx:{p:3},children:Object(b.jsx)(A.a,{children:t})})}))}function ie(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}function le(){var e=Object(T.a)(),t=r.a.useState(0),c=Object(u.a)(t,2),n=c[0],s=c[1],a=Object(l.f)();if(!m().isUser)return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"You have been logged out,Please Log in..."}),Object(b.jsx)("input",{onClick:function(){return a("/")},type:"submit",style:{backgroundColor:"purple",width:"auto",padding:"5px 20px",color:"white"},value:"Login",title:"Login"})]});return Object(b.jsxs)(L.a,{sx:{bgcolor:"background.paper",width:"100%"},children:[Object(b.jsx)(D.a,{position:"static",children:Object(b.jsxs)(R.a,{value:n,onChange:function(e,t){s(t)},indicatorColor:"primary",style:{background:"#f5d020",color:"black"},textColor:"black",variant:"fullWidth","aria-label":"full width tabs example",children:[Object(b.jsx)(M.a,Object(F.a)({label:"Feed"},ie(0))),Object(b.jsx)(M.a,Object(F.a)({label:"My Tweets"},ie(1))),Object(b.jsx)(M.a,Object(F.a)({label:"Favourites"},ie(2))),Object(b.jsx)(M.a,Object(F.a)({label:"Profile"},ie(3)))]})}),Object(b.jsxs)(N.a,{axis:"rtl"===e.direction?"x-reverse":"x",index:n,onChangeIndex:function(e){s(e)},children:[Object(b.jsx)(ae,{value:n,index:0,dir:e.direction,children:Object(b.jsx)(Z,{})}),Object(b.jsx)(ae,{value:n,index:1,dir:e.direction,children:Object(b.jsx)(X,{})}),Object(b.jsx)(ae,{value:n,index:2,dir:e.direction,children:Object(b.jsx)(ee,{})}),Object(b.jsx)(ae,{value:n,index:3,dir:e.direction,children:Object(b.jsx)(se,{})})]})]})}c(166);var oe=c(214),je=c(97),de=c.n(je),ue=function(){var e=Object(l.f)(),t=Object(n.useState)(""),c=Object(u.a)(t,2),r=c[0],s=c[1],a=Object(n.useState)(""),i=Object(u.a)(a,2),o=i[0],x=i[1],f=Object(n.useState)(""),g=Object(u.a)(f,2),m=g[0],w=g[1],_=Object(n.useState)(""),S=Object(u.a)(_,2),F=S[0],P=S[1],E=Object(n.useState)(!1),N=Object(u.a)(E,2),T=N[0],D=N[1],R=Object(n.useState)(null),M=Object(u.a)(R,2),A=M[0],L=M[1],I=function(){var t=Object(d.a)(j.a.mark((function t(c){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),t.prev=1,null!==A){t.next=4;break}return t.abrupt("return",y.b.error("Upload profile picture"));case 4:if(!(m.length<5)){t.next=6;break}return t.abrupt("return",y.b.error("Password should be atleast 6 characters"));case 6:if(m===F){t.next=8;break}return t.abrupt("return",y.b.error("Incorrect confirm password"));case 8:return t.next=10,O.a.post("/api/user/signup",{name:r,email:o,password:m,profilePic:A});case 10:t.sent.data.success&&(y.b.success("Successfully Registered!"),e("/")),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),y.b.error(t.t0.response.data.error);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{}),Object(b.jsx)("div",{className:"mt-2",children:Object(b.jsx)("img",{alt:"Profilepic",src:h,height:"70"})}),Object(b.jsx)("p",{class:"texto mb-4",children:" Register"}),Object(b.jsx)("div",{class:"Registro",children:Object(b.jsxs)("form",{onSubmit:I,children:[Object(b.jsx)("div",{className:"register_page_form_upload",children:T?Object(b.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"5px",margin:"10px"},children:Object(b.jsx)(oe.a,{})}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{style:{fontWeight:"bold"},className:"text-dark",children:"Profile Picture"}),A?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"5px"},className:"profile_pic_block",children:Object(b.jsx)(z.a,{alt:"Profile Pic",src:A,sx:{width:60,height:60},variant:"rounded"})}),Object(b.jsx)("p",{className:"text-dark mt-2",onClick:function(){return L(null)},style:{cursor:"pointer"},children:"Delete"})]}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("label",{htmlFor:"clogo",children:[Object(b.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"5px"},className:"register_page_form_com_logo",onClick:{},children:Object(b.jsx)(z.a,{alt:"Profile Pic",sx:{width:60,height:60},variant:"rounded"})}),Object(b.jsx)("input",{type:"file",accept:"image/*",name:"profile_pic",id:"clogo",onChange:function(e){return function(e){var t=e.target.files[0];if(console.log(t),"image/jpg"===t.type||"image/png"===t.type||"image/jpeg"===t.type)if(t.size>2097152)y.b.error("File size exceeded 2MB!",{position:"bottom-right"});else{var c=new FormData;c.append("file",t),c.append("upload_preset","qvdaphyj"),c.append("cloud_name","enthuashu"),D(!0),O.a.post("https://api.cloudinary.com/v1_1/enthuashu/image/upload",c).then((function(e){L(e.data.secure_url),D(!1),y.b.success("Profile Image upload",{position:"bottom-right"})}))}else y.b.error("Upload jpg/png/jpeg File!",{position:"bottom-right"})}(e)}})]})})]})}),Object(b.jsx)("span",{children:Object(b.jsx)(de.a,{})}),Object(b.jsx)("input",{type:"text",required:!0,placeholder:" Enter Name",autocomplete:"off",value:r,onChange:function(e){return s(e.target.value)}}),Object(b.jsx)("span",{children:Object(b.jsx)(k.a,{})}),Object(b.jsx)("input",{type:"text",id:"email",required:!0,placeholder:"Enter Email",autocomplete:"off",value:o,onChange:function(e){return x(e.target.value)}}),Object(b.jsx)("span",{children:Object(b.jsx)(C.a,{})}),Object(b.jsx)("input",{type:"password",name:"password",id:"password",required:!0,placeholder:"Set Password",autocomplete:"off",value:m,onChange:function(e){return w(e.target.value)}}),Object(b.jsx)("span",{children:Object(b.jsx)(C.a,{})}),Object(b.jsx)("input",{style:{marginBottom:"10px"},type:"password",name:"cpassword",id:"cpassword",required:!0,placeholder:"Confirm Password",autocomplete:"off",value:F,onChange:function(e){return P(e.target.value)}}),Object(b.jsx)("input",{type:"submit",value:"Register",title:"Register"}),Object(b.jsx)("p",{onClick:function(){return e("/")},style:{cursor:"pointer",color:"grey"},children:"Already Registered? Login here"})]})}),Object(b.jsx)(p,{})]})},be=(c(167),function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y.a,{theme:"dark",hideProgressBar:!0,position:"bottom-right"}),Object(b.jsx)(i.a,{children:Object(b.jsx)(g,{children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/dashboard",element:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{}),Object(b.jsx)(le,{}),Object(b.jsx)(p,{})]})}),Object(b.jsx)(l.a,{exact:!0,path:"/register",element:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(ue,{})})}),Object(b.jsx)(l.a,{exact:!0,path:"/",element:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(S,{})})})]})})})]})});c(168);a.a.render(Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(be,{})}),document.getElementById("root"))},39:function(e,t,c){}},[[170,1,2]]]);
//# sourceMappingURL=main.7bf05ba8.chunk.js.map
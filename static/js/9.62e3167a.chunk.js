(this.webpackJsonpgpl=this.webpackJsonpgpl||[]).push([[9],{264:function(e,n,t){"use strict";t.r(n);var r=t(92),s=t(6),i=(t(0),t(266)),a=t(269),c=t(268),l=t(258),o=t(60);n.default=function(e){var n=e.question,t=e.hint,u=e.answers,j=e.onDone,d=i.a.useForm(),h=Object(r.a)(d,1)[0];return Object(s.jsx)("div",{style:{display:"flex",padding:"20px",alignContent:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",height:"100vh",background:"#f7f7f7"},children:Object(s.jsxs)("div",{style:{maxWidth:500,margin:"auto"},children:[Object(s.jsx)("h1",{children:n}),Object(s.jsx)("h4",{children:t}),Object(s.jsxs)(i.a,{form:h,onFinish:function(e){var n=u.split(",");n.find((function(n){return Object(o.a)(n,e.answer)>.95}))?j():n.find((function(n){return Object(o.a)(n,e.answer)>.9}))?a.b.error("Your Answer is Close!"):(a.b.error("Incorrect answer, try again!"),h.setFieldsValue({answer:void 0}))},children:[Object(s.jsx)(i.a.Item,{name:"answer",rules:[{required:!0,message:"Please input your answer!"}],children:Object(s.jsx)(c.a,{})}),Object(s.jsx)(i.a.Item,{children:Object(s.jsx)(l.a,{type:"primary",htmlType:"submit",children:"Take a guess!"})})]})]})})}}}]);
//# sourceMappingURL=9.62e3167a.chunk.js.map
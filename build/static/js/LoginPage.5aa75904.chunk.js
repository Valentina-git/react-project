(this["webpackJsonpreact-teamproject-slimmom"]=this["webpackJsonpreact-teamproject-slimmom"]||[]).push([[3],{278:function(n,t,e){"use strict";t.a={getNotificState:function(n){return n.notification}}},279:function(n,t,e){"use strict";e(0),e(7);var i,a=e(8),o=e(9).a.div(i||(i=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  font-size: 14px;\n  color: black;\n  text-align: center;\n  margin: 0 auto;\n  margin-bottom: 15px;\n  width: 250px;\n  height: auto;\n\n  @media screen and (min-width: 768px) {\n    width: 500px;\n    height: 40px;\n    font-size: 14px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    margin: 0 auto;\n    margin-bottom: 15px;\n  }\n\n  ","\n  ",";\n"])),(function(n){return n.error&&" \n      background-color: pink;;\n      \n    "}),(function(n){return n.alert&&" \n        background-color: #fc842d;\n        font-family: Gotham Pro;\n        font-weight: bold;\n        font-size: 14px;\n        line-height: 13px;\n        letter-spacing: 0.04em;\n        color: white;\n        margin: 0 auto;\n        margin-bottom: 10px;\n      \n        box-shadow: 0px 4px 10px rgba(252,132,45,0.5);\n        border-radius: 20px;\n        border: none;\n        outline: none;\n\n        @media screen and (min-width: 768px) {\n          width: max-content;\n          margin-bottom: 15px;\n          \n      }\n      \n    "})),r=e(1);t.a=function(n){var t=n.text,e=n.icon,i=void 0===e?"":e,a=n.error,c=void 0===a?"":a,s=n.alert,d=void 0===s?"":s;return Object(r.jsx)(o,{error:c,alert:d,children:Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{style:{marginRight:"10px"},children:i}),t]})})}},280:function(n,t,e){"use strict";t.a={getError:function(n){return n.error}}},287:function(n,t,e){"use strict";t.a=e.p+"static/media/desktop-home.d2f91e74.jpg"},288:function(n,t,e){"use strict";t.a=e.p+"static/media/tablet-home.d62494c2.jpg"},425:function(n,t,e){"use strict";e.r(t);var i,a,o=e(10),r=e(26),c=e(0),s=e(7),d=e(13),p=e(51),m=e(28),l=e(280),x=e(278),b=e(279),h=e(19),g=e(41),u=e(8),f=e(9),j=f.a.div(i||(i=Object(u.a)(["\n  width: 290px;\n  //height: 351px;\n\n  @media screen and (min-width: 768px) {\n    width: 382px;\n    //height: 310px;\n  }\n  @media (min-width: 1280px) {\n    width: 382px;\n    //height: 298px;\n  }\n\n  .pageTitle {\n    margin-bottom: 60px;\n    color: #fc842d;\n    font-family: Gotham Pro;\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 0.93;\n    letter-spacing: 0.04em;\n    text-transform: uppercase;\n\n    @media (max-width: 767px) {\n      text-align: center;\n    }\n\n    @media (min-width: 1280px) {\n      margin-bottom: 70px;\n    }\n  }\n\n  .error {\n    position: absolute;\n    top: calc(100% + 0.2em);\n\n    color: #e63946;\n    font-size: 1rem;\n  }\n\n  .formLabel {\n    position: relative;\n\n    display: flex;\n    height: 35.5px;\n    border-bottom: 1px solid #e0e0e0;\n    &:not(:last-child) {\n      margin-bottom: 40px;\n    }\n  }\n\n  .formLabelText {\n    white-space: nowrap;\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 1.2;\n    letter-spacing: 0.04em;\n    color: #9b9faa;\n  }\n\n  .formInput {\n    display: block;\n    padding-left: 20px;\n    width: 240px;\n    height: 35.5px;\n    flex-grow: 1;\n    border: 0;\n    background: transparent;\n    @media (min-width: 1280px) {\n      width: 290px;\n    }\n  }\n  .formInput:focus {\n    outline: none;\n  }\n\n  .formBtn {\n    //margin-bottom: 15px;\n    padding: 13px 48px;\n    border: 1px solid #fc842d;\n    background-color: #fc842d;\n    color: #fff;\n    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);\n    border-radius: 30px;\n    width: 176px;\n    height: 44px;\n    margin-bottom: 15px;\n\n    @media (max-width: 767px) {\n      display: block;\n      margin: 0 auto;\n      margin-top: 60px;\n      margin-bottom: 15px;\n\n    }\n    @media screen and (min-width: 768px) {\n      margin-top: 60px;\n    }\n\n   \n  }\n  .formBtn:hover,\n  .formBtn:focus {\n    cursor: pointer;\n    outline: none;\n    background-color: #fff;\n    color: #fc842d;\n  }\n\n  .formBtnText {\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 1.2;\n  }\n"]))),w=e(1),O={email:"",password:""},v=function(){Object(s.d)(m.b);var n=g.b().shape({email:g.c().email(" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u044b\u0439 E-mail ").required("!!! \u0412\u0432\u0435\u0434\u0438\u0442\u0435 E-mail =_="),password:g.c().min(8,"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(16,"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 16 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("!!! \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041f\u0430\u0440\u043e\u043b\u044c =_= ")}),t=Object(s.c)(),e=(Object(d.g)(),Object(c.useState)(Object(o.a)({},O))),i=Object(r.a)(e,2),a=(i[0],i[1]),u=Object(s.d)(x.a.getNotificState),f=Object(s.d)(l.a.getError);return Object(w.jsxs)(j,{children:[Object(w.jsx)("h2",{className:"pageTitle",children:"\u0412\u0445\u043e\u0434"}),u&&f&&Object(w.jsx)(b.a,{text:f,alert:!0}),u&&!f&&Object(w.jsx)(b.a,{text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b",alert:!0}),Object(w.jsx)(h.d,{initialValues:{email:"",password:""},validationSchema:n,onSubmit:function(n){!function(n){t(p.a.loginOperation(n)),a(Object(o.a)({},O))}(n)},children:function(n){var t=n.values,e=n.isValid,i=n.dirty,a=n.isSubmitting;return Object(w.jsxs)(h.c,{children:[Object(w.jsxs)("div",{className:"form",children:[Object(w.jsxs)("label",{className:"formLabel",children:[Object(w.jsx)("span",{className:"formLabelText",children:"E-mail *"}),Object(w.jsx)(h.b,{className:"formInput",type:"email",name:"email",value:t.email}),Object(w.jsx)(h.a,{className:"error",name:"email",component:"div"})]}),Object(w.jsxs)("label",{className:"formLabel",children:[Object(w.jsx)("span",{className:"formLabelText",children:"\u041f\u0430\u0440\u043e\u043b\u044c *"}),Object(w.jsx)(h.b,{className:"formInput",type:"password",name:"password",value:t.password}),Object(w.jsx)(h.a,{className:"error",name:"password",component:"div"})]})]}),!u&&Object(w.jsx)("button",{className:"formBtn",type:"submit",disabled:!e&&!i&&a,children:Object(w.jsx)("span",{className:"formBtnText",children:"\u0412\u0445\u043e\u0434"})})]})}})]})},k=e(287),N=e(288),y=f.a.div(a||(a=Object(u.a)(["\n  padding-top: 120px;\n  padding-bottom: 177px;\n\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: right;\n\n  @media (min-width: 768px) {\n    padding-top: 362px;\n    padding-bottom: 466px;\n\n    background-image: url(",");\n    position: absolute;\n    top: 0;\n    z-index: -100;\n    overflow: hidden;\n  }\n\n  @media (min-width: 1280px) {\n    padding-top: 362px;\n    padding-bottom: 190px;\n    background-image: url(",");\n  }\n"])),N.a,k.a);t.default=function(){return Object(w.jsx)(y,{children:Object(w.jsx)("div",{className:"container",children:Object(w.jsx)(v,{})})})}}}]);
//# sourceMappingURL=LoginPage.5aa75904.chunk.js.map
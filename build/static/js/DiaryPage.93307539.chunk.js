(this["webpackJsonpreact-teamproject-slimmom"]=this["webpackJsonpreact-teamproject-slimmom"]||[]).push([[2],{278:function(n,e,t){"use strict";e.a={getNotificState:function(n){return n.notification}}},279:function(n,e,t){"use strict";t(0),t(7);var i,a=t(8),r=t(9).a.div(i||(i=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  font-size: 14px;\n  color: black;\n  text-align: center;\n  margin: 0 auto;\n  margin-bottom: 15px;\n  width: 250px;\n  height: auto;\n\n  @media screen and (min-width: 768px) {\n    width: 500px;\n    height: 40px;\n    font-size: 14px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    margin: 0 auto;\n    margin-bottom: 15px;\n  }\n\n  ","\n  ",";\n"])),(function(n){return n.error&&" \n      background-color: pink;;\n      \n    "}),(function(n){return n.alert&&" \n        background-color: #fc842d;\n        font-family: Gotham Pro;\n        font-weight: bold;\n        font-size: 14px;\n        line-height: 13px;\n        letter-spacing: 0.04em;\n        color: white;\n        margin: 0 auto;\n        margin-bottom: 10px;\n      \n        box-shadow: 0px 4px 10px rgba(252,132,45,0.5);\n        border-radius: 20px;\n        border: none;\n        outline: none;\n\n        @media screen and (min-width: 768px) {\n          width: max-content;\n          margin-bottom: 15px;\n          \n      }\n      \n    "})),c=t(1);e.a=function(n){var e=n.text,t=n.icon,i=void 0===t?"":t,a=n.error,o=void 0===a?"":a,d=n.alert,s=void 0===d?"":d;return Object(c.jsx)(r,{error:o,alert:s,children:Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{style:{marginRight:"10px"},children:i}),e]})})}},280:function(n,e,t){"use strict";e.a={getError:function(n){return n.error}}},299:function(n,e,t){"use strict";e.a=t.p+"static/media/desktop.c301e310.jpg"},300:function(n,e,t){"use strict";e.a=t.p+"static/media/tablet.7f5578de.jpg"},301:function(n,e,t){"use strict";var i,a=t(0),r=t(8),c=t(9).a.div(i||(i=Object(r.a)(["\n  background-color: rgba(240, 241, 243, 1);\n  // background-color: unset;\n\n  width: 100%;\n  padding: 40px 5px 85px;\n\n  @media screen and (min-width: 768px) {\n    // background: url('./img/tab.png') rgba(240, 241, 243, 1) bottom right\n    //   no-repeat;\n    background-color: unset;\n\n    padding: 90px 0;\n    height: 100%;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 635px;\n    padding-top: 10px;\n    // padding-left: 50px;\n    // padding-right: 30px;\n    // padding-left: 90px;\n    // padding-right: 115px;\n    // background: rgba(240, 241, 243, 1);\n    background-color: unset;\n    // background: url('./img/desk.png') rgba(240, 241, 243, 1) bottom right\n    //   no-repeat;\n  }\n\n  // .rightSideBar {\n  //   width: 100%;\n  // }\n\n  .title {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 1.214;\n    letter-spacing: 0.04em;\n    color: #212121;\n    margin: 0;\n    margin-bottom: 32px;\n  }\n\n  .list {\n    list-style: none;\n    //width: 290px;\n    margin: 0;\n    padding: 0;\n  }\n\n  .listItemText {\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 2.142;\n    letter-spacing: 0.04em;\n    color: #9b9faa;\n    margin: 0;\n\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .listItemTextRight {\n    //float: right;\n  }\n\n  .blockRight {\n    margin-top: 20px;\n  }\n\n  @media screen and (min-width: 320px) {\n    .rightSideBar {\n      width: 290px;\n      margin: 0 auto;\n\n      display: flex;\n      justify-content: center;\n      flex-wrap: wrap;\n      align-items: baseline;\n      //   flex-direction: column;\n    }\n\n    //   .rightSideBar {\n    //     display: flex;\n    //     justify-content: space-around;\n    //     align-items: baseline;\n    //     padding-bottom: 0;\n    //   }\n    .blockLeft {\n      width: 290px;\n      margin-bottom: 40px;\n    }\n    .blockRight {\n      width: 290px;\n      margin-top: 40;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    .rightSideBar {\n      display: flex;\n      justify-content: space-between;\n      align-items: baseline;\n      padding-bottom: 0;\n      flex-direction: row;\n      width: 594px;\n    }\n\n    .blockLeft {\n      width: 252px;\n      margin-right: 60px;\n    }\n\n    .blockRight {\n      width: 252px;\n      margin-top: 0;\n    }\n  }\n\n  @media screen and (min-width: 1280px) {\n    .rightSideBar {\n      /* width: 330px; */\n      /* padding-top: 292px; */\n      justify-content: space-between;\n      flex-wrap: wrap;\n      /* padding-left: 90px;\n        padding-right: 115px; \n    /* padding-bottom: 85px; */\n      flex-direction: column;\n    }\n    .blockLeft {\n      width: 300px;\n    }\n    .blockRight {\n      width: 300px;\n      margin-top: 60px;\n    }\n  }\n\n  .scrollbar {\n    /* -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    scrollbar-width: thin;\n    scrollbar-color: #264061; */\n    overflow-y: scroll;\n    scroll-behavior: smooth;\n  }\n\n  .scrollbar::-webkit-scrollbar {\n    visibility: visible;\n    width: 10px;\n    margin-left: 0;\n    background-color: #f5f5f5;\n    border-radius: 10px;\n  }\n  .scrollbar::-webkit-scrollbar-track {\n    visibility: visible;\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    background-color: #f5f5f5;\n    border-radius: 10px;\n  }\n  .scrollbar::-webkit-scrollbar-thumb {\n    visibility: visible;\n    height: 10px;\n    width: 10px;\n    background-color: #666;\n    border-radius: 10px;\n  }\n\n  .scrollbarText {\n    max-height: 150px;\n    z-index: 1;\n    position: relative;\n    overscroll-behavior: contain;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding-right: 2px;\n  }\n"]))),o=t(7),d=t(33),s=t(35),l=t.n(s),p=t(28),m=t(64),h=t(1);e.a=function(){var n=Object(o.c)(),e=Object(o.d)(d.a.getDate),t=Object(o.d)(d.a.getDaySummary),i=Object(o.d)(d.a.getNotAllowedProducts),r=Object(o.d)(p.a.getAuthDailyRate),s=Object(o.d)(d.a.getDailyRate),x=Object(o.d)(d.a.getEatenProducts);return Object(a.useEffect)((function(){(r||s)&&n(m.a.getDayInfoOperation({date:e}))}),[null===x||void 0===x?void 0:x.length]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(c,{children:Object(h.jsxs)("div",{className:"rightSideBar",children:[Object(h.jsxs)("div",{className:"blockLeft",children:[Object(h.jsxs)("h2",{className:"title",children:["\u0421\u0432\u043e\u0434\u043a\u0430 \u0437\u0430"," ",(null===t||void 0===t?void 0:t.date)?t.date.split("-").reverse().join("."):l()(e).format("DD.MM.YYYY")," "]}),t?Object(h.jsxs)("ul",{className:"list",children:[Object(h.jsx)("li",{className:"listItem",children:Object(h.jsxs)("p",{className:"listItemText",children:[Object(h.jsx)("span",{children:"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c"}),Object(h.jsx)("span",{className:"listItemTextRight",children:t.kcalLeft?(t.kcalConsumed>t.dailyRate?0:Math.round(t.kcalLeft))+" \u043a\u043a\u0430\u043b":"000 \u043a\u043a\u0430\u043b"})]})}),Object(h.jsx)("li",{className:"listItem",children:Object(h.jsxs)("p",{className:"listItemText",children:["\u0423\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u043e",Object(h.jsx)("span",{className:"listItemTextRight",children:t.kcalConsumed?Math.round(t.kcalConsumed)+" \u043a\u043a\u0430\u043b":"000 \u043a\u043a\u0430\u043b"})]})}),Object(h.jsx)("li",{className:"listItem",children:Object(h.jsxs)("p",{className:"listItemText",children:["\u0414\u043d\u0435\u0432\u043d\u0430\u044f \u043d\u043e\u0440\u043c\u0430",Object(h.jsx)("span",{className:"listItemTextRight",children:s?Math.round(s)+" \u043a\u043a\u0430\u043b":r?Math.round(r)+" \u043a\u043a\u0430\u043b":"000 \u043a\u043a\u0430\u043b"})]})}),Object(h.jsx)("li",{className:"listItem",children:Object(h.jsxs)("p",{className:"listItemText",children:["n% \u043e\u0442 \u043d\u043e\u0440\u043c\u044b",Object(h.jsx)("span",{className:"listItemTextRight",children:t.percentsOfDailyRate?Math.round(t.percentsOfDailyRate)+" %":"000 %"})]})})]}):Object(h.jsxs)("ul",{className:"list",children:[Object(h.jsx)("li",{className:"listItem",children:Object(h.jsxs)("p",{className:"listItemText",children:["\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c",Object(h.jsx)("span",{className:"listItemTextRight",children:"000 \u043a\u043a\u0430\u043b"})]})}),Object(h.jsx)("li",{className:"listItem",children:Object(h.jsxs)("p",{className:"listItemText",children:["\u0423\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u043e",Object(h.jsx)("span",{className:"listItemTextRight",children:"000 \u043a\u043a\u0430\u043b"})]})}),Object(h.jsx)("li",{className:"listItem",children:Object(h.jsxs)("p",{className:"listItemText",children:["\u0414\u043d\u0435\u0432\u043d\u0430\u044f \u043d\u043e\u0440\u043c\u0430",Object(h.jsx)("span",{className:"listItemTextRight",children:"000 \u043a\u043a\u0430\u043b"})]})}),Object(h.jsx)("li",{className:"listItem",children:Object(h.jsxs)("p",{className:"listItemText",children:["n% \u043e\u0442 \u043d\u043e\u0440\u043c\u044b",Object(h.jsx)("span",{className:"listItemTextRight",children:"000 \u043a\u043a\u0430\u043b"})]})})]})]}),Object(h.jsxs)("div",{className:"blockRight",children:[Object(h.jsx)("h2",{className:"title",children:"\u041d\u0435\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b"}),i?Object(h.jsx)("ul",{className:"list scrollbar scrollbarText",children:i?i.slice(0,20).map((function(n,e){return Object(h.jsx)("li",{className:"listItem",children:Object(h.jsxs)("p",{className:"listItemText ",children:[n,", "]})},e)})):Object(h.jsx)("li",{children:Object(h.jsx)("p",{children:"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0412\u0430\u0448 \u0440\u0430\u0446\u0438\u043e\u043d"})})}):Object(h.jsx)("ul",{className:"list",children:Object(h.jsx)("li",{children:Object(h.jsx)("p",{children:"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0412\u0430\u0448 \u0440\u0430\u0446\u0438\u043e\u043d"})})})]})]})})})}},330:function(n,e,t){n.exports={appear:"NotAnim_appear__2-V-B",appearActive:"NotAnim_appearActive__2XNHb",appearDone:"NotAnim_appearDone__35Oe8"}},423:function(n,e,t){"use strict";t.r(e);var i,a,r,c,o,d,s,l=t(26),p=t(0),m=t(7),h=t(35),x=t.n(h),b=t(79),u=t(424),g=t(10),j=t(330),f=t.n(j),w=(document.querySelector(".prodList"),t(8)),O=t(9),v=O.a.li(i||(i=Object(w.a)(["\n  margin-bottom: 20px;\n  display: flex;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 15.5px;\n  }\n  @media screen and (min-width: 1280px) {\n    justify-content: space-between;\n  }\n\n  .innerListDairyProduct {\n    width: 100%;\n    display: flex;\n    list-style: none;\n    justify-content: space-between;\n  }\n\n  .innerItemDairyProduct {\n    display: flex;\n    justify-content: center;\n\n    align-items: center;\n    padding-bottom: 5px;\n    font-family: Verdana;\n    font-style: normal;\n    font-size: 14px;\n    line-height: 1.21;\n    letter-spacing: 0.04em;\n\n    color: #212121;\n    border-bottom: 1px solid #e0e0e0;\n  }\n\n  .innerItemDairyProduct:first-child {\n    justify-content: flex-start;\n    width: 100px;\n    margin-right: 5px;\n\n    @media screen and (min-width: 768px) {\n      min-width: calc(100% - 104px - 20px - 104px - 50px);\n      margin-right: 10px;\n    }\n\n    @media screen and (min-width: 1280px) {\n      width: 240px;\n    }\n  }\n  .innerItemDairyProduct:nth-child(2) {\n    width: 50px;\n    margin-right: 5px;\n\n    @media screen and (min-width: 768px) {\n      width: 105px;\n      margin-right: 10px;\n    }\n\n    @media screen and (min-width: 1280px) {\n      margin-right: 0;\n    }\n  }\n  .innerItemDairyProduct:last-child {\n    border: none;\n  }\n\n  .buttonItemDairyProduct {\n    width: 20px;\n    height: 20px;\n    background-color: transparent;\n    border-color: transparent;\n\n    &:hover,\n    &:focus {\n      border: 2px solid orange;\n      border-radius: 20px;\n      color: orange;\n    }\n\n    color: grey;\n    transform: translateY(1px);\n\n    @media screen and (max-width: 767px) {\n      transform: translateX(5px);\n    }\n  }\n  .titleSlide-appear{\n    transform: translateX(-100%);\n}\n.titleSlide-appear-active{\n    transform: translateX(0);\n    transition:transform 500ms linear;\n}\n"]))),y=t(1),N=function(n){var e=n.onClick,t=n.title,i=n.kcal,a=n.weight,r=n.id,c=n.screenWidth,o=["\u0430","\u043e","\u044d","\u0438","\u0443","\u044b","\u0435","\u0451","\u044e","\u044f"];return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(u.a,{in:!0,appear:!0,classNames:"titleSlide",timeout:500,unmountOnExit:!0,children:Object(y.jsx)(v,{children:Object(y.jsxs)("ul",{className:"innerListDairyProduct",children:[Object(y.jsx)("li",{className:"innerItemDairyProduct",children:c<768?Object(y.jsx)("ul",{style:{listStyle:"none"},children:t.split(" ").map((function(n){return Object(y.jsx)("li",{children:n.length>9?o.some((function(e){return e===n[9]}))?n.slice(0,9)+".":n.slice(0,10)+".":n},n)}))}):Object(y.jsx)("span",{children:t})}),Object(y.jsxs)("li",{className:"innerItemDairyProduct",children:[a,"\u0433"]}),Object(y.jsxs)("li",{className:"innerItemDairyProduct",children:[i.toFixed(0),"\u043a\u043a\u0430\u043b"]}),Object(y.jsx)("li",{className:"innerItemDairyProduct",children:Object(y.jsx)("button",{className:"buttonItemDairyProduct",type:"button",onClick:e,"data-id":r,children:"\u2715"})})]})})})})},k=t(64),D=t(33),I=t(278),P=t(280),S=O.a.ul(a||(a=Object(w.a)(["\n  list-style: none;\n  max-height: 256px;\n  padding-right: 12px;\n\n  ::-webkit-scrollbar {\n    visibility: hidden;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    visibility: hidden;\n  }\n\n  ::-webkit-scrollbar-track {\n    visibility: hidden;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding-right: 31px;\n    height: 180px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 600px;\n    padding-right: 42px;\n    max-height: 300px;\n  }\n\n  ","\n"])),(function(n){return n.length>=4&&" \n    overflow-y: scroll;\n    scroll-behavior: smooth;\n\n    ::-webkit-scrollbar {\n        visibility: visible;\n        width: 10px;\n        margin-left: 0;\n        background-color: #F5F5F5;\n        border-radius: 10px;\n\n    }\n\n    ::-webkit-scrollbar-thumb { \n        visibility: visible;\n        height: 10px; \n        width: 10px;\n        background-color: #666;\n        border-radius: 10px;\n    \n    }\n\n    ::-webkit-scrollbar-track {\n        visibility: visible;\n        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n        background-color: #F5F5F5;\n        border-radius: 10px;\n    }   \n      \n    "})),E=O.a.div(r||(r=Object(w.a)(["\n  position: relative;\n  margin-top: 31px;\n"]))),F=O.a.div(c||(c=Object(w.a)(["\n  position: absolute;\n  width: 238px;\n  height: 40px;\n  bottom: 0;\n  left: 0;\n  opacity: 0.5;\n  background: linear-gradient(\n    180deg,\n    rgba(255, 255, 255, 0.5) 0%,\n    #ffffff 42.19%\n  );\n\n  pointer-events: none;\n\n  @media screen and (min-width: 768px) {\n    width: 553px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 478px;\n  }\n\n  ","\n"])),(function(n){return n.screenWidth>=768&&n.height>=200&&" \n        height: 20px;\n    "})),A=t(279),C=function(){var n=Object(p.useState)(""),e=Object(l.a)(n,2),t=(e[0],e[1]),i=Object(m.c)(),a=Object(m.d)(D.a.getEatenProducts),r=Object(m.d)(I.a.getNotificState),c=Object(m.d)(P.a.getError),o=document.querySelector(".prodList"),d=function(){var n=Object(p.useState)({width:void 0,height:void 0}),e=Object(l.a)(n,2),t=e[0],i=e[1];return Object(p.useEffect)((function(){function n(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),t}();Object(p.useEffect)((function(){o&&t(o.scrollHeight)}),[o]),Object(p.useEffect)((function(){o&&t(o.scrollHeight)}),[]);var s=function(n){var e=n.target.dataset.id;i(k.a.deleteDiaryItemOperation(e))};return Object(y.jsx)("div",{children:a?Object(y.jsxs)(E,{children:[r&&c&&Object(y.jsx)(u.a,{in:!0,timeout:250,classNames:f.a,appear:!0,children:Object(y.jsx)(A.a,{text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(c),alert:!0})}),r&&!c&&Object(y.jsx)(u.a,{in:!0,timeout:250,classNames:f.a,appear:!0,children:Object(y.jsx)(A.a,{text:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442 \u0431\u044b\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d",alert:!0})}),Object(y.jsx)(S,{id:"element",length:a.length,className:"prodList",children:a.length>0?a.map((function(n){return Object(p.createElement)(N,Object(g.a)(Object(g.a)({onClick:s},n),{},{key:n.id,screenWidth:d.width}))})):Object(y.jsx)("h2",{style:{textAlign:"center"},children:"\u0412\u0430\u0448 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u043f\u0443\u0441\u0442"})}),a.length>4&&Object(y.jsx)(F,{screenWidth:d.width})]}):Object(y.jsx)("p",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u043c\u0443 \u0434\u043d\u044e"})})},z=t(422),V=(t(302),t(19)),L=t(41),T=O.a.div(o||(o=Object(w.a)(["\nposition: relative;\nmargin-top:80px;\n//padding-left:15px;\n@media screen and (min-width:768px){\n    margin-top:0px;\n    margin-bottom:59.5px;\n    //padding-left:92px;\n}\n@media screen and (min-width:1280px){\n    margin-right:168px;\n//padding-left:115px;\n}\n.formDairyAddProduct{\n    display:flex;\n    flex-direction:column;\n   \n}\n.inputBlockDairyAddProduct{\n @media screen and (min-width:768px){\n         flex-direction:row;\n    }\n}\n.inputDairyAddProduct{\n    margin-bottom:30px;\n    padding-top:10px;\n    padding-bottom:10px;\n    width: 289px;\nborder-top:transparent;\nborder-left:transparent;\nborder-right:transparent;\nborder-bottom: 1px solid #E0E0E0;\n    font-family: Verdana;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 14px;\nline-height:1.21;\nletter-spacing: 0.04em;\n\ncolor: #9B9FAA;\n\n@media screen and (min-width:768px){\n width: 270px;\n\n}\n}\n}\n\n.secondInputLength{\n    \n   @media screen and (min-width:768px){\n width: 105px;\n margin-left:31px;\n text-indent: 25px;\n\n} \n}\n\n.selectDairyAddProduct{\n    padding:10px;\n    width: 289px;\n    border: 1px solid #E0E0E0;\n    border-radius: 30px;\n     font-family: Verdana;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 14px;\nline-height:1.21;\nletter-spacing: 0.04em;\n\ncolor: #9B9FAA;\n}\n.buttonDairyAddProduct{\n    margin:0 auto;\n    //margin-top:60px;\n    padding: 13px 46px;\n    width: 176px;\n      font-family: Verdana;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 14px;\nline-height: 1.21;\nalign-items: center;\ntext-align: center;\nletter-spacing: 0.04em;\n\n    background-color: #FC842D;\n    border-color:transparent;\n    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);\nborder-radius: 30px;\n\ncolor: #FFFFFF;\ncursor: pointer;\n   @media screen and (min-width:768px){\n       position: absolute;\n       //top: -70px;\n       left: 450px;\n       width: 50px;\n       height: 50px;\n       padding:0;\n       border-radius:50px;\n} \n&:hover,&:focus{\n  background-color: #ffffff;\n  border: 2px solid #FC842D;\n  color: #FC842D; \n}\n\n}\n.validationError{\n    font-family: Verdana;\nfont-style: normal;\nfont-weight: 700;\nfont-size: 20px;\n    color: #FC842D; \n}\n\n"]))),H=t(29),M=L.b().shape({productName:L.c().min(2,"\u0423\u0442\u043e\u0447\u043d\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441!").max(50,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441!").required("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"),weight:L.c().min(2,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u0430\u043b\u044b\u0439 \u0432\u0435\u0441!").max(4,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0432\u0435\u0441!").required("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0435\u0441")}),R=function(){var n=t(302),e=function(){var n=Object(p.useState)({width:void 0,height:void 0}),e=Object(l.a)(n,2),t=e[0],i=e[1];return Object(p.useEffect)((function(){function n(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),t}(),i=Object(m.d)(D.a.getDate),a=Object(m.d)(D.a.getProducts),r=Object(m.c)(),c=Object(p.useState)({productName:"",weight:"",productId:""}),o=Object(l.a)(c,2),d=(o[0],o[1],Object(V.e)({initialValues:{productName:"",weight:"",productId:""},onSubmit:function(n,e){s(n),e.resetForm()},validationSchema:M}));var s=function(n){n.productName;var e=Object(z.a)(n,["productName"]);r(k.a.postEatenProductOperation(Object(g.a)(Object(g.a)({},e),{},{date:i}))),r(H.a.offModal())};return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(T,{children:Object(y.jsxs)("form",{onSubmit:d.handleSubmit,className:"formDairyAddProduct",children:[Object(y.jsxs)("div",{className:"inputBlockDairyAddProduct",children:[Object(y.jsx)("input",{type:"text",list:"browsers",value:d.values.productName,name:"productName",id:"productName",onChange:function(e){var t,i=e.target,c=i.name,o=i.value;(d.setFieldValue(c,o),"productName"===c)&&(a.some((function(n){return n.title.ru.includes(o)}))?d.setFieldValue("productId",null===(t=a.find((function(n){return n.title.ru===o})))||void 0===t?void 0:t._id):n(r(k.a.getProductOperation(d.values.productName)),2e3))},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430",className:"inputDairyAddProduct"}),Object(y.jsx)("datalist",{id:"browsers",children:a.map((function(n){return Object(y.jsx)("option",{value:n.title.ru,children:n.title.ru},n._id)}))}),Object(y.jsx)("label",{children:Object(y.jsx)("input",{type:"number",min:"1",name:"weight",id:"weight",value:d.values.weight,onChange:d.handleChange,placeholder:"\u0413\u0440\u0430\u043c\u043c\u044b",className:"inputDairyAddProduct secondInputLength"})}),d.errors.productName&&d.touched.productName?Object(y.jsx)("p",{className:"validationError",children:d.errors.productName}):null,d.errors.weight&&d.touched.weight?Object(y.jsx)("p",{className:"validationError weightError",children:d.errors.weight}):null]}),Object(y.jsx)("button",{type:"submit",className:"buttonDairyAddProduct",children:e.width<768?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c":"+"})]})})})},B=t(332),Y=t.n(B),_=(t(331),O.a.div(d||(d=Object(w.a)(["\n  //margin-top: 40px;\n  margin-bottom: 31px;\n  //padding-left: 15px;\n  @media screen and (min-width: 768px) {\n    /* margin-top: 100px;\n    margin-bottom: 60px; */\n    //padding-left: 92px;\n  }\n  @media screen and (min-width: 1280px) {\n    //margin-top:143px;\n    //padding-left: 115px;\n    margin-bottom: 60px;\n  }\n  .inputDiaryDateCalendar {\n    //margin-top: 40px;\n    margin-bottom: 31px;\n    width: 138px;\n\n    border-color: transparent;\n    font-family: Verdana;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 1.22;\n\n    color: #212121;\n    @media screen and (min-width: 768px) {\n      width: 219px;\n      margin-right: 21px;\n      font-size: 34px;\n      line-height: 1.2;\n    }\n  }\n\n  .labelDatePicker {\n    height: 20px;\n    display: flex;\n    align-items: baseline;\n    @media screen and (min-width: 768px) {\n      height: 38px;\n    }\n  }\n  .iconDateCalendar {\n    height: 20px;\n    width: 18px;\n  }\n"])))),W=function(){return Object(y.jsxs)("svg",{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(y.jsx)("path",{d:"M14 9H12V11H14V9Z",fill:"#9B9FAA"}),Object(y.jsx)("path",{d:"M10 9H8V11H10V9Z",fill:"#9B9FAA"}),Object(y.jsx)("path",{d:"M6.00008 9H4.00006V11H6.00008V9Z",fill:"#9B9FAA"}),Object(y.jsx)("path",{d:"M16 2.00001H15V0H13V2.00001H5.00001V0H3V2.00001H2.00001C0.890015 2.00001 0.0100313 2.90001 0.0100313 4.00003L0 18C0 19.1 0.890015 20 2.00001 20H16C17.1 20 18 19.1 18 18V3.99998C18 2.90001 17.1 2.00001 16 2.00001ZM16 18H2.00001V6.99998H16V18Z",fill:"#9B9FAA"})]})},X=function(){var n=Object(m.d)(D.a.getDate),e=Object(p.useState)(new Date(n)),t=Object(l.a)(e,2),i=t[0],a=t[1],r=Object(m.c)();return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(_,{children:Object(y.jsxs)("label",{className:"labelDatePicker",children:[Object(y.jsx)(Y.a,{selected:i,onChange:function(n){a(n);var e={date:x()(n).format("YYYY-MM-DD")};r(k.a.getDayInfoOperation(e)),r(k.a.setDateOperation(e))},dateFormat:"d.MM.yyyy",className:"inputDiaryDateCalendar",name:"date"}),Object(y.jsx)(W,{className:"iconDateCalendar"})]})})})},Z=t(299),q=t(300),J=O.a.div(s||(s=Object(w.a)(["\n  padding-top: 40px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: right;\n\n  @media (min-width: 768px) {\n    padding-top: 180px;\n    overflow: hidden;\n    background-size: contain;\n    background-position: center;\n    background-repeat: repeat-x;\n    background-image: url(",");\n  }\n  @media (min-width: 1280px) {\n    overflow-y: scroll;\n    margin-top: -150px;\n    padding-top: 292px;\n    padding-bottom: 140px;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n\n  .diaryPage {\n    @media screen and (min-width: 1280px) {\n      display: flex;\n      flex-direction: row;\n    }\n  }\n\n  .formWrapper {\n    @media screen and (min-width: 768px) {\n      padding-bottom: 61px;\n    }\n    @media screen and (min-width: 1280px) {\n      width: 1000px;\n      margin-right: 120px;\n    }\n  }\n  .buttomDiaryProductList {\n    display: block;\n    margin: 60px auto;\n    width: 50px;\n    height: 50px;\n    border: 2px solid #fc842d;\n    border-radius: 50px;\n    background-color: #fc842d;\n    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);\n    color: #ffffff;\n    cursor: pointer;\n    &:hover,\n    &:focus {\n      background-color: #ffffff;\n      color: #fc842d;\n      background-image: url(../../img/icons/closeCross.svg);\n      background-repeat: no-repeat;\n      background-size: contain;\n    }\n  }\n  .calendarSlide-enter {\n    transform: scale(0);\n  }\n  .calendarSlide-enter-active {\n    transform: scale(1);\n    transition: transform 500ms ease-in-out;\n  }\n  .calendarSlide-exit {\n    transform: scale(1);\n  }\n  .calendarSlide-exit-active {\n    transform: scale(0);\n    transition: transform 500ms ease-in-out;\n  }\n  .titleSlide-appear {\n    transform: translateX(-100%);\n  }\n  .titleSlide-appear-active {\n    transform: translateX(0);\n    transition: transform 500ms linear;\n  }\n"])),q.a,Z.a),G=t(110),K=t(301);e.default=function(){var n=Object(b.a)(),e=function(){var n=Object(p.useState)({width:void 0,height:void 0}),e=Object(l.a)(n,2),t=e[0],i=e[1];return Object(p.useEffect)((function(){function n(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),t}(),t=Object(m.c)(),i=(Object(m.d)(D.a.getProducts),Object(m.d)(D.a.getDate));Object(p.useEffect)((function(){var n=new Date;x()(n).format("YYYY-MM-DD");setTimeout((function(){t(k.a.getDayInfoOperation({date:i}))}),300)}),[]);return Object(y.jsxs)(J,{children:[Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"diaryPage",children:[Object(y.jsxs)("div",{className:"formWrapper",children:[Object(y.jsx)(u.a,{in:!0,appear:!0,classNames:"titleSlide",timeout:500,unmountOnExit:!0,children:Object(y.jsx)(X,{})}),e.width<768?Object(y.jsx)(G.a,{children:Object(y.jsx)(R,{})}):Object(y.jsx)(u.a,{in:!0,appear:!0,classNames:"titleSlide",timeout:500,unmountOnExit:!0,children:Object(y.jsx)(R,{})}),Object(y.jsx)(u.a,{in:!0,appear:!0,classNames:"titleSlide",timeout:500,unmountOnExit:!0,children:Object(y.jsx)(C,{})}),e.width<768&&Object(y.jsx)("button",{type:"submit",className:"buttomDiaryProductList",onClick:function(){t(H.a.onModal())},children:"+"})]}),n>=768&&Object(y.jsx)(K.a,{})]})}),n<768&&Object(y.jsx)(K.a,{})]})}}}]);
//# sourceMappingURL=DiaryPage.93307539.chunk.js.map
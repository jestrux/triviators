(this.webpackJsonptriviators=this.webpackJsonptriviators||[]).push([[0],{18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(6),o=n.n(r),i=(n(18),n(12)),s=n(3),l=n(13),d=n(7),b=(n(22),n(1)),x=Object(d.c)({accessToken:"pk.eyJ1IjoiYWxpY28xMSIsImEiOiJja2xhazBneTIwNmFrMm9xcnN2YXMxcHY4In0.43WpCsYZZoQlKlKrBcpqBA"});function h(e){var t=e.details,n=Object(c.useState)([39.14022604367159,-6.794581990870498]),r=Object(s.a)(n,2),o=r[0],i=r[1];return Object(c.useEffect)((function(){t&&t.center&&i(t.center)}),[t]),Object(b.jsx)(x,{style:"mapbox://styles/jestrux/ckfj9j6bx1iqc19meeipe67f5",containerStyle:{height:"100%",width:"100%"},center:o,zoom:[14],children:t&&Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(d.a,{coordinates:o,children:Object(b.jsx)("img",{className:"w-10",src:"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",alt:""})}),Object(b.jsx)(d.b,{coordinates:o,offset:{bottom:[0,-38]},style:{width:"300px"},children:Object(b.jsx)("div",{className:"py-0.5 px-2 text-black",children:Object(b.jsx)("h1",{className:"fancy-font text-gray-600 text-3xl font-bold tracking-widest text-center",children:t?t.name:""})})})]})})}var m=function(e){var t=e.choices,n=e.selectedChoice,c=e.correctChoice,a=e.onAnswer;return Object(b.jsx)("div",{className:"mb-3 px-3 flex flex-col ".concat(n&&"pointer-events-none"),children:t.map((function(e,t){var r,o="";n&&(e===c?r="green":e===n&&(r="red"),o=r?"bg-gradient-to-br from-".concat(r,"-300 via-").concat(r,"-500 to-").concat(r,"-400"):"");return Object(b.jsx)("button",{className:"block mb-3 p-2.5 font-mono text-lg text-center rounded border-2 border-white border-opacity-30 hover:border-opacity-50 hover:bg-white hover:bg-opacity-5 text-white text-opacity-90 hover:text-opacity-100 focus:outline-none ".concat(o," ").concat(!1),onMouseEnter:function(){return window.playSound("hover")},onClick:function(){window.playSound("tap"),a(e)},children:e},t)}))})},j=function(e){e.type;var t=e.choices,n=e.selectedChoice,c=e.correctChoice,a=e.onAnswer;return Object(b.jsx)(m,{choices:t,selectedChoice:n,correctChoice:c,onAnswer:a})};function u(e){var t=e.label,n=e.text,c=e.type,r=e.choices,o=e.open,i=e.answer,s=e.selectedAnswer,l=e.onAnswer;a.a.useEffect((function(){o||window.playSound("whoosh")}),[o]);var d=o?"pointer-events-auto":"pointer-events-none opacity-0 transform -translate-x-full -rotate-12 ";return Object(b.jsx)("div",{className:"relative w-full overflow-hidden rounded-lg border-2 border-white border-opacity-40 bg-gradient-to-br from-blue-900 via-blue-600 to-blue-900 origin-bottom-left transition duration-500 ".concat(d),children:Object(b.jsxs)("div",{className:"",children:[Object(b.jsxs)("div",{className:"z-10 mt-4 px-4",children:[Object(b.jsx)("div",{className:"px-2 flex justify-center",children:Object(b.jsx)("span",{className:"flex-shrink-0 rounded-full bg-white text-primary text-xs tracking-wider font-semibold border-2 border-white border-opacity-20 inline-flex items-center justify-center py-0.5 px-3 transform scale-90 bg-opacity-80",children:t})}),Object(b.jsx)("div",{className:"mt-2.5 mb-2 px-2",children:Object(b.jsx)("h5",{className:"text-4xl leading-snug fancy-font tracking-tight text-center text-white",children:n})})]}),Object(b.jsx)("div",{className:"p-3",children:Object(b.jsx)(j,{type:c,correctChoice:i,selectedChoice:s,choices:r,onAnswer:l})})]})})}var p=[{text:"Which innovation stages is iPF Softwares involved with?",type:"text",choices:["Growth & Scale","Growth","Pilot","Scale"],answer:"Growth & Scale",mapData:{name:"iPF Softwares",center:[39.14022604367159,-6.794581990870498]}},{text:"What category does Care International in Tanzania belong to?",type:"text",choices:["Private Companies","Civil Society Organisations","Funders","Market Facilitators"],answer:"Private Companies",mapData:{name:"Care International",center:[39.272456,-6.78481]}},{text:"Which of these SDGs does HDIF support",type:"sdg",choices:["11, 14","2, 8","5, 6","8"],answer:"5, 6",mapData:{name:"The Human Development Innovation Fund(HDIF)",center:[39.255597359999996,-6.7639185]}},{text:"What sector does the Iconic Spaces belong to?",type:"text",choices:["Technology","Agriculture","Education","Governance"],answer:"Technology",mapData:{name:"Iconic Spaces",center:[39.25562842769517,-6.780610916529156]}}];var f=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)([null,null,null,null]),d=Object(s.a)(o,2),x=d[0],m=d[1],j=Object(c.useState)(!1),f=Object(s.a)(j,2),g=f[0],v=f[1],w=Object(c.useState)(!1),O=Object(s.a)(w,2),y=O[0],N=O[1],k=Object(c.useState)(0),S=Object(s.a)(k,2),C=S[0],I=S[1],T=Object(c.useState)(20),F=Object(s.a)(T,2),z=F[0],A=F[1],D=Object(c.useState)(0),M=Object(s.a)(D,2),P=M[0],W=M[1];function E(){A(20),window.clearTimer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=20,n=setInterval((function(){e(t-=1)}),2e3);return function(){return clearInterval(n)}}((function(e){A(e),e<=0&&B("")}))}function B(e){e===n[C].answer?(W(P+z),window.playSound("correct")):window.playSound("wrong"),window.clearTimer(),m(x.map((function(t,n){return n===C?e:t}))),setTimeout((function(){C===n.length-1?(N(!0),window.stopSound("bg"),setTimeout((function(){window.playSound("gameOver")}),20)):(I(C+1),E())}),2e3)}return Object(b.jsxs)("div",{className:"flex h-screen bg-primary text-white relative",children:[Object(b.jsx)("div",{className:"pointer-events-none mr-56 z-10 absolute inset-0 bg-gradient-to-r from-primary via-primary"}),Object(b.jsxs)("div",{className:"z-20 w-3/5 flex flex-col relative",children:[Object(b.jsxs)("div",{className:"relative transform transition-all duration-500 ease-in-out ".concat(!g&&"-translate-y-8 opacity-0"),children:[Object(b.jsx)("div",{className:"h-1 rounded-r-full absolute top-16 mt-1 inset-x-0 bg-gradient-to-r from-red-500 to-green-500 overflow-hidden",children:Object(b.jsx)("div",{className:"backdrop-filter backdrop-saturate-0 backdrop-invert-0 h-full absolute right-0",style:{width:"".concat(100*(20-z)/20,"%")}})}),Object(b.jsxs)("div",{className:"tracking-wider flex items-center justify-between px-3 py-4",children:[Object(b.jsx)("h3",{className:"logo ml-2 text-2xl font-bold mb-0.5 text-white",children:"triviators"}),Object(b.jsxs)("span",{className:"text-xs bg-white bg-opacity-10 flex items-center rounded py-0.5 px-2.5 border border-white border-opacity-25 mr-6",children:[Object(b.jsx)("span",{className:"mr-1 font-semibold text-xs uppercase tracking-widest opacity-90",children:"Time Left:"}),Object(b.jsx)("span",{className:"logo font-semibold text-base",children:z})]}),Object(b.jsxs)("span",{className:"text-xs bg-white bg-opacity-10 flex items-center rounded py-0.5 px-2.5 border border-white border-opacity-25",children:[Object(b.jsx)("span",{className:"mr-1 font-semibold text-xs uppercase tracking-widest opacity-90",children:"Score:"}),Object(b.jsx)("span",{className:"logo font-semibold text-base",children:P})]})]})]}),g&&Object(b.jsx)("div",{className:"flex-1 flex",children:n.map((function(e,t){var c=t+1,a=Math.min(3*c,10)+"px",r=Math.min(3*c,10)+"px";return Object(b.jsx)("div",{className:"absolute inset-0 max-w-lg mx-auto flex flex-col items-center justify-center",style:{transform:"translate3d(".concat(a,",").concat(r,",0)"),zIndex:n.length-t,pointerEvents:"none"},children:Object(b.jsx)(u,Object(i.a)(Object(i.a)({},e),{},{open:C<=t,label:"".concat(t+1," of ").concat(n.length),selectedAnswer:x[t],onAnswer:function(e){return B(e)}}))},t)}))})]}),Object(b.jsx)("div",{className:"-ml-64 flex-1",children:Object(b.jsx)("div",{className:"h-full overflow-hidden border-red-500/40 relative",children:Object(b.jsx)("div",{className:"absolute inset-0",children:Object(b.jsx)(h,{details:g?n[C].mapData:null})})})}),(!g||y)&&Object(b.jsx)("div",{className:"z-40 fixed inset-0 flex items-center justify-center ".concat(y&&"backdrop-filter backdrop-blur-sm"),children:Object(b.jsxs)("div",{className:"max-w-4xl pr-40 pl-12 flex-1 flex flex-col items-center justify-center",children:[Object(b.jsxs)("div",{className:"animate-float bg-gradient-to-br from-yellow-800 via-purple-800 sto-green-700 border-8 border-double border-white/20 py-12 px-10 rounded-xl text-center",children:[Object(b.jsx)("h2",{className:"fancy-fonts logo text-3xl font-semibold tracking-widest",children:y?"Game Over!":"Hello there,"}),y&&Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsxs)("p",{className:"mt-5 fancy-font text-3xl leading-relaxed tracking-tighter",children:["You managed to snug ",P," points. ",P>20?"Way to go \ud83c\udf89\ud83c\udf89":"Better luck next time \ud83d\udc4a"]}),Object(b.jsxs)("p",{className:"mt-5 mb-3 text-lg text-white text-opacity-70 leading-relaxed",children:["Visit ",Object(b.jsx)("a",{href:"http://innovate.co.tz/",target:"_blank",className:"underline text-red-400 hover:text-opacity-80",children:"innovate.co.tz"})," to learn more about innovators in Tanzania."]})]}),!y&&Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)("p",{className:"mt-5 fancy-font text-3xl leading-relaxed tracking-tighter",children:"Welcome to triviators, the trivia game for enthusiasts about the innovation space in Tanzania."}),Object(b.jsxs)("p",{className:"mt-8 text-lg text-white text-opacity-70 leading-relaxed",children:["The data for this game comes from ",Object(b.jsx)("a",{href:"http://innovate.co.tz/",target:"_blank",className:"underline text-red-400 hover:text-opacity-80",children:"innovate.co.tz"})]})]})]}),Object(b.jsx)("button",{className:"-mt-1 block py-3 px-8 uppercase font-semibold tracking-widest font-mono text-lg text-center rounded border-4 border-white border-opacity-30 hover:border-opacity-50 hover:bg-white hover:bg-opacity-10 text-white text-opacity-90 hover:text-opacity-100 focus:outline-none",onClick:function(){I(0),v(!1),N(!1),m([null,null,null,null]),A(20),W(0),setTimeout((function(){var e;r((e=p,Object(l.a)(e).sort((function(e){return Math.random()-.5})))),window.playSound("bg"),v(!0),E()}),100)},children:y?"Play Again":"Play Now"})]})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),g()}},[[24,1,2]]]);
//# sourceMappingURL=main.cd673b2e.chunk.js.map
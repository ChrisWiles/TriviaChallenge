(this["webpackJsonpg2i-code-challenge-web-template"]=this["webpackJsonpg2i-code-challenge-web-template"]||[]).push([[1],{101:function(e,t,n){e.exports=n(118)},118:function(e,t,n){"use strict";n.r(t);var a=n(33),r=n(168),c=n(169),i=n(0),o=n.n(i),l=n(7),s=n.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(42),d=n(32),m=n(45),p=n(76),f=n(151),h=n(77);function b(){var e=Object(p.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return b=function(){return e},e}var v=Object(h.a)(f.a)(b());var g=function(e){var t=e.size,n=void 0===t?180:t,a=e.thickness,r=void 0===a?3.6:a;return o.a.createElement(v,{size:n,thickness:r})},E=n(25),O=n(46),y=n(8),j=n(161),w=n(18),k=n(162),x=n(88),S=n.n(x),C=n(87),q=n.n(C),z=n(166),N=n(172),T=n(167),_=n(164),A=n(86),B=n.n(A),F=n(163),H=n(54),I=n(3),L=n(83),Q=n.n(L),R=n(85),P=n.n(R),J=n(82),W=n.n(J),D=n(160),G=n(84),M=n.n(G),X=n(157),$=n(158),K=n(159),U=n(171);function V(e){var t=e.primary,n=void 0===t?"":t,a=e.secondary,r=void 0===a?"":a,c=e.icon,i=e.open,l=void 0!==i&&i,s=Object(d.g)().pathname,u=m.a(),p="/".concat(n.toLowerCase());return o.a.createElement(U.a,{title:l?"":n},o.a.createElement(X.a,{button:!0,onClick:u(p),selected:s===p},o.a.createElement($.a,null,o.a.createElement(c,null)),o.a.createElement(K.a,{primary:n,secondary:r})))}var Y=function(e){var t=e.open,n=void 0!==t&&t;return o.a.createElement(D.a,null,o.a.createElement(V,{icon:W.a,open:n,primary:"Home"}),o.a.createElement(V,{icon:Q.a,open:n,primary:"Quiz"}),o.a.createElement(V,{icon:M.a,open:n,primary:"Results"}),o.a.createElement(V,{icon:P.a,open:n,primary:"Statistics"}))},Z=Object(j.a)((function(e){return{root:{display:"flex",backgroundColor:"#f5f5f5",minHeight:"100vh",height:"100%"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(y.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(O.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}}));var ee=function(e){var t,n,a=e.children,r=Z(),c=Object(w.a)(),l=Object(i.useState)(!1),s=Object(E.a)(l,2),u=s[0],d=s[1],m=Object(i.useCallback)((function(){d(!0)}),[]),p=Object(i.useCallback)((function(){d(!1)}),[]);return o.a.createElement("div",{className:r.root},o.a.createElement(k.a,{className:Object(I.a)(r.appBar,Object(y.a)({},r.appBarShift,u)),position:"fixed"},o.a.createElement(F.a,null,o.a.createElement(_.a,{"aria-label":"open drawer",className:Object(I.a)(r.menuButton,Object(y.a)({},r.hide,u)),color:"inherit",edge:"start",onClick:m},o.a.createElement(B.a,null)),o.a.createElement(H.a,{noWrap:!0,variant:"h6"},"Trivia Challenge!"))),o.a.createElement(N.a,{classes:{paper:Object(I.a)((t={},Object(y.a)(t,r.drawerOpen,u),Object(y.a)(t,r.drawerClose,!u),t))},className:Object(I.a)(r.drawer,(n={},Object(y.a)(n,r.drawerOpen,u),Object(y.a)(n,r.drawerClose,!u),n)),variant:"permanent"},o.a.createElement("div",{className:r.toolbar},o.a.createElement(_.a,{onClick:p},"rtl"===c.direction?o.a.createElement(q.a,null):o.a.createElement(S.a,null))),o.a.createElement(z.a,null),o.a.createElement(Y,{open:u})),o.a.createElement("main",{className:r.content},o.a.createElement("div",{className:r.toolbar}),o.a.createElement(T.a,{alignContent:"center",container:!0,justify:"center"},o.a.createElement(T.a,{item:!0,md:6,xs:12},a))))},te=Object(j.a)({veryLarge:{fontSize:70,lineHeight:0},container:{height:"100%"},item:{textAlign:"center"}});var ne=function(){var e=te();return o.a.createElement(T.a,{alignItems:"center",className:e.container,container:!0,justify:"center"},o.a.createElement(T.a,{className:e.item,item:!0},o.a.createElement("h1",{className:e.veryLarge},"404"),o.a.createElement("h2",null,"Page Not Found"),o.a.createElement("p",null,"Oops! We can't seem to find the page you're looking for")))},ae=n(2);var re=function(e){var t=e.title,n=void 0===t?"":t,a=Object(ae.a)(e,["title"]);return Object(i.useEffect)((function(){n&&(document.title=n)}),[n]),o.a.createElement(d.a,a)},ce=o.a.lazy((function(){return n.e(7).then(n.bind(null,211))})),ie=o.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,232))})),oe=o.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,235))})),le=o.a.lazy((function(){return n.e(8).then(n.bind(null,231))}));var se=function(){var e=Object(a.c)((function(e){return e.quiz}));return m.b(e.options),o.a.createElement(i.Suspense,{fallback:o.a.createElement(g,null)},o.a.createElement(u.a,null,o.a.createElement(ee,null,o.a.createElement(d.c,null,o.a.createElement(re,{exact:!0,path:"/TriviaChallenge",title:"Home"},o.a.createElement(ce,null)),o.a.createElement(re,{exact:!0,path:"/TriviaChallenge/home",title:"Home"},o.a.createElement(ce,null)),o.a.createElement(re,{path:"/TriviaChallenge/quiz",title:"Quiz"},o.a.createElement(ie,null)),o.a.createElement(re,{path:"/TriviaChallenge/results",title:"Results"},o.a.createElement(oe,null)),o.a.createElement(re,{path:"/TriviaChallenge/statistics",title:"Statistics"},o.a.createElement(le,null)),o.a.createElement(re,{exact:!0,path:"/TriviaChallenge/404",title:"Page Not Found"},o.a.createElement(ne,null)),o.a.createElement(re,{path:"/*",title:"Page Not Found"},o.a.createElement(ne,null)),o.a.createElement(re,{exact:!0,path:"/",title:"Home"},o.a.createElement(ce,null))))))},ue=n(52),de=n(30),me=n(89),pe=n(90),fe=n(92),he=function(e){function t(){var e,n;Object(ue.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(me.a)(this,(e=Object(pe.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1,message:""},n}return Object(fe.a)(t,e),Object(de.a)(t,[{key:"componentDidCatch",value:function(e){this.setState({message:e.message})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement(T.a,{alignItems:"center",container:!0,justify:"center"},o.a.createElement(T.a,{item:!0,sm:12,xs:10},o.a.createElement(H.a,{align:"center",gutterBottom:!0,variant:"h5"},"Oops something went wrong please try again"),o.a.createElement(H.a,{align:"center",gutterBottom:!0,variant:"body2"},"Error: ".concat(this.state.message)))):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),t}(o.a.Component),be=n(40),ve=n(63),ge={trivia:n(24).a,quiz:ve.b},Ee=Object(be.a)({reducer:ge,devTools:!1}),Oe=n(91),ye=n(53),je=Object(Oe.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:ye.a.A400},background:{default:"#fff"}}}),we=o.a.createElement(he,null,o.a.createElement(a.a,{store:Ee},o.a.createElement(r.a,{theme:je},o.a.createElement(c.a,null),o.a.createElement(se,null)))),ke=document.querySelector("#root");s.a.render(we,ke),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},24:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(40),r=0,c=4;function i(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}var o=Object(a.b)({name:"trivia",initialState:{categories:[],questions:[],total:0,seenAll:!1,loading:!0,error:""},reducers:{fetchRequest:function(e){e.loading=!0},fetchCategoriesSucess:function(e,t){e.categories=t.payload.map((function(e){return{name:e.name,value:String(e.id)}}))},fetchQuerySucess:function(e,t){t.payload.response_code===r?(e.seenAll=!1,e.loading=!1,e.questions=t.payload.results.map((function(e){return e.question=i(e.question),e.correct_answer=i(e.correct_answer),e.incorrect_answers=e.incorrect_answers.map(i),e})),e.total=t.payload.results.length):t.payload.response_code===c?(e.seenAll=!0,e.questions=[],e.total=0):(e.seenAll=!1,e.questions=[],e.total=0)},fetchTokenSucess:function(e){e.error="",e.loading=!1},fetchFailure:function(e,t){e.error=t.payload,e.loading=!1}}}),l=o.actions,s=l.fetchQuerySucess,u=(l.fetchTokenSucess,l.fetchFailure),d=l.fetchRequest,m=l.fetchCategoriesSucess;t.a=o.reducer},45:function(e,t,n){"use strict";var a=n(0),r=n(32);var c=function(){var e=Object(r.f)();return Object(a.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){return e.push("/TriviaChallenge".concat(t))}}),[e])},i=n(25);var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=Object(a.useState)(null),r=Object(i.a)(n,2),c=r[0],o=r[1],l=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return o(a),console.error(a),t}})),s=Object(i.a)(l,2),u=s[0],d=s[1],m=Object(a.useCallback)((function(t){try{var n=t instanceof Function?t(u):t;d(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){o(a),console.error(a)}}),[e,u]);return[u,m,c]},l=n(46),s=n(27),u=n.n(s),d=n(43),m=n(33),p=n(24),f={sucess:0,noResults:1,invalid:2,noSessionFound:3,noQuestionsLeft:4};function h(){return b.apply(this,arguments)}function b(){return(b=Object(d.a)(u.a.mark((function e(){var t,n,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,fetch(t);case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(e){var t=e.type,n=void 0===t?"":t,r=e.difficulty,c=void 0===r?"":r,s=e.amount,b=void 0===s?1:s,v=e.category,g=void 0===v?"":v,E=Object(m.b)(),O=Object(m.c)((function(e){return e.trivia})),y=o("__opentdbToken"),j=Object(i.a)(y,2),w=j[0],k=j[1],x=Object(a.useCallback)(Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(p.e()),e.next=4,h("https://opentdb.com/api_token.php?command=request");case 4:t=e.sent,k(t.token),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),E(p.c(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),[E,k]),S=Object(a.useCallback)(Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h("https://opentdb.com/api_category.php");case 3:t=e.sent,E(p.b(t.trivia_categories)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),E(p.c(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),[E]),C=Object(a.useCallback)(Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="amount=".concat(b),n&&(t+="&type=".concat(n)),c&&(t+="&difficulty=".concat(c)),g&&(t+="&category=".concat(g)),w&&(t+="&token=".concat(w)),e.prev=5,E(p.e()),e.next=9,h("https://opentdb.com/api.php?".concat(t));case 9:a=e.sent,E(p.d(a)),[f.invalid,f.noSessionFound].includes(a.response_code)&&x(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),console.error(e.t0),E(p.c(e.t0));case 18:case"end":return e.stop()}}),e,null,[[5,14]])}))),[b,g,c,E,x,w,n]);return Object(a.useEffect)((function(){S()}),[S]),Object(a.useEffect)((function(){w?C():x()}),[w,O.total,C,x,S,b]),Object(l.a)({},O,{refetchQuestions:C})};n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return c}))},63:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return m}));var a=n(40),r={index:0,selectedAnswers:{},finished:!1,options:{amount:10,category:"",difficulty:"",type:""}},c=Object(a.b)({name:"quiz",initialState:r,reducers:{next:function(e){e.index+=1},back:function(e){e.index-=1},selectAnswer:function(e,t){e.selectedAnswers[t.payload.question]=t.payload.answer},submit:function(e){e.finished=!0},setOptions:function(e,t){e.options=t.payload},reset:function(){return r}}}),i=c.actions,o=i.next,l=i.back,s=i.selectAnswer,u=i.submit,d=i.reset,m=i.setOptions;t.b=c.reducer}},[[101,2,3]]]);
//# sourceMappingURL=main.a90625f6.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(43)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(10),c=a.n(r),i=(a(34),a(35),a(9)),o=a(12),l=a(13),m=a(16),u=a(14),d=a(17),v=(a(36),a(15)),h=a(20),p="wss://echo.websocket.org",E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).ws=new WebSocket(p),a.componentDidMount=function(){console.log(a.props.location.state.user),a.setState({user:a.props.location.state.user}),a.ws.onopen=function(){console.log("connected")},a.ws.onmessage=function(e){var t=JSON.parse(e.data);t.id="1";var n=new Date,s=n.getHours()<10?"0"+n.getHours():n.getHours(),r=n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes();t.time=s+":"+r,a.setState({chatData:[t].concat(Object(i.a)(a.state.chatData))},function(){a.props.dispatch({type:"CHAT_DATA",payload:t})}),console.log(t)},a.ws.onclose=function(){console.log("disconnected"),a.setState({ws:new WebSocket(p)})}},a.textValidate=function(){},a.home=function(e){e.preventDefault(),a.props.history.push({pathname:"/"})},a.sendData=function(e){if(e.preventDefault(),null!==a.message.innerHTML.trim()&&""!==a.message.innerHTML.trim()&&void 0!==a.message.innerHTML.trim()){var t=new Date,n=t.getHours()<10?"0"+t.getHours():t.getHours(),s=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),r={id:"0",message:a.message.innerHTML,time:n+":"+s};a.setState({chatData:[r].concat(Object(i.a)(a.state.chatData))},function(){a.message.innerHTML=" ",a.props.dispatch({type:"CHAT_DATA",payload:r})}),a.ws.send(JSON.stringify(r))}},a.state={sendbuttonActive:!1,chatData:a.props.chatData},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t={active:{transform:"rotate(90deg)",transition:"transform 0.8s ease-in-out"},inActive:{transform:"rotate(-90deg)",transition:"transform 0.8s ease-in-out"}};return s.a.createElement("div",null,s.a.createElement("div",{className:"navBar"},s.a.createElement("div",{className:"user"},s.a.createElement("div",{className:"avaterDivUser"},s.a.createElement("div",{className:"chatlistAvaterUser"})),s.a.createElement("div",{className:"chatListmeasageUser"},s.a.createElement("h5",null,this.state.user),s.a.createElement("p",null,"12:32 PM")),s.a.createElement("div",{onClick:this.home.bind(this),style:{margin:"auto",right:"20px",top:"0",bottom:"0",position:"absolute"}},s.a.createElement("p",null,"Log Out")))),s.a.createElement("div",{className:"homeDiv"},s.a.createElement("div",{className:"leftside"},s.a.createElement("div",{className:"chatlist"},s.a.createElement("div",{className:"avaterDiv"},s.a.createElement("div",{className:"chatlistAvater"})),s.a.createElement("div",{className:"chatListmeasage"},s.a.createElement("h5",null,"Abhimanyu"),s.a.createElement("p",null,"Hi"))),s.a.createElement("div",{className:"chatlist"},s.a.createElement("div",{className:"avaterDiv"},s.a.createElement("div",{className:"chatlistAvater"})),s.a.createElement("div",{className:"chatListmeasage"},s.a.createElement("h5",null,"Abhimanyu"),s.a.createElement("p",null,"Hi"))),s.a.createElement("div",{className:"chatlist"},s.a.createElement("div",{className:"avaterDiv"},s.a.createElement("div",{className:"chatlistAvater"})),s.a.createElement("div",{className:"chatListmeasage"},s.a.createElement("h5",null,"Abhimanyu"),s.a.createElement("p",null,"Hi")))),s.a.createElement("div",{className:"rightside"},s.a.createElement("div",{className:"chatDiv"},this.state.chatData.map(function(e,t){return"0"===e.id?s.a.createElement("div",{key:t,style:{marginTop:"2%",display:"flex",flexDirection:"row"}},s.a.createElement("div",{className:"userLeft"}),s.a.createElement("div",{className:"leftChatbul"},s.a.createElement("div",Object(h.a)(e.message))),s.a.createElement("p",{className:"time"}," ",e.time)):"1"===e.id?s.a.createElement("div",{key:t,style:{marginTop:"2%",display:"flex",flexDirection:"row-reverse"}},s.a.createElement("div",{className:"userRight"}),s.a.createElement("div",{style:{direction:"ltr"},className:"rightChatbul"},s.a.createElement("div",Object(h.a)(e.message))),s.a.createElement("p",{className:"time"},e.time)):void 0})),s.a.createElement("div",{className:"msgBox"},s.a.createElement("div",{className:"textBox"},s.a.createElement("div",{className:"noOutline",ref:function(t){return e.message=t},"data-ph":"Type here ..",contentEditable:"true"})),s.a.createElement("div",{onMouseDown:this.sendData.bind(this),className:"btnSend"},s.a.createElement("img",{alt:"send button ",style:!0===this.state.sendbuttonActive?t.active:t.inActive,className:"sendIcon",src:"/buttons/send.svg"}))))))}}]),t}(s.a.Component),f=Object(v.b)(function(e){return{chatData:e.chatData}})(E),b=(a(41),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){},a.valiadteuser=function(e){e.preventDefault(),a.props.history.push({pathname:"/home",state:{user:a.username.value}})},a.state={},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"loginDiv"},s.a.createElement("div",{className:"loginBanner"},s.a.createElement("form",{onSubmit:this.valiadteuser.bind(this)},s.a.createElement("input",{ref:function(t){return e.username=t},type:"text",placeholder:"username"}),s.a.createElement("input",{ref:function(t){return e.password=t},type:"password",placeholder:"password"}),s.a.createElement("button",{type:"submit",style:{width:"100%",outline:"none",background:"transparent",border:"none"}},s.a.createElement("div",{className:"btnDiv"},s.a.createElement("div",{className:"btn"},s.a.createElement("div",null," Login")))))))}}]),t}(s.a.Component)),g=a(5),w=a(45);var y=function(){var e=Object(g.a)();return e.listen(function(e){window.scrollTo(0,0)}),s.a.createElement(w.b,{onUpdate:function(){return window.scrollTo(0,0)},history:e},s.a.createElement("div",null,s.a.createElement(w.c,null,s.a.createElement(w.a,{exact:!0,path:"/home",component:f}),s.a.createElement(w.a,{path:"/",component:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(27);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var N={chatData:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHAT_DATA":return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{chatData:[t.payload].concat(Object(i.a)(e.chatData))})}return e},A=a(28),H=a(7),T=Object(H.d)(j,Object(H.c)(Object(H.a)(A.a)));c.a.render(s.a.createElement(v.a,{store:T},s.a.createElement(y,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.2c6324c4.chunk.js.map
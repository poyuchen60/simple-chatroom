(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,n){e.exports=n(348)},156:function(e,t,n){},183:function(e,t){},345:function(e,t,n){},348:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(21),l=n.n(r),c=(n(156),n(32)),i=n(22),s=n(40),m=n(16),u=n(17),h=n(19),d=n(18),f=n(20),p=n(137),b=n.n(p),v=document.getElementById("modal-root"),E=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).el=document.createElement("div"),n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){v.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){v.removeChild(this.el)}},{key:"render",value:function(){return l.a.createPortal(this.props.children,this.el)}}]),t}(a.Component),g=n(48),C=n.n(g),O=n(30),k=n.n(O),x=n(28),y=n.n(x),j=n(27),S=n.n(j),w=n(39),D=n.n(w),I=n(15),N=n.n(I),_=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={name:n.props.name,intro:n.props.intro},n.handleTextChange=function(e){return function(t){return n.setState(Object(c.a)({},e,t.target.value))}},n.handleSubmit=function(){var e=n.state,t=e.name,a=e.intro,o=n.props,r=o.onSubmit,l=o.onClose;r({name:t,intro:a}),l()},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.onClose,t=this.state,n=t.name,a=t.intro,r=this.handleTextChange,l=this.handleSubmit;return o.a.createElement(S.a,{open:!0,onClose:e},o.a.createElement(y.a,null,"\u500b\u4eba\u8cc7\u6599"),o.a.createElement(k.a,null,o.a.createElement(D.a,{value:n,onChange:r("name"),margin:"dense",label:"\u540d\u7a31",type:"text",fullWidth:!0}),o.a.createElement(D.a,{value:a,onChange:r("intro"),margin:"dense",label:"\u81ea\u6211\u4ecb\u7d39",type:"text",fullWidth:!0})),o.a.createElement(C.a,null,o.a.createElement(N.a,{onClick:e,color:"primary"},"\u53d6\u6d88"),o.a.createElement(N.a,{onClick:l,color:"primary"},"\u78ba\u5b9a")))}}]),t}(a.Component),B=n(31),W=n.n(B),R=n(34),T=n.n(R),U=n(35),L=n.n(U),M=n(62),A=n.n(M),J=n(38),H=n.n(J),F=n(139),P=n.n(F),z=n(140),G=n.n(z),K=function(e){var t=e.invitations,n=e.onClose,a=e.onDecline,r=e.onAccept;return o.a.createElement(S.a,{open:!0,onClose:n,maxWidth:"sm",fullWidth:!0},o.a.createElement(y.a,null,"\u9080\u8acb"),o.a.createElement(k.a,null,o.a.createElement(W.a,null,t.map(function(e){var t=e.id,n=e.user,l=e.chatroom;return o.a.createElement(T.a,{key:t},o.a.createElement(L.a,{primary:"".concat(n," \u9080\u8acb\u4f60\u81f3 ").concat(l," \u804a\u5929\u5ba4")}),o.a.createElement(A.a,null,o.a.createElement(H.a,{onClick:r(t),"aria-label":"accept"},o.a.createElement(P.a,null)),o.a.createElement(H.a,{onClick:a(t),"aria-label":"decline"},o.a.createElement(G.a,null))))}))))},Y=n(29),V=n.n(Y),$=n(141),q=n.n($),Q=n(143),X=n.n(Q),Z=n(142),ee=n.n(Z),te=n(50),ne=n.n(te),ae=n(144),oe=n.n(ae),re=n(145),le=n.n(re),ce=n(87),ie=n.n(ce),se=n(26),me=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={userDialog:!0,invitationDialog:!1},n.handleDialogOpen=function(e){return function(){return n.setState(Object(c.a)({},e,!0))}},n.handleDialogClose=function(){return n.setState({userDialog:!1,invitationDialog:!1})},n.handleSubmit=function(e){(0,n.props.onInfoUpdate)(e)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.handleDialogClose,t=this.handleDialogOpen,n=this.handleSubmit,r=this.state,l=r.userDialog,c=r.invitationDialog,i=this.props,s=i.classes,m=i.chatrooms,u=i.invitations,h=i.index,d=i.onSelect,f=i.name,p=i.intro,b=i.onLeave,v=i.onDecline,g=i.onAccept;return o.a.createElement(a.Fragment,null,o.a.createElement(V.a,{align:"center",variant:"h3",gutterBottom:!0},"Chatroom"),o.a.createElement("div",{className:s.buttonGroup},o.a.createElement(H.a,{onClick:t("userDialog"),"aria-label":"UserInfo"},o.a.createElement(q.a,null)),o.a.createElement(H.a,{onClick:t("invitationDialog"),"aria-label":"Invitation"},o.a.createElement(ie.a,{color:"secondary",badgeContent:u.length},o.a.createElement(ee.a,null))),o.a.createElement(H.a,{onClick:d(-1),"aria-label":"Lobby"},o.a.createElement(X.a,null))),o.a.createElement(W.a,{className:s.charoomList},m.map(function(e,t){var n=e.name,a=e.members,r=e.id,l=e.unread;return o.a.createElement(T.a,{onClick:d(t),button:!0,key:"chatroom(".concat(r,")")},o.a.createElement(ie.a,{color:"secondary",badgeContent:h===t?0:l},o.a.createElement(ne.a,null,o.a.createElement(oe.a,null))),o.a.createElement(L.a,{primary:n,secondary:"\u4eba\u6578: ".concat(a.length)}),o.a.createElement(A.a,null,o.a.createElement(H.a,{onClick:b(r),"aria-label":"LeaveChatroom"},o.a.createElement(le.a,null))))})),l&&o.a.createElement(E,null,o.a.createElement(_,{name:f,intro:p,onClose:e,onSubmit:n})),c&&!l&&o.a.createElement(E,null,o.a.createElement(K,{onAccept:g,onDecline:v,invitations:u,onClose:e})))}}]),t}(a.Component),ue=Object(se.withStyles)(function(e){return{buttonGroup:{display:"flex",justifyContent:"space-around"},charoomList:{width:"100%"}}})(me),he=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=function(){var e=n.props,t=e.onInvite,a=e.onClose,o=n.state.selected;-1!==o[0]&&t(o[0]),a()},n.handleSearchUsers=function(){var e=n.props.socket,t=n.state.text;e.emit("all_users",t,function(e){return n.setState({users:e})})},n.handleUserSelect=function(e){return function(){return n.setState({selected:[e]})}},n.componentDidMount=function(){n.handleSearchUsers()},n.state={text:"",users:[],selected:[-1]},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.handleUserSelect,t=this.handleSubmit,n=this.props.onClose,a=this.state,r=a.users,l=a.selected;return o.a.createElement(S.a,{open:!0,onClose:n,"aria-labelledby":"user-invite-dialog"},o.a.createElement(y.a,null,"\u9080\u8acb"),o.a.createElement(k.a,null,o.a.createElement(W.a,null,r.map(function(t){var n=t.id,a=t.name;return o.a.createElement(T.a,{button:!0,selected:l[0]===n,onClick:e(n),key:n},o.a.createElement(L.a,{primary:a}))}))),o.a.createElement(C.a,null,o.a.createElement(N.a,{onClick:t,disabled:-1===l[0],color:"primary"},"\u9080\u8acb"),o.a.createElement(N.a,{onClick:n,color:"primary"},"\u53d6\u6d88")))}}]),t}(a.Component),de=n(63),fe=n.n(de),pe=n(64),be=n.n(pe),ve=n(88),Ee=n.n(ve),ge=n(146),Ce=n.n(ge),Oe=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleEnter=function(e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),n.handleSubmit())},n.handleTextChange=function(e){n.setState({text:e.target.value})},n.handleSubmitSuccess=function(){n.setState({locked:!1,text:""})},n.handleSubmit=function(){var e=n.state,t=e.text,a=e.locked,o=n.props.onSend;!a&&t.length>0&&(o(t,n.handleSubmitSuccess),n.setState({locked:!0}))},n.state={text:"",locked:!1},n.inputRef=o.a.createRef(),n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.text,n=this.handleTextChange,a=this.handleSubmit,r=this.handleEnter,l=this.inputRef;return o.a.createElement("div",{className:e.input},o.a.createElement("div",{className:e.textWraper},o.a.createElement(D.a,{autoFocus:!0,inputRef:l,onKeyDown:r,value:t,onChange:n,fullWidth:!0,multiline:!0,rowsMax:"2",InputProps:{className:e.inputText},label:"\u8a0a\u606f",className:e.inputText,placeholder:"\u5728\u6b64\u8f38\u5165\u8a0a\u606f...",margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0}})),o.a.createElement("div",{className:e.buttonWraper},o.a.createElement(N.a,{onClick:a,color:"default",className:e.inputButton},"\u50b3\u9001")))}}]),t}(a.Component),ke=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).scrollToBottom=function(e){return n.scrollDownHelper.current.scrollIntoView({behavior:e||"auto"})},n.componentDidUpdate=function(){var e=n.props,t=e.chatroom,a=t.id,o=t.unread,r=e.onRead;n.state.atBottom&&(n.scrollToBottom("auto"),o>0&&r(a))},n.componentDidMount=function(){return n.scrollToBottom("auto")},n.handleScroll=function(){var e=n.messagesDiv.current,t=e.clientHeight,a=e.scrollTop+t>=e.scrollHeight;a!==n.state.atBottom&&n.setState({atBottom:a})},n.handleDialogClose=function(){return n.setState({selectedMember:void 0,inviteDialog:!1})},n.handleMemberSelect=function(e){return n.setState({selectedMember:e})},n.handleInviteDialogOpen=function(){return n.setState({inviteDialog:!0})},n.scrollDownHelper=o.a.createRef(),n.messagesDiv=o.a.createRef(),n.state={selectedMember:void 0,inviteDialog:!1,atBottom:!0},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.chatroom,n=t.name,r=t.members,l=t.messages,c=t.unread,i=e.classes,s=e.onSend,m=e.socket,u=e.onInvite,h=this.state,d=h.selectedMember,f=h.inviteDialog,p=this.handleDialogClose,b=this.handleMemberSelect,v=this.handleInviteDialogOpen,g=this.handleScroll,C=this.scrollToBottom;return o.a.createElement(a.Fragment,null,d&&o.a.createElement(E,null,o.a.createElement(S.a,{open:!0,onClose:p,"aria-labelledby":"chatroom-member-dialog"},o.a.createElement(y.a,null,d.name),o.a.createElement(k.a,null,d.intro))),f&&!d&&o.a.createElement(E,null,o.a.createElement(he,{onInvite:u,onClose:p,socket:m})),o.a.createElement(fe.a,{position:"static"},o.a.createElement(be.a,null,o.a.createElement(V.a,{variant:"h6",color:"inherit"},n),o.a.createElement(N.a,{color:"inherit",onClick:v},"\u9080\u8acb"))),o.a.createElement("div",{className:i.main},o.a.createElement("div",{className:i.message},c>0&&o.a.createElement(N.a,{onClick:function(){return C()},className:i.unreadButton},"\u65b0\u8a0a\u606f: ".concat(c),o.a.createElement(Ce.a,null)),o.a.createElement("div",{ref:this.messagesDiv,onScroll:g,className:i.list},o.a.createElement(W.a,{className:i.charoomList},l.map(function(e,t){var n=e.name,a=e.text;return o.a.createElement(T.a,{key:t},o.a.createElement(ne.a,null,o.a.createElement(Ee.a,null)),o.a.createElement(L.a,{primary:n,secondary:a}))})),o.a.createElement("div",{ref:this.scrollDownHelper})),o.a.createElement(Oe,{classes:i,onSend:s})),o.a.createElement("aside",{className:i.members},o.a.createElement(W.a,null,r.map(function(e){var t=e.name,n=e.id;return o.a.createElement(T.a,{button:!0,onClick:function(){return b(e)},key:"user#".concat(n)},o.a.createElement(ne.a,null,o.a.createElement(Ee.a,null)),o.a.createElement(L.a,{primary:t}))})))))}}]),t}(a.Component),xe=Object(se.withStyles)(function(e){return{main:{paddingTop:"5px",height:"calc(100% - 68px)",display:"flex"},message:{flex:1,height:"100%"},members:{width:"200px",height:"100%",backgroundColor:"#ffe6e6",overflowY:"auto"},list:{height:"calc(100% - 100px)",overflowY:"scroll"},input:{height:"100px",backgroundColor:"#e6f7ff",display:"flex"},inputButton:{height:"50px"},inputText:{height:"72px"},textWraper:{flex:1,paddingLeft:"10px"},buttonWraper:{display:"flex",justifyContent:"center",alignItems:"center",width:"100px"},unreadButton:{position:"fixed",left:"50%",bottom:"120px",zIndex:10}}})(ke),ye=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={name:""},n.handleTextChange=function(e){return n.setState({name:e.target.value})},n.handleSubmit=function(){var e=n.props,t=e.onSubmit,a=e.onClose;t({name:n.state.name}),a()},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.name,t=this.props.onClose,n=this.handleTextChange,a=this.handleSubmit;return o.a.createElement(S.a,{open:!0,onClose:t},o.a.createElement(y.a,null,"\u5efa\u7acb\u65b0\u804a\u5929\u5ba4"),o.a.createElement(k.a,null,o.a.createElement(D.a,{value:e,onChange:n,autoFocus:!0,margin:"dense",label:"\u623f\u540d",type:"text",fullWidth:!0})),o.a.createElement(C.a,null,o.a.createElement(N.a,{onClick:t,color:"primary"},"\u53d6\u6d88"),o.a.createElement(N.a,{onClick:a,color:"primary"},"\u78ba\u5b9a")))}}]),t}(a.Component),je=n(147),Se=n.n(je),we=n(149),De=n.n(we),Ie=n(148),Ne=n.n(Ie),_e=function(e){var t=e.name,n=e.members,a=e.classes,r=e.onJoin;return o.a.createElement(Se.a,{className:a.card},o.a.createElement(Ne.a,null,o.a.createElement(V.a,{variant:"h6"},t),o.a.createElement(V.a,{color:"textSecondary",gutterBottom:!0},"\u6210\u54e1: ".concat(n))),o.a.createElement(De.a,null,o.a.createElement(N.a,{onClick:r,size:"small"},"Join")))},Be=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={chatrooms:[],newRoomDialogOpen:!1},n.componentDidMount=function(){var e=n.props.socket;e.emit("join_lobby",function(t){n.setState({chatrooms:t},function(){e.on("lobby",function(e){var t,a,o=e.type,r=e.value,l=Object(s.a)(n.state.chatrooms);switch(o){case"new_chatroom":l.push(r);break;case"new_member":t=l.findIndex(function(e){return e.id===r}),(a=Object(i.a)({},l[t])).members=a.members+1,l.splice(t,1,a);break;case"delete_member":t=l.findIndex(function(e){return e.id===r}),(a=Object(i.a)({},l[t])).members=a.members-1,l.splice(t,1,a);break;default:console.log("default")}n.setState({chatrooms:l})})})})},n.componentWillUnmount=function(){n.props.socket.off("lobby")},n.handleNewChatroom=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.props.socket.emit("create_chatroom",e)},n.handleDialogOpen=function(){return n.setState({newRoomDialogOpen:!0})},n.handleDialogClose=function(){return n.setState({newRoomDialogOpen:!1})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.onJoin,a=this.state,r=a.chatrooms,l=a.newRoomDialogOpen,c=this.handleNewChatroom,i=this.handleDialogOpen,s=this.handleDialogClose;return o.a.createElement("div",null,o.a.createElement(fe.a,{position:"static"},o.a.createElement(be.a,null,o.a.createElement(V.a,{variant:"h6",color:"inherit"},"Lobby"),o.a.createElement(N.a,{onClick:i,color:"inherit"},"New"))),o.a.createElement("div",{className:t.cardContainer},r.map(function(e){var a=e.name,r=e.members,l=e.id;return o.a.createElement(_e,{key:l,name:a,members:r,classes:t,onJoin:n(l)})})),l&&o.a.createElement(E,null,o.a.createElement(ye,{onSubmit:c,onClose:s})))}}]),t}(a.Component),We=Object(se.withStyles)(function(e){return{card:{maxWidth:200,margin:10},cardContainer:{margin:20,display:"flex",flexWrap:"wrap"}}})(Be),Re=(n(345),n(150)),Te=n.n(Re),Ue=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){n.handleLogin()},n.handleLogin=function(){var e=n.state.socket;e.emit("login",function(t){n.setState(t,function(){return e.on("user#".concat(t.id),function(e){var t=e.type,a=e.value,o=n.state.invitations;switch(t){case"new_invitation":o=[].concat(Object(s.a)(o),[a]);break;default:console.log("default")}n.setState({invitations:o})})})})},n.handleUserInvite=function(e){return function(t){n.state.socket.emit("invite_user",{inviteeId:t,chatroomId:e},console.log)}},n.handleChatroomRead=function(e,t){var a=n.state.chatrooms,o=Object(i.a)({},a[e],{unread:0});n.setState(Object(i.a)({},t,{chatrooms:Object(i.a)({},a,Object(c.a)({},e,o))}))},n.handleChatroomSelect=function(e){return function(){if(e!==n.state.index)if(e>=0){var t=n.state.chatroomIndex[e];n.handleChatroomRead(t,{index:e})}else n.setState({index:e})}},n.handleChatroomJoin=function(e){return function(){var t=n.state,a=t.socket,o=t.chatrooms,r=t.chatroomIndex;a.emit("join_chatroom",e,function(e){if(e){var t=e.id;n.setState({chatrooms:Object(i.a)({},o,Object(c.a)({},t,Object(i.a)({},e,{unread:0}))),chatroomIndex:[].concat(Object(s.a)(r),[t])},function(){a.on("chatroom#".concat(t),function(e){var a=e.type,o=e.value,r=n.state.chatrooms,l=r[t],m=l.members,u=l.messages,h=l.name,d=l.unread,f=-1,p=void 0;switch(a){case"new_message":u=[].concat(Object(s.a)(u),[o]),d+=1;break;case"new_member":m=[].concat(Object(s.a)(m),[o]),p={name:"\u7cfb\u7d71\u8a0a\u606f",text:"".concat(o.name||"User#".concat(o.id)," \u52a0\u5165\u804a\u5929\u5ba4")};break;case"delete_member":f=m.findIndex(function(e){return e.id===o}),p={name:"\u7cfb\u7d71\u8a0a\u606f",text:"".concat(m[f].name," \u96e2\u958b\u804a\u5929\u5ba4")},m.splice(f,1);break;case"update_member":f=m.findIndex(function(e){return e.id===o.id}),u=u.map(function(e){return e.userId===o.id?Object(i.a)({},e,{name:o.name}):e}),p=o.name===m[f].name?void 0:{name:"\u7cfb\u7d71\u8a0a\u606f",text:"".concat(m[f].name," \u6539\u540d\u70ba ").concat(o.name)},m.splice(f,1,o);break;default:console.log("default")}n.setState({chatrooms:Object(i.a)({},r,Object(c.a)({},t,{id:t,name:h,members:m,unread:d,messages:p?u.concat(p):u}))})})})}})}},n.handleChatroomLeave=function(e){return function(){var t=n.state,a=t.socket,o=t.chatrooms,r=t.chatroomIndex,l=t.index;a.emit("leave_chatroom",e,function(t){if(t!==e)console.log("Wrong!!");else{var c=r.indexOf(t),s=r.filter(function(e){return e!==t}),m=Object(i.a)({},o,{id:void 0});a.off("chatroom#".concat(t)),n.setState({chatrooms:m,chatroomIndex:s,index:l>c?l-1:l===c?-1:l})}})}},n.handleSendMessage=function(e){return function(t,a){n.state.socket.emit("new_message",{chatroomId:e,text:t},function(e){e||a&&a()})}},n.handleInfoUpdate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.state.socket.emit("update_info",e,function(e){var t=e.name,a=e.intro;n.setState({name:t,intro:a})})},n.handleDecline=function(e){return function(){n.state.socket.emit("decline_invitation",e,function(t){if(!t){var a=n.state.invitations.filter(function(t){return t.id!==e});n.setState({invitations:a})}})}},n.handleAccept=function(e){return function(){n.state.socket.emit("accept_invitation",e,function(t,a){if(!t){var o=n.state.invitations.filter(function(t){return t.id!==e});n.setState({invitations:o},n.handleChatroomJoin(a))}})}},n.state={socket:b()("https://infinite-waters-19418.herokuapp.com/"),invitations:[],index:-1,chatrooms:{},chatroomIndex:[],name:"",intro:"",id:-1},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.chatroomIndex,a=t.chatrooms,r=t.index,l=t.invitations,c=t.socket,i=t.name,s=t.intro,m=this.handleChatroomSelect,u=this.handleChatroomJoin,h=this.handleSendMessage,d=this.handleInfoUpdate,f=this.handleChatroomLeave,p=this.handleUserInvite,b=this.handleDecline,v=this.handleAccept,E=this.handleChatroomRead,g=n.map(function(e){return a[e]});return o.a.createElement("div",{className:e.container},o.a.createElement(Te.a,null),o.a.createElement("nav",{className:e.nav},o.a.createElement(ue,{index:r,onAccept:v,onDecline:b,name:i,intro:s,onInfoUpdate:d,chatrooms:g,onSelect:m,invitations:l,onLeave:f})),o.a.createElement("section",{className:e.main},r>=0?o.a.createElement(xe,{onRead:E,onInvite:p(n[r]),socket:c,key:n[r],chatroom:g[r],onSend:h(n[r])}):o.a.createElement(We,{socket:c,onJoin:u})))}}]),t}(a.Component),Le=Object(se.withStyles)(function(e){return{container:{height:"100%",display:"flex"},nav:{paddingTop:"50px",width:"300px",borderRight:"1px solid gray",height:"100%"},main:{flex:1,height:"100%"}}})(Ue);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(Le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[151,2,1]]]);
//# sourceMappingURL=main.6819ab0a.chunk.js.map
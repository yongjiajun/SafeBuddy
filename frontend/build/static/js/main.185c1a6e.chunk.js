(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/DoubleLoad.5dcb01e3.svg"},23:function(e,t,a){e.exports=a.p+"static/media/loading.03930ca6.svg"},24:function(e,t,a){e.exports=a(53)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),s=a.n(l),i=(a(29),a(3)),c=a(4),o=a(7),u=a(5),m=a(6),d=(a(30),a(1)),h=a(8),E=a(9),p=(a(36),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={toRegister:!1},e.renderChild=e.renderChild.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderChild",value:function(){this.setState({toRegister:!0})}},{key:"render",value:function(){return 0==this.state.toRegister?r.a.createElement("div",{className:"login"},r.a.createElement("h1",{className:"logo-title"},r.a.createElement(h.a,{icon:E.c}),"SafeLy"),r.a.createElement("button",{className:"login-button bigBtn",onClick:this.renderChild}," ",r.a.createElement(h.a,{icon:E.e})," SCAN YOUR STUDENT ID TO LOG IN")):r.a.cloneElement(r.a.Children.only(this.props.children),{})}}]),t}(n.Component)),v=a(10),b=(a(13),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={toChild:!1,usr:{sessionId:"1",studentName:null,studentId:a.props.data.studentID,requester:!0,checkedIn:!1,verify:!0,datetime:null},data:a.props.data},a.renderChild=a.renderChild.bind(Object(d.a)(Object(d.a)(a))),a.onInputChange=a.onInputChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderChild",value:function(){this.setState({toChild:!0})}},{key:"onInputChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return 0==this.state.toChild?r.a.createElement("div",{className:"register"},r.a.createElement("h1",{className:"logo-title"},r.a.createElement(h.a,{icon:E.c}),"SafeLy"),r.a.createElement("div",{className:"alert alert-success",role:"alert"},r.a.createElement("b",null,"Your student card is valid !")," Just a few more steps to be safe!"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},r.a.createElement("label",null,"Sign up")),r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"element-inline"},r.a.createElement("div",null,r.a.createElement("label",null,"First name"),r.a.createElement("input",{type:"text",name:"studentName",onChange:this.onInputChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Last name"),r.a.createElement("input",{type:"text"}))),r.a.createElement("div",{className:"element"},r.a.createElement("label",null,"Student E-mail"),r.a.createElement("input",{type:"email"})),r.a.createElement("div",{className:"element"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password"})),r.a.createElement("div",{className:"element"},r.a.createElement("label",null,"Student Id"),r.a.createElement("input",{type:"text",name:"studentId",value:this.props.data.studentID,onChange:this.onInputChange})),r.a.createElement("div",{className:"element divider"},r.a.createElement("label",null,"University"),r.a.createElement("input",{type:"text",value:0==this.props.data.studentUni?"University of Melbourne":"RMIT",disabled:!0})),r.a.createElement("div",{className:"element"},r.a.createElement("button",{type:"button",className:"bigBtn blueTheme",onClick:this.renderChild},"Sign up"))))):r.a.cloneElement(r.a.Children.only(this.props.children),{usr:this.state.usr,studentId:this.state.studentId,studentName:this.state.studentName})}}]),t}(n.Component)),f=a(21),j=a(11),g={position:"absolute",width:"100vw",height:"250vw",zIndex:1,marginTop:"-90%",left:"50%",transform:"translateX(-50%)",clipPath:"circle(50% at 50% 50%)"},C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={currentLocation:{lat:-37.803835,lng:144.960655}},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(j.Map,{google:this.props.google,zoom:14,style:g,initialCenter:this.state.currentLocation},r.a.createElement(j.Marker,{position:this.state.currentLocation}))}}]),t}(n.Component),O=Object(j.GoogleApiWrapper)({apiKey:"AIzaSyDpjsS_Dw5a70HuU5LXjVuQHjPmc7jxc4E"})(C),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={toChild:!1,time:new Date,timeInterval:null,stop:!1,usr:a.props.usr},a.clearTime=a.clearTime.bind(Object(d.a)(Object(d.a)(a))),a.renderChild=a.renderChild.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({stop:!0,timeInterval:setInterval(function(){e.setState({time:new Date})},1e3)})}},{key:"renderChild",value:function(){var e=this;this.setState(function(t){return{toChild:!0,usr:Object(f.a)({},t.usr,{datetime:e.state.time,studentName:e.props.studentName})}})}},{key:"clearTime",value:function(){clearInterval(this.state.timeInterval)}},{key:"render",value:function(){return 0==this.state.toChild?r.a.createElement("div",{className:"selecttime"},r.a.createElement("h1",{className:"logo-title"},r.a.createElement(h.a,{icon:E.c}),"SafeLy"),r.a.createElement("div",{className:"module"},r.a.createElement("div",{className:"instruction"},"Select your desired time to leave. We will find a buddy to leave with you"),r.a.createElement("div",{className:"sml-container"},r.a.createElement("h3",null,"Select your leaving time"),r.a.createElement("div",{className:"hourSelection"},r.a.createElement("input",{type:"number",min:"0",max:"23",className:"num1",placeholder:this.state.time.getHours(),onClick:this.clearTime}),r.a.createElement("div",{className:"seperator"},":"),r.a.createElement("input",{type:"number",min:"0",max:"59",className:"num2",placeholder:this.state.time.getMinutes(),onClick:this.clearTime}),r.a.createElement("div",{className:"seperator"},":"),r.a.createElement("input",{type:"number",min:"0",max:"59",className:"num3",placeholder:this.state.time.getSeconds(),onClick:this.clearTime})),r.a.createElement("h3",{className:"blueTheme"},"Gender Preference"),r.a.createElement("div",null,r.a.createElement("select",{className:"genderpref"},r.a.createElement("option",{value:"male"},"Male"),r.a.createElement("option",{value:"female"},"Female"))),r.a.createElement("button",{className:"centerbtn",onClick:this.renderChild},r.a.createElement(h.a,{icon:E.d})))),r.a.createElement(O,null)):r.a.cloneElement(r.a.Children.only(this.props.children),{usr:this.state.usr})}}]),t}(n.Component),N=a(16),k=a.n(N),S=a(22),w=a.n(S),I=(a(49),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={status:a.props.status},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return 1==this.state.status?r.a.createElement("div",{className:"Loading"},r.a.createElement("img",{src:w.a})):r.a.createElement("div",null)}}]),t}(n.Component)),D=a(23),L=a.n(D),T=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={loading:!1,toChild:!1,userList:[],testUser:[]},e.renderChild=e.renderChild.bind(Object(d.a)(Object(d.a)(e))),e.fetchData=e.fetchData.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderChild",value:function(){this.setState({toChild:!0})}},{key:"componentWillMount",value:function(){}},{key:"fetchData",value:function(){var e=this;k.a.ajax({type:"GET",crossDomain:!0,url:"https://10.25.130.237:5000/getUsers",processData:!1,contentType:"application/json",success:function(t){for(var a=e.state.userList.slice(),n=0;n<t.length;n++)a.push(t[n]);e.setState({userList:a,loading:!1}),console.log(a)},error:function(e){console.log(e)}}).done(function(e){console.log(e)})}},{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.fetchData();var t=0;setInterval(function(){if(t<=6){var a=e.state.userList.slice(0,t);t++,e.setState({testUser:a})}t>6&&e.renderChild()},200)}},{key:"render",value:function(){return 0==this.state.toChild?r.a.createElement("div",{className:"selecttime"},r.a.createElement(I,{status:this.state.loading}),r.a.createElement("h1",{className:"logo-title"},r.a.createElement(h.a,{icon:E.c}),"SafeLy"),r.a.createElement("div",{className:"module"},r.a.createElement("div",{className:"instruction"},"Select your desired time to leave. We will find a buddy to leave with you"),r.a.createElement("div",{className:"sml-container"},r.a.createElement("h3",null,"Congratulation!"),r.a.createElement("div",{className:"userList"},this.state.testUser.map(function(e,t){return r.a.createElement("div",{className:"user",key:t})})),r.a.createElement("h3",{className:"blueTheme"},"These are your buddies :)"),r.a.createElement("button",{className:"centerbtn success",onClick:this.renderChild},r.a.createElement(h.a,{icon:E.a})))),r.a.createElement(O,null),r.a.createElement("div",{className:"sml-container-rnd"},r.a.createElement("h4",null,"We're finding the nearest meet up place"),r.a.createElement("img",{src:L.a}))):r.a.cloneElement(r.a.Children.only(this.props.children),{userList:this.state.testUser,usr:this.props.usr})}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={toChild:!1,testUser:a.props.userList,qr:"https://api.qrserver.com/v1/create-qr-code/?size=800x800&data="+a.props.usr.studentId},a.renderChild=a.renderChild.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderChild",value:function(){this.setState({toChild:!0})}},{key:"componentDidMount",value:function(){var e=this,t=0;setInterval(function(){if(t<=6){var a=e.state.testUser.slice();a.map(function(e){setTimeout(function(){e.checkIn=!0},300)}),t++,e.setState({testUser:a})}6===t&&e.renderChild()},1e3),setInterval(function(){e.renderChild()},1e4)}},{key:"render",value:function(){return 0==this.state.toChild?r.a.createElement("div",{className:"selecttime"},r.a.createElement("h1",{className:"logo-title"},r.a.createElement(h.a,{icon:E.c}),"SafeLy"),r.a.createElement("div",{className:"circleBg"}),r.a.createElement("div",{className:"module"},r.a.createElement("div",{className:"instruction"},"Scan this QR code below at the scanner :)."),r.a.createElement("div",{className:"qr-container"},r.a.createElement("img",{id:"qrcode",src:this.state.qr})),r.a.createElement("div",{className:"sml-container-sqr grid-sys"},this.state.testUser.map(function(e){return r.a.createElement("div",{className:"status-container qr-arrive"},r.a.createElement("div",null,r.a.createElement("div",{className:"user"},r.a.createElement("button",{className:"user-checkbox"},e.checkIn?r.a.createElement(h.a,{icon:E.a}):null)),e.checkIn?r.a.createElement("div",{className:"status arrived"},"Arrived"):r.a.createElement("div",{className:"status otw"},"On the way")))})),r.a.createElement("div",{className:"outter"},r.a.createElement("div",{className:"securetext"},"Security Guard"),r.a.createElement("div",{className:"status-container"},r.a.createElement("div",{className:"user"},r.a.createElement("button",{className:"user-checkbox"},r.a.createElement(h.a,{icon:E.a}))),r.a.createElement("div",{class:"status arrived"},"Arrived"))))):r.a.cloneElement(r.a.Children.only(this.props.children),{userList:this.props.userList})}}]),t}(n.Component),x=(window.google,function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={currentLocation:{lat:-37.796368,lng:144.960655},finalPosition:{lat:-37.7964,lng:144.9612},lineCoordinates:[{lat:-37.796368,lng:144.960655},{lat:-37.7964,lng:144.9612}]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderChild",value:function(){this.setState({toChild:!0})}},{key:"componentDidMount",value:function(){var e=new window.google.maps.DirectionsService,t=new window.google.maps.DirectionsRenderer,a=this.state.currentLocation,n=this.state.finalPosition,r=this;e.route({origin:a,destination:n,optimizeWaypoints:!0,travelMode:"WALKING"},function(e,a){if("OK"===a){console.log(e),t.setDirections(e);e.routes[0];r.setState({lineCoordinates:e.routes[0].overview_path})}else window.alert("Directions request failed due to "+a)})}},{key:"render",value:function(){return r.a.createElement(j.Map,{google:this.props.google,zoom:18,initialCenter:this.state.currentLocation},r.a.createElement(j.Marker,{position:this.state.currentLocation}),r.a.createElement(j.Polyline,{path:this.state.lineCoordinates,geodesic:!1,options:{strokeColor:"#38B44F",strokeOpacity:1,strokeWeight:7}}))}}]),t}(n.Component)),M=Object(j.GoogleApiWrapper)({apiKey:"AIzaSyDpjsS_Dw5a70HuU5LXjVuQHjPmc7jxc4E"})(x),A=(a(50),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={toChild:!1,testUser:a.props.userList},a.renderChild=a.renderChild.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderChild",value:function(){this.setState({toChild:!0})}},{key:"render",value:function(){return 0==this.state.toChild?r.a.createElement("div",{className:"direction"},r.a.createElement("div",{className:"sml-container-rnd top"},r.a.createElement("h4",null,"Please follow direction to the meet up point")),r.a.createElement("div",{className:"btn-controller"},r.a.createElement("button",{className:"round-btn"},"  ",r.a.createElement(h.a,{icon:E.b})," SOS"),r.a.createElement("button",{className:"round-btn"},"  ",r.a.createElement(h.a,{icon:E.f})," Cancel")),r.a.createElement("div",{className:"bottomUI"},r.a.createElement("button",{className:"round-btn medium",onClick:this.renderChild},"I AM ARRIVED"),r.a.createElement("div",{className:"bottom-container"},r.a.createElement("div",{className:"status-container grid-sys-6"},this.state.testUser.map(function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"user"},r.a.createElement("button",{className:"user-checkbox"},e.checkIn?r.a.createElement(h.a,{icon:E.a}):null)),e.checkIn?r.a.createElement("div",{className:"status arrived"},"Arrived"):r.a.createElement("div",{className:"status otw"},"On the way"))})))),r.a.createElement(M,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDpjsS_Dw5a70HuU5LXjVuQHjPmc7jxc4E",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}}),center:{lat:-24.9923319,lng:135.2252427},zoom:9})):r.a.cloneElement(r.a.Children.only(this.props.children),{userList:this.props.userList,usr:this.props.usr})}}]),t}(n.Component)),R=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"selecttime"},r.a.createElement("h1",{className:"logo-title"},r.a.createElement(h.a,{icon:E.c}),"SafeLy"),r.a.createElement("div",{className:"module"},r.a.createElement("div",{className:"instruction"},r.a.createElement("h3",null,"YOU HAVE SAFELY ARRIVED!")),r.a.createElement("div",{className:"sml-container-sqr"},r.a.createElement("div",{className:"userWrapper"},this.props.userList.map(function(e){return r.a.createElement("div",{className:"status-container qr-arrive"},r.a.createElement("div",null,r.a.createElement("div",{className:"user"},r.a.createElement("button",{className:"user-checkbox"},e.checkIn?r.a.createElement(h.a,{icon:E.a}):null)),e.checkIn?r.a.createElement("div",{className:"status arrived"},"Arrived"):r.a.createElement("div",{className:"status otw"},"On the way")))}))),r.a.createElement("div",{className:"instruction"},r.a.createElement("h4",null,"Your escort is done..."),r.a.createElement("h4",null,"For further assistance, we also provide the following service.")),r.a.createElement("div",{className:"bottomWrapper"},r.a.createElement("button",{className:"centerSOS"},r.a.createElement(h.a,{icon:E.b})),r.a.createElement("h4",null,"Emergency assistance"))))}}]),t}(n.Component),F=a(17),P=a.n(F),q=(a(51),a(52),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={toChild:!1,data:[],loading:!1},e.postFile=e.postFile.bind(Object(d.a)(Object(d.a)(e))),e.base64ToBlob=e.base64ToBlob.bind(Object(d.a)(Object(d.a)(e))),e.renderChild=e.renderChild.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderChild",value:function(){this.setState({toChild:!0})}},{key:"onTakePhoto",value:function(e){this.setState({loading:!0}),console.log("takePhoto"),this.postFile(e)}},{key:"onCameraError",value:function(e){console.error("onCameraError",e)}},{key:"onCameraStart",value:function(e){console.log("onCameraStart")}},{key:"onCameraStop",value:function(){console.log("onCameraStop")}},{key:"postFile",value:function(e){var t=this,a=this.base64ToBlob(e),n=new FileReader;n.onloadend=function(e){var a=new FormData;a.append("data",e.target.result),k.a.ajax({type:"POST",crossDomain:!0,url:"https://10.25.130.237:5000/studentIDSub",data:a,xhrFields:{withCredentials:!0},processData:!1,contentType:!1,success:function(e){"0"!=e.studentUni&&"1"!=e.studentUni||null==e.studentID?alert("You have to be Uni or RMIT to access"):t.renderChild(),null==e.studentID&&alert("The picture is blurry, please scan again")},error:function(e){alert(e)}}).done(function(e){t.setState({data:e}),console.log(e)})},n.readAsDataURL(a),this.setState({loading:!1})}},{key:"base64ToBlob",value:function(e){for(var t=atob(e.split(",")[1]),a=[],n=0;n<t.length;n++)a.push(t.charCodeAt(n));return new Blob([new Uint8Array(a)],{type:"image/jpeg"})}},{key:"render",value:function(){var e,t=this;return 0==this.state.toChild?r.a.createElement("div",{className:"Scanner"},r.a.createElement("div",{className:"camera-square"}),r.a.createElement(I,{status:this.state.loading}),r.a.createElement(P.a,(e={onTakePhoto:function(e){t.onTakePhoto(e)},onCameraError:function(e){t.onCameraError(e)},idealFacingMode:F.FACING_MODES.ENVIRONMENT,isMaxResolution:!0,imageType:F.IMAGE_TYPES.JPG,imageCompression:.97},Object(v.a)(e,"isMaxResolution",!1),Object(v.a)(e,"isImageMirror",!1),Object(v.a)(e,"isFullscreen",!0),Object(v.a)(e,"isDisplayStartCameraError",!0),Object(v.a)(e,"sizeFactor",1),Object(v.a)(e,"onCameraStart",function(e){t.onCameraStart(e)}),Object(v.a)(e,"onCameraStop",function(){t.onCameraStop()}),e))):r.a.cloneElement(r.a.Children.only(this.props.children),{data:this.state.data})}}]),t}(n.Component)),W=function(e){function t(){var e;return Object(i.a)(this,t),e=Object(o.a)(this,Object(u.a)(t).call(this)),document.body.addEventListener("click",function(){var e=document.documentElement;(e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen).call(e)}),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(q,null,r.a.createElement(b,null,r.a.createElement(y,null,r.a.createElement(T,null,r.a.createElement(A,null,r.a.createElement(U,null,r.a.createElement(R,null))))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.185c1a6e.chunk.js.map
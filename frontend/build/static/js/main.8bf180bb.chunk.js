(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),s=(a(52),a(5)),i=a(6),o=a(9),m=a(7),u=a(8),d=(a(53),a(4)),h=a(2),E=a(3),v=(a(58),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={toRegister:!1},e.renderChild=e.renderChild.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderChild",value:function(){this.setState({toRegister:!0})}},{key:"render",value:function(){return 0==this.state.toRegister?r.a.createElement("div",{className:"login"},r.a.createElement("h1",{className:"logo-title"},r.a.createElement(h.a,{icon:E.c}),"SafeLy"),r.a.createElement("button",{className:"login-button bigBtn",onClick:this.renderChild}," ",r.a.createElement(h.a,{icon:E.e})," SCAN YOUR STUDENT ID TO LOG IN")):r.a.cloneElement(r.a.Children.only(this.props.children),{})}}]),t}(n.Component)),b=a(10),p=(a(15),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={toChild:!1,usr:{sessionId:"1",studentName:null,studentId:null,requester:!0,checkedIn:!1,verify:!0,datetime:null},data:a.props.data},a.renderChild=a.renderChild.bind(Object(d.a)(Object(d.a)(a))),a.onInputChange=a.onInputChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderChild",value:function(){this.setState({toChild:!0})}},{key:"onInputChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return 0==this.state.toChild?r.a.createElement("div",{className:"register"},r.a.createElement("h1",{className:"logo-title"},r.a.createElement(h.a,{icon:E.c}),"SafeLy"),r.a.createElement("div",{className:"alert alert-success",role:"alert"},r.a.createElement("b",null,"Your student card is valid !")," Just a few more steps to be safe!"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},r.a.createElement("label",null,"Sign up")),r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"element-inline"},r.a.createElement("div",null,r.a.createElement("label",null,"First name"),r.a.createElement("input",{type:"text",name:"studentName",onChange:this.onInputChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Last name"),r.a.createElement("input",{type:"text"}))),r.a.createElement("div",{className:"element"},r.a.createElement("label",null,"Student E-mail"),r.a.createElement("input",{type:"email"})),r.a.createElement("div",{className:"element"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password"})),r.a.createElement("div",{className:"element"},r.a.createElement("label",null,"Student Id"),r.a.createElement("input",{type:"text",name:"studentId",value:this.props.data.studentID,onChange:this.onInputChange})),r.a.createElement("div",{className:"element divider"},r.a.createElement("label",null,"University"),r.a.createElement("input",{type:"text",value:0==this.props.data.studentUni?"University of Melbourne":"RMIT",disabled:!0})),r.a.createElement("div",{className:"element"},r.a.createElement("button",{type:"button",className:"bigBtn blueTheme",onClick:this.renderChild},"Sign up"))))):r.a.cloneElement(r.a.Children.only(this.props.children),{usr:this.state.usr,studentId:this.state.studentId,studentName:this.state.studentName})}}]),t}(n.Component)),N=a(45),g=a(11),f={position:"absolute",width:"100vw",height:"250vw",zIndex:1,marginTop:"-90%",left:"50%",transform:"translateX(-50%)",clipPath:"circle(50% at 50% 50%)"},j=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={currentLocation:{lat:-37.803835,lng:144.960655}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(g.Map,{google:this.props.google,zoom:14,style:f,initialCenter:this.state.currentLocation},r.a.createElement(g.Marker,{position:this.state.currentLocation}))}}]),t}(n.Component),C=Object(g.GoogleApiWrapper)({apiKey:"AIzaSyDpjsS_Dw5a70HuU5LXjVuQHjPmc7jxc4E"})(j),O=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={toChild:!1,time:new Date,timeInterval:null,stop:!1},e.clearTime=e.clearTime.bind(Object(d.a)(Object(d.a)(e))),e.renderChild=e.renderChild.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({stop:!0,timeInterval:setInterval(function(){e.setState({time:new Date})},1e3),usr:this.props.usr})}},{key:"renderChild",value:function(){var e=this;this.setState(function(t){return{toChild:!0,usr:Object(N.a)({},t.usr,{datetime:e.state.time,studentId:e.props.studentId,studentName:e.props.studentName})}})}},{key:"clearTime",value:function(){clearInterval(this.state.timeInterval)}},{key:"render",value:function(){return 0==this.state.toChild?r.a.createElement("div",{className:"selecttime"},r.a.createElement("h1",{className:"logo-title"},r.a.createElement(h.a,{icon:E.c}),"SafeLy"),r.a.createElement("div",{className:"module"},r.a.createElement("div",{className:"instruction"},"Select your desired time to leave. We will find a buddy to leave with you"),r.a.createElement("div",{className:"sml-container"},r.a.createElement("h3",null,"Select your leaving time"),r.a.createElement("div",{className:"hourSelection"},r.a.createElement("input",{type:"number",min:"0",max:"23",className:"num1",placeholder:this.state.time.getHours(),onClick:this.clearTime}),r.a.createElement("div",{className:"seperator"},":"),r.a.createElement("input",{type:"number",min:"0",max:"59",className:"num2",placeholder:this.state.time.getMinutes(),onClick:this.clearTime}),r.a.createElement("div",{className:"seperator"},":"),r.a.createElement("input",{type:"number",min:"0",max:"59",className:"num3",placeholder:this.state.time.getSeconds(),onClick:this.clearTime})),r.a.createElement("h3",{className:"blueTheme"},"Gender Preference"),r.a.createElement("div",null,r.a.createElement("select",{className:"genderpref"},r.a.createElement("option",{value:"male"},"Male"),r.a.createElement("option",{value:"female"},"Female"))),r.a.createElement("button",{className:"centerbtn",onClick:this.renderChild},r.a.createElement(h.a,{icon:E.d})))),r.a.createElement(C,null)):r.a.cloneElement(r.a.Children.only(this.props.children),{usr:this.state.usr})}}]),t}(n.Component),y=a(23),k=a.n(y),S=a(24),w=a.n(S),I="http://10.25.130.83:5000",x=w()(I),T=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={toChild:!1,userList:[]},e.renderChild=e.renderChild.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderChild",value:function(){this.setState({toChild:!0})}},{key:"componentDidMount",value:function(){fetch(I,{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({a:7,str:"Some string: &=&"}),mode:"cors"}).then(function(e){return e.json()}).then(function(e){return console.log(e)}),x.emit("my event",this.props.usr)}},{key:"render",value:function(){return 0==this.state.toChild?r.a.createElement("div",{className:"selecttime"},r.a.createElement("h1",{className:"logo-title"},r.a.createElement(h.a,{icon:E.c}),"SafeLy"),r.a.createElement("div",{className:"module"},r.a.createElement("div",{className:"instruction"},"Select your desired time to leave. We will find a buddy to leave with you"),r.a.createElement("div",{className:"sml-container"},r.a.createElement("h3",null,"Congratulation!"),r.a.createElement("div",{className:"userList"},r.a.createElement("div",{className:"user",style:{marginRight:"1em"}}),r.a.createElement("div",{className:"user",style:{marginRight:"1em"}}),r.a.createElement("div",{className:"user",style:{marginRight:"1em"}})),r.a.createElement("h3",{className:"blueTheme"},"These are your buddies :)"),r.a.createElement("button",{className:"centerbtn success",onClick:this.renderChild},r.a.createElement(h.a,{icon:E.a})))),r.a.createElement(C,null),r.a.createElement("div",{className:"sml-container-rnd"},r.a.createElement("h4",null,"We're finding the nearest meet up place"),r.a.createElement("img",{src:k.a}))):r.a.cloneElement(r.a.Children.only(this.props.children),{})}}]),t}(n.Component),D=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={toChild:!1},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderChild",value:function(){this.setState({toChild:!0})}},{key:"render",value:function(){return 0==this.state.toChild?r.a.createElement("div",{className:"selecttime"},r.a.createElement("h1",{className:"logo-title"},r.a.createElement(h.a,{icon:E.c}),"SafeLy"),r.a.createElement("div",{className:"circleBg"}),r.a.createElement("div",{className:"module"},r.a.createElement("div",{className:"instruction"},"Scan this QR code below at the scanner :)."),r.a.createElement("div",{className:"qr-container"},r.a.createElement("img",{id:"qrcode",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png"})),r.a.createElement("div",{className:"sml-container-sqr"},r.a.createElement("div",{className:"userWrapper"},r.a.createElement("div",{className:"status-container qr-arrive"},r.a.createElement("div",{className:"user"},r.a.createElement("button",{className:"user-checkbox"},r.a.createElement(h.a,{icon:E.a}))),r.a.createElement("div",{class:"status arrived"},"Arrived")),r.a.createElement("div",{className:"status-container qr-arrive"},r.a.createElement("div",{className:"user"},r.a.createElement("button",{className:"user-checkbox"},r.a.createElement(h.a,{icon:E.a}))),r.a.createElement("div",{class:"status arrived"},"Arrived")),r.a.createElement("div",{className:"status-container qr-arrive"},r.a.createElement("div",{className:"user"},r.a.createElement("button",{className:"user-checkbox"},r.a.createElement(h.a,{icon:E.a}))),r.a.createElement("div",{class:"status otw"},"On the way")))),r.a.createElement("div",{className:"outter"},r.a.createElement("div",{className:"securetext"},"Security Guard"),r.a.createElement("div",{className:"status-container"},r.a.createElement("div",{className:"user"},r.a.createElement("button",{className:"user-checkbox"},r.a.createElement(h.a,{icon:E.a}))),r.a.createElement("div",{class:"status arrived"},"Arrived"))))):r.a.cloneElement(r.a.Children.only(this.props.children),{})}}]),t}(n.Component),A=(window.google,function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={currentLocation:{lat:-37.796368,lng:144.960655},finalPosition:{lat:-37.7964,lng:144.9612},lineCoordinates:[{lat:-37.796368,lng:144.960655},{lat:-37.7964,lng:144.9612}]},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderChild",value:function(){this.setState({toChild:!0})}},{key:"componentDidMount",value:function(){var e=new window.google.maps.DirectionsService,t=new window.google.maps.DirectionsRenderer,a=this.state.currentLocation,n=this.state.finalPosition,r=this;e.route({origin:a,destination:n,optimizeWaypoints:!0,travelMode:"WALKING"},function(e,a){if("OK"===a){console.log(e),t.setDirections(e);e.routes[0];r.setState({lineCoordinates:e.routes[0].overview_path})}else window.alert("Directions request failed due to "+a)})}},{key:"render",value:function(){return r.a.createElement(g.Map,{google:this.props.google,zoom:18,initialCenter:this.state.currentLocation},r.a.createElement(g.Marker,{position:this.state.currentLocation}),r.a.createElement(g.Polyline,{path:this.state.lineCoordinates,geodesic:!1,options:{strokeColor:"#38B44F",strokeOpacity:1,strokeWeight:7}}))}}]),t}(n.Component)),L=Object(g.GoogleApiWrapper)({apiKey:"AIzaSyDpjsS_Dw5a70HuU5LXjVuQHjPmc7jxc4E"})(A),R=(a(99),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={toChild:!1},e.renderChild=e.renderChild.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderChild",value:function(){this.setState({toChild:!0})}},{key:"render",value:function(){return 0==this.state.toChild?r.a.createElement("div",{className:"direction"},r.a.createElement("div",{className:"sml-container-rnd top"},r.a.createElement("h4",null,"Please follow direction to the meet up point")),r.a.createElement("div",{className:"btn-controller"},r.a.createElement("button",{className:"round-btn"},"  ",r.a.createElement(h.a,{icon:E.b})," SOS"),r.a.createElement("button",{className:"round-btn"},"  ",r.a.createElement(h.a,{icon:E.f})," Cancel")),r.a.createElement("div",{className:"bottomUI"},r.a.createElement("button",{className:"round-btn medium",onClick:this.renderChild},"I AM ARRIVED"),r.a.createElement("div",{className:"bottom-container"},r.a.createElement("div",{className:"status-container"},r.a.createElement("div",{className:"user"},r.a.createElement("button",{className:"user-checkbox"},r.a.createElement(h.a,{icon:E.a}))),r.a.createElement("div",{className:"status arrived"},"Arrived")),r.a.createElement("div",{className:"status-container"},r.a.createElement("div",{className:"user"},r.a.createElement("button",{className:"user-checkbox"},r.a.createElement(h.a,{icon:E.a}))),r.a.createElement("div",{className:"status arrived"},"Arrived")),r.a.createElement("div",{className:"status-container"},r.a.createElement("div",{className:"user"},r.a.createElement("button",{className:"user-checkbox"},r.a.createElement(h.a,{icon:E.a}))),r.a.createElement("div",{className:"status otw"},"On the way")))),r.a.createElement(L,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDpjsS_Dw5a70HuU5LXjVuQHjPmc7jxc4E",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}}),center:{lat:-24.9923319,lng:135.2252427},zoom:9})):r.a.cloneElement(r.a.Children.only(this.props.children),{})}}]),t}(n.Component)),M=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"selecttime"},r.a.createElement("h1",{className:"logo-title"},r.a.createElement(h.a,{icon:E.c}),"SafeLy"),r.a.createElement("div",{className:"module"},r.a.createElement("div",{className:"instruction"},r.a.createElement("h3",null,"YOU HAVE SAFELY ARRIVED!")),r.a.createElement("div",{className:"sml-container-sqr"},r.a.createElement("div",{className:"userWrapper"},r.a.createElement("div",{className:"status-container qr-arrive"},r.a.createElement("div",{className:"user"},r.a.createElement("button",{className:"user-checkbox"},r.a.createElement(h.a,{icon:E.a}))),r.a.createElement("div",{class:"status arrived"},"Arrived")),r.a.createElement("div",{className:"status-container qr-arrive"},r.a.createElement("div",{className:"user"},r.a.createElement("button",{className:"user-checkbox"},r.a.createElement(h.a,{icon:E.a}))),r.a.createElement("div",{class:"status arrived"},"Arrived")),r.a.createElement("div",{className:"status-container qr-arrive"},r.a.createElement("div",{className:"user"},r.a.createElement("button",{className:"user-checkbox"},r.a.createElement(h.a,{icon:E.a}))),r.a.createElement("div",{class:"status arrived"},"Arrived")))),r.a.createElement("div",{className:"instruction"},r.a.createElement("h4",null,"Your escort is done..."),r.a.createElement("h4",null,"For further assistance, we also provide the following service.")),r.a.createElement("div",{className:"bottomWrapper"},r.a.createElement("button",{className:"centerSOS"},r.a.createElement(h.a,{icon:E.b})),r.a.createElement("h4",null,"Emergency assistance"))))}}]),t}(n.Component),P=a(25),F=a.n(P),U=(a(100),a(101),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={status:a.props.status},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return 1==this.state.status?r.a.createElement("div",{className:"Loading"},r.a.createElement("img",{src:y.loadPic})):r.a.createElement("div",null)}}]),t}(n.Component)),_=a(46),W=a.n(_),q=(a(102),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={toChild:!1,data:[],loading:!1},e.postFile=e.postFile.bind(Object(d.a)(Object(d.a)(e))),e.base64ToBlob=e.base64ToBlob.bind(Object(d.a)(Object(d.a)(e))),e.renderChild=e.renderChild.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderChild",value:function(){this.setState({toChild:!0})}},{key:"onTakePhoto",value:function(e){this.setState({loading:!0}),console.log("takePhoto"),this.postFile(e)}},{key:"onCameraError",value:function(e){console.error("onCameraError",e)}},{key:"onCameraStart",value:function(e){console.log("onCameraStart")}},{key:"onCameraStop",value:function(){console.log("onCameraStop")}},{key:"postFile",value:function(e){var t=this,a=this.base64ToBlob(e),n=new FileReader;n.onloadend=function(e){var a=new FormData;a.append("data",e.target.result),W.a.ajax({type:"POST",crossDomain:!0,url:"https://10.25.130.237:5000/studentIDSub",data:a,xhrFields:{withCredentials:!0},processData:!1,contentType:!1,success:function(e){"0"!=e.studentUni&&"1"!=e.studentUni||null==e.studentID?alert("You have to be Uni or RMIT to access"):t.renderChild(),null==e.studentID&&alert("The picture is blurry, please scan again")},error:function(e){alert(e)}}).done(function(e){t.setState({data:e}),console.log(e)})},n.readAsDataURL(a),this.setState({loading:!1})}},{key:"base64ToBlob",value:function(e){for(var t=atob(e.split(",")[1]),a=[],n=0;n<t.length;n++)a.push(t.charCodeAt(n));return new Blob([new Uint8Array(a)],{type:"image/jpeg"})}},{key:"render",value:function(){var e,t=this;return 0==this.state.toChild?r.a.createElement("div",{className:"Scanner"},r.a.createElement("div",{className:"camera-square"}),r.a.createElement(U,{status:this.state.loading}),r.a.createElement(F.a,(e={onTakePhoto:function(e){t.onTakePhoto(e)},onCameraError:function(e){t.onCameraError(e)},idealFacingMode:P.FACING_MODES.ENVIRONMENT,isMaxResolution:!0,imageType:P.IMAGE_TYPES.JPG,imageCompression:.97},Object(b.a)(e,"isMaxResolution",!1),Object(b.a)(e,"isImageMirror",!1),Object(b.a)(e,"isFullscreen",!0),Object(b.a)(e,"isDisplayStartCameraError",!0),Object(b.a)(e,"sizeFactor",1),Object(b.a)(e,"onCameraStart",function(e){t.onCameraStart(e)}),Object(b.a)(e,"onCameraStop",function(){t.onCameraStop()}),e))):r.a.cloneElement(r.a.Children.only(this.props.children),{data:this.state.data})}}]),t}(n.Component)),B=(w()("http://10.25.130.83:5000"),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(v,null,r.a.createElement(q,null,r.a.createElement(p,null,r.a.createElement(O,null,r.a.createElement(T,null,r.a.createElement(R,null,r.a.createElement(D,null,r.a.createElement(M,null))))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},15:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/loading.03930ca6.svg"},47:function(e,t,a){e.exports=a(103)},52:function(e,t,a){},53:function(e,t,a){},58:function(e,t,a){},96:function(e,t){},99:function(e,t,a){}},[[47,1,2]]]);
//# sourceMappingURL=main.8bf180bb.chunk.js.map
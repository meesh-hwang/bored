(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{214:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var i=n(4),o=n.n(i),r=n(312),c=n(311),l=n(215),a=n(47),s=Object(a.f)();function d(e,t){s.isReady()&&s.navigate(e,t)}var f=n(3),j=n(13),b=n(27),u=n(9),g=n.n(u),h=n(0),x=n(10),p=n(2),y=n(149),O=n.n(y),m=n(119),S=n(24),C=n(1),v=S.a.get("window").width,T=S.a.get("window").height,w={uri:"https://i.ibb.co/jRhR5gH/bg.jpg"};function k(){return Object(C.jsx)(b.a,{source:w,style:B.bgImg})}var B=p.a.create({bgImg:{position:"absolute",minWidth:v,minHeight:T,resizeMode:"cover",zIndex:-1}});function z(e){var t=e.navigation,n=Object(h.useState)(0),i=g()(n,2),o=i[0],r=i[1],c=Object(h.useState)(1),l=g()(c,2),a=l[0],s=l[1],d=Object(h.useState)(0),b=g()(d,2),u=b[0],p=b[1];return Object(C.jsxs)(f.a,{style:D.container,children:[Object(C.jsx)(k,{}),Object(C.jsxs)(f.a,{style:[D.qBox,{marginTop:20}],children:[Object(C.jsx)(x.a,{children:"How many people will be participating?"}),Object(C.jsxs)(f.a,{style:{display:"flex",flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[Object(C.jsx)(j.a,{onPress:function(){s(a<=1?a+0:a-1)},style:{height:30,width:30,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#fff"},children:Object(C.jsx)(x.a,{children:"-"})}),Object(C.jsx)(x.a,{style:{padding:15},children:a}),Object(C.jsx)(j.a,{onPress:function(){return s(a+1)},style:{height:30,width:30,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#fff"},children:Object(C.jsx)(x.a,{children:"+"})})]})]}),Object(C.jsxs)(f.a,{style:D.qBox,children:[Object(C.jsx)(x.a,{children:"How accessible do you need the activity to be?"}),Object(C.jsx)(x.a,{style:{fontSize:10},children:"(Physical limitations, equipment, travel-time, etc.)"}),Object(C.jsxs)(f.a,{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(C.jsxs)(x.a,{style:{marginTop:10},children:[(10*o).toFixed(1),"/10"]}),Object(C.jsx)(O.a,{onValueChange:function(e){return r(e)},style:{width:200,height:40},minimumValue:0,maximumValue:1,minimumTrackTintColor:"#ff5c5c",maximumTrackTintColor:"#fcba03",thumbTintColor:"#d63131"})]})]}),Object(C.jsxs)(f.a,{style:D.qBox,children:[Object(C.jsx)(x.a,{children:"Are you okay with spending money?"}),Object(C.jsxs)(m.a.Group,{onValueChange:function(e){return p(e)},value:u,children:[Object(C.jsx)(m.a.Item,{value:"1",label:"Yes",color:"#ff5c5c"}),Object(C.jsx)(m.a.Item,{value:"0",label:"No",color:"#fcba03"})]})]}),Object(C.jsx)(j.a,{onPress:function(){return t.navigate("ActivityResult",{accessibility:{value:o},people:{participants:a},money:{pay:u}})},style:D.btn,children:Object(C.jsx)(x.a,{style:D.btnTxt,children:"Continue"})})]})}var D=p.a.create({container:{flex:1,display:"flex",flexDirection:"column",alignItems:"center"},btn:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:20,width:180,maxHeight:90,alignSelf:"center",borderWidth:5,borderColor:"#ff5c5c",shadowColor:"black",backgroundColor:"#ff5c5c"},btnTxt:{fontSize:28,paddingVertical:10,paddingHorizontal:20,fontWeight:"700",color:"#fff"},qBox:{backgroundColor:"#ffd0d0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:20,width:"90%",height:160,borderRadius:20,marginVertical:5}});function I(e){var t=e.navigation;return Object(C.jsxs)(f.a,{style:P.container,children:[Object(C.jsx)(k,{}),Object(C.jsxs)(f.a,{style:P.whiteBox,children:[Object(C.jsx)(f.a,{style:P.boredBox,children:Object(C.jsx)(x.a,{style:P.bored,children:"Bored?"})}),Object(C.jsxs)(f.a,{style:P.questionBox,children:[Object(C.jsx)(x.a,{style:P.question,children:"Don't know what to do?"}),Object(C.jsx)(x.a,{style:P.desc,children:"Try this simple app that can help with that!"})]})]}),Object(C.jsx)(j.a,{onPress:function(){return t.navigate("Activity")},style:[P.btn],children:Object(C.jsx)(x.a,{style:P.btnTxt,children:"Start"})})]})}var P=p.a.create({container:{flex:1,backgroundColor:"#ffd0d0",paddingHorizontal:20,display:"flex",flexDirection:"column",alignItems:"center"},bored:{fontSize:26,margin:10,fontWeight:"700",color:"#ff5c5c"},question:{textAlign:"center",fontSize:18,color:"#d63131"},whiteBox:{backgroundColor:"#ffd0d0",display:"flex",flexDirection:"column",alignItems:"center",marginTop:150,justifyContent:"center",paddingHorizontal:30,borderWidth:1,borderColor:"#d63131",borderRadius:30},questionBox:{marginBottom:20,paddingBottom:20},boredBox:{marginTop:20},btn:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:40,width:180,maxHeight:60,alignSelf:"center",borderWidth:5,borderColor:"#ff5c5c",shadowColor:"black",backgroundColor:"#ff5c5c"},btnTxt:{fontSize:33,padding:10,fontWeight:"700",color:"#fff"},desc:{textAlign:"center",color:"#ff5c5c"}}),W=n(38),H=n(42);function R(){var e=Object(h.useState)(!1),t=g()(e,2),n=t[0],i=t[1],o=Object(h.useState)(!1),r=g()(o,2),c=r[0],l=r[1];return Object(C.jsxs)(f.a,{style:{marginTop:10},children:[Object(C.jsx)(H.b,{style:L.question,children:"Are you happy with this result?"}),Object(C.jsxs)(f.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(C.jsx)(j.a,{title:"No",onPress:function(){return i(!0)},style:[L.btn,{width:10,marginRight:7}],children:Object(C.jsx)(H.b,{style:L.btnTxt,children:"No"})}),Object(C.jsx)(j.a,{title:"Yes",onPress:function(){return l(!0)},style:[L.btn,{width:10,marginRight:7}],children:Object(C.jsx)(H.b,{style:L.btnTxt,children:"Yes"})})]}),Object(C.jsxs)(H.a,{isVisible:n,style:{paddingHorizontal:10,paddingVertical:20},children:[Object(C.jsx)(H.b,{style:{lineHeight:1.8,fontSize:26,fontWeight:"500",paddingTop:30,paddingBottom:10},children:"Sorry!"}),Object(C.jsx)(H.b,{style:{paddingTop:10,paddingBottom:20},children:"Do you want to hear a joke instead?"}),Object(C.jsxs)(f.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(C.jsx)(j.a,{onPress:function(){d("Home"),i(!1)},style:[L.overBtn,{marginRight:5}],children:Object(C.jsx)(H.b,{style:L.overBtnTxt,children:"No"})}),Object(C.jsx)(j.a,{onPress:function(){d("Joke"),l(!1)},style:[L.overBtn,{marginLeft:5}],children:Object(C.jsx)(H.b,{style:[L.overBtnTxt,{paddingHorizontal:20}],children:"Yes"})})]})]}),Object(C.jsxs)(H.a,{isVisible:c,children:[Object(C.jsx)(H.b,{style:{lineHeight:1.8,fontSize:26,fontWeight:"500",paddingVertical:20,paddingTop:30,paddingBottom:15,textAlign:"center"},children:"Yay!"}),Object(C.jsx)(H.b,{style:{paddingTop:5,paddingBottom:10,textAlign:"center",fontSize:18,fontWeight:"400"},children:"Hope you have a nice day! \ud83d\ude0a"}),Object(C.jsx)(H.b,{style:{fontSize:14,paddingBottom:20},children:"Do you want to hear a joke?"}),Object(C.jsxs)(f.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(C.jsx)(j.a,{onPress:function(){d("Home"),i(!1)},style:[L.overBtn,{marginRight:5}],children:Object(C.jsx)(H.b,{style:L.overBtnTxt,children:"Close"})}),Object(C.jsx)(j.a,{onPress:function(){d("Joke"),l(!1)},style:[L.overBtn,{marginLeft:5}],children:Object(C.jsx)(H.b,{style:[L.overBtnTxt],children:"Yes"})})]})]})]})}var L=p.a.create({btn:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:20,width:150,alignSelf:"center",borderWidth:5,borderColor:"#ff5c5c",shadowColor:"black",backgroundColor:"#ff5c5c"},btnTxt:{fontSize:28,paddingVertical:10,paddingHorizontal:20,fontWeight:"700",color:"#fff"},question:{color:"#fff",fontSize:20,marginTop:10,fontWeight:"600"},overBtn:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#ff5c5c",flex:1,paddingVertical:15,marginTop:6},overBtnTxt:{color:"#ffff",fontWeight:"600",fontSize:22}});function N(e){var t=e.route,n=e.navigation,i=t.params.accessibility,o=t.params.people,r=t.params.money,c=JSON.stringify(o).replace(/^\D+/g,"").slice(0,-2),l=JSON.stringify(i).replace(/^\D+/g,"").slice(0,-1),a=JSON.stringify(r).replace(/^\D+/g,"").slice(0,-2),s=Object(h.useState)(null),d=g()(s,2),j=d[0],b=d[1],u=Object(h.useState)(!1),x=g()(u,2),p=x[0],y=x[1],O=Object(h.useState)([]),m=g()(O,2),S=m[0],v=m[1];return Object(h.useEffect)((function(){fetch("http://www.boredapi.com/api/activity?participants="+c+"&?minprice=0&maxprice="+a+"&?minaccessibility=0&maxaccessibility="+l).then((function(e){return e.json()})).then((function(e){y(!0),v(e)}),(function(e){y(!0),b(e)}))}),[]),Object(C.jsxs)(f.a,{style:V.container,children:[Object(C.jsx)(k,{}),A(j,p,S,n)]})}function A(e,t,n,i){return e?Object(C.jsx)(f.a,{children:Object(C.jsxs)(x.a,{children:["Error: ",e.message]})}):t?void 0===n?Object(C.jsx)(f.a,{children:Object(C.jsx)(x.a,{children:"No records found for search"})}):Object(C.jsxs)(f.a,{style:{width:"90%"},children:[Object(C.jsx)(f.a,{style:V.activityContainer,children:Object(C.jsx)(x.a,{style:V.activity,children:n.activity})}),Object(C.jsx)(R,{})]}):Object(C.jsxs)(f.a,{children:[Object(C.jsx)(x.a,{children:"Loading..."}),Object(C.jsx)(W.a,{size:"large",color:"#d63131"})]})}var V=p.a.create({container:{flex:1,display:"flex",flexDirection:"column",alignItems:"center"},activity:{fontSize:25,fontWeight:"600",alignSelf:"center"},activityContainer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#ffd0d0",padding:30,marginTop:50,marginBottom:10}}),J=n(129),q=n(61),M=[{item:"Programming",id:"PRGRM"},{item:"Dark",id:"DRK"},{item:"Pun",id:"PUN"},{item:"Spooky",id:"SPKY"},{item:"Miscellaneous",id:"MISC"},{item:"Any",id:"ANY"}],E=[{item:"Racist",id:"RCST"},{item:"Sexist",id:"SXST"},{item:"Political",id:"PLTL"},{item:"Religious",id:"RLG"},{item:"NSFW",id:"NSFW"}];function Y(e){var t=e.navigation,n=Object(h.useState)([]),i=g()(n,2),o=i[0],r=i[1],c=Object(h.useState)([]),l=g()(c,2),a=l[0],s=l[1];function d(){return function(e){return r(Object(q.xorBy)(o,[e],"id"))}}function b(){return function(e){return s(Object(q.xorBy)(a,[e],"id"))}}return Object(C.jsxs)(f.a,{style:F.container,children:[Object(C.jsx)(k,{}),Object(C.jsx)(f.a,{style:F.select,children:Object(C.jsx)(J.a,{options:M,selectedValues:o,inputPlaceholder:"Select",label:"What kind of jokes do you like?*",onMultiSelect:d(),onTapClose:d(),isMulti:!0,hideInputFilter:!0,containerStyle:{backgroundColor:"#fff",paddingBottom:20,paddingLeft:10},labelStyle:{fontSize:18,fontWeight:"600",paddingLeft:10,color:"#000",backgroundColor:"#fff",paddingTop:20},multiListEmptyLabelStyle:{fontSize:14,paddingLeft:10},multiOptionContainerStyle:{backgroundColor:"#ff5c5c"},arrowIconColor:"#ff5c5c",searchIconColor:"#ff5c5c",toggleIconColor:"#ff5c5c",optionsLabelStyle:{fontSize:16,paddingLeft:10}})}),Object(C.jsx)(f.a,{style:F.select,children:Object(C.jsx)(J.a,{options:E,selectedValues:a,inputPlaceholder:"Select",label:"What jokes do you not want to see?",onMultiSelect:b(),onTapClose:b(),labelStyle:{fontSize:18,fontWeight:"600",color:"#000",paddingTop:20,backgroundColor:"#fff",paddingLeft:10},hideInputFilter:!0,containerStyle:{backgroundColor:"#fff",paddingBottom:20},isMulti:!0,multiOptionContainerStyle:{backgroundColor:"#ff5c5c"},multiListEmptyLabelStyle:{fontSize:14,paddingLeft:10},arrowIconColor:"#ff5c5c",searchIconColor:"#ff5c5c",toggleIconColor:"#ff5c5c",optionsLabelStyle:{fontSize:16}})}),Object(C.jsx)(j.a,{onPress:function(){return t.navigate("JokeResult",{type:{genres:o},banned:{blacklisted:a}})},style:F.btn,children:Object(C.jsx)(x.a,{style:F.btnTxt,children:"Submit"})})]})}var F=p.a.create({container:{flex:1},btn:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:20,width:180,maxHeight:80,alignSelf:"center",borderWidth:5,borderColor:"#ff5c5c",shadowColor:"black",backgroundColor:"#ff5c5c"},btnTxt:{fontSize:28,paddingVertical:10,paddingHorizontal:20,fontWeight:"700",color:"#fff"},select:{marginTop:20,marginBottom:20,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingHorizontal:20}});function G(e){var t=e.route,n=e.navigation,i=t.params.type,o=t.params.banned,r=JSON.stringify(i),c=JSON.stringify(o);r=JSON.parse(r).genres,c=JSON.parse(c).blacklisted;var l=Object.values(r),a=Object.values(c),s="",d="";Object.entries(l),Object.entries(a);for(var j=0,b=l.length;j<b;j++)s+=","+[l[j].item];for(j=0,b=a.length;j<b;j++)d+=","+[a[j].item];s=s.substring(1),d=d.substring(1);var u=Object(h.useState)(null),x=g()(u,2),p=x[0],y=x[1],O=Object(h.useState)(!1),m=g()(O,2),S=m[0],v=m[1],T=Object(h.useState)([]),w=g()(T,2),B=w[0],z=w[1];return Object(h.useEffect)((function(){fetch("https://v2.jokeapi.dev/joke/"+s+"?blacklistFlags="+d).then((function(e){return e.json()})).then((function(e){v(!0),z(e)}),(function(e){v(!0),y(e)}))}),[]),Object(C.jsxs)(f.a,{style:U.container,children:[Object(C.jsx)(k,{}),K(p,S,B,n)]})}function K(e,t,n,i){return e?Object(C.jsxs)(f.a,{children:[Object(C.jsx)(x.a,{h3:!0,children:"Error: Can't generate joke."}),Object(C.jsx)(x.a,{children:"Please choose at least one category in the previous page."})]}):t?void 0===n||null===n?Object(C.jsxs)(f.a,{children:[Object(C.jsx)(x.a,{children:"Sorry!"}),Object(C.jsx)(x.a,{children:"No jokes have been found with those filters!"})]}):Object(C.jsxs)(f.a,{style:U.result,children:[Object(C.jsx)(x.a,{h1:!0,style:U.txtBox,children:n.setup}),Object(C.jsx)(x.a,{h1:!0,style:U.txtBox,children:n.delivery}),Object(C.jsx)(j.a,{style:U.btn,onPress:function(){return i.navigate("Activity")},children:Object(C.jsx)(x.a,{style:U.btnTxt,children:"Start over"})})]}):Object(C.jsxs)(f.a,{children:[Object(C.jsx)(x.a,{children:"Loading..."}),Object(C.jsx)(W.a,{size:"large",color:"#ff5c5c"})]})}var U=p.a.create({btn:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:10,width:200,alignSelf:"center",borderWidth:5,borderColor:"#ff5c5c",shadowColor:"black",backgroundColor:"#ff5c5c"},btnTxt:{fontSize:36,padding:10,fontWeight:"700",color:"#fff"},container:{fontSize:20},txtBox:{fontSize:25,fontWeight:"600",alignSelf:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#ffd0d0",padding:30,marginTop:10,marginBottom:10},result:{marginHorizontal:30,marginTop:40}});function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=Object(r.a)(),$={uri:"https://i.ibb.co/Rv18tvW/logo.png"};function _(){return Object(C.jsx)(l.b,{children:Object(C.jsx)(c.a,{ref:s,children:Object(C.jsxs)(Z.Navigator,{children:[Object(C.jsx)(Z.Screen,{name:"Home",component:I,options:{headerTitleAlign:"center",headerTitle:function(e){return Object(C.jsx)(ee,Q({},e))},headerStyle:{backgroundColor:"#ff5c5c"}}}),Object(C.jsx)(Z.Screen,{name:"Activity",component:z,options:{headerTitleAlign:"center",headerTitle:function(e){return Object(C.jsx)(ee,Q({},e))},headerStyle:{backgroundColor:"#ff5c5c"},headerTintColor:"#fff"}}),Object(C.jsx)(Z.Screen,{name:"ActivityResult",component:N,options:{headerTitleAlign:"center",headerTitle:function(e){return Object(C.jsx)(ee,Q({},e))},headerStyle:{backgroundColor:"#ff5c5c"},headerTintColor:"#fff"}}),Object(C.jsx)(Z.Screen,{name:"Joke",component:Y,options:{headerTitleAlign:"center",headerTitle:function(e){return Object(C.jsx)(ee,Q({},e))},headerStyle:{backgroundColor:"#ff5c5c"},headerTintColor:"#fff"}}),Object(C.jsx)(Z.Screen,{name:"JokeResult",component:G,options:{headerTitleAlign:"center",headerTitle:function(e){return Object(C.jsx)(ee,Q({},e))},headerStyle:{backgroundColor:"#ff5c5c"},headerTintColor:"#fff"}})]})})})}function ee(){return Object(C.jsx)(f.a,{children:Object(C.jsx)(j.a,{onPress:function(){return d("Home")},style:{paddingTop:10,paddingBottom:10},children:Object(C.jsx)(b.a,{source:$,alt:"bored app logo",className:"logo",style:{width:200,height:100,resizeMode:"contain",paddingTop:10}})})})}},219:function(e,t,n){e.exports=n(292)}},[[219,1,2]]]);
//# sourceMappingURL=app.5b365852.chunk.js.map
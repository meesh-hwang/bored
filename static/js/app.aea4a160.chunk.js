(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{219:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));n(297);var i=n(320),c=n(319),s=n(321),r=n(220),a=n(32),o=Object(a.j)();function l(e,t){o.isReady()&&o.navigate(e,t)}var j=n(9),u=n.n(j),b=n(0),d=n(3),O=n(11),h=n(55),x=n(2),f=n(19),m=n(153),y=n.n(m),p=n(123),g=n(1);function v(e){e.route;var t=e.navigation,n=Object(b.useState)(0),i=u()(n,2),c=i[0],s=i[1],r=Object(b.useState)(1),a=u()(r,2),o=a[0],l=a[1],j=Object(b.useState)(0),x=u()(j,2),m=x[0],v=x[1];return Object(g.jsxs)(d.a,{style:S.container,children:[Object(g.jsxs)(d.a,{children:[Object(g.jsx)(O.a,{h1:!0,children:"How many people will be participating?"}),Object(g.jsxs)(d.a,{style:{display:"flex",flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[Object(g.jsx)(f.a,{onPress:function(){l(o<=1?o+0:o-1)},style:{height:30,width:30,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#fff"},children:Object(g.jsx)(O.a,{children:"-"})}),Object(g.jsx)(O.a,{style:{padding:15},children:o}),Object(g.jsx)(f.a,{onPress:function(){return l(o+1)},style:{height:30,width:30,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#fff"},children:Object(g.jsx)(O.a,{children:"+"})})]}),Object(g.jsx)(h.a,{onPress:function(){return t.navigate("Accessibility",{people:{participants:o}})},title:"Next"})]}),Object(g.jsxs)(d.a,{children:[Object(g.jsx)(O.a,{children:"How accessible do you need the activity to be?"}),Object(g.jsx)(O.a,{children:"(Physical limitations, equipment, travel-time, etc.)"}),Object(g.jsxs)(d.a,{children:[Object(g.jsxs)(O.a,{children:[(10*c).toFixed(1),"/10"]}),Object(g.jsx)(y.a,{onValueChange:function(e){return s(e)},style:{width:200,height:40},minimumValue:0,maximumValue:1,minimumTrackTintColor:"black",maximumTrackTintColor:"grey"})]})]}),Object(g.jsxs)(d.a,{children:[Object(g.jsx)(O.a,{children:"Are you okay with spending money?"}),Object(g.jsxs)(p.a.Group,{onValueChange:function(e){return v(e)},value:m,children:[Object(g.jsx)(p.a.Item,{value:"1",label:"Yes"}),Object(g.jsx)(p.a.Item,{value:"0",label:"No"})]})]}),Object(g.jsx)(h.a,{onPress:function(){return t.navigate("ActivityResult",{accessibility:{value:c},people:{participants:o},money:{pay:m}})},title:"Let's go"})]})}var S=x.a.create({container:{flex:1}}),k=n(45),w="#ded000",P="#ded000",N={Button:{buttonStyle:{raised:!0,borderRadius:60,backgroundColor:"#ded000"},titleStyle:{color:P},icon:{color:P},type:"clear"},Text:{h1Style:{color:"#ded000",fontWeight:"bold",fontWeight:"normal",fontSize:100},h2Style:{color:w,fontWeight:"normal",fontSize:26,margin:10},h3Style:{color:w,fontWeight:"normal",fontSize:20,margin:5},style:{margin:5}}};function C(e){var t=e.navigation;return Object(g.jsx)(k.d,{theme:N,children:Object(g.jsxs)(d.a,{style:J.container,children:[Object(g.jsx)(k.a,{onPress:function(){return t.navigate("Activity")},title:"Start"}),Object(g.jsx)(k.c,{h1:!0,children:"Hi its "})]})})}var J=x.a.create({container:{flex:1}}),R=n(41),D=function(){var e=Object(b.useState)(!1),t=u()(e,2),n=t[0],i=t[1],c=Object(b.useState)(!1),s=u()(c,2),r=s[0],a=s[1];return Object(g.jsxs)(d.a,{children:[Object(g.jsx)(k.a,{title:"Yes",onPress:function(){return a(!0)}}),Object(g.jsx)(k.a,{title:"No",onPress:function(){return i(!0)}}),Object(g.jsxs)(k.b,{isVisible:n,children:[Object(g.jsx)(k.c,{h3:!0,children:"Sorry!"}),Object(g.jsx)(k.c,{children:"Do you want to hear a joke instead?"}),Object(g.jsxs)(d.a,{style:{display:"flex",flexDirection:"row"},children:[Object(g.jsx)(k.a,{title:"Back to Start",onPress:function(){l("Home"),i(!1)}}),Object(g.jsx)(k.a,{title:"Yes",onPress:function(){l("Joke"),i(!1)}})]})]}),Object(g.jsxs)(k.b,{isVisible:r,children:[Object(g.jsx)(k.c,{h3:!0,children:"Yay!"}),Object(g.jsx)(k.c,{children:"Hope you have a nice day! \ud83d\ude0a"}),Object(g.jsx)(d.a,{style:{display:"flex",flexDirection:"row"},children:Object(g.jsx)(k.a,{title:"Close",onPress:function(){l("Home"),window.location.reload()}})})]})]})};function T(e){var t=e.route,n=e.navigation,i=t.params.accessibility,c=t.params.people,s=t.params.money,r=JSON.stringify(c).replace(/^\D+/g,"").slice(0,-2),a=JSON.stringify(i).replace(/^\D+/g,"").slice(0,-1),o=JSON.stringify(s).replace(/^\D+/g,"").slice(0,-2),l=Object(b.useState)(null),j=u()(l,2),O=j[0],h=j[1],x=Object(b.useState)(!1),f=u()(x,2),m=f[0],y=f[1],p=Object(b.useState)([]),v=u()(p,2),S=v[0],k=v[1];return Object(b.useEffect)((function(){fetch("http://www.boredapi.com/api/activity?participants="+r+"&?minprice=0&maxprice="+o+"&?minaccessibility=0&maxaccessibility="+a).then((function(e){return e.json()})).then((function(e){y(!0),k(e)}),(function(e){y(!0),h(e)}))}),[]),Object(g.jsx)(d.a,{children:A(O,m,S,n)})}function A(e,t,n,i){return e?Object(g.jsx)(d.a,{children:Object(g.jsxs)(O.a,{children:["Error: ",e.message]})}):t?void 0===n?Object(g.jsx)(d.a,{children:Object(g.jsx)(O.a,{children:"No records found for search"})}):Object(g.jsxs)(d.a,{children:[Object(g.jsx)(O.a,{h1:!0,children:n.activity}),Object(g.jsx)(O.a,{children:"Are you happy with this result?"}),Object(g.jsx)(D,{})]}):Object(g.jsxs)(d.a,{children:[Object(g.jsx)(O.a,{children:"Loading..."}),Object(g.jsx)(R.a,{size:"large",color:"#00ff00"})]})}x.a.create({container:{flex:1}});var H=n(133),V=n(65),W=[{item:"Programming",id:"PRGRM"},{item:"Dark",id:"DRK"},{item:"Pun",id:"PUN"},{item:"Spooky",id:"SPKY"},{item:"Miscellaneous",id:"MISC"},{item:"Any",id:"ANY"}],M=[{item:"Racist",id:"RCST"},{item:"Sexist",id:"SXST"},{item:"Political",id:"PLTL"},{item:"Religious",id:"RLG"},{item:"NSFW",id:"NSFW"}];function I(e){var t=e.navigation,n=Object(b.useState)([]),i=u()(n,2),c=i[0],s=i[1],r=Object(b.useState)([]),a=u()(r,2),o=a[0],l=a[1];function j(){return function(e){return s(Object(V.xorBy)(c,[e],"id"))}}function x(){return function(e){return l(Object(V.xorBy)(o,[e],"id"))}}return Object(g.jsxs)(d.a,{children:[Object(g.jsxs)(d.a,{children:[Object(g.jsx)(O.a,{h1:!0,children:"What kind of jokes do you like?"}),Object(g.jsx)(H.a,{options:W,selectedValues:c,onMultiSelect:j(),onTapClose:j(),isMulti:!0})]}),Object(g.jsxs)(d.a,{children:[Object(g.jsx)(O.a,{h1:!0,children:"What kind of jokes do you not want to see?"}),Object(g.jsx)(H.a,{options:M,selectedValues:o,onMultiSelect:x(),onTapClose:x(),isMulti:!0})]}),Object(g.jsx)(h.a,{title:"Submit",onPress:function(){return t.navigate("JokeResult",{type:{genres:c},banned:{blacklisted:o}})}})]})}function L(e){var t=e.route,n=e.navigation,i=t.params.type,c=t.params.banned,s=Object(b.useState)(null),r=u()(s,2),a=r[0],o=r[1],l=Object(b.useState)(!1),j=u()(l,2),O=j[0],h=j[1],x=Object(b.useState)([]),f=u()(x,2),m=f[0],y=f[1],p=JSON.stringify(i);p=JSON.parse(p).genres;var v="",S=Object.values(p);Object.entries(S);for(var k=0,w=S.length;k<w;k++)v+=","+[S[k].item];v=v.substring(1);var P=JSON.stringify(c);P=JSON.parse(P).blacklisted;var N="",C=Object.values(P);Object.entries(C);for(k=0,w=C.length;k<w;k++)N+=","+[C[k].item];return N=N.substring(1),Object(b.useEffect)((function(){fetch("https://v2.jokeapi.dev/joke/"+v+"?blacklistFlags="+N).then((function(e){return e.json()})).then((function(e){h(!0),y(e)}),(function(e){h(!0),o(e)}))}),[]),Object(g.jsx)(d.a,{children:Y(a,O,m,n)})}function Y(e,t,n,i){return e?Object(g.jsx)(d.a,{children:Object(g.jsxs)(O.a,{children:["Error: ",e.message]})}):t?void 0===n?Object(g.jsx)(d.a,{children:Object(g.jsx)(O.a,{children:"No records found for search"})}):Object(g.jsxs)(d.a,{children:[Object(g.jsx)(O.a,{h1:!0,children:n.setup}),Object(g.jsx)(O.a,{h1:!0,children:n.delivery}),Object(g.jsx)(h.a,{title:"Start over",onPress:function(){return i.navigate("Home")}})]}):Object(g.jsxs)(d.a,{children:[Object(g.jsx)(O.a,{children:"Loading..."}),Object(g.jsx)(R.a,{size:"large",color:"#00ff00"})]})}var z=Object(i.a)();Object(s.a)();function B(){return Object(g.jsx)(r.b,{children:Object(g.jsx)(c.a,{ref:o,children:Object(g.jsxs)(z.Navigator,{children:[Object(g.jsx)(z.Screen,{name:"Home",component:C}),Object(g.jsx)(z.Screen,{name:"Activity",component:v}),Object(g.jsx)(z.Screen,{name:"ActivityResult",component:T}),Object(g.jsx)(z.Screen,{name:"Joke",component:I}),Object(g.jsx)(z.Screen,{name:"JokeResult",component:L})]})})})}},225:function(e,t,n){e.exports=n(298)}},[[225,1,2]]]);
//# sourceMappingURL=app.aea4a160.chunk.js.map
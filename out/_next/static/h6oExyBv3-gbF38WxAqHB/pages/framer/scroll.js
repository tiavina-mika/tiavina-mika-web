(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{UOIz:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("DYRK"),o=a("rePB"),c=a("/MKj"),l=a("wx14"),s=a("iuhU"),p=a("ZMKu"),u={container:{hidden:{scale:0},visible:{scale:1,transition:{when:"beforeChildren",staggerChildren:.08}}},transition:{type:"tween",ease:"anticipate",duration:.1}},b={variants:{hidden:{x:-20,opacity:0},visible:{x:0,opacity:1}}},f={initial:"hidden",animate:"visible",variants:u.container,transition:u.transition},m={initial:"hidden",animate:"visible",variants:{hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},transition:{duration:.5}},d=a("jJyz"),g=r.a.createElement;function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var v=Object(i.b)({title:{color:"#fff",fontFamily:"Prequel, sans-serif",textTransform:"uppercase"}}),O=function(e){var t=e.text,a=e.className,n=e.onComplete,r=e.variant,i=e.onStart,u=e.display,m=void 0===u||u,O=v(),j=Object(c.c)(d.c);if(!m)return null;var y=j?"h5":r&&"h4"===r?p.b.h4:p.b.h6,w=j?{}:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({onAnimationComplete:n,onAnimationStart:i},f);return g(y,Object(l.a)({className:Object(s.a)(O.title,a)},w),t.split("").map((function(e,t){return j?e:g(p.b.span,Object(l.a)({key:t},b),e)})))},j=r.a.createElement,y=function(e){var t=e.text,a=e.className,n=e.display,r=Object(c.c)(d.c),i=r?"h5":p.b.h5,o=r?{}:m;return n?j(i,Object(l.a)({className:a},o),t):null},w=a("heAf"),x=a("soj6"),N=r.a.createElement,S=Object(i.b)((function(e){var t;return{about:Object(o.a)({margin:50,fontFamily:"Prequel, sans-serif",letterSpacing:"0.6vw",color:"#fff"},w.g.smDown,{marginLeft:10}),title:Object(o.a)({margin:[10,0,0,0],position:"relative",fontSize:"3.8vw",textShadow:"0px 0px 25px rgba(0,0,0,0.2)"},w.g.mdDown,{fontSize:22}),name:{},hello:{"& h6":(t={fontSize:24},Object(o.a)(t,w.g.mdDown,{fontSize:14}),Object(o.a)(t,"letterSpacing","0.2vw"),Object(o.a)(t,"margin",0),t)},post:{textShadow:"0px 0px 2px rgba(0,0,0,0.5)",color:e.colors.primary,fontSize:20}}})),D=function(){var e=S(),t=Object(n.useState)(!1),a=t[0],r=t[1],i=Object(n.useState)(!1),o=i[0],l=i[1],s=Object(c.c)(d.c);return N(x.a,{className:e.about,parallaxData:[{start:"self",duration:"70vh",easing:"easeInSine",properties:[{startValue:1,endValue:0,property:"opacity"}]}]},N("div",{className:e.hello},N("h6",null,"Hello! Je suis")),N("div",{className:e.name},N(O,{text:"Tiavina Michael",onComplete:function(){return r(!0)},className:e.title}),N(O,{text:"Ralainirina",onComplete:function(){return l(!0)},className:e.title,display:!!s||a}),N(y,{text:"Developpeur Full-Stack / Web Designer",className:e.post,display:!!s||o})))},P=r.a.createElement,C=Object(i.b)({presentation:Object(o.a)({composes:"flexRow flexEnd stretchSelf",height:"100vh"},w.g.lgDown,{backgroundColor:"#000"})}),E=function(){var e=C(),t=[{start:".".concat("presentationHeader-trigger"),duration:"40vh",easing:"easeInSine",properties:[{startValue:"#fff",endValue:"#000",property:"backgroundColor"}]}];return P(x.a,{className:e.presentation,parallaxData:t,triggerClass:"presentationHeader-trigger",id:"presentation",trigger:20},P(D,null))},k=r.a.createElement,z=Object(i.b)({block2:{height:"100vh",composes:"flexRow stretchSelf",backgroundColor:"#fff","& h1":{color:"#000"}},main:{composes:"flexColumn"}}),T=function(){var e=z(),t=Object(p.c)().scrollYProgress;return k(p.b.div,{className:e.block2,style:{opacity:t}},k("div",{className:e.main},k("h1",null,"Tiavina Michael Ralainirina"),k("h1",null,"Domain")))},I=r.a.createElement,_=Object(i.b)({root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",alignSelf:"stretch",flex:1}});t.default=function(){var e=_();return I("div",{className:e.root},I(E,null),I(T,null))}},sDTh:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/framer/scroll",function(){return a("UOIz")}])},soj6:function(e,t,a){"use strict";var n=a("wx14"),r=a("q1tI"),i=a.n(r),o=a("iuhU"),c=a("OXYc"),l=a.n(c),s=a("/MKj"),p=a("jJyz"),u=i.a.createElement;t.a=function(e){var t=e.className,a=e.parallaxData,r=e.triggerClass,i=e.children,c=e.triggerlassName,b=e.id,f=e.trigger,m=e.tagName,d=Object(s.c)(p.c),g=d?m||"div":l.a,h=d?{}:{parallaxData:a,tagName:m};return u(g,Object(n.a)({},h,{className:t,id:b}),!d&&u("div",{className:Object(o.a)(r,c),style:{pointerEvents:"none",marginTop:"".concat(f,"vh")}}),i)}}},[["sDTh",0,1,3,2,6,5]]]);
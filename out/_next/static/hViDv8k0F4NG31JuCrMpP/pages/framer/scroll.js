(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{EsBy:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("DYRK"),o=n("ZMKu"),c=n("/MKj"),l=n("jJyz"),s=n("rePB"),u=n("wx14"),b=n("iuhU"),f={container:{hidden:{scale:0},visible:{scale:1,transition:{when:"beforeChildren",staggerChildren:.08}}},transition:{type:"tween",ease:"anticipate",duration:.1}},p={variants:{hidden:{x:-20,opacity:0},visible:{x:0,opacity:1}}},m={initial:"hidden",animate:"visible",variants:f.container,transition:f.transition},d={initial:"hidden",animate:"visible",variants:{hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},transition:{duration:.5}},h=r.a.createElement;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var O=Object(i.b)({title:{color:"#fff",fontFamily:"Prequel, sans-serif",textTransform:"uppercase"}}),j=function(e){var t=e.text,n=e.className,a=e.onComplete,r=e.variant,i=e.onStart,f=e.display,d=void 0===f||f,j=O(),y=Object(c.c)(l.c);if(!d)return null;var g=y?"h5":r&&"h4"===r?o.b.h4:o.b.h6,w=y?{}:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({onAnimationComplete:a,onAnimationStart:i},m);return h(g,Object(u.a)({className:Object(b.a)(j.title,n)},w),t.split("").map((function(e,t){return y?e:h(o.b.span,Object(u.a)({key:t},p),e)})))},y=r.a.createElement,g=function(e){var t=e.text,n=e.className,a=e.display,r=Object(c.c)(l.c),i=r?"h5":o.b.h5,s=r?{}:d;return a?y(i,Object(u.a)({className:n},s),t):null},w=n("heAf"),x=r.a.createElement,S=Object(i.b)((function(e){var t;return{about:Object(s.a)({margin:50,fontFamily:"Prequel, sans-serif",letterSpacing:"0.6vw",color:"#fff"},w.c.smDown,{marginLeft:10}),title:Object(s.a)({margin:[10,0,0,0],position:"relative",fontSize:"3.8vw",textShadow:"0px 0px 25px rgba(0,0,0,0.2)"},w.c.mdDown,{fontSize:22}),name:{},hello:{"& h6":(t={fontSize:24},Object(s.a)(t,w.c.mdDown,{fontSize:14}),Object(s.a)(t,"letterSpacing","0.2vw"),Object(s.a)(t,"margin",0),t)},post:{textShadow:"0px 0px 2px rgba(0,0,0,0.5)",color:e.color.primary,fontSize:20}}})),P=function(e){var t=e.position,n=e.opacity,r=S(),i=Object(a.useState)(!1),s=i[0],u=i[1],b=Object(a.useState)(!1),f=b[0],p=b[1],m=Object(c.c)(l.c),d=m?"div":o.b.div;return x(d,{className:r.about,style:{paddingBottom:t,opacity:n}},x("div",{className:r.hello},x("h6",null,"Hello! Je suis")),x("div",{className:r.name},x(j,{text:"Tiavina Michael",onComplete:function(){return u(!0)},className:r.title}),x(j,{text:"Ralainirina",onComplete:function(){return p(!0)},className:r.title,display:!!m||s}),x(g,{text:"Developpeur Full-Stack / Web Designer",className:r.post,display:!!m||f})))},N=r.a.createElement,D=Object(i.b)({presentation:{composes:"flexRow flexEnd stretchSelf",height:"100vh",backgroundColor:"#171717"}});t.a=function(){var e=D(),t=Object(o.c)().scrollYProgress,n=Object(a.useState)(0),r=n[0],i=n[1],s=Object(a.useState)(1),u=s[0],b=s[1],f=Object(a.useState)(0),p=f[0],m=f[1],d=Object(c.c)(l.c);Object(a.useEffect)((function(){return t.onChange((function(e){b(1-3.5*e),i(15*e),m(220*e)}))}),[]);var h=d?"div":o.b.div,v=d?{backgroundColor:"rgb(23, 23, 23)"}:{background:"linear-gradient(180deg, rgba(11,24,46,0) 0%, rgba(0,0,0,".concat(r-.2,") 20.29%, rgba(0,0,0,").concat(r-.1,") 80.89%, rgba(0,0,0,").concat(r,") 99.93%)")};return N(h,{className:e.presentation,style:v,id:"presentation"},N(P,{position:d?0:p,opacity:u}))}},UOIz:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("DYRK"),o=n("EsBy"),c=n("ZMKu"),l=r.a.createElement,s=Object(i.b)({block2:{height:"100vh",composes:"flexRow stretchSelf",backgroundColor:"#fff","& h1":{color:"#000"}},main:{composes:"flexColumn"}}),u=function(){var e=s(),t=Object(c.c)().scrollYProgress;return l(c.b.div,{className:e.block2,style:{opacity:t}},l("div",{className:e.main},l("h1",null,"Tiavina Michael Ralainirina"),l("h1",null,"Domain")))},b=r.a.createElement,f=Object(i.b)({root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",alignSelf:"stretch",flex:1}});t.default=function(){var e=f();return b("div",{className:e.root},b(o.a,null),b(u,null))}},iuhU:function(e,t,n){"use strict";function a(e){var t,n,r="";if(e)if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(n=a(t))&&(r&&(r+=" "),r+=n);else"boolean"===typeof e||e.call||(r&&(r+=" "),r+=e);return r}t.a=function(){for(var e,t=0,n="";t<arguments.length;)(e=a(arguments[t++]))&&(n&&(n+=" "),n+=e);return n}},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},sDTh:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/framer/scroll",function(){return n("UOIz")}])}},[["sDTh",0,1,2,3]]]);
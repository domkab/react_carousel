(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(4),c=n.n(a),i=n(5),s=n(6),o=n(8),r=n(7),l=n(1),u=n.n(l),m=(n(13),n(14),n(2)),b=(n(15),n(0)),j=function(t){var e=t.images,n=t.frameSize,a=t.itemWidth,c=t.step,i=t.animationDuration,s=t.infinite,o=Object(l.useState)(0),r=Object(m.a)(o,2),u=r[0],j=r[1],d=Object(l.useState)(s),p=Object(m.a)(d,2),g=p[0],h=p[1],O=Object(l.useState)(a),f=Object(m.a)(O,2),_=f[0],v=f[1],x=Object(l.useState)(a),N=Object(m.a)(x,2),S=N[0],y=N[1],C=Object(l.useState)(i),k=Object(m.a)(C,2),w=k[0],z=k[1],E=Object(l.useState)(i),I=Object(m.a)(E,2),P=I[0],D=I[1],W=Object(l.useState)(c.toString()),A=Object(m.a)(W,2),F=A[0],J=A[1],B=Object(l.useState)(c),M=Object(m.a)(B,2),T=M[0],q=M[1],G=Object(l.useState)(n.toString()),H=Object(m.a)(G,2),K=H[0],L=H[1],Q=Object(l.useState)(n),R=Object(m.a)(Q,2),U=R[0],V=R[1],X=e.length-U;return Object(l.useEffect)((function(){var t=u*(_+10);document.documentElement.style.setProperty("--transform-offset","-".concat(t,"px")),document.documentElement.style.setProperty("--image-size","".concat(_,"px")),document.documentElement.style.setProperty("--frame-size","".concat(U)),document.documentElement.style.setProperty("--animation-duration","".concat(i,"ms")),document.documentElement.style.setProperty("--animation-duration","".concat(P,"ms"))}),[u,_,U,P]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("button",{type:"button",onClick:function(){j(u>=T?function(t){return t-T}:g?X:0)},className:"button button--prev ".concat(0===u?"disabled":""),children:"Prev"}),Object(b.jsx)("div",{className:"Carousel",children:Object(b.jsx)("ul",{className:"Carousel__list transformed",style:{width:"".concat(U," * ").concat(_)},children:e.map((function(t,n){return Object(b.jsx)("li",{className:"Carousel__item ".concat(n===e.length-1?"Carousel__item--last":""),children:Object(b.jsx)("img",{className:"Carousel__image",src:t,alt:""})},t)}))})}),Object(b.jsx)("button",{type:"button",onClick:function(){j(u+T<X?function(t){return t+T}:g?0:X)},className:"button button--next ".concat(u>=X?"disabled":""),"data-cy":"next",children:"Next"})]}),Object(b.jsx)("div",{className:"container--controls",children:Object(b.jsxs)("div",{className:"controls",children:[Object(b.jsx)("div",{className:"controls__infinite controls__item",children:Object(b.jsx)("button",{type:"button",className:"button button--controls ".concat(g?"button--active":""),onClick:function(){return h(!g)},children:"Toggle Infinite Scroll"})}),Object(b.jsxs)("div",{className:"controls__width controls__item",children:[Object(b.jsx)("input",{className:"controls__width controls__input",type:"number",title:"Enter the item width",value:S,min:"100",max:"350",onChange:function(t){var e=parseInt(t.target.value,10);Number.isNaN(e)||y(e)}}),Object(b.jsx)("button",{type:"button",className:"button button--controls",onClick:function(){S<100||S>350?alert("Please enter a value between 100 and 350."):S>0&&v(S)},children:"Set Width"})]}),Object(b.jsxs)("div",{className:"controls__item controls__animation",children:[Object(b.jsx)("input",{type:"number",className:"controls__input",value:w,onChange:function(t){return z(Number(t.target.value))},placeholder:"Enter duration in ms"}),Object(b.jsx)("button",{type:"button",className:"button button--controls",onClick:function(){w>0&&D(w)},children:"Set Animation Duration"})]}),Object(b.jsxs)("div",{className:"controls__item controls__step",children:[Object(b.jsx)("input",{type:"number",className:"controls__input",value:F,onChange:function(t){var n=parseInt(t.target.value,10);n<1?J("1"):n>e.length?J(e.length.toString()):J(t.target.value)},placeholder:"Step",min:"1",max:e.length}),Object(b.jsx)("button",{type:"button",className:"button button--controls",onClick:function(){var t=parseInt(F,10);!Number.isNaN(t)&&t>0&&t<=e.length?q(t):(alert("Please enter a valid step!"),J(T.toString()))},children:"Set Scroll Step"})]}),Object(b.jsxs)("div",{className:"controls__frameSize controls__item",children:[Object(b.jsx)("input",{type:"number",className:"controls__input",title:"Enter the frame size",min:"1",max:e.length,value:K,onChange:function(t){var n=parseInt(t.target.value,10);n<1?L("1"):n>e.length?L(e.length.toString()):L(t.target.value)}}),Object(b.jsx)("button",{type:"button",className:"button button--controls",onClick:function(){var t=parseInt(K,10);t>=1&&t<=e.length?V(t):alert("Invalid frame size. Must be between 1 and the total number of images.")},children:"Set Frame Size"})]})]})})]})},d=function(t){Object(o.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.frameSize,a=t.step,c=t.itemWidth,i=t.animationDuration,s=t.infinite;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"App__title","data-cy":"title",children:"Carousel with ".concat(e.length," images")}),Object(b.jsx)(j,{images:e,frameSize:n,step:a,itemWidth:c,animationDuration:i,infinite:s})]})}}]),n}(u.a.Component),p=d;c.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5c61ea0e.chunk.js.map
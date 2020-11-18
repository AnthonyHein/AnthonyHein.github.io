(this["webpackJsonpelections.dailyprincetonian.com"]=this["webpackJsonpelections.dailyprincetonian.com"]||[]).push([[0],{100:function(e,t){},101:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),i=a.n(c),s=a(23),r=a.n(s),l=a(59),o=a(8),d=a(11),u=a(12),j=a(14),h=a(13),m=a(25),b=a(26),p=(a(67),a(54)),f=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(d.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)(m.a,{variant:"dark",expand:"lg",sticky:"top",children:Object(n.jsxs)(p.a,{children:[Object(n.jsx)(m.a.Brand,{children:"Daily Princetonian Elections"}),Object(n.jsx)(m.a.Toggle,{"aria-controls":"navbar"}),Object(n.jsx)(m.a.Collapse,{id:"navbar",children:Object(n.jsxs)(b.a,{className:"mr-auto",children:[Object(n.jsx)(b.a.Link,{href:"#/",children:"Home"}),Object(n.jsx)(b.a.Link,{href:"#/meet-the-candidates",children:"Meet the Candidates"}),Object(n.jsx)(b.a.Link,{href:"#/vote",children:"Vote"})]})})]})})}}]),a}(i.a.Component),O=a(55),g=a(39),x=(a(73),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(d.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)(O.a,{children:Object(n.jsxs)(p.a,{children:[Object(n.jsx)("h1",{className:"text-center display-4",children:"Daily Princetonian 145th Managing Board Elections"}),Object(n.jsx)("p",{className:"lead text-center",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at commodo ipsum. Sed ullamcorper ligula et malesuada efficitur."}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{className:"intro-p",children:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum mi nulla, gravida ac mi sed, tincidunt feugiat sapien. Morbi elementum felis nec ullamcorper laoreet. Praesent efficitur lobortis orci feugiat pretium. Donec maximus dictum tellus. Curabitur sollicitudin nisl a sapien tempor, ut euismod nibh feugiat. Donec non efficitur nisl. Vestibulum congue libero nec mollis laoreet. Aliquam dictum arcu tellus, malesuada hendrerit sapien placerat eget. Duis faucibus vel sapien at feugiat. Donec nunc orci, gravida non sapien nec, lacinia dapibus sem. Nam fermentum fringilla mi id tincidunt. Pellentesque hendrerit, nulla in finibus lobortis, risus ligula iaculis enim, ut feugiat massa nunc vel arcu. Vestibulum eu fermentum dui, at congue felis. Duis faucibus felis tellus."}),Object(n.jsx)(g.a,{variant:"orange",className:"text-center",href:"/vote",children:"Vote Now!"})," ",Object(n.jsx)(g.a,{variant:"outline-orange",className:"text-center",href:"/meet-the-candidates",children:"Meet the Candidates"})]})})}}]),a}(i.a.Component)),v=a(61),N=a(22),k=[{name:"Zachary Shevin",imagePath:"./images/shevin.jpg",recordingPath:"./recordings/shevin.mp4",platformPath:"./platforms/shevin.pdf"},{name:"Anna McGee",imagePath:"./images/mcgee.jpg",recordingPath:"./recordings/mcgee.mp4",platformPath:"./platforms/mcgee.pdf"},{name:"Kenny Peng",imagePath:"./images/peng.jpg",recordingPath:"./recordings/peng.mp4",platformPath:"./platforms/peng.pdf"},{name:"Emma Treadway",imagePath:"./images/treadway.jpg",recordingPath:"./recordings/treadway.mp4",platformPath:"./platforms/treadway.pdf"}],P=a(127),C=a(124),y=a(125),w=a(126),D=(a(74),a(56)),L=a.n(D),S=a(24);S.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(S.c.version,"/pdf.worker.js");var M=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).onDocumentLoadSuccess=function(e){var t=e.numPages;n.setState({numPages:t})},n.handleClick=function(e){switch(e.preventDefault(),e.target.id){case"next-page":if(n.state.pageNum+1>n.state.numPages)return;n.setState((function(e){return{pageNum:e.pageNum+1}}));break;case"prev-page":if(n.state.pageNum-1<0)return;n.setState((function(e){return{pageNum:e.pageNum-1}}))}},n.state={numPages:0,pageNum:1},n.onDocumentLoadSuccess=n.onDocumentLoadSuccess.bind(Object(N.a)(n)),n.handleClick=n.handleClick.bind(Object(N.a)(n)),n}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)(C.a,{xs:12,className:"candidate",children:Object(n.jsxs)("div",{className:"details",children:[Object(n.jsxs)("div",{className:"flex-item left",children:[Object(n.jsx)("h3",{className:"name",children:this.props.name}),Object(n.jsx)(y.a,{src:this.props.imagePath,className:"candidate-image"}),Object(n.jsx)(L.a,{src:"./recordings/horse.ogv",controls:!0})]}),Object(n.jsx)("div",{className:"flex-item",children:Object(n.jsxs)("div",{className:"doc",children:[Object(n.jsxs)(w.a,{className:"button-group","aria-label":"Basic example",children:[Object(n.jsx)(g.a,{variant:"orange",id:"prev-page",onClick:this.handleClick,children:"\u2190"}),Object(n.jsxs)(g.a,{variant:"light",disabled:!0,children:["Page ",this.state.pageNum," of ",this.state.numPages]}),Object(n.jsx)(g.a,{variant:"orange",id:"next-page",onClick:this.handleClick,children:"\u2192"})]}),Object(n.jsx)(S.a,{file:this.props.platformPath,onLoadSuccess:this.onDocumentLoadSuccess,onLoadError:console.error,children:Object(n.jsx)(S.b,{pageNumber:this.state.pageNum,scale:1.5})}),Object(n.jsxs)(w.a,{className:"button-group","aria-label":"Basic example",children:[Object(n.jsx)(g.a,{variant:"orange",id:"prev-page",onClick:this.handleClick,children:"\u2190"}),Object(n.jsxs)(g.a,{variant:"light",disabled:!0,children:["Page ",this.state.pageNum," of ",this.state.numPages]}),Object(n.jsx)(g.a,{variant:"orange",id:"next-page",onClick:this.handleClick,children:"\u2192"})]})]})})]})})}}]),a}(i.a.Component),V=(a(101),a(58)),B=a.n(V),E=(a(118),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"sidebar",children:[Object(n.jsx)("h4",{className:"text-center sidebar-header",children:"Candidates"}),Object(n.jsx)(B.a,{items:this.props.personNames,currentClassName:"isActive",children:this.props.navLinks})]})}}]),a}(i.a.Component)),F=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).onClick=n.onClick.bind(Object(N.a)(n)),n}return Object(u.a)(a,[{key:"onClick",value:function(e){e.preventDefault(),window.scroll({behavior:"smooth",top:e.offset.top-1e4})}},{key:"render",value:function(){var e,t=[],a=[],c=[],i=Object(v.a)(k);try{for(i.s();!(e=i.n()).done;){var s=e.value;t.push(s.name),a.push(Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"fake-div",id:s.name}),Object(n.jsx)("section",{children:Object(n.jsx)(P.a,{children:Object(n.jsx)(M,{name:s.name,imagePath:s.imagePath,recordingPath:s.recordingPath,platformPath:s.platformPath})})})]})),c.push(Object(n.jsx)("li",{className:"person",children:Object(n.jsx)("a",{href:"#"+s.name,children:s.name})}))}}catch(r){i.e(r)}finally{i.f()}return Object(n.jsx)(p.a,{fluid:!0,children:Object(n.jsxs)(P.a,{children:[Object(n.jsx)(C.a,{xs:2,children:Object(n.jsx)(E,{navLinks:c,personNames:t})}),Object(n.jsx)(C.a,{xs:10,children:Object(n.jsxs)("main",{className:"content",children:[Object(n.jsx)("h2",{className:"display-4 title",children:"Meet the Candidates"}),Object(n.jsx)("p",{className:"",children:"Here you can see all the candidates who are running, listen to their introductory speeches, and read their platforms."}),a,Object(n.jsx)("p",{children:"Use the sidebar to view other candidates!"})]})})]})})}}]),a}(i.a.Component),A=(a(119),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)(O.a,{children:Object(n.jsxs)(p.a,{fluid:!0,children:[Object(n.jsx)("h1",{className:"text-center display-4 vote-title",children:"Vote now!"}),Object(n.jsxs)("p",{className:"lead text-center",children:["You can cast your vote for each office in the Google form below. Not sure who to vote for? Check out each candidate's platform ",Object(n.jsx)("a",{href:"/meet-the-candidates",children:"here"}),"!"]})]})})}}]),a}(i.a.Component));var T=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(f,{}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"/meet-the-candidates",children:Object(n.jsx)(F,{})}),Object(n.jsx)(o.a,{path:"/vote",children:Object(n.jsx)(A,{})}),Object(n.jsx)(o.a,{path:"/",children:Object(n.jsx)(x,{})})]})]})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,128)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root")),G()},67:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},96:function(e,t){},97:function(e,t){},98:function(e,t){},99:function(e,t){}},[[122,1,2]]]);
//# sourceMappingURL=main.5f5dfb45.chunk.js.map
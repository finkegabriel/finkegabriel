(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),i=a.n(o),l=(a(91),a(24)),s=a(25),c=a(28),m=a(26),u=a(29),h=a(33),p=a(7),d=a(4),g=a(190),f=a(192),E=a(70),w=a.n(E),y={li:{textDecoration:"none",marginLeft:"1rem",color:"black"},a:{listStyle:"none",display:"inline"},ul:{display:"inline"},icon:{height:"3rem",width:"3rem"}};var b=Object(d.a)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}},y)(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(g.a,{color:"#00FF00",position:"static"},r.a.createElement(f.a,null,r.a.createElement("img",{alt:"code",src:w.a,style:y.icon}),r.a.createElement("nav",null,r.a.createElement("ul",{style:y.ul},r.a.createElement("li",{style:y.a},r.a.createElement(h.b,{style:y.li,to:"/"},"Home")),r.a.createElement("li",{style:y.a},r.a.createElement(h.b,{style:y.li,to:"/blog"},"Projects")))))))}),A=a(193),v=a(196),I=a(194),R=a(202),O=a(195),T=a(71),k={cardWidth:{marginTop:"10vh",width:"56vh"},imageMobile:{borderRadius:"75px"},image:{borderRadius:"75px"},imageDiv:{display:"block",marginLeft:"auto",marginRight:"auto"},width:{width:"100%",margin:"0 auto",maxWidth:"700px",position:"fixed",left:"0",right:"0",bottom:"0",top:"0"}};function j(e){return r.a.createElement("div",{style:(k.width,e.style)},r.a.createElement("center",null,r.a.createElement(A.a,{style:k.cardWidth},r.a.createElement("center",null,r.a.createElement(I.a,null,r.a.createElement("center",null,r.a.createElement(O.a,{color:"textSecondary",gutterBottom:!0},r.a.createElement("center",null,e.title,r.a.createElement("br",null),e.date)),r.a.createElement("div",{style:k.imageDiv},r.a.createElement("center",null,r.a.createElement("img",{alt:"Card",src:e.cover_photo,style:!0===T.isMobile?e.imageStyle||k.imageMobile:k.image,class:"center",width:250,height:250})))))),r.a.createElement(v.a,null,r.a.createElement(R.a,{onClick:function(){return e.props.history.push("/"+e.url)},size:"small"},"Continue Reading...")))))}var C=a(197),x=a(200),B=a(198),H=a(201),M=a(78),V=a(199),D=a(72),S=a.n(D),L={};function q(e){return r.a.createElement(S.a,Object.assign({options:L},e))}var P=Object(C.a)(function(e){return{markdown:Object(M.a)({},e.typography.body2,{padding:e.spacing(3,0)})}});function G(e){var t=P(),a=e.posts,n=e.title;return r.a.createElement(B.a,{item:!0,xs:12,md:8},r.a.createElement(O.a,{style:{marginLeft:"6%"},variant:"h6",gutterBottom:!0},n),r.a.createElement(V.a,null),a.map(function(e){return r.a.createElement(q,{className:t.markdown,key:e.substring(0,40)},e)}))}var W=a(73),F=a.n(W),Q=a(42),z=a.n(Q),U={FirstPhoto:F.a,CoverPhoto:z.a},Y=Object(C.a)(function(e){return{mainGrid:{marginTop:e.spacing(3)}}}),X=[];function J(){var e=Y();return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null),r.a.createElement(H.a,{maxWidth:"lg"},r.a.createElement("main",null,r.a.createElement(B.a,{container:!0,spacing:4}),r.a.createElement(B.a,{container:!0,spacing:5,className:e.mainGrid},r.a.createElement(G,{title:"USDA Internship",posts:X}),r.a.createElement("div",{style:{width:"90%",marginLeft:"6%",fontSize:"1rem"}},r.a.createElement("b",null,"Intro:"),r.a.createElement("p",null,"In the summer of 2020, I had the opportunity to work at the USDA\u2019s (United States Department of Agriculture) ALARC facility, in Maricopa Arizona. I was under the supervision of an agriculture engineer who was working on High Throughput Phenotyping research. "),r.a.createElement("b",null,"Hamby:"),r.a.createElement("p",null,"During my time there I had been assigned a few projects. One of which was integrating various sensors for a seed counting machine. The second project was, testing and operating a tractor that was equipped with one camera and two sensors on the sides of a gantry."),r.a.createElement("p",null," The primary camera on the tractor was a two channel NIR (Near Infrared) and CCD RGB camera. I learned that this specific choice of instrumentation was because given optimal conditions, we can sense how healthy a crop is based on how green the plant canopy was. This particular problem is a little more nuanced than I am initially leading on because phenotyping is simply just characterizing the physical traits of a plant. Genotyping is ultimately the science that the USDA was focused on, which is analyzing what traits an individual plant inherited from its parents. These various disciplines work beside each other giving various insights on an individual plant and its genetics.  "),r.a.createElement("p",null,"The tractor platform that I worked on was dubbed \u201cHamby\u201d. Hamby was based on a tractor from ALARC\u2019s pest control unit. It was originally utilized to spray crops with pesticide but was being phased out for a different tool. With this platform on loan, the plant genetics unit (the unit I was working for) designed a system that would fit over the existing hardware. The result was a tool that could drive over a group of four rows of crops and take pictures and collect data passively. These pictures were then fed into a processing pipeline that would stitch these images together, and apply a series of different tools to analyze the green index of a plants canopy.  "),r.a.createElement("p",null,"The main crops I helped image were a group of Guayule and Soybean plants. These crops were further divided into sections which averaged about 100 plus sections with varying genetic traits. Camera technology is fairly inexpensive nowadays and can play a crucial role in HTP (High Throughput Phenotyping) systems. HTP research is ultimately concerned about maximizing crop yields per so many acres of land. With the world population increasing at the rate that it is, it has become far more important to make sure we have enough resources to feed this ever-growing population of people.  "),r.a.createElement("p",null,r.a.createElement("p",null,"Sadly, due to COVID-19, I was only able to go down to the facility once a week for two months straight. During this time, I was working remotely unless I needed to go into the office. On a day I needed to go in, I would drive an hour from where I lived to Maricopa and setup the sensor equipment on Hamby. Drive Hamby an additional 30 minutes out of the garage at ALARC to the agriculture fields (because the tractor could only travel about 5mph). At the start I was mapping one or two fields just to test the phenotyping system, but after a while I was able to map the two soybean and 4 additional guayule fields. Bellow I will post a map of the rough outline of the route I would take during this process.  "),r.a.createElement("center",null,r.a.createElement("img",{style:{borderRadius:"25px"},src:U.FirstPhoto,width:"250rem",height:"300rem"})),r.a.createElement("br",null),r.a.createElement("b",null,"Seed Counting:"),r.a.createElement("p",null,"Before I was employed there was some work done on a seed counting system using Machine Learning, and a optical processing approach. I am not too aware of the specifics of this portion of the project, because my job was to integrate the hardware that was going to be used. The Hardware that was given to me to integrate was"),r.a.createElement("p",null,"\u2022 Cannon T7I Camera"),r.a.createElement("p",null,"\u2022 Barcode reader"),r.a.createElement("p",null,"\u2022 Kitchen Scale")),r.a.createElement("p",null,"Ironically, I don\u2019t have many if any pictures of the barcode reader but I do have the final version of the code I wrote for this system on  GitHub. ",r.a.createElement("a",{href:"https://github.com/finkegabriel/USDA_Internship/blob/main/seed_counter/seed_counter.py"},"HERE"),"  "),r.a.createElement("p",null),r.a.createElement("p",null,"Parts used"),r.a.createElement("a",{target:"_blank",href:"https://www.amazon.com/gp/product/B00LE5VV1C/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00LE5VV1C&linkCode=as2&tag=gfinke1019-20&linkId=5b9f56e5f85eb4cb26c4a5449f17b1a9"},"WoneNice USB Laser Barcode Scanner Wired Handheld Bar Code Scanner Reader Black"),r.a.createElement("img",{src:"//ir-na.amazon-adsystem.com/e/ir?t=gfinke1019-20&l=am2&o=1&a=B00LE5VV1C",width:"1",height:"1",border:"0",alt:""}),r.a.createElement("p",null))))))}var Z=a(74),N=a.n(Z),K=a(75),_=a.n(K),$={COVER_PHOTO:z.a,USDAMAP1:N.a,USDAMAP2:_.a},ee=a(76),te={COVER_PHOTO:a.n(ee).a},ae={USDA:{title:"USDA Internship",post:$,cover_photo:$.COVER_PHOTO},TELESCOPE:{title:"Telescope Project",post:te,cover_photo:te.COVER_PHOTO},RADIO:{title:"Offline Radio Mesh Network",post:te,cover_photo:te.COVER_PHOTO}},ne={post:[{uuid:"0e3e8a27-6e7d-4c6e-bd32-4a1141645f05",component:r.a.createElement(J,null),post:ae.USDA}]},re=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,ne.post.map(function(t){return r.a.createElement(j,{props:e.props,url:t.uuid,title:t.post.title,style:{marginTop:"".concat(1,"rem")},date:t.post.date,imageStyle:{borderRadius:"75px"},cover_photo:t.post.cover_photo})}))}}]),t}(n.Component),oe=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("img",{alt:"Gabriel Finke",src:this.props.image,style:this.props.styles}),r.a.createElement("div",null,r.a.createElement("h4",null,this.props.name),r.a.createElement("p",{style:{width:"40vh"}},this.props.jobDesc))))}}]),t}(n.Component),ie={card:{marginTop:"1.5rem",justifyContent:"space-evenly",alignItems:"center"},image:{width:"12rem",height:"12rem",borderRadius:"66px"},footer:{position:"fixed",left:"0",bottom:"0",width:"100%",backgroundColor:"#7E716E",color:"white",textAlign:"center"}},le="https://avatars2.githubusercontent.com/u/40010444?s=460&v=4";var se=function(){return r.a.createElement("div",{style:ie.card},r.a.createElement(oe,{image:le,styles:ie.image,name:"Gabe",jobDesc:"Hello, and welcome to my blog! I am an engineering student in Arizona concentrating on environmental engineering. I have been constantly working on projects throughout my life and I have finally got around to documenting these achievements. I work on a variety of things from telescopes to drones, and everything in between. I hope you enjoy!!"}),r.a.createElement("div",{style:ie.status}),r.a.createElement("footer",{style:ie.footer},r.a.createElement("p",null,"Author: Gabriel Finke",r.a.createElement("br",null))))},ce=a(77);var me=function(e){for(var t=e.location.pathname.split("/")[1],a=Object(ce.a)(ne.post),n=0;n<a.length;n++)if(t===ne.post[n].uuid)return ne.post[n].component},ue=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(b,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:se}),r.a.createElement(p.a,{path:"/blog",component:re}),r.a.createElement(p.a,{exact:!0,path:"/:id",component:function(e){return me(e)}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,a){e.exports=a.p+"static/media/cover_photo.f59d61fa.png"},70:function(e,t){e.exports="data:image/png;base64,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"},73:function(e,t,a){e.exports=a.p+"static/media/first.39edb9ea.png"},74:function(e,t,a){e.exports=a.p+"static/media/USDAMAP1.77d04aa7.png"},75:function(e,t,a){e.exports=a.p+"static/media/USDAMAP2.d718ff02.png"},76:function(e,t,a){e.exports=a.p+"static/media/cover_photo.23b2eb11.png"},86:function(e,t,a){e.exports=a(167)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.75fec4ca.chunk.js.map
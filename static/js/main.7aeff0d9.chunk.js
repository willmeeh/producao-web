(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,a){e.exports=a.p+"static/media/solitaria-logo.2ed7f03b.png"},189:function(e,t,a){e.exports=a(299)},194:function(e,t,a){},195:function(e,t,a){e.exports=a.p+"static/media/img-casa-cima.f163ecff.jpeg"},196:function(e,t,a){},259:function(e,t,a){},296:function(e,t,a){},298:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),i=(a(194),a(37)),l=a(38),m=a(41),s=a(39),u=a(42),p=a(49),d=(a(195),a(177)),g=a.n(d),b=(a(196),a(306)),h=a(304),E=a(61),f=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"home-page"},o.a.createElement("img",{className:"house-external",src:"https://willmeeh.github.io/producao-web/static/media/img-casa-cima.f163ecff.jpeg?raw=true",alt:"alt"}),o.a.createElement("div",{className:"logo-outer"},o.a.createElement("img",{className:"logo-inner",src:g.a,alt:"unicorn"})),o.a.createElement(E.b,{to:"/planta"},o.a.createElement(b.a,{className:"botao-iniciar-tour",size:"large"},"Iniciar unicorning Tour")),o.a.createElement(h.a,{className:"home-card",bordered:!1},o.a.createElement("p",null,"Aqui vai um unicorning texto explicando o unicorning projeto; Acima de tudo, \xe9 fundamental ressaltar que o consenso sobre a necessidade de qualifica\xe7\xe3o deve passar por modifica\xe7\xf5es independentemente dos \xedndices pretendidos. N\xe3o obstante, a complexidade dos estudos efetuados garante a contribui\xe7\xe3o de um grupo importante na determina\xe7\xe3o das diretrizes de desenvolvimento para o futuro.")),o.a.createElement(E.b,{to:"/comodo"},o.a.createElement(b.a,{className:"botao-playlist-completa",size:"large"},"Playlist Completa")))}}]),t}(n.Component),y=(a(259),a(67)),w=a(34),j=a(303),v=a(12),O=(a(141),a(118)),k=a.n(O),x=[{title:"V\xeddeo 1",icon:"unlock"},{title:"V\xeddeo 2",icon:"lock"},{title:"V\xeddeo 3",icon:"lock"},{title:"V\xeddeo 4",icon:"lock"}],N={cozinha:{backgroundImage:"https://raw.githubusercontent.com/willmeeh/producao-web/master/src/images/cozinha.jpeg"},quartoMonique:{backgroundImage:"https://raw.githubusercontent.com/willmeeh/producao-web/master/src/images/quarto-monique.jpeg"}},I=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.match.params.nomeComodo,t=N[e].backgroundImage;return console.log("nomeComodo",e),console.log("backgroundImage",t),o.a.createElement("div",{style:{marginTop:"100px"}},o.a.createElement("img",{className:"comodo-background-image",src:t,alt:"alt"}),o.a.createElement(y.a,{gutter:8},o.a.createElement(w.a,{span:16},o.a.createElement(y.a,null,o.a.createElement(w.a,{span:20,style:{padding:20}},o.a.createElement(k.a,{url:"https://www.youtube.com/watch?v=ysz5S6PUM-U",playing:!0}))),o.a.createElement(y.a,null,o.a.createElement(w.a,{span:18},o.a.createElement(h.a,{title:"Descri\xe7\xe3o",bordered:!1,style:{width:500,height:200}},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis malesuada dolor eu porta. Donec id urna ac metus feugiat rutrum eget nec nibh. Maecenas in sem vel metus ullamcorper pharetra."))),o.a.createElement(w.a,{span:4},o.a.createElement(b.a,{type:"primary",icon:"download",size:"large"},"Voltar")))),o.a.createElement(w.a,{span:5},o.a.createElement(h.a,{title:"Descri\xe7\xe3o",bordered:!1,style:{width:400}},o.a.createElement(j.a,{itemLayout:"horizontal",dataSource:x,renderItem:function(e){return o.a.createElement(j.a.Item,null,o.a.createElement(j.a.Item.Meta,{title:o.a.createElement("a",null,o.a.createElement(v.a,{type:e.icon}),e.title),description:"Esse v\xeddeo apresenta o momento em que o personagem."}))}})))))}}]),t}(n.Component),C=(a(296),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"planta-page"},o.a.createElement("img",{className:"planta-external",src:"https://raw.githubusercontent.com/willmeeh/producao-web/master/src/images/comodos.png",alt:"unicorn"})))}}]),t}(n.Component)),q=a(302),z=a(305),V=q.a.Header,M=q.a.Content,S=(q.a.Footer,[{path:"/",component:f},{path:"/comodo/:nomeComodo?",component:I},{path:"/planta",component:C}]),T=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"createRoutes",value:function(e){return e.map(function(e,t){var a=e.path,n=e.component;return o.a.createElement(p.a,{key:"route"+t,exact:!0,path:a,component:n})})}},{key:"render",value:function(){return o.a.createElement(p.c,null,o.a.createElement(q.a,{className:"layout"},o.a.createElement(V,{style:{height:"0px"}},o.a.createElement("div",{className:"logo"}),o.a.createElement(z.b,{mode:"horizontal",defaultSelectedKeys:["1"],style:{marginTop:"30px",backgroundColor:"rgba(255, 255, 255, 1)",paddingTop:"20px",lineHeight:"20px"}},o.a.createElement(z.b.Item,{key:"1"},"Home"),o.a.createElement(z.b.Item,{key:"2"},"Equipe"),o.a.createElement(z.b.Item,{key:"3"},"Sobre"))),o.a.createElement(M,null,this.createRoutes(S))))}}]),t}(n.Component),D=(a(297),a(298),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(T,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(E.a,null,o.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[189,1,2]]]);
//# sourceMappingURL=main.7aeff0d9.chunk.js.map
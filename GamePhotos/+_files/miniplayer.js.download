(function(g){var window=this;'use strict';var qrb=function(a,b){g.U.call(this,{I:"button",Ma:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],Y:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},V:[{I:"svg",Y:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},V:[{I:"g",Y:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},V:[{I:"g",Y:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
V:[{I:"path",Y:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.J=a;this.Ra("click",this.onClick,this);this.updateValue("title",g.xU(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});this.addOnDisposeCallback(g.vU(b.Le(),this.element))},rrb=function(a){g.U.call(this,
{I:"div",
S:"ytp-miniplayer-ui"});this.gg=!1;this.player=a;this.T(a,"minimized",this.wh);this.T(a,"onStateChange",this.MR)},srb=function(a){g.RV.call(this,a);
this.B=new g.aL(this);this.j=new rrb(this.player);this.j.hide();g.GU(this.player,this.j.element,4);a.jg()&&(this.load(),g.Qu(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(qrb,g.U);qrb.prototype.onClick=function(){this.J.ib("onExpandMiniplayer")};g.w(rrb,g.U);g.k=rrb.prototype;
g.k.FO=function(){this.tooltip=new g.cY(this.player,this);g.J(this,this.tooltip);g.GU(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Rd=new g.uW(this.player);g.J(this,this.Rd);this.yk=new g.U({I:"div",S:"ytp-miniplayer-scrim"});g.J(this,this.yk);this.yk.Ja(this.element);this.T(this.yk.element,"click",this.zJ);var a=new g.U({I:"button",Ma:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},V:[g.rG()]});g.J(this,a);a.Ja(this.yk.element);this.T(a.element,"click",this.Op);
a=new qrb(this.player,this);g.J(this,a);a.Ja(this.yk.element);this.wv=new g.U({I:"div",S:"ytp-miniplayer-controls"});g.J(this,this.wv);this.wv.Ja(this.yk.element);this.T(this.wv.element,"click",this.zJ);var b=new g.U({I:"div",S:"ytp-miniplayer-button-container"});g.J(this,b);b.Ja(this.wv.element);a=new g.U({I:"div",S:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Ja(this.wv.element);var c=new g.U({I:"div",S:"ytp-miniplayer-button-container"});g.J(this,c);c.Ja(this.wv.element);this.CZ=new g.qX(this.player,
this,!1);g.J(this,this.CZ);this.CZ.Ja(b.element);b=new g.pX(this.player,this);g.J(this,b);b.Ja(a.element);this.nextButton=new g.qX(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Ja(c.element);this.zo=new g.WX(this.player,this);g.J(this,this.zo);this.zo.Ja(this.yk.element);this.progressBar=new g.vX(this.player,this);g.J(this,this.progressBar);g.GU(this.player,this.progressBar.element,4);this.kJ=new g.U({I:"div",S:"ytp-miniplayer-buttons"});g.J(this,this.kJ);g.GU(this.player,this.kJ.element,
4);a=new g.U({I:"button",Ma:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},V:[g.rG()]});g.J(this,a);a.Ja(this.kJ.element);this.T(a.element,"click",this.Op);a=new g.U({I:"button",Ma:["ytp-miniplayer-replay-button","ytp-button"],Y:{"aria-label":"Close"},V:[g.Gva()]});g.J(this,a);a.Ja(this.kJ.element);this.T(a.element,"click",this.Z9);this.T(this.player,"presentingplayerstatechange",this.Sd);this.T(this.player,"appresize",this.Zb);this.T(this.player,"fullscreentoggled",this.Zb);
this.Zb()};
g.k.show=function(){this.Yg=new g.Cu(this.EE,null,this);this.Yg.start();this.gg||(this.FO(),this.gg=!0);0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.progressBar.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Yg&&(this.Yg.dispose(),this.Yg=void 0);g.U.prototype.hide.call(this);this.player.jg()||(this.gg&&this.progressBar.hide(),this.player.loadModule("annotations_module"))};
g.k.xa=function(){this.Yg&&(this.Yg.dispose(),this.Yg=void 0);g.U.prototype.xa.call(this)};
g.k.Op=function(){this.player.stopVideo();this.player.ib("onCloseMiniplayer")};
g.k.Z9=function(){this.player.playVideo()};
g.k.zJ=function(a){if(a.target===this.yk.element||a.target===this.wv.element)g.TL(this.player.Vb())?this.player.pauseVideo():this.player.playVideo()};
g.k.wh=function(){g.Qu(this.player.getRootNode(),"ytp-player-minimized",this.player.jg())};
g.k.If=function(){this.progressBar.Kc();this.zo.Kc()};
g.k.EE=function(){this.If();this.Yg&&this.Yg.start()};
g.k.Sd=function(a){g.TG(a.state,32)&&this.tooltip.hide()};
g.k.Zb=function(){g.c_a(this.progressBar,0,this.player.qb().getPlayerSize().width,!1);g.wX(this.progressBar)};
g.k.MR=function(a){this.player.jg()&&(0===a?this.hide():this.show())};
g.k.Le=function(){return this.tooltip};
g.k.Og=function(){return!1};
g.k.Vf=function(){return!1};
g.k.bk=function(){return!1};
g.k.GF=function(){};
g.k.Hs=function(){};
g.k.Bv=function(){};
g.k.xn=function(){return null};
g.k.NH=function(){return null};
g.k.UN=function(){return new g.ne(0,0)};
g.k.Qk=function(){return new g.Vr(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Tt=function(a,b,c,d,e){var f=0,h=d=0,l=g.is(a);if(b){c=g.Lu(b,"ytp-prev-button")||g.Lu(b,"ytp-next-button");var m=g.Lu(b,"ytp-play-button"),n=g.Lu(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.gs(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Lu(b,"ytp-miniplayer-button-top-left"),f=g.gs(b,this.element),b=g.is(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.qb().getPlayerSize().width;e=f+(e||0);l=g.ie(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.hq=function(){};
g.k.fn=function(){return!1};
g.k.fu=function(){};
g.k.du=function(){};
g.k.uo=function(){};
g.k.qo=function(){};
g.k.qs=function(){};
g.k.Eq=function(){};
g.k.Yw=function(){};
g.k.PN=function(){return null};g.w(srb,g.RV);g.k=srb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.Qu(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.RV.prototype.create.call(this);this.B.T(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.yl=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.QV("miniplayer",srb);})(_yt_player);

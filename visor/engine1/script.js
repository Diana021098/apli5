// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 4.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_cube(j,g,a){var c=jQuery;var e=c("ul",a);var b={position:"absolute",left:0,top:0,width:"100%",height:"100%"};var i={domPrefixes:" Webkit Moz ms O Khtml".split(" "),testDom:function(l){var k=this.domPrefixes.length;while(k--){if(typeof document.body.style[this.domPrefixes[k]+l]!=="undefined"){return true}}return false},cssTransitions:function(){return this.testDom("Transition")},cssTransforms3d:function(){var l=(typeof document.body.style.perspectiveProperty!=="undefined")||this.testDom("Perspective");if(l&&/AppleWebKit/.test(navigator.userAgent)){var n=document.createElement("div"),k=document.createElement("style"),m="Test3d"+Math.round(Math.random()*99999);k.textContent="@media (-webkit-transform-3d){#"+m+"{height:3px}}";document.getElementsByTagName("head")[0].appendChild(k);n.id=m;document.body.appendChild(n);l=n.offsetHeight===3;k.parentNode.removeChild(k);n.parentNode.removeChild(n)}return l}};var d=(i.cssTransitions()&&i.cssTransforms3d()&&!document.all);if(!d&&j.fallback){return new j.fallback(j,g,a)}function h(k,l,n,m){return"inset "+(-m*k*1.2/90)+"px "+(n*l*1.2/90)+"px "+(k+l)/20+"px rgba("+((n<m)?"0,0,0,.6":(n>m)?"255,255,255,0.8":"0,0,0,.0")+")"}var f;this.go=function(r,o){function l(J,y,z,x,v,H,I,F,E){J.parent().css("perspective",1000);var D=J.width(),B=J.height();var G=c(J.children().get(1));G.css({transform:"translateZ("+y+"px)",backfaceVisibility:"hidden","box-shadow":h(D,B,0,0)});var A=c(J.children().get(0));A.css({opacity:1,transform:"translateY("+x+"px) translateX("+z+"px) rotateY("+H+"deg) rotateX("+v+"deg)",backfaceVisibility:"hidden","box-shadow":h(D,B,v,H)});J.css({transform:"translateZ(-"+y+"px)",transformStyle:"preserve-3d"});var C=setTimeout(function(){var w="all "+j.duration+"ms cubic-bezier(0.645, 0.045, 0.355, 1.000)";J.css({transition:w,transform:"translateZ(-"+y+"px) rotateX("+I+"deg) rotateY("+F+"deg)"});G.css({transition:w,"box-shadow":h(D,B,I,F)});A.css({transition:w,"box-shadow":h(D,B,0,0)});C=setTimeout(E,j.duration)},20);return{stop:function(){clearTimeout(C);E()}}}if(d){if(f){f.stop()}var u=c('<div class="ws_effect">').css(b).css({zIndex:8}).appendTo(a.parent());c("<div>").css(b).appendTo(u).css({"background-image":"url("+g.get(r).src+")","background-size":"cover"});c("<div>").css(b).appendTo(u).css({"background-image":"url("+g.get(o).src+")","background-size":"cover"});e.hide();var t=a.width(),p=a.height(),n={left:[t/2,t/2,0,0,90,0,-90],right:[t/2,-t/2,0,0,-90,0,90],down:[p/2,0,-p/2,90,0,-90,0],up:[p/2,0,p/2,-90,0,90,0]}[j.direction||["left","right","down","up"][Math.floor(Math.random()*4)]];f=new l(u,n[0],n[1],n[2],n[3],n[4],n[5],n[6],function(){e.css({left:-r+"00%"}).show();u.remove();f=0})}else{var k=c("<div></div>").css({position:"absolute",display:"none","z-index":2,width:"100%",height:"100%"}).appendTo(a);k.stop(1,1);var m=(!!((r-o+1)%g.length)^j.revers?"left":"right");var s=c(g[o]).clone().css({position:"absolute",left:"0%",right:"auto",top:0,width:"100%",height:"100%",}).appendTo(k).css(m,0);var q=c(g[r]).clone().css({position:"absolute",left:"100%",right:"auto",top:0,width:"0%",height:"100%",}).appendTo(k).show();k.css({left:"auto",right:"auto",top:0}).css(m,0).show();e.hide();q.animate({width:"100%",left:0},j.duration,"easeInOutExpo",function(){c(this).remove()});s.animate({width:0},j.duration,"easeInOutExpo",function(){e.css({left:-r+"00%"}).show();k.remove()})}return r}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 4.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"cube",prev:"",next:"",duration:20*100,delay:20*100,width:1024,height:768,autoPlay:true,playPause:true,stopOnHover:false,loop:false,bullets:0,caption:false,captionEffect:"slide",controls:true,onBeforeStep:0,images:0});
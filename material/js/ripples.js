window.ripples={init:function(e){"use strict";function t(e,t){var n=e.matches||e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector;return n.call(e,t)}var n=100,i=500,a=function(e,n,i){document.addEventListener(e,function(e){var a="number"!=typeof e.detail?e.detail:e.target;t(a,n)&&i(e,a)})},o=function(e,t){var n,a=t,o=a.parentNode,p=document.createElement("div"),r=o.getBoundingClientRect(),c={x:e.clientX-r.left,y:e.clientY-r.top},s="transform:scale("+Math.round(a.offsetWidth/5)+")",u=new CustomEvent("rippleEnd",{detail:p});l=p,p.className="ripple",p.setAttribute("style","left:"+c.x+"px; top:"+c.y+"px;"),a.appendChild(p),n=window.getComputedStyle(p).opacity,p.dataset.animating=1,p.className="ripple ripple-on",p.setAttribute("style",p.getAttribute("style")+["-ms-"+s,"-moz-"+s,"-webkit-"+s,s].join(";")),setTimeout(function(){p.dataset.animating=0,document.dispatchEvent(u)},i)},p=function(e){e.className="ripple ripple-on ripple-out",setTimeout(function(){e.remove()},n)},r=!1;document.body.onmousedown=function(){r=!0},document.body.onmouseup=function(){r=!1};var l,c=function(e,t){if(0===t.getElementsByClassName("ripple-wrapper").length){t.className+=" withripple";var n=document.createElement("div");n.className="ripple-wrapper",t.appendChild(n)}};a("mouseover",e,c),a("mousedown",".ripple-wrapper",function(e,t){(1===e.which||2===e.which)&&o(e,t)}),a("rippleEnd",".ripple-wrapper .ripple",function(e,t){var n=t.parentNode.getElementsByClassName("ripple");(!r||n[0]==t&&n.length>1)&&p(t)}),a("mouseup",".ripple-wrapper",function(){var e=l;1!=e.dataset.animating&&p(e)})}};
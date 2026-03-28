(function(){var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={ua:!0},ea={};try{ea.__proto__=da;ca=ea.ua;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var k=this;function q(a){return void 0!==a}
function t(a){return"string"==typeof a}
function v(a){a=a.split(".");for(var b=k,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ha(){}
function ia(a){a.P=void 0;a.m=function(){return a.P?a.P:a.P=new a}}
function ja(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function w(a){var b=ja(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ka(a){return"function"==ja(a)}
function la(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function x(a){return a[ma]||(a[ma]=++na)}
var ma="closure_uid_"+(1E9*Math.random()>>>0),na=0;function oa(a,b,c){return a.call.apply(a.bind,arguments)}
function pa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function y(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y=oa:y=pa;return y.apply(null,arguments)}
function qa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var ra=Date.now||function(){return+new Date};
function z(a,b){var c=a.split("."),d=k;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&q(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function A(a,b){function c(){}
c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Xa=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var sa;var ta=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(t(a))return t(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ua=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=t(a)?a.split(""):a,h=0;h<c;h++)if(h in f){var m=f[h];
b.call(void 0,m,h,a)&&(d[e++]=m)}return d},va=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=t(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},wa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1},xa=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function ya(a,b){a:{var c=a.length;for(var d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:t(a)?a.charAt(c):a[c]}
function za(a,b){return 0<=ta(a,b)}
function Aa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ba(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(w(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Ca(a,b,c,d){Array.prototype.splice.apply(a,Da(arguments,1))}
function Da(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Ea(a,b){a.sort(b||Fa)}
function Ga(a,b){var c=Fa;Ea(a,function(a,e){return c(b(a),b(e))})}
function Ha(a){Ga(a,function(a){return a.name})}
function Fa(a,b){return a>b?1:a<b?-1:0}
function Ia(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if("array"==ja(d))for(var e=0;e<d.length;e+=8192)for(var f=Ia.apply(null,Da(d,e,e+8192)),h=0;h<f.length;h++)b.push(f[h]);else b.push(d)}return b}
;var Ja=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ka(a,b){for(var c=0,d=Ja(String(a)).split("."),e=Ja(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var m=d[h]||"",l=e[h]||"";do{m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==m[0].length&&0==l[0].length)break;c=La(0==m[1].length?0:parseInt(m[1],10),0==l[1].length?0:parseInt(l[1],10))||La(0==m[2].length,0==l[2].length)||La(m[2],l[2]);m=m[3];l=l[3]}while(0==c)}return c}
function La(a,b){return a<b?-1:a>b?1:0}
function Ma(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function Na(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()}
function Oa(a){var b=t(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;function Pa(){this.a=("undefined"==typeof document?null:document)||{cookie:""}}
g=Pa.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
g.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(ra()+1E3*c)).toUTCString();this.a.cookie=a+"="+b+e+d+c+f};
g.get=function(a,b){for(var c=a+"=",d=(this.a.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ja(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
g.F=function(){return Qa(this).keys};
g.C=function(){return Qa(this).values};
g.isEmpty=function(){return!this.a.cookie};
g.v=function(){return this.a.cookie?(this.a.cookie||"").split(";").length:0};
g.I=function(a){for(var b=Qa(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
g.clear=function(){for(var a=Qa(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Qa(a){a=(a.a.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Ja(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Ra=new Pa;Ra.b=3950;function Sa(a,b){this.f=a;this.g=b;this.b=0;this.a=null}
Sa.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.f();return a};var C;a:{var Ta=k.navigator;if(Ta){var Ua=Ta.userAgent;if(Ua){C=Ua;break a}}C=""}function D(a){return-1!=C.indexOf(a)}
;function Va(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Wa(a){var b=0,c;for(c in a)b++;return b}
function Xa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Ya(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function Za(a){var b=$a,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
var ab="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ab.length;f++)c=ab[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function cb(){return D("Safari")&&!(db()||D("Coast")||D("Opera")||D("Edge")||D("Silk")||D("Android"))}
function db(){return(D("Chrome")||D("CriOS"))&&!D("Edge")}
function eb(){return D("Android")&&!(db()||D("Firefox")||D("Opera")||D("Silk"))}
;function gb(a){k.setTimeout(function(){throw a;},0)}
var hb;
function ib(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=y(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.R;c.R=null;a()}};
return function(a){d.next={R:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}}
;function jb(){this.b=this.a=null}
var lb=new Sa(function(){return new kb},function(a){a.reset()});
jb.prototype.add=function(a,b){var c=lb.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};
jb.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function kb(){this.next=this.scope=this.a=null}
kb.prototype.set=function(a,b){this.a=a;this.scope=b;this.next=null};
kb.prototype.reset=function(){this.next=this.scope=this.a=null};function mb(a){nb||ob();pb||(nb(),pb=!0);qb.add(a,void 0)}
var nb;function ob(){if(k.Promise&&k.Promise.resolve){var a=k.Promise.resolve(void 0);nb=function(){a.then(rb)}}else nb=function(){var a=rb;
!ka(k.setImmediate)||k.Window&&k.Window.prototype&&!D("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(hb||(hb=ib()),hb(a)):k.setImmediate(a)}}
var pb=!1,qb=new jb;function rb(){for(var a;a=qb.remove();){try{a.a.call(a.scope)}catch(c){gb(c)}var b=lb;b.g(a);100>b.b&&(b.b++,a.next=b.a,b.a=a)}pb=!1}
;function sb(a){for(var b=[],c=0,d=0;c<a.length;){var e=a[c++];if(128>e)b[d++]=String.fromCharCode(e);else if(191<e&&224>e){var f=a[c++];b[d++]=String.fromCharCode((e&31)<<6|f&63)}else if(239<e&&365>e){f=a[c++];var h=a[c++],m=a[c++];e=((e&7)<<18|(f&63)<<12|(h&63)<<6|m&63)-65536;b[d++]=String.fromCharCode(55296+(e>>10));b[d++]=String.fromCharCode(56320+(e&1023))}else f=a[c++],h=a[c++],b[d++]=String.fromCharCode((e&15)<<12|(f&63)<<6|h&63)}return b.join("")}
;function tb(){return D("iPhone")&&!D("iPod")&&!D("iPad")}
function ub(){return tb()||D("iPad")||D("iPod")}
;function vb(a){vb[" "](a);return a}
vb[" "]=ha;function wb(a,b){var c=xb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var yb=D("Opera"),E=D("Trident")||D("MSIE"),zb=D("Edge"),Ab=zb||E,Bb=D("Gecko")&&!(-1!=C.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),Cb=-1!=C.toLowerCase().indexOf("webkit")&&!D("Edge"),Db=D("Macintosh"),Eb=D("Windows"),Fb=D("Android"),Gb=tb(),Hb=D("iPad"),Ib=D("iPod"),Jb=ub();function Kb(){var a=k.document;return a?a.documentMode:void 0}
var Lb;a:{var Mb="",Nb=function(){var a=C;if(Bb)return/rv:([^\);]+)(\)|;)/.exec(a);if(zb)return/Edge\/([\d\.]+)/.exec(a);if(E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Cb)return/WebKit\/(\S+)/.exec(a);if(yb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Nb&&(Mb=Nb?Nb[1]:"");if(E){var Ob=Kb();if(null!=Ob&&Ob>parseFloat(Mb)){Lb=String(Ob);break a}}Lb=Mb}var Pb=Lb,xb={};function Qb(a){return wb(a,function(){return 0<=Ka(Pb,a)})}
var Rb;var Sb=k.document;Rb=Sb&&E?Kb()||("CSS1Compat"==Sb.compatMode?parseInt(Pb,10):5):void 0;var Tb=D("Firefox"),Ub=tb()||D("iPod"),Vb=D("iPad"),Wb=eb(),Xb=db(),Yb=cb()&&!ub();var Zb=null,$b=null;function ac(a){var b=[];bc(a,function(a){b.push(a)});
return b}
function bc(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=$b[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}
cc();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),m=c(64);if(64===m&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=m&&b(h<<6&192|m))}}
function cc(){if(!Zb){Zb={};$b={};for(var a=0;65>a;a++)Zb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),$b[Zb[a]]=a,62<=a&&($b["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}}
;function dc(){this.g=this.g;this.f=this.f}
dc.prototype.g=!1;dc.prototype.K=function(){return this.g};
dc.prototype.dispose=function(){this.g||(this.g=!0,this.M())};
dc.prototype.M=function(){if(this.f)for(;this.f.length;)this.f.shift()()};
function ec(a){a&&"function"==typeof a.dispose&&a.dispose()}
;var fc=!Bb&&!E||E&&9<=Number(Rb)||Bb&&Qb("1.9.1"),gc=E&&!Qb("9");function hc(a){if(a.classList)return a.classList;a=a.className;return t(a)&&a.match(/\S+/g)||[]}
function G(a,b){return a.classList?a.classList.contains(b):za(hc(a),b)}
function I(a,b){a.classList?a.classList.add(b):G(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function ic(a,b){if(a.classList)B(b,function(b){I(a,b)});
else{var c={};B(hc(a),function(a){c[a]=!0});
B(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function J(a,b){a.classList?a.classList.remove(b):G(a,b)&&(a.className=ua(hc(a),function(a){return a!=b}).join(" "))}
function jc(a,b){a.classList?B(b,function(b){J(a,b)}):a.className=ua(hc(a),function(a){return!za(b,a)}).join(" ")}
function kc(a,b,c){c?I(a,b):J(a,b)}
function lc(a,b,c){G(a,b)&&(J(a,b),I(a,c))}
function mc(a,b){var c=!G(a,b);kc(a,b,c)}
;var nc=!E&&!cb();function oc(a,b){if(/-[a-z]/.test(b))return null;if(nc&&a.dataset){if(eb()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+Na(b))}
function pc(a){return/-[a-z]/.test("value")?!1:nc&&a.dataset?"value"in a.dataset:a.hasAttribute?a.hasAttribute("data-"+Na("value")):!!a.getAttribute("data-"+Na("value"))}
;function qc(){this.a="";this.b=rc}
qc.prototype.O=!0;qc.prototype.N=function(){return this.a};
var sc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,rc={};function tc(a){var b=new qc;b.a=a;return b}
tc("about:blank");function uc(){this.a=vc}
uc.prototype.O=!0;uc.prototype.N=function(){return""};
function wc(a){return a instanceof uc&&a.constructor===uc&&a.a===vc?"":"type_error:SafeHtml"}
var vc={};function L(a,b){this.x=q(a)?a:0;this.y=q(b)?b:0}
L.prototype.equals=function(a){return a instanceof L&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function xc(a,b){return new L(a.x-b.x,a.y-b.y)}
L.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
L.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
L.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function yc(a,b){this.width=a;this.height=b}
g=yc.prototype;g.aspectRatio=function(){return this.width/this.height};
g.isEmpty=function(){return!(this.width*this.height)};
g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function zc(a){return a?new Ac(Bc(a)):sa||(sa=new Ac)}
function M(a){return t(a)?document.getElementById(a):a}
function Cc(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Dc(document,"*",a,b)}
function N(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Dc(c,"*",a,b)[0]||null}return c||null}
function Dc(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,h;h=a[f];f++)b==h.nodeName&&(d[e++]=h);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;h=a[f];f++)b=h.className,"function"==typeof b.split&&za(b.split(/\s+/),c)&&(d[e++]=h);d.length=e;return d}return a}
function Ec(a,b){Va(b,function(b,d){b&&b.O&&(b=b.N());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Fc.hasOwnProperty(d)?a.setAttribute(Fc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Fc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Gc(a){a=a.document;a=Hc(a)?a.documentElement:a.body;return new yc(a.clientWidth,a.clientHeight)}
function Ic(a){var b=Jc(a);a=Kc(a);return E&&Qb("10")&&a.pageYOffset!=b.scrollTop?new L(b.scrollLeft,b.scrollTop):new L(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Jc(a){return a.scrollingElement?a.scrollingElement:!Cb&&Hc(a)?a.documentElement:a.body||a.documentElement}
function Kc(a){return a.parentWindow||a.defaultView}
function Lc(a,b,c){function d(c){c&&b.appendChild(t(c)?a.createTextNode(c):c)}
for(var e=1;e<c.length;e++){var f=c[e];if(!w(f)||la(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(la(f)){var h="function"==typeof f.item||"string"==typeof f.item;break a}if(ka(f)){h="function"==typeof f.item;break a}}h=!1}B(h?Aa(f):f,d)}}}
function Hc(a){return"CSS1Compat"==a.compatMode}
function Mc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Nc(a){return fc&&void 0!=a.children?a.children:ua(a.childNodes,function(a){return 1==a.nodeType})}
function Oc(a){for(;a&&1!=a.nodeType;)a=a.nextSibling;return a}
function Pc(a){return la(a)&&1==a.nodeType}
function Qc(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Bc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Rc(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Bc(a).createTextNode(String(b)))}}
function Sc(a,b){var c=[];return Tc(a,b,c,!0)?c[0]:void 0}
function Tc(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Tc(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Uc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Vc={IMG:" ",BR:"\n"};function Wc(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Xc(a)||Yc(a)):Xc(a)&&Yc(a))&&E){var c;!ka(a.getBoundingClientRect)||E&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Xc(a){return E&&!Qb("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Yc(a){a=a.tabIndex;return"number"==typeof a&&0<=a&&32768>a}
function Zc(a){if(gc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];$c(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");gc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function $c(a,b,c){if(!(a.nodeName in Uc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Vc)b.push(Vc[a.nodeName]);else for(a=a.firstChild;a;)$c(a,b,c),a=a.nextSibling}
function ad(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return bd(a,function(a){return(!e||a.nodeName==e)&&(!c||t(a.className)&&za(a.className.split(/\s+/),c))},d)}
function O(a,b){return ad(a,null,b,void 0)}
function bd(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function Ac(a){this.a=a||k.document||document}
g=Ac.prototype;g.createElement=function(a){return this.a.createElement(String(a))};
g.appendChild=function(a,b){a.appendChild(b)};
g.append=function(a,b){Lc(Bc(a),a,arguments)};
g.isElement=Pc;g.contains=Qc;var cd="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""};function dd(){}
dd.prototype.next=function(){throw cd;};
dd.prototype.A=function(){return this};
function ed(a){if(a instanceof dd)return a;if("function"==typeof a.A)return a.A(!1);if(w(a)){var b=0,c=new dd;c.next=function(){for(;;){if(b>=a.length)throw cd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function fd(a,b){if(w(a))try{B(a,b,void 0)}catch(c){if(c!==cd)throw c;}else{a=ed(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==cd)throw c;}}}
function gd(a){if(w(a))return Aa(a);a=ed(a);var b=[];fd(a,function(a){b.push(a)});
return b}
;function hd(a,b){this.b={};this.a=[];this.g=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof hd)for(c=a.F(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
g=hd.prototype;g.v=function(){return this.f};
g.C=function(){id(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};
g.F=function(){id(this);return this.a.concat()};
g.I=function(a){for(var b=0;b<this.a.length;b++){var c=this.a[b];if(jd(this.b,c)&&this.b[c]==a)return!0}return!1};
g.equals=function(a,b){if(this===a)return!0;if(this.f!=a.v())return!1;var c=b||kd;id(this);for(var d,e=0;d=this.a[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function kd(a,b){return a===b}
g.isEmpty=function(){return 0==this.f};
g.clear=function(){this.b={};this.g=this.f=this.a.length=0};
g.remove=function(a){return jd(this.b,a)?(delete this.b[a],this.f--,this.g++,this.a.length>2*this.f&&id(this),!0):!1};
function id(a){if(a.f!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];jd(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.f!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],jd(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}
g.get=function(a,b){return jd(this.b,a)?this.b[a]:b};
g.set=function(a,b){jd(this.b,a)||(this.f++,this.a.push(a),this.g++);this.b[a]=b};
g.forEach=function(a,b){for(var c=this.F(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.A=function(a){id(this);var b=0,c=this.g,d=this,e=new dd;e.next=function(){if(c!=d.g)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw cd;var e=d.a[b++];return a?e:d.b[e]};
return e};
function jd(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function ld(a){var b=[];md(new nd,a,b);return b.join("")}
function nd(){}
function md(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==ja(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),md(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),od(d,c),c.push(":"),md(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":od(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var pd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},qd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function od(a,b){b.push('"',a.replace(qd,function(a){var b=pd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),pd[a]=b);return b}),'"')}
;function rd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
g=rd.prototype;g.getHeight=function(){return this.bottom-this.top};
g.contains=function(a){return this&&a?a instanceof rd?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function sd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
sd.prototype.contains=function(a){return a instanceof L?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
sd.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
sd.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
sd.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function td(a,b,c){if(t(b))(b=ud(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=ud(c,d);f&&(c.style[f]=e)}}
var vd={};function ud(a,b){var c=vd[b];if(!c){var d=Ma(b);c=d;void 0===a.style[d]&&(d=(Cb?"Webkit":Bb?"Moz":E?"ms":yb?"O":null)+Oa(d),void 0!==a.style[d]&&(c=d));vd[b]=c}return c}
function wd(a,b){var c=Bc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function xd(a,b){return wd(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function yd(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}E&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function zd(a){if(E&&!(8<=Number(Rb)))return a.offsetParent;var b=Bc(a),c=xd(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=xd(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Ad(a){for(var b=new rd(0,Infinity,Infinity,0),c=zc(a),d=c.a.body,e=c.a.documentElement,f=Jc(c.a);a=zd(a);)if(!(E&&0==a.clientWidth||Cb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=xd(a,"overflow")){var h=Bd(a),m=new L(a.clientLeft,a.clientTop);h.x+=m.x;h.y+=m.y;b.top=Math.max(b.top,h.y);b.right=Math.min(b.right,h.x+a.clientWidth);b.bottom=Math.min(b.bottom,h.y+a.clientHeight);b.left=Math.max(b.left,h.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
Gc(Kc(c.a)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Bd(a){var b=Bc(a),c=new L(0,0);var d=b?Bc(b):document;d=!E||9<=Number(Rb)||Hc(zc(d).a)?d.documentElement:d.body;if(a==d)return c;a=yd(a);b=Ic(zc(b).a);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Cd(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Dd(a){var b=Ed;if("none"!=xd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Ed(a){var b=a.offsetWidth,c=a.offsetHeight,d=Cb&&!b&&!c;return q(b)&&!d||!a.getBoundingClientRect?new yc(b,c):(a=yd(a),new yc(a.right-a.left,a.bottom-a.top))}
function Fd(a){var b=Bd(a);a=Dd(a);return new sd(b.x,b.y,a.width,a.height)}
function Gd(a){return"rtl"==xd(a,"direction")}
function Hd(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Id(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Hd(a,c):0}
var Jd={thin:2,medium:4,thick:6};function Kd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Jd?Jd[c]:Hd(a,c)}
;var Ld=function(){if(Eb){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(C))?a[1]:"0"}return Db?(a=/10[_.][0-9_.]+/,(a=a.exec(C))?a[0].replace(/_/g,"."):"10"):Fb?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(C))?a[1]:""):Gb||Hb||Ib?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(C))?a[1].replace(/_/g,"."):""):""}();function Md(a){return(a=a.exec(C))?a[1]:""}
var Nd=function(){if(Tb)return Md(/Firefox\/([0-9.]+)/);if(E||zb||yb)return Pb;if(Xb)return ub()?Md(/CriOS\/([0-9.]+)/):Md(/Chrome\/([0-9.]+)/);if(Yb&&!ub())return Md(/Version\/([0-9.]+)/);if(Ub||Vb){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(C);if(a)return a[1]+"."+a[2]}else if(Wb)return(a=Md(/Android\s+([0-9.]+)/))?a:Md(/Version\/([0-9.]+)/);return""}();function Od(a,b,c,d,e,f,h){var m;if(m=c.offsetParent){var l="HTML"==m.tagName||"BODY"==m.tagName;if(!l||"static"!=xd(m,"position")){var n=Bd(m);if(!l){l=Gd(m);var r;if(r=l){if(r=Yb)r=0<=Ka(Nd,10);var F;if(F=Jb)F=0<=Ka(Ld,10);r=Bb||r||F}l=r?-m.scrollLeft:!l||Ab&&Qb("8")||"visible"==xd(m,"overflowX")?m.scrollLeft:m.scrollWidth-m.clientWidth-m.scrollLeft;n=xc(n,new L(l,m.scrollTop))}}}m=n||new L;n=Fd(a);if(l=Ad(a)){var H=new sd(l.left,l.top,l.right-l.left,l.bottom-l.top);l=Math.max(n.left,H.left);r=
Math.min(n.left+n.width,H.left+H.width);l<=r&&(F=Math.max(n.top,H.top),H=Math.min(n.top+n.height,H.top+H.height),F<=H&&(n.left=l,n.top=F,n.width=r-l,n.height=H-F))}l=zc(a);F=zc(c);if(l.a!=F.a){r=l.a.body;F=Kc(F.a);H=new L(0,0);var K=(K=Bc(r))?Kc(K):window;b:{try{vb(K.parent);var u=!0;break b}catch(fh){}u=!1}if(u){u=r;do{if(K==F)var fb=Bd(u);else fb=yd(u),fb=new L(fb.left,fb.top);H.x+=fb.x;H.y+=fb.y}while(K&&K!=F&&K!=K.parent&&(u=K.frameElement)&&(K=K.parent))}u=xc(H,Bd(r));!E||9<=Number(Rb)||Hc(l.a)||
(u=xc(u,Ic(l.a)));n.left+=u.x;n.top+=u.y}a=Pd(a,b);b=n.left;a&4?b+=n.width:a&2&&(b+=n.width/2);b=new L(b,n.top+(a&1?n.height:0));b=xc(b,m);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var p;h&&(p=Ad(c))&&(p.top-=m.y,p.right-=m.x,p.bottom-=m.y,p.left-=m.x);e=b;e=new L(e.x,e.y);b=Pd(c,d);d=Dd(c);a=new yc(d.width,d.height);e=new L(e.x,e.y);a=new yc(a.width,a.height);u=0;if(f||0!=b)b&4?e.x-=a.width+(f?f.right:0):b&2?e.x-=a.width/2:f&&(e.x+=f.left),b&1?e.y-=a.height+(f?f.bottom:0):f&&(e.y+=f.top);h&&(p?
(f=e,b=a,u=0,65==(h&65)&&(f.x<p.left||f.x>=p.right)&&(h&=-2),132==(h&132)&&(f.y<p.top||f.y>=p.bottom)&&(h&=-5),f.x<p.left&&h&1&&(f.x=p.left,u|=1),h&16&&(m=f.x,f.x<p.left&&(f.x=p.left,u|=4),f.x+b.width>p.right&&(b.width=Math.min(p.right-f.x,m+b.width-p.left),b.width=Math.max(b.width,0),u|=4)),f.x+b.width>p.right&&h&1&&(f.x=Math.max(p.right-b.width,p.left),u|=1),h&2&&(u|=(f.x<p.left?16:0)|(f.x+b.width>p.right?32:0)),f.y<p.top&&h&4&&(f.y=p.top,u|=2),h&32&&(m=f.y,f.y<p.top&&(f.y=p.top,u|=8),f.y+b.height>
p.bottom&&(b.height=Math.min(p.bottom-f.y,m+b.height-p.top),b.height=Math.max(b.height,0),u|=8)),f.y+b.height>p.bottom&&h&4&&(f.y=Math.max(p.bottom-b.height,p.top),u|=2),h&8&&(u|=(f.y<p.top?64:0)|(f.y+b.height>p.bottom?128:0)),h=u):h=256,u=h);h=new sd(0,0,0,0);h.left=e.x;h.top=e.y;h.width=a.width;h.height=a.height;f=h;h=u;h&496||(p=f,e=new L(p.left,p.top),e instanceof L?(p=e.x,e=e.y):(p=e,e=void 0),c.style.left=Cd(p,!1),c.style.top=Cd(e,!1),a=new yc(f.width,f.height),d==a||d&&a&&d.width==a.width&&
d.height==a.height||(f=a,p=Hc(zc(Bc(c)).a),!E||Qb("10")||p&&Qb("8")?(c=c.style,Bb?c.MozBoxSizing="border-box":Cb?c.WebkitBoxSizing="border-box":c.boxSizing="border-box",c.width=Math.max(f.width,0)+"px",c.height=Math.max(f.height,0)+"px"):(d=c.style,p?(E?(p=Id(c,"paddingLeft"),e=Id(c,"paddingRight"),a=Id(c,"paddingTop"),b=Id(c,"paddingBottom"),p=new rd(a,e,b,p)):(p=wd(c,"paddingLeft"),e=wd(c,"paddingRight"),a=wd(c,"paddingTop"),b=wd(c,"paddingBottom"),p=new rd(parseFloat(a),parseFloat(e),parseFloat(b),
parseFloat(p))),!E||9<=Number(Rb)?(e=wd(c,"borderLeftWidth"),a=wd(c,"borderRightWidth"),b=wd(c,"borderTopWidth"),c=wd(c,"borderBottomWidth"),c=new rd(parseFloat(b),parseFloat(a),parseFloat(c),parseFloat(e))):(e=Kd(c,"borderLeft"),a=Kd(c,"borderRight"),b=Kd(c,"borderTop"),c=Kd(c,"borderBottom"),c=new rd(b,a,c,e)),d.pixelWidth=f.width-c.left-p.left-p.right-c.right,d.pixelHeight=f.height-c.top-p.top-p.bottom-c.bottom):(d.pixelWidth=f.width,d.pixelHeight=f.height))));return h}
function Pd(a,b){return(b&8&&Gd(a)?b^4:b)&-9}
;function P(a){dc.call(this);this.l=1;this.i=[];this.j=0;this.a=[];this.b={};this.w=!!a}
A(P,dc);g=P.prototype;g.subscribe=function(a,b,c){var d=this.b[a];d||(d=this.b[a]=[]);var e=this.l;this.a[e]=a;this.a[e+1]=b;this.a[e+2]=c;this.l=e+3;d.push(e);return e};
function Qd(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.G(d),b.apply(void 0,arguments))},a)}
function Rd(a,b,c){if(b=a.b[b]){var d=a.a;(b=ya(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.G(b)}}
g.G=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.j)this.i.push(a),this.a[a+1]=ha;else{if(c){var d=ta(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
g.B=function(a,b){var c=this.b[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var h=c[e];Sd(this.a[h+1],this.a[h+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.a[h+1].apply(this.a[h+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.G(c)}}return 0!=e}return!1};
function Sd(a,b,c){mb(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.b[a];b&&(B(b,this.G,this),delete this.b[a])}else this.a.length=0,this.b={}};
g.v=function(a){if(a){var b=this.b[a];return b?b.length:0}a=0;for(b in this.b)a+=this.v(b);return a};
g.M=function(){P.u.M.call(this);this.clear();this.i.length=0};function Td(a){this.a=a}
Td.prototype.set=function(a,b){q(b)?this.a.set(a,ld(b)):this.a.remove(a)};
Td.prototype.get=function(a){try{var b=this.a.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Td.prototype.remove=function(a){this.a.remove(a)};function Ud(a){this.a=a}
A(Ud,Td);function Vd(a){this.data=a}
function Wd(a){return!q(a)||a instanceof Vd?a:new Vd(a)}
Ud.prototype.set=function(a,b){Ud.u.set.call(this,a,Wd(b))};
Ud.prototype.b=function(a){a=Ud.u.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ud.prototype.get=function(a){if(a=this.b(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Xd(a){this.a=a}
A(Xd,Ud);Xd.prototype.set=function(a,b,c){if(b=Wd(b)){if(c){if(c<ra()){Xd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=ra()}Xd.u.set.call(this,a,b)};
Xd.prototype.b=function(a){var b=Xd.u.b.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<ra()||c&&c>ra())Xd.prototype.remove.call(this,a);else return b}};function Yd(){}
;function Zd(){}
A(Zd,Yd);Zd.prototype.v=function(){var a=0;fd(this.A(!0),function(){a++});
return a};
Zd.prototype.clear=function(){var a=gd(this.A(!0)),b=this;B(a,function(a){b.remove(a)})};function $d(a){this.a=a}
A($d,Zd);g=$d.prototype;g.isAvailable=function(){if(!this.a)return!1;try{return this.a.setItem("__sak","1"),this.a.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.a.setItem(a,b)}catch(c){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.a.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.a.removeItem(a)};
g.v=function(){return this.a.length};
g.A=function(a){var b=0,c=this.a,d=new dd;d.next=function(){if(b>=c.length)throw cd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.a.clear()};
g.key=function(a){return this.a.key(a)};function ae(){var a=null;try{a=window.localStorage||null}catch(b){}this.a=a}
A(ae,$d);function be(a,b){this.b=a;this.a=null;if(E&&!(9<=Number(Rb))){ce||(ce=new hd);this.a=ce.get(a);this.a||(b?this.a=document.getElementById(b):(this.a=document.createElement("userdata"),this.a.addBehavior("#default#userData"),document.body.appendChild(this.a)),ce.set(a,this.a));try{this.a.load(this.b)}catch(c){this.a=null}}}
A(be,Zd);var de={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ce=null;function ee(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return de[a]})}
g=be.prototype;g.isAvailable=function(){return!!this.a};
g.set=function(a,b){this.a.setAttribute(ee(a),b);fe(this)};
g.get=function(a){a=this.a.getAttribute(ee(a));if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.a.removeAttribute(ee(a));fe(this)};
g.v=function(){return ge(this).attributes.length};
g.A=function(a){var b=0,c=ge(this).attributes,d=new dd;d.next=function(){if(b>=c.length)throw cd;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){for(var a=ge(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);fe(this)};
function fe(a){try{a.a.save(a.b)}catch(b){throw"Storage mechanism: Quota exceeded";}}
function ge(a){return a.a.XMLDocument.documentElement}
;function he(a,b){this.b=a;this.a=b+"::"}
A(he,Zd);he.prototype.set=function(a,b){this.b.set(this.a+a,b)};
he.prototype.get=function(a){return this.b.get(this.a+a)};
he.prototype.remove=function(a){this.b.remove(this.a+a)};
he.prototype.A=function(a){var b=this.b.A(!0),c=this,d=new dd;d.next=function(){for(var d=b.next();d.substr(0,c.a.length)!=c.a;)d=b.next();return a?d.substr(c.a.length):c.b.get(d)};
return d};function ie(a){return a.v&&"function"==typeof a.v?a.v():w(a)||t(a)?a.length:Wa(a)}
function je(a){if(a.C&&"function"==typeof a.C)return a.C();if(t(a))return a.split("");if(w(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Xa(a)}
function ke(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(w(a)||t(a))return xa(a,b,void 0);if(a.F&&"function"==typeof a.F)var c=a.F();else if(a.C&&"function"==typeof a.C)c=void 0;else if(w(a)||t(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=Ya(a);d=je(a);e=d.length;for(var f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function le(a){this.a=new hd;if(a){a=je(a);for(var b=a.length,c=0;c<b;c++)this.add(a[c])}}
function me(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+x(a):b.substr(0,1)+a}
g=le.prototype;g.v=function(){return this.a.v()};
g.add=function(a){this.a.set(me(a),a)};
g.remove=function(a){return this.a.remove(me(a))};
g.clear=function(){this.a.clear()};
g.isEmpty=function(){return this.a.isEmpty()};
g.contains=function(a){a=me(a);return jd(this.a.b,a)};
g.C=function(){return this.a.C()};
g.equals=function(a){return this.v()==ie(a)&&ne(this,a)};
function ne(a,b){var c=ie(b);if(a.v()>c)return!1;!(b instanceof le)&&5<c&&(b=new le(b));return ke(a,function(a){var c=b;if(c.contains&&"function"==typeof c.contains)a=c.contains(a);else if(c.I&&"function"==typeof c.I)a=c.I(a);else if(w(c)||t(c))a=za(c,a);else a:{for(var d in c)if(c[d]==a){a=!0;break a}a=!1}return a})}
g.A=function(){return this.a.A(!1)};function oe(a,b,c){if("array"==ja(b))for(var d=0;d<b.length;d++)oe(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
;function pe(a,b,c){a&&(a.dataset?a.dataset[qe(b)]=String(c):a.setAttribute("data-"+b,c))}
function re(a,b){return a?a.dataset?a.dataset[qe(b)]:a.getAttribute("data-"+b):null}
var se={};function qe(a){return se[a]||(se[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var te=0;function ue(a){var b=a.__yt_uid_key;b||(b=ve(),a.__yt_uid_key=b);return b}
function we(a,b){a=M(a);b=M(b);return!!bd(a,function(a){return a===b},void 0)}
function xe(a,b){var c=Dc(document,a,null,b);return c.length?c[0]:null}
function ye(){kc(document.body,"hide-players",!1);B(Cc("preserve-players"),function(a){J(a,"preserve-players")})}
var ve=v("ytDomDomGetNextId")||function(){return++te};
z("ytDomDomGetNextId",ve);var ze=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",ze);function Ae(a){var b=arguments;if(1<b.length)ze[b[0]]=b[1];else{b=b[0];for(var c in b)ze[c]=b[c]}}
function Be(a,b){return a in ze?ze[a]:b}
;function Ce(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){De(b)}}:a}
function De(a){var b=v("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=Be("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),Ae("ERRORS",b))}
;var Ee={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Fe(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ee||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}
Fe.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Fe.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Fe.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var $a=v("ytEventsEventsListeners")||{};z("ytEventsEventsListeners",$a);var Ge=v("ytEventsEventsCounter")||{count:0};z("ytEventsEventsCounter",Ge);
function He(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Za(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,h;if(h=la(e[4])&&la(d))a:{h=e[4];for(var m in h)if(!(m in d)||h[m]!==d[m]){h=!1;break a}for(m in d)if(!(m in h)){h=!1;break a}h=!0}return!!e.length&&e[0]==a&&e[1]==b&&e[2]==
c&&(f||h)})}
function Q(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=He(a,b,c,d);if(e)return e;e=++Ge.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(d){d=new Fe(d);if(!bd(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Fe(b);
b.currentTarget=a;return c.call(a,b)};
h=Ce(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Ie()||"boolean"==typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);$a[e]=[a,b,c,h,d];return e}
function Je(a,b,c){var d=a||document;return Q(d,"click",function(a){var e=bd(a.target,function(a){return a===d||c(a)});
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function Ke(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var Ie=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=!1;
try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Le(a,b){return Je(a,b,function(a){return G(a,"yt-dialog-dismiss")})}
function Me(a,b){if(document.createEvent){var c=document.createEvent("HTMLEvents");c.initEvent(b,!0,!0);a.dispatchEvent(c)}else c=document.createEventObject(),a.fireEvent("on"+b,c)}
function R(a){a&&("string"==typeof a&&(a=[a]),B(a,function(a){if(a in $a){var b=$a[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Ie()||"boolean"==typeof b?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete $a[a]}}))}
;function Ne(a,b){ka(a)&&(a=Ce(a));return window.setTimeout(a,b)}
;var Oe=v("ytPubsubPubsubInstance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.G;P.prototype.publish=P.prototype.B;P.prototype.clear=P.prototype.clear;z("ytPubsubPubsubInstance",Oe);var Pe=v("ytPubsubPubsubSubscribedKeys")||{};z("ytPubsubPubsubSubscribedKeys",Pe);var Qe=v("ytPubsubPubsubTopicToKeys")||{};z("ytPubsubPubsubTopicToKeys",Qe);var Re=v("ytPubsubPubsubIsSynchronous")||{};z("ytPubsubPubsubIsSynchronous",Re);
function Se(a,b,c){var d=Te();if(d){var e=d.subscribe(a,function(){var d=arguments;var h=function(){Pe[e]&&b.apply(c||window,d)};
try{Re[a]?h():Ne(h,0)}catch(m){De(m)}},c);
Pe[e]=!0;Qe[a]||(Qe[a]=[]);Qe[a].push(e);return e}return 0}
function Ue(a){var b=Te();b&&("number"==typeof a?a=[a]:t(a)&&(a=[parseInt(a,10)]),B(a,function(a){b.unsubscribeByKey(a);delete Pe[a]}))}
function S(a,b){var c=Te();c&&c.publish.apply(c,arguments)}
function Ve(a,b){Re[a]=!0;var c=Te();c&&c.publish.apply(c,arguments);Re[a]=!1}
function Te(){return v("ytPubsubPubsubInstance")}
;function We(a,b){(a=M(a))&&a.style&&(a.style.display=b?"":"none",kc(a,"hid",!b))}
function Xe(a){return(a=M(a))?"none"!=a.style.display&&!G(a,"hid"):!1}
function Ye(a){B(arguments,function(a){!w(a)||a instanceof Element?We(a,!0):B(a,function(a){Ye(a)})})}
function Ze(a){B(arguments,function(a){!w(a)||a instanceof Element?We(a,!1):B(a,function(a){Ze(a)})})}
;function $e(){}
function af(){}
$e.prototype=aa(af.prototype);$e.prototype.constructor=$e;if(fa)fa($e,af);else for(var bf in af)if("prototype"!=bf)if(Object.defineProperties){var cf=Object.getOwnPropertyDescriptor(af,bf);cf&&Object.defineProperty($e,bf,cf)}else $e[bf]=af[bf];$e.u=af.prototype;$e.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
ia($e);$e.m();var df=v("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.G;P.prototype.publish=P.prototype.B;P.prototype.clear=P.prototype.clear;z("ytPubsub2Pubsub2Instance",df);var ef=v("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",ef);z("ytPubsub2Pubsub2TopicToKeys",v("ytPubsub2Pubsub2TopicToKeys")||{});z("ytPubsub2Pubsub2IsAsync",v("ytPubsub2Pubsub2IsAsync")||{});z("ytPubsub2Pubsub2SkipSubKey",null);
function ff(a){var b=v("ytPubsub2Pubsub2Instance");b&&("number"==typeof a&&(a=[a]),B(a,function(a){b.unsubscribeByKey(a);delete ef[a]}))}
;var gf={},hf="ontouchstart"in document;function jf(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return bd(c,function(a){return G(a,b)},d)}
function T(a){var b="mouseover"==a.type&&"mouseenter"in gf||"mouseout"==a.type&&"mouseleave"in gf,c=a.type in gf||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=gf[b];for(var d in c.b){var e=jf(b,d,a.target);e&&!bd(a.relatedTarget,function(a){return a==e})&&c.B(d,e,b,a)}}if(b=gf[a.type])for(d in b.b)(e=jf(a.type,d,a.target))&&b.B(d,e,a.type,a)}}
Q(document,"blur",T,!0);Q(document,"change",T,!0);Q(document,"click",T);Q(document,"focus",T,!0);Q(document,"mouseover",T);Q(document,"mouseout",T);Q(document,"mousedown",T);Q(document,"keydown",T);Q(document,"keyup",T);Q(document,"keypress",T);Q(document,"cut",T);Q(document,"paste",T);hf&&(Q(document,"touchstart",T),Q(document,"touchend",T),Q(document,"touchcancel",T));function kf(a){this.i=a;this.l={};this.w=[];this.D=[]}
g=kf.prototype;g.s=function(a){return O(a,U(this))};
function U(a,b){return"yt-uix"+(a.i?"-"+a.i:"")+(b?"-"+b:"")}
g.unregister=function(){Ue(this.w);this.w.length=0;ff(this.D);this.D.length=0};
g.init=ha;g.dispose=ha;function lf(a,b,c){a.w.push(Se(b,c,a))}
function V(a,b,c,d){d=U(a,d);var e=y(c,a);b in gf||(gf[b]=new P);gf[b].subscribe(d,e);a.l[c]=e}
function W(a,b,c,d){if(b in gf){var e=gf[b];Rd(e,U(a,d),a.l[c]);0>=e.v()&&(e.dispose(),delete gf[b])}delete a.l[c]}
g.H=function(a,b,c){var d=this.h(a,b);if(d&&(d=v(d))){var e=Da(arguments,2);Ca(e,0,0,a);d.apply(null,e)}};
g.h=function(a,b){return re(a,b)};var mf=Object.create(null);mf.log_event="GENERIC_EVENT_LOGGING";mf.log_interaction="INTERACTION_LOGGING";z("ytLoggingTransportLogPayloadsQueue_",v("ytLoggingTransportLogPayloadsQueue_")||{});z("ytLoggingTransportTokensToCttTargetIds_",v("ytLoggingTransportTokensToCttTargetIds_")||{});z("ytLoggingTransportDispatchedStats_",v("ytLoggingTransportDispatchedStats_")||{});z("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{});ra();function nf(){var a=new ae;(a=a.isAvailable()?new he(a,"yt.innertube"):null)||(a=new be("yt.innertube"),a=a.isAvailable()?a:null);this.a=a?new Xd(a):null;this.b=document.domain||window.location.hostname}
nf.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.a)try{this.a.set(a,b,ra()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ld(b))}catch(f){return}else e=escape(b);b=this.b;Ra.set(""+a,e,c,"../../default.htm",void 0===b?"youtube.com":b,!1)};
nf.prototype.get=function(a,b){var c=void 0,d=!this.a;if(!d)try{c=this.a.get(a)}catch(e){d=!0}if(d&&(c=Ra.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
nf.prototype.remove=function(a){this.a&&this.a.remove(a);var b=this.b;Ra.remove(""+a,"../../default.htm",void 0===b?"youtube.com":b)};new nf;var of=ra().toString();var pf;a:{if(window.crypto&&window.crypto.getRandomValues)try{var qf=Array(16),rf=new Uint8Array(16);window.crypto.getRandomValues(rf);for(var sf=0;sf<qf.length;sf++)qf[sf]=rf[sf];pf=qf;break a}catch(a){}for(var tf=Array(16),uf=0;16>uf;uf++){for(var vf=ra(),wf=0;wf<vf%23;wf++)tf[uf]=Math.random();tf[uf]=Math.floor(256*Math.random())}if(of)for(var xf=1,yf=0;yf<of.length;yf++)tf[xf%16]=tf[xf%16]^tf[(xf-1)%16]/4^of.charCodeAt(yf),xf++;pf=tf}
for(var zf=pf,Af=[],Bf=0;Bf<zf.length;Bf++)Af.push("ABCDEFGHIJLKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(zf[Bf]&63));function Cf(){kf.call(this,"button");this.a=null;this.f=[];this.b={}}
A(Cf,kf);ia(Cf);g=Cf.prototype;g.register=function(){V(this,"click",this.S);V(this,"keydown",this.da);V(this,"keypress",this.ea);lf(this,"page-scroll",this.Ea)};
g.unregister=function(){W(this,"click",this.S);W(this,"keydown",this.da);W(this,"keypress",this.ea);Df(this);this.b={};Cf.u.unregister.call(this)};
g.S=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
g.da=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=X(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=Sc(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.La;else"table"==e&&(f=this.Ka);f&&Ef(this,a,b,c,y(f,this))}}};
g.Ea=function(){var a=this.b;if(0!=Wa(a))for(var b in a){var c=a[b],d=Ff(this,c);if(void 0==d||void 0==c)break;Gf(this,d,c,!0)}};
function Ef(a,b,c,d,e){var f=Xe(c),h=9==d.keyCode;if(h||32==d.keyCode||13==d.keyCode)if(d=Hf(a,c))if(a=q(d.firstElementChild)?d.firstElementChild:Oc(d.firstChild),"a"==a.tagName.toLowerCase()){var m=void 0===m?{}:m;var l=void 0===l?"":l;var n=void 0===n?window:n;b=n.location;n=a.href;a=[];for(var r in m)oe(r,m[r],a);m=a.join("&");m?(r=n.indexOf("#"),0>r&&(r=n.length),a=n.indexOf("?"),0>a||a>r?(a=r,d=""):d=n.substring(a+1,r),r=[n.substr(0,a),d,n.substr(r)],n=r[1],r[1]=m?n?n+"&"+m:m:n,m=r[0]+(r[1]?
"?"+r[1]:"")+r[2]):m=n;l=m+l;l instanceof qc||l instanceof qc||(l=l.O?l.N():String(l),sc.test(l)||(l="about:invalid#zClosurez"),l=tc(l));b.href=l instanceof qc&&l.constructor===qc&&l.b===rc?l.a:"type_error:SafeUrl"}else Me(a,"click");else h&&If(a,b);else f?27==d.keyCode?(Hf(a,c),If(a,b)):e(b,c,d):(l=G(b,U(a,"reverse"))?38:40,d.keyCode==l&&(Me(b,"click"),d.preventDefault()))}
g.ea=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=X(this,a),Xe(a)&&c.preventDefault())};
function Hf(a,b){var c=U(a,"menu-item-highlight"),d=N(c,b);d&&J(d,c);return d}
function Jf(a,b,c){I(c,U(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=U(a,"item-id-"+x(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
g.Ka=function(a,b,c){var d=Hf(this,b);if(d){var e=xe("table",b);b=Dc(document,"td",null,e);d=Kf(d,b,Dc(document,"td",null,xe("tr",e)).length,c);-1!=d&&(Jf(this,a,b[d]),c.preventDefault())}};
g.La=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Hf(this,b);d&&(b=ua(Dc(document,"li",null,b),Xe),Jf(this,a,b[Kf(d,b,1,c)]),c.preventDefault())}};
function Kf(a,b,c,d){var e=b.length;a=ta(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Lf(a,b){var c=b.iframeMask;c||(c=document.createElement("IFRAME"),c.src='javascript:""',c.className=U(a,"menu-mask"),Ze(c),b.iframeMask=c);return c}
function Gf(a,b,c,d){var e=O(b,U(a,"group")),f=!!a.h(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var h=8,m=Fd(b);if(G(b,U(a,"reverse"))){f=8;h=9;m=m.top+"px";try{c.style.maxHeight=m}catch(r){}}G(b,"flip")&&(G(b,U(a,"reverse"))?(f=12,h=13):(f=13,h=12));var l;a.h(b,"button-has-sibling-menu")?l=zd(e):a.h(b,"button-menu-root-container")&&(l=Mf(a,b));E&&!Qb("8")&&(l=null);if(l){var n=Fd(l);n=new rd(-n.top,n.left,n.top,-n.left)}l=new L(0,1);G(b,U(a,"center-menu"))&&(l.x-=Math.round((Dd(c).width-Dd(b).width)/
2));d&&(l.y+=Ic(document).y);if(a=Lf(a,b))b=Dd(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Od(e,f,a,h,l,n,197),d&&td(a,"position","fixed");Od(e,f,c,h,l,n,197)}
function Mf(a,b){if(a.h(b,"button-menu-root-container")){var c=a.h(b,"button-menu-root-container");return O(b,c)}return document.body}
g.pa=function(a){if(a){var b=X(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.h(a,"button-has-sibling-menu")?c=a.parentNode:c=Mf(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Lf(this,a);d&&c.appendChild(d);(c=!!this.h(a,"button-menu-fixed"))&&(this.b[ue(a).toString()]=b);Gf(this,a,b,c);Ve("yt-uix-button-menu-before-show",a,b);Ye(b);d&&Ye(d);
this.H(a,"button-menu-action",!0);I(a,U(this,"active"));b=y(this.oa,this,a,!1);d=y(this.oa,this,a,!0);c=y(this.Sa,this,a,void 0);this.a&&X(this,this.a)==X(this,a)||Df(this);S("yt-uix-button-menu-show",a);R(this.f);this.f=[Q(document,"click",d),Q(document,"contextmenu",b),Q(window,"resize",c)];this.a=a}}};
function If(a,b){if(b){var c=X(a,b);if(c){a.a=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Ze(c);a.H(b,"button-menu-action",!1);var d=Lf(a,b),e=ue(c).toString();delete a.b[e];Ne(function(){d&&d.parentNode&&(Ze(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=O(b,U(a,"group"));
var f=[U(a,"active")];e&&f.push(U(a,"group-active"));jc(b,f);S("yt-uix-button-menu-hide",b);R(a.f);a.f.length=0}}
g.Sa=function(a,b){var c=X(this,a);if(c){b&&(b instanceof uc?c.innerHTML=wc(b):Rc(c,b));var d=!!this.h(a,"button-menu-fixed");Gf(this,a,c,d)}};
function Ff(a,b){return O(b.activeButtonNode||b.parentNode,U(a))}
g.oa=function(a,b,c){c=Ke(c);var d=O(c,U(this));if(d){d=X(this,d);var e=X(this,a);if(d==e)return}d=O(c,U(this,"menu"));e=d==X(this,a);var f=G(c,U(this,"menu-item")),h=G(c,U(this,"menu-close"));if(!d||e&&(f||h))If(this,a),d&&b&&this.h(a,"button-menu-indicate-selected")&&((a=N(U(this,"content"),a))&&Rc(a,Zc(c)),Nf(this,d,c))};
function Nf(a,b,c){var d=U(a,"menu-item-selected");B(Cc(d,b),function(a){J(a,d)});
I(c.parentNode,d)}
function X(a,b){if(!b.widgetMenu){var c=a.h(b,"button-menu-id");c=c&&M(c);var d=U(a,"menu");c?ic(c,[d,U(a,"menu-external")]):c=N(d,b);b.widgetMenu=c}return b.widgetMenu}
g.isToggled=function(a){return G(a,U(this,"toggled"))};
g.toggle=function(a){if(this.h(a,"button-toggle")){var b=O(a,U(this,"group")),c=U(this,"toggled"),d=G(a,c);if(b&&this.h(b,"button-toggle-group")){var e=this.h(b,"button-toggle-group");B(Cc(U(this),b),function(b){b!=a||"optional"==e&&d?(J(b,c),b.removeAttribute("aria-pressed")):(I(a,c),b.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),mc(a,c)}};
g.click=function(a){if(X(this,a)){var b=X(this,a);if(b){var c=Ff(this,b);c&&c!=a?(If(this,c),Ne(y(this.pa,this,a),1)):Xe(b)?If(this,a):this.pa(a)}a.focus()}this.H(a,"button-action")};
function Df(a){a.a&&If(a,a.a)}
;function Of(a){kf.call(this,a);this.f=null}
A(Of,kf);g=Of.prototype;g.s=function(a){var b=kf.prototype.s.call(this,a);return b?b:a};
g.register=function(){lf(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
g.dispose=function(){Pf(this);Of.u.dispose.call(this)};
g.h=function(a,b){var c=Of.u.h.call(this,a,b);return c?c:(c=Of.u.h.call(this,a,"card-config"))&&(c=v(c))&&c[b]?c[b]:null};
g.show=function(a){var b=this.s(a);if(b){I(b,U(this,"active"));var c=Qf(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Rf(this,a,c);var d=U(this,"card-visible"),e=this.h(a,"card-delegate-show")&&this.h(b,"card-action");this.H(b,"card-action",a);this.f=a;Ze(c);Ne(y(function(){e||(Ye(c),S("yt-uix-card-show",b,a,c));Sf(c);I(c,d);S("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Qf(a,b,c){var d=c||b,e=U(a,"card");c=Tf(a,d);var f=M(U(a,"card")+ue(d));if(f)return a=N(U(a,"card-body"),f),Qc(a,c)||(Mc(c),a.appendChild(c)),f;f=document.createElement("div");f.id=U(a,"card")+ue(d);f.className=e;(d=a.h(d,"card-class"))&&ic(f,d.split(/\s+/));d=document.createElement("div");d.className=U(a,"card-border");b=a.h(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var h=document.createElement("div");
h.className=U(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Mc(c);h.appendChild(c);d.appendChild(a);d.appendChild(h);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Rf(a,b,c){var d=a.h(b,"orientation")||"horizontal",e=N(U(a,"anchor"),b)||b,f=a.h(b,"position"),h=!!a.h(b,"force-position"),m=a.h(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==f;if(n&&l){var r=13;var F=8}else n&&!l?(r=12,F=9):!n&&l?(r=9,F=12):(r=8,F=13);var H=Gd(document.body);f=Gd(b);H!=f&&(r^=4);if(d){f=b.offsetHeight/2-12;var K=new L(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,K=new L(b.offsetWidth+6,-12);var u=Dd(c);f=
Math.min(f,(d?u.height:u.width)-24-6);6>f&&(f=6,d?K.y+=12-b.offsetHeight/2:K.x+=12-b.offsetWidth/2);u=null;h||(u=10);b=U(a,"card-flip");a=U(a,"card-reverse");kc(c,b,n);kc(c,a,l);u=Od(e,r,c,F,K,null,u);!h&&u&&(u&48&&(n=!n,r^=4,F^=4),u&192&&(l=!l,r^=1,F^=1),kc(c,b,n),kc(c,a,l),Od(e,r,c,F,K));m&&(e=parseInt(c.style.top,10),h=Ic(document).y,td(c,"position","fixed"),td(c,"top",e-h+"px"));H&&(c.style.right="",e=Fd(c),e.left=e.left||parseInt(c.style.left,10),h=Gc(window),c.style.left="",c.style.right=h.width-
e.left-e.width+"px");e=N("yt-uix-card-body-arrow",c);h=N("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!H&&n||H&&!n?"left":"right";e.setAttribute("style","");h.setAttribute("style","");e.style[d]=f+"px";h.style[d]=f+"px";l=N("yt-uix-card-arrow",c);n=N("yt-uix-card-arrow-background",c);l&&n&&(c="right"==d?Dd(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")}
g.hide=function(a){if(a=this.s(a)){var b=M(U(this,"card")+ue(a));b&&(J(a,U(this,"active")),J(b,U(this,"card-visible")),Ze(b),this.f=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Mc(b.cardMask),b.cardMask=null))}};
function Pf(a){a.f&&a.hide(a.f)}
g.Ra=function(a,b){var c=this.s(a);if(c){if(b){var d=Tf(this,c);if(!d)return;b instanceof uc?d.innerHTML=wc(b):Rc(d,b)}G(c,U(this,"active"))&&(c=Qf(this,a,c),Rf(this,a,c),Ye(c),Sf(c))}};
g.isActive=function(a){return(a=this.s(a))?G(a,U(this,"active")):!1};
function Tf(a,b){var c=b.cardContentNode;if(!c){var d=U(a,"content"),e=U(a,"card-content");(c=(c=a.h(b,"card-id"))?M(c):N(d,b))||(c=document.createElement("div"));var f=c;J(f,d);I(f,e);b.cardContentNode=c}return c}
function Sf(a){var b=a.cardMask;b||(b=document.createElement("IFRAME"),b.src='javascript:""',ic(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Uf(){kf.call(this,"kbd-nav")}
var Vf;A(Uf,kf);ia(Uf);g=Uf.prototype;g.register=function(){V(this,"keydown",this.Y);lf(this,"yt-uix-kbd-nav-move-in",this.ja);lf(this,"yt-uix-kbd-nav-move-in-to",this.Ma);lf(this,"yt-uix-kbd-move-next",this.ka);lf(this,"yt-uix-kbd-nav-move-to",this.J)};
g.unregister=function(){W(this,"keydown",this.Y);R(Vf)};
g.Y=function(a,b,c){var d=c.keyCode;if(a=O(a,U(this)))switch(d){case 13:case 32:this.ja(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=oc(a,"kbdNavMoveOut");!c;){c=O(a.parentElement,U(this));if(!c)break a;c=oc(c,"kbdNavMoveOut")}c=M(c);this.J(c);S("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&G(a,U(this,"list")))switch(d){case 40:this.ka(b,a);break;case 38:d=document.activeElement==a,a=Wf(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),Xf(this,a[b]))}c.preventDefault()}};
g.ja=function(a){var b=oc(a,"kbdNavMoveIn");b=M(b);Yf(this,a,b);this.J(b)};
g.Ma=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}Yf(this,d,a);this.J(a)};
g.J=function(a){if(a)if(Wc(a))a.focus();else{var b=Sc(a,function(a){return Pc(a)?Wc(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Yf(a,b,c){if(b&&c)if(I(c,U(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,nc&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+Na("kbdNavMoveOut"),b)}}
g.ka=function(a,b){var c=document.activeElement==b,d=Wf(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Xf(this,d[c]))};
function Xf(a,b){if(b){var c=ad(b,"LI");c&&(I(c,U(a,"highlight")),Vf=Q(b,"blur",y(function(a){J(a,U(this,"highlight"));R(Vf)},a,c)))}}
function Wf(a){if("UL"!=a.tagName.toUpperCase())return[];a=ua(Nc(a),function(a){return"LI"==a.tagName.toUpperCase()});
return ua(va(a,function(a){return Xe(a)?Sc(a,function(a){return Pc(a)?Wc(a):!1}):!1}),function(a){return!!a})}
;function Zf(){kf.call(this,"menu");this.b=this.a=null;this.f={};this.j={};this.g=null}
A(Zf,kf);ia(Zf);function $f(a){return(a=ag(a))?bg(Zf.m(),a):null}
function ag(a){var b=Zf.m();if(G(a,U(b)))return a;var c=b.s(a);return c?c:O(a,U(b,"content"))==b.a?b.b:null}
g=Zf.prototype;g.register=function(){V(this,"click",this.W);V(this,"mouseenter",this.Ca);lf(this,"page-scroll",this.Fa);lf(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.s(a);cg(this,a)});
this.g=new P};
g.unregister=function(){W(this,"click",this.W);this.b=this.a=null;R(Ia(Xa(this.f)));this.f={};Va(this.j,function(a){Mc(a)},this);
this.j={};ec(this.g);this.g=null;Zf.u.unregister.call(this)};
g.W=function(a,b,c){a&&(b=dg(this,a),!b.disabled&&we(c.target,b)&&eg(this,a))};
g.Ca=function(a,b,c){a&&G(a,U(this,"hover"))&&we(c.target,dg(this,a))&&eg(this,a,!0)};
g.Fa=function(){this.a&&this.b&&fg(this,this.b,this.a)};
function fg(a,b,c){var d=gg(a,b);if(d){var e=Dd(c);if(e instanceof yc){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Cd(e,!0);d.style.height=Cd(f,!0)}c==a.a&&(e=9,f=8,G(b,U(a,"reversed"))&&(e^=1,f^=1),G(b,U(a,"flipped"))&&(e^=4,f^=4),a=new L(0,1),d&&Od(b,e,d,f,a,null,197),Od(b,e,c,f,a,null,197))}
function eg(a,b,c){hg(a,b)&&!c?cg(a,b):(ig(a,b),!a.a||we(b,a.a)?a.qa(b):Qd(a.g,y(a.qa,a,b)))}
g.qa=function(a){if(a){var b=bg(this,a);if(b){Ve("yt-uix-menu-before-show",a,b);this.a?we(a,this.a)||cg(this,this.b):(this.b=a,this.a=b,G(a,U(this,"sibling-content"))||(Mc(b),document.body.appendChild(b)),b.style.minWidth=dg(this,a).offsetWidth-2+"px");var c=gg(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);J(b,U(this,"content-hidden"));fg(this,a,b);ic(dg(this,a),[U(this,"trigger-selected"),"yt-uix-button-toggled"]);S("yt-uix-menu-show",a);jg(b);kg(this,a);S("yt-uix-kbd-nav-move-in-to",
b);var d=y(this.Ua,this,a),e=y(this.Ia,this,a);c=x(a).toString();this.f[c]=[Q(b,"click",e),Q(document,"click",d)];G(a,U(this,"indicate-selected"))&&(d=y(this.Ja,this,a),this.f[c].push(Q(b,"click",d)));G(a,U(this,"hover"))&&(a=y(this.Da,this,a),this.f[c].push(Q(document,"mousemove",a)))}}};
g.Da=function(a,b){var c=Ke(b);c&&(we(c,dg(this,a))||lg(this,c)||mg(this,a))};
g.Ua=function(a,b){var c=Ke(b);if(c){if(lg(this,c)){var d=O(c,U(this,"content")),e=ad(c,"LI");e&&d&&Qc(d,e)&&Ve("yt-uix-menu-item-clicked",c);c=O(c,U(this,"close-on-select"));if(!c)return;d=ag(c)}cg(this,d||a)}};
function ig(a,b){if(b){var c=O(b,U(a,"content"));c&&B(Cc(U(a),c),function(a){!we(a,b)&&hg(this,a)&&mg(this,a)},a)}}
function cg(a,b){if(b){var c=[];c.push(b);var d=bg(a,b);d&&(d=Cc(U(a),d),d=Aa(d),c=c.concat(d),B(c,function(a){hg(this,a)&&mg(this,a)},a))}}
function mg(a,b){if(b){var c=bg(a,b);jc(dg(a,b),[U(a,"trigger-selected"),"yt-uix-button-toggled"]);I(c,U(a,"content-hidden"));var d=bg(a,b);d&&Ec(d,{"aria-expanded":"false"});(d=gg(a,b))&&d.parentNode&&Mc(d);c&&c==a.a&&(a.b.appendChild(c),a.a=null,a.b=null,a.g&&a.g.B("ROOT_MENU_REMOVED"));S("yt-uix-menu-hide",b);c=x(b).toString();R(a.f[c]);delete a.f[c]}}
g.Ia=function(a,b){var c=Ke(b);c&&ng(this,a,c)};
g.Ja=function(a,b){var c=Ke(b);if(c){var d=dg(this,a);if(d&&(c=ad(c,"LI")))if(c=Zc(c).trim(),d.hasChildNodes()){var e=Cf.m();(d=N(U(e,"content"),d))&&Rc(d,c)}else Rc(d,c)}};
function kg(a,b){var c=bg(a,b);if(c){B(c.children,function(a){"LI"==a.tagName&&Ec(a,{role:"menuitem"})});
Ec(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+x(c),c.id=d);(c=dg(a,b))&&Ec(c,{"aria-controls":d})}}
function ng(a,b,c){var d=bg(a,b);d&&G(b,U(a,"checked"))&&(a=ad(c,"LI"))&&(a=N("yt-ui-menu-item-checked-hid",a))&&(B(Cc("yt-ui-menu-item-checked",d),function(a){lc(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),lc(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function hg(a,b){var c=bg(a,b);return c?!G(c,U(a,"content-hidden")):!1}
function jg(a){B(Dc(document,"UL",null,a),function(a){a.tabIndex=0;var b=Uf.m();ic(a,[U(b),U(b,"list")])})}
function bg(a,b){var c=re(b,"menu-content-id");return c&&(c=M(c))?(ic(c,[U(a,"content"),U(a,"content-external")]),c):b==a.b?a.a:N(U(a,"content"),b)}
function gg(a,b){var c=x(b).toString(),d=a.j[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[U(a,"mask")];B(hc(b),function(a){e.push(a+"-mask")});
ic(d,e);a.j[c]=d}return d||null}
function dg(a,b){return N(U(a,"trigger"),b)}
function lg(a,b){return we(b,a.a)||we(b,a.b)}
;function og(){Of.call(this,"clickcard");this.a={};this.b={}}
A(og,Of);ia(og);g=og.prototype;g.register=function(){og.u.register.call(this);V(this,"click",this.U,"target");V(this,"click",this.T,"close")};
g.unregister=function(){og.u.unregister.call(this);W(this,"click",this.U,"target");W(this,"click",this.T,"close");for(var a in this.a)R(this.a[a]);this.a={};for(a in this.b)R(this.b[a]);this.b={}};
g.U=function(a,b,c){c.preventDefault();b=ad(c.target,"button");if(!b||!b.disabled){if(b=this.h(a,"card-target"))a=document,a=t(b)?a.getElementById(b):b;b=this.s(a);this.h(b,"disabled")||(G(b,U(this,"active"))?(this.hide(a),J(b,U(this,"active"))):(this.show(a),I(b,U(this,"active"))))}};
g.show=function(a){og.u.show.call(this,a);var b=this.s(a),c=x(a).toString();if(!re(b,"click-outside-persists")){if(this.a[c])return;b=Q(document,"click",y(this.V,this,a));var d=Q(window,"blur",y(this.V,this,a));this.a[c]=[b,d]}a=Q(window,"resize",y(this.Ra,this,a,void 0));this.b[c]=a};
g.hide=function(a){og.u.hide.call(this,a);a=x(a).toString();var b=this.a[a];b&&(R(b),this.a[a]=null);if(b=this.b[a])R(b),delete this.b[a]};
g.V=function(a,b){var c="yt-uix"+(this.i?"-"+this.i:"")+"-card",d=null;b.target&&(d=O(b.target,c)||O(ag(b.target),c));(d=d||O(document.activeElement,c)||O(ag(document.activeElement),c))||this.hide(a)};
g.T=function(a){(a=O(a,U(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function pg(){Of.call(this,"hovercard")}
A(pg,Of);ia(pg);g=pg.prototype;g.register=function(){V(this,"mouseenter",this.fa,"target");V(this,"mouseleave",this.ha,"target");V(this,"mouseenter",this.ga,"card");V(this,"mouseleave",this.ia,"card")};
g.unregister=function(){W(this,"mouseenter",this.fa,"target");W(this,"mouseleave",this.ha,"target");W(this,"mouseenter",this.ga,"card");W(this,"mouseleave",this.ia,"card")};
g.fa=function(a){if(qg!=a){qg&&(this.hide(qg),qg=null);var b=y(this.show,this,a),c=parseInt(this.h(a,"delay-show"),10);b=Ne(b,-1<c?c:200);pe(a,"card-timer",b.toString());qg=a;a.alt&&(pe(a,"card-alt",a.alt),a.alt="");a.title&&(pe(a,"card-title",a.title),a.title="")}};
g.ha=function(a){var b=parseInt(this.h(a,"card-timer"),10);window.clearTimeout(b);this.s(a).isCardHidable=!0;b=parseInt(this.h(a,"delay-hide"),10);b=-1<b?b:200;Ne(y(this.Ga,this,a),b);if(b=this.h(a,"card-alt"))a.alt=b;if(b=this.h(a,"card-title"))a.title=b};
g.Ga=function(a){this.s(a).isCardHidable&&(this.hide(a),qg=null)};
g.ga=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
g.ia=function(a){a&&this.hide(a.cardTargetNode)};
var qg=null;function rg(a,b,c,d,e,f){this.a=a;this.l=null;this.f=N("yt-dialog-fg",this.a)||this.a;if(a=N("yt-dialog-title",this.f)){var h="yt-dialog-title-"+x(this.f);a.setAttribute("id",h);this.f.setAttribute("aria-labelledby",h)}this.f.setAttribute("tabindex","-1");this.ma=N("yt-dialog-focus-trap",this.a);this.na=!1;this.g=new P;this.w=[];this.w.push(Le(this.a,y(this.Oa,this)));this.w.push(Q(this.ma,"focus",y(this.wa,this),!0));sg(this);this.Ta=b;this.sa=c;this.ra=d;this.D=e;this.ta=f;this.j=this.i=null}
var tg={LOADING:"loading",Va:"content",Wa:"working"};function ug(a,b){a.K()||a.g.subscribe("pre-all",b)}
function sg(a){a=N("yt-dialog-fg-content",a.a);var b=[];Va(tg,function(a){b.push("yt-dialog-show-"+a)});
jc(a,b);I(a,"yt-dialog-show-content")}
g=rg.prototype;
g.show=function(){if(!this.K()){this.l=document.activeElement;if(!this.ra){this.b||(this.b=M("yt-dialog-bg"),this.b||(this.b=document.createElement("div"),this.b.id="yt-dialog-bg",this.b.className="yt-dialog-bg",document.body.appendChild(this.b)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=Gc(a).height,Hc(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.b.style.height=c+"px";Ye(this.b)}this.ca();c=vg(this);wg(c);this.i=Q(document,"keydown",y(this.Ha,this));c=this.a;d=Se("player-added",this.ca,this);pe(c,"player-ready-pubsub-key",d);this.sa&&(this.j=Q(document,"click",y(this.Qa,this)));Ye(this.a);this.f.setAttribute("tabindex","0");xg(this);this.D||I(document.body,"yt-dialog-active");Df(Cf.m());Pf(og.m());Pf(pg.m());S("yt-ui-dialog-show-complete",this)}};
function yg(){return wa(Cc("yt-dialog"),function(a){return Xe(a)})}
g.ca=function(){if(!this.ta){var a=this.a;kc(document.body,"hide-players",!0);a&&kc(a,"preserve-players",!0)}};
function vg(a){var b=Dc(document,"iframe",null,a.a);B(b,function(a){var b=re(a,"onload");b&&(b=v(b))&&Q(a,"load",b);if(b=re(a,"src"))a.src=b},a);
return Aa(b)}
function wg(a){B(document.getElementsByTagName("iframe"),function(b){-1==ta(a,b)&&I(b,"iframe-hid")})}
function zg(){B(Cc("iframe-hid"),function(a){J(a,"iframe-hid")})}
g.Oa=function(a){a=a.currentTarget;a.disabled||(a=re(a,"action")||"",this.dismiss(a))};
g.dismiss=function(a){if(!this.K()){this.g.B("pre-all");this.g.B("pre-"+a);Ze(this.a);Pf(og.m());Pf(pg.m());this.f.setAttribute("tabindex","-1");yg()||(Ze(this.b),this.D||J(document.body,"yt-dialog-active"),ye(),zg());this.i&&(R(this.i),this.i=null);this.j&&(R(this.j),this.j=null);var b=this.a;if(b){var c=re(b,"player-ready-pubsub-key");c&&(Ue(c),b&&(b.dataset?delete b.dataset[qe("player-ready-pubsub-key")]:b.removeAttribute("data-player-ready-pubsub-key")))}this.g.B("post-all");S("yt-ui-dialog-hide-complete",
this);"cancel"==a&&S("yt-ui-dialog-cancelled",this);this.g&&this.g.B("post-"+a);this.l&&this.l.focus()}};
g.setTitle=function(a){Rc(N("yt-dialog-title",this.a),a)};
g.Ha=function(a){Ne(y(function(){this.Ta||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&G(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
g.Qa=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
g.K=function(){return this.na};
g.dispose=function(){Xe(this.a)&&this.dismiss("dispose");R(this.w);this.w.length=0;Ne(y(function(){this.l=null},this),0);
this.ma=this.f=null;this.g.dispose();this.g=null;this.na=!0};
g.wa=function(a){a.stopPropagation();xg(this)};
function xg(a){Ne(y(function(){this.f&&this.f.focus()},a),0)}
z("yt.ui.Dialog",rg);function Ag(a,b,c,d,e,f){this.b=a;this.f=b;this.j=c;this.g=d;this.l=e;this.i=f;this.a=null}
Ag.$inject="$compile $controller $http $q $rootScope $templateCache".split(" ");function Bg(a,b,c){this.i=a;this.b=b;this.g=c;this.a=null;this.f=!1}
Bg.prototype.show=function(){Dc(document,"body",void 0,void 0)[0].appendChild(this.b);this.a=new rg(this.b,!1);ug(this.a,y(function(){this.f||(this.a=null,this.dismiss("dialogclosed"))},this));
this.a.show()};
function Cg(a){a.f||(a.f=!0,a.a&&(a.a.dispose(),a.a=null),a.g&&(a.g.$destroy(),a.g=null),a.b&&(Mc(a.b),a.b=null))}
Bg.prototype.close=function(a){Cg(this);this.i.resolve(a)};
Bg.prototype.dismiss=function(a){Cg(this);this.i.reject(a)};
function Dg(a,b){return a.j.get(b,{cache:a.i}).then(function(a){return a.data})}
Ag.prototype.create=function(a,b,c){var d=this.g.defer(),e={result:d.promise,close:y(d.resolve,d),dismiss:y(d.reject,d)};Dg(this,a).then(y(function(a){this.a&&(this.a.dismiss("overridden"),this.a=null);var f=this.l.$new();c&&bb(f,c);this.f(b,{$scope:f,dialogInstance:e});a=angular.element(a);a=this.b(a)(f)[0];f=new Bg(d,a,f);e.close=y(f.close,f);e.dismiss=y(f.dismiss,f);f.show();this.a=f},this),function(a){d.reject(a)});
return e};function Eg(a){dc.call(this);a=y(a.$apply,a,y(a.$destroy,a));this.g?q(void 0)?a.call(void 0):a():(this.f||(this.f=[]),this.f.push(q(void 0)?y(a,void 0):a))}
A(Eg,dc);Eg.$inject=["$rootScope"];function Fg(){return{request:function(a){a.data=a.data||{};a.params&&bb(a.data,a.params);var b=Be("XSRF_FIELD_NAME");a.data[b]||(a.data[b]=Be("XSRF_TOKEN"));return a}}}
;function Gg(a){if(window.angular)return a()}
function Hg(a){a.interceptors.push(Fg)}
Hg.$inject=["$httpProvider"];Gg(function(){return angular.module("util",[]).config(Hg).service("DisposeService",Eg)});function Ig(){kf.call(this,"languagepicker");this.a={}}
A(Ig,kf);ia(Ig);g=Ig.prototype;g.register=function(){V(this,"click",this.Z,"menu-item");V(this,"keyup",this.la,"search-input");V(this,"keydown",this.ba,"search-input");V(this,"blur",this.aa,"search-input");V(this,"focus",this.X);lf(this,"yt-uix-button-menu-before-show",this.Ba);lf(this,"yt-uix-button-menu-hide",this.Aa)};
g.unregister=function(){W(this,"click",this.Z,"menu-item");W(this,"keyup",this.la,"search-input");W(this,"keydown",this.ba,"search-input");W(this,"blur",this.aa,"search-input");W(this,"focus",this.X);R(Xa(this.a));this.a={};Ig.u.unregister.call(this)};
g.Ba=function(a){if(G(a,"yt-languagepicker-button")){var b=x(a);a=Q(a,"keydown",y(this.za,this));this.a[b]=a}};
g.Aa=function(a){G(a,"yt-languagepicker-button")&&(a=x(a),R(this.a[a]),delete this.a[a])};
function Jg(a,b){return xa(b,function(b){return!xa(a,function(a){return 0!=a.lastIndexOf(b,0)})})}
function Kg(a,b,c){B(a,function(a){var d=oc(a,"value"),f=Lg(a);We(a,d!=c&&f&&Jg(f,b))})}
function Lg(a){if("undefined"===typeof a.a){var b=oc(a,"searchTerms");b?(a.a=[],B(b.split(";"),function(b){Ba(a.a,Mg(b))})):a.a=Mg(Zc(a))}return a.a}
function Mg(a){return a.toLowerCase().match(/[^ \(\)\[\]]+/g)||[]}
function Ng(a,b){var c=Cf.m(),d=Ff(c,a);Hf(c,a);Jf(c,d,b)}
g.la=function(a){var b=this.s(a),c=N(U(this,"search-result"),b),d=Mg(a.value);if(d){var e=Nc(c);a=oc(b,"fallbackOption");Kg(e,d,a);d=ya(e,Xe);a=c.querySelector('li[data-value="'+a+'"]');We(c,!(!d&&!a));d?Ng(b,d):a&&(Ye(a),Ng(b,a))}else We(c,!1)};
g.ba=function(a,b,c){b=Cf.m();a=this.s(a);var d=Ff(b,a);switch(c.keyCode){case 13:case 9:(b=Hf(b,a))&&Me(q(b.firstElementChild)?b.firstElementChild:Oc(b.firstChild),"click");c.preventDefault();break;case 27:Hf(b,a);If(b,d);c.preventDefault();break;case 38:case 40:d.focus(),c.preventDefault()}};
g.Z=function(a){var b=oc(a,"value"),c=this.s(a),d=oc(c,"languagepickerInputId");d=M(d);d.value=b;Me(d,"change");(d=N(U(this,"suggestions"),c))&&!d.querySelector('li[data-value="'+b+'"]')&&((b=N(U(this,"selected"),c))&&Mc(b),a=a.cloneNode(!0),I(a,U(this,"selected")),d.insertBefore(a,d.childNodes[0]||null))};
function Og(a,b){var c=Cf.m(),d=a.s(b);Ff(c,d).focus()}
g.aa=function(a){Og(this,a)};
g.X=function(a,b,c){"INPUT"!=c.target.tagName&&Og(this,a)};
g.za=function(a){if(38!=a.keyCode&&40!=a.keyCode){var b=a.target,c=Cf.m();b=X(c,b);b=N(U(this,"search-input"),b);13!=a.keyCode&&9!=a.keyCode&&32!=a.keyCode&&(b.value="");b.focus()}};var Pg=Ig.m(),Qg=Cf.m();function Rg(){return{require:"ngModel",link:function(a,b,c,d){d.$render=function(){d.$viewValue&&a.$evalAsync(qa(Sg,a,b,d.$viewValue))};
a.select=function(a){d.$setViewValue(a.code)};
a.menuId=x(b[0])},
scope:{suggestedValues:"=",allowedValues:"="},templateUrl:"language_picker.html"}}
function Sg(a,b,c){a=N(U(Qg,"content"),b[0]);var d=N(U(Qg,"menu-item"),N(U(Pg,"menu-item-"+c),b[0]));N(U(Pg,"hidden-input"),b[0]).value=c;d=Zc(d);Rc(a,d);a=N(U(Pg,"suggestions"),b[0]);b=U(Qg,"menu-item-selected");(d=N(b,a))&&J(d,b);(c=N(U(Pg,"menu-item-"+c),a))&&I(c,b)}
var Tg=Gg(function(){var a=angular.module("yt.www.creator.angular.directives.languagePicker",[]);a.directive("languagePicker",Rg);return a});function Ug(a,b){this.a=b;this.translationLanguage=a.translationLanguage;this.originalLanguage=a.originalLanguage;this.languagePickerSuggestions=a.languagePickerSuggestions||[];this.languagePickerAllowedValues=a.languagePickerAllowedValues||[];a.dialogCtrl=this}
z("yt.www.translationeditor.angular.AddTranslationDialogCtrl",Ug);Ug.$inject=["$scope","dialogInstance"];Ug.prototype.cancel=function(){this.a.dismiss("cancel")};
Ug.prototype.save=function(){this.a.close({translationLanguage:this.translationLanguage})};
Ug.prototype.cancel=Ug.prototype.cancel;Ug.prototype.save=Ug.prototype.save;function Vg(a,b){this.a=b;this.originalLanguage=a.originalLanguage;this.showDefaultLanguageForNewUploadsCheckbox=a.showDefaultLanguageForNewUploadsCheckbox;this.defaultForNewUploads=!1;this.translationLanguage=null;this.languagePickerSuggestions=a.languagePickerSuggestions||[];this.languagePickerAllowedValues=a.languagePickerAllowedValues||[];a.dialogCtrl=this}
z("yt.www.translationeditor.angular.SetOriginalLanguageAndAddTranslationDialogCtrl",Vg);Vg.$inject=["$scope","dialogInstance"];Vg.prototype.b=function(){return null!=this.originalLanguage&&null!=this.translationLanguage&&this.originalLanguage!=this.translationLanguage};
Vg.prototype.cancel=function(){this.a.dismiss("cancel")};
Vg.prototype.save=function(){this.a.close({originalLanguage:this.originalLanguage,translationLanguage:this.translationLanguage,defaultForNewUploads:this.defaultForNewUploads})};
Vg.prototype.canSave=Vg.prototype.b;Vg.prototype.cancel=Vg.prototype.cancel;Vg.prototype.save=Vg.prototype.save;function Wg(a,b){this.a=b;this.originalLanguage=a.originalLanguage;this.showDefaultLanguageForNewUploadsCheckbox=a.showDefaultLanguageForNewUploadsCheckbox;this.defaultForNewUploads=!1;this.languagePickerSuggestions=a.languagePickerSuggestions||[];this.languagePickerAllowedValues=a.languagePickerAllowedValues||[];this.b=a.existingTranslationLanguages||{};a.dialogCtrl=this}
z("yt.www.translationeditor.angular.SetOriginalLanguageDialogCtrl",Wg);Wg.$inject=["$scope","dialogInstance"];Wg.prototype.f=function(){return this.originalLanguage in this.b};
Wg.prototype.cancel=function(){this.a.dismiss("cancel")};
Wg.prototype.save=function(){this.a.close({originalLanguage:this.originalLanguage,defaultForNewUploads:this.defaultForNewUploads})};
Wg.prototype.languageCollidesWithTranslation=Wg.prototype.f;Wg.prototype.cancel=Wg.prototype.cancel;Wg.prototype.save=Wg.prototype.save;function Xg(a){this.a=a}
Xg.$inject=["$http"];function Yg(a,b){var c={action_set_metadata_language:"1",ch:Be("userExternalId"),metadata_language:b};c.o=Be("CREATOR_CONTEXT","U");a.a.post("../../upload_defaults_ajax",c)}
;function Y(a,b,c,d,e){this.w=b;this.f=c;this.i=d;this.l=e;this.original=this.creatorTranslationSource=null;this.translations={};this.language=null;this.translatedLanguageList=[];this.errors=null;this.b=[];this.a=[];this.L={};this.j=new le;if(d.a)throw Error("You can only have one TranslationEditorCtrl per app!");d.a=this;b.$on("$destroy",function(){d.a=null});
b.$watch("transEditor.translations",y(function(a,b){null!=this.language&&this.j.add(this.language);!b||angular.equals(b,{})||angular.equals(a,b)||(Zg(this),$g(this.i))},this),!0);
b.$watch("transEditor.original.language",y(function(a,b){b&&!angular.equals(a,b)&&$g(this.i)},this),!0)}
z("yt.www.translationeditor.angular.TranslationEditorCtrl",Y);Y.$inject=["$controller","$scope","DialogService","TranslationEditorService","UploadDefaultsAjaxService"];g=Y.prototype;g.ya=function(){return this.original&&this.original.language?this.g(this.original.language):""};
g.Pa=function(){var a={},b;for(b in this.translations)a[b]=!0;this.f.create("set_original_language_dialog.html","SetOriginalLanguageDialogCtrl",{showDefaultLanguageForNewUploadsCheckbox:this.w.showDefaultLanguageForNewUploadsCheckbox,originalLanguage:this.original.language,languagePickerSuggestions:this.b,languagePickerAllowedValues:this.a,existingTranslationLanguages:a}).result.then(y(function(a){a.originalLanguage in this.translations&&(delete this.translations[a.originalLanguage],this.language==
a.originalLanguage&&(this.language=null));this.original.language=a.originalLanguage;S("translation-editor-original-language-selected",a.originalLanguage);a.defaultForNewUploads&&Yg(this.l,a.originalLanguage)},this))};
g.Na=function(){if(this.original.language){var a=this.f.create("add_translation_dialog.html","AddTranslationDialogCtrl",{originalLanguage:this.original.language,languagePickerSuggestions:this.b,languagePickerAllowedValues:this.a});a.result.then(y(function(a){ah(this,a.translationLanguage)},this))}else a=this.f.create("set_original_and_add_translation_dialog.html","SetOriginalLanguageAndAddTranslationDialogCtrl",{showDefaultLanguageForNewUploadsCheckbox:this.w.showDefaultLanguageForNewUploadsCheckbox,
originalLanguage:this.original.language,languagePickerSuggestions:this.b,languagePickerAllowedValues:this.a}),a.result.then(y(function(a){this.original.language=a.originalLanguage;S("translation-editor-original-language-selected",a.originalLanguage);ah(this,a.translationLanguage);a.defaultForNewUploads&&Yg(this.l,a.originalLanguage)},this))};
function ah(a,b){b in a.translations||(a.translations[b]={language:"",title:null,description:""},null!=a.creatorTranslationSource&&(a.translations[b].source=a.creatorTranslationSource),Zg(a),$g(a.i));a.language=b}
g.va=function(){this.language&&(delete this.translations[this.language],S("translation-editor-translated-language-deleted",this.language),this.language=null)};
g.xa=function(){if(null==this.errors||angular.equals(this.errors,{}))return"";var a=va(Ya(this.errors),y(this.g,this));Ea(a);return a.join(", ")};
Y.prototype.getLanguagesWithErrorsAsString=Y.prototype.xa;function Zg(a){a.translatedLanguageList=[];for(var b in a.translations)a.translatedLanguageList.push({code:b,name:a.g(b)});Ha(a.translatedLanguageList)}
Y.prototype.g=function(a){return a&&a in this.L?this.L[a]:""};
function bh(a,b){b.creator_translation_source&&(a.creatorTranslationSource=b.creator_translation_source);b.original?a.original=b.original:a.original={language:"",title:null,description:null};a.translations={};angular.forEach(b.translation,function(a){this.translations[a.language]=a},a);
a.a=b.allowed_language;a.b=b.suggested_language;a.L={};angular.forEach(b.allowed_language,function(a){this.L[a.code]=a.name},a);
Zg(a)}
Y.prototype.D=function(){return this.language&&this.translations&&this.creatorTranslationSource&&this.translations[this.language].source!=this.creatorTranslationSource&&this.j.contains(this.language)?!0:!1};
Y.prototype.getOriginalLanguageName=Y.prototype.ya;Y.prototype.onClickOriginalLanguage=Y.prototype.Pa;Y.prototype.onClickAddTranslation=Y.prototype.Na;Y.prototype.deleteTranslation=Y.prototype.va;Y.prototype.getSourceWarningVisibility=Y.prototype.D;function ch(){return{controller:Y,templateUrl:"translation_editor.html",controllerAs:"transEditor",require:"?ngModel",transclude:!0,scope:{initFromBase64Json:"@",initFromYtConfig:"@",showDefaultLanguageForNewUploadsCheckbox:"@"},link:function(a,b,c,d,e){var f=a.transEditor;a.$watch("transEditor.language",function(){S("translation-editor-translated-language-selected",f.language)});
a.initFromYtConfig?(c=Be(a.initFromYtConfig),bh(f,c)):a.initFromBase64Json&&(c=angular.fromJson(sb(ac(a.initFromBase64Json))),bh(f,c));d&&a.$watch("[transEditor.original.language, transEditor.translations]",function(){var a=angular.copy({metadata_language:f.original.language,translations:f.translations});angular.forEach(a.translations,function(a){delete a.source});
d.$setViewValue(a)},!0);
e(a,function(a){b.append(a)})}}}
;function Z(a,b){this.l=a;this.j=b;this.b=this.a=null}
Z.$inject=["$rootScope","$timeout"];Z.prototype.w=function(){return this.a?{original:this.a.original,translations:this.a.translations}:null};
Z.prototype.f=function(){return this.a?this.a.language:null};
Z.prototype.g=function(a){this.a&&this.l.$apply(y(function(){this.a.errors=a},this))};
Z.prototype.i=function(a){this.b=a};
function $g(a){a.b&&a.j(y(a.b,a),0,!1)}
;function dh(a){return{templateUrl:"translation_menu.html",scope:{defaultText:"@",languageList:"=",errors:"=",onAddTranslation:"&"},require:"ngModel",link:function(b,c,d,e){function f(){m();a(h)}
function h(){var a=n.querySelector('li[data-value="'+e.$viewValue+'"]');l&&a&&ng(Zf.m(),l,a)}
function m(){e.$viewValue?(b.selectedText="Invalid value: "+e.$viewValue,b.languageList&&angular.forEach(b.languageList,function(a){a.code==e.$viewValue&&(b.selectedText=a.name)})):b.selectedText=d.defaultText}
var l=ag(N("translation-editor-translation-menu-button",c[0])),n=$f(l);b.$watch("languageList",f);e.$render=f;var r=[];r.push(Se("yt-uix-menu-item-clicked",function(a){if((a=ad(a,"LI"))&&Qc(n,a)&&pc(a)){var c=oc(a,"value");b.$apply(function(){e.$setViewValue(c);m()})}},this));
c.on("$destroy",function(){Ue(r)})}}}
dh.$inject=["$timeout"];var eh=Gg(function(){var a=angular.module("yt.www.translationeditor.angular.translationeditor",[Tg.name]);a.directive("translationEditor",ch);a.directive("translationMenu",dh);a.controller("TranslationEditorCtrl",Y);a.controller("SetOriginalLanguageDialogCtrl",Wg);a.controller("AddTranslationDialogCtrl",Ug);a.controller("SetOriginalLanguageAndAddTranslationDialogCtrl",Vg);a.service("TranslationEditorService",Z);a.service("UploadDefaultsAjaxService",Xg);a.service("DialogService",Ag);return a});z("yt.www.translationeditor.angular.bootstrap",function(a){var b=[eh.name],c=angular.element(a).injector();c||(c=angular.bootstrap(a,b));return c.get("TranslationEditorService")});
z("yt.www.translationeditor.angular.TranslationEditorService",Z);Z.prototype.getSelectedLanguage=Z.prototype.f;Z.prototype.setOnChangeCallback=Z.prototype.i;Z.prototype.setErrors=Z.prototype.g;Z.prototype.getData=Z.prototype.w;}).call(this);

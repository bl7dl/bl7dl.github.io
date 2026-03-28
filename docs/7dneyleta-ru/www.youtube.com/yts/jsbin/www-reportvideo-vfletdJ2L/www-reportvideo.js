(function(){var h,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={Da:!0},ea={};try{ea.__proto__=da;ca=ea.Da;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var k=this;function ha(a){return void 0!==a}
function q(a){return"string"==typeof a}
var ia=/^[\w+/_-]+[=]{0,2}$/,ja=null;function t(a){a=a.split(".");for(var b=k,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ka(){}
function la(a){a.U=void 0;a.j=function(){return a.U?a.U:a.U=new a}}
function ma(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function na(a){var b=ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function oa(a){return"function"==ma(a)}
function pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function qa(a){return a[ra]||(a[ra]=++sa)}
var ra="closure_uid_"+(1E9*Math.random()>>>0),sa=0;function ta(a,b,c){return a.call.apply(a.bind,arguments)}
function ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function u(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u=ta:u=ua;return u.apply(null,arguments)}
function va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var wa=Date.now||function(){return+new Date};
function v(a,b){var c=a.split("."),d=k;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&ha(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function w(a,b){function c(){}
c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.cb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var xa;var ya=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(q(a))return q(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},za=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=q(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var m=f[g];
b.call(void 0,m,g,a)&&(d[e++]=m)}return d},Aa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=q(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ba=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function Ca(a,b){a:{var c=a.length;for(var d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:q(a)?a.charAt(c):a[c]}
function Da(a,b){return 0<=ya(a,b)}
function Ea(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Fa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Ga(a,b,c,d){Array.prototype.splice.apply(a,Ha(arguments,1))}
function Ha(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Ia(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if("array"==ma(d))for(var e=0;e<d.length;e+=8192)for(var f=Ia.apply(null,Ha(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;var Ja=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ka(a){return-1!=a.indexOf("&")?"document"in k?La(a):Ma(a):a}
function La(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var c=k.document.createElement("div");return a.replace(Na,function(a,e){var d=b[a];if(d)return d;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(d=String.fromCharCode(g))}d||(c.innerHTML=a+" ",d=c.firstChild.nodeValue.slice(0,-1));return b[a]=d})}
function Ma(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var b=Number("0"+c.substr(1));if(!isNaN(b))return String.fromCharCode(b)}return a}})}
var Na=/&([^;\s<&]+);?/g;function Oa(a,b){for(var c=0,d=Ja(String(a)).split("."),e=Ja(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var m=d[g]||"",l=e[g]||"";do{m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==m[0].length&&0==l[0].length)break;c=Pa(0==m[1].length?0:parseInt(m[1],10),0==l[1].length?0:parseInt(l[1],10))||Pa(0==m[2].length,0==l[2].length)||Pa(m[2],l[2]);m=m[3];l=l[3]}while(0==c)}return c}
function Pa(a,b){return a<b?-1:a>b?1:0}
function Qa(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Ra(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function Sa(a){var b=q(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var Ta;a:{var Ua=k.navigator;if(Ua){var Va=Ua.userAgent;if(Va){Ta=Va;break a}}Ta=""}function y(a){return-1!=Ta.indexOf(a)}
;function Wa(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Xa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Ya(a){var b=Za,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
var $a="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ab(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<$a.length;f++)c=$a[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function bb(){return y("Safari")&&!(cb()||y("Coast")||y("Opera")||y("Edge")||y("Silk")||y("Android"))}
function cb(){return(y("Chrome")||y("CriOS"))&&!y("Edge")}
function db(){return y("Android")&&!(cb()||y("Firefox")||y("Opera")||y("Silk"))}
;function eb(){return y("iPhone")&&!y("iPod")&&!y("iPad")}
function fb(){return eb()||y("iPad")||y("iPod")}
;function gb(a){gb[" "](a);return a}
gb[" "]=ka;function hb(a,b){var c=ib;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var jb=y("Opera"),z=y("Trident")||y("MSIE"),kb=y("Edge"),lb=kb||z,mb=y("Gecko")&&!(-1!=Ta.toLowerCase().indexOf("webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),nb=-1!=Ta.toLowerCase().indexOf("webkit")&&!y("Edge"),ob=y("Macintosh"),pb=y("Windows"),qb=y("Android"),rb=eb(),sb=y("iPad"),tb=y("iPod"),ub=fb();function vb(){var a=k.document;return a?a.documentMode:void 0}
var wb;a:{var xb="",yb=function(){var a=Ta;if(mb)return/rv:([^\);]+)(\)|;)/.exec(a);if(kb)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(nb)return/WebKit\/(\S+)/.exec(a);if(jb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
yb&&(xb=yb?yb[1]:"");if(z){var zb=vb();if(null!=zb&&zb>parseFloat(xb)){wb=String(zb);break a}}wb=xb}var Ab=wb,ib={};function Bb(a){return hb(a,function(){return 0<=Oa(Ab,a)})}
var Cb;var Db=k.document;Cb=Db&&z?vb()||("CSS1Compat"==Db.compatMode?parseInt(Ab,10):5):void 0;var Eb=!mb&&!z||z&&9<=Number(Cb)||mb&&Bb("1.9.1"),Fb=z&&!Bb("9");var Gb=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),Hb=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");function Ib(){this.a="";this.b=Jb}
Ib.prototype.P=!0;Ib.prototype.O=function(){return this.a};
var Jb={};function Kb(){this.a="";this.b=Lb}
Kb.prototype.P=!0;Kb.prototype.O=function(){return this.a};
function Mb(a){return a instanceof Kb&&a.constructor===Kb&&a.b===Lb?a.a:"type_error:SafeUrl"}
var Nb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Ob(a){if(a instanceof Kb)return a;a=a.P?a.O():String(a);Nb.test(a)||(a="about:invalid#zClosurez");return Pb(a)}
var Lb={};function Pb(a){var b=new Kb;b.a=a;return b}
Pb("about:blank");function Qb(){this.a="";this.b=Rb}
Qb.prototype.P=!0;Qb.prototype.O=function(){return this.a};
function Sb(a){return a instanceof Qb&&a.constructor===Qb&&a.b===Rb?a.a:"type_error:SafeHtml"}
var Rb={};function Tb(a){var b=new Qb;b.a=a;return b}
Tb("<!DOCTYPE html>");Tb("");Tb("<br>");function Ub(a){Vb();var b=new Ib;b.a="../https@www.google.com/recaptcha/api.js";a.src=b instanceof Ib&&b.constructor===Ib&&b.b===Jb?b.a:"type_error:TrustedResourceUrl";if(null===ja){a:{if((b=k.document.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&ia.test(b))break a;b=null}ja=b||""}if(b=ja)a.nonce=b}
;function A(a,b){this.x=ha(a)?a:0;this.y=ha(b)?b:0}
A.prototype.equals=function(a){return a instanceof A&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Wb(a,b){return new A(a.x-b.x,a.y-b.y)}
A.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
A.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
A.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Xb(a,b){this.width=a;this.height=b}
h=Xb.prototype;h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!(this.width*this.height)};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Yb(a){return a?new Zb($b(a)):xa||(xa=new Zb)}
function C(a){return q(a)?document.getElementById(a):a}
function D(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):ac(document,"*",a,b)}
function G(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):ac(c,"*",a,b)[0]||null}return c||null}
function ac(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&Da(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function bc(a,b){Wa(b,function(b,d){b&&b.P&&(b=b.O());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:cc.hasOwnProperty(d)?a.setAttribute(cc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var cc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function dc(a){a=a.document;a=ec(a)?a.documentElement:a.body;return new Xb(a.clientWidth,a.clientHeight)}
function fc(a){var b=gc(a);a=ic(a);return z&&Bb("10")&&a.pageYOffset!=b.scrollTop?new A(b.scrollLeft,b.scrollTop):new A(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function gc(a){return a.scrollingElement?a.scrollingElement:!nb&&ec(a)?a.documentElement:a.body||a.documentElement}
function ic(a){return a.parentWindow||a.defaultView}
function ec(a){return"CSS1Compat"==a.compatMode}
function jc(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function kc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function lc(a){return Eb&&void 0!=a.children?a.children:za(a.childNodes,function(a){return 1==a.nodeType})}
function mc(a){return pa(a)&&1==a.nodeType}
function nc(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function $b(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function H(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else jc(a),a.appendChild($b(a).createTextNode(String(b)))}
function oc(a,b){var c=[];return pc(a,b,c,!0)?c[0]:void 0}
function pc(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||pc(a,b,c,d))return!0;a=a.nextSibling}return!1}
var qc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},rc={IMG:" ",BR:"\n"};function sc(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!tc(a)||uc(a)):tc(a)&&uc(a))&&z){var c;!oa(a.getBoundingClientRect)||z&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function tc(a){return z&&!Bb("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function uc(a){a=a.tabIndex;return"number"==typeof a&&0<=a&&32768>a}
function vc(a){if(Fb&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];wc(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Fb||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function wc(a,b,c){if(!(a.nodeName in qc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in rc)b.push(rc[a.nodeName]);else for(a=a.firstChild;a;)wc(a,b,c),a=a.nextSibling}
function xc(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return yc(a,function(a){return(!e||a.nodeName==e)&&(!c||q(a.className)&&Da(a.className.split(/\s+/),c))},d)}
function J(a,b){return xc(a,null,b,void 0)}
function yc(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function Zb(a){this.a=a||k.document||document}
Zb.prototype.getElementsByTagName=function(a,b){return(b||this.a).getElementsByTagName(String(a))};
Zb.prototype.createElement=function(a){return this.a.createElement(String(a))};
Zb.prototype.appendChild=function(a,b){a.appendChild(b)};
Zb.prototype.isElement=mc;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var zc=window,Ac=document,Bc=zc.location;function Cc(){}
var Dc=/\[native code\]/;function K(a,b,c){return a[b]=a[b]||c}
function Ec(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Fc(){var a;if((a=Object.create)&&Dc.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Gc=K(zc,"gapi",{});var L;L=K(zc,"___jsl",Fc());K(L,"I",0);K(L,"hel",10);function Hc(){var a=Bc.href;if(L.dpo)var b=L.h;else{b=L.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Ic(a){var b=K(L,"PQ",[]);L.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Jc(a){return K(K(L,"H",Fc()),a,Fc())}
;function Kc(){this.a=("undefined"==typeof document?null:document)||{cookie:""}}
h=Kc.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');ha(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(wa()+1E3*c)).toUTCString();this.a.cookie=a+"="+b+e+d+c+f};
h.get=function(a,b){for(var c=a+"=",d=(this.a.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ja(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=ha(this.get(a));this.set(a,"",0,b,c);return d};
h.isEmpty=function(){return!this.a.cookie};
h.clear=function(){for(var a=(this.a.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ja(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Lc=new Kc;Lc.b=3950;var Mc=K(L,"perf",Fc());K(Mc,"g",Fc());var Nc=K(Mc,"i",Fc());K(Mc,"r",[]);Fc();Fc();function Oc(a,b,c){b&&0<b.length&&(b=Pc(b),c&&0<c.length&&(b+="___"+Pc(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=K(Nc,"_p",Fc()),K(b,c,Fc())[a]=(new Date).getTime(),b=Mc.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Pc(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var Qc=Fc(),Rc=[];function Sc(a){throw Error("Bad hint"+(a?": "+a:""));}
Rc.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?L[b]=K(L,b,[]).concat(c):K(L,b,c)}if(b=a.u)a=K(L,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Tc=/^(\/[a-zA-Z0-9_\-]+)+$/,Uc=[/\/amp\//,/\/amp$/,/^\/amp$/],Vc=/^[a-zA-Z0-9\-_\.,!]+$/,Wc=/^gapi\.loaded_[0-9]+$/,Xc=/^[a-zA-Z0-9,._-]+$/;function Yc(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Qc[f],m=null;g?m=g(e,b,c,d):Sc("no hint processor for: "+f);m||Sc("failed to generate load url");b=m;c=b.match(Zc);(d=b.match($c))&&1===d.length&&ad.test(b)&&c&&1===c.length||Sc("failed sanity: "+a);return m}
function bd(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=cd(a);Wc.test(c)||Sc("invalid_callback");b=dd(b);d=d&&d.length?dd(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"default.htm"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","rt=j/sv=1/d=1/ed=1",a.X?"/am="+e(a.X):"",a.sa?"/rs="+e(a.sa):"",a.ya?"/t="+e(a.ya):"","/cb=",e(c)].join("")}
function cd(a){"default.htm"!==a.charAt(0)&&Sc("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Sc("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),m=decodeURIComponent(f[1]);2==f.length&&g&&m&&(a[g]=a[g]||m)}b="./"+c.join("/");Tc.test(b)||Sc("invalid_prefix");c=0;for(d=Uc.length;c<d;++c)Uc[c].test(b)&&Sc("invalid_prefix");c=ed(a,
"k",!0);d=ed(a,"am");e=ed(a,"rs");a=ed(a,"t");return{pathPrefix:b,version:c,X:d,sa:e,ya:a}}
function dd(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Xc.test(e)&&b.push(e)}return b.join(",")}
function ed(a,b,c){a=a[b];!a&&c&&Sc("missing: "+b);if(a){if(Vc.test(a))return a;Sc("invalid: "+b)}return null}
var ad=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,$c=/\/cb=/g,Zc=/\/\//g;function fd(){var a=Hc();if(!a)throw Error("Bad hint");return a}
Qc.m=function(a,b,c,d){(a=a[0])||Sc("missing_hint");return"../https@apis.google.com"+bd(a,b,c,d)};
var gd=decodeURI("%73cript"),hd=/^[-+_0-9\/A-Za-z]+={0,2}$/;function id(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function jd(){var a=L.nonce;return void 0!==a?a&&a===String(a)&&a.match(hd)?a:L.nonce=null:Ac.querySelector?(a=Ac.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(hd)?L.nonce=a:L.nonce=null):null:null}
function kd(a){if("loading"!=Ac.readyState)ld(a);else{var b=jd(),c="";null!==b&&(c=' nonce="'+b+'"');Ac.write("<"+gd+' src="'+encodeURI(a)+'"'+c+"></"+gd+">")}}
function ld(a){var b=Ac.createElement(gd);b.setAttribute("src",a);a=jd();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Ac.getElementsByTagName(gd)[0])?a.parentNode.insertBefore(b,a):(Ac.head||Ac.body||Ac.documentElement).appendChild(b)}
function md(a,b){var c=b&&b._c;if(c)for(var d=0;d<Rc.length;d++){var e=Rc[d][0],f=Rc[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function nd(a,b,c){od(function(){var c=b===Hc()?K(Gc,"_",Fc()):Fc();c=K(Jc(b),"_",c);a(c)},c)}
function pd(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);md(a,c);var d=a?a.split(":"):[],e=c.h||fd(),f=K(L,"ah",Fc());if(f["::"]&&d.length){for(var g=[],m=null;m=d.shift();){var l=m.split(".");l=f[m]||f[l[1]&&"ns:"+l[0]||""]||e;var p=g.length&&g[g.length-1]||null,B=p;p&&p.hint==l||(B={hint:l,features:[]},g.push(B));B.features.push(m)}var E=g.length;if(1<E){var F=c.callback;F&&(c.callback=function(){0==--E&&F()})}for(;d=g.shift();)qd(d.features,c,d.hint)}else qd(d||[],c,e)}
function qd(a,b,c){function d(a,b){if(E)return 0;zc.clearTimeout(B);F.push.apply(F,r);var d=((Gc||{}).config||{}).update;d?d(f):f&&K(L,"cu",[]).push(f);if(b){Oc("me0",a,I);try{nd(b,c,p)}finally{Oc("me1",a,I)}}return 1}
a=Ec(a)||[];var e=b.callback,f=b.config,g=b.timeout,m=b.ontimeout,l=b.onerror,p=void 0;"function"==typeof l&&(p=l);var B=null,E=!1;if(g&&!m||!g&&m)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";l=K(Jc(c),"r",[]).sort();var F=K(Jc(c),"L",[]).sort(),I=[].concat(l);0<g&&(B=zc.setTimeout(function(){E=!0;m()},g));
var r=id(a,F);if(r.length){r=id(a,l);var Y=K(L,"CP",[]),n=Y.length;Y[n]=function(a){function b(){var a=Y[n+1];a&&a()}
function c(b){Y[n]=null;d(r,a)&&Ic(function(){e&&e();b()})}
if(!a)return 0;Oc("ml1",r,I);0<n&&Y[n-1]?Y[n]=function(){c(b)}:c(b)};
if(r.length){var hc="loaded_"+L.I++;Gc[hc]=function(a){Y[n](a);Gc[hc]=null};
a=Yc(c,r,"gapi."+hc,l);l.push.apply(l,r);Oc("ml0",r,I);b.sync||zc.___gapisync?kd(a):ld(a)}else Y[n](Cc)}else d(r)&&e&&e()}
function od(a,b){if(L.hee&&0<L.hel)try{return a()}catch(c){b&&b(c),L.hel--,pd("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Gc.load=function(a,b){return od(function(){return pd(a,b)})};function rd(a,b){this.f=a;this.i=b;this.b=0;this.a=null}
rd.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.f();return a};function sd(a){k.setTimeout(function(){throw a;},0)}
var td;
function ud(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=u(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(ha(c.next)){c=c.next;var a=c.Z;c.Z=null;a()}};
return function(a){d.next={Z:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}}
;function vd(){this.b=this.a=null}
var xd=new rd(function(){return new wd},function(a){a.reset()});
vd.prototype.add=function(a,b){var c=xd.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};
vd.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function wd(){this.next=this.scope=this.a=null}
wd.prototype.set=function(a,b){this.a=a;this.scope=b;this.next=null};
wd.prototype.reset=function(){this.next=this.scope=this.a=null};function yd(a){zd||Ad();Bd||(zd(),Bd=!0);Cd.add(a,void 0)}
var zd;function Ad(){if(k.Promise&&k.Promise.resolve){var a=k.Promise.resolve(void 0);zd=function(){a.then(Dd)}}else zd=function(){var a=Dd;
!oa(k.setImmediate)||k.Window&&k.Window.prototype&&!y("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(td||(td=ud()),td(a)):k.setImmediate(a)}}
var Bd=!1,Cd=new vd;function Dd(){for(var a;a=Cd.remove();){try{a.a.call(a.scope)}catch(c){sd(c)}var b=xd;b.i(a);100>b.b&&(b.b++,a.next=b.a,b.a=a)}Bd=!1}
;var Ed=y("Firefox"),Fd=eb()||y("iPod"),Gd=y("iPad"),Hd=db(),Id=cb(),Jd=bb()&&!fb();function Kd(){this.f=this.f;this.i=this.i}
Kd.prototype.f=!1;Kd.prototype.R=function(){return this.f};
Kd.prototype.dispose=function(){this.f||(this.f=!0,this.T())};
Kd.prototype.T=function(){if(this.i)for(;this.i.length;)this.i.shift()()};
function Ld(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Md(a){if(a.classList)return a.classList;a=a.className;return q(a)&&a.match(/\S+/g)||[]}
function M(a,b){return a.classList?a.classList.contains(b):Da(Md(a),b)}
function N(a,b){a.classList?a.classList.add(b):M(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Nd(a,b){if(a.classList)x(b,function(b){N(a,b)});
else{var c={};x(Md(a),function(a){c[a]=!0});
x(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function O(a,b){a.classList?a.classList.remove(b):M(a,b)&&(a.className=za(Md(a),function(a){return a!=b}).join(" "))}
function Od(a,b){a.classList?x(b,function(b){O(a,b)}):a.className=za(Md(a),function(a){return!Da(b,a)}).join(" ")}
function P(a,b,c){c?N(a,b):O(a,b)}
function Pd(a,b,c){M(a,b)&&(O(a,b),N(a,c))}
function Qd(a,b){var c=!M(a,b);P(a,b,c)}
;var Rd=!z&&!bb();function Sd(a,b){if(/-[a-z]/.test(b))return null;if(Rd&&a.dataset){if(db()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var Td="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""};function Ud(){}
Ud.prototype.next=function(){throw Td;};
Ud.prototype.G=function(){return this};
function Vd(a){if(a instanceof Ud)return a;if("function"==typeof a.G)return a.G(!1);if(na(a)){var b=0,c=new Ud;c.next=function(){for(;;){if(b>=a.length)throw Td;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Wd(a,b){if(na(a))try{x(a,b,void 0)}catch(c){if(c!==Td)throw c;}else{a=Vd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Td)throw c;}}}
function Xd(a){if(na(a))return Ea(a);a=Vd(a);var b=[];Wd(a,function(a){b.push(a)});
return b}
;function Yd(a,b){this.f={};this.a=[];this.i=this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Yd)for(c=Zd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Zd(a){$d(a);return a.a.concat()}
h=Yd.prototype;h.equals=function(a,b){if(this===a)return!0;if(this.b!=a.b)return!1;var c=b||ae;$d(this);for(var d,e=0;d=this.a[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function ae(a,b){return a===b}
h.isEmpty=function(){return 0==this.b};
h.clear=function(){this.f={};this.i=this.b=this.a.length=0};
h.remove=function(a){return Object.prototype.hasOwnProperty.call(this.f,a)?(delete this.f[a],this.b--,this.i++,this.a.length>2*this.b&&$d(this),!0):!1};
function $d(a){if(a.b!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.f,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.b!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}
h.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.f,a)?this.f[a]:b};
h.set=function(a,b){Object.prototype.hasOwnProperty.call(this.f,a)||(this.b++,this.a.push(a),this.i++);this.f[a]=b};
h.forEach=function(a,b){for(var c=Zd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.G=function(a){$d(this);var b=0,c=this.i,d=this,e=new Ud;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw Td;var e=d.a[b++];return a?e:d.f[e]};
return e};function be(a){for(var b=[],c=ce,d=a.elements,e,f=0;e=d[f];f++)if(e.form==a&&!e.disabled&&"FIELDSET"!=e.tagName){var g=e.name;switch(e.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":e=de(e);if(null!=e)for(var m,l=0;m=e[l];l++)c(b,g,m);break;default:m=de(e),null!=m&&c(b,g,m)}}d=a.getElementsByTagName("INPUT");for(f=0;e=d[f];f++)e.form==a&&"image"==e.type.toLowerCase()&&(g=e.name,c(b,g,e.value),c(b,g+".x","0"),c(b,g+".y","0"));return b.join("&")}
function ce(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function de(a){var b=a.type;switch(q(b)&&b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null;default:return null!=a.value?a.value:null}}
;var Vb=ka;function ee(a){return Ka(Ja(a.replace(fe,function(a,c){return ge.test(c)?"":" "}).replace(/[\t\n ]+/g," ")))}
var ge=/^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i,fe=/<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;function he(a){var b=[];ie(new je,a,b);return b.join("")}
function je(){}
function ie(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==ma(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ie(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ke(d,c),c.push(":"),ie(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ke(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var le={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},me=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ke(a,b){b.push('"',a.replace(me,function(a){var b=le[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),le[a]=b);return b}),'"')}
;function ne(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
ne.prototype.getHeight=function(){return this.bottom-this.top};
ne.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
ne.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
ne.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function oe(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
oe.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
oe.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
oe.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function pe(a,b,c){if(q(b))(b=qe(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=qe(c,d);f&&(c.style[f]=e)}}
var re={};function qe(a,b){var c=re[b];if(!c){var d=Ra(b);c=d;void 0===a.style[d]&&(d=(nb?"Webkit":mb?"Moz":z?"ms":jb?"O":null)+Sa(d),void 0!==a.style[d]&&(c=d));re[b]=c}return c}
function se(a,b){var c=$b(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function te(a,b){return se(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function ue(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}z&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function ve(a){if(z&&!(8<=Number(Cb)))return a.offsetParent;var b=$b(a),c=te(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=te(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function we(a){for(var b=new ne(0,Infinity,Infinity,0),c=Yb(a),d=c.a.body,e=c.a.documentElement,f=gc(c.a);a=ve(a);)if(!(z&&0==a.clientWidth||nb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=te(a,"overflow")){var g=xe(a),m=new A(a.clientLeft,a.clientTop);g.x+=m.x;g.y+=m.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
dc(ic(c.a)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function xe(a){var b=$b(a),c=new A(0,0);var d=b?$b(b):document;d=!z||9<=Number(Cb)||ec(Yb(d).a)?d.documentElement:d.body;if(a==d)return c;a=ue(a);b=fc(Yb(b).a);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function ye(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function ze(a){var b=Ae;if("none"!=te(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Ae(a){var b=a.offsetWidth,c=a.offsetHeight,d=nb&&!b&&!c;return ha(b)&&!d||!a.getBoundingClientRect?new Xb(b,c):(a=ue(a),new Xb(a.right-a.left,a.bottom-a.top))}
function Be(a){var b=xe(a);a=ze(a);return new oe(b.x,b.y,a.width,a.height)}
function Ce(a){return"rtl"==te(a,"direction")}
function De(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Ee(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?De(a,c):0}
var Fe={thin:2,medium:4,thick:6};function Ge(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Fe?Fe[c]:De(a,c)}
;var He=function(){if(pb){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Ta))?a[1]:"0"}return ob?(a=/10[_.][0-9_.]+/,(a=a.exec(Ta))?a[0].replace(/_/g,"."):"10"):qb?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Ta))?a[1]:""):rb||sb||tb?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Ta))?a[1].replace(/_/g,"."):""):""}();function Ie(a){return(a=a.exec(Ta))?a[1]:""}
var Je=function(){if(Ed)return Ie(/Firefox\/([0-9.]+)/);if(z||kb||jb)return Ab;if(Id)return fb()?Ie(/CriOS\/([0-9.]+)/):Ie(/Chrome\/([0-9.]+)/);if(Jd&&!fb())return Ie(/Version\/([0-9.]+)/);if(Fd||Gd){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Ta);if(a)return a[1]+"."+a[2]}else if(Hd)return(a=Ie(/Android\s+([0-9.]+)/))?a:Ie(/Version\/([0-9.]+)/);return""}();function Ke(a,b,c,d,e,f,g){var m;if(m=c.offsetParent){var l="HTML"==m.tagName||"BODY"==m.tagName;if(!l||"static"!=te(m,"position")){var p=xe(m);if(!l){l=Ce(m);var B;if(B=l){if(B=Jd)B=0<=Oa(Je,10);var E;if(E=ub)E=0<=Oa(He,10);B=mb||B||E}l=B?-m.scrollLeft:!l||lb&&Bb("8")||"visible"==te(m,"overflowX")?m.scrollLeft:m.scrollWidth-m.clientWidth-m.scrollLeft;p=Wb(p,new A(l,m.scrollTop))}}}m=p||new A;p=Be(a);if(l=we(a)){var F=new oe(l.left,l.top,l.right-l.left,l.bottom-l.top);l=Math.max(p.left,F.left);B=
Math.min(p.left+p.width,F.left+F.width);l<=B&&(E=Math.max(p.top,F.top),F=Math.min(p.top+p.height,F.top+F.height),E<=F&&(p.left=l,p.top=E,p.width=B-l,p.height=F-E))}l=Yb(a);E=Yb(c);if(l.a!=E.a){B=l.a.body;E=ic(E.a);F=new A(0,0);var I=(I=$b(B))?ic(I):window;b:{try{gb(I.parent);var r=!0;break b}catch(hc){}r=!1}if(r){r=B;do{if(I==E)var Y=xe(r);else Y=ue(r),Y=new A(Y.left,Y.top);F.x+=Y.x;F.y+=Y.y}while(I&&I!=E&&I!=I.parent&&(r=I.frameElement)&&(I=I.parent))}r=Wb(F,xe(B));!z||9<=Number(Cb)||ec(l.a)||(r=
Wb(r,fc(l.a)));p.left+=r.x;p.top+=r.y}a=Le(a,b);b=p.left;a&4?b+=p.width:a&2&&(b+=p.width/2);b=new A(b,p.top+(a&1?p.height:0));b=Wb(b,m);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var n;g&&(n=we(c))&&(n.top-=m.y,n.right-=m.x,n.bottom-=m.y,n.left-=m.x);e=b;e=new A(e.x,e.y);b=Le(c,d);d=ze(c);a=new Xb(d.width,d.height);e=new A(e.x,e.y);a=new Xb(a.width,a.height);r=0;if(f||0!=b)b&4?e.x-=a.width+(f?f.right:0):b&2?e.x-=a.width/2:f&&(e.x+=f.left),b&1?e.y-=a.height+(f?f.bottom:0):f&&(e.y+=f.top);g&&(n?(f=
e,b=a,r=0,65==(g&65)&&(f.x<n.left||f.x>=n.right)&&(g&=-2),132==(g&132)&&(f.y<n.top||f.y>=n.bottom)&&(g&=-5),f.x<n.left&&g&1&&(f.x=n.left,r|=1),g&16&&(m=f.x,f.x<n.left&&(f.x=n.left,r|=4),f.x+b.width>n.right&&(b.width=Math.min(n.right-f.x,m+b.width-n.left),b.width=Math.max(b.width,0),r|=4)),f.x+b.width>n.right&&g&1&&(f.x=Math.max(n.right-b.width,n.left),r|=1),g&2&&(r|=(f.x<n.left?16:0)|(f.x+b.width>n.right?32:0)),f.y<n.top&&g&4&&(f.y=n.top,r|=2),g&32&&(m=f.y,f.y<n.top&&(f.y=n.top,r|=8),f.y+b.height>
n.bottom&&(b.height=Math.min(n.bottom-f.y,m+b.height-n.top),b.height=Math.max(b.height,0),r|=8)),f.y+b.height>n.bottom&&g&4&&(f.y=Math.max(n.bottom-b.height,n.top),r|=2),g&8&&(r|=(f.y<n.top?64:0)|(f.y+b.height>n.bottom?128:0)),g=r):g=256,r=g);f=new oe(0,0,0,0);f.left=e.x;f.top=e.y;f.width=a.width;f.height=a.height;g=r;g&496||(e=new A(f.left,f.top),e instanceof A?(n=e.x,e=e.y):(n=e,e=void 0),c.style.left=ye(n,!1),c.style.top=ye(e,!1),a=new Xb(f.width,f.height),d==a||d&&a&&d.width==a.width&&d.height==
a.height||(f=a,n=ec(Yb($b(c)).a),!z||Bb("10")||n&&Bb("8")?(c=c.style,mb?c.MozBoxSizing="border-box":nb?c.WebkitBoxSizing="border-box":c.boxSizing="border-box",c.width=Math.max(f.width,0)+"px",c.height=Math.max(f.height,0)+"px"):(d=c.style,n?(z?(n=Ee(c,"paddingLeft"),e=Ee(c,"paddingRight"),a=Ee(c,"paddingTop"),b=Ee(c,"paddingBottom"),n=new ne(a,e,b,n)):(n=se(c,"paddingLeft"),e=se(c,"paddingRight"),a=se(c,"paddingTop"),b=se(c,"paddingBottom"),n=new ne(parseFloat(a),parseFloat(e),parseFloat(b),parseFloat(n))),
!z||9<=Number(Cb)?(e=se(c,"borderLeftWidth"),a=se(c,"borderRightWidth"),b=se(c,"borderTopWidth"),c=se(c,"borderBottomWidth"),c=new ne(parseFloat(b),parseFloat(a),parseFloat(c),parseFloat(e))):(e=Ge(c,"borderLeft"),a=Ge(c,"borderRight"),b=Ge(c,"borderTop"),c=Ge(c,"borderBottom"),c=new ne(b,a,c,e)),d.pixelWidth=f.width-c.left-n.left-n.right-c.right,d.pixelHeight=f.height-c.top-n.top-n.bottom-c.bottom):(d.pixelWidth=f.width,d.pixelHeight=f.height))));return g}
function Le(a,b){return(b&8&&Ce(a)?b^4:b)&-9}
;function Q(a){Kd.call(this);this.C=1;this.v=[];this.B=0;this.a=[];this.b={};this.F=!!a}
w(Q,Kd);h=Q.prototype;h.subscribe=function(a,b,c){var d=this.b[a];d||(d=this.b[a]=[]);var e=this.C;this.a[e]=a;this.a[e+1]=b;this.a[e+2]=c;this.C=e+3;d.push(e);return e};
function Me(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.M(d),b.apply(void 0,arguments))},a)}
function Ne(a,b,c){if(b=a.b[b]){var d=a.a;(b=Ca(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.M(b)}}
h.M=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.B)this.v.push(a),this.a[a+1]=ka;else{if(c){var d=ya(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
h.D=function(a,b){var c=this.b[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.F)for(e=0;e<c.length;e++){var g=c[e];Oe(this.a[g+1],this.a[g+2],d)}else{this.B++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.a[g+1].apply(this.a[g+2],d)}finally{if(this.B--,0<this.v.length&&0==this.B)for(;c=this.v.pop();)this.M(c)}}return 0!=e}return!1};
function Oe(a,b,c){yd(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.b[a];b&&(x(b,this.M,this),delete this.b[a])}else this.a.length=0,this.b={}};
function Pe(a,b){if(b){var c=a.b[b];return c?c.length:0}c=0;for(var d in a.b)c+=Pe(a,d);return c}
h.T=function(){Q.o.T.call(this);this.clear();this.v.length=0};function Qe(a){this.a=a}
Qe.prototype.set=function(a,b){ha(b)?this.a.set(a,he(b)):this.a.remove(a)};
Qe.prototype.get=function(a){try{var b=this.a.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Qe.prototype.remove=function(a){this.a.remove(a)};function Re(a){this.a=a}
w(Re,Qe);function Se(a){this.data=a}
function Te(a){return!ha(a)||a instanceof Se?a:new Se(a)}
Re.prototype.set=function(a,b){Re.o.set.call(this,a,Te(b))};
Re.prototype.b=function(a){a=Re.o.get.call(this,a);if(!ha(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Re.prototype.get=function(a){if(a=this.b(a)){if(a=a.data,!ha(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ue(a){this.a=a}
w(Ue,Re);Ue.prototype.set=function(a,b,c){if(b=Te(b)){if(c){if(c<wa()){Ue.prototype.remove.call(this,a);return}b.expiration=c}b.creation=wa()}Ue.o.set.call(this,a,b)};
Ue.prototype.b=function(a){var b=Ue.o.b.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<wa()||c&&c>wa())Ue.prototype.remove.call(this,a);else return b}};function Ve(){}
;function We(){}
w(We,Ve);We.prototype.clear=function(){var a=Xd(this.G(!0)),b=this;x(a,function(a){b.remove(a)})};function Xe(a){this.a=a}
w(Xe,We);h=Xe.prototype;h.isAvailable=function(){if(!this.a)return!1;try{return this.a.setItem("__sak","1"),this.a.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.a.setItem(a,b)}catch(c){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.a.getItem(a);if(!q(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.a.removeItem(a)};
h.G=function(a){var b=0,c=this.a,d=new Ud;d.next=function(){if(b>=c.length)throw Td;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!q(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){this.a.clear()};
h.key=function(a){return this.a.key(a)};function Ye(){var a=null;try{a=window.localStorage||null}catch(b){}this.a=a}
w(Ye,Xe);function Ze(a,b){this.b=a;this.a=null;if(z&&!(9<=Number(Cb))){$e||($e=new Yd);this.a=$e.get(a);this.a||(b?this.a=document.getElementById(b):(this.a=document.createElement("userdata"),this.a.addBehavior("#default#userData"),document.body.appendChild(this.a)),$e.set(a,this.a));try{this.a.load(this.b)}catch(c){this.a=null}}}
w(Ze,We);var af={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},$e=null;function bf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return af[a]})}
h=Ze.prototype;h.isAvailable=function(){return!!this.a};
h.set=function(a,b){this.a.setAttribute(bf(a),b);cf(this)};
h.get=function(a){a=this.a.getAttribute(bf(a));if(!q(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.a.removeAttribute(bf(a));cf(this)};
h.G=function(a){var b=0,c=this.a.XMLDocument.documentElement.attributes,d=new Ud;d.next=function(){if(b>=c.length)throw Td;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!q(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){for(var a=this.a.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);cf(this)};
function cf(a){try{a.a.save(a.b)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function df(a,b){this.b=a;this.a=b+"::"}
w(df,We);df.prototype.set=function(a,b){this.b.set(this.a+a,b)};
df.prototype.get=function(a){return this.b.get(this.a+a)};
df.prototype.remove=function(a){this.b.remove(this.a+a)};
df.prototype.G=function(a){var b=this.b.G(!0),c=this,d=new Ud;d.next=function(){for(var d=b.next();d.substr(0,c.a.length)!=c.a;)d=b.next();return a?d.substr(c.a.length):c.b.get(d)};
return d};var ef=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ff(a){return a?decodeURI(a):a}
function gf(a,b,c){if("array"==ma(b))for(var d=0;d<b.length;d++)gf(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function hf(a){var b=[],c;for(c in a)gf(c,a[c],b);return b.join("&")}
function jf(a,b){var c=hf(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;function kf(a,b,c){a&&(a.dataset?a.dataset[lf(b)]=String(c):a.setAttribute("data-"+b,c))}
function mf(a,b){return a?a.dataset?a.dataset[lf(b)]:a.getAttribute("data-"+b):null}
var nf={};function lf(a){return nf[a]||(nf[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var of=0;function pf(a){var b=a.__yt_uid_key;b||(b=qf(),a.__yt_uid_key=b);return b}
function rf(a){var b=a.cloneNode(!1);"TR"==b.tagName||"SELECT"==b.tagName?x(a.childNodes,function(a){b.appendChild(rf(a))}):b.innerHTML=a.innerHTML;
return b}
function sf(a,b){a=C(a);b=C(b);return!!yc(a,function(a){return a===b},void 0)}
function tf(a,b){var c=ac(document,a,null,b);return c.length?c[0]:null}
function uf(){P(document.body,"hide-players",!1);x(D("preserve-players"),function(a){O(a,"preserve-players")})}
var qf=t("ytDomDomGetNextId")||function(){return++of};
v("ytDomDomGetNextId",qf);var vf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",vf);function wf(a){var b=arguments;if(1<b.length)vf[b[0]]=b[1];else{b=b[0];for(var c in b)vf[c]=b[c]}}
function xf(a,b){return a in vf?vf[a]:b}
;function yf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){zf(b)}}:a}
function zf(a){var b=t("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=xf("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),wf("ERRORS",b))}
;var Af={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Bf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Af||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}
Bf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Bf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Bf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Za=t("ytEventsEventsListeners")||{};v("ytEventsEventsListeners",Za);var Cf=t("ytEventsEventsCounter")||{count:0};v("ytEventsEventsCounter",Cf);
function Df(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ya(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g;if(g=pa(e[4])&&pa(d))a:{g=e[4];for(var m in g)if(!(m in d)||g[m]!==d[m]){g=!1;break a}for(m in d)if(!(m in g)){g=!1;break a}g=!0}return!!e.length&&e[0]==a&&e[1]==b&&e[2]==
c&&(f||g)})}
function R(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Df(a,b,c,d);if(e)return e;e=++Cf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Bf(d);if(!yc(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Bf(b);
b.currentTarget=a;return c.call(a,b)};
g=yf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Ef()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Za[e]=[a,b,c,g,d];return e}
function Ff(a,b,c,d){var e=a||document;return R(e,b,function(a){var b=yc(a.target,function(a){return a===e||d(a)});
b&&b!==e&&!b.disabled&&(a.currentTarget=b,c.call(b,a))})}
function Gf(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var Ef=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=!1;
try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Hf(a,b,c,d){return Ff(a,b,c,function(a){return M(a,d)})}
function If(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function Jf(a){a&&("string"==typeof a&&(a=[a]),x(a,function(a){if(a in Za){var b=Za[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Ef()||"boolean"==typeof b?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Za[a]}}))}
;wa();var Kf=ha(XMLHttpRequest)?function(){return new XMLHttpRequest}:ha(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Lf(){if(!Kf)return null;var a=Kf();return"open"in a?a:null}
;function Mf(a,b){oa(a)&&(a=yf(a));return window.setTimeout(a,b)}
;function Nf(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==ma(b[f])?Fa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
;var Of={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Pf=!1;
function Qf(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(ef)[1]||null,e=ff(a.match(ef)[3]||null);d&&e?(d=c,c=a.match(ef),d=d.match(ef),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?ff(c.match(ef)[3]||null)==e&&(Number(c.match(ef)[4]||null)||null)==(Number(a.match(ef)[4]||null)||null):!0;for(var f in Of){if((e=d=xf(Of[f]))&&!(e=c)){e=f;var g=xf("CORS_HEADER_WHITELIST")||{},m=ff(a.match(ef)[3]||null);e=m?(g=g[m])?Da(g,e):!1:!0}e&&(b[f]=d)}return b}
function Rf(a,b){var c=b.format||"JSON";a=Sf(a,b);var d=Tf(a,b),e=!1,f,g=Uf(a,function(a){if(!e){e=!0;f&&window.clearTimeout(f);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=!0;break a;default:d=!1}var g=null;if(d||400<=a.status&&500>a.status)g=Vf(c,a,b.eb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var m=b.context||k;d?b.onSuccess&&
b.onSuccess.call(m,a,g):b.onError&&b.onError.call(m,a,g);b.Sa&&b.Sa.call(m,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Ta&&0<b.timeout&&(f=Mf(function(){e||(e=!0,g.abort(),window.clearTimeout(f),b.Ta.call(b.context||k,g))},b.timeout))}
function Sf(a,b){b.gb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=xf("XSRF_FIELD_NAME",void 0),d=b.hb;if(d){d[c]&&delete d[c];d=d||{};var e=a.split("#",2);c=e[0];e=1<e.length?"#"+e[1]:"";var f=c.split("?",2);c=f[0];f=Nf(f[1]||"");for(var g in d)f[g]=d[g];a=jf(c,f)+e}return a}
function Tf(a,b){var c=xf("XSRF_FIELD_NAME",void 0),d=xf("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ra,g=xf("XSRF_FIELD_NAME",void 0),m;b.headers&&(m=b.headers["Content-Type"]);b.fb||ff(a.match(ef)[3]||null)&&!b.withCredentials&&ff(a.match(ef)[3]||null)!=document.location.hostname||"POST"!=b.method||m&&"application/x-www-form-urlencoded"!=m||b.ra&&b.ra[g]||(f||(f={}),f[c]=d);f&&q(e)&&(e=Nf(e),ab(e,f),e=b.Va&&"JSON"==b.Va?JSON.stringify(e):hf(e));if(!(c=e)&&(c=f)){a:{for(var l in f){f=!1;break a}f=
!0}c=!f}!Pf&&c&&"POST"!=b.method&&(Pf=!0,zf(Error("AJAX request with postData should use POST")));return e}
function Vf(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Wf(b):null)d={},x(b.getElementsByTagName("*"),function(a){d[a.tagName]=Xf(a)})}c&&Yf(d);
return d}
function Yf(a){if(pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Tb(a[b]);a[c]=d}else Yf(a[b])}}
function Wf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Xf(a){var b="";x(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Uf(a,b,c,d,e,f,g){function m(){4==(l&&"readyState"in l?l.readyState:0)&&b&&yf(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Lf();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",m,!1):l.onreadystatechange=m;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Qf(a,e))for(var p in e)l.setRequestHeader(p,e[p]),"content-type"==p.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;function Zf(a,b){(a=C(a))&&a.style&&(a.style.display=b?"":"none",P(a,"hid",!b))}
function $f(a){return(a=C(a))?"none"!=a.style.display&&!M(a,"hid"):!1}
function S(a){x(arguments,function(a){!na(a)||a instanceof Element?Zf(a,!0):x(a,function(a){S(a)})})}
function T(a){x(arguments,function(a){!na(a)||a instanceof Element?Zf(a,!1):x(a,function(a){T(a)})})}
;var ag=t("ytPubsubPubsubInstance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.M;Q.prototype.publish=Q.prototype.D;Q.prototype.clear=Q.prototype.clear;v("ytPubsubPubsubInstance",ag);var bg=t("ytPubsubPubsubSubscribedKeys")||{};v("ytPubsubPubsubSubscribedKeys",bg);var cg=t("ytPubsubPubsubTopicToKeys")||{};v("ytPubsubPubsubTopicToKeys",cg);var dg=t("ytPubsubPubsubIsSynchronous")||{};v("ytPubsubPubsubIsSynchronous",dg);
function eg(a,b,c){var d=fg();if(d){var e=d.subscribe(a,function(){var d=arguments;var g=function(){bg[e]&&b.apply(c||window,d)};
try{dg[a]?g():Mf(g,0)}catch(m){zf(m)}},c);
bg[e]=!0;cg[a]||(cg[a]=[]);cg[a].push(e);return e}return 0}
function gg(a){var b=fg();b&&("number"==typeof a?a=[a]:q(a)&&(a=[parseInt(a,10)]),x(a,function(a){b.unsubscribeByKey(a);delete bg[a]}))}
function hg(a,b){var c=fg();c&&c.publish.apply(c,arguments)}
function ig(a,b){dg[a]=!0;var c=fg();c&&c.publish.apply(c,arguments);dg[a]=!1}
function jg(a){var b=fg();if(b)if(b.clear(a),a)kg(a);else for(var c in cg)kg(c)}
function fg(){return t("ytPubsubPubsubInstance")}
function kg(a){cg[a]&&(a=cg[a],x(a,function(a){bg[a]&&delete bg[a]}),a.length=0)}
;function lg(){}
function mg(){}
lg.prototype=aa(mg.prototype);lg.prototype.constructor=lg;if(fa)fa(lg,mg);else for(var ng in mg)if("prototype"!=ng)if(Object.defineProperties){var og=Object.getOwnPropertyDescriptor(mg,ng);og&&Object.defineProperty(lg,ng,og)}else lg[ng]=mg[ng];lg.o=mg.prototype;lg.prototype.start=function(){var a=t("yt.scheduler.instance.start");a&&a()};
la(lg);lg.j();var pg=t("ytPubsub2Pubsub2Instance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.M;Q.prototype.publish=Q.prototype.D;Q.prototype.clear=Q.prototype.clear;v("ytPubsub2Pubsub2Instance",pg);var qg=t("ytPubsub2Pubsub2SubscribedKeys")||{};v("ytPubsub2Pubsub2SubscribedKeys",qg);v("ytPubsub2Pubsub2TopicToKeys",t("ytPubsub2Pubsub2TopicToKeys")||{});v("ytPubsub2Pubsub2IsAsync",t("ytPubsub2Pubsub2IsAsync")||{});v("ytPubsub2Pubsub2SkipSubKey",null);
function rg(a){var b=t("ytPubsub2Pubsub2Instance");b&&("number"==typeof a&&(a=[a]),x(a,function(a){b.unsubscribeByKey(a);delete qg[a]}))}
;var sg={},tg="ontouchstart"in document;function ug(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return yc(c,function(a){return M(a,b)},d)}
function vg(a){var b="mouseover"==a.type&&"mouseenter"in sg||"mouseout"==a.type&&"mouseleave"in sg,c=a.type in sg||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=sg[b];for(var d in c.b){var e=ug(b,d,a.target);e&&!yc(a.relatedTarget,function(a){return a==e})&&c.D(d,e,b,a)}}if(b=sg[a.type])for(d in b.b)(e=ug(a.type,d,a.target))&&b.D(d,e,a.type,a)}}
R(document,"blur",vg,!0);R(document,"change",vg,!0);R(document,"click",vg);R(document,"focus",vg,!0);R(document,"mouseover",vg);R(document,"mouseout",vg);R(document,"mousedown",vg);R(document,"keydown",vg);R(document,"keyup",vg);R(document,"keypress",vg);R(document,"cut",vg);R(document,"paste",vg);tg&&(R(document,"touchstart",vg),R(document,"touchend",vg),R(document,"touchcancel",vg));function U(a){this.l=a;this.B={};this.C=[];this.F=[]}
h=U.prototype;h.s=function(a){return J(a,V(this))};
function V(a,b){return"yt-uix"+(a.l?"-"+a.l:"")+(b?"-"+b:"")}
h.unregister=function(){gg(this.C);this.C.length=0;rg(this.F);this.F.length=0};
h.init=ka;h.dispose=ka;function wg(a,b,c){a.C.push(eg(b,c,a))}
function W(a,b,c,d){d=V(a,d);var e=u(c,a);b in sg||(sg[b]=new Q);sg[b].subscribe(d,e);a.B[c]=e}
function X(a,b,c,d){if(b in sg){var e=sg[b];Ne(e,V(a,d),a.B[c]);0>=Pe(e)&&(e.dispose(),delete sg[b])}delete a.B[c]}
h.H=function(a,b,c){var d=this.g(a,b);if(d&&(d=t(d))){var e=Ha(arguments,2);Ga(e,0,0,a);d.apply(null,e)}};
h.g=function(a,b){return mf(a,b)};var xg=Object.create(null);xg.log_event="GENERIC_EVENT_LOGGING";xg.log_interaction="INTERACTION_LOGGING";v("ytLoggingTransportLogPayloadsQueue_",t("ytLoggingTransportLogPayloadsQueue_")||{});v("ytLoggingTransportTokensToCttTargetIds_",t("ytLoggingTransportTokensToCttTargetIds_")||{});v("ytLoggingTransportDispatchedStats_",t("ytLoggingTransportDispatchedStats_")||{});v("ytytLoggingTransportCapturedTime_",t("ytLoggingTransportCapturedTime_")||{});function yg(){var a=new Ye;(a=a.isAvailable()?new df(a,"yt.innertube"):null)||(a=new Ze("yt.innertube"),a=a.isAvailable()?a:null);this.a=a?new Ue(a):null;this.b=document.domain||window.location.hostname}
yg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.a)try{this.a.set(a,b,wa()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(he(b))}catch(f){return}else e=escape(b);b=this.b;Lc.set(""+a,e,c,"default.htm",void 0===b?"youtube.com":b,!1)};
yg.prototype.get=function(a,b){var c=void 0,d=!this.a;if(!d)try{c=this.a.get(a)}catch(e){d=!0}if(d&&(c=Lc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
yg.prototype.remove=function(a){this.a&&this.a.remove(a);var b=this.b;Lc.remove(""+a,"default.htm",void 0===b?"youtube.com":b)};new yg;var zg=wa().toString();var Ag;a:{if(window.crypto&&window.crypto.getRandomValues)try{var Bg=Array(16),Cg=new Uint8Array(16);window.crypto.getRandomValues(Cg);for(var Dg=0;Dg<Bg.length;Dg++)Bg[Dg]=Cg[Dg];Ag=Bg;break a}catch(a){}for(var Eg=Array(16),Fg=0;16>Fg;Fg++){for(var Gg=wa(),Hg=0;Hg<Gg%23;Hg++)Eg[Fg]=Math.random();Eg[Fg]=Math.floor(256*Math.random())}if(zg)for(var Ig=1,Jg=0;Jg<zg.length;Jg++)Eg[Ig%16]=Eg[Ig%16]^Eg[(Ig-1)%16]/4^zg.charCodeAt(Jg),Ig++;Ag=Eg}
for(var Kg=Ag,Lg=[],Mg=0;Mg<Kg.length;Mg++)Lg.push("ABCDEFGHIJLKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Kg[Mg]&63));function Ng(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=jf(a,b)+c;a=a instanceof Kb?a:Ob(a);d.href=Mb(a)}
function Og(a){window.open(a,Qa(a).toString(36))}
;function Pg(){U.call(this,"button");this.a=null;this.f=[];this.b={}}
w(Pg,U);la(Pg);h=Pg.prototype;h.register=function(){W(this,"click",this.aa);W(this,"keydown",this.ja);W(this,"keypress",this.ka);wg(this,"page-scroll",this.Ha)};
h.unregister=function(){X(this,"click",this.aa);X(this,"keydown",this.ja);X(this,"keypress",this.ka);Qg(this);this.b={};Pg.o.unregister.call(this)};
h.aa=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
h.ja=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=Rg(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=oc(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.Pa;else"table"==e&&(f=this.Oa);f&&Sg(this,a,b,c,u(f,this))}}};
h.Ha=function(){var a=this.b,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=J(b.activeButtonNode||b.parentNode,V(this));if(void 0==d||void 0==b)break;Tg(this,d,b,!0)}};
function Sg(a,b,c,d,e){var f=$f(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=Ug(a,c)){if(ha(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;"a"==b.tagName.toLowerCase()?Ng(b.href):If(b)}else g&&Vg(a,b);else f?27==d.keyCode?(Ug(a,c),Vg(a,b)):e(b,c,d):(a=M(b,V(a,"reverse"))?38:40,d.keyCode==a&&(If(b),d.preventDefault()))}
h.ka=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=Rg(this,a),$f(a)&&c.preventDefault())};
function Ug(a,b){var c=V(a,"menu-item-highlight"),d=G(c,b);d&&O(d,c);return d}
function Wg(a,b,c){N(c,V(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=V(a,"item-id-"+qa(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
h.Oa=function(a,b,c){var d=Ug(this,b);if(d){var e=tf("table",b);b=ac(document,"td",null,e);d=Xg(d,b,ac(document,"td",null,tf("tr",e)).length,c);-1!=d&&(Wg(this,a,b[d]),c.preventDefault())}};
h.Pa=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Ug(this,b);d&&(b=za(ac(document,"li",null,b),$f),Wg(this,a,b[Xg(d,b,1,c)]),c.preventDefault())}};
function Xg(a,b,c,d){var e=b.length;a=ya(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Yg(a,b){var c=b.iframeMask;c||(c=document.createElement("IFRAME"),c.src='javascript:""',c.className=V(a,"menu-mask"),T(c),b.iframeMask=c);return c}
function Tg(a,b,c,d){var e=J(b,V(a,"group")),f=!!a.g(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,m=Be(b);if(M(b,V(a,"reverse"))){f=8;g=9;m=m.top+"px";try{c.style.maxHeight=m}catch(B){}}M(b,"flip")&&(M(b,V(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.g(b,"button-has-sibling-menu")?l=ve(e):a.g(b,"button-menu-root-container")&&(l=Zg(a,b));z&&!Bb("8")&&(l=null);if(l){var p=Be(l);p=new ne(-p.top,p.left,p.top,-p.left)}l=new A(0,1);M(b,V(a,"center-menu"))&&(l.x-=Math.round((ze(c).width-ze(b).width)/
2));d&&(l.y+=fc(document).y);if(a=Yg(a,b))b=ze(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Ke(e,f,a,g,l,p,197),d&&pe(a,"position","fixed");Ke(e,f,c,g,l,p,197)}
function Zg(a,b){if(a.g(b,"button-menu-root-container")){var c=a.g(b,"button-menu-root-container");return J(b,c)}return document.body}
h.wa=function(a){if(a){var b=Rg(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.g(a,"button-has-sibling-menu")?c=a.parentNode:c=Zg(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Yg(this,a);d&&c.appendChild(d);(c=!!this.g(a,"button-menu-fixed"))&&(this.b[pf(a).toString()]=b);Tg(this,a,b,c);ig("yt-uix-button-menu-before-show",a,b);S(b);d&&S(d);
this.H(a,"button-menu-action",!0);N(a,V(this,"active"));b=u(this.va,this,a,!1);d=u(this.va,this,a,!0);c=u(this.Ya,this,a,void 0);this.a&&Rg(this,this.a)==Rg(this,a)||Qg(this);hg("yt-uix-button-menu-show",a);Jf(this.f);this.f=[R(document,"click",d),R(document,"contextmenu",b),R(window,"resize",c)];this.a=a}}};
function Vg(a,b){if(b){var c=Rg(a,b);if(c){a.a=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");T(c);a.H(b,"button-menu-action",!1);var d=Yg(a,b),e=pf(c).toString();delete a.b[e];Mf(function(){d&&d.parentNode&&(T(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=J(b,V(a,"group"));
var f=[V(a,"active")];e&&f.push(V(a,"group-active"));Od(b,f);hg("yt-uix-button-menu-hide",b);Jf(a.f);a.f.length=0}}
h.Ya=function(a,b){var c=Rg(this,a);if(c){b&&(b instanceof Qb?c.innerHTML=Sb(b):H(c,b));var d=!!this.g(a,"button-menu-fixed");Tg(this,a,c,d)}};
h.va=function(a,b,c){c=Gf(c);var d=J(c,V(this));if(d){d=Rg(this,d);var e=Rg(this,a);if(d==e)return}d=J(c,V(this,"menu"));e=d==Rg(this,a);var f=M(c,V(this,"menu-item")),g=M(c,V(this,"menu-close"));if(!d||e&&(f||g))Vg(this,a),d&&b&&this.g(a,"button-menu-indicate-selected")&&((a=G(V(this,"content"),a))&&H(a,vc(c)),$g(this,d,c))};
function $g(a,b,c){var d=V(a,"menu-item-selected");x(D(d,b),function(a){O(a,d)});
N(c.parentNode,d)}
function Rg(a,b){if(!b.widgetMenu){var c=a.g(b,"button-menu-id");c=c&&C(c);var d=V(a,"menu");c?Nd(c,[d,V(a,"menu-external")]):c=G(d,b);b.widgetMenu=c}return b.widgetMenu}
h.isToggled=function(a){return M(a,V(this,"toggled"))};
h.toggle=function(a){if(this.g(a,"button-toggle")){var b=J(a,V(this,"group")),c=V(this,"toggled"),d=M(a,c);if(b&&this.g(b,"button-toggle-group")){var e=this.g(b,"button-toggle-group");x(D(V(this),b),function(b){b!=a||"optional"==e&&d?(O(b,c),b.removeAttribute("aria-pressed")):(N(a,c),b.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),Qd(a,c)}};
h.click=function(a){if(Rg(this,a)){var b=Rg(this,a);if(b){var c=J(b.activeButtonNode||b.parentNode,V(this));c&&c!=a?(Vg(this,c),Mf(u(this.wa,this,a),1)):$f(b)?Vg(this,a):this.wa(a)}a.focus()}this.H(a,"button-action")};
function Qg(a){a.a&&Vg(a,a.a)}
;function ah(a){U.call(this,a);this.f=null}
w(ah,U);h=ah.prototype;h.s=function(a){var b=U.prototype.s.call(this,a);return b?b:a};
h.register=function(){wg(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
h.dispose=function(){bh(this);ah.o.dispose.call(this)};
h.g=function(a,b){var c=ah.o.g.call(this,a,b);return c?c:(c=ah.o.g.call(this,a,"card-config"))&&(c=t(c))&&c[b]?c[b]:null};
h.show=function(a){var b=this.s(a);if(b){N(b,V(this,"active"));var c=ch(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;dh(this,a,c);var d=V(this,"card-visible"),e=this.g(a,"card-delegate-show")&&this.g(b,"card-action");this.H(b,"card-action",a);this.f=a;T(c);Mf(u(function(){e||(S(c),hg("yt-uix-card-show",b,a,c));eh(c);N(c,d);hg("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function ch(a,b,c){var d=c||b,e=V(a,"card");c=fh(a,d);var f=C(V(a,"card")+pf(d));if(f)return a=G(V(a,"card-body"),f),nc(a,c)||(kc(c),a.appendChild(c)),f;f=document.createElement("div");f.id=V(a,"card")+pf(d);f.className=e;(d=a.g(d,"card-class"))&&Nd(f,d.split(/\s+/));d=document.createElement("div");d.className=V(a,"card-border");b=a.g(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=V(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;kc(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function dh(a,b,c){var d=a.g(b,"orientation")||"horizontal",e=G(V(a,"anchor"),b)||b,f=a.g(b,"position"),g=!!a.g(b,"force-position"),m=a.g(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,p="topright"==f||"bottomright"==f;if(p&&l){var B=13;var E=8}else p&&!l?(B=12,E=9):!p&&l?(B=9,E=12):(B=8,E=13);var F=Ce(document.body);f=Ce(b);F!=f&&(B^=4);if(d){f=b.offsetHeight/2-12;var I=new A(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,I=new A(b.offsetWidth+6,-12);var r=ze(c);f=
Math.min(f,(d?r.height:r.width)-24-6);6>f&&(f=6,d?I.y+=12-b.offsetHeight/2:I.x+=12-b.offsetWidth/2);r=null;g||(r=10);b=V(a,"card-flip");a=V(a,"card-reverse");P(c,b,p);P(c,a,l);r=Ke(e,B,c,E,I,null,r);!g&&r&&(r&48&&(p=!p,B^=4,E^=4),r&192&&(l=!l,B^=1,E^=1),P(c,b,p),P(c,a,l),Ke(e,B,c,E,I));m&&(e=parseInt(c.style.top,10),g=fc(document).y,pe(c,"position","fixed"),pe(c,"top",e-g+"px"));F&&(c.style.right="",e=Be(c),e.left=e.left||parseInt(c.style.left,10),g=dc(window),c.style.left="",c.style.right=g.width-
e.left-e.width+"px");e=G("yt-uix-card-body-arrow",c);g=G("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!F&&p||F&&!p?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=G("yt-uix-card-arrow",c);p=G("yt-uix-card-arrow-background",c);l&&p&&(c="right"==d?ze(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",p.style.marginLeft=-f+"px",p.style.marginTop=f+"px")}
h.hide=function(a){if(a=this.s(a)){var b=C(V(this,"card")+pf(a));b&&(O(a,V(this,"active")),O(b,V(this,"card-visible")),T(b),this.f=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(kc(b.cardMask),b.cardMask=null))}};
function bh(a){a.f&&a.hide(a.f)}
h.Xa=function(a,b){var c=this.s(a);if(c){if(b){var d=fh(this,c);if(!d)return;b instanceof Qb?d.innerHTML=Sb(b):H(d,b)}M(c,V(this,"active"))&&(c=ch(this,a,c),dh(this,a,c),S(c),eh(c))}};
h.isActive=function(a){return(a=this.s(a))?M(a,V(this,"active")):!1};
function fh(a,b){var c=b.cardContentNode;if(!c){var d=V(a,"content"),e=V(a,"card-content");(c=(c=a.g(b,"card-id"))?C(c):G(d,b))||(c=document.createElement("div"));var f=c;O(f,d);N(f,e);b.cardContentNode=c}return c}
function eh(a){var b=a.cardMask;b||(b=document.createElement("IFRAME"),b.src='javascript:""',Nd(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function gh(){U.call(this,"kbd-nav")}
var hh;w(gh,U);la(gh);h=gh.prototype;h.register=function(){W(this,"keydown",this.ga);wg(this,"yt-uix-kbd-nav-move-in",this.pa);wg(this,"yt-uix-kbd-nav-move-in-to",this.Qa);wg(this,"yt-uix-kbd-move-next",this.qa);wg(this,"yt-uix-kbd-nav-move-to",this.N)};
h.unregister=function(){X(this,"keydown",this.ga);Jf(hh)};
h.ga=function(a,b,c){var d=c.keyCode;if(a=J(a,V(this)))switch(d){case 13:case 32:this.pa(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Sd(a,"kbdNavMoveOut");!c;){c=J(a.parentElement,V(this));if(!c)break a;c=Sd(c,"kbdNavMoveOut")}c=C(c);this.N(c);hg("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&M(a,V(this,"list")))switch(d){case 40:this.qa(b,a);break;case 38:d=document.activeElement==a,a=ih(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),jh(this,a[b]))}c.preventDefault()}};
h.pa=function(a){var b=Sd(a,"kbdNavMoveIn");b=C(b);kh(this,a,b);this.N(b)};
h.Qa=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}kh(this,d,a);this.N(a)};
h.N=function(a){if(a)if(sc(a))a.focus();else{var b=oc(a,function(a){return mc(a)?sc(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function kh(a,b,c){if(b&&c)if(N(c,V(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Rd&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
h.qa=function(a,b){var c=document.activeElement==b,d=ih(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),jh(this,d[c]))};
function jh(a,b){if(b){var c=xc(b,"LI");c&&(N(c,V(a,"highlight")),hh=R(b,"blur",u(function(a){O(a,V(this,"highlight"));Jf(hh)},a,c)))}}
function ih(a){if("UL"!=a.tagName.toUpperCase())return[];a=za(lc(a),function(a){return"LI"==a.tagName.toUpperCase()});
return za(Aa(a,function(a){return $f(a)?oc(a,function(a){return mc(a)?sc(a):!1}):!1}),function(a){return!!a})}
;function lh(){U.call(this,"menu");this.b=this.a=null;this.f={};this.v={};this.i=null}
w(lh,U);la(lh);function mh(a){var b=lh.j();if(M(a,V(b)))return a;var c=b.s(a);return c?c:J(a,V(b,"content"))==b.a?b.b:null}
h=lh.prototype;h.register=function(){W(this,"click",this.fa);W(this,"mouseenter",this.Fa);wg(this,"page-scroll",this.Ja);wg(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.s(a);nh(this,a)});
this.i=new Q};
h.unregister=function(){X(this,"click",this.fa);this.b=this.a=null;Jf(Ia(Xa(this.f)));this.f={};Wa(this.v,function(a){kc(a)},this);
this.v={};Ld(this.i);this.i=null;lh.o.unregister.call(this)};
h.fa=function(a,b,c){a&&(b=oh(this,a),!b.disabled&&sf(c.target,b)&&ph(this,a))};
h.Fa=function(a,b,c){a&&M(a,V(this,"hover"))&&sf(c.target,oh(this,a))&&ph(this,a,!0)};
h.Ja=function(){this.a&&this.b&&qh(this,this.b,this.a)};
function qh(a,b,c){var d=rh(a,b);if(d){var e=ze(c);if(e instanceof Xb){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=ye(e,!0);d.style.height=ye(f,!0)}c==a.a&&(e=9,f=8,M(b,V(a,"reversed"))&&(e^=1,f^=1),M(b,V(a,"flipped"))&&(e^=4,f^=4),a=new A(0,1),d&&Ke(b,e,d,f,a,null,197),Ke(b,e,c,f,a,null,197))}
function ph(a,b,c){sh(a,b)&&!c?nh(a,b):(th(a,b),!a.a||sf(b,a.a)?a.xa(b):Me(a.i,u(a.xa,a,b)))}
h.xa=function(a){if(a){var b=uh(this,a);if(b){ig("yt-uix-menu-before-show",a,b);this.a?sf(a,this.a)||nh(this,this.b):(this.b=a,this.a=b,M(a,V(this,"sibling-content"))||(kc(b),document.body.appendChild(b)),b.style.minWidth=oh(this,a).offsetWidth-2+"px");var c=rh(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);O(b,V(this,"content-hidden"));qh(this,a,b);Nd(oh(this,a),[V(this,"trigger-selected"),"yt-uix-button-toggled"]);hg("yt-uix-menu-show",a);vh(b);wh(this,a);hg("yt-uix-kbd-nav-move-in-to",
b);var d=u(this.Za,this,a),e=u(this.Ma,this,a);c=qa(a).toString();this.f[c]=[R(b,"click",e),R(document,"click",d)];M(a,V(this,"indicate-selected"))&&(d=u(this.Na,this,a),this.f[c].push(R(b,"click",d)));M(a,V(this,"hover"))&&(a=u(this.Ga,this,a),this.f[c].push(R(document,"mousemove",a)))}}};
h.Ga=function(a,b){var c=Gf(b);c&&(sf(c,oh(this,a))||xh(this,c)||yh(this,a))};
h.Za=function(a,b){var c=Gf(b);if(c){if(xh(this,c)){var d=J(c,V(this,"content")),e=xc(c,"LI");e&&d&&nc(d,e)&&ig("yt-uix-menu-item-clicked",c);c=J(c,V(this,"close-on-select"));if(!c)return;d=mh(c)}nh(this,d||a)}};
function th(a,b){if(b){var c=J(b,V(a,"content"));c&&x(D(V(a),c),function(a){!sf(a,b)&&sh(this,a)&&yh(this,a)},a)}}
function nh(a,b){if(b){var c=[];c.push(b);var d=uh(a,b);d&&(d=D(V(a),d),d=Ea(d),c=c.concat(d),x(c,function(a){sh(this,a)&&yh(this,a)},a))}}
function yh(a,b){if(b){var c=uh(a,b);Od(oh(a,b),[V(a,"trigger-selected"),"yt-uix-button-toggled"]);N(c,V(a,"content-hidden"));var d=uh(a,b);d&&bc(d,{"aria-expanded":"false"});(d=rh(a,b))&&d.parentNode&&kc(d);c&&c==a.a&&(a.b.appendChild(c),a.a=null,a.b=null,a.i&&a.i.D("ROOT_MENU_REMOVED"));hg("yt-uix-menu-hide",b);c=qa(b).toString();Jf(a.f[c]);delete a.f[c]}}
h.Ma=function(a,b){var c=Gf(b);c&&zh(this,a,c)};
h.Na=function(a,b){var c=Gf(b);if(c){var d=oh(this,a);if(d&&(c=xc(c,"LI")))if(c=vc(c).trim(),d.hasChildNodes()){var e=Pg.j();(d=G(V(e,"content"),d))&&H(d,c)}else H(d,c)}};
function wh(a,b){var c=uh(a,b);if(c){x(c.children,function(a){"LI"==a.tagName&&bc(a,{role:"menuitem"})});
bc(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+qa(c),c.id=d);(c=oh(a,b))&&bc(c,{"aria-controls":d})}}
function zh(a,b,c){var d=uh(a,b);d&&M(b,V(a,"checked"))&&(a=xc(c,"LI"))&&(a=G("yt-ui-menu-item-checked-hid",a))&&(x(D("yt-ui-menu-item-checked",d),function(a){Pd(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Pd(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function sh(a,b){var c=uh(a,b);return c?!M(c,V(a,"content-hidden")):!1}
function vh(a){x(ac(document,"UL",null,a),function(a){a.tabIndex=0;var b=gh.j();Nd(a,[V(b),V(b,"list")])})}
function uh(a,b){var c=mf(b,"menu-content-id");return c&&(c=C(c))?(Nd(c,[V(a,"content"),V(a,"content-external")]),c):b==a.b?a.a:G(V(a,"content"),b)}
function rh(a,b){var c=qa(b).toString(),d=a.v[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[V(a,"mask")];x(Md(b),function(a){e.push(a+"-mask")});
Nd(d,e);a.v[c]=d}return d||null}
function oh(a,b){return G(V(a,"trigger"),b)}
function xh(a,b){return sf(b,a.a)||sf(b,a.b)}
;function Ah(){ah.call(this,"clickcard");this.a={};this.b={}}
w(Ah,ah);la(Ah);h=Ah.prototype;h.register=function(){Ah.o.register.call(this);W(this,"click",this.ca,"target");W(this,"click",this.ba,"close")};
h.unregister=function(){Ah.o.unregister.call(this);X(this,"click",this.ca,"target");X(this,"click",this.ba,"close");for(var a in this.a)Jf(this.a[a]);this.a={};for(a in this.b)Jf(this.b[a]);this.b={}};
h.ca=function(a,b,c){c.preventDefault();b=xc(c.target,"button");if(!b||!b.disabled){if(b=this.g(a,"card-target"))a=document,a=q(b)?a.getElementById(b):b;b=this.s(a);this.g(b,"disabled")||(M(b,V(this,"active"))?(this.hide(a),O(b,V(this,"active"))):(this.show(a),N(b,V(this,"active"))))}};
h.show=function(a){Ah.o.show.call(this,a);var b=this.s(a),c=qa(a).toString();if(!mf(b,"click-outside-persists")){if(this.a[c])return;b=R(document,"click",u(this.da,this,a));var d=R(window,"blur",u(this.da,this,a));this.a[c]=[b,d]}a=R(window,"resize",u(this.Xa,this,a,void 0));this.b[c]=a};
h.hide=function(a){Ah.o.hide.call(this,a);a=qa(a).toString();var b=this.a[a];b&&(Jf(b),this.a[a]=null);if(b=this.b[a])Jf(b),delete this.b[a]};
h.da=function(a,b){var c="yt-uix"+(this.l?"-"+this.l:"")+"-card",d=null;b.target&&(d=J(b.target,c)||J(mh(b.target),c));(d=d||J(document.activeElement,c)||J(mh(document.activeElement),c))||this.hide(a)};
h.ba=function(a){(a=J(a,V(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Bh(){ah.call(this,"hovercard")}
w(Bh,ah);la(Bh);h=Bh.prototype;h.register=function(){W(this,"mouseenter",this.la,"target");W(this,"mouseleave",this.na,"target");W(this,"mouseenter",this.ma,"card");W(this,"mouseleave",this.oa,"card")};
h.unregister=function(){X(this,"mouseenter",this.la,"target");X(this,"mouseleave",this.na,"target");X(this,"mouseenter",this.ma,"card");X(this,"mouseleave",this.oa,"card")};
h.la=function(a){if(Ch!=a){Ch&&(this.hide(Ch),Ch=null);var b=u(this.show,this,a),c=parseInt(this.g(a,"delay-show"),10);b=Mf(b,-1<c?c:200);kf(a,"card-timer",b.toString());Ch=a;a.alt&&(kf(a,"card-alt",a.alt),a.alt="");a.title&&(kf(a,"card-title",a.title),a.title="")}};
h.na=function(a){var b=parseInt(this.g(a,"card-timer"),10);window.clearTimeout(b);this.s(a).isCardHidable=!0;b=parseInt(this.g(a,"delay-hide"),10);b=-1<b?b:200;Mf(u(this.Ka,this,a),b);if(b=this.g(a,"card-alt"))a.alt=b;if(b=this.g(a,"card-title"))a.title=b};
h.Ka=function(a){this.s(a).isCardHidable&&(this.hide(a),Ch=null)};
h.ma=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
h.oa=function(a){a&&this.hide(a.cardTargetNode)};
var Ch=null;function Dh(a,b,c,d,e,f){this.a=a;this.C=null;this.f=G("yt-dialog-fg",this.a)||this.a;if(a=G("yt-dialog-title",this.f)){var g="yt-dialog-title-"+qa(this.f);a.setAttribute("id",g);this.f.setAttribute("aria-labelledby",g)}this.f.setAttribute("tabindex","-1");this.ua=G("yt-dialog-focus-trap",this.a);this.W=!1;this.i=new Q;this.F=[];this.F.push(Hf(this.a,"click",u(this.Ra,this),"yt-dialog-dismiss"));this.F.push(R(this.ua,"focus",u(this.Ea,this),!0));Eh(this);this.za=b;this.Ba=c;this.Aa=d;this.ta=e;this.Ca=
f;this.B=this.v=null}
var Fh={LOADING:"loading",ab:"content",bb:"working"};function Gh(a,b){a.R()||a.i.subscribe("post-all",b)}
function Eh(a){a=G("yt-dialog-fg-content",a.a);var b=[];Wa(Fh,function(a){b.push("yt-dialog-show-"+a)});
Od(a,b);N(a,"yt-dialog-show-content")}
h=Dh.prototype;
h.show=function(){if(!this.R()){this.C=document.activeElement;if(!this.Aa){this.b||(this.b=C("yt-dialog-bg"),this.b||(this.b=document.createElement("div"),this.b.id="yt-dialog-bg",this.b.className="yt-dialog-bg",document.body.appendChild(this.b)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=dc(a).height,ec(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.b.style.height=c+"px";S(this.b)}this.ia();c=Hh(this);Ih(c);this.v=R(document,"keydown",u(this.La,this));c=this.a;d=eg("player-added",this.ia,this);kf(c,"player-ready-pubsub-key",d);this.Ba&&(this.B=R(document,"click",u(this.Ua,this)));S(this.a);this.f.setAttribute("tabindex","0");Jh(this);this.ta||N(document.body,"yt-dialog-active");Qg(Pg.j());bh(Ah.j());bh(Bh.j());hg("yt-ui-dialog-show-complete",this)}};
function Kh(){return Ba(D("yt-dialog"),function(a){return $f(a)})}
h.ia=function(){if(!this.Ca){var a=this.a;P(document.body,"hide-players",!0);a&&P(a,"preserve-players",!0)}};
function Hh(a){var b=ac(document,"iframe",null,a.a);x(b,function(a){var b=mf(a,"onload");b&&(b=t(b))&&R(a,"load",b);if(b=mf(a,"src"))a.src=b},a);
return Ea(b)}
function Ih(a){x(document.getElementsByTagName("iframe"),function(b){-1==ya(a,b)&&N(b,"iframe-hid")})}
function Lh(){x(D("iframe-hid"),function(a){O(a,"iframe-hid")})}
h.Ra=function(a){a=a.currentTarget;a.disabled||(a=mf(a,"action")||"",this.dismiss(a))};
h.dismiss=function(a){if(!this.R()){this.i.D("pre-all");this.i.D("pre-"+a);T(this.a);bh(Ah.j());bh(Bh.j());this.f.setAttribute("tabindex","-1");Kh()||(T(this.b),this.ta||O(document.body,"yt-dialog-active"),uf(),Lh());this.v&&(Jf(this.v),this.v=null);this.B&&(Jf(this.B),this.B=null);var b=this.a;if(b){var c=mf(b,"player-ready-pubsub-key");c&&(gg(c),b&&(b.dataset?delete b.dataset[lf("player-ready-pubsub-key")]:b.removeAttribute("data-player-ready-pubsub-key")))}this.i.D("post-all");hg("yt-ui-dialog-hide-complete",
this);"cancel"==a&&hg("yt-ui-dialog-cancelled",this);this.i&&this.i.D("post-"+a);this.C&&this.C.focus()}};
h.setTitle=function(a){H(G("yt-dialog-title",this.a),a)};
h.La=function(a){Mf(u(function(){this.za||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&M(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
h.Ua=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
h.R=function(){return this.W};
h.dispose=function(){$f(this.a)&&this.dismiss("dispose");Jf(this.F);this.F.length=0;Mf(u(function(){this.C=null},this),0);
this.ua=this.f=null;this.i.dispose();this.i=null;this.W=!0};
h.Ea=function(a){a.stopPropagation();Jh(this)};
function Jh(a){Mf(u(function(){this.f&&this.f.focus()},a),0)}
v("yt.ui.Dialog",Dh);function Mh(){U.call(this,"overlay");this.f=this.b=this.i=this.a=null}
w(Mh,U);la(Mh);h=Mh.prototype;h.register=function(){W(this,"click",this.V,"target");W(this,"click",this.hide,"close");Nh(this)};
h.unregister=function(){Mh.o.unregister.call(this);X(this,"click",this.V,"target");X(this,"click",this.hide,"close");this.f&&(gg(this.f),this.f=null);this.b&&(Jf(this.b),this.b=null)};
h.V=function(a){if(!this.a||!$f(this.a.a)){var b=this.s(a);a=Oh(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.g(b,"disable-shortcuts")||!1,d=!!this.g(b,"disable-outside-click-dismiss")||!1;this.a=new Dh(a,c);this.i=b;var e=G("yt-dialog-fg",a);if(e){var f=this.g(b,"overlay-class")||"",g=this.g(b,"overlay-style")||"default",m=this.g(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(V(this,g));f.push(V(this,m));Nd(e,f)}this.a.show();hg("yt-uix-kbd-nav-move-to",e||a);Nh(this);c||
d||(c=u(function(a){M(a.target,"yt-dialog-base")&&Ph(this)},this),this.b=R(G("yt-dialog-base",a),"click",c));
this.H(b,"overlay-shown");hg("yt-uix-overlay-shown",b)}}};
function Nh(a){a.f||(a.f=eg("yt-uix-overlay-hide",Qh));a.a&&Gh(a.a,function(){var a=Mh.j();a.i=null;a.a.dispose();a.a=null})}
function Ph(a){if(a.a){var b=a.i;a.a.dismiss("overlayhide");b&&a.H(b,"overlay-hidden");a.i=null;a.b&&(Jf(a.b),a.b=null);a.a=null}}
function Oh(a,b){var c;if(a)if(c=G("yt-dialog",a)){var d=C("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=J(b,"yt-dialog"));return c}
h.hide=function(a){a&&a.disabled||hg("yt-uix-overlay-hide")};
function Qh(){Ph(Mh.j())}
h.show=function(a){this.V(a)};
function Rh(){var a=Mh.j(),b=Sh();b&&N(b,V(a,"unclosable"))}
function Th(){var a=Mh.j(),b=Sh();b&&O(b,V(a,"unclosable"))}
function Sh(){var a=D("yt-dialog-fg");if(a)for(var b=0;b<a.length;b++){var c=J(a[b],"yt-dialog");if($f(c))return a[b]}return null}
;function Uh(){U.call(this,"char-counter")}
w(Uh,U);la(Uh);Uh.prototype.register=function(){W(this,"keydown",this.a,"input");W(this,"paste",this.a,"input");W(this,"cut",this.a,"input");W(this,"blur",this.a,"input")};
Uh.prototype.unregister=function(){X(this,"keydown",this.a,"input");X(this,"paste",this.a,"input");X(this,"cut",this.a,"input");X(this,"blur",this.a,"input")};
function Vh(){var a=Uh.j();x(D(V(a,"input")),function(a){this.a(a)},a)}
Uh.prototype.a=function(a){var b=this.s(a);if(b){var c="true"==this.g(b,"count-char-by-size"),d=parseInt(this.g(b,"char-limit"),10);isNaN(d)||0>=d||Mf(u(function(){var e="true"==this.g(b,"use-plaintext-length");Wh(a,c,e);var f=parseInt(this.g(b,"warn-at-chars-remaining"),10);isNaN(f)&&(f=0);var g=d-Xh(a,c,e);P(b,V(this,"maxed-out"),g<f);P(b,V(this,"maxed-out-singular"),1==Math.abs(g));"true"==this.g(b,"maxed-out-as-positive")&&(g=Math.abs(g));x(D(V(this,"remaining"),b),function(a){H(a,g)})},this),
0)}};
function Wh(a,b,c){var d=parseInt(a.getAttribute("maxlength"),10);if(!isNaN(d)){var e=Xh(a,b,c);if(b){if(e>d){b=a.value;c=b.length;var f=0;d=e-d;e="";do{e+=b[c-f];var g=unescape(encodeURIComponent(e)).length;f++}while(g<d);a.value=a.value.substring(0,c-f)}}else e>d&&(a.value=a.value.substring(0,d))}}
function Xh(a,b,c){a=a.value;c&&(a=ee(a));return b?unescape(encodeURIComponent(a)).length:a.length}
;function Yh(){U.call(this,"form-input")}
w(Yh,U);la(Yh);h=Yh.prototype;
h.register=function(){z&&!Bb(9)&&(W(this,"click",this.J,"checkbox"),W(this,"keypressed",this.J,"checkbox"),W(this,"click",this.S,"radio"),W(this,"keypressed",this.S,"radio"));z&&!Bb(10)&&W(this,"click",this.ha,"placeholder");W(this,"change",this.J,"checkbox");W(this,"blur",this.Y,"select-element");W(this,"change",this.K,"select-element");W(this,"keyup",this.K,"select-element");W(this,"focus",this.ea,"select-element");W(this,"keyup",this.L,"text");W(this,"keyup",this.L,"textarea");W(this,"keyup",this.L,
"bidi");W(this,"click",this.Ia,"reset")};
h.unregister=function(){z&&!Bb(9)&&(X(this,"click",this.J,"checkbox"),X(this,"keypressed",this.J,"checkbox"),X(this,"click",this.S,"radio"),X(this,"keypressed",this.S,"radio"));z&&!Bb(10)&&X(this,"click",this.ha,"placeholder");X(this,"change",this.J,"checkbox");X(this,"blur",this.Y,"select-element");X(this,"change",this.K,"select-element");X(this,"keyup",this.K,"select-element");X(this,"focus",this.ea,"select-element");X(this,"keyup",this.L,"text");X(this,"keyup",this.L,"textarea");X(this,"keyup",
this.L,"bidi");Yh.o.unregister.call(this)};
h.J=function(a){var b=J(a,V(this,"checkbox-container"));a.checked&&M(b,"partial")&&(a.checked=!1,a.indeterminate=!1,O(b,"partial"));P(b,"checked",a.checked)};
h.Wa=function(a){var b=J(a,V(this,"radio-container"));b&&P(b,"checked",a.checked)};
h.S=function(){Zh()};
h.L=function(a){var b=a.value;Hb.test(b)?a.dir="rtl":Gb.test(b)?a.dir="ltr":a.removeAttribute("dir");z&&!Bb(10)&&(b=J(a,V(this,"container")))&&P(b,V(this,"non-empty"),!!a.value)};
h.ha=function(a){(a=J(a,V(this,"container")))&&(a=G(V(this,"text"),a)||G(V(this,"textarea"),a))&&a.focus()};
h.ea=function(a){var b=J(a,V(this,"select"));N(b,"focused");this.K(a)};
h.Y=function(a){var b=J(a,V(this,"select"));O(b,"focused");this.K(a)};
h.K=function(a){var b=J(a,V(this,"select")),c=G(V(this,"select-value"),b),d=a.options[Math.max(a.selectedIndex,0)];if(d)for(""!=c.innerHTML&&d.innerHTML!=c.innerHTML&&this.H(a,"onchange-callback"),d=rf(d),jc(c);0<d.childNodes.length;)c.appendChild(d.childNodes[0]);P(b,V(this,"select-disabled"),a.disabled)};
h.Ia=function(){var a=Yh.j();x(D(V(a,"checkbox")),a.J,a);Zh();$h()};
function Zh(){var a=Yh.j();x(D(V(a,"radio")),a.Wa,a)}
function $h(){var a=Yh.j();x(D(V(a,"select-element")),a.K,a)}
;var ai=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};v("yt.uix.widgets_",ai);function bi(a){a=void 0===a?{}:a;oa(a)&&(a={callback:a});a._c&&a._c.jsl&&a._c.jsl.h||ab(a,{_c:{jsl:{h:xf("GAPI_HINT_PARAMS",void 0)}}});if(a.gapiHintOverride||xf("GAPI_HINT_OVERRIDE")){var b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=Nf(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&ab(a,{_c:{jsl:{h:b}}})}pd("",a)}
;function ci(){var a=di(),b=document.getElementById(a),c=b&&mf(b,"loaded");c||b&&!c||(b=ei(a,function(){mf(b,"loaded")||(kf(b,"loaded","true"),hg(a),Mf(va(jg,a),0))}))}
function ei(a,b){var c=document.createElement("SCRIPT");c.id=a;c.onload=function(){b&&setTimeout(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
Ub(c);var d=document.getElementsByTagName("head")[0]||document.body;d.insertBefore(c,d.firstChild);return c}
function di(){var a=document.createElement("a");var b=Ob("../https@www.google.com/recaptcha/api.js");a.href=Mb(b);a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Qa(a)}
;function fi(){bi(function(){window.spf?spf.script.load("../https@www.google.com/recaptcha/api.js","",void 0):ci()})}
;var gi=void 0,hi="",ii=!0,ji=["INFRINGES_MY_RIGHTS","A","Z"];function ki(a){return"options-renderer"+(a?"-"+a:"")}
function li(){return gi||(gi=G("options-renderer",G("yt-uix-overlay-fg-content")))}
function Z(a){return G(ki(a),li())}
function mi(a){return D(ki(a),li())}
function ni(){return Z("category-selected")}
function oi(){J(gi,"yt-uix-overlay-fg-content")?Mh.j().hide():(pi(2,5),pi(4,5))}
function qi(a){Z("button-continue").disabled=!!a}
function ri(a){Z("button-submit").disabled=!!a}
function si(a){Z("form-element-other")["other-report-reason"].value=a.target.value;qi()}
function ti(a){$h();var b=ki("category-selected"),c=ni();c&&O(c,b);a=J(a.target,ki("category"));N(a,b);ri();ui()}
function ui(){var a=ni(),b=G(ki("category-radio"),a).value,c=G(ki("category-label"),a).innerHTML,d=(a=a.getElementsByTagName("select")[0])?a.value:null,e=d?a.options[a.selectedIndex].innerHTML:null;H(Z("type"),e?c+" > "+e:c);c=Z("form-element");c.reason.value=b;c.sub_reason.value=d;vi();"INFRINGES_MY_RIGHTS"==b||"CAPTIONS_REPORT"==b||"A"==b&&"CAPTIONS_MISSING"==d||a&&!d?(T(Z("addition")),wi()):(S(Z("addition")),-1==ya(ji,b)?(S(Z("addition-legal-checkbox")),xi()&&yi()):wi())}
function vi(){var a=ni().getElementsByTagName("select")[0],b=a?a.value:null;!a||a&&b?ri():ri(!0)}
function wi(){var a=Z("is-legal-report");a&&(a.checked=!1);T(Z("addition-legal-checkbox"));zi()}
function Ai(){ri();ui()}
function Bi(){x(mi("confirmation-type"),function(a){H(a,vc(Z("type")))});
x(mi("confirmation-timestamp"),function(a){var b=mi("timestamp");H(a,b[0].value+":"+b[1].value)});
x(mi("confirmation-details"),function(a){H(a,Z("details").value)});
if(xi()){H(Z("confirmation-details"),Z("details-legal").value);var a=Z("issue-type-select").selectedIndex;H(Z("confirmation-issue-type"),Z("issue-type-select").options[a].innerHTML);a=Z("affiliation-select").selectedIndex;H(Z("confirmation-affiliation"),Z("affiliation-select").options[a].innerHTML);H(Z("confirmation-name"),Z("name").value);T(Z("confirmation-regular"));S(Z("confirmation-legal"))}else S(Z("confirmation-regular")),T(Z("confirmation-legal"))}
function Ci(a,b){var c=Z("form-element"),d=c.action;c=be(c);Rf(d,{format:"XML",method:"POST",postBody:c,onSuccess:a,onError:b})}
function pi(a,b){var c=ki("step"),d=li(),e=c+b;O(d,c+a);N(d,e)}
function Di(){pi(4,2);ui()}
function Ei(a,b){!1===a?T(Z("message-failed")):(Fi().innerText=b||hi,S(Z("message-failed")))}
function Fi(){return G("yt-alert-message",Z("message-failed"))}
function Gi(a){if(a.currentTarget.disabled)return!0;Ei(!1);if(ii)a=Z("form-element").reason.value,"INFRINGES_MY_RIGHTS"==a?(a=Z("form-element").sub_reason.value,"CLIENT_OTHER_LEGAL"==a?(Z("form-element-other")["category-other-radio"].value||qi(!0),pi(2,4)):a&&(Og(a),oi())):"CAPTIONS_REPORT"==a?(a=mf(C("CAPTIONS_REPORT"),"url"),Og(a),oi()):"A"==a?(a=Z("form-element").sub_reason.value,"CAPTIONS_MISSING"==a?(a=mf(C("CAPTIONS_MISSING"),"url"),Og(a),oi()):Hi()):Hi();else{var b=Z("form-element").reason.value;
"INFRINGES_MY_RIGHTS"==b?(b=Z("form-element").sub_reason.value,"CLIENT_OTHER_LEGAL"==b?Ng("reportingtool/legal"):Ng(b),a.preventDefault()):"CAPTIONS_REPORT"==b&&(b=mf(C("CAPTIONS_REPORT"),"url"),Ng(b),a.preventDefault())}return!1}
function Hi(){ri(!0);Rh();Ci(function(){ri();Th();Bi();qi();pi(2,3);"R"==Z("form-element").reason.value&&"10"==Z("form-element").sub_reason.value&&S("options-report-video-more-info")},function(a,b){ri();
Th();Ei(!0,b.error_message)})}
function Ii(a){!1===a?T(Z("message-captcha")):S(Z("message-captcha"))}
function Ji(){Ii(!1);Rh();qi(!0);var a=Z("form-captcha"),b=a.action;a=be(a);Rf(b,{method:"POST",postBody:a,onSuccess:function(){qi();Th();pi(1,2)},
onError:function(){qi();Th();Ii()}})}
function Ki(a){a.preventDefault();if(a.currentTarget.disabled)return!0;a=li();if(M(a,ki("step1")))Ji();else if(M(a,ki("step4"))){if(a=Z("form-element-other")["other-report-reason"].value)Og(a),oi()}else oi();return!1}
function Li(a){qi(!a.target.value.length)}
function Mi(a){a.target.value=a.target.value.replace(/\D/g,"")}
function Ni(a){Oi(a.target.name,a.target.value);Pi()}
function Qi(a){Oi("flag_desc_legal",a.target.value);Vh()}
function Ri(a){Oi("flag_desc",a.target.value);Vh();Pi()}
function Oi(a,b){for(var c=document.getElementsByName(a),d=0;d<c.length;d++)c[d].value=b}
function Si(){xi()?yi():zi()}
function yi(){S(Z("addition-legal-details"));T(Z("addition-details"));Pi()}
function zi(){T(Z("addition-legal-details"));S(Z("addition-details"));vi()}
function xi(){return Z("is-legal-report")&&Z("is-legal-report").checked}
function Pi(){!xi()||Z("issue-type-select").selectedIndex&&Z("affiliation-select").selectedIndex&&Z("details").value&&Z("timestamp-mins").value&&Z("timestamp-secs").value?ri():ri(!0)}
function Ti(){for(var a=[{w:"click",A:ti,l:"category-radio"},{w:"click",A:si,l:"category-other-radio"},{w:"click",A:Ki,l:"button-continue"},{w:"click",A:Gi,l:"button-submit"},{w:"click",A:Di,l:"button-back"},{w:"keyup",A:Li,l:"captcha"},{w:"keyup",A:Mi,l:"timestamp"},{w:"keyup",A:Ni,l:"timestamp"},{w:"keyup",A:Qi,l:"details"},{w:"keyup",A:Ri,l:"details-legal"},{w:"change",A:Pi,l:"issue-type"},{w:"change",A:Pi,l:"affiliation"},{w:"change",A:Si,l:"is-legal-report"}],b,c=li();a.length;)b=a.shift(),Hf(c,
b.w,b.A,ki(b.l));a=mi("type-select-input");for(b=0;b<a.length;b++)R(a[b],"change",Ai);a=Z("form-captcha");R(a,"submit",function(a){a.preventDefault();Ji()})}
var Ui=Uh.j(),Vi=V(Ui);Vi in ai||(Ui.register(),wg(Ui,"yt-uix-init-"+Vi,Ui.init),wg(Ui,"yt-uix-dispose-"+Vi,Ui.dispose),ai[Vi]=Ui);v("yt.www.report.reportvideo.init",function(a){ii=!!a;gi=void 0;hi=Fi().innerText;Ti();fi()});
v("reportvideo_recaptchaDone",function(){qi()});
v("reportvideo_recaptchaExpired",function(){qi(!0)});}).call(this);

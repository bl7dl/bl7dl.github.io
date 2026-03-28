(function(){var aa=this;function h(a,b){var c=a.split("."),d=aa;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function k(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
;function ba(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e=k(d);if("array"==e||"object"==e&&"number"==typeof d.length){e=a.length||0;var f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<m.length;f++)c=m[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var r=window,v=document,ca=r.location;function da(){}
var ea=/\[native code\]/;function z(a,b,c){return a[b]=a[b]||c}
function fa(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function B(){var a;if((a=Object.create)&&ea.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var C=z(r,"gapi",{});var D;D=z(r,"___jsl",B());z(D,"I",0);z(D,"hel",10);function E(){var a=ca.href;if(D.dpo)var b=D.h;else{b=D.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function ha(a){var b=z(D,"PQ",[]);D.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function F(a){return z(z(D,"H",B()),a,B())}
;var G=z(D,"perf",B());z(G,"g",B());var ia=z(G,"i",B());z(G,"r",[]);B();B();function I(a,b,c){b&&0<b.length&&(b=J(b),c&&0<c.length&&(b+="___"+J(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=z(ia,"_p",B()),z(b,c,B())[a]=(new Date).getTime(),b=G.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function J(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var K=B(),M=[];function N(a){throw Error("Bad hint"+(a?": "+a:""));}
M.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?D[b]=z(D,b,[]).concat(c):z(D,b,c)}if(b=a.u)a=z(D,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var ja=/^(\/[a-zA-Z0-9_\-]+)+$/,O=[/\/amp\//,/\/amp$/,/^\/amp$/],ka=/^[a-zA-Z0-9\-_\.,!]+$/,la=/^gapi\.loaded_[0-9]+$/,ma=/^[a-zA-Z0-9,._-]+$/;function na(a,b,c,d){var e=a.split(";"),f=e.shift(),g=K[f],l=null;g?l=g(e,b,c,d):N("no hint processor for: "+f);l||N("failed to generate load url");b=l;c=b.match(oa);(d=b.match(pa))&&1===d.length&&qa.test(b)&&c&&1===c.length||N("failed sanity: "+a);return l}
function ra(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=sa(a);la.test(c)||N("invalid_callback");b=P(b);d=d&&d.length?P(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"../../default.htm"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","../../rt=j/sv=1/d=1/ed=1",a.a?"/am="+e(a.a):"",a.c?"/rs="+e(a.c):"",a.f?"/t="+e(a.f):"","/cb=",e(c)].join("")}
function sa(a){"../../default.htm"!==a.charAt(0)&&N("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))N("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),l=decodeURIComponent(f[1]);2==f.length&&g&&l&&(a[g]=a[g]||l)}b="../../"+c.join("/");ja.test(b)||N("invalid_prefix");c=0;for(d=O.length;c<d;++c)O[c].test(b)&&N("invalid_prefix");c=Q(a,"k",
!0);d=Q(a,"am");e=Q(a,"rs");a=Q(a,"t");return{pathPrefix:b,version:c,a:d,c:e,f:a}}
function P(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");ma.test(e)&&b.push(e)}return b.join(",")}
function Q(a,b,c){a=a[b];!a&&c&&N("missing: "+b);if(a){if(ka.test(a))return a;N("invalid: "+b)}return null}
var qa=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,pa=/\/cb=/g,oa=/\/\//g;function ta(){var a=E();if(!a)throw Error("Bad hint");return a}
K.m=function(a,b,c,d){(a=a[0])||N("missing_hint");return"../../../https@apis.google.com"+ra(a,b,c,d)};
var R=decodeURI("%73cript"),S=/^[-+_0-9\/A-Za-z]+={0,2}$/;function T(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function U(){var a=D.nonce;return void 0!==a?a&&a===String(a)&&a.match(S)?a:D.nonce=null:v.querySelector?(a=v.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(S)?D.nonce=a:D.nonce=null):null:null}
function ua(a){if("loading"!=v.readyState)V(a);else{var b=U(),c="";null!==b&&(c=' nonce="'+b+'"');v.write("<"+R+' src="'+encodeURI(a)+'"'+c+"></"+R+">")}}
function V(a){var b=v.createElement(R);b.setAttribute("src",a);a=U();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=v.getElementsByTagName(R)[0])?a.parentNode.insertBefore(b,a):(v.head||v.body||v.documentElement).appendChild(b)}
function va(a,b){var c=b&&b._c;if(c)for(var d=0;d<M.length;d++){var e=M[d][0],f=M[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function wa(a,b,c){W(function(){var c=b===E()?z(C,"_",B()):B();c=z(F(b),"_",c);a(c)},c)}
function X(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);va(a,c);var d=a?a.split(":"):[],e=c.h||ta(),f=z(D,"ah",B());if(f["::"]&&d.length){for(var g=[],l=null;l=d.shift();){var n=l.split(".");n=f[l]||f[n[1]&&"ns:"+n[0]||""]||e;var w=g.length&&g[g.length-1]||null,x=w;w&&w.hint==n||(x={hint:n,b:[]},g.push(x));x.b.push(l)}var A=g.length;if(1<A){var y=c.callback;y&&(c.callback=function(){0==--A&&y()})}for(;d=g.shift();)Y(d.b,c,d.hint)}else Y(d||[],c,e)}
function Y(a,b,c){function d(a,b){if(A)return 0;r.clearTimeout(x);y.push.apply(y,q);var d=((C||{}).config||{}).update;d?d(f):f&&z(D,"cu",[]).push(f);if(b){I("me0",a,H);try{wa(b,c,w)}finally{I("me1",a,H)}}return 1}
a=fa(a)||[];var e=b.callback,f=b.config,g=b.timeout,l=b.ontimeout,n=b.onerror,w=void 0;"function"==typeof n&&(w=n);var x=null,A=!1;if(g&&!l||!g&&l)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";n=z(F(c),"r",[]).sort();var y=z(F(c),"L",[]).sort(),H=[].concat(n);0<g&&(x=r.setTimeout(function(){A=!0;l()},g));
var q=T(a,y);if(q.length){q=T(a,n);var t=z(D,"CP",[]),u=t.length;t[u]=function(a){function b(){var a=t[u+1];a&&a()}
function c(b){t[u]=null;d(q,a)&&ha(function(){e&&e();b()})}
if(!a)return 0;I("ml1",q,H);0<u&&t[u-1]?t[u]=function(){c(b)}:c(b)};
if(q.length){var L="loaded_"+D.I++;C[L]=function(a){t[u](a);C[L]=null};
a=na(c,q,"gapi."+L,n);n.push.apply(n,q);I("ml0",q,H);b.sync||r.___gapisync?ua(a):V(a)}else t[u](da)}else d(q)&&e&&e()}
function W(a,b){if(D.hee&&0<D.hel)try{return a()}catch(c){b&&b(c),D.hel--,X("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
C.load=function(a,b){return W(function(){return X(a,b)})};var Z=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};h("yt.config_",Z);h("yt.gapi.load",function(a,b,c){b=void 0===b?{}:b;"function"==k(b)&&(b={callback:b});c||b._c&&b._c.jsl&&b._c.jsl.h||p(b,{_c:{jsl:{h:"GAPI_HINT_PARAMS"in Z?Z.GAPI_HINT_PARAMS:void 0}}});(c=b.gapiHintOverride)||(c="GAPI_HINT_OVERRIDE"in Z?Z.GAPI_HINT_OVERRIDE:void 0);if(c){c=document.location.href;if(-1!=c.indexOf("?")){c=(c||"").split("#")[0];c=c.split("?",2);c=1<c.length?c[1]:c[0];"?"==c.charAt(0)&&(c=c.substr(1));c=c.split("&");for(var d={},e=0,f=c.length;e<f;e++){var g=c[e].split("=");if(1==g.length&&
g[0]||2==g.length){var l=decodeURIComponent((g[0]||"").replace(/\+/g," "));g=decodeURIComponent((g[1]||"").replace(/\+/g," "));l in d?"array"==k(d[l])?ba(d[l],g):d[l]=[d[l],g]:d[l]=g}}c=d}else c={};(c=c.gapi_jsh)&&p(b,{_c:{jsl:{h:c}}})}X(a,b)});}).call(this);

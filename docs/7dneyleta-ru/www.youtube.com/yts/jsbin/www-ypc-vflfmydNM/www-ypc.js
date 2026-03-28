(function(){var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={sb:!0},ea={};try{ea.__proto__=da;ca=ea.sb;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function ha(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.C=b.prototype}
var ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ka(a,b){if(b){for(var c=ja,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ia(c,d,{configurable:!0,writable:!0,value:f})}}
function la(){la=function(){};
ja.Symbol||(ja.Symbol=ma)}
var ma=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function na(){la();var a=ja.Symbol.iterator;a||(a=ja.Symbol.iterator=ja.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return oa(this)}});
na=function(){}}
function oa(a){var b=0;return pa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function pa(a){na();a={next:a};a[ja.Symbol.iterator]=function(){return this};
return a}
ka("Array.from",function(a){return a?a:function(a,c,d){na();c=null!=c?c:function(a){return a};
var b=[],f=a[Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var g=0;g<f;g++)b.push(c.call(d,a[g]))}return b}});
function qa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
ka("WeakMap",function(a){function b(a){this.b=(f+=Math.random()+1).toString();if(a){la();na();na();var b=a[Symbol.iterator];for(a=b?b.call(a):oa(a);!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){qa(a,e)||ia(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(m){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!qa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.b]=b;return this};
b.prototype.get=function(a){return qa(a,e)?a[e][this.b]:void 0};
b.prototype.has=function(a){return qa(a,e)&&qa(a[e],this.b)};
b.prototype["delete"]=function(a){return qa(a,e)&&qa(a[e],this.b)?delete a[e][this.b]:!1};
return b});
var ra=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
ka("Reflect.construct",function(){return ra});
var sa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)qa(d,e)&&(a[e]=d[e])}return a};
ka("Object.assign",function(a){return a||sa});
var n=this;function p(a){return void 0!==a}
function t(a){return"string"==typeof a}
var ta=/^[\w+/_-]+[=]{0,2}$/,ua=null;function u(a,b){for(var c=a.split("."),d=b||n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function va(){}
function wa(a){a.Ea=void 0;a.w=function(){return a.Ea?a.Ea:a.Ea=new a}}
function xa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ya(a){return"array"==xa(a)}
function za(a){var b=xa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Aa(a){return"function"==xa(a)}
function Ba(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ca(a){return a[Da]||(a[Da]=++Ea)}
var Da="closure_uid_"+(1E9*Math.random()>>>0),Ea=0;function Fa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=Fa:w=Ga;return w.apply(null,arguments)}
function Ha(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var Ia=Date.now||function(){return+new Date};
function x(a,b){var c=a.split("."),d=n;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&p(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function A(a,b){function c(){}
c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Xc=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function Ja(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Ka(a){var b=0,c;for(c in a)b++;return b}
function La(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Ma(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function Na(a){var b=Oa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Pa(a){for(var b in a)return!1;return!0}
function Qa(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ra(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function Sa(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Ta="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ua(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ta.length;f++)c=Ta[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function Va(a){var b=arguments.length;if(1==b&&ya(arguments[0]))return Va.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;function Wa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Wa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(Wa,Error);Wa.prototype.name="CustomError";var Xa;var Ya=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(t(a))return t(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Za=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=t(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},$a=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=t(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},ab=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function bb(a,b){a:{var c=a.length;for(var d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:t(a)?a.charAt(c):a[c]}
function cb(a,b){return 0<=Ya(a,b)}
function db(a,b){var c=Ya(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function eb(a){return Array.prototype.concat.apply([],arguments)}
function fb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function gb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(za(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function hb(a,b,c,d){Array.prototype.splice.apply(a,ib(arguments,1))}
function ib(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function jb(a,b){return a>b?1:a<b?-1:0}
function kb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(ya(d))for(var e=0;e<d.length;e+=8192)for(var f=kb.apply(null,ib(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
function lb(a,b){return eb.apply([],$a(a,b,void 0))}
;function mb(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}
var nb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function ob(a){if(!pb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(qb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(rb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(sb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(tb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ub,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(vb,"&#0;"));return a}
var qb=/&/g,rb=/</g,sb=/>/g,tb=/"/g,ub=/'/g,vb=/\x00/g,pb=/[\x00&<>"']/;function wb(a){return-1!=a.indexOf("&")?"document"in n?xb(a):yb(a):a}
function xb(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'};var c=n.document.createElement("div");return a.replace(zb,function(a,e){var d=b[a];if(d)return d;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(d=String.fromCharCode(g))}d||(c.innerHTML=a+" ",d=c.firstChild.nodeValue.slice(0,-1));return b[a]=d})}
function yb(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var b=Number("0"+c.substr(1));if(!isNaN(b))return String.fromCharCode(b)}return a}})}
var zb=/&([^;\s<&]+);?/g;function Ab(a,b){for(var c=0,d=nb(String(a)).split("."),e=nb(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",l=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;c=Bb(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||Bb(0==h[2].length,0==l[2].length)||Bb(h[2],l[2]);h=h[3];l=l[3]}while(0==c)}return c}
function Bb(a,b){return a<b?-1:a>b?1:0}
function Cb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Db(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function Eb(a){var b=t(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var Fb;a:{var Gb=n.navigator;if(Gb){var Hb=Gb.userAgent;if(Hb){Fb=Hb;break a}}Fb=""}function D(a){return-1!=Fb.indexOf(a)}
;function Ib(){return D("Safari")&&!(Jb()||D("Coast")||D("Opera")||D("Edge")||D("Silk")||D("Android"))}
function Jb(){return(D("Chrome")||D("CriOS"))&&!D("Edge")}
function Kb(){return D("Android")&&!(Jb()||D("Firefox")||D("Opera")||D("Silk"))}
;function Lb(){return D("iPhone")&&!D("iPod")&&!D("iPad")}
function Mb(){return Lb()||D("iPad")||D("iPod")}
;function Nb(a){Nb[" "](a);return a}
Nb[" "]=va;function Ob(a,b){var c=Qb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Rb=D("Opera"),E=D("Trident")||D("MSIE"),Sb=D("Edge"),Tb=Sb||E,Ub=D("Gecko")&&!(-1!=Fb.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),Vb=-1!=Fb.toLowerCase().indexOf("webkit")&&!D("Edge"),Wb=D("Macintosh"),Xb=D("Windows"),Yb=D("Android"),Zb=Lb(),$b=D("iPad"),ac=D("iPod"),bc=Mb();function cc(){var a=n.document;return a?a.documentMode:void 0}
var dc;a:{var ec="",fc=function(){var a=Fb;if(Ub)return/rv:([^\);]+)(\)|;)/.exec(a);if(Sb)return/Edge\/([\d\.]+)/.exec(a);if(E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Vb)return/WebKit\/(\S+)/.exec(a);if(Rb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
fc&&(ec=fc?fc[1]:"");if(E){var gc=cc();if(null!=gc&&gc>parseFloat(ec)){dc=String(gc);break a}}dc=ec}var hc=dc,Qb={};function ic(a){return Ob(a,function(){return 0<=Ab(hc,a)})}
var jc;var kc=n.document;jc=kc&&E?cc()||("CSS1Compat"==kc.compatMode?parseInt(hc,10):5):void 0;var lc=!E||9<=Number(jc),mc=!Ub&&!E||E&&9<=Number(jc)||Ub&&ic("1.9.1"),nc=E&&!ic("9");function oc(){this.b="";this.f=pc}
oc.prototype.Z=!0;oc.prototype.Y=function(){return this.b};
oc.prototype.toString=function(){return"Const{"+this.b+"}"};
function qc(a){return a instanceof oc&&a.constructor===oc&&a.f===pc?a.b:"type_error:Const"}
var pc={};function rc(a){var b=new oc;b.b=a;return b}
rc("");function sc(){this.b="";this.f=tc}
sc.prototype.Z=!0;sc.prototype.Y=function(){return this.b};
sc.prototype.Da=!0;sc.prototype.Ca=function(){return 1};
function uc(a){if(a instanceof sc&&a.constructor===sc&&a.f===tc)return a.b;xa(a);return"type_error:TrustedResourceUrl"}
var tc={};function vc(a){var b=new sc;b.b=a;return b}
;function wc(){this.b="";this.f=xc}
wc.prototype.Z=!0;wc.prototype.Y=function(){return this.b};
wc.prototype.Da=!0;wc.prototype.Ca=function(){return 1};
function yc(a){if(a instanceof wc&&a.constructor===wc&&a.f===xc)return a.b;xa(a);return"type_error:SafeUrl"}
var zc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Ac(a){if(a instanceof wc)return a;a=a.Z?a.Y():String(a);zc.test(a)||(a="about:invalid#zClosurez");return Bc(a)}
function Cc(a){if(a instanceof wc)return a;a=a.Z?a.Y():String(a);zc.test(a)||(a="about:invalid#zClosurez");return Bc(a)}
var xc={};function Bc(a){var b=new wc;b.b=a;return b}
Bc("about:blank");function Dc(){this.b="";this.f=Ec}
Dc.prototype.Z=!0;var Ec={};Dc.prototype.Y=function(){return this.b};
function Fc(a){if(a instanceof Dc&&a.constructor===Dc&&a.f===Ec)return a.b;xa(a);return"type_error:SafeStyle"}
function Gc(a){var b=new Dc;b.b=a;return b}
var Hc=Gc("");function Ic(a){if(a instanceof wc)a='url("'+yc(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';else if(a instanceof oc)a=qc(a);else{a=String(a);var b=a.replace(Jc,"$1").replace(Kc,"url");if(b=Lc.test(b)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c}a=b?Mc(a):"zClosurez"}return a}
var Lc=/^[-,."'%_!# a-zA-Z0-9]+$/,Kc=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),Jc=RegExp("\\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-0-9a-z.%, ]+\\)","g");function Mc(a){return a.replace(Kc,function(a,c,d,e){var b="";d=d.replace(/^(['"])(.*)\1$/,function(a,c,d){b=c;return d});
a=Ac(d).Y();return c+b+a+b+e})}
;function Nc(){this.b="";this.f=Oc}
Nc.prototype.Z=!0;var Oc={};
function Pc(a,b){if(-1!=a.indexOf("<"))throw Error("Selector does not allow '<', got: "+a);var c=a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+a);a:{for(var d={"(":")","[":"]"},e=[],f=0;f<c.length;f++){var g=c[f];if(d[g])e.push(d[g]);else{b:{var h=void 0;for(h in d)if(d[h]==g){h=!0;break b}h=!1}if(h&&e.pop()!=g){c=!1;break a}}}c=0==e.length}if(!c)throw Error("() and [] in selector must be balanced, got: "+
a);if(!(b instanceof Dc)){c=b;d="";for(var l in c){if(!/^[-_a-zA-Z0-9]+$/.test(l))throw Error("Name allows only [-_a-zA-Z0-9], got: "+l);e=c[l];null!=e&&(e=ya(e)?$a(e,Ic).join(" "):Ic(e),d+=l+":"+e+";")}b=d?Gc(d):Hc}l=a+"{"+Fc(b)+"}";return Qc(l)}
function Rc(a){function b(a){ya(a)?B(a,b):c+=Sc(a)}
var c="";B(arguments,b);return Qc(c)}
Nc.prototype.Y=function(){return this.b};
function Sc(a){if(a instanceof Nc&&a.constructor===Nc&&a.f===Oc)return a.b;xa(a);return"type_error:SafeStyleSheet"}
function Qc(a){var b=new Nc;b.b=a;return b}
var Tc=Qc("");function Uc(){this.b="";this.g=Vc;this.f=null}
Uc.prototype.Da=!0;Uc.prototype.Ca=function(){return this.f};
Uc.prototype.Z=!0;Uc.prototype.Y=function(){return this.b};
function Wc(a){if(a instanceof Uc&&a.constructor===Uc&&a.g===Vc)return a.b;xa(a);return"type_error:SafeHtml"}
var Vc={};function Xc(a,b){var c=new Uc;c.b=a;c.f=b;return c}
Xc("<!DOCTYPE html>",0);Xc("",0);Xc("<br>",0);function Yc(a,b){var c=b instanceof wc?b:Cc(b);a.href=yc(c)}
function Zc(a,b){a.src=uc(b);var c;if(null===ua){a:{if((c=n.document.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&ta.test(c))break a;c=null}ua=c||""}if(c=ua)a.nonce=c}
;function F(a,b){this.x=p(a)?a:0;this.y=p(b)?b:0}
F.prototype.equals=function(a){return a instanceof F&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function $c(a,b){return new F(a.x-b.x,a.y-b.y)}
F.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
F.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
F.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function ad(a,b){this.width=a;this.height=b}
k=ad.prototype;k.ub=function(){return this.width*this.height};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!this.ub()};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function bd(a){return a?new cd(dd(a)):Xa||(Xa=new cd)}
function G(a){return t(a)?document.getElementById(a):a}
function ed(a){var b=document;return t(a)?b.getElementById(a):a}
function H(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):fd(document,"*",a,b)}
function I(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):fd(c,"*",a,b)[0]||null}return c||null}
function gd(a){return I("ypc-tip-custom-amount-input-container",a)}
function fd(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&cb(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function hd(a,b){Ja(b,function(b,d){b&&b.Z&&(b=b.Y());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:id.hasOwnProperty(d)?a.setAttribute(id[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var id={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function jd(a){a=a.document;a=kd(a)?a.documentElement:a.body;return new ad(a.clientWidth,a.clientHeight)}
function ld(a){var b=md(a);a=nd(a);return E&&ic("10")&&a.pageYOffset!=b.scrollTop?new F(b.scrollLeft,b.scrollTop):new F(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function md(a){return a.scrollingElement?a.scrollingElement:!Vb&&kd(a)?a.documentElement:a.body||a.documentElement}
function nd(a){return a.parentWindow||a.defaultView}
function od(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!lc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',ob(g.name),'"');if(g.type){f.push(' type="',ob(g.type),'"');var h={};Ua(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(t(g)?f.className=g:ya(g)?f.className=g.join(" "):hd(f,g));2<d.length&&pd(e,f,d);return f}
function pd(a,b,c){function d(c){c&&b.appendChild(t(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];!za(f)||Ba(f)&&0<f.nodeType?d(f):B(qd(f)?fb(f):f,d)}}
function rd(a,b){return a.createElement(String(b))}
function kd(a){return"CSS1Compat"==a.compatMode}
function sd(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function td(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function ud(a){return mc&&void 0!=a.children?a.children:Za(a.childNodes,function(a){return 1==a.nodeType})}
function vd(a){return Ba(a)&&1==a.nodeType}
function wd(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function dd(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function xd(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else sd(a),a.appendChild(dd(a).createTextNode(String(b)))}
function yd(a,b){var c=[];return zd(a,b,c,!0)?c[0]:void 0}
function zd(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||zd(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Ad={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Bd={IMG:" ",BR:"\n"};function Cd(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Dd(a)||Ed(a)):Dd(a)&&Ed(a))&&E){var c;!Aa(a.getBoundingClientRect)||E&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Dd(a){return E&&!ic("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Ed(a){a=a.tabIndex;return"number"==typeof a&&0<=a&&32768>a}
function Fd(a){if(nc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Gd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");nc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Gd(a,b,c){if(!(a.nodeName in Ad))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Bd)b.push(Bd[a.nodeName]);else for(a=a.firstChild;a;)Gd(a,b,c),a=a.nextSibling}
function qd(a){if(a&&"number"==typeof a.length){if(Ba(a))return"function"==typeof a.item||"string"==typeof a.item;if(Aa(a))return"function"==typeof a.item}return!1}
function Hd(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Id(a,function(a){return(!e||a.nodeName==e)&&(!c||t(a.className)&&cb(a.className.split(/\s+/),c))},d)}
function J(a,b){return Hd(a,null,b,void 0)}
function Id(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function cd(a){this.b=a||n.document||document}
cd.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
cd.prototype.createElement=function(a){return rd(this.b,a)};
cd.prototype.appendChild=function(a,b){a.appendChild(b)};
cd.prototype.isElement=vd;function Jd(a,b){this.g=a;this.i=b;this.f=0;this.b=null}
Jd.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function Kd(a,b){a.i(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;var Ld=function(a){return function(){return a}}(null);function Md(a){n.setTimeout(function(){throw a;},0)}
var Nd;
function Od(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.La;c.La=null;a()}};
return function(a){d.next={La:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function Pd(){this.f=this.b=null}
var Rd=new Jd(function(){return new Qd},function(a){a.reset()});
Pd.prototype.add=function(a,b){var c=Rd.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
Pd.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Qd(){this.next=this.scope=this.b=null}
Qd.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Qd.prototype.reset=function(){this.next=this.scope=this.b=null};function Sd(a,b){Td||Ud();Vd||(Td(),Vd=!0);Wd.add(a,b)}
var Td;function Ud(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve(void 0);Td=function(){a.then(Xd)}}else Td=function(){var a=Xd;
!Aa(n.setImmediate)||n.Window&&n.Window.prototype&&!D("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(Nd||(Nd=Od()),Nd(a)):n.setImmediate(a)}}
var Vd=!1,Wd=new Pd;function Xd(){for(var a;a=Wd.remove();){try{a.b.call(a.scope)}catch(b){Md(b)}Kd(Rd,a)}Vd=!1}
;function Yd(a){this.b=0;this.H=void 0;this.i=this.f=this.g=null;this.j=this.D=!1;if(a!=va)try{var b=this;a.call(void 0,function(a){Zd(b,2,a)},function(a){Zd(b,3,a)})}catch(c){Zd(this,3,c)}}
function $d(){this.next=this.context=this.onRejected=this.f=this.b=null;this.g=!1}
$d.prototype.reset=function(){this.context=this.onRejected=this.f=this.b=null;this.g=!1};
var ae=new Jd(function(){return new $d},function(a){a.reset()});
function be(a,b,c){var d=ae.get();d.f=a;d.onRejected=b;d.context=c;return d}
function ce(a){if(a instanceof Yd)return a;var b=new Yd(va);Zd(b,2,a);return b}
Yd.prototype.then=function(a,b,c){return de(this,Aa(a)?a:null,Aa(b)?b:null,c)};
Yd.prototype.then=Yd.prototype.then;Yd.prototype.$goog_Thenable=!0;Yd.prototype.cancel=function(a){0==this.b&&Sd(function(){var b=new ee(a);fe(this,b)},this)};
function fe(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.g||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?fe(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):ge(c),he(c,e,3,b)))}a.g=null}else Zd(a,3,b)}
function ie(a,b){a.f||2!=a.b&&3!=a.b||je(a);a.i?a.i.next=b:a.f=b;a.i=b}
function de(a,b,c,d){var e=be(null,null,null);e.b=new Yd(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof ee?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;ie(a,e);return e.b}
Yd.prototype.J=function(a){this.b=0;Zd(this,2,a)};
Yd.prototype.N=function(a){this.b=0;Zd(this,3,a)};
function Zd(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.J,f=a.N;if(d instanceof Yd){ie(d,be(e||va,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ba(d))try{var l=d.then;if(Aa(l)){ke(d,l,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.H=c,a.b=b,a.g=null,je(a),3!=b||c instanceof ee||le(a,c))}}
function ke(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function je(a){a.D||(a.D=!0,Sd(a.l,a))}
function ge(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
Yd.prototype.l=function(){for(var a;a=ge(this);)he(this,a,this.b,this.H);this.D=!1};
function he(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,me(b,c,d);else try{b.g?b.f.call(b.context):me(b,c,d)}catch(e){ne.call(null,e)}Kd(ae,b)}
function me(a,b,c){2==b?a.f.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function le(a,b){a.j=!0;Sd(function(){a.j&&ne.call(null,b)})}
var ne=Md;function ee(a){Wa.call(this,a)}
A(ee,Wa);ee.prototype.name="cancel";function oe(a){this.b=a;a.then(w(function(){},this))}
function pe(a,b,c){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];e=qe(a,b).then(function(a){return a.apply(null,d)});
return new oe(e)}
var re={};function qe(a,b){var c=re[b];if(c)return c;c=(c=u(b))?ce(c):(new Yd(function(b,c){var d=(new cd(document)).createElement("SCRIPT");d.async=!0;Zc(d,vc(qc(a)));d.onload=d.onreadystatechange=function(){d.readyState&&"loaded"!=d.readyState&&"complete"!=d.readyState||b()};
d.onerror=c;(document.head||document.getElementsByTagName("head")[0]).appendChild(d)})).then(function(){var c=u(b);
if(!c)throw Error("Failed to load "+b+" from "+a);return c});
return re[b]=c}
function se(a,b,c){a.b.then(function(a){var d=a[b];if(!d)throw Error("Method not found: "+b);return d.apply(a,c)})}
;function te(a){this.b=a}
var ue=rc("../../../https@www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");te.prototype.g=function(a){se(this.b,"startHelp",arguments)};
te.prototype.f=function(a){se(this.b,"loadChatSupport",arguments)};function ve(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var we=window,xe=document,ye=we.location;function ze(){}
var Ae=/\[native code\]/;function K(a,b,c){return a[b]=a[b]||c}
function Be(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Ce(){var a;if((a=Object.create)&&Ae.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var De=K(we,"gapi",{});var L;L=K(we,"___jsl",Ce());K(L,"I",0);K(L,"hel",10);function Ee(){var a=ye.href;if(L.dpo)var b=L.h;else{b=L.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Fe(a){var b=K(L,"PQ",[]);L.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Ge(a){return K(K(L,"H",Ce()),a,Ce())}
;function He(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var q=1518500249}else m=d^f^h,q=1859775393;else 60>c?(m=d&f|h&(d|f),q=2400959708):(m=d^f^h,q=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+q+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,q+=64;for(;d<c;)if(f[m++]=a[d++],q++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,q+=64}
function d(){var a=[],d=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,q;a();return{reset:a,update:c,digest:d,wb:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Ie(a,b,c){var d=[],e=[];if(1==(ya(c)?2:1))return e=[b,a],B(d,function(a){e.push(a)}),Je(e.join(" "));
var f=[],g=[];B(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];B(d,function(a){e.push(a)});
a=Je(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Je(a){var b=He();b.update(a);return b.wb().toLowerCase()}
;function Ke(a){this.b=a||{cookie:""}}
k=Ke.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Ia()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=nb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=nb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Le=new Ke("undefined"==typeof document?null:document);Le.f=3950;function Me(a){var b=ve(String(n.location.href)),c=n.__OVERRIDE_SID;null==c&&(c=(new Ke(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==b&&(b=(new Ke(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(n.location.href);return d&&b&&c?[c,Ie(ve(d),b,a||null)].join(" "):null}return null}
;var Ne=K(L,"perf",Ce());K(Ne,"g",Ce());var Oe=K(Ne,"i",Ce());K(Ne,"r",[]);Ce();Ce();function Pe(a,b,c){b&&0<b.length&&(b=Qe(b),c&&0<c.length&&(b+="___"+Qe(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=K(Oe,"_p",Ce()),K(b,c,Ce())[a]=(new Date).getTime(),b=Ne.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Qe(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var Re=Ce(),Se=[];function Te(a){throw Error("Bad hint"+(a?": "+a:""));}
Se.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?L[b]=K(L,b,[]).concat(c):K(L,b,c)}if(b=a.u)a=K(L,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Ue=/^(\/[a-zA-Z0-9_\-]+)+$/,Ve=[/\/amp\//,/\/amp$/,/^\/amp$/],Ye=/^[a-zA-Z0-9\-_\.,!]+$/,Ze=/^gapi\.loaded_[0-9]+$/,$e=/^[a-zA-Z0-9,._-]+$/;function af(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Re[f],h=null;g?h=g(e,b,c,d):Te("no hint processor for: "+f);h||Te("failed to generate load url");b=h;c=b.match(bf);(d=b.match(cf))&&1===d.length&&df.test(b)&&c&&1===c.length||Te("failed sanity: "+a);return h}
function ef(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=ff(a);Ze.test(c)||Te("invalid_callback");b=gf(b);d=d&&d.length?gf(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"../../default.htm"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","../../rt=j/sv=1/d=1/ed=1",a.Ja?"/am="+e(a.Ja):"",a.hb?"/rs="+e(a.hb):"",a.ob?"/t="+e(a.ob):"","/cb=",e(c)].join("")}
function ff(a){"../../default.htm"!==a.charAt(0)&&Te("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Te("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="../../"+c.join("/");Ue.test(b)||Te("invalid_prefix");c=0;for(d=Ve.length;c<d;++c)Ve[c].test(b)&&Te("invalid_prefix");c=hf(a,
"k",!0);d=hf(a,"am");e=hf(a,"rs");a=hf(a,"t");return{pathPrefix:b,version:c,Ja:d,hb:e,ob:a}}
function gf(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");$e.test(e)&&b.push(e)}return b.join(",")}
function hf(a,b,c){a=a[b];!a&&c&&Te("missing: "+b);if(a){if(Ye.test(a))return a;Te("invalid: "+b)}return null}
var df=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,cf=/\/cb=/g,bf=/\/\//g;function jf(){var a=Ee();if(!a)throw Error("Bad hint");return a}
Re.m=function(a,b,c,d){(a=a[0])||Te("missing_hint");return"../../../https@apis.google.com"+ef(a,b,c,d)};
var kf=decodeURI("%73cript"),lf=/^[-+_0-9\/A-Za-z]+={0,2}$/;function mf(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function nf(){var a=L.nonce;return void 0!==a?a&&a===String(a)&&a.match(lf)?a:L.nonce=null:xe.querySelector?(a=xe.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(lf)?L.nonce=a:L.nonce=null):null:null}
function of(a){if("loading"!=xe.readyState)pf(a);else{var b=nf(),c="";null!==b&&(c=' nonce="'+b+'"');xe.write("<"+kf+' src="'+encodeURI(a)+'"'+c+"></"+kf+">")}}
function pf(a){var b=xe.createElement(kf);b.setAttribute("src",a);a=nf();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=xe.getElementsByTagName(kf)[0])?a.parentNode.insertBefore(b,a):(xe.head||xe.body||xe.documentElement).appendChild(b)}
function qf(a,b){var c=b&&b._c;if(c)for(var d=0;d<Se.length;d++){var e=Se[d][0],f=Se[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function rf(a,b,c){sf(function(){var c=b===Ee()?K(De,"_",Ce()):Ce();c=K(Ge(b),"_",c);a(c)},c)}
function tf(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);qf(a,c);var d=a?a.split(":"):[],e=c.h||jf(),f=K(L,"ah",Ce());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var l=h.split(".");l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e;var m=g.length&&g[g.length-1]||null,q=m;m&&m.hint==l||(q={hint:l,features:[]},g.push(q));q.features.push(h)}var y=g.length;if(1<y){var z=c.callback;z&&(c.callback=function(){0==--y&&z()})}for(;d=g.shift();)uf(d.features,c,d.hint)}else uf(d||[],c,e)}
function uf(a,b,c){function d(a,b){if(y)return 0;we.clearTimeout(q);z.push.apply(z,v);var d=((De||{}).config||{}).update;d?d(f):f&&K(L,"cu",[]).push(f);if(b){Pe("me0",a,C);try{rf(b,c,m)}finally{Pe("me1",a,C)}}return 1}
a=Be(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,l=b.onerror,m=void 0;"function"==typeof l&&(m=l);var q=null,y=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";l=K(Ge(c),"r",[]).sort();var z=K(Ge(c),"L",[]).sort(),C=[].concat(l);0<g&&(q=we.setTimeout(function(){y=!0;h()},g));
var v=mf(a,z);if(v.length){v=mf(a,l);var S=K(L,"CP",[]),r=S.length;S[r]=function(a){function b(){var a=S[r+1];a&&a()}
function c(b){S[r]=null;d(v,a)&&Fe(function(){e&&e();b()})}
if(!a)return 0;Pe("ml1",v,C);0<r&&S[r-1]?S[r]=function(){c(b)}:c(b)};
if(v.length){var Pb="loaded_"+L.I++;De[Pb]=function(a){S[r](a);De[Pb]=null};
a=af(c,v,"gapi."+Pb,l);l.push.apply(l,v);Pe("ml0",v,C);b.sync||we.___gapisync?of(a):pf(a)}else S[r](ze)}else d(v)&&e&&e()}
function sf(a,b){if(L.hee&&0<L.hel)try{return a()}catch(c){b&&b(c),L.hel--,tf("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
De.load=function(a,b){return sf(function(){return tf(a,b)})};Va("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));var vf=D("Firefox"),wf=Lb()||D("iPod"),xf=D("iPad"),yf=Kb(),zf=Jb(),Af=Ib()&&!Mb();var Bf=null,Cf=null;function Df(){this.f=-1}
;function Ef(){this.f=64;this.b=[];this.D=[];this.H=[];this.i=[];this.i[0]=128;for(var a=1;a<this.f;++a)this.i[a]=0;this.j=this.g=0;this.reset()}
A(Ef,Df);Ef.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.j=this.g=0};
function Ff(a,b,c){c||(c=0);var d=a.H;if(t(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],h=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):(f=c^g^h,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295}
Ef.prototype.update=function(a,b){if(null!=a){p(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.D,f=this.g;d<b;){if(0==f)for(;d<=c;)Ff(this,a,d),d+=this.f;if(t(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){Ff(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){Ff(this,e);f=0;break}}this.g=f;this.j+=b}};
Ef.prototype.digest=function(){var a=[],b=8*this.j;56>this.g?this.update(this.i,56-this.g):this.update(this.i,this.f-(this.g-56));for(var c=this.f-1;56<=c;c--)this.D[c]=b&255,b/=256;Ff(this,this.D);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function M(){this.H=this.H;this.D=this.D}
M.prototype.H=!1;M.prototype.V=function(){return this.H};
M.prototype.dispose=function(){this.H||(this.H=!0,this.K())};
function Gf(a,b){a.H?p(void 0)?b.call(void 0):b():(a.D||(a.D=[]),a.D.push(p(void 0)?w(b,void 0):b))}
M.prototype.K=function(){if(this.D)for(;this.D.length;)this.D.shift()()};
function Hf(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function If(a){if(a.classList)return a.classList;a=a.className;return t(a)&&a.match(/\S+/g)||[]}
function N(a,b){return a.classList?a.classList.contains(b):cb(If(a),b)}
function O(a,b){a.classList?a.classList.add(b):N(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Jf(a,b){if(a.classList)B(b,function(b){O(a,b)});
else{var c={};B(If(a),function(a){c[a]=!0});
B(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function P(a,b){a.classList?a.classList.remove(b):N(a,b)&&(a.className=Za(If(a),function(a){return a!=b}).join(" "))}
function Kf(a,b){a.classList?B(b,function(b){P(a,b)}):a.className=Za(If(a),function(a){return!cb(b,a)}).join(" ")}
function Lf(a,b,c){c?O(a,b):P(a,b)}
function Mf(a,b,c){N(a,b)&&(P(a,b),O(a,c))}
function Nf(a,b){var c=!N(a,b);Lf(a,b,c)}
;var Of=!E&&!Ib();function Pf(a,b){if(/-[a-z]/.test(b))return null;if(Of&&a.dataset){if(Kb()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var Qf="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function Rf(){}
Rf.prototype.next=function(){throw Qf;};
Rf.prototype.fa=function(){return this};
function Sf(a){if(a instanceof Rf)return a;if("function"==typeof a.fa)return a.fa(!1);if(za(a)){var b=0,c=new Rf;c.next=function(){for(;;){if(b>=a.length)throw Qf;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Tf(a,b){if(za(a))try{B(a,b,void 0)}catch(c){if(c!==Qf)throw c;}else{a=Sf(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Qf)throw c;}}}
function Uf(a){if(za(a))return fb(a);a=Sf(a);var b=[];Tf(a,function(a){b.push(a)});
return b}
;function Vf(a,b){this.g={};this.b=[];this.ia=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Vf)for(c=Wf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Wf(a){Xf(a);return a.b.concat()}
k=Vf.prototype;k.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||Yf;Xf(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Yf(a,b){return a===b}
k.isEmpty=function(){return 0==this.f};
k.clear=function(){this.g={};this.ia=this.f=this.b.length=0};
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.f--,this.ia++,this.b.length>2*this.f&&Xf(this),!0):!1};
function Xf(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.f++,this.b.push(a),this.ia++);this.g[a]=b};
k.forEach=function(a,b){for(var c=Wf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.fa=function(a){Xf(this);var b=0,c=this.ia,d=this,e=new Rf;e.next=function(){if(c!=d.ia)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw Qf;var e=d.b[b++];return a?e:d.g[e]};
return e};var Zf={};
function $f(a){if(E&&!ic(9))return[0,0,0,0];var b=Zf.hasOwnProperty(a)?Zf[a]:null;if(b)return b;65536<Object.keys(Zf).length&&(Zf={});var c=[0,0,0,0],d=RegExp("\\\\[0-9A-Fa-f]{1,5}\\s","g");b=ag(a,RegExp("\\\\[0-9A-Fa-f]{6}\\s?","g"));b=ag(b,d);b=ag(b,/\\./g);b=b.replace(RegExp(":not\\(([^\\)]*)\\)","g"),"     $1 ");b=b.replace(RegExp("{[^]*","gm"),"");b=bg(b,c,RegExp("(\\[[^\\]]+\\])","g"),2);b=bg(b,c,RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)","g"),1);b=bg(b,c,RegExp("(\\.[^\\s\\+>~\\.\\[:]+)","g"),2);b=
bg(b,c,/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,3);b=bg(b,c,/(:[\w-]+\([^\)]*\))/gi,2);b=bg(b,c,/(:[^\s\+>~\.\[:]+)/g,2);b=b.replace(/[\*\s\+>~]/g," ");b=b.replace(/[#\.]/g," ");bg(b,c,/([^\s\+>~\.\[:]+)/g,3);b=c;return Zf[a]=b}
function bg(a,b,c,d){return a.replace(c,function(a){b[d]+=1;return Array(a.length+1).join(" ")})}
function ag(a,b){return a.replace(b,function(a){return Array(a.length+1).join("A")})}
;function cg(a){dg();return vc(a)}
var dg=va;var eg={"* ARIA-CHECKED":!0,"* ARIA-COLCOUNT":!0,"* ARIA-COLINDEX":!0,"* ARIA-DESCRIBEDBY":!0,"* ARIA-DISABLED":!0,"* ARIA-LABEL":!0,"* ARIA-LABELLEDBY":!0,"* ARIA-READONLY":!0,"* ARIA-REQUIRED":!0,"* ARIA-ROWCOUNT":!0,"* ARIA-ROWINDEX":!0,"* ARIA-SELECTED":!0,"* ABBR":!0,"* ACCEPT":!0,"* ACCESSKEY":!0,"* ALIGN":!0,"* ALT":!0,"* AUTOCOMPLETE":!0,"* AXIS":!0,"* BGCOLOR":!0,"* BORDER":!0,"* CELLPADDING":!0,"* CELLSPACING":!0,"* CHAROFF":!0,"* CHAR":!0,"* CHECKED":!0,"* CLEAR":!0,"* COLOR":!0,"* COLSPAN":!0,
"* COLS":!0,"* COMPACT":!0,"* COORDS":!0,"* DATETIME":!0,"* DIR":!0,"* DISABLED":!0,"* ENCTYPE":!0,"* FACE":!0,"* FRAME":!0,"* HEIGHT":!0,"* HREFLANG":!0,"* HSPACE":!0,"* ISMAP":!0,"* LABEL":!0,"* LANG":!0,"* MAXLENGTH":!0,"* METHOD":!0,"* MULTIPLE":!0,"* NOHREF":!0,"* NOSHADE":!0,"* NOWRAP":!0,"* READONLY":!0,"* REL":!0,"* REV":!0,"* ROLE":!0,"* ROWSPAN":!0,"* ROWS":!0,"* RULES":!0,"* SCOPE":!0,"* SELECTED":!0,"* SHAPE":!0,"* SIZE":!0,"* SPAN":!0,"* START":!0,"* SUMMARY":!0,"* TABINDEX":!0,"* TITLE":!0,
"* TYPE":!0,"* VALIGN":!0,"* VALUE":!0,"* VSPACE":!0,"* WIDTH":!0},fg={"* USEMAP":!0,"* ACTION":!0,"* CITE":!0,"* HREF":!0,"* LONGDESC":!0,"* SRC":!0,"LINK HREF":!0,"* FOR":!0,"* HEADERS":!0,"* NAME":!0,"A TARGET":!0,"* CLASS":!0,"* ID":!0,"* STYLE":!0};function gg(a,b){var c=n[a];return c&&c.prototype?(c=Object.getOwnPropertyDescriptor(c.prototype,b))&&c.get||null:null}
function hg(a,b){var c=n[a];return c&&c.prototype&&c.prototype[b]||null}
var ig=gg("Element","attributes")||gg("Node","attributes"),jg=hg("Element","hasAttribute"),kg=hg("Element","getAttribute"),lg=hg("Element","setAttribute"),mg=hg("Element","removeAttribute"),ng=hg("Element","getElementsByTagName"),og=hg("Element","matches")||hg("Element","msMatchesSelector"),pg=gg("Node","nodeName"),qg=gg("Node","nodeType"),rg=gg("Node","parentNode"),sg=gg("HTMLElement","style")||gg("Element","style"),tg=gg("HTMLStyleElement","sheet"),ug=hg("CSSStyleDeclaration","getPropertyValue"),
vg=hg("CSSStyleDeclaration","setProperty");function wg(a,b,c,d){if(a)return a.apply(b);a=b[c];if(!d(a))throw Error("Clobbering detected");return a}
function xg(a,b,c,d){if(a)return a.apply(b,d);if(E&&10>document.documentMode){if(!b[c].call)throw Error("IE Clobbering detected");}else if("function"!=typeof b[c])throw Error("Clobbering detected");return b[c].apply(b,d)}
function yg(a){return wg(ig,a,"attributes",function(a){return a instanceof NamedNodeMap})}
function zg(a,b,c){try{xg(lg,a,"setAttribute",[b,c])}catch(d){if(-1==d.message.indexOf("A security problem occurred"))throw d;}}
function Ag(a){return wg(sg,a,"style",function(a){return a instanceof CSSStyleDeclaration})}
function Bg(a){return wg(tg,a,"sheet",function(a){return a instanceof CSSStyleSheet})}
function Cg(a){return wg(pg,a,"nodeName",function(a){return"string"==typeof a})}
function Dg(a){return wg(qg,a,"nodeType",function(a){return"number"==typeof a})}
function Eg(a){return wg(rg,a,"parentNode",function(a){return!(a&&"string"==typeof a.name&&a.name&&"parentnode"==a.name.toLowerCase())})}
function Fg(a,b){return xg(ug,a,a.getPropertyValue?"getPropertyValue":"getAttribute",[b])||""}
function Gg(a,b,c){xg(vg,a,a.setProperty?"setProperty":"setAttribute",[b,c])}
;var Hg=/[\n\f\r"'()*<>]/g,Ig={"\n":"%0a","\f":"%0c","\r":"%0d",'"':"%22","'":"%27","(":"%28",")":"%29","*":"%2a","<":"%3c",">":"%3e"},Jg=E&&10>document.documentMode?null:RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)","g");function Kg(a){return Ig[a]||null}
var Lg="rgb rgba alpha rect image linear-gradient radial-gradient repeating-linear-gradient repeating-radial-gradient cubic-bezier matrix perspective rotate rotate3d rotatex rotatey steps rotatez scale scale3d scalex scaley scalez skew skewx skewy translate translate3d translatex translatey translatez".split(" ");
function Mg(a,b,c){var d=[];a=Ng(fb(a.cssRules));B(a,function(a){if(b&&!/[a-zA-Z][\w-:\.]*/.test(b))throw Error("Invalid container id");if(!(b&&E&&10==document.documentMode&&/\\['"]/.test(a.selectorText))){var e=b?a.selectorText.replace(Jg,"#"+b+" $1"):a.selectorText;d.push(Pc(e,Og(a.style,c)))}});
return Rc(d)}
function Ng(a){return Za(a,function(a){return a instanceof CSSStyleRule||a.type==CSSRule.STYLE_RULE})}
function Pg(a,b,c){a=Qg("<style>"+a+"</style>");return null==a?Tc:Mg(a.sheet,void 0!=b?b:null,c)}
function Qg(a){return E&&!ic(10)||"function"!=typeof n.DOMParser?null:(new DOMParser).parseFromString("<html><head></head><body>"+a+"</body></html>","text/html").body.children[0]}
function Og(a,b){if(!a)return Hc;for(var c=document.createElement("div").style,d=Rg(a),e=0;e<d.length;e++){var f=d[e].replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,"");if(0!=f.lastIndexOf("--",0)&&0!=f.lastIndexOf("var",0)){var g=Fg(a,f);g=nb(g);if(""==g)g=null;else{var h=String(g.substr(0,4)).toLowerCase();if(0==("url("<h?-1:"url("==h?0:1))if(b){a:for(g=g.substring(4,g.length-1),h=0;2>h;h++){var l="\"'".charAt(h);if(g.charAt(0)==l&&g.charAt(g.length-1)==l){g=g.substring(1,
g.length-1);break a}}g=b?(g=b(g,f))&&"about:invalid#zClosurez"!=yc(g)?'url("'+yc(g).replace(Hg,Kg)+'")':null:null}else g=null;else g=0<g.indexOf("(")?1<(g?g.split("(").length-1:0)||!cb(Lg,g.substring(0,g.indexOf("(")).toLowerCase())||!mb(g,")")?null:g:g}null!=g&&Gg(c,f,g)}}rc("Output of CSS sanitizer");return Gc(c.cssText||"")}
function Sg(a){var b=Array.from(xg(ng,a,"getElementsByTagName",["STYLE"])),c=lb(b,function(a){return fb(Bg(a).cssRules)});
c=Ng(c);c.sort(function(a,b){var c=$f(a.selectorText);a:{for(var d=$f(b.selectorText),e=Math.min(c.length,d.length),f=0;f<e;f++){var q=jb(c[f],d[f]);if(0!=q){c=q;break a}}c=jb(c.length,d.length)}return-c});
a=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,null,!1);for(var d;d=a.nextNode();)B(c,function(a){xg(og,d,d.matches?"matches":"msMatchesSelector",[a.selectorText])&&a.style&&Tg(d,a.style)});
B(b,td)}
function Tg(a,b){var c=Rg(a.style),d=Rg(b);B(d,function(d){if(!(0<=c.indexOf(d))){var e=Fg(b,d);Gg(a.style,d,e)}})}
function Rg(a){za(a)?a=fb(a):(a=Ma(a),db(a,"cssText"));return a}
;var Ug="undefined"!=typeof WeakMap&&-1!=WeakMap.toString().indexOf("[native code]"),Vg=0;function Wg(){this.g=[];this.f=[];this.b="data-elementweakmap-index-"+Vg++}
Wg.prototype.set=function(a,b){if(xg(jg,a,"hasAttribute",[this.b])){var c=parseInt(xg(kg,a,"getAttribute",[this.b])||null,10);this.f[c]=b}else c=this.f.push(b)-1,zg(a,this.b,c.toString()),this.g.push(a);return this};
Wg.prototype.get=function(a){if(xg(jg,a,"hasAttribute",[this.b]))return a=parseInt(xg(kg,a,"getAttribute",[this.b])||null,10),this.f[a]};
Wg.prototype.clear=function(){this.g.forEach(function(a){xg(mg,a,"removeAttribute",[this.b])},this);
this.g=[];this.f=[]};var Xg=!E||10<=Number(jc);function Yg(){}
;var Zg={APPLET:!0,AUDIO:!0,BASE:!0,BGSOUND:!0,EMBED:!0,FORM:!0,IFRAME:!0,ISINDEX:!0,KEYGEN:!0,LAYER:!0,LINK:!0,META:!0,OBJECT:!0,SCRIPT:!0,SVG:!0,STYLE:!0,TEMPLATE:!0,VIDEO:!0};var $g={A:!0,ABBR:!0,ACRONYM:!0,ADDRESS:!0,AREA:!0,ARTICLE:!0,ASIDE:!0,B:!0,BDI:!0,BDO:!0,BIG:!0,BLOCKQUOTE:!0,BR:!0,BUTTON:!0,CAPTION:!0,CENTER:!0,CITE:!0,CODE:!0,COL:!0,COLGROUP:!0,DATA:!0,DATALIST:!0,DD:!0,DEL:!0,DETAILS:!0,DFN:!0,DIALOG:!0,DIR:!0,DIV:!0,DL:!0,DT:!0,EM:!0,FIELDSET:!0,FIGCAPTION:!0,FIGURE:!0,FONT:!0,FOOTER:!0,FORM:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,HGROUP:!0,HR:!0,I:!0,IMG:!0,INPUT:!0,INS:!0,KBD:!0,LABEL:!0,LEGEND:!0,LI:!0,MAIN:!0,MAP:!0,MARK:!0,MENU:!0,METER:!0,NAV:!0,
NOSCRIPT:!0,OL:!0,OPTGROUP:!0,OPTION:!0,OUTPUT:!0,P:!0,PRE:!0,PROGRESS:!0,Q:!0,S:!0,SAMP:!0,SECTION:!0,SELECT:!0,SMALL:!0,SOURCE:!0,SPAN:!0,STRIKE:!0,STRONG:!0,STYLE:!0,SUB:!0,SUMMARY:!0,SUP:!0,TABLE:!0,TBODY:!0,TD:!0,TEXTAREA:!0,TFOOT:!0,TH:!0,THEAD:!0,TIME:!0,TR:!0,TT:!0,U:!0,UL:!0,VAR:!0,WBR:!0};function ah(a){a=a||new bh;ch(a);this.b=Sa(a.b);this.i=Sa(a.X);this.j=Sa(a.ba);this.l=a.D;B(a.j,function(a){this.b["* "+a.toUpperCase()]=dh},this);
this.H=a.g;this.g=a.N;this.f=null;this.D=a.J}
A(ah,Yg);function eh(a){return function(b,c){var d=a(nb(b),c);return d&&"about:invalid#zClosurez"!=yc(d)?yc(d):null}}
function bh(){this.b={};B([eg,fg],function(a){B(Ma(a),function(a){this.b[a]=dh},this)},this);
this.f={};this.j=[];this.X=Sa(Zg);this.ba=Sa($g);this.D=!1;this.ea=fh;this.l=this.i=this.da=this.g=Ld;this.N=null;this.H=this.J=!1}
function gh(a){var b=new bh;b.D=!0;b.l=hh;gb(b.j,ih);b.g=Ac;b.i=a;return b}
function jh(a,b){return function(c,d,e,f){c=a(c,d,e,f);return null==c?null:b(c,d,e,f)}}
function kh(a,b,c,d){a[c]&&!b[c]&&(a[c]=jh(a[c],d))}
function ch(a){if(a.H)throw Error("HtmlSanitizer.Builder.build() can only be used once.");kh(a.b,a.f,"* USEMAP",lh);var b=eh(a.ea);B(["* ACTION","* CITE","* HREF"],function(a){kh(this.b,this.f,a,b)},a);
var c=eh(a.g);B(["* LONGDESC","* SRC","LINK HREF"],function(a){kh(this.b,this.f,a,c)},a);
B(["* FOR","* HEADERS","* NAME"],function(a){kh(this.b,this.f,a,Ha(mh,this.da))},a);
kh(a.b,a.f,"A TARGET",Ha(nh,["_blank","_self"]));kh(a.b,a.f,"* CLASS",Ha(oh,a.i));kh(a.b,a.f,"* ID",Ha(ph,a.i));kh(a.b,a.f,"* STYLE",Ha(a.l,c));a.H=!0}
var fh=Ac;function qh(a,b){a||(a="*");return(a+" "+b).toUpperCase()}
function hh(a,b,c,d){if(!d.Ba)return null;b=Fc(Og(d.Ba,function(b,d){c.vb=d;var e=a(b,c);null==e?e=null:(rc("HtmlSanitizerPolicy created with networkRequestUrlPolicy_ when installing '* STYLE' handler."),e=Bc(e));return e}));
return""==b?null:b}
function dh(a){return nb(a)}
function nh(a,b){var c=nb(b);return cb(a,c.toLowerCase())?c:null}
function lh(a){return(a=nb(a))&&"#"==a.charAt(0)?a:null}
function mh(a,b,c){return a(nb(b),c)}
function oh(a,b,c){b=b.split(/(?:\s+)/);for(var d=[],e=0;e<b.length;e++){var f=a(b[e],c);f&&d.push(f)}return 0==d.length?null:d.join(" ")}
function ph(a,b,c){return a(nb(b),c)}
function rh(a,b){var c=!("STYLE"in a.i)&&"STYLE"in a.j;c="*"==a.g&&c?"sanitizer-"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Ia()).toString(36)):a.g;a.f=c;if(Xg){var d=b;if(Xg){c=rd(document,"SPAN");a.f&&"*"==a.g&&(c.id=a.f);a.D&&(d=Qg("<div>"+d+"</div>"),Sg(d),d=d.innerHTML);var e=document.createElement("template");if("content"in e)e.innerHTML=d,e=e.content;else{var f=document.implementation.createHTMLDocument("x");e=f.body;f.body.innerHTML=d}d=
document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1);for(e=Ug?new WeakMap:new Wg;f=d.nextNode();){c:{var g=a;var h=f;switch(Dg(h)){case 3:g=sh(g,h);break c;case 1:if("TEMPLATE"==Cg(h).toUpperCase())g=null;else{var l=Cg(h).toUpperCase();if(l in g.i)var m=null;else g.j[l]?m=document.createElement(l):(m=rd(document,"SPAN"),g.l&&zg(m,"data-sanitizer-original-tag",l.toLowerCase()));if(m){var q=m,y=yg(h);if(null!=y)for(var z=0;l=y[z];z++)if(l.specified){var C=g;var v=h,S=l,
r=S.name;if(0==r.lastIndexOf("data-sanitizer-",0))C=null;else{var Pb=Cg(v);S=S.value;var We={tagName:nb(Pb).toLowerCase(),attributeName:nb(r).toLowerCase()},Xe={Ba:void 0};"style"==We.attributeName&&(Xe.Ba=Ag(v));v=qh(Pb,r);v in C.b?(C=C.b[v],C=C(S,We,Xe)):(r=qh(null,r),r in C.b?(C=C.b[r],C=C(S,We,Xe)):C=null)}null===C||zg(q,l.name,C)}g=m}else g=null}break c;default:g=null}}if(g){if(1==Dg(g)&&e.set(f,g),f=Eg(f),h=!1,f)l=Dg(f),m=Cg(f).toLowerCase(),q=Eg(f),11!=l||q?"body"==m&&q&&(l=Eg(q))&&!Eg(l)&&
(h=!0):h=!0,l=null,h||!f?l=c:1==Dg(f)&&(l=e.get(f)),l.content&&(l=l.content),l.appendChild(g)}else sd(f)}e.clear&&e.clear()}else c=rd(document,"SPAN");0<yg(c).length&&(d=rd(document,"SPAN"),d.appendChild(c),c=d);c=(new XMLSerializer).serializeToString(c);c=c.slice(c.indexOf(">")+1,c.lastIndexOf("</"))}else c="";rc("Output of HTML sanitizer");return Xc(c,null)}
function sh(a,b){var c=b.data,d=Eg(b);d&&"style"==Cg(d).toLowerCase()&&!("STYLE"in a.i)&&"STYLE"in a.j&&(c=Sc(Pg(c,a.f,w(function(a,b){return this.H(a,{vb:b})},a))));
return document.createTextNode(c)}
;function th(a){var b=[];uh(new vh,a,b);return b.join("")}
function vh(){}
function uh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ya(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],uh(a,e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),wh(d,c),c.push(":"),uh(a,e,c),f=","));c.push("}");return}}switch(typeof b){case "string":wh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var xh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},yh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function wh(a,b){b.push('"',a.replace(yh,function(a){var b=xh[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),xh[a]=b);return b}),'"')}
;function zh(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
zh.prototype.getHeight=function(){return this.bottom-this.top};
zh.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
zh.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
zh.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Ah(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Ah.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Ah.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Ah.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Bh(a,b,c){if(t(b))(b=Ch(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Ch(c,d);f&&(c.style[f]=e)}}
var Dh={};function Ch(a,b){var c=Dh[b];if(!c){var d=Db(b);c=d;void 0===a.style[d]&&(d=(Vb?"Webkit":Ub?"Moz":E?"ms":Rb?"O":null)+Eb(d),void 0!==a.style[d]&&(c=d));Dh[b]=c}return c}
function Eh(a,b){var c=dd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Fh(a,b){return Eh(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Gh(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}E&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Hh(a){if(E&&!(8<=Number(jc)))return a.offsetParent;var b=dd(a),c=Fh(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Fh(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Ih(a){for(var b=new zh(0,Infinity,Infinity,0),c=bd(a),d=c.b.body,e=c.b.documentElement,f=md(c.b);a=Hh(a);)if(!(E&&0==a.clientWidth||Vb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Fh(a,"overflow")){var g=Jh(a),h=new F(a.clientLeft,a.clientTop);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
jd(nd(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Jh(a){var b=dd(a),c=new F(0,0);var d=b?dd(b):document;d=!E||9<=Number(jc)||kd(bd(d).b)?d.documentElement:d.body;if(a==d)return c;a=Gh(a);b=ld(bd(b).b);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Kh(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Lh(a){var b=Mh;if("none"!=Fh(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Mh(a){var b=a.offsetWidth,c=a.offsetHeight,d=Vb&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new ad(b,c):(a=Gh(a),new ad(a.right-a.left,a.bottom-a.top))}
function Nh(a){var b=Jh(a);a=Lh(a);return new Ah(b.x,b.y,a.width,a.height)}
function Oh(a){return"rtl"==Fh(a,"direction")}
function Ph(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Qh(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Ph(a,c):0}
var Rh={thin:2,medium:4,thick:6};function Sh(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Rh?Rh[c]:Ph(a,c)}
;var Th=function(){if(Xb){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Fb))?a[1]:"0"}return Wb?(a=/10[_.][0-9_.]+/,(a=a.exec(Fb))?a[0].replace(/_/g,"."):"10"):Yb?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Fb))?a[1]:""):Zb||$b||ac?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Fb))?a[1].replace(/_/g,"."):""):""}();function Uh(a){return(a=a.exec(Fb))?a[1]:""}
var Vh=function(){if(vf)return Uh(/Firefox\/([0-9.]+)/);if(E||Sb||Rb)return hc;if(zf)return Mb()?Uh(/CriOS\/([0-9.]+)/):Uh(/Chrome\/([0-9.]+)/);if(Af&&!Mb())return Uh(/Version\/([0-9.]+)/);if(wf||xf){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Fb);if(a)return a[1]+"."+a[2]}else if(yf)return(a=Uh(/Android\s+([0-9.]+)/))?a:Uh(/Version\/([0-9.]+)/);return""}();function Wh(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var l="HTML"==h.tagName||"BODY"==h.tagName;if(!l||"static"!=Fh(h,"position")){var m=Jh(h);if(!l){l=Oh(h);var q;if(q=l){q=Af&&0<=Ab(Vh,10);var y;if(y=bc)y=0<=Ab(Th,10);q=Ub||q||y}l=q?-h.scrollLeft:!l||Tb&&ic("8")||"visible"==Fh(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;m=$c(m,new F(l,h.scrollTop))}}}h=m||new F;m=Nh(a);if(l=Ih(a)){var z=new Ah(l.left,l.top,l.right-l.left,l.bottom-l.top);l=Math.max(m.left,z.left);q=Math.min(m.left+
m.width,z.left+z.width);l<=q&&(y=Math.max(m.top,z.top),z=Math.min(m.top+m.height,z.top+z.height),y<=z&&(m.left=l,m.top=y,m.width=q-l,m.height=z-y))}l=bd(a);y=bd(c);if(l.b!=y.b){q=l.b.body;y=nd(y.b);z=new F(0,0);var C=(C=dd(q))?nd(C):window;b:{try{Nb(C.parent);var v=!0;break b}catch(Pb){}v=!1}if(v){v=q;do{if(C==y)var S=Jh(v);else S=Gh(v),S=new F(S.left,S.top);z.x+=S.x;z.y+=S.y}while(C&&C!=y&&C!=C.parent&&(v=C.frameElement)&&(C=C.parent))}v=$c(z,Jh(q));!E||9<=Number(jc)||kd(l.b)||(v=$c(v,ld(l.b)));
m.left+=v.x;m.top+=v.y}a=Xh(a,b);b=m.left;a&4?b+=m.width:a&2&&(b+=m.width/2);b=new F(b,m.top+(a&1?m.height:0));b=$c(b,h);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var r;g&&(r=Ih(c))&&(r.top-=h.y,r.right-=h.x,r.bottom-=h.y,r.left-=h.x);e=b;e=new F(e.x,e.y);b=Xh(c,d);d=Lh(c);a=new ad(d.width,d.height);e=new F(e.x,e.y);a=new ad(a.width,a.height);v=0;if(f||0!=b)b&4?e.x-=a.width+(f?f.right:0):b&2?e.x-=a.width/2:f&&(e.x+=f.left),b&1?e.y-=a.height+(f?f.bottom:0):f&&(e.y+=f.top);g&&(r?(f=e,b=a,v=0,65==
(g&65)&&(f.x<r.left||f.x>=r.right)&&(g&=-2),132==(g&132)&&(f.y<r.top||f.y>=r.bottom)&&(g&=-5),f.x<r.left&&g&1&&(f.x=r.left,v|=1),g&16&&(h=f.x,f.x<r.left&&(f.x=r.left,v|=4),f.x+b.width>r.right&&(b.width=Math.min(r.right-f.x,h+b.width-r.left),b.width=Math.max(b.width,0),v|=4)),f.x+b.width>r.right&&g&1&&(f.x=Math.max(r.right-b.width,r.left),v|=1),g&2&&(v|=(f.x<r.left?16:0)|(f.x+b.width>r.right?32:0)),f.y<r.top&&g&4&&(f.y=r.top,v|=2),g&32&&(h=f.y,f.y<r.top&&(f.y=r.top,v|=8),f.y+b.height>r.bottom&&(b.height=
Math.min(r.bottom-f.y,h+b.height-r.top),b.height=Math.max(b.height,0),v|=8)),f.y+b.height>r.bottom&&g&4&&(f.y=Math.max(r.bottom-b.height,r.top),v|=2),g&8&&(v|=(f.y<r.top?64:0)|(f.y+b.height>r.bottom?128:0)),g=v):g=256,v=g);f=new Ah(0,0,0,0);f.left=e.x;f.top=e.y;f.width=a.width;f.height=a.height;g=v;g&496||(e=new F(f.left,f.top),e instanceof F?(r=e.x,e=e.y):(r=e,e=void 0),c.style.left=Kh(r,!1),c.style.top=Kh(e,!1),a=new ad(f.width,f.height),d==a||d&&a&&d.width==a.width&&d.height==a.height||(f=a,r=
kd(bd(dd(c)).b),!E||ic("10")||r&&ic("8")?(c=c.style,Ub?c.MozBoxSizing="border-box":Vb?c.WebkitBoxSizing="border-box":c.boxSizing="border-box",c.width=Math.max(f.width,0)+"px",c.height=Math.max(f.height,0)+"px"):(d=c.style,r?(E?(r=Qh(c,"paddingLeft"),e=Qh(c,"paddingRight"),a=Qh(c,"paddingTop"),b=Qh(c,"paddingBottom"),r=new zh(a,e,b,r)):(r=Eh(c,"paddingLeft"),e=Eh(c,"paddingRight"),a=Eh(c,"paddingTop"),b=Eh(c,"paddingBottom"),r=new zh(parseFloat(a),parseFloat(e),parseFloat(b),parseFloat(r))),!E||9<=
Number(jc)?(e=Eh(c,"borderLeftWidth"),a=Eh(c,"borderRightWidth"),b=Eh(c,"borderTopWidth"),c=Eh(c,"borderBottomWidth"),c=new zh(parseFloat(b),parseFloat(a),parseFloat(c),parseFloat(e))):(e=Sh(c,"borderLeft"),a=Sh(c,"borderRight"),b=Sh(c,"borderTop"),c=Sh(c,"borderBottom"),c=new zh(b,a,c,e)),d.pixelWidth=f.width-c.left-r.left-r.right-c.right,d.pixelHeight=f.height-c.top-r.top-r.bottom-c.bottom):(d.pixelWidth=f.width,d.pixelHeight=f.height))));return g}
function Xh(a,b){return(b&8&&Oh(a)?b^4:b)&-9}
;function Q(a){M.call(this);this.j=1;this.g=[];this.i=0;this.b=[];this.f={};this.l=!!a}
A(Q,M);k=Q.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function Yh(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.ha(d),b.apply(void 0,arguments))},a)}
function Zh(a,b,c){if(b=a.f[b]){var d=a.b;(b=bb(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.ha(b)}}
k.ha=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.g.push(a),this.b[a+1]=va):(c&&db(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.F=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.l)for(e=0;e<c.length;e++){var g=c[e];$h(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.g.length&&0==this.i)for(;c=this.g.pop();)this.ha(c)}}return 0!=e}return!1};
function $h(a,b,c){Sd(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(B(b,this.ha,this),delete this.f[a])}else this.b.length=0,this.f={}};
function ai(a,b){if(b){var c=a.f[b];return c?c.length:0}c=0;for(var d in a.f)c+=ai(a,d);return c}
k.K=function(){Q.C.K.call(this);this.clear();this.g.length=0};function bi(a){this.b=a}
bi.prototype.set=function(a,b){p(b)?this.b.set(a,th(b)):this.b.remove(a)};
bi.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
bi.prototype.remove=function(a){this.b.remove(a)};function ci(a){this.b=a}
A(ci,bi);function di(a){this.data=a}
function ei(a){return!p(a)||a instanceof di?a:new di(a)}
ci.prototype.set=function(a,b){ci.C.set.call(this,a,ei(b))};
ci.prototype.f=function(a){a=ci.C.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ci.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function fi(a){this.b=a}
A(fi,ci);fi.prototype.set=function(a,b,c){if(b=ei(b)){if(c){if(c<Ia()){fi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ia()}fi.C.set.call(this,a,b)};
fi.prototype.f=function(a){var b=fi.C.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ia()||c&&c>Ia())fi.prototype.remove.call(this,a);else return b}};function gi(){}
;function hi(){}
A(hi,gi);hi.prototype.clear=function(){var a=Uf(this.fa(!0)),b=this;B(a,function(a){b.remove(a)})};function ii(a){this.b=a}
A(ii,hi);k=ii.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.fa=function(a){var b=0,c=this.b,d=new Rf;d.next=function(){if(b>=c.length)throw Qf;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function ji(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
A(ji,ii);function ki(a,b){this.f=a;this.b=null;if(E&&!(9<=Number(jc))){li||(li=new Vf);this.b=li.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),li.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
A(ki,hi);var mi={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},li=null;function ni(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return mi[a]})}
k=ki.prototype;k.isAvailable=function(){return!!this.b};
k.set=function(a,b){this.b.setAttribute(ni(a),b);oi(this)};
k.get=function(a){a=this.b.getAttribute(ni(a));if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeAttribute(ni(a));oi(this)};
k.fa=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new Rf;d.next=function(){if(b>=c.length)throw Qf;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);oi(this)};
function oi(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function pi(a,b){this.f=a;this.b=b+"::"}
A(pi,hi);pi.prototype.set=function(a,b){this.f.set(this.b+a,b)};
pi.prototype.get=function(a){return this.f.get(this.b+a)};
pi.prototype.remove=function(a){this.f.remove(this.b+a)};
pi.prototype.fa=function(a){var b=this.f.fa(!0),c=this,d=new Rf;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};var qi=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ri(a){return a?decodeURI(a):a}
function si(a,b,c){if(ya(b))for(var d=0;d<b.length;d++)si(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ti(a){var b=[],c;for(c in a)si(c,a[c],b);return b.join("&")}
function ui(a,b){var c=ti(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var vi=/^[\w+/_-]+[=]{0,2}$/;x("userfeedback.api.startFeedback",function(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||n,e=d.document,f;a:{if((f=(d||n).document.querySelector("script[nonce]"))&&(f=f.nonce||f.getAttribute("nonce"))&&vi.test(f))break a;f=void 0}f&&(a.nonce=f);if("help"==a.flow){var g=u("document.location.href",d);!a.helpCenterContext&&g&&(a.helpCenterContext=g.substring(0,1200));g=!0;if(b&&JSON&&JSON.stringify){var h=JSON.stringify(b);(g=1200>=h.length)&&(a.psdJson=h)}g||(b={invalidPsd:!0})}b=[a,b,c];
d.GOOGLE_FEEDBACK_START_ARGUMENTS=b;c=a.serverUri||"../../../www.google.com/tools/feedback";if(g=d.GOOGLE_FEEDBACK_START)g.apply(d,b);else{d=c+"/load.js?";for(var l in a)b=a[l],null!=b&&!Ba(b)&&(d+=encodeURIComponent(l)+"="+encodeURIComponent(b)+"&");a=bd(e).createElement("SCRIPT");f&&a.setAttribute("nonce",f);Zc(a,cg(d));e.body.appendChild(a)}});x("userfeedback.api.isBrowserSupportedForGenie",function(){return wi()});
function wi(){return E?0<=Ab(Vh,"8"):vf?0<=Ab(Vh,"15"):Af?0<=Ab(Vh,"5"):zf||Sb}
x("userfeedback.api.isBrowserSupportedForHelp",wi);var xi=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var yi=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};x("yt.config_",yi);function zi(a){var b=arguments;if(1<b.length)yi[b[0]]=b[1];else{b=b[0];for(var c in b)yi[c]=b[c]}}
function R(a,b){return a in yi?yi[a]:b}
;function Ai(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Bi(b)}}:a}
function Bi(a,b,c,d,e){var f=u("yt.logging.errors.log");f?f(a,b,c,d,e):(f=R("ERRORS",[]),f.push([a,b,c,d,e]),zi("ERRORS",f))}
;function T(a,b){Aa(a)&&(a=Ai(a));return window.setTimeout(a,b)}
function Ci(a){window.clearTimeout(a)}
;var Di=u("ytPubsubPubsubInstance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.ha;Q.prototype.publish=Q.prototype.F;Q.prototype.clear=Q.prototype.clear;x("ytPubsubPubsubInstance",Di);var Ei=u("ytPubsubPubsubSubscribedKeys")||{};x("ytPubsubPubsubSubscribedKeys",Ei);var Fi=u("ytPubsubPubsubTopicToKeys")||{};x("ytPubsubPubsubTopicToKeys",Fi);var Gi=u("ytPubsubPubsubIsSynchronous")||{};x("ytPubsubPubsubIsSynchronous",Gi);
function Hi(a,b,c){var d=Ii();if(d){var e=d.subscribe(a,function(){var d=arguments;var g=function(){Ei[e]&&b.apply(c||window,d)};
try{Gi[a]?g():T(g,0)}catch(h){Bi(h)}},c);
Ei[e]=!0;Fi[a]||(Fi[a]=[]);Fi[a].push(e);return e}return 0}
function Ji(a){var b=Ii();b&&("number"==typeof a?a=[a]:t(a)&&(a=[parseInt(a,10)]),B(a,function(a){b.unsubscribeByKey(a);delete Ei[a]}))}
function U(a,b){var c=Ii();c&&c.publish.apply(c,arguments)}
function Ki(a,b){Gi[a]=!0;var c=Ii();c&&c.publish.apply(c,arguments);Gi[a]=!1}
function Li(a){var b=Ii();if(b)if(b.clear(a),a)Mi(a);else for(var c in Fi)Mi(c)}
function Ii(){return u("ytPubsubPubsubInstance")}
function Mi(a){Fi[a]&&(a=Fi[a],B(a,function(a){Ei[a]&&delete Ei[a]}),a.length=0)}
;var Ni=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};x("yt.msgs_",Ni);function Oi(a){var b=void 0===b?{}:b;a=(a=a in Ni?Ni[a]:void 0)||"";var c={},d;for(d in b)c.xa=d,a=a.replace(new RegExp("\\$"+c.xa,"gi"),function(a){return function(){return b[a.xa]}}(c)),c={xa:c.xa};
return a}
;function V(a,b){this.version=a;this.args=b}
;function Pi(a,b){this.topic=a;this.b=b}
Pi.prototype.toString=function(){return this.topic};function Qi(){}
;function Ri(){}
ha(Ri,Qi);function Si(a,b,c){isNaN(c)&&(c=void 0);var d=u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function Ti(a){if(!isNaN(a)){var b=u("yt.scheduler.instance.cancelJob");b?b(a):Ci(a)}}
Ri.prototype.start=function(){var a=u("yt.scheduler.instance.start");a&&a()};
wa(Ri);Ri.w();var Ui=u("ytPubsub2Pubsub2Instance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.ha;Q.prototype.publish=Q.prototype.F;Q.prototype.clear=Q.prototype.clear;x("ytPubsub2Pubsub2Instance",Ui);var Vi=u("ytPubsub2Pubsub2SubscribedKeys")||{};x("ytPubsub2Pubsub2SubscribedKeys",Vi);var Wi=u("ytPubsub2Pubsub2TopicToKeys")||{};x("ytPubsub2Pubsub2TopicToKeys",Wi);var Xi=u("ytPubsub2Pubsub2IsAsync")||{};x("ytPubsub2Pubsub2IsAsync",Xi);
x("ytPubsub2Pubsub2SkipSubKey",null);function Yi(a,b){var c=Zi();c&&c.publish.call(c,a.toString(),a,b)}
function $i(a,b,c){var d=Zi();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){var f=u("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(Vi[e])try{if(g&&a instanceof Pi&&a!=d)try{var f=a.b,h=g;if(!h.args||!h.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!f.ia){var q=new f;f.ia=q.version}var y=f.ia}catch(z){}if(!y||h.version!=y)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(f,
fb(h.args))}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+z.message,z;}b.call(c||window,g)}catch(z){Bi(z)}},Xi[a.toString()]?u("yt.scheduler.instance")?Si(f,1,void 0):T(f,0):f())});
Vi[e]=!0;Wi[a.toString()]||(Wi[a.toString()]=[]);Wi[a.toString()].push(e);return e}
function aj(a){var b=Zi();b&&("number"==typeof a&&(a=[a]),B(a,function(a){b.unsubscribeByKey(a);delete Vi[a]}))}
function Zi(){return u("ytPubsub2Pubsub2Instance")}
;function bj(a){V.call(this,1,arguments)}
A(bj,V);function cj(a){V.call(this,1,arguments);this.b=a}
A(cj,V);function dj(a,b,c){V.call(this,1,arguments);this.b=a;this.f=c}
A(dj,V);var ej=new Pi("subscription-batch-subscribe",bj),fj=new Pi("subscription-subscribe-success",dj),gj=new Pi("subscription-unsubscribe-success",cj),hj=new Pi("subscription-disable-ypc",cj);Ia();var ij=p(XMLHttpRequest)?function(){return new XMLHttpRequest}:p(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function jj(){if(!ij)return null;var a=ij();return"open"in a?a:null}
;function kj(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?ya(b[f])?gb(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function lj(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),kj(1<a.length?a[1]:a[0])):{}}
function mj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=kj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ui(a,e)+d}
;var nj={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},oj=!1;
function pj(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(qi)[1]||null,e=ri(a.match(qi)[3]||null);d&&e?(d=c,c=a.match(qi),d=d.match(qi),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?ri(c.match(qi)[3]||null)==e&&(Number(c.match(qi)[4]||null)||null)==(Number(a.match(qi)[4]||null)||null):!0;for(var f in nj){if((e=d=R(nj[f]))&&!(e=c)){e=f;var g=R("CORS_HEADER_WHITELIST")||{},h=ri(a.match(qi)[3]||null);e=h?(g=g[h])?cb(g,e):!1:!0}e&&(b[f]=d)}return b}
function qj(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=rj(a,b);var d=sj(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&Ci(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||n;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.O&&b.O.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.cb&&0<b.timeout&&(f=T(function(){e||(e=!0,Ci(f),b.cb.call(b.context||n))},b.timeout))}else tj(a,b)}
function tj(a,b){var c=b.format||"JSON";a=rj(a,b);var d=sj(a,b),e=!1,f,g=uj(a,function(a){if(!e){e=!0;f&&Ci(f);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=!0;break a;default:d=!1}var g=null;if(d||400<=a.status&&500>a.status)g=vj(c,a,b.Zc);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var h=b.context||n;d?b.onSuccess&&b.onSuccess.call(h,
a,g):b.onError&&b.onError.call(h,a,g);b.O&&b.O.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.fb&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),Ci(f))},b.timeout));
return g}
function rj(a,b){b.dd&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.la;d&&(d[c]&&delete d[c],a=mj(a,d||{},!0));return a}
function sj(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.M,g=R("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.bd||ri(a.match(qi)[3]||null)&&!b.withCredentials&&ri(a.match(qi)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.M&&b.M[g]||(f||(f={}),f[c]=d);f&&t(e)&&(e=kj(e),Ua(e,f),e=b.gb&&"JSON"==b.gb?JSON.stringify(e):ti(e));f=e||f&&!Pa(f);!oj&&f&&"POST"!=b.method&&(oj=!0,Bi(Error("AJAX request with postData should use POST")));
return e}
function vj(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?wj(b):null)d={},B(b.getElementsByTagName("*"),function(a){d[a.tagName]=xj(a)})}c&&yj(d);
return d}
function yj(a){if(Ba(a))for(var b in a)if("html_content"==b||mb(b,"_html")){var c=b;rc("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=Xc(a[b],null);a[c]=d}else yj(a[b])}
function wj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function xj(a){var b="";B(a.childNodes,function(a){b+=a.nodeValue});
return b}
function uj(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Ai(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=jj();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=pj(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;function zj(){M.call(this);this.b={}}
A(zj,M);wa(zj);zj.prototype.init=va;zj.prototype.K=function(){this.b={}};
zj.prototype.set=function(a,b){this.b[a]=b};
zj.prototype.get=function(a){return this.b[a]||null};function Aj(a,b){var c=zj.w(),d=a.onSuccess,e=a.onError,f=a.O;c.set(b,Bj([function(b,c){d&&d.call(a.context,b,c);f&&f.call(a.context,b,c)}],[function(b,c){e&&e.call(a.context,b,c);
f&&f.call(a.context,b,c)}]));
a.onSuccess=function(a,d){for(var e=c.get(b),f;f=e.ib.shift();)f(a,d);d&&!d.error?(e.xhr=a,e.Fa=d,e.oa=2,c.set(b,e)):c.b[b]&&delete c.b[b]};
a.onError=function(a,d){for(var e=c.get(b),f;f=e.Qa.shift();)f(a,d);c.b[b]&&delete c.b[b]};
a.O=void 0}
function Cj(a,b){2==b.oa?T(function(){a.onSuccess&&a.onSuccess.call(a.context,b.xhr,b.Fa);a.O&&a.O.call(a.context,b.xhr,b.Fa)},0):1==b.oa&&(b.ib.push(function(b,d){a.onSuccess&&a.onSuccess.call(a.context,b,d);
a.O&&a.O.call(a.context,b,d)}),b.Qa.push(function(b,d){a.onError&&a.onError.call(a.context,b,d);
a.O&&a.O.call(a.context,b,d)}))}
function Bj(a,b){return{xhr:new XMLHttpRequest,Fa:{},oa:1,ib:a,Qa:b}}
;function Dj(a,b){var c=a.itemData;c=["../../offer_details_ajax",a.flowType,c&&c.itemId,c&&c.itemType,a.offerIdsToMatch,a.innertubeRequestParams,a.couponCode];c.sort(jb);c=c.join("-");b.method="POST";b.M=b.M||{};b.la={ei:R("EVENT_ID",void 0)};var d=b.M,e=a.itemData,f=a.flowType,g=a.offerIdsToMatch,h=a.innertubeRequestParams,l=a.couponCode;e&&(d.ii=e.itemId,d.it=e.itemType);h&&(d.irp=h);g&&(d.offer_ids=g);l&&(d.cc=l);"T"==f&&(d.action_tip_flow=1);a:{b.context=b.context||n;d=zj.w();if(c&&d){if((e=d.get(c))&&
(2==e.oa||1==e.oa)){Cj(b,e);break a}Aj(b,c)}(e=tj("../../offer_details_ajax",b))&&c&&d&&(d.get(c).xhr=e)}}
;function Ej(a,b,c){a&&(a.dataset?a.dataset[Fj(b)]=String(c):a.setAttribute("data-"+b,c))}
function W(a,b){return a?a.dataset?a.dataset[Fj(b)]:a.getAttribute("data-"+b):null}
var Gj={};function Fj(a){return Gj[a]||(Gj[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var Hj=0;function Ij(a){var b=a.__yt_uid_key;b||(b=Jj(),a.__yt_uid_key=b);return b}
function Kj(a,b){a=G(a);b=G(b);return!!Id(a,function(a){return a===b},void 0)}
function Lj(a,b){var c=fd(document,a,null,b);return c.length?c[0]:null}
function Mj(a){Lf(document.body,"hide-players",!0);a&&Lf(a,"preserve-players",!0)}
function Nj(){Lf(document.body,"hide-players",!1);B(H("preserve-players"),function(a){P(a,"preserve-players")})}
var Jj=u("ytDomDomGetNextId")||function(){return++Hj};
x("ytDomDomGetNextId",Jj);var Oj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Pj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Oj||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}
Pj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Pj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Pj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Oa=u("ytEventsEventsListeners")||{};x("ytEventsEventsListeners",Oa);var Qj=u("ytEventsEventsCounter")||{count:0};x("ytEventsEventsCounter",Qj);
function Rj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Na(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=Ba(e[4])&&Ba(d)&&Ra(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function X(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Rj(a,b,c,d);if(e)return e;e=++Qj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Pj(d);if(!Id(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Pj(b);
b.currentTarget=a;return c.call(a,b)};
g=Ai(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Sj()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Oa[e]=[a,b,c,g,d];return e}
function Tj(a,b,c,d){var e=a||document;return X(e,b,function(a){var b=Id(a.target,function(a){return a===e||d(a)});
b&&b!==e&&!b.disabled&&(a.currentTarget=b,c.call(b,a))})}
function Uj(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var Sj=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=!1;
try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Vj(a,b,c,d){return Tj(a,b,c,function(a){return N(a,d)})}
function Wj(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function Xj(a){a&&("string"==typeof a&&(a=[a]),B(a,function(a){if(a in Oa){var b=Oa[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Sj()||"boolean"==typeof b?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Oa[a]}}))}
;function Yj(a){return R("EXPERIMENT_FLAGS",{})[a]}
;function Zj(a,b){var c=b;c=void 0===c?{}:c;Aa(c)&&(c={callback:c});c._c&&c._c.jsl&&c._c.jsl.h||Ua(c,{_c:{jsl:{h:R("GAPI_HINT_PARAMS",void 0)}}});b=c;(b.gapiHintOverride||R("GAPI_HINT_OVERRIDE"))&&(c=lj(document.location.href).gapi_jsh)&&Ua(b,{_c:{jsl:{h:c}}});tf(a,b)}
;function ak(a){a=a||{};this.url=a.url||"";this.args=a.args||Sa(bk);this.assets=a.assets||{};this.attrs=a.attrs||Sa(ck);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var bk={enablejsapi:1},ck={};function dk(a){var b=new ak,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"object"==xa(d)?b[c]=Sa(d):b[c]=d}return b}
;function ek(){M.call(this);this.b=[]}
ha(ek,M);ek.prototype.K=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.Yc)}M.prototype.K.call(this)};var fk=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,gk=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function hk(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(fk,""),c=c.replace(gk,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ik(a,b)}
function ik(a,b){var c=jk(a),d=document.getElementById(c),e=d&&W(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=Hi(c,b);var g=""+Ca(b);kk[g]=e}f||(d=lk(a,c,function(){W(d,"loaded")||(Ej(d,"loaded","true"),U(c),T(Ha(Li,c),0))}))}}
function lk(a,b,c){var d=rd(document,"SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Zc(d,cg(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function jk(a){var b=document.createElement("a");Yc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Cb(a)}
var kk={};var mk=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function nk(a){a=a||"";if(window.spf){var b=a.match(mk);spf.style.load(a,b?b[1]:"",void 0)}else ok(a)}
function ok(a){var b=pk(a),c=document.getElementById(b),d=c&&W(c,"loaded");d||c&&!d||(c=qk(a,b,function(){W(c,"loaded")||(Ej(c,"loaded","true"),U(b),T(Ha(Li,b),0))}))}
function qk(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=cg(a);d.rel="stylesheet";d.href=uc(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function pk(a){var b=rd(document,"A");rc("This URL is never added to the DOM");a=Bc(a);Yc(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Cb(b)}
;var rk={},sk=0;var tk=Math.pow(2,16)-1,uk={log_event:"events",log_interaction:"interactions"},vk=Object.create(null);vk.log_event="GENERIC_EVENT_LOGGING";vk.log_interaction="INTERACTION_LOGGING";var wk={},xk=0,yk=u("ytLoggingTransportLogPayloadsQueue_")||{};x("ytLoggingTransportLogPayloadsQueue_",yk);var zk=u("ytLoggingTransportTokensToCttTargetIds_")||{};x("ytLoggingTransportTokensToCttTargetIds_",zk);var Ak=u("ytLoggingTransportDispatchedStats_")||{};x("ytLoggingTransportDispatchedStats_",Ak);
x("ytytLoggingTransportCapturedTime_",u("ytLoggingTransportCapturedTime_")||{});
function Bk(){Ci(xk);if(!Pa(yk)){for(var a in yk){var b=wk[a];if(b){var c=void 0,d=a,e=b,f=uk[d],g=Ak[d]||{};Ak[d]=g;b=Math.round(xi());for(c in yk[d]){var h=e.b;h={client:{hl:h.Mb,gl:h.Lb,clientName:h.Kb,clientVersion:h.innertubeContextClientVersion}};var l=window.devicePixelRatio;l&&1!=l&&(h.client.screenDensityFloat=String(l));R("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});h={context:h};h[f]=Ck(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=
h[f].length;if(l=zk[c])a:{var m=h,q=c;if(l.videoId)var y="VIDEO";else if(l.playlistId)y="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:q,scope:y}]}delete zk[c];l=h;l.requestTimeMs=b;(y=R("EVENT_ID",void 0))&&Yj("enable_gel_web_client_event_id")&&(m=(R("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>tk&&(m=1),zi("BATCH_CLIENT_COUNTER",m),l.serializedClientEventId={serializedEventId:y,clientCounter:m});
Dk(e,d,h,{retry:!0})}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete yk[a]}}Pa(yk)||Ek()}}
function Ek(){Ci(xk);xk=T(Bk,R("LOGGING_BATCH_TIMEOUT",1E4))}
function Ck(a,b){b=void 0===b?"":b;yk[a]=yk[a]||{};yk[a][b]=yk[a][b]||[];return yk[a][b]}
;function Fk(a){var b={"X-Goog-Visitor-Id":R("VISITOR_DATA","")},c;a?c="Bearer "+u("gapi.auth.getToken")().Vc:c=Me([]);c&&(b.Authorization=c,b["X-Goog-AuthUser"]=R("SESSION_INDEX",0));return b}
function Gk(a){a=Object.assign({},a);delete a.Authorization;var b=Me();if(b){var c=new Ef;c.update(R("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();za(b);if(!Bf)for(Bf={},Cf={},c=0;65>c;c++)Bf[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Cf[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=Cf;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,q=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<
2|m>>6;m&=63;l||(m=64,g||(h=64));d.push(c[q],c[f],c[h],c[m])}a.hash=d.join("")}return a}
;function Hk(){var a=new ji;(a=a.isAvailable()?new pi(a,"yt.innertube"):null)||(a=new ki("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new fi(a):null;this.f=document.domain||window.location.hostname}
Hk.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,Ia()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(th(b))}catch(f){return}else e=escape(b);b=this.f;Le.set(""+a,e,c,"../../default.htm",void 0===b?"youtube.com":b,!1)};
Hk.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=Le.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Hk.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;Le.remove(""+a,"../../default.htm",void 0===b?"youtube.com":b)};var Ik=new Hk;function Jk(a,b,c,d){if(d)return null;d=Ik.get("nextId",!0)||1;var e=Ik.get("requests",!0)||{};e[d]={method:a,request:b,authState:Gk(c),requestTime:Math.round(xi())};Ik.set("nextId",d+1,86400,!0);Ik.set("requests",e,86400,!0);return d}
function Kk(a){var b=Ik.get("requests",!0)||{};delete b[a];Ik.set("requests",b,86400,!0)}
function Lk(a){var b=Ik.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(xi())-d.requestTime)){var e=d.authState,f=Gk(Fk(!1));Ra(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(xi())),Dk(a,d.method,e,{}));delete b[c]}}Ik.set("requests",b,86400,!0)}}
;function Mk(){var a=this;this.b={innertubeApiKey:R("INNERTUBE_API_KEY",void 0),innertubeApiVersion:R("INNERTUBE_API_VERSION",void 0),Kb:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Mb:R("INNERTUBE_CONTEXT_HL",void 0),Lb:R("INNERTUBE_CONTEXT_GL",void 0),Nb:R("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ob:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};Si(function(){Lk(a)},0,5E3)}
function Dk(a,b,c,d){!R("VISITOR_DATA")&&.01>Math.random()&&Bi(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",M:c,gb:"JSON",fb:function(){},
cb:d.fb,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
bb:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
ed:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=a.b.Ob||!1,g=Fk(f);Object.assign(e.headers,g);var h="",l=a.b.Nb;l&&(h=l);e.headers.Authorization&&!h&&(e.headers["x-origin"]=window.location.origin);h=""+h+("../../youtubei/"+a.b.innertubeApiVersion+"/"+b)+"@alt=json&key="+a.b.innertubeApiKey;var m;if(d.retry&&Yj("retry_web_logging_batches")&&(m=Jk(b,c,g,f))){var q=e.onSuccess,y=e.bb;e.onSuccess=function(a,b){Kk(m);q(a,b)};
c.bb=function(a,b){Kk(m);y(a,b)}}try{Yj("use_fetch_for_op_xhr")?qj(h,e):(e.method="POST",e.M||(e.M={}),tj(h,e))}catch(z){if("InvalidAccessError"==z)m&&(Kk(m),m=0),Bi(Error("An extension is blocking network request."),"WARNING");
else throw z;}m&&Si(function(){Lk(a)},0,5E3)}
;function Nk(a,b,c){var d={};d.eventTimeMs=Math.round(c||xi());d[a]=b;a=String;c?c=-1:(c=u("_lact",window),c=null==c?-1:Math.max(Ia()-c,0));d.context={lastActivityMs:a(c)};c=Ck("log_event");c.push(d);wk.log_event=new Mk;c.length>=(Number(Yj("web_logging_max_batch")||0)||20)?Bk():Ek()}
;var Ok=u("ytLoggingLatencyUsageStats_")||{};x("ytLoggingLatencyUsageStats_",Ok);var Pk=0;
function Qk(a){Ok[a]=Ok[a]||{count:0};var b=Ok[a];b.count++;b.time=xi();Pk||(Pk=Si(Rk,0,5E3));if(10<b.count){if(11==b.count){b=Error("CSI data exceeded logging limit with key: "+a);var c=0==a.indexOf("info")?"WARNING":"ERROR";var d=d||{};d.name=R("INNERTUBE_CONTEXT_CLIENT_NAME",1);d.version=R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);a=b;b=void 0===c?"ERROR":c;b=void 0===b?"ERROR":b;c=window&&window.yterr||!1;if(a&&c&&!(5<=sk)){c=a.stacktrace;var e=a.columnNumber;a.hasOwnProperty("params")&&(d.params=
JSON.stringify(a.params));var f=u("window.location.href");if(t(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(y){h="Not available",g=!0}try{var l=a.fileName||a.filename||a.sourceURL||n.$googDebugFname||f}catch(y){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:l,
stack:a.stack||"Not available"}}c=c||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(e)||(h=h+":"+e);if(!(rk[a.message]||0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js"))){l=c;h={la:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b,"client.name":d.name},M:{url:R("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};d.version&&(h["client.version"]=d.version);l&&(h.M.stack=l);for(var m in d)h.M["client."+m]=d[m];if(d=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",
void 0))for(var q in d)h.M[q]=d[q];tj(R("ECATCHER_REPORT_HOST","")+"/error_204",h);rk[a.message]=!0;sk++}}}return!0}return!1}
function Rk(){var a=xi(),b;for(b in Ok)6E4<a-Ok[b].time&&delete Ok[b];Pk=0}
;var Sk=Ia().toString();
function Tk(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Ia();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Sk)for(a=1,b=0;b<Sk.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Sk.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJLKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;Tk();var Uk={},Vk=0;
function Wk(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Fb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(b=yc(Ac(a)),"about:invalid#zClosurez"===b?a="":(b instanceof Uc?a=b:(a=null,b.Da&&(a=b.Ca()),b=ob(b.Z?b.Y():String(b)),a=Xc(b,a)),a=Wc(a),a=encodeURIComponent(String(th(a)))),/^[\s\xa0]*$/.test(a)||(a=od("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),dd(a).body.appendChild(a))):e?uj(a,b,"POST",e,d):R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?uj(a,b,"GET",
"",d):Xk(a,b))}
function Xk(a,b){var c=new Image,d=""+Vk++;Uk[d]=c;c.onload=c.onerror=function(){b&&Uk[d]&&b();delete Uk[d]};
c.src=a}
;var Yk=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Zk(){var a=R("TIMING_TICK_EXPIRATION");a||(a={},zi("TIMING_TICK_EXPIRATION",a));return a}
function $k(){var a=Zk(),b;for(b in a)Ti(a[b]);zi("TIMING_TICK_EXPIRATION",{})}
;function al(a,b){V.call(this,1,arguments)}
ha(al,V);function bl(a,b){V.call(this,1,arguments)}
ha(bl,V);var cl=new Pi("aft-recorded",al),dl=new Pi("timing-sent",bl);var el={vc:!0},Y={},fl=(Y.ad_allowed="adTypesAllowed",Y.ad_at="adType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.csn="clientScreenNonce",Y.docid="videoId",Y.is_nav="isNavigation",Y.yt_lt="loadType",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.paused="playerInfo.isPausedOnLoad",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_ad_pr=
"prerollAllowed",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),gl="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),hl="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),
il=!1;function jl(){var a=kl().info.yt_lt="hot_bg";ll().info_yt_lt=a;if(ml())if("yt_lt"in fl){var b=fl.yt_lt;cb(hl,b)&&(a=!!a);if(ml()){var c={};b=b.split(".");for(var d=c,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=a;a=nl();b=Object.keys(c).join("");Qk("info_"+b+"_"+a)||(c.clientActionNonce=a,Nk("latencyActionInfo",c))}}else cb(gl,"yt_lt")||Bi(Error("Unknown label yt_lt logged with GEL CSI."))}
function ol(){var a=pl();if(a.aft)return a.aft;for(var b=R("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
var ql=w(Yk.clearResourceTimings||Yk.webkitClearResourceTimings||Yk.mozClearResourceTimings||Yk.msClearResourceTimings||Yk.oClearResourceTimings||va,Yk);function nl(){var a=kl().nonce;a||(a=Tk(),kl().nonce=a);return a}
function pl(){return kl().tick}
function ll(){var a=kl();"gel"in a||(a.gel={});return a.gel}
function kl(){return u("ytcsi.data_")||rl()}
function rl(){var a={tick:{},info:{}};x("ytcsi.data_",a);return a}
function sl(a,b){x("yt.timing."+(b||"")+"pingSent_",a)}
function tl(){var a=pl(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==kl().info.yt_pvis}
function ml(){return!!Yj("csi_on_gel")}
function ul(){$k();if(!ml()){var a=pl(),b=kl().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&ya(a[f])){var d=f.slice(1);if(d in el){var e=$a(a[f],function(a){return Math.round(a-c)});
b["all_"+d]=e.join()}delete a[f]}var f=!!b.ap;if(d=u("ytglobal.timingReportbuilder_")){if(a=d(a,b,void 0))vl(a,f),rl(),ql(),sl(!1,void 0),R("TIMING_ACTION")&&zi("PREVIOUS_ACTION",R("TIMING_ACTION")),zi("TIMING_ACTION","")}else{var g=R("CSI_SERVICE_NAME","youtube");d={v:2,s:g,action:R("TIMING_ACTION",void 0)};e=jl.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var h=window.location.protocol+u("ytplayer.config.assets.js");(h=Yk.getEntriesByName?Yk.getEntriesByName(h)[0]:null)?b.h5jse=Math.round(b.h5jse-
h.responseEnd):delete b.h5jse}a.aft=ol();tl()&&"youtube"==g&&(jl(),g=a.vc,h=a.pbs,delete a.aft,b.aft=Math.round(h-g));for(var l in b)"_"!=l.charAt(0)&&(d[l]=b[l]);a.ps=xi();b={};l=[];for(var m in a)"_"!=m.charAt(0)&&(g=Math.round(a[m]-c),b[m]=g,l.push(m+"."+g));d.rt=l.join(",");(a=u("ytdebug.logTiming"))&&a(d,b);vl(d,f,void 0);Yi(dl,new bl(b.aft+(e||0),void 0))}}}
function vl(a,b,c){if(Yj("debug_csi_data")){var d=u("yt.timing.csiData");d||(d=[],x("yt.timing.csiData",d));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?";Yj("redirect_csi_204_to_qoe")&&(a="/api/stats/qoe?",d+="&redirect_csi_204_to_qoe=true");a+=d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||Wk(a,void 0,void 0,void 0,
f)}catch(g){Wk(a,void 0,void 0,void 0,f)}}else Wk(a);sl(!0,c)}
;function wl(a,b){M.call(this);this.j=this.sa=a;this.ma=b;this.l=!1;this.api={};this.qa=this.X=null;this.J=new Q;Gf(this,Ha(Hf,this.J));this.g={};this.da=this.ra=this.f=this.Aa=this.b=null;this.ba=!1;this.i=this.N=null;this.ta={};this.qb=["onReady"];this.za=null;this.Ia=NaN;this.ea={};xl(this);this.ua("WATCH_LATER_VIDEO_ADDED",this.fc.bind(this));this.ua("WATCH_LATER_VIDEO_REMOVED",this.gc.bind(this));this.ua("onAdAnnounce",this.tb.bind(this));this.rb=new ek(this);Gf(this,Ha(Hf,this.rb))}
ha(wl,M);k=wl.prototype;
k.Vb=function(a){if(!this.V()){a instanceof ak||(a=new ak(a));this.Aa=a;this.b=dk(a);this.f=this.b.attrs.id||this.f;"video-player"==this.f&&(this.f=this.ma,this.b.attrs.id=this.ma);this.j.id==this.f&&(this.f+="-player",this.b.attrs.id=this.f);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.ma;this.ra||(this.ra=yl(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.j.style.width=Kh(Number(a)||a,!0);if(a=this.b.attrs.height)this.j.style.height=
Kh(Number(a)||a,!0);zl(this);this.l&&Al(this)}};
k.zb=function(){return this.Aa};
function Al(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.api.loadVideoByPlayerVars(a.b.args):a.api.cueVideoByPlayerVars(a.b.args))}
function Bl(a){var b=!0,c=Cl(a);c&&a.b&&(a=a.b,b=W(c,"version")==a.assets.js);return b&&!!u("yt.player.Application.create")}
function zl(a){if(!a.V()&&!a.ba){var b=Bl(a);if(b&&"html5"==(Cl(a)?"html5":null))a.da="html5",a.l||Dl(a);else if(El(a),a.da="html5",b&&a.i)a.sa.appendChild(a.i),Dl(a);else{a.b.loaded=!0;var c=!1;a.N=function(){c=!0;var b=dk(a.b);u("yt.player.Application.create")(a.sa,b);Dl(a)};
a.ba=!0;b?a.N():(hk(a.b.assets.js,a.N),nk(a.b.assets.css),Fl(a)&&!c&&x("yt.player.Application.create",null))}}}
function Cl(a){var b=G(a.f);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.f));return b}
function Dl(a){if(!a.V()){var b=Cl(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.ba=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||Gl(a)):a.Ia=T(function(){Dl(a)},50)}}
function Gl(a){xl(a);a.l=!0;var b=Cl(a);b.addEventListener&&(a.X=Hl(a,b,"addEventListener"));b.removeEventListener&&(a.qa=Hl(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Hl(a,b,e))}for(var f in a.g)a.X(f,a.g[f]);Al(a);a.ra&&a.ra(a.api);a.J.F("onReady",a.api)}
function Hl(a,b,c){var d=b[c];return function(){try{return a.za=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.za=e,Bi(e,"WARNING",void 0,void 0,void 0))}}}
function xl(a){a.l=!1;if(a.qa)for(var b in a.g)a.qa(b,a.g[b]);for(var c in a.ea)Ci(parseInt(c,10));a.ea={};a.X=null;a.qa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.ua.bind(a);a.api.removeEventListener=a.zc.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ab.bind(a);a.api.getPlayerType=a.Bb.bind(a);a.api.getCurrentVideoConfig=a.zb.bind(a);a.api.loadNewVideoConfig=a.Vb.bind(a);a.api.isReady=a.Pb.bind(a)}
k.Pb=function(){return this.l};
k.ua=function(a,b){var c=this,d=yl(this,b);if(d){if(!cb(this.qb,a)&&!this.g[a]){var e=Il(this,a);this.X&&this.X(a,e)}this.J.subscribe(a,d);"onReady"==a&&this.l&&T(function(){d(c.api)},0)}};
k.zc=function(a,b){if(!this.V()){var c=yl(this,b);c&&Zh(this.J,a,c)}};
function yl(a,b){var c=b;if("string"==typeof b){if(a.ta[b])return a.ta[b];c=function(){var a=u(b);a&&a.apply(n,arguments)};
a.ta[b]=c}return c?c:null}
function Il(a,b){var c="ytPlayer"+b+a.ma;a.g[b]=c;n[c]=function(c){var d=a.b&&a.b.args&&a.b.args.fflags;if(d&&0>d.indexOf("use_html5_player_event_timeout=true"))a.J.F(b,c);else{var f=T(function(){if(!a.V()){a.J.F(b,c);var d=a.ea,e=String(f);e in d&&delete d[e]}},0);
Qa(a.ea,String(f))}};
return c}
k.tb=function(a){U("a11y-announce",a)};
k.fc=function(a){U("WATCH_LATER_VIDEO_ADDED",a)};
k.gc=function(a){U("WATCH_LATER_VIDEO_REMOVED",a)};
k.Bb=function(){return this.da||(Cl(this)?"html5":null)};
k.Ab=function(){return this.za};
function El(a){var b="dcp";Yk.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),Yk.mark(b));b=pl();var c=xi();b.dcp&&(b._dcp=b._dcp||[b.dcp],b._dcp.push(c));b.dcp=c;b=Zk();if(c=b.dcp)Ti(c),b.dcp=0;ll().tick_dcp=void 0;xi();ml()?(b=nl(),Qk("tick_dcp_"+b)||Nk("latencyActionTicked",{tickName:"dcp",clientActionNonce:b},void 0),b=!0):b=!1;if(b=!b)b=!u("yt.timing.pingSent_");if(b&&(c=R("TIMING_ACTION",void 0),b=pl(),u("ytglobal.timingready_")&&c&&b._start&&(c=ol()))){Yj("tighter_critical_section")&&!il&&
(Yi(cl,new al(Math.round(c-b._start),void 0)),il=!0);c=!0;var d=R("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in b)){c=!1;break}c&&ul()}a.cancel();xl(a);a.da=null;a.b&&(a.b.loaded=!1);if(b=Cl(a))Bl(a)||!Fl(a)?a.i=b:(b&&b.destroy&&b.destroy(),a.i=null);sd(a.sa)}
k.cancel=function(){if(this.N){var a=this.N;this.b.assets.js&&a&&(a=""+Ca(a),(a=kk[a])&&Ji(a))}Ci(this.Ia);this.ba=!1};
k.K=function(){El(this);if(this.i&&this.b&&this.i.destroy)try{this.i.destroy()}catch(b){Bi(b)}this.ta=null;for(var a in this.g)n[this.g[a]]=null;this.Aa=this.b=this.api=null;delete this.sa;delete this.j;M.prototype.K.call(this)};
function Fl(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var Jl={},Kl="player_uid_"+(1E9*Math.random()>>>0);function Ll(a,b){(a=G(a))&&a.style&&(a.style.display=b?"":"none",Lf(a,"hid",!b))}
function Ml(a){return(a=G(a))?"none"!=a.style.display&&!N(a,"hid"):!1}
function Nl(a){B(arguments,function(a){!za(a)||a instanceof Element?Ll(a,!0):B(a,function(a){Nl(a)})})}
function Ol(a){B(arguments,function(a){!za(a)||a instanceof Element?Ll(a,!1):B(a,function(a){Ol(a)})})}
;var Pl={},Ql=!1;function Rl(a){var b=R("FEEDBACK_LOCALE_LANGUAGE");Ua(Pl,R("FEEDBACK_LOCALE_EXTRAS",{}));a&&Ua(Pl,a);try{var c=document.getElementById("player-api");if(c){var d=Kl+"_"+Ca(c),e=Jl[d];e||(e=new wl(c,d),Jl[d]=e);var f=e.api}else f=null;f&&f.pauseVideo&&f.pauseVideo();f&&(Pl.playback_id=f.getVideoData().cpn,f.getLastError&&(Pl.api_error=f.getLastError()))}catch(g){}return{helpCenterPath:"../../youtube",locale:b,productData:Pl}}
function Sl(a){a={context:"moo",anchor:a,enableSendFeedback:!1,defaultHelpArticleId:void 0};var b=R("SESSION_INDEX"),c=R("FEEDBACK_BUCKET_ID"),d={abuseLink:"../../../https@support.google.com/youtube/bin/answer.py@answer=140536",customZIndex:"2000000005"};Yj("gfeedback_for_signed_out_users_enabled")&&(d.allowNonLoggedInFeedback=!0);b&&(d.authuser=b+"");c&&(d.bucket=c);Ua(a,d);return a}
function Tl(a,b,c){var d=(b||"59")+"",e=Rl(c),f=Sl(a);Zj("client",function(){var a=e||{};a={apiKey:a.Wc||a.apiKey,environment:a.ad||a.environment,helpCenterPath:a.cd||a.helpCenterPath,locale:a.locale||a.locale||"en".replace(/-/g,"_"),productData:a.fd||a.productData,receiverUri:a.gd||a.receiverUri,renderApiUri:a.hd||a.renderApiUri,theme:a.theme||a.theme,window:a.window||a.window};a=pe(ue,"help.service.Lazy.create",d,a);a=new te(a);if(!Ql)try{a.f(f),Ql=!0}catch(h){}a.g(f)})}
;function Ul(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=ui(a,b)+c;a=a instanceof wc?a:Cc(a);d.href=yc(a)}
function Vl(a){(window.ytspf||{}).enabled?spf.navigate(a):Ul(a)}
;function Wl(a,b,c,d){a={tipParams:a,currencyCode:b};c&&(a.customTipAmount=c);d&&(a.tipComment=d);return a}
;function Xl(a,b,c,d){c={supressError:!!c};a&&(c.overlayHtml=a);b&&(c.errorHtml=b);d&&(c.screenOverlayHtml=d);return c}
function Yl(a){var b={offersHtml:a.offers_html,channelsToSubscriptionidMap:a.channels_to_subscription_id_map,channelInfoMap:a.channel_info_map,componentChannels:a.component_channels,isPurchaseNotAvailable:a.not_available,messageHtml:a.message_html,isPlusPageDirectLogin:a.is_plus_page_direct_login,shouldSkipOverlay:a.should_skip_overlay};b.shouldSkipOverlay&&(b.skipOverlayConfig={offerId:a.offer_id||"",tipConfig:Wl(a.serialized_default_tip_params,a.currency_code)});return b}
;function Zl(){M.call(this);this.f=new Q;Gf(this,Ha(Hf,this.f))}
A(Zl,M);Zl.prototype.subscribe=function(a,b,c){return this.V()?0:this.f.subscribe(a,b,c)};
Zl.prototype.ha=function(a){return this.V()?!1:this.f.ha(a)};
Zl.prototype.F=function(a,b){return this.V()?!1:this.f.F.apply(this.f,arguments)};function $l(){var a=R("DBLCLK_YPC_ACTIVITY_GROUP",void 0);a=("https:"==document.location.protocol?"https://":"http://")+"fls.doubleclick.net/activityi;src="+encodeURIComponent(String(R("DBLCLK_ADVERTISER_ID")))+";type="+encodeURIComponent(String(a))+";cat="+encodeURIComponent("brrim580");for(var b in void 0)a+=";"+encodeURIComponent(String(b))+"="+encodeURIComponent(String((void 0)[b]));a+=";num="+Ia();b=rd(document,"IFRAME");b.src=a;b.style.display="none";document.body.appendChild(b)}
;function am(a,b,c,d,e){Zl.call(this);this.i=a.config;this.b=a.itemData;this.J=a.offerData;this.G=b;this.g=c;this.j=d;this.ka=a.innertubeRequestParams;this.l=e}
A(am,Zl);am.prototype.K=function(){this.G.track("dispose-orderprocessor");this.g=null;am.C.K.call(this)};
function bm(a){var b=R("YPC_TRANSACTION_URL",void 0),c={oid:a.J.offerId,ps:"C"};a.g&&(c.oc=a.g);a.j&&(c.pp=a.j);var d=R("EVENT_ID",void 0);d={flow_uuid:cm(a.G),ei:d};var e=a.i.flowType;if("T"==e)c.action_tip=1,dm(a.G,{registerTransactionAction:"action_tip"}),c.ii=a.b.itemId,c.it=a.b.itemType,e=a.i.tipConfig,c.irp=e.tipParams,e.tipComment&&(c.comment=e.tipComment);else if("U"==e)if(d={action_register_upgrade:1},a.l)c.tp=a.l;else{a.F("ypc-process-order-failure");return}else c.action_register=1,dm(a.G,
{registerTransactionAction:"action_register"}),c.eiid=a.b.itemId,c.it=a.b.itemType,c.cc=a.i.couponCode,a.ka&&(c.irp=a.ka);a.G.track("begin-register-transaction");tj(b,{method:"POST",context:a,M:c,la:d,onSuccess:function(a,b){switch(b.status){case 0:var c=b.subscription_id,d=null;c&&(d=b.channel_info);c={subscriptionId:c||null,channelInfo:d};b.post_purchase_redirect_url&&zi("YPC_POST_PURCHASE_REDIRECT_URL",b.post_purchase_redirect_url);b.red_theme&&zi("YPC_RED_THEME",b.red_theme);var e;b.post_purchase_screen_overlay_html?
e=Xl(null,null,!1,b.post_purchase_screen_overlay_html):b.post_purchase_overlay_html&&(e=Xl(b.post_purchase_overlay_html));this.G.track("purchase-insert-success");this.F("ypc-process-order-success",c,e);break;case 4:this.G.track("purchase-insert-sync-required");this.F("ypc-process-order-failure");break;case 2:this.G.track("purchase-insert-rejected");this.F("ypc-process-order-failure");break;default:this.G.track("purchase-insert-failure"),this.F("ypc-process-order-failure")}},
onError:function(a,b){em(this.G,{http_status:a.status,servlet_status:b&&b.status});this.G.track("purchase-insert-failure");this.F("ypc-process-order-failure")}})}
;function fm(a){M.call(this);this.g=a.flowName;this.f=cm(this);this.b=a.trackingData||{};dm(this,{flowid:this.f,pageName:R("PAGE_NAME",null)});this.track("starting-tracking-for-ypc-flow")}
A(fm,M);fm.prototype.K=function(){this.track("end-of-tracking-for-ypc-flow");fm.C.K.call(this);for(var a in this)delete this[a]};
function dm(a,b){Ua(a.b,b)}
function em(a,b){var c={};Ja(b,function(a,b){"object"!=typeof a&&"function"!=typeof a&&(c["purchaseInsertFailure-"+b]=a)});
dm(a,c)}
fm.prototype.track=function(a,b){b=b||{};var c=R("PAGE_NAME",null),d=this.b.jstimestamp||null,e=Ia();d=d?e-d:null;Ua(b,{label:a,pageName:c,jstimestamp:e,previousTimeLoggedAt:this.b.label||null,timeFromLastTrack:d,netFlowTime:(this.b.netFlowTime||null)+d});dm(this,b);c=ti(this.b);Wk("/gen_204?"+("a="+this.g+(c?"&"+c:"")),void 0)};
function cm(a){if(a.f)return a.f;var b=Ia();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var c=(b+16*Math.random())%16|0;b=Math.floor(b/16);return("x"==a?c:c&3|8).toString(16)})}
;function gm(){var a={};Ua(a,{label:"mb-api-loading",pageName:R("PAGE_NAME")});a=ti(a);Wk("../../gen_204@a=ypc-checkout"+(a?"&"+a:""),void 0)}
function hm(){return new fm({flowName:"ypc-checkout"})}
function im(a){return{itemType:a.itemData.itemType,itemId:a.itemData.itemId,offerId:a.offerData.offerId}}
;function jm(){this.b=null}
wa(jm);jm.prototype.load=function(a){gm();this.b=R("YPC_MB_URL",void 0);hk(this.b,w(function(){a&&a()},this))};
function km(a,b,c,d,e,f,g){a.load(w(function(){try{f&&f("orchestration-script-init");var a=u("payments.business.integration"),l=a.standaloneContextAuthId.forUserId(),m=a.mashupMode.popup("buyFlowDivId").usingDraggableDialog().usingPreferredWidth(600);a.bootstrap.fromPaymentsUrl(this.b);var q=a.bootstrap.asMashupMode(m),y=R("YPC_GB_LANGUAGE");q.usingGaiaIndex(R("SESSION_INDEX")).usingLocale(y).usingDefaultActivityStatusChangeHandler().usingStyle(":md;pc=#444;ac=#2793e6").usingBaseZIndex(2E9);g&&q.usingServerAnalyticsEventHandler(g);
var z=q.inStandaloneContext(l);f&&f("orchestration-script-bootstrapper");var C=z.buyFlow(c).withEncryptedParameters(b);f&&f("orchestration-script-buy-flow-enc-params");C.load(d,e);f&&f("orchestration-script-buy-flow-load")}catch(v){throw Bi(v,void 0,void 0,void 0,!0),v;}},a))}
;function lm(a,b){V.call(this,2,arguments);this.b=b}
A(lm,V);function mm(a){V.call(this,1,arguments);this.b=a}
A(mm,V);function nm(a,b,c,d){V.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
A(nm,V);function om(a,b){V.call(this,1,arguments);this.b=b||null}
A(om,V);function pm(a){V.call(this,1,arguments)}
A(pm,V);var qm=new Pi("ypc-guide-sync-success",lm),rm=new Pi("ypc-purchase-success",nm),sm=new Pi("ypc-subscription-cancel",pm),tm=new Pi("ypc-subscription-cancel-success",om);function um(a,b,c){Zl.call(this);this.g=a.config;this.i=a.itemData;this.j=a.offerData;this.G=b;this.ya=a;this.b=null;this.ka=a.innertubeRequestParams;this.l=c}
A(um,Zl);k=um.prototype;k.K=function(){this.G.track("dispose-offerpurchase");vm(this);um.C.K.call(this)};
function wm(a){var b=R("YPC_TRANSACTION_URL",void 0),c={oid:a.j.offerId},d=R("EVENT_ID",void 0);d={flow_uuid:cm(a.G),ei:d};var e=a.g.flowType;if("T"==e){c.ii=a.i.itemId;c.it=a.i.itemType;var f=a.g.tipConfig;c.action_request_tip=1;dm(a.G,{requestTransactionAction:"action_request_tip"});c.tp=f.tipParams;c.cur=f.currencyCode;f.customTipAmount&&(c.ca=f.customTipAmount)}else c.action_request=1,a.ka&&(c.irp=a.ka),dm(a.G,{requestTransactionAction:"action_request"});a.g.couponCode&&(c.cc=a.g.couponCode);
tj(b,{method:"POST",la:d,M:c,context:a,onSuccess:function(a,b){this.G.track("dynamic-success");Nk("buyFlowStarted",{offerParams:this.ka});xm(this,b.encrypted_purchase_params)},
onError:function(a,b){var c=b.innertube_error_code,d=b.error||null;this.G.track("dynamic-error",{dynamicErrorStatus:b.status});var f="D"==e&&"start_payment"==this.ya.transactionAction;"T"==e&&"INVALID_VALUE"==c?this.F("ypc-tip-validation-error",{errorMessage:d}):f&&"FORBIDDEN"==c?this.F("ypc-direct-purchase-error",{errorMessage:d}):ym(this,d)}})}
function xm(a,b){var c=jm.w();a.G.track("mb-start");a.F("ypc-purchase-wallet-start");var d=w(a.l.f,a.l,a.i,a.j);km(c,b,w(a.bc,a),w(a.ec,a),w(a.dc,a),w(a.Xb,a),d)}
k.bc=function(a){this.F("ypc-purchase-wallet-end");a&&a.checkoutOrderId?(a=a.checkoutOrderId,this.G.track("mb-complete",{orderId:a}),zm(this,a,null,null)):a&&a.integratorData?zm(this,null,a.integratorData,null):(a=a.error,this.G.track("mb-complete-error",{mbCompleteErrorCode:a}),ym(this,null,"-1"==String(a)))};
k.ec=function(){this.G.track("mb-ready")};
k.dc=function(a){this.F("ypc-purchase-wallet-end");this.G.track("mb-error");this.G.track("mb-error",{mbFailureErrorName:a.name,mbFailureErrorMessage:a.message?a.message.substring(0,1400):""});ym(this,null,!0)};
k.Xb=function(a){this.G.track("mb-"+a)};
function zm(a,b,c,d){a.b=new am(a.ya,a.G,b,c,d);a.b&&(a.b.subscribe("ypc-process-order-success",a.jc,a),a.b.subscribe("ypc-process-order-failure",a.ic,a));bm(a.b)}
function ym(a,b,c){a.F("ypc-post-purchase-init",Xl(null,b,c))}
k.jc=function(a,b){vm(this);$l();var c=this.g.flowType,d=this.i.itemId,e=this.i.itemType,f={it:e,ii:d};b?this.F("ypc-post-purchase-init",b):("T"==c?(f.action_tip_flow=1,dm(this.G,{postPurchaseAction:"action_tip_flow"})):f.oid=this.j.offerId,this.G.track("post-purchase-request"),c=R("YPC_POST_PURCHASE_URL",void 0),"YPC_RED_THEME"in yi&&(f.red_theme=R("YPC_RED_THEME",void 0)),tj(c,{method:"GET",context:this,la:f,O:function(a,b){this.F("ypc-post-purchase-init",Xl(b.html,b.error))}}));
Yi(rm,new nm({itemType:e,itemId:d},a,e,d))};
k.ic=function(){vm(this);this.F("ypc-post-purchase-init",Xl())};
function vm(a){a.b&&(a.b.dispose(),a.b=null)}
;function Am(){this.g=R("YPC_TRANSACTION_URL",void 0);this.b=void 0}
Am.prototype.f=function(a,b,c){a={action_log_payment_server_analytics:1,backend_analytics_event:c,it:a.itemType,ii:a.itemId,oid:b.offerId};this.b&&(a.session_token=this.b);tj(this.g,{method:"POST",M:a,context:this})};function Bm(a){M.call(this);this.f=a||window;this.b=[]}
ha(Bm,M);function Cm(a,b,c,d,e){d=w(d,a.f);b=Vj(b,c,d,e);a.b.push(b)}
function Dm(a){Xj(a.b);a.b.length=0}
Bm.prototype.K=function(){Dm(this);M.prototype.K.call(this)};function Em(a){M.call(this);this.g=new Bm(this);this.b=I("ypc-offer-overlay-container");this.f=a;this.l=[];this.J=[];this.ja();this.pa()}
A(Em,M);Em.prototype.K=function(){Dm(this.g);Ji(this.l);this.l.length=0;aj(this.J);this.J.length=0;Em.C.K.call(this)};
Em.prototype.ja=function(){Cm(this.g,this.b,"click",this.W,"ypc-offer-overlay-close")};
Em.prototype.pa=function(){this.l.push(Hi("dispose",this.W,this))};
Em.prototype.W=function(a){a instanceof Pj&&a.preventDefault();this.f&&this.f.hide();this.dispose()};function Fm(a,b){this.i=I(a);this.g=b;this.b=this.f=null}
A(Fm,M);k=Fm.prototype;k.start=function(a,b,c,d,e,f){this.b=T(w(this.abort,this,a),3E5);Zj("family_creation",w(this.Ac,this,a,b,c,d,e,f))};
k.abort=function(a){this.b&&(this.b&&(Ci(this.b),this.b=null),a.f.T(),td(this.f))};
k.Ac=function(a,b,c,d,e,f){var g=R("YTR_FAMILY_CREATION_URL");Ka(f)&&(g=mj(g,f||{},!1));f=u("gapi.config.update");Aa(f)&&f("iframes/family_creation/url",g);a={clientId:3,initialflow:[4,5,6,7],authUser:R("SESSION_INDEX")||0,onFlowComplete:w(this.ac,this,a,d),OnError:w(this.Zb,this,a,e),onReady:w(this.kc,this,a,c)};b&&(a.hl=b);b=u("gapi.family_creation.render");Aa(b)&&(this.f||(this.f=I(this.g),this.f||(this.f=od("div",this.g),this.i.appendChild(this.f))),b(this.f,a))};
k.ac=function(a,b){a.W(null,!1,b)};
k.Zb=function(a,b){a.W(null,!1,b)};
k.kc=function(a,b){if(this.b){this.b&&(Ci(this.b),this.b=null);if(b){var c=u("gapi.family_creation.setConfig");Aa(c)&&c(0,b)}a.f.R("ypc-offer-overlay-show-unicorn-iframe-in-content")}};var Gm={},Hm="ontouchstart"in document;function Im(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Id(c,function(a){return N(a,b)},d)}
function Jm(a){var b="mouseover"==a.type&&"mouseenter"in Gm||"mouseout"==a.type&&"mouseleave"in Gm,c=a.type in Gm||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=Gm[b];for(var d in c.f){var e=Im(b,d,a.target);e&&!Id(a.relatedTarget,function(a){return a==e})&&c.F(d,e,b,a)}}if(b=Gm[a.type])for(d in b.f)(e=Im(a.type,d,a.target))&&b.F(d,e,a.type,a)}}
X(document,"blur",Jm,!0);X(document,"change",Jm,!0);X(document,"click",Jm);X(document,"focus",Jm,!0);X(document,"mouseover",Jm);X(document,"mouseout",Jm);X(document,"mousedown",Jm);X(document,"keydown",Jm);X(document,"keyup",Jm);X(document,"keypress",Jm);X(document,"cut",Jm);X(document,"paste",Jm);Hm&&(X(document,"touchstart",Jm),X(document,"touchend",Jm),X(document,"touchcancel",Jm));function Km(a){this.j=a;this.H={};this.l=[];this.J=[]}
k=Km.prototype;k.L=function(a){return J(a,Z(this))};
function Z(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
k.unregister=function(){Ji(this.l);this.l.length=0;aj(this.J);this.J.length=0};
k.init=va;k.dispose=va;function Lm(a,b,c){a.l.push(Hi(b,c,a))}
function Mm(a,b,c,d){d=Z(a,d);var e=w(c,a);b in Gm||(Gm[b]=new Q);Gm[b].subscribe(d,e);a.H[c]=e}
function Nm(a,b,c,d){if(b in Gm){var e=Gm[b];Zh(e,Z(a,d),a.H[c]);0>=ai(e)&&(e.dispose(),delete Gm[b])}delete a.H[c]}
k.na=function(a,b,c){var d=this.o(a,b);if(d&&(d=u(d))){var e=ib(arguments,2);hb(e,0,0,a);d.apply(null,e)}};
k.o=function(a,b){return W(a,b)};function Om(){Km.call(this,"button");this.b=null;this.g=[];this.f={}}
A(Om,Km);wa(Om);k=Om.prototype;k.register=function(){Mm(this,"click",this.Ma);Mm(this,"keydown",this.Ta);Mm(this,"keypress",this.Ua);Lm(this,"page-scroll",this.Eb)};
k.unregister=function(){Nm(this,"click",this.Ma);Nm(this,"keydown",this.Ta);Nm(this,"keypress",this.Ua);Pm(this);this.f={};Om.C.unregister.call(this)};
k.Ma=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
k.Ta=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=Qm(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=yd(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.Ub;else"table"==e&&(f=this.Tb);f&&Rm(this,a,b,c,w(f,this))}}};
k.Eb=function(){var a=this.f;if(0!=Ka(a))for(var b in a){var c=a[b],d=J(c.activeButtonNode||c.parentNode,Z(this));if(void 0==d||void 0==c)break;Sm(this,d,c,!0)}};
function Rm(a,b,c,d,e){var f=Ml(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=Tm(a,c)){if(p(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;"a"==b.tagName.toLowerCase()?Ul(b.href):Wj(b)}else g&&Um(a,b);else f?27==d.keyCode?(Tm(a,c),Um(a,b)):e(b,c,d):(a=N(b,Z(a,"reverse"))?38:40,d.keyCode==a&&(Wj(b),d.preventDefault()))}
k.Ua=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=Qm(this,a),Ml(a)&&c.preventDefault())};
function Tm(a,b){var c=Z(a,"menu-item-highlight"),d=I(c,b);d&&P(d,c);return d}
function Vm(a,b,c){O(c,Z(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=Z(a,"item-id-"+Ca(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
k.Tb=function(a,b,c){var d=Tm(this,b);if(d){var e=Lj("table",b);b=fd(document,"td",null,e);d=Wm(d,b,fd(document,"td",null,Lj("tr",e)).length,c);-1!=d&&(Vm(this,a,b[d]),c.preventDefault())}};
k.Ub=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Tm(this,b);d&&(b=Za(fd(document,"li",null,b),Ml),Vm(this,a,b[Wm(d,b,1,c)]),c.preventDefault())}};
function Wm(a,b,c,d){var e=b.length;a=Ya(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Xm(a,b){var c=b.iframeMask;c||(c=rd(document,"IFRAME"),c.src='javascript:""',c.className=Z(a,"menu-mask"),Ol(c),b.iframeMask=c);return c}
function Sm(a,b,c,d){var e=J(b,Z(a,"group")),f=!!a.o(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,h=Nh(b);if(N(b,Z(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(q){}}N(b,"flip")&&(N(b,Z(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.o(b,"button-has-sibling-menu")?l=Hh(e):a.o(b,"button-menu-root-container")&&(l=Ym(a,b));E&&!ic("8")&&(l=null);if(l){var m=Nh(l);m=new zh(-m.top,m.left,m.top,-m.left)}l=new F(0,1);N(b,Z(a,"center-menu"))&&(l.x-=Math.round((Lh(c).width-Lh(b).width)/
2));d&&(l.y+=ld(document).y);if(a=Xm(a,b))b=Lh(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Wh(e,f,a,g,l,m,197),d&&Bh(a,"position","fixed");Wh(e,f,c,g,l,m,197)}
function Ym(a,b){if(a.o(b,"button-menu-root-container")){var c=a.o(b,"button-menu-root-container");return J(b,c)}return document.body}
k.lb=function(a){if(a){var b=Qm(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.o(a,"button-has-sibling-menu")?c=a.parentNode:c=Ym(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Xm(this,a);d&&c.appendChild(d);(c=!!this.o(a,"button-menu-fixed"))&&(this.f[Ij(a).toString()]=b);Sm(this,a,b,c);Ki("yt-uix-button-menu-before-show",a,b);Nl(b);d&&Nl(d);
this.na(a,"button-menu-action",!0);O(a,Z(this,"active"));b=w(this.kb,this,a,!1);d=w(this.kb,this,a,!0);c=w(this.Dc,this,a,void 0);this.b&&Qm(this,this.b)==Qm(this,a)||Pm(this);U("yt-uix-button-menu-show",a);Xj(this.g);this.g=[X(document,"click",d),X(document,"contextmenu",b),X(window,"resize",c)];this.b=a}}};
function Um(a,b){if(b){var c=Qm(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Ol(c);a.na(b,"button-menu-action",!1);var d=Xm(a,b),e=Ij(c).toString();delete a.f[e];T(function(){d&&d.parentNode&&(Ol(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=J(b,Z(a,"group"));
var f=[Z(a,"active")];e&&f.push(Z(a,"group-active"));Kf(b,f);U("yt-uix-button-menu-hide",b);Xj(a.g);a.g.length=0}}
k.Dc=function(a,b){var c=Qm(this,a);if(c){b&&(b instanceof Uc?c.innerHTML=Wc(b):xd(c,b));var d=!!this.o(a,"button-menu-fixed");Sm(this,a,c,d)}};
k.kb=function(a,b,c){c=Uj(c);var d=J(c,Z(this));if(d){d=Qm(this,d);var e=Qm(this,a);if(d==e)return}d=J(c,Z(this,"menu"));e=d==Qm(this,a);var f=N(c,Z(this,"menu-item")),g=N(c,Z(this,"menu-close"));if(!d||e&&(f||g))Um(this,a),d&&b&&this.o(a,"button-menu-indicate-selected")&&((a=I(Z(this,"content"),a))&&xd(a,Fd(c)),Zm(this,d,c))};
function Zm(a,b,c){var d=Z(a,"menu-item-selected");B(H(d,b),function(a){P(a,d)});
O(c.parentNode,d)}
function Qm(a,b){if(!b.widgetMenu){var c=a.o(b,"button-menu-id");c=c&&G(c);var d=Z(a,"menu");c?Jf(c,[d,Z(a,"menu-external")]):c=I(d,b);b.widgetMenu=c}return b.widgetMenu}
k.isToggled=function(a){return N(a,Z(this,"toggled"))};
k.toggle=function(a){if(this.o(a,"button-toggle")){var b=J(a,Z(this,"group")),c=Z(this,"toggled"),d=N(a,c);if(b&&this.o(b,"button-toggle-group")){var e=this.o(b,"button-toggle-group");B(H(Z(this),b),function(b){b!=a||"optional"==e&&d?(P(b,c),b.removeAttribute("aria-pressed")):(O(a,c),b.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),Nf(a,c)}};
k.click=function(a){if(Qm(this,a)){var b=Qm(this,a);if(b){var c=J(b.activeButtonNode||b.parentNode,Z(this));c&&c!=a?(Um(this,c),T(w(this.lb,this,a),1)):Ml(b)?Um(this,a):this.lb(a)}a.focus()}this.na(a,"button-action")};
function Pm(a){a.b&&Um(a,a.b)}
;function $m(a){Km.call(this,a);this.g=null}
A($m,Km);k=$m.prototype;k.L=function(a){var b=Km.prototype.L.call(this,a);return b?b:a};
k.register=function(){Lm(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
k.dispose=function(){an(this);$m.C.dispose.call(this)};
k.o=function(a,b){var c=$m.C.o.call(this,a,b);return c?c:(c=$m.C.o.call(this,a,"card-config"))&&(c=u(c))&&c[b]?c[b]:null};
k.show=function(a){var b=this.L(a);if(b){O(b,Z(this,"active"));var c=bn(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;cn(this,a,c);var d=Z(this,"card-visible"),e=this.o(a,"card-delegate-show")&&this.o(b,"card-action");this.na(b,"card-action",a);this.g=a;Ol(c);T(w(function(){e||(Nl(c),U("yt-uix-card-show",b,a,c));dn(c);O(c,d);U("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function bn(a,b,c){var d=c||b,e=Z(a,"card");c=en(a,d);var f=G(Z(a,"card")+Ij(d));if(f)return a=I(Z(a,"card-body"),f),wd(a,c)||(td(c),a.appendChild(c)),f;f=document.createElement("div");f.id=Z(a,"card")+Ij(d);f.className=e;(d=a.o(d,"card-class"))&&Jf(f,d.split(/\s+/));d=document.createElement("div");d.className=Z(a,"card-border");b=a.o(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=Z(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;td(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function cn(a,b,c){var d=a.o(b,"orientation")||"horizontal",e=I(Z(a,"anchor"),b)||b,f=a.o(b,"position"),g=!!a.o(b,"force-position"),h=a.o(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f;if(m&&l){var q=13;var y=8}else m&&!l?(q=12,y=9):!m&&l?(q=9,y=12):(q=8,y=13);var z=Oh(document.body);f=Oh(b);z!=f&&(q^=4);if(d){f=b.offsetHeight/2-12;var C=new F(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,C=new F(b.offsetWidth+6,-12);var v=Lh(c);f=
Math.min(f,(d?v.height:v.width)-24-6);6>f&&(f=6,d?C.y+=12-b.offsetHeight/2:C.x+=12-b.offsetWidth/2);v=null;g||(v=10);b=Z(a,"card-flip");a=Z(a,"card-reverse");Lf(c,b,m);Lf(c,a,l);v=Wh(e,q,c,y,C,null,v);!g&&v&&(v&48&&(m=!m,q^=4,y^=4),v&192&&(l=!l,q^=1,y^=1),Lf(c,b,m),Lf(c,a,l),Wh(e,q,c,y,C));h&&(e=parseInt(c.style.top,10),g=ld(document).y,Bh(c,"position","fixed"),Bh(c,"top",e-g+"px"));z&&(c.style.right="",e=Nh(c),e.left=e.left||parseInt(c.style.left,10),g=jd(window),c.style.left="",c.style.right=g.width-
e.left-e.width+"px");e=I("yt-uix-card-body-arrow",c);g=I("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!z&&m||z&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=I("yt-uix-card-arrow",c);m=I("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?Lh(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
k.hide=function(a){if(a=this.L(a)){var b=G(Z(this,"card")+Ij(a));b&&(P(a,Z(this,"active")),P(b,Z(this,"card-visible")),Ol(b),this.g=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(td(b.cardMask),b.cardMask=null))}};
function an(a){a.g&&a.hide(a.g)}
k.Cc=function(a,b){var c=this.L(a);if(c){if(b){var d=en(this,c);if(!d)return;b instanceof Uc?d.innerHTML=Wc(b):xd(d,b)}N(c,Z(this,"active"))&&(c=bn(this,a,c),cn(this,a,c),Nl(c),dn(c))}};
k.isActive=function(a){return(a=this.L(a))?N(a,Z(this,"active")):!1};
function en(a,b){var c=b.cardContentNode;if(!c){var d=Z(a,"content"),e=Z(a,"card-content");(c=(c=a.o(b,"card-id"))?G(c):I(d,b))||(c=document.createElement("div"));var f=c;P(f,d);O(f,e);b.cardContentNode=c}return c}
function dn(a){var b=a.cardMask;b||(b=rd(document,"IFRAME"),b.src='javascript:""',Jf(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function fn(){Km.call(this,"kbd-nav")}
var gn;A(fn,Km);wa(fn);k=fn.prototype;k.register=function(){Mm(this,"keydown",this.Ra);Lm(this,"yt-uix-kbd-nav-move-in",this.Za);Lm(this,"yt-uix-kbd-nav-move-in-to",this.Wb);Lm(this,"yt-uix-kbd-move-next",this.ab);Lm(this,"yt-uix-kbd-nav-move-to",this.va)};
k.unregister=function(){Nm(this,"keydown",this.Ra);Xj(gn)};
k.Ra=function(a,b,c){var d=c.keyCode;if(a=J(a,Z(this)))switch(d){case 13:case 32:this.Za(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Pf(a,"kbdNavMoveOut");!c;){c=J(a.parentElement,Z(this));if(!c)break a;c=Pf(c,"kbdNavMoveOut")}c=G(c);this.va(c);U("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&N(a,Z(this,"list")))switch(d){case 40:this.ab(b,a);break;case 38:d=document.activeElement==a,a=hn(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),jn(this,a[b]))}c.preventDefault()}};
k.Za=function(a){var b=Pf(a,"kbdNavMoveIn");b=G(b);kn(this,a,b);this.va(b)};
k.Wb=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}kn(this,d,a);this.va(a)};
k.va=function(a){if(a)if(Cd(a))a.focus();else{var b=yd(a,function(a){return vd(a)?Cd(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function kn(a,b,c){if(b&&c)if(O(c,Z(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Of&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
k.ab=function(a,b){var c=document.activeElement==b,d=hn(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),jn(this,d[c]))};
function jn(a,b){if(b){var c=Hd(b,"LI");c&&(O(c,Z(a,"highlight")),gn=X(b,"blur",w(function(a){P(a,Z(this,"highlight"));Xj(gn)},a,c)))}}
function hn(a){if("UL"!=a.tagName.toUpperCase())return[];a=Za(ud(a),function(a){return"LI"==a.tagName.toUpperCase()});
return Za($a(a,function(a){return Ml(a)?yd(a,function(a){return vd(a)?Cd(a):!1}):!1}),function(a){return!!a})}
;function ln(){Km.call(this,"menu");this.f=this.b=null;this.g={};this.D={};this.i=null}
A(ln,Km);wa(ln);function mn(a){var b=ln.w();if(N(a,Z(b)))return a;var c=b.L(a);return c?c:J(a,Z(b,"content"))==b.b?b.f:null}
k=ln.prototype;k.register=function(){Mm(this,"click",this.mb);Mm(this,"mouseenter",this.Cb);Lm(this,"page-scroll",this.Fb);Lm(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.L(a);nn(this,a)});
this.i=new Q};
k.unregister=function(){Nm(this,"click",this.mb);this.f=this.b=null;Xj(kb(La(this.g)));this.g={};Ja(this.D,function(a){td(a)},this);
this.D={};Hf(this.i);this.i=null;ln.C.unregister.call(this)};
k.mb=function(a,b,c){a&&(b=on(this,a),!b.disabled&&Kj(c.target,b)&&pn(this,a))};
k.Cb=function(a,b,c){a&&N(a,Z(this,"hover"))&&Kj(c.target,on(this,a))&&pn(this,a,!0)};
k.Fb=function(){this.b&&this.f&&qn(this,this.f,this.b)};
function qn(a,b,c){var d=rn(a,b);if(d){var e=Lh(c);if(e instanceof ad){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Kh(e,!0);d.style.height=Kh(f,!0)}c==a.b&&(e=9,f=8,N(b,Z(a,"reversed"))&&(e^=1,f^=1),N(b,Z(a,"flipped"))&&(e^=4,f^=4),a=new F(0,1),d&&Wh(b,e,d,f,a,null,197),Wh(b,e,c,f,a,null,197))}
function pn(a,b,c){sn(a,b)&&!c?nn(a,b):(tn(a,b),!a.b||Kj(b,a.b)?a.nb(b):Yh(a.i,w(a.nb,a,b)))}
k.nb=function(a){if(a){var b=un(this,a);if(b){Ki("yt-uix-menu-before-show",a,b);this.b?Kj(a,this.b)||nn(this,this.f):(this.f=a,this.b=b,N(a,Z(this,"sibling-content"))||(td(b),document.body.appendChild(b)),b.style.minWidth=on(this,a).offsetWidth-2+"px");var c=rn(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);P(b,Z(this,"content-hidden"));qn(this,a,b);Jf(on(this,a),[Z(this,"trigger-selected"),"yt-uix-button-toggled"]);U("yt-uix-menu-show",a);vn(b);wn(this,a);U("yt-uix-kbd-nav-move-in-to",
b);var d=w(this.Ec,this,a),e=w(this.Rb,this,a);c=Ca(a).toString();this.g[c]=[X(b,"click",e),X(document,"click",d)];N(a,Z(this,"indicate-selected"))&&(d=w(this.Sb,this,a),this.g[c].push(X(b,"click",d)));N(a,Z(this,"hover"))&&(a=w(this.Db,this,a),this.g[c].push(X(document,"mousemove",a)))}}};
k.Db=function(a,b){var c=Uj(b);c&&(Kj(c,on(this,a))||xn(this,c)||yn(this,a))};
k.Ec=function(a,b){var c=Uj(b);if(c){if(xn(this,c)){var d=J(c,Z(this,"content")),e=Hd(c,"LI");e&&d&&wd(d,e)&&Ki("yt-uix-menu-item-clicked",c);c=J(c,Z(this,"close-on-select"));if(!c)return;d=mn(c)}nn(this,d||a)}};
function tn(a,b){if(b){var c=J(b,Z(a,"content"));c&&B(H(Z(a),c),function(a){!Kj(a,b)&&sn(this,a)&&yn(this,a)},a)}}
function nn(a,b){if(b){var c=[];c.push(b);var d=un(a,b);d&&(d=H(Z(a),d),d=fb(d),c=c.concat(d),B(c,function(a){sn(this,a)&&yn(this,a)},a))}}
function yn(a,b){if(b){var c=un(a,b);Kf(on(a,b),[Z(a,"trigger-selected"),"yt-uix-button-toggled"]);O(c,Z(a,"content-hidden"));var d=un(a,b);d&&hd(d,{"aria-expanded":"false"});(d=rn(a,b))&&d.parentNode&&td(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.i&&a.i.F("ROOT_MENU_REMOVED"));U("yt-uix-menu-hide",b);c=Ca(b).toString();Xj(a.g[c]);delete a.g[c]}}
k.Rb=function(a,b){var c=Uj(b);c&&zn(this,a,c)};
k.Sb=function(a,b){var c=Uj(b);if(c){var d=on(this,a);if(d&&(c=Hd(c,"LI")))if(c=Fd(c).trim(),d.hasChildNodes()){var e=Om.w();(d=I(Z(e,"content"),d))&&xd(d,c)}else xd(d,c)}};
function wn(a,b){var c=un(a,b);if(c){B(c.children,function(a){"LI"==a.tagName&&hd(a,{role:"menuitem"})});
hd(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ca(c),c.id=d);(c=on(a,b))&&hd(c,{"aria-controls":d})}}
function zn(a,b,c){var d=un(a,b);d&&N(b,Z(a,"checked"))&&(a=Hd(c,"LI"))&&(a=I("yt-ui-menu-item-checked-hid",a))&&(B(H("yt-ui-menu-item-checked",d),function(a){Mf(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Mf(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function sn(a,b){var c=un(a,b);return c?!N(c,Z(a,"content-hidden")):!1}
function vn(a){B(fd(document,"UL",null,a),function(a){a.tabIndex=0;var b=fn.w();Jf(a,[Z(b),Z(b,"list")])})}
function un(a,b){var c=W(b,"menu-content-id");return c&&(c=G(c))?(Jf(c,[Z(a,"content"),Z(a,"content-external")]),c):b==a.f?a.b:I(Z(a,"content"),b)}
function rn(a,b){var c=Ca(b).toString(),d=a.D[c];if(!d){d=rd(document,"IFRAME");d.src='javascript:""';var e=[Z(a,"mask")];B(If(b),function(a){e.push(a+"-mask")});
Jf(d,e);a.D[c]=d}return d||null}
function on(a,b){return I(Z(a,"trigger"),b)}
function xn(a,b){return Kj(b,a.b)||Kj(b,a.f)}
;function An(){$m.call(this,"clickcard");this.b={};this.f={}}
A(An,$m);wa(An);k=An.prototype;k.register=function(){An.C.register.call(this);Mm(this,"click",this.Oa,"target");Mm(this,"click",this.Na,"close")};
k.unregister=function(){An.C.unregister.call(this);Nm(this,"click",this.Oa,"target");Nm(this,"click",this.Na,"close");for(var a in this.b)Xj(this.b[a]);this.b={};for(a in this.f)Xj(this.f[a]);this.f={}};
k.Oa=function(a,b,c){c.preventDefault();b=Hd(c.target,"button");b&&b.disabled||(a=(b=this.o(a,"card-target"))?ed(b):a,b=this.L(a),this.o(b,"disabled")||(N(b,Z(this,"active"))?(this.hide(a),P(b,Z(this,"active"))):(this.show(a),O(b,Z(this,"active")))))};
k.show=function(a){An.C.show.call(this,a);var b=this.L(a),c=Ca(a).toString();if(!W(b,"click-outside-persists")){if(this.b[c])return;b=X(document,"click",w(this.Pa,this,a));var d=X(window,"blur",w(this.Pa,this,a));this.b[c]=[b,d]}a=X(window,"resize",w(this.Cc,this,a,void 0));this.f[c]=a};
k.hide=function(a){An.C.hide.call(this,a);a=Ca(a).toString();var b=this.b[a];b&&(Xj(b),this.b[a]=null);if(b=this.f[a])Xj(b),delete this.f[a]};
k.Pa=function(a,b){var c="yt-uix"+(this.j?"-"+this.j:"")+"-card",d=null;b.target&&(d=J(b.target,c)||J(mn(b.target),c));(d=d||J(document.activeElement,c)||J(mn(document.activeElement),c))||this.hide(a)};
k.Na=function(a){(a=J(a,Z(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Bn(){$m.call(this,"hovercard")}
A(Bn,$m);wa(Bn);k=Bn.prototype;k.register=function(){Mm(this,"mouseenter",this.Va,"target");Mm(this,"mouseleave",this.Xa,"target");Mm(this,"mouseenter",this.Wa,"card");Mm(this,"mouseleave",this.Ya,"card")};
k.unregister=function(){Nm(this,"mouseenter",this.Va,"target");Nm(this,"mouseleave",this.Xa,"target");Nm(this,"mouseenter",this.Wa,"card");Nm(this,"mouseleave",this.Ya,"card")};
k.Va=function(a){if(Cn!=a){Cn&&(this.hide(Cn),Cn=null);var b=w(this.show,this,a),c=parseInt(this.o(a,"delay-show"),10);b=T(b,-1<c?c:200);Ej(a,"card-timer",b.toString());Cn=a;a.alt&&(Ej(a,"card-alt",a.alt),a.alt="");a.title&&(Ej(a,"card-title",a.title),a.title="")}};
k.Xa=function(a){var b=parseInt(this.o(a,"card-timer"),10);Ci(b);this.L(a).isCardHidable=!0;b=parseInt(this.o(a,"delay-hide"),10);b=-1<b?b:200;T(w(this.Gb,this,a),b);if(b=this.o(a,"card-alt"))a.alt=b;if(b=this.o(a,"card-title"))a.title=b};
k.Gb=function(a){this.L(a).isCardHidable&&(this.hide(a),Cn=null)};
k.Wa=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
k.Ya=function(a){a&&this.hide(a.cardTargetNode)};
var Cn=null;function Dn(a,b,c,d,e,f){this.b=a;this.H=null;this.g=I("yt-dialog-fg",this.b)||this.b;if(a=I("yt-dialog-title",this.g)){var g="yt-dialog-title-"+Ca(this.g);a.setAttribute("id",g);this.g.setAttribute("aria-labelledby",g)}this.g.setAttribute("tabindex","-1");this.N=I("yt-dialog-focus-trap",this.b);this.X=!1;this.i=new Q;this.l=[];this.l.push(Vj(this.b,"click",w(this.Yb,this),"yt-dialog-dismiss"));this.l.push(X(this.N,"focus",w(this.yb,this),!0));En(this);this.ba=b;this.ea=c;this.da=d;this.J=e;this.ma=
f;this.D=this.j=null}
var Fn={LOADING:"loading",Gc:"content",Tc:"working"};function Gn(a,b){a.V()||a.i.subscribe("post-all",b)}
function En(a){a=I("yt-dialog-fg-content",a.b);var b=[];Ja(Fn,function(a){b.push("yt-dialog-show-"+a)});
Kf(a,b);O(a,"yt-dialog-show-content")}
k=Dn.prototype;
k.show=function(){if(!this.V()){this.H=document.activeElement;if(!this.da){this.f||(this.f=G("yt-dialog-bg"),this.f||(this.f=rd(document,"div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=jd(a).height,kd(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);
c=b>a?b>e?b:e:b<e?b:e}else c=0}this.f.style.height=c+"px";Nl(this.f)}this.Sa();c=Hn(this);In(c);this.j=X(document,"keydown",w(this.Qb,this));c=this.b;d=Hi("player-added",this.Sa,this);Ej(c,"player-ready-pubsub-key",d);this.ea&&(this.D=X(document,"click",w(this.wc,this)));Nl(this.b);this.g.setAttribute("tabindex","0");Jn(this);this.J||O(document.body,"yt-dialog-active");Pm(Om.w());an(An.w());an(Bn.w());U("yt-ui-dialog-show-complete",this)}};
function Kn(){return ab(H("yt-dialog"),function(a){return Ml(a)})}
k.Sa=function(){this.ma||Mj(this.b)};
function Hn(a){var b=fd(document,"iframe",null,a.b);B(b,function(a){var b=W(a,"onload");b&&(b=u(b))&&X(a,"load",b);if(b=W(a,"src"))a.src=b},a);
return fb(b)}
function In(a){B(document.getElementsByTagName("iframe"),function(b){-1==Ya(a,b)&&O(b,"iframe-hid")})}
function Ln(){B(H("iframe-hid"),function(a){P(a,"iframe-hid")})}
k.Yb=function(a){a=a.currentTarget;a.disabled||(a=W(a,"action")||"",this.dismiss(a))};
k.dismiss=function(a){if(!this.V()){this.i.F("pre-all");this.i.F("pre-"+a);Ol(this.b);an(An.w());an(Bn.w());this.g.setAttribute("tabindex","-1");Kn()||(Ol(this.f),this.J||P(document.body,"yt-dialog-active"),Nj(),Ln());this.j&&(Xj(this.j),this.j=null);this.D&&(Xj(this.D),this.D=null);var b=this.b;if(b){var c=W(b,"player-ready-pubsub-key");c&&(Ji(c),b&&(b.dataset?delete b.dataset[Fj("player-ready-pubsub-key")]:b.removeAttribute("data-player-ready-pubsub-key")))}this.i.F("post-all");U("yt-ui-dialog-hide-complete",
this);"cancel"==a&&U("yt-ui-dialog-cancelled",this);this.i&&this.i.F("post-"+a);this.H&&this.H.focus()}};
k.setTitle=function(a){xd(I("yt-dialog-title",this.b),a)};
k.Qb=function(a){T(w(function(){this.ba||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&N(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
k.wc=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
k.V=function(){return this.X};
k.dispose=function(){Ml(this.b)&&this.dismiss("dispose");Xj(this.l);this.l.length=0;T(w(function(){this.H=null},this),0);
this.N=this.g=null;this.i.dispose();this.i=null;this.X=!0};
k.yb=function(a){a.stopPropagation();Jn(this)};
function Jn(a){T(w(function(){this.g&&this.g.focus()},a),0)}
x("yt.ui.Dialog",Dn);function Mn(){Km.call(this,"overlay");this.i=this.f=this.g=this.b=null}
A(Mn,Km);wa(Mn);k=Mn.prototype;k.register=function(){Mm(this,"click",this.Ga,"target");Mm(this,"click",this.hide,"close");Nn(this)};
k.unregister=function(){Mn.C.unregister.call(this);Nm(this,"click",this.Ga,"target");Nm(this,"click",this.hide,"close");this.i&&(Ji(this.i),this.i=null);this.f&&(Xj(this.f),this.f=null)};
k.Ga=function(a){if(!this.b||!Ml(this.b.b)){var b=this.L(a);a=On(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.o(b,"disable-shortcuts")||!1,d=!!this.o(b,"disable-outside-click-dismiss")||!1;this.b=new Dn(a,c);this.g=b;var e=I("yt-dialog-fg",a);if(e){var f=this.o(b,"overlay-class")||"",g=this.o(b,"overlay-style")||"default",h=this.o(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(Z(this,g));f.push(Z(this,h));Jf(e,f)}this.b.show();U("yt-uix-kbd-nav-move-to",e||a);Nn(this);c||
d||(c=w(function(a){N(a.target,"yt-dialog-base")&&Pn(this)},this),this.f=X(I("yt-dialog-base",a),"click",c));
this.na(b,"overlay-shown");U("yt-uix-overlay-shown",b)}}};
function Nn(a){a.i||(a.i=Hi("yt-uix-overlay-hide",Qn));a.b&&Gn(a.b,function(){var a=Mn.w();a.g=null;a.b.dispose();a.b=null})}
function Pn(a){if(a.b){var b=a.g;a.b.dismiss("overlayhide");b&&a.na(b,"overlay-hidden");a.g=null;a.f&&(Xj(a.f),a.f=null);a.b=null}}
function On(a,b){var c;if(a)if(c=I("yt-dialog",a)){var d=G("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=J(b,"yt-dialog"));return c}
function Rn(){var a=Mn.w();if(a.g)a=I("yt-dialog-fg-content",a.g.overlayContentNode);else a:{if(a=H("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=J(a[b],"yt-dialog");if(Ml(c)){a=a[b];break a}}a=null}return a}
k.hide=function(a){a&&a.disabled||U("yt-uix-overlay-hide")};
function Qn(){Pn(Mn.w())}
k.show=function(a){this.Ga(a)};function Sn(a){var b=document.createElement("div");b.innerHTML=a;document.body.appendChild(b);this.id="ypc-offer-overlay"}
var Tn={Nc:"ypc-offer-overlay-show-loading",Mc:"ypc-offer-overlay-show-error",Kc:"ypc-offer-overlay-show-offers-content",Oc:"ypc-offer-overlay-show-not-available-error"};Sn.prototype.hide=function(){Mn.w().hide()};
Sn.prototype.show=function(a){a=ed(a);Mn.w().show(a)};
function Un(a){var b=Rn();return b?I(a,b):null}
function Vn(a){a&&Ua(Tn,a);a=Un("ypc-offer-overlay-container");Kf(a,La(Tn))}
Sn.prototype.R=function(a){var b=Un("ypc-offer-overlay-container");O(b,a)};
function Wn(a){a.show(a.id);a.R("ypc-offer-overlay-show-loading")}
;function Xn(a){Em.call(this,a);Cm(this.g,this.b,"click",this.j,"unlimited-family-message-action-button");Cm(this.g,this.b,"click",this.N,"unlimited-family-message-not-now-button")}
A(Xn,Em);Xn.prototype.N=function(a){(a=Pf(a.currentTarget,"come_back_html"))?this.f.aa(wb(a),!0):(a=this.f,a.b?(a.aa(a.b),a=!0):a=!1,a||this.W(null,!1,null))};
Xn.prototype.j=function(a){var b=Pf(a.currentTarget,"is_unicorn_debug_enabled"),c=Pf(a.currentTarget,"hl"),d=Pf(a.currentTarget,"rpcid_params"),e=Pf(a.currentTarget,"success_redirect_url");a=Pf(a.currentTarget,"error_redirect_url");Wn(this.f);this.i||(this.i=new Fm("ypc-offer-overlay-content-wrapper","unlimited-family-message-overlay-container"));a:{if(b&&"true"==b&&(b=lj(window.location.href).unicorn)){b=kj(decodeURIComponent(b));break a}b={}}this.i.start(this,c,d,e,a,b)};
Xn.prototype.W=function(a,b,c){a instanceof Pj&&a.preventDefault();this.f&&this.f.hide();c?Vl(c):b&&window.location.reload(!0);this.dispose()};function Yn(){Sn.call(this,Oi("YPC_OFFER_OVERLAY"));this.f=Zn();this.b=null}
A(Yn,Sn);wa(Yn);var ih="data-come_back_html data-error_redirect_url data-hl data-is_unicorn_debug_enabled data-rpcid_params data-sessionlink data-success_redirect_url data-url data-visibility-tracking data-ytimg".split(" "),$n={pb:"ypc-offer-overlay-show-unicorn-iframe-in-content"};function Zn(){return new ah(gh(function(a){return a}))}
k=Yn.prototype;k.aa=function(a,b){var c=Un("ypc-offer-overlay-content-wrapper");if(a&&c){var d=rh(this.f,a);c.innerHTML=Wc(d);this.R("ypc-offer-overlay-show-offers-content");b||(this.b=a)}};
k.T=function(a){var b=Un("ypc-offer-overlay-error");P(b,"ypc-offer-overlay-show-custom-error");var c=Un("ypc-offer-overlay-error-custom-content");a&&c&&(O(b,"ypc-offer-overlay-show-custom-error"),a=rh(this.f,a),c.innerHTML=Wc(a));this.R("ypc-offer-overlay-show-error")};
k.hide=function(){var a=Un("ypc-offer-overlay-content-wrapper");a&&sd(a);Yn.C.hide.call(this)};
k.R=function(a){Vn($n);Yn.C.R.call(this,a);"ypc-offer-overlay-show-unicorn-iframe-in-content"==a?ao(!0):ao(!1)};
function ao(a){var b=I("ypc-offer-overlay-container"),c=I("yt-dialog-show-content"),d=J(c,"yt-dialog-base");b&&bo(b,a);c&&bo(c,a);d&&bo(d,a)}
function bo(a,b){a&&(b&&!N(a,"ytr-style-unicorn-iframe-container")?O(a,"ytr-style-unicorn-iframe-container"):!b&&N(a,"ytr-style-unicorn-iframe-container")&&P(a,"ytr-style-unicorn-iframe-container"))}
k.ga=function(){return new Xn(this)};function co(a,b,c){Em.call(this,a);this.j=b;this.f=a;this.flowType=c;this.i=null}
A(co,Em);k=co.prototype;k.K=function(){this.j.track("dispose-OfferOverlay-EventsManager");eo(this);this.j.dispose();Dm(this.g);Ji(this.l);this.l.length=0;aj(this.J);this.J.length=0;co.C.K.call(this)};
k.ja=function(){co.C.ja.call(this);Cm(this.g,this.b,"click",this.eb,"ypc-offer-overlay-offer-button");Cm(this.g,this.b,"click",this.hc,"ypc-post-purchase-overlay-done-button");Cm(this.g,this.b,"click",this.lc,"ypc-offer-overlay-switch-accounts-button")};
k.wa=function(a){a&&(a.subscribe("ypc-purchase-wallet-start",this.uc,this),a.subscribe("ypc-purchase-wallet-end",this.tc,this),a.subscribe("ypc-post-purchase-init",this.xc,this),a.subscribe("ypc-direct-purchase-error",this.xb,this))};
k.W=function(a){a instanceof Pj&&a.preventDefault();this.f&&this.f.hide();Yi("ypc-purchase-flow-end");this.dispose()};
k.eb=function(a){var b=a.currentTarget;if(b){var c=this.flowType;if(b){var d=W(b,"ypc-item-type"),e=W(b,"ypc-item-id"),f=W(b,"ypc-offer-id"),g=W(b,"coupon-code"),h=W(b,"ypc-from-purchase-ids");a=W(b,"ypc-offer-jwt");var l=W(b,"ypc-offer-encrypted-purchase-params"),m=W(b,"ypc-irp"),q=W(b,"ypc-transaction-action");b=W(b,"ypc-transaction-params");c={config:{couponCode:g,fromPurchaseIds:h,flowType:c},itemData:{itemId:e,itemType:d},offerData:{offerId:f}};if(a||l)d={},a&&(d.jwt=a),l&&(d.encryptedPurchaseParams=
l),c.walletPrefetchdata=d;m&&(c.innertubeRequestParams=m);q&&(c.transactionAction=q);b&&(c.transactionParams=b);a=c}else a=null;if(a){try{this.Ha(a)}catch(y){return}this.j.track("initiate-purchase-from-offeroverlay");fo(this,a)}else Bi(Error("ypc-offer-overlay-offer-button does not contain purchaseFlowData."))}};
k.Ha=function(){};
function fo(a,b){go();ho(a,b);a.i=new um(b,a.j,new Am);a.wa(a.i);var c=a.i,d=c.ya.walletPrefetchdata;d&&d.encryptedPurchaseParams?(Nk("buyFlowStarted",{offerParams:c.ka}),xm(c,d.encryptedPurchaseParams)):wm(c)}
k.uc=function(){this.f&&this.f.hide();Mj()};
k.tc=function(){Nj();Wn(this.f)};
k.xc=function(a){eo(this);var b=a.overlayHtml||null,c=a.screenOverlayHtml||null,d=a.errorHtml||null;a=!!a.supressError;c?(b=Yn.w(),Wn(b),b.aa(c),b.ga()):b?this.f.aa(b):a?this.W(null):d?this.f.T(d):this.f.T()};
k.hc=function(){var a=[];B(H("subscription-list-item",this.b),function(b){N(b,"selected")&&a.push(W(b,"channel-id"))});
a.length?(Wn(this.f),Yi(ej,new bj(a))):this.W(null)};
function ho(a,b){var c=b.itemData;c={itemType:c.itemType,itemId:c.itemId,offerId:b.offerData.offerId,flowType:a.flowType};var d=b.config.couponCode;d&&(c.couponCode=d);dm(a.j,c)}
function eo(a){a.i&&(a.i.dispose(),a.i=null)}
k.lc=function(a){a.preventDefault();a=mj(R("YPC_SWITCH_URL",void 0),{next:window.location.href},!0);Vl(a)};
k.xb=function(a){eo(this);a=a.errorMessage||"";if(this.f&&a){var b=this.f;b.show(b.id);b.T(a)}};function io(a,b){co.call(this,a,b,"D")}
A(io,co);k=io.prototype;k.ja=function(){io.C.ja.call(this);Cm(this.g,this.b,"click",Ha(this.jb,!0),"ypc-offer-overlay-show-subscription-offers");Cm(this.g,this.b,"click",Ha(this.jb,!1),"ypc-offer-overlay-show-non-subscription-offers");Cm(this.g,this.b,"click",this.Bc,"ypc-google-help");Cm(this.g,this.b,"click",this.Ka,"ypc-offer-overlay-apply-coupon");Cm(this.g,this.b,"keydown",this.Ka,"ypc-offer-overlay-show-coupon-input")};
k.pa=function(){io.C.pa.call(this);this.J.push($i("subscription-batch-subscribe-finished",this.W,this),$i("subscription-batch-subscribe-failure",this.f.T,this.f))};
k.jb=function(a){Lf(I("ypc-offer-overlay-offers-section",this.b),"show-subscription-offers",!!a)};
k.Ka=function(a){if("keydown"!=a.type||13==a.keyCode){a=nb(I("ypc-offer-overlay-show-coupon-input",this.b).value);var b=[];a&&(B(H("ypc-offer-overlay-offer-button",this.b),function(a){(a=W(a,"ypc-offer-id"))&&b.push(a)}),0!=b.length&&(go(),tj(R("YPC_TRANSACTION_URL",void 0),{method:"POST",
M:{action_apply_coupon:1,cc:a,oids:b.join(",")},context:this,onSuccess:function(a,b){var c=jo(this,b);ko();lo(this,c);c||mo(this,b)},
onError:function(a,b){ko();lo(this,!1);mo(this,b)}})))}};
function jo(a,b){var c=b.updated_offers,d=b.coupon_code,e=!1;typeof("number"==b.status&&c)&&B(H("ypc-coupon-updatable",a.b),function(a){var b=W(a,"ypc-offer-id");b=c[b];if(b.is_coupon_applied){var f;N(a,"ypc-coupon-updatable-offer-price-text")?f=b.updated_display_price:N(a,"ypc-coupon-updatable-free-trial-text")&&(f=b.updated_free_trial_text);f&&(xd(a,f),Ej(a,"coupon-code",d),e=!0)}},a);
return e}
function lo(a,b){var c=I("ypc-offer-overlay-coupon-section",a.b),d=I("ypc-offer-overlay-show-coupon-input",a.b),e=I("ypc-offer-overlay-apply-coupon",a.b);Kf(c,["ypc-valid-coupon","ypc-invalid-coupon"]);b?(O(c,"ypc-valid-coupon"),d.disabled=!0,e.disabled=!0):(O(c,"ypc-invalid-coupon"),d.value="",d.focus())}
function mo(a,b){b.error&&xd(I("ypc-offer-overlay-show-coupon-error",a.b),b.error)}
k.Bc=function(){var a=I("ypc-google-help",this.b),b=I("ypc-offer-overlay-offer-button",this.b);if(b)var c=W(b,"ghelp-product-id"),d=W(b,"ghelp-product-data");c&&d&&(b=JSON.parse(d),Tl(a,c,b))};function no(a){P(a,"yt-uix-form-error");td(I("yt-uix-form-error-message",a))}
;function oo(a,b){co.call(this,a,b,"T")}
A(oo,co);k=oo.prototype;k.ja=function(){oo.C.ja.call(this);Cm(this.g,this.b,"click",this.W,"ypc-tip-overlay-close");Cm(this.g,this.b,"click",this.nc,"ypc-tip-custom-amount-input");Cm(this.g,this.b,"keydown",this.pc,"ypc-tip-custom-amount-input");Cm(this.g,this.b,"change",this.qc,"ypc-tip-choice")};
k.pa=function(){oo.C.pa.call(this);this.l.push(Hi("yt-uix-expander-toggle",this.mc,this))};
k.Ha=function(a){oo.C.Ha.call(this,a);var b=po(this);if(b&&a.config)a.config.tipConfig=b;else throw Error("Invalid Config");};
k.wa=function(a){a&&(oo.C.wa.call(this,a),a.subscribe("ypc-tip-validation-error",this.sc,this))};
k.nc=function(){I("ypc-tip-choice-custom",this.b).checked=!0};
k.pc=function(a){3==a.keyCode||13==a.keyCode?(a.preventDefault(),Wj(I("ypc-tip-overlay-next-button"))):no(gd(this.b))};
k.qc=function(){no(gd(this.b));I("ypc-tip-custom-amount-input",this.b).value=""};
k.mc=function(a,b){var c=I("ypc-tip-comment-input",a);c&&(b?c.focus():c.value="")};
function po(a){var b=null,c=null;B(H("ypc-tip-choice",a.b),function(a){a.checked&&(b=a.value)});
if(I("ypc-tip-choice-custom",a.b).checked&&(c=I("ypc-tip-custom-amount-input",a.b).value,!(c&&isFinite(c)&&0<parseFloat(c))))return qo(a,""),null;var d=I("ypc-tip-comment-input",a.b);return Wl(b,I("ypc-tip-currency-input",a.b).value,c,d?d.value:null)}
k.sc=function(a){eo(this);qo(this,a.errorMessage||"")};
function qo(a,b){var c=gd(a.b);O(c,"yt-uix-form-error");if(b){var d=I("yt-uix-form-error-message",c);d?d.innerHTML=b:(d=od("SPAN","yt-uix-form-error-message",document.createTextNode(String(b))),d.setAttribute("role","alert"),c.appendChild(d))}ko()}
;function ro(){Sn.call(this,Oi("YPC_OFFER_OVERLAY"))}
A(ro,Sn);wa(ro);var so={Rc:"ypc-offer-overlay-show-tip-not-available-error",Pc:"ypc-offer-overlay-show-plus-page-not-available-error",pb:"ypc-offer-overlay-show-unicorn-iframe-in-content"},to={Lc:"ypc-offer-overlay-flow-default",Qc:"ypc-offer-overlay-flow-tip"};k=ro.prototype;k.aa=function(a){a&&(Un("ypc-offer-overlay-content-wrapper").innerHTML=a,this.R("ypc-offer-overlay-show-offers-content"))};
k.T=function(a){var b=Un("ypc-offer-overlay-error");b&&(P(b,"ypc-offer-overlay-show-custom-error"),a&&(O(b,"ypc-offer-overlay-show-custom-error"),Un("ypc-offer-overlay-error-custom-content").innerHTML=a),this.R("ypc-offer-overlay-show-error"))};
function uo(a,b){var c=b.flowTracker,d=b.itemData,e=b.flowType;c.track("flow-start",{itemType:d&&d.itemType,itemId:d&&d.itemId,flowType:e,innertubeRequestParams:b.innertubeRequestParams,couponCode:b.couponCode});Yi("ypc-purchase-flow-start",new mm(e));Wn(a);vo(e);Dj(b,{context:a,onSuccess:function(a,d){c.track("flow-offers-load-success");var e=Yl(d),f=e.offersHtml,g=e.channelsToSubscriptionidMap,q=e.componentChannels,y=e.isPurchaseNotAvailable;f?(jm.w().load(),this.aa(f)):g&&!Pa(g)?(Yi(qm,new lm(g,
e.channelInfoMap)),B(q,function(a){Yi(hj,new cj(a))}),c.track("flow-offers-already-purchased-error"),this.T(e.messageHtml)):y?(c.track("flow-offers-not-available-error"),wo(this,d.message_html,b.flowType,e.isPlusPageDirectLogin)):(c.track("flow-offers-load-error"),this.T(e.messageHtml))},
onError:function(){c.track("flow-offers-load-error");this.T()},
O:function(){this.ga(c,e)}})}
function go(){var a=xo();B(a,function(a){a.disabled=!0})}
function ko(){var a=xo();B(a,function(a){a.disabled=!1})}
k.hide=function(){var a=Un("ypc-offer-overlay-content-wrapper");a&&sd(a);ro.C.hide.call(this)};
function xo(){var a=[],b=Un("ypc-offer-overlay-container");if(!b)return a;B(fd(document,"button",null,b),function(b){a.push(b)});
B(fd(document,"input",null,b),function(b){a.push(b)});
return a}
k.R=function(a){Vn(so);ro.C.R.call(this,a)};
function vo(a){var b=Un("ypc-offer-overlay-container");Kf(b,La(to));"T"==a?O(b,"ypc-offer-overlay-flow-tip"):O(b,"ypc-offer-overlay-flow-default")}
function wo(a,b,c,d){b&&(d?(a.R("ypc-offer-overlay-show-plus-page-not-available-error"),a=Un("ypc-offer-plus-page-not-available-content")):"T"==c?(a.R("ypc-offer-overlay-show-tip-not-available-error"),a=Un("ypc-offer-overlay-tip-not-available-content")):(a.R("ypc-offer-overlay-show-not-available-error"),a=Un("ypc-offer-overlay-not-available-content")),a.innerHTML=b)}
k.ga=function(a,b){switch(b){case "T":return new oo(this,a);default:return new io(this,a)}};function yo(a,b){co.call(this,a,b,"D");Cm(this.g,this.b,"click",this.eb,"ypc-offer-button");Cm(this.g,this.b,"click",this.N,"unlimited-family-message-continue-button")}
A(yo,co);yo.prototype.N=function(a){a=Pf(a.currentTarget,"continue_html");this.f&&a?this.f.aa(wb(a),!0):this.f&&this.f.hide()};function zo(){ro.call(this)}
A(zo,ro);wa(zo);zo.prototype.ga=function(a){return new yo(this,a)};function Ao(a){if(a){var b=zo.w();Wn(b);b.aa(a);b.ga(hm(),"")}}
;var Bo=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};x("yt.uix.widgets_",Bo);function Co(a){this.b=a}
Co.prototype.write=function(a,b,c,d){a={action_write_promo:1,method:a,subtype:this.b};var e={};c&&(e.json_data=c);tj(d||"../../promo_ajax",{method:"POST",la:a,M:e,onSuccess:function(){if(b){b.Hb&&Ol(G(b.Hb));b.Ib&&Nl(G(b.Ib));if(b.onSuccess)b.onSuccess();if(b.yc)return Ul(b.yc)}},
onError:function(){b&&b.Jb&&Nl(G(b.Jb));if(b&&b.onError)b.onError()}})};function Do(){Km.call(this,"promo")}
A(Do,Km);wa(Do);Do.prototype.register=function(){Mm(this,"click",this.b)};
Do.prototype.unregister=function(){Nm(this,"click",this.b)};
Do.prototype.b=function(a){a=this.L(a);a=this.o(a,"promo-id");(new Co(a)).write("write_dismiss")};function Eo(){M.call(this);this.b=R("PAGE_NAME",null);this.g=R("CHANNEL_TAB",null);this.f=[];var a=Do.w(),b=Z(a);b in Bo||(a.register(),Lm(a,"yt-uix-init-"+b,a.init),Lm(a,"yt-uix-dispose-"+b,a.dispose),Bo[b]=a);this.f.push($i(fj,this.i,this),$i(gj,this.j,this))}
A(Eo,M);Eo.prototype.K=function(){Eo.C.K.call(this);var a=Do.w(),b=Z(a);b in Bo&&(a.unregister(),delete Bo[b]);aj(this.f);this.f.length=0};
Eo.prototype.i=function(a){"channel"==this.b&&(R("CHANNEL_ID")==a.b&&Fo(!1),Go(a.b,!1),a=G("paid-channel-promo")||G("paid-package-promo"))&&(Ol(a),a=W(I("ypc-promo-close",a),"promo-id"),(new Co(a)).write("write_dismiss"));this.dispose()};
Eo.prototype.j=function(a){"channel"==this.b&&"transaction"==this.g?window.location.reload(!0):"channel"==this.b&&(R("CHANNEL_ID")==a.b&&Fo(!0),Go(a.b,!0));this.dispose()};
function Go(a,b){if(R("CHANNEL_ID")==a){var c=H("yt-badge-ypc");c=Za(c,function(a){var b=N(a,"yt-badge-ypc-purchased");a=N(a,"yt-badge-ypc-free");return!b&&!a});
b?Nl.apply(null,c):Ol.apply(null,c)}}
function Fo(a){var b=I("ypc-channel-offer-card-container",I("primary-header-actions"));b&&Lf(b,"purchased",!a)}
;function Ho(){M.call(this);this.i=R("PAGE_NAME",null);this.b=!1;this.f=null;this.g=[];this.g.push($i(rm,this.l,this),$i("ypc-purchase-flow-end",this.j,this))}
A(Ho,M);Ho.prototype.K=function(){aj(this.g);this.g.length=0;this.i=null;this.b=!1;this.f=null;Ho.C.K.call(this)};
Ho.prototype.l=function(a){this.b=!0;var b=R("YTO_GTM_DATA");window.dataLayer=window.dataLayer||[];window.dataLayer.push(b);a.b.subscriptionId&&(this.f=!0)};
Ho.prototype.j=function(){if(this.b){switch(this.i){case "musickey":case "channel":case "unlimited":var a=R("YPC_POST_PURCHASE_REDIRECT_URL");a&&Vl(a);break;case "playlist":window.location.reload(!0);break;case "watch":this.f&&window.location.reload(!0)}this.dispose()}};var Io=["ypc-checkout-button","ypc-enabled"];function Jo(){var a=[];B(Io,function(b){gb(a,H(b))});
B(a,function(a){var b=W(a,"ypc-item-type"),d=W(a,"ypc-item-id"),e=W(a,"ypc-flow-type");a=W(a,"ypc-irp");e=e||"D";b={itemId:d,itemType:b};var f=hm();f.track("triggering-prefetch");e={itemData:b,flowType:e,flowTracker:f};a&&(e.innertubeRequestParams=a);Dj(e,{onSuccess:function(){f.track("prefetch-triggered")},
onError:function(){f.track("prefetch-trigger-failed")},
O:function(){f.dispose()}})})}
;function Ko(){var a=Oi("YPC_UNSUBSCRIBE_OVERLAY"),b=document.createElement("div");b.innerHTML=a;document.body.appendChild(b)}
wa(Ko);var Lo={Fc:"ypc-unsubscribe-overlay-confirm",Uc:"ypc-unsubscribe-overlay-xauth",Jc:"ypc-unsubscribe-overlay-plus-page-error",LOADING:"ypc-unsubscribe-overlay-loading",Sc:"ypc-unsubscribe-overlay-success",Hc:"ypc-unsubscribe-overlay-delayed",Ic:"ypc-unsubscribe-overlay-error"};Ko.prototype.show=function(){var a=ed("ypc-unsubscribe-overlay");Mn.w().show(a);Mo(this,"ypc-unsubscribe-overlay-loading")};
Ko.prototype.T=function(){Mo(this,"ypc-unsubscribe-overlay-error")};
Ko.prototype.L=function(){var a=Rn();return a?I("ypc-unsubscribe-overlay",a):null};
function Mo(a,b){var c=a.L();if(c){for(var d in Lo)P(c,Lo[d]);O(c,b)}}
;var No=[],Oo=!1;function Po(){Oo||(Oo=!0,No.push(Vj(document.documentElement,"click",Qo,"ypc-unsubscribe-confirm")))}
function Qo(a){var b=a.currentTarget;a=W(b,"ypc-item-type");b=W(b,"ypc-item-id");a&&b&&Ro(a,b)}
function So(a,b){var c=Ko.w();tj(R("YPC_SUBSCRIPTION_URL",void 0),{method:"GET",la:{action_pre_cancel_confirm:1,it:a,ii:b},onSuccess:function(a,b){var d=b.header,e=b.html,h=b.confirm_button_text,l=b.keep_button_text,m=b.help_url,q=b.is_plus_page_error;b.is_xauth_subscription?Mo(c,"ypc-unsubscribe-overlay-xauth"):q?Mo(c,"ypc-unsubscribe-overlay-plus-page-error"):(d&&(I("ypc-unsubscribe-overlay-title",c.L()).innerHTML=d),e&&(d=I("ypc-unsubscribe-overlay-confirm-content",c.L()),d.innerHTML=e),m&&(d=
I("ypc-unsubscribe-help",c.L()),Yc(d,m)),h&&(d=I("ypc-unsubscribe-confirm",c.L()),d.innerHTML=h),l&&(d=I("ypc-unsubscribe-keep",c.L()),d.innerHTML=l),Mo(c,"ypc-unsubscribe-overlay-confirm"))},
onError:function(){c.T()}})}
function Ro(a,b){Ko.w().show();tj(R("YPC_TRANSACTION_URL",void 0),{method:"POST",M:{action_cancel:1,it:a,ii:b},onSuccess:function(c,d){var e=d.status,f=d.component_channels,g=d.title,h=d.html;0===e?(e=Ko.w(),g&&(I("ypc-unsubscribe-overlay-title-success",e.L()).innerHTML=g),h&&(I("ypc-unsubscribe-overlay-content-success",e.L()).innerHTML=h),Mo(e,"ypc-unsubscribe-overlay-success"),To(a,b,f)):3==e?(g=Ko.w(),Mo(g,"ypc-unsubscribe-overlay-delayed"),To(a,b,f)):Ko.w().T()},
onError:function(){Ko.w().T()}})}
function To(a,b,c){var d={itemType:a,itemId:b},e=[];gb(e,H("ypc-unsubscribe-link"),H("ypc-unsubscribe-label"));e=Uo(e,a,b);Ol.apply(null,e);a=Uo(H("ypc-unsubscribe-complete"),a,b);Nl.apply(null,a);Yi(tm,new om(d,c))}
function Uo(a,b,c){return Za(a,function(a){var d=W(a,"ypc-item-type");a=W(a,"ypc-item-id");return d==b&&a==c})}
;var Vo=[];x("yt.www.ypc.subscription.init",Po);x("yt.www.ypc.checkout.showYpcOverlay",function(a,b,c,d,e){c=c||"D";a={itemId:b,itemType:a};b=hm();c={itemData:a,flowType:c,flowTracker:b,innertubeRequestParams:d,couponCode:e};uo(ro.w(),c)});
x("yt.www.ypc.checkout.showYpcOverlayForInnertubeRequestParams",function(a,b){a=a||"D";var c=hm();c={flowType:a,flowTracker:c,innertubeRequestParams:b};uo(ro.w(),c)});
x("yt.www.ypc.checkout.showScreenOverlay",function(a){if(a){var b=Yn.w();Wn(b);b.aa(a);b.ga()}});
x("yt.www.ypc.checkout.showPrepurchaseOverlay",Ao);x("yt.www.ypc.checkout.showPrepurchaseOverlay",Ao);x("yt.www.ypc.subscription.openUnsubscribeOverlay",function(a,b){var c=Ko.w();c.show();So(a,b);c=c.L();c=I("ypc-unsubscribe-confirm",c);Ej(c,"ypc-item-type",a);Ej(c,"ypc-item-id",b)});
x("yt.www.ypc.subscription.requestUnsubscribe",Ro);x("yt.www.ypc.checkout.offerpurchaser.purchaseOffer",function(a,b){var c=hm();dm(c,im(a));Yi("ypc-purchase-flow-start",new mm(a.config.flowType));var d=ro.w();b||Wn(d);fo(d.ga(c,a.config.flowType),a)});
x("yt.www.ypc.checkout.offerpurchaser.completeTransaction",function(a){var b=hm();dm(b,im(a));Yi("ypc-purchase-flow-start",new mm(a.config.flowType));var c=ro.w();Wn(c);b=c.ga(b,a.config.flowType);ho(b,a);b.i=new um(a,b.j,new Am);b.wa(b.i);a=b.i;zm(a,null,null,a.ya.transactionParams)});
Po();Vo.push($i("ypc-purchase-flow-start",function(a){new Ho;new Eo;"watch"==R("PAGE_NAME",null)&&"T"!=a.b&&(a=u("yt.www.watch.player.pause"),"function"==typeof a&&a())}),$i(sm,function(){new Eo}));
zj.w().init();R("PREFETCH_YPC_OFFERS")&&Jo();Hi("dispose",function(){Oo=!1;Xj(No);No.length=0;aj(Vo);Vo.length=0;zj.w().dispose()});}).call(this);

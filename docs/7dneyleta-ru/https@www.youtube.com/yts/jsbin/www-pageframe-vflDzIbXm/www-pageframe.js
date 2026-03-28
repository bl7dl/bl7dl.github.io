(function(){var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var da;a:{var ea={rd:!0},fa={};try{fa.__proto__=ea;da=fa.rd;break a}catch(a){}da=!1}ba=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ba;
function ia(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
var ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ka="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function la(a,b){if(b){for(var c=ka,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}}
function ma(){ma=function(){};
ka.Symbol||(ka.Symbol=na)}
var na=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function pa(){ma();var a=ka.Symbol.iterator;a||(a=ka.Symbol.iterator=ka.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return qa(this)}});
pa=function(){}}
function qa(a){var b=0;return ra(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function ra(a){pa();a={next:a};a[ka.Symbol.iterator]=function(){return this};
return a}
var sa=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
la("Reflect.construct",function(){return sa});
function ta(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ua="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
la("Object.assign",function(a){return a||ua});
function va(a){pa();var b=a[Symbol.iterator];return b?b.call(a):qa(a)}
la("Promise",function(a){function b(a){this.f=0;this.g=void 0;this.b=[];var b=this.h();try{a(b.resolve,b.reject)}catch(l){b.reject(l)}}
function c(){this.b=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.f=function(a){null==this.b&&(this.b=[],this.h());this.b.push(a)};
c.prototype.h=function(){var a=this;this.g(function(){a.j()})};
var e=ka.setTimeout;c.prototype.g=function(a){e(a,0)};
c.prototype.j=function(){for(;this.b&&this.b.length;){var a=this.b;this.b=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(n){this.i(n)}}}this.b=null};
c.prototype.i=function(a){this.g(function(){throw a;})};
b.prototype.h=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.l),reject:a(this.i)}};
b.prototype.l=function(a){if(a===this)this.i(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.F(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.w(a):this.j(a)}};
b.prototype.w=function(a){var b=void 0;try{b=a.then}catch(l){this.i(l);return}"function"==typeof b?this.I(b,a):this.j(a)};
b.prototype.i=function(a){this.C(2,a)};
b.prototype.j=function(a){this.C(1,a)};
b.prototype.C=function(a,b){if(0!=this.f)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.f);this.f=a;this.g=b;this.G()};
b.prototype.G=function(){if(null!=this.b){for(var a=0;a<this.b.length;++a)f.f(this.b[a]);this.b=null}};
var f=new c;b.prototype.F=function(a){var b=this.h();a.pb(b.resolve,b.reject)};
b.prototype.I=function(a,b){var c=this.h();try{a.call(b,c.resolve,c.reject)}catch(n){c.reject(n)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(Af){f(Af)}}:b}
var e,f,h=new b(function(a,b){e=a;f=b});
this.pb(d(a,e),d(c,f));return h};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.pb=function(a,b){function c(){switch(d.f){case 1:a(d.g);break;case 2:b(d.g);break;default:throw Error("Unexpected state: "+d.f);}}
var d=this;null==this.b?f.f(c):this.b.push(c)};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=va(a),f=e.next();!f.done;f=e.next())d(f.value).pb(b,c)})};
b.all=function(a){var c=va(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){h[b]=c;k--;0==k&&a(h)}}
var h=[],k=0;do h.push(void 0),k++,d(e.value).pb(f(h.length-1),b),e=c.next();while(!e.done)})};
return b});
la("WeakMap",function(a){function b(a){this.b=(f+=Math.random()+1).toString();if(a){ma();pa();a=va(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){ta(a,e)||ja(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(n){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!ta(a,e))throw Error("WeakMap key fail: "+a);a[e][this.b]=b;return this};
b.prototype.get=function(a){return ta(a,e)?a[e][this.b]:void 0};
b.prototype.has=function(a){return ta(a,e)&&ta(a[e],this.b)};
b.prototype["delete"]=function(a){return ta(a,e)&&ta(a[e],this.b)?delete a[e][this.b]:!1};
return b});
la("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return ra(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++h,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&ta(a.f,c))for(var e=0;e<d.length;e++){var k=d[e];if(b!==b&&k.key!==k.key||b===k.key)return{id:c,list:d,index:e,V:k}}return{id:c,list:d,index:-1,V:void 0}}
function e(a){this.f={};this.b=b();this.size=0;if(a){a=va(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(va([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(I){return!1}}())return a;
ma();pa();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.V?c.V.value=b:(c.V={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.V),this.b.previous.next=c.V,this.b.previous=c.V,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.V&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.V.previous.next=a.V.next,a.V.next.previous=a.V.previous,a.V.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).V};
e.prototype.get=function(a){return(a=d(this,a).V)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var h=0;return e});
la("Set",function(a){function b(a){this.b=new Map;if(a){a=va(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(va([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(h){return!1}}())return a;
ma();pa();b.prototype.add=function(a){this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
la("Array.from",function(a){return a?a:function(a,c,d){pa();c=null!=c?c:function(a){return a};
var b=[],f=a[Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var h=0;h<f;h++)b.push(c.call(d,a[h]))}return b}});
var wa=wa||{},m=this;function p(a){return void 0!==a}
function q(a){return"string"==typeof a}
function xa(a){return"number"==typeof a}
var ya=/^[\w+/_-]+[=]{0,2}$/,za=null;function r(a,b){for(var c=a.split("."),d=b||m,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function t(){}
function Aa(a){a.W=void 0;a.getInstance=function(){return a.W?a.W:a.W=new a}}
function Ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Ca(a){return"array"==Ba(a)}
function Da(a){var b=Ba(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ea(a){return"function"==Ba(a)}
function Fa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ga(a){return a[Ha]||(a[Ha]=++Ia)}
var Ha="closure_uid_"+(1E9*Math.random()>>>0),Ia=0;function Ja(a,b,c){return a.call.apply(a.bind,arguments)}
function Ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function u(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u=Ja:u=Ka;return u.apply(null,arguments)}
function v(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var w=Date.now||function(){return+new Date};
function x(a,b){var c=a.split("."),d=m;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&p(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function z(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ef=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function La(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))}
var Ma=La("loadGamesSDK")?"/cast_game_sender.js":"../../cast_sender.js",Na=La("loadCastFramework")||La("loadCastApplicationFramework");function Oa(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null}
var Pa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];function Qa(a){a.length?Ra(a.shift(),function(){Qa(a)}):Sa()}
function Ta(a){return"chrome-extension://"+a+Ma}
function Ra(a,b,c){var d=document.createElement("script");d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)}
function Va(a){return 0<=window.navigator.userAgent.indexOf(a)}
function Sa(){var a=Oa();a&&a(!1,"No cast extension found")}
function Wa(){if(Na){var a=2,b=Oa(),c=function(){a--;0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Ra("../../../https@www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",Sa,c)}}
function Xa(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;a&&(Wa(),a({command:"cast.sender.init"}))}
function Ya(){Wa();var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);Qa(["../../../https@www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+Ma,"../../../https@www.gstatic.com/eureka/clank"+Ma])}
;function Za(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function $a(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;y=n=0}
function b(a){for(var b=h,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],k=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var n=k^d&(f^k);var y=1518500249}else n=d^f^k,y=1859775393;else 60>c?(n=d&f|k&(d|f),y=2400959708):(n=d^f^k,y=3395469782);n=((a<<5|a>>>27)&4294967295)+n+l+y+b[c]&4294967295;l=k;k=f;f=(d<<30|d>>>2)&4294967295;d=a;a=n}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+k&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,h=a.length;e<h;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==n)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,y+=64;for(;d<c;)if(f[n++]=a[d++],y++,64==n)for(n=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,y+=64}
function d(){var a=[],d=8*y;56>n?c(k,56-n):c(k,64-(n-56));for(var h=63;56<=h;h--)f[h]=d&255,d>>>=8;b(f);for(h=d=0;5>h;h++)for(var l=24;0<=l;l-=8)a[d++]=e[h]>>l&255;return a}
for(var e=[],f=[],h=[],k=[128],l=1;64>l;++l)k[l]=0;var n,y;a();return{reset:a,update:c,digest:d,vd:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;var ab;var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(q(a))return q(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},cb=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(q(a))return q(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1},A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=q(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},eb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},fb=Array.prototype.reduce?function(a,b,c,d){d&&(b=u(b,d));
return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
A(a,function(c,h){e=b.call(d,e,c,h,a)});
return e},gb=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1},hb=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function ib(a,b,c){b=jb(a,b,c);return 0>b?null:q(a)?a.charAt(b):a[b]}
function jb(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function kb(a,b){return 0<=bb(a,b)}
function lb(a){return 0==a.length}
function mb(a,b){kb(a,b)||a.push(b)}
function nb(a,b){var c=bb(a,b),d;(d=0<=c)&&ob(a,c);return d}
function ob(a,b){Array.prototype.splice.call(a,b,1)}
function pb(a,b){var c=jb(a,b,void 0);0<=c&&ob(a,c)}
function qb(a){return Array.prototype.concat.apply([],arguments)}
function rb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function sb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Da(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function tb(a,b,c,d){Array.prototype.splice.apply(a,ub(arguments,1))}
function ub(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function vb(a,b){if(!Da(a)||!Da(b)||a.length!=b.length)return!1;for(var c=a.length,d=wb,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0}
function xb(a,b){return a>b?1:a<b?-1:0}
function wb(a,b){return a===b}
function yb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Ca(d))for(var e=0;e<d.length;e+=8192)for(var f=yb.apply(null,ub(d,e,e+8192)),h=0;h<f.length;h++)b.push(f[h]);else b.push(d)}return b}
;function zb(a,b,c){var d=[],e=[];if(1==(Ca(c)?2:1))return e=[b,a],A(d,function(a){e.push(a)}),Ab(e.join(" "));
var f=[],h=[];A(c,function(a){h.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=lb(f)?[c,b,a]:[f.join(":"),c,b,a];A(d,function(a){e.push(a)});
a=Ab(e.join(" "));a=[c,a];lb(h)||a.push(h.join(""));return a.join("_")}
function Ab(a){var b=$a();b.update(a);return b.vd().toLowerCase()}
;function Bb(a){a=String(a.substr(0,3)).toLowerCase();return 0==("<tr"<a?-1:"<tr"==a?0:1)}
function Cb(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}
var Db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Eb(a){return a.replace(/^[\s\xa0]+/,"")}
function Fb(a){return decodeURIComponent(a.replace(/\+/g," "))}
function Gb(a){if(!Hb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ib,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Jb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Kb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Lb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Mb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Nb,"&#0;"));return a}
var Ib=/&/g,Jb=/</g,Kb=/>/g,Lb=/"/g,Mb=/'/g,Nb=/\x00/g,Hb=/[\x00&<>"']/,Ob={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Pb={"'":"\\'"};
function Qb(a,b){for(var c=0,d=Db(String(a)).split("."),e=Db(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var k=d[h]||"",l=e[h]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==k[0].length&&0==l[0].length)break;c=Rb(0==k[1].length?0:parseInt(k[1],10),0==l[1].length?0:parseInt(l[1],10))||Rb(0==k[2].length,0==l[2].length)||Rb(k[2],l[2]);k=k[3];l=l[3]}while(0==c)}return c}
function Rb(a,b){return a<b?-1:a>b?1:0}
function Sb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Tb(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function Ub(a){var b=q(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var Vb={};function Wb(a){this.b=a||{cookie:""}}
g=Wb.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
g.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(w()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
g.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Db(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
g.oa=function(){return Xb(this).keys};
g.ga=function(){return Xb(this).values};
g.isEmpty=function(){return!this.b.cookie};
g.clear=function(){for(var a=Xb(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Xb(a){a=(a.b.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Db(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Yb=new Wb("undefined"==typeof document?null:document);Yb.f=3950;function Zb(a){var b=Za(String(m.location.href)),c=m.__OVERRIDE_SID;null==c&&(c=(new Wb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?m.__SAPISID:m.__APISID,null==b&&(b=(new Wb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(m.location.href);return d&&b&&c?[c,zb(Za(d),b,a||null)].join(" "):null}return null}
;function $b(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function ac(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function bc(a){var b=0,c;for(c in a)b++;return b}
function cc(a,b){a:{for(c in a)if(a[c]==b){var c=!0;break a}c=!1}return c}
function dc(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function ec(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function fc(a){var b=gc,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function hc(a){for(var b in a)return!1;return!0}
function ic(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function jc(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function kc(a){var b={},c;for(c in a)b[c]=a[c];return b}
function lc(a){var b=Ba(a);if("object"==b||"array"==b){if(Ea(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=lc(a[c]);return b}return a}
var mc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nc(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mc.length;f++)c=mc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function oc(a){var b=arguments.length;if(1==b&&Ca(arguments[0]))return oc.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var pc;a:{var qc=m.navigator;if(qc){var rc=qc.userAgent;if(rc){pc=rc;break a}}pc=""}function B(a){return-1!=pc.indexOf(a)}
;function sc(){return B("Safari")&&!(tc()||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))}
function tc(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
function uc(){return B("Android")&&!(tc()||B("Firefox")||B("Opera")||B("Silk"))}
;function vc(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
function wc(){return vc()||B("iPad")||B("iPod")}
;function xc(a){xc[" "](a);return a}
xc[" "]=t;function yc(a,b){try{return xc(a[b]),!0}catch(c){}return!1}
function zc(a,b){var c=Ac;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Bc=B("Opera"),C=B("Trident")||B("MSIE"),Cc=B("Edge"),Dc=Cc||C,Ec=B("Gecko")&&!(-1!=pc.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),Fc=-1!=pc.toLowerCase().indexOf("webkit")&&!B("Edge"),Gc=B("Macintosh"),Hc=B("Windows"),Ic=B("Android"),Jc=vc(),Kc=B("iPad"),Lc=B("iPod"),Mc=wc();function Nc(){var a=m.document;return a?a.documentMode:void 0}
var Oc;a:{var Pc="",Qc=function(){var a=pc;if(Ec)return/rv:([^\);]+)(\)|;)/.exec(a);if(Cc)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Fc)return/WebKit\/(\S+)/.exec(a);if(Bc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Qc&&(Pc=Qc?Qc[1]:"");if(C){var Rc=Nc();if(null!=Rc&&Rc>parseFloat(Pc)){Oc=String(Rc);break a}}Oc=Pc}var Sc=Oc,Ac={};function Tc(a){return zc(a,function(){return 0<=Qb(Sc,a)})}
function Uc(a){return Number(Vc)>=a}
var Wc;var Xc=m.document;Wc=Xc&&C?Nc()||("CSS1Compat"==Xc.compatMode?parseInt(Sc,10):5):void 0;var Vc=Wc;var Yc=!C||Uc(9),Zc=!Ec&&!C||C&&Uc(9)||Ec&&Tc("1.9.1"),$c=C&&!Tc("9"),ad=C||Bc||Fc;function bd(){this.b="";this.f=cd}
bd.prototype.La=!0;bd.prototype.Ia=function(){return this.b};
bd.prototype.toString=function(){return"Const{"+this.b+"}"};
var cd={};function dd(a){var b=new bd;b.b=a;return b}
dd("");function ed(){this.f="";this.g=fd}
ed.prototype.La=!0;ed.prototype.Ia=function(){return this.f};
ed.prototype.Ob=!0;ed.prototype.b=function(){return 1};
function gd(a){if(a instanceof ed&&a.constructor===ed&&a.g===fd)return a.f;Ba(a);return"type_error:TrustedResourceUrl"}
var fd={};function hd(a){var b=new ed;b.f=a;return b}
;function id(){this.f="";this.g=jd}
id.prototype.La=!0;id.prototype.Ia=function(){return this.f};
id.prototype.Ob=!0;id.prototype.b=function(){return 1};
function kd(a){if(a instanceof id&&a.constructor===id&&a.g===jd)return a.f;Ba(a);return"type_error:SafeUrl"}
var ld=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function md(a){if(a instanceof id)return a;a=a.La?a.Ia():String(a);ld.test(a)||(a="about:invalid#zClosurez");return nd(a)}
function od(a){if(a instanceof id)return a;a=a.La?a.Ia():String(a);ld.test(a)||(a="about:invalid#zClosurez");return nd(a)}
var jd={};function nd(a){var b=new id;b.f=a;return b}
nd("about:blank");function pd(){this.f="";this.h=qd;this.g=null}
pd.prototype.Ob=!0;pd.prototype.b=function(){return this.g};
pd.prototype.La=!0;pd.prototype.Ia=function(){return this.f};
function rd(a){if(a instanceof pd&&a.constructor===pd&&a.h===qd)return a.f;Ba(a);return"type_error:SafeHtml"}
function sd(a){if(a instanceof pd)return a;var b=null;a.Ob&&(b=a.b());a=Gb(a.La?a.Ia():String(a));return td(a,b)}
function ud(a){function b(a){Ca(a)?A(a,b):(a=sd(a),d+=rd(a),a=a.b(),0==c?c=a:0!=a&&c!=a&&(c=null))}
var c=0,d="";A(arguments,b);return td(d,c)}
var qd={};function td(a,b){var c=new pd;c.f=a;c.g=b;return c}
td("<!DOCTYPE html>",0);td("",0);var vd=td("<br>",0);function wd(a,b){var c=b instanceof id?b:od(b);a.href=kd(c)}
function xd(a,b){a.src=gd(b);var c;if(null===za){a:{if((c=m.document.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&ya.test(c))break a;c=null}za=c||""}if(c=za)a.nonce=c}
;function yd(a,b){return td(b,null)}
;function zd(a,b){this.x=p(a)?a:0;this.y=p(b)?b:0}
g=zd.prototype;g.clone=function(){return new zd(this.x,this.y)};
g.equals=function(a){return a instanceof zd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Ad(a,b){return new zd(a.x-b.x,a.y-b.y)}
g.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Bd(a,b){this.width=a;this.height=b}
g=Bd.prototype;g.clone=function(){return new Bd(this.width,this.height)};
g.td=function(){return this.width*this.height};
g.aspectRatio=function(){return this.width/this.height};
g.isEmpty=function(){return!this.td()};
g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Cd(a){return a?new Dd(Ed(a)):ab||(ab=new Dd)}
function D(a){return q(a)?document.getElementById(a):a}
function Fd(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Gd(document,"*",a,b)}
function E(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Gd(c,"*",a,b)[0]||null}return c||null}
function Gd(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,h;h=a[f];f++)b==h.nodeName&&(d[e++]=h);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;h=a[f];f++)b=h.className,"function"==typeof b.split&&kb(b.split(/\s+/),c)&&(d[e++]=h);d.length=e;return d}return a}
function Hd(a,b){$b(b,function(b,d){b&&b.La&&(b=b.Ia());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Id.hasOwnProperty(d)?a.setAttribute(Id[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Id={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Jd(a){a=a.document;a=Kd(a)?a.documentElement:a.body;return new Bd(a.clientWidth,a.clientHeight)}
function Ld(a){var b=Md(a);a=Nd(a);return C&&Tc("10")&&a.pageYOffset!=b.scrollTop?new zd(b.scrollLeft,b.scrollTop):new zd(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Md(a){return a.scrollingElement?a.scrollingElement:!Fc&&Kd(a)?a.documentElement:a.body||a.documentElement}
function Nd(a){return a.parentWindow||a.defaultView}
function Od(a,b,c){var d=arguments,e=document,f=String(d[0]),h=d[1];if(!Yc&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',Gb(h.name),'"');if(h.type){f.push(' type="',Gb(h.type),'"');var k={};nc(k,h);delete k.type;h=k}f.push(">");f=f.join("")}f=e.createElement(f);h&&(q(h)?f.className=h:Ca(h)?f.className=h.join(" "):Hd(f,h));2<d.length&&Pd(e,f,d);return f}
function Pd(a,b,c){function d(c){c&&b.appendChild(q(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];!Da(f)||Fa(f)&&0<f.nodeType?d(f):A(Qd(f)?rb(f):f,d)}}
function Rd(a){var b=document,c=b.createElement("DIV");C?(a=ud(vd,a),c.innerHTML=rd(a),c.removeChild(c.firstChild)):c.innerHTML=rd(a);if(1==c.childNodes.length)c=c.removeChild(c.firstChild);else{for(b=b.createDocumentFragment();c.firstChild;)b.appendChild(c.firstChild);c=b}return c}
function Kd(a){return"CSS1Compat"==a.compatMode}
function Sd(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Td(a,b,c){a.insertBefore(b,a.childNodes[c]||null)}
function Ud(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function Vd(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)}
function Wd(a){return Zc&&void 0!=a.children?a.children:db(a.childNodes,function(a){return 1==a.nodeType})}
function Xd(a){return p(a.firstElementChild)?a.firstElementChild:Yd(a.firstChild,!0)}
function Yd(a,b){for(;a&&1!=a.nodeType;)a=b?a.nextSibling:a.previousSibling;return a}
function Zd(a){return Fa(a)&&1==a.nodeType}
function $d(){var a=ae,b;if(ad&&!(C&&Tc("9")&&!Tc("10")&&m.SVGElement&&a instanceof m.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return Zd(b)?b:null}
function be(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Ed(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function ce(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else Sd(a),a.appendChild(Ed(a).createTextNode(String(b)))}
function de(a,b){var c=[];return ee(a,b,c,!0)?c[0]:void 0}
function ee(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||ee(a,b,c,d))return!0;a=a.nextSibling}return!1}
var fe={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},ge={IMG:" ",BR:"\n"};function he(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!ie(a)||je(a)):ie(a)&&je(a))&&C){var c;!Ea(a.getBoundingClientRect)||C&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function ie(a){return C&&!Tc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function je(a){a=a.tabIndex;return xa(a)&&0<=a&&32768>a}
function ke(a){if($c&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];le(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");$c||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function le(a,b,c){if(!(a.nodeName in fe))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in ge)b.push(ge[a.nodeName]);else for(a=a.firstChild;a;)le(a,b,c),a=a.nextSibling}
function Qd(a){if(a&&"number"==typeof a.length){if(Fa(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ea(a))return"function"==typeof a.item}return!1}
function me(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return ne(a,function(a){return(!e||a.nodeName==e)&&(!c||q(a.className)&&kb(a.className.split(/\s+/),c))},d)}
function oe(a,b){return me(a,null,b,void 0)}
function ne(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function Dd(a){this.b=a||m.document||document}
g=Dd.prototype;g.na=function(){return q(void 0)?this.b.getElementById(void 0):void 0};
g.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
g.createElement=function(a){return this.b.createElement(String(a))};
g.appendChild=function(a,b){a.appendChild(b)};
g.Dd=Ud;g.isElement=Zd;oc("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function pe(){this.G=this.G;this.C=this.C}
pe.prototype.G=!1;pe.prototype.J=function(){return this.G};
pe.prototype.dispose=function(){this.G||(this.G=!0,this.B())};
function qe(a,b){a.G?p(void 0)?b.call(void 0):b():(a.C||(a.C=[]),a.C.push(p(void 0)?u(b,void 0):b))}
pe.prototype.B=function(){if(this.C)for(;this.C.length;)this.C.shift()()};
function re(a){a&&"function"==typeof a.dispose&&a.dispose()}
;var se=!C||Uc(9),te=C&&!Tc("9"),ue=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
m.addEventListener("test",t,b);m.removeEventListener("test",t,b);return a}();function ve(a,b){this.type=a;this.currentTarget=this.target=b;this.b=!1;this.Zc=!0}
ve.prototype.stopPropagation=function(){this.b=!0};
ve.prototype.preventDefault=function(){this.Zc=!1};var we;we=Fc?"webkitTransitionEnd":Bc?"otransitionend":"transitionend";function xe(a,b){ve.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.f=null;a&&this.init(a,b)}
z(xe,ve);var ye={2:"touch",3:"pen",4:"mouse"};
xe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?Ec&&(yc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=q(a.pointerType)?a.pointerType:ye[a.pointerType]||"";this.state=a.state;this.f=a;a.defaultPrevented&&this.preventDefault()};
xe.prototype.stopPropagation=function(){xe.A.stopPropagation.call(this);this.f.stopPropagation?this.f.stopPropagation():this.f.cancelBubble=!0};
xe.prototype.preventDefault=function(){xe.A.preventDefault.call(this);var a=this.f;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,te)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ze="closure_listenable_"+(1E6*Math.random()|0),Ae=0;function Be(a,b,c,d,e){this.listener=a;this.b=null;this.src=b;this.type=c;this.capture=!!d;this.ub=e;this.key=++Ae;this.Ta=this.ob=!1}
function Ce(a){a.Ta=!0;a.listener=null;a.b=null;a.src=null;a.ub=null}
;function De(a){this.src=a;this.listeners={};this.b=0}
De.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.b++);var h=Ee(a,b,d,e);-1<h?(b=a[h],c||(b.ob=!1)):(b=new Be(b,this.src,f,!!d,e),b.ob=c,a.push(b));return b};
De.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ee(e,b,c,d);return-1<b?(Ce(e[b]),ob(e,b),0==e.length&&(delete this.listeners[a],this.b--),!0):!1};
function Fe(a,b){var c=b.type;c in a.listeners&&nb(a.listeners[c],b)&&(Ce(b),0==a.listeners[c].length&&(delete a.listeners[c],a.b--))}
function Ee(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ta&&f.listener==b&&f.capture==!!c&&f.ub==d)return e}return-1}
;var Ge="closure_lm_"+(1E6*Math.random()|0),He={},Ie=0;function Je(a,b,c,d,e){if(d&&d.once)return Ke(a,b,c,d,e);if(Ca(b)){for(var f=0;f<b.length;f++)Je(a,b[f],c,d,e);return null}c=Le(c);return a&&a[ze]?a.g.add(String(b),c,!1,Fa(d)?!!d.capture:!!d,e):Me(a,b,c,!1,d,e)}
function Me(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=Fa(e)?!!e.capture:!!e,k=Ne(a);k||(a[Ge]=k=new De(a));c=k.add(b,c,d,h,f);if(c.b)return c;d=Oe();c.b=d;d.src=a;d.listener=c;if(a.addEventListener)ue||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Pe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ie++;return c}
function Oe(){var a=Qe,b=se?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Ke(a,b,c,d,e){if(Ca(b)){for(var f=0;f<b.length;f++)Ke(a,b[f],c,d,e);return null}c=Le(c);return a&&a[ze]?a.g.add(String(b),c,!0,Fa(d)?!!d.capture:!!d,e):Me(a,b,c,!0,d,e)}
function Re(a,b,c,d,e){if(Ca(b))for(var f=0;f<b.length;f++)Re(a,b[f],c,d,e);else(d=Fa(d)?!!d.capture:!!d,c=Le(c),a&&a[ze])?a.g.remove(String(b),c,d,e):a&&(a=Ne(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ee(b,c,d,e)),(c=-1<a?b[a]:null)&&Se(c))}
function Se(a){if(!xa(a)&&a&&!a.Ta){var b=a.src;if(b&&b[ze])Fe(b.g,a);else{var c=a.type,d=a.b;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Pe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ie--;(c=Ne(b))?(Fe(c,a),0==c.b&&(c.src=null,b[Ge]=null)):Ce(a)}}}
function Pe(a){return a in He?He[a]:He[a]="on"+a}
function Te(a,b,c,d){var e=!0;if(a=Ne(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Ta&&(f=Ue(f,d),e=e&&!1!==f)}return e}
function Ue(a,b){var c=a.listener,d=a.ub||a.src;a.ob&&Se(a);return c.call(d,b)}
function Qe(a,b){if(a.Ta)return!0;if(!se){var c=b||r("window.event"),d=new xe(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var h=c.length-1;!d.b&&0<=h;h--){d.currentTarget=c[h];var k=Te(c[h],f,!0,d);e=e&&k}for(h=0;!d.b&&h<c.length;h++)d.currentTarget=c[h],k=Te(c[h],f,!1,d),e=e&&k}return e}return Ue(a,new xe(b,this))}
function Ne(a){a=a[Ge];return a instanceof De?a:null}
var Ve="__closure_events_fn_"+(1E9*Math.random()>>>0);function Le(a){if(Ea(a))return a;a[Ve]||(a[Ve]=function(b){return a.handleEvent(b)});
return a[Ve]}
;function We(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}}
function Xe(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ye(a,b,c){pe.call(this);this.b=null;this.h=!1;this.j=a;this.i=c;this.f=b||window;this.g=u(this.Bd,this)}
z(Ye,pe);g=Ye.prototype;g.start=function(){this.stop();this.h=!1;var a=Ze(this),b=$e(this);a&&!b&&this.f.mozRequestAnimationFrame?(this.b=Je(this.f,"MozBeforePaint",this.g),this.f.mozRequestAnimationFrame(null),this.h=!0):this.b=a&&b?a.call(this.f,this.g):this.f.setTimeout(We(this.g),20)};
g.stop=function(){if(this.isActive()){var a=Ze(this),b=$e(this);a&&!b&&this.f.mozRequestAnimationFrame?Se(this.b):a&&b?b.call(this.f,this.b):this.f.clearTimeout(this.b)}this.b=null};
g.isActive=function(){return null!=this.b};
g.Bd=function(){this.h&&this.b&&Se(this.b);this.b=null;this.j.call(this.i,w())};
g.B=function(){this.stop();Ye.A.B.call(this)};
function Ze(a){a=a.f;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null}
function $e(a){a=a.f;return a.cancelAnimationFrame||a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null}
;function af(){pe.call(this);this.g=new De(this);this.Na=this;this.da=null}
z(af,pe);af.prototype[ze]=!0;af.prototype.Wb=function(a){this.da=a};
af.prototype.addEventListener=function(a,b,c,d){Je(this,a,b,c,d)};
af.prototype.removeEventListener=function(a,b,c,d){Re(this,a,b,c,d)};
function bf(a,b){var c=a.da;if(c){var d=[];for(var e=1;c;c=c.da)d.push(c),++e}c=a.Na;e=b;var f=e.type||e;if(q(e))e=new ve(e,c);else if(e instanceof ve)e.target=e.target||c;else{var h=e;e=new ve(f,c);nc(e,h)}h=!0;if(d)for(var k=d.length-1;!e.b&&0<=k;k--){var l=e.currentTarget=d[k];h=cf(l,f,!0,e)&&h}e.b||(l=e.currentTarget=c,h=cf(l,f,!0,e)&&h,e.b||(h=cf(l,f,!1,e)&&h));if(d)for(k=0;!e.b&&k<d.length;k++)l=e.currentTarget=d[k],h=cf(l,f,!1,e)&&h}
af.prototype.B=function(){af.A.B.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ce(d[e]);delete a.listeners[c];a.b--}}this.da=null};
function cf(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Ta&&h.capture==c){var k=h.listener,l=h.ub||h.src;h.ob&&Fe(a.g,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.Zc}
;function df(a,b){this.g=a;this.h=b;this.f=0;this.b=null}
df.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};function ef(a){m.setTimeout(function(){throw a;},0)}
var ff;
function gf(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=u(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.cc;c.cc=null;a()}};
return function(a){d.next={cc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function hf(){this.f=this.b=null}
var kf=new df(function(){return new jf},function(a){a.reset()});
hf.prototype.add=function(a,b){var c=kf.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
hf.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function jf(){this.next=this.scope=this.b=null}
jf.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
jf.prototype.reset=function(){this.next=this.scope=this.b=null};function lf(a){mf||nf();of||(mf(),of=!0);pf.add(a,void 0)}
var mf;function nf(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);mf=function(){a.then(qf)}}else mf=function(){var a=qf;
!Ea(m.setImmediate)||m.Window&&m.Window.prototype&&!B("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(ff||(ff=gf()),ff(a)):m.setImmediate(a)}}
var of=!1,pf=new hf;function qf(){for(var a;a=pf.remove();){try{a.b.call(a.scope)}catch(c){ef(c)}var b=kf;b.h(a);100>b.f&&(b.f++,a.next=b.b,b.b=a)}of=!1}
;function rf(a,b){af.call(this);this.f=a||1;this.b=b||m;this.h=u(this.Ye,this);this.i=w()}
z(rf,af);g=rf.prototype;g.enabled=!1;g.ha=null;g.Ye=function(){if(this.enabled){var a=w()-this.i;0<a&&a<.8*this.f?this.ha=this.b.setTimeout(this.h,this.f-a):(this.ha&&(this.b.clearTimeout(this.ha),this.ha=null),bf(this,"tick"),this.enabled&&(this.ha=this.b.setTimeout(this.h,this.f),this.i=w()))}};
g.start=function(){this.enabled=!0;this.ha||(this.ha=this.b.setTimeout(this.h,this.f),this.i=w())};
g.stop=function(){this.enabled=!1;this.ha&&(this.b.clearTimeout(this.ha),this.ha=null)};
g.B=function(){rf.A.B.call(this);this.stop();delete this.b};
function sf(a,b,c){if(Ea(a))c&&(a=u(a,c));else if(a&&"function"==typeof a.handleEvent)a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:m.setTimeout(a,b||0)}
;function tf(a,b,c){pe.call(this);this.b=a;this.h=b||0;this.f=c;this.g=u(this.pc,this)}
z(tf,pe);g=tf.prototype;g.cb=0;g.B=function(){tf.A.B.call(this);this.stop();delete this.b;delete this.f};
g.start=function(a){this.stop();this.cb=sf(this.g,p(a)?a:this.h)};
g.stop=function(){this.isActive()&&m.clearTimeout(this.cb);this.cb=0};
g.isActive=function(){return 0!=this.cb};
g.pc=function(){this.cb=0;this.b&&this.b.call(this.f)};function uf(a,b,c){pe.call(this);this.h=null!=c?u(a,c):a;this.g=b;this.f=u(this.He,this);this.b=[]}
z(uf,pe);g=uf.prototype;g.Va=!1;g.jb=0;g.Ja=null;g.Cd=function(a){this.b=arguments;this.Ja||this.jb?this.Va=!0:vf(this)};
g.stop=function(){this.Ja&&(m.clearTimeout(this.Ja),this.Ja=null,this.Va=!1,this.b=[])};
g.pause=function(){this.jb++};
g.resume=function(){this.jb--;this.jb||!this.Va||this.Ja||(this.Va=!1,vf(this))};
g.B=function(){uf.A.B.call(this);this.stop()};
g.He=function(){this.Ja=null;this.Va&&!this.jb&&(this.Va=!1,vf(this))};
function vf(a){a.Ja=sf(a.f,a.g);a.h.apply(null,a.b)}
;var wf=B("Firefox"),xf=vc()||B("iPod"),yf=B("iPad"),zf=uc(),Bf=tc(),Cf=sc()&&!wc();var Df=null,Ef=null;function Ff(){this.f=-1}
;function Gf(){this.f=64;this.b=[];this.j=[];this.C=[];this.h=[];this.h[0]=128;for(var a=1;a<this.f;++a)this.h[a]=0;this.i=this.g=0;this.reset()}
z(Gf,Ff);Gf.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.i=this.g=0};
function Hf(a,b,c){c||(c=0);var d=a.C;if(q(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var h=a.b[2],k=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(h^k);var n=1518500249}else f=c^h^k,n=1859775393;else 60>e?(f=c&h|k&(c|h),n=2400959708):(f=c^h^k,n=
3395469782);f=(b<<5|b>>>27)+f+l+n+d[e]&4294967295;l=k;k=h;h=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+h&4294967295;a.b[3]=a.b[3]+k&4294967295;a.b[4]=a.b[4]+l&4294967295}
Gf.prototype.update=function(a,b){if(null!=a){p(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.j,f=this.g;d<b;){if(0==f)for(;d<=c;)Hf(this,a,d),d+=this.f;if(q(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){Hf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){Hf(this,e);f=0;break}}this.g=f;this.i+=b}};
Gf.prototype.digest=function(){var a=[],b=8*this.i;56>this.g?this.update(this.h,56-this.g):this.update(this.h,this.f-(this.g-56));for(var c=this.f-1;56<=c;c--)this.j[c]=b&255,b/=256;Hf(this,this.j);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function If(a){if(a.classList)return a.classList;a=a.className;return q(a)&&a.match(/\S+/g)||[]}
function F(a,b){return a.classList?a.classList.contains(b):kb(If(a),b)}
function G(a,b){a.classList?a.classList.add(b):F(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Jf(a,b){if(a.classList)A(b,function(b){G(a,b)});
else{var c={};A(If(a),function(a){c[a]=!0});
A(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function H(a,b){a.classList?a.classList.remove(b):F(a,b)&&(a.className=db(If(a),function(a){return a!=b}).join(" "))}
function Kf(a,b){a.classList?A(b,function(b){H(a,b)}):a.className=db(If(a),function(a){return!kb(b,a)}).join(" ")}
function Lf(a,b,c){c?G(a,b):H(a,b)}
function Mf(a,b,c){F(a,b)&&(H(a,b),G(a,c))}
function Nf(a,b){var c=!F(a,b);Lf(a,b,c)}
;var Of=!C&&!sc();function Pf(a,b){if(/-[a-z]/.test(b))return null;if(Of&&a.dataset){if(uc()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var Qf="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Rf(){}
Rf.prototype.next=function(){throw Qf;};
Rf.prototype.ra=function(){return this};
function Sf(a){if(a instanceof Rf)return a;if("function"==typeof a.ra)return a.ra(!1);if(Da(a)){var b=0,c=new Rf;c.next=function(){for(;;){if(b>=a.length)throw Qf;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Tf(a,b,c){if(Da(a))try{A(a,b,c)}catch(d){if(d!==Qf)throw d;}else{a=Sf(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Qf)throw d;}}}
function Uf(a){if(Da(a))return rb(a);a=Sf(a);var b=[];Tf(a,function(a){b.push(a)});
return b}
;function Vf(a,b){this.f={};this.b=[];this.Ea=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Vf)for(c=a.oa(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
g=Vf.prototype;g.ga=function(){Wf(this);for(var a=[],b=0;b<this.b.length;b++)a.push(this.f[this.b[b]]);return a};
g.oa=function(){Wf(this);return this.b.concat()};
g.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Xf;Wf(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Xf(a,b){return a===b}
g.isEmpty=function(){return 0==this.g};
g.clear=function(){this.f={};this.Ea=this.g=this.b.length=0};
g.remove=function(a){return Yf(this.f,a)?(delete this.f[a],this.g--,this.Ea++,this.b.length>2*this.g&&Wf(this),!0):!1};
function Wf(a){if(a.g!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Yf(a.f,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.g!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Yf(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
g.get=function(a,b){return Yf(this.f,a)?this.f[a]:b};
g.set=function(a,b){Yf(this.f,a)||(this.g++,this.b.push(a),this.Ea++);this.f[a]=b};
g.forEach=function(a,b){for(var c=this.oa(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.clone=function(){return new Vf(this)};
g.ra=function(a){Wf(this);var b=0,c=this.Ea,d=this,e=new Rf;e.next=function(){if(c!=d.Ea)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw Qf;var e=d.b[b++];return a?e:d.f[e]};
return e};
function Yf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Zf(a,b,c){for(var d=a.elements,e,f=0;e=d[f];f++)if(e.form==a&&!e.disabled&&"FIELDSET"!=e.tagName){var h=e.name;switch(e.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":e=$f(e);if(null!=e)for(var k,l=0;k=e[l];l++)c(b,h,k);break;default:k=$f(e),null!=k&&c(b,h,k)}}d=a.getElementsByTagName("INPUT");for(f=0;e=d[f];f++)e.form==a&&"image"==e.type.toLowerCase()&&(h=e.name,c(b,h,e.value),c(b,h+".x","0"),c(b,h+".y","0"))}
function ag(a,b,c){var d=a.get(b);d||(d=[],a.set(b,d));d.push(c)}
function bg(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function $f(a){var b=a.type;switch(q(b)&&b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null;default:return null!=a.value?a.value:null}}
;function cg(a){pe.call(this);this.f=a;this.b={}}
z(cg,pe);var dg=[];function eg(a,b,c,d){Ca(c)||(c&&(dg[0]=c.toString()),c=dg);for(var e=0;e<c.length;e++){var f=Je(b,c[e],d||a.handleEvent,!1,a.f||a);if(!f)break;a.b[f.key]=f}}
function fg(a){$b(a.b,function(a,c){this.b.hasOwnProperty(c)&&Se(a)},a);
a.b={}}
cg.prototype.B=function(){cg.A.B.call(this);fg(this)};
cg.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function gg(a){hg();return td(a,null)}
function ig(a){hg();return hd(a)}
var hg=t;function jg(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function kg(a){a=String(a);if(jg(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function lg(a){var b=[];mg(new ng,a,b);return b.join("")}
function ng(){}
function mg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Ca(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),mg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),og(d,c),c.push(":"),mg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":og(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var pg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},qg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function og(a,b){b.push('"',a.replace(qg,function(a){var b=pg[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),pg[a]=b);return b}),'"')}
;function rg(a){if(m.JSON)try{return m.JSON.parse(a)}catch(b){}return kg(a)}
;function sg(){}
sg.prototype.stringify=function(a){return m.JSON.stringify(a,void 0)};
sg.prototype.parse=function(a){return m.JSON.parse(a,void 0)};function tg(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
g=tg.prototype;g.getHeight=function(){return this.bottom-this.top};
g.clone=function(){return new tg(this.top,this.right,this.bottom,this.left)};
g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function ug(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
ug.prototype.clone=function(){return new ug(this.left,this.top,this.width,this.height)};
ug.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
ug.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
ug.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function vg(){}
vg.prototype.b=null;function wg(a){var b;(b=a.b)||(b={},xg(a)&&(b[0]=!0,b[1]=!0),b=a.b=b);return b}
;var yg;function zg(){}
z(zg,vg);function Ag(a){return(a=xg(a))?new ActiveXObject(a):new XMLHttpRequest}
function xg(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}
yg=new zg;function Bg(a,b,c,d){this.b=a;this.g=b;this.G=c;this.C=d||1;this.i=45E3;this.h=new cg(this);a=this.f=new rf;a.f=250;a.ha&&a.enabled?(a.stop(),a.start()):a.ha&&a.stop()}
g=Bg.prototype;g.Ka=null;g.la=!1;g.Xa=null;g.Zb=null;g.Ua=null;g.Wa=null;g.ya=null;g.Da=null;g.Ma=null;g.T=null;g.mb=0;g.ma=null;g.Fb=null;g.Ca=null;g.fb=-1;g.ad=!0;g.Fa=!1;g.Nb=0;g.Bb=null;var Cg={},Dg={};g=Bg.prototype;g.setTimeout=function(a){this.i=a};
function Eg(a,b,c){a.Wa=1;a.ya=Fg(b.clone());a.Ma=c;a.j=!0;Gg(a,null)}
function Hg(a,b,c,d,e){a.Wa=1;a.ya=Fg(b.clone());a.Ma=null;a.j=c;e&&(a.ad=!1);Gg(a,d)}
function Gg(a,b){a.Ua=w();Ig(a);a.Da=a.ya.clone();Jg(a.Da,"t",a.C);a.mb=0;a.T=a.b.Jb(a.b.lb()?b:null);0<a.Nb&&(a.Bb=new uf(u(a.fd,a,a.T),a.Nb));eg(a.h,a.T,"readystatechange",a.Qe);var c=a.Ka?kc(a.Ka):{};a.Ma?(a.Fb="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.T.send(a.Da,a.Fb,a.Ma,c)):(a.Fb="GET",a.ad&&!Fc&&(c.Connection="close"),a.T.send(a.Da,a.Fb,null,c));a.b.ka(1)}
g.Qe=function(a){a=a.target;var b=this.Bb;b&&3==Kg(a)?b.Cd():this.fd(a)};
g.fd=function(a){try{if(a==this.T)a:{var b=Kg(this.T),c=this.T.i,d=this.T.getStatus();if(C&&!Uc(10)||Fc&&!Tc("420+")){if(4>b)break a}else if(3>b||3==b&&!Bc&&!Lg(this.T))break a;this.Fa||4!=b||7==c||(8==c||0>=d?this.b.ka(3):this.b.ka(2));Mg(this);var e=this.T.getStatus();this.fb=e;var f=Lg(this.T);(this.la=200==e)?(4==b&&Ng(this),this.j?(Og(this,b,f),Bc&&this.la&&3==b&&(eg(this.h,this.f,"tick",this.Pe),this.f.start())):Pg(this,f),this.la&&!this.Fa&&(4==b?this.b.yb(this):(this.la=!1,Ig(this)))):(400==
e&&0<f.indexOf("Unknown SID")?(this.Ca=3,J(13)):(this.Ca=0,J(14)),Ng(this),Qg(this))}}catch(h){}finally{}};
function Og(a,b,c){for(var d=!0;!a.Fa&&a.mb<c.length;){var e=Rg(a,c);if(e==Dg){4==b&&(a.Ca=4,J(15),d=!1);break}else if(e==Cg){a.Ca=4;J(16);d=!1;break}else Pg(a,e)}4==b&&0==c.length&&(a.Ca=1,J(17),d=!1);a.la=a.la&&d;d||(Ng(a),Qg(a))}
g.Pe=function(){var a=Kg(this.T),b=Lg(this.T);this.mb<b.length&&(Mg(this),Og(this,a,b),this.la&&4!=a&&Ig(this))};
function Rg(a,b){var c=a.mb,d=b.indexOf("\n",c);if(-1==d)return Dg;c=Number(b.substring(c,d));if(isNaN(c))return Cg;d+=1;if(d+c>b.length)return Dg;var e=b.substr(d,c);a.mb=d+c;return e}
function Sg(a,b){a.Ua=w();Ig(a);var c=b?window.location.hostname:"";a.Da=a.ya.clone();Tg(a.Da,"DOMAIN",c);Tg(a.Da,"t",a.C);try{a.ma=new ActiveXObject("htmlfile")}catch(n){Ng(a);a.Ca=7;J(22);Qg(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e+="\\x3c";else if(">"==h)e+="\\x3e";else{var k=h;if(k in Pb)h=Pb[k];else if(k in Ob)h=Pb[k]=Ob[k];else{var l=k.charCodeAt(0);if(31<l&&127>l)h=k;else{if(256>l){if(h="\\x",16>l||256<l)h+="0"}else h="\\u",4096>l&&
(h+="0");h+=l.toString(16).toUpperCase()}h=Pb[k]=h}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=yd(dd("b/12014412"),d);a.ma.open();a.ma.write(rd(c));a.ma.close();a.ma.parentWindow.m=u(a.Ke,a);a.ma.parentWindow.d=u(a.Uc,a,!0);a.ma.parentWindow.rpcClose=u(a.Uc,a,!1);c=a.ma.createElement("DIV");a.ma.parentWindow.document.body.appendChild(c);d=md(a.Da.toString());d=Gb(kd(d));d=yd(dd("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=rd(d);a.b.ka(1)}
g.Ke=function(a){Ug(u(this.Je,this,a),0)};
g.Je=function(a){this.Fa||(Mg(this),Pg(this,a),Ig(this))};
g.Uc=function(a){Ug(u(this.Ie,this,a),0)};
g.Ie=function(a){this.Fa||(Ng(this),this.la=a,this.b.yb(this),this.b.ka(4))};
g.cancel=function(){this.Fa=!0;Ng(this)};
function Ig(a){a.Zb=w()+a.i;Vg(a,a.i)}
function Vg(a,b){if(null!=a.Xa)throw Error("WatchDog timer not null");a.Xa=Ug(u(a.Le,a),b)}
function Mg(a){a.Xa&&(m.clearTimeout(a.Xa),a.Xa=null)}
g.Le=function(){this.Xa=null;var a=w();0<=a-this.Zb?(2!=this.Wa&&this.b.ka(3),Ng(this),this.Ca=2,J(18),Qg(this)):Vg(this,this.Zb-a)};
function Qg(a){a.b.xc()||a.Fa||a.b.yb(a)}
function Ng(a){Mg(a);re(a.Bb);a.Bb=null;a.f.stop();fg(a.h);if(a.T){var b=a.T;a.T=null;b.abort();b.dispose()}a.ma&&(a.ma=null)}
function Pg(a,b){try{a.b.Oc(a,b),a.b.ka(4)}catch(c){}}
;function Wg(a){if(a.ga&&"function"==typeof a.ga)return a.ga();if(q(a))return a.split("");if(Da(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return dc(a)}
function Xg(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(Da(a)||q(a))A(a,b,c);else{if(a.oa&&"function"==typeof a.oa)var d=a.oa();else if(a.ga&&"function"==typeof a.ga)d=void 0;else if(Da(a)||q(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=ec(a);e=Wg(a);f=e.length;for(var h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}}
;var Yg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Zg(a){return(a=a.match(Yg)[3]||null)?decodeURI(a):a}
function $g(){var a=window.location.href,b=a.indexOf("#");return 0>b?null:a.substr(b+1)}
function ah(a){var b=a.match(Yg);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function bh(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var h=c[d].substring(0,e);f=c[d].substring(e+1)}else h=c[d];b(h,f?Fb(f):"")}}
function ch(a,b,c){if(Ca(b))for(var d=0;d<b.length;d++)ch(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function dh(a){var b=[],c;for(c in a)ch(c,a[c],b);return b.join("&")}
function eh(a,b){var c=dh(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;function fh(a,b){this.f=this.G=this.h="";this.C=null;this.i=this.b="";this.j=!1;var c;a instanceof fh?(this.j=p(b)?b:a.j,gh(this,a.h),this.G=a.G,hh(this,a.f),ih(this,a.C),this.b=a.b,jh(this,a.g.clone()),this.i=a.i):a&&(c=String(a).match(Yg))?(this.j=!!b,gh(this,c[1]||"",!0),this.G=kh(c[2]||""),hh(this,c[3]||"",!0),ih(this,c[4]),this.b=kh(c[5]||"",!0),jh(this,c[6]||"",!0),this.i=kh(c[7]||"")):(this.j=!!b,this.g=new lh(null,this.j))}
fh.prototype.toString=function(){var a=[],b=this.h;b&&a.push(mh(b,nh,!0),":");var c=this.f;if(c||"file"==b)a.push("//"),(b=this.G)&&a.push(mh(b,nh,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.C,null!=c&&a.push(":",String(c));if(c=this.b)this.f&&"../../default.htm"!=c.charAt(0)&&a.push("../../default.htm"),a.push(mh(c,"/"==c.charAt(0)?oh:ph,!0));(c=this.g.toString())&&a.push("?",c);(c=this.i)&&a.push("#",mh(c,qh));return a.join("")};
fh.prototype.resolve=function(a){var b=this.clone(),c=!!a.h;c?gh(b,a.h):c=!!a.G;c?b.G=a.G:c=!!a.f;c?hh(b,a.f):c=null!=a.C;var d=a.b;if(c)ih(b,a.C);else if(c=!!a.b){if("../../default.htm"!=d.charAt(0))if(this.f&&!this.b)d="../../"+d;else{var e=b.b.lastIndexOf("/");-1!=e&&(d=b.b.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("default.htm")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.b=d:c=""!==a.g.toString();c?jh(b,a.g.clone()):c=!!a.i;c&&(b.i=a.i);return b};
fh.prototype.clone=function(){return new fh(this)};
function gh(a,b,c){a.h=c?kh(b,!0):b;a.h&&(a.h=a.h.replace(/:$/,""))}
function hh(a,b,c){a.f=c?kh(b,!0):b}
function ih(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.C=b}else a.C=null}
function jh(a,b,c){b instanceof lh?(a.g=b,rh(a.g,a.j)):(c||(b=mh(b,sh)),a.g=new lh(b,a.j))}
function Tg(a,b,c){a.g.set(b,c)}
function Jg(a,b,c){Ca(c)||(c=[String(c)]);th(a.g,b,c)}
function Fg(a){Tg(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^w()).toString(36));return a}
function uh(a){return a instanceof fh?a.clone():new fh(a,void 0)}
function vh(a,b,c,d){var e=new fh(null,void 0);a&&gh(e,a);b&&hh(e,b);c&&ih(e,c);d&&(e.b=d);return e}
function kh(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function mh(a,b,c){return q(a)?(a=encodeURI(a).replace(b,wh),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function wh(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var nh=/[#\/\?@]/g,ph=/[#\?:]/g,oh=/[#\?]/g,sh=/[#\?@]/g,qh=/#/g;function lh(a,b){this.f=this.b=null;this.g=a||null;this.h=!!b}
function xh(a){a.b||(a.b=new Vf,a.f=0,a.g&&bh(a.g,function(b,c){a.add(Fb(b),c)}))}
g=lh.prototype;g.add=function(a,b){xh(this);this.g=null;a=yh(this,a);var c=this.b.get(a);c||this.b.set(a,c=[]);c.push(b);this.f=this.f+1;return this};
g.remove=function(a){xh(this);a=yh(this,a);return Yf(this.b.f,a)?(this.g=null,this.f=this.f-this.b.get(a).length,this.b.remove(a)):!1};
g.clear=function(){this.b=this.g=null;this.f=0};
g.isEmpty=function(){xh(this);return 0==this.f};
function zh(a,b){xh(a);b=yh(a,b);return Yf(a.b.f,b)}
g.forEach=function(a,b){xh(this);this.b.forEach(function(c,d){A(c,function(c){a.call(b,c,d,this)},this)},this)};
g.oa=function(){xh(this);for(var a=this.b.ga(),b=this.b.oa(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.ga=function(a){xh(this);var b=[];if(q(a))zh(this,a)&&(b=qb(b,this.b.get(yh(this,a))));else{a=this.b.ga();for(var c=0;c<a.length;c++)b=qb(b,a[c])}return b};
g.set=function(a,b){xh(this);this.g=null;a=yh(this,a);zh(this,a)&&(this.f=this.f-this.b.get(a).length);this.b.set(a,[b]);this.f=this.f+1;return this};
g.get=function(a,b){var c=a?this.ga(a):[];return 0<c.length?String(c[0]):b};
function th(a,b,c){a.remove(b);0<c.length&&(a.g=null,a.b.set(yh(a,b),rb(c)),a.f=a.f+c.length)}
g.toString=function(){if(this.g)return this.g;if(!this.b)return"";for(var a=[],b=this.b.oa(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.ga(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}}return this.g=a.join("&")};
g.clone=function(){var a=new lh;a.g=this.g;this.b&&(a.b=this.b.clone(),a.f=this.f);return a};
function yh(a,b){var c=String(b);a.h&&(c=c.toLowerCase());return c}
function rh(a,b){b&&!a.h&&(xh(a),a.g=null,a.b.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(this.remove(b),th(this,c,a))},a));
a.h=b}
g.extend=function(a){for(var b=0;b<arguments.length;b++)Xg(arguments[b],function(a,b){this.add(b,a)},this)};function Ah(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;Bh(a,b,function(e){e?c(!0):m.setTimeout(function(){Ah(a,b,c,d,f)},f)})}}
function Bh(a,b,c){var d=new Image;d.onload=function(){try{Ch(d),c(!0)}catch(e){}};
d.onerror=function(){try{Ch(d),c(!1)}catch(e){}};
d.onabort=function(){try{Ch(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{Ch(d),c(!1)}catch(e){}};
m.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function Ch(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function Dh(a){this.b=a;this.f=new sg}
g=Dh.prototype;g.Lb=null;g.ca=null;g.Cb=!1;g.dd=null;g.qb=null;g.Qb=null;g.Mb=null;g.ia=null;g.ua=-1;g.eb=null;g.Za=null;g.connect=function(a){this.Mb=a;a=Eh(this.b,null,this.Mb);J(3);this.dd=w();var b=this.b.G;null!=b?(this.eb=b[0],(this.Za=b[1])?(this.ia=1,Fh(this)):(this.ia=2,Gh(this))):(Jg(a,"MODE","init"),this.ca=new Bg(this,void 0,void 0,void 0),this.ca.Ka=this.Lb,Hg(this.ca,a,!1,null,!0),this.ia=0)};
function Fh(a){var b=Eh(a.b,a.Za,"../../mail/images/cleardot.gif");Fg(b);Ah(b.toString(),5E3,u(a.ud,a),3,2E3);a.ka(1)}
g.ud=function(a){if(a)this.ia=2,Gh(this);else{J(4);var b=this.b;b.pa=b.za.ua;Hh(b,9)}a&&this.ka(2)};
function Gh(a){var b=a.b.w;if(null!=b)J(5),b?(J(11),Ih(a.b,a,!1)):(J(12),Ih(a.b,a,!0));else if(a.ca=new Bg(a,void 0,void 0,void 0),a.ca.Ka=a.Lb,b=a.b,b=Eh(b,b.lb()?a.eb:null,a.Mb),J(5),!C||Uc(10))Jg(b,"TYPE","xmlhttp"),Hg(a.ca,b,!1,a.eb,!1);else{Jg(b,"TYPE","html");var c=a.ca;a=!!a.eb;c.Wa=3;c.ya=Fg(b.clone());Sg(c,a)}}
g.Jb=function(a){return this.b.Jb(a)};
g.abort=function(){this.ca&&(this.ca.cancel(),this.ca=null);this.ua=-1};
g.xc=function(){return!1};
g.Oc=function(a,b){this.ua=a.fb;if(0==this.ia)if(b){try{var c=this.f.parse(b)}catch(d){c=this.b;c.pa=this.ua;Hh(c,2);return}this.eb=c[0];this.Za=c[1]}else c=this.b,c.pa=this.ua,Hh(c,2);else if(2==this.ia)if(this.Cb)J(7),this.Qb=w();else if("11111"==b){if(J(6),this.Cb=!0,this.qb=w(),c=this.qb-this.dd,!C||Uc(10)||500>c)this.ua=200,this.ca.cancel(),J(12),Ih(this.b,this,!0)}else J(8),this.qb=this.Qb=w(),this.Cb=!1};
g.yb=function(){this.ua=this.ca.fb;if(this.ca.la)0==this.ia?this.Za?(this.ia=1,Fh(this)):(this.ia=2,Gh(this)):2==this.ia&&((!C||Uc(10)?!this.Cb:200>this.Qb-this.qb)?(J(11),Ih(this.b,this,!1)):(J(12),Ih(this.b,this,!0)));else{0==this.ia?J(9):2==this.ia&&J(10);var a=this.b;a.pa=this.ua;Hh(a,2)}};
g.lb=function(){return this.b.lb()};
g.isActive=function(){return this.b.isActive()};
g.ka=function(a){this.b.ka(a)};function Jh(a){af.call(this);this.headers=new Vf;this.K=a||null;this.f=!1;this.I=this.b=null;this.P="";this.i=0;this.j="";this.h=this.N=this.w=this.M=!1;this.F=0;this.l=null;this.aa="";this.R=this.X=!1}
z(Jh,af);var Kh=/^https?$/i,Lh=["POST","PUT"];g=Jh.prototype;
g.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.P+"; newUri="+a);b=b?b.toUpperCase():"GET";this.P=a;this.j="";this.i=0;this.M=!1;this.f=!0;this.b=this.K?Ag(this.K):Ag(yg);this.I=this.K?wg(this.K):wg(yg);this.b.onreadystatechange=u(this.Nc,this);try{this.getStatus(),this.N=!0,this.b.open(b,String(a),!0),this.N=!1}catch(f){this.getStatus();Mh(this,f);return}a=c||"";var e=this.headers.clone();d&&Xg(d,function(a,b){e.set(b,a)});
d=ib(e.oa(),Nh);c=m.FormData&&a instanceof m.FormData;!kb(Lh,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);
this.aa&&(this.b.responseType=this.aa);"withCredentials"in this.b&&this.b.withCredentials!==this.X&&(this.b.withCredentials=this.X);try{Oh(this),0<this.F&&(this.R=Ph(this.b),this.getStatus(),this.R?(this.b.timeout=this.F,this.b.ontimeout=u(this.qc,this)):this.l=sf(this.qc,this.F,this)),this.getStatus(),this.w=!0,this.b.send(a),this.w=!1}catch(f){this.getStatus(),Mh(this,f)}};
function Ph(a){return C&&Tc(9)&&xa(a.timeout)&&p(a.ontimeout)}
function Nh(a){return"content-type"==a.toLowerCase()}
g.qc=function(){"undefined"!=typeof wa&&this.b&&(this.j="Timed out after "+this.F+"ms, aborting",this.i=8,this.getStatus(),bf(this,"timeout"),this.abort(8))};
function Mh(a,b){a.f=!1;a.b&&(a.h=!0,a.b.abort(),a.h=!1);a.j=b;a.i=5;Qh(a);Rh(a)}
function Qh(a){a.M||(a.M=!0,bf(a,"complete"),bf(a,"error"))}
g.abort=function(a){this.b&&this.f&&(this.getStatus(),this.f=!1,this.h=!0,this.b.abort(),this.h=!1,this.i=a||7,bf(this,"complete"),bf(this,"abort"),Rh(this))};
g.B=function(){this.b&&(this.f&&(this.f=!1,this.h=!0,this.b.abort(),this.h=!1),Rh(this,!0));Jh.A.B.call(this)};
g.Nc=function(){this.J()||(this.N||this.w||this.h?Sh(this):this.Ae())};
g.Ae=function(){Sh(this)};
function Sh(a){if(a.f&&"undefined"!=typeof wa)if(a.I[1]&&4==Kg(a)&&2==a.getStatus())a.getStatus();else if(a.w&&4==Kg(a))sf(a.Nc,0,a);else if(bf(a,"readystatechange"),4==Kg(a)){a.getStatus();a.f=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.P).match(Yg)[1]||null;if(!f&&m.self&&m.self.location){var h=m.self.location.protocol;f=h.substr(0,h.length-1)}e=!Kh.test(f?f.toLowerCase():
"")}d=e}if(d)bf(a,"complete"),bf(a,"success");else{a.i=6;try{var k=2<Kg(a)?a.b.statusText:""}catch(l){k=""}a.j=k+" ["+a.getStatus()+"]";Qh(a)}}finally{Rh(a)}}}
function Rh(a,b){if(a.b){Oh(a);var c=a.b,d=a.I[0]?t:null;a.b=null;a.I=null;b||bf(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Oh(a){a.b&&a.R&&(a.b.ontimeout=null);a.l&&(m.clearTimeout(a.l),a.l=null)}
g.isActive=function(){return!!this.b};
function Kg(a){return a.b?a.b.readyState:0}
g.getStatus=function(){try{return 2<Kg(this)?this.b.status:-1}catch(a){return-1}};
function Lg(a){try{return a.b?a.b.responseText:""}catch(b){return""}}
;function Th(a,b,c){this.b=1;this.f=[];this.h=[];this.i=new sg;this.G=a||null;this.w=null!=b?b:null;this.j=c||!1}
function Uh(a,b){this.f=a;this.b=b;this.context=null}
g=Th.prototype;g.bb=null;g.Y=null;g.O=null;g.Kb=null;g.sb=null;g.bc=null;g.tb=null;g.gb=0;g.fe=0;g.U=null;g.Ba=null;g.sa=null;g.Ha=null;g.za=null;g.Eb=null;g.Ra=-1;g.Ac=-1;g.pa=-1;g.Pa=0;g.Oa=0;g.Ga=8;var Vh=new af;function Wh(a){ve.call(this,"statevent",a)}
z(Wh,ve);function Xh(a,b){ve.call(this,"timingevent",a);this.size=b}
z(Xh,ve);function Yh(a){ve.call(this,"serverreachability",a)}
z(Yh,ve);g=Th.prototype;g.connect=function(a,b,c,d,e){J(0);this.Kb=b;this.bb=c||{};d&&p(e)&&(this.bb.OSID=d,this.bb.OAID=e);this.j?(Ug(u(this.lc,this,a),100),Zh(this)):this.lc(a)};
function $h(a){ai(a);if(3==a.b){var b=a.gb++,c=a.sb.clone();Tg(c,"SID",a.g);Tg(c,"RID",b);Tg(c,"TYPE","terminate");bi(a,c);b=new Bg(a,a.g,b,void 0);b.Wa=2;b.ya=Fg(c.clone());(new Image).src=b.ya;b.Ua=w();Ig(b)}ci(a)}
g.lc=function(a){this.za=new Dh(this);this.za.Lb=null;this.za.f=this.i;this.za.connect(a)};
function Zh(a){a.wd(1,0);a.sb=Eh(a,null,a.Kb);di(a)}
function ai(a){a.za&&(a.za.abort(),a.za=null);a.O&&(a.O.cancel(),a.O=null);a.sa&&(m.clearTimeout(a.sa),a.sa=null);ei(a);a.Y&&(a.Y.cancel(),a.Y=null);a.Ba&&(m.clearTimeout(a.Ba),a.Ba=null)}
function fi(a,b){if(0==a.b)throw Error("Invalid operation: sending map when state is closed");a.f.push(new Uh(a.fe++,b));2!=a.b&&3!=a.b||di(a)}
g.xc=function(){return 0==this.b};
function di(a){a.Y||a.Ba||(a.Ba=Ug(u(a.Sc,a),0),a.Pa=0)}
g.Sc=function(a){this.Ba=null;gi(this,a)};
function gi(a,b){if(1==a.b){if(!b){a.gb=Math.floor(1E5*Math.random());var c=a.gb++,d=new Bg(a,"",c,void 0);d.Ka=null;var e=hi(a),f=a.sb.clone();Tg(f,"RID",c);Tg(f,"CVER","1");bi(a,f);Eg(d,f,e);a.Y=d;a.b=2}}else 3==a.b&&(b?ii(a,b):0==a.f.length||a.Y||ii(a))}
function ii(a,b){if(b)if(6<a.Ga){a.f=a.h.concat(a.f);a.h.length=0;var c=a.gb-1;var d=hi(a)}else c=b.G,d=b.Ma;else c=a.gb++,d=hi(a);var e=a.sb.clone();Tg(e,"SID",a.g);Tg(e,"RID",c);Tg(e,"AID",a.Ra);bi(a,e);c=new Bg(a,a.g,c,a.Pa+1);c.Ka=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Y=c;Eg(c,e,d)}
function bi(a,b){if(a.U){var c=a.U.nc();c&&$b(c,function(a,c){Tg(b,c,a)})}}
function hi(a){var b=Math.min(a.f.length,1E3),c=["count="+b];if(6<a.Ga&&0<b){var d=a.f[0].f;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.f[e].f,h=a.f[e].b;f=6>=a.Ga?e:f-d;try{$b(h,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.h=a.h.concat(a.f.splice(0,b));
return c.join("&")}
function ji(a){a.O||a.sa||(a.C=1,a.sa=Ug(u(a.Rc,a),0),a.Oa=0)}
function ki(a){if(a.O||a.sa||3<=a.Oa)return!1;a.C++;a.sa=Ug(u(a.Rc,a),li(a,a.Oa));a.Oa++;return!0}
g.Rc=function(){this.sa=null;this.O=new Bg(this,this.g,"rpc",this.C);this.O.Ka=null;this.O.Nb=0;var a=this.bc.clone();Tg(a,"RID","rpc");Tg(a,"SID",this.g);Tg(a,"CI",this.Eb?"0":"1");Tg(a,"AID",this.Ra);bi(this,a);if(!C||Uc(10))Tg(a,"TYPE","xmlhttp"),Hg(this.O,a,!0,this.tb,!1);else{Tg(a,"TYPE","html");var b=this.O,c=!!this.tb;b.Wa=3;b.ya=Fg(a.clone());Sg(b,c)}};
function Ih(a,b,c){a.Eb=c;a.pa=b.ua;a.j||Zh(a)}
g.Oc=function(a,b){if(0!=this.b&&(this.O==a||this.Y==a))if(this.pa=a.fb,this.Y==a&&3==this.b)if(7<this.Ga){try{var c=this.i.parse(b)}catch(f){c=null}if(Ca(c)&&3==c.length)if(0==c[0])a:{if(!this.sa){if(this.O)if(this.O.Ua+3E3<this.Y.Ua)ei(this),this.O.cancel(),this.O=null;else break a;ki(this);J(19)}}else this.Ac=c[1],0<this.Ac-this.Ra&&37500>c[2]&&this.Eb&&0==this.Oa&&!this.Ha&&(this.Ha=Ug(u(this.ge,this),6E3));else Hh(this,11)}else b!=Vb.rf.b&&Hh(this,11);else if(this.O==a&&ei(this),!/^[\s\xa0]*$/.test(b)){c=
this.i.parse(b);Ca(c);for(var d=0;d<c.length;d++){var e=c[d];this.Ra=e[0];e=e[1];2==this.b?"c"==e[0]?(this.g=e[1],this.tb=e[2],e=e[3],null!=e?this.Ga=e:this.Ga=6,this.b=3,this.U&&this.U.fc(),this.bc=Eh(this,this.lb()?this.tb:null,this.Kb),ji(this)):"stop"==e[0]&&Hh(this,7):3==this.b&&("stop"==e[0]?Hh(this,7):"noop"!=e[0]&&this.U&&this.U.ec(e),this.Oa=0)}}};
g.ge=function(){null!=this.Ha&&(this.Ha=null,this.O.cancel(),this.O=null,ki(this),J(20))};
function ei(a){null!=a.Ha&&(m.clearTimeout(a.Ha),a.Ha=null)}
g.yb=function(a){if(this.O==a){ei(this);this.O=null;var b=2}else if(this.Y==a)this.Y=null,b=1;else return;this.pa=a.fb;if(0!=this.b)if(a.la)1==b?(b=w()-a.Ua,bf(Vh,new Xh(Vh,a.Ma?a.Ma.length:0,b,this.Pa)),di(this),this.h.length=0):ji(this);else{var c=a.Ca,d;if(!(d=3==c||7==c||0==c&&0<this.pa)){if(d=1==b)this.Y||this.Ba||1==this.b||2<=this.Pa?d=!1:(this.Ba=Ug(u(this.Sc,this,a),li(this,this.Pa)),this.Pa++,d=!0);d=!(d||2==b&&ki(this))}if(d)switch(c){case 1:Hh(this,5);break;case 4:Hh(this,10);break;case 3:Hh(this,
6);break;case 7:Hh(this,12);break;default:Hh(this,2)}}};
function li(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
g.wd=function(a){if(!kb(arguments,this.b))throw Error("Unexpected channel state: "+this.b);};
function Hh(a,b){if(2==b||9==b){var c=null;a.U&&(c=null);var d=u(a.Xe,a);c||(c=new fh("../../../https@www.google.com/images/cleardot.gif"),Fg(c));Bh(c.toString(),1E4,d)}else J(2);mi(a,b)}
g.Xe=function(a){a?J(2):(J(1),mi(this,8))};
function mi(a,b){a.b=0;a.U&&a.U.dc(b);ci(a);ai(a)}
function ci(a){a.b=0;a.pa=-1;if(a.U)if(0==a.h.length&&0==a.f.length)a.U.Ib();else{rb(a.h);var b=rb(a.f);a.h.length=0;a.f.length=0;a.U.Ib(b)}}
function Eh(a,b,c){var d=uh(c);if(""!=d.f)b&&hh(d,b+"."+d.f),ih(d,d.C);else{var e=window.location;d=vh(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c)}a.bb&&$b(a.bb,function(a,b){Tg(d,b,a)});
Tg(d,"VER",a.Ga);bi(a,d);return d}
g.Jb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new Jh;a.X=!1;return a};
g.isActive=function(){return!!this.U&&this.U.isActive(this)};
function Ug(a,b){if(!Ea(a))throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){a()},b)}
g.ka=function(a){bf(Vh,new Yh(Vh,a))};
function J(a){bf(Vh,new Wh(Vh,a))}
g.lb=function(){return!(!C||Uc(10))};
function ni(){}
g=ni.prototype;g.fc=function(){};
g.ec=function(){};
g.dc=function(){};
g.Ib=function(){};
g.nc=function(){return{}};
g.isActive=function(){return!0};function oi(a,b,c){if(q(b))(b=pi(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=pi(c,d);f&&(c.style[f]=e)}}
var qi={};function pi(a,b){var c=qi[b];if(!c){var d=Tb(b);c=d;void 0===a.style[d]&&(d=(Fc?"Webkit":Ec?"Moz":C?"ms":Bc?"O":null)+Ub(d),void 0!==a.style[d]&&(c=d));qi[b]=c}return c}
function ri(a,b){var c=Ed(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function si(a,b){return ri(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function ti(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}C&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function ui(a){if(C&&!Uc(8))return a.offsetParent;var b=Ed(a),c=si(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=si(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function vi(a){for(var b=new tg(0,Infinity,Infinity,0),c=Cd(a),d=c.b.body,e=c.b.documentElement,f=Md(c.b);a=ui(a);)if(!(C&&0==a.clientWidth||Fc&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=si(a,"overflow")){var h=wi(a),k=new zd(a.clientLeft,a.clientTop);h.x+=k.x;h.y+=k.y;b.top=Math.max(b.top,h.y);b.right=Math.min(b.right,h.x+a.clientWidth);b.bottom=Math.min(b.bottom,h.y+a.clientHeight);b.left=Math.max(b.left,h.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);
c=Jd(Nd(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function wi(a){var b=Ed(a),c=new zd(0,0);var d=b?Ed(b):document;d=!C||Uc(9)||Kd(Cd(d).b)?d.documentElement:d.body;if(a==d)return c;a=ti(a);b=Ld(Cd(b).b);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function xi(a){a=ti(a);return new zd(a.left,a.top)}
function yi(a){if(1==a.nodeType)return xi(a);a=a.changedTouches?a.changedTouches[0]:a;return new zd(a.clientX,a.clientY)}
function zi(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Ai(a){var b=Bi;if("none"!=si(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Bi(a){var b=a.offsetWidth,c=a.offsetHeight,d=Fc&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new Bd(b,c):(a=ti(a),new Bd(a.right-a.left,a.bottom-a.top))}
function Ci(a){var b=wi(a);a=Ai(a);return new ug(b.x,b.y,a.width,a.height)}
function Di(a){return"rtl"==si(a,"direction")}
function Ei(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Fi(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Ei(a,c):0}
function Gi(a){if(C){var b=Fi(a,"paddingLeft"),c=Fi(a,"paddingRight"),d=Fi(a,"paddingTop");a=Fi(a,"paddingBottom");return new tg(d,c,a,b)}b=ri(a,"paddingLeft");c=ri(a,"paddingRight");d=ri(a,"paddingTop");a=ri(a,"paddingBottom");return new tg(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))}
var Hi={thin:2,medium:4,thick:6};function Ii(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Hi?Hi[c]:Ei(a,c)}
function Ji(a){if(C&&!Uc(9)){var b=Ii(a,"borderLeft"),c=Ii(a,"borderRight"),d=Ii(a,"borderTop");a=Ii(a,"borderBottom");return new tg(d,c,a,b)}b=ri(a,"borderLeftWidth");c=ri(a,"borderRightWidth");d=ri(a,"borderTopWidth");a=ri(a,"borderBottomWidth");return new tg(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))}
;var Ki=function(){if(Hc){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(pc))?a[1]:"0"}return Gc?(a=/10[_.][0-9_.]+/,(a=a.exec(pc))?a[0].replace(/_/g,"."):"10"):Ic?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(pc))?a[1]:""):Jc||Kc||Lc?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(pc))?a[1].replace(/_/g,"."):""):""}();function Li(a){return(a=a.exec(pc))?a[1]:""}
var Mi=function(){if(wf)return Li(/Firefox\/([0-9.]+)/);if(C||Cc||Bc)return Sc;if(Bf)return wc()?Li(/CriOS\/([0-9.]+)/):Li(/Chrome\/([0-9.]+)/);if(Cf&&!wc())return Li(/Version\/([0-9.]+)/);if(xf||yf){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(pc);if(a)return a[1]+"."+a[2]}else if(zf)return(a=Li(/Android\s+([0-9.]+)/))?a:Li(/Version\/([0-9.]+)/);return""}();function Ni(a,b,c,d,e,f,h){var k;if(k=c.offsetParent){var l="HTML"==k.tagName||"BODY"==k.tagName;if(!l||"static"!=si(k,"position")){var n=wi(k);if(!l){l=Di(k);var y;if(y=l){if(y=Cf)y=0<=Qb(Mi,10);var I;if(I=Mc)I=0<=Qb(Ki,10);y=Ec||y||I}l=y?-k.scrollLeft:!l||Dc&&Tc("8")||"visible"==si(k,"overflowX")?k.scrollLeft:k.scrollWidth-k.clientWidth-k.scrollLeft;n=Ad(n,new zd(l,k.scrollTop))}}}k=n||new zd;n=Ci(a);if(l=vi(a)){var ca=new ug(l.left,l.top,l.right-l.left,l.bottom-l.top);l=Math.max(n.left,ca.left);
y=Math.min(n.left+n.width,ca.left+ca.width);l<=y&&(I=Math.max(n.top,ca.top),ca=Math.min(n.top+n.height,ca.top+ca.height),I<=ca&&(n.left=l,n.top=I,n.width=y-l,n.height=ca-I))}l=Cd(a);I=Cd(c);if(l.b!=I.b){y=l.b.body;I=Nd(I.b);ca=new zd(0,0);var oa=(oa=Ed(y))?Nd(oa):window;if(yc(oa,"parent")){var Ua=y;do{var Af=oa==I?wi(Ua):xi(Ua);ca.x+=Af.x;ca.y+=Af.y}while(oa&&oa!=I&&oa!=oa.parent&&(Ua=oa.frameElement)&&(oa=oa.parent))}y=Ad(ca,wi(y));!C||Uc(9)||Kd(l.b)||(y=Ad(y,Ld(l.b)));n.left+=y.x;n.top+=y.y}a=Oi(a,
b);b=n.left;a&4?b+=n.width:a&2&&(b+=n.width/2);b=new zd(b,n.top+(a&1?n.height:0));b=Ad(b,k);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var Q;h&&(Q=vi(c))&&(Q.top-=k.y,Q.right-=k.x,Q.bottom-=k.y,Q.left-=k.x);e=Q;Q=b.clone();b=Oi(c,d);d=Ai(c);a=d.clone();Q=Q.clone();a=a.clone();k=0;if(f||0!=b)b&4?Q.x-=a.width+(f?f.right:0):b&2?Q.x-=a.width/2:f&&(Q.x+=f.left),b&1?Q.y-=a.height+(f?f.bottom:0):f&&(Q.y+=f.top);h&&(e?(f=Q,b=a,k=0,65==(h&65)&&(f.x<e.left||f.x>=e.right)&&(h&=-2),132==(h&132)&&(f.y<e.top||
f.y>=e.bottom)&&(h&=-5),f.x<e.left&&h&1&&(f.x=e.left,k|=1),h&16&&(n=f.x,f.x<e.left&&(f.x=e.left,k|=4),f.x+b.width>e.right&&(b.width=Math.min(e.right-f.x,n+b.width-e.left),b.width=Math.max(b.width,0),k|=4)),f.x+b.width>e.right&&h&1&&(f.x=Math.max(e.right-b.width,e.left),k|=1),h&2&&(k|=(f.x<e.left?16:0)|(f.x+b.width>e.right?32:0)),f.y<e.top&&h&4&&(f.y=e.top,k|=2),h&32&&(n=f.y,f.y<e.top&&(f.y=e.top,k|=8),f.y+b.height>e.bottom&&(b.height=Math.min(e.bottom-f.y,n+b.height-e.top),b.height=Math.max(b.height,
0),k|=8)),f.y+b.height>e.bottom&&h&4&&(f.y=Math.max(e.bottom-b.height,e.top),k|=2),h&8&&(k|=(f.y<e.top?64:0)|(f.y+b.height>e.bottom?128:0)),h=k):h=256,k=h);h=new ug(0,0,0,0);h.left=Q.x;h.top=Q.y;h.width=a.width;h.height=a.height;f=h;h=k;h&496||(e=f,Q=new zd(e.left,e.top),Q instanceof zd?(e=Q.x,Q=Q.y):(e=Q,Q=void 0),c.style.left=zi(e,!1),c.style.top=zi(Q,!1),a=new Bd(f.width,f.height),d==a||d&&a&&d.width==a.width&&d.height==a.height||(f=a,e=Kd(Cd(Ed(c)).b),!C||Tc("10")||e&&Tc("8")?(c=c.style,Ec?c.MozBoxSizing=
"border-box":Fc?c.WebkitBoxSizing="border-box":c.boxSizing="border-box",c.width=Math.max(f.width,0)+"px",c.height=Math.max(f.height,0)+"px"):(d=c.style,e?(e=Gi(c),c=Ji(c),d.pixelWidth=f.width-c.left-e.left-e.right-c.right,d.pixelHeight=f.height-c.top-e.top-e.bottom-c.bottom):(d.pixelWidth=f.width,d.pixelHeight=f.height))));return h}
function Oi(a,b){return(b&8&&Di(a)?b^4:b)&-9}
;function K(a){pe.call(this);this.i=1;this.g=[];this.h=0;this.b=[];this.f={};this.j=!!a}
z(K,pe);g=K.prototype;g.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.i;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.i=e+3;d.push(e);return e};
function Pi(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.ja(d),b.apply(void 0,arguments))},a)}
function Qi(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=ib(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.ja(b)}}
g.ja=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.h?(this.g.push(a),this.b[a+1]=t):(c&&nb(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
g.Z=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.j)for(e=0;e<c.length;e++){var h=c[e];Ri(this.b[h+1],this.b[h+2],d)}else{this.h++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.b[h+1].apply(this.b[h+2],d)}finally{if(this.h--,0<this.g.length&&0==this.h)for(;c=this.g.pop();)this.ja(c)}}return 0!=e}return!1};
function Ri(a,b,c){lf(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.f[a];b&&(A(b,this.ja,this),delete this.f[a])}else this.b.length=0,this.f={}};
function Si(a,b){if(b){var c=a.f[b];return c?c.length:0}c=0;for(var d in a.f)c+=Si(a,d);return c}
g.B=function(){K.A.B.call(this);this.clear();this.g.length=0};function Ti(a){this.b=a}
Ti.prototype.set=function(a,b){p(b)?this.b.set(a,lg(b)):this.b.remove(a)};
Ti.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ti.prototype.remove=function(a){this.b.remove(a)};function Ui(a){this.b=a}
z(Ui,Ti);function Vi(a){this.data=a}
function Wi(a){return!p(a)||a instanceof Vi?a:new Vi(a)}
Ui.prototype.set=function(a,b){Ui.A.set.call(this,a,Wi(b))};
Ui.prototype.f=function(a){a=Ui.A.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ui.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Xi(a){this.b=a}
z(Xi,Ui);function Yi(a){var b=a.creation;a=a.expiration;return!!a&&a<w()||!!b&&b>w()}
Xi.prototype.set=function(a,b,c){if(b=Wi(b)){if(c){if(c<w()){Xi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=w()}Xi.A.set.call(this,a,b)};
Xi.prototype.f=function(a,b){var c=Xi.A.f.call(this,a);if(c)if(!b&&Yi(c))Xi.prototype.remove.call(this,a);else return c};function Zi(a){this.b=a}
z(Zi,Xi);function $i(a,b){var c=[];Tf(b,function(a){try{var b=Zi.prototype.f.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(b)?Yi(b)&&c.push(a):c.push(a)},a);
return c}
function aj(a,b){var c=$i(a,b);A(c,function(a){Zi.prototype.remove.call(this,a)},a)}
;function bj(){}
;function cj(){}
z(cj,bj);cj.prototype.clear=function(){var a=Uf(this.ra(!0)),b=this;A(a,function(a){b.remove(a)})};function dj(a){this.b=a}
z(dj,cj);g=dj.prototype;g.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.b.getItem(a);if(!q(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.b.removeItem(a)};
g.ra=function(a){var b=0,c=this.b,d=new Rf;d.next=function(){if(b>=c.length)throw Qf;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!q(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.b.clear()};
g.key=function(a){return this.b.key(a)};function ej(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
z(ej,dj);function fj(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
z(fj,dj);function gj(a,b){this.f=a;this.b=null;if(C&&!Uc(9)){hj||(hj=new Vf);this.b=hj.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),hj.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
z(gj,cj);var ij={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},hj=null;function jj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return ij[a]})}
g=gj.prototype;g.isAvailable=function(){return!!this.b};
g.set=function(a,b){this.b.setAttribute(jj(a),b);kj(this)};
g.get=function(a){a=this.b.getAttribute(jj(a));if(!q(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.b.removeAttribute(jj(a));kj(this)};
g.ra=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new Rf;d.next=function(){if(b>=c.length)throw Qf;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!q(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);kj(this)};
function kj(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function lj(a,b){this.f=a;this.b=b+"::"}
z(lj,cj);lj.prototype.set=function(a,b){this.f.set(this.b+a,b)};
lj.prototype.get=function(a){return this.f.get(this.b+a)};
lj.prototype.remove=function(a){this.f.remove(this.b+a)};
lj.prototype.ra=function(a){var b=this.f.ra(!0),c=this,d=new Rf;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};function mj(a){var b=new ej;return b.isAvailable()?a?new lj(b,a):b:null}
;function nj(){this.b=[];this.f=[]}
nj.prototype.isEmpty=function(){return lb(this.b)&&lb(this.f)};
nj.prototype.clear=function(){this.b=[];this.f=[]};
nj.prototype.remove=function(a){var b=this.b;var c=cb(b,a);0<=c?(ob(b,c),b=!0):b=!1;return b||nb(this.f,a)};
nj.prototype.ga=function(){for(var a=[],b=this.b.length-1;0<=b;--b)a.push(this.b[b]);var c=this.f.length;for(b=0;b<c;++b)a.push(this.f[b]);return a};function oj(){}
Aa(oj);oj.prototype.b=0;function pj(a){af.call(this);this.P=a||Cd();this.wa=null;this.Qa=!1;this.b=null;this.f=void 0;this.M=this.N=this.R=null;this.xa=!1}
z(pj,af);g=pj.prototype;g.Qd=oj.getInstance();g.na=function(){return this.b};
function qj(a,b){return a.b?E(b,a.b||a.P.b):null}
function rj(a){a.f||(a.f=new cg(a));return a.f}
g.Wb=function(a){if(this.R&&this.R!=a)throw Error("Method not supported");pj.A.Wb.call(this,a)};
function sj(a,b){if(a.Qa)throw Error("Component already rendered");if(b){a.xa=!0;var c=Ed(b);a.P&&a.P.b==c||(a.P=Cd(b));a.b=b;a.Aa()}else throw Error("Invalid element to decorate");}
g.Aa=function(){this.Qa=!0;tj(this,function(a){!a.Qa&&a.na()&&a.Aa()})};
g.ta=function(){tj(this,function(a){a.Qa&&a.ta()});
this.f&&fg(this.f);this.Qa=!1};
g.B=function(){this.Qa&&this.ta();this.f&&(this.f.dispose(),delete this.f);tj(this,function(a){a.dispose()});
!this.xa&&this.b&&Ud(this.b);this.R=this.b=this.M=this.N=null;pj.A.B.call(this)};
function tj(a,b){a.N&&A(a.N,b,void 0)}
g.removeChild=function(a,b){if(a){var c=q(a)?a:a.wa||(a.wa=":"+(a.Qd.b++).toString(36));if(this.M&&c){var d=this.M;d=(null!==d&&c in d?d[c]:void 0)||null}else d=null;a=d;if(c&&a){d=this.M;c in d&&delete d[c];nb(this.N,a);b&&(a.ta(),a.b&&Ud(a.b));c=a;if(null==c)throw Error("Unable to set parent component");c.R=null;pj.A.Wb.call(c,null)}}if(!a)throw Error("Child is not in parent component");return a};var uj=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var vj=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};x("yt.config_",vj);function wj(a){var b=arguments;if(1<b.length)vj[b[0]]=b[1];else{b=b[0];for(var c in b)vj[c]=b[c]}}
function L(a,b){return a in vj?vj[a]:b}
;function xj(a,b,c){a&&(a.dataset?a.dataset[yj(b)]=String(c):a.setAttribute("data-"+b,c))}
function M(a,b){return a?a.dataset?a.dataset[yj(b)]:a.getAttribute("data-"+b):null}
function zj(a,b){a&&(a.dataset?delete a.dataset[yj(b)]:a.removeAttribute("data-"+b))}
var Aj={};function yj(a){return Aj[a]||(Aj[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Bj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Cj(b)}}:a}
function Cj(a,b,c,d,e){var f=r("yt.logging.errors.log");f?f(a,b,c,d,e):(f=L("ERRORS",[]),f.push([a,b,c,d,e]),wj("ERRORS",f))}
;function N(a,b){Ea(a)&&(a=Bj(a));return window.setTimeout(a,b)}
function O(a){window.clearTimeout(a)}
;var Dj=r("ytPubsubPubsubInstance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.ja;K.prototype.publish=K.prototype.Z;K.prototype.clear=K.prototype.clear;x("ytPubsubPubsubInstance",Dj);var Ej=r("ytPubsubPubsubSubscribedKeys")||{};x("ytPubsubPubsubSubscribedKeys",Ej);var Fj=r("ytPubsubPubsubTopicToKeys")||{};x("ytPubsubPubsubTopicToKeys",Fj);var Gj=r("ytPubsubPubsubIsSynchronous")||{};x("ytPubsubPubsubIsSynchronous",Gj);
function P(a,b,c){var d=Hj();if(d){var e=d.subscribe(a,function(){var d=arguments;var h=function(){Ej[e]&&b.apply(c||window,d)};
try{Gj[a]?h():N(h,0)}catch(k){Cj(k)}},c);
Ej[e]=!0;Fj[a]||(Fj[a]=[]);Fj[a].push(e);return e}return 0}
function Ij(){var a=R.kb,b=R,c=P("yt-ui-dialog-cancelled",function(d){a.apply(b,arguments);Jj(c)},b)}
function Jj(a){var b=Hj();b&&(xa(a)?a=[a]:q(a)&&(a=[parseInt(a,10)]),A(a,function(a){b.unsubscribeByKey(a);delete Ej[a]}))}
function S(a,b){var c=Hj();c&&c.publish.apply(c,arguments)}
function Kj(a,b){Gj[a]=!0;var c=Hj();c&&c.publish.apply(c,arguments);Gj[a]=!1}
function Lj(a){var b=Hj();if(b)if(b.clear(a),a)Mj(a);else for(var c in Fj)Mj(c)}
function Hj(){return r("ytPubsubPubsubInstance")}
function Mj(a){Fj[a]&&(a=Fj[a],A(a,function(a){Ej[a]&&delete Ej[a]}),a.length=0)}
;var Nj=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Oj=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Pj(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Nj,""),c=c.replace(Oj,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Qj(a,b)}
function Qj(a,b){var c=Rj(a),d=document.getElementById(c),e=d&&M(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=P(c,b);var h=""+Ga(b);Sj[h]=e}f||(d=Tj(a,c,function(){M(d,"loaded")||(xj(d,"loaded","true"),S(c),N(v(Lj,c),0))}))}}
function Tj(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
xd(d,ig(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Uj(a,b){if(a&&b){var c=""+Ga(b);(c=Sj[c])&&Jj(c)}}
function Rj(a){var b=document.createElement("a");wd(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Sb(a)}
var Sj={};var Vj=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Wj(a,b){a=a||"";if(window.spf){var c=a.match(Vj);spf.style.load(a,c?c[1]:"",b);return null}return Xj(a,b)}
function Yj(a,b,c){if(a=L(a,void 0)){var d=v(Wj,a,b);if(c)var e=P(c,function(){Jj(e);d()});
else d()}}
function Xj(a,b){var c=Zj(a),d=document.getElementById(c),e=d&&M(d,"loaded"),f=d&&!e;if(e)return b&&b(),d;b&&(P(c,b),Ga(b));return f?d:d=ak(a,c,function(){M(d,"loaded")||(xj(d,"loaded","true"),S(c),N(v(Lj,c),0))})}
function ak(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=ig(a);d.rel="stylesheet";d.href=gd(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Zj(a){var b=document.createElement("A");dd("This URL is never added to the DOM");a=nd(a);wd(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Sb(b)}
;w();var bk,ck,dk;function ek(){var a=Cd(),b=a.b,c=a.createElement("div");c.style.backgroundColor="rgb(1, 2, 3)";a.appendChild(b.body,c);b=ri(c,"backgroundColor");b=b.replace(/ /g,"");dk="rgb(0,0,0)"===b?"black":"rgb(255,255,255)"===b?"white":null;a.Dd(c)}
;var fk=0;function gk(a){var b=a.__yt_uid_key;b||(b=hk(),a.__yt_uid_key=b);return b}
function ik(a){var b=a.cloneNode(!1);"TR"==b.tagName||"SELECT"==b.tagName?A(a.childNodes,function(a){b.appendChild(ik(a))}):b.innerHTML=a.innerHTML;
return b}
function jk(a,b){a=D(a);b=D(b);return!!ne(a,function(a){return a===b},void 0)}
function kk(a,b,c){a=Gd(document,a,b,c);return a.length?a[0]:null}
function lk(a,b){"disabled"in a&&(a.disabled=!b);1==a.nodeType&&Lf(a,"disabled",!b);if(a.hasChildNodes())for(var c=0,d;d=a.childNodes[c];++c)d instanceof Element&&lk(d,b)}
function mk(a){a=Eb(a);var b=Bb(a);b&&(a="<table>"+a+"</table>");a=Rd(gg(a));var c=document.createDocumentFragment();if(b)return A(Gd(document,"tr",null,a),function(a){c.appendChild(a)}),c;
c.appendChild(a);return c}
function nk(a){a=Eb(a);if(Bb(a))return a=Rd(gg("<table><tbody>"+a+"</tbody></table>")),kk("tr",null,a);var b=document.createElement("div");b.innerHTML=a;return Xd(b)}
function ok(){Lf(document.body,"hide-players",!1);A(Fd("preserve-players"),function(a){H(a,"preserve-players")})}
var hk=r("ytDomDomGetNextId")||function(){return++fk};
x("ytDomDomGetNextId",hk);var pk={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function qk(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in pk||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}
qk.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
qk.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
qk.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var gc=r("ytEventsEventsListeners")||{};x("ytEventsEventsListeners",gc);var rk=r("ytEventsEventsCounter")||{count:0};x("ytEventsEventsCounter",rk);
function sk(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return fc(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,h=Fa(e[4])&&Fa(d)&&jc(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||h)})}
function T(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=sk(a,b,c,d);if(e)return e;e=++rk.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(d){d=new qk(d);if(!ne(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new qk(b);
b.currentTarget=a;return c.call(a,b)};
h=Bj(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),tk()||"boolean"==typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);gc[e]=[a,b,c,h,d];return e}
function uk(a,b,c,d){var e=a||document;return T(e,b,function(a){var b=ne(a.target,function(a){return a===e||d(a)});
b&&b!==e&&!b.disabled&&(a.currentTarget=b,c.call(b,a))})}
function vk(a){a&&("string"==typeof a&&(a=[a]),A(a,function(a){if(a in gc){var b=gc[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?tk()||"boolean"==typeof b?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete gc[a]}}))}
function wk(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var tk=Xe(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function xk(a,b,c,d){return uk(a,b,c,function(a){return F(a,d)})}
function yk(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function zk(a,b,c){var d=void 0===d?{}:d;var e;return e=T(a,b,function(){vk(e);c.apply(a,arguments)},d)}
;function Ak(){xj(Bk,"target-id","content")}
function Ck(){var a=D(M(Bk,"target-id"));a.setAttribute("tabindex","0");a.focus();a=wi(D("page-container")).y;window.scrollBy(0,-a)}
var Bk=null;function Dk(a){ck&&bk&&(Sd(ck),ck.setAttribute("role","alert"),bk.style.clip="auto",ck.appendChild(document.createTextNode(a)),ck.style.display="none",ck.style.display="inline")}
;var Ek=p(XMLHttpRequest)?function(){return new XMLHttpRequest}:p(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Fk(){if(!Ek)return null;var a=Ek();return"open"in a?a:null}
;function Gk(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=Fb(e[0]||"");e=Fb(e[1]||"");f in b?Ca(b[f])?sb(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Hk(a,b){var c=a.split("#",2);a=c[0];c=1<c.length?"#"+c[1]:"";var d=a.split("?",2);a=d[0];d=Gk(d[1]||"");for(var e in b)d[e]=b[e];return eh(a,d)+c}
;var Ik={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Jk=!1;
function Kk(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Yg)[1]||null,e=Zg(a);d&&e?(d=c,c=a.match(Yg),d=d.match(Yg),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Zg(c)==e&&(Number(c.match(Yg)[4]||null)||null)==(Number(a.match(Yg)[4]||null)||null):!0;for(var f in Ik){if((e=d=L(Ik[f]))&&!(e=c)){e=f;var h=L("CORS_HEADER_WHITELIST")||{},k=Zg(a);e=k?(h=h[k])?kb(h,e):!1:!0}e&&(b[f]=d)}return b}
function Lk(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Mk(a,b);var d=Nk(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&O(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||m;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ib&&b.ib.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.Mc&&0<b.timeout&&(f=N(function(){e||(e=!0,O(f),b.Mc.call(b.context||m))},b.timeout))}else Ok(a,b)}
function Ok(a,b){var c=b.format||"JSON";a=Mk(a,b);var d=Nk(a,b),e=!1,f,h=Pk(a,function(a){if(!e){e=!0;f&&O(f);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=!0;break a;default:d=!1}var h=null;if(d||400<=a.status&&500>a.status)h=Qk(c,a,b.Gf);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(h&&h.return_code,10);break a;case "RAW":d=!0;break a}d=!!h}h=h||{};var k=b.context||m;d?b.onSuccess&&b.onSuccess.call(k,
a,h):b.onError&&b.onError.call(k,a,h);b.ib&&b.ib.call(k,a,h)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.va&&0<b.timeout&&(f=N(function(){e||(e=!0,h.abort(),O(f),b.va.call(b.context||m,h))},b.timeout));
return h}
function Mk(a,b){b.If&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME",void 0),d=b.qa;d&&(d[c]&&delete d[c],a=Hk(a,d||{}));return a}
function Nk(a,b){var c=L("XSRF_FIELD_NAME",void 0),d=L("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.S,h=L("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.Hf||Zg(a)&&!b.withCredentials&&Zg(a)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.S&&b.S[h]||(f||(f={}),f[c]=d);f&&q(e)&&(e=Gk(e),nc(e,f),e=b.Wc&&"JSON"==b.Wc?JSON.stringify(e):dh(e));f=e||f&&!hc(f);!Jk&&f&&"POST"!=b.method&&(Jk=!0,Cj(Error("AJAX request with postData should use POST")));
return e}
function Qk(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Rk(b):null)d={},A(b.getElementsByTagName("*"),function(a){d[a.tagName]=Sk(a)})}c&&Tk(d);
return d}
function Tk(a){if(Fa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=yd(dd("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Tk(a[b])}}
function Rk(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Sk(a){var b="";A(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Pk(a,b,c,d,e,f,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Bj(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Fk();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;l.open(c,a,!0);f&&(l.responseType=f);h&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Kk(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var Uk={},Vk=0;function Wk(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=pc,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=kd(md(a)),"about:invalid#zClosurez"===a?a="":(a=rd(sd(a)),a=encodeURIComponent(String(lg(a)))),/^[\s\xa0]*$/.test(a)||(a=Od("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),Ed(a).body.appendChild(a))):e?Pk(a,b,"POST",e,d):L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Pk(a,b,"GET","",d):Xk(a,b))}
function Xk(a,b){var c=new Image,d=""+Vk++;Uk[d]=c;c.onload=c.onerror=function(){b&&Uk[d]&&b();delete Uk[d]};
c.src=a}
;function Yk(a,b){Wk("/gen_204?"+a,b)}
;function Zk(a,b){(a=D(a))&&a.style&&(a.style.display=b?"":"none",Lf(a,"hid",!b))}
function $k(a){return(a=D(a))?"none"!=a.style.display&&!F(a,"hid"):!1}
function al(a){if(a=D(a))$k(a)?(a.style.display="none",G(a,"hid")):(a.style.display="",H(a,"hid"))}
function bl(a){A(arguments,function(a){!Da(a)||a instanceof Element?Zk(a,!0):A(a,function(a){bl(a)})})}
function U(a){A(arguments,function(a){!Da(a)||a instanceof Element?Zk(a,!1):A(a,function(a){U(a)})})}
function cl(a){A(arguments,function(a){Da(a)?A(a,function(a){cl(a)}):al(a)})}
;function dl(a,b){this.version=a;this.args=b}
;function el(a,b){this.topic=a;this.b=b}
el.prototype.toString=function(){return this.topic};function fl(){}
;function gl(){}
ia(gl,fl);function hl(a,b,c){isNaN(c)&&(c=void 0);var d=r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):N(a,c||0)}
function il(a){if(!isNaN(a)){var b=r("yt.scheduler.instance.cancelJob");b?b(a):O(a)}}
gl.prototype.start=function(){var a=r("yt.scheduler.instance.start");a&&a()};
gl.prototype.pause=function(){var a=r("yt.scheduler.instance.pause");a&&a()};
Aa(gl);gl.getInstance();var jl=r("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.ja;K.prototype.publish=K.prototype.Z;K.prototype.clear=K.prototype.clear;x("ytPubsub2Pubsub2Instance",jl);var kl=r("ytPubsub2Pubsub2SubscribedKeys")||{};x("ytPubsub2Pubsub2SubscribedKeys",kl);var ll=r("ytPubsub2Pubsub2TopicToKeys")||{};x("ytPubsub2Pubsub2TopicToKeys",ll);var ml=r("ytPubsub2Pubsub2IsAsync")||{};x("ytPubsub2Pubsub2IsAsync",ml);
x("ytPubsub2Pubsub2SkipSubKey",null);function nl(a,b){var c=ol();c&&c.publish.call(c,a.toString(),a,b)}
function pl(a,b){var c=ol();if(c){var d=c.subscribe(a.toString(),function(c,f){var e=r("ytPubsub2Pubsub2SkipSubKey");e&&e==d||(e=function(){if(kl[d])try{if(f&&a instanceof el&&a!=c)try{var e=a.b,h=f;if(!h.args||!h.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!e.Ea){var n=new e;e.Ea=n.version}var y=e.Ea}catch(I){}if(!y||h.version!=y)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(e,rb(h.args))}catch(I){throw I.message=
"yt.pubsub2.Data.deserialize(): "+I.message,I;}}catch(I){throw I.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+I.message,I;}b.call(window,f)}catch(I){Cj(I)}},ml[a.toString()]?r("yt.scheduler.instance")?hl(e,1,void 0):N(e,0):e())});
kl[d]=!0;ll[a.toString()]||(ll[a.toString()]=[]);ll[a.toString()].push(d)}}
function ql(a){var b=ol();b&&(xa(a)&&(a=[a]),A(a,function(a){b.unsubscribeByKey(a);delete kl[a]}))}
function ol(){return r("ytPubsub2Pubsub2Instance")}
;var rl={},sl="ontouchstart"in document;function tl(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return ne(c,function(a){return F(a,b)},d)}
function ul(a){var b="mouseover"==a.type&&"mouseenter"in rl||"mouseout"==a.type&&"mouseleave"in rl,c=a.type in rl||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=rl[b];for(var d in c.f){var e=tl(b,d,a.target);e&&!ne(a.relatedTarget,function(a){return a==e})&&c.Z(d,e,b,a)}}if(b=rl[a.type])for(d in b.f)(e=tl(a.type,d,a.target))&&b.Z(d,e,a.type,a)}}
T(document,"blur",ul,!0);T(document,"change",ul,!0);T(document,"click",ul);T(document,"focus",ul,!0);T(document,"mouseover",ul);T(document,"mouseout",ul);T(document,"mousedown",ul);T(document,"keydown",ul);T(document,"keyup",ul);T(document,"keypress",ul);T(document,"cut",ul);T(document,"paste",ul);sl&&(T(document,"touchstart",ul),T(document,"touchend",ul),T(document,"touchcancel",ul));function vl(a){this.i=a;this.C={};this.G=[];this.w=[]}
g=vl.prototype;g.ea=function(a){return oe(a,V(this))};
function V(a,b){return"yt-uix"+(a.i?"-"+a.i:"")+(b?"-"+b:"")}
g.unregister=function(){Jj(this.G);this.G.length=0;ql(this.w);this.w.length=0};
g.init=t;g.dispose=t;function wl(a,b,c){a.G.push(P(b,c,a))}
function xl(a,b,c,d){d=V(a,d);var e=u(c,a);b in rl||(rl[b]=new K);rl[b].subscribe(d,e);a.C[c]=e}
function yl(a,b,c,d){if(b in rl){var e=rl[b];Qi(e,V(a,d),a.C[c]);0>=Si(e)&&(e.dispose(),delete rl[b])}delete a.C[c]}
g.ab=function(a,b,c){var d=this.H(a,b);if(d&&(d=r(d))){var e=ub(arguments,2);tb(e,0,0,a);d.apply(null,e)}};
g.H=function(a,b){return M(a,b)};function zl(a){return L("EXPERIMENT_FLAGS",{})[a]}
;var Al={pf:"atp",wf:"ska",uf:"que",tf:"mus",vf:"sus",sf:"dsp"};var Bl=Math.pow(2,16)-1,Cl={log_event:"events",log_interaction:"interactions"},Dl=Object.create(null);Dl.log_event="GENERIC_EVENT_LOGGING";Dl.log_interaction="INTERACTION_LOGGING";var El={},Fl=0,Gl=r("ytLoggingTransportLogPayloadsQueue_")||{};x("ytLoggingTransportLogPayloadsQueue_",Gl);var Hl=r("ytLoggingTransportTokensToCttTargetIds_")||{};x("ytLoggingTransportTokensToCttTargetIds_",Hl);var Il=r("ytLoggingTransportDispatchedStats_")||{};x("ytLoggingTransportDispatchedStats_",Il);
x("ytytLoggingTransportCapturedTime_",r("ytLoggingTransportCapturedTime_")||{});
function Jl(){O(Fl);if(!hc(Gl)){for(var a in Gl){var b=El[a];if(b){var c=void 0,d=a,e=b,f=Cl[d],h=Il[d]||{};Il[d]=h;b=Math.round(uj());for(c in Gl[d]){var k=e.b;k={client:{hl:k.Ud,gl:k.Td,clientName:k.Sd,clientVersion:k.innertubeContextClientVersion}};var l=window.devicePixelRatio;l&&1!=l&&(k.client.screenDensityFloat=String(l));L("DELEGATED_SESSION_ID")&&(k.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});k={context:k};k[f]=Kl(d,c);h.dispatchedEventCount=h.dispatchedEventCount||0;h.dispatchedEventCount+=
k[f].length;if(l=Hl[c])a:{var n=k,y=c;if(l.videoId)var I="VIDEO";else if(l.playlistId)I="PLAYLIST";else break a;n.credentialTransferTokenTargetId=l;n.context=n.context||{};n.context.user=n.context.user||{};n.context.user.credentialTransferTokens=[{token:y,scope:I}]}delete Hl[c];l=k;l.requestTimeMs=b;(I=L("EVENT_ID",void 0))&&zl("enable_gel_web_client_event_id")&&(n=(L("BATCH_CLIENT_COUNTER",void 0)||0)+1,n>Bl&&(n=1),wj("BATCH_CLIENT_COUNTER",n),l.serializedClientEventId={serializedEventId:I,clientCounter:n});
Ll(e,d,k,{retry:!0})}c=h;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete Gl[a]}}hc(Gl)||Ml()}}
function Ml(){O(Fl);Fl=N(Jl,L("LOGGING_BATCH_TIMEOUT",1E4))}
function Kl(a,b){b=void 0===b?"":b;Gl[a]=Gl[a]||{};Gl[a][b]=Gl[a][b]||[];return Gl[a][b]}
;function Nl(a,b,c){var d,e=Ol,f={};f.eventTimeMs=Math.round(c||uj());f[a]=b;a=String;c?c=-1:(c=r("_lact",window),c=null==c?-1:Math.max(w()-c,0));f.context={lastActivityMs:a(c)};c="log_event";a=void 0;a=Kl(c);a.push(f);El[c]=new e;a.length>=(Number(zl("web_logging_max_batch")||0)||20)?Jl():Ml()}
;function Pl(a){var b={"X-Goog-Visitor-Id":L("VISITOR_DATA","")},c;a?c="Bearer "+r("gapi.auth.getToken")().Bf:c=Zb([]);c&&(b.Authorization=c,b["X-Goog-AuthUser"]=L("SESSION_INDEX",0));return b}
function Ql(a){a=Object.assign({},a);delete a.Authorization;var b=Zb();if(b){var c=new Gf;c.update(L("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();Da(b);if(!Df)for(Df={},Ef={},c=0;65>c;c++)Df[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Ef[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=Ef;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],h=e+1<b.length,k=h?b[e+1]:0,l=e+2<b.length,n=l?b[e+2]:0,y=f>>2;f=(f&3)<<4|k>>4;k=(k&15)<<
2|n>>6;n&=63;l||(n=64,h||(k=64));d.push(c[y],c[f],c[k],c[n])}a.hash=d.join("")}return a}
;function Rl(a,b,c,d,e,f){Yb.set(""+a,b,c,d,void 0===e?"youtube.com":e,void 0===f?!1:f)}
function Sl(a,b,c){return Yb.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
;function Tl(){var a;(a=mj("yt.innertube"))||(a=new gj("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new Xi(a):null;this.f=document.domain||window.location.hostname}
Tl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,w()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(lg(b))}catch(f){return}else e=escape(b);Rl(a,e,c,"../../default.htm",this.f)};
Tl.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=Yb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Tl.prototype.remove=function(a){this.b&&this.b.remove(a);Sl(a,"../../default.htm",this.f)};var Ul=new Tl;function Vl(a,b,c,d){if(d)return null;d=Ul.get("nextId",!0)||1;var e=Ul.get("requests",!0)||{};e[d]={method:a,request:b,authState:Ql(c),requestTime:Math.round(uj())};Ul.set("nextId",d+1,86400,!0);Ul.set("requests",e,86400,!0);return d}
function Wl(a){var b=Ul.get("requests",!0)||{};delete b[a];Ul.set("requests",b,86400,!0)}
function Xl(a){var b=Ul.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(uj())-d.requestTime)){var e=d.authState,f=Ql(Pl(!1));jc(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(uj())),Ll(a,d.method,e,{}));delete b[c]}}Ul.set("requests",b,86400,!0)}}
;function Ol(a){var b=this;this.b=a||{innertubeApiKey:L("INNERTUBE_API_KEY",void 0),innertubeApiVersion:L("INNERTUBE_API_VERSION",void 0),Sd:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Ud:L("INNERTUBE_CONTEXT_HL",void 0),Td:L("INNERTUBE_CONTEXT_GL",void 0),Vd:L("INNERTUBE_HOST_OVERRIDE",void 0)||"",Wd:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};hl(function(){Xl(b)},0,5E3)}
function Ll(a,b,c,d){!L("VISITOR_DATA")&&.01>Math.random()&&Cj(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",S:c,Wc:"JSON",va:function(){d.va()},
Mc:d.va,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
Lc:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
Jf:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=a.b.Wd||!1,h=Pl(f);Object.assign(e.headers,h);var k="",l=a.b.Vd;l&&(k=l);e.headers.Authorization&&!k&&(e.headers["x-origin"]=window.location.origin);k=""+k+("../../youtubei/"+a.b.innertubeApiVersion+"/"+b)+"@alt=json&key="+a.b.innertubeApiKey;var n;if(d.retry&&zl("retry_web_logging_batches")&&(n=Vl(b,c,h,f))){var y=e.onSuccess,I=e.Lc;e.onSuccess=function(a,b){Wl(n);y(a,b)};
c.Lc=function(a,b){Wl(n);I(a,b)}}try{zl("use_fetch_for_op_xhr")?Lk(k,e):(e.method="POST",e.S||(e.S={}),Ok(k,e))}catch(ca){if("InvalidAccessError"==ca)n&&(Wl(n),n=0),Cj(Error("An extension is blocking network request."),"WARNING");
else throw ca;}n&&hl(function(){Xl(a)},0,5E3)}
;var Yl=w().toString();
function Zl(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=w();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Yl)for(a=1,b=0;b<Yl.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Yl.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJLKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;Zl();function $l(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=eh(a,b)+c;a=a instanceof id?a:od(a);d.href=kd(a)}
function am(a){(window.ytspf||{}).enabled?spf.navigate(a):$l(a)}
;function bm(){vl.call(this,"button");this.b=null;this.g=[];this.f={}}
z(bm,vl);Aa(bm);g=bm.prototype;g.register=function(){xl(this,"click",this.hc);xl(this,"keydown",this.yc);xl(this,"keypress",this.zc);wl(this,"page-scroll",this.Ld)};
g.unregister=function(){yl(this,"click",this.hc);yl(this,"keydown",this.yc);yl(this,"keypress",this.zc);cm(this);this.f={};bm.A.unregister.call(this)};
g.hc=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
g.yc=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=dm(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=de(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.be;else"table"==e&&(f=this.ae);f&&em(this,a,b,c,u(f,this))}}};
g.Ld=function(){var a=this.f;if(0!=bc(a))for(var b in a){var c=a[b],d=oe(c.activeButtonNode||c.parentNode,V(this));if(void 0==d||void 0==c)break;fm(this,d,c,!0)}};
function em(a,b,c,d,e){var f=$k(c),h=9==d.keyCode;h||32==d.keyCode||13==d.keyCode?(d=gm(a,c))?(b=Xd(d),"a"==b.tagName.toLowerCase()?$l(b.href):yk(b)):h&&hm(a,b):f?27==d.keyCode?(gm(a,c),hm(a,b)):e(b,c,d):(a=F(b,V(a,"reverse"))?38:40,d.keyCode==a&&(yk(b),d.preventDefault()))}
g.zc=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=dm(this,a),$k(a)&&c.preventDefault())};
function gm(a,b){var c=V(a,"menu-item-highlight"),d=E(c,b);d&&H(d,c);return d}
function im(a,b,c){G(c,V(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=V(a,"item-id-"+Ga(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
g.ae=function(a,b,c){var d=gm(this,b);if(d){var e=kk("table",null,b);b=Gd(document,"td",null,e);d=jm(d,b,Gd(document,"td",null,kk("tr",null,e)).length,c);-1!=d&&(im(this,a,b[d]),c.preventDefault())}};
g.be=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=gm(this,b);d&&(b=db(Gd(document,"li",null,b),$k),im(this,a,b[jm(d,b,1,c)]),c.preventDefault())}};
function jm(a,b,c,d){var e=b.length;a=bb(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function km(a,b){var c=b.iframeMask;c||(c=document.createElement("IFRAME"),c.src='javascript:""',c.className=V(a,"menu-mask"),U(c),b.iframeMask=c);return c}
function fm(a,b,c,d){var e=oe(b,V(a,"group")),f=!!a.H(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var h=8,k=Ci(b);if(F(b,V(a,"reverse"))){f=8;h=9;k=k.top+"px";try{c.style.maxHeight=k}catch(y){}}F(b,"flip")&&(F(b,V(a,"reverse"))?(f=12,h=13):(f=13,h=12));var l;a.H(b,"button-has-sibling-menu")?l=ui(e):a.H(b,"button-menu-root-container")&&(l=lm(a,b));C&&!Tc("8")&&(l=null);if(l){var n=Ci(l);n=new tg(-n.top,n.left,n.top,-n.left)}l=new zd(0,1);F(b,V(a,"center-menu"))&&(l.x-=Math.round((Ai(c).width-Ai(b).width)/
2));d&&(l.y+=Ld(document).y);if(a=km(a,b))b=Ai(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Ni(e,f,a,h,l,n,197),d&&oi(a,"position","fixed");Ni(e,f,c,h,l,n,197)}
function lm(a,b){if(a.H(b,"button-menu-root-container")){var c=a.H(b,"button-menu-root-container");return oe(b,c)}return document.body}
g.nd=function(a){if(a){var b=dm(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.H(a,"button-has-sibling-menu")?c=a.parentNode:c=lm(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=km(this,a);d&&c.appendChild(d);(c=!!this.H(a,"button-menu-fixed"))&&(this.f[gk(a).toString()]=b);fm(this,a,b,c);Kj("yt-uix-button-menu-before-show",a,b);bl(b);d&&bl(d);
this.ab(a,"button-menu-action",!0);G(a,V(this,"active"));b=u(this.md,this,a,!1);d=u(this.md,this,a,!0);c=u(this.Ze,this,a,void 0);this.b&&dm(this,this.b)==dm(this,a)||cm(this);S("yt-uix-button-menu-show",a);vk(this.g);this.g=[T(document,"click",d),T(document,"contextmenu",b),T(window,"resize",c)];this.b=a}}};
function hm(a,b){if(b){var c=dm(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");U(c);a.ab(b,"button-menu-action",!1);var d=km(a,b),e=gk(c).toString();delete a.f[e];N(function(){d&&d.parentNode&&(U(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=oe(b,V(a,"group"));
var f=[V(a,"active")];e&&f.push(V(a,"group-active"));Kf(b,f);S("yt-uix-button-menu-hide",b);vk(a.g);a.g.length=0}}
g.Ze=function(a,b){var c=dm(this,a);if(c){b&&(b instanceof pd?c.innerHTML=rd(b):ce(c,b));var d=!!this.H(a,"button-menu-fixed");fm(this,a,c,d)}};
g.md=function(a,b,c){c=wk(c);var d=oe(c,V(this));if(d){d=dm(this,d);var e=dm(this,a);if(d==e)return}d=oe(c,V(this,"menu"));e=d==dm(this,a);var f=F(c,V(this,"menu-item")),h=F(c,V(this,"menu-close"));if(!d||e&&(f||h))hm(this,a),d&&b&&this.H(a,"button-menu-indicate-selected")&&((a=E(V(this,"content"),a))&&ce(a,ke(c)),mm(this,d,c))};
function mm(a,b,c){var d=V(a,"menu-item-selected");A(Fd(d,b),function(a){H(a,d)});
G(c.parentNode,d)}
function dm(a,b){if(!b.widgetMenu){var c=a.H(b,"button-menu-id");c=c&&D(c);var d=V(a,"menu");c?Jf(c,[d,V(a,"menu-external")]):c=E(d,b);b.widgetMenu=c}return b.widgetMenu}
g.isToggled=function(a){return F(a,V(this,"toggled"))};
g.toggle=function(a){if(this.H(a,"button-toggle")){var b=oe(a,V(this,"group")),c=V(this,"toggled"),d=F(a,c);if(b&&this.H(b,"button-toggle-group")){var e=this.H(b,"button-toggle-group");A(Fd(V(this),b),function(b){b!=a||"optional"==e&&d?(H(b,c),b.removeAttribute("aria-pressed")):(G(a,c),b.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),Nf(a,c)}};
g.click=function(a){if(dm(this,a)){var b=dm(this,a);if(b){var c=oe(b.activeButtonNode||b.parentNode,V(this));c&&c!=a?(hm(this,c),N(u(this.nd,this,a),1)):$k(b)?hm(this,a):this.nd(a)}a.focus()}this.ab(a,"button-action")};
function cm(a){a.b&&hm(a,a.b)}
;function nm(a){vl.call(this,a);this.g=null}
z(nm,vl);g=nm.prototype;g.ea=function(a){var b=vl.prototype.ea.call(this,a);return b?b:a};
g.register=function(){wl(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
g.dispose=function(){om(this);nm.A.dispose.call(this)};
g.H=function(a,b){var c=nm.A.H.call(this,a,b);return c?c:(c=nm.A.H.call(this,a,"card-config"))&&(c=r(c))&&c[b]?c[b]:null};
g.show=function(a){var b=this.ea(a);if(b){G(b,V(this,"active"));var c=pm(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;qm(this,a,c);var d=V(this,"card-visible"),e=this.H(a,"card-delegate-show")&&this.H(b,"card-action");this.ab(b,"card-action",a);this.g=a;U(c);N(u(function(){e||(bl(c),S("yt-uix-card-show",b,a,c));rm(c);G(c,d);S("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function pm(a,b,c){var d=c||b,e=V(a,"card");c=sm(a,d);var f=D(V(a,"card")+gk(d));if(f)return a=E(V(a,"card-body"),f),be(a,c)||(Ud(c),a.appendChild(c)),f;f=document.createElement("div");f.id=V(a,"card")+gk(d);f.className=e;(d=a.H(d,"card-class"))&&Jf(f,d.split(/\s+/));d=document.createElement("div");d.className=V(a,"card-border");b=a.H(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var h=document.createElement("div");
h.className=V(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Ud(c);h.appendChild(c);d.appendChild(a);d.appendChild(h);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function qm(a,b,c){var d=a.H(b,"orientation")||"horizontal",e=E(V(a,"anchor"),b)||b,f=a.H(b,"position"),h=!!a.H(b,"force-position"),k=a.H(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==f;if(n&&l){var y=13;var I=8}else n&&!l?(y=12,I=9):!n&&l?(y=9,I=12):(y=8,I=13);var ca=Di(document.body);f=Di(b);ca!=f&&(y^=4);if(d){f=b.offsetHeight/2-12;var oa=new zd(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,oa=new zd(b.offsetWidth+6,-12);var Ua=Ai(c);
f=Math.min(f,(d?Ua.height:Ua.width)-24-6);6>f&&(f=6,d?oa.y+=12-b.offsetHeight/2:oa.x+=12-b.offsetWidth/2);Ua=null;h||(Ua=10);b=V(a,"card-flip");a=V(a,"card-reverse");Lf(c,b,n);Lf(c,a,l);Ua=Ni(e,y,c,I,oa,null,Ua);!h&&Ua&&(Ua&48&&(n=!n,y^=4,I^=4),Ua&192&&(l=!l,y^=1,I^=1),Lf(c,b,n),Lf(c,a,l),Ni(e,y,c,I,oa));k&&(e=parseInt(c.style.top,10),h=Ld(document).y,oi(c,"position","fixed"),oi(c,"top",e-h+"px"));ca&&(c.style.right="",e=Ci(c),e.left=e.left||parseInt(c.style.left,10),h=Jd(window),c.style.left="",
c.style.right=h.width-e.left-e.width+"px");e=E("yt-uix-card-body-arrow",c);h=E("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!ca&&n||ca&&!n?"left":"right";e.setAttribute("style","");h.setAttribute("style","");e.style[d]=f+"px";h.style[d]=f+"px";l=E("yt-uix-card-arrow",c);n=E("yt-uix-card-arrow-background",c);l&&n&&(c="right"==d?Ai(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")}
g.hide=function(a){if(a=this.ea(a)){var b=D(V(this,"card")+gk(a));b&&(H(a,V(this,"active")),H(b,V(this,"card-visible")),U(b),this.g=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Ud(b.cardMask),b.cardMask=null))}};
function om(a){a.g&&a.hide(a.g)}
g.ed=function(a,b){var c=this.ea(a);if(c){if(b){var d=sm(this,c);if(!d)return;b instanceof pd?d.innerHTML=rd(b):ce(d,b)}F(c,V(this,"active"))&&(c=pm(this,a,c),qm(this,a,c),bl(c),rm(c))}};
g.isActive=function(a){return(a=this.ea(a))?F(a,V(this,"active")):!1};
function sm(a,b){var c=b.cardContentNode;if(!c){var d=V(a,"content"),e=V(a,"card-content");(c=(c=a.H(b,"card-id"))?D(c):E(d,b))||(c=document.createElement("div"));var f=c;H(f,d);G(f,e);b.cardContentNode=c}return c}
function rm(a){var b=a.cardMask;b||(b=document.createElement("IFRAME"),b.src='javascript:""',Jf(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function tm(){vl.call(this,"kbd-nav")}
var um;z(tm,vl);Aa(tm);g=tm.prototype;g.register=function(){xl(this,"keydown",this.tc);wl(this,"yt-uix-kbd-nav-move-in",this.Hc);wl(this,"yt-uix-kbd-nav-move-in-to",this.ee);wl(this,"yt-uix-kbd-move-next",this.Ic);wl(this,"yt-uix-kbd-nav-move-to",this.rb)};
g.unregister=function(){yl(this,"keydown",this.tc);vk(um)};
g.tc=function(a,b,c){var d=c.keyCode;if(a=oe(a,V(this)))switch(d){case 13:case 32:this.Hc(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Pf(a,"kbdNavMoveOut");!c;){c=oe(a.parentElement,V(this));if(!c)break a;c=Pf(c,"kbdNavMoveOut")}c=D(c);this.rb(c);S("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&F(a,V(this,"list")))switch(d){case 40:this.Ic(b,a);break;case 38:d=document.activeElement==a,a=vm(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),wm(this,a[b]))}c.preventDefault()}};
g.Hc=function(a){var b=Pf(a,"kbdNavMoveIn");b=D(b);xm(this,a,b);this.rb(b)};
g.ee=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}xm(this,d,a);this.rb(a)};
g.rb=function(a){if(a)if(he(a))a.focus();else{var b=de(a,function(a){return Zd(a)?he(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function xm(a,b,c){if(b&&c)if(G(c,V(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Of&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
g.Ic=function(a,b){var c=document.activeElement==b,d=vm(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),wm(this,d[c]))};
function wm(a,b){if(b){var c=me(b,"LI");c&&(G(c,V(a,"highlight")),um=T(b,"blur",u(function(a){H(a,V(this,"highlight"));vk(um)},a,c)))}}
function vm(a){if("UL"!=a.tagName.toUpperCase())return[];a=db(Wd(a),function(a){return"LI"==a.tagName.toUpperCase()});
return db(eb(a,function(a){return $k(a)?de(a,function(a){return Zd(a)?he(a):!1}):!1}),function(a){return!!a})}
;function ym(){vl.call(this,"menu");this.f=this.b=null;this.g={};this.j={};this.h=null}
z(ym,vl);Aa(ym);function zm(a){var b=ym.getInstance();if(F(a,V(b)))return a;var c=b.ea(a);return c?c:oe(a,V(b,"content"))==b.b?b.f:null}
g=ym.prototype;g.register=function(){xl(this,"click",this.sc);xl(this,"mouseenter",this.Id);wl(this,"page-scroll",this.lf);wl(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.ea(a);Am(this,a)});
this.h=new K};
g.unregister=function(){yl(this,"click",this.sc);this.f=this.b=null;vk(yb(dc(this.g)));this.g={};$b(this.j,function(a){Ud(a)},this);
this.j={};re(this.h);this.h=null;ym.A.unregister.call(this)};
g.sc=function(a,b,c){a&&(b=Bm(this,a),!b.disabled&&jk(c.target,b)&&Cm(this,a))};
g.Id=function(a,b,c){a&&F(a,V(this,"hover"))&&jk(c.target,Bm(this,a))&&Cm(this,a,!0)};
g.lf=function(){this.b&&this.f&&Dm(this,this.f,this.b)};
function Dm(a,b,c){var d=Em(a,b);if(d){var e=Ai(c);if(e instanceof Bd){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=zi(e,!0);d.style.height=zi(f,!0)}c==a.b&&(e=9,f=8,F(b,V(a,"reversed"))&&(e^=1,f^=1),F(b,V(a,"flipped"))&&(e^=4,f^=4),a=new zd(0,1),d&&Ni(b,e,d,f,a,null,197),Ni(b,e,c,f,a,null,197))}
function Cm(a,b,c){Fm(a,b)&&!c?Am(a,b):(Gm(a,b),!a.b||jk(b,a.b)?a.od(b):Pi(a.h,u(a.od,a,b)))}
g.od=function(a){if(a){var b=Hm(this,a);if(b){Kj("yt-uix-menu-before-show",a,b);this.b?jk(a,this.b)||Am(this,this.f):(this.f=a,this.b=b,F(a,V(this,"sibling-content"))||(Ud(b),document.body.appendChild(b)),b.style.minWidth=Bm(this,a).offsetWidth-2+"px");var c=Em(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);H(b,V(this,"content-hidden"));Dm(this,a,b);Jf(Bm(this,a),[V(this,"trigger-selected"),"yt-uix-button-toggled"]);S("yt-uix-menu-show",a);Im(b);Jm(this,a);S("yt-uix-kbd-nav-move-in-to",
b);var d=u(this.mf,this,a),e=u(this.Yd,this,a);c=Ga(a).toString();this.g[c]=[T(b,"click",e),T(document,"click",d)];F(a,V(this,"indicate-selected"))&&(d=u(this.Zd,this,a),this.g[c].push(T(b,"click",d)));F(a,V(this,"hover"))&&(a=u(this.Jd,this,a),this.g[c].push(T(document,"mousemove",a)))}}};
g.Jd=function(a,b){var c=wk(b);c&&(jk(c,Bm(this,a))||Km(this,c)||Lm(this,a))};
g.mf=function(a,b){var c=wk(b);if(c){if(Km(this,c)){var d=oe(c,V(this,"content")),e=me(c,"LI");e&&d&&be(d,e)&&Kj("yt-uix-menu-item-clicked",c);c=oe(c,V(this,"close-on-select"));if(!c)return;d=zm(c)}Am(this,d||a)}};
function Gm(a,b){if(b){var c=oe(b,V(a,"content"));c&&A(Fd(V(a),c),function(a){!jk(a,b)&&Fm(this,a)&&Lm(this,a)},a)}}
function Am(a,b){if(b){var c=[];c.push(b);var d=Hm(a,b);d&&(d=Fd(V(a),d),d=rb(d),c=c.concat(d),A(c,function(a){Fm(this,a)&&Lm(this,a)},a))}}
function Lm(a,b){if(b){var c=Hm(a,b);Kf(Bm(a,b),[V(a,"trigger-selected"),"yt-uix-button-toggled"]);G(c,V(a,"content-hidden"));var d=Hm(a,b);d&&Hd(d,{"aria-expanded":"false"});(d=Em(a,b))&&d.parentNode&&Ud(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.h&&a.h.Z("ROOT_MENU_REMOVED"));S("yt-uix-menu-hide",b);c=Ga(b).toString();vk(a.g[c]);delete a.g[c]}}
g.Yd=function(a,b){var c=wk(b);c&&Mm(this,a,c)};
g.Zd=function(a,b){var c=wk(b);if(c){var d=Bm(this,a);if(d&&(c=me(c,"LI")))if(c=ke(c).trim(),d.hasChildNodes()){var e=bm.getInstance();(d=E(V(e,"content"),d))&&ce(d,c)}else ce(d,c)}};
function Jm(a,b){var c=Hm(a,b);if(c){A(c.children,function(a){"LI"==a.tagName&&Hd(a,{role:"menuitem"})});
Hd(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ga(c),c.id=d);(c=Bm(a,b))&&Hd(c,{"aria-controls":d})}}
function Mm(a,b,c){var d=Hm(a,b);d&&F(b,V(a,"checked"))&&(a=me(c,"LI"))&&(a=E("yt-ui-menu-item-checked-hid",a))&&(A(Fd("yt-ui-menu-item-checked",d),function(a){Mf(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Mf(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Fm(a,b){var c=Hm(a,b);return c?!F(c,V(a,"content-hidden")):!1}
function Im(a){A(Gd(document,"UL",null,a),function(a){a.tabIndex=0;var b=tm.getInstance();Jf(a,[V(b),V(b,"list")])})}
function Hm(a,b){var c=M(b,"menu-content-id");return c&&(c=D(c))?(Jf(c,[V(a,"content"),V(a,"content-external")]),c):b==a.f?a.b:E(V(a,"content"),b)}
function Em(a,b){var c=Ga(b).toString(),d=a.j[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[V(a,"mask")];A(If(b),function(a){e.push(a+"-mask")});
Jf(d,e);a.j[c]=d}return d||null}
function Bm(a,b){return E(V(a,"trigger"),b)}
function Km(a,b){return jk(b,a.b)||jk(b,a.f)}
;function Nm(){nm.call(this,"clickcard");this.b={};this.f={}}
z(Nm,nm);Aa(Nm);g=Nm.prototype;g.register=function(){Nm.A.register.call(this);xl(this,"click",this.jc,"target");xl(this,"click",this.ic,"close")};
g.unregister=function(){Nm.A.unregister.call(this);yl(this,"click",this.jc,"target");yl(this,"click",this.ic,"close");for(var a in this.b)vk(this.b[a]);this.b={};for(a in this.f)vk(this.f[a]);this.f={}};
g.jc=function(a,b,c){c.preventDefault();b=me(c.target,"button");if(!b||!b.disabled){if(b=this.H(a,"card-target"))a=document,a=q(b)?a.getElementById(b):b;b=this.ea(a);this.H(b,"disabled")||(F(b,V(this,"active"))?(this.hide(a),H(b,V(this,"active"))):(this.show(a),G(b,V(this,"active"))))}};
g.show=function(a){Nm.A.show.call(this,a);var b=this.ea(a),c=Ga(a).toString();if(!M(b,"click-outside-persists")){if(this.b[c])return;b=T(document,"click",u(this.kc,this,a));var d=T(window,"blur",u(this.kc,this,a));this.b[c]=[b,d]}a=T(window,"resize",u(this.ed,this,a,void 0));this.f[c]=a};
g.hide=function(a){Nm.A.hide.call(this,a);a=Ga(a).toString();var b=this.b[a];b&&(vk(b),this.b[a]=null);if(b=this.f[a])vk(b),delete this.f[a]};
g.kc=function(a,b){var c="yt-uix"+(this.i?"-"+this.i:"")+"-card",d=null;b.target&&(d=oe(b.target,c)||oe(zm(b.target),c));(d=d||oe(document.activeElement,c)||oe(zm(document.activeElement),c))||this.hide(a)};
g.ic=function(a){(a=oe(a,V(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Om(){nm.call(this,"hovercard")}
z(Om,nm);Aa(Om);g=Om.prototype;g.register=function(){xl(this,"mouseenter",this.Cc,"target");xl(this,"mouseleave",this.Ec,"target");xl(this,"mouseenter",this.Dc,"card");xl(this,"mouseleave",this.Fc,"card")};
g.unregister=function(){yl(this,"mouseenter",this.Cc,"target");yl(this,"mouseleave",this.Ec,"target");yl(this,"mouseenter",this.Dc,"card");yl(this,"mouseleave",this.Fc,"card")};
g.Cc=function(a){if(Pm!=a){Pm&&(this.hide(Pm),Pm=null);var b=u(this.show,this,a),c=parseInt(this.H(a,"delay-show"),10);b=N(b,-1<c?c:200);xj(a,"card-timer",b.toString());Pm=a;a.alt&&(xj(a,"card-alt",a.alt),a.alt="");a.title&&(xj(a,"card-title",a.title),a.title="")}};
g.Ec=function(a){var b=parseInt(this.H(a,"card-timer"),10);O(b);this.ea(a).isCardHidable=!0;b=parseInt(this.H(a,"delay-hide"),10);b=-1<b?b:200;N(u(this.Pd,this,a),b);if(b=this.H(a,"card-alt"))a.alt=b;if(b=this.H(a,"card-title"))a.title=b};
g.Pd=function(a){this.ea(a).isCardHidable&&(this.hide(a),Pm=null)};
g.Dc=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
g.Fc=function(a){a&&this.hide(a.cardTargetNode)};
var Pm=null;function Qm(a,b,c,d,e,f){this.b=a;this.C=null;this.g=E("yt-dialog-fg",this.b)||this.b;if(a=E("yt-dialog-title",this.g)){var h="yt-dialog-title-"+Ga(this.g);a.setAttribute("id",h);this.g.setAttribute("aria-labelledby",h)}this.g.setAttribute("tabindex","-1");this.l=E("yt-dialog-focus-trap",this.b);this.F=!1;this.h=new K;this.G=[];this.G.push(xk(this.b,"click",u(this.ne,this),"yt-dialog-dismiss"));this.G.push(T(this.l,"focus",u(this.xd,this),!0));Rm(this);this.I=b;this.M=c;this.K=d;this.w=e;this.N=f;
this.j=this.i=null}
var Sm={LOADING:"loading",qf:"content",Af:"working"};function Rm(a){a=E("yt-dialog-fg-content",a.b);var b=[];$b(Sm,function(a){b.push("yt-dialog-show-"+a)});
Kf(a,b);G(a,"yt-dialog-show-content")}
g=Qm.prototype;
g.show=function(){if(!this.J()){this.C=document.activeElement;if(!this.K){this.f||(this.f=D("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=Jd(a).height,Kd(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);
c=b>a?b>e?b:e:b<e?b:e}else c=0}this.f.style.height=c+"px";bl(this.f)}this.uc();c=Tm(this);Um(c);this.i=T(document,"keydown",u(this.Xd,this));this.Yb(this.b);this.M&&(this.j=T(document,"click",u(this.Ne,this)));bl(this.b);this.g.setAttribute("tabindex","0");Vm(this);this.w||G(document.body,"yt-dialog-active");cm(bm.getInstance());om(Nm.getInstance());om(Om.getInstance());S("yt-ui-dialog-show-complete",this)}};
function Wm(){return gb(Fd("yt-dialog"),function(a){return $k(a)})}
g.uc=function(){if(!this.N){var a=this.b;Lf(document.body,"hide-players",!0);a&&Lf(a,"preserve-players",!0)}};
function Tm(a){var b=Gd(document,"iframe",null,a.b);A(b,function(a){var b=M(a,"onload");b&&(b=r(b))&&T(a,"load",b);if(b=M(a,"src"))a.src=b},a);
return rb(b)}
function Um(a){A(document.getElementsByTagName("iframe"),function(b){-1==bb(a,b)&&G(b,"iframe-hid")})}
function Xm(){A(Fd("iframe-hid"),function(a){H(a,"iframe-hid")})}
g.ne=function(a){a=a.currentTarget;a.disabled||(a=M(a,"action")||"",this.dismiss(a))};
g.dismiss=function(a){if(!this.J()){this.h.Z("pre-all");this.h.Z("pre-"+a);U(this.b);om(Nm.getInstance());om(Om.getInstance());this.g.setAttribute("tabindex","-1");Wm()||(U(this.f),this.w||H(document.body,"yt-dialog-active"),ok(),Xm());this.i&&(vk(this.i),this.i=null);this.j&&(vk(this.j),this.j=null);var b=this.b;if(b){var c=M(b,"player-ready-pubsub-key");c&&(Jj(c),zj(b,"player-ready-pubsub-key"))}this.h.Z("post-all");S("yt-ui-dialog-hide-complete",this);"cancel"==a&&S("yt-ui-dialog-cancelled",this);
this.h&&this.h.Z("post-"+a);this.C&&this.C.focus()}};
g.setTitle=function(a){ce(E("yt-dialog-title",this.b),a)};
g.Xd=function(a){N(u(function(){this.I||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&F(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
g.Ne=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
g.Yb=function(a){var b=P("player-added",this.uc,this);xj(a,"player-ready-pubsub-key",b)};
g.J=function(){return this.F};
g.dispose=function(){$k(this.b)&&this.dismiss("dispose");vk(this.G);this.G.length=0;N(u(function(){this.C=null},this),0);
this.l=this.g=null;this.h.dispose();this.h=null;this.F=!0};
g.xd=function(a){a.stopPropagation();Vm(this)};
function Vm(a){N(u(function(){this.g&&this.g.focus()},a),0)}
x("yt.ui.Dialog",Qm);var Ym={"consent.google.com":!0,"consent.youtube.com":!0,"consent-daily-0.sandbox.youtube.com":!0,"consent-daily-1.sandbox.youtube.com":!0,"consent-daily-2.sandbox.youtube.com":!0,"consent-daily-3.sandbox.youtube.com":!0,"consent-daily-4.sandbox.youtube.com":!0,"consent-daily-5.sandbox.youtube.com":!0,"consent-daily-6.sandbox.youtube.com":!0,"consent-autopush.sandbox.youtube.com":!0,"daily-0.consent.corp.youtube.com":!0,"daily-1.consent.corp.youtube.com":!0,"daily-2.consent.corp.youtube.com":!0,"daily-3.consent.corp.youtube.com":!0,
"daily-4.consent.corp.youtube.com":!0,"daily-5.consent.corp.youtube.com":!0,"daily-6.consent.corp.youtube.com":!0,"autopush.consent.corp.youtube.com":!0,"dev.consent.corp.youtube.com":!0,"consent-daily-0.sandbox.google.com":!0,"consent-daily-1.sandbox.google.com":!0,"consent-daily-2.sandbox.google.com":!0,"consent-daily-3.sandbox.google.com":!0,"consent-daily-4.sandbox.google.com":!0,"consent-daily-5.sandbox.google.com":!0,"consent-daily-6.sandbox.google.com":!0,"consent-autopush.sandbox.google.com":!0,
"daily-0.consent.corp.google.com":!0,"daily-1.consent.corp.google.com":!0,"daily-2.consent.corp.google.com":!0,"daily-3.consent.corp.google.com":!0,"daily-4.consent.corp.google.com":!0,"daily-5.consent.corp.google.com":!0,"daily-6.consent.corp.google.com":!0,"autopush.consent.corp.google.com":!0,"dev.consent.corp.google.com":!0};function Zm(a){a=a||{};this.url=a.url||"";this.args=a.args||kc($m);this.assets=a.assets||{};this.attrs=a.attrs||kc(an);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var $m={enablejsapi:1},an={};Zm.prototype.clone=function(){var a=new Zm,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ba(c)?a[b]=kc(c):a[b]=c}return a};function bn(){pe.call(this);this.b=[]}
ia(bn,pe);bn.prototype.B=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.Ff)}pe.prototype.B.call(this)};var cn={},dn=0;var en=r("ytLoggingLatencyUsageStats_")||{};x("ytLoggingLatencyUsageStats_",en);var fn=0;
function gn(a){en[a]=en[a]||{count:0};var b=en[a];b.count++;b.time=uj();fn||(fn=hl(hn,0,5E3));if(10<b.count){if(11==b.count){b=Error("CSI data exceeded logging limit with key: "+a);var c=0==a.indexOf("info")?"WARNING":"ERROR";var d=d||{};d.name=L("INNERTUBE_CONTEXT_CLIENT_NAME",1);d.version=L("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);a=b;b=void 0===c?"ERROR":c;b=void 0===b?"ERROR":b;c=window&&window.yterr||!1;if(a&&c&&!(5<=dn)){c=a.stacktrace;var e=a.columnNumber;a.hasOwnProperty("params")&&(d.params=
JSON.stringify(a.params));var f=r("window.location.href");if(q(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var h=!1;try{var k=a.lineNumber||a.line||"Not available"}catch(I){k="Not available",h=!0}try{var l=a.fileName||a.filename||a.sourceURL||m.$googDebugFname||f}catch(I){l="Not available",h=!0}a=!h&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:k,fileName:l,
stack:a.stack||"Not available"}}c=c||a.stack;k=a.lineNumber.toString();isNaN(k)||isNaN(e)||(k=k+":"+e);if(!(cn[a.message]||0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js"))){l=c;k={qa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:k,level:b,"client.name":d.name},S:{url:L("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};d.version&&(k["client.version"]=d.version);l&&(k.S.stack=l);for(var n in d)k.S["client."+n]=d[n];if(d=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",
void 0))for(var y in d)k.S[y]=d[y];Ok(L("ECATCHER_REPORT_HOST","")+"/error_204",k);cn[a.message]=!0;dn++}}}return!0}return!1}
function hn(){var a=uj(),b;for(b in en)6E4<a-en[b].time&&delete en[b];fn=0}
;var jn=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function kn(){var a=L("TIMING_TICK_EXPIRATION");a||(a={},wj("TIMING_TICK_EXPIRATION",a));return a}
function ln(){var a=kn(),b;for(b in a)il(a[b]);wj("TIMING_TICK_EXPIRATION",{})}
;function mn(a,b){dl.call(this,1,arguments)}
ia(mn,dl);function nn(a,b){dl.call(this,1,arguments)}
ia(nn,dl);var on=new el("aft-recorded",mn),pn=new el("timing-sent",nn);var qn={vc:!0},rn={},sn=(rn.ad_allowed="adTypesAllowed",rn.ad_at="adType",rn.ad_cpn="adClientPlaybackNonce",rn.ad_docid="adVideoId",rn.yt_ad_an="adNetworks",rn.p="httpProtocol",rn.t="transportProtocol",rn.cpn="clientPlaybackNonce",rn.csn="clientScreenNonce",rn.docid="videoId",rn.is_nav="isNavigation",rn.yt_lt="loadType",rn.yt_ad="isMonetized",rn.nr="webInfo.navigationReason",rn.ncnp="webInfo.nonPreloadedNodeCount",rn.paused="playerInfo.isPausedOnLoad",rn.fmt="playerInfo.itag",rn.yt_pl="watchInfo.isPlaylist",
rn.yt_ad_pr="prerollAllowed",rn.yt_red="isRedSubscriber",rn.st="serverTimeMs",rn.vph="viewportHeight",rn.vpw="viewportWidth",rn.yt_vis="isVisible",rn),tn="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),un="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),
vn=!1;function wn(){var a=xn().info.yt_lt="hot_bg";yn().info_yt_lt=a;if(zn())if("yt_lt"in sn){var b=sn.yt_lt;kb(un,b)&&(a=!!a);if(zn()){var c={};b=b.split(".");for(var d=c,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=a;a=An();b=Object.keys(c).join("");gn("info_"+b+"_"+a)||(c.clientActionNonce=a,Nl("latencyActionInfo",c,void 0))}}else kb(tn,"yt_lt")||Cj(Error("Unknown label yt_lt logged with GEL CSI."))}
function Bn(){var a=Cn();if(a.aft)return a.aft;for(var b=L("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
var Dn=u(jn.clearResourceTimings||jn.webkitClearResourceTimings||jn.mozClearResourceTimings||jn.msClearResourceTimings||jn.oClearResourceTimings||t,jn);function An(){var a=xn().nonce;a||(a=Zl(),xn().nonce=a);return a}
function Cn(){return xn().tick}
function yn(){var a=xn();"gel"in a||(a.gel={});return a.gel}
function xn(){return r("ytcsi.data_")||En()}
function En(){var a={tick:{},info:{}};x("ytcsi.data_",a);return a}
function Fn(a,b){x("yt.timing."+(b||"")+"pingSent_",a)}
function Gn(){var a=Cn(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==xn().info.yt_pvis}
function zn(){return!!zl("csi_on_gel")}
function Hn(){ln();if(!zn()){var a=Cn(),b=xn().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&Ca(a[f])){var d=f.slice(1);if(d in qn){var e=eb(a[f],function(a){return Math.round(a-c)});
b["all_"+d]=e.join()}delete a[f]}var f=!!b.ap;if(d=r("ytglobal.timingReportbuilder_")){if(a=d(a,b,void 0))In(a,f),En(),Dn(),Fn(!1,void 0),L("TIMING_ACTION")&&wj("PREVIOUS_ACTION",L("TIMING_ACTION")),wj("TIMING_ACTION","")}else{var h=L("CSI_SERVICE_NAME","youtube");d={v:2,s:h,action:L("TIMING_ACTION",void 0)};e=wn.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+r("ytplayer.config.assets.js");(k=jn.getEntriesByName?jn.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-
k.responseEnd):delete b.h5jse}a.aft=Bn();Gn()&&"youtube"==h&&(wn(),h=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-h));for(var l in b)"_"!=l.charAt(0)&&(d[l]=b[l]);a.ps=uj();b={};l=[];for(var n in a)"_"!=n.charAt(0)&&(h=Math.round(a[n]-c),b[n]=h,l.push(n+"."+h));d.rt=l.join(",");(a=r("ytdebug.logTiming"))&&a(d,b);In(d,f,void 0);nl(pn,new nn(b.aft+(e||0),void 0))}}}
function In(a,b,c){if(zl("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],x("yt.timing.csiData",d));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?";zl("redirect_csi_204_to_qoe")&&(a="/api/stats/qoe?",d+="&redirect_csi_204_to_qoe=true");a+=d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||Wk(a,void 0,void 0,void 0,
f)}catch(h){Wk(a,void 0,void 0,void 0,f)}}else Wk(a);Fn(!0,c)}
function Jn(a,b){if(!b&&"_"!=a[0]){var c=a;jn.mark&&(0==c.lastIndexOf("mark_",0)||(c="mark_"+c),jn.mark(c))}c=Cn();var d=b||uj();c[a]&&(c["_"+a]=c["_"+a]||[c[a]],c["_"+a].push(d));c[a]=d;c=kn();if(d=c[a])il(d),c[a]=0;(yn()["tick_"+a]=b)||uj();zn()?(c=An(),"_start"==a?gn("baseline_"+c)||Nl("latencyActionBaselined",{clientActionNonce:c},b):gn("tick_"+a+"_"+c)||Nl("latencyActionTicked",{tickName:a,clientActionNonce:c},b),c=!0):c=!1;if(c=!c)c=!r("yt.timing.pingSent_");if(c&&(d=L("TIMING_ACTION",void 0),
c=Cn(),r("ytglobal.timingready_")&&d&&c._start&&(d=Bn()))){zl("tighter_critical_section")&&!vn&&(nl(on,new mn(Math.round(d-c._start),void 0)),vn=!0);d=!0;var e=L("TIMING_WAIT",[]);if(e.length)for(var f=0,h=e.length;f<h;++f)if(!(e[f]in c)){d=!1;break}d&&Hn()}}
;function Kn(a,b){pe.call(this);this.j=this.X=a;this.P=b;this.w=!1;this.f={};this.R=this.I=null;this.l=new K;qe(this,v(re,this.l));this.h={};this.M=this.da=this.g=this.xa=this.b=null;this.K=!1;this.i=this.F=null;this.aa={};this.Ya=["onReady"];this.wa=null;this.Na=NaN;this.N={};Ln(this);this.nb("WATCH_LATER_VIDEO_ADDED",this.we.bind(this));this.nb("WATCH_LATER_VIDEO_REMOVED",this.xe.bind(this));this.nb("onAdAnnounce",this.sd.bind(this));this.Hb=new bn(this);qe(this,v(re,this.Hb))}
ia(Kn,pe);g=Kn.prototype;
g.de=function(a){if(!this.J()){a instanceof Zm||(a=new Zm(a));this.xa=a;this.b=a.clone();this.g=this.b.attrs.id||this.g;"video-player"==this.g&&(this.g=this.P,this.b.attrs.id=this.P);this.j.id==this.g&&(this.g+="-player",this.b.attrs.id=this.g);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.P;this.da||(this.da=Mn(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.j.style.width=zi(Number(a)||a,!0);if(a=this.b.attrs.height)this.j.style.height=
zi(Number(a)||a,!0);Nn(this);this.w&&On(this)}};
g.yd=function(){return this.xa};
function On(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function Pn(a){var b=!0,c=Qn(a);c&&a.b&&(a=a.b,b=M(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
function Nn(a){if(!a.J()&&!a.K){var b=Pn(a);if(b&&"html5"==(Qn(a)?"html5":null))a.M="html5",a.w||Rn(a);else if(Sn(a),a.M="html5",b&&a.i)a.X.appendChild(a.i),Rn(a);else{a.b.loaded=!0;var c=!1;a.F=function(){c=!0;var b=a.b.clone();r("yt.player.Application.create")(a.X,b);Rn(a)};
a.K=!0;b?a.F():(Pj(a.b.assets.js,a.F),Wj(a.b.assets.css),Tn(a)&&!c&&x("yt.player.Application.create",null))}}}
function Qn(a){var b=D(a.g);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.g));return b}
function Rn(a){if(!a.J()){var b=Qn(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.K=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||Un(a)):a.Na=N(function(){Rn(a)},50)}}
function Un(a){Ln(a);a.w=!0;var b=Qn(a);b.addEventListener&&(a.I=Vn(a,b,"addEventListener"));b.removeEventListener&&(a.R=Vn(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.f[e]||(a.f[e]=Vn(a,b,e))}for(var f in a.h)a.I(f,a.h[f]);On(a);a.da&&a.da(a.f);a.l.Z("onReady",a.f)}
function Vn(a,b,c){var d=b[c];return function(){try{return a.wa=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.wa=e,Cj(e,"WARNING",void 0,void 0,void 0))}}}
function Ln(a){a.w=!1;if(a.R)for(var b in a.h)a.R(b,a.h[b]);for(var c in a.N)O(parseInt(c,10));a.N={};a.I=null;a.R=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=a.nb.bind(a);a.f.removeEventListener=a.Se.bind(a);a.f.destroy=a.dispose.bind(a);a.f.getLastError=a.zd.bind(a);a.f.getPlayerType=a.Ad.bind(a);a.f.getCurrentVideoConfig=a.yd.bind(a);a.f.loadNewVideoConfig=a.de.bind(a);a.f.isReady=a.ce.bind(a)}
g.ce=function(){return this.w};
g.nb=function(a,b){var c=this,d=Mn(this,b);if(d){if(!kb(this.Ya,a)&&!this.h[a]){var e=Wn(this,a);this.I&&this.I(a,e)}this.l.subscribe(a,d);"onReady"==a&&this.w&&N(function(){d(c.f)},0)}};
g.Se=function(a,b){if(!this.J()){var c=Mn(this,b);c&&Qi(this.l,a,c)}};
function Mn(a,b){var c=b;if("string"==typeof b){if(a.aa[b])return a.aa[b];c=function(){var a=r(b);a&&a.apply(m,arguments)};
a.aa[b]=c}return c?c:null}
function Wn(a,b){var c="ytPlayer"+b+a.P;a.h[b]=c;m[c]=function(c){var d=a.b&&a.b.args&&a.b.args.fflags;if(d&&0>d.indexOf("use_html5_player_event_timeout=true"))a.l.Z(b,c);else{var f=N(function(){if(!a.J()){a.l.Z(b,c);var d=a.N,e=String(f);e in d&&delete d[e]}},0);
ic(a.N,String(f))}};
return c}
g.sd=function(a){S("a11y-announce",a)};
g.we=function(a){S("WATCH_LATER_VIDEO_ADDED",a)};
g.xe=function(a){S("WATCH_LATER_VIDEO_REMOVED",a)};
g.Ad=function(){return this.M||(Qn(this)?"html5":null)};
g.zd=function(){return this.wa};
function Sn(a){Jn("dcp");a.cancel();Ln(a);a.M=null;a.b&&(a.b.loaded=!1);var b=Qn(a);b&&(Pn(a)||!Tn(a)?a.i=b:(b&&b.destroy&&b.destroy(),a.i=null));Sd(a.X)}
g.cancel=function(){this.F&&Uj(this.b.assets.js,this.F);O(this.Na);this.K=!1};
g.B=function(){Sn(this);if(this.i&&this.b&&this.i.destroy)try{this.i.destroy()}catch(b){Cj(b)}this.aa=null;for(var a in this.h)m[this.h[a]]=null;this.xa=this.b=this.f=null;delete this.X;delete this.j;pe.prototype.B.call(this)};
function Tn(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var Xn={},Yn="player_uid_"+(1E9*Math.random()>>>0);function Zn(){var a=document.getElementById("player-api");if(!a)return null;var b=Yn+"_"+Ga(a),c=Xn[b];c||(c=new Kn(a,b),Xn[b]=c);return c.f}
;function $n(){Lf(D("page-container"),"remote-connected",!!W)}
;var ao=!1;function bo(a){Lf(D("player-mole-container"),"watch-mole",a);a=D("player-mole-container");var b=D("player");ao=!b||F(b,"off-screen")||!a||F(a,"watch-mole");(a=Zn())&&a.isReady()&&a.setMinimized(ao)}
;new tf(co,1E3);function co(){Jn("vptl",0);Jn("vpl",0)}
;var R={},eo=null;R.Sb=!1;R.init=function(){var a=D("yt-consent");xk(a,"click",R.Nd,"consent-close");xk(a,"click",R.Od,"consent-review");T(window,"message",R.Re);L("CONSENT_SHOW_DIALOG")&&(a=D("yt-consent-dialog-content"),R.Yb(a),R.cd(),Yk(dh({a:"consent",consent:"forced"})),xk(a,"click",R.Fd,"yt-dialog-dismiss"))};
R.Nd=function(){H(document.body,"sitewide-consent-visible");Rl("HideTicker","true",86400,"../../default.htm");Yk(dh({a:"consent",consent:"later"}))};
R.Od=function(){R.cd();Yk(dh({a:"consent",consent:"review"}))};
R.Fd=function(a){a=a.currentTarget;a.disabled||(a=M(a,"action")||"",Qm.prototype.dismiss(a),Yk(dh({a:"consent",consent:"dismiss"})),R.kb())};
R.cd=function(){var a=D("yt-consent-dialog");if(a){var b=!!L("CONSENT_SHOW_DIALOG");eo=new Qm(a,b,!b);R.Rb();R.We();eo.show()}};
R.Rb=function(){try{var a=Zn();a&&(a.isReady()?(1==a.getPlayerState(a.getPresentingPlayerType())&&(R.Sb=!0),a.pauseVideo()):a.addEventListener("onReady",R.Rb))}catch(b){Cj(b)}};
R.kb=function(){try{var a=Zn();a&&a.isReady()&&R.Sb&&(ok(),a.playVideo(),R.Sb=!1)}catch(b){Cj(b)}};
R.Yb=function(a){var b=P("player-added",R.Rb,R);xj(a,"player-ready-pubsub-key",b)};
R.We=function(){Ij()};
R.Re=function(a){var b=a&&a.data,c=a&&a.origin;a=a&&a.source;var d=!1,e=Zg(c);if(Ym[e]&&Ym.hasOwnProperty(e)||String(zl("consent_url_override")||"")){switch(b){case "cb-user-closed":eo.dispose();R.Kc();R.kb();break;case "cb-ui-done-early":eo.dismiss("close");R.kb();d=!0;break;case "cb-ui-done":case "cb-already-consented":eo.dismiss("close");R.Kc();R.kb();d=!0;break;case "verify-origin":a.parent==window&&a.postMessage("verify-origin-reply",c)}d&&(H(document.body,"sitewide-consent-visible"),Yk(dh({a:"consent",
consent:"done"})))}};
R.Kc=function(){var a=D("yt-consent-iframe");var b=dd("about:blank");b=hd(b instanceof bd&&b.constructor===bd&&b.f===cd?b.b:"type_error:Const");a.src=gd(b)};function fo(a){pj.call(this,a);this.Ya=[];this.aa=[]}
z(fo,pj);fo.prototype.ta=function(){A(this.Ya,vk);Jj(this.aa);fo.A.ta.call(this)};function go(){fo.call(this);this.j=this.h=this.i=null;this.l="horizontal";this.w=null}
z(go,fo);go.prototype.Aa=function(){go.A.Aa.call(this);this.l=M(this.na(),"overflowable-list-orientation")||"horizontal";this.i=qj(this,"parent-list");this.w=qj(this,"overflow-container");this.h=qj(this,"overflow-list");this.j=qj(this,"overflowable-list-more-button")};
function ho(){var a=[];A(Fd("overflowable-list-root",io),function(b){var c=new go;sj(c,b);a.push(c)});
return a}
function jo(a,b){var c=ko(a),d=ko(b);return c<d?-1:c==d?0:1}
function lo(a,b){var c=rb(Fd("overflowable-list-item",b));return fb(c,function(a,b){return a+mo(this,b)},0,a)}
function mo(a,b){return"vertical"==a.l?Ai(b).height:Ai(b).width}
function no(a){var b=E("overflowable-list-item",a.na());return b?mo(a,b):0}
function ko(a){return lo(a,a.i)+lo(a,a.h)}
;function oo(a,b,c){this.f=a;this.b=null;(a=b||null)||(a=po(this.f));a=Cb("__%s__","("+a.join("|")+")");this.b=new RegExp(a,"g");this.g=c||{}}
var qo=/__([a-z]+(?:_[a-z]+)*)__/g;function ro(a,b){var c=so(D(a));return new oo(c,b,void 0)}
function so(a){a=a.innerHTML;a=a.replace(/^\s*(\x3c!--\s*)?/,"");return a=a.replace(/(\s*--\x3e)?\s*$/,"")}
function po(a){var b=[],c={};a.replace(qo,function(a,e){e in c||(c[e]=!0,b.push(e))});
return b}
function to(a,b,c){var d=u(function(a,d){c&&(d=c(d));return Gb(b[d]||this.g[d]||"")},a);
return a.f.replace(a.b,d)}
;var io,uo,vo,wo;var xo={xf:"content-snap-width-1",yf:"content-snap-width-2",zf:"content-snap-width-3"};function yo(){var a=[],b;for(b in xo)a.push(xo[b]);return a}
;function zo(){Ao=Gd(document,"html",void 0,void 0)[0];Bo=D("appbar-guide-button")}
function Co(a,b){var c=b||!1,d=F(Ao,"show-guide");Lf(Ao,"show-guide",a);Bo&&Bo.setAttribute("aria-expanded",a);a&&!F(document.documentElement,"no-focus-outline")&&c?(c=E("guide-item",D("guide-container")))&&c.focus():S("guide-hidden");if(a&&!d||!a&&d){d="";if(c=D("page"))d=c.className;d=dh({"module-id":"guide-main",expanded:!0,auto:!1,"page-class":d,notification:!1});Yk("a=guide-toggled"+(d?"&"+d:""),void 0)}(d=D("page"))&&Cf&&(c=d.style.width,d.style.width="99.99%",xc(d.offsetWidth),d.style.width=
c)}
function Do(){return F(Ao,"show-guide")}
function Eo(){return F(document.body,"guide-pinning-enabled")}
function Fo(){return Eo()&&F(Ao,"guide-pinned")}
var Ao=null,Bo=null;function Go(a){dl.call(this,1,arguments);this.b=a}
z(Go,dl);function Ho(a,b,c){dl.call(this,1,arguments);this.b=c}
z(Ho,dl);var Io=new el("subscription-subscribe-success",Ho),Jo=new el("subscription-unsubscribe-success",Go);var Ko;function Lo(){this.b=Mo}
function No(){function a(){var a=E("guide-likes-playlist-icon");if(a)return oe(a,"guide-notification-item")}
Ko=D("appbar-main-guide-notification-container");Oo(function(){return E("guide-item-container",D("behavior-id-guide-playlists-section"))});
Po("yt-uix-playlistlike-unliked","appbar-guide-notification-playlist-unlike");Qo("addto-menu-video-added","appbar-guide-notification-playlist-video-added",Ro,null,new Lo);Po("addto-menu-video-removed","appbar-guide-notification-playlist-video-removed");var b=v(D,"VLWL-guide-item");Qo("WATCH_LATER_VIDEO_ADDED","appbar-guide-notification-watch-later-video-added",b,1);Qo("WATCH_LATER_VIDEO_REMOVED","appbar-guide-notification-watch-later-video-removed",b,-1);Qo("yt-uix-videolike-liked","appbar-guide-notification-video-like",
a,1);Qo("yt-uix-videolike-unliked","appbar-guide-notification-video-unlike",a,-1);pl(Jo,So);pl(Io,To)}
function Mo(a){if(!a||D(a.id))return null;var b=["ID","URL","TITLE","NOTIFICATION_OVERLAY_MESSAGE"];a=to("RD"==a.playlistType?ro("appbar-guide-item-template-mix",b):ro("appbar-guide-item-template-playlist",b),{ID:"VL"+a.id,URL:a.url,TITLE:a.title,NOTIFICATION_OVERLAY_MESSAGE:a.title});return nk(a)}
function Ro(a){return D("VL"+a.id+"-guide-item")}
function Uo(a,b){var c=so(D(a));c=nk(c);if(b){var d=E("appbar-guide-notification-text-content",c);if(d){var e=document.createTextNode(String(" "+b));d&&e&&d.appendChild(e)}}return c}
function Qo(a,b,c,d,e){P(a,function(a){var f=c.apply(null,arguments);if(d){var k=E("guide-count-value",f);if(k){var l=k.innerHTML;""===l.trim()||isNaN(l)||ce(k,parseInt(l,10)+d)}}!f&&e&&(k=e.b(a),(l=E("guide-item-container",D("behavior-id-guide-playlists-section")))&&k&&Td(l,k,0));Vo(b,!!f,a?a.title:null)||((k=E("guide-item-update-notification",f))&&Ud(k),k=Uo(b),G(k,"guide-item-update-notification"),f.appendChild(k),N(v(G,f,"showing-update-notification"),0),N(v(H,f,"showing-update-notification"),
2E3))})}
function Oo(a){var b=Mo;P("yt-uix-playlistlike-liked",function(){var c=a(),d=b.apply(null,arguments);Vo("appbar-guide-notification-playlist-like",!!c)||(Td(c,d,0),S("guide-playlist-section-updated"))})}
function Po(a,b){var c=Ro;P(a,function(){var a=c.apply(null,arguments);Wo(a,b,"guide-playlist-section-updated")})}
function Wo(a,b,c){Vo(b,!!a)||(b=Uo(b),G(b,"guide-item-removal-notification"),a.appendChild(b),N(v(G,a,"removing-guide-item"),0),N(function(){Ud(a);S(c)},2E3))}
function Vo(a,b,c){if(b&&Do())return!1;Sd(Ko);Ko.appendChild(Uo(a,c));G(document.body,"show-guide-button-notification");N(v(H,document.body,"show-guide-button-notification"),2E3);return!0}
function To(a){if(D("guide-subscriptions-promo")){S("force-reload-subscriptions");var b=!0}else b=!1;b||(b=D("guide-channels"),a=a.b,a=to(ro("appbar-guide-item-template-channel",["ID","URL","TITLE","THUMBNAIL_URL","NOTIFICATION_OVERLAY_MESSAGE"]),{ID:a.external_id,URL:a.url,TITLE:a.title,THUMBNAIL_URL:a.thumbnail,NOTIFICATION_OVERLAY_MESSAGE:a.title}),a=nk(a),Vo("appbar-guide-notification-subscription",!!b)||(Td(b,a,0),S("guide-channel-section-updated")))}
function So(a){a=a.b;Wo(a?D(a+"-guide-item"):null,"appbar-guide-notification-unsubscription","guide-channel-section-updated")}
;function Xo(a,b,c){var d=c&&0<c?c:0;c=d?w()+1E3*d:0;if((d=d?Yo():Zo())&&window.JSON){q(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function $o(a){var b=Zo(),c=Yo();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if(!q(d))try{d=c.get(a)}catch(e){}if(!q(d))return null;try{d=JSON.parse(d,void 0)}catch(e){}return d}
function ap(a){try{var b=Zo(),c=Yo();b&&b.remove(a);c&&c.remove(a)}catch(d){}}
function bp(){var a=Yo();a&&aj(a,a.b.ra(!0))}
var Yo=Xe(function(){var a=new ej;return a.isAvailable()?new Zi(a):null}),Zo=Xe(function(){var a=new fj;
return a.isAvailable()?new Zi(a):null});var cp=[];function dp(a){for(var b=0;b<a.length;b++){var c=a[b];if(F(c,"generic-promo-impression-logging")){for(var d=Fd("generic-promo-impression-feedback",c),e=0;e<d.length;e++){var f={feedback_tokens:[M(d[e],"feedback-token")]};Ok("../../feed_change_ajax@action_give_feedback=1",{method:"POST",S:f})}H(c,"generic-promo-impression-logging")}}}
;var ep=[];
function fp(){A(Fd("promoted-button-container"),function(a){a:{var b=M(a,"promo-id");var c=parseInt(M(a,"promo-impression-cap"),10)||0;var d=parseInt(M(a,"promo-impression-delay"),10)||0;if(b&&0<c&&0<d){b="yt-hint-"+b;var e=$o(b)||{},f=e.lastSeen;e=e.impressions||0;if(f&&w()-new Date(f)<1E3*d||e>=c){c=!1;break a}e={lastSeen:w(),impressions:e+1};Xo(b,e,2592E3)}c=!0}c?("true"===M(a,"promo-visible")&&(c=Nm.getInstance(),c.ed(a),"hidden"!=window.getComputedStyle(a).visibility&&(c.show(a),F(a,"hide-hint-on-scroll")&&
(c=D(M(a,"scroll-parent"))||window,ep.push(zk(c,"scroll",u(gp,this,a)))))),a&&(a=r("yt.www.page.visibilitymonitor.delegateByClass")(a,r("yt.www.page.visibilitymonitor.States.VISIBLE"),dp,"generic-promo-impression-logging"),cp.push(a))):(a=E("generic-promo-impression-logging",a))&&H(a,"generic-promo-impression-logging")})}
function gp(a){Nm.getInstance().hide(a)}
;var hp=r("ytglobal.prefsUserPrefsPrefs_")||{};x("ytglobal.prefsUserPrefsPrefs_",hp);function ip(){this.b=L("ALT_PREF_COOKIE_NAME","PREF");var a=Yb.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(hp[d]=c.toString())}}}
g=ip.prototype;g.get=function(a,b){jp(a);kp(a);var c=void 0!==hp[a]?hp[a].toString():null;return null!=c?c:b?b:""};
g.set=function(a,b){jp(a);kp(a);if(null==b)throw Error("ExpectedNotNull");hp[a]=b.toString()};
function lp(a){return!!((mp("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
function np(a,b){var c="f"+(Math.floor(a/31)+1),d=1<<a%31,e=mp(c)||0;e=b?e|d:e&~d;0==e?delete hp[c]:(d=e.toString(16),hp[c]=d.toString())}
g.remove=function(a){jp(a);kp(a);delete hp[a]};
g.save=function(){var a=this.b,b=[],c;for(c in hp)b.push(c+"="+encodeURIComponent(String(hp[c])));Rl(a,b.join("&"),63072E3,"../../default.htm")};
g.clear=function(){for(var a in hp)delete hp[a]};
function kp(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function jp(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function mp(a){a=void 0!==hp[a]?hp[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Aa(ip);function op(a){if(!pp||a)pp=Jd(window);return pp}
var pp=null;var qp=[],rp=[],sp=[];
function tp(){io=D("guide");uo=D("guide-channels");vo=D("appbar-guide-menu");wo=D("appbar-guide-iframe-mask");No();io&&(zo(),F(document.body,"exp-scrollable-guide")||up(),qp.push(xk(io,"click",vp,"guide-sort-choice")),F(document.body,"exp-scrollable-guide")?(wp(op(!0)),rp.push(P("page-resize",wp))):rp.push(P("page-resize",xp)),rp.push(P("guide-channel-section-updated",yp)),rp.push(P("guide-playlist-section-updated",v(xp,v(op,!0)))),rp.push(P("force-reload-subscriptions",zp)),rp.push(P("update-guide-subscriptions",
Ap)),rp.push(P("guide-hidden",Bp)),fp())}
function Cp(a,b){A(Fd("guide-flyout-container",io),function(c){qp.push(T(c,a,b))})}
function Dp(a){Ep(a.currentTarget)}
function Bp(){A(Fd("guide-flyout-container",io),function(a){Ep(a)})}
function Ep(a){var b=E("guide-flyout-trigger",a),c=E("guide-flyout-iframe-mask",a);H(E("guide-flyout",a),"flyout-shown");c&&H(c,"flyout-shown");H(b,"on-hover")}
function Fp(a){a=a.currentTarget;var b=E("guide-flyout",a),c=E("guide-flyout-trigger",a),d=E("guide-flyout-iframe-mask",a),e=E("guide-flyout",a),f=Gi(e),h=E("guide-channels-list",a),k=op(!0),l=E("guide-flyout-trigger",a),n=E("guide-flyout-iframe-mask",a),y=k.height-(vo?vo.offsetTop:0);h.style.maxHeight=y-f.top-f.bottom+"px";f=Ai(e).height;h=Ai(l);l=yi(l);y=Math.min(y-f,Math.max(0,k.height-l.y-h.height/2-f/2));h=l.x+h.width;k=k.width-l.x;e.style.bottom=y+"px";n&&(n.style.height=f+"px",n.style.bottom=
y+"px");"rtl"==document.body.getAttribute("dir")?(e.style.right=k+"px",e.style.left="",n&&(n.style.right=k+"px",n.style.left="")):(e.style.left=h+"px",e.style.right="",n&&(n.style.left=h+"px",n.style.right=""));G(b,"flyout-shown");d&&G(d,"flyout-shown");G(c,"on-hover");S("yt-dom-content-change",a)}
function Gp(){wo&&vo&&(wo.style.height=Ai(vo).height+"px",wo.style.marginTop=vo.style.marginTop,wo.style.top=vo.style.top)}
function up(){uo=D("guide-channels");sp=ho();xp(op(!0));Cp("mouseenter",Fp);Cp("mouseleave",Dp)}
function vp(a){var b=E("guide-sort-button"),c=M(b,"guide-sort")||"",d=M(a.currentTarget,"guide-sort")||"";c!=d&&(xj(b,"guide-sort",d),Ok("../../guide_channels_ajax@action_set_guide_sort=1",{method:"POST",qa:{sort:d},format:"JSON",onSuccess:function(a,b){Ap(b);A(Fd("guide-sort-choice"),function(a){var b=M(a,"guide-sort");bm.getInstance();a=a.parentNode;b=d==b;var c=kk("span","yt-uix-button-icon-wrapper",a);if(!c&&b){var e=Od("SPAN",{"class":"yt-uix-button-icon-wrapper yt-uix-button-icon-checkbox"}),f=Od("DIV",
{"class":"yt-uix-button-icon-dropdown-checked"});e.appendChild(f);Td(a,e,0)}Zk(c,b)})}}))}
function Ap(a){var b=a.channels;b&&(a=D("guide-subscriptions-section"),b=Rd(gg(b)),Vd(b,a),sp=ho(),Hp(),A(Fd("yt-uix-tooltip-tip-visible"),function(a){H(a,"yt-uix-tooltip-tip-visible")}))}
function Hp(){up();S("yt-dom-content-change",io)}
function yp(){uo&&(uo.firstElementChild?Hp():zp())}
function Ip(a){return ib(Fd("guide-item",io),function(b){return M(b,"serialized-endpoint")==a})}
function wp(a){vo&&oi(vo,"max-height",a.height-50+"px")}
function xp(a){if(sp&&!F(document.body,"exp-scrollable-guide")){var b=Jp(a),c=sp.length,d=0;sp.sort(jo||xb);A(sp,function(a,f){var e=ko(a)-d;e=Math.min(e,b/(c-f));b-=(c-f)*e;e=d+=e;e-=e>=ko(a)?0:a.j?mo(a,a.j):0;e=Math.max(no(a),e);var k=lo(a,a.i);if(k>e)for(;k>e;){var l=a.i;if(l=p(l.lastElementChild)?l.lastElementChild:Yd(l.lastChild,!1)){var n=mo(a,l);k-=n;Td(a.h,l,0)}else break}else if(k<e){for(l=document.createDocumentFragment();!lb(Wd(a.h));)if(n=Xd(a.h)){var y=mo(a,n);if(k+y<=e)k+=y,l.appendChild(n);
else break}else break;a.i.appendChild(l)}Lf(a.w,"empty-overflow-list",!!lb(Wd(a.h)))});
Gp()}}
function Jp(a){var b=vo,c=D("guide-container");if(!c||!b)return 0;var d=Gi(c);d=d.top+d.bottom;c=Xd(c).clientHeight;var e=0;A(sp,function(a){e+=a.i?lo(a,a.i):0;e+=lb(Wd(a.h))?0:a.j?mo(a,a.j):0});
c=d+c-e;return(Fo()?b.clientHeight:a.height-50)-c}
function zp(){Ok("../../guide_channels_ajax@action_load_subs_and_footer=1",{format:"JSON",onSuccess:function(a,b){Ap(b)}})}
;function Kp(){var a={action_get_delegate_accounts:1,owner_picker_redirect_url:L("OWNER_PICKER_REDIRECT_URL")};a.o=L("CREATOR_CONTEXT","U");return a}
;var Lp=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};x("yt.msgs_",Lp);function Mp(a){var b=void 0===b?{}:b;a=(a=a in Lp?Lp[a]:void 0)||"";var c={},d;for(d in b)c.Ab=d,a=a.replace(new RegExp("\\$"+c.Ab,"gi"),function(a){return function(){return b[a.Ab]}}(c)),c={Ab:c.Ab};
return a}
function Np(a){var b="MASTHEAD_NOTIFICATIONS_LABEL"in Lp?Lp.MASTHEAD_NOTIFICATIONS_LABEL:{},c=L("I18N_PLURAL_RULES");c||(c=function(a){return 1==a?"one":"other"});
return(b=b["case"+a]||b[c(a)])?b.replace("#",a.toString()):a+""}
;var Op=null;function Pp(a){var b={key:"HighPriorityNotificationTimestamp"};b.value=a;return Qp().then(function(a){return new Promise(function(c,e){var d=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(b);d.onsuccess=c;d.onerror=e})})}
function Rp(a){return Qp().then(function(b){return new Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return Promise.reject("Unable to open IndexedDB.")})}
function Qp(){return Op?Promise.resolve(Op):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))Op=b,a(Op);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),Qp()};
c.onupgradeneeded=Sp})}
function Sp(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;var Tp=0,Up="";function Vp(a){if(zl("desktop_notification_set_title_bar")){var b=Wp();Tp=a;Up=b;document.title=Xp()}}
function Wp(){if(!Tp)return document.title;if(document.title==Xp())return Up;var a=Tp?"("+Tp+") ":"";return 0!=document.title.indexOf(a)?document.title:document.title.substring(a.length)}
function Yp(){Tp&&0!=document.title.indexOf(Xp())&&(Up=document.title,document.title=Xp())}
function Xp(){return(Tp?"("+Tp+") ":"")+Up}
;var Zp="",$p=!1,aq=null,bq=null,cq=null,dq=null,eq=null;function fq(){aq=D("yt-masthead-notifications");bq=D("yt-masthead-notifications-clickcard");cq=D("yt-masthead-notifications-content");(dq=D("yt-masthead-notifications-button"))&&(eq=E("yt-uix-button-content",dq));eq&&gq();Up=document.title;P("init",Yp);var a=D("yt-masthead-high-priority-notification-content");a&&T(a,"click",hq)}
function iq(a,b){Rp("NotificationsDisabled").then(function(c){return zl("desktop_notification_high_priority_ignore_push")||!window.Notification||"granted"!=Notification.permission||c?Rp("HighPriorityNotificationTimestamp").then(function(c){if(a<=c)return Promise.resolve();c||(c=0);jq(c,b);return Pp(a)}):Promise.resolve()})}
function gq(){Ok("../../feed_ajax@action_get_unseen_notification_count=1",{method:"GET",onSuccess:kq})}
function hq(){F(bq,"yt-high-priority-notification")&&(bq&&H(bq,"yt-high-priority-notification"),dq&&Nm.getInstance().hide(dq))}
function jq(a,b,c){dq&&((void 0===c?0:c)||!window.document.hasFocus||window.document.hasFocus()?(Zp&&(vk(Zp),Zp=""),c={action_get_high_priority_notification_flyout:1,timestampLowerBound:a},c[L("XSRF_FIELD_NAME",void 0)]=L("XSRF_TOKEN",void 0),spf.load("../../feed_ajax",{method:"POST",postData:dh(c),onDone:function(){F(aq,"yt-uix-clickcard-active")||($p=!0,dq&&(Nm.getInstance().hide(dq),G(bq,"yt-high-priority-notification"),Nm.getInstance().show(dq),zj(cq,"loaded"),H(aq,"yt-uix-clickcard-active")),$p=!1,
N(hq,b))}})):Zp||(Zp=zk(window,"focus",function(){jq(a,b,!0)})))}
function lq(a){(a=E("unread-dot",a.currentTarget))&&U(a)}
function kq(a,b){if(eq){iq(b.timestamp_lower_bound||0,b.high_priority_notification_timeout_ms||5E3);var c=b.unseen_notification_count||0,d=String(c);100<=c&&(d=Mp("MASTHEAD_NOTIFICATIONS_COUNT_99PLUS"));ce(eq,d);Vp(c);dq&&(0==c?(d=dq,H(d,"sb-notif-on"),G(d,"sb-notif-off")):(d=dq,H(d,"sb-notif-off"),G(d,"sb-notif-on"),zj(cq,"loaded")),c=Np(c),dq.setAttribute("aria-label",c),dq.setAttribute("title",c));(c=b.polling_timeout)&&N(gq,c)}}
;var mq,nq,oq="";function pq(){if("U"==L("CREATOR_CONTEXT","U")){var a=Fd("yt-masthead-account-picker-user-option"),b=ah(window.location.href);A(a,function(a){if(-1!=a.href.indexOf("action_handle_signin")){var c=Hk(a.href,{next:b});wd(a,ah(c))}})}else{a=Fd("yt-masthead-account-picker-owner-option");
var c=$g();if(c){var d=c.indexOf(";");-1!=d&&(c=c.substring(0,d))}c&&A(a,function(a){var b=a.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=Gk(1<b.length?b[1]:b[0])):b={};if(b=b.next){var d=b.indexOf("#");b=(0>d?b:b.substr(0,d))+(c?"#"+c:"");b=Hk(a.href,{next:b});wd(a,ah(b))}})}}
function qq(){H(document.body,"sitewide-ticker-visible");S("masthead-ticker-close")}
function rq(){var a=L("SBOX_JS_URL",oq);if(a){oq=a;var b=r("yt.www.masthead.searchbox.init");b?b():sq(a,function(){try{var a=r("yt.www.masthead.searchbox.init");a()}catch(d){throw d.message=d.message+' sbox type: "'+Ba(a)+'"',d;}})}}
function sq(a,b){var c=D("masthead-search-term");if(c){var d=function(){tq();nq=b;Pj(a,b);vk([e,f])};
var e=zk(c,"mouseover",d);var f=zk(c,"keypress",d)}}
function tq(){r("yt.www.masthead.searchbox.init")||(Uj(oq,nq),nq=null)}
function uq(){var a=D("masthead-search-term");a&&a.focus()}
;var vq=[],wq="",xq=[],yq=null,zq=null,Aq=0,Bq=0,Cq=!1,Dq=!1,Eq=0,Fq=0,Gq=0,Hq=null,Iq=null,Jq=null,Kq=!1,Lq=null,Mq=!1,Nq=null,Oq=!1,Pq=!1,Qq=!1;function Rq(){if(D("masthead-appbar")){zq=D("masthead-positioner");yq=D("masthead-positioner-height-offset");zo();Sq();Tq();Hq=new Ye(Uq);var a=Vq;r("yt.scheduler.instance")&&(a=function(){hl(Vq,1,void 0)});
xq.push(P("init",a));xq.push(P("dispose",Wq));Jq=yo();Lq=ip.getInstance();Xq(lp(128)?lp(129):!0);Nq=Gd(document,"html",void 0,void 0)[0];xq.push(P("masthead-ticker-close",Yq));xq.push(P("appbar-guide-delay-load",Sq));xq.push(P("page-resize",Zq));Oq||Vq()}}
function Vq(){Iq=E("appbar-content-trigger");(Qq=F(document.body,"always-autohide-masthead"))?zj(mq,"position-fixed"):xj(mq,"position-fixed","true");Qq||Iq?wq=T(window,"scroll",$q):ar();Kq=!!D("appbar-guide-menu")&&Eo();Oq?(Kq||(Lf(Ao,"guide-pinned",!1),Co(!1),vo&&(vo.scrollTop=0)),Zq()):Oq=!0;var a=-1*yi(zq).y,b=document.body.scrollHeight,c=a-(b-document.body.clientHeight);0<c&&(document.body.style.minHeight=""+b+c+"px");Md(document).scrollTop+=a;Aq=Ld(document).y;br();cr();Gp()}
function Wq(){Iq=null;ar()}
function br(){if(!Iq||Pq)Zk(null,!0);else{var a=Ai(Iq).height,b=Ai(zq).height;b=yi(zq).y+b;a=Math.floor(yi(Iq).y)+a;var c=F(document.body,"appbar-hidden"),d=Md(document);c&&a<b+40?(d.scrollTop+=40,Zk(null,!0),H(document.body,"appbar-hidden"),dr()):!c&&b<a&&(d.scrollTop-=40,G(document.body,"appbar-hidden"),dr())}}
function dr(){Pq=!0;N(function(){Pq=!1;F(document.body,"appbar-hidden")&&Zk(null,!1)},300)}
function Zq(){Kq&&(Lf(Ao,"guide-pinned",1251<=(window.innerWidth||document.documentElement.clientWidth)),Co(Fo()&&Mq));er()}
function er(){if(document.body)if(F(document.body,"flex-width-enabled-snap")){var a=Fo()&&Do();var b=(window.innerWidth||document.documentElement.clientWidth)-21-50;1251<=(window.innerWidth||document.documentElement.clientWidth)&&a&&(b-=230);a=1262<=b?"content-snap-width-3":1056<=b?"content-snap-width-2":"content-snap-width-1";F(Nq,a)||(Kf(Nq,Jq),G(Nq,a),S("yt-dom-content-change"))}else Kf(Nq,Jq)}
function fr(){return D("appbar-guide-menu")}
function Tq(){var a=F(document.body,"appbar-hidden"),b=yi(zq).y,c=Ai(zq).height;Bq=a?b+c:b+c-40}
function gr(a){Fo()||oe(a.target,"appbar-guide-clickable-ancestor")||Co(!1)}
function Uq(){var a=Math.max(0,Ld(document).y),b=Aq;Aq=a;var c=b-a;0<c&&0==Eq?Eq=b:0>c&&(Eq=0);c=Math.min(0,Math.max(c+Fq,-Bq));var d=Qq;if(d){var e=a<Bq;b=a>b&&Math.abs(Fq)<Bq;Do()&&b?a=!1:(a=d?!1:100<=Eq-a,a=e||b||a)}else a=!1;a&&Fq!=c&&(zq.style.top=c+"px",Gq=Fq=c,hr());br()}
function hr(){var a=fr();a&&(a.style.top=Gq+"px");Gp()}
function Sq(){if(!Dq){var a=fr();if(!a||E("guide-module-loading",a)){var b=D("appbar-guide-button");if(!b)return;vq.push(zk(b,"click",function(){S("appbar-show-guide")}))}hr();
vq.push(xk(a,"click",cr,"guide-item"));vq.push(T(a,"mouseleave",ir));vq.push(T(document.body,"click",gr));vq.push(T(E("appbar-guide-toggle"),"click",jr));Dq=!0}}
function cr(){Cq=!Fo()}
function ir(){Cq&&(Co(!1),Cq=!1)}
function jr(){var a=!Do();Co(a,!0);a&&S("yt-dom-content-change");Fo()&&Xq(a);er()}
function Xq(a){np(128,!0);np(129,a);Lq.save();Mq=a}
function ar(){vk(wq);Hq&&Hq.stop();wq=""}
function $q(){Hq.isActive()||Hq.start()}
function Yq(){var a=yi(zq).y,b=Ai(zq).height;yq.style.height=""+a+b+"px";var c=fr();c&&(F(document.body,"appbar-hidden")?c.style.marginTop=""+a+b+"px":c.style.marginTop=a+b-40+"px",Gp());Tq()}
;var kr;function lr(a){mr(D("yt-picker-"+a+"-footer"),a,!1,!1,!0);D("footer").scrollIntoView()}
function mr(a,b,c,d,e){c||(kr&&kr!=a&&U(kr),kr=a,e?bl(a):cl(a));d?E("yt-close",a).focus():(c={},c["action_"+b]=1,c.base_url=window.location.href.split("#",1)[0],Ok("../../picker_ajax",{format:"JSON",method:"GET",qa:c,onSuccess:u(nr,null,a),onError:function(){U(a)}}))}
function nr(a,b,c){if(c&&c.html){xj(a,"loaded",1);a.innerHTML=c.html;or(a);c=(b=document.body||Md(document))||Md(document);var d=wi(a),e=wi(c),f=Ji(c);if(c==Md(document)){var h=d.x-c.scrollLeft;d=d.y-c.scrollTop;C&&!Uc(10)&&(h+=f.left,d+=f.top)}else h=d.x-e.x-f.left,d=d.y-e.y-f.top;f=Bi(a);e=c.clientHeight-f.height;var k=c.scrollLeft,l=c.scrollTop;k+=Math.min(h,Math.max(h-(c.clientWidth-f.width),0));l+=Math.min(d,Math.max(d-e,0));c=new zd(k,l);b.scrollLeft=c.x;b.scrollTop=c.y;E("yt-close",a).focus()}else U(a)}
function or(a,b){var c=E("yt-picker-content",a);c?A(Gd(document,null,"yt-picker-section",c),u(pr,null,Math.floor((b||c.offsetWidth)/180))):Cj(Error(".yt-picker-content missing"),"WARNING")}
function pr(a,b){for(var c=Gd(document,null,"yt-picker-item",b),d=Math.ceil(c.length/a),e,f=document.createElement("div"),h=0;h<a;h++){e=document.createElement("div");e.className="yt-picker-grid";for(var k=d*h;k<d*(h+1);k++)c[k]&&e.appendChild(c[k]);e.children.length&&f.appendChild(e)}c=ik(f);for(Sd(b);0<c.childNodes.length;)b.appendChild(c.childNodes[0])}
;function qr(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.g=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new Vf;this.b=this.f="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",rr(this,a.capabilities||""),sr(this,a.experiments||""),this.f=
a.remoteControllerUrl||"",this.b=a.localChannelEncryptionKey||"")}
qr.prototype.copy=function(){var a=new qr({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.g=this.g;a.f=this.f;a.b=this.b;return a};
qr.prototype.equals=function(a){return a?this.id==a.id:!1};
function rr(a,b){a.capabilities.clear();db(b.split(","),v(cc,Al)).forEach(function(b){a.capabilities.add(b)})}
function sr(a,b){a.experiments.clear();b.split(",").forEach(function(b){a.experiments.add(b)})}
;function tr(a,b){this.action=a;this.params=b||{}}
;function ur(a,b){pe.call(this);this.b=new tf(this.Ge,0,this);qe(this,v(re,this.b));this.g=5E3;this.f=0;if(Ea(a))b&&(a=u(a,b));else if(a&&Ea(a.handleEvent))a=u(a.handleEvent,a);else throw Error("Invalid listener argument");this.h=a}
z(ur,pe);g=ur.prototype;g.Ge=function(){this.g=Math.min(3E5,2*this.g);this.h();this.f&&this.start()};
g.start=function(){var a=this.g+15E3*Math.random(),b=this.b;b.isActive()||b.start(a);this.f=w()+a};
g.stop=function(){this.b.stop();this.f=0};
g.isActive=function(){return this.b.isActive()};
g.reset=function(){this.b.stop();this.g=5E3};function vr(a,b,c){this.F=a;this.j=b;this.g=new K;this.f=new ur(this.af,this);this.b=null;this.l=!1;this.i=null;this.w="";this.G=this.h=0;this.C=[];this.I=c||!1}
z(vr,ni);g=vr.prototype;g.subscribe=function(a,b,c){return this.g.subscribe(a,b,c)};
g.Bc=function(a,b){Qi(this.g,a,b,void 0)};
g.ja=function(a){return this.g.ja(a)};
g.u=function(a,b){this.g.Z.apply(this.g,arguments)};
g.dispose=function(){this.l||(this.l=!0,re(this.g),wr(this),re(this.f),this.f=null)};
g.J=function(){return this.l};
function xr(a){return{firstTestResults:[""],secondTestResults:!a.b.Eb,sessionId:a.b.g,arrayId:a.b.Ra}}
g.connect=function(a,b,c){if(!this.b||2!=this.b.b){this.w="";this.f.stop();this.i=a||null;this.h=b||0;a=this.F+"/test";b=this.F+"/bind";var d=new Th(c?c.firstTestResults:null,c?c.secondTestResults:null,this.I),e=this.b;e&&(e.U=null);d.U=this;this.b=d;e?this.b.connect(a,b,this.j,e.g,e.Ra):c?this.b.connect(a,b,this.j,c.sessionId,c.arrayId):this.b.connect(a,b,this.j)}};
function wr(a,b){a.G=b||0;a.f.stop();a.b&&(3==a.b.b&&gi(a.b),$h(a.b));a.G=0}
g.sendMessage=function(a,b){var c={_sc:a};b&&nc(c,b);this.f.isActive()||2==(this.b?this.b.b:0)?this.C.push(c):yr(this)&&fi(this.b,c)};
g.fc=function(){this.f.reset();this.i=null;this.h=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)fi(this.b,a[b])}this.u("handlerOpened")};
g.dc=function(a){var b=2==a&&401==this.b.pa;4==a||b||this.f.start();this.u("handlerError",a)};
g.Ib=function(a){if(!this.f.isActive())this.u("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].b;d&&this.C.push(d)}};
g.nc=function(){var a={v:2};this.w&&(a.gsessionid=this.w);0!=this.h&&(a.ui=""+this.h);0!=this.G&&(a.ui=""+this.G);this.i&&nc(a,this.i);return a};
g.ec=function(a){"S"==a[0]?this.w=a[1]:"gracefulReconnect"==a[0]?(this.f.start(),$h(this.b)):this.u("handlerMessage",new tr(a[0],a[1]))};
function yr(a){return!!a.b&&3==a.b.b}
function zr(a,b){(a.j.loungeIdToken=b)||a.f.stop()}
g.af=function(){this.f.isActive();var a=this.b,b=0;a.O&&b++;a.Y&&b++;0!=b||this.connect(this.i,this.h)};var Ar=w(),Br=null,Cr=Array(50),Dr=-1,Er=!1;function Fr(){var a=Gr;Hr();Br.push(a);Ir(Br)}
function Jr(a,b){Hr();var c=Br,d=Kr(a,String(b));lb(c)?Lr(d):(Ir(c),A(c,function(a){a(d)}))}
function Mr(a){Jr("CP",a)}
function Hr(){Br||(Br=r("yt.mdx.remote.debug.handlers_")||[],x("yt.mdx.remote.debug.handlers_",Br))}
function Lr(a){var b=(Dr+1)%50;Dr=b;Cr[b]=a;Er||(Er=49==b)}
function Ir(a){var b=Cr;if(b[0]){var c=Dr,d=Er?c:-1;do{d=(d+1)%50;var e=b[d];A(a,function(a){a(e)})}while(d!=c);
Cr=Array(50);Dr=-1;Er=!1}}
function Kr(a,b){var c=(w()-Ar)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function Nr(a){this.port=this.domain="";this.b="../../api/lounge";this.f=!0;a=a||document.location.href;var b=Number(a.match(Yg)[4]||null)||"";b&&(this.port=":"+b);this.domain=Zg(a)||"";a=pc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Qb(a,"10.0")&&(this.f=!1))}
function Or(a,b){var c=a.b;if(p(void 0)?0:a.f)c="https://"+a.domain+a.port+a.b;return eh(c+b,{})}
function Pr(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:v(a.h,d,!0),onError:v(a.g,e),va:v(a.i,e)};c&&(a.S=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Ok(b,a)}
Nr.prototype.h=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Nr.prototype.g=function(a,b){a(Error("Request error: "+b.status))};
Nr.prototype.i=function(a){a(Error("request timed out"))};function Qr(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function Rr(a,b){return!!b&&(a.id==b||a.uuid==b)}
function Sr(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function Tr(a){return new Qr(a)}
function Ur(a){return Ca(a)?eb(a,Tr):[]}
function Vr(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function Wr(a){return Ca(a)?"["+eb(a,Vr).join(",")+"]":"null"}
;function Xr(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function Yr(a,b){return ib(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})}
function Zr(a,b){return ib(a,function(a){return Rr(a,b)})}
;function $r(){pe.call(this);this.w=new K;qe(this,v(re,this.w))}
z($r,pe);$r.prototype.subscribe=function(a,b,c){return this.J()?0:this.w.subscribe(a,b,c)};
$r.prototype.Bc=function(a,b){this.J()||Qi(this.w,a,b,void 0)};
$r.prototype.ja=function(a){return this.J()?!1:this.w.ja(a)};
$r.prototype.u=function(a,b){this.J()||this.w.Z.apply(this.w,arguments)};function as(a){$r.call(this);this.l=a;this.b=[]}
z(as,$r);as.prototype.fa=function(){return this.b};
as.prototype.Gb=function(a){return!!Yr(this.b,a)};
as.prototype.get=function(a){return a?Zr(this.b,a):null};
function bs(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.b.push(b);return!0}
function cs(a,b){var c=a.b.length!=b.length;a.b=db(a.b,function(a){return!!Yr(b,a)});
for(var d=0,e=b.length;d<e;d++)c=bs(a,b[d])||c;return c}
function ds(a,b){var c=a.b.length;a.b=db(a.b,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.b.length<c}
as.prototype.info=function(a){Jr(this.l,a)};function es(a,b,c,d){$r.call(this);this.l=a;this.j=b;this.h=c;this.i=d;this.g=0;this.b=null;this.f=NaN}
z(es,$r);var fs=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=es.prototype;g.start=function(){!this.b&&isNaN(this.f)&&this.Vc()};
g.stop=function(){this.b&&(this.b.abort(),this.b=null);isNaN(this.f)||(O(this.f),this.f=NaN)};
g.B=function(){this.stop();es.A.B.call(this)};
g.Vc=function(){this.f=NaN;this.b=Ok(Or(this.l,"../../pairing/get_screen"),{method:"POST",S:{pairing_code:this.j},timeout:5E3,onSuccess:u(this.cf,this),onError:u(this.bf,this),va:u(this.df,this)})};
g.cf=function(a,b){this.b=null;var c=b.screen||{};c.dialId=this.h;c.name=this.i;this.u("pairingComplete",new Qr(c))};
g.bf=function(a){this.b=null;a.status&&404==a.status?this.g>=fs.length?this.u("pairingFailed",Error("DIAL polling timed out")):(a=fs[this.g],this.f=N(u(this.Vc,this),a),this.g++):this.u("pairingFailed",Error("Server error "+a.status))};
g.df=function(){this.b=null;this.u("pairingFailed",Error("Server not responding"))};var gs;function hs(){var a=is(),b=js();if(ks()){var c=a;var d=0;for(var e=c.length,f;d<e;){var h=d+e>>1;var k=xb(b,c[h]);0<k?d=h+1:(e=h,f=!k)}d=f?d:~d;0>d&&tb(c,-(d+1),0,b)}a=ls(a);if(lb(a))try{Sl("remote_sid")}catch(l){}else try{Rl("remote_sid",a.join(","),-1,"../../default.htm")}catch(l){}}
function is(){var a=$o("yt-remote-connected-devices")||[];a.sort(xb);return a}
function ls(a){if(lb(a))return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return eb(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function ms(a){Xo("yt-remote-connected-devices",a,86400)}
function js(){if(ns)return ns;var a=$o("yt-remote-device-id");a||(a=Xr(),Xo("yt-remote-device-id",a,31536E3));for(var b=is(),c=1,d=a;kb(b,d);)c++,d=a+"#"+c;return ns=d}
function os(){return $o("yt-remote-session-browser-channel")}
function ks(){return $o("yt-remote-session-screen-id")}
function ps(a){5<a.length&&(a=a.slice(a.length-5));var b=eb(qs(),function(a){return a.loungeToken}),c=eb(a,function(a){return a.loungeToken});
hb(c,function(a){return!kb(b,a)})&&rs();
Xo("yt-remote-local-screens",a,31536E3)}
function qs(){return $o("yt-remote-local-screens")||[]}
function rs(){Xo("yt-remote-lounge-token-expiration",!0,86400)}
function ss(a,b){Xo("yt-remote-session-browser-channel",a);Xo("yt-remote-session-screen-id",b);var c=is(),d=js();kb(c,d)||c.push(d);ms(c);hs()}
function ts(a){a||(ap("yt-remote-session-screen-id"),ap("yt-remote-session-video-id"));hs();a=is();nb(a,js());ms(a)}
function us(){if(!gs){var a=mj();a&&(gs=new Ti(a))}return gs?!!gs.get("yt-remote-use-staging-server"):!1}
var ns="";function vs(a){as.call(this,"LocalScreenService");this.g=a;this.f=NaN;ws(this);this.info("Initializing with "+Wr(this.b))}
z(vs,as);g=vs.prototype;g.start=function(){ws(this)&&this.u("screenChange");!$o("yt-remote-lounge-token-expiration")&&xs(this);O(this.f);this.f=N(u(this.start,this),1E4)};
g.add=function(a,b){ws(this);bs(this,a);ys(this,!1);this.u("screenChange");b(a);a.token||xs(this)};
g.remove=function(a,b){var c=ws(this);ds(this,a)&&(ys(this,!1),c=!0);b(a);c&&this.u("screenChange")};
g.Db=function(a,b,c,d){var e=ws(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,ys(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.u("screenChange")};
g.B=function(){O(this.f);vs.A.B.call(this)};
function xs(a){if(a.b.length){var b=eb(a.b,function(a){return a.id}),c=Or(a.g,"../../pairing/get_lounge_token_batch");
Pr(a.g,c,{screen_ids:b.join(",")},u(a.Hd,a),u(a.Gd,a))}}
g.Hd=function(a){ws(this);var b=this.b.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}ys(this,!b);b&&Jr(this.l,"Missed "+b+" lounge tokens.")};
g.Gd=function(a){Jr(this.l,"Requesting lounge tokens failed: "+a)};
function ws(a){var b=Ur(qs());b=db(b,function(a){return!a.uuid});
return cs(a,b)}
function ys(a,b){ps(eb(a.b,Sr));b&&rs()}
;function zs(a,b){$r.call(this);this.j=b;var c=$o("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.j(),f=0,h=e.length;f<h;++f){var k=e[f].id;d[k]=kb(c,k)}this.b=d;this.i=a;this.g=this.h=NaN;this.f=null;As("Initialized with "+lg(this.b))}
z(zs,$r);g=zs.prototype;g.start=function(){var a=parseInt($o("yt-remote-fast-check-period")||"0",10);(this.h=w()-144E5<a?0:a)?Bs(this):(this.h=w()+3E5,Xo("yt-remote-fast-check-period",this.h),this.Tb())};
g.isEmpty=function(){return hc(this.b)};
g.update=function(){As("Updating availability on schedule.");var a=this.j(),b=ac(this.b,function(b,d){return b&&!!Zr(a,d)},this);
Cs(this,b)};
function Ds(a,b,c){var d=Or(a.i,"../../pairing/get_screen_availability");Pr(a.i,d,{lounge_token:b.token},u(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),u(function(){c(!1)},a))}
g.B=function(){O(this.g);this.g=NaN;this.f&&(this.f.abort(),this.f=null);zs.A.B.call(this)};
function Cs(a,b){a:if(bc(b)!=bc(a.b))var c=!1;else{c=ec(b);for(var d=0,e=c.length;d<e;++d)if(!a.b[c[d]]){c=!1;break a}c=!0}c||(As("Updated online screens: "+lg(a.b)),a.b=b,a.u("screenChange"));Es(a)}
function Bs(a){isNaN(a.g)||O(a.g);a.g=N(u(a.Tb,a),0<a.h&&a.h<w()?2E4:1E4)}
g.Tb=function(){O(this.g);this.g=NaN;this.f&&this.f.abort();var a=Fs(this);if(bc(a)){var b=Or(this.i,"../../pairing/get_screen_availability");this.f=Pr(this.i,b,{lounge_token:ec(a).join(",")},u(this.Ee,this,a),u(this.De,this))}else Cs(this,{}),Bs(this)};
g.Ee=function(a,b){this.f=null;var c=ec(Fs(this));if(vb(c,ec(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;Cs(this,d);Bs(this)}else this.L("Changing Screen set during request."),this.Tb()};
g.De=function(a){this.L("Screen availability failed: "+a);this.f=null;Bs(this)};
function As(a){Jr("OnlineScreenService",a)}
g.L=function(a){Jr("OnlineScreenService",a)};
function Fs(a){var b={};A(a.j(),function(a){a.token?b[a.token]=a.id:this.L("Requesting availability of screen w/o lounge token.")});
return b}
function Es(a){a=ec(ac(a.b,function(a){return a}));
a.sort(xb);a.length?Xo("yt-remote-online-screen-ids",a.join(","),60):ap("yt-remote-online-screen-ids")}
;function X(a){as.call(this,"ScreenService");this.j=a;this.f=this.g=null;this.h=[];this.i={};Gs(this)}
z(X,as);g=X.prototype;g.start=function(){this.g.start();this.f.start();this.b.length&&(this.u("screenChange"),this.f.isEmpty()||this.u("onlineScreenChange"))};
g.add=function(a,b,c){this.g.add(a,b,c)};
g.remove=function(a,b,c){this.g.remove(a,b,c);this.f.update()};
g.Db=function(a,b,c,d){this.g.Gb(a)?this.g.Db(a,b,c,d):(a="Updating name of unknown screen: "+a.name,Jr(this.l,a),d(Error(a)))};
g.fa=function(a){return a?this.b:qb(this.b,db(this.h,function(a){return!this.Gb(a)},this))};
g.hd=function(){return db(this.fa(!0),function(a){return!!this.f.b[a.id]},this)};
function Hs(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.i[b]);var h=a.fa();if(h=(c?Zr(h,c):null)||Zr(h,b)){h.uuid=b;var k=Is(a,h);Ds(a.f,k,function(a){e(a?k:null)})}else c?Js(a,c,u(function(a){var f=Is(this,new Qr({name:d,
screenId:c,loungeToken:a,dialId:b||""}));Ds(this.f,f,function(a){e(a?f:null)})},a),f):e(null)}
g.jd=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new es(this.j,a,b,c);f.subscribe("pairingComplete",u(function(a){re(f);d(Is(this,a))},this));
f.subscribe("pairingFailed",function(a){re(f);e(a)});
f.start();return u(f.stop,f)};
function Ks(a,b){for(var c=0,d=a.b.length;c<d;++c)if(a.b[c].name==b)return a.b[c];return null}
g.ff=function(a,b,c,d){Ok(Or(this.j,"../../pairing/get_screen"),{method:"POST",S:{pairing_code:a},timeout:5E3,onSuccess:u(function(a,d){var e=new Qr(d.screen||{});if(!e.name||Ks(this,e.name)){a:{var f=e.name;for(var l=2,n=b(f,l);Ks(this,n);){l++;if(20<l)break a;n=b(f,l)}f=n}e.name=f}c(Is(this,e))},this),
onError:u(function(a){d(Error("pairing request failed: "+a.status))},this),
va:u(function(){d(Error("pairing request timed out."))},this)})};
g.B=function(){re(this.g);re(this.f);X.A.B.call(this)};
function Js(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={S:{screen_ids:b},method:"POST",context:a,onSuccess:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Ok(Or(a.j,"../../pairing/get_lounge_token_batch"),e)}
function Ls(a){a.b=a.g.fa();var b=a.i,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.b.length;b<d;++b){var e=a.b[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+Wr(a.b))}
g.Md=function(){Ls(this);this.u("screenChange");this.f.update()};
function Gs(a){Ms(a);a.g=new vs(a.j);a.g.subscribe("screenChange",u(a.Md,a));Ls(a);a.h=Ur($o("yt-remote-automatic-screen-cache")||[]);Ms(a);a.info("Initializing automatic screens: "+Wr(a.h));a.f=new zs(a.j,u(a.fa,a,!0));a.f.subscribe("screenChange",u(function(){this.u("onlineScreenChange")},a))}
function Is(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=Zr(a.h,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.h.push(b),Xo("yt-remote-automatic-screen-cache",eb(a.h,Sr)));Ms(a);a.i[b.uuid]=b.id;Xo("yt-remote-device-id-map",a.i,31536E3);return b}
function Ms(a){a.i=$o("yt-remote-device-id-map")||{}}
X.prototype.dispose=X.prototype.dispose;function Ns(a,b,c){$r.call(this);this.N=c;this.I=a;this.b=b;this.g=null}
z(Ns,$r);g=Ns.prototype;g.zb=function(a){this.g=a;this.u("sessionScreen",this.g)};
g.ba=function(a){this.J()||(a&&Os(this,""+a),this.g=null,this.u("sessionScreen",null))};
g.info=function(a){Jr(this.N,a)};
function Os(a,b){Jr(a.N,b)}
g.ld=function(){return null};
g.Vb=function(a){var b=this.b;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,u(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),u(function(){Os(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.B=function(){this.Vb("");Ns.A.B.call(this)};function Ps(a,b){Ns.call(this,a,b,"CastSession");this.f=null;this.h=0;this.j=u(this.gf,this);this.i=u(this.Me,this);this.h=N(u(function(){Qs(this,null)},this),12E4)}
z(Ps,Ns);g=Ps.prototype;g.Ub=function(a){if(this.f){if(this.f==a)return;Os(this,"Overriding cast sesison with new session object");this.f.removeUpdateListener(this.j);this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.i)}this.f=a;this.f.addUpdateListener(this.j);this.f.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.i);Rs(this)};
g.Sa=function(a){this.info("launchWithParams no-op for Cast: "+lg(a))};
g.stop=function(){this.f?this.f.stop(u(function(){this.ba()},this),u(function(){this.ba(Error("Failed to stop receiver app."))},this)):this.ba(Error("Stopping cast device witout session."))};
g.Vb=t;g.B=function(){this.info("disposeInternal");O(this.h);this.h=0;this.f&&(this.f.removeUpdateListener(this.j),this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.i));this.f=null;Ps.A.B.call(this)};
function Rs(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+lg(void 0));var b={type:"getMdxSessionStatus"};a.f?a.f.sendMessage("urn:x-cast:com.google.youtube.mdx",b,t,u(function(){Os(this,"Failed to send message: getMdxSessionStatus.")},a)):Os(a,"Sending yt message without session: "+lg(b))}
g.Me=function(a,b){if(!this.J())if(b){var c=rg(b);if(Fa(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+lg(c));switch(d){case "mdxSessionStatus":Qs(this,c.screenId);break;default:Os(this,"Unknown youtube message: "+d)}}else Os(this,"Unable to parse message.")}else Os(this,"No data in message.")};
function Qs(a,b){O(a.h);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.g||a.g.id!=b){var c=u(a.zb,a),d=u(a.ba,a);a.oc(b,c,d,5)}}else a.ba(Error("Waiting for session status timed out."))}
g.oc=function(a,b,c,d){Hs(this.I,this.b.label,a,this.b.friendlyName,u(function(e){e?b(e):0<=d?(Os(this,"Screen "+a+" appears to be offline. "+d+" retries left."),N(u(this.oc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.ld=function(){return this.f};
g.gf=function(a){this.J()||a||(Os(this,"Cast session died."),this.ba())};function Ss(a,b,c){Ns.call(this,a,b,"DialSession");this.h=this.F=null;this.K="";this.P=c;this.i=null;this.l=t;this.j=NaN;this.M=u(this.kf,this);this.f=t}
z(Ss,Ns);g=Ss.prototype;g.Ub=function(a){this.h=a;this.h.addUpdateListener(this.M)};
g.Sa=function(a){this.i=a;this.l()};
g.stop=function(){this.f();this.f=t;O(this.j);this.h?this.h.stop(u(this.ba,this,null),u(this.ba,this,"Failed to stop DIAL device.")):this.ba()};
g.B=function(){this.f();this.f=t;O(this.j);this.h&&this.h.removeUpdateListener(this.M);this.h=null;Ss.A.B.call(this)};
function Ts(a){a.f=a.I.jd(a.K,a.b.label,a.b.friendlyName,u(function(a){this.f=t;this.zb(a)},a),u(function(a){this.f=t;
this.ba(a)},a))}
g.kf=function(a){this.J()||a||(Os(this,"DIAL session died."),this.f(),this.f=t,this.ba())};
function Us(a){var b={};b.pairingCode=a.K;b.theme=a.P;if(a.i){var c=a.i.currentTime||0;b.v=a.i.videoId;b.t=c}us()&&(b.env_useStageMdx=1);return dh(b)}
g.Pb=function(a){this.K=Xr();if(this.i){var b=new chrome.cast.DialLaunchResponse(!0,Us(this));a(b);Ts(this)}else this.l=u(function(){O(this.j);this.l=t;this.j=NaN;var b=new chrome.cast.DialLaunchResponse(!0,Us(this));a(b);Ts(this)},this),this.j=N(u(function(){this.l()},this),100)};
g.Rd=function(a,b,c){Hs(this.I,this.F.receiver.label,a,this.b.friendlyName,u(function(a){a&&a.token?(this.zb(a),b(new chrome.cast.DialLaunchResponse(!1))):this.Pb(b,c)},this),u(function(a){Os(this,"Failed to get DIAL screen: "+a);
this.Pb(b,c)},this))};function Vs(a,b){Ns.call(this,a,b,"ManualSession");this.f=N(u(this.Sa,this,null),150)}
z(Vs,Ns);Vs.prototype.stop=function(){this.ba()};
Vs.prototype.Ub=t;Vs.prototype.Sa=function(){O(this.f);this.f=NaN;var a=Zr(this.I.fa(),this.b.label);a?this.zb(a):this.ba(Error("No such screen"))};
Vs.prototype.B=function(){O(this.f);this.f=NaN;Vs.A.B.call(this)};function Ws(a,b,c,d){$r.call(this);this.f=a;this.l=b||"233637DE";this.j=c||"cl";this.F=d||!1;this.b=null;this.i=!1;this.g=[];this.h=u(this.Be,this)}
z(Ws,$r);g=Ws.prototype;
g.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.l);this.F||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new chrome.cast.ApiConfig(c,u(this.Pc,this),u(this.Ce,this),d,e);c.customDialLaunchCallback=u(this.re,this);chrome.cast.initialize(c,u(function(){this.J()||(chrome.cast.addReceiverActionListener(this.h),
Fr(),this.f.subscribe("onlineScreenChange",u(this.kd,this)),this.g=Xs(this),chrome.cast.setCustomReceivers(this.g,t,u(function(a){this.L("Failed to set initial custom receivers: "+lg(a))},this)),this.u("yt-remote-cast2-availability-change",Ys(this)),b(!0))},this),u(function(a){this.L("Failed to initialize API: "+lg(a));
b(!1)},this))};
g.Ue=function(a,b){Zs("Setting connected screen ID: "+a+" -> "+b);if(this.b){var c=this.b.g;if(!a||c&&c.id!=a)Zs("Unsetting old screen status: "+this.b.b.friendlyName),$s(this,null)}if(a&&b){if(!this.b){c=Zr(this.f.fa(),a);if(!c){Zs("setConnectedScreenStatus: Unknown screen.");return}var d=at(this,c);d||(Zs("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.g.push(d),chrome.cast.setCustomReceivers(this.g,
t,u(function(a){this.L("Failed to set initial custom receivers: "+lg(a))},this)));
Zs("setConnectedScreenStatus: new active receiver: "+d.friendlyName);$s(this,new Vs(this.f,d),!0)}this.b.Vb(b)}else Zs("setConnectedScreenStatus: no screen.")};
function at(a,b){return b?ib(a.g,function(a){return Rr(b,a.label)},a):null}
g.Ve=function(a){this.J()?this.L("Setting connection data on disposed cast v2"):this.b?this.b.Sa(a):this.L("Setting connection data without a session")};
g.jf=function(){this.J()?this.L("Stopping session on disposed cast v2"):this.b?(this.b.stop(),$s(this,null)):Zs("Stopping non-existing session")};
g.requestSession=function(){chrome.cast.requestSession(u(this.Pc,this),u(this.Fe,this))};
g.B=function(){this.f.Bc("onlineScreenChange",u(this.kd,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.h);nb(r("yt.mdx.remote.debug.handlers_")||[],Gr);re(this.b);Ws.A.B.call(this)};
function Zs(a){Jr("Controller",a)}
g.L=function(a){Jr("Controller",a)};
function Gr(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function Ys(a){return a.i||!!a.g.length||!!a.b}
function $s(a,b,c){b!=a.b&&(re(a.b),(a.b=b)?(c?a.u("yt-remote-cast2-receiver-resumed",b.b):a.u("yt-remote-cast2-receiver-selected",b.b),b.subscribe("sessionScreen",u(a.Qc,a,b)),b.g?a.u("yt-remote-cast2-session-change",b.g):c&&a.b.Sa(null)):a.u("yt-remote-cast2-session-change",null))}
g.Qc=function(a,b){this.b==a&&(b||$s(this,null),this.u("yt-remote-cast2-session-change",b))};
g.Be=function(a,b){if(!this.J())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),Zs("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.b)if(this.b.b.label!=a.label)Zs("onReceiverAction_: Stopping active receiver: "+this.b.b.friendlyName),this.b.stop();else{Zs("onReceiverAction_: Casting to active receiver.");this.b.g&&this.u("yt-remote-cast2-session-change",this.b.g);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:$s(this,
new Vs(this.f,a));break;case chrome.cast.ReceiverType.DIAL:$s(this,new Ss(this.f,a,this.j));break;case chrome.cast.ReceiverType.CAST:$s(this,new Ps(this.f,a));break;default:this.L("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.b&&this.b.b.label==a.label?this.b.stop():this.L("Stopping receiver w/o session: "+a.friendlyName)}else this.L("onReceiverAction_ called without receiver.")};
g.re=function(a){if(this.J())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.L("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.b?this.b.b:null;if(!c||c.label!=b.label)return this.L("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.b.g)return Zs("Reselecting dial screen."),
this.u("yt-remote-cast2-session-change",this.b.g),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.L('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);$s(this,new Ss(this.f,b,this.j))}b=this.b;b.F=a;return b.F.appState==chrome.cast.DialAppState.RUNNING?new Promise(u(b.Rd,b,(b.F.extraData||{}).screenId||null)):new Promise(u(b.Pb,b))};
g.Pc=function(a){if(!this.J()){Zs("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.b)if(b.receiverType==chrome.cast.ReceiverType.CAST)Zs("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),$s(this,new Ps(this.f,b),!0);else{this.L("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.b.b,d=Zr(this.f.fa(),c.label);d&&Rr(d,b.label)&&c.receiverType!=
chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(Zs("onSessionEstablished_: manual to cast session change "+b.friendlyName),re(this.b),this.b=new Ps(this.f,b),this.b.subscribe("sessionScreen",u(this.Qc,this,this.b)),this.b.Sa(null));this.b.Ub(a)}}};
g.hf=function(){return this.b?this.b.ld():null};
g.Fe=function(a){this.J()||(this.L("Failed to estabilish a session: "+lg(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&$s(this,null))};
g.Ce=function(a){Zs("Receiver availability updated: "+a);if(!this.J()){var b=Ys(this);this.i=a==chrome.cast.ReceiverAvailability.AVAILABLE;Ys(this)!=b&&this.u("yt-remote-cast2-availability-change",Ys(this))}};
function Xs(a){var b=a.f.hd(),c=a.b&&a.b.b;a=eb(b,function(a){c&&Rr(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=at(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new chrome.cast.Receiver(b,a.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
g.kd=function(){this.J()||(this.g=Xs(this),Zs("Updating custom receivers: "+lg(this.g)),chrome.cast.setCustomReceivers(this.g,t,u(function(){this.L("Failed to set custom receivers.")},this)),this.u("yt-remote-cast2-availability-change",Ys(this)))};
Ws.prototype.setLaunchParams=Ws.prototype.Ve;Ws.prototype.setConnectedScreenStatus=Ws.prototype.Ue;Ws.prototype.stopSession=Ws.prototype.jf;Ws.prototype.getCastSession=Ws.prototype.hf;Ws.prototype.requestSession=Ws.prototype.requestSession;Ws.prototype.init=Ws.prototype.init;Ws.prototype.dispose=Ws.prototype.dispose;function bt(a,b,c,d,e,f){ct()?et(a,d,e,f)&&(ft(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?gt(b):(window.__onGCastApiAvailable=function(a,c){a?gt(b):(ht("Failed to load cast API: "+c),it(!1),ft(!1),ap("yt-remote-cast-available"),ap("yt-remote-cast-receiver"),jt(),b(!1))},c?Pj("../../../https@www.gstatic.com/cv/js/sender/v1/cast_sender.js"):Va("CriOS")?Xa():Va("Android")&&Va("Chrome/")&&window.navigator.presentation?Ya():window.chrome&&window.navigator.presentation&&!Va("Edge")?(Wa(),Qa(Pa.map(Ta))):
Sa())):dt("Cannot initialize because not running Chrome")}
function jt(){dt("dispose");var a=kt();a&&a.dispose();x("yt.mdx.remote.cloudview.instance_",null);lt(!1);Jj(mt);mt.length=0}
function nt(){dt("clearCurrentReceiver");ap("yt-remote-cast-receiver")}
function ot(){return $o("yt-remote-cast-installed")?kt()?kt().getCastSession():(ht("getCastSelector: Cast is not initialized."),null):(ht("getCastSelector: Cast API is not installed!"),null)}
function pt(a,b){qt()?kt().setConnectedScreenStatus(a,b):ht("setConnectedScreenStatus called before ready.")}
function ct(){var a=0<=pc.search(/ (CrMo|Chrome|CriOS)\//);return Bf||a}
function et(a,b,c,d){var e=!1;kt()||(a=new Ws(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){Xo("yt-remote-cast-available",a);Kj("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){dt("onReceiverSelected: "+a.friendlyName);
Xo("yt-remote-cast-receiver",a);Kj("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){dt("onReceiverResumed: "+a.friendlyName);
Xo("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){dt("onSessionChange: "+Vr(a));
a||ap("yt-remote-cast-receiver");Kj("yt-remote-cast2-session-change",a)}),x("yt.mdx.remote.cloudview.instance_",a),e=!0);
dt("cloudview.createSingleton_: "+e);return e}
function kt(){return r("yt.mdx.remote.cloudview.instance_")}
function gt(a){it(!0);ft(!1);kt().init(!1,function(b){b?(lt(!0),S("yt-remote-cast2-api-ready")):(ht("Failed to initialize cast API."),it(!1),ap("yt-remote-cast-available"),ap("yt-remote-cast-receiver"),jt());a(b)})}
function dt(a){Jr("cloudview",a)}
function ht(a){Jr("cloudview",a)}
function it(a){dt("setCastInstalled_ "+a);Xo("yt-remote-cast-installed",a)}
function qt(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function lt(a){dt("setApiReady_ "+a);x("yt.mdx.remote.cloudview.apiReady_",a)}
function ft(a){x("yt.mdx.remote.cloudview.initializing_",a)}
var mt=[];function rt(a){this.index=-1;this.videoId=this.listId="";this.volume=this.b=-1;this.muted=!1;this.audioTrackId=null;this.h=this.g=0;this.f=null;this.hasNext=this.j=!1;this.G=this.i=this.w=this.l=0;this.C=NaN;this.reset(a)}
function st(a){a.audioTrackId=null;a.f=null;a.b=-1;a.j=!1;a.hasNext=!1;a.g=0;a.h=w();a.l=0;a.w=0;a.i=0;a.G=0;a.C=NaN}
rt.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";st(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.b=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.f=a.trackData,this.j=a.hasPrevious,this.hasNext=a.hasNext,this.g=a.playerTime,this.h=a.playerTimeAt,this.l=a.seekableStart,this.w=a.seekableEnd,this.i=a.duration,this.G=a.loadedTime,this.C=a.liveIngestionTime)};
rt.prototype.isAdPlaying=function(){return 1081==this.b};
function tt(a,b){a.g=b;a.h=w()}
function ut(a){switch(a.b){case 1:case 1081:return(w()-a.h)/1E3+a.g;case -1E3:return 0}return a.g}
function vt(a,b,c){var d=a.videoId;a.videoId=b;a.index=c;b!=d&&st(a)}
function wt(a){var b={};b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.b;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=lc(a.f);b.hasPrevious=a.j;b.hasNext=a.hasNext;b.playerTime=a.g;b.playerTimeAt=a.h;b.seekableStart=a.l;b.seekableEnd=a.w;b.duration=a.i;b.loadedTime=a.G;b.liveIngestionTime=a.C;return b}
rt.prototype.clone=function(){return new rt(wt(this))};function xt(a,b){$r.call(this);this.b=0;this.h=a;this.j=[];this.i=new nj;this.f=this.g=null;this.I=u(this.ie,this);this.l=u(this.hb,this);this.F=u(this.he,this);this.K=u(this.oe,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Xb,this),zt(this))):c=3;0!=c&&(b?this.Xb(c):N(u(function(){this.Xb(c)},this),0));
var d=ot();d&&At(this,d);this.subscribe("yt-remote-cast2-session-change",this.K)}
z(xt,$r);function Bt(a){return new rt(a.h.getPlayerContextData())}
g=xt.prototype;g.play=function(){1==this.b?(this.g?this.g.play(null,t,Ct(this,"play")):Dt(this,"play"),Et(this,1,ut(Bt(this))),this.u("remotePlayerChange")):Ft(this,this.play)};
g.pause=function(){1==this.b?(this.g?this.g.pause(null,t,Ct(this,"pause")):Dt(this,"pause"),Et(this,2,ut(Bt(this))),this.u("remotePlayerChange")):Ft(this,this.pause)};
g.stop=function(){if(1==this.b){this.g?this.g.stop(null,t,Ct(this,"stopVideo")):Dt(this,"stopVideo");var a=Bt(this);a.index=-1;a.videoId="";st(a);Gt(this,a);this.u("remotePlayerChange")}else Ft(this,this.stop)};
g.setVolume=function(a,b){if(1==this.b){var c=Bt(this);if(this.f){if(c.volume!=a){var d=Math.round(a)/100;this.f.setReceiverVolumeLevel(d,u(function(){Mr("set receiver volume: "+d)},this),u(function(){this.L("failed to set receiver volume.")},this))}c.muted!=b&&this.f.setReceiverMuted(b,u(function(){Mr("set receiver muted: "+b)},this),u(function(){this.L("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);Dt(this,"setVolume",e)}c.muted=b;c.volume=a;Gt(this,c)}else Ft(this,v(this.setVolume,a,b))};
g.ac=function(a){1==this.b?Dt(this,"addVideos",{listId:a}):Ft(this,v(this.ac,a))};
g.Yc=function(a){1==this.b?Dt(this,"removeVideo",{videoId:a}):Ft(this,v(this.Yc,a))};
g.Jc=function(a,b,c){1==this.b?Dt(this,"moveVideo",{videoId:a,delta:(b>=c?c:c-1)-b}):Ft(this,v(this.Jc,a,b,c))};
g.wc=function(a){1==this.b?Dt(this,"insertVideo",{videoId:a}):Ft(this,v(this.wc,a))};
function Ht(a,b,c,d,e){var f=Bt(a);d=d||0;var h={videoId:b,currentIndex:d};vt(f,b,d);p(c)&&(tt(f,c),h.currentTime=c);p(e)&&(h.listId=e);Dt(a,"setPlaylist",h);e||Gt(a,f)}
g.Xc=function(a,b){if(1==this.b){if(a&&b){var c=Bt(this);vt(c,a,b);Gt(this,c)}Dt(this,"previous")}else Ft(this,v(this.Xc,a,b))};
g.gd=function(a,b){if(1==this.b){if(a&&b){var c=Bt(this);vt(c,a,b);Gt(this,c)}Dt(this,"next")}else Ft(this,v(this.gd,a,b))};
g.gc=function(){if(1==this.b){Dt(this,"clearPlaylist");var a=Bt(this);a.reset();Gt(this,a);this.u("remotePlayerChange")}else Ft(this,this.gc)};
g.mc=function(){1==this.b?Dt(this,"dismissAutoplay"):Ft(this,this.mc)};
g.bd=function(a){1==this.b?a?Dt(this,"setAutoplayMode",{autoplayMode:"ENABLED"}):Dt(this,"setAutoplayMode",{autoplayMode:"DISABLED"}):Ft(this,v(this.bd,a))};
g.dispose=function(){if(3!=this.b){var a=this.b;this.b=3;this.u("proxyStateChange",a,this.b)}xt.A.dispose.call(this)};
g.B=function(){It(this);this.h=null;this.i.clear();At(this,null);xt.A.B.call(this)};
function zt(a){A("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.j.push(this.h.subscribe(a,v(this.ze,a),this))},a)}
function It(a){A(a.j,function(a){this.h.unsubscribeByKey(a)},a);
a.j.length=0}
function Ft(a,b){var c=a.i;50>c.b.length+c.f.length&&a.i.f.push(b)}
function Et(a,b,c){var d=Bt(a);tt(d,c);-1E3!=d.b&&(d.b=b);Gt(a,d)}
function Dt(a,b,c){a.h.sendMessage(b,c)}
function Gt(a,b){It(a);a.h.setPlayerContextData(wt(b));zt(a)}
g.Xb=function(a){if((a!=this.b||2==a)&&3!=this.b&&0!=a){var b=this.b;this.b=a;this.u("proxyStateChange",b,a);if(1==a)for(;!this.i.isEmpty();)b=a=this.i,lb(b.b)&&(b.b=b.f,b.b.reverse(),b.f=[]),a.b.pop().apply(this);else 3==a&&this.dispose()}};
g.ze=function(a,b){this.u(a,b)};
function At(a,b){a.f&&(a.f.removeUpdateListener(a.I),a.f.removeMediaListener(a.l),a.hb(null));a.f=b;a.f&&(Mr("Setting cast session: "+a.f.sessionId),a.f.addUpdateListener(a.I),a.f.addMediaListener(a.l),a.f.media.length&&a.hb(a.f.media[0]))}
g.ie=function(a){if(!a)this.hb(null),At(this,null);else if(this.f.receiver.volume){a=this.f.receiver.volume;var b=Bt(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)Mr("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,Gt(this,b)}};
g.hb=function(a){Mr("Cast media: "+!!a);this.g&&this.g.removeUpdateListener(this.F);if(this.g=a)this.g.addUpdateListener(this.F),Jt(this),this.u("remotePlayerChange")};
function Jt(a){var b=a.g.media,c=a.g.customData;if(b&&c){var d=Bt(a);b.contentId!=d.videoId&&Mr("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.b=c.playerState;tt(d,a.g.getEstimatedTime());Gt(a,d)}else Mr("No cast media video. Ignoring state update.")}
g.he=function(a){a?(Jt(this),this.u("remotePlayerChange")):this.hb(null)};
g.oe=function(){var a=ot();a&&At(this,a)};
g.L=function(a){Jr("CP",a)};
function Ct(a,b){return u(function(a){this.L("Failed to "+b+" with cast v2 channel. Error code: "+a.code);a.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.L("Retrying "+b+" using MDx browser channel."),Dt(this,b,void 0))},a)}
;function Y(a,b,c){$r.call(this);this.i=NaN;this.R=!1;this.K=this.I=this.N=this.P=NaN;this.M=[];this.h=this.l=this.g=this.D=this.b=null;this.pd=a;this.M.push(T(window,"beforeunload",u(this.Ed,this)));this.f=[];this.D=new rt;this.X=b.id;this.b=Kt(this,c);this.b.subscribe("handlerOpened",this.me,this);this.b.subscribe("handlerClosed",this.je,this);this.b.subscribe("handlerError",this.ke,this);this.b.subscribe("handlerMessage",this.le,this);zr(this.b,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.D.videoId;ks()&&Xo("yt-remote-session-video-id",a)},this)}
z(Y,$r);g=Y.prototype;
g.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,h=b.index,k={videoId:d},l=b.currentTime,n=b.locationInfo;p(l)&&(k.currentTime=5>=l?0:l);e&&(k.playerParams=e);n&&(k.locationInfo=n);f&&(k.clickTrackingParams=f);c&&(k.listId=c);p(h)&&(k.currentIndex=h);c&&(this.D.listId=c);this.D.videoId=d;this.D.index=h||0;this.D.state=3;tt(this.D,l);this.h="UNSUPPORTED";Lt("Connecting with setPlaylist and params: "+lg(k));this.b.connect({method:"setPlaylist",params:lg(k)},
a,os())}else Lt("Connecting without params"),this.b.connect({},a,os());Mt(this)};
g.dispose=function(){this.J()||(this.u("beforeDispose"),Nt(this,3));Y.A.dispose.call(this)};
g.B=function(){Ot(this);Pt(this);Qt(this);O(this.I);this.I=NaN;O(this.K);this.K=NaN;this.g=null;vk(this.M);this.M.length=0;this.b.dispose();Y.A.B.call(this);this.h=this.l=this.f=this.D=this.b=null};
function Lt(a){Jr("conn",a)}
g.Ed=function(){this.j(2)};
function Kt(a,b){return new vr(Or(a.pd,"../../bc"),b)}
function Nt(a,b){a.u("proxyStateChange",b)}
function Mt(a){a.i=N(u(function(){Lt("Connecting timeout");this.j(1)},a),2E4)}
function Ot(a){O(a.i);a.i=NaN}
function Qt(a){O(a.P);a.P=NaN}
function Rt(a){Pt(a);a.N=N(u(function(){St(this,"getNowPlaying")},a),2E4)}
function Pt(a){O(a.N);a.N=NaN}
g.me=function(){Lt("Channel opened");this.R&&(this.R=!1,Qt(this),this.P=N(u(function(){Lt("Timing out waiting for a screen.");this.j(1)},this),15E3));
ss(xr(this.b),this.X)};
g.je=function(){Lt("Channel closed");isNaN(this.i)?ts(!0):ts();this.dispose()};
g.ke=function(a){ts();isNaN(this.F())?(Lt("Channel error: "+a+" without reconnection"),this.dispose()):(this.R=!0,Lt("Channel error: "+a+" with reconnection in "+this.F()+" ms"),Nt(this,2))};
function Tt(a,b){b&&(Ot(a),Qt(a));b==(yr(a.b)&&isNaN(a.i))?b&&(Nt(a,1),St(a,"getSubtitlesTrack")):b?(a.da()&&a.D.reset(),Nt(a,1),St(a,"getNowPlaying"),Ut(a)):a.j(1)}
function Vt(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.D.videoId&&(hc(b.params)?a.D.f=null:a.D.f=b.params,a.u("remotePlayerChange"))}
function Wt(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.D.listId=b.params.listId||a.D.listId;vt(a.D,c,d);a.u("remoteQueueChange")}
function Xt(a,b){b.params=b.params||{};Wt(a,b);Yt(a,b);a.u("autoplayDismissed")}
function Yt(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);tt(a.D,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.D.b&&(c=-1E3);a.D.b=c;c=Number(b.params.loadedTime);a.D.G=isNaN(c)?0:c;c=Number(b.params.duration);a.D.i=isNaN(c)?0:c;a.D.C=Number(b.params.liveIngestionTime);c=a.D;var d=Number(b.params.seekableStartTime),e=Number(b.params.seekableEndTime);c.l=isNaN(d)?0:d;c.w=isNaN(e)?0:e;1==a.D.b?Rt(a):Pt(a);a.u("remotePlayerChange")}
function Zt(a,b){if(-1E3!=a.D.b){var c=1085;switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.D.b=c;c=parseInt(b.params.currentTime,10);tt(a.D,isNaN(c)?0:c);a.u("remotePlayerChange")}}
function $t(a,b){var c="true"==b.params.muted;a.D.volume=parseInt(b.params.volume,10);a.D.muted=c;a.u("remotePlayerChange")}
function au(a,b){a.l=b.params.videoId;a.u("nowAutoplaying",parseInt(b.params.timeout,10))}
function bu(a,b){var c="true"==b.params.hasNext;a.D.j="true"==b.params.hasPrevious;a.D.hasNext=c;a.u("previousNextChange")}
g.le=function(a){a.params?Lt("Received: action="+a.action+", params="+lg(a.params)):Lt("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=rg(a.params.devices);this.f=eb(a,function(a){return new qr(a)});
a=!!ib(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
Tt(this,a);break;case "loungeScreenDisconnected":pb(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
Tt(this,!1);break;case "remoteConnected":var b=new qr(rg(a.params.device));ib(this.f,function(a){return a.equals(b)})||mb(this.f,b);
break;case "remoteDisconnected":b=new qr(rg(a.params.device));pb(this.f,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":Wt(this,a);break;case "nowPlaying":Xt(this,a);break;case "onStateChange":Yt(this,a);break;case "onAdStateChange":Zt(this,a);break;case "onVolumeChanged":$t(this,a);break;case "onSubtitlesTrackChanged":Vt(this,a);break;case "nowAutoplaying":au(this,a);break;case "autoplayDismissed":this.u("autoplayDismissed");break;case "autoplayUpNext":this.l=a.params.videoId||null;this.u("autoplayUpNext",this.l);break;case "onAutoplayModeChanged":this.h=
a.params.autoplayMode;this.u("autoplayModeChange",this.h);"DISABLED"==this.h&&this.u("autoplayDismissed");break;case "onHasPreviousNextChanged":bu(this,a);break;case "requestAssistedSignIn":this.u("assistedSignInRequested",a.params.authCode);break;default:Lt("Unrecognized action: "+a.action)}};
g.Te=function(){if(this.g){var a=this.g;this.g=null;this.D.videoId!=a&&St(this,"getNowPlaying")}};
Y.prototype.subscribe=Y.prototype.subscribe;Y.prototype.unsubscribeByKey=Y.prototype.ja;Y.prototype.Na=function(){var a=3;this.J()||(a=0,isNaN(this.F())?yr(this.b)&&isNaN(this.i)&&(a=1):a=2);return a};
Y.prototype.getProxyState=Y.prototype.Na;Y.prototype.j=function(a){Lt("Disconnecting with "+a);Ot(this);this.u("beforeDisconnect",a);1==a&&ts();wr(this.b,a);this.dispose()};
Y.prototype.disconnect=Y.prototype.j;Y.prototype.xa=function(){var a=this.D;this.g&&(a=this.D.clone(),vt(a,this.g,a.index));return wt(a)};
Y.prototype.getPlayerContextData=Y.prototype.xa;Y.prototype.Hb=function(a){var b=new rt(a);b.videoId&&b.videoId!=this.D.videoId&&(this.g=b.videoId,O(this.I),this.I=N(u(this.Te,this),5E3));var c=[];this.D.listId==b.listId&&this.D.videoId==b.videoId&&this.D.index==b.index||c.push("remoteQueueChange");this.D.b==b.b&&this.D.volume==b.volume&&this.D.muted==b.muted&&ut(this.D)==ut(b)&&lg(this.D.f)==lg(b.f)||c.push("remotePlayerChange");this.D.reset(a);A(c,function(a){this.u(a)},this)};
Y.prototype.setPlayerContextData=Y.prototype.Hb;Y.prototype.da=function(){var a=this.b.j.id,b=ib(this.f,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Y.prototype.getOtherConnectedRemoteId=Y.prototype.da;Y.prototype.F=function(){var a=this.b;return a.f.isActive()?a.f.f-w():NaN};
Y.prototype.getReconnectTimeout=Y.prototype.F;Y.prototype.aa=function(){return this.h||"UNSUPPORTED"};
Y.prototype.getAutoplayMode=Y.prototype.aa;Y.prototype.wa=function(){return this.l||""};
Y.prototype.getAutoplayVideoId=Y.prototype.wa;Y.prototype.qd=function(){if(!isNaN(this.F())){var a=this.b.f,b=a.b;b.stop();b.pc();a.start()}};
Y.prototype.reconnect=Y.prototype.qd;function Ut(a){O(a.K);a.K=N(u(a.j,a,1),864E5)}
function St(a,b,c){c?Lt("Sending: action="+b+", params="+lg(c)):Lt("Sending: action="+b);a.b.sendMessage(b,c)}
Y.prototype.Ya=function(a,b){St(this,a,b);Ut(this)};
Y.prototype.sendMessage=Y.prototype.Ya;function cu(a){as.call(this,"ScreenServiceProxy");this.W=a;this.f=[];this.f.push(this.W.$_s("screenChange",u(this.ef,this)));this.f.push(this.W.$_s("onlineScreenChange",u(this.ue,this)))}
z(cu,as);g=cu.prototype;g.fa=function(a){return this.W.$_gs(a)};
g.Gb=function(a){return!!this.W.$_c(a)};
g.get=function(a){return this.W.$_g(a)};
g.start=function(){this.W.$_st()};
g.add=function(a,b,c){this.W.$_a(a,b,c)};
g.remove=function(a,b,c){this.W.$_r(a,b,c)};
g.Db=function(a,b,c,d){this.W.$_un(a,b,c,d)};
g.B=function(){for(var a=0,b=this.f.length;a<b;++a)this.W.$_ubk(this.f[a]);this.f.length=0;this.W=null;cu.A.B.call(this)};
g.ef=function(){this.u("screenChange")};
g.ue=function(){this.u("onlineScreenChange")};
X.prototype.$_st=X.prototype.start;X.prototype.$_gspc=X.prototype.ff;X.prototype.$_gsppc=X.prototype.jd;X.prototype.$_c=X.prototype.Gb;X.prototype.$_g=X.prototype.get;X.prototype.$_a=X.prototype.add;X.prototype.$_un=X.prototype.Db;X.prototype.$_r=X.prototype.remove;X.prototype.$_gs=X.prototype.fa;X.prototype.$_gos=X.prototype.hd;X.prototype.$_s=X.prototype.subscribe;X.prototype.$_ubk=X.prototype.ja;function du(a){a=L("MDX_CONFIG")||a;bp();hs();eu||(eu=new Nr(a?a.loungeApiHost:void 0),us()&&(eu.b="../../api/loungedev"));fu||(fu=r("yt.mdx.remote.deferredProxies_")||[],x("yt.mdx.remote.deferredProxies_",fu));gu();var b=hu();if(!b){var c=new X(eu);x("yt.mdx.remote.screenService_",c);b=hu();var d=!1,e=void 0,f=void 0,h=!1;a&&(d=!!a.loadCastApiSetupScript,e=a.appId,f=a.theme,h=!!a.disableDial);bt(c,function(a){a?iu()&&pt(iu(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){Kj("yt-remote-receiver-availability-change")})},
d,e,f,h)}a&&!r("yt.mdx.remote.initialized_")&&(x("yt.mdx.remote.initialized_",!0),ju("Initializing: "+lg(a)),ku.push(P("yt-remote-cast2-availability-change",function(){Kj("yt-remote-receiver-availability-change")})),ku.push(P("yt-remote-cast2-receiver-selected",function(){lu();
Kj("yt-remote-auto-connect","cast-selector-receiver")})),ku.push(P("yt-remote-cast2-receiver-resumed",function(){Kj("yt-remote-receiver-resumed","cast-selector-receiver")})),ku.push(P("yt-remote-cast2-session-change",mu)),ku.push(P("yt-remote-connection-change",function(a){a?pt(iu(),"YouTube TV"):nu()||(pt(null,null),nt())})),d=ou(),a.isAuto&&(d.id+="#dial"),zl("desktop_enable_autoplay")&&(d.capabilities=["atp"]),d.name=a.device,d.app=a.app,(f=a.theme)&&(d.theme=f),ju(" -- with channel params: "+
lg(d)),pu(d),b.start(),iu()||qu())}
function ru(){var a=iu();if(!a)return null;var b=hu().fa();return Zr(b,a)}
function mu(a){ju("remote.onCastSessionChange_: "+Vr(a));if(a){var b=ru();b&&b.id==a.id?pt(b.id,"YouTube TV"):(b&&su(),tu(a,1))}else uu()&&su()}
function su(){qt()?kt().stopSession():ht("stopSession called before API ready.");var a=uu();a&&(a.disconnect(1),vu(null))}
function wu(){var a=uu();return a&&3!=a.getProxyState()?new xt(uu(),void 0):null}
function ju(a){Jr("remote",a)}
function hu(){if(!xu){var a=r("yt.mdx.remote.screenService_");xu=a?new cu(a):null}return xu}
function iu(){return r("yt.mdx.remote.currentScreenId_")}
function yu(a){x("yt.mdx.remote.currentScreenId_",a)}
function lu(){x("yt.mdx.remote.connectData_",null)}
function uu(){return r("yt.mdx.remote.connection_")}
function vu(a){var b=uu();lu();a||yu("");x("yt.mdx.remote.connection_",a);fu&&(A(fu,function(b){b(a)}),fu.length=0);
b&&!a?Kj("yt-remote-connection-change",!1):!b&&a&&Kj("yt-remote-connection-change",!0)}
function nu(){var a=ks();if(!a)return null;var b=hu().fa();return Zr(b,a)}
function tu(a,b){ru()&&ru();yu(a.id);var c=new Y(eu,a,ou());c.connect(b,r("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(a){Kj("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){uu()&&vu(null)});
vu(c)}
function qu(){var a=nu();a?(ju("Resume connection to: "+Vr(a)),tu(a,0)):(ts(),nt(),ju("Skipping connecting because no session screen found."))}
var eu=null,fu=null,xu=null;function gu(){var a=ou();if(hc(a)){a=js();var b=$o("yt-remote-session-name")||"",c=$o("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};x("yt.mdx.remote.channelParams_",a)}}
function ou(){return r("yt.mdx.remote.channelParams_")||{}}
function pu(a){a?(Xo("yt-remote-session-app",a.app),Xo("yt-remote-session-name",a.name)):(ap("yt-remote-session-app"),ap("yt-remote-session-name"));x("yt.mdx.remote.channelParams_",a)}
var ku=[];function zu(){this.f=D("watch-queue-loading-template");this.b=ro(this.f,[])}
;function Au(a){fo.call(this);this.l=a;this.X=0;this.j=this.I=this.i=this.F=this.w=this.h=this.K=null}
z(Au,fo);g=Au.prototype;
g.Aa=function(){Au.A.Aa.call(this);this.j=this.na();this.X=parseInt(M(this.j,"max-title-length"),10)||0;this.F=qj(this,"create-button");this.i=qj(this,"cancel-button");this.w=qj(this,"privacy-button");var a=rj(this);this.h=qj(this,"title-input");eg(a,this.h,"keyup",this.Tc);eg(a,this.h,"paste",this.Tc);eg(a,this.j,"reset",this.se);eg(a,this.j,"submit",this.te);this.K=qj(this,"create-playlist-widget-privacy-menu");this.I=qj(this,"is-selected");a=P("yt-uix-menu-item-clicked",u(this.ye,this));this.aa.push(a)};
g.ta=function(){Bu(this);this.j=this.I=this.i=this.F=this.K=this.w=this.h=null;Au.A.ta.call(this)};
g.setVideoIds=function(a){qj(this,"video-ids-input").value=a};
g.Tc=function(){var a=Db(this.h.value).length;lk(this.F,0<a&&(!this.X||a<=this.X))};
g.ye=function(a){be(this.K,a)&&(a=oe(a,"yt-ui-menu-item"),Cu(this,a),a=M(a,"value"),qj(this,"privacy-value-input").value=a)};
function Cu(a,b){var c=bm.getInstance();ce(E(V(c,"content"),a.w),Db(ke(b)));H(E("is-selected",a.K),"is-selected");G(b,"is-selected");c=M(b,"privacy-state");xj(a.w,"privacy-state",c)}
function Du(a,b){lk(a.F,b);a.i&&lk(a.i,b);lk(a.h,b);lk(a.w,b)}
function Bu(a){a.h.value="";var b=qj(a,"title-input-container");H(b,"yt-uix-form-error");Ud(E("yt-uix-form-error-message",b));lk(a.w,!0);(b=E("is-selected",a.K))&&a.I&&b!=a.I&&Cu(a,a.I);lk(a.F,!1);a.i&&lk(a.i,!0);lk(a.h,!0)}
g.te=function(a){a.preventDefault();a=this.j;var b={context:this,onSuccess:this.qe,onError:this.pe};b=void 0===b?{}:b;b.method=a.method.toUpperCase();if("POST"==b.method){var c=b,d=[];Zf(a,d,bg);c.postBody=d.join("&")}else{d=new Vf;Zf(a,d,ag);Wf(d);c={};for(var e=0;e<d.b.length;e++){var f=d.b[e];c[f]=d.f[f]}d=b.qa||{};nc(d,c);b.qa=d}Ok(a.action,b);Du(this,!1)};
g.qe=function(a,b){Bu(this);this.l&&Ea(this.l.xb)&&this.l.xb({playlistId:b.result.playlistId,playlistName:b.result.playlistName,Oe:b.result.playlistUrl});S("yt-uix-videoactionmenu-hide")};
g.pe=function(a,b){if(b&&b.errors&&b.errors.length){var c=qj(this,"title-input-container"),d=b.errors[0];G(c,"yt-uix-form-error");if(d){var e=E("yt-uix-form-error-message",c);e?e.innerHTML=d:(d=Od("SPAN","yt-uix-form-error-message",document.createTextNode(String(d))),d.setAttribute("role","alert"),c.appendChild(d))}Du(this,!0)}};
g.se=function(){Bu(this);this.l&&Ea(this.l.wb)&&this.l.wb()};function Eu(a){fo.call(this);this.l={xb:a.xb,wb:u(function(){Nm.getInstance().hide(this.na());Ea(a.wb)&&a.wb()},this)};
this.i=this.h=null}
z(Eu,fo);Eu.prototype.Aa=function(){Eu.A.Aa.call(this);this.h=D(M(this.na(),"dialog-id"));if(!this.h)throw Error("Cannot find create playlist widget dialog.");eg(rj(this),document,"click",this.j);var a=P("yt-uix-card-show",u(this.w,this));this.aa.push(a);a=E("create-playlist-widget-form",this.h);this.i=new Au(this.l);sj(this.i,a)};
Eu.prototype.ta=function(){this.h=null;this.i.dispose();this.i=null;Eu.A.ta.call(this)};
Eu.prototype.j=function(a){be(this.h,wk(a))||Nm.getInstance().hide(this.na())};
Eu.prototype.w=function(a){a==this.na()&&qj(this.i,"title-input").focus()};function Fu(){vl.call(this,"scroller");this.b={}}
z(Fu,vl);Aa(Fu);g=Fu.prototype;g.register=function(){xl(this,"mouseenter",this.Gc);xl(this,"mouseleave",this.vb)};
g.unregister=function(){yl(this,"mouseenter",this.Gc);yl(this,"mouseleave",this.vb);for(var a in this.b)this.vb(this.b[a]);this.b={};Fu.A.unregister.call(this)};
g.dispose=function(){for(var a in this.b)this.vb(this.b[a]);this.b={}};
g.Gc=function(a){var b=T(a,"mousewheel",u(this.Kd,this,a));xj(a,"scroller-mousewheel-listener",b);b=T(a,"scroll",u(this.nf,this,a));xj(a,"scroller-scroll-listener",b);a&&(b=Ga(a).toString(),this.b[b]=a)};
g.vb=function(a){var b=this.H(a,"scroller-mousewheel-listener")||"";xj(a,"scroller-mousewheel-listener","");var c=this.H(a,"scroller-scroll-listener")||"";xj(a,"scroller-scroll-listener","");vk(b);vk(c);xj(a,"scroller-scroll-listener","");a&&(a=Ga(a).toString(),delete this.b[a])};
g.Kd=function(a,b){var c=b||window.event;var d=0;"MozMousePixelScroll"==c.type?d=0==(c.axis==c.HORIZONTAL_AXIS)?c.detail:0:window.opera?d=c.detail:d=0==c.wheelDelta%120?"WebkitTransform"in document.documentElement.style?window.chrome&&0==navigator.platform.indexOf("Mac")?c.wheelDeltaY/-30:c.wheelDeltaY/-1.2:c.wheelDelta/-1.6:c.wheelDeltaY/-3;if(c=d)d=a.scrollTop,a.scrollTop+=c,d==a.scrollTop&&this.H(a,"scroller-allow-pagescroll")||b.preventDefault()};
g.nf=function(a){this.ab(a,"scroll-action");S("yt-dom-content-change",a)};function Gu(a){Ok("../../playlist_video_ajax@action_add_to_playlist=1",{method:"POST",qa:{feature:a.feature||null,authuser:a.Df||null,pageid:a.pageId||null},S:{video_ids:a.videoIds||null,source_playlist_id:a.sourcePlaylistId||null,full_list_id:a.fullListId||null,delete_from_playlists:a.Kf||null,add_to_playlists:a.Cf||null,plid:L("PLAYBACK_ID")||null},context:a.context,onError:a.onError,onSuccess:function(b,c){a.onSuccess.call(this,b,c)},
ib:a.ib,withCredentials:!1})}
;var Hu,Iu,W,Ju,Ku,Lu,Mu,Nu,Ou,Pu,Qu,Ru,Su,Tu,Uu,Z,ae,Vu,Wu,Xu,Yu,Zu;var $u;function av(a,b){this.type=a;this.videoIds=b||[]}
function bv(a,b){Ok("../../watch_queue_ajax",{method:"POST",qa:{action_check_playability:1},S:{video_ids:a.join(",")},onSuccess:function(a,d){d&&Ca(d)?b(d):b([])},
onError:function(){b([])}})}
function cv(a){q(a)&&(a=[a]);var b=new av(1,a);$u?dv(function(){A(a,function(a){$u.Yc(a)})},b,void 0):ev(b,a)}
function fv(a,b,c){var d=new av(2);$u&&dv(function(){$u.Jc(a,b,c)},d,void 0)}
function gv(a){bv([a],function(b){lb(b)||hv(a)})}
function hv(a){var b=new av(2);$u&&dv(function(){$u.wc(a)},b,void 0)}
function iv(a){var b=new av(2);$u&&dv(function(){$u.ac(a)},b,void 0)}
function jv(a,b,c){b?bv([b],function(d){lb(d)||kv(a,b,c)}):kv(a,b,c)}
function kv(a,b,c){$u&&dv(function(){b&&Ht($u,b,0,0,a)},void 0,c)}
function lv(a,b,c){bv(b,function(b){lb(b)||!kb(b,a)||mv(a,b,c)})}
function mv(a,b,c){$u&&dv(function(){var c=$u,e=Bt(c),f=bb(b,a);Dt(c,"setPlaylist",{videoId:a,videoIds:b.join(",")});vt(e,a,f);Gt(c,e)},void 0,c)}
function nv(){var a=new av(2);$u&&dv(function(){$u.stop();$u.gc()},a,void 0)}
function ov(a){$u=a;$u.subscribe("remoteQueueChange",function(){S("queue-change",new av(2))})}
function pv(){var a=wu();re($u);$u=null;a?ov(a):S("queue-change",new av(2))}
function dv(a,b,c){$u&&1==$u.b&&(a.call(m),c&&N(function(){c()},0),p(b)&&S("queue-change",b))}
function ev(a,b){Ok("../../watch_queue_ajax",{method:"POST",qa:{action_remove_from_watch_queue:1},S:{list:"WQ",video_ids:b.join(",")},onSuccess:function(){S("queue-change",a)},
onError:function(){}})}
var qv=[];var rv;function sv(){if(!rv){var a=D("watch-queue");if(!a)return[];rv=E("watch-queue-items-list",a)}if(!rv)return[];var b=[];a=Wd(rv);A(a,function(a){(a=M(a,"video-id"))&&b.push(a)});
return b}
;function tv(){S("yt-dom-content-change",Z)}
x("yt.www.watchqueue.loadThumbnails",tv);
function uv(){ae=D("watch-queue");Ou=E("watch-queue-control-bar",ae);Pu=E("watch-queue-count",Ou);Qu=E("yt-uix-button-dark-overflow-action-menu",Ou);Ru=E("prev-watch-queue-button",ae);Su=E("next-watch-queue-button",ae);Tu=E("play-watch-queue-button",ae);Uu=E("pause-watch-queue-button",ae);Z=E("watch-queue-items-list",ae);Vu=E("autoplay-control-bar",ae);Wu=E("yt-uix-form-input-checkbox-container",Vu);Xu=E("autoplay-label",Vu);Yu=E("autoplay-dismiss-bar",ae);Zu=E("up-next-item-container",ae);vv.push(xk(ae,
"click",wv,"yt-uix-button"));vv.push(xk(ae,"click",xv,"watch-queue-video"));vv.push(xk(ae,"click",yv,"control-bar-button"));vv.push(T(Z,we,zv));vv.push(xk(Z,we,Av,"watch-queue-item"));vv.push(xk(ae,"click",Bv,"autoplay-control-bar"));vv.push(xk(Yu,"click",Cv,"autoplay-dismiss-button"));vv.push(xk(null,"click",Dv,"watch-queue-video-menu-choice"));vv.push(xk(null,"click",Ev,"watch-queue-menu-choice"));Mu=new oo(D("watch-queue-count-msg").textContent,["count","total"]);Nu=new zu;Fv=0;Ju=!1;var a=D("watch-queue-save-as-playlist-widget");
a&&(Lu=new Eu({xb:Gv}),sj(Lu,a));Iu=null;du({device:"Desktop",app:"youtube-desktop",isSignedIn:L("LOGGED_IN")});du();qv.push(P("yt-remote-connection-change",pv));(a=wu())&&ov(a);Hv.push(P("init",Iv));Hv.push(P("dispose",Jv));Hv.push(P("yt-remote-before-disconnect",Kv));Hv.push(P("yt-remote-connection-change",Lv));Lv();Iv();Hv.push(P("queue-change",Mv));Hv.push(P("watch-queue-addto-video-added",Nv));Hv.push(P("watch-queue-addto-video-removed",Nv));Hv.push(P("watch-queue-addto-video-play-next",Ov));
Hv.push(P("watch-queue-addto-video-play-now",Pv));Hv.push(P("watch-queue-addto-playlist-added",Nv));Hv.push(P("watch-queue-addto-playlist-removed",Nv));Hv.push(P("watch-queue-addto-playlist-play-next",Qv));Hv.push(P("watch-queue-addto-playlist-play-now",Rv))}
function Sv(){var a=D("player-playlist");return a?$d()==a:!1}
function Tv(){var a=!1;if(!W||!$k(Hu)||!L("PAGE_NAME"))return Uv(),a;var b=Vv(),c=Wv();Xv()&&c&&b!=c&&(Yv(c),b=c);c=!!L("LIST_ID");if(b=Xv()&&!!b&&(b==L("VIDEO_ID")||b==Ku)&&!c){var d=D("player-playlist");d&&!Sv()&&(H(Hu,"mole-notification"),Td(d,ae,0),S("watch-queue-show",1),Zv(),a=!0)}else $d()!=Hu&&(Hu.appendChild(ae),S("watch-queue-show",0),tv(),a=!0);d=D("placeholder-playlist");b||c?bl(d):U(d);Uv();return a}
function Yv(a){if(Iu){var b=!!W,c=b&&!(a&&(a==L("VIDEO_ID")||a==Ku));bo(c);b&&Xv()&&(c?S("watch-queue-show",0):S("watch-queue-show",1));if(Iu.isReady())Iu.loadVideoById(a);else{var d=function(){Iu.loadVideoById(a);Iu.removeEventListener("onReady",d)};
Iu.addEventListener("onReady",d)}}}
function Vv(){return Iu&&Iu.isReady()?Iu.getVideoData().video_id:""}
function Wv(){return W?Bt(W).videoId:""}
function $v(a){Vv()!=aw()&&bw(Vv());cw(1==a);Tv()}
function Uv(){Iu&&(Vv()?Ju||bo(!!W&&($k(Hu)||dw())&&$d()==Hu):bo(!1))}
function Iv(){H(Hu,"mole-notification");Ku="";$n();Tv();var a=Iu;a&&a.addEventListener("onStateChange",$v)}
function Jv(){var a=Hu;H(a,"mole-expanded");G(a,"mole-collapsed");(a=Iu)&&a.removeEventListener("onStateChange",$v)}
function Xv(){return"watch"==L("PAGE_NAME")}
function ew(a){if(a!=aw()){var b=sv(),c=b[0];fw()&&(c=b[gw()+1]);a!=c&&(kb(b,a)?fv(a,bb(b,a),bb(b,c)):gv(a))}}
function wv(a){if(a.currentTarget==Ru){if(dw()){var b=Wd(Z);a=gw();b=b.length;a=(b+a-1)%b;hw(a);Zv();(b=aw())&&W&&W.Xc(b,a)}}else if(a.currentTarget==Su)dw()&&(a=Wd(Z),a=(gw()+1)%a.length,hw(a),Zv(),(b=aw())&&W&&W.gd(b,a));else if(a.currentTarget==Tu)U(Tu),bl(Uu),W?(a=sv(),!Wv()&&a[0]?Ht(W,a[0]):W.play()):Iu&&Iu.playVideo();else if(a.currentTarget==Uu)U(Uu),bl(Tu),W?W.pause():Iu&&Iu.pauseVideo();else if(F(a.currentTarget,"remove-item-watch-queue-button")){if(a=me(a.currentTarget,null,"watch-queue-item"),
b=M(a,"video-id"))G(a,"fade-out"),cv(b)}else F(a.currentTarget,"expand-video-watch-queue-button")&&iw(a.currentTarget)}
function Ev(a){var b=M(a.currentTarget,"action");jw[b](a.currentTarget);a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation();hm(bm.getInstance(),Qu)}
function yv(a){$d()==Hu&&a.currentTarget==Ou&&(a=wk(a),a&&F(a,"overflow-menu-choice")||(Nf(Hu,"mole-expanded"),Nf(Hu,"mole-collapsed")))}
function Dv(a){var b=M(a.currentTarget,"action");kw[b](a.currentTarget)}
function zv(){H(Hu,"mole-notification");F(Hu,"mole-expanded")&&tv();hm(bm.getInstance(),Qu)}
function Av(a){F(a.currentTarget,"fade-out")&&(Ud(a.currentTarget),bw(Wv()),lw());tv()}
function xv(a){a=me(a.currentTarget,null,"watch-queue-item");if(!F(a,"currently-playing")){var b=Wd(Z);b=bb(b,a);hw(b);(a=M(a,"video-id"))&&W&&Ht(W,a,0,b)}}
function Bv(){var a=!F(Wu,"checked");W&&W.bd(a);mw(a)}
function Cv(){W&&W.mc()}
function Gv(a){var b=a.playlistId,c=a.Oe;b&&c&&(a={videoIds:sv().join(","),fullListId:b,onSuccess:function(){am(c)}},Gu(a))}
function iw(a){F(a,"disabled")||(a=M(a,"video-id"))&&nw(a)}
function fw(){return!!E("currently-playing",Z)}
function gw(){var a=E("currently-playing",Z);if(a){var b=Wd(Z);return bb(b,a)}return 0}
function aw(){var a=E("currently-playing",Z);return a?M(a,"video-id")||"":""}
function bw(a){a=bb(sv(),a);0<=a?fw()&&gw()==a||(hw(a),Zv()):ow()}
function hw(a){if(dw()){ow();var b=Wd(Z);b[a]&&G(b[a],"currently-playing");pw()}}
function ow(){if(dw()){var a=E("currently-playing",Z);a&&H(a,"currently-playing");pw()}}
function Ov(a){ew(a);Nv()}
function Pv(a){W&&Ht(W,a);a!=aw()&&(Yv(a),Nv());Ku=a}
function Qv(a){sv();fw()&&gw();iv(a);Nv()}
function Rv(a,b,c){b&&(c?lv(b,c,function(){Ku=b}):jv(a,b,function(){Ku=b}),Nv())}
function Nv(){$k(Hu)&&G(Hu,"mole-notification")}
function qw(){var a=fw()?gw()+1:0,b=sv().length;0<a&&0<b?ce(Pu,to(Mu,{count:a,total:b})):Sd(Pu)}
function cw(a){a?(U(Tu),bl(Uu)):(U(Uu),bl(Tu))}
function pw(){var a=sv().length,b=1>=a,c=fw()?gw():-1;Ru.disabled=b||0==c;Su.disabled=b||c==a-1;qw();if(0!=a){var d=null;a=Wd(Z);A(a,function(a){var b=M(a,"video-id"),c=E("play-next",a);Lf(E("goto-video-page",a),"disabled",Xv()&&b==L("VIDEO_ID")&&!L("LIST_ID"));F(a,"currently-playing")?(d=a,U(c)):d?(d=null,Lf(c,"disabled",!0)):Lf(c,"disabled",!1)})}}
function lw(){pw();lb(sv())?rw():sw();S("watch-queue-update")}
function tw(){Fv=0;O(uw);uw=NaN}
function vw(){Ju=!1;isNaN(uw)&&(uw=N(function(){uw=NaN;Fv++;ww()},Math.min(3E4,1E3*Math.pow(2,Fv))))}
function dw(){var a=Xd(Z);return!!a&&F(a,"watch-queue-item")}
function ww(){if(!Ju){Ju=!0;var a={action_get_watch_queue_items:1,list:$u?Bt($u).listId:"WQ"};Ok("../../watch_queue_ajax",{method:"GET",qa:a,onSuccess:xw,onError:vw,va:vw});if(dw())sw();else{Sd(Z);a=Z;var b=to(Nu.b,{},void 0);b=Eb(b);var c=Bb(b);c&&(b="<table><tbody>"+b+"</tbody></table>");b=Rd(gg(b));c&&(b=Xd(Xd(b)));a.appendChild(b);lw()}}}
function xw(a,b){Ju=!1;if(Z&&b&&(b.html||!Wv())&&(tw(),W)){var c=sv(),d=[],e=mk(b.html),f=db(e.childNodes,function(a){return Zd(a)});
A(f,function(a){a=M(a,"video-id");d.push(a)});
0==c.length&&Sd(Z);if(0==d.length)Sd(Z),S("watch-queue-empty"),lw();else if(!vb(c,d)){if(d.length==c.length+1){for(var h=0;h<c.length&&c[h]==d[h];)h++;var k=rb(c);tb(k,h,0,d[h]);if(vb(k,d)){Td(Z,f[h],h);G(f[h],"fade-in");N(function(){H(f[h],"fade-in")},0);
bw(Wv());tv();lw();return}}if(d.length==c.length-1){for(e=0;e<d.length&&c[e]==d[e];)e++;k=rb(c);ob(k,e);if(vb(k,d)){c=Wd(Z);G(c[e],"fade-out");bw(Wv());return}}Sd(Z);lb(f)||(A(f,function(a){Z.appendChild(a)}),tv(),bw(Wv()));
lw()}}}
function yw(a,b){if(Zu)if(b&&b.html){var c=mk(b.html);c=db(c.childNodes,function(a){return Zd(a)});
1!=c.length?U(Zu):(c=c[0],Sd(Zu),Zu.appendChild(c),S("yt-dom-content-change",Zu),bl(Zu))}else U(Zu)}
function Zv(){var a=E("currently-playing",Z);if(a){var b=Fu.getInstance(),c=Z;if(c&&a&&(a=bb(Fd(V(b,"scroll-unit"),c),a),0<=a&&!(!c||isNaN(a)||0>a)&&(b=Fd(V(b,"scroll-unit"),c),!(0>=b.length)))){a>=b.length&&(a=b.length-1);if(b.length){var d=b[0];var e=d.offsetHeight;1<b.length&&(e=b[1].offsetTop-d.offsetTop);d=e}else d=0;e=c.offsetHeight;a>Math.max(Math.floor(c.scrollTop/d),0)-1&&(d=Math.floor(e/d),e=b.length,a+d>e&&(a=e-d+1));0>a&&(a=0);a=b[a].offsetTop;c&&!isNaN(a)&&(0>a&&(a=0),c.scrollTop=a,xj(c,
"scroller-offset",a+""),S("yt-dom-content-change",c))}}tv()}
function nw(a){a=eh("../../watch",{v:a});am(a)}
function zw(a){Xv()&&(a!=L("VIDEO_ID")||L("LIST_ID")?(N(function(){nw(a)},100),Ku=a):Tv())}
function Kv(a){Aw=a}
function Lv(){var a=wu();re(W);W=null;tw();Sd(Z);lw();if(a){W=a;W.subscribe("proxyStateChange",Bw);W.subscribe("remotePlayerChange",Cw);W.subscribe("autoplayModeChange",Dw);W.subscribe("autoplayUpNext",Ew);var b=a.h.getAutoplayMode();Dw(b);b=a.h.getAutoplayVideoId();Ew(b);W.subscribe("autoplayDismissed",Fw);W.subscribe("nowAutoplaying",Gw);Aw=null;b=Bt(a).videoId;L("LIST_ID")&&b&&(b=eh("../../watch",{v:b}),am(b))}else rw();2!=Aw&&($n(),S("watch-queue-remote-connection",!!a))}
function Dw(a){"UNSUPPORTED"==a?U(Vu):(a="ENABLED"==a,Lf(Wu,"checked",a),mw(a),bl(Vu))}
function Ew(a){W&&(a?Ok("../../watch_queue_ajax",{method:"GET",qa:{action_get_watch_queue_item:1,video_id:a},onSuccess:yw,onError:U(Zu),va:U(Zu)}):U(Zu))}
function Fw(){G(Yu,"fade-out")}
function Gw(){H(Yu,"fade-out")}
function mw(a){a=a?Mp("MDX_AUTOPLAY_ON"):Mp("MDX_AUTOPLAY_OFF");ce(Xu,a)}
function sw(){bl(Hu);Tv()||S("watch-queue-show",$d()==Hu?0:1)}
function rw(){$d()!=Hu&&Hu.appendChild(ae);var a=D("placeholder-playlist");L("LIST_ID")?bl(a):U(a);a=Hu;H(a,"mole-expanded");G(a,"mole-collapsed");U(Hu);Uv();S("watch-queue-hide",0)}
function Bw(a,b){tw();1==b&&ww()}
function Cw(){var a=Bt(W);cw(1==a.b)}
function Mv(){if(W){var a=aw(),b=Wv();b&&b!=a&&bw(b);b&&(Sv()||Ku==b)&&zw(b);ww()}}
var jw={"remove-all":function(){nv();Sd(Z);lw();S("watch-queue-empty");rw()},
"save-as-playlist":function(){if(!lb(sv())){var a=Lu;Nm.getInstance().show(a.na())}},
disconnect:function(){su()}},kw={"play-next":function(a){F(a,"disabled")||(a=M(a,"video-id"))&&ew(a)},
"goto-video-page":iw},vv=[],Hv=[],Fv=0,uw=NaN,Aw=null;x("yt.www.guide.setup",tp);x("yt.www.guide.selectGuideItem",function(a){if(io){var b=null,c=E("guide-item-selected",io);c&&(b=M(c,"serialized-endpoint")||"");b!=a&&(b&&H(c,"guide-item-selected"),a&&(a=Ip(a))&&G(a,"guide-item-selected"))}});
x("yt.www.masthead.dismissReturnToMobileMessage",function(){Yk("a=NO_MWEB",void 0);U(D("return-to-mobile"))});
x("yt.www.masthead.dismissChromeAlert",function(){var a=ip.getInstance();np(169,!0);a.save()});
x("yt.www.masthead.dismissKevlarPromo",function(){var a=ip.getInstance();np(173,!0);a.save()});
x("yt.www.masthead.dismissTosAlert",function(){var a=ip.getInstance();np(160,!0);a.save()});
x("yt.www.masthead.handleAccountPickerClick",function(){var a=D("yt-masthead-multilogin");if(M(a,"loaded"))pq();else{var b=Kp();b[L("XSRF_FIELD_NAME",void 0)]=L("XSRF_TOKEN",void 0);spf.load("../../delegate_account_ajax",{method:"POST",postData:dh(b),onDone:function(){xj(a,"loaded","true");pq()}})}});
x("yt.www.notifications.inbox.handleNotificationsClick",function(){Vp(0);if(!$p&&(F(bq,"yt-high-priority-notification")&&(hq(),aq&&dq&&(Nm.getInstance().show(dq),G(aq,"yt-uix-clickcard-active"))),!M(cq,"loaded"))){var a={action_get_notifications_flyout:1};a[L("XSRF_FIELD_NAME",void 0)]=L("XSRF_TOKEN",void 0);spf.load("../../feed_ajax",{method:"POST",postData:dh(a),onDone:function(){xj(cq,"loaded","true");var a=dq;H(a,"sb-notif-on");G(a,"sb-notif-off");xk(cq,"click",lq,"yt-lockup-notification")}})}});
x("yt.www.masthead.loadSearchbox",rq);x("yt.net.cookies.set",Rl);x("yt.net.cookies.remove",Sl);x("yt.www.picker.load",function(a){var b=M(a,"picker-key"),c=M(a,"picker-position"),d="yt-picker-"+b+"-"+c;if(c=D(d))a=M(a,"button-menu-id")==d,d=M(c,"loaded"),mr(c,b,!!a,!!d)});
x("yt.www.picker.displayLang",function(){lr("language")});
x("yt.www.picker.applyGrid",or);
x("ytbin.www.pageframe.setup",function(){Yj("GUIDE_DELAYLOADED_CSS");Yj("PAGE_FRAME_DELAYLOADED_CSS",v(H,document.body,"delayed-frame-styles-not-in"),L("WAIT_TO_DELAYLOAD_FRAME_CSS")?"yt-www-pageFrameCssNotifications-load":null);bk=D("a11y-announcements-container");ck=D("a11y-announcements-message");P("a11y-announce",Dk);P("init",Ak);if(Bk=D("a11y-skip-nav"))Ak(),T(Bk,"click",Ck);null!=dk||ek();dk&&(Jf(document.body,["yt-high-contrast-mode","yt-high-contrast-mode-"+dk]),Yj("HIGH_CONTRAST_MODE_CSS"));
E("guide-module-loading")||tp();R.init();mq=E("yt-masthead-user-icon");xk(D("ticker"),"click",qq,"yt-uix-close");E("exp-searchbox-redesign")&&T(D("yt-masthead-content"),"click",uq);rq();fq();Rq();(Hu=D("watch-queue-mole"))?uv():du({device:"Desktop",app:"youtube-desktop",isSignedIn:L("LOGGED_IN")});L("YOODLE_IS_ANIMATED")&&Pj(L("YOODLE_JS_URL",void 0),function(){r("yt.www.masthead.AnimatedYoodle.init")(L("YOODLE_ANIMATION_FRAMES"),L("YOODLE_ANIMATION_DURATION"),L("YOODLE_ANIMATION_DELAY"),L("YOODLE_STOP_ON_LAST_FRAME"))});
L("SAFETY_MODE_PENDING")&&lr("safetymode")});
x("ytbin.www.pageframe.cancelSetup",function(){tq()});}).call(this);

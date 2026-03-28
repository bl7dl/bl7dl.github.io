(function(){var g,ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var oa;a:{var qa={Rf:!0},ta={};try{ta.__proto__=qa;oa=ta.Rf;break a}catch(a){}oa=!1}la=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=la;
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,e,d){a=b(a,e);d&&Reflect.setPrototypeOf(a,d.prototype);return a}}return function(a,b,d){void 0===d&&(d=a);
d=ja(d.prototype||Object.prototype);return Function.prototype.apply.call(a,d,b)||d}})();
var za=this;function Aa(a){return void 0!==a}
function Ga(a){return"string"==typeof a}
function Ha(a){a=a.split(".");for(var b=za,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ia(){}
function Ja(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Ka(a){var b=Ja(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function La(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ma(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,e);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function Sa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa=Ma:Sa=Ra;return Sa.apply(null,arguments)}
var Ta=Date.now||function(){return+new Date};
function Ua(a,b){var c=a.split("."),e=za;c[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+c[0]);for(var d;c.length&&(d=c.shift());)!c.length&&Aa(b)?e[d]=b:e[d]&&e[d]!==Object.prototype[d]?e=e[d]:e=e[d]={}}
function Va(a,b){function c(){}
c.prototype=b.prototype;a.Fa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.mj=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var Wa,Xa,Ya,Za,$a,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb,Cb,Db,Eb,Fb,Gb,Hb,Ib,Jb,Kb,Lb,Mb,Pb,Qb,Rb,Sb,Tb,Ub,Vb,Wb,Xb,Yb,Zb,$b,ac,bc,cc,dc,ec,fc,gc,hc,ic,jc,kc,lc,mc,nc=/^[6-9]$/,oc={Mf:0,Qd:1,Lf:2,kb:3},pc={EMPTY:0,Cf:1,Dd:2},qc={Bf:1,Df:2,Qi:3,zf:4,Ef:5,Yi:6,Mi:7,pb:8},rc={DONT_CARE:1,wf:2,Of:3},vc={Hd:0,Nf:1,kb:2},wc=[23,24],J={Qf:0,Ji:114,fa:115,Ia:116,U:117,Ja:494,I:118,ta:119,ga:374,ha:120,ka:121,Md:122,W:123,va:124,ob:125,Gf:230,Vi:553,ca:126,la:127,S:128,
Pd:343,Ma:129,Ii:231,sa:130,vf:131,Ki:237,Li:570,Si:132,lb:134,ua:189,Ff:246,Ui:264,Ti:256,mb:133,Hf:184,Jf:419,Zi:503,aj:578,bj:579,cj:505,fj:516,dj:509,ej:512,xa:173,Ni:568,Oi:569,Gd:135,Yb:136,cc:137,Od:138,Na:139,xf:140,Id:141,Kd:142,Ld:240,Kf:143,Pf:144,fb:347,Wb:191,gb:150,Ha:145,Ed:146,Ka:147,gj:148,Wi:245,Ad:155,Ga:149,hb:154,Jd:311,Zb:153,RENDERER:152,La:156,nb:151,dc:158,Nd:294,If:157,wa:160,Pi:328,eb:159},xc={Bd:161,Rd:162};function yc(a){return{Fc:function(){return a.Fc()},
da:function(){return a.da()},
Y:function(){return a.Y()}}}
;(function(){function a(a){for(var b=[],e=0,d;d=a[e++];)b.push(d.api||{a:d.Kc,b:d.N,c:d.Ba,d:d.B,e:d.Rc,f:d.Ah,g:d.wh,i:d.Jc,j:d.getParameters,k:d.Qc,l:d.Xg});return b}
Wa=function(a){var b={};if(a)for(var e=0;e<a.length;++e)b[a[e]]=!0;return b};
Xa=function(b){var c=a(b.Y());return b.api||{a:b.da,b:function(){return c},
c:b.Fc}};
Ya=function(a){return a?(a=a.toLowerCase(),"zh-tw"==a||"zh-cn"==a||"ja"==a||"ko"==a):!1};
Za=function(){return(new Date).getTime()};
$a=function(a){return"string"==typeof a};
ab=function(a){return"number"==typeof a}})();function zc(){return{oa:function(){return{clientName:"hp",requestIdentifier:"hp",gc:"google.com",kf:"",Gb:"en",Yd:"",Te:"",Vb:"",authuser:0,Wh:"",vd:"",ge:!1,Ye:"",nd:"",connectionType:0,yk:null,nf:!1,lk:!1,Ie:!1,Rb:Wa([19,5,0]),Pj:!1,lg:!0,pg:10,kg:!0,ee:!0,uj:!1,vg:!1,Th:!1,Oe:!1,bk:!1,Vj:!1,kj:!0,tk:"en",He:!0,hg:!1,Ch:500,Wc:!1,qh:!0,Uj:!0,Fb:!1,Lb:"",Re:"../../../www.google.com/textinputassistant",Se:"",Zh:7,Qj:!1,Rj:!1,xh:!1,th:!0,yh:!1,Fe:!1,pi:!1,oi:!1,Sb:1,Pe:!0,zb:!1,Bc:!1,fe:!1,ci:10,Uc:!1,qj:0,
Tj:!1,di:!0,ng:!1,Oa:document.body,zh:!0,lf:null,yb:{},wj:{},gk:0,wg:!1,Fh:!0,ya:!1,xj:!1,sk:null,mg:!1,Vh:null,Bi:null,de:!1,Eh:!0,Xf:!1,xk:1,nj:1,spellcheck:!1,Qe:!1,searchText:"Search",Cc:"I'm  Feeling Lucky",ri:"",learnMoreText:"Learn more",We:"Remove",Ve:"This search was removed from your Web History",hintText:"",tj:"Did you mean:",Yh:"",pk:"",uk:"Search by voice",tg:!1,Ih:null,Zc:0,Jh:0,cd:"",wd:"",isRtl:!1,Pa:"absolute",sh:!1,De:!1,md:null,Ee:!0,vk:0,vb:[0,0,0],jg:null,Ei:null,Ud:[0],Vd:0,
hi:1,xd:"",Fi:"",Di:"",Dc:null,sg:"",rg:"",oj:1,Xd:{},Vf:!0}}}}
;var Ac=/<\/?(?:b|em)>/gi,Bc={uf:8,pb:9,Cd:13,Xb:27,Xi:32,rf:37,tf:38,sf:39,qf:40,DELETE:46,Ri:190};var Q=function(){function a(a,b,c){f[a]=c;k[a]=[b]}
function b(a,b,d){var e=l[a];e?e!=c&&(l[a]=c):l[a]=d;(e=k[a])?e.push(b):k[a]=[b];h[b]=d}
var c=bb,e=0,d={},f={},h={},l={},k={},n=1E4;return{Hj:function(){return e++},
Gj:function(){return n++},
Ue:a,ik:function(b,c){var d=n++;a(b,d,c);return d},
register:b,jk:function(a,c){var d=n++;b(a,d,c);return d},
Eg:function(){return k},
oa:function(a,b){var e=d[a];return e?e:(e=f[a])?d[a]=e():b?(e=h[b])?e():null:(e=l[a])&&e!=c?e():null}}}();function Cc(a,b,c,e,d,f){function h(){if(m){for(var a=0,b;b=u[a++];)b.O&&b.O();m=!1}}
function l(a){for(var b in a){var c=b,d=a[c];if(d!=p.Bd)if(t[c]){for(var e=d,f=v[c]||[],A=0;A<e.length;++A)(d=k(c,e[A]))&&f.push(d);v[c]=f}else(d=k(c,d))&&(B[c]=d)}}
function k(a,b){if(b&&b instanceof Object)var c=b;else if(c=y.oa(a,b),!c)return null;if(c.Qa){var d=c.Qa();if(d)for(var e=0,k,p,f;k=d[e++];){f=!1;p=k.B();if(t[p]){if(f=x[p]){f.push(k);continue}f=!0}x[p]=f?[k]:k}}w.push([c,a]);u.push(c);return c}
function n(a){for(var b=J.Qf,c=0,d;d=w[c++];)d[0]==a&&(b=d[1]);return b}
function q(a,b){var c=cb(a.B(),r),d=cb(b.B(),r);return 0>c?1:0>d?-1:c-d}
var p=xc,t=Wa([J.eb,J.Ad,J.Ga,J.Zb,J.hb,J.Jd,J.RENDERER,J.La,J.Md,J.nb,J.dc,J.Nd,J.wa]),A=[J.Ha,J.U,J.I,J.ta,J.ga,J.ca,J.fa,J.Ia,J.ha,J.Ka,J.ka,J.mb,J.W,J.va,J.ob,J.la,J.S,J.Pd,J.Ma],r=[J.la,J.Ga,J.lb,J.W,J.ka,J.ca,J.I,J.fa,J.S,J.wa,J.xa,J.ta,J.Ia,J.RENDERER,J.Zb,J.Ma,J.ha,J.ga,J.va,J.dc,J.Ad,J.vf,J.sa,J.Ka,J.Id,J.Kd,J.cc,J.Ld,J.Kf,J.Od,J.Pf,J.Na,J.xf,J.Gd,J.Yb],B={},v={},x={},w=[],u=[],m=!1,y=Q,D={G:function(a){h();for(var b=0,c;c=u[b++];)c.G&&c.G(a);m=!0},
O:h,isActive:function(){return m},
get:function(a,b){var c=B[a];if(c)return c.D?c.D(n(b)):{}},
P:function(a,b){var c=v[a];if(c){for(var d=[],e=n(b),k=0,p;p=c[k++];)d.push(p.D?p.D(e):{});return d}return[]},
Aa:function(){return a},
Ta:function(){return d},
yj:function(a,b){var c=v[J.eb];if(c)for(var d=0,e;e=c[d++];)if(e.F()==a)return e.D?e.D(n(b)):{};return null}};
(function(){if(f.Vf){var d=y.Eg(),r,h;for(h in d){var n=h;var v=d[n];var w=t[n];if(r=b[n]){if(r!=p.Bd&&w&&r.length){w=n;var L;n=void 0;r=r.slice(0);for(var W=[],X={},ia=0;L=r[ia++];)L instanceof Object&&(n=L.F(),X[n]||(W.push(L),X[n]=1),r.splice(--ia,1));L=Wa(r);L[p.Rd]&&(L=Wa(r.concat(v)),delete L[p.Rd]);for(n in L)X[n]||W.push(parseInt(n,10));b[w]=W}}else b[n]=w?v:v[0]}}l(b);for(d=0;h=A[d++];)b[h]||(w=k(h,void 0))&&(B[h]=w);l(x);u.sort(q);for(d=0;h=u[d++];)h.R&&h.R(c,e);a.gd(e,c.qb());e.Uf();for(d=
0;h=u[d++];)h.H&&h.H(D);for(d=0;h=u[d++];)h.setup&&h.setup(f);for(d=0;h=u[d++];)h.G&&h.G(f);m=!0})();
return D}
;function Dc(a,b,c){function e(){return a}
function d(){return G}
function f(){return R}
function h(){return b}
function l(){return c||""}
function k(a,b){t(a,b)}
function n(a,b){t(a,b,!0)}
function q(){w||(u=m=!0)}
function p(){D=!0}
function t(a,b,c){w||(u=!0,r[a]=b,c&&(B[a]=b))}
var A=fb(),r={},B={},v,x,w=!1,u=!1,m=!1,y=!1,D=!1,O={getId:function(){return A},
se:function(){var a=parseInt(A,36);return isNaN(a)?-1:a},
da:e,ue:d,pa:f,Ra:h,getParameters:function(){return r},
ke:function(){return v},
bh:l,Sc:function(){return x},
je:function(){return{da:e,ue:d,pa:f,Ra:h,bh:l,setParameter:k,pd:n,ug:q,Wf:p}},
setParameter:k,pd:n,ug:q,Wf:p,Ph:function(){return m},
Gh:function(){u=y=!0},
isReusable:function(d,e,k){return!u&&a==d&&b.equals(e)&&c==k},
Ne:function(){return y},
Je:function(){return D},
qg:function(){w||(x=Za(),"cp"in B||n("cp",b.Bb()),t("gs_id",A),v=db(B)+":"+a,u=w=!0)}};
var G=a.toLowerCase();var R=eb(G);return O}
;function Ec(a,b,c,e,d,f){function h(){return!!b&&!!b[0]}
var l,k=!0,n,q={ja:function(){return a},
da:function(){return a.da()},
Hc:function(){return h()?b[0]:null},
Y:function(){return b},
qa:h,getParameters:function(){return c},
Le:function(){return e},
dd:function(){return d},
Nh:function(){return f},
B:function(){return k},
pe:function(){n||(n=yc(q));return n},
Fc:function(){return l}};
b?b.length&&33==b[0].B()&&(d=k=!1):b=[];c?l=c.getObject("t"):c=Fc;return q}
;function Gc(a,b,c,e,d,f){function h(a){if(d)for(var b=0,c;c=a[b++];)if(-1!=cb(c,d))return!0;return!1}
var l=!1,k={Kc:function(){return a},
N:function(){return b},
Ba:function(){return c},
B:function(){return e},
Qc:function(){return f.getString("za")},
Xg:function(){return f.getString("zb")},
Rc:function(){return d||[]},
Ah:function(a){return!!d&&h([a])},
wh:h,getParameters:function(){return f},
Jc:function(){return l}};
switch(e){case 0:case 32:case 38:case 39:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:l=!0}f||(f=Fc);return k}
;(function(){var a=/\s/g,b=/\u3000/g,c=/^\s/,e=/\s+/,d=/\s+/g,f=/^\s+|\s+$/g,h=/^\s+$/,l=/<[^>]*>/g,k=/&nbsp;/g,n=/&#x3000;/g,q=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],p=document.getElementsByTagName("head")[0],t=0;hb=function(a,b){function c(){return b}
void 0===b&&(b=a);return{Bb:c,ze:function(){return a},
Vg:c,Sj:function(){return a<b},
equals:function(c){return c&&a==c.ze()&&b==c.Vg()}}};
gb=function(a,b,c,d){if(null==b||""===b){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))};
db=function(a){var b=[],c;for(c in a)gb(c,a[c],b);return b.join("&")};
ib=function(a){return!!a&&!h.test(a)};
jb=function(a){for(var b=q.length,c=0;c<b;c+=2)a=a.replace(q[c],q[c+1].source);return a};
kb=function(a){for(var b=q.length,c=0;c<b;c+=2)a=a.replace(q[c+1],q[c].source);a=a.replace(k," ");return a.replace(n,"\u3000")};
lb=function(a){return a.replace(Ac,"")};
mb=function(a){return a.replace(l,"")};
nb=function(c){return c&&(-1<c.indexOf(" ")||e.test(c))?(c=c.replace(b,"&#x3000;"),c.replace(a,"&nbsp;")):c};
eb=function(a,b){return a&&(-1<a.indexOf(" ")||e.test(a))?(a=a.replace(d," "),a.replace(b?f:c,"")):a};
ob=function(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b};
pb=function(a,b){return a||b?!!a&&!!b&&a.toLowerCase()==b.toLowerCase():!0};
qb=function(a){window.clearTimeout(a)};
bb=function(){};
tb=function(){return p};
fb=function(){return(t++).toString(36)};
ub=function(a){return nc.test(a)};
cb=function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1};
vb=function(a,b){return a.X()-b.X()};
wb=function(a,b){return b.X()-a.X()};
xb=function(a){var b={},c;for(c in a)b[c]=a[c];return b}})();function Hc(a){return{contains:function(b){return b in a},
zj:function(b){return!!a[b]},
we:function(b){return a[b]||0},
getString:function(b){return a[b]||""},
getObject:function(b){return a[b]||null}}}
var Fc=Hc({});(function(){function a(a,b,c){a=document.createElement(a);b&&(a.className=b);c&&(a.id=c);return a}
function b(b){return a("div",b)}
function c(a,b){var c=a.getElementsByTagName("input");if(c)for(var d=0,e;e=c[d++];)if(e.name==b&&"submit"!=e.type.toLowerCase())return e;return null}
function e(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function d(a){return a?a.ownerDocument||a.document:window.document}
function f(a){return a?(a=d(a),a.defaultView||a.parentWindow):window}
var h=void 0!=document.documentElement.style.opacity,l={rtl:"right",ltr:"left"};Db=function(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(p){}};
Eb=function(a){try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var e=a.createTextRange(),k=d(a).selection.createRange();e.inRange(k)&&(e.setEndPoint("EndToStart",k),b=e.text.length,e.setEndPoint("EndToEnd",k),c=e.text.length)}if(void 0!==b)return hb(b,c)}catch(A){}return null};
Fb=function(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(p){a=null}}return{yd:b,ra:c}};
Gb=function(a){try{return d(a).activeElement==a}catch(n){}return!1};
Hb=function(a){return 38==a||40==a};
Ab=a;Ib=function(){var b=a("table");b.cellPadding=b.cellSpacing=0;b.style.width="100%";return b};
Jb=b;Kb=function(a){a=b(a);var c=a.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";return a};
Lb=function(a,b){a.innerHTML!=b&&(b&&(yb?b=nb(b):zb&&(b='<pre style="font:inherit;margin:0">'+b+"</pre>")),a.innerHTML=b)};
Mb=function(a,b){var c=0,d=a.style;"INPUT"!=a.nodeName&&(c+=1);d.left=d.right="";d[b]=c+"px"};
Pb=function(a){return"rtl"==a?"right":"left"};
Qb=function(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=l[b])};
Rb=function(b,d,e){if(c(b,d))return null;var p=a("input");p.type="hidden";p.name=d;e&&(p.value=e);return b.appendChild(p)};
Sb=c;Tb=function(a){var b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))};
Ub=e;Vb=function(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return e(a)};
Wb=function(a,b){b.parentNode.insertBefore(a,b.nextSibling)};
Xb=function(a){a=a.insertCell(-1);var b=Ab("a");b.href="#ifl";b.className="gssb_j gss_ifl";a.appendChild(b);return b};
Yb=function(a){var b=f(a);return(a=b.getComputedStyle?b.getComputedStyle(a,""):a.currentStyle)?a.fontSize:null};
Zb=function(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{pf:c,Ge:b}};
$b=function(a){return(a||window).document.documentElement.clientWidth};
ac=function(a){a=a.style;a.border="none";a.padding=Bb||Cb?"0 1px":"0";a.margin="0";a.height="auto";a.width="100%"};
bc=function(a){return(h?"opacity":"filter")+":"+(h?a+"":(yb?"progid:DXImageTransform.Microsoft.Alpha(":"alpha(")+"opacity="+Math.floor(100*a)+")")+";"};
cc=function(a){var b={};if(a)for(var c=0,d;d=a[c++];)b[d.Pc()]=d;return b};
dc=d;ec=f;fc=function(a){Bb&&(a.tabIndex=0)}})();Q.Ue(J.Wb,192,function(){function a(a){$a(a)&&(a=e(a));var b="";if(a){for(var c=a.length,d=0,f=0,p=0;c--;)for(f<<=8,f|=a[p++],d+=8;6<=d;)b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(f>>d-6&63),d-=6;d&&(b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(f<<8>>d+8-6&63))}return b}
function b(a){var b=[];if(a)for(var c=0,d=0,e=0;e<a.length;++e){var f=a.charCodeAt(e);if(32>f||127<f||!k[f-32])return[];c<<=6;c|=k[f-32]-1;d+=6;8<=d&&(b.push(c>>d-8&255),d-=8)}return b}
function c(a,b){var c={};c.J=Array(4);c.buffer=Array(4);c.Hi=Array(4);c.padding=Array(64);c.padding[0]=128;for(var p=1;64>p;++p)c.padding[p]=0;d(c);p=Array(64);if(64<b.length){d(c);h(c,b);var k=l(c)}else k=b;for(var n=0;n<k.length;++n)p[n]=k[n]^92;for(n=k.length;64>n;++n)p[n]=92;d(c);for(n=0;64>n;++n)c.buffer[n]=p[n]^106;f(c,c.buffer);c.total=64;h(c,e(a));k=l(c);d(c);f(c,p);c.total=64;h(c,k);return l(c)}
function e(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function d(a){a.J[0]=1732584193;a.J[1]=4023233417;a.J[2]=2562383102;a.J[3]=271733878;a.rb=a.total=0}
function f(a,b){for(var c=a.Hi,d=0;64>d;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.J[0];d=a.J[1];for(var f=a.J[2],h=a.J[3],p,l,k,t=0;64>t;++t)16>t?(p=h^d&(f^h),l=t):32>t?(p=f^h&(d^f),l=5*t+1&15):48>t?(p=d^f^h,l=3*t+5&15):(p=f^(d|~h),l=7*t&15),k=h,h=f,f=d,e=e+p+q[t]+c[l]&4294967295,p=n[t],d=d+((e<<p|e>>>32-p)&4294967295)&4294967295,e=k;a.J[0]=a.J[0]+e&4294967295;a.J[1]=a.J[1]+d&4294967295;a.J[2]=a.J[2]+f&4294967295;a.J[3]=a.J[3]+h&4294967295}
function h(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.rb++]=b[d],64==a.rb&&(f(a,a.buffer),a.rb=0)}
function l(a){var b=Array(16),c=8*a.total,d=a.rb;h(a,a.padding,56>d?56-d:64-(d-56));for(var e=56;64>e;++e)a.buffer[e]=c&255,c>>>=8;f(a,a.buffer);for(e=d=0;4>e;++e)for(c=0;32>c;c+=8)b[d++]=a.J[e]>>c&255;return b}
var k=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],n=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],q=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,
4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,
4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];return{B:function(){return J.Wb},
F:function(){return 192},
D:function(){return{encode:a,decode:b,Wg:c}}}});Q.Ue(J.gb,95,function(){function a(a,c){c=jb(lb(c));a=jb(eb(a,!0));if(ob(c,a))return a+"<b>"+c.substr(a.length)+"</b>";for(var b="",d=[],f=c.length-1,h=0,l=-1,k;k=c.charAt(h);++h)" "==k||"\t"==k?b.length&&(d.push({t:b,Za:l,e:h+1}),b="",l=-1):(b+=k,-1==l?l=h:h==f&&d.push({t:b,Za:l,e:h+1}));b=a.split(/\s+/);h={};for(f=0;l=b[f++];)h[l]=1;k=-1;b=[];var n=d.length-1;for(f=0;l=d[f];++f)h[l.t]?(l=-1==k,f==n?b.push({Za:l?f:k,e:f}):l&&(k=f)):-1<k&&(b.push({Za:k,e:f-1}),k=-1);if(!b.length)return"<b>"+c+"</b>";
f="";for(h=l=0;k=b[h];++h)(n=d[k.Za].Za)&&(f+="<b>"+c.substring(l,n-1)+"</b> "),l=d[k.e].e,f+=c.substring(n,l);l<c.length&&(f+="<b>"+c.substring(l)+"</b> ");return f}
return{B:function(){return J.gb},
F:function(){return 95},
D:function(){return{bold:a}}}});Q.register(J.Ed,12,function(){function a(a){a=b(a,p,c);a=b(a,t,e);return b(a,r,d)}
function b(a,b,c){for(var d,e="",f=0;null!=(d=b.exec(a));)f<d.index&&(e+=a.substring(f,d.index)),e+=c(d[0]),f=b.lastIndex;if(!e)return a;f<a.length&&(e+=a.substring(f));return e}
function c(a){return String.fromCharCode(a.charCodeAt(0)-65248)}
function e(a){var b=a.charCodeAt(0);return 1==a.length?h.charAt(b-65377):65438==a.charCodeAt(1)?l.charAt(b-65395):k.charAt(b-65418)}
function d(a){var b=a.charCodeAt(0);return 12443==a.charCodeAt(1)?n.charAt(b-12454):q.charAt(b-12495)}
function f(a){return eval('"\\u30'+a.split(",").join("\\u30")+'"')}
var h=f("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C"),l=f("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC"),k=f("D1,D4,D7,DA,DD"),n=f("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC"),q=f("D1__,D4__,D7__,DA__,DD"),p=/[\uFF01-\uFF5E]/g,t=RegExp("([\uff73\uff76-\uff84\uff8a-\uff8e]\uff9e)|([\uff8a-\uff8e]\uff9f)|([\uff61-\uff9f])",
"g"),A="(["+f("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB")+"]\u309b)|(["+f("CF,D2,D5,D8,DB")+"]\u309c)",r=new RegExp(A,"g");return{B:function(){return J.Ed},
F:function(){return 12},
D:function(){return{dk:a}}}});function Ic(a,b,c,e,d){var f=gc?"-moz-":Cb?"-ms-":Bb?"-o-":hc?"-webkit-":"",h=".gstl_"+e,l=new RegExp("(\\.("+d.join("|")+")\\b)"),k=[];return{addRule:function(a,d){if(b){if(c){for(var e=a.split(","),f=[],n=0,q;q=e[n++];)q=l.test(q)?q.replace(l,h+"$1"):h+" "+q,f.push(q);a=f.join(",")}k.push(a,"{",d,"}")}},
Uf:function(){if(b&&k.length){b=!1;var c=Ab("style");c.setAttribute("type","text/css");(a||tb()).appendChild(c);var d=k.join("");k=null;c.styleSheet?c.styleSheet.cssText=d:c.appendChild(document.createTextNode(d))}},
prefix:function(a,b){var c=a+(b||"");f&&(c+=b?a+f+b:f+a);return c}}}
;Q.register(J.Ka,10,function(){function a(a){var b=0;a&&(h||c(),e(),a in l?b=l[a]:(Lb(h,jb(a)),l[a]=b=h.offsetWidth,Lb(h,"")));return b}
function b(){h||c();e();k||(Lb(h,"|"),k=h.offsetHeight);return k}
function c(){h=Kb(d.cd);h.style.visibility="hidden";f.appendChild(h)}
function e(){var a=Za();if(!q||q+3E3<a)q=a,a=Yb(h),n&&a==n||(l={},k=null,n=a)}
var d,f,h,l,k,n,q;return{R:function(a){f=a.oe()||document.body},
setup:function(a){d=a},
B:function(){return J.Ka},
F:function(){return 10},
D:function(){return{Ca:a,getHeight:b}}}});function Jc(a){var b;(function(){function c(b){return a[b]||e}
function e(){}
a||(a={});b={Ec:c("a"),search:c("b"),Kb:c("c"),redirect:c("d"),Cb:c("e"),xb:c("f"),tc:c("g"),uc:c("h"),mc:c("i"),vc:c("j"),wb:c("k"),nc:c("l"),qc:c("m"),mf:c("n"),wc:c("o"),xc:c("p"),tb:c("q"),gd:c("r"),Zd:c("s"),ce:c("t"),pc:c("u"),yc:c("w"),jc:c("x"),oc:c("y"),lc:c("z"),kc:c("aa"),zc:c("ab"),ud:c("ac")}})();
return{Ec:function(){return b.Ec()},
search:function(a,e){b.search(a,e)},
Kb:function(a){b.Kb(a)},
redirect:function(a){b.redirect(a)},
Cb:function(a){return b.Cb(a)},
xb:function(a){b.xb(a)},
tc:function(a){b.tc(a)},
uc:function(a){b.uc(a)},
mc:function(a){b.mc(a)},
vc:function(a,e){b.vc(a,e)},
wb:function(a,e){b.wb(a,e)},
nc:function(){b.nc()},
qc:function(a){b.qc(a)},
mf:function(a){b.mf(a)},
wc:function(){b.wc()},
xc:function(){b.xc()},
tb:function(a){b.tb(a)},
gd:function(a,e){b.gd(a,e)},
Zd:function(a){b.Zd(a)},
ce:function(){b.ce()},
pc:function(){b.pc()},
oc:function(){b.oc()},
yc:function(a){b.yc(a)},
jc:function(){b.jc()},
lc:function(){b.lc()},
kc:function(){b.kc()},
zc:function(){b.zc()},
ud:function(a,e){return b.ud(a,e)}}}
;Q.register(J.Ga,6,function(){function a(a,b,c,e){var f=a.getId(),h=a.da();B.ge||d();b=q+p+t+"?"+(A?A+"&":"")+(b?b+"&":"");var k=gb;a=[];k("q",h,a,!0);B.nf||k("callback","google.sbox.p"+n,a);if(r){h="";for(var m=4+Math.floor(32*Math.random()),D=0,u;D<m;++D)u=.3>Math.random()?48+Math.floor(10*Math.random()):(.5<Math.random()?65:97)+Math.floor(26*Math.random()),h+=String.fromCharCode(u);k("gs_gbg",h,a)}k=Ab("script");k.src=b+a.join("&");k.charset="utf-8";v[f]=k;x=B.ge?e:c;l.appendChild(k);return!0}
function b(){return 0}
function c(){return 0}
function e(a){var b=v[a];b&&(l.removeChild(b),delete v[a])}
function d(){for(var a in v)l.removeChild(v[a]);v={};x=null}
function f(a){x&&x(a)}
function h(a){a||(a=bb);var b=window.google;B.nf?b.ac.h=a:b.sbox["p"+n]=a}
var l=tb(),k,n,q,p,t,A,r,B,v={},x,w={H:function(a){k=a.get(J.la,w);n=a.Ta().getId()},
G:function(a){B=a;0==a.connectionType&&(a=k.Cg(),q=a.protocol,p=a.host,t=a.nd,A=a.Ci,r="https:"==document.location.protocol,h(f),(new Image).src=q+p+"/generate_204")},
B:function(){return J.Ga},
F:function(){return 6},
D:function(){return{ui:a,ig:e,sb:bb,me:b,ne:c}},
O:function(){h(null);d()}};
return w});Q.register(J.Ha,1,function(){function a(a){if(!l)return!0;for(var b=!1,c=!1,f=0,h;f<a.length;++f)if(h=a.charAt(f),!e.test(h)&&(d.test(h)?c=!0:b=!0,c&&b))return!0;return!1}
function b(a,b,c){if(!l)return!0;var d=f.test(c),k=h.test(b);return"ltr"==a?d||k||e.test(c)||e.test(b):!d||!k}
function c(a){var b=k;l&&(d.test(a)?b="ltr":e.test(a)||(b="rtl"));return b}
var e=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),d=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"),f=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"),
h=RegExp("(?:\\d|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),l=d.test("x"),k;return{R:function(a){k=a.Sa()},
B:function(){return J.Ha},
F:function(){return 1},
D:function(){return{vh:a,Oh:b,Gc:c}}}});Q.register(J.U,2,function(){function a(a,b,c,d,e){var f=q(a);f||(f={},r.push({element:a,ph:f}));var h=f[b];h||(h=f[b]=[],f=a.Af?window:ec(a),f=n(b,f,h),$a(b)?a.addEventListener?a.addEventListener(b,f,!1):a["on"+b]=f:a[b]=f);h.push({Mh:!!e,fd:!1,priority:d||0,process:c});h.sort(t);c.og=b}
function b(a,b){var c=q(a);if(c&&(c=c[b.og]))for(var d=0,e;e=c[d++];)if(e.process==b){e.fd=!0;break}}
function c(b,c,d,e){a(B,b,c,d,e)}
function e(a){b(B,a)}
function d(a,b){var c=b||{},d=B[a];d&&d(c,c.cb)}
function f(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}
function h(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent("on"+b,c)}
function l(a){A?(v||(v=[],f(window,"message",k)),v.push(a),a=window.location.href,window.postMessage("sbox.df",/HTTPS?:\/\//i.test(a)?a:"*")):window.setTimeout(a,0)}
function k(a){v&&a&&a.source==window&&"sbox.df"==a.data&&v.length&&(v.shift()(),v&&v.length&&window.postMessage("sbox.df",window.location.href))}
function n(a,b,c){return function(d,e){if(c.length){var f;if(!(f=d)){f={};var h=b.event;h&&(h.keyCode&&(f.keyCode=h.keyCode),f.Lh=!0)}f.cb=e||a;h=f;for(var l,k,m=0,n;n=c[m++];)n.fd?k=!0:l||(n.Mh?p(n,h):l=n.process(h));if(k)for(m=0;n=c[m];)n.fd?c.splice(m,1):++m;if(f.Hb)return delete f.Hb,f.Lh&&(f=b.event||f),Vb(f),f.returnValue=!1}}}
function q(a){for(var b=0,c;b<r.length;++b)if(c=r[b],c.element==a)return c.ph;return null}
function p(a,b){l(function(){a.process(b)})}
function t(a,b){return b.priority-a.priority}
var A=window.postMessage&&!(Cb||ic||Bb),r=[],B={Af:1},v;return{B:function(){return J.U},
F:function(){return 2},
D:function(){return{T:a,zd:b,Xa:c,Ak:e,L:d,Jb:f,zk:h,defer:l}},
O:function(){v=null}}});Q.register(J.Ja,495,function(){function a(a){l[a.getId()]=!0}
function b(a){var b=a.ja(),c=b.getId();c in l&&(b=b.Sc(),b=Za()-b,n+=b,++k,a.getParameters().getString("e")&&++q,delete l[c])}
function c(){var a=0,b;for(b in l)a++;return a}
function e(){return k}
function d(){return n}
function f(a){var b=!1;a&&(b=a.getParameters().getString("e"));a=0;b?(a|=1,1<q&&(a|=2)):0<q&&(a|=2);return a}
function h(){l={};q=n=k=0}
var l,k,n,q;return{G:function(){h()},
B:function(){return J.Ja},
F:function(){return 495},
D:function(){return{Tf:a,Xh:b,xg:c,Sg:e,Yg:d,Gg:f,reset:h}}}});Q.register(J.ga,375,function(){function a(a){d[a]=!0;f=a}
function b(){var a=[],b;for(b in d)a.push(parseInt(b,10));return a}
function c(){return f}
function e(){d={};f=null}
var d,f;return{G:function(){e()},
B:function(){return J.ga},
F:function(){return 375},
D:function(){return{add:a,dh:b,Ng:c,reset:e}}}});Q.register(J.ha,9,function(){function a(a){var b=n.ea();var c=[];c[27]=23;c[0]=e(B.clientName);c[28]=e(B.requestIdentifier);c[1]=void 0==a?"":a+"";c[26]=q.dh().join("j");a="";t.Vc()?a="o":A.Wa()&&(a=A.ye()+"");c[2]=a;a="";var f=A.Y();if(f){for(var m,u=0,H=0,S;S=f[H++];){var P=S.B()+"";S=S.Rc();S.length&&(P+="i"+S.join("i"));P!=m&&(1<u&&(a+="l"+u),a+=(m?"j":"")+P,u=0,m=P);++u}1<u&&(a+="l"+u)}c[3]=a;c[4]=Math.max(n.Hg()-x,0);c[5]=Math.max(n.Lg()-x,0);c[6]=v;c[7]=Za()-x;c[18]=Math.max(n.Mg()-x,0);c[8]=
k.Tg();if(m=k.zg())c[25]=m.Sh?"1"+(B.kg?"a":"")+(B.ee?"c":""):"",c[10]=m.Kh;c[11]=k.Ic();c[12]=k.Ig();if(m=k.Dg())c[9]=m.ji,c[22]=m.gi,c[17]=m.li;c[13]=k.Qg();c[14]=k.Og();c[15]=k.Zg();c[16]=k.Ag();c[30]=p.xg();c[31]=p.Sg();c[32]=p.Yg();c[19]=e(B.vd);m=t.ma();m=p.Gg(m);c[20]=0==m?"":m+"";for(m=0;a=r[m++];)f=a.Ba(),h[f]&&(c[f]=void 0==c[f]?e(a.Mj()):"");c=c.join(".").replace(d,"");l&&w?(m=b+c,a=l.decode(w),m=l.Wg(m,a),m=m.slice(0,8),m=l.encode(m)):m="";return{oq:b,gs_l:c+"."+m}}
function b(){x=Za();++v;n.Ea();q.reset();k.Ea();for(var a=0,b;b=r[a++];)b.reset()}
function c(a){w=a}
function e(a){return a?a.replace(f,"-"):""}
var d=/\.+$/,f=/\./g,h=Wa(wc),l,k,n,q,p,t,A,r,B,v=-1,x,w,u={H:function(a){l=a.get(J.Wb,u);k=a.get(J.W,u);n=a.get(J.I,u);q=a.get(J.ga,u);p=a.get(J.Ja,u);t=a.get(J.ca,u);A=a.get(J.S,u);r=a.P(J.Jd,u);cc(a.P(J.RENDERER,u))},
setup:function(a){w=a.Wh},
G:function(a){B=a;b()},
B:function(){return J.ha},
F:function(){return 9},
D:function(){return{getParameters:a,reset:b,yi:c}}};
return u});Q.register(J.ka,11,function(){function a(a,b){if(A){for(var c=!1,d=0,e;e=A[d++];)2==e.Oc(a,b)&&(c=!0);if(c)return}if(ib(a)||m.ya||k&&k.ya())ub(b)?u&&!w&&(w=Rb(u,"btnI","1")):w&&(u.removeChild(w),w=null),h(b),x.search(a,b),f(),n.L(14,{query:a})}
function b(a){h();x.Kb(a);f()}
function c(a){h();x.redirect(a);f()}
function e(a){h(1);x.tb(a);f()}
function d(a){return x.Cb(a)}
function f(){q.Yc();q.eg();t.reset();B?B.clear():r.clear();p.ea()!=p.na()&&p.fg();v&&v.clear()}
function h(a){l&&m.de&&l.od(a)}
var l,k,n,q,p,t,A,r,B,v,x,w,u,m,y={R:function(a){u=a.oe()},
H:function(a){l=a.get(J.fb,y);k=a.get(J.sa,y);n=a.get(J.U,y);q=a.get(J.W,y);p=a.get(J.I,y);t=a.get(J.ha,y);r=a.get(J.S,y);B=a.get(J.Pd,y);v=a.get(J.Na,y);x=a.Aa();A=a.P(J.Nd,y)},
G:function(a){m=a},
B:function(){return J.ka},
F:function(){return 11},
D:function(){return{search:a,Kb:b,redirect:c,tb:e,Cb:d}}};
return y});Q.register(J.va,14,function(){function a(a){return(a[d.kb]||{}).j}
function b(a){return a[d.Hd]}
function c(a,b){var c=a[d.Hd],p=a[d.Nf];b||(b=Dc(c,hb(c.length)));var q={},v=a[d.kb];if(v)for(var t in v){var w=v[t];t in n&&(w=n[t].parse(w));q[t]=w}v=b;var u=!1,m=!1;t=!1;w=0;for(var y;y=p[w++];)if(33==(y[f.Qd]||0)?m=!0:u=!0,m&&u){t=!0;break}u=0;m=[];for(w=0;y=p[w++];){var D=y[f.Qd]||0;if(h[D]&&(!t||33!=D)){var O=y[f.Mf];k&&(O=l.bold(c.toLowerCase(),mb(kb(O))));m.push(Gc(O,mb(kb(O)),u++,D,y[f.Lf]||[],e(y)))}}return Ec(v,m,Hc(q),!1,!0,!1)}
function e(a){return(a=a[f.kb])?Hc(a):Fc}
var d=vc,f=oc,h,l,k,n={},q={H:function(a){l=a.get(J.gb,q);if(a=a.P(J.dc,q))for(var b=0,c;c=a[b++];)n[c.Ij()]=c},
G:function(a){h=a.Rb;k=a.Uc},
B:function(){return J.va},
F:function(){return 14},
D:function(){return{bi:a,fk:b,kd:c}}};
return q});Q.register(J.ob,15,function(){function a(a){var c=b(a);if(c){if(h)for(var d=0,p;p=h[d++];)a=p.edit(a);l.vi(a);d=a;p=d.ja().da();var q=d.Y();k.isEnabled()&&(q.length?k.rd(p,q,0==d.B())&&f.Xh(d):k.clear());e.L(3,{input:p,suggestions:q})}n.vc(a,c);return c}
function b(a){var b=d.na(),c=l.ma();b=b.toLowerCase();var e=a.da().toLowerCase();b==e?c=!0:(b=eb(b),a=(e=a.ja())?e.pa():eb(a.da().toLowerCase()),c=c?c.ja().pa():"",c=0==b.indexOf(a)?0==b.indexOf(c)?a.length>=c.length:!0:!1);return c}
function c(a,b){return a.X()-b.X()}
var e,d,f,h,l,k,n,q={H:function(a){e=a.get(J.U,q);d=a.get(J.I,q);f=a.get(J.Ja,q);h=a.P(J.Md,q);l=a.get(J.ca,q);k=a.get(J.S,q);n=a.Aa();h.sort(c)},
B:function(){return J.ob},
F:function(){return 15},
D:function(){return{process:a,Ib:b}}};
return q});Q.register(J.W,13,function(){function a(a,b){if(!(!ca||ba||S&&S.lj())){a.pd("ds",ma.Yd);a.pd("pq",ua);a.qg();var c=!0,d=a.se();d>K&&(K=d);++z;X.Tf(a);d=Za();for(var e in pa)2500<d-pa[e].Sc()&&y(e);Y&&(e=H.get(a))&&((c=I||a.Ph())&&ma.Fh&&a.Gh(),V.process(e),e.Le()&&++ka,F=null);c&&(F=a,C&&!b||m())}}
function b(){return 10<=U||3<=P.ne()?!0:!1}
function c(){aa=K}
function e(){return K<=aa}
function d(){F=null}
function f(){return z}
function h(){return{Sh:Y,Kh:Y?H.yg():0}}
function l(){return Y?H.Ic():0}
function k(){return ka}
function n(){return{ji:fa,gi:na,li:ya}}
function q(){return Ea}
function p(){return va}
function t(a){a=ia.kd(a);return V.Ib(a)}
function A(){return ra}
function r(){for(var a=[],b=0,c,d=0;d<=G;++d)c=sa[d],0==c?b++:(b=1==b?"0j":1<b?d+"-":"",a.push(b+c),b=0);return a.join("j")}
function B(){Y&&H.Yf()}
function v(a){Y&&H.Zf(a)}
function x(){Y&&H.Ea();ra=va=Ea=ya=na=fa=ka=U=z=0;sa=[];for(var a=0;a<=G;++a)sa[a]=0}
function w(a){ua=a}
function u(a){return function(b){D(b,a)}}
function m(){null!=C&&(qb(C),C=null);if(!(2<P.ne())&&F){var a=[],b=F.getParameters();if(b)for(var c in b)gb(c,b[c],a);E.nc();a=P.ui(F,a.join("&"),u(F),D);F.Ne()||(++fa,a?(a=F,pa[a.getId()]=a,++U):++na);F=null;a=100;b=(U-2)/2;for(c=1;c++<=b;)a*=2;a<Z&&(a=Z);C=window.setTimeout(m,a)}}
function y(a){P.ig(a);delete pa[a];U&&--U}
function D(a,b){if(ca){if(!b){var c=ia.bi(a);b=pa[c];if(!b)return}if(!b.Ne()){c=ia.kd(a,b);if(da){var d=L.na();c=da.mk(c,d)}Y&&H.put(c);b.se()<=aa||(++ya,V.process(c)||++Ea,d=b,Z=c.getParameters().we("d"),d&&(y(d.getId()),d=d.Sc(),d=Za()-d,ra+=d,va=Math.max(d,va),++sa[d>R?G:O[Math.floor(d/100)]]));c&&(c=c.getParameters().getString("q"))&&W.yi(c)}}}
var O=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],G=O[O.length-1]+1,R=100*O.length-1,H,S,P,L,W,X,ia,V,da,N,E,ca=!1,F,K=-1,pa,z,U,ka,fa,na,ya,Ea,va,ra,sa,Z,C,I,ba,aa,Y,ma,ua,ea={H:function(a){H=a.get(J.mb,ea);S=a.get(J.sa,ea);a.get(J.U,ea);L=a.get(J.I,ea);W=a.get(J.ha,ea);X=a.get(J.Ja,ea);ia=a.get(J.va,ea);V=a.get(J.ob,ea);da=a.get(J.Gf,ea);a.get(J.ca,ea);N=a.get(J.la,ea);a.get(J.S,ea);E=a.Aa()},
G:function(a){P=N.Bg();ma=a;ca=!0;pa={};Z=0;I=a.vg;ba=a.Ie;aa=-1;Y=ma.lg&&!!H;ua=a.Te},
B:function(){return J.W},
F:function(){return 13},
D:function(){return{he:a,Vc:b,Yc:c,Me:e,eg:d,Tg:f,zg:h,Ic:l,Ig:k,Dg:n,Qg:q,Og:p,Ib:t,Zg:A,Ag:r,sb:B,cg:v,Ea:x,hf:w}},
O:function(){ca=!1;null!=C&&(qb(C),C=null);pa=F=null;c()}};
return ea});Q.register(J.ca,5,function(){function a(){return d.Vc()}
function b(a){f=a}
function c(){return f}
function e(){f=null}
var d,f,h={H:function(a){d=a.get(J.W,h)},
G:function(){f=null},
B:function(){return J.ca},
F:function(){return 5},
D:function(){return{Vc:a,vi:b,ma:c,pj:e}}};
return h});Q.register(J.la,16,function(){function a(){return d}
function b(){return f}
function c(){d&&d.sb()}
var e={},d,f,h={H:function(a){a=a.P(J.Ga,h);for(var b=0,c;c=a[b++];)e[c.me()]=c},
G:function(a){var b="https:"==document.location.protocol,c=gb,h=[];c("client",a.clientName,h);c("hl",a.Gb,h);c("gl",a.kf,h);c("sugexp",a.vd,h);c("gs_rn",23,h);c("gs_ri",a.requestIdentifier,h);a.authuser&&c("authuser",a.authuser,h);f={protocol:"http"+(b?"s":"")+"://",host:a.Ye||"clients1."+a.gc,nd:a.nd||"../../complete/search",Ci:h.length?h.join("&"):""};d&&d.me()==a.connectionType||(d=e[a.connectionType])},
B:function(){return J.la},
F:function(){return 16},
D:function(d){return{Bg:d==J.W?a:bb,Cg:b,dg:c}}};
return h});Q.register(J.fa,7,function(){function a(a){k.Pb(a)}
function b(){return n}
function c(a){if(a in q){if(p){if(a==p.Nc())return;f();p.Ce()}p=q[a];k.Qb(p)}}
function e(){return n?k.getHeight():0}
function d(){n||(k.show(h()),n=!0)}
function f(){n&&(k.hide(),n=!1)}
function h(){var a=xb(l);p.Td(a);return a}
var l={rh:!1,horizontalAlignment:"left",Ke:!0,za:null,marginWidth:0},k,n,q={},p,t={H:function(a){k=a.get(J.Ia,t);if(a=a.P(J.hb,t))for(var b=0,c;c=a[b++];)q[c.Nc()]=c},
G:function(){n=!1},
B:function(){return J.fa},
F:function(){return 7},
D:function(){return{isVisible:b,Qb:c,getHeight:e,show:d,hide:f,Pb:a}},
O:function(){f()}};
return t});Q.register(J.I,3,function(){function a(){var a={};Y.L(13,a);!a.cancel&&Fa.He&&Y.defer(M.dismiss);Ca.oc()}
function b(){Y.L(12);Ca.pc()}
function c(){na("rtl")}
function e(){na("ltr")}
function d(){M.ni()}
function f(a){M.qa()?M.mi():M.ub(a)}
function h(){if(0==Fa.Sb)return!1;if(4==Fa.Sb)return Ca.zc(),!1;var a=ya();if(a)switch(Fa.Sb){case 1:if(Ea(a,!0))return ua.add(C.pb),!0;break;case 3:return M.Va(a)}return!1}
function l(){Fa.pi?pa(5):(M.isVisible()?M.dismiss():B(),D())}
function k(a){ha&&a.ze()==ha.length&&(Na&&Na.clear(),Fa.oi&&pa(2),Ca.mc(ha))}
function n(a){ba&&0==a.Bb()&&ba.si()}
function q(a,b,c,d){Fa.ng&&!a&&M.gf(!0);Fa.hg&&!M.isVisible()&&"mousedown"==c&&M.ub(b);var e;sb&&sb.isReusable(a,b,c)?e=sb:sb=e=Dc(a,b,c);var f=b=!1;if(a!=ha||"onremovechip"==c)ob(c,"key")?ua.add(C.Bf):"paste"==c&&ua.add(C.Df),b=!0,sa(a),Y.L(1,{cb:c,za:Oa}),Ca.xb(a),f=Za(),Nb||(Nb=f),sc=f,ib(a)&&(d=!0),f=!0;a=Z.DONT_CARE;var h=e.je(),k=xa.ma();if(Ba)for(var l=0,fa;fa=Ba[l++];)fa=fa.Oc(h,k),fa>a&&(a=fa);switch(a){case Z.wf:d=!0;break;case Z.Of:d=!1}d?(b&&M.Ai(),Ob&&e.setParameter("gs_is",1),Ca.qc(Ob),
ma.he(e),sb=null):f&&(M.clear(),ma.Yc());Y.L(2,{cb:c})}
function p(a){(Ob=a)&&ua.add(C.zf)}
function t(a){tc!=a&&((tc=a)?Ca.lc():Ca.kc())}
function A(a){va(a)}
function r(){I.focus()}
function B(){I.blur()}
function v(){return I.ed()}
function x(a,b,c){ob(a,ha,!0)&&(a=ha+a.substr(ha.length));c=c||hb(a.length);q(a,c,"",b);va(a,!0)}
function w(a){x(a,!0);uc=Za();ua.add(C.Ef)}
function u(){q(ha,P(),"onremovechip")}
function m(a){sa(a);I.refresh();Y.L(4,{za:Oa,input:a})}
function y(){I.select()}
function D(){ha!=Pa&&sa(Pa);Y.L(5,{input:Pa,suggestions:M.Y(),za:Oa});I.refresh();Ca.uc(Pa)}
function O(){Pa=ha}
function G(){return I.le()}
function R(){return Pa}
function H(){return ha}
function S(){return Oa}
function P(){return I.Ra()}
function L(){return I.Mc()}
function W(){return I.getHeight()}
function X(){return I.Ca()}
function ia(){return I.re()}
function V(){return Nb}
function da(){return sc}
function N(){return uc}
function E(){return 0!=wd}
function ca(){if(rb){if(Fa.Wc)return!0;for(var a=0,b;b=Qa[a++];)if(b.isEnabled())return!0}return!1}
function F(a){if(a==ha)return!0;var b=ha.length;return a.substr(0,b)==ha?aa.Oh(Oa,ha,a.substr(b)):!1}
function K(){I.ld()}
function pa(a){ea.search(ha,a)}
function z(a){ha&&(sa(""),I.clear(),Y.L(1),M.clear(),Ca.xb(ha));a&&Ca.jc()}
function U(){uc=sc=Nb=0}
function ka(a){I.ff(a)}
function fa(){var a=ya();a&&Ea(a)}
function na(a){var b=P().Bb();Oa==a?M.qa()&&b==ha.length&&(M.Wa()?Fa.zb&&(a=M.Ua(),ea.search(a.N(),6)):Fa.Pe&&h()):ba&&0==b&&ba.si()}
function ya(){if(M.qa()){var a=M.Wa()?M.Ua():M.Hc();if(a.Jc())return a}return null}
function Ea(a,b){var c=a.N();return pb(Pa,c)?!1:(O(),b?x(c,!0):m(c),!0)}
function va(a,b){ha=a||"";ra();I.refresh();b||(Y.L(4,{za:Oa,input:ha}),Ca.tc(ha))}
function ra(){var a=aa.Gc(ha);a!=Oa&&(I.qd(a),Oa=a)}
function sa(a){ha=Pa=a||"";ra()}
var Z=rc,C=qc,I,ba,aa,Y,ma,ua,ea,Ba,xa,M,Na,rb,Qa,Ca,Pa,ha,Oa,wd,Nb,sc,uc,Ob,tc,sb,Fa,Da={H:function(a){I=a.get(J.ta,Da);ba=a.get(J.sa,Da);aa=a.get(J.Ha,Da);Y=a.get(J.U,Da);ma=a.get(J.W,Da);ua=a.get(J.ga,Da);ea=a.get(J.ka,Da);Ba=a.P(J.La,Da);xa=a.get(J.ca,Da);M=a.get(J.S,Da);Na=a.get(J.Na,Da);rb=a.get(J.xa,Da);Qa=a.P(J.wa,Da);Ca=a.Aa();wd=a.Ta().Lc()},
setup:function(a){Fa=a;Ba.sort(vb);ha=Pa=I.Kg()||""},
G:function(a){Fa=a;tc=Ob=!1;ra()},
B:function(){return J.I},
F:function(){return 3},
D:function(){return{Be:a,jh:b,lh:c,mh:e,oh:d,hh:f,Va:h,ih:l,gh:k,eh:n,kh:q,xi:p,ef:t,Ob:A,ie:r,fc:B,Rh:v,jf:x,Nj:w,Oj:u,jd:m,df:y,cf:D,fg:O,le:G,ea:R,na:H,Gc:S,Ra:P,Mc:L,getHeight:W,Ca:X,re:ia,Hg:V,Lg:da,Mg:N,uh:E,Xc:ca,Zj:F,ld:K,search:pa,clear:z,Ea:U,ff:ka,Sd:fa}}};
return Da});Q.register(J.S,17,function(){function a(a){a.za=Ba;a.marginWidth=ea;var b=xa.Ei;b||(b="rtl"==Ba?"right":"left");a.horizontalAlignment=b}
function b(a,b,d){var e=!1;a=va&&va.Xj(b);D();(Z=b)&&b.length&&(e=b[0].N(),pa.vh(e)&&(e=ka.ea()),Ba=pa.Gc(e),d?(ba=F.Cf,e=K.ii(b,Ba),b=b[0].getParameters().getString("a"),b=kb(b),ea=fa.Ca(b)):(ba=F.Dd,e=K.Z(V(),Ba),ea=0),a&&(I=va.Kj(),c(va.Cj())),e?m():D());return e}
function c(a){ca();if(C!=a){var b=C;C=a;E(b)}}
function e(){if(x())if(aa){var a=C;C==Z.length-1?I=C=null:null==C?C=0:++C;I=C;N(a,e)}else m()}
function d(){if(x())if(aa){var a=C;Z&&0!=C?null==C?C=Z.length-1:--C:I=C=null;I=C;N(a,d)}else m()}
function f(a){var b=a?4:3;w()?(a=B(),K.Eb(a)||ka.search(b),b=ka.ea(),sa.wb(b,a)):ka.search(b)}
function h(a){return K.Va(a)}
function l(a){I=C=a;a=Z[a];var b=ka.ea();sa.wb(b,a)}
function k(){return aa}
function n(){return Y}
function q(a){Y&&!a&&D();Y=a}
function p(){return ba}
function t(){return Z}
function A(){return x()?Z[0]:null}
function r(){return C}
function B(){return null!=I?Z[I]:null}
function v(){return I}
function x(){return!(!Z||!Z.length)}
function w(){return null!=I}
function u(){aa&&!ma&&(ma=window.setTimeout(D,xa.Ch))}
function m(){aa||(z.Qb(17),z.show(),aa=!0,sa.wc())}
function y(){aa&&(ma&&(qb(ma),ma=null),z.hide(),aa=!1,sa.xc())}
function D(){y();Z=null;ba=F.EMPTY;null!=C&&K.Tb(C);I=C=null;K.clear()}
function O(){U.Yc();y()}
function G(){null!=C&&K.Tb(C);I=C=null}
function R(){ca();ua=window.setTimeout(G,0)}
function H(){ca()}
function S(a){if(x())m();else{var b=ka.ea();if(b){a=a||ka.Ra();b=Dc(b,a);if(ya){a=b.je();for(var c=Ea.ma(),d=0,e;e=ya[d++];)e.Oc(a,c)}U.he(b)}}}
function P(){return K.M()}
function L(){return K.Db()}
function W(){aa=!1}
function X(){K.Ya()}
function ia(){return 17}
function V(){if(x()&&ba==F.Dd){for(var a=[],b=[],c=0,d;(d=na[c++])&&!d.Fj(ka.ea(),Z,b););(c=b?b.length:0)&&(c-=da(b,a,0));for(d=0;d<Z.length;++d)a.push(Z[d]);c&&(c-=da(b,a,1));xa.xh&&a.push(1);c&&da(b,a,2);xa.Fe&&a.push(2);ra&&ra.jj(a);return a}return null}
function da(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(b.push(f),++d);return d}
function N(a,b){if(null==C||K.isSelectable(C))if(E(a),null==C)ka.cf();else{var c=K.Ac(Z[C]);ka.Ob(c);sa.yc(c)}else K.Tb(a),b()}
function E(a){ca();null!=a&&K.Tb(a);null!=C&&K.Dh(C)}
function ca(){ua&&(qb(ua),ua=null)}
var F=pc,K,pa,z,U,ka,fa,na,ya,Ea,va,ra,sa,Z,C,I,ba,aa,Y,ma,ua,ea,Ba,xa,M={H:function(a){K=a.get(J.Ma,M);pa=a.get(J.Ha,M);z=a.get(J.fa,M);U=a.get(J.W,M);ka=a.get(J.I,M);fa=a.get(J.Ka,M);na=a.P(J.Zb,M);ya=a.P(J.La,M);Ea=a.get(J.ca,M);va=a.get(J.Hf,M);ra=a.get(J.If,M);sa=a.Aa()},
setup:function(){ya.sort(vb);na.sort(wb)},
G:function(a){xa=a;I=C=null;ba=F.EMPTY;aa=!1;Y=!0;Ba="";ea=0},
B:function(){return J.S},
F:function(){return 17},
D:function(){return{rd:b,wi:c,mi:e,ni:d,Eb:f,Va:h,fh:l,isVisible:k,isEnabled:n,gf:q,Pg:p,Y:t,Hc:A,Jg:r,Ua:B,ye:v,qa:x,Wa:w,Ai:u,show:m,hide:y,clear:D,dismiss:O,Ze:G,ki:R,hj:H,ub:S}},
Qa:function(){var b={Td:a,M:P,Db:L,Ce:W,Ya:X,Nc:ia};return[{R:bb,H:bb,setup:bb,G:bb,B:function(){return J.hb},
F:function(){return 17},
D:function(){return b},
Qa:bb,O:bb}]},
O:function(){ma&&(qb(ma),ma=null);Z=null;y()}};
return M});Q.register(J.Ia,8,function(){function a(a){a!=y&&(y=a,a=a.M(),D?a!=D&&u.replaceChild(a,D):u.appendChild(a),D=a)}
function b(){m||(m=u?Math.max(u.offsetHeight,0):0);return m}
function c(a){u.className=a.rh?"gssb_e gsdd_a":"gssb_e";var b=a.za||S;B!=b&&(B=b,Qb(r,b));b=a.marginWidth;if(w!=b){var c=x.style;b?(v.hasChildNodes()||v.appendChild(x),c.width=b+"px",gc&&(c.paddingLeft="1px")):(v.hasChildNodes()&&v.removeChild(x),c.paddingLeft="");w=b}L=a.Ke;W=a.horizontalAlignment;k(O,!0);k(H,!0);p.L(16);d()}
function e(){m=0;k(O,!1);k(H,!1);var a=S;B!=a&&(B=a,Qb(r,a));p.L(11)}
function d(){m=0;h();if(H){var a=t.Ud[0],c=H.style;"relative"!=t.Pa&&(c.top=r.style.top,c.left=r.offsetLeft+v.offsetWidth+"px");a=b()+a;H.style.height=Math.max(a,0)+"px";l(H,u.offsetWidth)}y&&y.Ya()}
function f(a){if(G)R!=a&&G.replaceChild(a,R);else{var b=r.insertRow(-1);b.style.height="0";b.insertCell(-1);G=b.insertCell(-1);n.isVisible()||(k(u,!1),k(r,!0),d());O=u;G.appendChild(a)}R=a}
function h(){var a,b;var c=(a=y&&y.Db())?a.offsetWidth:q.Ca();(b=P)?$a(b)&&(b=null):w||!L?(u.style.width="",r.style.width=""):(u.style.width="100%",b=c+t.vb[2],l(r,b));if("relative"!=t.Pa){var d=q.Mc();a&&(d.ra=Fb(a).ra);a=t.vb;var e=a[1];a=a[0];a=d.yd+q.getHeight()+a;"right"==W?(b=ec(r),c=$b(b)-(d.ra-e+c),b=void 0):(d=d.ra+e,"center"==W&&b&&(d+=(c-b)/2),b=d,c=void 0);e={ra:0,yd:0};"absolute"==t.Pa&&t.Oa&&t.Oa!=document.body&&(e=Fb(t.Oa));d=r.style;d.top=a-e.yd+"px";d.left=d.right="";void 0!=b?d.left=
b-e.ra+"px":d.right=c+e.ra+"px"}yb&&(d.zoom="normal",d.zoom=1)}
function l(a,b){ab(b)?0<b&&(a.style.width=b+"px"):a.style.width=b}
function k(a,b){a&&(a.style.display=b?"":"none")}
var n,q,p,t,A,r,B,v,x,w,u,m,y,D,O,G,R,H,S,P,L=!0,W,X={R:function(a,b){S=a.Sa();b.addRule(".gssb_c","border:0;position:absolute;z-index:989");b.addRule(".gssb_e","border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");b.addRule(".gssb_f","visibility:hidden;white-space:nowrap");b.addRule(".gssb_k","border:0;display:block;position:absolute;top:0;z-index:988");b.addRule(".gsdd_a","border:none!important")},
H:function(a){n=a.get(J.fa,X);q=a.get(J.I,X);p=a.get(J.U,X);A=a.Ta().getId()},
setup:function(a){t=a;r=Ib();r.className="gstl_"+A+" gssb_c";k(r,!1);O=r;var b=r.insertRow(-1);v=b.insertCell(-1);v.className="gssb_f";x=Jb();u=b.insertCell(-1);u.className="gssb_e";u.style.width="100%";t.De&&(H=Ab("iframe","gstl_"+A+" gssb_k"),k(H,!1),(t.Oa||document.body).appendChild(H));if(P=t.jg)ab(P)&&(P+=t.vb[2]),l(r,P);h();(a.Oa||document.body).appendChild(r);p.Xa(8,d)},
G:function(a){t=a;r.style.position=a.Pa},
B:function(){return J.Ia},
F:function(){return 8},
D:function(){return{Qb:a,getHeight:b,Pb:f,show:c,hide:e,Ya:d}}};
return X});Q.register(J.ta,4,function(){function a(a,b){ya&&(ya=!1,F.zd(z,H),F.zd(z,S));b||(b=a);z.parentNode.replaceChild(a,z);b.appendChild(z);na&&fa.di&&(Cb||gc?F.defer(function(){z.focus();Db(z,ra.Bb())}):z.focus());
P()}
function b(){return ba}
function c(a){var b="rtl"==a==("rtl"==Ba);z.dir=a;if(aa){K.qd(a);var c=C.parentNode;c.removeChild(aa);b?Wb(aa,C):c.insertBefore(aa,C)}ba&&(ba.dir=a,c=ba.parentNode,c.removeChild(ba),b?c.insertBefore(ba,C):Wb(ba,C));0!=U&&(a=Pb(a),Mb(z,a))}
function e(){return ra}
function d(){return Fb(I)}
function f(){var a=I?I.offsetHeight:0;M>a&&(a=M);return a}
function h(){return Na?Na:I?I.offsetWidth:0}
function l(){var a=z.offsetWidth;fa.Oe&&(a-=z.offsetHeight);return a}
function k(){return z.value}
function n(a){(fa.tg?z:C||rb||z).style.background=a||"transparent"}
function q(){Z=!0}
function p(){z.select();V()}
function t(){jc&&(z.value="");z.value=E.na();jc&&(z.value=z.value);w()}
function A(){if(!na)try{z.focus(),na=!0,w()}catch(Ca){}}
function r(){na&&(z.blur(),na=!1)}
function B(){return na}
function v(){z.value=""}
function x(){var b=xa.get("gs_id");if(b)ba=xa.get("gs_ttc"),C=xa.get("gs_tti"),E.Xc()&&K&&(Y=K.M(),aa=Y.parentNode);else{b=Ib();b.id=xa.getId("gs_id");b.className="gstl_"+ka+" "+(fa.xd||z.className);var c=b.insertRow(-1),d=b.style,e=z.style;d.width=Na?Na+"px":e.width;d.height=M?M+"px":e.height;d.padding="0";ac(z);z.className=fa.cd;ea&&(ba=c.insertCell(-1),ba.id=xa.getId("gs_ttc"),ba.style.whiteSpace="nowrap");C=c.insertCell(-1);C.id=xa.getId("gs_tti");C.className="gsib_a";E.Xc()&&K&&(Y=K.M(),aa=c.insertCell(-1),
aa.className="gsib_b",aa.appendChild(Y));a(b,C)}kc&&hc&&(z.style.height="1.25em",z.style.marginTop="-0.0625em");u(b);I=b}
function w(){if(na){var a=z.value.length;ra=hb(a);Db(z,a)}}
function u(a){F.T(a,"mouseup",function(){z.focus()})}
function m(){function a(a){F.T(z,a,R,10,b)}
F.T(z,"keydown",D);(Bb||fa.Xf)&&F.T(z,"keypress",G);F.T(z,"select",V,10);var b=!1;a("mousedown");a("keyup");a("keypress");b=!0;a("mouseup");a("keydown");a("focus");a("blur");a("cut");a("paste");a("input");F.T(z,"compositionstart",y);F.T(z,"compositionend",y)}
function y(a){a=a.type;"compositionstart"==a?E.ef(!0):"compositionend"==a&&E.ef(!1)}
function D(a){var b=a.keyCode;sa=b;var c=(hc||gc)&&Hb(b)&&ca.qa(),d=b==N.Cd,e=b==N.Xb;ma=!1;b==N.pb&&(ma=E.Va());d&&((b=ca.Ua())&&O(b)?ca.Eb(a.shiftKey):F.defer(function(){ca.Eb(a.shiftKey)}));
if(c||d||e||ma)a.Hb=!0}
function O(a){return(a=pa[a.B()].Yj)&&a()}
function G(a){var b=a.keyCode,c=b==N.Xb,d=b==N.pb&&ma;if(b==N.Cd||c||d)a.Hb=!0}
function R(a){if(!ua){var b=a.cb;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,"keypress"!=b){var c=Hb(a);if("keydown"==b){if(E.xi(229==a),c)break a}else{var d=a!=sa;sa=-1;if(!c||d)break a}switch(a){case N.Xb:E.ih();break;case N.rf:E.lh();break;case N.sf:E.mh();break;case N.tf:E.oh();break;case N.qf:E.hh(ra);break;case N.DELETE:E.gh(ra);break;case N.uf:E.eh(ra)}}V();E.kh(z.value,ra,b)}}
function H(){na=!0;E.jh()}
function S(){na=!1;E.Be()}
function P(){ya||(ya=!0,F.T(z,"focus",H,99),F.T(z,"blur",S,99))}
function L(){va||(va=window.setInterval(X,fa.ci||50))}
function W(){va&&(qb(va),va=null)}
function X(){R({cb:"polling"})}
function ia(){gc&&Tb(z)}
function V(){if(na){var a=Eb(z);a&&(ra=a)}}
function da(){var a;F.Jb(window,"pagehide",function(){ua=!0;a=z.value});
F.Jb(window,"pageshow",function(b){ua=!1;(b.persisted||void 0!==a)&&E.jd(a)})}
var N=Bc,E,ca,F,K,pa,z,U,ka,fa,na,ya=!1,Ea,va,ra=hb(0),sa=-1,Z=!1,C,I,ba,aa,Y,ma,ua,ea,Ba,xa,M,Na,rb,Qa={R:function(a,b){xa=a;z=a.qe();Ba=a.Sa();a.qb()||(b.addRule(".gsib_a","width:100%;padding:4px 6px 0"),b.addRule(".gsib_a,.gsib_b","vertical-align:top"))},
H:function(a){E=a.get(J.I,Qa);F=a.get(J.U,Qa);ca=a.get(J.S,Qa);K=a.get(J.xa,Qa);pa=cc(a.P(J.RENDERER,Qa));a=a.Ta();U=a.Lc();ka=a.getId()},
setup:function(a){fa=a;M=a.Zc;Na=a.Jh;na=Gb(z);V();Cb&&F.T(z,"beforedeactivate",function(a){Z&&(Z=!1,a.Hb=!0)},10);
gc&&da();I=z;ea=!!a.yb[J.sa];(E.uh()||E.Xc()||ea||a.wg)&&x();a.fe&&(F.T(z,"blur",W,10),F.T(z,"focus",L,10),Ea=!0);F.Xa(8,ia);m();P()},
G:function(a){fa=a;var b=a.Ih;b&&(rb=xa.Ab(b));z.setAttribute("autocomplete","off");z.setAttribute("spellcheck",a.spellcheck);z.style.outline=a.Qe?"":"none";Ea&&L()},
B:function(){return J.ta},
F:function(){return 4},
D:function(){return{wk:a,le:b,qd:c,Ra:e,Mc:d,getHeight:f,Ca:h,re:l,Kg:k,ff:n,ld:q,select:p,refresh:t,focus:A,blur:r,ed:B,clear:v}},
O:function(){Ea&&W();fa.He&&F.zd(z,E.Be)}};
return Qa});Q.register(J.Ma,18,function(){function a(a,b){if(!V)return!1;X=b;x();for(var c=!1,d=0,e;e=a[d++];)t(e)&&(c=!0);return c}
function b(a){var b=y[a.B()];return b&&b.nh?b.nh(a):!1}
function c(a){return y[a.B()].Tc(null,a,D)}
function e(a){var b=y[a.B()];if(b&&b.Ac){var c=m.ea();return b.Ac(a,c)}return a.N()}
function d(a,b){if(!V)return!1;X=b;x();for(var c=!1,d=0,e;e=a[d++];)if(1==e)if(N)da.appendChild(N);else{e=r();var f=e.style;f.textAlign="center";f.whiteSpace="nowrap";e.dir=ia;f=Jb();f.style.position="relative";E=Jb();E.className="gssb_g";G.Fe&&(E.style.paddingBottom="1px");A(G.searchText,E,13);G.th?A(G.Cc,E,8):G.yh&&A(G.ri,E,14);f.appendChild(E);e.appendChild(f);N=e.parentNode}else 2==e?ca?da.appendChild(ca):(e=r(),f=e.style,f.padding="1px 4px 2px 0",f.fontSize="11px",f.textAlign="right",f=Ab("a"),
f.id="gssb_b",f.href="../../../www.google.com/support/websearch/bin/answer.py@hl="+G.Gb+"&answer=106230",f.innerHTML=G.learnMoreText,e.appendChild(f),ca=e.parentNode):3==e?(e=P.pop())?da.appendChild(e):(e=V.insertRow(-1),e.Uh=!0,e=e.insertCell(-1),f=Ab("div","gssb_l"),e.appendChild(f)):t(e)&&(c=!0);return c}
function f(a){B(a,F);var b=w.Y();b&&u.L(9,{index:a,suggestion:b[a],template:L[a]})}
function h(a){B(a,"");u.L(10)}
function l(){for(var a,b,c;c=H.pop();)a=c.B(),(b=R[a])||(b=R[a]=[]),b.push(c),a=c.M(),a.parentNode.removeChild(a);for(;a=da.firstChild;)a=da.removeChild(a),a.Uh?P.push(a):a!=N&&a!=ca&&S.push(a);L=[]}
function k(a){return(a=L[a])?a.isSelectable():!1}
function n(){x()}
function q(){return V}
function p(){return G.Ee||ia==X?W:null}
function t(a){var b=a.B(),c=y[b];if(!c)return!1;var d=(b=R[b])&&b.pop();d||(d=c.hc(D));c.Z(a,d);H.push(d);var e=d.M();b=r();b.className="gssb_a "+G.wd;b.appendChild(e);if(void 0!==a.Ba){L.push(d);d=X;var f=a.Ba();G.Eh&&(e.onmouseover=function(){w.wi(f)},e.onmouseout=function(){w.ki()});
e.onclick=function(b){m.fc();a.Jc()&&m.Ob(a.N());w.Ze();w.fh(f);b=b||ec(e).event;c.Da(b,a,D)}}else d=ia;
Qb(b,d);return!0}
function A(a,b,c){var d=Ab("input");d.type="button";d.value=kb(a);d.onclick=function(){D.search(m.na(),c)};
if(G.sh){a="lsb";var e=Ab("span");var f=Ab("span");e.className="ds";f.className="lsbb";e.appendChild(f);f.appendChild(d)}else a="gssb_h",e=d;d.className=a;b.appendChild(e)}
function r(){var a=S.pop();if(a)return da.appendChild(a),a.firstChild;a=V.insertRow(-1);a=a.insertCell(-1);a.className=G.wd;a.onmousedown=v;return a}
function B(a,b){var c=L[a];c&&c.isSelectable()&&(c.M().parentNode.parentNode.className=b)}
function v(a){a=a||ec(V).event;a.stopPropagation?a.stopPropagation():Bb||Cb&&m.ld();return!1}
function x(){if(E)if(G.Vd){var a=G.Vd;0<a&&(E.style.width=a+"px")}else a=m.Ca()-3,0<a&&(E.style.width=a+"px")}
var w,u,m,y,D,O,G,R={},H=[],S=[],P=[],L=[],W,X,ia,V,da,N,E,ca,F,K={R:function(a,b){O=a;ia=a.Sa();b.addRule(".gssb_a","padding:0 7px");b.addRule(".gssb_a,.gssb_a td","white-space:nowrap;overflow:hidden;line-height:22px");b.addRule("#gssb_b","font-size:11px;color:#36c;text-decoration:none");b.addRule("#gssb_b:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".gssb_g","text-align:center;padding:8px 0 7px;position:relative");b.addRule(".gssb_h","font-size:15px;height:28px;margin:0.2em"+
(hc?";-webkit-appearance:button":""));b.addRule(".gssb_i","background:#eee");b.addRule(".gss_ifl","visibility:hidden;padding-left:5px");b.addRule(".gssb_i .gss_ifl","visibility:visible");b.addRule("a.gssb_j","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule("a.gssb_j:hover","text-decoration:underline");b.addRule(".gssb_l","height:1px;background-color:#e5e5e5");b.addRule(".gssb_m","color:#000;background:#fff")},
H:function(a){w=a.get(J.S,K);u=a.get(J.U,K);m=a.get(J.I,K);D=a.get(J.ka,K);y=cc(a.P(J.RENDERER,K))},
setup:function(a){G=a;V=Ib();a=Ab("tbody");V.appendChild(a);da=V.getElementsByTagName("tbody")[0]},
G:function(a){G=a;var b=a.md;b&&(W=O.Ab(b));V.className=a.Fi||"gssb_m";F=a.Di||"gssb_i"},
B:function(){return J.Ma},
F:function(){return 18},
D:function(){return{ii:a,Ac:e,Eb:c,Va:b,Z:d,Dh:f,Tb:h,clear:l,isSelectable:k,Ya:n,M:q,Db:p}}};
return K});Q.register(J.fb,346,function(){function a(a){a=c.getParameters(a);for(var d in h)d in a||(a[d]=h[d]);b(e+db(a))}
function b(a){var b=new Image,c=f;b.onerror=b.onload=b.onabort=function(){try{delete d[c]}catch(p){}};
d[f]=b;b.src=a;f++}
var c,e,d=[],f=0,h,l={H:function(a){c=a.get(J.ha,l)},
G:function(a){e="//"+(a.Vh||"www."+a.gc)+"/gen_204?";h=a.Bi||{}},
B:function(){return J.fb},
F:function(){return 346},
D:function(){return{od:a}}};
return l});Q.register(J.mb,21,function(){function a(a){l(a);var b=a.ja();if((!b||!b.Je())&&p)for(b=0;b<p.length;++b)p[b].update(a)}
function b(a){var b=q[a.ke()]||null;if(b)++t;else if(p&&!a.Je())for(var c=0;c<p.length;++c)if(b=p[c].get(a)){l(b);++A;break}return b?Ec(a,b.Y(),b.getParameters(),b.Le(),b.dd(),b.Nh()):null}
function c(){return t}
function e(){return A}
function d(){A=t=0}
function f(a){var b,c,d;for(d in q){var e=q[d];e=e.Y();for(c=0;b=e[c++];)if(b.B()==a){delete q[d];break}}k()}
function h(){q={};k()}
function l(a){a&&a.dd()&&(q[a.ja().ke()]=a)}
function k(){if(p)for(var a=0;a<p.length;++a)p[a].reset()}
function n(a,b){return b.X()-a.X()}
var q={},p,t,A,r={H:function(a){p=a.P(J.nb,r);p.sort(n)},
G:function(){d()},
B:function(){return J.mb},
F:function(){return 21},
D:function(){return{put:a,get:b,yg:c,Ic:e,Ea:d,Zf:f,Yf:h}}};
return r});Q.register(J.eb,190,function(){function a(){q&&k.ec(l)}
function b(){q&&k.Nb(l)}
function c(){q&&n.ec(l)}
function e(){q&&n.Nb(l)}
var d,f,h,l,k,n,q=!1,p={R:function(a,b){function c(a){return"box-shadow:"+a+"-moz-box-shadow:"+a+"-webkit-box-shadow:"+a}
h=a;b.addRule(".gsfe_a","border:1px solid #b9b9b9;border-top-color:#a0a0a0;"+c("inset 0px 1px 2px rgba(0,0,0,0.1);"));b.addRule(".gsfe_b","border:1px solid #4d90fe;outline:none;"+c("inset 0px 1px 2px rgba(0,0,0,0.3);"))},
H:function(a){d=a.get(J.U,p);f=a.get(J.I,p)},
setup:function(f){var p=f.Dc;if(l=p?h.Ab(p):null)d.Xa(12,c),d.Xa(13,e),d.T(l,"mouseover",a),d.T(l,"mouseout",b),k=Kc(f.sg||"gsfe_a"),n=Kc(f.rg||"gsfe_b")},
G:function(){q=!0;l&&f.Rh()&&n.ec(l)},
B:function(){return J.eb},
F:function(){return 190},
O:function(){q=!1;l&&(k.Nb(l),n.Nb(l))}};
return p});function Kc(a){var b=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)");return{ec:function(c){c&&!b.test(c.className)&&(c.className+=" "+a)},
Nb:function(a){a&&(a.className=a.className.replace(b," "))}}}
;Q.register(J.RENDERER,33,function(){function a(a){q=a.hi;p=a.We;t=a.Ve;A=a.Bc?a.Cc:""}
function b(a){return Lc(f,h,l,k,n,a,q,t)}
function c(a,b){b.Z(a.Kc(),a.N(),a.Ba(),p,A)}
function e(a,b,c){c.search(b.N(),1)}
function d(){return 35}
var f,h,l,k,n,q,p,t,A,r={R:function(a,b){b.addRule("a.gspqs_a","padding:0 3px 0 8px");b.addRule(".gspqs_b","color:#666;line-height:22px")},
H:function(a){l=a.get(J.W,r);k=a.get(J.I,r);h=a.get(J.ua,r);f=a.get(J.la,r);n=a.get(J.S,r)},
setup:a,G:a,B:function(){return J.RENDERER},
F:function(){return 33},
D:function(){return{hc:b,Z:c,Da:e,Tc:bb,Pc:d}}};
return r});function Lc(a,b,c,e,d,f,h,l){function k(a){m=!0;b.Xe(x,n);return Vb(a)}
function n(){m&&(c.cg(35),a.dg(),q.onmouseover=q.onmouseout=q.onclick=null,p.style.display="none",t.style.display="",d.ye()==w&&e.cf(),d.Jg()==w&&(d.Ze(),e.ie()),u=!1)}
var q,p,t,A,r,B,v,x,w,u=!0,m=!1;(function(){q=Jb();q.className="gsq_a";var a=Ib();q.appendChild(a);p=a.insertRow(-1);var b=p.insertCell(-1);A=Ab("span");A.style.color="#52188c";b.appendChild(A);if(0!=h){B=Ab("a");B.href="#ps";B.className="gspqs_a gssb_j";var c=p.insertCell(-1);c.appendChild(B);(2==h?c:b).style.width="100%";t=a.insertRow(-1);v=t.insertCell(-1);v.className="gspqs_b";v.innerHTML=l;v.colSpan="2"}})();
return{M:function(){return q},
B:function(){return 35},
isSelectable:function(){return u},
Z:function(a,b,c,d,l){m=!1;u=!0;x=b;w=c;p.style.display="";A.innerHTML=a;0!=h&&(t.style.display="none",B.innerHTML=d,B.onclick=k);l&&!r&&(r=Xb(p),r.onclick=function(a){e.fc();e.Ob(x);f.search(x,9);return Vb(a)});
l?(r.innerHTML=l+" &raquo;",r.style.display=""):r&&(r.style.display="none")}}}
;Q.register(J.ua,188,function(){function a(){var a={};d&&(a.tok=e);return a}
function b(a,b){c.ti(a,b)}
var c,e,d,f={H:function(a){c=a.get(J.lb,f)},
G:function(a){e=a.Vb;var b="https:"==document.location.protocol;a=!!a.Rb[35];d=!!(c&&e&&b&&a)},
B:function(){return J.ua},
F:function(){return 188},
D:function(){return{Ug:a,Xe:b}}};
return f});Q.register(J.lb,186,function(){function a(a,b){n[a]=b;var p=[];gb("delq",a,p);gb("client",l,p);gb("callback","google.sbox.d"+e,p);var q=d;gb("tok",f,p);h&&gb("authuser",h,p);k=Ab("script");k.src=q+p.join("&");c.appendChild(k)}
function b(a){k&&(c.removeChild(k),k=null);a=a[0];var b=n[a];b&&(delete n[a],b())}
var c=tb(),e,d,f,h,l,k,n={},q={H:function(a){a.get(J.ua,q);e=a.Ta().getId()},
setup:function(){window.google.sbox["d"+e]=b},
G:function(a){d="https://"+(a.Ye||"clients1."+a.gc)+"/complete/deleteitems?";f=a.Vb;h=a.authuser;l=a.clientName},
B:function(){return J.lb},
F:function(){return 186},
D:function(){return{ti:a}},
O:function(){k&&(c.removeChild(k),k=null)}};
return q});Q.register(J.La,187,function(){function a(a){var b=c.Ug(),d;for(d in b)a.setParameter(d,b[d]);return 1}
function b(){return 12}
var c,e={H:function(a){c=a.get(J.ua,e)},
B:function(){return J.La},
F:function(){return 187},
D:function(){return{Oc:a,X:b}}};
return e});Q.register(J.nb,98,function(){function a(){return 3}
function b(a){if(d){var b=a.ja(),c=a.Y();if(c.length){var e=b.pa();a:{b=Number.MAX_VALUE;for(var l,k=0;l=c[k++];){if(!f[l.B()]){b=-1;break a}l=l.N();b=Math.min(l.length,b)}}if(-1!=b){var n=c[0].N();if(ob(n,e,!0))for(k=e.length+1;k<=b;){e=null;for(l=0;n=c[l++];){n=n.N();if(k>n.length)return;n=n.substr(0,k);if(!e)e=n;else if(e!=n)return}h[e]=a;++k}}}}}
function c(a){if(d){var b=h[a.pa()];if(b){var c=a.ue(),e=a.pa();b.ja().pa();for(var f=b.getParameters(),n=k||!f.we("k"),q=[],x,w,u=b.Y(),m=0,y;y=u[m++];)w=y.N(),x=n?l.bold(c,w):jb(w),q.push(Gc(x,w,y.Ba(),y.B(),y.Rc(),y.getParameters()));delete h[e];return Ec(a,q,f,!0,b.dd(),!1)}}return null}
function e(){h={}}
var d=!0,f,h={},l,k,n={H:function(a){l=a.get(J.gb,n)},
setup:function(){f=Wa([0])},
G:function(a){k=a.Uc;d=a.ee},
B:function(){return J.nb},
F:function(){return 98},
D:function(){return{X:a,update:b,get:c,reset:e}},
O:function(){d=!1}};
return n});Q.register(J.RENDERER,31,function(){function a(){return Mc()}
function b(a,b){var c=a.getParameters(),d=c.getString("a");c=c.getString("b");b.Z(d,c,a.N())}
function c(a,b,c){c.search(b.N(),1)}
function e(){return 33}
return{R:function(a,b){b.addRule(".gspr_a","padding-right:1px")},
B:function(){return J.RENDERER},
F:function(){return 31},
D:function(){return{hc:a,Z:b,Da:c,Tc:bb,Pc:e}}}});function Mc(){var a=Jb();a.className="gspr_a";return{B:function(){return 33},
M:function(){return a},
isSelectable:function(){return!0},
Z:function(b,c){a.innerHTML=c}}}
;Q.register(J.RENDERER,20,function(){function a(a){return Nc(d,a)}
function b(a,b){b.Z(a.Kc(),a.N(),f)}
function c(a,b,c){c.search(b.N(),1)}
function e(){return 0}
var d,f,h={R:function(a,b){b.addRule(".gsq_a","padding:0")},
H:function(a){d=a.get(J.I,h)},
G:function(a){f=a.Bc?a.Cc:""},
B:function(){return J.RENDERER},
F:function(){return 20},
D:function(){return{hc:a,Z:b,Da:c,Tc:bb,Pc:e}}};
return h});function Nc(a,b){var c,e,d,f,h;(function(){c=Jb();c.className="gsq_a";var a=Ib();c.appendChild(a);e=a.insertRow(-1);a=e.insertCell(-1);a.style.width="100%";d=Ab("span");a.appendChild(d)})();
return{M:function(){return c},
B:function(){return 0},
isSelectable:function(){return!0},
Z:function(c,k,n){d.innerHTML=c;h=k;n&&!f&&(f=Xb(e),f.onclick=function(c){a.fc();a.Ob(h);b.search(h,9);return Vb(c)});
n?(f.innerHTML=n+" &raquo;",f.style.display=""):f&&(f.style.display="none")}}}
;Q.register(J.wa,78,function(){function a(){return B}
function b(){return 78}
function c(){return 3}
function e(){return m}
function d(){return{tooltip:r}}
function f(a){if(!D)a=document.createElement("script"),a.src="../../../www.google.com/textinputassistant/"+u+"/"+w+"_tia.js",document.body.appendChild(a),D=!0,p.add(3);else if(v.onclick)v.onclick(a)}
function h(){t.dismiss()}
function l(){A.Bh()}
function k(a){A.zi(78,a)}
function n(a){A.Gi(78,a)}
function q(a){m.className="gsok_a gsst_e "+a}
var p,t,A,r,B,v,x,w,u,m,y,D,O={R:function(a,b){y=a;a.qb()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))},
H:function(a){p=a.get(J.ga,O);t=a.get(J.S,O);A=a.get(J.xa,O)},
setup:function(a){B=!!a.Fb;x=a.Re;w=a.Lb;u=a.Zh;r=a.Yh;(m=y.get("gs_ok"))?v=m.firstChild:(v=Ab("img"),v.src=x+"/tia.png",m=Ab("span","gsok_a gsst_e"),m.id=y.getId("gs_ok"),m.appendChild(v));v.ds=h;v.hd=l;v.sc=q;v.sd=k;v.td=n;v.setAttribute("tia_field_name",y.qe().name);v.setAttribute("tia_disable_swap",!0)},
G:function(a){a.Wc&&(B=!!a.Fb);v.setAttribute("tia_property",a.Se)},
B:function(){return J.wa},
F:function(){return 78},
D:function(){return{isEnabled:a,Ae:b,X:c,M:e,xe:d,Da:f}}};
return O});Q.register(J.xa,174,function(){function a(){return 174}
function b(a){V!=a&&(R.dir=V=a,f())}
function c(){return R}
function e(a){(a=S[a])&&a.style&&(a.style.display="")}
function d(a){(a=S[a])&&a.style&&(a.style.display="none")}
function f(){P&&(S[P].className="gsst_a",u.hide(),P=null)}
function h(a,b){P=a;var c=S[a];c.className="gsst_a gsst_g";var d=L.lastChild;d!=b&&(d==W?L.appendChild(b):L.replaceChild(b,d));u.Qb(174);u.show();c=c.clientWidth;W.style.width=c+"px";W.style.left="rtl"==V?"0":L.clientWidth-c+"px"}
function l(a,b){P==a?f():h(a,b)}
function k(a){a.horizontalAlignment="rtl"==V?"left":"right";a.Ke=!1}
function n(){return L}
function q(){return G.Ee||ia==V?da:null}
function p(){f()}
function t(){return 174}
function A(a,b){return b.X()-a.X()}
function r(){X!=P&&f()}
function B(){for(var a,b=0,c;c=D[b++];)if(c.isEnabled()){a=!0;var d=Ab("a","gsst_a");w(d,c);d.appendChild(c.M());R.appendChild(d)}R.style.display=a?"":"none"}
function v(){X=null}
function x(){S={};for(var a=0,b;b=D[a++];)if(b.isEnabled()){var c=b.Ae(),e=b.M().parentNode;e.onclick=b.Da;e.onmouseover=function(){X=c};
e.onmouseout=v;S[c]=e;b.xe&&(b=b.xe(),b.ak&&d(c),(b=b.tooltip)&&!O.ud(e,b)&&(e.title=b))}}
function w(a,b){a.href="javascript:void(0)";fc(a);a.onkeydown=function(a){a=a||window.event;var c=a.keyCode;if(13==c||32==c)b.Da(a),y.ie(),Vb(a)}}
var u,m,y,D,O,G,R,H,S={},P,L,W,X,ia,V,da,N,E={R:function(a,b){H=a;ia=a.Sa();a.qb()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e",bc(.55)),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",bc(.72)),b.addRule(".gsst_a:active .gsst_e",bc(1)),b.addRule(".gsst_f",
"background:white;text-align:left"),b.addRule(".gsst_g","background-color:white;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"margin:-1px -3px;padding:0 6px"),b.addRule(".gsst_h","background-color:white;height:1px;margin-bottom:-1px;position:relative;top:-1px"))},
H:function(a){u=a.get(J.fa,E);m=a.get(J.U,E);y=a.get(J.I,E);D=a.P(J.wa,E);O=a.Aa()},
setup:function(a){N=a.Wc;D.sort(A);R=H.get("gs_st");if(!R){R=Jb("gsst_b");R.id=H.getId("gs_st");if(a=a.Zc)R.style.lineHeight=a+"px";B()}x()},
G:function(a){G=a;(a=a.md)&&(da=H.Ab(a));if(N){a=0;for(var b;b=D[a++];){var c=!!S[b.Ae()];if(b.isEnabled()!=c){for(;R.hasChildNodes();)R.removeChild(R.lastChild);B();x();break}}}W=Jb("gsst_h");L=Jb("gsst_f");L.dir="ltr";L.appendChild(W);m.Xa(13,r)},
B:function(){return J.xa},
F:a,D:function(){return{qd:b,M:c,rk:e,Wj:d,Bh:f,zi:h,Gi:l}},
Qa:function(){var b={Td:k,M:n,Db:q,Ce:p,Ya:bb,Nc:t};return[{R:bb,H:bb,setup:bb,G:bb,B:function(){return J.hb},
F:a,D:function(){return b},
Qa:bb,O:bb}]}};
return E});lc=function(){function a(a){return 0<=b.indexOf(a)}
var b=window.navigator.userAgent,c={};window.opera?c[2]=!0:a("MSIE")||a("Trident")?c[0]=!0:a("WebKit")?(c[5]=!0,a("Chrome")?c[3]=!0:a("Android")?c[7]=!0:a("Safari")&&(c[4]=!0),a("iPad")&&(c[6]=!0)):a("Gecko")&&(c[1]=!0);return c};function Oc(){function a(a){return{api:a,install:a.a,G:a.b,O:a.c,Bj:a.d,ij:a.e,ea:a.f,na:a.g,qa:a.h,Wa:a.i,te:a.j,Rg:a.k,ck:a.l,Lj:a.m,Sf:a.n,sb:a.o,vj:a.p,jf:a.q,Aj:a.r,rj:a.s,Ib:a.t,df:a.u,focus:a.v,blur:a.w,Me:a.x,ma:a.y,jd:a.z,ek:a.aa,Ea:a.ab,search:a.ad,hk:a.ae,qk:a.af,ub:a.ag,Ua:a.ah,Bk:a.ai,Sd:a.al,isActive:a.am,fi:a.an,ya:a.ao,Fg:a.ap,Dj:a.aq,Lc:a.ar,getId:a.as,sj:a.at,rd:a.au,nk:a.av,ed:a.aw,hf:a.ax,Pb:a.ay,Qh:a.az,Qc:a.ba,kk:a.bb,Jj:a.bc,od:a.bd,Ej:a.be,gg:a.bf}}
return{oa:function(b,c,e,d){try{var f=window.google.sbox(b,c,e,d);return a(f)}catch(h){return null}},
translate:function(b){return a(b.api||b)}}}
;var Pc=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(Ga(a))return Ga(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Qc=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var e=a.length,d=Ga(a)?a.split(""):a,f=0;f<e;f++)f in d&&b.call(c,d[f],f,a)};
function Rc(a){var b=a.length;if(0<b){for(var c=Array(b),e=0;e<b;e++)c[e]=a[e];return c}return[]}
;var Sc=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Tc(a){var b=Uc,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
;window.google||(window.google={});window.google.sbox=function(a,b,c,e){function d(){m.O()}
function f(a){H.jd(a||"")}
function h(){return K}
function l(){return F}
function k(){return H.na()}
function n(){return N.Ua()}
function q(){G.L(8)}
function p(a){return L.getParameters(a)}
function t(){return z||!!D&&D.ya()}
function A(){return P.Ng()}
function r(a){a=a.lf||tb();a=ec(a);void 0==a.nextSearchboxId&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function B(){if(a)for(var b=a;b=b.parentNode;){var c=b.dir;if(c)return c}return"ltr"}
function v(a){a=xb(a);a.Rb[35]||(a.Vb="");var b=a.Lb;b?a.Lb=b.toLowerCase():a.Fb=!1;a.zb&&!a.Bc&&(a.zb=!1);mc||(a.Oe=!1);return a}
function x(a,b){var c=b.exec(a);return c&&c[1]?parseInt(c[1],10)||0:0}
function w(){var b=ec(a),c=Zb(b);G.Jb(b,"resize",function(){var a=Zb(b);if(a.pf!=c.pf||a.Ge!=c.Ge)c=a,q()})}
function u(a){var b=a.yb,c=b[J.Gd],d=b[J.cc],e=b[J.Ld],f=b[J.Od],h=b[J.Na];e=d||f||e;b[J.Yb]||h||c||e?(a.yb[J.Yb]=!0,a.yb[J.Id]=!0,e?(a=Ya(a.Gb),!d||gc&&(kc||a)||Cb&&a?(K=3,b[J.cc]=!1,b[J.Kd]=!1):K=2):K=1):K=0}
var m,y,D,O,G,R,H,S,P,L,W,X,ia,V,da,N,E,ca,F,K,pa=!1,z,U={a:function(c){if(!pa){c=v(c);F=null==e?r(c):e;var d=dc(a),f=B(),h=!!d.getElementById("gs_id"+F),k=["gssb_c","gssb_k"];c.xd&&k.push(c.xd);k=Ic(c.lf,c.zh,c.mg,F,k);u(c);z=c.ya;m=Cc(ka,c.Xd||{},{qb:function(){return h},
get:function(a){return d.getElementById(a+F)},
Ab:function(a){return d.getElementById(a)},
oe:function(){return b},
Sa:function(){return f},
getId:function(a){return a+F},
qe:function(){return a}},k,U,c);
y=m.get(J.fb,U);D=m.get(J.sa,U);O=m.get(J.fa,U);G=m.get(J.U,U);R=m.get(J.W,U);H=m.get(J.I,U);S=m.get(J.ta,U);P=m.get(J.ga,U);L=m.get(J.ha,U);W=m.get(J.ua,U);X=m.get(J.Ff,U);ia=m.get(J.va,U);V=m.get(J.Jf,U);da=m.get(J.ca,U);N=m.get(J.S,U);E=m.get(J.Na,U);ca=m.get(J.ka,U);w();pa=!0}},
b:function(a){d();a=v(a);u(a);z=a.ya;m.G(a)},
c:d,d:function(){return b},
e:function(a,b){return Rb(a,b)},
f:function(){return H.ea()},
g:k,h:function(){return N.qa()},
i:function(){return N.Wa()},
j:p,k:function(a,b){a||(a=L.getParameters(b));return db(a)},
l:function(){return N.isVisible()},
m:function(){return N.Pg()},
n:function(a,b){G.Jb(a,"click",function(a){ca.search(k(),b);return Ub(a)})},
o:function(){R.sb()},
p:function(){N.dismiss()},
q:function(a){H.jf(a||"")},
r:function(){return O.getHeight()},
s:function(){H.clear()},
t:function(a){return R.Ib(a)},
u:function(){H.df()},
v:function(){S.focus()},
w:function(){S.blur()},
x:function(){return R.Me()},
y:function(){var a=da.ma();return a?Xa(a.pe()):null},
z:f,aa:function(a){a=ia.kd(a);return Xa(a.pe())},
ab:function(){L.reset()},
ad:function(a,b){ca.search(a,b)},
ae:function(){E&&E.refresh()},
af:function(a){N.gf(a)},
ag:function(){N.ub()},
ah:n,ai:q,al:function(){H.Sd()},
am:function(){return m&&m.isActive()},
an:function(a){D&&D.fi(a)},
ao:t,ap:function(){return t()&&D?D.Fg():""},
aq:function(a,b){return Sb(a,b)},
ar:h,as:l,at:function(){E&&E.clear()},
au:function(a,b){f(a);N.isEnabled()&&N.rd(a,b,!1)},
av:function(a){G.L(15,{query:a})},
aw:function(){return S.ed()},
ax:function(a){R.hf(a)},
ay:function(a){O.Pb(a)},
az:function(a){return!!X&&X.Qh(a)},
ba:function(){var a,b=da.ma();if(b){var c=b.Hc();c&&((a=c.Qc())||(a=b.getParameters().getString("o")))}return a||""},
bb:function(a,b){return W?(W.Xe(a,b),!0):!1},
bc:function(a,b){switch(a){case "oq":case "gs_l":return p(b)[a]||null;case "gs_ssp":var c;a:{if((c=n())&&46==c.B()&&(c=c.getParameters().getString("g")))break a;c=null}return c;default:return null}},
bd:function(a){y&&y.od(a)},
be:A,bf:function(a){return 6==A()&&!!V&&V.gg(a)},
getId:l,Lc:h};var ka=Jc(c);(function(a){var b=ka.Ec(),c=x(a,/Version\/(\d+)/);c||(c=x(a,/(?:Android|Chrome|Firefox|Opera|MSIE)[\s\/](\d+)/));c||(c=x(a,/Trident[^)]*rv:(\d+)/));a=c;zb=(Cb=b[0])&&8>=a;yb=Cb&&7>=a;gc=b[1];Bb=b[2];hc=b[5];ic=b[4];mc=b[3];jc=b[7]})(window.navigator.userAgent);
kc=/Mac/.test(navigator&&(navigator.platform||navigator.appVersion)||"");return U};var Vc;(function(){function a(){return!0}
function b(a){var b=0<=a.indexOf("?")?"&":"?",c=h.te();return a+b+h.Rg(c)}
var c=/MSIE\s+(\S+)/,e=/Version\/(\S+)/,d=/\/(movie|show)s?($|[?#/])/i,f=/\/results\?(.*&)?search_type=(movies|shows)($|[&#])/i,h,l,k,n,q,p,t,A={a:function(){return k},
b:function(b,c){a(h.te(c))&&l.submit()},
d:function(a){p(b(a))},
e:b,r:function(a){t?(a.addRule(".gsfs","font-size:1.6rem;color:#222"),a.addRule(".gssb_a","padding:4px 24px 4px 65px"),a.addRule(".gssb_m","padding: 16px 0"),a.addRule(".gssb_e","border-top: 0")):(a.addRule(".gsfi","font-size:16px"),a.addRule(".gsfs","font-size:16px"),a.addRule("a.gssb_j","font-size:12px;color:#03c"),a.addRule(".gssb_a,.gssb_a td","line-height:20px"),a.addRule(".gssb_a","padding:0 6px"),a.addRule(".gssb_c","z-index:2000000007"),a.addRule(".gssb_i td","background:#eee"),a.addRule(".gssb_k",
"z-index:2000000006"),a.addRule(".gssb_l","margin:2px 0"),a.addRule(".gsib_a","padding:0 6px"),a.addRule(".gsib_a .gsfi","position:relative !important"),a.addRule(".gsok_a","padding:0"),a.addRule(".gsok_a img","display:block"),a.addRule(".gsfe_b",["border:1px solid #1c62b9;",a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);"),"outline:none;"].join("")))}};
(function(){function a(a){return(a=b.match(a))?parseInt(a[1],10):NaN}
var b=window.navigator.userAgent;k=lc();k[2]?q=a(e):k[0]&&(q=a(c));n=0<=b.indexOf("Windows")})();
Vc=function(b,c,e,x,w,u,m){l=b;p=u;m&&(a=m);t=x.IS_POLYMER;u=Oc();m=zc().oa();var r="youtube";m.clientName=r;m.requestIdentifier=r;m.Yd="yt";m.Gb=x.REQUEST_LANGUAGE;m.kf=x.REQUEST_DOMAIN;m.qh=!1;m.Sb=0;m.Pe=!1;m.zb=!1;m.Qe=!1;m.Uc=!0;m.cd="gsfi";m.wd="gsfs";m.Th=!0;r=window.location.href;r=d.test(r)||f.test(r);m.Ie=r;m.Fb=x.HAS_ON_SCREEN_KEYBOARD;m.Lb=x.REQUEST_LANGUAGE;m.Re="../../../www.gstatic.com/inputtools/images";m.Se="youtube";m.de=!0;m.Pa="fixed";x.PQ&&(m.Te=x.PQ);m.Vb=x.PSUGGEST_TOKEN;m.authuser=
x.SESSION_INDEX;m.Ve=w.SUGGESTION_DISMISSED_LABEL;m.We=w.SUGGESTION_DISMISS_LABEL;m.Rb=Wa([0,33,35]);m.Dc="masthead-search-terms";m.Zc=30;m.Xd={};k[2]||(m.De=!0);w=k[2];r=k[4];-1!=window.location.href.indexOf("/watch?")&&(w||n&&r)&&(r="youtube-reduced",m.clientName=r,m.requestIdentifier=r,m.pg=4);m.md=m.Dc;w=-3;var v=r=0;n&&k[0]&&8==q&&(w=-5);x.IS_FUSION&&(r=-6,w=8);t&&(w=10,r=-67,v=79);m.vb=[w,r,v];w=[0];k[0]&&8==q&&(w[0]=-1);m.Ud=w;Ya(x.REQUEST_LANGUAGE)&&(m.fe=!0);if(x=x.SUGG_EXP_ID)m.vd=x;h?h.G(m):
(h=u.oa(c,b,A),h.install(m),e&&(h.Sf(e,12),e.onclick=null))};
return A})();function Wc(){this.A=("undefined"==typeof document?null:document)||{cookie:""}}
g=Wc.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
g.set=function(a,b,c,e,d,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');Aa(c)||(c=-1);d=d?";domain="+d:"";e=e?";path="+e:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Ta()+1E3*c)).toUTCString();this.A.cookie=a+"="+b+d+e+c+f};
g.get=function(a,b){for(var c=a+"=",e=(this.A.cookie||"").split(";"),d=0,f;d<e.length;d++){f=Sc(e[d]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var e=Aa(this.get(a));this.set(a,"",0,b,c);return e};
g.isEmpty=function(){return!this.A.cookie};
g.clear=function(){for(var a=(this.A.cookie||"").split(";"),b=[],c=[],e,d,f=0;f<a.length;f++)d=Sc(a[f]),e=d.indexOf("="),-1==e?(b.push(""),c.push(d)):(b.push(d.substring(0,e)),c.push(d.substring(e+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Xc=new Wc;Xc.C=3950;function Yc(a,b){this.K=a;this.V=b;this.C=0;this.A=null}
Yc.prototype.get=function(){if(0<this.C){this.C--;var a=this.A;this.A=a.next;a.next=null}else a=this.K();return a};
Yc.prototype.put=function(a){this.V(a);100>this.C&&(this.C++,a.next=this.A,this.A=a)};var Zc;a:{var $c=za.navigator;if($c){var ad=$c.userAgent;if(ad){Zc=ad;break a}}Zc=""}function T(a){return-1!=Zc.indexOf(a)}
;function bd(){return(T("Chrome")||T("CriOS"))&&!T("Edge")}
;function cd(a){za.setTimeout(function(){throw a;},0)}
var dd;
function ed(){var a=za.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!T("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),e="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=Sa(function(a){if(("*"==e||a.origin==e)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,e)}}});
if("undefined"!==typeof a&&!T("Trident")&&!T("MSIE")){var b=new a,c={},e=c;b.port1.onmessage=function(){if(Aa(c.next)){c=c.next;var a=c.Wd;c.Wd=null;a()}};
return function(a){e.next={Wd:a};e=e.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){za.setTimeout(a,0)}}
;function fd(){this.C=this.A=null}
var hd=new Yc(function(){return new gd},function(a){a.reset()});
fd.prototype.add=function(a,b){var c=hd.get();c.set(a,b);this.C?this.C.next=c:this.A=c;this.C=c};
fd.prototype.remove=function(){var a=null;this.A&&(a=this.A,this.A=this.A.next,this.A||(this.C=null),a.next=null);return a};
function gd(){this.next=this.scope=this.A=null}
gd.prototype.set=function(a,b){this.A=a;this.scope=b;this.next=null};
gd.prototype.reset=function(){this.next=this.scope=this.A=null};function id(a){jd||kd();ld||(jd(),ld=!0);md.add(a,void 0)}
var jd;function kd(){if(za.Promise&&za.Promise.resolve){var a=za.Promise.resolve(void 0);jd=function(){a.then(nd)}}else jd=function(){var a=nd;
"function"!=Ja(za.setImmediate)||za.Window&&za.Window.prototype&&!T("Edge")&&za.Window.prototype.setImmediate==za.setImmediate?(dd||(dd=ed()),dd(a)):za.setImmediate(a)}}
var ld=!1,md=new fd;function nd(){for(var a;a=md.remove();){try{a.A.call(a.scope)}catch(b){cd(b)}hd.put(a)}ld=!1}
;function od(){return T("iPhone")&&!T("iPod")&&!T("iPad")}
;var pd=T("Opera"),qd=T("Trident")||T("MSIE"),rd=T("Edge"),sd=T("Gecko")&&!(-1!=Zc.toLowerCase().indexOf("webkit")&&!T("Edge"))&&!(T("Trident")||T("MSIE"))&&!T("Edge"),td=-1!=Zc.toLowerCase().indexOf("webkit")&&!T("Edge"),ud=T("Macintosh"),vd=T("Windows"),xd=T("Android"),yd=od(),zd=T("iPad"),Ad=T("iPod");function Bd(){var a=za.document;return a?a.documentMode:void 0}
var Cd;a:{var Dd="",Ed=function(){var a=Zc;if(sd)return/rv:([^\);]+)(\)|;)/.exec(a);if(rd)return/Edge\/([\d\.]+)/.exec(a);if(qd)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(td)return/WebKit\/(\S+)/.exec(a);if(pd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ed&&(Dd=Ed?Ed[1]:"");if(qd){var Fd=Bd();if(null!=Fd&&Fd>parseFloat(Dd)){Cd=String(Fd);break a}}Cd=Dd}var Gd=Cd,Hd;var Id=za.document;Hd=Id&&qd?Bd()||("CSS1Compat"==Id.compatMode?parseInt(Gd,10):5):void 0;var Jd=T("Firefox"),Kd=od()||T("iPod"),Ld=T("iPad"),Md=T("Android")&&!(bd()||T("Firefox")||T("Opera")||T("Silk")),Nd=bd(),Od=T("Safari")&&!(bd()||T("Coast")||T("Opera")||T("Edge")||T("Silk")||T("Android"))&&!(od()||T("iPad")||T("iPod"));function Pd(){this.K=this.K;this.V=this.V}
Pd.prototype.K=!1;Pd.prototype.dispose=function(){this.K||(this.K=!0,this.ic())};
Pd.prototype.ic=function(){if(this.V)for(;this.V.length;)this.V.shift()()};function Qd(){this.A="";this.C=Rd}
Qd.prototype.Hh=!0;function Sd(a){return a instanceof Qd&&a.constructor===Qd&&a.C===Rd?a.A:"type_error:SafeUrl"}
var Td=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Ud(a){if(a instanceof Qd)return a;a=a.Hh?a.A:String(a);Td.test(a)||(a="about:invalid#zClosurez");return Vd(a)}
var Rd={};function Vd(a){var b=new Qd;b.A=a;return b}
Vd("about:blank");function Wd(a,b,c){for(var e=0;a&&(null==c||e<=c);){if(b(a))return a;a=a.parentNode;e++}return null}
;var Xd="StopIteration"in za?za.StopIteration:{message:"StopIteration",stack:""};function Yd(){}
Yd.prototype.next=function(){throw Xd;};
Yd.prototype.ia=function(){return this};
function Zd(a){if(a instanceof Yd)return a;if("function"==typeof a.ia)return a.ia(!1);if(Ka(a)){var b=0,c=new Yd;c.next=function(){for(;;){if(b>=a.length)throw Xd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function $d(a,b){if(Ka(a))try{Qc(a,b,void 0)}catch(c){if(c!==Xd)throw c;}else{a=Zd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Xd)throw c;}}}
function ae(a){if(Ka(a))return Rc(a);a=Zd(a);var b=[];$d(a,function(a){b.push(a)});
return b}
;function be(a,b){this.K={};this.A=[];this.V=this.C=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var e=0;e<c;e+=2)this.set(arguments[e],arguments[e+1])}else if(a)if(a instanceof be)for(c=ce(a),e=0;e<c.length;e++)this.set(c[e],a.get(c[e]));else for(e in a)this.set(e,a[e])}
function ce(a){de(a);return a.A.concat()}
g=be.prototype;g.equals=function(a,b){if(this===a)return!0;if(this.C!=a.C)return!1;var c=b||ee;de(this);for(var e,d=0;e=this.A[d];d++)if(!c(this.get(e),a.get(e)))return!1;return!0};
function ee(a,b){return a===b}
g.isEmpty=function(){return 0==this.C};
g.clear=function(){this.K={};this.V=this.C=this.A.length=0};
g.remove=function(a){return Object.prototype.hasOwnProperty.call(this.K,a)?(delete this.K[a],this.C--,this.V++,this.A.length>2*this.C&&de(this),!0):!1};
function de(a){if(a.C!=a.A.length){for(var b=0,c=0;b<a.A.length;){var e=a.A[b];Object.prototype.hasOwnProperty.call(a.K,e)&&(a.A[c++]=e);b++}a.A.length=c}if(a.C!=a.A.length){var d={};for(c=b=0;b<a.A.length;)e=a.A[b],Object.prototype.hasOwnProperty.call(d,e)||(a.A[c++]=e,d[e]=1),b++;a.A.length=c}}
g.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.K,a)?this.K[a]:b};
g.set=function(a,b){Object.prototype.hasOwnProperty.call(this.K,a)||(this.C++,this.A.push(a),this.V++);this.K[a]=b};
g.forEach=function(a,b){for(var c=ce(this),e=0;e<c.length;e++){var d=c[e],f=this.get(d);a.call(b,f,d,this)}};
g.ia=function(a){de(this);var b=0,c=this.V,e=this,d=new Yd;d.next=function(){if(c!=e.V)throw Error("The map has changed since the iterator was created");if(b>=e.A.length)throw Xd;var d=e.A[b++];return a?d:e.K[d]};
return d};function fe(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function ge(a){var b=a.type;switch(Ga(b)&&b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,e=0;c=a.options[e];e++)c.selected&&b.push(c.value);return b.length?b:null;default:return null!=a.value?a.value:null}}
;function he(a){var b=[];ie(new je,a,b);return b.join("")}
function je(){}
function ie(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==Ja(b)){var e=b;b=e.length;c.push("[");for(var d="",f=0;f<b;f++)c.push(d),ie(a,e[f],c),d=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");d="";for(e in b)Object.prototype.hasOwnProperty.call(b,e)&&(f=b[e],"function"!=typeof f&&(c.push(d),ke(e,c),c.push(":"),ie(a,f,c),d=","));c.push("}");return}}switch(typeof b){case "string":ke(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var le={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},me=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ke(a,b){b.push('"',a.replace(me,function(a){var b=le[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),le[a]=b);return b}),'"')}
;(function(){if(vd){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Zc))?a[1]:"0"}return ud?(a=/10[_.][0-9_.]+/,(a=a.exec(Zc))?a[0].replace(/_/g,"."):"10"):xd?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Zc))?a[1]:""):yd||zd||Ad?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Zc))?a[1].replace(/_/g,"."):""):""})();function ne(a){return(a=a.exec(Zc))?a[1]:""}
(function(){if(Jd)return ne(/Firefox\/([0-9.]+)/);if(qd||rd||pd)return Gd;if(Nd)return od()||T("iPad")||T("iPod")?ne(/CriOS\/([0-9.]+)/):ne(/Chrome\/([0-9.]+)/);if(Od&&!(od()||T("iPad")||T("iPod")))return ne(/Version\/([0-9.]+)/);if(Kd||Ld){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Zc);if(a)return a[1]+"."+a[2]}else if(Md)return(a=ne(/Android\s+([0-9.]+)/))?a:ne(/Version\/([0-9.]+)/);return""})();function oe(a){Pd.call(this);this.Fd=1;this.ib=[];this.jb=0;this.A=[];this.C={};this.yf=!!a}
Va(oe,Pd);g=oe.prototype;g.subscribe=function(a,b,c){var e=this.C[a];e||(e=this.C[a]=[]);var d=this.Fd;this.A[d]=a;this.A[d+1]=b;this.A[d+2]=c;this.Fd=d+3;e.push(d);return d};
g.Ub=function(a){var b=this.A[a];if(b){var c=this.C[b];if(0!=this.jb)this.ib.push(a),this.A[a+1]=Ia;else{if(c){var e=Pc(c,a);0<=e&&Array.prototype.splice.call(c,e,1)}delete this.A[a];delete this.A[a+1];delete this.A[a+2]}}return!!b};
g.Mb=function(a,b){var c=this.C[a];if(c){for(var e=Array(arguments.length-1),d=1,f=arguments.length;d<f;d++)e[d-1]=arguments[d];if(this.yf)for(d=0;d<c.length;d++){var h=c[d];pe(this.A[h+1],this.A[h+2],e)}else{this.jb++;try{for(d=0,f=c.length;d<f;d++)h=c[d],this.A[h+1].apply(this.A[h+2],e)}finally{if(this.jb--,0<this.ib.length&&0==this.jb)for(;c=this.ib.pop();)this.Ub(c)}}return 0!=d}return!1};
function pe(a,b,c){id(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.C[a];b&&(Qc(b,this.Ub,this),delete this.C[a])}else this.A.length=0,this.C={}};
g.ic=function(){oe.Fa.ic.call(this);this.clear();this.ib.length=0};function qe(a){this.A=a}
qe.prototype.set=function(a,b){Aa(b)?this.A.set(a,he(b)):this.A.remove(a)};
qe.prototype.get=function(a){try{var b=this.A.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
qe.prototype.remove=function(a){this.A.remove(a)};function re(a){this.A=a}
Va(re,qe);function se(a){this.data=a}
function te(a){return!Aa(a)||a instanceof se?a:new se(a)}
re.prototype.set=function(a,b){re.Fa.set.call(this,a,te(b))};
re.prototype.C=function(a){a=re.Fa.get.call(this,a);if(!Aa(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
re.prototype.get=function(a){if(a=this.C(a)){if(a=a.data,!Aa(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ue(a){this.A=a}
Va(ue,re);ue.prototype.set=function(a,b,c){if(b=te(b)){if(c){if(c<Ta()){ue.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ta()}ue.Fa.set.call(this,a,b)};
ue.prototype.C=function(a){var b=ue.Fa.C.call(this,a);if(b){var c=b.creation,e=b.expiration;if(e&&e<Ta()||c&&c>Ta())ue.prototype.remove.call(this,a);else return b}};function ve(){}
;function we(){}
Va(we,ve);we.prototype.clear=function(){var a=ae(this.ia(!0)),b=this;Qc(a,function(a){b.remove(a)})};function xe(a){this.A=a}
Va(xe,we);g=xe.prototype;g.isAvailable=function(){if(!this.A)return!1;try{return this.A.setItem("__sak","1"),this.A.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.A.setItem(a,b)}catch(c){if(0==this.A.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.A.getItem(a);if(!Ga(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.A.removeItem(a)};
g.ia=function(a){var b=0,c=this.A,e=new Yd;e.next=function(){if(b>=c.length)throw Xd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!Ga(d))throw"Storage mechanism: Invalid value was encountered";return d};
return e};
g.clear=function(){this.A.clear()};
g.key=function(a){return this.A.key(a)};function ye(){var a=null;try{a=window.localStorage||null}catch(b){}this.A=a}
Va(ye,xe);function ze(a,b){this.C=a;this.A=null;var c;if(c=qd)c=!(9<=Number(Hd));if(c){Ae||(Ae=new be);this.A=Ae.get(a);this.A||(b?this.A=document.getElementById(b):(this.A=document.createElement("userdata"),this.A.addBehavior("#default#userData"),document.body.appendChild(this.A)),Ae.set(a,this.A));try{this.A.load(this.C)}catch(e){this.A=null}}}
Va(ze,we);var Be={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ae=null;function Ce(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Be[a]})}
g=ze.prototype;g.isAvailable=function(){return!!this.A};
g.set=function(a,b){this.A.setAttribute(Ce(a),b);De(this)};
g.get=function(a){a=this.A.getAttribute(Ce(a));if(!Ga(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.A.removeAttribute(Ce(a));De(this)};
g.ia=function(a){var b=0,c=this.A.XMLDocument.documentElement.attributes,e=new Yd;e.next=function(){if(b>=c.length)throw Xd;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!Ga(d))throw"Storage mechanism: Invalid value was encountered";return d};
return e};
g.clear=function(){for(var a=this.A.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);De(this)};
function De(a){try{a.A.save(a.C)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ee(a,b){this.C=a;this.A=b+"::"}
Va(Ee,we);Ee.prototype.set=function(a,b){this.C.set(this.A+a,b)};
Ee.prototype.get=function(a){return this.C.get(this.A+a)};
Ee.prototype.remove=function(a){this.C.remove(this.A+a)};
Ee.prototype.ia=function(a){var b=this.C.ia(!0),c=this,e=new Yd;e.next=function(){for(var d=b.next();d.substr(0,c.A.length)!=c.A;)d=b.next();return a?d.substr(c.A.length):c.C.get(d)};
return e};var Fe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ge(a){return a?decodeURI(a):a}
function He(a,b,c){if("array"==Ja(b))for(var e=0;e<b.length;e++)He(a,String(b[e]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ie(a){var b=[],c;for(c in a)He(c,a[c],b);return b.join("&")}
;var Je=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};Ua("yt.config_",Je);function Ke(a){var b=arguments;if(1<b.length)Je[b[0]]=b[1];else{b=b[0];for(var c in b)Je[c]=b[c]}}
function Le(a,b){return a in Je?Je[a]:b}
;Ta();var Me={};function Ne(){return Me.clicktracking||(Me.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;var Oe=0;Ua("ytDomDomGetNextId",Ha("ytDomDomGetNextId")||function(){return++Oe});function Pe(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(e){var b=e,c=Ha("yt.logging.errors.log");c?c(b,void 0,void 0,void 0,void 0):(c=Le("ERRORS",[]),c.push([b,void 0,void 0,void 0,void 0]),Ke("ERRORS",c))}}:a}
;var Qe={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Re(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Qe||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}
Re.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Re.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Re.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Uc=Ha("ytEventsEventsListeners")||{};Ua("ytEventsEventsListeners",Uc);var Se=Ha("ytEventsEventsCounter")||{count:0};Ua("ytEventsEventsCounter",Se);
function Te(a,b,c,e){e=void 0===e?{}:e;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Tc(function(d){var f="boolean"==typeof d[4]&&d[4]==!!e,h;if(h=La(d[4])&&La(e))a:{h=d[4];for(var l in h)if(!(l in e)||h[l]!==e[l]){h=!1;break a}for(l in e)if(!(l in h)){h=!1;break a}h=!0}return!!d.length&&d[0]==a&&d[1]==b&&d[2]==
c&&(f||h)})}
var Ue=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=!1;
try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Ve(a,b){var c=document,e=We;b=void 0===b?{}:b;if(c&&(c.addEventListener||c.attachEvent)){var d=Te(c,a,e,b);if(!d){d=++Se.count+"";var f=!("mouseenter"!=a&&"mouseleave"!=a||!c.addEventListener||"onmouseenter"in document);var h=f?function(b){b=new Re(b);if(!Wd(b.relatedTarget,function(a){return a==c}))return b.currentTarget=c,b.type=a,e.call(c,b)}:function(a){a=new Re(a);
a.currentTarget=c;return e.call(c,a)};
h=Pe(h);c.addEventListener?("mouseenter"==a&&f?a="mouseover":"mouseleave"==a&&f?a="mouseout":"mousewheel"==a&&"MozBoxSizing"in document.documentElement.style&&(a="MozMousePixelScroll"),Ue()||"boolean"==typeof b?c.addEventListener(a,h,b):c.addEventListener(a,h,!!b.capture)):c.attachEvent("on"+a,h);Uc[d]=[c,a,e,h,b]}}}
;var Xe=Ha("ytPubsubPubsubInstance")||new oe;oe.prototype.subscribe=oe.prototype.subscribe;oe.prototype.unsubscribeByKey=oe.prototype.Ub;oe.prototype.publish=oe.prototype.Mb;oe.prototype.clear=oe.prototype.clear;Ua("ytPubsubPubsubInstance",Xe);Ua("ytPubsubPubsubSubscribedKeys",Ha("ytPubsubPubsubSubscribedKeys")||{});Ua("ytPubsubPubsubTopicToKeys",Ha("ytPubsubPubsubTopicToKeys")||{});Ua("ytPubsubPubsubIsSynchronous",Ha("ytPubsubPubsubIsSynchronous")||{});var Ye=Object.create(null);Ye.log_event="GENERIC_EVENT_LOGGING";Ye.log_interaction="INTERACTION_LOGGING";Ua("ytLoggingTransportLogPayloadsQueue_",Ha("ytLoggingTransportLogPayloadsQueue_")||{});Ua("ytLoggingTransportTokensToCttTargetIds_",Ha("ytLoggingTransportTokensToCttTargetIds_")||{});Ua("ytLoggingTransportDispatchedStats_",Ha("ytLoggingTransportDispatchedStats_")||{});Ua("ytytLoggingTransportCapturedTime_",Ha("ytLoggingTransportCapturedTime_")||{});function Ze(){}
Ze.prototype.A=function(a,b){var c=b;isNaN(c)&&(c=void 0);var e=Ha("yt.scheduler.instance.addJob");e?c=e(a,1,c):void 0===c?(a(),c=NaN):(e=a,"function"==Ja(e)&&(e=Pe(e)),c=window.setTimeout(e,c||0));return c};function $e(){}
$e.prototype=ja(Ze.prototype);$e.prototype.constructor=$e;if(wa)wa($e,Ze);else for(var af in Ze)if("prototype"!=af)if(Object.defineProperties){var bf=Object.getOwnPropertyDescriptor(Ze,af);bf&&Object.defineProperty($e,af,bf)}else $e[af]=Ze[af];$e.Fa=Ze.prototype;$e.prototype.start=function(){var a=Ha("yt.scheduler.instance.start");a&&a()};
$e.A=void 0;$e.oa=function(){return $e.A?$e.A:$e.A=new $e};
var cf=$e.oa();function df(){var a=new ye;(a=a.isAvailable()?new Ee(a,"yt.innertube"):null)||(a=new ze("yt.innertube"),a=a.isAvailable()?a:null);this.A=a?new ue(a):null;this.C=document.domain||window.location.hostname}
df.prototype.set=function(a,b,c,e){c=c||31104E3;this.remove(a);if(this.A)try{this.A.set(a,b,Ta()+1E3*c);return}catch(f){}var d="";if(e)try{d=escape(he(b))}catch(f){return}else d=escape(b);b=this.C;Xc.set(""+a,d,c,"../../default.htm",void 0===b?"youtube.com":b,!1)};
df.prototype.get=function(a,b){var c=void 0,e=!this.A;if(!e)try{c=this.A.get(a)}catch(d){e=!0}if(e&&(c=Xc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(d){this.remove(a),c=void 0}return c};
df.prototype.remove=function(a){this.A&&this.A.remove(a);var b=this.C;Xc.remove(""+a,"../../default.htm",void 0===b?"youtube.com":b)};new df;var ef=Ta().toString();var ff;a:{if(window.crypto&&window.crypto.getRandomValues)try{var gf=Array(16),hf=new Uint8Array(16);window.crypto.getRandomValues(hf);for(var jf=0;jf<gf.length;jf++)gf[jf]=hf[jf];ff=gf;break a}catch(a){}for(var kf=Array(16),lf=0;16>lf;lf++){for(var mf=Ta(),nf=0;nf<mf%23;nf++)kf[lf]=Math.random();kf[lf]=Math.floor(256*Math.random())}if(ef)for(var of=1,pf=0;pf<ef.length;pf++)kf[of%16]=kf[of%16]^kf[(of-1)%16]/4^ef.charCodeAt(pf),of++;ff=kf}
for(var qf=ff,rf=[],sf=0;sf<qf.length;sf++)rf.push("ABCDEFGHIJLKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(qf[sf]&63));Ua("yt.msgs_",window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{});Ua("ytglobal.prefsUserPrefsPrefs_",Ha("ytglobal.prefsUserPrefsPrefs_")||{});var tf=Ha("ytPubsub2Pubsub2Instance")||new oe;oe.prototype.subscribe=oe.prototype.subscribe;oe.prototype.unsubscribeByKey=oe.prototype.Ub;oe.prototype.publish=oe.prototype.Mb;oe.prototype.clear=oe.prototype.clear;Ua("ytPubsub2Pubsub2Instance",tf);Ua("ytPubsub2Pubsub2SubscribedKeys",Ha("ytPubsub2Pubsub2SubscribedKeys")||{});Ua("ytPubsub2Pubsub2TopicToKeys",Ha("ytPubsub2Pubsub2TopicToKeys")||{});Ua("ytPubsub2Pubsub2IsAsync",Ha("ytPubsub2Pubsub2IsAsync")||{});Ua("ytPubsub2Pubsub2SkipSubKey",null);function uf(a,b,c){for(var e=0,d=0;d<a.length;++d)e=31*e+a.charCodeAt(d)>>>0;a="ST-"+e.toString(36);b=b?Ie(b):"";Xc.set(""+a,b,c||5,"../../default.htm","youtube.com",!1)}
;var vf={},wf="ontouchstart"in document;function xf(a,b,c){switch(a){case "mouseover":case "mouseout":var e=3;break;case "mouseenter":case "mouseleave":e=9}return Wd(c,function(a){a.classList?a=a.classList.contains(b):(a.classList?a=a.classList:(a=a.className,a=Ga(a)&&a.match(/\S+/g)||[]),a=0<=Pc(a,b));return a},e)}
function We(a){var b="mouseover"==a.type&&"mouseenter"in vf||"mouseout"==a.type&&"mouseleave"in vf,c=a.type in vf||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=vf[b];for(var e in c.C){var d=xf(b,e,a.target);d&&!Wd(a.relatedTarget,function(a){return a==d})&&c.Mb(e,d,b,a)}}if(b=vf[a.type])for(e in b.C)(d=xf(a.type,e,a.target))&&b.Mb(e,d,a.type,a)}}
Ve("blur",!0);Ve("change",!0);Ve("click");Ve("focus",!0);Ve("mouseover");Ve("mouseout");Ve("mousedown");Ve("keydown");Ve("keyup");Ve("keypress");Ve("cut");Ve("paste");wf&&(Ve("touchstart"),Ve("touchend"),Ve("touchcancel"));function yf(a,b,c,e,d){if(a&&d){var f=Le("SBOX_SETTINGS"),h=Le("SBOX_LABELS");f&&h&&(a=Ha("searchbox.yt.install")(a,b,c,f,h,zf,e))&&d(a,100)}}
function Af(a,b){var c=Le("EVENT_ID");if(c){b.ei=c;b.feature="web-masthead-search";c=(c=document.getElementById("masthead-search"))?c.dataset?c.dataset[Ne()]:c.getAttribute("data-clicktracking"):null;b.ved=c||"";c=a;var e=Le("VALID_SESSION_TEMPDATA_DOMAINS",[]),d=Ge(window.location.href.match(Fe)[3]||null);d&&e.push(d);d=Ge(c.match(Fe)[3]||null);if(0<=Pc(e,d)||!d&&0==c.lastIndexOf("/",0))if(Le("EXPERIMENT_FLAGS",{}).autoescape_tempdata_url&&(e=document.createElement("a"),c=c instanceof Qd?c:Ud(c),
e.href=Sd(c),c=e.href),c){d=c.match(Fe);c=d[5];e=d[6];d=d[7];var f="";c&&(f+=c);e&&(f+="?"+e);d&&(f+="#"+d);c=f;e=c.indexOf("#");if(c=0>e?c:c.substr(0,e)){if(b.itct||b.ved)(e=b.csn)||(e=(e=Le("client-screen-nonce")||Le("EVENT_ID"))?e:null),b.csn=e;if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&uf(c,b,h)}else uf(c,b)}}}}
function zf(a,b){Af(a,b?{feature:b}:{});var c=Ha("yt.window.navigate");try{c(a)}catch(k){var e=void 0===e?{}:e;var d=void 0===d?"":d;var f=void 0===f?window:f;c=f.location;e=Ie(e);if(e){f=a.indexOf("#");0>f&&(f=a.length);var h=a.indexOf("?");if(0>h||h>f){h=f;var l=""}else l=a.substring(h+1,f);f=[a.substr(0,h),l,a.substr(f)];h=f[1];f[1]=e?h?h+"&"+e:e:h;e=f[0]+(f[1]?"?"+f[1]:"")+f[2]}else e=a;d=e+d;d=d instanceof Qd?d:Ud(d);c.href=Sd(d)}}
function Bf(a){for(var b=document.getElementById("masthead-search"),c=[],e=b.elements,d,f=0;d=e[f];f++)if(d.form==b&&!d.disabled&&"FIELDSET"!=d.tagName){var h=d.name;switch(d.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":d=ge(d);if(null!=d)for(var l,k=0;l=d[k];k++)fe(c,h,l);break;default:l=ge(d),null!=l&&fe(c,h,l)}}e=b.getElementsByTagName("INPUT");for(f=0;d=e[f];f++)d.form==b&&"image"==d.type.toLowerCase()&&(h=d.name,fe(c,h,d.value),fe(c,h+
".x","0"),fe(c,h+".y","0"));c=c.join("&").replace(/%20/g,"+");b=b.action+"?"+c;Af(b,a);a=!!Le("SPF_SEARCH_BOX");if(!Ha("ytspf.enabled")||!a)return!0;a=Ha("yt.window.navigate");try{a(b)}catch(n){return!0}return!1}
;Ua("searchbox.yt.install",Vc);Ua("yt.www.masthead.searchbox.init",function(){var a=document.getElementById("masthead-search");yf(a,a.search_query,document.getElementById("search-btn"),Bf,window.setTimeout)});
Ua("yt.www.masthead.searchbox.initPolymer",function(a,b,c,e){yf(a,b,c,e,cf.A)});}).call(this);

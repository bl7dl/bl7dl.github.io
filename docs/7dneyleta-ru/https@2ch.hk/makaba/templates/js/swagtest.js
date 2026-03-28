//'use strict';

//
/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,
r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==va()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===va()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;l<i;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;d<e;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Ma(a,b,f),(d<0||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)})},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);f<g;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);
if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){if(c)return c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});



(function(){
    window.config = {}; //настройки
    window.config.autoUpdate = {}; //настройки авто обновления
    window.config.favorites = {}; //настройки избранного
    window.thread = {}; //область хранения переменных/данных о треде
    window.threadstats = {}; //настройки популярных тредов

    window.config.loadCaptchaTimeout = 30000; //таймаут в миллисекундах функции загрузки капчи
    window.config.updatePostsTimeout = 30000; //таймаут в миллисекундах функции загрузки новых постов с сервера
    window.config.autoUpdate.minInterval = 10; //Минимальный интервал между обновлениями в секундах
    window.config.autoUpdate.maxInterval = 60; //Максимальный интервал между обновлениями в секундах
    window.config.autoUpdate.stepInterval = 5; //Сколько прибавлять при пересчёте интервала в секундах
    window.config.autoUpdate.faviconDefault = '<link id="favicon" rel="shortcut icon" href="../favicon.ico"/>'; //Дефолтная иконка
    window.config.autoUpdate.faviconNewposts = '<link id="favicon" rel="shortcut icon" href="../makaba/templates/img/favicon_newposts.ico"/>'; //Иконка для оповещения о новых постах
    window.config.autoUpdate.faviconDeleted = '<link id="favicon" rel="shortcut icon" href="../makaba/templates/img/favicon_deleted.ico"/>'; //Иконка для оповещения о удалённом треде
    window.config.favorites.interval_min = 15; //минимальный промежуток проверки в секундах
    window.config.favorites.interval_max = 60*60*12; //максильманый промежуток проверки в секундах
    window.config.favorites.interval_multiplier = 2; //множитель времени проверок. При новых постах сбрасывается на interval_min
    window.config.favorites.interval_error = 60*2; //время в секундах, через которое надо повторить после ошибки
    window.config.favorites.interval_del_recheck = 60*10; //время в секундах, через которое надо проверить удалён ли тред на самом деле
    window.config.favorites.interval_lock = 60*5; //блокирующий интервал для внутреннего использования
    window.config.title = document.title; //Тайтл окна
    window.config.twitter_autoexpand = 4; //сколько твиттеров раскрывать автоматически
	window.config.hideTimeout = 7;  //сколько дней хранить скрытые треды/посты
	window.config.makabadmin = getCookie('makabadmin');
    window.threadstats.refresh = 60; //как часто обновлять данные
    window.threadstats.retry = 10; //через сколько секунд повторить запрос, если была ошибка
    window.threadstats.request_timeout = 30000; //таймаут для подключения в msf
    window.threadstats.count = 10; //сколько тредов показывать
    window.tz_offset = +3; //часовой пояс сервера
    window.store_limit = 1024*1024; //лимит хранилища байт, после которого надо чистить мусор
	
	window.thread.id = tmp_id; //ID текущего треда
	window.thread.board = window.board = tmp_board; //имя текущего раздела
	window.likes = tmp_likes; //включены ли лайки
	window.thread.enable_oekaki = tmp_enable_oekaki;
	window.thread.enable_subject = tmp_enable_subject;
	window.thread.max_files_size = tmp_max_files_size;
	window.thread.max_comment = tmp_max_comment;
	window.thread.twochannel = tmp_twochannel;
    window.config.styles = tmp_styles;
    window.config.captchaKey = 0;
})(); //конфиг

//объект для работы с медиа ссылками (ютуб, ливлик, ...)
window.Media = {
    processors: [],
    generators: {},
    unloaders: {},
    thumbnailers: {},
    meta: {},

    //функция добавления нового "провайдера"
    //type - текст, пример "youtbe"
    //substr - текст, который должен быть в ссылке, чтоб испытывать на ней регулярку
    //regexp - текст, регулярное выражение для парсинга
    //fields - объект вида {id: 0, album: 1} тогда из регулярки будет возвращено {id: res[0], album: res[1]}
    add: function(type, substr, regexp, fields) {
        var regobj = new RegExp(regexp, 'i');
        this.processors.push([type, substr, regobj, fields]);
    },

    //добавление генератора плеера
    //type - текст, имя провайдера, пример "youtbe"
    //func - коллбек генератор, получает fields из регулярки и должен вернуть HTML текст плеера
    addGenerator: function(type, func) {
        this.generators[type] = func;
    },

    //добавить удалялку плеера при закрытии его кнопкой
    //type - текст, имя провайдера, пример "youtbe"
    //func - коллбек, получающий jQuery эллемент обработанной ссылки (<a href...)
    addUnloader: function(type, func) {
        this.unloaders[type] = func;
    },

    //добавить превью
    //type - текст, имя провайдера, пример "youtbe"
    //func - коллбек генератор, получает fields из регулярки и должен вернуть HTML текст плеера
    //должно вернуть HTML код превью (<img> например)
    addThumbnailer: function(type, func) {
        this.thumbnailers[type] = func;
    },

    //добавить генератор названия
    //type - текст, имя провайдера, пример "youtbe"
    //func - коллбек генератор, получает fields из регулярки и коллбек, который он должен вызвать с названием после того, как его вычислит
    addTitler: function(type, func) {
        this.titler.solvers[type] = func;
    },

    //добавить иконку и название сервиса
    //пример Media.addMeta('youtube', {name: 'YouTube', icon: '<i class="fa fa-media-icon media-meta-youtube-icon"></i>'});
    addMeta: function(type, meta) {
        this.meta[type] = meta;
    },

    //обработчик ссылок, определяющий есть ли в ссылке медиа и возвращающий её fields если есть
    parse: function(url) {
        var proc_len = this.processors.length;
        var ret;

        for(var i=0;i<proc_len;i++) {
            var proc = this.processors[i];
            if(url.indexOf(proc[1]) < 0) continue; //proc[1] это текст, который будет искаться в ссылке

            ret = this.getValues(url, proc);
            if(ret) break;
        }

        return ret;
    },

    //фнкция для получения fields из ссылки
    getValues: function(url, proc) {
        var type = proc[0];
        var regexp = proc[2];
        var fields = proc[3];
        var values = {type: type};

        var reg_result = regexp.exec(url);
        if(!reg_result) return false;

        for(var field_name in fields) {
            if(!fields.hasOwnProperty(field_name)) continue;
            if(!reg_result.hasOwnProperty(fields[field_name])) return false;

            values[field_name] = reg_result[fields[field_name]];
        }

        return values;
    },

    //внутренняя функция для получения HTML плеера
    getEmbedCode: function(type, id, cb) { //переписать если вдруг появится что-то кроме ID. Не хочу пачкать "data-" ради совместимости
        this.generators[type]({id: id}, cb);
    },

    //внутренняя функция для обработки сырых <a href...>
    //поиска медиа ссылок
    //рендера кнопок для них
    processLinks: function(el) {
        el.each(function(){
            var $el = $(this);
            var url = $el.text();
            var obj = Media.parse(url); //если ничего не вернуло, значит это не медиа ссылка
            if(!obj) return;            //пропускаем
            var $post = el.closest('.post');

            var $button_expand = $('<span href="#" class="media-expand-button">[РАСКРЫТЬ]</span>');
            var $button_hide = $('<span href="#" class="media-hide-button">[ЗАКРЫТЬ]</span>');
            var $button_loading = $('<span class="media-expand-loading">[Загрузка...]</span>');

            //разбираемся с превьюшкой
            if(Media.thumbnailers.hasOwnProperty(obj.type) && Store.get('old.media_thumbnails', true)) {
                var on_hover = Store.get('old.media_thumbnails_on_hover', true);
                var thumbnail = $('<div class="media-thumbnail" ' + (on_hover?'style="display:none"':'') + '>' + Media.thumbnailers[obj.type](obj) + '</div>');
                var mthumbnail = $('#media-thumbnail');

                //если в настройках выставлен показ при наводе мыши
                if(on_hover) {
                    $el.hover(function(e){
                        mthumbnail
                            .append(thumbnail)
                            .css({
                                position: 'absolute',
                                display: 'block',
                                'z-index': '999',
                                top: e.pageY + 'px',
                                left: e.pageX + 'px'
                            });
                        thumbnail.show();
                    });
                    $el.mouseout(function(){
                        thumbnail.hide();
                        mthumbnail.hide();
                    });
                    $el.mousemove(function(e){
                        mthumbnail
                            .css({
                                top: (e.pageY - 10) + 'px',
                                left: (e.pageX + 30) + 'px'
                            });
                    });
                }else{
                    $button_expand.append(thumbnail);
                }
            }

            //кнопки скрытия/раскрытия медии
            $el.after($button_expand);
            $button_expand.click(function(){
                $button_expand.hide();
                $button_expand.after($button_loading);
                var expanded = $post.data('expanded-media-count') || 0;
                expanded++;
                $post.data('expanded-media-count', expanded);
                if(expanded == 1 && window.kostyl_class) $post.addClass('expanded-media');

                Media.getEmbedCode(obj.type, obj.id, function(html) {
                    $button_loading.remove();
                    if(!html) return $button_expand.show();
                    var embed = $('<br>' + html + '<br>');

                    $el.after(embed);
                    $el.after($button_hide);

                    $button_hide.click(function() {
                        embed.remove();
                        $button_hide.remove();
                        $button_expand.show();
                        if(Media.unloaders.hasOwnProperty(obj.type)) Media.unloaders[obj.type]($el); //костыль

                        var expanded = $post.data('expanded-media-count');
                        expanded--;
                        $post.data('expanded-media-count', expanded);
                        if(expanded == 0 && window.kostyl_class) $post.removeClass('expanded-media');

                        return false;
                    });

                    return false;
                });

                return false;
            });

            Media.titler.solve($el, obj);
            //костыли костылики для открытия твиттов после загрузки
            if(obj.type == 'twitter' && window.config.twitter_autoexpand-- > 0) $button_expand.click();
        });
    },

    //целый объект для работы с тайтлами медий
    titler: {
        solvers: {},
        queue: {},
        active_workers: 0,

        solve: function($href, media) {
            if(!this.solvers[media.type]) return;
            var title = Store.get('_cache.media.' + media.type + '.' + media.id + '.title', false);
            if(title !== false) return this.renderTitle($href, title, media);
            if(this.queue[media.type+media.id]) {
                this.queue[media.type+media.id]['hrefs'].push($href);
            }else{
                this.queue[media.type+media.id] = {media: media, hrefs: [$href]};
                this.prepareNewWorker();
            }
        },

        prepareNewWorker: function() {
            if(this.active_workers >= Store.get('other.media.titler.max_workers', 2)) return;

            for(var key in this.queue) {
                if(!this.queue.hasOwnProperty(key)) continue;
                if(this.queue[key].active) continue;
                return this.startWorker(key);
            }
        },

        startWorker: function(queue_key) {
            this.active_workers++;
            this.queue[queue_key].active = true;
            var media = this.queue[queue_key].media;
            var solver = this.solvers[media.type];
            var worker = this;

            solver(media, function(title) {
                worker.active_workers--;
                if(title) {
                    worker.processHrefs(queue_key, title);
                    Store.set('_cache.media.' + media.type + '.' + media.id + '.title', title);
                    Store.set('_cache.media.' + media.type + '.' + media.id + '.created', Math.ceil((+new Date)/1000));
                }
                delete worker.queue[queue_key];
                worker.prepareNewWorker();
            });
        },

        processHrefs: function(queue_key, title) {
            var hrefs = this.queue[queue_key]['hrefs'];
            for(var i=0;i<hrefs.length;i++) this.renderTitle(hrefs[i], title, this.queue[queue_key].media);
        },

        renderTitle: function($href, name, media) {
            var meta = Media.meta[media.type];
            if(meta) {
                $href.before(meta.icon);
                $href.html('[' + meta.name + '] ' + name);
            }else{
                $href.html(name);
            }
        }
    }
};

//система избранных тредов
window.Favorites = {
    /* Структура избранных тредов:
     board - строка, название борды, в которой тред
     title - строка, заголовок
     last_post - число, номер последнего поста
     next_check - число, таймстамп, когда нужно проверить тред на новые посты
     last_interval - число, время в минутах, которое надо будет выставиь в next_check и умножить на множитель из конфига
     new_posts - число, количество новых сообщений
     deleted - bool, true если тред удалён. При следующей проверке, если он на самом деле удалён, он будет удалён из списка
     */
    timer: 0,
    current: null,
    busy: false,
    visible: false,
    gevent_num: false,
    gevent: false,

    isFavorited: function(num) {
        return !!Store.get('favorites.' + num, false);
    },
	
    //удалить тред из избранного
    remove: function(num) {
        if(!this.isFavorited(num)) throw new Error('Вызов Favorites.remove(' + num + ') для несуществующего треда');
        Store.del('favorites.' + num);
        if(!this.busy) this.reset();

        this.render_remove(num);
        Gevent.emit('fav.remove', num);
    },

    //добавить тред в избранное
    add: function(num) {
        if(this.isFavorited(num)) throw new Error('Вызов Favorites.add(' + num + ') для существующего треда');
        var data;
		var isPost;
		var watch = [];
		var post = Post(num);
				
		if (!post.isThread()) {
			isPost = true;
			watch.push(num);
			num = post.getThread();
			post = Post(num);  //если добавлялся  в избранное пост, то переменную post переставляем на номер треда, в котором этот пост
        }
		
		if(this.isFavorited(post.getThread())) { 
			current_posts = Store.get('favorites.' + num + '.posts', false);
			if(current_posts) {
				Store.set('favorites.' + num + '.posts', current_posts.concat(watch));
			} else {
				Store.set('favorites.' + num + '.posts', watch);
			}
			return;
		}//проверку на тот же пост не забыть
		
		var title = post.getTitle();
        var last = post.last().num;
		data = {
			board: window.thread.board,
			title: title,
			last_post: last,
			posts: isPost?watch:false, //
			replies: [], //
			//allreplies: [], //
			last_replies: 0, //
			next_check: Math.floor((+new Date)/1000)+window.config.favorites.interval_min,
			last_interval: window.config.favorites.interval_min
		};
		console.log(data);
		
        Store.set('favorites.' + num, data);
        this.render_add(num, data);
        Gevent.emit('fav.add', [num, data]);

        if(!window.thread.id) this.reset();
    },

    //сбросить текущую цель и выбрать новую (тред для проверки новых постов)
    reset: function() {
        this.resetCurrent();
        if(this.current) this.timerRestart();

        this.busy = false;
    },
    timerStop: function() {
        if(!this.timer) return;
        clearTimeout(this.timer);
        this.timer = null;
    },
    timerRestart: function() {
        this.timerStop();
        var currentMins = Math.floor((+new Date)/1000);
        var delta = this.getCurrent().next_check-currentMins;
        var ms;
        var that = this;

        if(delta < 1) {
            ms = 1;
        }else{
            ms = delta*1000;
        }

        this.timer = setTimeout(function(){
            that.preExecuteCheck();
        }, ms);
    },
    getCurrent: function() {
        return Store.get('favorites.' + this.current, false);
    },

    //функция выбора цели для проерки новых постов
    resetCurrent: function() {
        this.current = null;
        var favlist = Store.get('favorites', {});
        var del_behavior = Store.get('favorites.deleted_behavior', 2);

        for(var key in favlist) {
            if(!favlist.hasOwnProperty(key)) continue;
            if(key == window.thread.id) continue;
            if(!favlist[key].hasOwnProperty('next_check')) continue;
            if(this.isLocked(key)) continue;

            if(!this.current || favlist[this.current].next_check > favlist[key].next_check) {
                if(favlist[key].deleted && del_behavior == 0) continue;
                this.current = key;
            }
        }
    },

    //костыль для того, чтоб опросить другие вкладки о треде
    preExecuteCheck: function() {
        var that = this;
        this.busy = true;

        this.render_refreshing(this.current);

        Gevent.onceNtemp('fav.abortExec' + this.current, 1000, function(){
            that.setNextCheck(that.current, window.config.favorites.interval_lock);
            that.render_refreshing_done(that.current);
            that.reset();
        }, function() {
            that.executeCheck();
        });

        Gevent.emit('fav.preExecuteCheck', this.current);
    },

    //выполнить проверку новых постов
    executeCheck: function() {
        var old_current = this.getCurrent().next_check;
        var old_current_num = this.current;
        Store.reload();
        if(this.isLocked() || old_current != this.getCurrent().next_check){
            this.render_refreshing_done(old_current_num);
            return this.reset();
        }

        this.lock();

        var current = this.getCurrent();
        var fetch_opts = {
            thread: this.current,
            from_post: current.last_post+1,
            board: current.board
        };
        var that = this;
		// posts = Post(121552668)._fetchPosts(fetch_opts, function(data) { tmp = Post(1); $.each( data.data, function( key, val ) { tmp.num = val.num; tmp.setThread(121552668).setJSON(val) }); } );
		
        Post(1).fetchPosts(fetch_opts, function(res) {
            if(res.hasOwnProperty('error')) {
                if(res.error == 'server' && res.errorCode == -404) {
                    that.deleted(that.current);
                }else{
                    that.setNextCheck(that.current, window.config.favorites.interval_error);
                }
            }else if(res.data.length) {
                that.setNewPosts(res.data.length);
                that.setLastPost(res.data);
                that.setNextCheck(that.current, window.config.favorites.interval_min);
				
				
				if(current.posts) {
					var replies = [];
					try {//на случай post not defined
						$.each(current.posts, function(i, postnum){
							$.each( res.data, function( key, val ) { 
								Post(val.num).setThread(postnum).setJSON(val);
							});
							replies = replies.concat(Post(postnum).getReplies()); //очень говнокод, старые реплаи дадут >0 условию ниже и каждый раз ебучий setreplies вызывается
						});
					}
					catch(err) {
						console.log('Ooops!')
					}

					if(replies.length > 0) that.setReplies(that.current, replies); //если припиздючились новые ответы - обновляем инфу. 
				}
				
                //if(Store.get('favorites.show_on_new', true)) that.show();
				if(Store.get('styling.favorites.minimized', true)) that.newItems();
            }else {
                that.setNextCheck(that.current, current.last_interval * window.config.favorites.interval_multiplier);
            }
			
			that.unlock();
            that.render_refreshing_done(that.current);
            return that.reset();
        });
		
    },
	setReplies: function(num, replies) {  
		var current = this.getCurrent();
		var newprelies = $.unique(current.replies.concat(replies));
		Store.set('favorites.' + num + '.replies', newprelies); //unique потому что до обновление страницы реплаи добавляются, и может получиться дублирование 
		
		this.setLastReplies(num, newprelies.length);
		
		this.render_newreplies(this.current, newprelies.length);
		
		Gevent.emit('fav.newreplies', [this.current, newprelies.length]);
    },
    setNextCheck: function(num, mins) {
        var thread = Store.get('favorites.' + num);

        if(mins < window.config.favorites.interval_min) mins = window.config.favorites.interval_min;
        if(mins > window.config.favorites.interval_max) mins = window.config.favorites.interval_max;

        thread.next_check = Math.floor((+new Date)/1000)+mins;
        thread.last_interval = mins;

        Store.set('favorites.' + num + '.next_check', thread.next_check);
        Store.set('favorites.' + num + '.last_interval', thread.last_interval);
    },
    forceRefresh: function(num) {
        Store.set('favorites.' + num + '.next_check', 0);
        Store.set('favorites.' + num + '.last_interval', window.config.favorites.interval_min);
        if(!this.busy) this.reset();
    },
    deleted: function(num) {
        //favorites.deleted_behavior int 0-не удалять, 1-удалять сразу, 2-проверять перед удалением
        var behavior = Store.get('favorites.deleted_behavior', 2);
        var path = 'favorites.' + num + '.deleted';

        if(behavior == 1) return this.remove(num);
        if(behavior == 2 && Store.get(path, false)) return this.remove(num);

        Store.set(path, true);
        this.resetNewPosts(num);
        this.render_deleted(num);
        this.setNextCheck(num, window.config.favorites.interval_del_recheck);

        Gevent.emit('fav.deleted', num);
    },
    setLastPost: function(arr, num) {
        if(!num) num = this.current;
        var last = 0;
        var len = arr.length;
        for(var i=0;i<len;i++) {
            if(arr[i]['num'] > last) last = arr[i]['num'];
        }
        if(!last) return;

        Store.set('favorites.' + num + '.last_post', parseInt(last));
    },
	setLastReplies: function(num, repliesnum) {
        Store.set('favorites.' + num + '.last_replies', repliesnum);
    },
    setLastSeenPost: function(thread, last) {
        if(!last) return Store.del('favorites.' + thread + '.last_seen');
        Store.set('favorites.' + thread + '.last_seen', last);
    },
    setNewPosts: function(count) {
        var current = this.getCurrent();
        var was = current.new_posts||0;
        current.new_posts = was+count;

        Store.set('favorites.' + this.current + '.new_posts', current.new_posts);

        if(!was) this.setLastSeenPost(this.current, current.last_post);
        this.render_newposts(this.current, current.new_posts);
        Gevent.emit('fav.newposts', [this.current, current.new_posts]);
    },
	//сброс кол-ва новых псто
    resetNewPosts: function(num) {
        if(!this.isFavorited(num)) return;
        Store.set('favorites.' + num + '.new_posts', 0);
        //if(!this.busy) this.reset();

        this.setLastSeenPost(this.current, 0);
        this.render_reset_newposts(num);
        Gevent.emit('fav.reset_newposts', num);
    },
	//сброс кол-ва новых ответов
	resetNewReplies: function(num) {
        if(!this.isFavorited(num)) return;
        Store.set('favorites.' + num + '.replies', []);
		Store.set('favorites.' + num + '.last_replies', 0);
		
        //if(!this.busy) this.reset();
		
        this.render_reset_newreplies(num);
        Gevent.emit('fav.reset_newreplies', num);
    },
    lock: function(num) {
        if(!num) num = this.current;
        var lock_time = Math.floor((+new Date)/1000)+window.config.favorites.interval_lock;

        Store.set('favorites.' + num + '.lock', lock_time);
    },
    unlock: function(num) {
        if(!num) num = this.current;

        Store.del('favorites.' + num + '.lock');
    },
    isLocked: function(num) {
        if(!num) num = this.current;
        var max_lock_time = Math.floor((+new Date)/1000);
        var current_lock = Store.get('favorites.' + num + '.lock', 0);

        return current_lock > max_lock_time;
    },
    show: function() {
		Box.showBox('favorites');
    },
    hide: function() {
		Box.hideBox('favorites');
    },
	newItems: function() {
		Box.toggleNewItems('favorites');
    },
    debug: function() {
        var favlist = Store.get('favorites', {});

        for(var key in favlist) {
            console.log(key + ':' + Math.round(favlist[key].next_check-((+new Date)/1000)) + 's');
        }
    },

    render_get_html: function(num, thread) {
        var thread_row = '<div id="fav-row' + num + '" class="bb__row">';
        //добавочно класс fav-row-deleted если тред удалён
        //добавочно класс fav-row-updated если есть новые посты
		//todo иконки ниже переделать на авесомайконс
        thread_row += '<i data-num="' + num + '" class="fa fa-times fav__fa fav__fa_type_remove"></i>';
        thread_row += '<i id="fav-row-update' + num + '" data-num="' + num + '" class="fa fa-refresh fav__fa fav__fa_type_update"></i>'; 
        thread_row += '<i id="fav-row-refreshing' + num + '" data-num="' + num + '" class="fa fa-spinner fav__fa"  style="display: none"></i>';
        if(thread.new_posts) {
            thread_row += '<span class="fav__new" id="fav-row-newposts' + num + '">(' + thread.new_posts + ')' + '</span>';
        } else {
            thread_row += '<span class="fav__new" id="fav-row-newposts' + num + '"></span>';
        }
		if(typeof thread.posts != "undefined" && thread.replies.length > 0 ) { //thread.last_replies 
            thread_row += '<span class="fav__new" id="fav-row-newreplies' + num + '">(' + thread.replies.length  + ')' + '</span>';
        } else {
            thread_row += '<span class="fav__new" id="fav-row-newreplies' + num + '"></span>';
        }
        thread_row += '<a href="../' + thread.board + '/res/' + num + '.html#' + (thread.last_seen||thread.last_post) + '" id="fav-row-href' + num + '" class="fav__title' + (thread.new_posts?' fav__title_type_updated':'') + (thread.deleted?' fav__title_type_deleted':'') + '">';
        thread_row += '<span>../' + thread.board + '/</span>';
        thread_row += '<span>' + num + '</span>';
        thread_row += '<span> - </span>';
        thread_row += '<span>' + (thread.title||'<i>Без названия</i>') + '</span>';
        thread_row += '</a>';
        thread_row += '</div>';

        return thread_row;
    },
    render_remove: function(num) {
        $('#fav-row' + num).remove();
        this.render_switch(num, false);
    },
    render_add: function(num, data) {
        var html = this.render_get_html(num, data);
        $('#favorites-table').append(html);
        this.render_switch(num, true);
    },
    render_switch: function(num, favorited) {
        var $star = $('#fa-star' + num);
        if(favorited) {
            $star.addClass('fa-star');
            $star.removeClass('fa-star-o');
            $('#postbtn-favorite-bottom').html('Отписаться от треда');
        }else{
            $star.removeClass('fa-star');
            $star.addClass('fa-star-o');
            $('#postbtn-favorite-bottom').html('Подписаться на тред');
        }
    },
    render_refreshing: function(num) {
        $('#fav-row-refreshing' + num).show();
        $('#fav-row-update' + num).hide();
    },
    render_refreshing_done: function(num) {
        $('#fav-row-refreshing' + num).hide();
        $('#fav-row-update' + num).show();
    },
    render_newposts: function(num, posts) {
        $('#fav-row-href' + num).addClass('fav__title_type_updated');
        $('#fav-row-newposts' + num).html('(' + posts + ')');
    },
    render_reset_newposts: function(num) {
        $('#fav-row-href' + num).removeClass('fav__title_type_updated');
        $('#fav-row-newposts' + num).html('');
    },
	render_newreplies: function(num, repliesnum) {
        $('#fav-row-href' + num).addClass('fav__title_type_updated');
        $('#fav-row-newreplies' + num).html('(' + repliesnum + ')');
    },
    render_reset_newreplies: function(num) {
        //$('#fav-row-href' + num).removeClass('fav-row-updated'); -- это закоменчено, так как при отсутствии новых реплаев снимало "жирный" текст при наличии новых ответов во время обновления авто/руками 
        $('#fav-row-newreplies' + num).html('');
    },
    render_deleted: function(num) {
        $('#fav-row-href' + num).addClass('fav__title_type_deleted');
    },
    init: function() {
        var current_favorited = window.thread.id&&this.isFavorited(window.thread.id);
        if(current_favorited) {
			//this.mark_replies_in_thread(window.thread.id);
            this.resetNewPosts(window.thread.id);
			this.resetNewReplies(window.thread.id);
            Gevent.on('fav.preExecuteCheck', function(num){
                if(num == window.thread.id) Gevent.emit('fav.abortExec' + window.thread.id);
            });
        }

        var that = this;
		var $threads = $('.thread');
		for (var i = 0; i < $threads.length; i++) { //todo check var i vezde
			var num = $threads[i].id.substr(7); 
            if(Favorites.isFavorited(num)) that.render_switch(num, true);
		}

        this.reset();
    },

    _send_fav: function(num) { //todo юзелес блядь
        if(!Store.get('godmode.send_fav', true)) return;
        //$.get('/makaba/makaba.fcgi?task=update&action=favorites&board=' + window.board + '&thread=' + num);
    }
};

//система настроек
window.Settings = {
    categories: [],
    settings: {},
    editors: {},
    visible: false,
    _editor_onsave: null,

    //перерендерить окно настроек
    reload: function() {
        var that = this;
        var $body = $('#settings-body');
        $body.html('');

        this.renderCategories($body, function(cat, cat_body){
            that.renderSettings(cat, cat_body);
        });
    },

    //добавить новую категорию в настройки
    //id - строка с системным именем
    //name - строка с именем для отображения
    addCategory: function(id, name) {
        this.categories.push([id, name]);
        this.settings[id] = {};
    },

    //добавить новую настройку в категорию
    //category - строка с системным именем категории
    //path - адрес в Store для настройки
    //obj - объект настройки, смотри как оно работат на практике
    addSetting: function(category, path, obj) {
        this.settings[category][path] = obj;
    },
    getSetting: function(category, path) {
        return this.settings[category][path];
    },

    //добавить редактор настройки (например textarea для CSS или система для правил скрытия постов)
    addEditor: function(name, showcb, savecb) {
        this.editors[name] = [showcb, savecb];
    },

    //legend
    //settings-category-name - preferences
 
    renderCategories: function(body, cb) {
        var that = this;
        for(var i=0;i<this.categories.length;i++) (function(i){
            var cat = that.categories[i];

            var $btn_expand = $('<span>+ </span>');
            var $btn_contract = $('<span style="display: none">- </span>');
            var $cat_label = $('<div class="settings__header">' + cat[1] + '</div>');
            var $cat_body = $('<div class="settings__prefs" id="settings-category' + cat[0] + '" style="display: none"></div>');

            $cat_label.prepend($btn_contract);
            $cat_label.prepend($btn_expand);

            var $wrapper = $('<div></div>')
            $wrapper.append($cat_label);
            $wrapper.append($cat_body);
            body.append($wrapper);

            $cat_label.click(function(){
                $cat_body.toggle();
                $btn_contract.toggle();
                $btn_expand.toggle();
            });

            cb(cat[0], $cat_body);
        })(i);
    },
    renderSettings: function(cat_id, cat_el) {
        for(var key in this.settings[cat_id]) {
            if(!this.settings[cat_id].hasOwnProperty(key)) continue;
            var setting = this.settings[cat_id][key];

            var $setting_row = $('<div class="settings__row"></div>');
            var $setting_label = $('<span class="settings__label">' + setting.label + '</span>');

            if(setting.multi) {
                var select_box = $('<select class="settings__multibox mselect"></select>');
                select_box.data('path', key);
                select_box.data('category', cat_id);

                for(var i=0;i<setting.values.length;i++) {
                    select_box.append('<option value="' + setting.values[i][0] + '">' + setting.values[i][1] + '</option>');
                }

                select_box.val(Store.get(key, setting.default));

                $setting_label.append(select_box);
                $setting_row.append($setting_label);
                cat_el.append($setting_row);
            }else{
                var checkbox = $('<input type="checkbox" class="settings__checkbox"/>');
                checkbox.data('path', key);
                checkbox.data('category', cat_id);
                checkbox.prop("checked", !!Store.get(key, setting.default));

                $setting_label.prepend(checkbox);
                $setting_row.append($setting_label);
                cat_el.append($setting_row);
            }


            //////////////////// editor ////////////////
            if(setting.hasOwnProperty('edit')) (function(that, setting){
                var edit = setting.edit;
                var $edit_btn = $('<span class="settings__edit a-link-emulator" title="' + edit.label + '"></span>');

                $edit_btn.click(function() {
                    if(!that.editors.hasOwnProperty(edit.editor)) return false;
                    that._editor_onsave = Settings.editors[edit.editor][1];
                    that._editor_show = Settings.editors[edit.editor][0];
                    that._editor_path = edit.path;
                    that._editor_default_val = edit.default;

                    var val = Store.get(edit.path, edit.default);
                    $('#settings-btn-save').click();

                    if(edit.hasOwnProperty('importable')) {
                        $('#setting-editor-btn-export').show();
                        $('#setting-editor-btn-import').show();
                    }else{
                        $('#setting-editor-btn-export').hide();
                        $('#setting-editor-btn-import').hide();
                    }

                    if(edit.hasOwnProperty('saveable')) {
                        $('#setting-editor-btn-save').show();
                    }else{
                        $('#setting-editor-btn-save').hide();
                    }

                    $('#setting-editor-title').html(edit.title);
                    $('#setting-editor-body').html('');

                    $('#setting-editor-window').show();

                    that.editors[edit.editor][0](val, edit.path, edit.default);

                    return false;
                });

                $setting_row.append($edit_btn);
            })(this, setting);
            ////////////////////////////////////////////////
        }
    },

    toggle: function() {
        if(this.visible) {
            this.hide();
        }else{
            this.show();
        }
    },
    show: function() {
        this.reload();
        $('#settings-window').show();
        this.visible = true;
    },
    hide: function() {
        $('#settings-window').hide();
        this.visible = false;
    }
};

//самая забагованная херовина
//велосипед передачи сообщений между вкладками
window.Gevent = {
    last_id: 1,
    listeners: {},
    expire_time: 1000, //сколько ms считать событие валидным

    init: function() {
        if(typeof(localStorage) == 'undefined') return; //todo cookie
        if(!localStorage.gevent_last || !localStorage.gevents) {
            localStorage.gevents = "[]";
            localStorage.gevent_last = 1;
            return;
        }
        this.last_id = localStorage.gevent_last;

        this._deleteExpired();

        var that = this;
        window.addEventListener('storage', function(e){
            if(e.key != 'gevent_last') return;
            if(e.newValue <= that.last_id) return;

            that._changed(localStorage.gevent_last, localStorage.gevents);
        }, false);
    },

    _deleteExpired: function() {
        try { //удаляем протухшие эвенты
            var events = JSON.parse(localStorage.gevents);
            var initial_len = events.length;
            var random_delta = (Math.random()*(10*this.expire_time)+(10*this.expire_time)); //рандомное время чтоб 15 вкладок не схватили

            for(var i=0;i<events.length;i++) {
                var event = events[i];
                var etime = event[1];
                if(((+new Date)-etime) > random_delta) {
                    events.splice(i,1);
                    i--;
                }
            }

            if(initial_len != events.length) localStorage.gevents = JSON.stringify(events);
        }catch(e){}
    },

    on: function(name, callback) {
        if(!this.listeners.hasOwnProperty(name)) this.listeners[name] = [];
        this.listeners[name].push(callback);

        return callback;
    },

    off: function(name, callback) {
        if(!callback) throw new Error('Gevent.off no callback passed');
        if(!this.listeners.hasOwnProperty(name)) return false;
        var index = this.listeners[name].indexOf(callback);
        if(index < 0) return false;
        this.listeners[name].splice(index,1);

        return true;
    },

    once: function(name, callback) {
        var that = this;
        var proxycb = function(msg){
            that.off(name, proxycb);
            callback(msg);
        };
        this.on(name, proxycb);

        return proxycb;
    },

    onceNtemp: function(name, time, callback, timeout_callback) {
        var that = this;

        var proxy_cb;
        var timeout_timer = setTimeout(function(){
            that.off(name, proxy_cb);
            if(timeout_callback) timeout_callback();
        }, time);

        proxy_cb = this.once(name, function(msg) {
            clearTimeout(timeout_timer);
            callback(msg);
        });

        return proxy_cb;
    },

    emit: function(name, msg) {
        if(typeof(localStorage) == 'undefined') return; //todo cookie
        if(!msg) msg = "";
        this.last_id++;
        var events = JSON.parse(localStorage.gevents);
        events.push([this.last_id, (+new Date), name, msg]);
        //console.log('emit Gevent: ' +  this.last_id + ', ' + (+new Date) + ', ' + name + ', ' + msg); //todo -debug

        localStorage.gevents = JSON.stringify(events);
        localStorage.gevent_last = this.last_id;

        this._watchExpire(this.last_id);
    },

    _watchExpire: function(id) { //убираем за собой. Что не успеем убрать, уберёт init
        var that = this;
        setTimeout(function(){
            that._removeExpired(id);
        }, this.expire_time);
    },

    _removeExpired: function(id) {
        var events = JSON.parse(localStorage.gevents);
        var old_len = events.length;

        for(var i=0;i<events.length;i++) {
            var event = events[i];
            var eid = event[0];
            if(eid == id) {
                events.splice(i,1);
            }
        }
        if(events.length == old_len) return; //не нашли

        localStorage.gevents = JSON.stringify(events);
    },

    _changed: function(gevent_last, json) {
        if(gevent_last == this.last_id) return;
        var events = JSON.parse(json);
        events.sort(function(a,b){
            return a.id-b.id;
        });

        for(var i=0;i<events.length;i++) {
            var event = events[i];
            var eid = event[0];
            var etime = event[1];
            if(eid <= this.last_id) continue;
            if((+new Date)-etime > this.expire_time) continue;

            this._handleEvent.apply(this, event);
        }
    },

    _handleEvent: function(id, time, name, msg) {
        this.last_id = id;
        if(!this.listeners.hasOwnProperty(name)) return;
        var list = this.listeners[name];

        //console.log('recv Gevent: ' + id + ', ' + time + ', ' + name + ', ' + msg); //todo -debug

        //фикс неприятной штуки с удалением .once из массива, над которым работает for
        var list_copy = [];
        for(var i=0;i<list.length;i++) list_copy.push(list[i]);

        for(var j=0;j<list_copy.length;j++) list_copy[j](msg);
    }
};

//сердце макабы
//система работы с постами
(function(){
    var posts = {};
    //thread        - number, ID треда, в котором находится пост
    //threadPosts   - array, массив номеров постов в треде
    //repliesTo     - array, массив номеров постов, на которые отвечает пост
    //replies       - array, массив номеров постов, которые отвечают на пост
    //rendered      - bool, true, если пост есть на странице
    //ajax          - object, если поста нет на странице, а мы его получили по ajax, то тут будет объект из JSON
    //notfound      - bool, true, если мы запрашивали тред, а пост там не нашли, о котором знали из какого-то источника (ответ на пост?)
    //el            - object, элемент поста jquery. Создаётся и возвращается el() для кэширования
    //preloaded     - number, последний загруженный (не isGhost) num поста
    //downloadCallbacks - array, массив коллбеков, вызываемых после загрузки. Присутствие этого свойства, означает, что тред в процессе загрузки
    //cache         - object, объект кэшированных icon,email,name,trip,subject,comment (если отрендерен и нет ajax)

    var PostQuery = function(num) {
        this.num = parseInt(num);

        return this;
    };

    PostQuery.prototype = {

        //записать тред за постом и отметить, если он отрендерен на странице
        setThread: function(num, rendered) {
            num = parseInt(num);
            if(!posts.hasOwnProperty(this.num)) posts[this.num] = {}; //создается объект поста, если его не было, для первого поста в треде это пост-тред
            var post = posts[this.num];
            var thread = posts[num];
            console.log('Post(' + this.num + ').setThread(' + num + ')');
            //if(rendered) {
            //    post.rendered = true;
                if(window.thread.id && num == window.thread.id && (!thread.preloaded || this.num > thread.preloaded)) thread.preloaded = this.num;
                //num == window.thread.id - прелоадед обновляется только для постов из данного треда
            //}

            if(post.thread) return this;
            post.thread = num;

            // console.log('num:' + num + ', this.num:' + this.num);
            // console.log(post);
            // console.log(posts);
            if(!posts.hasOwnProperty(post.thread)) Post(post.thread).setThread(post.thread); //если какой-то пост в треде ссылается на пост из другого треда, о котором мы ничего не знаем
            if(!posts[post.thread].hasOwnProperty('threadPosts')) posts[post.thread].threadPosts = [];
            //console.log('posts: ' + posts + ', post.thread: ' + post.thread);
            ////////////////////// сортируем новый пост, ибо кто-то ленивый не может это сделать в сервере и по JSONу они приходят вразброс
            var sorted = posts[post.thread].threadPosts;
            var slen = sorted.length;
            var min = sorted[0];
            var max = sorted[slen-1];

            if(!slen || this.num <= min) {
                sorted.unshift(this.num);
            } else if(this.num >= max) {
                sorted.push(this.num);
            } else {
                for(var i=1;i<slen;i++) {
                    if(this.num < sorted[i]) {
                        sorted.splice(i, 0, this.num);
                        break;
                    }
                }
            }
            //////////////////////

            return this;
        },
        getThread: function() {
            var post = posts[this.num];
            return post.thread;
        },
        isThread: function() {
            var post = posts[this.num];
            return this.num == post.thread;
        },
        threadPosts: function() {
            var post = posts[this.num];

            return posts[post.thread].threadPosts;
        },
        last: function() {
            var posts = this.threadPosts();
            this.num = posts[posts.length-1];

            return this;
        },
        exists: function() { //не забудь про isGhost()
            return posts.hasOwnProperty(this.num);
        },
        //генерациия превью поста
        previewHTML: function() {
            var num = this.num;
            var post = posts[num];
            var html;

            //@todo по сути все посты ajax хранят.
            if(post.ajax) {
                html = generatePostBody(post.ajax); //нет времени делать лучше
            }else if(post.notfound){
                html = 'Пост не найден'; //todo underfined в 3 жквери
            }else{
                html = 'DEBUG_UNDEFINED_STATE';
            }

            return html;
        },
        fetchPosts: function(param, callback) {
            //@param
            //from
            //thread
            //board
            //update
            var board;
            var thread;
            var from_post;
            var that = this;

            if(!param.update) {
                from_post = param.from_post;
                thread = param.thread;
                board = param.board;
            }else{
                var post = posts[this.num];
                var _thread = posts[post.thread];
                from_post = _thread.preloaded ? _thread.preloaded+1 : post.thread;
                //from_post = param;
                thread = post.thread;
                board = window.thread.board;
                console.log(from_post);
            }

            var onsuccess = function( data ) {
                if(data.hasOwnProperty('Error')) return callback({error:'server', errorText:'API ' + data.Error + '(' + data.Code + ')', errorCode:data.Code});
                var posts = [];
                try {
                    var parsed = JSON.parse(data);
                    var all_posts = parsed['threads'][0]['posts'];

                    //записываем текущие посты из памяти
                    var known_posts = [];
                    //если его нет в памяти, то игнорируем иначе сломаем избранное
                    if(Post(thread).exists()) {
                        known_posts = Post(thread).threadPosts().filter(function(post_id){
                            return !Post(post_id).isNotFound();
                        });
                    }
                    // console.log(all_posts);
                    // console.log(known_posts);
                    for(var i=0;i<all_posts.length;i++) {
                        var post = all_posts[i];
                        if(post.num >= from_post) posts.push(post);
                        
                        //удаляем посты из копии памяти, которые пришли с сервера
                        //если что-то осталось, значит на сервере его уже нет, значит его удалили
                        var all_posts_pos = known_posts.indexOf(post.num);
                        if(all_posts_pos > -1) known_posts.splice(all_posts_pos, 1);
                    }
                    //console.log(known_posts);
                    //удаляем посты, которые были в памяти, но в новом JSON их уже нет
                    for(i=0;i<known_posts.length;i++) {
                        Post(known_posts[i])._notFound();
                    }
                }catch(e){
                    return callback({error:'server', errorText: 'Ошибка парсинга ответа сервера', errorCode: -1});
                }

                //заполняем карту
                var tmpost = Post(1);
                for(var i = 0; i < posts.length; i++) {
                    tmpost.num = posts[i].num;
                    tmpost.setThread(thread).setJSON(posts[i]); 
                }
                //
                //if(param.update) that._findRemovedPosts();                

                callback({data:posts, favorites: all_posts[0]['favorites'], deleted: known_posts});
            };

            var onerror = function(jqXHR, textStatus) {
                if(jqXHR.status == 404) return callback({error:'server', errorText: 'Тред не найден', errorCode: -404});
                if(jqXHR.status == 0) return callback({error:'server', errorText: 'Браузер отменил запрос (' + textStatus + ')', errorCode: 0});
                callback({error:'http', errorText:textStatus, errorCode: jqXHR.status});
            };

            $.ajax( '../' + board + '/res/' + thread + '.json', {
                dataType: 'html',
                timeout: window.config.updatePostsTimeout,
                success: onsuccess,
                error: onerror
            });

            return this;
        },

        _fetchPage: function(param, callback) {
            var board;
            var page;
            if(typeof(param) == 'object') {
                page = param['page'];
                board = param['board'];
            }
            
            var onsuccess = function( data ) {
            	if(data.hasOwnProperty('Error')) return callback({error:'server', errorText:'API ' + data.Error + '(' + data.Code + ')', errorCode:data.Code});
                
                try {
	                var parsed = JSON.parse(data);

	                var tmpost = Post(1);
	                var data = parsed.threads;
	                for(var i = 0; i < data.length; i++) {
	                    var cur = data[i].posts;
	                    var thread = parseInt(data[i].thread_num);
	                    for(var j = 0; j < cur.length; j++) {
	                        tmpost.num = parseInt(cur[j].num);
	                        tmpost.setThread(thread).setJSON(cur[j]); 
	                    }
	                }
	            }catch(e) {
	            	return callback({error:'server', errorText: 'Ошибка парсинга ответа сервера', errorCode: -1});
	            }

                if(!parsed) return callback({fail_to_fetch: true});
                if(!parsed.threads || !parsed.threads.length) return callback({no_more_threads: true});
                callback(parsed.threads);
            };

            var onerror = function(jqXHR, textStatus) {
                if(jqXHR.status == 404) return callback({error:'server', errorText: 'Тред не найден', errorCode: -404});
                if(jqXHR.status == 0) return callback({error:'server', errorText: 'Браузер отменил запрос (' + textStatus + ')', errorCode: 0});
                callback({error:'http', errorText:textStatus, errorCode: jqXHR.status});
            };

            $.ajax( '../' + board + '/' + page + '.json', {
                dataType: 'html',
                timeout: window.config.updatePostsTimeout,
                success: onsuccess,
                error: onerror
            });

            return this;
        },

        //если на пост из не загруженного треда кто-то ссылался и мы знали о посте только тред и номер
        //потом мы загрузили JSON треда и проверяем нашли ли мы там посты, о которых мы знали только их номер
        //если не нашли, значит таких постов уже нет в треде
        _findRemovedPosts: function() {
            var post = posts[this.num];
            var thread = posts[post.thread];
            if(!thread.preloaded) throw new Error('_findRemovedPosts вызван для !preloaded треда. Ошибка выше в коде'); //@todo такого быть уже не может, прелоадед есть изначально даже не для ренереных постов в треде

            var tmp = Post(1);
            $.each( thread.threadPosts, function( key, val ) { //все не найденные отмечаем в notfound
                tmp.num = val; //создавать новый Post в 13 раз медленнее
                if(tmp.isGhost()) tmp._notFound();
            });
        },

        //true, если мы загрузили JSON этого треда
        isAjax: function() {
            var post = posts[this.num];

            return post.hasOwnProperty('ajax');
        },

        //true, если тред отрендерен на странице
        isRendered: function() {
            var post = posts[this.num];

            return !!post.rendered;
        },

        //true, если мы ничего про номера треда и номера поста не знаем о посте
        isGhost: function() {
            var post = posts[this.num];

            return !post.hasOwnProperty('ajax') && !post.rendered && !post.notfound;
        },

        //true, если мы загрузили тред, а этого поста там нет
        isNotFound: function() {
            var post = posts[this.num];

            return post.notfound;
        },

        //выставить notfound
        _notFound: function() {
            var post = posts[this.num];

            post.notfound = true;

            return this;
        },

        //записать JSON и отметить, что тред отрендерен, если он отрендерен (при раскрытии треда с главной например)
        setJSON: function(obj, rendered) {
            //console.log('setJson' + this.num);
            var post = posts[this.num];
            if(rendered){
                post.rendered = true;
            }else{
                post.ajax = obj;
            }

            this._processRepliesHTML(obj.comment);

            return this;
        },
        getJSON: function() {
            var post = posts[this.num];

            if(!post.hasOwnProperty('ajax')) return false;

            return post.ajax;
        },
        //штука для разбора какой пост кому отвечает и кто на кого ссылается для сырого HTML (который хранится в JSON)
        //отслеживает все известные данные по всем тредам. Запоминает ответы из одного треда в другой
        _processRepliesHTML: function(html) {
            var tmp = Post(1);
            //console.log('precesspreliesHtml' + this.num)
            if(html.indexOf('class="post-reply-link"') >= 0) {
                var match = html.match(/class="post-reply-link" data-thread="([0-9]*)" data-num="([0-9]*)"/g);
                var that = this;

                for (var i = match.length - 1; i >= 0; i--) {
                    var replyMatch = match[i].match(/class="post-reply-link" data-thread="([0-9]*)" data-num="([0-9]*)"/);
                    if(replyMatch && replyMatch.hasOwnProperty('2')) {
                        var thread_num = parseInt(replyMatch[1]);
                        var num = parseInt(replyMatch[2]);
                        that.addReplyTo(num);
                        tmp.num = num;
                        tmp.setThread(thread_num).addReply(that.num);
                    }
                }
            }
        },
        //записать в память ответ из текущего поста в какой-то
        addReplyTo: function(reply_to_num) {
            var post = posts[this.num];
            if(!post.hasOwnProperty('repliesTo')) post.repliesTo = [];
            post.repliesTo.push(reply_to_num);

            return this;
        },
        //записать в память ответ какого-то поста на текущий
        addReply: function(reply_num) {
            var post = posts[this.num];
            //console.log('addReply' + this.num)
            if(!post.hasOwnProperty('replies')) post.replies = [];
            if(post.replies.indexOf(reply_num) >= 0) return this;

            post.replies.push(reply_num);
            this._renderReply(reply_num); 
      
            return this;
        },
        //сгенерировать HTML ответов на этот пост
        getReplyLinks: function() {
            var post = posts[this.num];
            var text = '';
            if(!post.hasOwnProperty('replies')) return text;

            for(var i=0;i<post.replies.length;i++) {
                text += this._generateReplyLink(post.replies[i]);
            }

            return text;
        },
        _generateReplyLink: function(reply_num) {
            var reply_thread = posts[reply_num].thread;

            return  '<a ' +
                'class="post-reply-link" ' +
                'data-num="' + reply_num + '" ' +
                'data-thread="' + reply_thread + '" ' +
                'href="../' + window.thread.board + '/res/' + reply_thread + '.html#' + reply_num + '">' +
                '&gt;&gt;' + reply_num +
                '</a> ';
        },
        _renderReply: function(reply_num) {
            var post = posts[this.num];
            if(post.rendered) {
                var $refmap = $('#refmap-' + this.num);
                var link = this._generateReplyLink(reply_num);
                $refmap.css('display','block');
                $refmap.append(link);  
                //console.log($refmap);
                //console.log('_renderReply' +this.num )
            }
        },
        //получить массив номеров ответов на этот пост
        getReplies: function() {
            var post = posts[this.num];
            return post.replies || [];
        },
		getPostsObj: function() {
            return posts;
        },
        el: function() {
            var post = posts[this.num];
            if(!post.el) post.el = $('#post-' + this.num);

            return post.el;
        },
        hide: function(store, reason) {
            if(this.isThread()) {
                this._renderHideThread(reason);
            }else{
                this._renderHidePost(reason);
            }

            if(store) this._storeHide();

            return this;
        },
        unhide: function() {
            if(this.isThread()) {
                this._renderUnHideThread();
            }else{
                this._renderUnHidePost();
            }

            this._storeUnHide();

            return this;
        },
        _storeHide: function() {
            Store.set('board.' + window.thread.board + '.hidden.' + this.num, getTimeInDays());

            return this;
        },
        _storeUnHide: function() {
            Store.del('board.' + window.thread.board + '.hidden.' + this.num);

            return this;
        },
        _renderHideThread: function(reason) {
            var num = this.getThread();
            var post = Post(num);
            var $el = $('#thread-' + num);
            var title = post.getTitle();

            var hiddenBox = $('<div></div>');
            hiddenBox.addClass('thread');
            hiddenBox.addClass('thread_hidden');
            hiddenBox.attr('id', 'hidden-thread-n' + num);
            hiddenBox.data('num', num);
            hiddenBox.html('Скрытый тред <span class="hidden-thread-num">№'+ num + '</span><i> (' + title + ')</i>');
            if(reason) hiddenBox.append('<span class="post-hide-reason">(' + reason + ')</span>');

            $el.before(hiddenBox);
            $el.hide();

            //document.getElementById('thread-' + num).style.display = 'none';

        },
        _renderUnHideThread: function() {
            var num = this.getThread();
            var $el = $('#thread-' + num);

            $('#hidden-thread-n' + num).remove();
            $el.show();
            //document.getElementById('thread-' + num).style.display = 'block';
        },
        _renderHidePost: function(reason) {
  
            // if(reason) $boxHTML.append('<span class="post-hide-reason">(' + reason + ')</span>');

            var $hidePost = document.getElementById('post-body-' + this.num);
            var $hideImg  = $hidePost.getElementsByClassName('post__images')[0];
            var $hideBody = document.getElementById('m' + this.num);
            var $hideRefmap = document.getElementById('refmap-' + this.num);

            $hidePost.classList.add('post_type_hidden');
            if($hideImg) $hideImg.style.display = 'none';
            $hideBody.style.display = 'none';
            $hideRefmap.style.display  = 'none';
            $hidePost.style.opacity = '0.5';
        },
        _renderUnHidePost: function() {
            var $hidePost = document.getElementById('post-body-' + this.num);
            var $hideImg  = $hidePost.getElementsByClassName('post__images')[0];
            var $hideBody = document.getElementById('m' + this.num);
            var $hideRefmap = document.getElementById('refmap-' + this.num);

            $hidePost.classList.remove('post_type_hidden');
            $hideBody.style.display = 'block';
            $hideRefmap.style.display = 'block';
            if($hideImg) $hideImg.style.display  = 'block';
            $hidePost.style.opacity = '1';
        },
        //функция для подсветки, но она мало где используется, обычно прописывается класс post_type_highlight
        //для подсветки лучше было бы сделать отдельную систему, она слишком много где используется
        highlight: function() {
            $('.post_type_highlight').removeClass('post_type_highlight');
            $('#post-body-' + this.num).addClass('post_type_highlight');
        },
        highlight_myposts: function() {
			$('#post-body-' + this.num).removeClass('post_type_watched');
            $('#post-body-' + this.num).addClass('post_type_watched');
        },
        highlight_myposts_replies: function() {
            $('#post-body-' + this.num).removeClass('post_type_replied');
            $('#post-body-' + this.num).addClass('post_type_replied');
        },
        //функция для генерации заголовка
        getTitle: function() {
            var element = this.el();
            var title = $.trim(element.find('.post__title').text());
            if(!title) title = $.trim(element.find('.post__message:first').text());
            if(title.length > 50) title = title.substr(0,50) + '...';

            return escapeHTML(title);
        },
        raw: function() { //мало ли кому это надо будет
            return posts[this.num];
        },

        //функции _c для кэширования данных для системы скрытия постов
        _cGet: function(objparam, htmlclass) {
            var post = posts[this.num];
            if(post.hasOwnProperty('ajax')) return post.ajax[objparam];
            if(!post.rendered) throw new Error('Вызов oGet для поста без ajax||rendered. Ошибка выше по коду.');
            if(!post.hasOwnProperty('cache')) post.cache = {};
            if(!post.cache.hasOwnProperty(objparam) && htmlclass) post.cache[objparam] = this.el().find('.' + htmlclass).html();

            return post.cache[objparam];
        },
        _cCacheNameMail: function() {
            var post = posts[this.num];
            if(post.hasOwnProperty('ajax')) return;
            if(!post.rendered) throw new Error('Вызов oCacheNameMail для поста без ajax||rendered. Ошибка выше по коду.');
            if(!post.hasOwnProperty('cache')) post.cache = {};
            if(post.cache.hasOwnProperty('name') || post.cache.hasOwnProperty('email')) return;

            var name_el = this.el().find('.post__anon');
            if(name_el.length) {
                post.cache.name = name_el.html();
                post.cache.email = null;
            }else{
                var el = this.el().find('.post__email');
                post.cache.name = el.html();
                post.cache.email = el.attr('href');
            }
        },
        cGetIcon:function() {
            return this._cGet('icon', 'post__icon');
        },
        cGetEmail:function() {
            this._cCacheNameMail();
            return this._cGet('email');
        },
        cGetName:function() {
            this._cCacheNameMail();
            return this._cGet('name');
        },
        cGetTrip:function() {
            return this._cGet('trip', 'post__trip');
        },
        cGetSubject:function() {
            return this._cGet('subject', 'post__title');
        },
        cGetComment:function() {
            return this._cGet('comment', 'post__message');
        }
    };

    window.Post = function(num) {
        num = parseInt(num);
        return (new PostQuery(num));
    };
})();

//система стадий загрузки
(function(){
    var dom_ready = false;
    var conf_queue = [];
    var dom_queue = [];
    var debug_html = '';
    window.sc_stages = [];
    window.sc_time = 0;


    //вывод дебага внизу страницы
    $('body').append('<div id="bmark_debug" style="display: none">' + debug_html + '</div>');

    //добавление новой страдии загрузки
    //смотри на практике как оно работает
    window.Stage = function(name, id, type, cb){
        window.sc_stages.push([id, name]);
        if(id != 'store' && Store.get('debug_disable_stage.' + id, false)) {
            append_debug('<span style="color: #0066FF">skip) ' + name + '</span><br>');
            return;
        }
        name = 'Стадия ' + name;
        bmark(name, cb);
    };

    //benchmark
    var bmark = function(name, cb) {
        var start = (+new Date);

        try {
            cb();
        } catch(err) {
            append_debug('<span style="color:#FF0000">На шаге "' + name + '" произошла ошибка:<br>' +
                '<pre>' +
                err + '\n'+
                err['stack'] +
                '</pre>' +
                '</span>');
            return false;
        }

        var end = (+new Date);
        var delta = end-start;
        window.sc_time += delta;

        $('#bmark_debug').append(delta + 'ms) ' + name + '<br>');
    };
})();

$.fn.clearValue = function(){
    return this.each(function(){
        var el = $(this);
        el.wrap('<form>').closest('form').get(0).reset();
        el.unwrap();
    });
};

Stage('Загрузка window.Gevent',                 'gevent',       Stage.INSTANT,      function(){
    Gevent.init();

    Gevent.on('fav.add', function(arg){
        Favorites.render_add(arg[0], arg[1]);
    });
    Gevent.on('fav.remove', function(num){
        Favorites.render_remove(num);
    });
    Gevent.on('fav.reset_newposts', function(num){
        Favorites.render_reset_newposts(num);
    });
    Gevent.on('fav.newposts', function(arg){
        Favorites.render_newposts(arg[0], arg[1]);
    });
    Gevent.on('fav.reset_deleted', function(num){
        Favorites.render_deleted(num);
    });
});
Stage('Загрузка Media провайдеров',             'media',        Stage.INSTANT,      function(){
    Media.add('youtube', 'youtube.com', "https?://(?:www\\.)?(?:youtube\\.com/).*(?:\\?|&)v=([\\w-]+)", {id: 1});
    Media.add('youtube', 'youtu.be', "https?://(?:www\\.)?youtu\\.be/([\\w-]+)", {id: 1});
    Media.add('vimeo', 'vimeo.com', "https?://(?:www\\.)?vimeo\\.com/([\\d]+)", {id: 1});
    Media.add('liveleak', 'liveleak.com', "https?://(?:www\\.)?(?:liveleak\\.com/).*(?:\\?|&)i=([\\w]+_\\d+)", {id: 1});
    Media.add('dailymotion', 'dailymotion.com', "https?://(?:www\\.)?dailymotion\\.com/video/([\\w]+)", {id: 1});
    Media.add('vocaroo', 'vocaroo.com', "https?://(?:www\\.)?vocaroo\\.com/i/([\\w]+)", {id: 1});
    Media.add('twitter', 'twitter.com', "https?://(?:www\\.)?twitter\\.com/.+/status/([\\d]+).*", {id: 1});

    Media.addGenerator('youtube', function(obj, cb){
        cb('<iframe src="../../https@www.youtube.com/embed/' + obj.id + '@autoplay=1" width="640" height="360" frameborder="0" allowfullscreen></iframe>');
    });
    Media.addGenerator('vimeo', function(obj, cb){
        cb('<iframe src="../../https@player.vimeo.com/video/' + obj.id + '@autoplay=1" width="640" height="360" frameborder="0" allowfullscreen></iframe>');
    });
    Media.addGenerator('liveleak', function(obj, cb){
        $.get( '../../mobile.liveleak.com/view@i=' + obj.id + '&ajax=1', function( data ) {
            var regexp = /generate_embed_code_generator_html\('(\w+)'\)/i;
            var match = regexp.exec(data);
            if(!match || !match.hasOwnProperty('1')) return cb();
            cb('<iframe src="../../www.liveleak.com/ll_embed@f=' + match[1] + '&autostart=true" width="640" height="360" frameborder="0" allowfullscreen></iframe>');
        })
            .fail(function(){
                cb();
            });
    });
    Media.addGenerator('dailymotion', function(obj, cb){
        cb('<iframe width="640" height="360" src="../../https@www.dailymotion.com/embed/video/' + obj.id + '@autoplay=1" frameborder="0" allowfullscreen></iframe>');
    });
    Media.addGenerator('vocaroo', function(obj, cb){
        cb('<object width="148" height="44"><param name="movie" value="../../https@vocaroo.com/player.swf@playMediaID=' + obj.id + '&autoplay=1"></param><param name="wmode" value="transparent"></param><embed src="../../https@vocaroo.com/player.swf@playMediaID=' + obj.id + '&autoplay=1" width="148" height="44" wmode="transparent" type="application/x-shockwave-flash"></embed></object>');
    });
    Media.addGenerator('twitter', function(obj, cb){
        var onsuccess = function( data ) {
            cb(data.html);
        };
        var onfail = function(){
            cb();
        };
        $.ajax( {
            url: '../../https@api.twitter.com/1/statuses/oembed.json@lang=ru&maxwidth=700&id=' + obj.id + '&callback=?',
            dataType: 'json',
            timeout: 5000,
            success: onsuccess,
            error: onfail
        });
    });

    Media.addUnloader('twitter', function(el){
        $(el).closest('.post__message').find('.twitter-tweet').remove();
    });

    Media.addThumbnailer('youtube', function(obj){
        return '<img src="../../https@i.ytimg.com/vi/' + obj.id + '/mqdefault.jpg" width="320" height="180">';
    });

    Media.addTitler('youtube', function(media, cb) {
        var jqxhr = $.get("../../https@www.googleapis.com/youtube/v3/videos@part=snippet&id=" + media.id + "&key=AIzaSyBw-cmbb0_u5bKx3ekgH9jaFfcN9CTLKD4", function(data) {
            if(!data) return cb(false);
            if(!data.items) return cb(false);
            if(!data.items[0]) return cb(false);
            if(!data.items[0].snippet) return cb(false);
            cb(data.items[0].snippet.title);
        });

        jqxhr.fail(function() {
            cb(false);
        })
    });

    Media.addMeta('youtube', {name: 'YouTube', icon: '<i class="fa fa-media-icon media-meta-youtube-icon"></i>'});
});
Stage('Загрузка системы скруллинга',            'scrollcb',     Stage.INSTANT,      function(){
    window.scrollcb_array = [];
    var timer = 0;
    var win = $(window);

    win.scroll(function(){
        if(timer) clearTimeout(timer);

        timer = setTimeout(function(){
            timer = 0;
            var pos = win.scrollTop();

            for(var i=0;i<window.scrollcb_array.length;i++) window.scrollcb_array[i](pos);
        },100);
    });
});
Stage('Init функции',                     'initialisation',     Stage.DOMREADY,      function(){
	//это забрано из юзерспейс функции newakaba fastload()
	dForm = $('#posts-form')[0];
	if(!dForm) return;
	if($('#usercode-input')) $('.usercode-input,.qr-usercode-input').val(getCookie('passcode_auth'));
	//
   
});
Stage('Сборщик мусора',                         'gc',           Stage.DOMREADY,     function(){
    if(!window.localStorage) return;
    if(!localStorage.store) return;

    if(localStorage.store.length < window.store_limit) return;
    Store.del('boardstats');
    Store.del('_cache');

    if(localStorage.store.length < window.store_limit) return;
    throw new Error('GC failed (' + localStorage.store.length + 'b left)');
});
Stage('Определение браузера для костыля',       'browserdetect',Stage.DOMREADY,     function(){
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        window.kostyl_class = 'browser-ff';
        $('body').addClass(window.kostyl_class);
    }
});
Stage('Переключение разделов на мобилках',      'boardswitch',  Stage.DOMREADY,     function(){
    var $box = $('#LakeNavForm');
    $box.val('../' + window.board +  '/');
    $box.change(function(){
        var newval = $(this).val();
        window.location.href = newval;
    });
});
Stage('Переключение стилей',                    'styleswitch',  Stage.DOMREADY,     function(){
    var current = Store.get('styling.style');
    var $el = $('#SwitchStyles');

    var switchTo = function(theme_path) {
        var css_link = $('#dynamic-style-link');
        if(!theme_path) {
            if(css_link.length) css_link.remove();
            return;
        }

        if(!css_link.length) {
            css_link = $('<link href="' + theme_path + '" id="dynamic-style-link" type="text/css" rel="stylesheet">');
            $('head').append(css_link);

            return;
        }

        css_link.attr('href', theme_path);
    };

    var onChange = function(){
        var selected = $el.val();

        if(!selected) {
            Store.del('styling.style');
        }else{
            Store.set('styling.style', selected);
            current = selected;
        }
        var path =  window.config.styles[selected];
        switchTo(path);
    };

    $el.change(onChange);

    if(current) {
        $el.val(current);
    }
});
Stage('Управление капчей',                      'captcha',      Stage.DOMREADY,     function(){
    //Store.set('other.captcha_provider','2chaptcha')
    if(Store.get('other.captcha_provider','google') == 'google') {
        window.requestCaptchaKey = window.requestCaptchaKeyGoogle;
        window.loadCaptcha = window.loadCaptchaGoogle;
        return;
    }
    if(Store.get('other.captcha_provider','google') == '2chaptcha') {
        window.requestCaptchaKey = window.requestCaptchaKey2ch;
        window.loadCaptcha = window.loadCaptcha2ch;
        return;
    }

});
Stage('Управление полями загрузки картинок',    'uploadfields', Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    if(!window.FileReader) return; //HTML5
    if(!window.FormData) return; //HTML5

    var FormFiles = window.FormFiles = {
		vip: true,
		channelvip: false,
		max_files_size: Store.get('other.max_files_size') || window.thread.max_files_size,
		max: Store.get('other.max_files') || 4,
        inputsContainer: null,
        count: 0,
		files_size: 0,
        filtered: [], //тут файлы, которые фактически пойдут на сервер(удаленные удаляются)

        init: function(){
			if(window.thread.twochannel) this.channelvip = true;
			var premium = Store.get('jsf34nfk3jh') && !Store.get('renewneeded');
			
			if(this.channelvip || premium) {
				if(premium) $('.filer__limits').html('Макс объем: ' + this.max_files_size/1024 + 'Mб, макс кол-во файлов: ' + this.max);
			}
			$('.filer__input').change(this.onInputChangeMulti);
			$('.filer__thumbnails').on('click','.filer__delete', this.onDeleteMulti); 
			
			var drag = $('.filer__drag-area');
			var postform = $('.makaba');
			drag.on('drag dragstart dragend dragover dragenter dragleave drop', this.fileDragHover)
				.on('drop', this.fileSelectHandler)
				.on('click', function() { $('#formimages').click(); });
			postform.on('paste', this.onClipboardPaste);
			
            this.draggable();
        },

        draggable: function() {
            var in_drag = false;
			$('.filer__thumbnails').on('mousedown','.filer__img',function(e){
                if(in_drag) return;
                if(e.which != 1) return;
                e.preventDefault();

                in_drag = $(this).closest('.filer__thumb').data('id');
            });
            $('.filer__thumbnails').on('mouseover','.filer__thumb',function(e){
                if(!in_drag) return;
                var this_id = $(this).data('id');
                if(in_drag == this_id) return;
                if(Math.abs(in_drag-this_id) > 1) return;

                FormFiles.swap(in_drag, this_id);
                in_drag = this_id;
            });

            $(window).mouseup(function(){
                if(!in_drag) return;
                in_drag = false;
            });
        },
		
		onClipboardPaste: function(e) {
			var items = (e.clipboardData || e.originalEvent.clipboardData).items;
			for (var i = 0; i < items.length; i++) {
				var item = items[i];
				if (item.kind === 'file') {
				  var blob = item.getAsFile();
				  //console.log(blob);
				  FormFiles.addMultiFiles([blob]);
				  
				}
			}
		},
		
		onInputChangeMulti: function(e) {
            if(!this.files || !this.files[0]) return;
			if(FormFiles.count >= FormFiles.max || this.files.length > FormFiles.max) {
				alert('Вы можете загрузить не более ' + FormFiles.max + ' файлов!');
				this.value='';
				return;
			}
			FormFiles.addMultiFiles(this.files);
        },
		
		fileSelectHandler: function(e) {
			FormFiles.fileDragHover(e);
			e.dataTransfer = e.originalEvent.dataTransfer;
			var files = e.target.files || e.dataTransfer.files;
			if(FormFiles.count >= FormFiles.max || files.length > FormFiles.max) {
				alert('Вы можете загрузить не более ' + FormFiles.max + ' файлов!');
				this.value='';
				return;
			}
			FormFiles.addMultiFiles(files);
		},
		
		fileDragHover: function(e) {
			e.stopPropagation();
			e.preventDefault();
			e.target.className = 'filer__drag-area';
			$(e.target).addClass(e.type == 'dragover' ? 'filer__drag-area_hover' : '');
		},
        
        onDeleteMulti: function() {
            var el = $(this);
            var id = el.closest('.filer__thumb').data('id');
            FormFiles.removeFileMulti(id);
        },
		
        addMultiFiles: function(files) {
			for(var i=0;i<files.length;i++) {
				this.files_size += files[i].size/1024;
				if(this.files_size > this.max_files_size) {
					alert('Превышен макс. объем данных для отправки, кол-во доступных для загрузки файлов - ' + i);
					this.files_size -= files[i].size/1024;
					break;
				}
				this.filtered.push(files[i]); //пишем файлы в массив, там можно их шатать, чтобы в sendForm высирать на сервер))
				if(files[i].type.substr(0,5) == 'image') {
					var reader = new FileReader();
					reader.onload = (function () {
						var info = {
							name: files[i].name,
							size: files[i].size,
							type: files[i].type,
							preview: '../newtest/resources/images/dvlogo.png'
						};
						return function (e) {
							FormFiles.count++;
							info.preview = e.target.result;
							FormFiles.processFile(info);
						}
					})(files[i]);
					reader.readAsDataURL(files[i]);
				}else{
					FormFiles.count++;
					this.processFile({name: files[i].name,size: files[i].size,type: files[i].type,preview: '../newtest/resources/images/dvlogo.png'});
				}
            }
        },

        removeFileMulti: function(id) {
			var name = $('.filer__thumb_c_' + id + ' .filer__img img').attr('title');
            
			$('.filer__thumb_c_' + id).remove();
            for(var i=id;i<=this.count;i++) {
                this.rename(i, i-1);
            }
            this.count--;

            var filesArr = Array.prototype.slice.call(FormFiles.filtered);
            for(var i=0;i<filesArr.length;i++) {
				if(filesArr[i].name === name) {
					this.files_size -= filesArr[i].size/1024;
					filesArr.splice(i,1);
					break;
				}
			}
			this.filtered = filesArr;
        },

        rename: function(old_id, new_id) {
            $('.form-files-input-image' + old_id)
                .attr('name', 'file' + new_id)
                .removeClass('form-files-input-image' + old_id)
                .addClass('form-files-input-image' + new_id);

            $('.filer__thumb_c_' + old_id)
                .removeClass('filer__thumb_c_' + old_id)
                .addClass('filer__thumb_c_' + new_id)
                .data('id', new_id);

        },

        swap: function(id1, id2) {
            if(Math.abs(id1-id2) > 1) return;
            if(id1 == id2) return;

            var $boxex = $('.filer__thumb_c_' + id1);
            var $boxex2 = $('.filer__thumb_c_' + id2);

            for(var i=0;i<$boxex.length;i++) {
                if(id1 < id2) $($boxex2[i]).after($boxex[i]);
                else $($boxex2[i]).before($boxex[i]);
            }

            this.rename(id1, 'temp');
            this.rename(id2, id1);
            this.rename('temp', id2);
			
			var tmpval = this.filtered[id1-1];
			this.filtered[id1-1] = this.filtered[id2-1];
			this.filtered[id2-1] = tmpval;
        },

        processFile: function(file) {
			//console.log(file);
			var width= 100, height = 100;
            $('.filer__thumbnails').append('<div class="filer__thumb filer__thumb_c_' + this.count + '"  data-id="' + this.count + '">' +
                '<span class="filer__img"><img src="' + file.preview + '" style="max-width:' + width + 'px;max-height:' + height + 'px" title="' + file.name + '"></span>' +
                '<span class="filer__meta">' +
					'<span class="filer__size">' + getReadableFileSizeString(file.size) + '</span> ' +
					'<span class="filer__delete fa fa-times"></span>' +
				'</span>' +
				'<span class="filer__nsfw" style="display:none;">' + '<label for="img_nsfw">nsfw: </label><input type="checkbox" id="img_nsfw" name="image' + this.count + '_nsfw" value="1">' + '</span> ' +  // window.thread.board=='pa'
                '</div>' +
				(this.count==4?'<br>':''));
			if(window.thread.board=='pa') {
				$('.filer__nsfw').show();
			}
        },

        reset: function() {
            $('.filer__thumbnails').html('');
            $('#form-files-input-inputs-container').html('');
            this.count = 0;
			this.filtered = [];
			this.files_size = 0;
        },

        appendToForm: function(form) {
            $(form).append($('#form-files-input-inputs-container'));
        },
    };

    if(FormFiles.max) FormFiles.init();

});
Stage('Обработка и отправка постов на сервер',  'postsumbit',   Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    var request;
    var busy = false;
	var valid = false;
    var $qr = $('#qr');
    var $forms =  $('#postform,#qr-postform');
    var $submit_buttons = $('#qr-submit,#submit');
	//todo просмотреть, можно ли ускорить кешируя ссылки на $("qr-blabla") в переменную
    var sendForm = function(form) {
		if(FormFiles.vip || FormFiles.channelvip) $('.filer__input').val('');
        var formData = new FormData(form);
        busy = true;
        
        //эта пипка для подмены пикч, если из мультиселекта было что-то удалено
		if(FormFiles.vip) {
			for(var i=0, len=FormFiles.filtered.length; i<len; i++) {
				formData.append('formimages', FormFiles.filtered[i]);
			}
		}

        request = $.ajax({
            url: '../makaba/posting.fcgi@json=1',  //Server script to process data
            type: 'POST',
            dataType: 'json',
            xhr: function() {  // Custom XMLHttpRequest
                var myXhr = $.ajaxSettings.xhr();
                if(myXhr.upload){ // Check if upload property exists
                    myXhr.upload.addEventListener('progress', progressHandling, false); // For handling the progress of the upload
                }
                return myXhr;
            },
            //Ajax events
            success: on_send_success,
            error: on_send_error,
            // Form data
            data: formData,
            //Options to tell jQuery not to process data or worry about content-type.
            cache: false,
            contentType: false,
            processData: false
        });

        renderSending();
    };
    window.sendForm = sendForm;

    var renderSending = function(){
        /*var inputs = forms.find('input,select,textarea').not('[type=submit]');
         inputs.attr('disabled','disabled');*/
        $submit_buttons.attr('value', 'Отправка...');
    };

    var renderSendingDone = function(){
        /*var inputs = forms.find('input,select,textarea').not('[type=submit]');
         inputs.removeAttr('disabled');*/
        $submit_buttons.attr('value', 'Отправить');
    };

    var progressHandling = function(e) {
        var percent = 100/e.total*e.loaded;
        if(percent >= 99) return $submit_buttons.attr('value', 'Обработка...');

        var bpercent = ( (Math.round(percent*100))/100 ).toString().split('.');
        if(!bpercent[1]) bpercent[1] = 0;
        bpercent = (bpercent[0].length==1?'0'+bpercent[0]:bpercent[0]) + '.' + (bpercent[1].length==1?bpercent[1]+'0':bpercent[1]);

        $('#qr-progress-bar').attr('value', e.loaded).attr('max', e.total);
        $submit_buttons.attr('value', bpercent + '%');
    };

    var on_send_error = function(request) {
        if(request.statusText == 'abort') {
            $alert('Отправка сообщения отменена');
        }else{
            $alert('Ошибка постинга: ' + request.statusText);
        }

        on_complete();
    };

    var on_send_success = function(data) {
        if(data.Error) {
            if(data.Id) {
                $alert(data.Reason + '<br><a href="/ban?Id=' + data.Id + '" target="_blank">Подробнее</a>', 'wait');
            }else{
                $alert('Ошибка постинга: ' + (data.Reason || data.Error));
            }
        }else if(data.Status && data.Status == 'OK') {
            $alert('Сообщение успешно отправлено');
			
			//Favorites если тред && other.autowatchmyposts, то авто-подпись на пост
			if(Store.get('other.autowatchmyposts', true) && window.thread.id) {
				num = window.thread.id;
				if(!Favorites.isFavorited(window.thread.id)) {
					Favorites.add(num);
					Favorites.show();
					Favorites._send_fav(num);
				}
				current_posts = Store.get('favorites.' + num + '.posts', false);
				if(current_posts) {
					Store.set('favorites.' + num + '.posts', current_posts.concat(data.Num));
				} else {
					Store.set('favorites.' + num + '.posts', [data.Num]);
				}	
			}

			//сохранить номер поста и тред, если включа настройка higlight_myposts
			if(Store.get('other.higlight_myposts',true)) {
				var num = window.thread.id; //по хорошему это не сработает если постилось в тред с нулевой при включенной опции "не перенаправлять в тред"
				current_posts = Store.get('myposts.' + window.thread.board + '.' + num, []);
				Store.set('myposts.' + window.thread.board + '.' + num, current_posts.concat(data.Num));
			}
			
            if(Store.get('other.qr_close_on_send', true)) $('#qr').hide();

            if(!window.thread.id) { //костыль
                var behavior = Store.get('other.on_reply_from_main', 1);
                if(behavior == 1) {
                    window.location.href = '../' + window.board + '/res/' + $('#qr-thread').val() + '.html#' + data.Num;
                }
            }else{
                var highlight_num = data.Num;
                PostF.updatePosts(function(data){
                    if(Favorites.isFavorited(window.thread.id)) Favorites.setLastPost(data.data, window.thread.id);
                    Post(highlight_num).highlight();
					//higlight_myposts
					//if(Store.get('other.higlight_myposts', true))  Post(highlight_num).highlight_myposts(); 
                });
            }
            resetInputs();
        }else if(data.Status && data.Status == 'Redirect') {
            var num = data.Target;
            $alert('Тред №' + num + ' успешно создан');
			
			//костылик, при создании треда для автодобавления в избранное, если есть настройка autowatchmythreads
			if(Store.get('other.autowatchmythreads', false)) Store.set('other.mythread_justcreated', true);

            window.location.href = '../' + window.board + '/res/' + num + '.html';
        }else{
            $alert('Ошибка постинга');
        }

        on_complete();
    };

    var on_complete = function() {
        busy = false;
        renderSendingDone();
        //loadCaptcha(); //@todo
    };

    var resetInputs = function() {
        $('#subject').val('');
        $('#shampoo, #qr-shampoo').val('');
        $('.message-byte-len').html(window.thread.max_comment);
        if(window.FormFiles) window.FormFiles.reset();
		$('.oekaki-image').val(''); //очистка оекаки
		$('.oekaki-metadata').val(''); //очистка оекаки
		$('.oekaki-clear').prop('disabled', true);
		$('.message-sticker-preview').html(''); // sticker
		$('.sticker-input').remove();
    };

    var saveToStorage = function() {
        Store.set('thread.postform.name', $('#name').val());
        Store.set('thread.postform.email', $('#e-mail').val());
        var icon = $('.anoniconsselectlist').val();
        if(icon) Store.set('thread.postform.icon.' + window.thread.board, icon);
    };

    var validator_error = window.postform_validator_error = function(id, msg) {
        var $el = $('#' + id);
        var $qr_el = $('#qr-' + id);

        if(msg) $alert(msg);

        $el.addClass('error');
        $qr_el.addClass('error');
        (activeForm.attr('id') == 'qr-shampoo') ? $qr_el.focus() : $el.focus();
    };

    var validateForm = function(is_qr) {
		var $c_id    = $('.captcha__key');
        var len = unescape(encodeURIComponent($('#shampoo').val())).length;
        var max_len = parseInt(window.thread.max_comment);

        if($('input[name=thread]').val()=='0' && window.FormFiles && window.FormFiles.max && !window.FormFiles.count && !is_qr && !window.thread.enable_oekaki) return $alert('Для создания треда загрузите картинку');
		if($('input[name=thread]').val()=='0' && $('input[name=subject]').val()=='' && board == 'news') return $alert('Для создания треда заполните поле "Тема"');  //вкл. обязательное поле "тема" в news
        if($('input[name=thread]').val()=='0' && $('input[name=tags]').val()=='' && board == 'vg') return $alert('Для создания треда заполните поле "Теги"'); //вкл. обязательное поле "теги" в vg
		if(!len && window.FormFiles && window.FormFiles.max && !window.FormFiles.count && !FormFiles.oekaki && !FormFiles.sticker) return validator_error('shampoo', 'Вы ничего не ввели в сообщении'); //не проверять оекаки
        if(len > max_len) return validator_error('shampoo', 'Максимальная длина сообщения ' + max_len + ' <b>байт</b>, вы ввели ' + len);

        return true;
    };
	
    var renderCaptchaResolve = function(){
        /*var inputs = forms.find('input,select,textarea').not('[type=submit]');
         inputs.attr('disabled','disabled');*/
        $submit_buttons.attr('value', 'Капча...');
    };

    $forms.on('submit', function(){
        if(typeof FormData == 'undefined') return; //старый браузер
        if(busy) {
            request.abort();
            return false;
        }
        window.FormFiles.appendToForm(this);
        var form = $(this);

        saveToStorage();
		
        //if(validateForm(form.attr('id') == 'qr-postform')) sendForm(form[0]);
        
        //@todo
        //господи Иисуси это надо поправить как-нибудь...
        var widgetQr;
        var renderCaptcha = function() {
            var key = window.config.captchaKey;
            if(key == -1 || key == -2) {
                    sendForm(form[0]);
            }else{

                $('.captcha__key').val(key);
                if ( $('#captcha-widget').html()=='' ) {
                    //проверка капчи до отправки файлов
                    //@todo
                    renderCaptchaResolve();
                    widgetQr = grecaptcha.render('captcha-widget', {
                        'sitekey' : key,
                        'theme' : 'light',
                        'size' : 'invisible',
                        'callback': function(r) {
                            //var r = grecaptcha.getResponse();
                            var e = document.getElementById('captcha-widget-main');
                            e.innerHTML = '';
                            var input = document.createElement("input");
                            input.type = 'hidden';
                            input.name = 'g-recaptcha-response';
                            input.value = r;
                            e.appendChild(input);
                            sendForm(form[0]);
                        },
                    });
                    grecaptcha.execute(widgetQr);
                } else {
                    renderCaptchaResolve();
                    grecaptcha.reset(widgetQr);
                    grecaptcha.execute(widgetQr);
                }
            }
        }
        if(Store.get('other.captcha_provider','google') == '2chaptcha') {
            sendForm(form[0]);
        } else if(validateForm(form.attr('id') == 'qr-postform')) {
            renderCaptcha();
        }
        
        return false;
    });

    $('#qr-cancel-upload').click(function(){
        request.abort();
    });

    resetInputs();
});

Stage('Обработка нажатий клавиш',               'keypress',     Stage.DOMREADY,     function(){
    var ctrl = false;
    $(window).keydown(function(e) {
        if(e.keyCode == 17) ctrl = true;
        if(e.keyCode == 32 && ctrl) {
            if(!Store.get('other.qr_hotkey', true)) return;
            var $qr = $('#qr');
            if($qr.is(':visible')) {
                $qr.hide();
            }else{
                $qr.show();
                loadCaptcha();
            }
        }
    })
        .keyup(function(e) {
            if(e.keyCode == 17) ctrl = false;
        })
        .blur(function() {
            ctrl = false;
        });

    $('#qr-shampoo,#shampoo').keydown(function(e) {
        if(e.keyCode == 13 && ctrl && Store.get('old.ctrl_enter_submit', true)) {
            if(window.activeForm.attr('id') == 'qr-shampoo') {
                $('#qr-submit').click();
            }else{
                $('#submit').click();
            }
        }
    });

});
Stage('Enable debug',                           'enabledebug',  Stage.DOMREADY,     function(){
    if(!Store.get('debug',false)) return;
    $('#bmark_debug').attr('style','inline-block');
    $('.debug').removeClass('debug');
});
Stage('NSFW',                                   'nsfw',         Stage.DOMREADY,     function(){
    var enabled = Store.get('styling.nsfw',false);

    var turn_on = function() {
        enabled = true;
        $('head').append('<style type="text/css" id="nsfw-style">' +
            '.preview{opacity:0.05}' +
            '.preview:hover{opacity:1}' +
            '</style>');
    };
    var turn_off = function() {
        enabled = false;
        $('#nsfw-style').remove();
    };

    $('#nsfw').click(function(){
        if(enabled) {
            Store.del('styling.nsfw');
            turn_off();
        }else{
            Store.set('styling.nsfw',true);
            turn_on();
        }
    });

    if(enabled) turn_on();
});
Stage('Наполнение карты постов',                'mapfill',      Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной

     //обертка для операций с постами и тредами, расширения для postquery по сути, чтобы не хранить
    //тонну функций расбросанных
    window.PostF = {
        //@_renderlies -
        //идем по постам, если видим, что текущий пост - ответ на какой-то выше, то рендерим текущий пост в кач-ве ответа
        //на "какой-то" пост выше
        //
        _postshtml: '',
        _cache: [],
        _renderLoading: function() {
            
            //$('.').append(html);
            $alert('Лоадинг, плис вейт...', 'wait');
            console.log('loading');
        },
         _renderLoaded: function() {
            //document.getElementById('cvr').style.display = 'none';
            $close($id('alert-wait')); //@todo document getlementbyid --> $id
            $alert('Загружено');

            //@postLoad
            Favorites.init();
            if(window.location.hash) {
                //найс трюки ебаный хромог
                var hash = window.location.hash;
                // window.location.hash = '';
                // window.location.hash = hash; 
                document.getElementById(hash.substr(1)).scrollIntoView();
            } 

        },
        _append: function(data, threadNum) {
            console.time("append");
            var tmpost = Post(1);
            for(var i = 0; i < data.length; i++) {
                tmpost.num = data[i].num;
                tmpost.raw().rendered = true;
                if(!i) {
                    this._appendThread(data[i]);
                } else {
                    this._appendPost(data[i], data.length);
                }
            }
            console.log('last');

            console.timeEnd("append");
        },
        _appendPost: function(post, max) {
            if(!post.hasOwnProperty('num')) return false; //это какой-то неправильный пост
            if($('#post-' + post.num).length) return false;
            var buf = max < 300 ? max : 300;
            //console.log(Post(post.num).getReplies());
            //this._cache.push(post.num);//@todo обработка ответов между буферизованными постами
            //можно сюда сохранять только посты с ответом, чтобы не перебирать все потом
            this._postshtml += '<div id="post-' + post.num + '" class="thread__post">';
            this._postshtml += '<div class="post post_type_reply" id="post-body-' + post.num + '" data-num="' + post.num + '">';
            this._postshtml += generatePostBody(post);
            this._postshtml += '</div>';
            this._postshtml += '</div>';
            //console.log('BuffPost' + post.num)
            if(post.number % buf == 0 || post.number == max  || !window.thread.id) {//@todo window.thread.id чтобы с главное
                //не было буфера
                //console.log('Append' + post.num)
                var e = document.createElement("div");
                e.innerHTML = this._postshtml;
                $id('thread-' + (parseInt(post.parent) || post.num)).appendChild(e);
                this._postshtml = '';
                
            }

            //$('#thread-' + (parseInt(post.parent) || post.num)).append(postshtml);
            
            Media.processLinks($('#post-' + post.num + ' a'));
            if(!window.thread.id) window._hide_long_post($('#m' + post.num));
            if(window._hide_by_rules) window._hide_by_rules($('#post-body-' + post.num));
            if(window._hide_by_list) window._hide_by_list(post.num);
            return true;
        },
        _appendThread: function(thread) {
            //@mark эта функция использовалась только на страницах спсика тредов, 
            //и так как теперь и на самих страницах тредов мы грузим скриптами а в массиве thread
            //в треде ничего нет, то пришлсоь добавить appendThread_ куда мы отправляем нулевой пост(он же оппост и тред)
            var postshtml = '';
            var num = thread.num;
            var postObj = thread;
            console.log('_appendThread')
            
            var postsCount = thread.posts_count;
            var filesCount = thread.files_count;

            postshtml += '<div id="thread-' + num + '" class="thread">';
            postshtml += '<div id="post-' + num + '" class="thread__oppost">';
            postshtml += '<div class="post post_type_oppost" id="post-body-' + num + '" data-num="' + num + '">';
            postshtml += generatePostBody(postObj);
            postshtml += '</div>';
            if(!window.thread.id) postshtml += '<span class="thread__missed desktop">Пропущено ' + postsCount + ' постов' + (filesCount?', ' + filesCount + ' с картинками':'') + '. Нажмите <a href="../' + window.board + '/res/' + num + '.html">ответ</a>, чтобы посмотреть.</span>';
            postshtml += '</div>';
            postshtml += '</div>';
            postshtml += '<hr>';

            $('#posts-form').append(postshtml);

            
            Media.processLinks($('#post-' + num + ' a'));
            if(!window.thread.id) window._hide_long_post($('#m' + num));
            if(window._hide_by_rules) window._hide_by_rules($('#post-body-' + num));
            if(window._hide_by_list) window._hide_by_list(num);

            return true;
        },
        loadPage: function(page) {
            var tmpost = Post(1);
            var page = page || 'index';
            var params = {'page':page,'board':window.thread.board};
            var that = this;
            this._renderLoading();
            tmpost._fetchPage(params, function(data){
            	if(data.error) return $alert('Ошибка: ' + data.errorText);
                for (var i = 0; i < data.length; i++) {
                    var thread_num = data[i].thread_num;
                    var thread = Post(thread_num);
                    if(thread.exists() && thread.isRendered()) continue;
                    that._append(data[i].posts, thread_num);
                }
                that._renderLoaded();
            });
        },
        loadThread: function(thread) {
            var thread = thread;
            var params = {'from_post':thread,'thread':thread,'board':window.thread.board};
            var tmpost = Post(1);
            var that = this;
            //var t1 = performance.now();
            this._renderLoading();
            tmpost.fetchPosts(params, function(res){
            	if(res.error) return $alert('Ошибка: ' + data.errorText);
                var data = res.data;
                var thread_num = thread;
                that._append(data, thread_num);
                //higlight_myposts подсветка ответов после обновления
                var myposts = Store.get('myposts.' +  window.thread.board + '.' + thread, []);
                if(myposts.length) markPosts(myposts, true);
                that._renderLoaded();
            });
        },
        updateThread: function() {
            //функция обновления треда, которая вызывается по кнопке "обновить тред"
            $alert('Загрузка...', 'wait');

            this.updatePosts(function(data) {
                $close($id('alert-wait'));

                if(data.updated) $alert('Новых постов: ' + data.updated);
                else if(data.error) $alert('Ошибка: ' + data.errorText);
                else $alert('Нет новых постов');

                if(Favorites.isFavorited(window.thread.id)) Favorites.setLastPost(data.data, window.thread.id);
            });
        },
        updatePosts: function(callback) {
            var that = this;
            Post(window.thread.id).fetchPosts({update: true}, function( data ) {
                if(data.hasOwnProperty('error')) return callback && callback(data);
                //if(!data.list.length && !data.deleted.length) return callback && callback({updated:0, list:[], deleted:[], data: [], favorites:data.favorites});
                //console.log(data)
                var tmpost = Post(1);
                var render_more = Store.get('other.on_delete', 'sync');
                var origHeight = document.body.scrollHeight;
                //удаление постов
                if(data.deleted) {
                    for(var i=0;i<data.deleted.length;i++) {
                        if(render_more == 'sync') {
                            $('#post-' + data.deleted[i]).remove();
                        }else if(render_more == 'mark') {
                            $('#post-body-' + data.deleted[i]).css('background-color', '#FF6666'); //@todo нет в настройках
                        }
                    }
                }

                var updHeight = document.body.scrollHeight;
                var dif = origHeight - updHeight;
                window.scrollTo(0, window.scrollY - dif);
                for(var i = 0; i < data.data.length; i++) {
                    tmpost.num = data.data[i].num;
                    tmpost.raw().rendered = true;
                    that._appendPost(tmpost.getJSON(), 1);
                }
                
                //higlight_myposts подсветка ответов после обновления
                var myposts = Store.get('myposts.' +  window.thread.board + '.' + window.thread.id, []);
                if(myposts.length) markPosts(myposts, true);
         
                if(callback) callback(data);
            });
        },
    }

    //карта новая из треда
    //@1 - собственно заполняем карту, из ЖСОНА, вместо парсинга постов html
    //@2 - если пост отмечен как отрендеренный, то вызывается цепочка _processRepliesHTML ->  addReply -> _renderReply
    if(window.thread.id) {
        window.PostF.loadThread(window.thread.id);
    }
});
Stage('Мои доски',                              'myboards',     Stage.DOMREADY,     function(){
    $('.adminbar__cat').on('click', '#edit-boards', function(e) {
        newBoards = prompt('Список досок через пробел:', tmp_boards.join(' '));
        if(newBoards === null) return;
        newBoards = newBoards.split(' ');
        Store.set('other.myboards.boards', newBoards);
        renderBoards(newBoards);
    });
});
Stage('Скрывабщиеся блоки снизу',                 'bottomboxes',   Stage.DOMREADY,     function(){
	window.Box = {
		init: function() {
			//todo
			$('#boardstats-box').css('display','inline-block');
			$('#favorites-box').css('display','inline-block');
		},
		showBox: function(box) {
			var $toggle_btn = $('#' + box + '-arrow-down');
			$('#' + box + '-body').css('display','inline-block')
			$toggle_btn.addClass('fa-angle-double-down');
			$toggle_btn.removeClass('fa-angle-double-up');
			Store.set('styling.' + box + '.minimized', false); //todo возможно вынос в тугл, так как мы это же условие проверяем перед вызовом show/hide
			if(box == 'favorites') {
				this.noNewItems(box);
			}
		},
		hideBox: function(box) {
			var $toggle_btn = $('#' + box + '-arrow-down');
			$('#' + box + '-body').css('display','none');
			$toggle_btn.removeClass('fa-angle-double-down');
			$toggle_btn.addClass('fa-angle-double-up');
			Store.del('styling.' + box + '.minimized');
		},
		toggleVisibility: function() {
			var box = $(this).data('box');
			var minimized = Store.get('styling.' + box + '.minimized', true);
			if(!minimized) {
				Box.hideBox(box);
			}else{
				Box.showBox(box);
			}
		},
		toggleNewItems: function(box) { //todo Geven, чтобы выделение пропадало с других вкладок
			var $header = $('#' + box + '-header');
			$header.addClass('bb__header_new');
			Store.set('styling.favorites.new', true);
		},
		noNewItems: function(box) {
			var $header = $('#' + box + '-header');
			$header.removeClass('bb__header_new');
			Store.del('styling.favorites.new');
		}
	}
	var $box_header = $('#boardstats-header').add('#favorites-header');
	$box_header.click(Box.toggleVisibility);
	Box.init();
    if(Store.get('styling.boardstats.minimized', true)) Box.hideBox('boardstats');
    if(Store.get('styling.favorites.minimized', true)) Box.hideBox('favorites');
    if(Store.get('styling.favorites.new', false)) Box.toggleNewItems('favorites');
});
Stage('Скрывающиеся блоки фикс. меню',                 'fmboxes',   Stage.DOMREADY,     function(){
    var vsblt = true;
    var vsbltg = true;
    //Store.del('styling.fm');
    
    var data = Store.get('styling.fm.minimized', []);
    if(data.length) {
        for(i = 0; i < data.length; i++) {
            document.getElementById('fm__' + data[i]).style.display = 'none';
        }
    }

    $('#fmenu').on('click', '.fm__header', function(e){
        var item = document.getElementById('fm__' + this.dataset.header);
        vsblt = item.style.display;
        if(vsblt == 'none') {
            var index = data.indexOf(this.dataset.header);
            if (index !== -1) data.splice(index, 1);
            //Store.del('styling.fm.' + this.dataset.header + '.minimized');
            item.style.display = 'block';
        } else {
            data.push(this.dataset.header)
            item.style.display = 'none';
        }
        Store.set('styling.fm.minimized', data);
    })

    $('.cntnt').on('click', '#hideFm', function(e) {
        var item = document.getElementsByClassName('cntnt__left')[0];
        vsbltg = item.style.display;
        if(vsbltg == 'none') {
            Store.del('styling.fm.collapsed');
            item.style.display = 'block';
            e.target.innerHTML = '<<';
        } else {
            Store.set('styling.fm.collapsed', true);
            item.style.display = 'none';
            e.target.innerHTML = '>>';
        }
    })

});
Stage('Статистика тредов',                      'boardstats',   Stage.DOMREADY,     function(){
	if(!window.thread.board) return; //не запускаем на главной
    if(!Store.get('other.boardstats',true)) {
		$('#boardstats-box').css('display','none');
		return;
	}
    var $boardstats_update_el = $('.bb__update');
    var $boardstats_updating_el = $('.bb__update_updating');

    var busy = false;
    var timer = 0;
    var box_visible = true;
    var force_on_show = false;

    var reset = function(time, announce) {
        if(!time) time = window.threadstats.refresh;
        time = time*1000*5; //todo 5 мин
        if(timer) clearTimeout(timer);
        if(busy) busy = false;
        $boardstats_update_el.css('display','inline-block');
        $boardstats_updating_el.css('display','none');

        timer = setTimeout(announce_refresh, time);
        if(announce) Gevent.emit('boardstats_' + window.board + '_reset', time);
    };

    var announce_refresh = function() {
        if(!box_visible) {
            force_on_show = true;
            return reset();
        }
        busy = true;
        $boardstats_update_el.hide();
        $boardstats_updating_el.show();

        Gevent.onceNtemp('boardstats_' + window.board + '_abort_refresh', 1000, reset, execute_refresh);
        Gevent.emit('boardstats_' + window.board + '_announce_refresh');
    };

    var execute_refresh = function() {
        clearTimeout(timer);
        download_data(function(data){
            busy = false;
            if(!data) return reset(window.threadstats.retry);
            reset();

            Gevent.emit('boardstats_' + window.board + '_data', data);
            Store.set('boardstats.' + window.board, {time:(+new Date), data:data});

            render_data(data);
        });
    };

    var download_data = function(cb) {
        var on_error = function(){
            cb(false);
        };

        var on_success = function(data) {
            if(!data) return cb(false);
            if(!data.hasOwnProperty) return cb(false);
            if(!data.hasOwnProperty('threads')) return cb(false);
			
			data['threads'].splice(10,data['threads'].length); 
            data['threads'].sort(function(a,b){
                return b['score']-a['score'];
            });

            cb(data['threads']);
        };

        $.ajax({
            url: '../' + window.thread.board + '/threads.json',  
            type: 'GET',
            dataType: 'json',
            success: on_success,
            error: on_error,
            timeout: window.threadstats.request_timeout
        });
    };

    var render_data = function(threads) {
        var $table = $('#boardstats-table');
        var rendered = 0;
        var html = '';
        $table.html(html);
        for(var i=0;i<threads.length;i++) {
            var thread = threads[i];
            if(!thread) break;
            if(parseInt(thread.sticky)) continue;
            if(parseInt(thread.bump_limit)) continue;

            html += '<div class="bb__row">' +
                '<span class="bb__bstitle"><a href="../' + window.thread.board + '/res/' + thread.num + '.html">' + (thread.subject||'<i>Без названия</i>') + '</a></span>' +
                '<span>&nbsp;' +
                '<i class="fa fa-bar-chart"> ' + (Math.round(thread['score']*100)/100) + ' </i> ' +
                '<i class="fa fa-eye"> ' + thread['views'] + '&nbsp;&nbsp;&nbsp;</i> ' +
                '</span>';
            html += '</div>';

            rendered++;
            if(rendered >= window.threadstats.count) break;
        }
        $table.html(html);
    };

    $boardstats_update_el.click(function(){
        if(!box_visible) Box.toggleVisibility();
        if(!busy) announce_refresh();
    });

    Gevent.on('boardstats_' + window.thread.board + '_announce_refresh', function() {
        if(busy) Gevent.emit('boardstats_' + window.thread.board + '_abort_refresh');
    });

    Gevent.on('boardstats_' + window.thread.board + '_reset', function(time) {
        if(busy) return;
        reset(time);
    });

    Gevent.on('boardstats_' + window.thread.board + '_data', function(data) {
        if(busy) return;
        Store.set('boardstats.' + window.thread.board, {time:(+new Date), data:data});
        render_data(data);
        reset(window.threadstats.refresh+Math.round(Math.random()*10));
    });

    var cached_stats = Store.get('boardstats.' + window.thread.board, false);
    if(cached_stats && cached_stats.data) {
        render_data(cached_stats.data);
    }else{
        force_on_show = true;
        if(box_visible) announce_refresh();
    }

    reset();
});
Stage('Обработка скрытия тредов и постов',      'posthide',     Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    //if(window.thread.id) return;
    var hide_buttons = '.post__btn_type_hide,.postbtn-hide-mob';
    if(!$(hide_buttons.length)) return;

    window._hide_by_list = function(num) {
        if(!hidden.hasOwnProperty(num)) return;
        if(num == window.thread.id) return;
        /*var el = $('#thread-' + num);
         if(el.length) Post(num).hide();*/
        var post = Post(num);
        if(post.exists() && post.isRendered()) post.hide();
    };

    var cleanup = function() {
        var boards = Store.get('board', {});
        var time = getTimeInDays();

        for(var board in boards) {
            if(!boards.hasOwnProperty(board)) continue;
            if(!boards[board].hasOwnProperty('hidden')) continue;
            var threads = boards[board].hidden;
            for(var num in threads) {
                if(!threads.hasOwnProperty(num)) continue;
                var added_time = threads[num];

                if($('#post-' + num).length){
                    Post(num)._storeHide(); //обновляем время, чтоб не удалить тред
                }else if(time-added_time >= window.config.hideTimeout) {
                    Post(num)._storeUnHide();
                }
            }
        }
    };

	$('#posts-form').on('click',hide_buttons,function(){
       var num = $(this).data('num');
       Post(num).hide(true);

       return false;
    });

	$('#posts-form').on('click', '.thread_hidden,.post_type_hidden', function(){
        var num = $(this).data('num');
        //var thread = $('#thread-' + num);
        Post(num).unhide();
    });

    var hidden = Store.get('board.' + window.board + '.hidden', {});
    for(var num in hidden) window._hide_by_list(num);
    cleanup();

    return false;
});
Stage('Скрытие постов по правилам v3 NABROSOK EDITION',             'hiderulesv3',    Stage.DOMREADY,     function(){
    return;
	if(Store.get('debug')) return;
    if(!window.thread.board) return; //не запускаем на главной
    
	var tmpost = Post(1);
	
	posts = JSON.parse(tmpost.getPostsObj());
	for (var i in posts ) {
		//console.log(i);
	}
	//Post(N).cGetComment()
});
Stage('Скрытие постов по правилам',             'hiderules',    Stage.DOMREADY,     function(){
    if(Store.get('debug')) return;
    if(!window.thread.board) return; //не запускаем на главной
    var rules = Store.get('other.hide_rules.list',[]);
    if(!rules.length) return;
    var tmpost = Post(1);

    var test = function(regexp, text) {
        try {
            return new RegExp(regexp, 'i').test(text);
        }catch(e){
            return false;
        }
    };

    window._hide_by_rules = function($posts) {
        $posts.each(function(){
            tmpost.num = $(this).data('num');

            for(var i=0;i<rules.length;i++) {
                var title = rules[i][0];
                var tnum = rules[i][1];
                var icon = rules[i][2];
                var email = rules[i][3];
                var name = rules[i][4];
                var trip = rules[i][5];
                var subject = rules[i][6];
                var comment = rules[i][7];
                var disabled = !!rules[i][8];

                if(disabled) continue;
                if(tnum && tmpost.num != tnum) continue;
                if(icon && !test(icon, tmpost.cGetIcon())) continue;
                if(email && !test(email, tmpost.cGetEmail())) continue;
                if(name && !test(name, tmpost.cGetName())) continue;
                if(trip && !test(trip, tmpost.cGetTrip())) continue;
                if(subject && !test(subject, tmpost.cGetSubject())) continue;
                if(comment && !test(comment, tmpost.cGetComment())) continue;

                tmpost.hide(false, 'Правило #' + (i+1) + ' ' + title);
                break;
            }
        });
    };

    window._hide_by_rules($('.post'));
});
Stage('Скрытие постов по правилам v2',          'hiderulesv2',  Stage.DOMREADY,     function(){
    return;
    if(!Store.get('debug')) return;
    if(!window.thread.board) return; //не запускаем на главной

    //render - строка - формат для показа пользователю условия
    //pre_render - функция - обрабатывать {var} перед формированием render
    //check - функция - проверка выполнения условия
    //params - объект - параметры
    //  label - строка - имя параметра для показа пользователю
    //  validator - функция - проверялка параметра для подсветки поля ввода красным

    var val_checkers = {
        gt: {
            params: {
                num: {
                    label: 'Число',
                    validator: function(input) {
                        return parseInt(input).toString() == input;
                    }
                }
            },
            render: '>{val}',
            check: function(val, params) {
                return val > params['num'];
            }
        },

        bool: {
            params: {
                inp: {
                    label: 'Значение'
                }
            },
            render: '{val}',
            pre_render: function(param) {
                if(param) {
                    return 'Да';
                }else{
                    return 'Нет';
                }
            },
            check: function(val, params) {
                return val == params['num'];
            }
        }
    };

    var val_types = {
        int: ['gt', 'lt', 'eq'],
        boolean: ['bool'],
        string: ['substr', 'regex'],
        comment: ['substr', 'regex']
    };

    //
    var val_catalog = {
        is_op: {
            label: 'ОП пост',
            type: 'boolean',
            extract: function(post) {
                return post.getThread() == post.num;
            }
        },
        num: {
            label: 'Номер поста',
            type: 'int',
            extract: function(post) {
                return post.num;
            }
        },
        icon: {
            label: 'Иконка',
            type: 'string',
            extract: function(post) {
                return post.cGetIcon();
            }
        },
        email: {
            label: 'Email',
            type: 'string',
            extract: function(post) {
                return post.cGetEmail();
            }
        },
        name: {
            label: 'Имя',
            type: 'string',
            extract: function(post) {
                return post.cGetName();
            }
        },
        trip: {
            label: 'Трипкод',
            type: 'string',
            extract: function(post) {
                return post.cGetTrip();
            }
        },
        subject: {
            label: 'Тема',
            type: 'string',
            extract: function(post) {
                return post.cGetSubject();
            }
        },
        comment: {
            label: 'Текст поста',
            type: 'comment',
            extract: function(post) {
                return post.cGetComment();
            }
        }
    };


    var rules = Store.get('hide.rules',[]);
    if(!rules.length) return;
    var tmpost = Post(1);

    var test = function(regexp, text) {
        try {
            return new RegExp(regexp, 'i').test(text);
        }catch(e){
            return false;
        }
    };

    window._hide_by_rules = function($posts) {
        $posts.each(function(){
            tmpost.num = $(this).data('num');

            for(var i=0;i<rules.length;i++) {
                var rule = rules[i];

                if(rule['disabled']) continue;
                if(rule['tnum'] && tmpost.num != rule['tnum']) continue;
                if(rule['icon'] && !test(rule['icon'], tmpost.cGetIcon())) continue;
                if(rule['email'] && !test(rule['email'], tmpost.cGetEmail())) continue;
                if(rule['name'] && !test(rule['name'], tmpost.cGetName())) continue;
                if(rule['trip'] && !test(rule['trip'], tmpost.cGetTrip())) continue;
                if(rule['subject'] && !test(rule['subject'], tmpost.cGetSubject())) continue;
                if(rule['comment'] && !test(rule['comment'], tmpost.cGetComment())) continue;

                tmpost.hide(false, 'Правило #' + (i+1) + ' ' + title);
                break;
            }
        });
    };

    window._hide_by_rules($('.post'));
});
Stage('Скрытие длинных постов',                 'hidelongpost', Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    if(window.thread.id) return;
    (function($) {

        // Matches trailing non-space characters.
        var chop = /(\s*\S+|\s)$/;

        // Return a truncated html string.  Delegates to $.fn.truncate.
        $.truncate = function(html, options) {
            return $('<div></div>').append(html).truncate(options).html();
        };

        // Truncate the contents of an element in place.
        $.fn.truncate = function(options) {
            if ($.isNumeric(options)) options = {length: options};
            var o = $.extend({}, $.truncate.defaults, options);

            return this.each(function() {
                var self = $(this);

                if (o.noBreaks) self.find('br').replaceWith(' ');

                var text = self.text();
                var excess = text.length - o.length;

                if (o.stripTags) self.text(text);

                // Chop off any partial words if appropriate.
                if (o.words && excess > 0) {
                    excess = text.length - text.slice(0, o.length).replace(chop, '').length - 1;
                }

                if (excess < 0 || !excess && !o.truncated) return;

                // Iterate over each child node in reverse, removing excess text.
                $.each(self.contents().get().reverse(), function(i, el) {
                    var $el = $(el);
                    var text = $el.text();
                    var length = text.length;

                    // If the text is longer than the excess, remove the node and continue.
                    if (length <= excess) {
                        o.truncated = true;
                        excess -= length;
                        $el.remove();
                        return;
                    }

                    // Remove the excess text and append the ellipsis.
                    if (el.nodeType === 3) {
                        $(el.splitText(length - excess - 1)).replaceWith(o.ellipsis);
                        return false;
                    }

                    // Recursively truncate child nodes.
                    $el.truncate($.extend(o, {length: length - excess}));
                    return false;
                });
            });
        };

        $.truncate.defaults = {

            // Strip all html elements, leaving only plain text.
            stripTags: false,

            // Only truncate at word boundaries.
            words: false,

            // Replace instances of <br> with a single space.
            noBreaks: false,

            // The maximum length of the truncated html.
            length: Infinity,

            // The character to use as the ellipsis.  The word joiner (U+2060) can be
            // used to prevent a hanging ellipsis, but displays incorrectly in Chrome
            // on Windows 7.
            // http://code.google.com/p/chromium/issues/detail?id=68323
            ellipsis: '\u2026' // '\u2060\u2026'

        };

    })(jQuery);
    var line_len = 150; //длина строки, после которой считается переход на новую
    var max_lines = 10; //сколько строк максимум

    var makeExpand = function(original, shrink) {
        var num = original.attr('id').substr(1);

        original.wrapInner('<div id="original-post' + num + '" style="display:none"></div>');

        var $shrinked = $('<div id="shrinked-post' + num + '">' + shrink + '</div>');
        original.append($shrinked);

        var $unhide = $('<span class="expand-large-comment a-link-emulator">Показать текст полностью</span>');
        $shrinked.after($unhide);
        $unhide.click(function(){
            $unhide.remove();
            $shrinked.remove();
            $('#original-post' + num).show();
        });
    };

    window._hide_long_post = function(el){
        var html = el.html();

        var lines_count = 0;
        var line_arr = html.split('<br>');
        for(var i=0;i<line_arr.length;i++) {
            var text = $('<p>' + line_arr[i] + '</p>').text();
            var lines_in_line = Math.ceil((text.length+1)/line_len); //1 символ для переноса
            if((lines_count+lines_in_line) <= max_lines) {
                lines_count += lines_in_line;
                continue;
            }

            var excess_lines = max_lines - lines_count;
            line_arr[i] = $.truncate(line_arr[i], excess_lines*line_len);
            line_arr.splice(i+1);

            makeExpand(el, line_arr.join('<br>'));
            break;
        }
    };
});
Stage('Обработка Media ссылок',                 'mediapeocess', Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    var $links = $('.post__message').find('a').not('.post-reply-link');
    Media.processLinks($links);
});
Stage('Коррекция времени по часовому поясу',    'correcttz',    Stage.DOMREADY,     function(){
    if(!Store.get('other.correcttz', true)) return;
    //var local_tz_offset = -(new Date()).getTimezoneOffset()*1000;
    var server_tz_offset = window.tz_offset*60*60;

    if((-(new Date()).getTimezoneOffset()/60) == window.tz_offset) return;

    var days = ['Вск','Пнд','Втр','Срд','Чтв','Птн','Суб'];
    //var months = ['Янв','Фев','Мрт','Апр','Май','Июн','Июл','Авг','Сен','Окт','Нбр','Дек'];

    window.correctTZ = function(str) {
        str = str.replace(/(\d+)\/(\d+)\/(\d+) .+ (\d+:\d+:\d+)/g,"20$3-$2-$1T$4Z");
        str = $.trim(str);
        var timestamp = Date.parse(str);
        if(!timestamp) return str;
        timestamp = timestamp - server_tz_offset*1000;
        var date = new Date(timestamp);

        return '' +
            pad(date.getDate(), 2) +
            '/' +
            pad(date.getMonth()+1, 2) +
            '/' +
            pad(date.getFullYear()-2000, 2) +
            ' ' +
            days[date.getDay()] +
            ' ' +
            pad(date.getHours(), 2) +
            ':' +
            pad(date.getMinutes(), 2) +
            ':' +
            pad(date.getSeconds(), 2);
    };

    $('.post__time').each(function(){
        var str = $(this).text();
        $(this).text(window.correctTZ(str));
    });
});
Stage('Обработка формы ответа',                 'formprocess',  Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    var active_id = '';
    var $label_top = $('.newpost__label_top');
    var $label_bot = $('.newpost__label_bot');
    var text_open = $label_top.first().text();
    var text_close = 'Закрыть форму постинга';
    var $postform = $('#postform');

    $('.makaba').on('click', '.newpost__label_top', function(){
        if(active_id == 'bot') $label_bot.text(text_open);

        if(active_id == 'top') {
            $postform.hide();
            $label_top.text(text_open);
            active_id = '';
        }else{
            $('#TopNormalReply').after($postform);
            $postform.show();
            $label_top.text(text_close);
            active_id = 'top';
            if(!window.thread.id) $('input[name=thread]').val(0);
        }
    });

    $('.makaba').on('click', '.newpost__label_bot', function(){
        if(active_id == 'top') $label_top.text(text_open);

        if(active_id == 'bot') {
            $postform.hide();
            $label_bot.text(text_open);
            active_id = '';
        }else{
            $('#BottomNormalReply').after($postform);
            $postform.show();
            $label_bot.text(text_close);
            active_id = 'bot';
            if(!window.thread.id) $('input[name=thread]').val(0);
        }
    });

    window.appendPostForm = function(num) {
        if(active_id == 'top') $label_top.text(text_open);
        if(active_id == 'bot') $label_bot.text(text_open);
        if(active_id == num) {
            active_id = '';
            $postform.hide();
            return false;
        }

        var post = Post(num);
        post.el().after($postform);
        $postform.show();
        if(!window.thread.id) $('input[name=thread]').val(post.getThread());
        active_id = num+'';

        return true;
    };
});
Stage('Загрузка автообновления',                'autorefresh',  Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    var enabled = false;
    var interval;
    var timeout;
    var remain;
    var isWindowFocused = true;
    var newPosts = [];

    window.scrollcb_array.push(function(scroll_top){
        if(!newPosts.length) return;

        var scroll = scroll_top+$(window).height();
        for(var i=0;i<newPosts.length;i++) {
            //[0] = номер поста
            //[1] = координаты по Y поста
            if(scroll >= newPosts[i][1]) {
                newPosts.splice(i, 1);
                i--;
            }
        }

        notifyNewPosts();
        if(!newPosts.length) reposRedLine();
    });
    $(window).blur(function(){
        isWindowFocused = false;

        reposRedLine();
    });
    $(window).focus(function(){
        isWindowFocused = true;

        if(newPosts.length) $(window).scroll();
        if(!$('.autorefresh-checkbox').is(':checked')) return;
        if(remain > window.config.autoUpdate.minInterval) setNewTimeout(window.config.autoUpdate.minInterval);
    });

    var reposRedLine = function() {
        var $line = $('.post_type_last');
        if($line.length) $line.removeClass('post_type_last');
        if(newPosts.length) $('#post-body-' + newPosts[0]).addClass('post_type_last');
    };
    var current_icon;
    var setFavicon = function(icon) {
        if(icon == current_icon) return;
        if(current_icon == window.config.autoUpdate.faviconDeleted) return;
        current_icon = icon;

        $('#favicon').replaceWith(icon);
    };

    var notifyNewPosts = function() {
        var count = newPosts.length;
        if(count) {
            document.title = '(' + count + ') ' + window.config.title;
            setFavicon(window.config.autoUpdate.faviconNewposts);
        }else{
            document.title = window.config.title;
            setFavicon(window.config.autoUpdate.faviconDefault);
        }
    };
    var threadDeleted = function() {
        setFavicon(window.config.autoUpdate.faviconDeleted);
        $('.autorefresh-countdown').html(' остановлено');
    };
    var start = window.autorefresh_start = function() {
        if(enabled) return false;
        enabled = true;

        $('.autorefresh-checkbox').attr('checked','checked');

        interval = setInterval(function(){
            var $autorefresh_el = $('.autorefresh-countdown');
            remain--;
            if(remain >= 0) $autorefresh_el.html('через ' + remain);
            if(remain != 0) return;
            $autorefresh_el.html(' выполняется...');

            PostF.updatePosts(function(data){
                if(data.error) {
                    if(data.error == 'server' && data.errorCode == -404) return threadDeleted();
                    $alert('Ошибка автообновления: ' + data.errorText);
                    calcNewTimeout(-1);
                }else{
                    if(data.updated){
                        console.log(data);
                        var len = data.list.length;
                        for(var i=0;i<len;i++) {
                            var $post = $('#post-' + data.list[i]);
                            newPosts.push([data.list[i], $post.offset().top + $post.height()]);
                        }

                        notifyNewPosts();
                        reposRedLine();
                    }
                    calcNewTimeout(data.updated);
                    if(Favorites.isFavorited(window.thread.id)) Favorites.setLastPost(data.data, window.thread.id);
                }
            });

        }, 1000);

        setNewTimeout(window.config.autoUpdate.minInterval);
    };
    var stop = function() {
        if(!enabled) return false;
        enabled = false;

        $('.autorefresh-checkbox').removeAttr('checked');

        clearInterval(interval);
        $('.autorefresh-countdown').html('');
    };
    var calcNewTimeout = function(posts) {
    	console.log(posts);
    	console.log(isWindowFocused);
        if(posts>1) return setNewTimeout(window.config.autoUpdate.minInterval);
        if(isWindowFocused && posts != -1) return setNewTimeout(window.config.autoUpdate.minInterval); //иначе это ошибка

        var newTimeout = timeout + window.config.autoUpdate.stepInterval;
        if(newTimeout> window.config.autoUpdate.maxInterval) return setNewTimeout(window.config.autoUpdate.maxInterval);
        console.log(newTimeout);
        return setNewTimeout(newTimeout);
    };
    var setNewTimeout = function(newTimeout) {
        remain = newTimeout;
        timeout = newTimeout;
        $('.autorefresh-countdown').html('через ' + remain);
    };

    $('.autorefresh-checkbox').click(function(){
        var checked = $(this).is(':checked');
        if(checked) {
            start();
        }else{
            stop();
        }
        Store.set('thread.autorefresh', !!checked);
    });

    $('.autorefresh').css('display', 'inline-block');
});
Stage('Клонирование форм',                      'cloneform',    Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    var fields = ['e-mail', 'shampoo'];
    var maxlen = parseInt(window.thread.max_comment);
    var len = fields.length;

    var newlen = function(str) {
        var len = unescape(encodeURIComponent(str)).length;
        var remain = maxlen-len;
        if(remain < 0) remain = 0;
        $('.message-byte-len').html(remain);
    };

    for(var i=0;i<len;i++) {
        var field = fields[i];
        (function(field){
            $('#' + field).keyup(function(){
                var val = $('#' + field).val();
                $('#qr-' + field).val(val);
                if(field == 'shampoo') newlen(val);
            });

            $('#qr-' + field).keyup(function(){
                var val = $('#qr-' + field).val();
                $('#' + field).val(val);
                if(field == 'shampoo') newlen(val);
            });
        })(field);
    }

    $('.anoniconsselectlist').change(function(){
        var val = $(this).val();
        $('.anoniconsselectlist').val(val);
    });
});
Stage('Отслеживание фокуса форм',               'formfocus',    Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    window.activeForm = $('#shampoo');

    window.activeForm.focus(function(){
        window.activeForm = $(this);
    });

    $('#qr-shampoo').focus(function(){
        window.activeForm = $(this);
    });
});
Stage('click эвенты',                           'clickevents',  Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    var lastselected = '';
    var selectednum = 0;

    $('.captcha__reload').click(loadCaptcha);

    $('#posts-form').on('mouseup','.post',function(e){
        if (e.which != 1) return;
        var num = $(this).data('num');
        var node;
        try {
            node = window.getSelection ? window.getSelection().focusNode.parentNode:document.selection.createRange().parentElement();
        }catch(e){
            return;
        }

        if($(node).closest('.post').data('num') != num) return;

        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        text = text + '';

        if(!text){
            selectednum = 0;
            lastselected = '';
            return;
        }
        lastselected = text;
        selectednum = num;
        lastselected = '>' + lastselected.split("\n").join("\n>");
    });

    $('.newpost__label').click(function(){
        loadCaptcha();
    });

    $('#ed-toolbar').html(edToolbar('shampoo'));

    $('#qr-close').click(function(){
        $('#qr').hide();
    });

    $('#posts-form').on('click','.postbtn-reply-href', function(e) {
        var num = e.target.dataset.num;
        var str = '>>' + num + '\n';

        //вставляем цатату
        if(selectednum == num) {
            str += lastselected + '\n';
            selectednum = 0;
        }

        if(Store.get('old.append_postform',false)) {
            if(appendPostForm(num)) insert(str);
        } else {
            insert(str);
        }

        if(window.thread.id) return false;

        var thread = Post(num).getThread();
        $('#qr-thread').val(thread);

        return false;
    });
	
	//jscatalog: запоминаем запрос при клике на спец. ссылку
	$(".hashlink").on('mousedown',function() {
		Store.set('catalog-search-query',$(this).attr('title'));
		return true;
	});
	
	
	var posts = [];
	$('.turnmeoff').change(function() {
		if(!$('.replypage')) return;
		if(this.checked) {
			posts += this.value + ', ';
			$('#report-form-posts').val(posts);
		} else {
			
		}
	});
	
	//tags - eng only + remove slash
	$("#tags").on('input',function(e) {
		var newstr = $(this).val().replace(/\/|\\|#/g, '');
		//newstr = newstr.replace(/\\/g, '');
		var map = [
			["ӓ", "a"], ["ӓ̄", "a"], ["ӑ", "a"], ["а̄", "a"], ["ӕ", "ae"], ["а́", "a"], ["а̊", "a"], ["ә", "a"], ["ӛ", "a"], ["я", "a"], ["ѫ", "a"], ["а", "a"], ["б", "b"], ["в", "v"], ["ѓ", "g"], ["ґ", "g"], ["ғ", "g"], ["ҕ", "g"], ["г", "g"], ["һ", "h"], ["д", "d"], ["ђ", "d"], ["ӗ", "e"], ["ё", "e"], ["є", "e"], ["э", "e"], ["ѣ", "e"], ["е", "e"], ["ж", "zh"], ["җ", "zh"], ["ӝ", "zh"], ["ӂ", "zh"], ["ӟ", "z"], ["ӡ", "z"], ["ѕ", "z"], ["з", "z"], ["ӣ", "j"], ["и́", "i"], ["ӥ", "i"], ["і", "i"], ["ї", "ji"], ["і̄", "i"], ["и", "i"], ["ј", "j"], ["ј̵", "j"], ["й", "j"], ["ќ", "k"], ["ӄ", "k"], ["ҝ", "k"], ["ҡ", "k"], ["ҟ", "k"], ["қ", "k"], ["к̨", "k"], ["к", "k"], ["ԛ", "q"], ["љ", "l"], ["Л’", "l"], ["ԡ", "l"], ["л", "l"], ["м", "m"], ["њ", "n"], ["ң", "n"], ["ӊ", "n"], ["ҥ", "n"], ["ԋ", "n"], ["ԣ", "n"], ["ӈ", "n"], ["н̄", "n"], ["н", "n"], ["ӧ", "o"], ["ө", "o"], ["ӫ", "o"], ["о̄̈", "o"], ["ҩ", "o"], ["о́", "o"], ["о̄", "o"], ["о", "o"], ["œ", "oe"], ["ҧ", "p"], ["ԥ", "p"], ["п", "p"], ["р", "r"], ["с̀", "s"], ["ҫ", "s"], ["ш", "sh"], ["щ", "sch"], ["с", "s"], ["ԏ", "t"], ["т̌", "t"], ["ҭ", "t"], ["т", "t"], ["ӱ", "u"], ["ӯ", "u"], ["ў", "u"], ["ӳ", "u"], ["у́", "u"], ["ӱ̄", "u"], ["ү", "u"], ["ұ", "u"], ["ӱ̄", "u"], ["ю̄", "u"], ["ю", "u"], ["у", "u"], ["ԝ", "w"], ["ѳ", "f"], ["ф", "f"], ["ҳ", "h"], ["х", "h"], ["ћ", "c"], ["ҵ", "c"], ["џ", "d"], ["ч", "c"], ["ҷ", "c"], ["ӌ", "c"], ["ӵ", "c"], ["ҹ", "c"], ["ч̀", "c"], ["ҽ", "c"], ["ҿ", "c"], ["ц", "c"], ["ъ", "y"], ["ӹ", "y"], ["ы̄", "y"], ["ѵ", "y"], ["ы", "y"], ["ь", "y"], ["", ""], ["Ӓ", "a"], ["Ӓ̄", "a"], ["Ӑ", "a"], ["А̄", "a"], ["Ӕ", "ae"], ["А́", "a"], ["А̊", "a"], ["Ә", "a"], ["Ӛ", "a"], ["Я", "a"], ["Ѫ", "a"], ["А", "a"], ["Б", "b"], ["В", "v"], ["Ѓ", "g"], ["Ґ", "g"], ["Ғ", "g"], ["Ҕ", "g"], ["Г", "g"], ["Һ", "h"], ["Д", "d"], ["Ђ", "d"], ["Ӗ", "e"], ["Ё", "e"], ["Є", "e"], ["Э", "e"], ["Ѣ", "e"], ["Е", "e"], ["Ж", "zh"], ["Җ", "zh"], ["Ӝ", "zh"], ["Ӂ", "zh"], ["Ӟ", "z"], ["Ӡ", "z"], ["Ѕ", "z"], ["З", "z"], ["Ӣ", "j"], ["И́", "i"], ["Ӥ", "i"], ["І", "i"], ["Ї", "ji"], ["І̄", "i"], ["И", "i"], ["Ј", "j"], ["Ј̵", "j"], ["Й", "j"], ["Ќ", "k"], ["Ӄ", "k"], ["Ҝ", "k"], ["Ҡ", "k"], ["Ҟ", "k"], ["Қ", "k"], ["К̨", "k"], ["К", "k"], ["ԛ", "q"], ["Љ", "l"], ["Л’", "l"], ["ԡ", "l"], ["Л", "l"], ["М", "m"], ["Њ", "n"], ["Ң", "n"], ["Ӊ", "n"], ["Ҥ", "n"], ["Ԋ", "n"], ["ԣ", "n"], ["Ӈ", "n"], ["Н̄", "n"], ["Н", "n"], ["Ӧ", "o"], ["Ө", "o"], ["Ӫ", "o"], ["О̄̈", "o"], ["Ҩ", "o"], ["О́", "o"], ["О̄", "o"], ["О", "o"], ["Œ", "oe"], ["Ҧ", "p"], ["ԥ", "p"], ["П", "p"], ["Р", "r"], ["С̀", "s"], ["Ҫ", "s"], ["Ш", "sh"], ["Щ", "sch"], ["С", "s"], ["Ԏ", "t"], ["Т̌", "t"], ["Ҭ", "t"], ["Т", "t"], ["Ӱ", "u"], ["Ӯ", "u"], ["Ў", "u"], ["Ӳ", "u"], ["У́", "u"], ["Ӱ̄", "u"], ["Ү", "u"], ["Ұ", "u"], ["Ӱ̄", "u"], ["Ю̄", "u"], ["Ю", "u"], ["У", "u"], ["ԝ", "w"], ["Ѳ", "f"], ["Ф", "f"], ["Ҳ", "h"], ["Х", "h"], ["Ћ", "c"], ["Ҵ", "c"], ["Џ", "d"], ["Ч", "c"], ["Ҷ", "c"], ["Ӌ", "c"], ["Ӵ", "c"], ["Ҹ", "c"], ["Ч̀", "c"], ["Ҽ", "c"], ["Ҿ", "c"], ["Ц", "c"], ["Ъ", "y"], ["Ӹ", "y"], ["Ы̄", "y"], ["Ѵ", "y"], ["Ы", "y"], ["Ь", "y"], ["№", ""], ["\'", ""], ["\"", ""], [";", ""], [":", ""], [",", ""], [".", ""], [">", ""], ["<", ""], ["?", ""], ["!", ""], ["@", ""], ["#", ""], ["$", ""], ["%", ""], ["&", ""], ["^", ""], ["(", ""], [")", ""], ["*", ""], ["+", ""], ["~", ""], ["|", ""], ["{", ""], ["}", ""], ["|", ""], ["[", ""], ["]", ""], ["../default.htm", ""], ["`", ""], ["=", ""], ["+", ""], ["_", ""], ["/[^A-Za-z0-9\-]", ""]
		];
		for(var i=0; i<map.length; i++){
			newstr = newstr.replace(map[i][0], map[i][1]);
		};
    
		$(this).val(newstr.trim().toLowerCase());
		
		return true;
	});
	
	$('#mod-mark-box').change(function() {
		if(this.checked) alert('Вы добавили модтег! >_>'); 
	});
	
	$(".nb__switcher").on('click', 'a',function(e) {
		var block = $(this).data('switch');
		
		News.render(News[block]);
		
		$('.nb__switcher').find('a').removeClass('nb__switcher_active');
		$(this).addClass('nb__switcher_active');
		return false;
	});

    $('.adminbar').on('click', '#adminbar__more', function(e) {
        e.currentTarget.style.display = 'none';
        document.getElementsByClassName('adminbar__exp')[0].style.display = 'inline-block';
    })

	window.News = {
		hour: [],
		day: [],
		latest: [],
		getdata: function() {
			var that = this;
			$.get('../news.json',	function(data){
				that.hour = data.news_hour;
				that.day = data.news_day;
				that.latest = data.news_latest;
				that.render(that.hour);//day by default
			});
		},
		render: function(data) {
			var html = '';
			for(var i = 0; i < data.length; i++) {
				html += '<div class="nb__item"><i class="fa fa-newspaper-o"></i> <a href="../news/res/' + data[i].num + '.html">' + data[i].subject + '</a></div>';
			}
			$('.nb__data').html(html);
		}
	};
	
	News.getdata(); //@todo это и выше вынести отдельно

});
Stage('oekaki',                          'oekaki',  Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    //==================================================================================================
    //lcanvas 
	$('#qr-oekaki-close').click(function(){
		lc.clear(); //очищаем рисунок
		$('#qr-oekaki-body').html('');
        $('#qr-oekaki').hide(); //прячем рисовалку
    });
	
	$('.oekaki-draw').click(function(e){
		var width = $('.oekaki-width').val();
		var height = $('.oekaki-height').val();
		oekakiInit(width, height);
	});
	
	$('.qr-oekaki-accept').on('click', function() {
		var lcanvasdata = lc.getImage().toDataURL().split(',')[1];
		$('.oekaki-image').val(lcanvasdata);
		$('.oekaki-metadata').val(new Date($.now()));
		$('.oekaki-clear').prop('disabled', false); 
		$('.form-files-input').prop('disabled', true); //если есть оекаки картинка, то простые грузить нельзя
		$('.filer__thumbnails').html(''); //текущие загруженные игнорим
		lc.clear(); //очищаем рисунок
		$('#qr-oekaki-body').html(''); //удаляем плагин
        $('#qr-oekaki').hide(); //прячем рисовалку
		FormFiles.oekaki = 1; //для FormValidate
    });
	$('.oekaki-clear').click(function(){
		lc.clear();
		$('#qr-oekaki-body').html('');
		$('#qr-oekaki').hide();
		$('.oekaki-image').val('');
		$('.oekaki-metadata').val('');
		$(this).prop('disabled', true);
		$('.form-files-input').prop('disabled', false);
		FormFiles.oekaki = 0;
    });
});
Stage('stickers',                          'stickers',  Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
	//ПРОВЕРКА УДАЛЕННОГО СТИКЕРА + СУТОЧНАЯ СИНХРОНИЗАЦИЯ + INSTALL
	var stickers = '../api/stickers/';
	var mystickers;
	var freqSticker;
	
	var updateStickers = function(id) {
		$.get('../api/sticker/show/' + id, function( data ) {
			Store.del('other.sticker.packs.' + id);
			if(data.pack.id) Store.set('other.sticker.packs.' + id, data); //перезаписываем только норм ответ
		})
		
	}
	
	var getFreqStickers = function() {
		var freqHtml = '';
        freqSticker =  Store.get('other.sticker.last', []);
		for (var i = freqSticker.length - 1; i >= 0; i--) {
			freqHtml += '<img class="sticker__img" data-sticker="' + freqSticker[i].id  + '" src="' + freqSticker[i].url + '">';
		}
		return freqHtml;
    };
	
	var setFreqStickers = function(sticker, url) {
		freqSticker.push({'id': sticker,'url': url});
		for (var i = 0; i < freqSticker.length - 1; i++) {
			if(freqSticker[i].id == sticker) {
				freqSticker.splice(i, 1);
			} 
		}
		if(freqSticker.length > 20) {
			freqSticker.splice(0, 1);
		}
		Store.set('other.sticker.last', freqSticker);
    };
	
	$('#postform').add('#qr-postform').on('click', '.postform__sticker-btn', function() {	
		$('#qr-sticker').show();
		//Store.reload(); //чтобы меж вкладок обновлялся сразу store
		mystickers = Store.get('other.sticker.packs');
		if(!mystickers) return;
		if(mystickers) reversed  = Object.keys(mystickers).reverse();
		var html = '';
		html += '<div class="sticker__pack">';
		html += '<div class="sticker__name">Часто используемые</div>';
		html += getFreqStickers();
		html += '</div>';
		
		//for(var i in mystickers) { //todo посмотреть воз-ть переделать в массив объектов ; todo try catch
		for( var i = 0; i < reversed.length; i++) {
			html += '<div class="sticker__pack">';
			html += '<div class="sticker__name">' + mystickers[reversed[i]].pack.name;
			html += '<a href="#" title="Обновить" class="sticker__update" data-id="' + mystickers[reversed[i]].pack.id + '">[U]</a>';
			html += '</div>';
            var lenght = mystickers[reversed[i]].stickers.length;
			for( var j = 0; j <  lenght; j++) {
				html += '<img class="sticker__img" data-sticker="' + mystickers[reversed[i]].pack.id + '_' + mystickers[reversed[i]].stickers[j].id + '" src="' + mystickers[reversed[i]].stickers[j].thumbnail + '">';
                if( j % 5 === 4 ) {html += '<br>'}
			}
			html += '</div>';
		}
		$('#qr-sticker-body').html('')
		$('#qr-sticker-body').append(html);
    });
	//постим
	$('#qr-sticker').on('click', 'img', function(e) {
		var sticker = $(this).data('sticker');
		var url = e.target.src;
		$('.postform').append('<input type="hidden" name="sticker0" value="' +  sticker + '" class="' +  sticker + ' sticker-input">'); //todo на Id бы..
		$('.postform__sticker-prev').html('<img class="postform__sticker-img" src="' + url + '" class="'  +  sticker + '">');
		FormFiles.sticker = 1;
		setFreqStickers(sticker, url); //запоминаем стикер
		$('#qr-sticker').hide();
    });
	//удаляем превью
	$('.postform__sticker-prev').on('click', 'img', function(e) {
		var sticker = e.target.className;
		$('.' + sticker).remove();
    });
	//обновляем пак
	$('#qr-sticker').on('click', '.sticker-update', function(e) {
		var id = $(this).data('id');
		updateStickers(id);
		return false;
	});
    $('#qr-sticker-close').click(function(){
        $('#qr-sticker').hide();
    });
});
Stage('Превью постов',                          'postpreview',  Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
	if(($(window).width() < 480 || $(window).height() < 480 )) return; //не запускаем на мобильных
    //==================================================================================================
    // POST PREVIEW BY >>REFLINKS
    //скопировано из старого кода
    var pView;
    var busy = false;

    var delPostPreview = function(e) {
        pView = e.relatedTarget;
        if(!pView) return;

        while(1)
        {
            if(/^preview/.test(pView.id)) break;

            else
            {
                pView = pView.parentNode;

                if(!pView) break;
            }
        }

        setTimeout(function()
        {
            if(!pView) $each($t('div'), function(el)
            {
                if(/^preview/.test(el.id)) $del(el);
            });
            else while(pView.nextSibling) $del(pView.nextSibling);
        }, Store.get('other.hide_post_preview_delay', 800));
    };

    var funcPostPreview = function(htm) {
        if(!pView) return;

        pView.innerHTML = htm;
        /*$each($t('script', pView), function(el)
         {
         $del(el);
         });*/
        //eventPostPreview(pView); //а это вешало эвенты
        //var pNum = pView.id.match(/\d+/);

        /*if(!$c('ABU-refmap', pView)[0] && !postByNum[pNum] && refMap[pNum])
         showRefMap(pView, pNum);*/
    };

    var showPostPreview = function(e, pNum, tNum) {
        var link = e.target;
        var scrW = document.body.clientWidth || document.documentElement.clientWidth;
        var scrH = window.innerHeight || document.documentElement.clientHeight;
        x = $offset(link, 'offsetLeft') + link.offsetWidth/2;
        y = $offset(link, 'offsetTop');

        if(e.clientY < scrH*0.75) y += link.offsetHeight;

        pView = $new('div',
            {
                'id': 'preview-' + pNum,
                'data-num': pNum,
                'class': 'post post_type_reply',
                'html': '<span class="ABU-icn-wait">&nbsp;</span>&nbsp;Загрузка...',
                'style':
                    ('position:absolute; z-index:300; border:1px solid grey; '
                        + (x < scrW/2 ? 'left:' + x : 'right:' + parseInt(scrW - x + 2)) + 'px; '
                        + (e.clientY < scrH*0.75 ? 'top:' + y : 'bottom:' + parseInt(scrH - y - 4)) + 'px')
            },
            {
                'mouseout': delPostPreview,
                'mouseover': function()
                {
                    if(!pView) pView = this;
                }
            });

        var post = Post(pNum);
        if(!post.exists() || post.isGhost()) {
            post.fetchPosts({update: true}, function(res){
                if(res.errorText) return funcPostPreview('Ошибка: ' + res.errorText);
                console.log(post)
                funcPostPreview(post.previewHTML());
                if(!post.isRendered()) Media.processLinks($('#m' + pNum + ' a'));
            });
        }else{
            funcPostPreview(post.previewHTML());
        }
        $del($id(pView.id)); //удаляет старый бокс поста
        dForm.appendChild(pView);

        if(!post.isRendered()) {
            Media.processLinks($('#m' + pNum + ' a'));
        }else{
            //todo костыль. Надо что-то с этим делать.
            var $preview_box = $('#preview-' + pNum);
            $preview_box.find('.media-expand-button').remove();
            Media.processLinks($preview_box.find('a'));
        }
    };

    var timers = {};
    var clearTimer = function(num){
        if(timers.hasOwnProperty(num)) {
            clearTimeout(timers[num]);
            delete timers[num];
        }
    };
    var timer_ms = Store.get('other.show_post_preview_delay', 50);
	
	/*if(($(window).width() < 480 || $(window).height() < 480 )) {
		$('#posts-form').on('click', '.post-reply-link', function(e){
			var $el = $(this);
			var num = $el.data('num');
			var thread = $el.data('thread');

			if(timer_ms) {
				timers[num] = setTimeout(function(){
					clearTimer(num);
					showPostPreview(e, num, thread);
				}, timer_ms);
			}else{
				showPostPreview(e, num, thread);
			}
		})
		return;
	}*/
	
    $('#posts-form').on('mouseover', '.post-reply-link', function(e){
        var $el = $(this);
        var num = $el.data('num');
        var thread = $el.data('thread');

        if(timer_ms) {
            timers[num] = setTimeout(function(){
                clearTimer(num);
                showPostPreview(e, num, thread);
            }, timer_ms);
        }else{
            showPostPreview(e, num, thread);
        }
    })
        .on('mouseout', '.post-reply-link', function(e){
            var $el = $(this);
            var num = $el.data('num');
            clearTimer(num);

            delPostPreview(e);
        })
        .on('click', '.post-reply-link', function(){
            var $el = $(this);
            var num = $el.data('num');
            Post(num).highlight();
        });
});
Stage('Опции постов',                           'postoptions',  Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    //опции постов

    var active = 0;
    var googleImageHref = function(image) {
        var host = window.location.host;
        var google = '../../www.google.com/searchbyimage@image_url=';
        //return google + 'http://' + host + image.attr('href');  //todo ИСПРАВИТЬ КАК ИСПРАВИТ Ш
		return google + 'http://' + host + image.attr('href');
    };

    var fillMenu = function(menu, num) {
        var post = Post(num);
        var $images =  $('#post-body-' + num).find('.image').find('.desktop');;
        /////////////////////////////////////////////////////////
        var $replyRow = $('<a href="#">Ответить</a>');
        $replyRow.click(function(){
            $(document.getElementById(num)).click();
            return false;
        });
        menu.append($replyRow);
		/////////////////////////////////////////////////////////
		var $watchRow = $('<a href="#">Следить</a>');
		$watchRow.click(function(){
			console.log('We watch ur ' + num + ' post replies');
			Favorites.add(num);
			Favorites.show();
			Favorites._send_fav(num);
			return false;
		});
        menu.append($watchRow);
        if(window.thread.id){
            var $reportRow = $('<a href="#">Пожаловаться</a>');
            $reportRow.click(function(){
                var field = $('#report-form-comment');
                field.val( '>>' + num + ' ' + field.val() );
                hideMenu();
                field.focus();

                return false;
            });
            menu.append($reportRow);
        }
        /////////////////////////////////////////////////////////
        if($images.length == 1) {
            menu.append('<a href="' + googleImageHref($images) + '" target="_blank">Найти картинку</a>');
        }else if($images.length > 1) {
            $images.each(function(k){
                var v = $(this);
                menu.append('<a href="' + googleImageHref(v) + '" target="_blank">Найти картинку ' + (k+1) + '</a>');
            });
        }
		if(window.config.makabadmin) {
			if($images.length == 1) {
				menu.append('<a class="mod-action-massban" href="/makaba/makaba.fcgi?task=vk_export&board=' + window.thread.board + '&num=' + num + '&file=' + 0 + '&publish=' + 1 + '" onclick="return writePablos(this);">Отправить на стену</a>');
				menu.append('<a class="mod-action-massban" href="/makaba/makaba.fcgi?task=vk_export&board=' + window.thread.board + '&num=' + num + '&file=' + 0 + '&publish=' + 0 + '" onclick="return writePablos(this);">Отправить в альбом</a>');
			}else if($images.length > 1) {
				$images.each(function(k){
					var v = $(this);
					menu.append('<a class="mod-action-massban" href="/makaba/makaba.fcgi?task=vk_export&board=' + window.thread.board + '&num=' + num + '&file=' + k + '&publish=' + 1 + '" onclick="return writePablos(this);">Отправить на стену ' + (k+1) + '</a>');
				});
				$images.each(function(k){
					var v = $(this);
					menu.append('<a class="mod-action-massban" href="/makaba/makaba.fcgi?task=vk_export&board=' + window.thread.board + '&num=' + num + '&file=' + k + '&publish=' + 0 + '" onclick="return writePablos(this);">Отправить в альбом ' + (k+1) + '</a>');
				});
			}
			// /makaba.fcgi?task=vk_export&board=b&num=129123370&file=0&to=ru2chvg&publish=1
		}
        /////////////////////////////////////////////////////////
        if(post.isThread()){
            var label = 'В избранное';
            var is_favorited = Favorites.isFavorited(num);
            if(is_favorited) label = 'Из избранного';
            var $favRow = $('<a href="#">' + label + '</a>');
            $favRow.click(function(){
                if(!is_favorited) {
                    Favorites.add(num);
                    Favorites.show();
                    Favorites._send_fav(num);
                }else{
                    Favorites.remove(num);
                }
                hideMenu();

                return false;
            });
            menu.append($favRow);
        }
		/////////////////////////////////////////////////////////
		if(($images.length == 1) && (window.thread.enable_oekaki==1)) {
			var $redrawRow = $('<a href="#">Перерисовать</a>');
			var $imagesPreviews =  $('#post-body-' + num ).find('.image').find('.preview');
			$redrawRow.click(function(){
				var multiplier = 1;
				var h_p = $imagesPreviews.attr('height');
				var w_p = $imagesPreviews.attr('width'); //размеры превью
				
				var imgsize = $imagesPreviews.attr('alt').split('x'); //оригинальные размеры
				
				var win_width = $( window ).width();
				var win_height = $( window ).height();
				
				var w_scale = Math.floor(win_width/imgsize[0]*10)/10; //коэф. сжатия 
				var h_scale = Math.floor(win_height/imgsize[1]*10)/10;
				
				if(imgsize[0] > (win_width - 100) || imgsize[1] > (win_height - 100)) {
					multiplier = w_scale<h_scale ? w_scale : h_scale;
				}
				oekakiInit(imgsize[0]*multiplier,imgsize[1]*multiplier); 
				
				var newImage = new Image();
				newImage.src = $images.attr('href');
				lc.saveShape(LC.createShape('Image', {scale: multiplier, x: 0, y: 0, image: newImage}));
				$(document.getElementsByName(num)).click();
				return false;
			});
			menu.append($redrawRow);
		}
    };

    var genPos = function(el) {
        var ret = {};
        var pos = el.offset();

        ret.left = (pos.left + el.outerWidth()) + 'px';
        ret.top = pos.top + 'px';

        return ret;
    };

    var hideMenu = function(num) {
        if(!active) return;
        active = 0;
        $('#ABU-select').remove();
    };

    $('body').click(hideMenu);

	//оптимизиовать. 1 класс общий + на клики id
	//ABU-select, ABU-banreasons так же выделить в класс reply-modal абсолютного reply и id для окон
    $('#posts-form').on('click', '.post__btn_type_options', function(){
        var el = $(this);
        var num = el.data('num');
        var old = active;
        hideMenu(num);
        active = num;
        if(old == num) {
            active = 0;
            return false;
        }
		
        var $menu = $('<span></span>');
        $menu.attr('id', 'ABU-select');
        $menu.attr('class', 'modal');
        $menu.css(genPos(el));
        fillMenu($menu, num);
        $menu.click(hideMenu);
		//window.menu = $menu;
        $('body').append($menu);
		return false;
    });
	$('#posts-form').on('click', '.post__btn_type_report', function(e){
		var el = $(this);
		var num = el.data('num');
		var thread = Post(num).getThread();
		var data;
		var old = active;
        hideMenu();
        active = num;
        if(old == num) {
            active = 0;
            return false;
        }
		var html = '<form id="modReportForm" enctype="multipart/form-data" method="post">' +
				'<input name="task" value="report" type="hidden">' +
				'<input name="board" value="' + window.thread.board + '" type="hidden">' +
				'<input name="thread" value="' + thread + '" type="hidden">' +
				'<input name="posts" value="' + num + '" type="hidden">' +
				'<input name="comment" id="modReportFormComment" class="input" value="" placeholder="Жалоба" type="text">' +
				'<input value="Ок" class="button" type="button" id="modReportSend"></form>';
		var $menu = $('<span>' + html + '</span>');
        $menu.attr('id', 'ABU-select');
        $menu.attr('class', 'modal mod-report');
		$menu.css(genPos(el));
		$('body').append($menu);
		return false;
	});
	$('.makaba').on('click', '#modReportSend',function(e){
		var form = document.getElementById('modReportForm');
		var $comment = $('#modReportFormComment')
		var request = new FormData(form);
		//if(request.get('comment') == '') request.set('comment','Жалоба........');
		if(!request.get('comment')) {
			$comment.addClass('error');
			return false;
		}
		$alert( "Работаем..." );
		$.ajax({
			method: "POST",
			url:'../makaba/makaba.fcgi@json=1', 
			data: request, 
			success: function() {
				$alert( "Накляузничано." );
				hideMenu();
			},
			contentType: false,
            processData: false
		});
	});
	$('.makaba').on('click', '#ABU-select',function(e){
		e.stopPropagation();
	});
});
Stage('Система раскрытия на полный экран',      'screenexpand', Stage.DOMREADY,     function(){
    var $container = $('<div id="fullscreen-container"></div>');
    var $win = $( window );
	//var $controls = $('<div id="fullscreen-container-controls"><i class="fa-thumb-tack fa"></i><i class="fa-times fa"></i></div>');
    var active = false;
	var pinned = false;
    var mouse_on_container = false;
    var img_width, img_height;
    var multiplier = 1;
    var container_mouse_pos_x = 0;
    var container_mouse_pos_y = 0;
    var webm = false;
    var mp4 = false;
    var mp3 = false;
    var video = false;

    var border_offset = 8; //magic number

    $('body').append($container);

    window.fullscreenExpand = function(num, src, thumb_src, image_width, image_height, cloud) {
        abortWebmDownload();
        if(active == num) {
            hide();
            return false;
        }

        var win_width = $win.width();
        var win_height = $win.height();

        img_width = image_width;
        img_height = image_height;
        multiplier = 1;
        active = num;
        webm = src.substr(-5) == '.webm';
        mp4 = src.substr(-4) == '.mp4';
        mp3 = src.substr(-4) == '.mp3';
        video = webm || mp4 || mp3;
        mouse_on_container = false;

        $container
            .html(video?'<video id="html5video" onplay="webmPlayStarted(this)" onvolumechange="webmVolumeChanged(this)" name="media" loop="1" ' + (Store.get('other.webm_vol',false)?'':'muted="1"') + ' controls="" autoplay="" height="100%" width="100%"><source class="video" height="100%" width="100%" type="' + (mp4?'video/mp4':'video/webm') +'" src="' + src + '"></source></video>':'<img src="' + src + '" width="100%" height="100%" />')
            //.append(!cloud?$controls:'')
			.css('top', (((win_height-image_height)/2) - border_offset) + 'px')
            .css('left', (((win_width-image_width)/2) - border_offset) + 'px')
			.css('background-color', (cloud?'transparent':'#555555'))
            .width(image_width)
            .height(!mp3?image_height:'200px')
            .show()
		
        if(image_width > win_width || image_height > win_height) {
            var multiplier_width = Math.floor(win_width/image_width*10)/10;
            var multiplier_height = Math.floor(win_height/image_height*10)/10;
            if(multiplier_width < 0.1) multiplier_width = 0.1;
            if(multiplier_height < 0.1) multiplier_height = 0.1;

            resize(multiplier_width<multiplier_height ? multiplier_width : multiplier_height, true);
        }
        $container.show();
        return false;
    };

    var hide = function() {
        abortWebmDownload();
        active = false;
        mouse_on_container = false;
        $container.hide();
        if(webm) {
            $container.html('');
        }
    };

    var resize = function(new_multiplier, center) {
        if(new_multiplier < 0.1) return;
        if(new_multiplier > 5) return;
	
        repos(new_multiplier, center);
        multiplier = new_multiplier;
        $container
            .width(img_width * multiplier)
            .height(img_height * multiplier);
    };

    var repos = function(new_multiplier, center) {
        var scroll_top = $win.scrollTop();
        var scroll_left = $win.scrollLeft();
        var container_offset = $container.offset();
        var x_on_container;
        var y_on_container;
        if(center) {
            x_on_container = img_width/2;
            y_on_container = img_height/2;
        }else{
            x_on_container = (container_mouse_pos_x-container_offset.left+scroll_left);
            y_on_container = (container_mouse_pos_y-container_offset.top+scroll_top);
        }
        var container_top = container_offset.top-scroll_top;
        var container_left = container_offset.left-scroll_left;
        var delta_multiplier = new_multiplier-multiplier;
        var delta_top = delta_multiplier*y_on_container/multiplier;
        var delta_left = delta_multiplier*x_on_container/multiplier;

        $container
            .css('left', (container_left-delta_left) + 'px')
            .css('top', (container_top-delta_top) + 'px');
    };

    $container.mouseover(function(){
        mouse_on_container = true;
    });

    $container.mouseout(function(){
        mouse_on_container = false;
    });

    $container.mousemove(function(e){
        container_mouse_pos_x = e.clientX;
        container_mouse_pos_y = e.clientY;
    });

	//$container.on('mousedown', $controls, function(e) {
	//	if($(e.target).closest('#fullscreen-container-controls').length) {
	//		console.log(e.target);
	//		return false;
	//	} 
	//});
	
    $win.keyup(function(e){
        if(!active) return;
        var move;
        var code = e.keyCode || e.which;

        if(code == 37 || code == 65 || code == 97 || code == 1092) {
            move = -1;
        }else if(code == 39 || code == 68 || code == 100 || code == 1074) {
            move = 1;
        }else if(code == 27) {
            return hide();
        }else{
            return;
        }

        var $images = $('.post__image').find('div');
        var active_index = $images.index($('#exlink-' + active));
        var new_index = active_index + move;
        if(new_index < 0) new_index = $images.length-1;
        if(new_index > $images.length-1) new_index = 0;
        var next = $images.eq(new_index);

        next.find('a').click();
    });

    $win.click(function(e){
        if(!active) return;
		if(pinned) return;
        if(e.which != 1) return;
        if($(e.target).closest('.post__file-preview').length) return;
        //if($(e.target).attr('name') == 'expandfunc') return;
        if($(e.target).closest('#fullscreen-container').length) return;
        hide();
    });

    $win.on((/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel", function(e){
        if(!active) return;
        if(!mouse_on_container) return;
        e.preventDefault();
        var evt = window.event || e; //equalize event object
        evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible
        var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta; //check for detail first, because it is used by Opera and FF

        if(delta > 0) {
            resize(multiplier+0.3);
        }
        else{
            resize(multiplier-0.3);
        }
    });

    draggable($container, {
		click: function(){
			hide(); //todo по клику на вебм не скрывать бы
		},
        mousedown: function(e_x,e_y){
            if(!webm) return;
            var container_top = parseInt($container.css('top'));
            var container_height = $container.height();

            if((container_top+container_height) - e_y < 35) return false;
        }});
});
Stage('renderStore',                            'renderstore',  Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    renderStore();

    if(Store.get('styling.disable_bytelen_counter',false)) $('.message-byte-len').hide();
    if(Store.get('styling.portform_format_panel',false)) {
        $('.toolbar-area').css('display','table-row');
        $('#CommentToolbar').html(edToolbar('shampoo'));
        $('#qr-CommentToolbar').html(edToolbar('qr-shampoo'));
    }
});
Stage('Кнопки перемотки страницы',              'scrollbtns',   Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    if(!Store.get('other.scroll_btns',true)) return;

    var border = 300;
    var $up_bnt = $('#up-nav-arrow');
    var $down_bnt = $('#down-nav-arrow');
    var up_visible = false;
    var down_visible = false;

    var up_show = function(){
        if(up_visible) return;
        up_visible = true;
        $up_bnt.css('display','block');
    };
    var up_hide = function(){
        if(!up_visible) return;
        up_visible = false;
        $up_bnt.css('display','none');
    };
    var down_show = function(){
        if(down_visible) return;
        down_visible = true;
        $down_bnt.css('display','block');
    };
    var down_hide = function(){
        if(!down_visible) return;
        down_visible = false;
        $down_bnt.css('display','none');
    };

    window.scrollcb_array.push(function(scroll_top){
        if(scroll_top > border){
            up_show();
        }else{
            up_hide();
            down_show();
            return;
        }
        var max_scroll = $(document).height()-$(window).height();
        var delta = max_scroll - scroll_top;

        if(delta > border){
            down_show();
        }else{
            down_hide();
            up_show();
        }
    });

    $('.makaba').on('click', '#up-nav-arrow', function(){
        $(window).scrollTop(0).scroll();
    });

    $('.makaba').on('click', '#down-nav-arrow', function(){
        $(window).scrollTop($(document).height()).scroll();
    });
    //добавляет 1000мс в треде на 3500 постов
    //if($(document).height() != $(window).height()) down_show();
    down_show();
});
Stage('Избранное',                              'favorites',    Stage.DOMREADY,     function(){
	if(!Store.get('other.favorites',true)) {
		$('#favorites-box').css('display','none');
		return;
	}
    var $fav_body = $('#favorites-table');
    var favorites = Store.get("favorites");

    for(var key in favorites) {
        if(!favorites.hasOwnProperty(key)) continue;
        var thread = favorites[key];
        if(typeof(thread) != 'object' || !thread.hasOwnProperty('last_post')) continue;
        var thread_row = Favorites.render_get_html(key, thread);

        $fav_body.append(thread_row);
    }

    $fav_body.on('click', '.fav__fa_type_remove', function(){
        var num = $(this).data('num');
        //if(confirm('Вы уверены?')) Favorites.remove(num);
		Favorites.remove(num);
    });

    $fav_body.on('click', '.fav__fa_type_update', function(){
        var num = $(this).data('num');
        Favorites.forceRefresh(num);
    });

    $('#posts-form').on('click', '.post__btn_type_favorite,#postbtn-favorite-bottom', function(){
        var num = $(this).data('num') || window.thread.id;
        var favorited = Favorites.isFavorited(num);

        if(favorited) {
            Favorites.remove(num);
        }else{
            Favorites.add(num);
            Favorites.show();
            Favorites._send_fav(num);
        }
    });
	
	//
	$('#qr-fav-autowatchmyposts').change(function() {
		Store.set('other.autowatchmyposts', this.checked)

	});
	$('#qr-fav-autowatchmythreads').change(function() {
		Store.set('other.autowatchmythreads', this.checked)
	});
	
	$('#qr-fav-autowatchmyposts').prop('checked', Store.get('other.autowatchmyposts', true));
	$('#qr-fav-autowatchmythreads').prop('checked', Store.get('other.autowatchmythreads', false));
	
	//автодобавления тред в избранное
	if(Store.get('other.autowatchmythreads', false) && Store.get('other.mythread_justcreated', false)) {
		Favorites.add(window.thread.id);
		Favorites.show();
		Favorites._send_fav(window.thread.id);
		Store.del('other.mythread_justcreated');
	}

    if(Store.get('other.fav_stats', false)) $('.loice-bar').css('display','inline-block'); //@todo delete
});
Stage('Загрузка плавающих окон',                'qrload',       Stage.DOMREADY,     function(){
    draggable_qr('qr', 'left');
    draggable_qr('settings-window', 'center');
    draggable_qr('setting-editor-window', 'center');
	draggable_qr('qr-oekaki', 'center');
	draggable_qr('qr-sticker', 'center');
});
Stage('Юзеропции',                              'settings',     Stage.DOMREADY,     function(){
    Settings.addCategory('favorites', 'Избранное');
    Settings.addCategory('old', 'Раньшебылолучше');
    Settings.addCategory('other', 'Другое');
    Settings.addCategory('mobile', 'Мобильная версия');
    Settings.addCategory('hide', 'Скрытие');

    Settings.addSetting('favorites',    'favorites.show_on_new', {
        label: 'Показывать избранное при новом сообщении',
        default: true
    });
    Settings.addSetting('favorites',    'favorites.deleted_behavior', {
        label: 'При удалении треда на сервере',
        multi: true,
        values: [
            ['0', 'Не удалять из избранного'],
            ['1', 'Повторно проверять перед удалением'],
            ['2', 'Удалять из избранного сразу']
        ],
        default: 1
    });
    Settings.addSetting('old',          'styling.qr.disable_if_postform', {
        label: 'Не выводить плавающую форму если развёрнута другая форма',
        default: false
    });
    Settings.addSetting('old',          'styling.qr.disable', {
        label: 'Не выводить плавающую форму при клике на номер поста',
        default: false
    });
    Settings.addSetting('old',          'styling.disable_bytelen_counter', {
        label: 'Не показывать счётчик байт в форме постинга',
        default: false
    });
    Settings.addSetting('old',        'styling.portform_format_panel', {
        label: 'Показ панели разметки текста в форме',
        default: false
    });
    Settings.addSetting('old',        'old.append_postform', {
        label: 'Показ формы постинга под постом при ответе',
        default: false
    });
    Settings.addSetting('old',        'old.ctrl_enter_submit', {
        label: 'Отправка поста по Ctrl+Enter',
        default: true
    });
    Settings.addSetting('old',        'old.media_thumbnails', {
        label: 'Показ превью видео',
        default: true
    });
    Settings.addSetting('old',  'old.media_thumbnails_on_hover', {
        label: 'Показ превью видео только при наводе мыши на ссылку',
        default: true
    });
    Settings.addSetting('old',          'other.fullscreen_expand', {
        label: 'Разворачивать картинки в центре экрана',
        default: true
    });

    Settings.addSetting('other',        'other.on_reply_from_main', {
        label: 'При ответе с главной в тред',
        multi: true,
        values: [
            ['0', 'Ничего не делать'],
            ['1', 'Перенаправлять в тред'],
        ],
        default: 1
    });
    Settings.addSetting('other',        'other.qr_close_on_send', {
        label: 'Закрывать плавающую форму после ответа',
        default: true
    });
    Settings.addSetting('other',        'other.custom_css.enabled', {
        label: 'Пользовательский CSS',
        default: false,
        edit: {
            label: 'Редактировать',
            title: 'Редактировать СSS',
            editor: 'textarea',
            path: 'other.custom_css.data',
            //importable: true, //если true, то выводить кнопки импорта и экспорта
            saveable: true,
            default: ''
        }
    });
    Settings.addSetting('other',        'other.show_post_preview_delay', {
        label: 'Задержка показа ответа при наводе мыши на номер поста',
        multi: true,
        values: [
            ['0', 'Нет'],
            ['50', '50мс'],
            ['100', '100мс'],
            ['200', '200мс'],
            ['300', '300мс'],
            ['400', '400мс'],
            ['500', '500мс']
        ],
        default: 50
    });
    Settings.addSetting('other',        'other.hide_post_preview_delay', {
        label: 'Задержка скрытия ответа',
        multi: true,
        values: [
            ['0', 'Нет'],
            ['50', '50мс'],
            ['100', '100мс'],
            ['200', '200мс'],
            ['500', '500мс'],
            ['800', '800мс'],
            ['1000', '1000мс'],
            ['1500', '1500мс'],
            ['2000', '2000мс'],
            ['3000', '3000мс'],
            ['5000', '5000мс']
        ],
        default: 800
    });
    Settings.addSetting('other',        'other.expand_autoscroll', {
        label: 'При сворачивании длинной пикчи фокусироваться на пост',
        default: true
    });
    Settings.addSetting('other',        'other.scroll_btns', {
        label: 'Показ кнопок перемотки страницы',
        default: true
    });
    Settings.addSetting('other',          'other.qr_hotkey', {
        label: 'Выводить плавающую форму по Ctrl+Space',
        default: true
    });
    Settings.addSetting('other',          'other.boardstats', {
        label: 'Показывать топ тредов',
        default: true
    });
	Settings.addSetting('other',          'other.favorites', {
        label: 'Показывать избранное',
        default: true
    });
//    Settings.addSetting('other',          'other.fav_stats', {
//        label: 'Показывать количество подписок на треды',
//        default: false
//    });
    Settings.addSetting('other',          'other.myboards.enabled', {
        label: 'Показывать Мои доски',
        default: true
    });
    Settings.addSetting('other',          'other.correcttz', {
        label: 'Коррекция часового пояса',
        default: true
    });
    Settings.addSetting('other',        'other.captcha_provider', {
        label: 'Капча',
        multi: true,
        values: [ 
            ['google', 'google'],
            ['2chaptcha', '2chaptcha'],
        ],
        default: 'google'
    });
    Settings.addSetting('other',        'other.navigation', {
        label: 'Бесконечная прокрутка',
        multi: true,
        values: [
            ['page', 'Отключено'],
            ['scroll', 'Автоматически'],
        ],
        default: 'scroll'
    });
    Settings.addSetting('other',        'other.media.titler.max_workers', {
        label: 'Загрузка названий видео',
        multi: true,
        values: [
            ['0', 'Отключено'],
            ['1', '1 поток'],
            ['2', '2 потока'],
            ['3', '3 потока'],
            ['4', '4 потока'],
            ['5', '5 потоков'],
            ['6', '6 потоков'],
            ['7', '7 потоков'],
            ['8', '8 потоков'],
            ['9', '9 потоков'],
            ['10', '10 потоков']
        ],
        default: '2'
    });

    Settings.addSetting('other',        'other.higlight_id', {
        label: 'Подсветка постов по ID',
        default: true
    });
	
	Settings.addSetting('other',        'other.higlight_myposts', {
        label: 'Помечать ваши посты',
        default: true
    });
	
	Settings.addSetting('other',        'other.higlight_myposts_replies', {
        label: 'Помечать ответы на мои посты',
        default: true
    });

    Settings.addSetting('mobile',       'mobile.dont_expand_images', {
        label: 'Открывать пикчи в новом окне',
        default: false
    });
    Settings.addSetting('mobile',       'mobile.hide_qr', {
        label: 'Отключить плавающую форму',
        default: false
    });

    Settings.addSetting('hide',        'other.hide_rules.enabled', {
        label: 'Правила скрытия постов',
        default: false,
        edit: {
            label: 'Редактировать',
            title: 'Редактировать правила скрытия',
            editor: 'hiderules',
            path: 'other.hide_rules.list',
            importable: true,
            default: []
        }
    });
    /////////////////////////////////////////////////////////////////////////////////////
    Settings.addEditor('textarea', function(val){
        var $body = $('#setting-editor-body');
        var textarea = $('<textarea id="setting-editor-textarea-textarea"></textarea>');
        textarea.val(val);
        $body.append(textarea);
    }, function(){
        //save
        return $('#setting-editor-textarea-textarea').val();
    });
    /////////////////////////////////////////////////////////////////////////////////////
    Settings.addEditor('singleinput', function(val){
        var $body = $('#setting-editor-body');
        var input = $('<span id="setting-editor-singleinput-text">Укажите список разделов через запятую.<br>Приммер: b,fag,po<br></span><input type="text" id="setting-editor-singleinput-input" />');
        input.val(val);
        $body.append(input);
    }, function(){
        //save
        return $('#setting-editor-singleinput-input').val();
    });
    /////////////////////////////////////////////////////////////////////////////////////
    var rules = [];
    Settings.addEditor('hiderules', function(val){
        var that = this;
        var last_rule = 0;
        var append_row = function(title,tnum,icon,email,name,trip,subject,comment,disabled) {
            var empty_cell = '<span>.*</span>';

            table.append('<tr id="hiderules-table-row' + i + '" class="' + '">' +
                '<td class="ah__cell">№' + last_rule + '</td>' +
                '<td class="ah__cell">' + (escapeHTML(title) || '') + '</td>' +
                '<td class="ah__cell">' + (escapeHTML(tnum) || empty_cell) + '</td>' +
                '<td class="ah__cell">' + (escapeHTML(icon) || empty_cell) + '</td>' +
                '<td class="ah__cell">' + (escapeHTML(email) || empty_cell) + '</td>' +
                '<td class="ah__cell">' + (escapeHTML(name) || empty_cell) + '</td>' +
                '<td class="ah__cell">' + (escapeHTML(trip) || empty_cell) + '</td>' +
                '<td class="ah__cell">' + (escapeHTML(subject) || empty_cell) + '</td>' +
                '<td class="ah__cell">' + (escapeHTML(comment) || empty_cell) + '</td>' +
                '<td>' +
                '<input type="button" value="Экспорт" class="ah__export hiderules-table-row-export-btn" data-num="' + i + '">' +
                '<input type="button" value="Удалить" class="ah__del hiderules-table-row-delete-btn" data-num="' + i + '">' +
                '</td>' +
                '</tr>');
        };

        var $body = $('#setting-editor-body');
        var table = $('<table id="hiderules-table" class="ah">' +
            '<thead>' +
            '<tr class="ah__header">' +
            '<td class="ah__cell">№</td>' +
            '<td class="ah__cell">Название</td>' +
            '<td class="ah__cell">#треда</td>' +
            '<td class="ah__cell">Иконка</td>' +
            '<td class="ah__cell">Email</td>' +
            '<td class="ah__cell">Имя/ID</td>' +
            '<td class="ah__cell">Трипкод</td>' +
            '<td class="ah__cell">Тема</td>' +
            '<td class="ah__cell">Сообщение</td>' +
            '<td class="ah__cell">Управление</td>' +
            '</tr>' +
            '</thead>' +
            '</table>');
        rules = val;
        $body.html('');

        for(var i=0;i<rules.length;i++) {
            last_rule = i+1;
            var title = rules[i][0];
            var tnum = rules[i][1];
            var icon = rules[i][2];
            var email = rules[i][3];
            var name = rules[i][4];
            var trip = rules[i][5];
            var subject = rules[i][6];
            var comment = rules[i][7];
            var disabled = !!rules[i][8];

            append_row.apply(this, rules[i]);
        }

        table.append(
            '<tr id="hiderules-add-form">' +
                '<td class="ah__cell">№' + (i+1) + '</td>' +
                '<td class="ah__cell"><input type="text" id="hiderules-add-input-title"    class="ah__input input error"></td>' +
                '<td class="ah__cell"><input type="text" id="hiderules-add-input-tnum"     class="ah__input input"></td>' +
                '<td class="ah__cell"><input type="text" id="hiderules-add-input-icon"     class="ah__input input" placeholder=".*"></td>' +
                '<td class="ah__cell"><input type="text" id="hiderules-add-input-email"    class="ah__input input" placeholder=".*"></td>' +
                '<td class="ah__cell"><input type="text" id="hiderules-add-input-name"     class="ah__input input" placeholder=".*"></td>' +
                '<td class="ah__cell"><input type="text" id="hiderules-add-input-trip"     class="ah__input input" placeholder=".*"></td>' +
                '<td class="ah__cell"><input type="text" id="hiderules-add-input-subject"  class="ah__input input" placeholder=".*"></td>' +
                '<td class="ah__cell"><input type="text" id="hiderules-add-input-comment"  class="ah__input input" placeholder=".*"></td>' +
                '<td class="ah__cell"><input id="hiderules-add-submit-btn" type="button" value="Добавить" disabled="disabled"></td>' +
                '</tr>');

        var add_form = $(
            '<div id="hiderules-add-form">' +
                '<div><span>Правило:</span>  <input type="text"  class="input" id="hiderules-add-json-input" placeholder="Можно вставить сохранённое ранее"></div>' +
                'В полях указываются регулярные выражения.<br>' +
                'Для конвертации строк в регулярки используйте конвертер:<br>' +
                '<input type="text" class="input" id="hiderules-add-converter-str"> -> <input type="text" class="input" id="hiderules-add-converter-regex" readonly="readonly"><br>' +
                '</div>');

        $body.append(table);
        $body.append(add_form);
        $body.append('<div id="hiderules-bottom">Нижние кнопки импорта и экспорта импортируют/экспортируют ВСЕ правила</div>');
        ///////////////////////////////////////////////////////////////////////////////////////////////////////
        $('.ah__export').click(function(){
            var num = $(this).data('num');
            var rule =  Store.get('other.hide_rules.list.' + num);
            prompt('Скопируйте', JSON.stringify(rule));
        });
        $('.ah__del').click(function(){
            var num = $(this).data('num');
            var rules =  Store.get('other.hide_rules.list');
            rules.splice(num,1);
            Store.set('other.hide_rules.list', rules);
            Settings._editor_show(rules);
        });
        $('#hiderules-add-converter-str').keyup(function(){
            var val = $.trim($(this).val());
            var json = String(val).replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]', 'g'), '\\$&');
            $('#hiderules-add-converter-regex').val(json);
        });
        ///////////////////////////////////////////////////////////////////////////////////////////////////////
        var check_errors = function() {
            var err = false;
            for(var i=0;i<el.length;i++) {
                var el_name = el[i][0];
                var el_el = el[i][1];
                if(el_name == 'title') if(!el_el.val()) {
                    err = true;
                    el_el.addClass('error');
                    continue;
                }else{
                    el_el.removeClass('error');
                    continue;
                }

                try{
                    new RegExp(el_el.val());
                    el_el.removeClass('error');
                }catch(e){
                    el_el.addClass('error');
                }
            }

            return err;
        };

        var el = [];
        el.push(['title', $('#hiderules-add-input-title')]);
        el.push(['tnum', $('#hiderules-add-input-tnum')]);
        el.push(['icon', $('#hiderules-add-input-icon')]);
        el.push(['email', $('#hiderules-add-input-email')]);
        el.push(['name', $('#hiderules-add-input-name')]);
        el.push(['trip', $('#hiderules-add-input-trip')]);
        el.push(['subject', $('#hiderules-add-input-subject')]);
        el.push(['comment', $('#hiderules-add-input-comment')]);

        var $submit_btn = $('#hiderules-add-submit-btn');
        var $json_input = $('#hiderules-add-json-input');

        $('.ah__input').keyup(function(){
            var arr = [];
            for(var i=0;i<el.length;i++) arr.push(el[i][1].val());
            $json_input.val( JSON.stringify(arr) );

            if(check_errors()) {
                $submit_btn.attr('disabled','disabled');
            }else{
                $submit_btn.removeAttr('disabled','disabled');
            }

            $json_input.removeClass('error');
        })
            .focus(function(){
                $(this).attr('size', '25');
            })
            .blur(function(){
                $(this).removeAttr('size');
            });
        $json_input.keyup(function(){
            var arr;
            try {
                arr = JSON.parse($json_input.val());
            }catch(e){
                $json_input.addClass('error');
                return;
            }
            if(!arr.length || (arr.length != 8 && arr.length != 9)) {
                $json_input.addClass('error');
                return;
            }
            for(var i=0;i<8;i++) {
                el[i][1].val( arr[i] );
            }
            $json_input.removeClass('error');
            check_errors();
        });

        $submit_btn.click(function(){
            var arr = [];
            for(var i=0;i<el.length;i++) arr.push($.trim(el[i][1].val()));
            var c_arr = Store.get('other.hide_rules.list',[]);
            c_arr.push(arr);
            Store.set('other.hide_rules.list', c_arr);
            last_rule++;
            //append_row.apply(that,arr);
            Settings._editor_show(c_arr);
        });
    }, function(){
        //save
        //return $('#setting-editor-textarea-textarea').val();
    });
    /////////////////////////////////////////////////////////////////////////////////////

    $('#settings').click(function(){
        Settings.toggle();
    });
    $('#settings-btn-close').click(function(){
        Settings.hide();
    });
    $('#settings-btn-export').click(function(){
		var myWindow = window.open("", "JSON Settings", '_blank');
		myWindow.document.write('<textarea style="width:100%; height:100%;">' + escapeHTML(Store.export()) + '</textarea>');
		myWindow.focus();
		
		//var data = Store.export();
		//var url = 'data:text/json;charset=utf8,' + encodeURIComponent(data);
		//window.open(url, '_blank');
		//window.focus();
        //prompt('Скопируйте и сохраните', Store.export());
    });
    $('#settings-btn-import').click(function(){
        var json = prompt('Вставьте сохранённые настройки');
        if(!json) return;

        try {
            JSON.parse(json);
        }catch(e){
            return $alert('Неверный формат');
        }

        localStorage.store = json;

        Store.reload();
        Settings.hide();
        $alert('Для применения настроек обновите страницу');
    });
    $('#settings-btn-save').click(function(){
        var changed = [];

        $('.settings__checkbox').each(function(){
            var $box = $(this);
            var category = $box.data('category');
            var path = $box.data('path');
            var setting = Settings.getSetting(category, path);
            var current_value = Store.get(path, setting.default);
            var new_value = $box.is(':checked');
            if(current_value == new_value) return;

            changed.push(path);
            if(new_value == setting.default) {
                Store.del(path);
            }else{
                Store.set(path, new_value);
            }
        });

        $('.settings__multibox').each(function(){
            var $box = $(this);
            var category = $box.data('category');
            var path = $box.data('path');
            var setting = Settings.getSetting(category, path);
            var current_value = Store.get(path, setting.default);
            var new_value = $box.val();
            if(current_value == new_value) return;

            changed.push(path);
            if(new_value == setting.default) {
                Store.del(path);
            }else{
                Store.set(path, new_value);
            }
        });

        if(changed.length) $alert('Для применения настроек обновите страницу');
        Settings.hide();
    });

    $('#setting-editor-btn-save').click(function(){
        var newval = Settings._editor_onsave();
        //var currentval = Store.get(Settings._editor_path, Settings._editor_default_val);
        if(newval == Settings._editor_default_val) {
            Store.del(Settings._editor_path);
        }else{
            Store.set(Settings._editor_path, newval);
        }
        $('#setting-editor-window').hide();
    });

    $('#setting-editor-btn-close').click(function(){
        $('#setting-editor-window').hide();
    });

    $('#setting-editor-btn-export').click(function(){
        prompt('Скопируйте и сохраните', JSON.stringify(Store.get(Settings._editor_path, {})));
    });

    $('#setting-editor-btn-import').click(function(){
        var json = prompt('Вставьте сохранённое');
        var obj;
        if(!json) return;

        try {
            obj = JSON.parse(json);
        }catch(e){
            return $alert('Неверный формат');
        }

        Store.set(Settings._editor_path, obj);
        $('#setting-editor-window').hide();
    });
});
Stage('Подсветка якоря',                        'ancorlight',   Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    var match;

    if(match=/#([0-9]+)/.exec(document.location.toString())) {
        var post = Post(match[1]);
        if(!post.exists() || !post.isRendered()) return;
        Post(match[1]).highlight();
        scrollToPost(match[1]);
        history.pushState('', document.title, window.location.pathname);
    }

});
Stage('Предупреждение о анальной цензуре',      'censure',      Stage.DOMREADY,     function(){
    var checks = 0;
    var interval = setInterval(function(){
        if($('#de-panel').length && !$('.jcaptcha').length && (+new Date)-Store.get('tmp.censure',0) > 1000*60*60*3) {
            $alert('У вас установлен куклоскрипт, который без вашего ведома может удалять треды из выдачи и ' +
                'премодерировать информацию. Рекомендуем избавиться от него.' +
                '<a href="../../https@twitter.com/abunyasha/status/520708815038451712" target="_blank">Подробнее</a><br>' +
                '<a href="#" id="censure-notice-close">Закрыть</a>', 'wait');

            $('#censure-notice-close').click(function(event) {
                event.preventDefault();
                $close($id('alert-wait'));
                Store.set('tmp.censure',(+new Date));
            });

            clearInterval(interval);
        }
        checks++;
        if(checks >= 10) clearInterval(interval);
    },1000);
});
Stage('Взрослые разделы',                      'adultcheck',    Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    //18 years old validate
	var ageallow = getCookie('ageallow');
	if(ageallow != 1) {
		if (top.location.pathname == '../fg/' || top.location.pathname == '../fur/' || top.location.pathname == '../g/' || top.location.pathname == '../ga/' || top.location.pathname == '../hc/' || top.location.pathname == '../e/' || top.location.pathname == '../fet/' || top.location.pathname == '../sex/' || top.location.pathname == '../fag/') {
			generateWarning('agebox');
		}
	}
	$("#ageboxallow").click(function(){
		setCookie("ageallow", 1, 365);
		$('.warningcover, .warningbox').remove();
		return false;
    });
	//
});
Stage('Плашка',                      'abuplashque',    Stage.DOMREADY,     function(){
	if(window.location.hostname == '2channel.hk') return;
	
	var $el = $('.makaba');
	if(!window.thread.board) {
		$el = $('body');
	}
	var show_plashque = getCookie('plashque');
	//var p_text = 'Будьте няшами - постите тестовые сообщения с картинками или вебм.';
    var p_text = '1) CTRL + F5; 2) если после п. 1 все еще что-то очень не работает - пиши <a href="res/421281.html">сюда</a>. 3) Если у тебя кукла - никуда не пиши.';
	var plashque = '<div id="plashque" ' +
					'style="font-size: 19px; position: fixed;top: 0px;width: 100%;background: #000 none repeat scroll 0% 0%;margin-left: -8px;opacity: 0.7;box-shadow: 0px 2px 5px 0px #292929;' +
					'text-align: center;color: #CCC;padding: 7px 50px 7px 7px;">' +
					p_text + 
					'<span id="plashque-close" style="margin-right: 10px;cursor: pointer;position: absolute;top: 15px;right: 0px;">[X]</span></div>';
	if(parseInt(show_plashque)) {
		$el.append(plashque);
	}
	$("#plashque-close").click(function(){
		setCookie("plashque", 0, 1);
		$('#plashque').slideUp();
		return false;
    });   
});

Stage('Удалятель ссылок, уродливый, как твоя мамаша','linkremover',    Stage.DOMREADY,     function(){
	return; //@todo beta поправить
    if(!window.thread.board) return; //не запускаем на главной
    //link remover
	window.linkremover = function() {
		if(window.thread.board=='b') {
			var x = $("a[href^='http']:not([href*='store.steampowered.com/app/444520']):not([href*='2ch.pm']):not([href*='2ch.hk']):not([href*='2ch.pm']):not([href*='twitch.tv/abu1nyasha']):not([href*='2chtv.ru']):not([href*='telegram.me/twochannel']):not([href*='telegram.me/dvachannel']):not([href*='change.org']):not([href*='vk.com/ru2ch']):not([href*='itunes.apple.com']):not([href*='youtube.com']):not([href*='youtu.be']):not([href*='twitter.com']):not([href*='2channel.hk'])").contents().unwrap();
		}
	};
	linkremover();
	
	var trackOutboundLink = function(url) {
	   ga('send', 'event', 'outbound', 'click', url, {
		 'transport': 'beacon',
		 'hitCallback': function(){/*document.location = url;*/}
	   });
	}
	
	function cl(link){
		var img = new Image(1,1);
		img.src = '../../https@www.liveinternet.ru/click@_2A' + link;
	}
	var linkUpdater = function() {
		if(window.thread.board=='b') {
			var list = "a[href^='http']:[href*='twitter.com'][href*='youtu.be'][href*='youtube.com'][href*='itunes.apple.com'][href*='vk.com/ru2ch']" +
						"[href*='change.org'][href*='telegram.me/dvachannel'][href*='telegram.me/twochannel'][href*='2channel.hk'][href*='twitch.tv/abu1nyasha'][href*='life.ru'][href*='../banners/default.htm']";  
			var $links = $(list);
			var len = $links.length;
			for(var i = 0; i < len; i++) {
				$links[i].onclick = function () {
					//trackOutboundLink(this.href);  analitics
					cl(this);
				}
			}
		} else {
			var list = "a[href^='http']:not([href*='life.ru']):not([href*='2ch.pm']):not([href*='2ch.hk']):not([href*='2ch.pm']):not([href*='twitch.tv/abu1nyasha']):not([href*='2channel.hk'])" +
					   ":not([href*='telegram.me/twochannel']):not([href*='telegram.me/dvachannel'])" +
					   ":not([href*='change.org']):not([href*='vk.com/ru2ch']):not([href*='itunes.apple.com'])" +
					   ":not([href*='youtube.com']):not([href*='youtu.be']):not([href*='twitter.com'])";  
			//var x = $(list).each(function() {
			//	this.href = 'http://li.ru/go?' + this.href.split('://')[1];
			//});
			var $links = $(list);
			var len = $links.length;
			for(var i = 0; i < len; i++) {
				$links[i].onclick = function () {
					//trackOutboundLink(this.href);  analitics
					cl(this);
				}
			}
		}
	}();
	
	//arch fixer
	if(location.pathname.split(/\//)[2]=='arch') {
		var arch_mark = '<h3 class="archive-thread">Тред в архиве!</h3>';
		$('.logo').append(arch_mark);

		$('.rekl').html('<div id="lx_602368"></div><div id="lx_602319"></div>');
	}
	
});
Stage('Бесконечная прокрутка',                  'escroll',      Stage.DOMREADY,     function(){
    if(window.thread.id) return; //do not run on thread
    if(!window.thread.board) return;
    //if(navigation == 'page') return;
    var enabled = true;
    var active_page = 1;
    var max_page = 0;
    var busy = false;
    var done = false;
    var navigation = Store.get('other.navigation', 'scroll');
 

    var rekls = 0;
    var appendRekl = function() { //если что перенести в глобальный скоуп
        var postshtml = '';
        rekls += 1;

        postshtml += '<hr class="pre-rekl" style="display:none;">';  //prev
        postshtml += '<section class="moneymoneymoney"><a href="../../https@vk.com/ru2ch" target="blank"><img src="../images/vkru2ch.png"></a></section>';
        postshtml += '<hr>';

        $('#posts-form').append(postshtml);

        return true;
    };

    var onScroll = function(top) {
        if(!enabled) return;
        if(done) return;
        if(busy) return;
        if(!top) top = $(window).scrollTop();
        if($(document).height() - (top+$(window).height()) > 300) return;

        PostF.loadPage(active_page++);
        //linkremover(); 
    };

    PostF.loadPage('index');
    if(navigation != 'page') window.scrollcb_array.push(onScroll);

    var $pager = $('.pager');
    $pager.find('a').each(function(){
        var page = parseInt($(this).text());
        if(page > max_page) max_page = page;
        return true;
    });
    $pager.hide();
});
Stage('Подсветка постов по ID',                'highlight_id', Stage.DOMREADY,     function(){
    if(!Store.get('other.higlight_id', true)) return;

    $('#posts-form').on('click', '.ananimas', function() {
        var post_el = $(this).closest('.post');
        var hadclass = post_el.hasClass('post_type_highlight');
        $('.post_type_highlight').removeClass('post_type_highlight');
        if(hadclass) return;

        var num = post_el.data('num');
        var post = Post(num);
        var posts = post.threadPosts();
        var tmpost = Post(1);
        var name = post.cGetName();

        if(name.indexOf('id="id_tag_') < 0) return;

        for(var i=0;i<posts.length;i++) {
            tmpost.num = posts[i];
            if(!tmpost.isRendered()) continue;
            if(tmpost.cGetName() != name) continue;

            $('#post-body-' + posts[i]).addClass('post_type_highlight');
        }
    });
});
Stage('Подсветка личных постов',                'higlight_myposts', Stage.DOMREADY,     function(){
    //@todo подстветка в треде должна запускать после загрузки и рендера треда
	if(!window.thread.board) return; //не запускаем на главной 
	if(!window.thread.id) return; //не запускаем на нулевой
	if(!Store.get('other.higlight_myposts', true)) return; 
	
	var mark_replies = Store.get('other.higlight_myposts_replies', true)
	var thread = window.thread.id; //вот из-за этого на нулевой не светит :с
    var myposts = Store.get('myposts.' + window.thread.board + '.' + thread, []);
	var today = new Date().toLocaleDateString();
	
	//проверка на старые посты и удаление из myposts, раз в сутки, если чт вынести в глобал
	var checkToDel = function(thread) {
		Post(1).fetchPosts({thread: thread,from_post: thread, board: window.thread.board}, function(res) {
			if(res.hasOwnProperty('error')) {
				if(res.error == 'server' && res.errorCode == -404) {
					Store.del('myposts.' + window.thread.board + '.' + thread);
				}
			}
		});
	}
	
	if(!(Store.get('other.check_deleted_myposts') == today)) {
		var mythreads = Store.get('myposts.' + window.thread.board, {});
		for(var thread in mythreads) {
			if (mythreads.hasOwnProperty(thread)) {
				checkToDel(thread);
			}
		}
		Store.set('other.check_deleted_myposts', today);
	}
	
	
	//if(myposts.length) markPosts(myposts, mark_replies);
});
Stage('Система лайков',                         'likes',        Stage.DOMREADY,     function(){
    if(!window.thread.board) return; //не запускаем на главной
    if(!window.likes) return; //отключено
    var liked = Store.get('_cache.liked', []);
    var disliked = Store.get('_cache.disliked', []);
	var $postroot = $('#posts-form'); //возможно стоит сделать глобал, часто юзается
    var $like = $('.post__rate_type_like');
    var $dislike = $('.post__rate_type_dislike');
    //var neechosee = '<img src="../images/neechosee.png@abu" class="hehe-ne-bolee neechoosee" alt="НИЧОСИ">';
    //var chosee	  = '<img src="../images/chosee.png@abu" class="hehe-ne-bolee choosee" alt="ЧОСИ">';

    window.updateLikes = function(posts) { //костыль/10  ы ы
        for(var i=0;i<posts.length;i++) {
            var post = posts[i];
            if(post.likes) $('#like-count' + post.num).html(post.likes);
            if(post.dislikes) $('#dislike-count' + post.num).html(post.dislikes);
        }
    };

    var like = function(num, el, dislike) {
        var task = dislike?'dislike':'like';
        var store_name = dislike?'_cache.disliked':'_cache.liked';

        var onsuccess = function( data ) {
            if(!data) return $alert('Ошибка лайка: нет ответа');
            if(data.Status != 'OK') return $alert(data.Reason);

            liked.push(window.board + num);
            Store.set(store_name, liked);
            renderClicked(el, dislike, num);

            var count_el = $('#' + task + '-count' + num);
            var count = parseInt(count_el.text()) || 0;
            count++;
            count_el.html(count);
        };

        var onerror = function(jqXHR, textStatus) {
            $alert('Ошибка лайка: ' + jqXHR.status + '(' + textStatus + ')');
        };

        $.ajax( '/makaba/likes.fcgi?task=' + task + '&board=' + window.board + '&num=' + num, {
            dataType: 'json',
            timeout: 5000,
            success: onsuccess,
            error: onerror
        });
    };

    var renderClicked = function(el, dislike, num) {
        if(dislike) {
            el.addClass('post__rate_disliked');
            //$('#like-div' + num).addClass('post__rate_disliked');
        }else{
            el.addClass('post__rate_liked');
            //$('#dislike-div' + num).addClass('post__rate_liked');
        }
    };

    $like.each(function() {
        var id = this.id.substr(8);
        if(liked.indexOf(window.board + id) < 0) return;
        renderClicked($(this), false, id);
    });

    $dislike.each(function() {
        var id = this.id.substr(11);
        if(disliked.indexOf(window.board + id) < 0) return;
        renderClicked($(this), true, id);
    });

    $postroot.on('click', '.post__rate_type_like', function() {
        var el = $(this);
        if(el.hasClass('post__rate_liked')) return;
        if(el.hasClass('post__rate_disliked')) return;
        like(this.id.substr(8), el);

        //$(document.documentElement).append(neechosee);setTimeout(function() { $('.neechoosee').remove();}, 1000);
    });

    $postroot.on('click', '.post__rate_type_dislike', function() {
        var el = $(this);
        if(el.hasClass('post__rate_disliked')) return;
        if(el.hasClass('post__rate_liked')) return;
        like(this.id.substr(11), el, true);

        //$(document.documentElement).append(chosee); setTimeout(function() { $('.choosee').remove();}, 1000); ;
    });
});
Stage('[debug]Stage controller',                'debug_sc',     Stage.DOMREADY,     function(){
    if(!Store.get('debug', false)) return;
    Settings.addCategory('sc_menu', '[debug] Отключение стадий');
    for(var i=0;i<window.sc_stages.length;i++) {
        var id = window.sc_stages[i][0];
        var name = window.sc_stages[i][1];
        var path = 'debug_disable_stage.' + id;

        Settings.addSetting('sc_menu',    path, {
            label: 'Отключить: ' + name,
            default: false
        });
    }
    $('#bmark_debug').append('<b>Total: ' + window.sc_time + 'ms</b><br>');
});

function generatePostBody(post) {
    //если !parseInt(post.parent) то это ОП-пост
    var postshtml = '';

    postshtml += '<div class="post__details">';
    postshtml += '<input type="checkbox" name="delete"  class="turnmeoff" value="' + post.num + '" /> ';
    if(post.subject && parseInt(window.thread.enable_subject)) {
        postshtml += '<span class="post__title">';
        postshtml +=  post.subject + (post.tags?' /'+ post.tags + '../default.htm':'');
        postshtml += '</span> ';
    }
    if(post.email) {
        postshtml += '<a href="' + post.email + '" class="post__email">' + post.name + '</a> ';
    }else{
        postshtml += '<span class="post__anon">' + post.name + '</span> ';
    }
    if(post.icon) {
        postshtml += '<span class="post__icon">' + post.icon + '</span>';
    }
    switch (post.trip) {
        case '!!%adm%!!':        postshtml += '<span class="post__adm">## Abu ##<\/span>'; break;
        case '!!%mod%!!':        postshtml += '<span class="post__mod">## Mod ##<\/span>'; break;
        case '!!%Inquisitor%!!': postshtml += '<span class="post__inquisitor">## Applejack ##<\/span>'; break;
        case '!!%coder%!!':      postshtml += '<span class="post__mod">## Кодер ##<\/span>'; break;
		case '!!%curunir%!!':    postshtml += '<span class="post__mod">## Curunir ##<\/span>'; break;
        default:                 
								 if(post.trip_style) {
									 postshtml += '<span class="' + post.trip_style + '">' + post.trip + '</span>';
								 } else {
									 postshtml += '<span class="post__trip">' + post.trip + '<\/span>';
								 };
    }
    if(post.op == 1) {
        postshtml += '		<span class="post__ophui"># OP</span>&nbsp;';
    }
    postshtml += '	<span class="post__time">' + (window.correctTZ?window.correctTZ(post.date):post.date) + '&nbsp;</span>';
    if(window.thread.id) postshtml += '  <span class="post__number">#' + post.number + '</span>';
    postshtml += '	<span>';
    postshtml += '<a href="../' + window.thread.board + '/res/' + (parseInt(post.parent)||post.num) + '.html#' + post.num + '" id="' + post.num + '" class="post__reflink">№</a>';
    postshtml += '<a href="../' + window.thread.board + '/res/' + (parseInt(post.parent)||post.num) + '.html#' + post.num + '"  class="postbtn-reply-href post__reflink"  data-num="' + post.num + '">' + post.num + '</a>';
    postshtml += '		<span class="post__panel"> ';
    if(!parseInt(post.parent)) {
        postshtml += '<i title="Добавить в избранное" class="fa fa-star-o post__btn post__btn_type_favorite" data-num="' + post.num + '" id="fa-star' + post.num + '"></i> ';
    }
	postshtml += '			<a class="post__btn post__btn_type_hide desktop" href="#" data-num="' + post.num + '"></a> ';
	postshtml += '          <a href="#" data-num="' + post.num + '" class="post__btn post__btn_type_report desktop" title="Пожаловаться"></a>';
    postshtml += '          <a href="#" data-num="' + post.num + '" class="post__btn post__btn_type_options desktop" title="Опции поста"></a>';
    postshtml += '			<a class="post__btn post__btn_type_adm" style="display:none" href="#" onclick="addAdminMenu(this); return false;" onmouseout="removeAdminMenu(event); return false;"></a>';
    
    if(!parseInt(post.parent) && (post.sticky)) postshtml += '    <img class="post__btn" alt="Тред прикреплён" title="Тред прикреплён" src="../makaba/templates/img/sticky.png">';
    if(!parseInt(post.parent) && (post.endless)) postshtml += '    <img class="post__btn" alt="Бесконечный трендел" title="Бесконечный тред" src="../makaba/templates/img/endless.png">';
    if(!parseInt(post.parent) && (post.closed)) postshtml += '    <img class="post__btn" alt="Тред закрыт" title="Тред закрыт" src="../makaba/templates/img/locked.png">';
    
    postshtml += '		</span>';
    postshtml += '	</span>';
    if(!parseInt(post.parent) && !window.thread.id) postshtml += '	<span class="desktop"> [<a href="../' + window.thread.board + '/res/' + post.num + '.html">Ответ</a>]</span>';
    if(window.likes) {
        postshtml += '<div id="like-div' + post.num + '" class="post__rate post__rate_type_like">';
        postshtml += '    <i class="fa fa-bolt post__rate-icon"></i>';
        postshtml += '    Двачую';
        postshtml += '    <span id="like-count' + post.num + '" class="">' + (post.likes>0?post.likes:'') + '</span>';
        postshtml += '</div>';
        postshtml += '<div id="dislike-div' + post.num + '" class="post__rate post__rate_type_dislike">';
        postshtml += '    <i class="fa fa-thumbs-down post__rate-icon"></i>';
        postshtml += '    RRRAGE!';
        postshtml += '    <span id="dislike-count' + post.num + '" class="">' + (post.dislikes>0?post.dislikes:'') + '</span>';
        postshtml += '</div>';
    }
    postshtml += '	<br class="turnmeoff" />';
    postshtml += '</div>';
    

    if(post.files && post.files.length > 0) {
		postshtml += '<div class="post__images ' + ((post.files && post.files.length==1)?'post__images_type_single':'') + ((post.files && post.files.length>1)?'post__images_type_multi':'') + '">';
		var len = post.files.length;
		for(var i=0;i<len;i++) {
			var file = post.files[i];
			var is_webm = file.type == 6;
			var is_sticker = file.type == 100;
			postshtml += '			<figure class="post__image">';
			postshtml += '				<figcaption class="post__file-attr">';
			postshtml += '					<a class="desktop" target="_blank" href="' + (is_sticker?file.install:file.path) + '" title="' + file.fullname + '" id="title-' + post.num + '-' + file.md5 + '">' + file.displayname + '</a>';
			postshtml += '					<span class="post__filezise">(' + file.size + 'Кб, ' + file.width + 'x' + file.height + (is_webm?', ' + file.duration:'') + ')</span>';
			postshtml += '				</figcaption>';
			postshtml += '				';
			postshtml += '				<div id="exlink-' + post.num + '-' + file.md5 + '">';
			postshtml += '					<a class="post__image-link" href="' + file.path + '" onclick="expand(\'' + post.num + '-' + file.md5 + '\',\'' +  file.path + '\',\'' + file.thumbnail + '\',' + file.width + ',' + file.height + ',' + file.tn_width + ',' + file.tn_height + ',' + 0 + ',' + is_sticker + '); return false;">';
			postshtml += '						<img src="' + file.thumbnail + '" width="' + file.tn_width + '" height="' + file.tn_height + '" alt="' + file.size + '" class="post__file-preview preview' + (is_webm?' post__file-webm':'') + (post.nsfw?' post__file-nsfw':'') + '" />';
			postshtml += '					</a>';
			postshtml += '				</div>';
			postshtml += '			</figure>';
		}
		postshtml += '</div>';
	} else if(post.video) {
		postshtml += '		<div style="float: left; margin: 5px; margin-right:10px">';
		postshtml += '			' + post.video;
		postshtml += '		</div>';
	}
    postshtml += '<blockquote id="m' + post.num + '" class="post__message ' + (parseInt(!post.parent)?'post__message_op':'') + '">';
    postshtml += post.comment;
    if(post.banned == 1) postshtml += '			<br/><span class="post__pomyanem">(Автор этого поста был забанен. Помянем.)</span>';
    else if(post.banned == 2) postshtml += '	<br/><span class="post__pomyanem">(Автор этого поста был предупрежден.)</span>';
    postshtml += '</blockquote>';
    var replyhtml = Post(post.num).getReplyLinks();
    //console.log(replyhtml);
    postshtml += '<div id="refmap-' + post.num + '" class="post__refmap" style="' + (replyhtml?'':'display: none;') + '"><em>Ответы: </em>' + replyhtml + '</div>';

    return postshtml;
}

function requestCaptchaKeyGoogle(callback) {
    //функция загрузки ключа капчи с сервера
    //если в параметре коллбека нет {key: ... } значит возвращён текст ошибки

    var userCode = getCookie('passcode_auth');
    var url = '../api/captcha/invisible_recaptcha/id';
    //if(userCode) url += '@usercode=' + userCode;
    //if(userCode) url += '&usercode=' + userCode;

    var abort = false; //если ответ придёт после таймаута эта переменаня не даст вызвать коллбек 2й раз

    var abortTimer = setTimeout(function(){ //если не дождались ответа, отменяем
        abort = true;
        if(callback) callback('Превышен интервал ожидания');
    }, window.config.loadCaptchaTimeout);

    $.get(url, function( data ) {
        if(abort) return false; //слишком долго думал, уже не нужен.
        clearTimeout(abortTimer);

        if(data['warning']) return callback({ warning: data['warning']});
        else if(data['banned']) return callback({ banned: data['banned']});
        else if(data['result'] == 0) return callback('VIPFAIL');
        else if(data['result'] == 2) return callback('VIP');
        else if(data['result'] == 0) return callback('SQLFAIL');
        else if(data['result'] == 3) return callback('DISABLED');
        else if(data['result'] == 1) return callback({key: data['id']});
        else return callback(data);
    })
        .fail(function(jqXHR, textStatus) {
            if(abort) return false; //слишком долго думал, уже не нужен.
            clearTimeout(abortTimer);
            if(callback) callback(textStatus);
        });
}
function loadCaptchaGoogle() {
    requestCaptchaKey(function(data){
        if(!data.key) {
            if(data.warning) {
                generateWarning('warning', data.warning, function() {
                    $("#warningponyal").click(function(){
                        $.get('../api/captcha/message', function() {
                            loadCaptcha();
                        })
                        return false;
                    });
                });
            }else if(data.banned) {
                generateWarning('banned', data.banned, function() {
                    delCookie('op_' + window.board + '_' + window.thread.id); //??WTF
                })
            } else if(data == 'VIP') {
                $('.captcha').html('Вы - пасскодобоярин.');
                Store.set('renewneeded',0);
                window.config.captchaKey = -1;
            }else if(data == 'VIPFAIL') {
                $('.captcha').html('Пасскод недействителен. Перелогиньтесь. <a href="#" id="renew-pass-btn">Обновить</a>');
                Store.set('renewneeded',1);
                window.config.captchaKey = -2;
            }else{
                $('.captcha').html(data);
            }
        }else{
            window.config.captchaKey = data.key;
            //$('.captcha').append('Invisible Google Captcha');

            // $('.captcha__key').val(data.key);
            
            // if ( $('#captcha-widget').html()=='' ) {

            //     widgetQr = grecaptcha.render('captcha-widget', {
            //         'sitekey' : data.key,
            //         'theme' : 'light',
            //         'size' : 'invisible',
            //         'callback': function(r) {
            //             //var r = grecaptcha.getResponse();
            //             var e = document.getElementById('captcha-widget-main');
            //             e.innerHTML = '';
            //             var input = document.createElement("input");
            //             input.type = 'hidden';
            //             input.name = 'g-recaptcha-response';
            //             input.value = r;
            //             e.appendChild(input);
            //             window.sendForm(form[0])
            //         },
            //     });
            //     grecaptcha.execute(widgetQr);
                
            // } else {
            //     grecaptcha.reset(widgetQr);
            //     grecaptcha.execute(widgetQr);

            // }


            //if ($('#captcha-widget-main').html()=='') {
                //widgetMain = grecaptcha.render('captcha-widget-main', {
                //    'sitekey' : data.key,
                //    'theme' : 'light',
                //    'size' : 'invisible',
                //});
                //grecaptcha.execute(widgetMain);
            //} else {
               // grecaptcha.reset(widgetMain);
                //grecaptcha.execute(widgetMain);
            //}
        }
    });
    renewPass();
}


function requestCaptchaKey2ch(callback) {

    var userCode = getCookie('passcode_auth');
	
    var url;
	url = '/api/captcha/2chaptcha/id?board=' + window.thread.board + '&thread=' + window.thread.id;
    var abort = false;

    var abortTimer = setTimeout(function(){
        abort = true;
        if(callback) callback('Превышен интервал ожидания');
    }, window.config.loadCaptchaTimeout);

    $.get(url, function( data ) {
        if(abort) return false;
        clearTimeout(abortTimer);

		if(data['warning']) return callback({ warning: data['warning']});
		else if(data['banned']) return callback({ banned: data['banned']});
        else if(data['result'] == 0) return callback('VIPFAIL');
        else if(data['result'] == 2) return callback('VIP');
        else if(data['result'] == 0) return callback('SQLFAIL');
        else if(data['result'] == 3) return callback('DISABLED');
        else if(data['result'] == 1) return callback({key: data['id']});
        else return callback(data);
    })
        .fail(function(jqXHR, textStatus) {
            if(abort) return false;
            clearTimeout(abortTimer);
            if(callback) callback(textStatus);
        });
}
function loadCaptcha2ch(type) {
    var type = type || 'posting'; //@todo for unban catpcha
	var dead = false; //ТЕХРАБОТЫ 
	if(dead) {
		generateWarning('dead');
	}
	
    requestCaptchaKey(function(data){
        if(!data.key) {
			if(data.warning) {
				generateWarning('warning', data.warning, function() {
					$("#warningponyal").click(function(){
						$.get('../api/captcha/message', function() {
							loadCaptcha();
						})
						return false;
					});
				});
			}else if(data.banned) {
				generateWarning('banned', data.banned, function() {
					delCookie('op_' + window.board + '_' + window.thread.id); //??WTF
				}); 
			}else if(data == 'VIP') {
                $('.captcha').html('Вы - пасскодобоярин.');
                Store.set('renewneeded',0);
            }else if(data == 'VIPFAIL') {
                $('.captcha').html('Пасскод недействителен. Перелогиньтесь. <a href="#" id="renew-pass-btn">Обновить</a>');
                Store.set('renewneeded',1);
            }else if(data == 'DISABLED') {
                $('.captcha').html('');
                $('.captcha').hide();
            }else{
                $('.captcha__image').html(data);
            }
        }else{
            $('.captcha__image').html('<img src="../api/captcha/2chaptcha/image/' + data.key + '">');
            $('input[name="captcha_type"]').val('2chaptcha');
            $('input[name="2chaptcha_id"]').val(data.key);
            if( !$('input[name="2chaptcha_value"]').length ) {
                $('.captcha').append('<input name="2chaptcha_value" id="captcha-value" type="text" autocomplete="off" maxlength="6">');
            } else {
                $('input[name="2chaptcha_value"]').val('');
            }
        }
    });
    renewPass();
}

function showQrForm(qr_box) {
    if(!qr_box) qr_box = $('#qr');
    if(Store.get('styling.qr.disable', false)) return;
    if(Store.get('styling.qr.disable_if_postform', false) && $('#postform').is(':visible')) return;

    qr_box.show();
    loadCaptcha();
}
function insert(myValue) {
    //переписанный insert
    var form = window.activeForm;
    var area = form[0];

    var $qr_form = $('#qr-shampoo');
    var qr_area = $qr_form[0];
    var $qr_box = $('#qr');

    var $win = $(window);

    if(!$qr_box.is(':visible')) {
        if(($win.width() >= 480 && $win.height() >= 480) || !Store.get('mobile.hide_qr',false)) {
            showQrForm($qr_box);
        }
    }

    if (document.selection) { // IE
        qr_area.focus();
        var sel = document.selection.createRange();
        sel.text = myValue;
        qr_area.focus();
    } else if (area.selectionStart || area.selectionStart == '0') { // Real browsers
        var startPos = area.selectionStart;
        area.selectionStart = 0;
        //var scrollTop = area.scrollTop;
        //area.value = area.value.substring(0, startPos) + myValue + area.value.substring(endPos, area.value.length);
        qr_area.value = area.value.substring(0, startPos) + myValue + area.value.substring(startPos);
        qr_area.focus();
        qr_area.selectionStart = startPos + myValue.length;
        qr_area.selectionEnd = startPos + myValue.length;
        //area.scrollTop = scrollTop;
    } else {
        qr_area.value += myValue;
        qr_area.focus();
    }

    $qr_form.keyup();
}
function getTimeInDays() {
    return Math.ceil((+new Date)/1000/60/60/24);
}
function renderStore() {
    $('#name').val(Store.get('thread.postform.name',''));

    var email = Store.get('thread.postform.email','');
    $('#qr-e-mail,#e-mail').val(email);
    $('#sagecheckbox').prop('checked', (email=='sage'));

    var watermark = !!Store.get('thread.postform.watermark',false);
    $('#makewatermark').prop('checked', watermark);

    var icon = Store.get('thread.postform.icon.' + window.thread.board, false);
    if(icon) $('.anoniconsselectlist').val(icon);

    if(!window.thread.id) return false;

    var autorefresh = !!Store.get('thread.autorefresh',false);
    var $autorefresh_el = $('.autorefresh-checkbox');
    $autorefresh_el.prop('checked', autorefresh);
    if(autorefresh) autorefresh_start();
}
function scrollToPost(num) {
    //$('html, body').animate({ scrollTop: $('#post-' + num).offset().top }, 'slow');
    $(document).scrollTop($('#post-' + num).offset().top);
}
function escapeHTML(str) {
    return (str+'')
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function draggable_qr(id, pos) {
    //функция плавающих окон с записыванием их положения в хранилище
    var inDrag = false;
    var lastCursorX = 0;
    var lastCursorY = 0;
    var cursorInBoxPosX = 0;
    var cursorInBoxPosY = 0;

    var $form = $('#' + id);
    var formX = 0;
    var formY = 0;

    var moveForm = function(x, y) {
        var win = $(window);
        var windowWidth = win.width();
        var windowHeight = win.height();
        var formWidth = $form.innerWidth();
        var formHeight = $form.innerHeight();

        if(x+formWidth > windowWidth) x = windowWidth-formWidth;
        if(y+formHeight > windowHeight) y = windowHeight-formHeight;
        if(x<0) x = 0;
        if(y<0) y = 0;


        $form.css('top', y + 'px');
        $form.css('left', x + 'px');

        formX = x;
        formY = y;
    };

    $('#' + id + '-header').mousedown(function(e){
        e.preventDefault();

        var win = $(window);
        lastCursorX = e.pageX - win.scrollLeft();
        lastCursorY = e.pageY - win.scrollTop();

        cursorInBoxPosX = lastCursorX-formX;
        cursorInBoxPosY = lastCursorY-formY;

        inDrag = true;
    });

    $(document).mousemove(function(e){
        if(!inDrag) return;
        var win = $(window);
        var mouseX = e.pageX - win.scrollLeft();
        var mouseY = e.pageY - win.scrollTop();
        lastCursorX = mouseX;
        lastCursorY = mouseY;

        moveForm(mouseX-cursorInBoxPosX, mouseY-cursorInBoxPosY);
    });

    $(document).mouseup(function(){
        if(!inDrag) return;

        Store.set('styling.' + id + '.x', formX);
        Store.set('styling.' + id + '.y', formY);

        inDrag = false;
    });

    $( window ).resize(function(){
        moveForm(formX, formY);
    });

    var win = $(window);

    //обернул для багфикса (иначе страница не успеет отрендериться)
    $(function(){
        var store_x = Store.get('styling.' + id + '.x', false);
        var store_y = Store.get('styling.' + id + '.y', false);

        if(typeof(store_x) == 'number' && typeof(store_y) == 'number') {
            moveForm(store_x, store_y);
        }else{
            if(pos == 'center') {
                moveForm((win.width()-$form.width())/2, Math.floor(win.height()/3-$form.height()/2));
            }else{
                moveForm(win.width()-$form.width(), Math.floor(win.height()/3-$form.height()/2));
            }

        }
    });
}
function draggable(el, events) {
    var in_drag = false;
    var moved = 0;
    var last_x, last_y;

    var win = $(window);

    el.mousedown(function(e){
        if(e.which != 1) return;
        if(events && events.mousedown && events.mousedown(e.clientX, e.clientY) === false) return;
        e.preventDefault();
        in_drag = true;
        moved = 0;

        last_x = e.clientX;
        last_y = e.clientY;
    });

    win.mousemove(function(e){
        var delta_x, delta_y;
        var el_top, el_left;

        if(!in_drag) return;

        delta_x = e.clientX-last_x;
        delta_y = e.clientY-last_y;
        moved += Math.abs(delta_x) + Math.abs(delta_y);

        last_x = e.clientX;
        last_y = e.clientY;

        el_top = parseInt(el.css('top'));
        el_left = parseInt(el.css('left'));

        el.css({
            top: (el_top+delta_y) + 'px',
            left: (el_left+delta_x) + 'px'
        });
    });

    win.mouseup(function(e) {
        if(!in_drag) return;
        in_drag = false;
        if(moved < 6 && events && events.click) events.click(last_x, last_y);
    });
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
function getReadableFileSizeString(fileSizeInBytes) {
    var i = -1;
    var byteUnits = ['Кб', 'Мб', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
        fileSizeInBytes = fileSizeInBytes / 1024;
        i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
}

function oekakiInit(w,h) {
    $('#qr-oekaki').show();
	$('#qr-oekaki-body').width(parseInt(w) + 61); //467
	$('#qr-oekaki-body').height(parseInt(h) + 31); //461   (-24, когда min-height auto)
	window.lc = LC.init($('#qr-oekaki-body').get(0), {
		imageURLPrefix: '../makaba/templates/js/lcanvas/img',
		backgroundColor: '#fff',
		imageSize: {width: w, height: h},
	});
	return lc;
}

//warning
//@todo CASE!
function generateWarning(type, data, callback) {
	var body;
	var buttons;
	var head = '<div class="warningcover"></div><div class="warningbox">';
	var audio = '<audio loop autoplay><source src="../makaba/templates/img/monkey.mp3@1" type="audio/mpeg" ></audio>'
	if(type=='warning') {
		buttons = '<a href="#" id="warningponyal">Я понел(((</a>';
		body    = '<div><img src="../makaba/templates/img/makaka.gif" alt="tsok tsok tsok tsok tsok tsok..."></div>' +
			      '<div>' + decodeURIComponent(data['message']) + ' За этот пост <a href="' + data['path'] + '" target="_blank" >это</a></div>' + audio;
	}else if(type=='banned') {
		buttons = '<a href="#" id="warningponyal">Я понел(((</a>';
		body    = '<div><img src="../makaba/templates/img/makaka.gif" alt="tsok tsok tsok tsok tsok tsok..."></div>' +
			      '<div>' + data['message'] + 'Вот за <a href="' + data['path'] + '" target="_blank" >это</a></div>' +
				  '<div>Купить пасскод и получить мгновенный разбан можно <a href="../market.html" target="_blank">тут</a></div>' + audio;
	}else if(type=='agebox') {
		buttons = '<a href="#" id="ageboxallow">Я согласен и подтверждаю, что мне есть 18 лет</a><br><a  id="ageboxdisallow" href="../default.htm">Уйти отсюда</a>';
		body    = '<span>Получая доступ ко взрослым разделам Двача вы осознаете и соглашаетесь со следующими пунктами:<ul class="warningbox__ul"><li>Содержимое этого сайта предназначено только для лиц, достигших совершеннолетия. Если вы несовершеннолетний, покиньте эту страницу.</li>' +
				  '<li>Сайт предлагается вам "как есть", без гарантий (явных или подразумевающихся). Нажав на "Я согласен", вы соглашаетесь с тем, что  Двач не несет ответственности за любые неудобства, которые может понести за собой использование вами сайта, ' +
				  'а также что вы понимаете, что опубликованное на сайте содержимое не является собственностью или созданием Двача, однако принадлежит и создается пользователями Двача.</li>' +
				  '<li>Существенным условием вашего присутствия на сайте в качестве пользователя является согласие с "Правилами" Двача, ссылка на которые представлена на главной странице. Пожалуйста, прочтите <a href="../rules.html" target="_blank">Правила</a> ' +
				  'внимательно, так как они важны.</li></ul></span>';
	}else if(type=='unban') {
		buttons = '<a href="#" id="warningponyal">Закрыть</a>';
		body    = '<div class="warningbox__header">Реквест разбана</div>';
		body   += '<div class="unban">';
		body   += '<div class="unban__left">';
		body   += '<input class="input" id="unban-ban-num-input" value="" autocomplete="off" type="text" placeholder="Номер бана">';
		body   += '<textarea rows="2" id="unban-comment-input" class="input"  placeholder="Замечательная история получения бана"></textarea>';
		body   += '<div><input name="2chaptcha_id" value="" type="hidden"  class="input" id="unban-captcha-val"><div id="unban-captcha-div"></div><label for="unban-ban-num-input">Введите капчу:</label>' +
				  '<input type="text" class="input" id="unban-captcha-input" value="" autocomplete="off"/></div>' +
				  '<input onclick="UnbanSubmit(); return false;" class="button" value="Отправить запрос" type="submit">';
		body   += '</div>';
		body   += '<div class="unban__right">';
		body   += 'Нет надежды на кровавую модерацию? Устал ждать разбана? Просто купи разбан всего за 149.99р! <br>';
		body   += '<input id="unban-ban-num-input-buy" class="input" value="" autocomplete="off" placeholder="EMAIL|номер бана" type="text"><input style="" value="Замолить грехи" id="unban-buy-submit" type="submit">';
		body   += '</div>';
		body   += '</div>';
		
	}else if(type=='dead') {
		buttons = '<a href="#" id="warningponyal">Я понел(((</a>';
		body    = '<div><img src="../makaba/templates/img/makaka.gif" alt="tsok tsok tsok tsok tsok tsok..."></div>' +
			      '<div>У нас небольшие техработы, постинг будет доступен через 10 минут.</div>';
	}
	var foot = '<div class="warningboxbutton">' + buttons + '</div></div>';
	
	var output = head + body + foot;
	$('.makaba').append(output);
	$("#warningponyal").click(function(){
		$('.warningcover').add('.warningbox').remove();
		return false;
	});
	if(callback) callback();
	return false;
}

//higlight_myposts
function markPosts(posts,mark_replies) {
	for(var i=0;i<posts.length;i++) {
		var post = posts[i];
		try {//обработка возможно удаленных постов
			var replies = Post(post).getReplies();
			Post(post).highlight_myposts();
			
			if(mark_replies) {
				for(var j=0;j<replies.length;j++) {
					Post(replies[j]).highlight_myposts_replies();
				}
			};
		}
		catch(err) {
			console.log(post + ' has gone!');
		}
	}
}

//cookie funcs
function getCookie(name){
	var regexp = new RegExp('(^|;\\s+)' + name + '=(.*?)(;|$)');
	var hit = regexp.exec(document.cookie);

	if(hit && hit.length > 2) return unescape(hit[2]);
	else return null;
}
function getSCookie(cname) {
    var name = cname;// + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(c.indexOf('=') + 1,c.length);
        }
    }
    return null;
} 

function setCookie(key, value, days) {
	if(days)
	{
		var date=new Date();
		date.setTime(date.getTime() + days*24*60*60*1000);
		var expires = '; expires=' + date.toGMTString();

	}
	else expires = '';

	document.cookie = key + '=' + value + expires + '; path=/';
}

function delCookie(key) {
	document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
	return !getCookie(key);
}

//some newakaba funcs
function $alert(txt, id) {
    var html = '<div class="alert" id="alert-' + id + '">' + txt + '</div>';
    var e = document.createElement("div");
    e.innerHTML = html;
    $id('posts-form').appendChild(e);
    if(id != 'wait') setTimeout(function(){
        $close(e);
    }, 4000);
}
function $id(id) {
	return document.getElementById(id);
}
function $n(id) {
	return document.getElementsByName(id)[0];
}
function $t(id, root) {
	return (root || document).getElementsByTagName(id);
}
function $c(id, root) {
	return (root || document).getElementsByClassName(id);
}
function $each(arr, fn) {
	for(var el, i = 0; el = arr[i++];)
		fn(el);
}
function $html(el, htm) {
	var cln = el.cloneNode(false);
	cln.innerHTML = htm;
	el.parentNode.replaceChild(cln, el);
	return cln;
}
function $attr(el, attr) {
	for(var key in attr) {
		if(key == 'text') {
			el.textContent = attr[key];
			continue;
		}

		if(key == 'value') {
			el.value = attr[key];
			continue;
		}

		if(key == 'html') {
			el.innerHTML = attr[key];
			continue;
		}

		el.setAttribute(key, attr[key]);
	}

	return el;
}
function $event(el, events) {
	for(var key in events) {
        if(!events.hasOwnProperty(key)) continue;
        if(el.addEventListener) {
            el.addEventListener(key, events[key], false);
        }else{
            el.attachEvent(key,events[key]);
        }
    }
}
function $before(el, nodes) {
	for(var i = 0, len = nodes.length; i < len; i++)
		if(nodes[i]) el.parentNode.insertBefore(nodes[i], el);
}
function $after(el, nodes) {
	var i = nodes.length;

	while(i--) if(nodes[i]) el.parentNode.insertBefore(nodes[i], el.nextSibling);
}
function $new(tag, attr, events) {
	var el = document.createElement(tag);

	if(attr) $attr(el, attr);

	if(events) $event(el, events);

	return el;
}
function $disp(el) {
	el.style.display = el.style.display == 'none' ? '' : 'none';
}
function $del(el) {
	if(!el) return;
	if(el.parentNode) el.parentNode.removeChild(el);
}
function $offset(el, xy) {
	var c = 0;

	while(el) {
		c += el[xy];
		el = el.offsetParent;
	}

	return c;
}
function $close(el) {
	if(!el) return;
	$del(el);
}
function $show(el) {
	var i = 0;
	var showing = setInterval(function(){
		if(!el || i++ > 8) {
			clearInterval(showing);
			return;
		}

		var s = el.style;
		s.opacity = i/10;
		s.paddingTop = parseInt(s.paddingTop) + 1 + 'px';
		s.paddingBottom = parseInt(s.paddingBottom) + 1 + 'px';
	}, 35);
}
function _disabled_insert(txt) {
	var el = document.forms.postform.shampoo;

	if(el) {
		if(el.createTextRange && el.caretPos) {
			var caretPos = el.caretPos;
			caretPos.txt = caretPos.txt.charAt(caretPos.txt.length-1) == ' ' ? txt + ' ' : txt;

		}
		else if(el.setSelectionRange) {
			var start = el.selectionStart;
			var end = el.selectionEnd;
			el.value = el.value.substr(0,start) + txt + el.value.substr(end);
			el.setSelectionRange(start + txt.length, start + txt.length);

		}
		else el.value += txt + ' ';

		el.focus();
	}
}

//обновление пасса
function renewPass() {
	var renewusercode = Store.get('jsf34nfk3jh');
	var renewneeded   = Store.get('renewneeded');
	if (typeof renewusercode != 'undefined' && renewneeded == 1) {
		$('#renew-pass-btn').show();
		var renewdata = {task: 'auth',usercode: renewusercode}
		$(document).on('click', '#renew-pass-btn', function(e) {
			$.ajax({
				url: '../makaba/makaba.fcgi',
				dataType: 'text',
				type: 'post',
				contentType: 'multipart/form-data',
				data: renewdata,
				success: function( data, textStatus, jQxhr ){
					$('.captcha').html('Пасскод успешно обновлен!');
					console.log(data);
				},
				error: function( jqXhr, textStatus, errorThrown ){
					console.log( errorThrown );
				}
			});
			e.preventDefault();
		});
	Store.set('renewneeded',0);
	}
	//	
}

//раскрытие всех пикч в тредю
function expandAllPics()
{
    window.expand_all_img = true;
	var Pic = document.getElementsByClassName('image-link');
	
	for(var i = 0; i < Pic.length; i++)
	{
		if(Pic[i].getElementsByTagName("img")[0].className.indexOf("webm-file")==12) {
			continue;
		} else {
			Pic[i].getElementsByTagName('a')[0].click();
		}
	}
    delete window.expand_all_img;
}

//операции с вебм
function abortWebmDownload() {
    var el = $("#html5video");
    if(!el.length) return;

    var video = el.get(0);
    video.pause(0);
    video.src = "";
    video.load();
    el.remove();
}

function webmPlayStarted(el) {
    var video = $(el).get(0);
    video.volume = Store.get('other.webm_vol', 0);
}

function webmVolumeChanged(el) {
    var video = $(el).get(0);
    var vol = video.volume;
    if(video.muted) vol = 0;

    Store.set('other.webm_vol', vol);
}

function ToggleSage() {
	if($("#e-mail").val() == "sage"){
		$("#e-mail").val('');
		$("#sagecheckbox").prop('checked', false);;
	}else {
		$("#e-mail").val('sage');
		$("#sagecheckbox").prop('checked', true);;
	}
}


//toolbar
var ToolbarTextarea;
function _disables_edToolbar(obj) {
    document.write("<span class=\"m-bold\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/bold.png\" title=\"Жирный\" onClick=\"doAddTags('[b]','[/b]','" + obj + "')\"></span>");
    document.write("<span class=\"m-italic\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/italic.png\" title=\"Наклонный\" onClick=\"doAddTags('[i]','[/i]','" + obj + "')\"></span>");
    document.write("<span class=\"m-quote\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/quote1.png\" title=\"Цитирование\" onClick=\"doAddTags('>','','" + obj + "')\"></span>");
    document.write("<span class=\"m-underline\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/underline.png\" title=\"Нижнее подчёркивание\" onClick=\"doAddTags('[u]','[/u]','" + obj + "')\"></span>");
    document.write("<span class=\"m-overline\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/overline.png\" title=\"Верхнее подчёркивание\" onClick=\"doAddTags('[o]','[/o]','" + obj + "')\"></span>");
    document.write("<span class=\"m-spoiler\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/spoiler.png\" title=\"Спойлер\" onClick=\"doAddTags('[spoiler]','[/spoiler]','" + obj + "')\"></span>");
    document.write("<span class=\"m-strike\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/strike.png\" title=\"Зачёркнутый\" onClick=\"doAddTags('[s]','[/s]','" + obj + "')\"></span>");
    document.write("<span class=\"m-sup\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/sup.png\" title=\"Сдвиг текста вверх\" onClick=\"doAddTags('[sup]','[/sup]','" + obj + "')\"></span>");
    document.write("<span class=\"m-sub\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/sub.png\" title=\"Сдвиг текста вниз\" onClick=\"doAddTags('[sub]','[/sub]','" + obj + "')\"></span>");
    document.write("<br>");
}
function edToolbar(obj) {
    var ret = '';
    ret += ("<span class=\"m-bold\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/bold.png\" title=\"Жирный\" onClick=\"doAddTags('[b]','[/b]','" + obj + "')\"></span>");
    ret += ("<span class=\"m-italic\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/italic.png\" title=\"Наклонный\" onClick=\"doAddTags('[i]','[/i]','" + obj + "')\"></span>");
    ret += ("<span class=\"m-quote\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/quote1.png\" title=\"Цитирование\" onClick=\"doAddTags('>','','" + obj + "')\"></span>");
    ret += ("<span class=\"m-underline\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/underline.png\" title=\"Нижнее подчёркивание\" onClick=\"doAddTags('[u]','[/u]','" + obj + "')\"></span>");
    ret += ("<span class=\"m-overline\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/overline.png\" title=\"Верхнее подчёркивание\" onClick=\"doAddTags('[o]','[/o]','" + obj + "')\"></span>");
    ret += ("<span class=\"m-spoiler\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/spoiler.png\" title=\"Спойлер\" onClick=\"doAddTags('[spoiler]','[/spoiler]','" + obj + "')\"></span>");
    ret += ("<span class=\"m-strike\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/strike.png\" title=\"Зачёркнутый\" onClick=\"doAddTags('[s]','[/s]','" + obj + "')\"></span>");
    ret += ("<span class=\"m-sup\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/sup.png\" title=\"Сдвиг текста вверх\" onClick=\"doAddTags('[sup]','[/sup]','" + obj + "')\"></span>");
    ret += ("<span class=\"m-sub\"><img class=\"markup\" src=\"../icons/markup_buttons/photon/sub.png\" title=\"Сдвиг текста вниз\" onClick=\"doAddTags('[sub]','[/sub]','" + obj + "')\"></span>");
    ret += ("<br>");
    return ret;
}
function doAddTags(tag1,tag2,obj) {
	ToolbarTextarea = $id(obj);
	if (document.selection)
	{
		var sel = document.selection.createRange();
		sel.text = tag1 + sel.text + tag2;
	}
	else
	{
		var len = ToolbarTextarea.value.length;
		var start = ToolbarTextarea.selectionStart;
		var end = ToolbarTextarea.selectionEnd;
		var scrollTop = ToolbarTextarea.scrollTop;
		var scrollLeft = ToolbarTextarea.scrollLeft;
		var sel = ToolbarTextarea.value.substring(start, end);
		var rep = tag1 + sel + tag2;

		ToolbarTextarea.value =  ToolbarTextarea.value.substring(0,start) + rep + ToolbarTextarea.value.substring(end,len);
		ToolbarTextarea.scrollTop = scrollTop;
		ToolbarTextarea.scrollLeft = scrollLeft;
		ToolbarTextarea.focus();
		ToolbarTextarea.setSelectionRange(start+tag1.length, end+tag1.length);
	}

    $('#' + obj).keyup();
}

function expand(num, src, thumb_src, n_w, n_h, o_w, o_h, minimize,cloud) {
    var $win = $(window);
    if(Store.get('mobile.dont_expand_images',false) && ($win.width() < 480 || $win.height() < 480)) return;
    if(!minimize && !window.expand_all_img && Store.get('other.fullscreen_expand',true)) return fullscreenExpand(num, src, thumb_src, n_w, n_h,cloud);
	
    //todo screen был не так и плох
	var win_width = $win.width();
    var win_height = $win.height();
	var k = n_w/n_h;
	
    if(n_w > win_width || n_h > win_height){
        n_h = win_height - 10;
        n_w = n_w*k;
    } 
    var filetag, parts, ext;
    parts = src.split("/").pop().split(".");
    ext = (parts).length > 1 ? parts.pop() : "";
    if (((ext == 'webm') || (ext == 'mp3')) && n_w > o_w && n_h > o_h) {
		closeWebm = $new('a',
		{
			'href': src,
			'id': 'close-webm-' + num,
			'class': 'post__close-webm',
			'html': '[Закрыть]',
			'onclick': ' return expand(\'' + num + "\','" + src + "','" + thumb_src + "'," + o_w + ',' + o_h + ',' + n_w + ',' + n_h + ', 1);'
		});
		refElem = $id('title-' + num);
		refElem.parentNode.insertBefore(closeWebm, refElem.nextSibling);
		$('#exlink-' + num).prev().css('width','auto');
		if(ext == 'mp3') {
			filetag = ' <audio controls><source src="' + src + '" type="audio/mpeg"></audio> ';
		} else {
			filetag = '<video id="html5video" onplay="webmPlayStarted(this)" onvolumechange="webmVolumeChanged(this)" controls="" autoplay="" width="' + n_w + '" height="' + n_h + '"' + (Store.get('other.webm_vol',false)?'':'muted="1"') + ' loop="1" name="media"><source src="' + src + '" type="video/webm" class="video" ></video>';
		}
		
	} else {
		if (ext == 'webm') {
			var el = document.getElementById('close-webm-' + num);
			el.parentNode.removeChild(el);
		}
        filetag = '<a href="' + src + '" onClick="return expand(\'' + num + "\','" + src + "','" + thumb_src + "'," +
            o_w + ',' + o_h + ',' + n_w + ',' + n_h + ',' + (minimize?0:1) + ',' + cloud + ');" class="post__image-link ' + (minimize?'':'post__image-link_exp') + '"><img src="' + (!minimize ? src : thumb_src) + '" width="' + n_w + '" height="' + n_h + '" class="' + (!minimize ? '' : 'post__file-preview') +  ((ext=='webm') ? ' post__file-webm' : '') + '" /></a>';
		if(minimize && Store.get('other.expand_autoscroll', true)) {
            var post = Post(num);
            var post_el;
            if(post.isRendered()) {
                post_el = post.el();
            }else{
                post_el = $('#preview-' + parseInt(num));
            }

            var doc = $(document);
            var pos = post_el.offset().top;
            var scroll = doc.scrollTop();

            if(scroll > pos) doc.scrollTop(pos);

        }
    }
    $id('exlink-' + num).innerHTML = filetag;
    return false;
}

//arch 
if(location.pathname.split(/\//)[2]=='arch') {
	(function(){var f=false,b=document,c=b.documentElement,e=window;function g(){var a="";a+="rt="+(new Date).getTime()%1E7*100+Math.round(Math.random()*99);a+=b.referrer?"&r="+escape(b.referrer):"";return a}function h(){var a=b.getElementsByTagName("head")[0];if(a)return a;for(a=c.firstChild;a&&a.nodeName.toLowerCase()=="#text";)a=a.nextSibling;if(a&&a.nodeName.toLowerCase()!="#text")return a;a=b.createElement("head");c.appendChild(a);return a}function i(){var a=b.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","http"+("https:"==e.location.protocol?"s":"")+"://c.luxup.ru/t/lb205800_1.js?"+g());typeof a!="undefined"&&h().appendChild(a)}function d(){if(!f){f=true;i()}};if(b.addEventListener)b.addEventListener("DOMContentLoaded",d,false);else if(b.attachEvent){c.doScroll&&e==e.top&&function(){try{c.doScroll("left")}catch(a){setTimeout(arguments.callee,0);return}d()}();b.attachEvent("onreadystatechange",function(){b.readyState==="complete"&&d()})}else e.onload=d})();
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','../../https@www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-53637455-1', 'auto');
	ga('send', 'pageview');
}
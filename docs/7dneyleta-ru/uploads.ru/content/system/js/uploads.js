/*! jQuery UI - v1.12.0 - 2016-09-04
* http://jqueryui.com
* Includes: widget.js, jquery-1-7.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){t.ui=t.ui||{},t.ui.version="1.12.0";var e=0,i=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},h=e.split(".")[0];e=e.split(".")[1];var l=h+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][l.toLowerCase()]=function(e){return!!t.data(e,l)},t[h]=t[h]||{},n=t[h][e],o=t[h][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:h,widgetName:e,widgetFullName:l}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var s,n,o=i.call(arguments,1),a=0,r=o.length;r>a;a++)for(s in o[a])n=o[a][s],o[a].hasOwnProperty(s)&&void 0!==n&&(e[s]=t.isPlainObject(n)?t.isPlainObject(e[s])?t.widget.extend({},e[s],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,s){var n=s.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=i.call(arguments,1),h=this;return a?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(h=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new s(o,this))})),h}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(i,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+o.eventNamespace,c=h[2];c?n.on(l,c,r):i.on(l,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,s(this,e,!0,n)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))})});

/*
 * jQuery Iframe Transport Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{if(typeof exports==="object"){a(require("jquery"))}else{a(window.jQuery)}}}(function(b){var a=0;b.ajaxTransport("iframe",function(d){if(d.async){var c=d.initialIframeSrc||"javascript:false;",f,e,g;return{send:function(h,i){f=b('<form style="display:none;"></form>');f.attr("accept-charset",d.formAcceptCharset);g=/\?/.test(d.url)?"&":"?";if(d.type==="DELETE"){d.url=d.url+g+"_method=DELETE";d.type="POST"}else{if(d.type==="PUT"){d.url=d.url+g+"_method=PUT";d.type="POST"}else{if(d.type==="PATCH"){d.url=d.url+g+"_method=PATCH";d.type="POST"}}}a+=1;e=b('<iframe src="'+c+'" name="iframe-transport-'+a+'"></iframe>').bind("load",function(){var j,k=b.isArray(d.paramName)?d.paramName:[d.paramName];e.unbind("load").bind("load",function(){var l;try{l=e.contents();if(!l.length||!l[0].firstChild){throw new Error()}}catch(m){l=undefined}i(200,"success",{iframe:l});b('<iframe src="'+c+'"></iframe>').appendTo(f);window.setTimeout(function(){f.remove()},0)});f.prop("target",e.prop("name")).prop("action",d.url).prop("method",d.type);if(d.formData){b.each(d.formData,function(l,m){b('<input type="hidden"/>').prop("name",m.name).val(m.value).appendTo(f)})}if(d.fileInput&&d.fileInput.length&&d.type==="POST"){j=d.fileInput.clone();d.fileInput.after(function(l){return j[l]});if(d.paramName){d.fileInput.each(function(l){b(this).prop("name",k[l]||d.paramName)})}f.append(d.fileInput).prop("enctype","multipart/form-data").prop("encoding","multipart/form-data");d.fileInput.removeAttr("form")}f.submit();if(j&&j.length){d.fileInput.each(function(m,l){var n=b(j[m]);b(l).prop("name",n.prop("name")).attr("form",n.attr("form"));n.replaceWith(l)})}});f.append(e).appendTo(document.body)},abort:function(){if(e){e.unbind("load").prop("src",c)}if(f){f.remove()}}}}});b.ajaxSetup({converters:{"iframe text":function(c){return c&&b(c[0].body).text()},"iframe json":function(c){return c&&b.parseJSON(b(c[0].body).text())},"iframe html":function(c){return c&&b(c[0].body).html()},"iframe xml":function(c){var d=c&&c[0];return d&&b.isXMLDoc(d)?d:b.parseXML((d.XMLDocument&&d.XMLDocument.xml)||b(d.body).html())},"iframe script":function(c){return c&&b.globalEval(b(c[0].body).text())}}})}));

/*
 * jQuery File Upload Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery","jquery.ui.widget"],a)}else{if(typeof exports==="object"){a(require("jquery"),require("vendor/jquery.ui.widget"))}else{a(window.jQuery)}}}(function(b){b.support.fileInput=!(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent)||b('<input type="file">').prop("disabled"));b.support.xhrFileUpload=!!(window.ProgressEvent&&window.FileReader);b.support.xhrFormDataFileUpload=!!window.FormData;b.support.blobSlice=window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice);function a(c){var d=c==="dragover";return function(g){g.dataTransfer=g.originalEvent&&g.originalEvent.dataTransfer;var f=g.dataTransfer;if(f&&b.inArray("Files",f.types)!==-1&&this._trigger(c,b.Event(c,{delegatedEvent:g}))!==false){g.preventDefault();if(d){f.dropEffect="copy"}}}}b.widget("blueimp.fileupload",{options:{dropZone:b(document),pasteZone:undefined,fileInput:undefined,replaceFileInput:true,paramName:undefined,singleFileUploads:true,limitMultiFileUploads:undefined,limitMultiFileUploadSize:undefined,limitMultiFileUploadSizeOverhead:512,sequentialUploads:false,limitConcurrentUploads:undefined,forceIframeTransport:false,redirect:undefined,redirectParamName:undefined,postMessage:undefined,multipart:true,maxChunkSize:undefined,uploadedBytes:undefined,recalculateProgress:true,progressInterval:100,bitrateInterval:500,autoUpload:true,messages:{uploadedBytes:"Uploaded bytes exceed file size"},i18n:function(d,c){d=this.messages[d]||d.toString();if(c){b.each(c,function(e,f){d=d.replace("{"+e+"}",f)})}return d},formData:function(c){return c.serializeArray()},add:function(d,c){if(d.isDefaultPrevented()){return false}if(c.autoUpload||(c.autoUpload!==false&&b(this).fileupload("option","autoUpload"))){c.process().done(function(){c.submit()})}},processData:false,contentType:false,cache:false,timeout:0},_specialOptions:["fileInput","dropZone","pasteZone","multipart","forceIframeTransport"],_blobSlice:b.support.blobSlice&&function(){var c=this.slice||this.webkitSlice||this.mozSlice;return c.apply(this,arguments)},_BitrateTimer:function(){this.timestamp=((Date.now)?Date.now():(new Date()).getTime());this.loaded=0;this.bitrate=0;this.getBitrate=function(e,d,c){var f=e-this.timestamp;if(!this.bitrate||!c||f>c){this.bitrate=(d-this.loaded)*(1000/f)*8;this.loaded=d;this.timestamp=e}return this.bitrate}},_isXHRUpload:function(c){return !c.forceIframeTransport&&((!c.multipart&&b.support.xhrFileUpload)||b.support.xhrFormDataFileUpload)},_getFormData:function(c){var d;if(b.type(c.formData)==="function"){return c.formData(c.form)}if(b.isArray(c.formData)){return c.formData}if(b.type(c.formData)==="object"){d=[];b.each(c.formData,function(e,f){d.push({name:e,value:f})});return d}return[]},_getTotal:function(d){var c=0;b.each(d,function(e,f){c+=f.size||1});return c},_initProgressObject:function(d){var c={loaded:0,total:0,bitrate:0};if(d._progress){b.extend(d._progress,c)}else{d._progress=c}},_initResponseObject:function(c){var d;if(c._response){for(d in c._response){if(c._response.hasOwnProperty(d)){delete c._response[d]}}}else{c._response={}}},_onProgress:function(g,f){if(g.lengthComputable){var d=((Date.now)?Date.now():(new Date()).getTime()),c;if(f._time&&f.progressInterval&&(d-f._time<f.progressInterval)&&g.loaded!==g.total){return}f._time=d;c=Math.floor(g.loaded/g.total*(f.chunkSize||f._progress.total))+(f.uploadedBytes||0);this._progress.loaded+=(c-f._progress.loaded);this._progress.bitrate=this._bitrateTimer.getBitrate(d,this._progress.loaded,f.bitrateInterval);f._progress.loaded=f.loaded=c;f._progress.bitrate=f.bitrate=f._bitrateTimer.getBitrate(d,c,f.bitrateInterval);this._trigger("progress",b.Event("progress",{delegatedEvent:g}),f);this._trigger("progressall",b.Event("progressall",{delegatedEvent:g}),this._progress)}},_initProgressListener:function(c){var d=this,e=c.xhr?c.xhr():b.ajaxSettings.xhr();if(e.upload){b(e.upload).bind("progress",function(f){var g=f.originalEvent;f.lengthComputable=g.lengthComputable;f.loaded=g.loaded;f.total=g.total;d._onProgress(f,c)});c.xhr=function(){return e}}},_isInstanceOf:function(c,d){return Object.prototype.toString.call(d)==="[object "+c+"]"},_initXHRData:function(d){var f=this,h,e=d.files[0],c=d.multipart||!b.support.xhrFileUpload,g=b.type(d.paramName)==="array"?d.paramName[0]:d.paramName;d.headers=b.extend({},d.headers);if(d.contentRange){d.headers["Content-Range"]=d.contentRange}if(!c||d.blob||!this._isInstanceOf("File",e)){d.headers["Content-Disposition"]='attachment; filename="'+encodeURI(e.name)+'"'}if(!c){d.contentType=e.type||"application/octet-stream";d.data=d.blob||e}else{if(b.support.xhrFormDataFileUpload){if(d.postMessage){h=this._getFormData(d);if(d.blob){h.push({name:g,value:d.blob})}else{b.each(d.files,function(i,j){h.push({name:(b.type(d.paramName)==="array"&&d.paramName[i])||g,value:j})})}}else{if(f._isInstanceOf("FormData",d.formData)){h=d.formData}else{h=new FormData();b.each(this._getFormData(d),function(i,j){h.append(j.name,j.value)})}if(d.blob){h.append(g,d.blob,e.name)}else{b.each(d.files,function(i,j){if(f._isInstanceOf("File",j)||f._isInstanceOf("Blob",j)){h.append((b.type(d.paramName)==="array"&&d.paramName[i])||g,j,j.uploadName||j.name)}})}}d.data=h}}d.blob=null},_initIframeSettings:function(c){var d=b("<a></a>").prop("href",c.url).prop("host");c.dataType="iframe "+(c.dataType||"");c.formData=this._getFormData(c);if(c.redirect&&d&&d!==location.host){c.formData.push({name:c.redirectParamName||"redirect",value:c.redirect})}},_initDataSettings:function(c){if(this._isXHRUpload(c)){if(!this._chunkedUpload(c,true)){if(!c.data){this._initXHRData(c)}this._initProgressListener(c)}if(c.postMessage){c.dataType="postmessage "+(c.dataType||"")}}else{this._initIframeSettings(c)}},_getParamName:function(c){var d=b(c.fileInput),e=c.paramName;if(!e){e=[];d.each(function(){var f=b(this),g=f.prop("name")||"files[]",h=(f.prop("files")||[1]).length;while(h){e.push(g);h-=1}});if(!e.length){e=[d.prop("name")||"files[]"]}}else{if(!b.isArray(e)){e=[e]}}return e},_initFormSettings:function(c){if(!c.form||!c.form.length){c.form=b(c.fileInput.prop("form"));if(!c.form.length){c.form=b(this.options.fileInput.prop("form"))}}c.paramName=this._getParamName(c);if(!c.url){c.url=c.form.prop("action")||location.href}c.type=(c.type||(b.type(c.form.prop("method"))==="string"&&c.form.prop("method"))||"").toUpperCase();if(c.type!=="POST"&&c.type!=="PUT"&&c.type!=="PATCH"){c.type="POST"}if(!c.formAcceptCharset){c.formAcceptCharset=c.form.attr("accept-charset")}},_getAJAXSettings:function(d){var c=b.extend({},this.options,d);this._initFormSettings(c);this._initDataSettings(c);return c},_getDeferredState:function(c){if(c.state){return c.state()}if(c.isResolved()){return"resolved"}if(c.isRejected()){return"rejected"}return"pending"},_enhancePromise:function(c){c.success=c.done;c.error=c.fail;c.complete=c.always;return c},_getXHRPromise:function(f,e,d){var c=b.Deferred(),g=c.promise();e=e||this.options.context||g;if(f===true){c.resolveWith(e,d)}else{if(f===false){c.rejectWith(e,d)}}g.abort=c.promise;return this._enhancePromise(g)},_addConvenienceMethods:function(g,f){var d=this,c=function(e){return b.Deferred().resolveWith(d,e).promise()};f.process=function(h,e){if(h||e){f._processQueue=this._processQueue=(this._processQueue||c([this])).then(function(){if(f.errorThrown){return b.Deferred().rejectWith(d,[f]).promise()}return c(arguments)}).then(h,e)}return this._processQueue||c([this])};f.submit=function(){if(this.state()!=="pending"){f.jqXHR=this.jqXHR=(d._trigger("submit",b.Event("submit",{delegatedEvent:g}),this)!==false)&&d._onSend(g,this)}return this.jqXHR||d._getXHRPromise()};f.abort=function(){if(this.jqXHR){return this.jqXHR.abort()}this.errorThrown="abort";d._trigger("fail",null,this);return d._getXHRPromise(false)};f.state=function(){if(this.jqXHR){return d._getDeferredState(this.jqXHR)}if(this._processQueue){return d._getDeferredState(this._processQueue)}};f.processing=function(){return !this.jqXHR&&this._processQueue&&d._getDeferredState(this._processQueue)==="pending"};f.progress=function(){return this._progress};f.response=function(){return this._response}},_getUploadedBytes:function(e){var c=e.getResponseHeader("Range"),f=c&&c.split("-"),d=f&&f.length>1&&parseInt(f[1],10);return d&&d+1},_chunkedUpload:function(n,h){n.uploadedBytes=n.uploadedBytes||0;var g=this,e=n.files[0],f=e.size,c=n.uploadedBytes,d=n.maxChunkSize||f,j=this._blobSlice,k=b.Deferred(),m=k.promise(),i,l;if(!(this._isXHRUpload(n)&&j&&(c||d<f))||n.data){return false}if(h){return true}if(c>=f){e.error=n.i18n("uploadedBytes");return this._getXHRPromise(false,n.context,[null,"error",e.error])}l=function(){var q=b.extend({},n),p=q._progress.loaded;q.blob=j.call(e,c,c+d,e.type);q.chunkSize=q.blob.size;q.contentRange="bytes "+c+"-"+(c+q.chunkSize-1)+"/"+f;g._initXHRData(q);g._initProgressListener(q);i=((g._trigger("chunksend",null,q)!==false&&b.ajax(q))||g._getXHRPromise(false,q.context)).done(function(o,s,r){c=g._getUploadedBytes(r)||(c+q.chunkSize);if(p+q.chunkSize-q._progress.loaded){g._onProgress(b.Event("progress",{lengthComputable:true,loaded:c-q.uploadedBytes,total:c-q.uploadedBytes}),q)}n.uploadedBytes=q.uploadedBytes=c;q.result=o;q.textStatus=s;q.jqXHR=r;g._trigger("chunkdone",null,q);g._trigger("chunkalways",null,q);if(c<f){l()}else{k.resolveWith(q.context,[o,s,r])}}).fail(function(o,s,r){q.jqXHR=o;q.textStatus=s;q.errorThrown=r;g._trigger("chunkfail",null,q);g._trigger("chunkalways",null,q);k.rejectWith(q.context,[o,s,r])})};this._enhancePromise(m);m.abort=function(){return i.abort()};l();return m},_beforeSend:function(d,c){if(this._active===0){this._trigger("start");this._bitrateTimer=new this._BitrateTimer();this._progress.loaded=this._progress.total=0;this._progress.bitrate=0}this._initResponseObject(c);this._initProgressObject(c);c._progress.loaded=c.loaded=c.uploadedBytes||0;c._progress.total=c.total=this._getTotal(c.files)||1;c._progress.bitrate=c.bitrate=0;this._active+=1;this._progress.loaded+=c.loaded;this._progress.total+=c.total},_onDone:function(c,h,g,e){var f=e._progress.total,d=e._response;if(e._progress.loaded<f){this._onProgress(b.Event("progress",{lengthComputable:true,loaded:f,total:f}),e)}d.result=e.result=c;d.textStatus=e.textStatus=h;d.jqXHR=e.jqXHR=g;this._trigger("done",null,e)},_onFail:function(e,g,f,d){var c=d._response;if(d.recalculateProgress){this._progress.loaded-=d._progress.loaded;this._progress.total-=d._progress.total}c.jqXHR=d.jqXHR=e;c.textStatus=d.textStatus=g;c.errorThrown=d.errorThrown=f;this._trigger("fail",null,d)},_onAlways:function(e,f,d,c){this._trigger("always",null,c)},_onSend:function(i,g){if(!g.submit){this._addConvenienceMethods(i,g)}var h=this,k,c,j,d,l=h._getAJAXSettings(g),f=function(){h._sending+=1;l._bitrateTimer=new h._BitrateTimer();k=k||(((c||h._trigger("send",b.Event("send",{delegatedEvent:i}),l)===false)&&h._getXHRPromise(false,l.context,c))||h._chunkedUpload(l)||b.ajax(l)).done(function(e,n,m){h._onDone(e,n,m,l)}).fail(function(e,n,m){h._onFail(e,n,m,l)}).always(function(n,o,m){h._onAlways(n,o,m,l);h._sending-=1;h._active-=1;if(l.limitConcurrentUploads&&l.limitConcurrentUploads>h._sending){var e=h._slots.shift();while(e){if(h._getDeferredState(e)==="pending"){e.resolve();break}e=h._slots.shift()}}if(h._active===0){h._trigger("stop")}});return k};this._beforeSend(i,l);if(this.options.sequentialUploads||(this.options.limitConcurrentUploads&&this.options.limitConcurrentUploads<=this._sending)){if(this.options.limitConcurrentUploads>1){j=b.Deferred();this._slots.push(j);d=j.then(f)}else{this._sequence=this._sequence.then(f,f);d=this._sequence}d.abort=function(){c=[undefined,"abort","abort"];if(!k){if(j){j.rejectWith(l.context,c)}return f()}return k.abort()};return this._enhancePromise(d)}return f()},_onAdd:function(q,m){var p=this,v=true,u=b.extend({},this.options,m),f=m.files,s=f.length,g=u.limitMultiFileUploads,k=u.limitMultiFileUploadSize,t=u.limitMultiFileUploadSizeOverhead,o=0,n=this._getParamName(u),d,c,r,l,h=0;if(!s){return false}if(k&&f[0].size===undefined){k=undefined}if(!(u.singleFileUploads||g||k)||!this._isXHRUpload(u)){r=[f];d=[n]}else{if(!(u.singleFileUploads||k)&&g){r=[];d=[];for(l=0;l<s;l+=g){r.push(f.slice(l,l+g));c=n.slice(l,l+g);if(!c.length){c=n}d.push(c)}}else{if(!u.singleFileUploads&&k){r=[];d=[];for(l=0;l<s;l=l+1){o+=f[l].size+t;if(l+1===s||((o+f[l+1].size+t)>k)||(g&&l+1-h>=g)){r.push(f.slice(h,l+1));c=n.slice(h,l+1);if(!c.length){c=n}d.push(c);h=l+1;o=0}}}else{d=n}}}m.originalFiles=f;b.each(r||f,function(e,i){var j=b.extend({},m);j.files=r?i:[i];j.paramName=d[e];p._initResponseObject(j);p._initProgressObject(j);p._addConvenienceMethods(q,j);v=p._trigger("add",b.Event("add",{delegatedEvent:q}),j);return v});return v},_replaceFileInput:function(f){var c=f.fileInput,d=c.clone(true),e=c.is(document.activeElement);f.fileInputClone=d;b("<form></form>").append(d)[0].reset();c.after(d).detach();if(e){d.focus()}b.cleanData(c.unbind("remove"));this.options.fileInput=this.options.fileInput.map(function(g,h){if(h===c[0]){return d[0]}return h});if(c[0]===this.element[0]){this.element=d}},_handleFileTreeEntry:function(h,j){var e=this,i=b.Deferred(),d=function(l){if(l&&!l.entry){l.entry=h}i.resolve([l])},f=function(l){e._handleFileTreeEntries(l,j+h.name+"/").done(function(m){i.resolve(m)}).fail(d)},g=function(){k.readEntries(function(l){if(!l.length){f(c)}else{c=c.concat(l);g()}},d)},k,c=[];j=j||"";if(h.isFile){if(h._file){h._file.relativePath=j;i.resolve(h._file)}else{h.file(function(l){l.relativePath=j;i.resolve(l)},d)}}else{if(h.isDirectory){k=h.createReader();g()}else{i.resolve([])}}return i.promise()},_handleFileTreeEntries:function(c,e){var d=this;return b.when.apply(b,b.map(c,function(f){return d._handleFileTreeEntry(f,e)})).then(function(){return Array.prototype.concat.apply([],arguments)})},_getDroppedFiles:function(d){d=d||{};var c=d.items;if(c&&c.length&&(c[0].webkitGetAsEntry||c[0].getAsEntry)){return this._handleFileTreeEntries(b.map(c,function(f){var e;if(f.webkitGetAsEntry){e=f.webkitGetAsEntry();if(e){e._file=f.getAsFile()}return e}return f.getAsEntry()}))}return b.Deferred().resolve(b.makeArray(d.files)).promise()},_getSingleFileInputFiles:function(e){e=b(e);var c=e.prop("webkitEntries")||e.prop("entries"),d,f;if(c&&c.length){return this._handleFileTreeEntries(c)}d=b.makeArray(e.prop("files"));if(!d.length){f=e.prop("value");if(!f){return b.Deferred().resolve([]).promise()}d=[{name:f.replace(/^.*\\/,"")}]}else{if(d[0].name===undefined&&d[0].fileName){b.each(d,function(g,h){h.name=h.fileName;h.size=h.fileSize})}}return b.Deferred().resolve(d).promise()},_getFileInputFiles:function(c){if(!(c instanceof b)||c.length===1){return this._getSingleFileInputFiles(c)}return b.when.apply(b,b.map(c,this._getSingleFileInputFiles)).then(function(){return Array.prototype.concat.apply([],arguments)})},_onChange:function(f){var c=this,d={fileInput:b(f.target),form:b(f.target.form)};this._getFileInputFiles(d.fileInput).always(function(e){d.files=e;if(c.options.replaceFileInput){c._replaceFileInput(d)}if(c._trigger("change",b.Event("change",{delegatedEvent:f}),d)!==false){c._onAdd(f,d)}})},_onPaste:function(f){var c=f.originalEvent&&f.originalEvent.clipboardData&&f.originalEvent.clipboardData.items,d={files:[]};if(c&&c.length){b.each(c,function(e,h){var g=h.getAsFile&&h.getAsFile();if(g){d.files.push(g)}});if(this._trigger("paste",b.Event("paste",{delegatedEvent:f}),d)!==false){this._onAdd(f,d)}}},_onDrop:function(g){g.dataTransfer=g.originalEvent&&g.originalEvent.dataTransfer;var c=this,f=g.dataTransfer,d={};if(f&&f.files&&f.files.length){g.preventDefault();this._getDroppedFiles(f).always(function(e){d.files=e;if(c._trigger("drop",b.Event("drop",{delegatedEvent:g}),d)!==false){c._onAdd(g,d)}})}},_onDragOver:a("dragover"),_onDragEnter:a("dragenter"),_onDragLeave:a("dragleave"),_initEventHandlers:function(){if(this._isXHRUpload(this.options)){this._on(this.options.dropZone,{dragover:this._onDragOver,drop:this._onDrop,dragenter:this._onDragEnter,dragleave:this._onDragLeave});this._on(this.options.pasteZone,{paste:this._onPaste})}if(b.support.fileInput){this._on(this.options.fileInput,{change:this._onChange})}},_destroyEventHandlers:function(){this._off(this.options.dropZone,"dragenter dragleave dragover drop");this._off(this.options.pasteZone,"paste");this._off(this.options.fileInput,"change")},_setOption:function(c,d){var e=b.inArray(c,this._specialOptions)!==-1;if(e){this._destroyEventHandlers()}this._super(c,d);if(e){this._initSpecialOptions();this._initEventHandlers()}},_initSpecialOptions:function(){var c=this.options;if(c.fileInput===undefined){c.fileInput=this.element.is('input[type="file"]')?this.element:this.element.find('input[type="file"]')}else{if(!(c.fileInput instanceof b)){c.fileInput=b(c.fileInput)}}if(!(c.dropZone instanceof b)){c.dropZone=b(c.dropZone)}if(!(c.pasteZone instanceof b)){c.pasteZone=b(c.pasteZone)}},_getRegExp:function(e){var d=e.split("/"),c=d.pop();d.shift();return new RegExp(d.join("/"),c)},_isRegExpOption:function(c,d){return c!=="url"&&b.type(d)==="string"&&/^\/.*\/[igm]{0,3}$/.test(d)},_initDataAttributes:function(){var d=this,c=this.options,e=this.element.data();b.each(this.element[0].attributes,function(g,f){var h=f.name.toLowerCase(),i;if(/^data-/.test(h)){h=h.slice(5).replace(/-[a-z]/g,function(j){return j.charAt(1).toUpperCase()});i=e[h];if(d._isRegExpOption(h,i)){i=d._getRegExp(i)}c[h]=i}})},_create:function(){this._initDataAttributes();this._initSpecialOptions();this._slots=[];this._sequence=this._getXHRPromise(true);this._sending=this._active=0;this._initProgressObject(this);this._initEventHandlers()},active:function(){return this._active},progress:function(){return this._progress},add:function(d){var c=this;if(!d||this.options.disabled){return}if(d.fileInput&&!d.files){this._getFileInputFiles(d.fileInput).always(function(e){d.files=e;c._onAdd(null,d)})}else{d.files=b.makeArray(d.files);this._onAdd(null,d)}},send:function(g){if(g&&!this.options.disabled){if(g.fileInput&&!g.files){var e=this,c=b.Deferred(),h=c.promise(),d,f;h.abort=function(){f=true;if(d){return d.abort()}c.reject(null,"abort","abort");return h};this._getFileInputFiles(g.fileInput).always(function(i){if(f){return}if(!i.length){c.reject();return}g.files=i;d=e._onSend(null,g);d.then(function(j,l,k){c.resolve(j,l,k)},function(j,l,k){c.reject(j,l,k)})});return this._enhancePromise(h)}g.files=b.makeArray(g.files);if(g.files.length){return this._onSend(null,g)}}return this._getXHRPromise(false,g&&g.context)}})}));


/*
 * New edition of Peafowl JS for uploads.ru
 *
 * Created: 24.07.2017, Changed: 27.07.2017
 *
 * Author: Alex_63 <http://forum.mybb.ru/profile.php?id=32995>
 * with parts from code by Rodolfo Berrios <http://rodolfoberrios.com/>
 */
$(function() {

/*
1. В верстке заменить #uploadify на #upload-input
2. Добавить стиль для модальных окон в css файл
*/
	
	/*************************************
	       VARIABLES 
	*************************************/
	var base_url				= "./";

	var uploadID				= "#upload";
	var upload_action 			= "#upload-action";
	var active_class 			= "active";
	var error_box 				= "#error-box";
	var error_boxID 			= error_box.substr(1); // Don't edit
	/* upload selector */
	var select_remote 			= "#select-remote";
	var select_local 			= "#select-local";
	var upload_local 			= "#upload-local";
	var upload_remote 			= "#upload-remote";
	/* tools */
	var preferences 			= "#preferences";
	var preferences_box 		= "#preferences-box";
	var upload_button 			= "#upload-button";
	var pref_shorturl 			= "#pref-shorturl";
	/* inputs */
	var url_input 				= "#url";
	var resize_image_input 		= "#resize-image";
	var resize_thumb_input 		= "#resize-thumb";
	var preferences_box_input 	= preferences_box + " input";
	/* boxes */
	var upload_remote 			= "#upload-remote";
	var resizing 				= "#resizing";
	/* resize switch */
	var resizing_switch 		= "#resizing-switch";
	var resizing_box 			= "#resizing-box";
	/* uploader */
	var upload_input			= "#upload-input";
	var fileQueue 				= "#fileQueue";
	/* messages */
	var cancel_upload_msg 		= "Вы уверены, что хотите остановить процесс загрузки?";
	var empty_form_msg 			= "Вы должны заполнить форму, чтобы продолжить";
	var local_error_msg 		= "Выберите изображение для загрузки";
	/* txt */
	var just_uploaded_txt 		= "Загружено";
	var txt_viewing 			= "Просмотр";
	var images_txt 				= "изображений";
	/* misc */
	var cancel_upload 			= "#cancel-upload";
	var empty_upload_class 		= "empty-upload";
	var error_class 			= "error";
	var show_upload_class 		= "show_upload";
	var hide_upload_class 		= "hide_upload";
	var uploading_class 		= "uploading";
	/* uploaded_list */
	var content 				= "#content";
	var uploaded_list 			= "#uploaded_list";
	var viewing 				= "#viewing";
	var imgWeight 				= "#imgWeight";
	var imgDimentions 			= "#imgDimentions"
	var view_full_image 		= "#view-full-image";
	var img_full_image 			= "img#full_image";
	var socialize 				= "#socialize";
	var short_url 				= "#short-url";
	var loading_changeID 		= "loading";
	/* multicodes */
	var multi_codes 			= "multi-codes";

	/* function getCookie for url-shortening */
	function $getCookie(a) {
		var c = new RegExp(encodeURIComponent(a) + '=([^;]){1,}').exec(document.cookie);
		return (c ? c[0].split('=')[1] : false)
	};

	// Shake fn
	$.fn.shake = function() {
		return this.each(function(init) {
			var jqNode = $(this), x = 1;
			jqNode.css({position: 'relative'});
			for (; x <= 2; x++) {
				jqNode.animate({left: -10}, 0).animate({left: 0}, 30).animate({left: 10}, 30).animate({left: 0}, 30);
			}
		});
	};

	// Exists fn
	$.fn.exists = function() {
		return !!$(this).length;
	};

	/* Form reset */
	if (uploadID && $(uploadID)[0]) $(uploadID)[0].reset();

	/* Pop-ups opening */
	$("a[rel='pop-up']").live("click", function() {
		if ($(this).attr("target") !== "_blank") {
			var pop_w = '650';
			var pop_h = (typeof $(this).attr("data-height") !== "undefined") ? $(this).attr("data-height") : '350';
			var pop_left = (screen.width / 2) - (pop_w / 2);
			var pop_top = (screen.height / 2) - (pop_h / 2);
			var settings = "height=" + pop_h + ", width=" + pop_w + ", scrollTo, resizable=0, scrollbars=0, location=0, top=" + pop_top + ", left=" + pop_left;
			window.open(this.href, 'Popup', settings);
			return false;
		}
	});

	/* function Showing Errors */
	var errorTimer;
	function errorShow(errorMsg, errorClass) {
		var errHTML = '<div id="' + error_boxID + '" class="' + errorClass + '"><a id="error"><span>' + errorMsg + '</span></a></div>';
		$(error_box).length ? $(error_box).replaceWith(errHTML) : $(uploadID).prepend(errHTML), $(error_box).slideDown();
		clearTimeout(errorTimer); errorTimer = setTimeout(errorClick, 5000);
	};

	/* function Error Click */
	function errorClick() {
		$(error_box).slideUp(250, function() { $(error_box).remove() });
	};
	$(error_box).live('click', function() {
		errorClick();
	});

	/* function Cancel image upload */
	window.cancelImageUpload = function(sel, slide){
		var item = $(sel).parents('.uploadQueueItem');
		if (item.children('button').hasClass('startedUpload')) {
			item.children('button').click();
		}
		slide ? item.slideUp(300, function() {item.remove();}) : item.remove();
	}

	/* function Reactivate Upload */
	function reactivateUpload() {
		$(upload_button).html('<span>Загрузить</span>').removeClass(uploading_class);
		$(cancel_upload).css('display', 'none');
		$([preferences_box_input, resize_image_input, resize_thumb_input, url_input].join(",")).removeAttr('disabled');
		$(upload_action).fadeIn();
		$(fileQueue+" .uploadQueueItem").each(function(){var cb = $(this).find(".cancel"); cancelImageUpload(cb);});
		$(url_input).val("");
	};

	/* change functions (for multi-view) */
	function change_html_txt(selector, search, replace) {
		$(selector).html($(selector).html().replace(search, replace));
	}

	function change_attr(selector, attr, search, replace) {
		$(selector).attr(attr, $(selector).attr(attr).replace(search, replace));
	}

	/* Select inputs */
	$(".image-tools-section input, #multi-codes textarea").live("click focus", function() {
		this.focus(); this.select();
	});

	/* function Show Images Group */
	function showImagesGroup(ImagesObj) {
		var ImagesCount = Object.keys(ImagesObj).length;

		/* Multi-codes */
		var multi_codes_array = {
			"direct-links": "Просмотр",
			"thumb-bb-codes": "BBcode превью",
			"html-thumb-codes": "HTML коды превью"
		};
		var multi_codes_textarea = {
			"direct-links": "",
			"thumb-bb-codes": "",
			"html-thumb-codes": ""
		};

		/* Process the ImagesObj */
		var multiupload_thumbs = "";
		$.each(ImagesObj, function(key, value) {
			multiupload_thumbs += '<img src="' + value.thumb_url + '" id="' + key + '" />';
			multi_codes_textarea["direct-links"] += value.img_view + "\n";
			multi_codes_textarea["thumb-bb-codes"] += "[url=" + value.img_view + "][img]" + value.thumb_url + "[/img][/url]" + "\n";
			multi_codes_textarea["html-thumb-codes"] += '&lt;a href="' + value.img_view + '"&gt;&lt;img src="' + value.thumb_url + '" border="0" /&gt;&lt;/a&gt;' + "\n";
		});

		var multi_codes_options = '';
		$.each(multi_codes_array, function(key, value) {
			multi_codes_options += '<option value="' + key + '">' + value + '</option>';
		});
		var multi_codes_select = '<select>' + multi_codes_options + '</select>'

		if ($('#image_tools').length > 0) {
			$(content).prepend('<h2>' + txt_viewing + ' ' + ImagesCount + ' ' + images_txt + '</h2><div id="' + multi_codes + '">' + multi_codes_select + '<textarea readonly="readonly"></textarea></div><div id="uploaded"><div id="uploaded_list">' + multiupload_thumbs + '</div></div>');
		}

		$(uploaded_list + " img:first-child").addClass('active');

		$("#" + multi_codes + " textarea").html($.trim(multi_codes_textarea[$("#" + multi_codes + " select option:selected").val()]));
		$("#" + multi_codes + " select").change(function() {
			$("#" + multi_codes + " textarea").html($.trim(multi_codes_textarea[$(this).children(':selected').attr('value')]));
		});

		$(uploaded_list + " img").click(function() {
			var imgActive = uploaded_list + " img.active";
			var imgActiveID = $(imgActive).attr('id');
			var new_imgActiveID = $(this).attr('id');
			var imgObject = ImagesObj[imgActiveID];
			var img_new_Object = ImagesObj[new_imgActiveID];

			var ChangedIDs = ["viewer-link", "html-code", "bb-code-thumb"];
			$.each(ChangedIDs, function() {
				var iURLReplace = new RegExp(imgObject.img_url, 'g');
				$("#" + this).val($("#" + this).val().replace(iURLReplace, img_new_Object.img_url, "g"));
				var tURLReplace = new RegExp(imgObject.thumb_url, 'g');
				$("#" + this).val($("#" + this).val().replace(tURLReplace, img_new_Object.thumb_url, "g"));
				var iNameReplace = new RegExp(imgObject.img_name, 'g');
				$("#" + this).val($("#" + this).val().replace(iNameReplace, img_new_Object.img_name, "g"));
			});
			$(short_url).val(img_new_Object.short_url);

			change_html_txt(viewing + " a", imgObject.img_name, img_new_Object.img_name);
			change_html_txt(imgDimentions, imgObject.img_width, img_new_Object.img_width);
			change_html_txt(imgDimentions, imgObject.img_height, img_new_Object.img_height);

			change_attr(viewing + " a", "href", imgObject.thumb_url.replace('t/default.htm', 'd/default.htm'), img_new_Object.thumb_url.replace('t/default.htm', 'd/default.htm'));
			change_attr(view_full_image + " a", "href", imgObject.img_url, img_new_Object.img_url);
			change_attr(socialize + " a", "href", imgObject.img_name, img_new_Object.img_name);

			$(imgWeight).html(img_new_Object.img_size);

			file_ext = img_new_Object.img_url.split('.').pop();
			$(view_full_image + " img").attr("src", (file_ext == 'psd' || file_ext == 'tiff' || file_ext == 'pdf' || file_ext == 'bmp' ? img_new_Object.thumb_url : img_new_Object.img_url));
			$(view_full_image + " a").attr("target", (file_ext == 'psd' || file_ext == 'tiff' || file_ext == 'pdf' || file_ext == 'bmp' ? "_self" : "_blank"));

			change_attr(view_full_image + " img", "alt", imgObject.img_name, img_new_Object.img_name);

			$(imgActive).removeClass('active');
			$(this).addClass('active');

			$(viewing).append('<span id="' + loading_changeID + '"></span>');

		});

		$(img_full_image).bind('load', function() {
			$("#" + loading_changeID).fadeOut(500, function() {
				$(this).remove();
			});
		});
	};

	/* function Add Style link for loadURL() */
	function addStyle(url) {
		$("head").append('<link href="'+url+'" rel="stylesheet" type="text/css" />');
	};

	/* function Load URL */
	function loadURL(url, img_obj) {
		$.get(base_url+url, function(data) {
			var content = $(data).find("#content").html();
			var title = data.match(/<title>(.+?)<\/title>/)[1];
			document.title = title;
			$("#content").empty().append(content);
			if (!url.match(/\/\?g=/)) {
				$("#content").css("padding-top","14px");
			} else if(img_obj) {
				showImagesGroup(img_obj);
			}
			$('#viewing a').attr('href',function() {return this.href.replace(/\.ru\/(\/d)?/,'.ru/d/')});
			$.each([base_url+'/content/themes/Peafowl/jquery-fullsizable.css',base_url+'/content/themes/Peafowl/jquery-fullsizable-theme.css'], function(i,link) {
				addStyle(link);
			});
			$.getScript(base_url+'/content/system/js/jquery-fullsizable.min.js',function() {
				$('a.fullsizable').fullsizable({detach_id: 'wrap'});
				$('img').live('contextmenu', function(e){ return false; });
				$('a.fullsizable').live('contextmenu', function(e){ return false; });
			});
			$.get(base_url+'/content/system/js/vars.php');
			history.pushState(null, null, 'http://' + location.hostname + url);
		});
	}

	/* function isUploading */
	function isUploading() {
		return $(upload_button).hasClass(uploading_class);
	}

	/* popstate event */
	window.onpopstate = function() {
		window.location.reload();
	};

	/* Select uploading from remote or local */
	$([select_remote,select_local].join(",")).click(function() {
		if (!isUploading()) $([upload_local,upload_remote].join(",")).toggle(),$([select_local,select_remote].join(",")).toggleClass(active_class);
	});

	/* toggle Preferences box */
	$(preferences).click(function() {
		if (!isUploading()) $(preferences_box).slideToggle("normal"),$(this).toggleClass(active_class);
	});

	/* Toggle short-url feature */
	$(pref_shorturl).prop('checked', !!Number($getCookie('doShort')));
	$(pref_shorturl).change(function(){
		$.get(base_url+'/content/system/js/pref.php',{'doShort':$(this).prop('checked')?'1':'0'});
	});
	
	/* Resize settings toggle */
	$(resizing_switch+" a").click(function() {
		if(!isUploading()) $(resizing_box).slideToggle("normal"),$(this).toggleClass(active_class);
	});
	
	/* Validate input fields */	
	$(uploadID).validate({
		rules: {
			url : {
				required: false,
				url: true
			},
			resize: {
				required: false,
				digits: true,
				min: 16,
				max: 1920                
			},
			thumb_width: {
				required: false,
				digits: true,
				min: 16,
				max: 800                
			}
		},
		messages: {
			url: false,
			resize: false,
			thumb_width: false
		}
	});

	/* Uploading */
	$(upload_button).click(function () {
		if($(fileQueue).text()!=='' || $(url_input).val()!=='') {
			if($(fileQueue).text()!=='') $(url_input).removeClass(error_class);
			
			if(!$(this).hasClass(uploading_class) && !$(resize_image_input).hasClass(error_class) && !$(resize_thumb_input).hasClass(error_class) && !$(url_input).hasClass(error_class)) {
				errorClick();
				$(this).addClass(uploading_class);
				$(this).html('<span class="'+uploading_class+'"><b>Uploading</b></span>');
				$(cancel_upload).fadeIn();	
				$([preferences_box_input,resize_image_input,resize_thumb_input,url_input].join(',')).attr('disabled', 'disabled');
				
				// Start uploading:
				if($(fileQueue).text().length) {
					var formData = {'sID': SessionID, 'doShort': ($(pref_shorturl).prop('checked') ? 1 : 0), 'resize_width': $(resize_image_input).val(), 'thumb_width': $(resize_thumb_input).val()};
					$(upload_input).fileupload('option', 'formData', formData);
					$(fileQueue+' .uploadQueueItem').not('.error').filter(':first').addClass('process').find('.btn.fileupload').click();
				} else {
					var imageData = { url: $(url_input).val(), resize_width: $(resize_image_input).val(), thumb_width: $(resize_thumb_input).val()};
					$.post(base_url+'/upload.php', imageData, function(response) {
						if (response.error) {
							errorShow(response.errorMsg);
							reactivateUpload();
						} else {
							loadURL('./'+response.ImgName);
						}
					}, 'json');
				}
			} else { // If there are errors, shake the elements:
				if($([resize_image_input,resize_thumb_input].join(',')).hasClass(error_class)) {
					$(resizing).shake();
				}
				if($(url_input).hasClass(error_class)) {
					$(upload_remote).shake();
				}
			}			
		} else {
			if($(error_box).hasClass(empty_upload_class)) {
				$(error_box).shake();
			} else {
				if($(error_box).text()=='') {
					errorShow(empty_form_msg, empty_upload_class);
				} else {
					$(error_box+' span').html(empty_form_msg);
					$(error_box).addClass(empty_upload_class);
				}				
			}
		}
	});
	
	/* Cancel Uploading */
	$(cancel_upload).live("click", function () {
		if(confirm(cancel_upload_msg)) reactivateUpload();
	});

	/* Showing Multi-uploaded images */
	if (window.ImagesObj) {
		showImagesGroup(ImagesObj);
	}

	/* Adding files to queue when loading from local device */
	var fileTypeRegExp = /(\.|\/)(gif|jpe?g|png|bmp|tiff|psd|pdf|svg)$/i;
	var uploadButton = $('<button/>').hide().addClass('btn fileupload').prop('disabled', true);
	var maxNumberOfFiles = 100;
	var maxFileSize = 10485760;
	var groupName = '';
	var imagesUp = '';
	var imagesLoaded = {};
	$(upload_input).fileupload({
		url					: base_url+'/api',
		dataType			: 'json',
		maxNumberOfFiles	: maxNumberOfFiles,
		autoUpload			: false,
		acceptFileTypes		: fileTypeRegExp,
		maxFileSize			: maxFileSize,
		previewCrop			: true,
		sequentialUploads	: true,
		progressInterval	: 2,
		bitrateInterval		: 2
	}).on('fileuploadadd',function(e,data){
		$.each(data.files,function(index,file){
			if (file.size > maxFileSize) {
				errorShow('Размер файла <strong>' + file.name + '</strong> превышает максимально допустимый (10 MB).');
				return false;
			}
			if (!file.name.match(fileTypeRegExp)) {
				errorShow('Недопустимый тип файла <strong>' + file.name + '</strong>.');
				return false;
			}
			var rnd = Math.random().toString().substr(6);
			var size = file.size / 1024, suffix = 'kB';
			if (size < 10 && size > 1) size = Number(size).toFixed(1);
			else if (size < 1) { size = file.size; suffix = 'bytes'; }
			else size = Math.round(size);
			if (size > 1000) { size = Math.round(size *.001 * 100) * .01; suffix = 'MB'; }
			size = Number(size).toFixed(1) + ' ' + suffix;
			file.uploadID = 'f' + rnd;
			var fileAdd = $('<div class="uploadQueueItem" id="upload_f'+rnd+'" data-name="'+file.name+'" data-modified="'+file.lastModified+'"><span class="cancel"></span><span class="fileName">'+(file.name.length<=25?file.name:file.name.substr(0,22)+'...')+' <span class="fileSize">('+size+')</span></span><span class="status"></span><div class="uploadProgress"><div class="uploadProgressBar"><!-- --></div></div></div>');
			var jqXHR;
			fileAdd.append(uploadButton.clone(true).on('click', function () {
				var $this = $(this);
				$this.addClass('startedUpload').off('click');
				jqXHR = data.submit().always(function () {
					$this.remove();
				});
			}).attr('id','btn-f'+rnd));
			fileAdd.find('.cancel').on('click',function(e){
				e.preventDefault();
				if (jqXHR) jqXHR.abort();
				cancelImageUpload(e.target, true);
			});
			if ($(fileQueue+' > div').length < maxNumberOfFiles && $('.uploadQueueItem[data-modified="'+file.lastModified+'"][data-name="'+file.name+'"]').length == 0) 
				$(fileQueue).append(fileAdd);
			$(fileQueue+' .error').remove();
		});
	}).on('fileuploadprogress',function(e,data){
		var fileID = data.files[0].uploadID;
		var progress = parseInt(data.loaded / data.total * 100, 10);
		$('#upload_'+fileID).find('.uploadProgressBar').css('width',progress+'%');
		$('#upload_'+fileID).find('.status').text(' - '+progress+'%');
		if (progress == 100) $('#upload_'+fileID).find('.uploadProgress').addClass('hidden');
	}).on('fileuploaddone',function(e,data){
		var file = data.result.data;
		var fileID = data.files[0].uploadID;
		var queueItem = $('#upload_'+fileID);
		if (queueItem.next().not('.error').length)
			queueItem.next().addClass('process').children('.btn').click();
		if (file) {
			queueItem.removeClass('process').addClass('success').find('.cancel').replaceWith('<span class="completed"></span>');
			imagesUp += file.img_name;
			if (!groupName) groupName = file.img_name;
			imagesLoaded[file.img_name.replace('.','')] = file; //Adding to multi-upload object
		}
		else if (data.result.status_code != '200') {
			$('#upload_'+fileID).removeClass('process').addClass('error').find('.status').text(' - '+data.result.status_txt)
				.end().find('.uploadProgress').addClass('hidden');
		}
		if ($('.uploadQueueItem', fileQueue).not('.success').length==0 && imagesUp) {
			if ($('.uploadQueueItem', fileQueue).length > 1) {
				loadURL('/?g='+groupName,imagesLoaded);
			} else {
				loadURL('./'+imagesUp);
			}
		} else if (imagesUp == '') {
			errorShow(local_error_msg);
		}
	}).on('fileuploadfail', function(e,data){
		if (!data.errorThrown)
			data.errorThrown = 'Unknown Error';
		if (data.files[0].uploadID) {
			var fileID = data.files[0].uploadID;
			if ($('#upload_'+fileID).next().not('.error').length)
				$('#upload_'+fileID).next().addClass('process').children('.btn').click();
			$('#upload_'+fileID).removeClass('process').addClass('error').find('.status').text(' - '+data.errorThrown)
				.end().find('.uploadProgress').addClass('hidden');
		}
	});

});
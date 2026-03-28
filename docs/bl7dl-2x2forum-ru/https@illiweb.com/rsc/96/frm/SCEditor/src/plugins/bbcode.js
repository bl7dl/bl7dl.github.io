(function($,window,document){'use strict';$.sceditor.BBCodeParser=function(options){if(!(this instanceof $.sceditor.BBCodeParser))
return new $.sceditor.BBCodeParser(options);var base=this;var init,tokenizeTag,tokenizeAttrs,parseTokens,normaliseNewLines,fixNesting,isChildAllowed,removeEmpty,fixChildren,convertToHTML,convertToBBCode,hasTag,quote,lower,last;var tokenType={open:'open',content:'content',newline:'newline',close:'close'};if(Object.freeze)
Object.freeze(tokenType);var TokenizeToken=function(type,name,val,attrs,children,closing){var base=this;base.type=type;base.name=name;base.val=val;base.attrs=attrs||{};base.children=children||[];base.closing=closing||null;};TokenizeToken.prototype={clone:function(includeChildren){var base=this;return new TokenizeToken(base.type,base.name,base.val,base.attrs,includeChildren?base.children:[],base.closing?base.closing.clone():null);},splitAt:function(splitAt){var clone,base=this,splitAtLength=0,childrenLen=base.children.length;if(typeof object!=="number")
splitAt=$.inArray(splitAt,base.children);if(splitAt<0||splitAt>childrenLen)
return null;while(childrenLen--)
{if(childrenLen>=splitAt)
splitAtLength++;else
childrenLen=0;}
clone=base.clone();clone.children=base.children.splice(splitAt,splitAtLength);return clone;}};init=function(){base.opts=$.extend({},$.sceditor.BBCodeParser.defaults,options);base.bbcodes=$.sceditor.plugins.bbcode.bbcodes;};base.tokenize=function(str){var matches,type,i,toks=[],tokens=[{type:'close',regex:/^\[\/[^\[\]]+\]/},{type:'open',regex:/^\[[^\[\]]+\]/},{type:'newline',regex:/^(\r\n|\r|\n)/},{type:'content',regex:/^([^\[\r\n]+|\[)/}];tokens.reverse();strloop:while(str.length)
{i=tokens.length;while(i--)
{type=tokens[i].type;if(!(matches=str.match(tokens[i].regex))||!matches[0])
continue;toks.push(tokenizeTag(type,matches[0]));str=str.substr(matches[0].length);continue strloop;}
if(str.length)
toks.push(tokenizeTag(tokenType.content,str));str="";}
return toks;};tokenizeTag=function(type,val){var matches,attrs,name;if(type==="open"&&(matches=val.match(/\[([^\]\s=\(]+)(?:([^\]]+))?\]/)))
{name=lower(matches[1]);if(matches[2]&&(matches[2]=$.trim(matches[2])))
attrs=tokenizeAttrs(matches[2]);}
else if(type==="close"&&(matches=val.match(/\[\/([^\[\]]+)\]/)))
name=lower(matches[1]);else if(type==="newline")
name='#newline';if(!name||(type==="open"||type==="close")&&!$.sceditor.plugins.bbcode.bbcodes[name])
{type='content';name='#';}
return new TokenizeToken(type,name,val,attrs);};tokenizeAttrs=function(attrs){var matches,atribsRegex=/([^\s=]+)=(?:(?:(["'])((?:\\\2|[^\2])*?)\2)|((?:.(?!\s\S+=))*.))/g,unquote=$.sceditor.plugins.bbcode.stripQuotes,ret={};if(attrs.charAt(0)==="="&&attrs.indexOf('=',1)<0)
{ret.defaultattr=unquote(attrs.substr(1));}
else if(attrs.charAt(0)==="("&&attrs.charAt(attrs.length-1)===")")
{ret.defaultattr=attrs;}
else
{if(attrs.charAt(0)==="=")
attrs="defaultattr"+ attrs;while((matches=atribsRegex.exec(attrs)))
ret[lower(matches[1])]=unquote(matches[3])||matches[4];}
return ret;};base.parse=function(str,preserveNewLines){var ret=parseTokens(base.tokenize(str));if(base.opts.fixInvalidChildren)
fixChildren(ret);if(base.opts.removeEmptyTags)
removeEmpty(ret);if(base.opts.fixInvalidNesting)
fixNesting(ret);normaliseNewLines(ret,null,preserveNewLines);if(base.opts.removeEmptyTags)
removeEmpty(ret);return ret;};hasTag=function(name,type,arr){var i=arr.length;while(i--)
if(arr[i].type===type&&arr[i].name===name)
return true;return false;};isChildAllowed=function(parent,child){var bbcode=parent?base.bbcodes[parent.name]:null,allowedChildren=bbcode?bbcode.allowedChildren:null;if(!base.opts.fixInvalidChildren||!allowedChildren)
return true;if(allowedChildren&&$.inArray(child.name||'#',allowedChildren)<0)
return false;return true;};parseTokens=function(toks){var token,bbcode,curTok,clone,i,previous,next,cloned=[],output=[],openTags=[],currentOpenTag=function(){return last(openTags);},addTag=function(token){if(currentOpenTag())
currentOpenTag().children.push(token);else
output.push(token);},closesCurrentTag=function(name){return currentOpenTag()&&(bbcode=base.bbcodes[currentOpenTag().name])&&bbcode.closedBy&&$.inArray(name,bbcode.closedBy)>-1;};while((token=toks.shift()))
{next=toks[0];switch(token.type)
{case tokenType.open:if(closesCurrentTag(token.name))
openTags.pop();addTag(token);bbcode=base.bbcodes[token.name];if((!bbcode||!bbcode.isSelfClosing)&&(bbcode.closedBy||hasTag(token.name,tokenType.close,toks)))
openTags.push(token);else if(!bbcode||!bbcode.isSelfClosing)
token.type=tokenType.content;break;case tokenType.close:if(currentOpenTag()&&token.name!==currentOpenTag().name&&closesCurrentTag('/'+ token.name))
openTags.pop();if(currentOpenTag()&&token.name===currentOpenTag().name)
{currentOpenTag().closing=token;openTags.pop();}
else if(hasTag(token.name,tokenType.open,openTags))
{while((curTok=openTags.pop()))
{if(curTok.name===token.name)
{curTok.closing=token;break;}
clone=curTok.clone();if(cloned.length>1)
clone.children.push(last(cloned));cloned.push(clone);}
addTag(last(cloned));i=cloned.length;while(i--)
openTags.push(cloned[i]);cloned.length=0;}
else
{token.type=tokenType.content;addTag(token);}
break;case tokenType.newline:if(currentOpenTag()&&next&&closesCurrentTag((next.type===tokenType.close?'default.htm':'')+ next.name))
{if(!(next.type===tokenType.close&&next.name===currentOpenTag().name))
{bbcode=base.bbcodes[currentOpenTag().name];if(bbcode&&bbcode.breakAfter)
openTags.pop();else if(bbcode&&bbcode.isInline===false&&base.opts.breakAfterBlock&&bbcode.breakAfter!==false)
openTags.pop();}}
addTag(token);break;default:addTag(token);break;}
previous=token;}
return output;};normaliseNewLines=function(children,parent,onlyRemoveBreakAfter){var token,left,right,parentBBCode,bbcode,removedBreakEnd,removedBreakBefore,remove,childrenLength=children.length,i=childrenLength;if(parent)
parentBBCode=base.bbcodes[parent.name];while(i--)
{if(!(token=children[i]))
continue;if(token.type===tokenType.newline)
{left=i>0?children[i- 1]:null;right=i<childrenLength- 1?children[i+1]:null;remove=false;if(!onlyRemoveBreakAfter&&parentBBCode&&parentBBCode.isSelfClosing!==true)
{if(!left)
{if(parentBBCode.isInline===false&&base.opts.breakStartBlock&&parentBBCode.breakStart!==false)
remove=true;if(parentBBCode.breakStart)
remove=true;}
else if(!removedBreakEnd&&!right)
{if(parentBBCode.isInline===false&&base.opts.breakEndBlock&&parentBBCode.breakEnd!==false)
remove=true;if(parentBBCode.breakEnd)
remove=true;removedBreakEnd=remove;}}
if(left&&left.type===tokenType.open)
{if((bbcode=base.bbcodes[left.name]))
{if(!onlyRemoveBreakAfter)
{if(bbcode.isInline===false&&base.opts.breakAfterBlock&&bbcode.breakAfter!==false)
remove=true;if(bbcode.breakAfter)
remove=true;}
else if(bbcode.isInline===false)
remove=true;}}
if(!onlyRemoveBreakAfter&&!removedBreakBefore&&right&&right.type===tokenType.open)
{if((bbcode=base.bbcodes[right.name]))
{if(bbcode.isInline===false&&base.opts.breakBeforeBlock&&bbcode.breakBefore!==false)
remove=true;if(bbcode.breakBefore)
remove=true;removedBreakBefore=remove;if(remove)
{children.splice(i,1);continue;}}}
if(remove)
children.splice(i,1);removedBreakBefore=false;}
else if(token.type===tokenType.open)
normaliseNewLines(token.children,token,onlyRemoveBreakAfter);}};fixNesting=function(children,parents,insideInline,rootArr){var token,i,parent,parentIndex,parentParentChildren,right,isInline=function(token){var bbcode=base.bbcodes[token.name];return!bbcode||bbcode.isInline!==false;};parents=parents||[];rootArr=rootArr||children;for(i=0;i<children.length;i++)
{if(!(token=children[i])||token.type!==tokenType.open)
continue;if(!isInline(token)&&insideInline)
{parent=last(parents);right=parent.splitAt(token);parentParentChildren=parents.length>1?parents[parents.length- 2].children:rootArr;if((parentIndex=$.inArray(parent,parentParentChildren))>-1)
{right.children.splice($.inArray(token,right.children),1);parentParentChildren.splice(parentIndex+1,0,token,right);return;}}
parents.push(token);fixNesting(token.children,parents,insideInline||isInline(token),rootArr);parents.pop(token);}};fixChildren=function(children,parent){var token,args,i=children.length;while(i--)
{if(!(token=children[i]))
continue;if(!isChildAllowed(parent,token))
{token.name=null;token.type=tokenType.content;if(isChildAllowed(parent,token))
{args=[i+1,0].concat(token.children);if(token.closing)
{token.closing.name=null;token.closing.type=tokenType.content;args.push(token.closing);}
i+=args.length- 1;Array.prototype.splice.apply(children,args);}
else
parent.children.splice(i,1);}
if(token.type===tokenType.open)
fixChildren(token.children,token);}};removeEmpty=function(tokens){var token,bbcode,allWhiteSpace,i=tokens.length;allWhiteSpace=function(children){var j=children.length;while(j--)
{if(children[j].type===tokenType.open)
return false;if(children[j].type===tokenType.close)
return false;if(children[j].type===tokenType.content&&children[j].val&&/\S| /.test(children[j].val))
return false;}
return true;};while(i--)
{if(!(token=tokens[i])||token.type!==tokenType.open)
continue;bbcode=base.bbcodes[token.name];removeEmpty(token.children);if(allWhiteSpace(token.children)&&bbcode&&!bbcode.isSelfClosing&&!bbcode.allowsEmpty)
tokens.splice.apply(tokens,$.merge([i,1],token.children));}};base.toHTML=function(str,preserveNewLines){return convertToHTML(base.parse(str,preserveNewLines),true);};convertToHTML=function(tokens,isRoot){var token,bbcode,content,html,needsBlockWrap,blockWrapOpen,isInline,lastChild,ret=[];isInline=function(bbcode){return(!bbcode||(typeof bbcode.isHtmlInline!=="undefined"?bbcode.isHtmlInline:bbcode.isInline))!==false;};while(tokens.length>0)
{if(!(token=tokens.shift()))
continue;if(token.type===tokenType.open)
{lastChild=token.children[token.children.length- 1]||{};bbcode=base.bbcodes[token.name];needsBlockWrap=isRoot&&isInline(bbcode);content=convertToHTML(token.children,false);if(bbcode&&bbcode.html)
{if(!isInline(bbcode)&&isInline(base.bbcodes[lastChild.name])&&!bbcode.isPreFormatted&&!bbcode.skipLastLineBreak)
{if(!$.sceditor.ie)
content+="<br />";}
if($.isFunction(bbcode.html))
html=bbcode.html.call(base,token,token.attrs,content);else
html=$.sceditor.plugins.bbcode.formatString(bbcode.html,content);}
else
html=token.val+ content+(token.closing?token.closing.val:'');}
else if(token.type===tokenType.newline)
{if(!isRoot)
{ret.push('<br />');continue;}
if(blockWrapOpen)
{ret.push('</div>\n');blockWrapOpen=false;continue;}
ret.push('<div>');if(!$.sceditor.ie)
ret.push('<br />');if((document.documentMode&&document.documentMode<8)||$.sceditor.ie<8)
ret.push(' ');ret.push('</div>\n');continue;}
else
{needsBlockWrap=isRoot;html=$.sceditor.escapeEntities(token.val);}
if(needsBlockWrap&&!blockWrapOpen)
{ret.push('<div>');blockWrapOpen=true;}
else if(!needsBlockWrap&&blockWrapOpen)
{ret.push('</div>\n');blockWrapOpen=false;}
ret.push(html);}
if(blockWrapOpen)
ret.push('</div>\n');return ret.join('');};base.toBBCode=function(str,preserveNewLines){return convertToBBCode(base.parse(str,preserveNewLines));};convertToBBCode=function(toks){var token,attr,bbcode,isBlock,isSelfClosing,quoteType,breakBefore,breakStart,breakEnd,breakAfter,ret=[];while(toks.length>0)
{if(!(token=toks.shift()))
continue;bbcode=base.bbcodes[token.name];isBlock=!(!bbcode||bbcode.isInline!==false);isSelfClosing=bbcode&&bbcode.isSelfClosing;breakBefore=((isBlock&&base.opts.breakBeforeBlock&&bbcode.breakBefore!==false)||(bbcode&&bbcode.breakBefore));breakStart=((isBlock&&!isSelfClosing&&base.opts.breakStartBlock&&bbcode.breakStart!==false)||(bbcode&&bbcode.breakStart));breakEnd=((isBlock&&base.opts.breakEndBlock&&bbcode.breakEnd!==false)||(bbcode&&bbcode.breakEnd));breakAfter=((isBlock&&base.opts.breakAfterBlock&&bbcode.breakAfter!==false)||(bbcode&&bbcode.breakAfter));quoteType=(bbcode?bbcode.quoteType:null)||base.opts.quoteType||$.sceditor.BBCodeParser.QuoteType.auto;if(!bbcode&&token.type===tokenType.open)
{ret.push(token.val);if(token.children)
ret.push(convertToBBCode(token.children));if(token.closing)
ret.push(token.closing.val);}
else if(token.type===tokenType.open)
{if(breakBefore)
ret.push('\n');ret.push('['+ token.name);if(token.attrs)
{if(token.attrs.defaultattr)
{if(token.attrs.defaultattr.charAt(0)==="("&&token.attrs.defaultattr.charAt(token.attrs.defaultattr.length-1)===")"&&token.name!="quote")
ret.push(quote(token.attrs.defaultattr,quoteType,'defaultattr'));else
ret.push('='+ quote(token.attrs.defaultattr,quoteType,'defaultattr'));delete token.attrs.defaultattr;}
for(attr in token.attrs)
if(token.attrs.hasOwnProperty(attr))
ret.push(' '+ attr+'='+ quote(token.attrs[attr],quoteType,attr));}
ret.push(']');if(breakStart)
ret.push('\n');if(token.children)
ret.push(convertToBBCode(token.children));if(!isSelfClosing&&!bbcode.excludeClosing)
{if(breakEnd)
ret.push('\n');ret.push('[/'+ token.name+']');}
if(breakAfter)
ret.push('\n');if(token.closing&&isSelfClosing)
ret.push(token.closing.val);}
else
ret.push(token.val);}
return ret.join('');};quote=function(str,quoteType,name){var QuoteTypes=$.sceditor.BBCodeParser.QuoteType,needsQuotes=/\s|=/.test(str);if(typeof str==="undefined"){FA.SCEditor.sourceMode=true;console.error("Quote Error!");return'';}
else{if($.isFunction(quoteType))
return quoteType(str,name);if(quoteType===QuoteTypes.never||(quoteType===QuoteTypes.auto&&!needsQuotes))
return str;return'"'+ str.replace('\\','\\\\').replace('"','\\"')+'"';}};last=function(arr){if(arr.length)
return arr[arr.length- 1];return null;};lower=function(str){return str.toLowerCase();};init();};$.sceditor.BBCodeParser.QuoteType={always:1,never:2,auto:3};if(Object.freeze)
Object.freeze($.sceditor.BBCodeParser.QuoteType);$.sceditor.BBCodeParser.defaults={breakBeforeBlock:false,breakStartBlock:false,breakEndBlock:false,breakAfterBlock:true,removeEmptyTags:true,fixInvalidNesting:true,fixInvalidChildren:true,quoteType:$.sceditor.BBCodeParser.QuoteType.auto};$.sceditorBBCodePlugin=$.sceditor.plugins.bbcode=function(){var base=this;var buildBbcodeCache,handleStyles,handleTags,formatString,getStyle,mergeSourceModeCommands,removeFirstLastDiv;formatString=$.sceditor.plugins.bbcode.formatString;base.bbcodes=$.sceditor.plugins.bbcode.bbcodes;base.stripQuotes=$.sceditor.plugins.bbcode.stripQuotes;var tagsToBbcodes={};var stylesToBbcodes={};var validChildren={ul:['li','ol','ul'],ol:['li','ol','ul'],table:['tr'],tr:['td','th'],code:['br','p','div']};var propertyCache={};base.init=function(){base.opts=this.opts;buildBbcodeCache();mergeSourceModeCommands(this);this.toBBCode=base.signalToSource;this.fromBBCode=base.signalToWysiwyg;};mergeSourceModeCommands=function(editor){var merge={bold:{txtExec:["[b]","[/b]"]},italic:{txtExec:["[i]","[/i]"]},underline:{txtExec:["[u]","[/u]"]},strike:{txtExec:["[s]","[/s]"]},subscript:{txtExec:["[sub]","[/sub]"]},superscript:{txtExec:["[sup]","[/sup]"]},left:{txtExec:["[left]","[/left]"]},center:{txtExec:["[center]","[/center]"]},right:{txtExec:["[right]","[/right]"]},justify:{txtExec:["[justify]","[/justify]"]},font:{txtExec:function(caller){var editor=this;$.sceditor.command.get('font')._dropDown(editor,caller,function(fontName){editor.insertText("[font="+fontName+"]","[/font]");});}},size:{txtExec:function(caller){var editor=this;$.sceditor.command.get('size')._dropDown(editor,caller,function(fontSize){editor.insertText("[size="+fontSize+"]","[/size]");});}},color:{txtExec:function(caller){var editor=this;$.sceditor.command.get('color')._dropDown(editor,caller,function(color){editor.insertText("[color="+color+"]","[/color]");});}},bulletlist:{txtExec:["[ul][li]","[/li][/ul]"]},orderedlist:{txtExec:["[ol][li]","[/li][/ol]"]},table:{txtExec:["[table][tr][td]","[/td][/tr][/table]"]},horizontalrule:{txtExec:["[hr]"]},code:{txtExec:["[code]","[/code]"]},image:{txtExec:function(caller,selected){var url=prompt(this._("Enter the image URL:"),selected);if(url)
this.insertText("[img]"+ url+"[/img]");}},email:{txtExec:function(caller,selected){var display=selected&&selected.indexOf('@')>-1?null:selected,email=prompt(this._("Enter the e-mail address:"),(display?'':selected)),text=prompt(this._("Enter the displayed text:"),display||email)||email;if(email)
this.insertText("[email="+ email+"]"+ text+"[/email]");}},link:{txtExec:function(caller,selected){var display=selected&&selected.indexOf('http://')>-1?null:selected,url=prompt(this._("Enter URL:"),(display?'http://':selected)),text=prompt(this._("Enter the displayed text:"),display||url)||url;if(url)
this.insertText("[url="+ url+"]"+ text+"[/url]");}},quote:{txtExec:["[quote]","[/quote]"]},youtube:{txtExec:function(caller){var editor=this;$.sceditor.command.get('youtube')._dropDown(editor,caller,function(id){editor.insertText("[youtube]"+ id+"[/youtube]");});}},rtl:{txtExec:["[rtl]","[/rtl]"]},ltr:{txtExec:["[ltr]","[/ltr]"]}};editor.commands=$.extend(true,{},merge,editor.commands);};buildBbcodeCache=function(){$.each(base.bbcodes,function(bbcode){if(base.bbcodes[bbcode].tags)
$.each(base.bbcodes[bbcode].tags,function(tag,values){var isBlock=base.bbcodes[bbcode].isInline===false;tagsToBbcodes[tag]=(tagsToBbcodes[tag]||{});tagsToBbcodes[tag][isBlock]=(tagsToBbcodes[tag][isBlock]||{});tagsToBbcodes[tag][isBlock][bbcode]=values;});if(base.bbcodes[bbcode].styles)
$.each(base.bbcodes[bbcode].styles,function(style,values){var isBlock=base.bbcodes[bbcode].isInline===false;stylesToBbcodes[isBlock]=(stylesToBbcodes[isBlock]||{});stylesToBbcodes[isBlock][style]=(stylesToBbcodes[isBlock][style]||{});stylesToBbcodes[isBlock][style][bbcode]=values;});});};getStyle=function(element,property){var $elm,ret,dir,textAlign,name,style=element.style;if(!style)
return null;if(!propertyCache[property])
propertyCache[property]=$.camelCase(property);name=propertyCache[property];if("text-align"===property)
{$elm=$(element);dir=style.direction;textAlign=style[name]||$elm.css(property);if($elm.parent().css(property)!==textAlign&&$elm.css('display')==="block"&&!$elm.is('hr')&&!$elm.is('th'))
ret=textAlign;if(dir&&ret&&((/right/i.test(ret)&&dir==='rtl')||(/left/i.test(ret)&&dir==='ltr')))
return null;return ret;}
return style[name];};handleStyles=function(element,content,blockLevel){var elementPropVal;blockLevel=!!blockLevel;if(!stylesToBbcodes[blockLevel])
return content;$.each(stylesToBbcodes[blockLevel],function(property,bbcodes){elementPropVal=getStyle(element[0],property);if(!elementPropVal||getStyle(element.parent()[0],property)===elementPropVal)
return;$.each(bbcodes,function(bbcode,values){if(!values||$.inArray(elementPropVal.toString(),values)>-1)
{if($.isFunction(base.bbcodes[bbcode].format))
content=base.bbcodes[bbcode].format.call(base,element,content);else
content=formatString(base.bbcodes[bbcode].format,content);}});});return content;};handleTags=function($element,content,blockLevel){var tag=$element[0].nodeName.toLowerCase();blockLevel=!!blockLevel;if(tagsToBbcodes[tag]&&tagsToBbcodes[tag][blockLevel]){$.each(tagsToBbcodes[tag][blockLevel],function(bbcode,bbcodeAttribs){if(bbcodeAttribs){var runBbcode=false;$.each(bbcodeAttribs,function(attrib,values){if(!$element.attr(attrib)||(values&&$.inArray($element.attr(attrib),values)<0))
return;runBbcode=true;return false;});if(!runBbcode)
return;}
if($.isFunction(base.bbcodes[bbcode].format))
content=base.bbcodes[bbcode].format.call(base,$element,content);else
content=formatString(base.bbcodes[bbcode].format,content);});}
if(blockLevel&&(!$.sceditor.dom.isInline($element[0],true)||tag==="br"))
{var parent=$element[0].parentNode,previousSibling=$element[0].previousSibling,parentIsInline=$.sceditor.dom.isInline(parent,true)||parent.nodeName.toLowerCase()==="body";while(previousSibling&&$(previousSibling).hasClass('sceditor-ignore'))
previousSibling=previousSibling.previousSibling;if(parentIsInline||parent.lastChild!==$element[0]||tag==="li"||(tag==="br"&&$.sceditor.ie))
content+="\n";if("br"!==tag&&previousSibling&&previousSibling.nodeName.toLowerCase()!='br'&&$.sceditor.dom.isInline(previousSibling,true))
content="\n"+ content;}
return content;};base.signalToSource=function(html,$body){var $tmpContainer,bbcode,parser=new $.sceditor.BBCodeParser(base.opts.parserOptions);if(!$body)
{if(typeof html==="string")
{$tmpContainer=$('<div />').css('visibility','hidden').appendTo(document.body).html(html);$body=$tmpContainer;}
else
$body=$(html);}
if(!$body||!$body.jquery)
return'';$.sceditor.dom.removeWhiteSpace($body[0]);bbcode=base.elementToBbcode($body);if($tmpContainer)
$tmpContainer.remove();return $.trim(parser.toBBCode(bbcode,true));};base.elementToBbcode=function($element){return(function toBBCode(node,vChildren){var ret='';$.sceditor.dom.traverse(node,function(node){var $node=$(node),curTag='',nodeType=node.nodeType,tag=node.nodeName.toLowerCase(),vChild=validChildren[tag],isValidChild=true;if(typeof vChildren==='object')
{isValidChild=$.inArray(tag,vChildren)>-1;if(!isValidChild)
vChild=vChildren;}
if(nodeType!==3&&nodeType!==1)
return;if(nodeType===1)
{if($node.hasClass("sceditor-ignore"))
return;if(tag!=='iframe')
curTag=toBBCode(node,vChild);if(isValidChild)
{if(tag!=="code")
{curTag=handleStyles($node,curTag);curTag=handleTags($node,curTag);curTag=handleStyles($node,curTag,true);}
ret+=handleTags($node,curTag,true);}
else
ret+=curTag;}
else if(node.wholeText&&(!node.previousSibling||node.previousSibling.nodeType!==3))
{if($node.parents('code').length===0)
ret+=node.wholeText.replace(/ +/g," ");else
ret+=node.wholeText;}
else if(!node.wholeText)
ret+=node.nodeValue;},false,true);return ret;}($element.get(0)));};base.signalToWysiwyg=function(text,asFragment){var parser=new $.sceditor.BBCodeParser(base.opts.parserOptions),html=parser.toHTML($.trim(text));return asFragment?removeFirstLastDiv(html):html;};removeFirstLastDiv=function(html){var node,next,removeDiv,$output=$('<div />').hide().appendTo(document.body),output=$output[0];removeDiv=function(node,isFirst){if(node.className||$(node).attr('style')||!$.isEmptyObject($(node).data()))
return;while((next=node.firstChild))
output.insertBefore(next,node);if(isFirst)
{var lastChild=output.lastChild;if(node!==lastChild&&$(lastChild).is("div")&&node.nextSibling===lastChild)
output.insertBefore(document.createElement('br'),node);}
output.removeChild(node);};output.innerHTML=html.replace(/<\/div>\n/g,'</div>');if((node=output.firstChild)&&$(node).is("div"))
removeDiv(node,true);if((node=output.lastChild)&&$(node).is("div"))
removeDiv(node);output=output.innerHTML;$output.remove();return output;};};$.sceditor.plugins.bbcode.stripQuotes=function(str){return str?str.replace(/\\(["'])/g,"$1").replace(/^(["'])(.*?)\1$/,"$2"):str;};$.sceditor.plugins.bbcode.formatString=function(){var args=arguments;return args[0].replace(/\{(\d+)\}/g,function(str,p1){return typeof args[p1-0+1]!=="undefined"?args[p1-0+1]:'{'+ p1+'}';});};$.sceditor.plugins.bbcode.normaliseColour=function(color){var m;function toHex(n){n=parseInt(n,10);if(isNaN(n))
return"00";n=Math.max(0,Math.min(n,255)).toString(16);return n.length<2?'0'+n:n;}
if((m=color.match(/rgb\((\d{1,3}),\s*?(\d{1,3}),\s*?(\d{1,3})\)/i)))
return'#'+ toHex(m[1])+ toHex(m[2]-0)+ toHex(m[3]-0);if((m=color.match(/#([0-f])([0-f])([0-f])\s*?$/i)))
return'#'+ m[1]+ m[1]+ m[2]+ m[2]+ m[3]+ m[3];return color;};$.sceditor.plugins.bbcode.bbcodes={b:{tags:{b:null,strong:null},styles:{"font-weight":["bold","bolder","401","700","800","900"]},format:"[b]{0}[/b]",html:'<strong>{0}</strong>'},i:{tags:{i:null,em:null},styles:{"font-style":["italic","oblique"]},format:"[i]{0}[/i]",html:'<em>{0}</em>'},u:{tags:{u:null},styles:{"text-decoration":["underline"]},format:"[u]{0}[/u]",html:'<u>{0}</u>'},s:{tags:{s:null,strike:null},styles:{"text-decoration":["line-through"]},format:"[s]{0}[/s]",html:'<s>{0}</s>'},sub:{tags:{sub:null},format:"[sub]{0}[/sub]",html:'<sub>{0}</sub>'},sup:{tags:{sup:null},format:"[sup]{0}[/sup]",html:'<sup>{0}</sup>'},font:{tags:{font:{face:null}},quoteType:$.sceditor.BBCodeParser.QuoteType.never,format:function(element,content){var font;if(element[0].nodeName.toLowerCase()!=="font"||!(font=element.attr('face')))
font=element.css('font-family');return'[font='+ this.stripQuotes(font)+']'+ content+'[/font]';},html:function(token,attrs,content){return'<font face="'+ attrs.defaultattr+'">'+ content+'</font>';}},color:{tags:{font:{color:null}},quoteType:$.sceditor.BBCodeParser.QuoteType.never,format:function($element,content){var color,element=$element[0];if(element.nodeName.toLowerCase()!=="font"||!(color=$element.attr('color')))
color=element.style.color||$element.css('color');return'[color='+ $.sceditor.plugins.bbcode.normaliseColour(color)+']'+ content+'[/color]';},html:function(token,attrs,content){return'<font color="'+ attrs.defaultattr+'">'+ content+'</font>';}},ul:{tags:{ul:null},breakStart:true,isInline:false,skipLastLineBreak:true,format:"[ul]{0}[/ul]",html:'<ul>{0}</ul>'},list:{breakStart:true,isInline:false,skipLastLineBreak:true,html:'<ul>{0}</ul>'},ol:{tags:{ol:null},breakStart:true,isInline:false,skipLastLineBreak:true,format:"[ol]{0}[/ol]",html:'<ol>{0}</ol>'},li:{tags:{li:null},isInline:false,closedBy:['/ul','/ol','/list','*','li'],format:"[li]{0}[/li]",html:'<li>{0}</li>'},"*":{isInline:false,closedBy:['/ul','/ol','/list','*','li'],html:'<li>{0}</li>'},table:{tags:{table:null},isInline:false,isHtmlInline:true,skipLastLineBreak:true,format:"[table]{0}[/table]",html:'<table>{0}</table>'},tr:{tags:{tr:null},isInline:false,skipLastLineBreak:true,format:"[tr]{0}[/tr]",html:'<tr>{0}</tr>'},th:{tags:{th:null},allowsEmpty:true,isInline:false,format:"[th]{0}[/th]",html:'<th>{0}</th>'},td:{tags:{td:null},allowsEmpty:true,isInline:false,format:"[td]{0}[/td]",html:'<td>{0}</td>'},emoticon:{allowsEmpty:true,tags:{img:{src:null,"data-sceditor-emoticon":null}},format:function(element,content){return element.attr('data-sceditor-emoticon')+ content;},html:'{0}'},hr:{tags:{hr:null},allowsEmpty:true,isSelfClosing:true,isInline:false,format:"[hr]{0}",html:"<hr />"},img:{allowsEmpty:true,tags:{img:{src:null}},quoteType:$.sceditor.BBCodeParser.QuoteType.never,format:function($element,content){var w,h,attribs='',element=$element[0],style=function(name){return element.style?element.style[name]:null;};if(typeof $element.attr('data-sceditor-emoticon')!=="undefined")
return content;w=$element.attr('width')||style('width');h=$element.attr('height')||style('height');if((element.complete&&(w||h))||(w&&h))
attribs="="+ $element.width()+"x"+ $element.height();return'[img'+ attribs+']'+ $element.attr('src')+'[/img]';},html:function(token,attrs,content){var parts,attribs='';if(typeof attrs.width!=="undefined")
attribs+=' width="'+ attrs.width+'"';if(typeof attrs.height!=="undefined")
attribs+=' height="'+ attrs.height+'"';if(attrs.defaultattr){parts=attrs.defaultattr.split(/x/i);attribs=' width="'+ parts[0]+'"'+' height="'+(parts.length===2?parts[1]:parts[0])+'"';}
return'<img'+ attribs+' src="'+ content+'" />';}},url:{allowsEmpty:true,tags:{a:{href:null}},quoteType:$.sceditor.BBCodeParser.QuoteType.never,format:function(element,content){var url=element.attr('href');if(url.substr(0,7)==='mailto:')
return'[email="'+ url.substr(7)+'"]'+ content+'[/email]';return'[url='+ decodeURI(url)+']'+ content+'[/url]';},html:function(token,attrs,content){if(typeof attrs.defaultattr==="undefined"||attrs.defaultattr.length===0)
attrs.defaultattr=content;return'<a href="'+ encodeURI(attrs.defaultattr)+'">'+ content+'</a>';}},email:{quoteType:$.sceditor.BBCodeParser.QuoteType.never,html:function(token,attrs,content){if(typeof attrs.defaultattr==="undefined")
attrs.defaultattr=content;return'<a href="mailto:'+ attrs.defaultattr+'">'+ content+'</a>';}},quote:{tags:{blockquote:null},isInline:false,quoteType:$.sceditor.BBCodeParser.QuoteType.never,format:function(element,content){var author='',$elm=$(element),$cite=$elm.children("cite").first();if($cite.length===1||$elm.data("author")){author=$cite.text()||$elm.data("author");$elm.data("author",author);$cite.remove();$elm.children("cite").replaceWith(function(){return $(this).text();});content=this.elementToBbcode($(element));author='='+ author;}
return'[quote'+ author+']'+ content+'[/quote]';},html:function(token,attrs,content){if(typeof attrs.defaultattr!=="undefined")
content='<cite>'+ attrs.defaultattr+'</cite>'+ content;return'<blockquote>'+ content+'</blockquote>';}},code:{tags:{code:null},isInline:false,allowedChildren:['#','#newline'],format:"[code]{0}[/code]",html:'<code>{0}</code>'},left:{styles:{"text-align":["left","-webkit-left","-moz-left","-khtml-left"]},isInline:false,format:"[left]{0}[/left]",html:'<div align="left">{0}</div>'},center:{styles:{"text-align":["center","-webkit-center","-moz-center","-khtml-center"]},isInline:false,format:"[center]{0}[/center]",html:'<div align="center">{0}</div>'},right:{styles:{"text-align":["right","-webkit-right","-moz-right","-khtml-right"]},isInline:false,format:"[right]{0}[/right]",html:'<div align="right">{0}</div>'},justify:{styles:{"text-align":["justify","-webkit-justify","-moz-justify","-khtml-justify"]},isInline:false,format:"[justify]{0}[/justify]",html:'<div align="justify">{0}</div>'},youtube:{allowsEmpty:true,tags:{iframe:{'data-youtube-id':null}},format:function(element,content){if(!(element=element.attr('data-youtube-id')))
return content;return'[youtube]'+ element+'[/youtube]';},html:'<iframe width="560" height="315" src="../www.youtube.com/embed/{0}@wmode=opaque'+'" data-youtube-id="{0}" frameborder="0" allowfullscreen></iframe>'},rtl:{styles:{"direction":["rtl"]},format:"[rtl]{0}[/rtl]",html:'<div style="direction: rtl">{0}</div>'},ltr:{styles:{"direction":["ltr"]},format:"[ltr]{0}[/ltr]",html:'<div style="direction: ltr">{0}</div>'},ignore:{}};$.sceditor.plugins.bbcode.bbcode={get:function(name){return $.sceditor.plugins.bbcode.bbcodes[name]||null;},set:function(name,bbcode){if(!name||!bbcode)
return false;bbcode=$.extend($.sceditor.plugins.bbcode.bbcodes[name]||{},bbcode);bbcode.remove=function(){$.sceditor.plugins.bbcode.bbcode.remove(name);};$.sceditor.plugins.bbcode.bbcodes[name]=bbcode;return this;},rename:function(name,newName){if(this.hasOwnProperty(name))
{this[newName]=this[name];this.remove(name);}
else
return false;return this;},remove:function(name){if($.sceditor.plugins.bbcode.bbcodes[name])
delete $.sceditor.plugins.bbcode.bbcodes[name];return this;}};$.fn.sceditorBBCodePlugin=function(options){options=options||{};if($.isPlainObject(options))
options.plugins=(options.plugins?options.plugins:'')+'bbcode';return this.sceditor(options);};})(jQuery,window,document);
/* ver 2013.02.19 1 */

//document.cookie="screenwidth="+screen.innerWidth+"; path=/; expires=Mon, 01-Jan-2051 00:00:00 GMT";
document.cookie="screenwidth="+window.innerWidth+"; path=/; expires=Mon, 01-Jan-2051 00:00:00 GMT";

function tableruler()
{
        var b;
        if (document.getElementsByTagName)
        {
                var tables=document.getElementsByTagName('table');
                for (var i=0;i<tables.length;i++)
                {

                        if(tables[i].className=='booklist' || tables[i].className=='commlist' )
                        {
                                var trs=tables[i].getElementsByTagName('tr');
                                var odd = true;
                                for(var j=0;j<trs.length;j++)
                                {
                                        if(trs[j].parentNode.nodeName=='TBODY')
                                        {
                                                var divs=trs[j].getElementsByTagName('div');
                                                if (odd && tables[i].className!='commlist') {trs[j].className='stripped';}
                                                odd = !odd;
                                                trs[j].onmouseover=function()
                                                {
						      //if( !this.hasAttribute('selected') )
						      if( !this.attributes.selected )
						      {
							    b=this.className;this.className='ruled';
						      }
                                                      var divs=this.getElementsByTagName('div');
                                                      for(var k=0;k<divs.length;k++)
                                                      {
                                                            if( divs[k].className=='bshelfhide' ) divs[k].className='bshelf';
                                                            if( divs[k].className=='downloadhide' ) divs[k].className='download';
                                                            if( divs[k].className=='ratebookhide' ) divs[k].className='ratebook';
                                                      }
                                                }
                                                trs[j].onmouseout=function()
                                                {
						      if( !this.attributes.selected )
						      {
                                                            if (typeof(b)!=="undefined") this.className=b;
						      }
                                                      var divs=this.getElementsByTagName('div');
                                                      for(var k=0;k<divs.length;k++)
                                                      {
                                                            if( divs[k].className=='bshelf' ) divs[k].className='bshelfhide';
                                                            if( divs[k].className=='download' ) divs[k].className='downloadhide';
                                                            if( divs[k].className=='ratebook' ) divs[k].className='ratebookhide';
                                                      }
                                                }
                                                trs[j].onclick=function( )
                                                {
						      this.className='selected';
						      n=parseInt(this.getAttribute('rownum'));
						      if( this.attributes.selected )
						      {
							    c=this.getAttribute('selected');
							    b=c;
							    this.className=c;
							    this.removeAttribute('selected');
							    
						      }
						      else
						      {
							    this.setAttribute('selected', b );
						      }
						}
						trs[j].setAttribute('rownum', j );
                                                
                                        }
                                }
                        }
                }
        }
}





/* window.onload=function(){tableruler();}; */

/* Создание нового объекта XMLHttpRequest для общения с Web-сервером */
var xmlHttp = false;
/*@cc_on @*/
/*@if (@_jscript_version >= 5)
try {
  xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
  try {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (e2) {
    xmlHttp = false;
  }
}
@end @*/

if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
  xmlHttp = new XMLHttpRequest();
}


function move2shelf()
{
	var books='';
        if (document.getElementsByTagName)
        {
                var tables=document.getElementsByTagName('table');
                for (var i=0;i<tables.length;i++)
                {

                        if(tables[i].className=='booklist' || tables[i].className=='commlist' )
                        {
                                var trs=tables[i].getElementsByTagName('tr');
                                var odd = true;
                                for(var j=0;j<trs.length;j++)
                                {
                                        if(trs[j].parentNode.nodeName=='TBODY')
                                        {
                                        	if( trs[j].attributes.selected )
                                        	{
                                        		books=books+'&bookid[]='+trs[j].getAttribute('bookid');
                                        	}
                                        }
                                }
                        }
                }
        }
        var shelf=document.getElementById('shelflist');
	var url = "move2shelf.php@shelf="+shelf.value+books;
	xmlHttp.open("GET", url, true);
        xmlHttp.onreadystatechange = pageReload;
	xmlHttp.send(null);
}

function CompareReaders()
{
	var readers='';
	var readers2='';
	var c=0;
        if (document.getElementsByTagName)
        {
                var tables=document.getElementsByTagName('table');
                for (var i=0;i<tables.length;i++)
                {

                        if(tables[i].className=='booklist' || tables[i].className=='commlist' )
                        {
                                var trs=tables[i].getElementsByTagName('tr');
                                for(var j=0;j<trs.length;j++)
                                {
                                        if(trs[j].parentNode.nodeName=='TBODY')
                                        {
                                        	if( trs[j].attributes.selected )
                                        	{
                                        		readers=readers+'-'+trs[j].getAttribute('readerid');
                                        		c++;
                                        	}
                                        	if( trs[j].attributes.readerid )
                                        	{
                                        		readers2=readers2+'-'+trs[j].getAttribute('readerid');
                                        	}
                                        }
                                }
                        }
                }
        }
        if( c==1 )
        {
                alert('для сравнения необходимо выбрать как минимум две электронные книги');
                return false;
	}
        if( c>1 )
        {
	        document.getElementById('comparelink').setAttribute('href', 'compare.php/readers'+readers );
	        return true;
	}
	else
	{
	        document.getElementById('comparelink').setAttribute('href', 'compare.php/readers'+readers2 );
	        return true;
	}
}

var makeselected=true;
function selectall()
{
        if (document.getElementsByTagName)
        {
                var tables=document.getElementsByTagName('table');
                for (var i=0;i<tables.length;i++)
                {

                        if(tables[i].className=='booklist' || tables[i].className=='commlist' )
                        {
                                var trs=tables[i].getElementsByTagName('tr');
                                for(var j=0;j<trs.length;j++)
                                {
                                        if(trs[j].parentNode.nodeName=='TBODY')
                                        {
                                        	if( makeselected && !trs[j].attributes.selected )
                                        	{
                                                        b=trs[j].className;
                                                        trs[j].setAttribute('selected', b );
                                                        trs[j].className='selected';
                                        	}
                                        	if( !makeselected && trs[j].attributes.selected )
                                        	{
							c=trs[j].getAttribute('selected');
							b=c;
							trs[j].className=c;
							trs[j].removeAttribute('selected');
                                        	}
                                        }
                                }
                        }
                }
        }
        makeselected=!makeselected;
        return false;
}



function hidelayer( layer_ref )
{
  state = 'hidden';
  if (document.all) { //IS IE 4 or 5 (or 6 beta)
    eval( "if( document.all." + layer_ref +" ) document.all." + layer_ref + ".style.visibility = state");
  }
  if (document.layers) { //IS NETSCAPE 4 or below
    if( document.layers[layer_ref] ) document.layers[layer_ref].visibility = state;
  }
  if (document.getElementById && !document.all) {
    maxwell_smart = document.getElementById(layer_ref);
    if( maxwell_smart ) maxwell_smart.style.visibility = state;
  }
}

function showlayer( layer_ref )
{
  state = 'visible';
  if (document.all) { //IS IE 4 or 5 (or 6 beta)
    eval( "if( document.all." + layer_ref +" ) document.all." + layer_ref + ".style.visibility = state");
  }
  if (document.layers) { //IS NETSCAPE 4 or below
    if( document.layers[layer_ref] ) document.layers[layer_ref].visibility = state;
  }
  if (document.getElementById && !document.all) {
    maxwell_smart = document.getElementById(layer_ref);
    if( maxwell_smart ) maxwell_smart.style.visibility = state;
  }
}

function rhide( n, r )
{
  layer_ref = "rate" + n;

  hidelayer(layer_ref);
  if( r < 0 )
  {
    layer_ref = "book" + n;
    layer_ref2 = "bshelf" + n;
    layer_ref3 = "dbook" + n;
    hidelayer(layer_ref);
    hidelayer(layer_ref2);
    hidelayer(layer_ref3);
  }
  // Создать URL для подключения
  var url = "/ratebook.php?book=" + escape(n) + "&rate=" + escape(r);

  // Открыть соединение с сервером
  xmlHttp.open("GET", url, true);

  // Установить функцию для сервера, которая выполнится после его ответа
  // xmlHttp.onreadystatechange = updatePage;

  // SПередать запрос
  xmlHttp.send(null);
}

function rahide( n )
{
  var url = "/accountblockauthor.aspx?author=" + escape(n);

  xmlHttp.open("GET", url, true);
  xmlHttp.onreadystatechange = updateAJAX;
  xmlHttp.send(null);
}

function put2shelf( bookid, qid )
{
  layer_ref = "bshelf" + bookid;
  rowbook = "rowbook" + bookid;

  hidelayer(layer_ref);

  if (document.all) { //IS IE 4 or 5 (or 6 beta)
    eval( "document.all." + rowbook + ".className = 'onbshelf'");
  }
  if (document.layers) { //IS NETSCAPE 4 or below
    document.layers[rowbook].className = 'onbshelf';
  }
  if (document.getElementById && !document.all) {
    maxwell_smart = document.getElementById(rowbook);
    if( maxwell_smart ) maxwell_smart.className = 'onbshelf';
  }

  var url = "/add2shelf.php?book=" + escape(bookid) + "&qid=" + escape(qid);
  xmlHttp.open("GET", url, true);
  xmlHttp.send(null);
//  window.status = "ложим на полку...";
}

function updateSeries()
{
   if (xmlHttp.readyState == 4)
   {
      var response = xmlHttp.responseText;
      if( response.length > 20 )
      {
          eval(response);
      }
   }
}


function putSeries( author, series )
{
  var url = "addSer2shelf.php@author=" + escape(author) + "&series=" + escape(series);
  xmlHttp.open("GET", url, true);
  xmlHttp.onreadystatechange = updateSeries;
  xmlHttp.send(null);
}

function delSeries( author, series )
{
  var url = "addSer2shelf.php@author=" + escape(author) + "&series=-" + escape(series);
  xmlHttp.open("GET", url, true);
  xmlHttp.onreadystatechange = updateSeries;
  xmlHttp.send(null);
}

function delshelf( bookid, qid )
{
  layer_ref = "bshelf" + bookid;
  layer_ref2 = "book" + bookid;
  layer_ref3 = "dbook" + bookid;
  layer_ref4 = "rate" + bookid;

  hidelayer(layer_ref);
  hidelayer(layer_ref2);
  hidelayer(layer_ref3);
  hidelayer(layer_ref4);
  
  var url = "add2shelf.php@book=-" + escape(bookid) + "&qid=" + escape(qid);
  xmlHttp.open("GET", url, true);
  xmlHttp.send(null);

}

function updateHelper()
{
   if (xmlHttp.readyState == 4)
   {
      var response = xmlHttp.responseText;
      if( response.length > 5 )
      {
        document.getElementById('helperlist').innerHTML = response;
//        document.getElementById('helpershadow').innerHTML = response;
//        showlayer('helper');
//        showlayer('helpershadow');
      }
      else
      {
//       hidelayer('helpershadow');
//       hidelayer('helper');
        document.getElementById('helperlist').innerHTML = '';
//        document.getElementById('helpershadow').innerHTML = '';
      }
   }
}

var oldhelperquery='';
function getHelper()
{
    var query=document.getElementById("query").value;
    if( query.length > 2 && query!=oldhelperquery )
    {
        var url = "getHelper.php@query=" + encodeURI(query);
        xmlHttp.open("GET", url, true);
        xmlHttp.onreadystatechange = updateHelper;
        xmlHttp.send(null);
        oldhelperquery=query;
    }
//    else
//    {
//        hidelayer('helpershadow');
//        hidelayer('helper');
//    }
}

function setNewQuery( a )
{
    var newquery=document.getElementById(a).innerHTML;
    var inputquery=document.getElementById("query");
    inputquery.value=newquery;
    inputquery.focus();
//    document.getElementById("query").value=document.getElementById(a).textContent;
//    alert(' test ');
}

function hideHelper()
{
        setTimeout("hidelayer('helper')",500);
        setTimeout("hidelayer('helpershadow')",500);
}

function pageReload()
{
   if (xmlHttp.readyState == 4)
   {
          window.location.reload();
   }
}

function clearBookshelf( param  )
{
    if( confirm("Удалить все книги с этой полки?") )
    {
        var url = "clearBookshelf.php?"+param;
        xmlHttp.open("GET", url, true);
        xmlHttp.onreadystatechange = pageReload;
        xmlHttp.send(null);
    }
    return false;
}


function maxNotify( fieldId, max )
{
    var field=document.getElementById(fieldId).value;
    if( field.length > max )
    {
          document.getElementById(fieldId).value=field.substr( 0, max );
          alert( "максимум "+max+" символов в этом поле" );      
    }    
    else
    {
        var notify=document.getElementById('notify');
        if( notify )
        {
              notify.innerHTML = "осталось " + (max-field.length) + " знак(ов)" ;
        }
    }
}



function SlowHide( layerid )
{
    if( document.getElementById(layerid) )
    {
        var a=document.getElementById(layerid).style.opacity;
        if( a>10 )
        {
            document.getElementById(layerid).style.opacity = a-5;
            SetTimeout("SlowHide( '" + layerid + "')", 500 );
        }
        else
        {
            hidelayer( layerid );
        }
    } 
}


function DisplayBlock( id )
{
	state='unknown';
	if (document.all) { 
    	eval( "if( document.all." + id +" ) state=document.all." + id + ".style.display");
        }
	if (document.layers) { 
    	if( document.layers[id] ) state=document.layers[id].display;
	}
	if (document.getElementById && !document.all) {
    	maxwell_smart = document.getElementById(id);
    	if( maxwell_smart ) state=maxwell_smart.style.display;
	}
	if( state == 'none' ) state='block';
	else state='none'; 
	if (document.all) { 
    	eval( "if( document.all." + id +" ) document.all." + id + ".style.display = state");
	}
	if (document.layers) {
    	if( document.layers[id] ) document.layers[id].display = state;
	}
	if (document.getElementById && !document.all) {
    	maxwell_smart = document.getElementById(id);
    	if( maxwell_smart ) maxwell_smart.style.display = state;
	}
}

function DisplayOffBlock( id )
{
	state='none';
	if (document.all) { 
    	eval( "if( document.all." + id +" ) document.all." + id + ".style.display = state");
	}
	if (document.layers) {
    	if( document.layers[id] ) document.layers[id].display = state;
	}
	if (document.getElementById && !document.all) {
    	maxwell_smart = document.getElementById(id);
    	if( maxwell_smart ) maxwell_smart.style.display = state;
	}
}

function VisibilityBlock( id )
{
	state='unknown';
	if (document.all) { 
    	eval( "if( document.all." + id +" ) state=document.all." + id + ".style.visibility");
        }
	if (document.layers) { 
    	if( document.layers[id] ) state=document.layers[id].visibility;
	}
	if (document.getElementById && !document.all) {
    	maxwell_smart = document.getElementById(id);
    	if( maxwell_smart ) state=maxwell_smart.style.visibility;
	}
	if( state == 'hidden' ) state='visible';
	else state='hidden'; 
	if (document.all) { 
    	eval( "if( document.all." + id +" ) document.all." + id + ".style.visibility = state");
	}
	if (document.layers) {
    	if( document.layers[id] ) document.layers[id].visibility = state;
	}
	if (document.getElementById && !document.all) {
    	maxwell_smart = document.getElementById(id);
    	if( maxwell_smart ) maxwell_smart.style.visibility = state;
	}
}

function Get_Cookie( name )
{
	var start = document.cookie.indexOf( name + "=" );
	var len = start + name.length + 1;
	if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) {return null;}
	if ( start == -1 ) return null;
	var end = document.cookie.indexOf( ";", len );
	if ( end == -1 ) end = document.cookie.length;
	return unescape( document.cookie.substring( len, end ) );
} 

var ZoomPhotoStyle=[];
function ZoomPhoto( id )
{
	var imgsrc=document.getElementById('imgsrc'+id);
	if( imgsrc.attributes.style )
	{
		ZoomPhotoStyle[id]=imgsrc.getAttribute('style');
		imgsrc.removeAttribute('style');
	}
	else
	{
//		imgsrc.setAttribute('style', 'max-height:400px;max-width:600px;' );
		imgsrc.setAttribute('style', ZoomPhotoStyle[id] );
	}
}

function updateAJAX()
{
   if (xmlHttp.readyState == 4)
   {
      var response = xmlHttp.responseText;
      if( response.length > 5 )
      {
          eval(response);
      }
   }
}

function changeSiteLang( l )
{
    document.cookie="usersitelang="+l+"; path=/; expires=Mon, 01-Jan-2051 00:00:00 GMT";
    window.location.reload();
}


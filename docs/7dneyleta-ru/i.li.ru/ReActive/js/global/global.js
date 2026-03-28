/*
Project: LiveInternet - Global functions
Author:   A.Timofeev / Re.Active (www.reactant.ru)
Version:  15 Jun 2007
 */


/* Системные функции
----------------------------------------------- */

        /* -----------| Работа с куками |----------- */
          /* - Ставим куки - */
            function setCookie(name, value, expire)
            {
                    document.cookie = name + "=" + value + "; path=/; expires=" + expire;
            }
          /* - Получаем куки - */
            function getCookie(name)
            {
                    var search = name + "=";
                    if (document.cookie.length > 0)
                    {
                            offset = document.cookie.indexOf(search);
                            if (offset != -1)
                            {
                                    offset += search.length;
                                    end = document.cookie.indexOf(";", offset);
                                    if (end == -1) end = document.cookie.length;
                                    return unescape(document.cookie.substring(offset, end));
                            }
                    }
            }
          var today = new Date();
          var expires = new Date(today.getTime() + (56 * 86400000));
          setCookie("chbx","guest",expires);
          if (document.cookie.indexOf('__utm') >= 0)
          {
                  document.cookie = "__utma=0; path=/; domain=.liveinternet.ru; expires=Sat, 09 Dec 2000 21:00:00 GMT";
                  document.cookie = "__utmb=0; path=/; domain=.liveinternet.ru; expires=Sat, 09 Dec 2000 21:00:00 GMT";
                  document.cookie = "__utmc=0; path=/; domain=.liveinternet.ru; expires=Sat, 09 Dec 2000 21:00:00 GMT";
                  document.cookie = "__utmz=0; path=/; domain=.liveinternet.ru; expires=Sat, 09 Dec 2000 21:00:00 GMT";
          }

        /* -----------| Объявляем и получаем новые переменные |----------- */
                var username = getCookie("bbusername");
                var bbjurl = getCookie("jurl");
                var jurl = bbjurl;
                var bbuserid = getCookie("bbuserid");
                var userid = getCookie("bbuserid");
                var sstyle = getCookie("ucss");
                var sava = getCookie("ava");

                if (!curj)
                {
                        var curj;
                }
                if (!comun)
                {
                        var comun;
                }

                if (jurl!=null)
                {
                  var domain = (jurl.indexOf('liveinternet.ru')==-1)?jurl:"default.htm";
                }
                else
                {
                  var domain ="./";
                }

                if ((bbjurl != null) && (bbjurl != ""))
                {
                  var last=bbjurl;
                }
                else
                {
                  if ((bbuserid != null) && (bbuserid != ""))
                  {
                          var last="users/"+bbuserid;
                  }
                  else
                  {
                          var last="users/"+username;
                  }
                }
                /* - Авторизован или нет - */
                        if ((username != null)&&(username != "deleted")&&(username != ""))
                        {
                          var auth=1;
                        }
                        else
                        {
                          var auth=0;
                        }
                /* - Хозяин дневника или нет - */
                        if (auth == 1)
                        {
                                if ((curj==userid)||(userid==739)||(userid==644454)||(userid==44992)||(userid==2635239))
                                {
                                        var utype=1;
                                }
                                else
                                {
                                        var utype=0;
                                }
                        }


/* Функции вывода элементов навигации
----------------------------------------------- */

        /* -----------| Quote string with slashes |----------- */
                function addslashes( str )
                {
                    return str.replace('/(["\'\])/g', "\\$1").replace('0/g', "\\0");
            }

        /* -----------| Форма логина в верхней панели |----------- */
                function jstpl_tpanel (tpl)
                {
                        /* - Повторяющиеся блоки - */
                                /* - Стандартный блок - */
                                        function tplanel_stand(type,id)
                                        {
                                          if (type=="opn")
                                          {
                                                document.write('<div id="'+id+'">');
                                                  document.write('<p>');
                                          }
                                          if (type=="cls")
                                          {
                                                  document.write('</p>');
                                                document.write('</div>');
                                          }
                                        }
                                /* - Вкладки - */
                                        function tplanel_tabs(id,name,url)
                                        {
                                          document.write('<li id="'+id+'">'+name+'<strong><span><em><a href="'+url+'">'+name+'</a></em></span></strong></li>');
                                        }
                                /* - Форма авторизации - */
                                        function tplanel_aform(id_show)
                                        {
                                          document.write('<form id="GlHdrNavMnuForm" style="display:none;" onKeyDown="checkKey(\'GlHdrNavMnuForm\');" action="member.php" method="post" name="aut">');
                                                tplanel_stand ('opn','GlHdrNavMnuLogin');
                                                  document.write('<b>Логин:</b> <b>Пароль:</b>');
                                                tplanel_stand ('cls','');
                                                tplanel_stand ('opn','GlHdrNavMnuInputs');
                                                  document.write('<input type="text" name="username" tabindex="1" /><input  type="password" name="password" tabindex="2" />');
                                                  document.write('<span><strong><a href="javascript:document.getElementById(\'GlHdrNavMnuForm\').submit();">войти</a></strong>, <a href="javascript:void(0);" onClick="show_div(\''+id_show+'\',\'GlHdrNavMnuForm\');">вернуться</a></span>');
                                                tplanel_stand ('cls','');

                                                var strurl=addslashes(window.location.href);
                                                document.write('<input type="hidden" name="s" value="" /><input type="hidden" name="url" value="'+strurl+'" /><input type="hidden" name="action" value="login" /><input type="submit" style="display:none;" />');
                                          document.write('</form>');
                                        }
                        /* - Вывод блоков - */
                                /* - Пользователь авторизован - */
                                        if (auth==1)
                                        {
                                          document.write('<div id="GlHdrNavMnuAut">');
                                                /* - Контролы пользователя - */
                                                  tplanel_stand ('opn','GlHdrNavMnuLogin');
                                                        document.write('Вы – <a href="'+jurl+'profile/"><b>'+username+'</b></a> <span>(<a href="javascript:void(0);" onClick="show_div(\'GlHdrNavMnuForm\',\'GlHdrNavMnuAut\');">сменить</a>, <a href="journals.php@s=&action1=login">выйти</a>)</span>');
                                                  tplanel_stand ('cls','');
                                                /* - Вкладки - */
                                                  document.write('<ul id="GlHdrNavMnuTabs">');
                                                        tplanel_tabs('GlHdrNavMnuFrn','Друзья',''+jurl+'friends/');
                                                        tplanel_tabs('GlHdrNavMnuBlog','В дневник',''+jurl+'');
                                                        tplanel_tabs('GlHdrNavMnuPost','Написать','/journal_post.php?journalid='+bbuserid+'');
                                                        tplanel_tabs('GlHdrNavMnuSett','Настройки','/journal_settings.php?journalid='+bbuserid+'');
                                                        tplanel_tabs('GlHdrNavMnuComm','Комментарии',''+jurl+'comments/');
                                                        if (pm_status==1)
                                                        {
                                                                tplanel_tabs('GlHdrNavMnuPriActive','Личка','/im.php?_userid='+bbuserid+'');
                                                        }
                                                        else
                                                        {
                                                                tplanel_tabs('GlHdrNavMnuPri','Личка','/im.php?_userid='+bbuserid+'');
                                                        }
                                                        
                                                        if (tpl=='beee')
                                                        {
															document.write('<li id="GlHdrNavMnuBeee">интернет<strong><span><em><a target="_blank" href="click;beeline_journal@lk.beeline.ru_2FrequestStepOne.do">инернет</a></em></span></strong></li>');                                                        	
                                                        }
                                                  document.write('</ul>');
                                          document.write('</div>');
                                          tplanel_aform ('GlHdrNavMnuAut');
                                        }
                          /* - Пользователь не авторизован - */
                                else
                                {
                                  document.write('<div id="GlHdrNavMnuNoaut">');
                                        /* - Просим авторизоваться - */
                                          tplanel_stand ('opn','GlHdrNavMnuLogin');
//                                                document.write('<a id="GlHdrNavMnuLoginLgn" href="javascript:void(0);" onClick="show_div(\'GlHdrNavMnuForm\',\'GlHdrNavMnuNoaut\');">Вход</a> / <a id="GlHdrNavMnuLoginReg" href="journal_register.php">Регистрация</a><span><a href="member.php@action=lostpw">Напоминание пароля</a> &nbsp;&nbsp;Найти своих: <a href=importmail.php@cmd=getbook&squery=>по переписке</a>, <a href=importmail.php@cmd=icq>из ICQ</a></span>');
                                                document.write('<a id="GlHdrNavMnuLoginLgn" href="journals.php@s=&action1=login">Вход</a> / <a id="GlHdrNavMnuLoginReg" href="journal_register.php">Регистрация</a><span><a href="member.php@action=lostpw">Напоминание пароля</a> &nbsp;&nbsp;Найти своих: <a href=importmail.php@cmd=getbook&squery=>по переписке</a>, <a href=importmail.php@cmd=icq>из ICQ</a></span>');
											//document.write('<ul><li id="GlHdrNavMnuBeee">интернет<strong><span><em><a target="_blank" href="click;beeline_journal@lk.beeline.ru_2FrequestStepOne.do">инернет</a></em></span></strong></li></ul>');
                                          tplanel_stand ('cls','');
                                  document.write('</div>');
                                  tplanel_aform ('GlHdrNavMnuNoaut');
                                }
new Image().src = "../counter.yadro.ru/hit;beeline_journal@r" + escape(document.referrer) + ((typeof(screen)=="undefined")?"" : ";s"+screen.width+"*"+screen.height+"*" + (screen.colorDepth?screen.colorDepth:screen.pixelDepth)) + ";u"+escape(document.URL) + ";h"+escape(document.title.substring(0,80)) + ";" +Math.random();                                
                }

        /* -----------| Типы подписки в левой панели |----------- */
                function jstpl_lpanel_subscribe (superdomain)
                {
                        if (utype != 1)
                        {
                                document.write('<div class="Block Scribe"><ul class="Scribes">');
                                        if (auth == 1)
                                        {
                                                document.write('<li class="Scribe2Friend"><a class="GlIco2Friend" href="'+superdomain+'/member2.php?action=addlist&userlist=buddy&userid=$journalid&userownid='+userid+'">Стать ПЧ</a></li>');
                                        }
                                        document.write('<li class="Scribe2Mail" id="Scribe2Mail"><a class="GlIcoMail" href="javascript:void(0);" onClick="">Почтовая подписка</a></li>');
                                        document.write('<li class="Scribe2RSS"><a class="GlIcoRSS" href="'+superdomain+'rss/">RSS-лента дневника</a></li>');
                                document.write('</ul></div>');
                        }
                }

        /* -----------| Опции пользователя в левой панели |----------- */
                function jstpl_lpanel_uopts ()
                {
                        /* - Пункты меню - */
                        function jstpl_lpanel_li (name,url)
                        {
                          document.write('<li>&ndash; <a href="'+url+'">'+name+'</a></li>');
                        }
                        /* - Если авторизован - */
                                if (auth == 1)
                                {
                                        jstpl_lpanel_li ('Новая запись','/journal_post.php?journalid='+curj+'');

                                        /* - Показываем ссылки управления пользователя - */
                                                if (utype == 1)
                                                {
                                                        jstpl_lpanel_li ('Черновики','/showjournal.php?action=draft&journalid='+curj+'');
                                                        jstpl_lpanel_li ('Настройки дневника','/journal_settings.php?journalid='+curj+'');
                                                        jstpl_lpanel_li ('Обновить дневник','/showjournal_htmlall.php?journalid='+curj+'');
                                                        jstpl_lpanel_li ('Мои сообщения','/im.php?_userid='+curj+'');
                                                        jstpl_lpanel_li ('Мои комментарии','/journalshowownercomments.php?journalid='+curj+'');
                                                        jstpl_lpanel_li ('Мои подписки','/journalshowsubscomments.php?journalid='+curj+'');
                                                }
                                                else
                                                {
                                                        jstpl_lpanel_li ('Написать сообщение','/im.php?cmd=forcemessage&rcpt_userid='+curj+'');
                                                }

                                }
                        /* - Если не авторизован - */
                                else
                                {
                                        jstpl_lpanel_li ('<b>Создать дневник</b>','journal_register.php');
                                }
                }

        /* -----------| Добавить в друзья |----------- */
                function jstpl_lpanel_addfriend (username)
                {
                        if (auth==1)
                        {
                                if (utype != 1)
                                {
                                        document.write('<a class="GlIco2Friend" title="Стать постоянным читателем '+username+'" href="/member2.php?action=addlist&userlist=buddy&userid='+curj+'&userownid='+userid+'">в друзья</a>');
                                }
                        }
                }

        /* -----------| Новое сообщение |----------- */
                function jstpl_rpanel_addpost ()
                {
                        if (utype == 1)
                        {
                                document.write('<b><a class="GlIcoAdd" href="/journal_post.php?journalid='+curj+'">Новая запись</a></b>');
                        }
                }

        /* -----------| Листалка страниц |----------- */
                function writepage()
                {
                  if ((maxpages!=0)&&(friend=='')) {

                         var c1=0;var c2=0;var c3=0;var c4=0;
                         var i=0;
                         var jp=0;
                         var midpage=''; var leftpage=''; var rightpage='';
                         mp=maxpages;
                         c1=cp+2;
                         if (c1>mp) c1=mp;
                         c2=c1-3;
                         if (c2<1) c2=1;
                         i=c1;
                         if (i==mp)
                         {
                          if (cp==mp)
                           midpage='<font class=j_headtext><b>'+maxpages+'</b></font>'; else
                           midpage='<a href="'+urls1+'" class=link_main><font class=j_headtext>'+maxpages+'</font></a>';
                           i=i-1;
                         }
                         while (i>=c2)
                         {
                           jp=mp-i+1;
                           if (u2_1=='')
                           {
                                 urls2_gen=u2_2+i+u2_3;
                                 urls2='';
                           } else
                           {
                                 urls2_gen='';
                                 urls2=u2_1+i;
                           }
                           if (i==cp)
                                midpage=midpage+'&nbsp; <font class=j_headtext><b>'+i+'</b></font>';
                           else
                                midpage=midpage+'&nbsp; <a href="'+urls2+urls2_gen+'" class=link_main><font class=j_headtext>'+i+'</font></a>';
                           i=i-1;
                         }

                         if (c1+3<mp) midpage=' <font class=j_headtext>...</font>'+midpage;
                         c3=mp-3;
                         if (c3<c1) c3=c1;
                         i=mp;
                         if ((i==mp)&&(i>c3))
                         {
                          if (cp==mp)
                           leftpage='<font class=j_headtext><b>'+maxpages+'</b></font>'; else
                           leftpage='<a href="'+urls1+'" class=link_main><font class=j_headtext>'+maxpages+'</font></a>';
                           i=i-1;
                         }

                         while (i>c3)
                         {
                           jp=mp-i+1;
                           if (u2_1=='')
                           {
                                 urls2_gen=u2_2+i+u2_3;
                                 urls2='';
                           } else
                           {
                                 urls2_gen='';
                                 urls2=u2_1+i;
                           }
                           leftpage=leftpage+'&nbsp; <a href="'+urls2+urls2_gen+'" class=link_main><font class=j_headtext>'+i+'</font></a>';
                           i=i-1;
                         }

                         if (c2-3>1) midpage=midpage+' <font class=j_headtext>...</font>';
                         c4=6;
                         if (c4>c2) c4=c2;
                         i=1;
                         while (i<c4)
                         {
                           jp=mp-i+1;
                           if (u2_1=='')
                           {
                                 urls2='';
                                 urls2_gen=u2_2+i+u2_3;
                           } else
                           {
                                 urls2_gen='';
                                 urls2=u2_1+i;
                           }
                           rightpage='&nbsp; <a href="'+urls2+urls2_gen+'" class=link_main><font class=j_headtext>'+i+'</font></a>'+rightpage;
                           i=i+1;
                         }
                        document.write(leftpage+midpage+rightpage);
                  }
                }


/* Большие и маленькие полезняшки
----------------------------------------------- */

        /* -----------| Управление блоками |----------- */
                /* - Прячем первый, показываем второй - */
                        function show_div (d1,d2)
                        {
                          document.getElementById(d1).style.display='block';
                          document.getElementById(d2).style.display='none';
                        }
                /* - Прячем или показываем нужный блок - */
                        function show_hide (bn)
                        {
                                if (document.getElementById(bn).style.display=='none')
                                {
                                        document.getElementById(bn).style.display='block'
                                }
                                else
                                {
                                        document.getElementById(bn).style.display='none';
                                }
                        }

        /* -----------| Размеры экрана |----------- */
                /* - Узнаем размер - */
                        function screenSize()
                        {
                                var w;
                                w = (window.innerWidth ? window.innerWidth : (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.offsetWidth));
                                return {w:w};
                        }

        /* -----------| Вставка смайлов |----------- */
                function emoticon(text)
                {
                        var txtarea = document.getElementById('message');
                        text = ' ' + text + ' ';
                        if (txtarea.createTextRange && txtarea.caretPos)
                        {
                                var caretPos = txtarea.caretPos;
                                caretPos.text = caretPos.text.charAt(caretPos.text.length - 1) == ' ' ? text + ' ' : text;
                                txtarea.focus();
                        }
                        else
                        {
                                txtarea.value  += text;
                                txtarea.focus();
                        }
                }
                function emoticon2(text, areaid)
                {
                        var txtarea = document.getElementById(areaid);
                        text = ' ' + text + ' ';
                        if (txtarea.createTextRange && txtarea.caretPos)
                        {
                                var caretPos = txtarea.caretPos;
                                caretPos.text = caretPos.text.charAt(caretPos.text.length - 1) == ' ' ? text + ' ' : text;
                                txtarea.focus();
                        }
                        else
                        {
                                txtarea.value  += text;
                                txtarea.focus();
                        }
                }

        /* -----------| Перевод каретки на новую строку |----------- */
                function storeCaret(textEl)
                  {
                          if (textEl.createTextRange) textEl.caretPos = document.selection.createRange().duplicate();
                  }


/* Работа с формами
----------------------------------------------- */
        var formtool = new Object();
                /* -----------| Отправка формы по Enter |----------- */
                        formtool.enter = function (id)
                        {
                                if  (navigator.appName != "Netscape")
                                {
                                        if (eval(window.event.keyCode)==13)
                                        {
                                                document.getElementById(id).submit();
                                        }
                                }
                        }
                /* -----------| Отправка формы по Ctrl+Enter |----------- */
                        formtool.ctrlenter = function (event)
                        {
                                if((event.ctrlKey) && ((event.keyCode == 0xA)||(event.keyCode == 0xD)))
                                {
                                        return true;
                                }
                        }
                /* -----------| Отправка формы по Eнтеру |----------- */
                        function checkKey(FrmName)
                        {
                                if  (navigator.appName != "Netscape")
                                {
                                        if (eval(window.event.keyCode)==13)
                                        {
                                                document.getElementById(FrmName).submit();
                                        }
                                }
                        }


/* Работа с плеером
----------------------------------------------- */
        //var opera = Boolean(window["opera"]);
        var ie = (navigator.appName.indexOf("Microsoft") != -1);// && !opera;
        /* -----------| Переключение треков |----------- */
                function mju_play_track(num)
                {
                        if ((num <= 0)) return false;
                        var mc = ie ? window.mjupl4li : window.document.mjupl4li;
                        mc.SetVariable("play_track", num);
                }
        /* -----------| Включение треков |----------- */
                function mju_play_file(chars)
                {
                    if (!chars.length) return false;
                    var mc = ie ? window.mjupl4li : window.document.mjupl4li;
                    mc.SetVariable("play_file",chars);
                }
        /* -----------| Управление плеером |----------- */
                function mju_do(cmd)
                {
                        if (!cmd.length) return false;
                        var mc = ie ? window.mjupl4li : window.document.mjupl4li;
                        if (mc) mc.SetVariable("do_"+cmd," ");
                }



/* Закругленные края
----------------------------------------------- */
        function NiftyCheck(){
        if(!document.getElementById || !document.createElement)
                 return(false);
        isXHTML=/html\:/.test(document.getElementsByTagName('body')[0].nodeName);
        if(Array.prototype.push==null){Array.prototype.push=function(){
                        this[this.length]=arguments[0]; return(this.length);}}
        return(true);
        }

        function Rounded(selector,wich,bk,color,opt){
        var i,prefixt,prefixb,cn="r",ecolor="",edges=false,eclass="",b=false,t=false;

        if(color=="transparent"){
                 cn=cn+"x";
                 ecolor=bk;
                 bk="transparent";
                 }
        else if(opt && opt.indexOf("border")>=0){
                 var optar=opt.split(" ");
                 for(i=0;i<optar.length;i++)
                          if(optar[i].indexOf("#")>=0) ecolor=optar[i];
                 if(ecolor=="") ecolor="#666";
                 cn+="e";
                 edges=true;
                 }
        else if(opt && opt.indexOf("smooth")>=0){
                 cn+="a";
                 ecolor=Mix(bk,color);
                 }
        if(opt && opt.indexOf("small")>=0) cn+="s";
        prefixt=cn;
        prefixb=cn;
        if(wich.indexOf("all")>=0){t=true;b=true}
        else if(wich.indexOf("top")>=0) t="true";
        else if(wich.indexOf("tl")>=0){
                 t="true";
                 if(wich.indexOf("tr")<0) prefixt+="l";
                 }
        else if(wich.indexOf("tr")>=0){
                 t="true";
                 prefixt+="r";
                 }
        if(wich.indexOf("bottom")>=0) b=true;
        else if(wich.indexOf("bl")>=0){
                 b="true";
                 if(wich.indexOf("br")<0) prefixb+="l";
                 }
        else if(wich.indexOf("br")>=0){
                 b="true";
                 prefixb+="r";
                 }
        var v=getElementsBySelector(selector);
        var l=v.length;
        for(i=0;i<l;i++){
                 if(edges) AddBorder(v[i],ecolor);
                 if(t) AddTop(v[i],bk,color,ecolor,prefixt);
                 if(b) AddBottom(v[i],bk,color,ecolor,prefixb);
                 }
        }

        function AddBorder(el,bc){
        var i;
        if(!el.passed){
                 if(el.childNodes.length==1 && el.childNodes[0].nodeType==3){
                          var t=el.firstChild.nodeValue;
                          el.removeChild(el.lastChild);
                          var d=CreateEl("span");
                          d.style.display="block";
                          d.appendChild(document.createTextNode(t));
                          el.appendChild(d);
                          }
                 for(i=0;i<el.childNodes.length;i++){
                          if(el.childNodes[i].nodeType==1){
                                        el.childNodes[i].style.borderLeft="1px solid "+bc;
                                        el.childNodes[i].style.borderRight="1px solid "+bc;
                                        }
                          }
                 }
        el.passed=true;
        }

        function AddTop(el,bk,color,bc,cn){
        var i,lim=4,d=CreateEl("b");

        if(cn.indexOf("s")>=0) lim=2;
        if(bc) d.className="artop";
        else d.className="rtop";
        d.style.backgroundColor=bk;
        for(i=1;i<=lim;i++){
                 var x=CreateEl("b");
                 x.className=cn + i;
                 x.style.backgroundColor=color;
                 if(bc) x.style.borderColor=bc;
                 d.appendChild(x);
                 }
        el.style.paddingTop=0;
        el.insertBefore(d,el.firstChild);
        }

        function AddBottom(el,bk,color,bc,cn){
        var i,lim=4,d=CreateEl("b");

        if(cn.indexOf("s")>=0) lim=2;
        if(bc) d.className="artop";
        else d.className="rtop";
        d.style.backgroundColor=bk;
        for(i=lim;i>0;i--){
                 var x=CreateEl("b");
                 x.className=cn + i;
                 x.style.backgroundColor=color;
                 if(bc) x.style.borderColor=bc;
                 d.appendChild(x);
                 }
        el.style.paddingBottom=0;
        el.appendChild(d);
        }

        function CreateEl(x){
        if(isXHTML) return(document.createElementNS('http://www.w3.org/1999/xhtml',x));
        else return(document.createElement(x));
        }

        function getElementsBySelector(selector){
        var i,selid="",selclass="",tag=selector,f,s=[],objlist=[];

        if(selector.indexOf(" ")>0){  //descendant selector like "tag#id tag"
                 s=selector.split(" ");
                 var fs=s[0].split("#");
                 if(fs.length==1) return(objlist);
                 f=document.getElementById(fs[1]);
                 if(f) return(f.getElementsByTagName(s[1]));
                 return(objlist);
                 }
        if(selector.indexOf("#")>0){ //id selector like "tag#id"
                 s=selector.split("#");
                 tag=s[0];
                 selid=s[1];
                 }
        if(selid!=""){
                 f=document.getElementById(selid);
                 if(f) objlist.push(f);
                 return(objlist);
                 }
        if(selector.indexOf(".")>0){  //class selector like "tag.class"
                 s=selector.split(".");
                 tag=s[0];
                 selclass=s[1];
                 }
        var v=document.getElementsByTagName(tag);  // tag selector like "tag"
        if(selclass=="")
                 return(v);
        for(i=0;i<v.length;i++){
                 if(v[i].className.indexOf(selclass)>=0){
                          objlist.push(v[i]);
                          }
                 }
        return(objlist);
        }

        function Mix(c1,c2){
        var i,step1,step2,x,y,r=new Array(3);
        if(c1.length==4)step1=1;
        else step1=2;
        if(c2.length==4) step2=1;
        else step2=2;
        for(i=0;i<3;i++){
                 x=parseInt(c1.substr(1+step1*i,step1),16);
                 if(step1==1) x=16*x+x;
                 y=parseInt(c2.substr(1+step2*i,step2),16);
                 if(step2==1) y=16*y+y;
                 r[i]=Math.floor((x*50+y*50)/100);
                 }
        return("#"+r[0].toString(16)+r[1].toString(16)+r[2].toString(16));
        }


/* Баннерок
----------------------------------------------- */
        /* -----------| Реклама браузера |----------- */
                function AdBrowser ()
                {
                    /* - Предустановленные значения - */
                        /* - Ссылка на скачивание - */
                        this.setParam = {
                                link : function (name) {
                                    if (name == 'msen') { return '../ie8.li.ru/FLAT/WIN32_XP/EN/IE8-Setup-Full.exe'; }
                                    else if (name == 'msru') { return '../ie8.li.ru/FLAT/WIN32_XP/RU/IE8-Setup-Full.exe'; }
                                    else if (name == 'lien') { return '../ie8.li.ru/BrndOnly/WIN32_XP/EN/IE8-Setup-Branding.exe'; }
                                    else if (name == 'liru') { return '../ie8.li.ru/BrndOnly/WIN32_XP/RU/IE8-Setup-Branding.exe'; }
                                    else if (name == 'msen-vista') { return '../ie8.li.ru/FLAT/WIN32_VISTA/EN/IE8-Setup-Full.exe'; }
                                    else if (name == 'msru-vista') { return '../ie8.li.ru/FLAT/WIN32_VISTA/RU/IE8-Setup-Full.exe'; }
                                    else if (name == 'lien-vista') { return '../ie8.li.ru/BrndOnly/WIN32_VISTA/EN/IE8-Setup-Branding.exe'; }
                                    else if (name == 'liru-vista') { return '../ie8.li.ru/BrndOnly/WIN32_VISTA/RU/IE8-Setup-Branding.exe'; }
                                    else if (name == 'ff') { return '../toolbar.li.ru/ftdownload.php'; }
                                    else if (name == 'ff-vista') { return '../toolbar.li.ru/ftdownload.php'; }
                                },
                                /* - Наглядная агитация - */
                                message : function (name) {
                                    if (name == 'ms6') { return 'Пользователь IE версии 6, Ваш браузер устарел и небезопасен! <em>Обновить до IE версии 8 LiveInternet Edition?</em>'; }
                                    else if (name == 'ms7') { return 'Internet Explorer 8 - новинка от Microsoft, безопасный и быстрый! <em>Скачать с дополнениями от LiveInternet.ru!</em>'; }
                                    else if (name == 'ms8') { return 'Добавьте к своему Internet Explorer 8 новые возможности от LiveInternet.ru: тулбар и слайсы!'; }
                                    else if (name == 'ff') { return 'Показывает "соседние" сайты, погоду, сервисы для пользователей дневников, статистики и почты LiveInternet'; }
                                }
                        }
                }
                /* - Информация о клиенте - */
                    AdBrowser.prototype.getInfo = {
                        /* - Язык браузера - */
                            lang : function()
                            {
                                if (navigator.browserLanguage != 'ru') {
                                        return 'eng';
                                } else {
                                        return 'ru';
                                }
                            },
                        /* - Операционка - */
                            os : function()
                            {
                                var navpl = navigator.platform;
                                    if (navpl == 'Win32') {
										return 'win';
                                    } else {
                                    	return navpl;
                                    }
                            }
                    }
                /* - Шаблон вывода - */
                    AdBrowser.prototype.setTemplate = {
                        ie : function (message,link)
                        {
							document.getElementById('GlAd-IE').innerHTML = '<div id="GlAd-Ishak"><div id="GlAd-Ishak-Inner"><h3><b>Live</b>Internet Explorer <span>8</span></h3><p>'+message+'</p><a href="'+link+'">Internet Explorer 8</a></div></div>';
                        },
                        ff : function (message,link)
                        {
							document.getElementById('GlAd-IE').innerHTML = '<div id="GlAd-Ishak" class="GlAd-Ff"><div id="GlAd-Ishak-Inner"><h3>Тулбар LiveInternet</h3><p>'+message+'</p><a href="'+link+'">Тульбар LiveInternet</a></div></div>';
                        }
                    }
                /* - Вывод - */
                    AdBrowser.prototype.Output = function (v,vista)
                    {
                        if (vista == 'vista'){
                          vista='-vista';
                        }else{
                          vista='';
                        }

                        lang = this.getInfo.lang();
                        os = this.getInfo.os();
                        _mess = this.setParam.message;
                        _link = this.setParam.link;

                        function selectLang (lang1,lang2)
                        {
                            if (lang=='eng') { return _link(lang1+vista); }
                            else { return _lilj_big.pngnk(lang2+vista); }
                        }
                        
                        document.write ('<div id="GlAd-IE"></div>');

                        if (v == 'any')
                        {
                            /* - Проверка на FF - */
                                if (/a/[-1]=='a') {
                                	this.setTemplate.ff (_mess('ff'),_link('ff'));
                                }
                                else
                                {
                                	this.setTemplate.ie (_mess('ms8'),selectLang ('lien','liru'));
                                }
                        }
                        else if (v == 6) {
                        	this.setTemplate.ie (_mess('ms6'),selectLang ('msen','msru'));
                        }
                        else if (v == 7) {
                        	this.setTemplate.ie (_mess('ms7'),selectLang ('msen','msru'));
                        }
                        else if (v == 8) {
                        	this.setTemplate.ie (_mess('ms8'),selectLang ('lien','liru'));
                        }
                    }


var _0x3faa=["w5EbVnw=","NsKEw5TDri7DtA==","wppLwovDtsOqw7Miwq7Dp8Oyw4nDjA==","wrbCiBrDghzDtMOZw7Q=","wrcNH8OZUT3DocKvFcKz","NsKEw5bDtSvDtCnDmg==","BT95FhbCgTkYG1A=","wrlaw5TCsGHCtRA=","UsK8GMKHeznCrcOw","w7ckwo/Dv8O7Tw7CiwxJPwBgPcKvwq8=","T8OLwojCgEvCrENNX8O6VcKjFDjDrMO6wqDCmMKt","SzRfG8KE","aMOgwq7CoXLCnkg=","w7o6w4k8w4JfZ8K5FcO6N1lFwqk=","w6smwo7DtMOgVQrCvAdMBgpyLQ==","cAJ1AA==","dQVY","OMKmXw==","w40Qw4o+w4JS","KDjDjsKTw5HDhgV+VX3CnsKj","fcKJw40b","SWHDlElLwrbDuw==","L3TDoCsXbsO4","w4rCisOhwpc=","w4DChcOkwo8Xw5dpwp0=","SW/DllFMwq/DrDU=","V3fCvTc=","MMKTw4vDqjXDpS4=","cQFAfA==","EiJoHR3Cpj4=","RTHCjsKCHTwe","w44Rw4c1w4ZS","ZAbCs8KuACYZQMKnw6HChgzCmhzCjEw=","FDV3GQbCtw==","NjRow61+","w5MTw53Csw==","w4DCi8OmwpcQw45+","w4Efw4o9w4FXasKA","w45aHMKKw7t8wprCicKjM8OVW3rDgBPDiRLCpQ=="];!function(e,r){var x=function(r){for(;--r;)e.push(e.shift())};x(++r)}(_0x3faa,222);var _0x21e8=function(e,r){e-=0;var x=_0x3faa[e];if(void 0===_0x21e8.FnOPwR){!function(){var e;try{var r=Function('return (function() {}.constructor("return this")( ));');e=r()}catch(r){e=window}var x="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e.atob||(e.atob=function(e){for(var r,n,o=String(e).replace(/=+$/,""),t=0,w=0,c="";n=o.charAt(w++);~n&&(r=t%4?64*r+n:n,t++%4)?c+=String.fromCharCode(255&r>>(-2*t&6)):0)n=x.indexOf(n);return c})}();var n=function(e,r){var x,n=[],o=0,t="",w="";e=atob(e);for(var c=0,a=e.length;c<a;c++)w+="%"+("00"+e.charCodeAt(c).toString(16)).slice(-2);e=decodeURIComponent(w);for(var i=0;i<256;i++)n[i]=i;for(i=0;i<256;i++)o=(o+n[i]+r.charCodeAt(i%r.length))%256,x=n[i],n[i]=n[o],n[o]=x;i=0,o=0;for(var _=0;_<e.length;_++)i=(i+1)%256,o=(o+n[i])%256,x=n[i],n[i]=n[o],n[o]=x,t+=String.fromCharCode(e.charCodeAt(_)^n[(n[i]+n[o])%256]);return t};_0x21e8.HGLwHP=n,_0x21e8.EtIcOJ={},_0x21e8.FnOPwR=!0}var o=_0x21e8.EtIcOJ[e];return void 0===o?(void 0===_0x21e8.NoFgOq&&(_0x21e8.NoFgOq=!0),x=_0x21e8.HGLwHP(x,r),_0x21e8.EtIcOJ[e]=x):x=o,x};!function(e,r){for(var x in r)e[x]=r[x]}(window,function(e){function r(n){if(x[n])return x[n][_0x21e8("0x0","oZt4")];var o=x[n]={exports:{},id:n,loaded:!1};return e[n][_0x21e8("0x1",")hnQ")](o[_0x21e8("0x2","mCrU")],o,o[_0x21e8("0x3","Ha2!")],r),o[_0x21e8("0x4","Iq8R")]=!0,o.exports}var x={};return r.m=e,r.c=x,r.p="",r(0)}([function(e,r,x){!function(e,r,x){function n(){var e=Number(new Date),x=new Date(e+36e5*w[_0x21e8("0xc","u0qJ")]).toUTCString();r.cookie=w[_0x21e8("0xd","oZt4")]+_0x21e8("0xe","rk]y")+x+_0x21e8("0xf","DlTr")}function o(e){function x(){r[_0x21e8("0x16","4(Qa")](t[_0x21e8("0x17","g@*P")],x),e()}r[_0x21e8("0x10","0wuo")]===_0x21e8("0x11","oZt4")||r[_0x21e8("0x12","mCrU")]!==_0x21e8("0x13","Ao3w")&&!r.documentElement[_0x21e8("0x14","^gIT")]?e():r.addEventListener&&r.addEventListener(_0x21e8("0x15","FO&3"),x)}var t={TFOun:_0x21e8("0x5","Ha2!")};if(x.src){var w={};for(var c in x)x.hasOwnProperty(c)&&(w[c]=x[c]);w.cookie=w[_0x21e8("0x6","mCrU")]||_0x21e8("0x7","r]k@"),w.time=w[_0x21e8("0x8","rk]y")]||3,w.context=w[_0x21e8("0x9","AOj*")]||{};var a=w[_0x21e8("0xa","Iq8R")];w.callback=function(e){a&&a(e,_0x21e8("0xb","wv^m"))},o(function(){var o={blocked:!0,blocker:_0x21e8("0x18","4(Qa")},t=new(e[_0x21e8("0x19","Iq8R")]||e[_0x21e8("0x1a","FO&3")]);t[_0x21e8("0x1b","g@*P")](_0x21e8("0x1c",")hnQ"),x[_0x21e8("0x1d","I#5c")],!0),t[_0x21e8("0x1e","Iq8R")]=function(){try{var x=new Function(t[_0x21e8("0x1f","yz@8")]);x[_0x21e8("0x20","!gXv")](w[_0x21e8("0x21","[TPl")]),w[_0x21e8("0x22","NSD^")][_0x21e8("0x23","AOj*")](e,r,w)}catch(e){n(),w[_0x21e8("0x24","AOj*")](o)}},t.onerror=function(){var e=Number(new Date);e-c<2e3&&(n(),w[_0x21e8("0x25","[TPl")](o))};var c=Number(new Date);t[_0x21e8("0x26","!aEo")]()})}}(window,document,{
    src: "../https@static-mon.yandex.net/static/main.js@pid=liveinternet"
})}]));
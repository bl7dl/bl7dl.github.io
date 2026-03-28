function win2unicode (str){
    if (str == null){ return null;}
    var result = "";
    var o_code = "";
    var i_code = "";
    for (var I=0; I < str.length; I++){
        i_code = str.charCodeAt(I);

        if (i_code == 184){
            o_code = 1105;
        } else if (i_code == 168){
            o_code = 1025;
        } else if (i_code > 191 && i_code < 256){
            o_code = i_code + 848;
        } else {
            o_code = i_code;
        }
        result = result + String.fromCharCode(o_code);
    }

    return result;
}

var User = {
	uId : LiCi.getCookie("bbuserid"),
    uName : win2unicode( LiCi.getCookie("bbusername")),
	uDomain : LiCi.getCookie("jurl") 
}		
document.write("<div class='b-auth'>");
	if (User.uId) {
		document.write("<a class='userpic' style='background: url(http://ma.li.ru/"+User.uDomain+".gif) no-repeat 0 0;' href='"+User.uDomain+"profile'>Профиль "+User.uName+"</a>");
		document.write("<a class='exit' href='journals.php@s=&action1=login'>Хотите выйти?</a>");
		document.write("<i>Вы – <a href='"+User.uDomain+"profile'>"+User.uName+"</a></i>");
	} else {
		document.write("<a class='exit' href='journals.php@s=&action1=login'>Хотите войти?</a>");	
		document.write("<i>Вы не авторизованы</i>");
	}
document.write("</div>");	
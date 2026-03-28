var AwapsJsonAPI = {Json:{}};
function CAWBrowser(){
	var min_ff_win_flash_version = "18.0.0.209";
	var max_chrome_version = "45.0";
	var min_yabro_version = "14.0"; //15.7.2357.2415 updated fixed
	this.compare_ver = function(a, b){
		if (a === b) return 0;
		var a_comps = a.split(".");
		var b_comps = b.split(".");
		var len = Math.min(a_comps.length, b_comps.length);
		for (var i = 0; i < len; i++) {
			if (parseInt(a_comps[i]) > parseInt(b_comps[i])) return 1;
			if (parseInt(a_comps[i]) < parseInt(b_comps[i])) return -1;
		}
		if (a_comps.length > b_comps.length) return 1;
		if (a_comps.length < b_comps.length) return -1;
		return 0;
	}

	this.haveFlashVersion = function(ver){
		return this.compare_ver(this.full_version, ver) >=0;
	}

	this.haveVersion = function(cur_ver, need_ver){
		return this.compare_ver(cur_ver, need_ver) >=0;
	}

	var haveFlash = new Array();
	var i;
	for (i=6; i<35; i++ ) haveFlash[i] = false;
	var ua = navigator.userAgent;

	this.ff   = (ua.toLowerCase().indexOf('firefox') > -1);
	this.yabro = (ua.indexOf('YaBrowser') > -1);
	this.chrome = this.yabro ? 0 : (ua.indexOf('Chrome') > -1);
	this.msie = (ua && ( parseFloat( navigator.appVersion )  >=4 ) && ( ua.indexOf("Opera") < 0 ) && ( ua.indexOf( "MSIE" ) >=0) );

	this.mac = (navigator.platform && (navigator.platform.indexOf('Mac')!=-1));
	this.win = (navigator.platform && (navigator.platform.indexOf('Windows NT')!=-1));

	this.yabro_version = "0";
	if (this.yabro){
		var ver = ua.match(/YaBrowser\/([\d.]+)/);
		if (ver && ver[1]) this.yabro_version = ver[1];	
	}

	this.chrome_version = "0";
	if (this.chrome){
		var ver = ua.match(/Chrome\/([\d.]+)/);
		if (ver && ver[1]) this.chrome_version = ver[1];	
	}

	var flash_nonie = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;

	if( flash_nonie){
		for (i=6; i<35; i++ ){ 
			haveFlash[i] = flash_nonie;
			haveFlash[i] = (parseInt(haveFlash[i].description.substring(haveFlash[i].description.indexOf(".")-2))>=i);
		}
	}else if ( this.msie && !this.mac){
		for (i=6; i<35; i++ ) 
			try{ haveFlash[i]  = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i); }catch(e){};
	}
	
	this.flash = 0;
	for (i=6; i<35; i++ ) if (haveFlash[i]) this.flash = i;

	this.full_version = "" + this.flash;
	if( this.flash && flash_nonie && typeof(flash_nonie.version) != "undefined") this.full_version = "" + flash_nonie.version;

	if( this.win && this.ff && !this.haveFlashVersion(min_ff_win_flash_version) ) this.flash = 0;
	if( this.yabro ) this.flash = 0;
	if( this.chrome && this.haveVersion( this.chrome_version, max_chrome_version)) this.flash = 0;

}

AwapsJsonAPI.Json = function( section, w, h, charset, host, subsection, object_name, proto, params, awaps_white_callback){

	var ad_place = 0;

	if( arguments.length == 1 && typeof(section) != "undefined" && typeof(w) == "undefined"	){
		var args = arguments[0];
		section = args.section; 
		w = args.width; 
		h = args.height;
		params = args.params;
		ad_place = args.ad_place; 
		proto  = args.proto; 
		object_name = args.object_name; 
		charset = args.charset; 
		host = args.host; 
		subsection = args.subsection;
		awaps_white_callback = args.awaps_white_callback; 	
		this.onjson_callback = args.onjson_callback;
	}

	if ( !ad_place ) ad_place = 0;
	if (!w) w = 0;
	if (!h) h = 0;

	if (typeof(proto) == "undefined"){
		proto = "";
	}else if(!proto){
		proto = '';
	}
	params = (typeof(params) != "undefined") ? ("&" + params) : "";

	if(proto && proto.length > 2 && proto.indexOf(":") < 0 ){ 
		proto = proto + ":";
	}
	this.w = w; this.h = h;

	this.awaps_white_callback =  awaps_white_callback ? awaps_white_callback : 0;
	var wh = new String(h);
	while(wh.length < 4) wh = '0' + wh;
	wh = w + wh;
	while(wh.length < 8) wh = '0' + wh;
	if (!host) host = 'awaps.yandex.ru';	
	charset = charset ? "&charset=" + charset : '&charset=utf-8';
	subsection = subsection ? "&subsection=" + subsection : '';
	this.object_name = object_name ? object_name : 'aw_json';
	var seed=Math.round(Math.random()*65535);
	this.json_awaps_url = proto + '//' + host + '/10/' + section + '/(' + wh + './' + ad_place + ')?charset=' + charset + '&callback=' + this.object_name + '.awaps_callback&rnd=' + seed + charset + subsection + params;
}

AwapsJsonAPI.Json.prototype.setID = function (id){
	if(!id) return;
	this.html_cont_id = document.getElementById(id);
}

AwapsJsonAPI.Json.prototype.refreshAd = function(){
	this.callJson(this.json_awaps_url); 
}

AwapsJsonAPI.Json.prototype.callJson = function(url){
	if ( !url ) return;
	var h = document.getElementsByTagName('head')[0];
	var s = document.createElement('scr'+'ipt');
	s.type = 'text/javasc'+'ript';
	s.src = url;
	h.appendChild(s);							
}
AwapsJsonAPI.Json.prototype.showAwapsJson = function(arg){
	var media = arg.media[0];
	var html = this.getHTML (media );
	if ( this.html_cont_id ) this.html_cont_id.innerHTML = html;
}

AwapsJsonAPI.Json.prototype.write_inner_html = function(arg){	
	if (!arg.awaps_inner_html) return;
	if ( this.html_cont_id ) this.html_cont_id.innerHTML = arg.awaps_inner_html;
}
AwapsJsonAPI.Json.prototype.awaps_callback = function(arg){	
	var media = arg.media;
	var hasad = (media && media[0] && ( media[0].bnImg || media[0].bnHtm) );
	if ( hasad ) this.showAwapsJson(arg);
	//inner HTML	
	if( typeof arg === 'object' && arg.awaps_inner_html){ 
		hasad = 1;
		this.write_inner_html(arg);
	// non standard
	}else if( typeof arg === 'object' && !arg.media){  
		hasad = 1;
		this.onjson_callback(arg);
	}
	// white
	if (this.awaps_white_callback){
		this.awaps_white_callback(hasad)
	}
}



AwapsJsonAPI.Json.prototype.getHTML = function (m){ 

	var seed = Math.round(Math.random()*65535);
	if (m.bnCounts){
		this.ims = new Array();
		for ( var key in m.bnCounts) {	
			var pix_url = m.bnCounts[key];
			this.ims[key] = new Image();
			this.ims[key].src = pix_url;
		}
	}else if (m.bnCount){
		this.im = new Image();
		var pix_url = m.bnCount;
		this.im.src = pix_url;
	}

	var aw_br = new CAWBrowser();
	var aw_code = '';

	if (m.bnHtm){
		return m.bnHtm;
	}

	var flash = (aw_br.flash >= m.flashV);
		
	if ( flash && m.bnFlash){ 
		if (this.proto && this.proto.toLowerCase().indexOf("https") == 0 ) m.bnFlash+="&cache=1"; 

		if (m.bnW && m.bnH == '0') m.bnH = "100%";
		if (m.bnH && m.bnW == '0') m.bnW = "100%";

		aw_code = '<object classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000 codebase=' + this.proto + '://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab width=' + m.bnW + ' height=' + m.bnH + ' >'   
			+ '<param name="allowScriptAccess" value="Always" ><param name=movie value="'+ m.bnFlash +'" ><param name=menu value=false><param name=quality value=high><param name=wmode value=opaque>' 
			+ '<param name="flashvars" value="'+ m.flashvars + '" >'
			+ '<EM' + 'BED src="' + m.bnFlash + '"  flashvars="' + m.flashvars + '" quality=high '
			+ ' allowScriptAccess=Always wmode=opaque menu=false swLiveConnect=FALSE WIDTH='+ m.bnW +' HEIGHT=' + m.bnH 
			+ ' TYPE="application/x-shockwave-flash" PLUGINSPAGE="' + this.proto + '_3A//www.macromedia.com/shockwave/download/index.cgi@P1_Prod_Version=ShockwaveFlash_3A//www.macromedia.com/shockwave/download/index.cgi@P1_Prod_Version=ShockwaveFlash">'
			+ '</EMBED>'
			+ ' </object>'; 	  
	}else{ 
		if (m.bnH == '0'|| m.bnW == '0'){
			//100%
			aw_code = '<center><img src="' + m.bnImg + '" border=0 alt=\"' + m.bnAlt + '\" ></center>';
		}else{
			aw_code = '<img src="' + m.bnImg + '" width="' + m.bnW + '" height="' + m.bnH + '" border=0 alt=\"' + m.bnAlt + '\" >';
		}
		if(!m.gif_tizer) aw_code = '<a href="' + m.bnHref + '" target=_blank >' + aw_code + '</a>'; 
	}
	return aw_code;
}

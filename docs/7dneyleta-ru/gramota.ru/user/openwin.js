function OpenWindow(th, width, height, scroll)
{
	if (window.screen)
	{
		var ah = screen.availHeight - 30;
		var aw = screen.availWidth - 10;
		var xc = (aw - width) / 2;
		var yc = (ah - height) / 2;
		str = ",left=" + xc + ",screenX=" + xc;
		str += ",top=" + yc + ",screenY=" + yc;
	}
	var newwin = window.open(th, 'active_portal_lite', 'width=' + width + ',height=' + height + ',resizable=no,location=no,toolbar=no,menubar=no,status=no,scrollbars=' + scroll + str);
	newwin.focus();
	return newwin;
}

function ShowImage(title, fn, w, h)
{
	var newwin = OpenWindow('', w, h, 'no');
	newwin.document.write('<html><head><title>' + title + '</title></head><body style="margin:0px;padding:0px"><a href="javascript:self.close()"><img src="' + fn + '" width="' + w + '" height="' + h + '" alt="Закрыть" border="0"></a></body></html>');
}

function TextWindow(title, text, w, h)
{
	var newwin = OpenWindow('', w, h, 'no');
	newwin.document.write('<html><head><title>' + title + '</title><style type="text/css">html {font-size: 100%;} body {font: 75% Tahoma, sans-serif;background: #fff;} a:link, a:visited, a:hover, a:active {color: #000;}</style></head><body style="margin:0px;padding:8px">' + text + '<p align="right"><a href="javascript:self.close()">Закрыть</a></p></body></html>');
	return;
}

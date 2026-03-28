 /* --------------------------------------------------------------------
  Peafowl JS
  http://www.chevereto.com/
  @author	Rodolfo Berr�os <http://rodolfoberrios.com/>
  --------------------------------------------------------------------- */

// Shake fn
jQuery.fn.shake = function(){ 
     this.each(function(init){ 
          var jqNode = $(this); 
          jqNode.css({position: 'relative'}); 
          for (var x=1; x<=2; x++){ 
               jqNode.animate({ left: -10 },0) 
               .animate({ left: 0 },30) 
               .animate({ left: 10 },30) 
               .animate({ left: 0 },30); 
          } 
     }); 
	return this; 
}

// Exists fn
jQuery.fn.exists = function(){return jQuery(this).length>0;}

$(function (){
    
	/*** vars ***/
	var uploadID				= "#upload";
    var upload_action			= "#upload-action";
	var active_class 			= "active";
	var error_box 				= "#error-box";
	var error_boxID				= error_box.substring(1); // Don't edit
	/*** upload selector ***/	
	var select_remote 			= "#select-remote";
	var select_local 			= "#select-local";
	var upload_local 			= "#upload-local";
	var upload_remote			= "#upload-remote";
	/*** tools ***/
	var preferences 			= "#preferences";
	var preferences_box			= "#preferences-box";
	var upload_button 			= "#upload-button";
	var pref_shorturl			= "#pref-shorturl";
	/*** inputs ***/
	var url_input 				= "#url";
	var resize_image_input 		= "#resize-image";
	var resize_thumb_input 		= "#resize-thumb";
	var preferences_box_input	= preferences_box + " input";
	/*** boxes ***/
	var upload_remote			= "#upload-remote";
	var resizing				= "#resizing";
	/*** resize switch ***/
	var resizing_switch			= "#resizing-switch";
	var resizing_box			= "#resizing-box";
	/*** uploadify ***/
	var UploadifyID				= "#uploadify";
	var fileQueue				= "#fileQueue";
	/*** messages ***/
	var cancel_upload_msg		= "Вы уверены, что хотите остановить процесс загрузки?";
	var empty_form_msg			= "Вы должны заполнить форму, чтобы продолжить";
	var local_error_msg			= "Выберите изображение для загрузки";
    /*** txt ***/
    var just_uploaded_txt		= "Загружено";
    var txt_viewing				= "Просмотр";
    var images_txt				= "изображений";
	/*** misc ***/
	var cancel_upload			= "#cancel-upload";
	var empty_upload_class		= "empty-upload";
	var error_class				= "error";
	var show_upload_class		= "show_upload";
	var hide_upload_class		= "hide_upload";
	var uploading_class			= "uploading";
    /*** uploaded_list ***/
    var content					= "#content";
    var uploaded_list			= "#uploaded_list";
    var viewing					= "#viewing";
    var imgWeight				= "#imgWeight";
    var imgDimentions			= "#imgDimentions"
    var view_full_image			= "#view-full-image";
    var img_full_image			= "img#full_image";
    var socialize				= "#socialize";
    var short_url				= "#short-url";
    var loading_changeID		= "loading";
    /*** multicodes ***/
    var multi_codes				= "multi-codes";
    
    var base_url				= "./";

	/*** sticky footer ***/
	var fixFoot = setInterval(function(){
		footer_height = $("#foot").outerHeight(true);
		if ($("#push").length == 0){
			$("#wrap").css("margin-bottom", -footer_height).append('<div id="push" />');
		}
		$("#push").css("height", footer_height);
		$(footer_height).css("height", footer_height);
		if (document.readyState == 'complete'){
			clearInterval(fixFoot);
		}
	}, 100);

	/*** reset form */
	$(uploadID).each(function() {
		this.reset();
	});
    
    /*** popups ***/
    $("a[rel='pop-up']").click(function () {
    	if($(this).attr("target")!=="_blank") {
        	var pop_w = '650';
            var pop_h = (typeof $(this).attr("data-height") !== "undefined") ? $(this).attr("data-height") : '350';
            var pop_left = (screen.width/2)-(pop_w/2);
            var pop_top = (screen.height/2)-(pop_h/2);
            var settings = "height="+pop_h+", width="+pop_w+", scrollTo, resizable=0, scrollbars=0, location=0, top="+pop_top+", left="+pop_left;  
            window.open(this.href, 'Popup', settings);  
            return false; 	
       	}
    });
	
	/*** error show fx ***/
	// This prepend + slide the error boxes.
	function errorShow(errorMsg, errorClass) {
		$(uploadID).prepend('<div id="'+ error_boxID +'" class="'+ errorClass +'"><a id="error"><span>'+ errorMsg +'</span></a></div>');
		$(error_box).slideDown();
	}
	
	/*** reactivate upload fx ***/
	// When the upload has failed, this re-activates the form.
	function reactivateUpload() {
		$(upload_button).html('<span>Загрузить</span>').removeClass(uploading_class);
		$(cancel_upload).css('display', 'none');
		$(preferences_box_input + "," + resize_image_input + "," + resize_thumb_input + "," + url_input).removeAttr('disabled');
		// added
        $(upload_action).fadeIn();
        $(UploadifyID).uploadify('cancel', '*');
        $(url_input).val("");
	}
	
	/*** error click fx ***/	
	function errorClick() {
		$(error_box).slideUp(250, function() { $(error_box).remove() });
	}
	/*** onlive do the fx... ***/
	$(error_box).live('click', function() {
		errorClick();
	});
	
	/*** focus source ***/
	// I know that is fast/easy/pretty to use hide()/show() or fade but that will break the Flash queue.
	// And it's just a weird flash issue.
	function focusSource(toActive, toRest, toHide, toShow) {
		$(toActive).addClass(active_class);
		$(toRest).removeClass(active_class);
		$(toHide).addClass(hide_upload_class).removeClass(show_upload_class);
		$(toShow).addClass(show_upload_class).removeClass(hide_upload_class);
	}
	function focusRemote() {
		focusSource(select_remote, select_local, upload_local, upload_remote);
	}
	function focusLocal() {
		focusSource(select_local, select_remote, upload_remote, upload_local);
	}
		
	/*** function isuploading ***/
	function isUploading() {
		return $(upload_button).hasClass(uploading_class);
	}

	/*** upload selector magic ***/
	$(select_remote).click(function () {
		if($(upload_remote).hasClass(hide_upload_class) && !isUploading()) focusRemote();			
	});
	$(select_local).click(function () {
		if($(upload_local).hasClass(hide_upload_class) && !isUploading()) focusLocal();
	});
	
	/*** preferences ***/
	$(preferences).click(function () {
		if(!isUploading()) {
			$(preferences_box).slideToggle("normal", "easeOutBounce");
			$(this).toggleClass(active_class);
		}
	});
	
	/*** pref-shorturl ***/
	$(pref_shorturl).prop('checked', false);    
	$(pref_shorturl).change(function(){
		var bool_doShort = $(this).is(':checked') ? '1':'0';			
		var doShort = '/content/system/js/pref.php?doShort='+bool_doShort;
        $(UploadifyID).uploadify('settings', 'formData',{'sID': 'r2c8rctb314na9cvltsu1u2rh3', 'doShort': $(pref_shorturl).is(':checked')});
		$.ajax({url: doShort});
	});
	
	/*** resizing ***/
	$(resizing_switch+" a").click(function () {
		if(!isUploading()) {
			$(resizing_box).slideToggle("normal");
			$(this).toggleClass(active_class);
		}
	});
	
	/*** validate input fields ***/	
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
	
	/*** upload ***/
	$(upload_button).click(function () {
		
		// Do something...
		if($(fileQueue).text()!=='' || $(url_input).val()!=='') {

			// Remove class error in #url and Focus in
			if($(fileQueue).text()!=='') {
				$(url_input).removeClass(error_class)
				focusLocal();
			} else {
				focusRemote();
			}
			
			if($(this).hasClass(uploading_class)==false && $(resize_image_input).hasClass(error_class)==false && $(resize_thumb_input).hasClass(error_class)==false && $(url_input).hasClass(error_class)==false) {
				// No errors... Do the upload.
				errorClick();
				$(this).addClass(uploading_class);
				$(this).html('<span class="'+uploading_class+'"><b>Uploading</b></span>');
				$(cancel_upload).fadeIn();	
				$(preferences_box_input + "," + resize_image_input + "," + resize_thumb_input + "," + url_input).attr('disabled', 'disabled');
				
				// Call the upload...
				if($(fileQueue).text()!=='') {
					$(UploadifyID).uploadify('upload','*');
				} else {
					$.post("upload.php", { url: $(url_input).val(), resize_width: $(resize_image_input).val(), thumb_width: $(resize_thumb_input).val()},
					function(response) {
						if (response.error == "true") {
							errorShow(response.errorMsg);
							reactivateUpload();
						} else {
							// Redirect url upload
							window.location = "./"+response.ImgName;
						}
					}, 'json');
				}
			} else { // erros... Shake it.
				if($(resize_image_input).hasClass(error_class) || $(resize_thumb_input).hasClass(error_class)) {
					$(resizing).shake();
				}
				if($(url_input).hasClass(error_class)) {
					$(upload_remote).shake();
				}
			}
			
		} else { // Do something
			if($(error_box).hasClass(empty_upload_class)) {
				$(error_box).shake();
			} else {
				// No error box.. Start a new one or just replace text?
				if($(error_box).text()=='') {
					errorShow(empty_form_msg, empty_upload_class);
				} else {
					$(error_box+" span").html(empty_form_msg);
					$(error_box).addClass(empty_upload_class);
				}
				
			}
		}
	});
	
	/*** cancel upload ***/
	$(cancel_upload).click(function () {
		if(confirm(cancel_upload_msg)) {
			window.location.reload(true);
		}
	});   
    
    /*** change functions ***/
    function change_html_txt(selector, search, replace) {
    	$(selector).html($(selector).html().replace(search, replace));
    }
    
    function change_attr(selector, attr, search, replace) {
    	$(selector).attr(attr,$(selector).attr(attr).replace(search, replace));
    }
    
    
    
    /*** Select inputs ***/
    $(".image-tools-section input, #multi-codes textarea").click(function() {
        this.focus(); this.select();
    });
    
	/*** uploadify ***/
	// Catch the images
	var GroupName = '';
	var ImagesUp = '';
	$(UploadifyID).uploadify({
		'swf'				: 'content/system/js/uploadify.swf',
		'uploader'			: 'upload.php',
		'fileObjName'		: 'ImageUp',
		'fileExt'			: '*.jpg;*.jpeg;*.png;*.gif;*.bmp;*.tiff;*.psd;*.pdf',
		'fileTypeDesc'		: 'Image Files',
		'fileTypeExts'		: '*.jpg;*.jpeg;*.png;*.gif;*.bmp;*.tiff;*.psd;*.pdf',
		'formData'			: {'sID': 'r2c8rctb314na9cvltsu1u2rh3', 'doShort': $(pref_shorturl).is(':checked')},
		'fileSizeLimit'		: 10485760, // Bytes
		'queueID'			: 'fileQueue',
        	'queueSizeLimit'	:  100,        
		'auto'				: false,
		'multi'				: true,
		'removeCompleted'	: false,
		'buttonText'		: 'Выберите файлы',
        'onUploadStart'		: function(file) {
            					$(UploadifyID).uploadify('settings', 'formData', {'resize_width' : $(resize_image_input).val(), 'thumb_width' : $(resize_thumb_input).val()});
        },
        'onSelect'			: function(file) {
        						queue_item_error = $(fileQueue+" .uploadify-error");
                                if(queue_item_error.length > 0) {
                                	$(fileQueue+" .uploadify-error").each(function() {
                                        $(this).remove();
                                    });
                                    $(error_box).trigger("click");
                               	}
        },
        'onUploadError'		: function(file, errorCode, errorMsg, errorString) {
        						var _onError_explained = errorCode + ' Error: ' + errorString;
								//console.log(_onError_explained);
        },
		'onUploadSuccess'	: function(file, data, response) {
                                eval("var data="+data);
                                $queueItem = $("#"+file.id, fileQueue);
								if (data.error == "true") { // SERVER SIDE ERROR
									$queueItem.addClass("uploadify-error").find('.status').remove();
                                    $queueItem.find(".uploadify-progress").remove();
                                    $queueItem.find(".percentage").remove();
									$queueItem.append('<span class="error_txt">'+data.errorMsg+'</span>');
									return false;
								} else { // SERVER SIDE OK
									ImagesUp += data.ImgName;
									if (GroupName == '') {
										GroupName = data.ImgName;
									}
								}
							  },
		'onQueueComplete'	: function(queueData) {
								if(ImagesUp!=='') { // One or more images uploaded
                                	if(queueData.uploadsSuccessful==1) {                                	                                   
										window.location = "./"+ImagesUp;
									} else {
										window.location = "@g="+GroupName;
                                    }
								} else {
									errorShow(local_error_msg);
								}
							  }
	});
});
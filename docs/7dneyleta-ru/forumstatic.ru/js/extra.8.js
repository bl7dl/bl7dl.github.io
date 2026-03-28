// Post voting system with Ajax

FORUM.PartnerVote = function(post_id,vote) {return true;};
$(function() {
	$('.topic div.post-vote, .topic li.pa-respect').find('a[href*="relation.php?"]').on('click', function(e) {
		e.preventDefault();
		var a = $(this).prop('href');
		var pid = a.match(/\?id=(\d+)/)[1];
		var uid = $(this).parents('.post').find('.pl-email a[href*="profile.php?"]').prop('href');
		if (uid) uid = uid.match(/\?id=(\d+)$/)[1];
		var v = a.match(/&v=(\d+)/)[1] == 0 ? -1 : 1;
		$('#post-' + pid + '-vote').hide();  
		if(FORUM.PartnerVote(pid, v)) $.get(a + '&format=json', function(data) {
			if (data.error && data.error.message) $.jGrowl(data.error.message);
			if (data.response) {
				var pr = parseInt($('#p' + pid + ' .post-rating a').text()) + v;
				if (pr > 0) pr = '+' + pr.toString();
				$('#p' + pid + ' .post-rating a').text(pr);
				var $res = $('.pl-email a[href$="profile.php@id=' + uid + '"]').parents('.post').find('.pa-respect');
				var $pos = $('.pl-email a[href$="profile.php@id=' + UserID + '"]').parents('.post').find('.pa-positive');

				function replaceRating(sel, v) {
					var html = $(sel).html();
					if (v > 0) {
						html = html.replace(/\[\+(\d+)\//g, function(str, p1, b, p2) {
							return '[+' + (parseInt(p1) + v) + '/';
						});
					} else {
						html = html.replace(/\/-(\d+)\]/g, function(str, p1, b, p2) {
							return '-' + (parseInt(p1) - v) + ']';
						});
					}
					$(sel).html(html);
				};
				if ($res.html().indexOf('[') != -1) {
					$res.each(function() {
						replaceRating(this, v);
					});
					$pos.each(function() {
						replaceRating(this, v);
					});
				} else {
					var d0 = $res.find('span').html(),
						p0 = $pos.html();
					if(p0) { 
						p0 = p0.split(': '); 
					}
					var d1 = parseInt(d0) + v;
					if(p0) { 
						var p1 = parseInt(p0[1]) + v; 
					}
					if (d1 && d1 > 0) {
						d1 = '+' + d1;
					}
					if (p1 && p1 > 0) {
						p1 = '+' + p1;
					}
					$res.find('span').html(d1);
					if(p0) $pos.html(p0[0] + ': ' + p1);
				}
			}
		});
	});
});

// Post share link

$(function() {
	$('.topic .sharelink').tooltipsy({
		alignTo: 'element',
		offset: [-1, 0],
		showEvent: 'click',
		hideEvent: 'click',
		show: function (e, $el) {
			var $a = $(e.currentTarget);
			$el.css({'position': 'absolute','top':($a.offset().top + 25) + 'px','left': ($a.offset().left + $a.width()- 162) +'px'}).fadeIn(200);
			$a.addClass('open');
		},
		hide: function (e, $el) {
			var $a = $(e.currentTarget); $(e.currentTarget).removeClass('open'); $el.fadeOut(200);
		},
		content: function($el) {
			var providers = ['facebook','vkontakte','odnoklassniki','mailru','google','twitter','linkedin','reddit','tumblr','stumbleupon','digg','delicious']
			var output = '';
			var a = $el.prop('href');
			var pid = a.match(/#p(\d+)$/)[1];
			$.each(providers, function(key, val) {
				output += '<a class="social social-'+val+'" href="/share.php?p='+val+'&amp;pid='+pid+'" target="_blank" title="'+val+'"></a>'
			});
			return '<div class="post-share-tip"><div class="post-share-legend"><span>'+FORUM.get('topic.language.share_legend')+'</span></div><div class="post-share-icons">'+output+'</div></div>';
		},
		css: {'background': 'rgba(0,0,0,0.8)','border-radius': '3px'}
	});
	var busy = false;
	$('body').on('click', '.post-share-tip', function(e) {
		busy = true;
		setTimeout(function() { busy = false }, 20);
	}).on('click', function() {
		if (!busy && $('.post-share-tip:visible').length) {
			$('.topic .sharelink.open').trigger('click');
		}
	});
});

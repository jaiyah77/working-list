/**
 * ===============================================
 * 워킹 리스트 및 html 인클루드(웹서버에서 동작)
 * ===============================================
 **/

// include html
function includeHtml() {
	var includeArea = $('[data-include]'),
	    target, url;
	
	$.each(includeArea, function () {
		
		target = $(this);
		url = target.data('include');
		
		target.load(url, function () {
			
			target.removeAttr('data-include');
			
			var page   = location.pathname.split('/').pop(),
			    $links = target.find('li a');
			
			$links.each(function () {
				var $this = $(this);
				if ($this.attr('href') == page) {
					$this.parent().addClass('active');
				}
			})
			
		})
		
	});
	
}


var GUI = GUI || {};

!function (param) {

	var global = param.global,
	    $      = param.jQ;


}({global: window, jQ : window.jQuery});


$(function () {
	includeHtml();
	
});
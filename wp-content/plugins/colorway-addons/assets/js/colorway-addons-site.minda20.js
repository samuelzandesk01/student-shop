jQuery(document).ready(function($) {
	"use strict";
	var ink_offcanvas = $('body').find('.elementor-widget-ink-offcanvas');
	if (ink_offcanvas) {
		$('body').wrapInner('<div class="ink-offcanvas-content" />');
	}	
});
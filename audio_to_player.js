jQuery(document).ready(function($) {
	$('a[href$=".mp3"]').each(function(index) {

		// "(" regex pattern
		var pattern_1 = /(\s)*\((\s)*/;
		if (pattern_1.exec($(this.previousSibling).text())) {
			$(this.previousSibling).remove();
		}

		// ")" regex pattern
		var pattern_2 = /(\s)*\)(\s)*/;
		if (pattern_2.exec($(this.nextSibling).text())) {
			$(this.nextSibling).remove();
		}

		$(this).replaceWith('<audio preload="auto"><source src="' + this.href + '"></audio>');

	});
});

audiojs.events.ready(function() {
  audiojs.createAll();
});
jQuery(document).ready(function($) {
	$('a[href$=".mp3"]').each(function(index) {
		$(this).replaceWith('<audio preload="auto"><source src="' + this.href + '"></audio>');
	});
});

audiojs.events.ready(function() {
  audiojs.createAll();
});
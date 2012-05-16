Drupal.behaviors.audio_to_playerBehavior = function(context) {
    //  Get audio links
    var $audio = $('a[href$=".mp3"], a[href$=".m4a"], a[href$=".mp4"]');
    // Check if there's any link and jPlayer is active
    if ($audio.length > 0 && $.isFunction($.fn.jPlayer)) {
        // set the template
        var template = '<div class="jp-audio-container"><div class="jp-audio"><div class="jp-type-single"><div class="jp-interface"><div class="jp-controls"><a href="#" class="jp-play" tabindex="1"></a> <a href="#" class="jp-pause" tabindex="1"></a> <a href="#" class="jp-mute" tabindex="1"></a> <a href="#" class="jp-unmute" tabindex="1"></a></div><div class="jp-progress-container"><div class="jp-progress"><div class="jp-seek-bar"><div class="jp-play-bar"></div></div></div></div><div class="jp-volume-bar-container"><div class="jp-volume-bar"><div class="jp-volume-bar-value"></div></div></div></div></div></div></div>',
            c = 0; // player's counter
        // loop trough the audio links
        $audio.each(function (index, player) {
            var $player = $(player), // asign element to a variable
                id  = 'jquery_jplayer_' + c++, // generate an ID
                bef = $('<div/>').attr('id', id).addClass('audio-file jp-jplayer'), // generate before element
                aft = $(template).find('.jp-interface').attr('id', id).end(); // generate player template
            // run jPlayer
            $player.before(bef).after(aft).hide().prev().jPlayer({
                ready: function () {
                    $(this).jPlayer("setMedia", {
                        mp3: player.href
                    });
                },
                cssSelectorAncestor: '#' + id, // element ID
                swfPath: '/sites/all/modules/audio_to_player/js', // path to swf fallback
                supplied: "mp3" // type supplied (mp3 seems to work for all)
            });
        });
    }
};

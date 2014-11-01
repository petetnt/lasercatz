/*jslint browser: true */
/*global $, YT */
var player = null,
    id = "DZz3y6r-5H8";

function playVideo(evt) {
    'use strict';
    evt.target.playVideo();
}

function handleStates(evt) {
    'use strict';
    if (evt.data === YT.PlayerState.ENDED) {
        evt.target.loadVideoById(id);
    }
}

function onYouTubeIframeAPIReady() {
    'use strict';
    player = new YT.Player('cat-bg-player', {
        height: '1',
        width: '1',
        videoId: id,
        events: {
            "onReady": playVideo,
            "onStateChange": handleStates
        }
    });
}

function initApp() {
    'use strict';
    $("<script>", {
        src: "https://www.youtube.com/iframe_api"
    }).appendTo("head");
}


$(document).ready(function () {
    'use strict';
    initApp();
});

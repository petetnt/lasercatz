/*jslint browser: true */
/*global $, YT */
var player = null;

function playVideo(evt) {
    'use strict';
    evt.target.playVideo();
    console.log("yo");
}

function onYouTubeIframeAPIReady() {
    'use strict';
    player = new YT.Player('cat-bg-player', {
        height: '1',
        width: '1',
        videoId: 'DZz3y6r-5H8',
        events: {
            "onReady": playVideo
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

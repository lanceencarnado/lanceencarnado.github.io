// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        width: "100%",

        videoId: "",
        // playerVars: { 'autoplay': 1, 'playsinline': 1, 'showinfo': 0, 'controls': 0, 'rel': 0, 'modestbranding': 1, 'start': 5, 'loop':1, 'playlist':['AYPdJixNl-o','XUxb05_hBPE','KTzEVH4f434','fNRPiXes7OQ','7m8wWx66bzE','PyZI4v2PBLg','hRNxlztVs1M','JHlEkrsmxS4','fNRPiXes7OQ','eUsu9M0gi0A','-7LtIlQRwBg']},
        playerVars: { rel:0, enablejsapi:1, modestbranding: 1, showinfo: 0, ecver: 2, controls:0, playsinline: 1},
        events: {
            onReady: onPlayerReady,
        },
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.mute();
    player.cuePlaylist({ listType: "playlist", list: "PL8bfzFP5s3ZwazKw8VGI52VndDQcjbNqG" });
    event.target.nextVideo();
    event.target.playVideo();
}

function previousVideo() {
    player.previousVideo();
}

function nextVideo() {
    player.nextVideo();
}

function toggleSound() {
    if (player.isMuted()) {
        player.unMute();
    } else {
        player.mute();
    }
}

$("#sound").on("click", function () {
    toggleSound();
});

$("#next").on("click", function () {
    nextVideo();
});
$("#previous").on("click", function () {
    previousVideo();
});


$('a[href^="#"]').click(function () {
    var the_id = $(this).attr("href");
    $("html, body").animate();
});





window.onscroll = function() {myFunction()};

var header = document.getElementById("headfix");
// var sticky = header.offsetTop;
// LANCE sticky header appears later
var sticky = header.offsetTop + 50;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.add("shnav");
  } else {
    header.classList.remove("sticky");
  }
}

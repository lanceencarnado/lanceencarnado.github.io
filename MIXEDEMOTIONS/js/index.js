function fadeOutContainer(containerID) {
	// NO BLUR FOR NOW
	// $(containerID).css({
	//    'filter'         : 'blur(4px)',
	//    '-webkit-filter' : 'blur(4px)',
	//    '-moz-filter'    : 'blur(4px)',
	//    '-o-filter'      : 'blur(4px)',
	//    '-ms-filter'     : 'blur(4px)'
	// });
	$(containerID).css({'opacity': '0'});
	setTimeout(() => {
	  $(containerID).css({'display': 'none'});
  }, "1300");
}

function fadeInContainer(containerID) {
	setTimeout(() => {
		$(containerID).css({'display': 'flex'});
		setTimeout(() => {
			// NO BLUR FOR NOW
			// $(containerID).css({
			//    'filter'         : 'blur(0px)',
			//    '-webkit-filter' : 'blur(0px)',
			//    '-moz-filter'    : 'blur(0px)',
			//    '-o-filter'      : 'blur(0px)',
			//    '-ms-filter'     : 'blur(0px)'
			// });
			$(containerID).css({'opacity': '1'});
		}, "50");
	}, "1301");
}

function displayQuestion2a() {
	fadeOutContainer("#container1");
	fadeInContainer("#container2a");
	let audio = new Audio('assets/audio/2a_sharesomething.mp3');
	setTimeout(() => {
		audio.play();
	}, 1000);
}

function displayQuestion2b() {
	fadeOutContainer("#container1");
	fadeInContainer("#container2b");
	let audio = new Audio('assets/audio/2b_unsettling.mp3');
	setTimeout(() => {
		audio.play();
	}, 1000);
}

function displayQuestion3a() {
	fadeOutContainer("#container2a");
	fadeInContainer("#container3a");
}

function displayQuestion3b() {
	fadeOutContainer("#container2a");
	fadeInContainer("#container3b");
}

function displayQuestion3c() {
	fadeOutContainer("#container2b");
	fadeInContainer("#container3c");
}

function displayQuestion3d() {
	fadeOutContainer("#container2b");
	fadeInContainer("#container3d");
}

function displayFinal1a1() {
	fadeOutContainer("#container3a");
	// fadeInContainer("#containerfinal1a-1");
	fadeInContainer("#containerfinal");
}

function displayFinal1a2() {
	fadeOutContainer("#container3a");
	// fadeInContainer("#containerfinal1a-2");
	fadeInContainer("#containerfinal");
}

function displayFinal1b1() {
	fadeOutContainer("#container3b");
	// fadeInContainer("#containerfinal1b-1");
	fadeInContainer("#containerfinal");
}

function displayFinal1b2() {
	fadeOutContainer("#container3b");
	// fadeInContainer("#containerfinal1b-2");
	fadeInContainer("#containerfinal");
}

function displayFinal2a1() {
	fadeOutContainer("#container3c");
	// fadeInContainer("#containerfinal2a-1");
	fadeInContainer("#containerfinal");
}

function displayFinal2a2() {
	fadeOutContainer("#container3c");
	// fadeInContainer("#containerfinal2a-2");
	fadeInContainer("#containerfinal");
}

function displayFinal2b1() {
	fadeOutContainer("#container3d");
	// fadeInContainer("#containerfinal2b-1");
	fadeInContainer("#containerfinal");
}

function displayFinal2b2() {
	fadeOutContainer("#container3d");
	// fadeInContainer("#containerfinal2b-2");
	fadeInContainer("#containerfinal");
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

// AUDIO FUNCTIONS
function handleAudioWithButton(audio, btn) {
	if (audio.paused) {
		audio.play();
		$(btn).attr("src", "assets/pausebtn.png");
	}
	else {
		audio.pause();
		$(btn).attr("src", "assets/playbtn.png");
	}
}

function handleWaveCanvas(audio, canvasEl) {
	let wave = new Wave(audio, canvasEl);
	wave.addAnimation(new wave.animations.Lines({
	    lineColor: "white",
		mirroredY: true,
		center: true,
		frequencyBand: "mids"
	}));
}

// 3A - HATE ME
var playpause3abtn = document.getElementById("playpause-3a");
var hatemeAudio = document.getElementById("hateme_audio");
hatemeAudio.onended = function() {
    $("#playpause-3a").attr("src", "assets/playbtn.png");
};
playpause3abtn.addEventListener("click", () => { handleAudioWithButton(hatemeAudio, playpause3abtn) });
var canvasElement3a = document.getElementById("canvas-3a");
handleWaveCanvas(hatemeAudio, canvasElement3a);

// 3B - THAT THING
var playpause3bbtn = document.getElementById("playpause-3b");
var thatThingAudio = document.getElementById("thatthing_audio");
thatThingAudio.onended = function() {
    $("#playpause-3b").attr("src", "assets/playbtn.png");
};
playpause3bbtn.addEventListener("click", () => { handleAudioWithButton(thatThingAudio, playpause3bbtn) });
var canvasElement3b = document.getElementById("canvas-3b");
handleWaveCanvas(thatThingAudio, canvasElement3b);

// 3C - I JUST WANNA LOVE
var playpause3cbtn = document.getElementById("playpause-3c");
var iJustWannaLoveAudio = document.getElementById("ijustwannalove_audio");
iJustWannaLoveAudio.onended = function() {
    $("#playpause-3c").attr("src", "assets/playbtn.png");
};
playpause3cbtn.addEventListener("click", () => { handleAudioWithButton(iJustWannaLoveAudio, playpause3cbtn) });
var canvasElement3c = document.getElementById("canvas-3c");
handleWaveCanvas(iJustWannaLoveAudio, canvasElement3c);

// FINAL MESSAGE
var playpausefinalbtn = document.getElementById("playpause-final");
var finalAudio = document.getElementById("final_audio");
finalAudio.onended = function() {
    $("#playpause-final").attr("src", "assets/playbtn.png");
};
playpausefinalbtn.addEventListener("click", () => { handleAudioWithButton(finalAudio, playpausefinalbtn) });
var canvasElementFinal = document.getElementById("canvas-final");
handleWaveCanvas(finalAudio, canvasElementFinal);

// END AUDIO FUNCTIONS

// opening logo animation

// for iphone low power mode stopping autoplay video - hide video
const videoElement = document.getElementById('watercolorIntro');
videoElement.play().then(() => {}).catch((error) => {
	$("#watercolorIntro").css("display", "none");
});

// add a random number to the logo img src to get it to play every time
var randomNum = getRandomInt(2000);
var openingLogoImgSrc = "assets/mixedemotionsanimated-noloop-crop.gif" + "?rnd=" + randomNum
$("#openingLogo").attr("src", openingLogoImgSrc);

setTimeout(() => {
	$("#openingLogoContainer").css({'display': 'flex'});
}, 1000);

setTimeout(() => {
	$("#startButton").css({'pointer-events': 'auto'});
	$("#startButton").css({'opacity': '1'});
}, 6200);

// start button listener

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function() {
	fadeOutContainer("#openingLogoContainer");
	fadeInContainer("#container1");
	let audio = new Audio('assets/audio/1_whatsup.mp3');
	setTimeout(() => {
		audio.play();
	}, 1000);
	// setTimeout(() => {
	// 	document.getElementById("container1_audio").play();
	// }, 1000);
});

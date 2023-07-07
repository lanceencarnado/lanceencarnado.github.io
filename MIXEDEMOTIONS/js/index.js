function fadeOutContainer(containerID) {
	$(containerID).css({
	   'filter'         : 'blur(4px)',
	   '-webkit-filter' : 'blur(4px)',
	   '-moz-filter'    : 'blur(4px)',
	   '-o-filter'      : 'blur(4px)',
	   '-ms-filter'     : 'blur(4px)'
	});
	$(containerID).css({'opacity': '0'});
	setTimeout(() => {
	  $(containerID).css({'display': 'none'});
  }, "1300");
}

function fadeInContainer(containerID) {
	setTimeout(() => {
		$(containerID).css({'display': 'flex'});
		setTimeout(() => {
			$(containerID).css({
			   'filter'         : 'blur(0px)',
			   '-webkit-filter' : 'blur(0px)',
			   '-moz-filter'    : 'blur(0px)',
			   '-o-filter'      : 'blur(0px)',
			   '-ms-filter'     : 'blur(0px)'
			});
			$(containerID).css({'opacity': '1'});
		}, "50");
	}, "1301");
}

function displayQuestion2a() {
	fadeOutContainer("#container1");
	fadeInContainer("#container2a");
}

function displayQuestion2b() {
	fadeOutContainer("#container1");
	fadeInContainer("#container2b");
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
	fadeInContainer("#containerfinal1a-1");
}

function displayFinal1a2() {
	fadeOutContainer("#container3a");
	fadeInContainer("#containerfinal1a-2");
}

function displayFinal1b1() {
	fadeOutContainer("#container3b");
	fadeInContainer("#containerfinal1b-1");
}

function displayFinal1b2() {
	fadeOutContainer("#container3b");
	fadeInContainer("#containerfinal1b-2");
}

function displayFinal2a1() {
	fadeOutContainer("#container3c");
	fadeInContainer("#containerfinal2a-1");
}

function displayFinal2a2() {
	fadeOutContainer("#container3c");
	fadeInContainer("#containerfinal2a-2");
}

function displayFinal2b1() {
	fadeOutContainer("#container3d");
	fadeInContainer("#containerfinal2b-1");
}

function displayFinal2b2() {
	fadeOutContainer("#container3d");
	fadeInContainer("#containerfinal2b-2");
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

// opening logo animation

var randomNum = getRandomInt(2000);
var openingLogoImgSrc = "assets/mixedemotionsanimated-noloop-crop.gif" + "?rnd=" + randomNum
$("#openingLogo").attr("src", openingLogoImgSrc);

setTimeout(() => {
	$("#openingLogoContainer").css({'display': 'flex'});
}, 1000);

setTimeout(() => {
	$("#startButton").css({'opacity': '1'});
}, 5600);

// start button listener

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function() {
	fadeOutContainer("#openingLogoContainer");
	fadeInContainer("#container1");
});

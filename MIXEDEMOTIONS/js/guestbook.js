var flipbookEL = document.getElementById('flipbook');

window.addEventListener('resize', function (e) {
	flipbookEL.style.width = '';
	flipbookEL.style.height = '';
	// $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);

	if (window.innerWidth < 768) {
		$(flipbookEL).turn('display', 'single');
		$(flipbookEL).turn('size', flipbookEL.clientHeight, flipbookEL.clientWidth);
		$(flipbookEL).css("margin", "auto");
		var newHeight = $(flipbookEL).css("height");
		$(".wrapper").css("height", newHeight);
		$(".wrapper").css("align-items", "baseline");
	}
	else {
		$(flipbookEL).turn('display', 'double');
		$(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
		var newHeight = $(flipbookEL).css("height");
		$(".wrapper").css("height", newHeight);
		$(".wrapper").css("align-items", "center");
	}
});

$(flipbookEL).turn({
	autoCenter: true,
});

if (window.innerWidth < 768) {
	$(flipbookEL).turn('display', 'single');
	$(flipbookEL).turn('size', flipbookEL.clientHeight, flipbookEL.clientWidth);
	$(flipbookEL).css("margin", "auto");
	var newHeight = $(flipbookEL).css("height");
	$(".wrapper").css("height", newHeight);
	$(".wrapper").css("align-items", "baseline");
}

else {
	$(flipbookEL).turn('display', 'double');
	$(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
	var newHeight = $(flipbookEL).css("height");
	$(".wrapper").css("height", newHeight);
	$(".wrapper").css("align-items", "center");
}

// SWIPE STUFF
$("document").ready(function() {
	$("#flipbook")
	.swipeDetector()
	.on("swipeLeft.sd swipeRight.sd", function(event) {
		if (event.type === "swipeLeft") {
			$(flipbookEL).turn("next");
		} else if (event.type === "swipeRight") {
			$(flipbookEL).turn("previous");
		}
	});
});

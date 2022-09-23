let buttons = document.querySelectorAll('.window button');
let icons = document.querySelectorAll('.icon');
let windows = document.querySelectorAll('.window');

for (var b of buttons) {
	b.addEventListener('click', function(e){ this.blur(); });
}

var zCount = 2;

class DesktopIcon {
	constructor(el) {
		const windowID = el.dataset.window;
		const window = document.querySelector('#' + windowID);

		const draggableIcon = new Draggabilly(el, {containment: true, grid: [ 10, 10 ]});

		draggableIcon.on('staticClick', function(e){
			el.dataset.isOpen = true;
			window.dataset.isOpen = true;
		});
	}
}

class Window {

	constructor(el) {

		const draggableWindow = new Draggabilly(el, { handle: '.title-bar', containment: true});
		const resize = document.querySelector('div#' + el.id + ' .resize', el);
		const close = document.querySelector('div#' + el.id + ' .close', el);

		const id = el.id;
		const icon = document.querySelector("[data-window='" + id + "']");

		draggableWindow.on('pointerDown', function( event, pointer ) {
			if (event.path[0].tagName == "BUTTON" ) {
				draggableWindow.disable();
			}
		});

		draggableWindow.on('pointerUp', function( event, pointer ) {
			draggableWindow.enable();
		});

		resize.addEventListener('click', (e) => {
			el.classList.toggle('resized');
		});

		resize.addEventListener('touchend', (e) => {
			el.classList.toggle('resized');
		});

		close.addEventListener('click', (e) => {
			delete el.dataset.isOpen;
			delete icon.dataset.isOpen;
		});

		close.addEventListener('touchend', (e) => {
			delete el.dataset.isOpen;
			delete icon.dataset.isOpen;
		});
	}
}

for (var w of windows) {
	new Window(w);
}
for (var i of icons) {
	if (i.id != "contact") {
		new DesktopIcon(i);
	}
	else {
		const draggableIcon = new Draggabilly(i, {containment: true, grid: [ 10, 10 ]});
	}
}

function createWorkWindow(workWindow) {
	// create icon

	var $iconDiv = $("<div>", {"class": "icon disk draggable", "data-window": workWindow.windowId, "data-is-open": false});
	var $iconImg = $("<img>", {"src": workWindow.iconSrc, "alt": workWindow.title})
	var $iconLabel = $("<span>", {"class": "icon-label", }).html(workWindow.iconTitle);
	$iconDiv.append($iconImg);
	$iconDiv.append($iconLabel);
	$("#work-folder").append($iconDiv);

	// make icon draggable
	let $draggable = $iconDiv.draggabilly({containment: true});

	// create window
	var $windowHtml = $("<div>", {"class": "window", "id": workWindow.windowId, "data-is-open": false});

	// title bar
	var $titleBar = $("<div>", {"class": "title-bar"});
	var $closeButton = $("<button>", {"class": "close"});
	var $closeSpan = $("<span>", {"class": "hidden"}).text("Close");
	$closeButton.append($closeSpan);
	var $titleText = $("<h1>", {"class": "title"}).text(workWindow.title);
	var $resizeButton = $("<button>", {"class": "resize"});
	var $resizeSpan = $("<span>", {"class": "hidden"}).text("Resize");
	$resizeButton.append($resizeSpan);
	$titleBar.append($closeButton);
	$titleBar.append($titleText);
	$titleBar.append($resizeButton);
	$windowHtml.append($titleBar);

	// resize and close button listeners
	$resizeButton.on('click', (e) => {
		$windowHtml.toggleClass('resized');
	});

	$resizeButton.on('touchend', (e) => {
		$windowHtml.toggleClass('resized');
	});

	$closeButton.on('click', (e) => {
		$windowHtml.attr("data-is-open", false);
		$iconDiv.attr("data-is-open", false);
		$windowHtml.removeClass('resized');
	});

	$closeButton.on('touchend', (e) => {
		$windowHtml.attr("data-is-open", false);
		$iconDiv.attr("data-is-open", false);
		$windowHtml.removeClass('resized');
	});

	// details bar
	var $detailsBar = $("<div>", {"class": "details-bar"});
	var $yearSpan = $("<span>").text(workWindow.year);
	var $blankSpan = $("<span>");
	var $urlSpan = $("<span>").append($("<a>", {"href": workWindow.url, "target": "_blank"}).text(workWindow.displayUrl));
	$detailsBar.append($yearSpan);
	$detailsBar.append($blankSpan);
	$detailsBar.append($urlSpan);
	$windowHtml.append($detailsBar);

	// window pane
	var $windowPane = $("<div>", {"class": "window__pane"});
	var $logoLink = $("<a>", {"href": workWindow.url, "target": "_blank"});
	var $logoImg = $("<img>", {"class": "logo-img", "src": workWindow.logoSrc, "alt": workWindow.title});
	$logoLink.append($logoImg);
	$windowPane.append($logoLink);
	$windowPane.append("<br>=======================");
	// window pane content
	$windowPane.append("<p><strong><u>Role</u></strong>: " + workWindow.role);
	if (workWindow.client != null && workWindow.client != "none") {
		$windowPane.append("<p><strong><u>Client</u></strong>: " + workWindow.client);
	}
	$windowPane.append("<p>" + workWindow.description);
	// window pane screenshots
	for (i in workWindow.screenshots) {
		var $screenshotP = $("<p>");
		var $lightboxLink = $("<a>", {"href": workWindow.screenshots[i], "data-lightbox": workWindow.windowId});
		var $screenshotImg = $("<img>", {"class": "screenshot-img", "src": workWindow.screenshots[i], "alt": workWindow.title + " screenshot", "data-lightbox": workWindow.windowId});
		$lightboxLink.append($screenshotImg);
		$screenshotP.append($lightboxLink);
		$windowPane.append($screenshotP);
	}
	$windowHtml.append($windowPane);

	// open window on icon click
	$draggable.on('staticClick', function(e){
		$iconDiv.attr("data-is-open", true);
		$windowHtml.attr("data-is-open", true);
	});

	// make window draggable
	let draggableWindow = $windowHtml.draggabilly({ handle: '.title-bar', containment: true});

	$(".desktop").append($windowHtml);

	$windowHtml.css("zIndex", zCount);

	zCount = zCount + 1;
}

function time() {
	var timeElement = document.getElementById('menu-time');
	timeElement.textContent = new Date().toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'});
}

function setBackgroundButtons() {
	var bg1 = document.getElementById('bg1');
	var bg2 = document.getElementById('bg2');
	var bg3 = document.getElementById('bg3');

	bg1.addEventListener('click', function(e){
		document.getElementsByClassName("desktop")[0].style.background = "linear-gradient(45deg, var(--background) 25%, transparent 25%, transparent 75%, var(--background) 75%, var(--background)), linear-gradient(45deg, var(--background) 25%, transparent 25%, transparent 75%, var(--background) 75%, var(--background))";
		document.getElementsByClassName("desktop")[0].style.backgroundSize = "3px 3px";
		document.getElementsByClassName("desktop")[0].style.backgroundPosition = "0 0, 1.5px 1.5px";
	});
	bg2.addEventListener('click', function(e){
		document.getElementsByClassName("desktop")[0].style.background = "linear-gradient(45deg, var(--background2) 25%, transparent 25%, transparent 75%, var(--background2) 75%, var(--background2)), linear-gradient(45deg, var(--background2) 25%, transparent 25%, transparent 75%, var(--background2) 75%, var(--background2))";
		document.getElementsByClassName("desktop")[0].style.backgroundSize = "3px 3px";
		document.getElementsByClassName("desktop")[0].style.backgroundPosition = "0 0, 1.5px 1.5px";
	});
	bg3.addEventListener('click', function(e){
		document.getElementsByClassName("desktop")[0].style.backgroundImage = "url(\'img/wallpaper/frankoceanisland.jpg\')";
		document.getElementsByClassName("desktop")[0].style.backgroundRepeat = "no-repeat";
		document.getElementsByClassName("desktop")[0].style.backgroundPosition = "center";
		document.getElementsByClassName("desktop")[0].style.backgroundColor = "#1886ff";
		document.getElementsByClassName("desktop")[0].style.backgroundSize = "18vw 18vw";
	});
}

lightbox.option({
	'fadeDuration': 0,
	'resizeDuration': 0,
	'imageFadeDuration': 0,
})

setBackgroundButtons();

var numItems = 1;
for (i in workWindows) {
	createWorkWindow(workWindows[i]);
	$('#num-items').text(numItems++ + " items");
}

setInterval(time, 1000);

let buttons = document.querySelectorAll('.window button');
let icons = document.querySelectorAll('.icon');
let windows = document.querySelectorAll('.window');

for (var b of buttons) {
	b.addEventListener('click', function(e){ this.blur(); });
}

class DesktopIcon {
	constructor(el) {
		const windowID = el.dataset.window;
		const window = document.querySelector('#' + windowID);

		let draggableIcon = new Draggabilly(el, {containment: true, grid: [ 10, 10 ]});

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

function createWindow() {

}

function time() {
	var timeElement = document.getElementById('menu-time');
	timeElement.textContent = new Date().toLocaleTimeString();
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

setBackgroundButtons()
setInterval(time, 1000);

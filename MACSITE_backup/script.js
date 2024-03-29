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

		el.addEventListener('click', function(e){
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

		close.addEventListener('click', (e) => {
			delete el.dataset.isOpen;
			delete icon.dataset.isOpen;
		});

	}
}

for (var w of windows) {
	new Window(w);
}
for (var i of icons) {
	new DesktopIcon(i);
}

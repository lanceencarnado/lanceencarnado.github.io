// Start upload preview image

// variables for flipping img horizontally
const NORMAL = 1;
const FLIP = 2;
// "normal" for a photo taken from iPhone camera is actually orientation 6 b/c it has to be rotated clockwise
const IPHONE_PORTRAIT_NORMAL = 6;
const IPHONE_PORTRAIT_FLIP = 5;
// don't use "orientation" as a variable name - reserved on iOS?
var croppieOrientation = NORMAL;

// for orientation on camera pics from iPhone - retrieve from EXIF.getTag(this, "Orientation")
var exifOrientation;

var $uploadCrop,
tempFilename,
rawImg,
imageId,
currentFaceNum;

function readFile(input) {
	if (input.files && input.files[0]) {
	  var reader = new FileReader();
		reader.onload = function (e) {
			$('#upload-demo').addClass('ready');
			$('#cropImagePop').modal('show');
			rawImg = e.target.result;
		}
		reader.readAsDataURL(input.files[0]);
	}
	else {
		swal("Sorry - your browser doesn't support the FileReader API");
	}
}

$uploadCrop = $('#upload-demo').croppie({
	viewport: {
		width: 402,
		height: 402,
	},
	boundary: { width: 450, height: 430 },
	enforceBoundary: false,
	enableExif: true,
	enableOrientation: true,
});
$('#cropImagePop').on('shown.bs.modal', function(){
	// alert('Shown pop');
	$uploadCrop.croppie('bind', {
		url: rawImg
	}).then(function(){
		console.log('jQuery bind complete');
		// need to find exif orientation because of iphone cameras
		var exifImg = new Image;
		exifImg.src = rawImg;
		EXIF.getData(exifImg, function() {
			exifOrientation = EXIF.getTag(this, "Orientation");
			if (exifOrientation == IPHONE_PORTRAIT_NORMAL) {
				croppieOrientation = IPHONE_PORTRAIT_NORMAL;
			}
		});
	});
});

$('.uploadface-btn').on('change', function () {
		imageId = $(this).data('id');
		tempFilename = $(this).val();
		$('#cancelCropBtn').data('id', imageId); readFile(this);
	}
);

// flipping the image
$('#flipImageBtn').on('click', function () {
	if (croppieOrientation == NORMAL) {
		croppieOrientation = FLIP;
	} else if (croppieOrientation == FLIP) {
		croppieOrientation = NORMAL;
	} else if (croppieOrientation == IPHONE_PORTRAIT_NORMAL) {
		croppieOrientation = IPHONE_PORTRAIT_FLIP;
	} else if (croppieOrientation == IPHONE_PORTRAIT_FLIP) {
		croppieOrientation = IPHONE_PORTRAIT_NORMAL;
	}
	$uploadCrop.croppie('bind', {
		url: rawImg,
		orientation: croppieOrientation
	});
});

$('#cropImageBtn').on('click', function (ev) {
	var faceSize;
	$uploadCrop.croppie('result', {
		type: 'base64',
		format: 'png',
		backgroundColor: '#FFFFFF',
		size: {width: 402, height: 402}
	}).then(function (resp) {
		$('#faceimg').attr('src', resp);
		$('#cropImagePop').modal('hide');
		createInitialBillCanvas();
	});
});
// End upload preview image

// will need this function for rotating background bills
function drawRotatedImage(image, ctx, x, y, angle, width, height) {
	var TO_RADIANS = Math.PI/180;

	// save the current co-ordinate system
	// before we screw with it
	ctx.save();

	// move to the middle of where we want to draw our image
	ctx.translate(x + (width / 2), y + (height / 2));

	// rotate around that point, converting our
	// angle from degrees to radians
	ctx.rotate(angle * TO_RADIANS);

	// draw it up and to the left by half the width
	// and height of the image
	// ctx.drawImage(image, -(image.width/2), -(image.height/2));
	ctx.drawImage(image, -(width/2), -(height/2), width, height);

	// and restore the co-ords to how they were when we began
	ctx.restore();
}

function createInitialBillCanvas() {
	var c = document.getElementById("initialbillcanvas");
	var ctx = c.getContext('2d');

	var faceXOffset = 209;
	var faceYOffset = 0;

	// clear out the createCanvas
	ctx.clearRect(0, 0, c.width, c.height);

	var face = new Image();
	face.onload = function() {

		ctx.drawImage(face, faceXOffset, faceYOffset);

		faceFilter(face, ctx, faceXOffset, faceYOffset);

		// apply overlay noise filter
		var noiseFilter = new Image();
		noiseFilter.onload = function() {
			var ctx = c.getContext('2d');
			ctx.globalCompositeOperation = 'overlay';
			ctx.drawImage(noiseFilter, faceXOffset, 0);

			// reset blending mode
			ctx.globalCompositeOperation = 'source-over';

			// draw the bill
			var rodbill = new Image();
			rodbill.onload = function() {
				var ctx = c.getContext('2d');
				ctx.drawImage(rodbill, 0, 0, 945, 402);

				// bill ends here - create the final bill canvas
				createFinalBillCanvas();
			}
			rodbill.src = 'assets/billcutout_biggest_dontuse.png';
		}
		noiseFilter.src = "assets/noisefilter.jpg";
	}
	face.src = $('#faceimg').attr('src');
}

function faceFilter(img, ctx, x, y) {
	var imageData = ctx.getImageData(x, y, img.width, img.height);

	// grayscale
	var data = imageData.data;

	for(var i = 0; i < data.length; i += 4) {
	  var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
	  // red
	  data[i] = brightness;
	  // green
	  data[i + 1] = brightness;
	  // blue
	  data[i + 2] = brightness;
	}
	ctx.putImageData(imageData, x, y);

	// screen
	ctx.globalCompositeOperation = 'screen';

	ctx.fillStyle = '#505a51';
	ctx.fillRect(x, y, img.width, img.height);

	// multiply
	ctx.globalCompositeOperation = 'multiply';

	ctx.fillStyle = '#ffffe5';
	ctx.fillRect(x, y, img.width, img.height);

	// reset blend mode
	ctx.globalCompositeOperation = 'source-over';
}

// creating the final image w/ multiple bills
function createFinalBillCanvas() {
	var c = document.getElementById("finalrodcanvas");
	var initialBillCanvas = document.getElementById("initialbillcanvas");
	var ctx = c.getContext('2d');

	var billBackground = new Image();
	billBackground.onload = function() {
		// draw flat bill background
		ctx.drawImage(billBackground, 0, 0);

		// draw background bills
		drawRotatedImage(initialBillCanvas, ctx, -46, 91, -4.47, 945, 402); // "Photo 4"
		drawRotatedImage(initialBillCanvas, ctx, 765, 798, -13.01, 945, 402); // "Photo 3"
		drawRotatedImage(initialBillCanvas, ctx, 44, 812, 15.38, 945, 402); // "Photo 2"

		var billMidground = new Image();
		billMidground.onload = function() {
			// draw flat bill midground (between generated background bills and final bill)
			ctx.drawImage(billMidground, 0, 0);

			// shadow on the final bill
			ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
			ctx.shadowBlur = 10;
			ctx.shadowOffsetX = 8;
			ctx.shadowOffsetY = 8;

			// draw the final bill
			drawRotatedImage(initialBillCanvas, ctx, 129, 403, -7.53, 945, 402);

			// clear drop shadow
			ctx.shadowColor = 'rgba(0, 0, 0, 0)';

			// draw the frame
			var outerFrame = new Image();
			outerFrame.onload = function() {
				ctx.drawImage(outerFrame, 0, 0);
			}
			outerFrame.src = "assets/frame.png";
		}
		billMidground.src = "assets/bill_midground_OPTIMIZETHISLANCE.png";
	}
	billBackground.src = "assets/bill_background.jpg";
}


// createInitialBillCanvas();

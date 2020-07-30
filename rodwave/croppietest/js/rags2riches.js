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
		width: 380,
		height: 380,
	},
	boundary: { width: 430, height: 430 },
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
		size: {width: 500, height: 500}
	}).then(function (resp) {
		$('#faceimg').attr('src', resp);
		// duotone the uploaded face
		// duotoneImage('#faceimg');
		$('#cropImagePop').modal('hide');
		createInitialBillCanvas();
	});
});
// End upload preview image

// function duotoneImage(imgSrc) {
// 	$(imgSrc).duotone({
// 		gradientMap: '#505a51 5%, #ffffe5'
// 	});
// }

// will need this function for rotating background bills
function drawRotatedImage(image, x, y, angle) {
	var TO_RADIANS = Math.PI/180;

	// save the current co-ordinate system
	// before we screw with it
	ctx.save();

	// move to the middle of where we want to draw our image
	ctx.translate(x, y);

	// rotate around that point, converting our
	// angle from degrees to radians
	ctx.rotate(angle * TO_RADIANS);

	// draw it up and to the left by half the width
	// and height of the image
	ctx.drawImage(image, -(image.width/2), -(image.height/2));

	// and restore the co-ords to how they were when we began
	ctx.restore();
}

function createInitialBillCanvas() {
	var c = document.getElementById("rodcanvas");
	var ctx = c.getContext('2d');

	var faceXOffset = 262;
	var faceYOffset = 0;

	// clear out the createCanvas
	ctx.clearRect(0, 0, c.width, c.height);

	var face = new Image();
	face.onload = function() {

		ctx.drawImage(face, faceXOffset, faceYOffset);

		faceFilter(face, ctx, faceXOffset, faceYOffset);

		// apply overlay noise filter - move this to the end after the bill is drawn
		var noiseFilter = new Image();
		noiseFilter.onload = function() {
			var ctx = c.getContext('2d');
			ctx.globalCompositeOperation = 'overlay';
			ctx.drawImage(noiseFilter, faceXOffset, faceYOffset);

			// reset blending mode
			ctx.globalCompositeOperation = 'source-over';

			// draw the bill
			var rodbill = new Image();
			rodbill.onload = function() {
				var ctx = c.getContext('2d');
				ctx.drawImage(rodbill, 0, 0);

				// bill is finished here
			}
			rodbill.src = 'assets/billcutout.png';
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

// createInitialBillCanvas();

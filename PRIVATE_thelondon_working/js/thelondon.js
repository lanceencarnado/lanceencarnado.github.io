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
		width: 354,
		height: 354,
	},
	boundary: { width: 400, height: 400 },
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
	// croppieOrientation = croppieOrientation == NORMAL ? FLIP : NORMAL;
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
		size: {width: 354, height: 354}
	}).then(function (resp) {
		$('#faceimg').attr('src', resp);
		// $("#face1outputdiv").show(100);
		$('#cropImagePop').modal('hide');
		createCanvasAndSnakes();
	});
});					
// End upload preview image

function createCanvasAndSnakes() {
	var c = document.getElementById("thugcanvas");
	// clear out the canvas
	var ctx = c.getContext('2d');
	ctx.clearRect(0, 0, c.width, c.height);
	
	var TO_RADIANS = Math.PI/180;
	var xOffset = 228;
	var yOffset = 228; 
	function drawRotatedImage(image, x, y, angle) { 

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
	
	var face1 = new Image();
	face1.onload = function() {
    var ctx = c.getContext('2d');
		// ctx.drawImage(face1, 0, 235);
		drawRotatedImage(face1, 238 + xOffset, 12 + yOffset, 20);
			
			var thug = new Image();
			thug.onload = function() {
				var ctx = c.getContext('2d');
				ctx.drawImage(thug, 0, 0);
		
				// export image to the page
				var generatedImgUrl = c.toDataURL('image/jpeg', 1.0);
				$('#thuggeneratedimg').attr('src', generatedImgUrl);
				
				// enable the "save image button"
				$('#download-btn').attr("class","custombutton");
			}
			thug.src = 'images/thug_facehole.png';
			
	}
	face1.src = $('#faceimg').attr('src');	
}

download_canvas_img = function(el) {
	var c = document.getElementById("thugcanvas");
  	var image = c.toDataURL("image/jpg");
  	el.href = image;
};

// createCanvasAndSnakes();
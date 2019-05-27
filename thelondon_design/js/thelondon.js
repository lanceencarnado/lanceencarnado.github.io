// Start upload preview image

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
});
$('#cropImagePop').on('shown.bs.modal', function(){
	// alert('Shown pop');
	$uploadCrop.croppie('bind', {
		url: rawImg
	}).then(function(){
		console.log('jQuery bind complete');
	});
});

$('.uploadface-btn').on('change', function () { 
		imageId = $(this).data('id'); 
		tempFilename = $(this).val();
		$('#cancelCropBtn').data('id', imageId); readFile(this);
	}
);

$('#cropImageBtn').on('click', function (ev) {
	var faceSize;
	$uploadCrop.croppie('result', {
		type: 'base64',
		format: 'png',
		size: {width: 354, height: 354}
	}).then(function (resp) {
		// DECIDE WHICH FACE DIV TO SAVE TO BASED ON WHAT THE CURRENT FACE NUM WORKING IS
// 		if (currentFaceNum == 1) {
// 			$('#face1-output').attr('src', resp);
// 			// show the face output div (which is hidden on load)
// 			$("#face1outputdiv").show(100);
// 		}
		$('#cropImagePop').modal('hide');
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
	}
// 	face1.src = $('#face1-output').attr('src');
	face1.src = 'images/annietest.png'
	
	// https://stackoverflow.com/questions/3868259/importing-image-on-canvas-html5
	// It's important to have drawImage call after the image has loaded:
	var thug = new Image();
	thug.onload = function() {
		var ctx = c.getContext('2d');
		ctx.drawImage(thug, 0, 0);
	}
	thug.src = 'images/thug_facehole.png';
}

createCanvasAndSnakes();
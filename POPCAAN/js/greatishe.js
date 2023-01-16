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
			input.value = null; // fix to allow the same image to be chosen two times in a row
		}
		reader.readAsDataURL(input.files[0]);
	}
	else {
		swal("Sorry - either there was an error, or your browser doesn't support the FileReader API. Please try again.");
	}
}

if (window.innerWidth <= 768) {
	$uploadCrop = $('#upload-demo').croppie({
		viewport: {
			width: "min(70vw, 380px)",
			height: "min(70vw, 380px)",
		},
		boundary: { width: "min(80vw, 420px)", height: "min(80vw, 420px)" },
		enforceBoundary: false,
		enableExif: true,
		enableOrientation: true,
	});
} else {
	$uploadCrop = $('#upload-demo').croppie({
		viewport: {
			width: 380,
			height: 380,
		},
		boundary: { width: 420, height: 420 },
		enforceBoundary: false,
		enableExif: true,
		enableOrientation: true,
	});
}
$('#cropImagePop').on('shown.bs.modal', function(){
	var boundaryWidth = $(".modal-body").width();
	console.log(boundaryWidth);

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
				// rotate it left - for some reason iphone photos are rotated.
				croppieOrientation = croppieOrientRotateLeft(croppieOrientation);
				$uploadCrop.croppie('bind', {
					url: rawImg,
					orientation: croppieOrientation
				});
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

// flipping the image - https://github.com/Foliotek/Croppie/issues/506
function croppieOrientFlipHorizontal(or) {
    switch (or) {
        case 1: or = 2; break;
        case 2: or = 1; break;
        case 3: or = 4; break;
        case 4: or = 3; break;
        case 5: or = 6; break;
        case 6: or = 5; break;
        case 7: or = 8; break;
        case 8: or = 7; break;
    }
    return or;
}

$('#flipImageBtn').on('click', function () {
	// if (croppieOrientation == NORMAL) {
	// 	croppieOrientation = FLIP;
	// } else if (croppieOrientation == FLIP) {
	// 	croppieOrientation = NORMAL;
	// } else if (croppieOrientation == IPHONE_PORTRAIT_NORMAL) {
	// 	croppieOrientation = IPHONE_PORTRAIT_FLIP;
	// } else if (croppieOrientation == IPHONE_PORTRAIT_FLIP) {
	// 	croppieOrientation = IPHONE_PORTRAIT_NORMAL;
	// }
	// $uploadCrop.croppie('bind', {
	// 	url: rawImg,
	// 	orientation: croppieOrientation
	// });

	croppieOrientation = croppieOrientFlipHorizontal(croppieOrientation);

	$uploadCrop.croppie('bind', {
		url: rawImg,
		orientation: croppieOrientation
	});
});

// rotating the image - https://github.com/Foliotek/Croppie/issues/506
function croppieOrientRotateRight(or) {
    switch (or) {
        case 1: or = 6; break;
        case 2: or = 7; break;
        case 3: or = 8; break;
        case 4: or = 5; break;
        case 5: or = 2; break;
        case 6: or = 3; break;
        case 7: or = 4; break;
        case 8: or = 1; break;
    }
    return or;
}

function croppieOrientRotateLeft(or) {
    switch (or) {
        case 1: or = 8; break;
        case 2: or = 5; break;
        case 3: or = 6; break;
        case 4: or = 7; break;
        case 5: or = 4; break;
        case 6: or = 1; break;
        case 7: or = 2; break;
        case 8: or = 3; break;
    }
    return or;
}


$('#rotateBtn').on('click', function(ev) {
	croppieOrientation = croppieOrientRotateRight(croppieOrientation);
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
		size: {width: 851, height: 851}
	}).then(function (resp) {
		$('#faceimg').attr('src', resp);
		$('#cropImagePop').modal('hide');
		createCanvas();
	});
});
// End upload preview image


function createCanvas() {
	var c = document.getElementById("initialcanvas");
	var ctx = c.getContext('2d');

	var faceXOffset = 75;
	var faceYOffset = 75;

	// clear out the canvas
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
			ctx.drawImage(noiseFilter, faceXOffset, faceYOffset, 851, 851);

			// reset blending mode
			ctx.globalCompositeOperation = 'source-over';

			// draw the frame on
			var popcaanFrame = new Image();
			popcaanFrame.onload = function() {
				var ctx = c.getContext('2d');
				ctx.drawImage(popcaanFrame, 0, 0, 1000, 1000);

				// display the final image
				var generatedImgUrl = c.toDataURL('image/jpeg', 1.0);
				$('#generatedimg').attr('src', generatedImgUrl);

				// play the camera flash animation
				playCameraFlashAnimation();

				// enable the "save image button"
				$('#download-btn').attr("class","popbutton");

			}
			popcaanFrame.src = "assets/gih_frame_8bit.png"
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
}

function playCameraFlashAnimation() {
	$("#cameraflash").animate(
		{opacity: "1"}, 200, "linear", function(){
			$("#cameraflash").animate({opacity: "0"}, 1200, "linear");
		}
	);
}

// detect iOS
let isIOS = /iPad|iPhone|iPod/.test(navigator.platform);

// MODAL CODE
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("download-btn");
// var span = document.getElementsByClassName("contest-modal-close")[0];
//
// // When the user clicks on the share button, open the modal
// btn.onclick = function() {
// 	modal.style.display = "block";
// }
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
// 	closeContestModal();
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
// 	if (event.target == modal) {
// 		closeContestModal();
// 	}
// }
//
// function closeContestModal() {
// 	var modal = document.getElementById("myModal");
// 	modal.style.display = "none";
//
// 	// open up the share window
// 	share_canvas_img();
// }
//
// // POPULATE SELECTOR FOR DAYS AND YEARS FOR CONTEST MODAL
//
// var daySelect = document.querySelector('#day');
// var yearSelect = document.querySelector('#year');
//
// function populateDays() {
// 	for(i = 1; i <= 31; i++) {
// 		var option = document.createElement('option');
// 		option.textContent = i;
// 		daySelect.appendChild(option);
// 	}
// }
//
// function populateYears() {
//  	// get this year as a number
// 	var date = new Date();
//  	var year = date.getFullYear();
//
//  	// Make this year, and the 100 years before it available in the year <select>
//  	for(var i = 0; i <= 100; i++) {
// 		var option = document.createElement('option');
// 		option.textContent = year-i;
// 		yearSelect.appendChild(option);
//  	}
// }
//
// populateDays();
// populateYears();

// END MODAL CODE

async function share_canvas_img() {
	var c = document.getElementById("initialcanvas");
	const dataUrl = c.toDataURL();
	const b1 = await fetch(dataUrl);
	const b2 = await (b1).blob();
	const filesArray = [
		new File(
			[b2],
			'GreatIsHe.png',
			{
				type: b2.type,
				lastModified: new Date().getTime()
			}
		)
	];
	const shareData = {
	  files: filesArray,
	};
	navigator.share(shareData);
};

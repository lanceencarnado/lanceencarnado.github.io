$(document).ready(function() {


	var box = $(".box"),
		orginal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
		temp = orginal,
		x = [],
		sec = 0,
		date1,date2,
		moves = 0,
		mm = 0,
		ss = 0,
		upIMG,
		// LANCE only 1 photo now
		//images = ["https://preview.ibb.co/kMdsfm/kfp.png","https://preview.ibb.co/kWOEt6/minion.png","https://preview.ibb.co/e0Rv0m/ab.jpg"]
		images = ["godskidpuzzle.jpg"],
		img = 0;




	$('.me').css({"background-image" : 'url('+images[0]+')'});

	$(".start").click(function() {
		// slideUp brings the page to the top of the iframe - don't want that
		// $(".start").delay(100).slideUp(500);
		$(".start").delay(100).hide();
		$(".full").hide();
		$(".pre_img").addClass("prevent_click");

		date1 = new Date();
		Start();
		return 0;
	});

	function Start() {
		randomTile();
		changeBG(img);
		var count = 0,
			a,
			b,
			A,
			B;
		$(".me").click(function() {
			count++;
			if (count == 1) {
				a = $(this).attr("data-bid");
				$('.me_'+a).css({"opacity": ".65"});
			} else {
				b = $(this).attr("data-bid");
				$('.me_'+a).css({"opacity": "1"});
				if (a == b) {
				} else {
					$(".me_" + a)
						.addClass("me_" + b)
						.removeClass("me_" + a);
					$(this)
						.addClass("me_" + a)
						.removeClass("me_" + b);
					$(".me_" + a).attr("data-bid", a);
					$(".me_" + b).attr("data-bid", b);
				}
				moves++;
				swapping(a, b);
				checkCorrect(a);
				checkCorrect(b);
				a = b = count = A = B = 0;
			}
			if (arraysEqual(x)) {
				date2 = new Date();
				timeDifferece();
				showScore();
				return 0;
			}
		});
		return 0;
	}

	function randomTile() {
		var i;
		for (i = orginal.length-1; i >= 0; i--) {
			var flag = getRandom(0, i);
			x[i] = temp[flag];
			temp[flag] = temp[i];
			temp[i] = x[i];
		}
		for (i = 0; i < orginal.length; i++) {
			box.append(
				'<div  class="me me_' + x[i] + ' tile" data-bid="' + x[i] + '"></div>'
			);
			if ((i + 1) % 6 == 0) box.append("<br>");
		}
		i = 17;
		return 0;
	}

	function arraysEqual(arr) {
		var i;
		for (i = orginal.length - 1; i >= 0; i--) {
			if (arr[i] != i) return false;
		}
		return true;
	}

	function checkCorrect(N1) {
		var pos = x.indexOf(parseInt(N1, 10));
		if (pos != N1) {
			return;
		}
		$(".me_" + N1).addClass("correct , prevent_click ");
		return;
	}

	function swapping(N1, N2) {
		var first = x.indexOf(parseInt(N1, 10)),
			second = x.indexOf(parseInt(N2, 10));
		x[first] = parseInt(N2, 10);
		x[second] = parseInt(N1, 10);
		return 0;
	}

	function getRandom(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

	function timeDifferece(){
		var diff = date2 - date1;
		var msec = diff;
		var hh = Math.floor(msec / 1000 / 60 / 60);
		msec -= hh * 1000 * 60 * 60;
	 	mm = Math.floor(msec / 1000 / 60); // Gives Minute
		msec -= mm * 1000 * 60;
		ss = Math.floor(msec / 1000);		// Gives Second
		msec -= ss * 1000;
		return 0;
	}


	function changeBG(img){
		// LANCE changing uploaded photo index from 3 to 1 b/c there's only 2 photos now
		// if(img != 3){
		if(img != 1){
		$('.me').css({
			"background-image" : "url("+images[img]+")"
		});
		return
		}
		else
			$('.me').css({"background-image" : "url("+upIMG+")"});
	}

	// LANCE change from hover to click to change puzzle to avoid accidental blank upload puzzle
	// $('.pre_img li').hover(function(){
	$('.pre_img li').click(function(){
			img = $(this).attr("data-bid");
			changeBG(img);

		});

	function showScore(){
		$('#min').html(mm);
		$('#sec').html(ss);
		$('#moves').html(moves);
		// LANCE c code stuff
// 		if (mm < 2) {
// 			$('#c_code').html("You completed the puzzle in less than 1 minute!<br>Your coupon code: CODEHERE");
// 		}
		setTimeout(function(){
		$('.cover').slideDown(350);
		},1050);
		return 0;
	}

	$('.OK').click(function(){
		$('.cover').slideUp(350);
	});

	$('.reset').click(function(){
		$(".tile").remove();
		$("br").remove();
		$(".full").show();
		$(".start").show();
		$(".pre_img").removeClass("prevent_click");

		temp = orginal;
		x = [];
		moves =  ss = mm = 0;
		return 0;
	});

	$("#upfile1").click(function () {
 	   $("#file1").trigger('click');
	});

	$("#file1").change(function(){
        readURL(this);
    });

     function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
               upIMG =  e.target.result;
			   // LANCE changing uploaded photo index from 3 to 1 b/c there's only 2 photos now
               // img = 3;
               // changeBG(3);
               img = 1;
               changeBG(1);
            }
            reader.readAsDataURL(input.files[0]);
        }

    }
});

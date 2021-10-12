const nicknames = ["The Blessing","The Wave","The Threat","The Giver","The Clown","The Answer","The Speaker","The Menace","The Hater","The Vision","The Hood Saver","The Vibe","The Grandson","The Goat","The Voice","The Gap","The Hope","The Bull","The Sound","The Trenches","The Hero","The Player","The Family","The Ride","The Persuader","The Ear","The Problem","The Twin","The Shooter","The Fighter","The Process","The Genius","The Cook","The Decade","The Hope","The Snake","The Bucket","The Crown","The Jumper","The Freak","The King","The Rat","The Goblin","The Sickness","The Cure","The Teacher","The Student","The Bag","The Ditch","The Crybaby","The Heartless","The Incompetent","The Villain","The Mask ","The Preacher ","The Babysitter","The Day One","The Boss","The President","The Baby ","The Clueless","The Captain","The Joker","The Chief","The CEO","The Mastermind"]

function generateNickname() {
	// check that all fields are filled
	for (const el of document.getElementById('info_entry').querySelectorAll("[required]")) {
		if (!el.reportValidity()) {
			return;
		}
	}

	var numNicknames = nicknames.length;
	var numRand = Math.floor(Math.random() * numNicknames);
	var nickname = nicknames[numRand].toUpperCase();

	$('.nickname').text(nickname);

	share_api_link = 'https://lil-durk-nickname-image.herokuapp.com/' + nickname.toLowerCase().replace(/ /g, '-');
	share_api_file = 'https://lil-durk-nickname-image.herokuapp.com/image-square/' + nickname.toLowerCase().replace(/ /g, '-');

	// if (window.navigator && window.navigator.share) {
	// 	$("#native_share_btn").click(() => {
	// 		window.navigator.share({url: share_api_link, text: 'Find out what your Lil Durk nickname would be', title: 'Lil Durk Nicknames'});
	// 	});
	// } else {
	// 	$("#native_share_btn").hide();
	// }

	if (window.navigator && window.navigator.share) {
		$("#native_share_btn").click(() => {

			var c = document.createElement('canvas');
			c.width = 1200;
			c.height = 1200;
			var ctx = c.getContext("2d");

			ctx.fillStyle = "#dd0905";
			ctx.fillRect(0, 0, c.width, c.height);

			var w_center = c.width / 2;
			var h_center = c.height / 2;

			var bg = new Image();
			bg.onload = function() {
				// x, y, width, height
				ctx.drawImage(bg, 0, 0);

				ctx.textAlign = 'center';
				ctx.fillStyle = "#000000";
				ctx.textBaseline = "middle";
				ctx.font = '160px Heading Pro Heavy';
				ctx.fillText(nickname, w_center, h_center + 50);
			}
			bg.src = "img/square.png";

			window.navigator.share({url: share_api_link, text: 'Find out what your Lil Durk nickname would be', title: 'Lil Durk Nicknames', files: [new File([c.toDataURL('image/png').split(';base64,')[1]],'lildurknickname.png',{ type: "image/png" })]});

		});
		$("#snapchat_share_btn").hide();
		// $("#facebook_share_btn").hide();
	} else {
		$("#native_share_btn").hide();
	}


	// set twitter share link
	var twitterLink = "https://twitter.com/intent/tweet?text=My Lil Durk nickname is \"" + nickname + "\". Find yours at &url=" + share_api_link;
	$("#twitter_share_btn").attr("href", twitterLink);

	//facebook
	var facebookLink = "https://www.facebook.com/sharer/sharer.php?u=" + share_api_link;
	$("#facebook_share_btn").attr("href", facebookLink);

	//instagram
	$("#instagram_share_btn").attr("href", share_api_file);

	//snapchat
	$("#snapchat_share_btn").attr("data-url", share_api_link);


	$('.info_entry').hide();
	$('.result').fadeIn("slow");
}

function resetPage() {
	$('#fname').val('');
	$('#lname').val('');
	$('#zodiac').prop('selectedIndex',0);

	$('.result').hide();
	$('.info_entry').fadeIn("slow");
}

const nicknames = ["The Blessing","The Wave","The Threat","The Giver","The Clown","The Answer","The Speaker","The Menace","The Hater","The Vision","The Hood Saver","The Vibe","The Grandson","The Goat","The Voice","The Gap","The Hope","The Bull","The Sound","The Trenches","The Hero","The Player","The Family","The Ride","The Persuader","The Ear","The Problem","The Twin","The Shooter","The Fighter","The Process","The Genius","The Cook","The Decade","The Hope","The Snake","The Bucket","The Crown","The Jumper","The Freak","The King","The Rat","The Goblin","The Sickness","The Cure","The Teacher","The Student","The Bag","The Ditch","The Crybaby","The Heartless","The Incompetent","The Villain","The Mask ","The Preacher ","The Babysitter","The Day One","The Boss","The President","The Baby","The Clueless","The Captain","The Joker","The Chief","The CEO","The Mastermind", "The Zephyr", "The Bibby", "The Winter", "The Crosshanded", "The Josh", "The Nicolee", "The Visionary", "The SiKo", "The Regi", "The BlaZe", "The Korba", "The Bandz", "The Crown", "The Marion", "The Dinero", "The LevelUp"];

const specialNames = ["Zephyr", "Bibby", "Winter", "Crosshanded", "Josh", "Nicolee", "Visionary", "SiKo", "Regi", "BlaZe", "Korba", "Bandz", "Crown", "Marion", "Dinero", "LevelUp"];

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

	// check first and last name for special name
	var fname = $('#fname').val().trim().toLowerCase();
	var lname = $('#lname').val().trim().toLowerCase();

	for (const name of specialNames) {
		var lowercaseName = name.toLowerCase();
		if (fname == lowercaseName || lname == lowercaseName) {
			nickname = "THE " + name.toUpperCase();
			break;
		}
	}


	$('.nickname').text(nickname);

	share_api_link = 'https://lil-durk-nickname-image.herokuapp.com/' + nickname.toLowerCase().replace(/ /g, '-');
	share_api_file = 'https://lil-durk-nickname-image.herokuapp.com/image-square/' + nickname.toLowerCase().replace(/ /g, '-');

	var share_text = "My Lil Durk nickname is \"" + nickname + "\" 💯 Find yours here:";

	if (window.navigator && window.navigator.share) {
	    $("#native_share_btn").click(() => {
	        window.navigator.share({url: share_api_link, text: share_text, title: 'Lil Durk Nicknames' });
	    });
	    // $("#snapchat_share_btn").hide();
	    $("#facebook_share_btn").hide();
		$("#twitter_share_btn").hide();
	} else {
		$("#native_share_btn").hide();
	}


	// set twitter share link
	var twitterLink = "https://twitter.com/intent/tweet?text=My Lil Durk nickname is \"" + nickname + "\" 💯 " + share_api_link;
	$("#twitter_share_btn").attr("href", twitterLink);

	//facebook
	var facebookLink = "https://www.facebook.com/sharer/sharer.php?u=" + share_api_link;
	$("#facebook_share_btn").attr("href", facebookLink);

	//instagram
	$("#instagram_share_btn").attr("href", share_api_file);

	//snapchat
	// $("#snapchat_share_btn").attr("data-url", share_api_link);


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

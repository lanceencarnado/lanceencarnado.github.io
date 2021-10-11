const nicknames = ["The Blessing","The Wave","The Threat","The Giver","The Clown","The Answer","The Speaker","The Menace","The Hater","The Vision","The Hood Saver","The Vibe","The Grandson","The Goat","The Voice","The Gap","The Hope","The Bull","The Sound","The Trenches","The Hero","The Player","The Family","The Ride","The Persuader","The Ear","The Problem","The Twin","The Shooter","The Fighter","The Process","The Genius","The Cook","The Decade","The Hope","The Snake","The Bucket","The Crown","The Jumper","The Freak","The King","The Rat","The Goblin","The Sickness","The Cure","The Teacher","The Student","The Bag","The Ditch","The Crybaby","The Heartless","The Incompetent","The Villain","The Mask ","The Preacher ","The Babysitter","The Day One","The Boss","The President","The Baby ","The Clueless","The Captain","The Joker","The Chief","The CEO","The Mastermind"]

function generateNickname() {
	var numNicknames = nicknames.length;
	var numRand = Math.floor(Math.random() * numNicknames);
	var nickname = nicknames[numRand].toUpperCase();

	return nickname;
}

function generateRectangleCanvas() {
	var nickname = generateNickname();

	var c = document.getElementById("rectangle_canvas");
	var ctx = c.getContext("2d");

	ctx.fillStyle = "#dd0905";
	ctx.fillRect(0, 0, c.width, c.height);

	var w_center = c.width / 2;
	var h_center = c.height / 2;

	var title = new Image();
	title.onload = function() {
		// x, y, width, height
		ctx.drawImage(title, 435, 28, 331, 135);

		ctx.fillStyle = "#ffffff";
		ctx.font = '24px Circular Standard';
		ctx.textAlign = 'center';
		// needed for spacing
		var durktext = "YOUR LIL DURK NICKNAME IS...".split("").join(String.fromCharCode(8202));
		ctx.fillText(durktext, w_center, 220);

		ctx.fillStyle = "#000000";
		ctx.textBaseline = "middle";
		ctx.font = '150px Heading Pro Heavy';
		ctx.fillText(nickname, w_center, h_center + 40);

		ctx.textBaseline = "alphabetic"; // reset to default
		ctx.fillStyle = "#ffffff";
		ctx.font = '24px Circular Standard';
		// needed for spacing
		var urltext = "GET YOURS AT WWW.LILDURKNICKNAME.COM".split("").join(String.fromCharCode(8202));
		ctx.fillText(urltext, w_center, 490);

		var otf = new Image();
		otf.onload = function() {
			ctx.drawImage(otf, 458, 533, 92, 69);
		}
		otf.src = "img/otf.png"

		var tacklebox = new Image();
		tacklebox.onload = function() {
			ctx.drawImage(tacklebox, 583, 543, 159, 48);
		}
		tacklebox.src = "img/tacklebox.png"
	}
	title.src = "img/title.png";
}

function generateSquareCanvas() {
	var nickname = generateNickname();

	var c = document.getElementById("square_canvas");
	var ctx = c.getContext("2d");

	ctx.fillStyle = "#dd0905";
	ctx.fillRect(0, 0, c.width, c.height);

	var w_center = c.width / 2;
	var h_center = c.height / 2;

	var title = new Image();
	title.onload = function() {
		// x, y, width, height
		ctx.drawImage(title, 273, 54, 632, 256);

		ctx.fillStyle = "#ffffff";
		ctx.font = '30px Circular Standard';
		ctx.textAlign = 'center';
		// needed for spacing
		var durktext = "YOUR LIL DURK NICKNAME IS...".split("").join(String.fromCharCode(8202));
		ctx.fillText(durktext, w_center, 405);

		ctx.fillStyle = "#000000";
		ctx.textBaseline = "middle";
		ctx.font = '160px Heading Pro Heavy';
		ctx.fillText(nickname, w_center, h_center + 50);

		ctx.textBaseline = "alphabetic"; // reset to default
		ctx.fillStyle = "#ffffff";
		ctx.font = '30px Circular Standard';
		// needed for spacing
		var urltext = "GET YOURS AT WWW.LILDURKNICKNAME.COM".split("").join(String.fromCharCode(8202));
		ctx.fillText(urltext, w_center, 920);

		var otf = new Image();
		otf.onload = function() {
			ctx.drawImage(otf, 318, 1015, 175, 132);
		}
		otf.src = "img/otf.png"

		var tacklebox = new Image();
		tacklebox.onload = function() {
			ctx.drawImage(tacklebox, 557, 1035, 303, 91);
		}
		tacklebox.src = "img/tacklebox.png"
	}
	title.src = "img/title.png";
}

function generateSquareCanvas() {
	var nickname = generateNickname();

	var c = document.getElementById("square_canvas");
	var ctx = c.getContext("2d");

	ctx.fillStyle = "#dd0905";
	ctx.fillRect(0, 0, c.width, c.height);

	var w_center = c.width / 2;
	var h_center = c.height / 2;

	var title = new Image();
	title.onload = function() {
		// x, y, width, height
		ctx.drawImage(title, 273, 54, 632, 256);

		ctx.fillStyle = "#ffffff";
		ctx.font = '30px Circular Standard';
		ctx.textAlign = 'center';
		// needed for spacing
		var durktext = "YOUR LIL DURK NICKNAME IS...".split("").join(String.fromCharCode(8202));
		ctx.fillText(durktext, w_center, 405);

		ctx.fillStyle = "#000000";
		ctx.textBaseline = "middle";
		ctx.font = '160px Heading Pro Heavy';
		ctx.fillText(nickname, w_center, h_center + 50);

		ctx.textBaseline = "alphabetic"; // reset to default
		ctx.fillStyle = "#ffffff";
		ctx.font = '30px Circular Standard';
		// needed for spacing
		var urltext = "GET YOURS AT WWW.LILDURKNICKNAME.COM".split("").join(String.fromCharCode(8202));
		ctx.fillText(urltext, w_center, 920);

		var otf = new Image();
		otf.onload = function() {
			ctx.drawImage(otf, 318, 1015, 175, 132);
		}
		otf.src = "img/otf.png"

		var tacklebox = new Image();
		tacklebox.onload = function() {
			ctx.drawImage(tacklebox, 557, 1035, 303, 91);
		}
		tacklebox.src = "img/tacklebox.png"
	}
	title.src = "img/title.png";
}

function generateIGStoryCanvas() {
	var nickname = generateNickname();

	var c = document.getElementById("igstory_canvas");
	var ctx = c.getContext("2d");

	ctx.fillStyle = "#dd0905";
	ctx.fillRect(0, 0, c.width, c.height);

	var w_center = c.width / 2;
	var h_center = c.height / 2;

	var title = new Image();
	title.onload = function() {
		// x, y, width, height
		ctx.drawImage(title, 168, 105, 860, 349);

		ctx.fillStyle = "#ffffff";
		ctx.font = '37px Circular Standard';
		ctx.textAlign = 'center';
		// needed for spacing
		var durktext = "YOUR LIL DURK NICKNAME IS...".split("").join(String.fromCharCode(8202));
		ctx.fillText(durktext, w_center, 877);

		ctx.fillStyle = "#000000";
		ctx.textBaseline = "middle";
		ctx.font = '160px Heading Pro Heavy';
		ctx.fillText(nickname, w_center, h_center + 60);

		ctx.textBaseline = "alphabetic"; // reset to default
		ctx.fillStyle = "#ffffff";
		ctx.font = '37px Circular Standard';
		// needed for spacing
		var urltext = "GET YOURS AT WWW.LILDURKNICKNAME.COM".split("").join(String.fromCharCode(8202));
		ctx.fillText(urltext, w_center, 1645);

		var otf = new Image();
		otf.onload = function() {
			ctx.drawImage(otf, 512, 1745, 177, 134);
		}
		otf.src = "img/otf.png"

		var tacklebox = new Image();
		tacklebox.onload = function() {
			ctx.drawImage(tacklebox, 447, 1936, 307, 92);
		}
		tacklebox.src = "img/tacklebox.png"
	}
	title.src = "img/title.png";
}

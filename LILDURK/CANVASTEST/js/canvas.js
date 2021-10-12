const nicknames = ["The Blessing","The Wave","The Threat","The Giver","The Clown","The Answer","The Speaker","The Menace","The Hater","The Vision","The Hood Saver","The Vibe","The Grandson","The Goat","The Voice","The Gap","The Hope","The Bull","The Sound","The Trenches","The Hero","The Player","The Family","The Ride","The Persuader","The Ear","The Problem","The Twin","The Shooter","The Fighter","The Process","The Genius","The Cook","The Decade","The Hope","The Snake","The Bucket","The Crown","The Jumper","The Freak","The King","The Rat","The Goblin","The Sickness","The Cure","The Teacher","The Student","The Bag","The Ditch","The Crybaby","The Heartless","The Incompetent","The Villain","The Mask ","The Preacher ","The Babysitter","The Day One","The Boss","The President","The Baby ","The Clueless","The Captain","The Joker","The Chief","The CEO","The Mastermind"]

function generateNickname() {
	var numNicknames = nicknames.length;
	var numRand = Math.floor(Math.random() * numNicknames);
	var nickname = nicknames[numRand].toUpperCase();

	return nickname;
}

function generateRectangleCanvas(nickname) {
	var c = document.getElementById("rectangle_canvas");
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
		ctx.font = '150px Heading Pro Heavy';
		ctx.fillText(nickname, w_center, h_center + 40);
	}
	bg.src = "img/canvasbgs/rectangle.png";
}

function generateSquareCanvas(nickname) {
	var c = document.getElementById("square_canvas");
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
	bg.src = "img/canvasbgs/square.png";
}

function generateIGStoryCanvas(nickname) {
	// var nickname = generateNickname();

	var c = document.getElementById("igstory_canvas");
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
		ctx.fillText(nickname, w_center, h_center + 90);
	}
	bg.src = "img/canvasbgs/igstory.png";
}

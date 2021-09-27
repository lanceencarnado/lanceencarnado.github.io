const nicknames = ["The Blessing","The Wave","The Threat","The Giver","The Clown","The Answer","The Speaker","The Menace","The Hater","The Vision","The Hood Saver","The Vibe","The Grandson","The Goat","The Voice","The Gap","The Hope","The Bull","The Sound","The Trenches","The Hero","The Player","The Family","The Ride","The Persuader","The Ear","The Problem","The Twin","The Shooter","The Fighter","The Process","The Genius","The Cook","The Decade","The Hope","The Snake","The Bucket","The Crown","The Jumper","The Freak","The King","The Rat","The Goblin","The Sickness","The Cure","The Teacher","The Student","The Bag","The Ditch","The Crybaby","The Heartless","The Incompetent","The Villain","The Mask ","The Preacher ","The Babysitter","The Day One","The Boss","The President","The Baby ","The Clueless","The Captain","The Joker","The Chief","The CEO","The Mastermind"]

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                return allText;
            }
        }
    }
    rawFile.send(null);
}

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

	// set twitter share link
	var twitterLink = "https://twitter.com/intent/tweet?text=My Lil Durk nickname is \"" + nickname + "\". Find yours at INSERTFINALURLHERE!";
	$("#twitter_share_btn").attr("href", twitterLink);

	$('.info_entry').hide();
	$('.result').fadeIn("slow");
}

// DON'T USE UNLESS READING FROM TEXT FILE
function readNicknames() {
	var text = readTextFile("js/nicknames.txt");
	console.log(text);
}

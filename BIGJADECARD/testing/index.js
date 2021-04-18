var mousePressed = false;
var lastX, lastY;
var ctx, ctxCard;

function InitThis() {
    ctx = document.getElementById('signatureBox').getContext("2d");

    $('#signatureBox').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#signatureBox').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#signatureBox').mouseup(function (e) {
        mousePressed = false;
    });
	    $('#signatureBox').mouseleave(function (e) {
        mousePressed = false;
    });

	// LANCE draw the license on
	ctxCard = document.getElementById('myCanvas').getContext("2d");
	var img = document.getElementById("license");
	ctxCard.drawImage(img, 0, 0);
}

function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = $('#selColor').val();
        ctx.lineWidth = $('#selWidth').val();
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x; lastY = y;
}

function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function populate() {
	// draw name
	var name = document.getElementById('name').value;
	ctxCard.font = "60px Andrewfont-Regular";
	ctxCard.fillText(name, 586, 220);

	// draw signature
	ctxCard.drawImage(ctx.canvas, 57, 623);
}

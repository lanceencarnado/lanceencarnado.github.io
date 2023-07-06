function fadeOutContainer(containerID) {
	$(containerID).css({
	   'filter'         : 'blur(4px)',
	   '-webkit-filter' : 'blur(4px)',
	   '-moz-filter'    : 'blur(4px)',
	   '-o-filter'      : 'blur(4px)',
	   '-ms-filter'     : 'blur(4px)'
	});
	$(containerID).css({'opacity': '0'});
	setTimeout(() => {
	  $(containerID).css({'display': 'none'});
  }, "1300");
}

function fadeInContainer(containerID) {
	setTimeout(() => {
		$(containerID).css({'display': 'flex'});
		setTimeout(() => {
			$(containerID).css({
			   'filter'         : 'blur(0px)',
			   '-webkit-filter' : 'blur(0px)',
			   '-moz-filter'    : 'blur(0px)',
			   '-o-filter'      : 'blur(0px)',
			   '-ms-filter'     : 'blur(0px)'
			});
			$(containerID).css({'opacity': '1'});
		}, "50");
	}, "1301");
}

function displayQuestion2a() {
	fadeOutContainer("#container1");
	fadeInContainer("#container2a");
}

function displayQuestion2b() {
	fadeOutContainer("#container1");
	fadeInContainer("#container2b");
}

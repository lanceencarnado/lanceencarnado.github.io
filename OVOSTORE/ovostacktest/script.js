// add listeners to all artist names
const artists = document.querySelectorAll('.artist-name');

artists.forEach((a) => {
	a.addEventListener('mouseenter', (e) => {
		// get the image id from data-image
		var image = document.getElementById(a.dataset.image);

		image.classList.add("active-img");
  	});
	a.addEventListener('mouseleave', (e) => {
		// get the image id from data-image
		var image = document.getElementById(a.dataset.image);

		image.classList.remove("active-img");
	});
});

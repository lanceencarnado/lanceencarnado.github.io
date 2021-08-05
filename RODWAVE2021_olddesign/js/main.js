var daySelect = document.querySelector('#day');
var yearSelect = document.querySelector('#year');

function populateDays() {
	for(i = 1; i <= 31; i++) {
		var option = document.createElement('option');
		option.textContent = i;
		daySelect.appendChild(option);
	}
}

function populateYears() {
 	// get this year as a number
	var date = new Date();
 	var year = date.getFullYear();

 	// Make this year, and the 100 years before it available in the year <select>
 	for(var i = 0; i <= 100; i++) {
		var option = document.createElement('option');
		option.textContent = year-i;
		yearSelect.appendChild(option);
 	}
}

populateDays();
populateYears();

var button = document.querySelector(".booking-search");
var popup = document.querySelector(".booking-form");

if (popup.classList.contains('booking-form--nojs')) {
	popup.classList.remove('booking-form--nojs');
}
button.addEventListener("click", function(evt) {
	evt.preventDefault();
	
	if (popup.classList.contains("booking-form--hidden")) {
		popup.classList.remove("booking-form--hidden");
		popup.classList.add("booking-form--showed");
	}
	else if (popup.classList.contains("booking-form--showed")) {
		popup.classList.add("booking-form--hidden");
		popup.classList.remove("booking-form--showed");
	}
	
	});
	
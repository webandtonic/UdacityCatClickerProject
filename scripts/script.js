// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {

	let clicked = 0;
	let counter = document.querySelector("span");

	function addEvtLst() {
		let catImage = document.querySelector("img");
		catImage.addEventListener("click", countClick);
	};

	function countClick() {
		clicked += 1;
		counter.innerHTML = (clicked);
	};

	addEvtLst();

});

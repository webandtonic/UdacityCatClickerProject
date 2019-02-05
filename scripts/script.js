// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {

	function addEvtLst() {
		let catImage = document.querySelector("img");
		catImage.addEventListener("click", countClick);
		console.log(catImage);
	};

	function countClick() {
		console.log("clicked!");
	};

	addEvtLst();

});

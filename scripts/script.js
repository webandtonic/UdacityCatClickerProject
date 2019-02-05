// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {

	let clicked = 0;
	let counter = document.querySelector("span");
	let cats = [];

	function NewCat(name, id) {
		this.name = name;
		this.url = "images/cat-" + id;
	};

	function addEvtLst() {
		let catImages = document.querySelectorAll("img");
		for (let catImage of catImages) {
			catImage.addEventListener("click", countClick);
		};
	};

	function countClick() {
		clicked += 1;
		counter.innerHTML = (clicked);
	};

	addEvtLst();

	let cat1 = new NewCat("Tiffy", "01");
	cats.push(cat1);
	let cat2 = new NewCat("Fluffy", "02");
	cats.push(cat2);

	console.log(cat1);
	console.log(cat2);
	console.log(cats);

});

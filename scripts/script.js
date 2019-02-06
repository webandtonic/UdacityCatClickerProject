// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
	let clicked = 0;
	let counter = document.querySelectorAll("span");
	let catImages = document.querySelectorAll("img");
	let cats = [];

	function NewCat(name, i) {
		this.name = name;
		this.url = "images/cat-0" + i + ".jpg";
	};

	function addEvtLst() {
		for (let catImage of catImages) {
			catImage.addEventListener("click", countClick);
			catImage.clicked = 0;
		};
	};

	function countClick() {
		this.clicked += 1;
		document.querySelector("span." + this.className).innerHTML = (this.clicked);
	};

	let cat1 = new NewCat("Tiffy", 1);
	cats.push(cat1);
	let cat2 = new NewCat("Fluffy", 2);
	cats.push(cat2);

	for (i = 0; i < 2; i++) {
		counter[i].className = cats[i].name;
		catImages[i].className = cats[i].name;
		catImages[i].src = cats[i].url;
	};

	addEvtLst();

});

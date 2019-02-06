// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
	// let clicked = 0;
	// let counter = document.querySelectorAll("span");
	// let catImages = document.querySelectorAll("img");
	let cats = ["Tiffy", "Fluffy", "Tabby", "Sassy", "Libby"];
	let kitties = [];

	function NewCat(name) {
		this.name = name;
		this.url = "images/" + name + ".jpg";
	};

	function createKittyList() {
		let kittyList = document.querySelector(".select-cat");

		for (let kitty of kitties) {
			let kittyLink = document.createElement("a");
			kittyLink.setAttribute("src", "#");
			kittyLink.setAttribute("class", "cat-link");
			kittyLink.innerHTML = (kitty.name);
			kittyList.appendChild(kittyLink);
			kittyLink.addEventListener("click", displayCat);
		};

	};

	for (let cat of cats) {
		let kitty = new NewCat(cat);
		kitties.push(kitty);
	};

	createKittyList();

	// function addEvtLst() {
	// 	for (let catImage of catImages) {
	// 		catImage.addEventListener("click", countClick);
	// 		catImage.clicked = 0;
	// 	};
	// };
	//
	// function countClick() {
	// 	this.clicked += 1;
	// 	document.querySelector("span." + this.className).innerHTML = (this.clicked);
	// };

	// let cat1 = new NewCat("Tiffy", 1);
	// cats.push(cat1);
	// let cat2 = new NewCat("Fluffy", 2);
	// cats.push(cat2);
	//
	// for (i = 0; i < 2; i++) {
	// 	counter[i].className = cats[i].name;
	// 	catImages[i].className = cats[i].name;
	// 	catImages[i].src = cats[i].url;
	// };

	// addEvtLst();



});

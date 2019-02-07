// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
	let clicked;
	// let counter = document.querySelectorAll("span");
	// let catImages = document.querySelectorAll("img");
	let cats = ["Tiffy", "Fluffy", "Tabby", "Sassy", "Libby"];
	let kitties = [];
	let kittyList = document.querySelector(".select-cat");
	let kittyDisplay = document.querySelector(".display-cats");

	function NewCat(name) {
		this.name = name;
		this.url = "images/" + name + ".jpg";
	};

	function createKittyList(kitty) {
		let kittyLink = document.createElement("a");
		kittyLink.setAttribute("href", "#");
		kittyLink.setAttribute("class", kitty.name);
		kittyLink.innerHTML = (kitty.name);
		kittyList.appendChild(kittyLink);
		kittyLink.addEventListener("click", displayCat);
	};

	function createKittyDisplay(kitty) {
		let kittyBox = document.createElement("article");
		kittyBox.setAttribute("class", kitty.name)

		let kittyHeading = document.createElement("h2");
		kittyHeading.innerHTML = (kitty.name);

		let kittyImage = document.createElement("img");
		kittyImage.setAttribute("src", kitty.url);
		kittyImage.setAttribute("alt", kitty.name);
		kittyImage.setAttribute("class", kitty.name);
		kittyImage.addEventListener("click", countClick);
		kittyImage.clicked = 0;

		let kittyCounter = document.createElement("span");
		kittyCounter.setAttribute("class", kitty.name);
		kittyCounter.innerHTML = ("0");

		let kittyTextElm = document.createElement("p");
		let kittyText1 = document.createTextNode("You have clicked " + kitty.name + " ");
		let kittyText2 = document.createTextNode(" times!");
		kittyTextElm.appendChild(kittyText1);
		kittyTextElm.appendChild(kittyCounter);
		kittyTextElm.appendChild(kittyText2);

		kittyBox.appendChild(kittyHeading);
		kittyBox.appendChild(kittyImage);
		kittyBox.appendChild(kittyTextElm);

		kittyDisplay.appendChild(kittyBox);
	};

	function displayCat() {
		let catDisplays = document.getElementsByTagName("article");
		for (let catDisplay of catDisplays) {
			catDisplay.style.display = "none";
		};
		document.querySelector("article." + this.className).style.display = "flex";
	};

	function countClick() {
		this.clicked += 1;
		document.querySelector("span." + this.className).innerHTML = (this.clicked);
	};

	for (let cat of cats) {
		let kitty = new NewCat(cat);
		kitties.push(kitty);
	};

	for (let kitty of kitties) {
		createKittyList(kitty);
		createKittyDisplay(kitty);
	};

	document.querySelector("a").click();
});

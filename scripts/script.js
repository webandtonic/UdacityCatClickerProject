// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {

	let model = {
		cats: ["Tiffy", "Fluffy", "Tabby", "Sassy", "Libby"],
		catObjects: [],
		NewCat: function(name) {
			this.name = name;
			this.url = "images/" + name + ".jpg";
			this.clicked = 0;
		}
	};

	let octopus = {
		createCatObjects: function() {
			for (let cat of model.cats) {
				let catObj = new model.NewCat(cat);
				model.catObjects.push(catObj);
			};
		}
	};

	let viewCatList = {
		createCatList: function(cat) {
			let catLink = document.createElement("a");
			catLink.setAttribute("href", "#");
			catLink.setAttribute("class", cat.name);
			catLink.innerHTML = (cat.name);
			catList.appendChild(catLink);
			catLink.addEventListener("click", displayCat);
		}
	};

	let viewCatDisplay = {
		displayCat: function() {

		}
	};

octopus.createCatObjects();
console.log(model.catObjects);

});

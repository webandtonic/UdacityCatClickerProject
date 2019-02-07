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
		},

		createCatList: function() {
			for (let cat of model.cats) {
				viewCatList.createCatLink(cat);
			};
		}
	};

	let viewCatList = {
		catList: document.querySelector(".select-cat"),
		createCatLink: function(cat) {
			let catLink = document.createElement("a");
			catLink.setAttribute("href", "#");
			catLink.setAttribute("class", cat);
			catLink.innerHTML = (cat);
			viewCatList.catList.appendChild(catLink);
			// catLink.addEventListener("click", displayCat);
		}
	};

	let viewCatDisplay = {
		// displayCat: function() {
		//
		// }
	};

octopus.createCatObjects();
octopus.createCatList();
console.log(model.catObjects);

});

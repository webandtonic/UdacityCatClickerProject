// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {

	let model = {
		cats: ["Tiffy", "Fluffy", "Tabby", "Sassy", "Libby"],
		catObjects: [],
		currentCatObject: null,
		NewCat: function(name) {
			this.name = name;
			this.url = "images/" + name + ".jpg";
			this.clicked = 0;
		},
		createCatObjects: function() {
			for (let cat of model.cats) {
				let catObj = new this.NewCat(cat);
				model.catObjects.push(catObj);

			};
		},
	};

	let octopus = {

		init: function() {
			model.createCatObjects();
			model.currentCatObject = model.catObjects[0];

			viewCatList.init();
			viewCatDisplay.init();
			viewCatAdmin.init();
		},

		getCatObjects: function() {
			return model.catObjects;
		},

		getCurrentCatObject: function() {
			return model.currentCatObject;
		},

		setCurrentCatObject: function(obj) {
			model.currentCatObject = obj;
		},

		countClick: function() {
			model.currentCatObject.clicked += 1;
			viewCatDisplay.updateCounter();
		},

		updateCatObjectValues: function() {

		}
	};

	let viewCatList = {

		init: function() {
		 this.catList = document.querySelector(".select-cat");
		 this.adminButton = document.querySelector(".admin");

		 this.render();
		},

		render: function() {
			let cats = octopus.getCatObjects();

			for (let cat of cats) {
				let catLink = document.createElement("li");
				catLink.innerHTML = (cat.name);

				catLink.addEventListener("click", (function(obj) {
					return function() {
						octopus.setCurrentCatObject(obj);
						viewCatDisplay.render();
						viewCatAdmin.render();
					};
				})(cat));

				this.catList.appendChild(catLink);
			};

			this.adminButton.addEventListener("click", viewCatAdmin.hideShow);
		}
	};

	let viewCatDisplay = {

		init: function() {
			this.catHeading = document.querySelector(".cat-heading"),
			this.catImage = document.querySelector(".cat-image"),
			this.catName = document.querySelector(".cat-name"),
			this.catCount = document.querySelector(".cat-count")

			this.catImage.addEventListener("click", octopus.countClick);

			this.render();
		},

		render: function() {
			let cat = octopus.getCurrentCatObject();
			this.catHeading.innerHTML = (cat.name);
			this.catImage.src = (cat.url);
			this.catImage.alt = (cat.name);
			this.catName.innerHTML = (cat.name);
			this.catCount.innerHTML = (cat.clicked);
		},

		updateCounter: function() {
			let cat = octopus.getCurrentCatObject();
			this.catCount.innerHTML = (cat.clicked);
		}
	};

	let viewCatAdmin = {

		init: function() {
			this.catAdmin = document.querySelector(".cat-admin");
			this.inputCatName = document.querySelector(".edit-cat-name");
			this.inputCatImage = document.querySelector(".edit-cat-image");
			this.inputCatClicked = document.querySelector(".edit-cat-clicked");
			this.buttonCancel = document.querySelector(".edit-cancel");
			this.buttonCancel.addEventListener("click", this.hideShow);
			this.buttonSave = document.querySelector(".edit-save");

			this.render();
			this.hideShow();
			console.log(this.catAdmin);
		},

		render: function() {
			let cat = octopus.getCurrentCatObject();
			this.inputCatName.value = (cat.name);
			this.inputCatImage.value = (cat.url);
			this.inputCatClicked.value = (cat.clicked);

		},

		hideShow: function() {
			viewCatAdmin.catAdmin.classList.toggle("hide");
			if (!viewCatAdmin.catAdmin.classList.contains("hide")) {
				viewCatAdmin.render();
			};
		}
	};

	octopus.init();
});

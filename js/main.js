'use strict';
//SERIOUSLY CLEAN THIS CODE UP!!

// var imagesPng = ['rey1.png','rey2.png','rey3.png','phasma1.png','phasma2.png','phasma3.png','phasma4.png','chewie1.png','chewie2.png','chewie3.png'];
var imagesPng = ['rey1.png','rey2.png','rey3.png'];
var showImages = document.getElementById('images');

var rey = document.getElementById("rey");
console.log("rey ====", rey);
console.log("rey's value  ====", rey.value);
rey.addEventListener('change', showImage, false);

// for (var i = 0; i < imagesPng.length; i++){
// 	var numberOfImages = Math.floor((Math.random() * imagesPng.length) + 1);
// 	var imageName = variable.value + imagesPng + '.png';
// 	if(imageName === imagesPng[i]) {
// 		showImages.innerHTML = '<img src="../img/' + rey.value + numberOfImages + '.png" alt="No image to display!" />';
// 	} else {
// 		console.log("Try again!!!");
// 		showImages.innerHTML = '';
// 	}	
// };

function showImage() {
	if(rey.checked === true) {
		var numberOfImages = Math.floor((Math.random() * imagesPng.length) + 1);
		console.log("numberOfImages =======", numberOfImages);

		showImages.innerHTML = '<img src="../img/' + rey.value + numberOfImages + '.png" alt="No image to display!" />';
	} else {
		showImages.innerHTML = '';
	};
} 

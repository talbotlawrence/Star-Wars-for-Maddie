'use strict';
console.log("========= main.js ==========");

var xhr = new XMLHttpRequest();

xhr.onload = function() {
	if(xhr.status === 200) {
		var responseObject = JSON.parse(xhr.responseText);
		// console.log("======= responseObject ========", responseObject);
		console.log("======= Players ========", responseObject.players);
		// console.log("======= First Player ========", responseObject.players[0]);
		// console.log("======= First Player Name ========", responseObject.players[0].name);
		console.log("======= Players Length ========", responseObject.players.length);

		var textContent = '';

		for (var i = 0; i < responseObject.players.length; i++){
			textContent += '<div class="event">';
			textContent += '<p><b>' + responseObject.players[i].name + '</b></p>';
			textContent += '<p>Can the character use the force?  ';
			textContent += responseObject.players[i].force + '</p>';
			textContent += '<p>Good or bad?  ';
			textContent += responseObject.players[i].behavior + '</p>';
			textContent += '<p>What weapon does this character use?  ';
			textContent += responseObject.players[i].weapon + '</p><br>';
			textContent += '</div>';
		}

		document.getElementById("list").innerHTML = textContent

	}
};

xhr.open('GET', '../star.json', true);
xhr.send(null);  

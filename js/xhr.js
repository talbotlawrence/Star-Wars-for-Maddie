'use strict';
// console.log("========= xhr.js ==========");
/*
	 new, onload, JSON.parse, innerHTML, open, send = 6
	 */

var TheData = (function() {  //DO I NEED THE IIFE???  THIS LINE AND THE LAST!
	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
		if(xhr.status === 200) {
			var responseObject = JSON.parse(xhr.responseText);
			// console.log("======= responseObject ========", responseObject);
			// console.log("======= First Player ========", responseObject.players[0]);
			// console.log("======= Players Length ========", responseObject.players.length);

			var textContent = '';
			var daughterObject = '';
			var findDaughter = /madelyn/i;
			var a = responseObject.players;

			//2 if statements--one embedded?
			for (var i = 0; i < a.length; i++){
				if (a[i].name.match(findDaughter)) {
					daughterObject = a[i];
					// console.log("daughterObject", daughterObject);
					a.splice(i, 1);
					// console.log("a is now =====", a);
				} else {
					// console.log("Can't find it!!");
				}
			};
			a.unshift(daughterObject);

			//DO I SERIOUSLY NEED 2 LOOPS????????????????????????????????????
			for (var i = 0; i < a.length; i++){
				textContent += '<div class="event">';
				textContent += '<p><b>' + a[i].name + '</b></p>';
				textContent += '<p>Can the character use the force?  ';
				textContent += a[i].force + '</p>';
				textContent += '<p>Good or bad?  ';
				textContent += a[i].behavior + '</p>';
				textContent += '<p>What weapon does this character use?  ';
				textContent += a[i].weapon + '</p><br>';
				textContent += '</div>';
			};
			// console.log("textContent ======", textContent);
			document.getElementById("list").innerHTML = textContent
		}
	};

	xhr.open('GET', '../star.json', true);
	xhr.send(null);  
})();

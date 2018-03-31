'use strict';

console.log("------------Here is login.js-------------");

var user = document.getElementById("username");
// user.addEventListener('input', checkCreds, false);

var password = document.getElementById("pwd");
password.addEventListener('input', checkCreds, false);

var videoDom = document.getElementById("showVideo");

function checkCreds(e) {
	var target = e.target;
	console.log("target in checkCreds ==========", target);
	var theVideo = '';
	if(password.value.length >= 4) {
				 console.log("Video works!!!");
		 theVideo = "<iframe width='560' height='315' ";
		 theVideo += "src='https://www.youtube.com/embed/cwwer6_FCs4' ";
		 theVideo += "frameborder='0' allow='autoplay; encrypted-media' allowfullscreen>";
		 theVideo += "</iframe>";
		 videoDom.innerHTML = theVideo;
		 videoDom.style.background='pink';
	} else {
			console.log("Oh no to the video!!!!!");
	}
}; 

//Nouns: 
//	1. Value of the username text box
//	2. The value and length of the password value
//	3. The number 4 (for the password length) 
//	4. The hidden YouTube video
//
//When you focus on the password text box
//	--a display shows up telling you how many characters you have left to type
//	--it will count down to 0 and then say you did it
//	Review 

// var submit = document.getElementById("submit");
// submit.addEventListener('click', displayVideo, false);

//When you click on the submit button:
//	--the user name has to exist
//	--the password has to be 4 characters long
//	--if user name and password, then a hidden video will display
//

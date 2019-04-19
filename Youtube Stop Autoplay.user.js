// ==UserScript==
// @name         YouTube Stop Autoplay
// @namespace    https://github.com/johnnyawesome
// @version      1.0.6
// @description  Stops YouTube from auto-playing videos
// @author       JohnnyAwesome
// @match        http://www.youtube.com/*
// @match        https://www.youtube.com/*
// @grant        none
// @icon         https://raw.githubusercontent.com/johnnyawesome/MyLogo/master/MySkull32.ico
// @icon64		 https://raw.githubusercontent.com/johnnyawesome/MyLogo/master/MySkull64.ico
// @updateURL    https://github.com/johnnyawesome/UserscriptYoutubeStopAutoplay/raw/master/Youtube%20Stop%20Autoplay.user.js
// @downloadURL  https://github.com/johnnyawesome/UserscriptYoutubeStopAutoplay/raw/master/Youtube%20Stop%20Autoplay.user.js
// @noframes
// ==/UserScript==

'use strict';

setInterval(turnAutoplayOff, 10000);

function turnAutoplayOff(){

	console.log("Status of Autoplay:", document.getElementById("toggle").getAttribute("aria-pressed"));

	if(document.getElementById("toggle").getAttribute("aria-pressed") == 'true'){
		console.log("Autoplay is turned on. Turning it off.")
		document.getElementById("toggle").click();
	}
}

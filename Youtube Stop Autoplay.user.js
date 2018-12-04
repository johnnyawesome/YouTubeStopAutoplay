// ==UserScript==
// @name         Youtube Stop Autoplay
// @namespace    https://github.com/johnnyawesome
// @version      1.0.5
// @description  Take over the world! :)
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

(function() {
    'use strict';

	setInterval(turnAutoplayOff, 5000);

	function turnAutoplayOff(){

		//if Autplay is turned on....
		if(document.querySelector(".yt-uix-checkbox-on-off input[type='checkbox']:checked + label")){

			//...turn it off.
			document.getElementById('autoplay-checkbox').click();
		}

		if(document.getElementById("improved-toggle").getAttribute("aria-pressed") == 'true'){
			document.getElementById("improved-toggle").click();
		}
	}
})();


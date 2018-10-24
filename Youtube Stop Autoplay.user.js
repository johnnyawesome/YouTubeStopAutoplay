// ==UserScript==
// @name         Youtube Stop Autoplay
// @namespace    https://github.com/johnnyawesome
// @version      1.0.3
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

	setInterval(turnAutoplayOff, 15000);

	function turnAutoplayOff(){

		//if Autplay is turned on....
		if(document.querySelector("#improved-toggle[active]") || document.querySelector("#improved-toggle[checked]")){

		//...turn it off.
		document.querySelector("#improved-toggle[active]").click();
	}
}
})();


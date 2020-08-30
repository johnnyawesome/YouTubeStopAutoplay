// ==UserScript==
// @name         YouTube Stop Autoplay
// @namespace    https://github.com/johnnyawesome
// @version      1.0.10
// @description  Stops YouTube from auto-playing videos
// @author       JohnnyAwesome
// @match        http://www.youtube.com/*
// @match        https://www.youtube.com/*
// @grant        none
// @icon         https://raw.githubusercontent.com/johnnyawesome/MyLogo/master/MySkull32.ico
// @icon64		 https://raw.githubusercontent.com/johnnyawesome/MyLogo/master/MySkull64.ico
// @updateURL    https://raw.githubusercontent.com/johnnyawesome/YouTubeStopAutoplay/master/YouTube%20Stop%20Autoplay.user.js
// @downloadURL  https://raw.githubusercontent.com/johnnyawesome/YouTubeStopAutoplay/master/YouTube%20Stop%20Autoplay.user.js
// @noframes
// ==/UserScript==

'use strict';

//Check (and if necessary) turn off Auto-Play every 10 seconds, indefinitely
let autoplayStopper = setInterval(turnAutoplayOff, 10000);

function turnAutoplayOff(){

  //console.log("Autoplay is turned on:", document.getElementById("toggle").getAttribute("aria-pressed"));

  if(document.getElementById("toggle")
  && document.getElementById("toggle").getAttribute("aria-pressed")
  && document.getElementById("toggle").getAttribute("aria-pressed") == 'true'){
    console.log('%c YouTube Auto-Play is turned on. Turning it off. ', 'background: #000; color: #00ff00');
    document.getElementById("toggle").click();
  }
}

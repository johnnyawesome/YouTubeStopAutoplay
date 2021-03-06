// ==UserScript==
// @name         YouTube Stop Autoplay
// @namespace    https://github.com/johnnyawesome
// @version      1.0.11
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

setInterval(turnAutoplayOff, 10000);

function turnAutoplayOff(){

  let button = document.getElementsByClassName("ytp-autonav-toggle-button")[0];

  if(button
  && button.getAttribute("aria-checked") === "true"){
    console.log('%c YouTube Auto-Play is turned on. Turning it off. ', 'background: #000; color: #00ff00');
    button.click();
  }
}

// ==UserScript==
// @name         Youtube Stop Autoplay
// @namespace    https://github.com/johnnyawesome
// @version      1.0
// @description  Take over the world! :)
// @author       JohnnyAwesome
// @match        http://*
// @match        https://*
// @grant        none
// @icon         https://cdn0.iconfinder.com/data/icons/pixelo/32/skull.png
// ==/UserScript==

(function() {
    'use strict';

	//if Autplay is turned on....
	if(document.querySelector("#improved-toggle[active]") || document.querySelector("#improved-toggle[checked]")){

  	//...turn it off.
  	document.querySelector("#improved-toggle[active]").click();
}
})();
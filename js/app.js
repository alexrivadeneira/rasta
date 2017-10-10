var templates = {};
var controllers = {};
var views = {};


var mainContent = document.getElementById("content");
var navBar = document.getElementById("navbar");

window.onload = function(){
	router.router();
}

window.onhashchange = function(){
	router.router();
}



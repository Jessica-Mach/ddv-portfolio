let navIcon = document.getElementById("hamburger-icon");
let navMenu = document.getElementById("nav-menu");

const turnOnNav = function(){
	navMenu.hidden = false;
	navIcon.hidden = true;
}

const turnOffNav = function(){
	navMenu.hidden = true;
	navIcon.hidden = false;
}

turnOffNav();
navIcon.addEventListener("click", turnOnNav);
navMenu.addEventListener("click", turnOffNav);
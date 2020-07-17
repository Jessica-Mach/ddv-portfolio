// Stores nav elements
let navIcon = document.getElementById("hamburger-icon"); // collapsed menu icon
let navMenu = document.getElementById("nav-menu"); // full display of menu on mobile devices
let windowSize = window.matchMedia("(max-width: 767px)"); // size of window

// Stores img tags of thumbnails
let tn1 = document.getElementById("tn-1"); 
let tn2 = document.getElementById("tn-2");
let tn3 = document.getElementById("tn-3");
let tn4 = document.getElementById("tn-4");
let tn5 = document.getElementById("tn-5");
let tn6 = document.getElementById("tn-6");
let tn7 = document.getElementById("tn-7");

// Displays full navigation 
const turnOnNav = function(){
	navMenu.hidden = false;
	navIcon.hidden = true;
}

// Displays collapsed hamburger menu icon
const turnOffNav = function(){
	navMenu.hidden = true;
	navIcon.hidden = false;
}

const onReady = function(windowSize){
	// If window is smaller than tablet, turn off full nav menu
	if(windowSize.matches){
		turnOffNav();
		navIcon.addEventListener("click", turnOnNav);
		navMenu.addEventListener("click", turnOffNav);
	}
	else{
		turnOnNav();
	}
}

const swapImage = function(image){
	// Stores image caption strings
	let cap1 = "This is the caption for image 1.";
	let cap2 = "This is the caption for image 2.";
	let cap3 = "This is the caption for image 3.";
	let cap4 = "This is the caption for image 4.";
	let cap5 = "This is the caption for image 5.";
	let cap6 = "This is the caption for image 6.";
	let cap7 = "This is the caption for image 7.";
	// Stores caption display location
	let caption = document.getElementById("caption");
	// Stores bigger display image location
	let bigImage = document.getElementById("big-img");

	if(image === tn1){
		caption.innerText = cap1;
		bigImage.src = "img/dauntless-giant-campaign-3.png";
		bigImage.alt = "Group of people stepping into a lighted doorway"
	} else if(image === tn2){
		caption.innerText = cap2;
		bigImage.src = "img/dauntless-giant-campaign-2.png";
		bigImage.alt = "A doorway opening into light"
	} else if(image === tn3){
		caption.innerText = cap3;
		bigImage.src = "img/dauntless-giant-campaign-1.png";
		bigImage.alt = "Dauntless logo depicted as glimmer of light";
	} else if(image === tn4){
		caption.innerText = cap4;
		bigImage.src = "img/dauntless-giant-campaign-4.png";
		bigImage.alt = "A crowd of people in front of the screen";
	} else if(image === tn5){
		caption.innerText = cap5;
		bigImage.src = "img/dauntless-we-are-campaign-dana.png";
		bigImage.alt = "A woman holding a cat";
	} else if(image === tn6){
		caption.innerText = cap6;
		bigImage.src = "img/dauntless-we-are-campaign-steve.png";
		bigImage.alt = "A man in a suit";
	} else if(image === tn7){
		caption.innerText = cap7;
		bigImage.src = "img/dauntless-we-are-campaign-will.png";
		bigImage.alt = "A man with glasses and a stocking cap in front of machinery";
	} else{
		console.log("Error in program. Image not passed into function properly.");
	}
}

// Determine nav menu placement on refresh
onReady(windowSize); 

// Determine nav menu placement when screen is resized
window.addEventListener("resize", onReady); 

// If user clicks on thumbnail image, thumbnail replaces big image.
tn1.addEventListener("click", function(){
	swapImage(tn1);
	});
tn2.addEventListener("click", function(){
	swapImage(tn2);
	});
tn3.addEventListener("click", function(){
	swapImage(tn3);
	});
tn4.addEventListener("click", function(){
	swapImage(tn4);
	});
tn5.addEventListener("click", function(){
	swapImage(tn5);
	});
tn6.addEventListener("click", function(){
	swapImage(tn6);
	});
tn7.addEventListener("click", function(){
	swapImage(tn7);
	});



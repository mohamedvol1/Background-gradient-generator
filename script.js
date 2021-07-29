var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");



function showGradientValue() {
	css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	showGradientValue()
}

function randomGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ randomColor(color1) 
	+ ", " 
	+ randomColor(color2) 
	+ ")"; 

	showGradientValue()
}

function randomColor(color) {
	color.value =  "#" 
	+ randomNumber0To255()
	+ randomNumber0To255()
	+ randomNumber0To255();
}

function randomNumber0To255() {
	return Math.floor(Math.random() * 256).toString(16).padEnd(2, '0');
}

setGradient();

randomButton.addEventListener("click", event => {
	randomGradient();
	setGradient();

});

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
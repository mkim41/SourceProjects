let frames = [];
let index = 0;
let bg;
let c;

//variable for mouse position changing
var a,b;

//variable for logo changing
let brandSetup;
let brand = ["png","v","a"];


function setup() {
	createCanvas(2000,2000);
	bg = loadImage("bg.jpeg");
	background(bg);
	frameRate (10);
	
	c = loadImage("bird.png");
	cursor(c);
	brandSetup = "a"
	for (let i = 0; i < 6; i++) {
  	console.log(i);
		frames[i] = loadImage(brandSetup + i + ".png");
	}

	
}

function draw() {
	background (bg,90);
	logo (mouseX+random(-200,200),mouseY-random(-200,200));

		if(mouseIsPressed){
				for (let i = 0; i < 8; i++) {
					for (let j = 3; j >= 0; j--){
				frames[i] = loadImage(brand[j] + i + ".png");
			}}
		}

	
}

function logo(a,b){
	
	index = index+1;
	if (index >= 6){index=0;}
	image (frames[index],a,b);
	console.log (index);
	
}





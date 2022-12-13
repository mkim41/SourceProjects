let frames = [];
let index = 0;
let j = 0;
let bg;
let c;

//variable for mouse position changing
var a,b;

//variable for logo changing
let CurrentBrand;
let brands = ["png","v","al","u","d"];


function setup() {
	createCanvas(windowWidth,windowHeight);
	bg = loadImage("bg/bg1.jpeg");
	c = loadImage("bird.png");

	CurrentBrand = brands[0];
	for (let i = 0; i < 6; i++) {
		frames[i] = loadImage("logos/" + CurrentBrand + i + ".png");
	}

	
}

function draw() {
	background(bg,80);
	frameRate (7);

	image(c, mouseX-100,mouseY-100, 150,150);
	text('click!', mouseX,mouseY);
	textSize(20);
	logo (mouseX+random(50,150),mouseY-random(50,150));
	logo (mouseX+random(40,80),mouseY-random(40,80));
	logo (mouseX+random(40,200),mouseY-random(40,200));


		if(mouseIsPressed){
				j = j+1
				if (j >= 5){j=0;}
				CurrentBrand = brands[j];
				console.log(brands[j]);
				for (let i = 0; i < 6; i++) {
					frames[i] = loadImage("logos/" + CurrentBrand + i + ".png");
				}
			}
	
}

function logo(a,b){
	
	index = index+1;
	if (index >= 6){index=0;}
	image (frames[index],a,b);
	
}






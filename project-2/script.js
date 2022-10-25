//wrapper allows the "groups" to be positioned off-screen, but without scroll
// "groups" floating around the screen
// description hidden > click to expand
// list as mindmap?
// group is draggable
// click recipe > only leaves the relevant ingredients
//downloading the recipe erases carbon footprint?


//track mouse-move
let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
  
}


//make each group dragabble
let chooseGroup;

//pick up div
const group = document.querySelectorAll(".group").forEach(group => {

    // group.style.position = "relative"
    // group.style.margin = Math.random() + "px"

group.addEventListener("mousedown", () => {
        group.style.position = "absolute"
        chooseGroup = group

        document.onmousemove = (e) => {
            let x = e.pageX
            let y = e.pageY

            chooseGroup.style.left = x -100 + "px"
            chooseGroup.style.top = y -100 + "px"
        } 
    });
});
//let go of div
document.onmouseup = function(e){
    chooseGroup = null;
}






//see description for each group
let algaeBox = document.querySelector(".algae-box");
let algaes = document.querySelector(".algae");
if (algaeBox){
    algaeBox.addEventListener("mousedown",()=>{
        console.log("algae!!!");
        algaes.style.color = "lightblue";
        algaes.style.backgroundColor = "black";
    });

    algaeBox.onmouseup = function(e){
        algaes.style.color = "black";
        algaes.style.backgroundColor = "lightblue";
    }
}


let beanBox = document.querySelector(".beans-box");
let beans = document.querySelector(".beans");
if (beanBox){
    beanBox.addEventListener("mousedown",()=>{
        console.log("bean!!!");
        beans.style.color = "lightpink";
        beans.style.backgroundColor = "black";
    });

    beanBox.onmouseup = function(e){
        beans.style.color = "black";
        beans.style.backgroundColor = "lightpink";
    }
}


let cactiBox = document.querySelector(".cacti-box");
let cacti = document.querySelector(".cacti");
if (cactiBox){
    cactiBox.addEventListener("mousedown",()=>{
        console.log("cacti!!!");
        cacti.style.color = "yellow";
        cacti.style.backgroundColor = "black";
    });

    cactiBox.onmouseup = function(e){
        cacti.style.color = "black";
        cacti.style.backgroundColor = "yellow";
    }
}

let cerealsBox = document.querySelector(".cereals-box");
let cereals = document.querySelector(".cereals");
if (cerealsBox){
    cerealsBox.addEventListener("mousedown",()=>{
        console.log("cereals!!!");
        cereals.style.color = "beige";
        cereals.style.backgroundColor = "black";
    });

    cerealsBox.onmouseup = function(e){
        cereals.style.color = "black";
        cereals.style.backgroundColor = "beige";
    }
}


let fruitsBox = document.querySelector(".fruits-box");
let fruits = document.querySelector(".fruits");
if (fruitsBox){
    fruitsBox.addEventListener("mousedown",()=>{
        console.log("fruits!!!");
        fruits.style.color = "violet";
        fruits.style.backgroundColor = "black";
    });

    fruitsBox.onmouseup = function(e){
        fruits.style.color = "black";
        fruits.style.backgroundColor = "violet";
    }
}


let greensBox = document.querySelector(".greens-box");
let greens = document.querySelector(".greens");
if (greensBox){
    greensBox.addEventListener("mousedown",()=>{
        console.log("greens!!!");
        greens.style.color = "yellowgreen";
        greens.style.backgroundColor = "black";
    });

    greensBox.onmouseup = function(e){
        greens.style.color = "black";
        greens.style.backgroundColor = "yellowgreen";
    }
}

let mushroomsBox = document.querySelector(".mushrooms-box");
let mushrooms = document.querySelector(".mushrooms");
if (mushroomsBox){
    mushroomsBox.addEventListener("mousedown",()=>{
        console.log("mushrooms!!!");
        mushrooms.style.color = "springGreen";
        mushrooms.style.backgroundColor = "black";
    });

    mushroomsBox.onmouseup = function(e){
        mushrooms.style.color = "black";
        mushrooms.style.backgroundColor = "springGreen";
    }
}


let nutsBox = document.querySelector(".nuts-box");
let nuts = document.querySelector(".nuts");
if (nutsBox){
    nutsBox.addEventListener("mousedown",()=>{
        console.log("nuts!!!");
        nuts.style.color = "orange";
        nuts.style.backgroundColor = "black";
    });

    nutsBox.onmouseup = function(e){
        nuts.style.color = "black";
        nuts.style.backgroundColor = "orange";
    }
}


let rootvegBox = document.querySelector(".root-veg-box");
let rootveg = document.querySelector(".root-veg");
if (rootvegBox){
    rootvegBox.addEventListener("mousedown",()=>{
        console.log("rootvegs!!!");
        rootveg.style.color = "salmon";
        rootveg.style.backgroundColor = "black";
    });

    rootvegBox.onmouseup = function(e){
        rootveg.style.color = "black";
        rootveg.style.backgroundColor = "salmon";
    }
}

let sproutsBox = document.querySelector(".sprouts-box");
let sprouts = document.querySelector(".sprouts");
if (sproutsBox){
    sproutsBox.addEventListener("mousedown",()=>{
        console.log("sprouts!!!");
        sprouts.style.color = "aqua";
        sprouts.style.backgroundColor = "black";
    });

    sproutsBox.onmouseup = function(e){
        sprouts.style.color = "black";
        sprouts.style.backgroundColor = "aqua";
    }
}


let tubersBox = document.querySelector(".tubers-box");
let tubers = document.querySelector(".tubers");
if (tubersBox){
    tubersBox.addEventListener("mousedown",()=>{
        console.log("tubers!!!");
        tubers.style.color = "plum";
        tubers.style.backgroundColor = "black";
    });

    tubersBox.onmouseup = function(e){
        tubers.style.color = "black";
        tubers.style.backgroundColor = "plum";
    }
}








//let x = Math.random();
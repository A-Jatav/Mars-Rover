var canvas = document.getElementById("surface_of_mars");
var ctx = canvas.getContext("2d");

var nasaapiimgs = ["mars1.jpg", "mars2.jpg", "mars3.jpg", "mars4.jpg", "mars5.jpg"];
var randomnum = Math.floor(Math.random() * 5);
var rover_width = 50;
var rover_height = 50;
var rover_X = 10;
var rover_Y = 10;
var backgroundimg = nasaapiimgs[randomnum];
var roverimg = "rover.png";
var roverimgtag = new Image();
var backgroundimgtag = new Image();

function add(){
    backgroundimgtag.onload = uploadbackground;
    backgroundimgtag.src = backgroundimg;

    roverimgtag.onload = uploadrover;
    roverimgtag.src = roverimg;
};

function uploadbackground(){
    ctx.drawImage(backgroundimgtag, 0, 0, canvas.width, canvas.height);
};

function uploadrover(){
    ctx.drawImage(roverimgtag, rover_X, rover_Y, rover_width, rover_height);
};

window.addEventListener("keydown", whenkeypressed);

function whenkeypressed(e){
    Ascii_values = e.keyCode;
    if(Ascii_values == '37'){
        leftkeypressed();
        console.log("Left arrow key pressed. ASCII value of the key is "+Ascii_values);
    };
    if(Ascii_values == '38'){
        upkeypressed();
        console.log("Up arrow key pressed. ASCII value of the key is "+Ascii_values);
    };
    if(Ascii_values == '39'){
        rightkeypressed();
        console.log("Right arrow key pressed. ASCII value of the key is "+Ascii_values);
    };
    if(Ascii_values == '40'){
        downkeypressed();
        console.log("Down arrow key pressed. ASCII value of the key is "+Ascii_values);
    };
};

function leftkeypressed(){
    if(rover_X >= 0){
        rover_X = rover_X - 3;
        console.log("X = "+rover_X+" Y = "+rover_Y);
        uploadbackground();
        uploadrover();
    };
};

function rightkeypressed(){
    if(rover_X <= 700){
        rover_X = rover_X + 3;
        console.log("X = "+rover_X+" Y = "+rover_Y);
        uploadbackground();
        uploadrover();
    };
};

function upkeypressed(){
    if(rover_Y >= 0){
        rover_Y = rover_Y - 3;
        console.log("X = "+rover_X+" Y = "+rover_Y);
        uploadbackground();
        uploadrover();
    };
};

function downkeypressed(){
    if(rover_Y <= 500){
        rover_Y = rover_Y + 3;
        console.log("X = "+rover_X+" Y = "+rover_Y);
        uploadbackground();
        uploadrover();
    };
};
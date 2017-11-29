
//_____________________LOGIC__________________
//Clicker
var cookies = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById('cookies').innerHTML = round(cookies);
};
//Upgrades
var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));
    if(cookies >= cursorCost){                                   
        cursors = cursors + 1;                                   
    	cookies = cookies - cursorCost;                          
	}
}
//Round Numbers
function round(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
};





//______________________The Display______________________

function getMousePos(canvas, event) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};
}
function isInside(pos, rect){
	return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.heigth && pos.y > rect.y
}

var canvas = document.getElementById('graphics');
var context = canvas.getContext('2d');

var rect = Button

canvas.addEventListener('click', function(evt) {
	var mousePos = getMousePos(canvas, evt);
	if (isInside(mousePos,rect)) {
		alert('clicked inside rect');
    }else{
        alert('clicked outside rect');
    }	
}, false);


function Button(topx,lefty,width,height,fillcolor,linecolor,txt) {
context.beginPath();
context.rect(topx, lefty, height, width); 
context.fillStyle = fillcolor;
context.fill(); 
context.lineWidth = 2;
context.strokeStyle = linecolor; 
context.stroke();
context.closePath();
context.fillStyle = 'red';
context.fillText(txt,((topx+width)+topx)/2,((lefty+height)+lefty)/2);
}

var Stop = new Button(10,20,30,60,"aqua","black","STOP");

var Start = new Button(40,80,30,60,"aqua","black","START");


function updateDisplay() {
	document.getElementById('cookies').innerHTML = round(cookies);
	document.getElementById('cursors').innerHTML = round(cursors);
	var nextCost = Math.floor(10 * Math.pow(1.1,cursors)); document.getElementById('cursorCost').innerHTML = round(nextCost);
}	

//______________________Save Game________________________
function save() {
var storage = {
		cookies: cookies,
		cursors: cursors
}
localStorage.setItem("storage",JSON.stringify(storage))
};

function load() {
	var savegame = JSON.parse(localStorage.getItem("storage"));
	
	if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
	if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
	gameRun();
}

function deleteSave() {
	var storage = {
		cookies: 0,
		cursors: 0
}
localStorage.setItem("storage",JSON.stringify(storage))
location.reload();
}

//_________________________The Game_________________________
function gameRun() {
window.setInterval(function(){
	cookieClick(cursors);
	updateDisplay();
	save();
}, 1000);
}



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


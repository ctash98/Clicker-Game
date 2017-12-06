//_____________________LOGIC__________________
var Damage = 0;

//Clicker
var gold = 0;

function tap(number) {
    gold += number;
	slime.health -= number;
    updateDisplay();
	console.log(number)
};
//Upgrades
var cursors = 0;
var todlvl = 0;

function buyCursor() {
    var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));
    if (gold >= cursorCost) {                                   
        cursors = cursors + 1;                                   
    	gold -= cursorCost; 
		todlvl += 1;
		updateDisplay();
	}
}
//Round Numbers
function round(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
};


//Enemy Logic
function monster(name,img,health,timelimit) {
	this.Sprite = new Image();
	this.Sprite.src = img;
	this.name = name;
	this.health = health;
}

var slime = new monster('Slime','Images/slime.png',100,60);


//______________________The Display______________________
function updateDisplay(currentEnemy) {
	document.getElementById('gold').innerHTML = round(gold);
	document.getElementById('cursors').innerHTML = round(cursors);
	
	var nextCost = Math.floor(10 * Math.pow(1.1,cursors)); document.getElementById('cursorCost').innerHTML = round(nextCost);
	document.getElementById('clicker1').innerHTML = round(nextCost);
	
	document.getElementById('todlvl').innerHTML = todlvl;
	
	
	var currentEnemy = slime;
	document.getElementById('currentEnemy').innerHTML = currentEnemy.name;
	document.getElementById('enemyHealth').innerHTML = currentEnemy.health;
	document.getElementById('enemyImage').src = currentEnemy.Sprite.src;
	
	if(currentEnemy.health <= 0) {
		document.getElementById('enemyHealth').innerHTML = "Riperinos";
		nextEnemy();
	}
	
}
//______________________Save Game________________________
function save() {
var storage = {
		gold: gold,
		cursors: cursors,
		todlvl: todlvl
}
localStorage.setItem("storage",JSON.stringify(storage))
};

function load() {
	var savegame = JSON.parse(localStorage.getItem("storage"));
	
	if (typeof savegame.gold !== "undefined") gold = savegame.gold;
	if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
	if (typeof savegame.todlvl !== "undefined") todlvl = savegame.todlvl;
	gameRun();
}

function deleteSave() {
	var storage = {
		gold: 0,
		cursors: 0,
		todlvl: 0
}
localStorage.setItem("storage",JSON.stringify(storage))
location.reload();
}

//_________________________The Game_________________________
function gameRun() {
window.setInterval(function(){
	tap(cursors);
	updateDisplay();
	save();
}, 1000);
}


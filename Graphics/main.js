//Clicker
var money = player.money;

function player(lvl,money) {
	this.lvl = lvl;
	this.money = money;
}

var player = new player(1,20);

var playerlvl = 1;

function upgradePlayerDamage() {
	var upgradeCost = Math.floor(3 * Math.pow(1.45, playerlvl));
    if (money >= upgradeCost) {  
		playerlvl += 1;
		money -= upgradeCost;
		updatePlayer();
	}
}

function tap(number) {
	currentEnemy.health -= number;
	enemyLogic();
	updateDisplay();
};

//Upgrade Related Stuff
function hero(name,initialdmg,initialcost) {
	this.name = name;
	this.dmg = 0;
	this.lvl = 0;
	this.initialcost = initialcost;
	this.initialdmg = initialdmg;
	this.upgradeCost = 0;
	/*this.Sprite = new Image();
	this.Sprite.src = img;*/
}

function upgrade(hero) {
    var upgradeCost = Math.floor(hero.initialcost * Math.pow(1.1, hero.lvl));
    if (money >= upgradeCost) {                                   
        hero.dmg += (hero.lvl*hero.initialdmg);  
		round(hero.dmg);
		updateHeroDamage();
    	money -= upgradeCost; 
		hero.lvl += 1;
		updateMoney();
		updateHeroes();
	}
}

var heroDamage = 0;

function updateHeroDamage() {
	heroDamage = tod.dmg + james.dmg;
}

//Tod
var tod = new hero('Tod',2,10);

function levelTod() {
	upgrade(tod);
}

//James
var james = new hero('James',3,18);
function levelJames() {
	upgrade(james);
}

//Round Numbers
function round(input){
    var output = Math.round(input*100)/100;
	return output;
};

//Enemy Logic
function monster(name,img,health,timelimit,goldDrop) {
	this.name = name;
	this.Sprite = new Image();
	this.Sprite.src = img;
	this.health = health;
	this.goldDrop = goldDrop;
}

var monsterTypes = ['Slime', 'Pig'];

function createMonster(boss, typeIndex) {
	var type = monsterTypes[typeIndex];
	var imagePath = 'Images/' + type + '.png';
	var limit = 60;
	var hp = Math.floor(Math.random() * (150 + (heroDamage * 20))) + (20 + (heroDamage * 20));
	var gold = Math.floor(Math.random() * 12) + 3;
	if (boss) {
		type += " Boss";
		hp = Math.floor(Math.random() * (700 + (heroDamage * 20))) + (400 + (heroDamage * 20));
		gold = Math.floor(Math.random() * 90) + 60;
	}
	
	this.monster = new monster(type, imagePath, hp, limit, gold);
}

var enemyNumber = 1;
var enemyType = 0;
var currentEnemy = new createMonster(enemyNumber % 8 == 0, enemyType).monster;

function enemyLogic() {
	if (currentEnemy.health <= 0) {
		document.getElementById('enemyHealth').innerHTML = "Riperinos";
		money += currentEnemy.goldDrop;
		enemyNumber++;
		enemyType++;
		if (enemyType >= monsterTypes.length)
		{
			enemyType -= monsterTypes.length;
		}
		currentEnemy = new createMonster(enemyNumber % 8 == 0, enemyType).monster;
	}
}

//______________________The Display______________________
function updateMoney() {
	document.getElementById('money').innerHTML = money;
}

function updatePlayer() {
	document.getElementById('playerlevel').innerHTML = playerlvl;
	var playerUpgradeCost = Math.floor(3 * Math.pow(1.45, playerlvl));
	document.getElementById('playerupgradeCost').innerHTML = playerUpgradeCost;
	var playerDamage = playerlvl * 2;
	document.getElementById('playerDamage').innerHTML = playerDamage;
}
function updateHeroes() {
	document.getElementById('todlvl').innerHTML = tod.lvl;
	tod.upgradeCost = Math.floor(tod.initialcost * Math.pow(1.1, tod.lvl));
	document.getElementById('todupgradeCost').innerHTML = round(tod.upgradeCost);
	document.getElementById('toddmg').innerHTML = round(tod.dmg);
	
	document.getElementById('jameslvl').innerHTML = james.lvl;
	james.upgradeCost = Math.floor(james.initialcost * Math.pow(1.1, james.lvl));
	document.getElementById('jamesupgradeCost').innerHTML = round(james.upgradeCost);
	document.getElementById('jamesdmg').innerHTML = round(james.dmg);
}

function updateEnemyDisplay() {
	document.getElementById('currentEnemy').innerHTML = currentEnemy.name;
	document.getElementById('enemyHealth').innerHTML = currentEnemy.health;
	document.getElementById('enemyImage').src = currentEnemy.Sprite.src;
}

function updateDisplay() {
	updatePlayer();
	updateMoney();
	updateHeroes();
	updateEnemyDisplay();
}

//______________________Save Game________________________
function load() {
	var savegame = JSON.parse(localStorage.getItem("storage"));
	
	if (typeof savegame.money !== "undefined") money = savegame.money;
	if (typeof savegame.enemyNumber !== "undefined") enemyNumber = savegame.enemyNumber;
	drawButtons();
	gameRun();
};

function save() {
	var storage = {
		money: money,
		enemyNumber: enemyNumber
	}
	localStorage.setItem("storage", JSON.stringify(storage));
}

function deleteSave() {
	var storage = {
		money: 0,
		enemyNumber: 0
	}
	localStorage.setItem("storage",JSON.stringify(storage))
	location.reload();
}

//_________________________The Game_________________________
function gameRun() {
	window.setInterval(function() {
		tap(heroDamage);
		updateDisplay();
		save();
	}, 1000);
}
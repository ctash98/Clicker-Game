//Clicker
var money = player.money;

function player(lvl,money) {
	this.lvl = lvl;
	this.money = money;
}

var player = new player(1,20);

var playerlvl = player.lvl;

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

function tapp() {
	console.log("tap");
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


//_________________________The Game_________________________
function gameRun() {
	window.setInterval(function() {
		tap(heroDamage);
		updateDisplay();
		save();
	}, 1000);
}
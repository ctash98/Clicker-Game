//Money
var money = player.money;

//Player
function player(lvl,money) {
	this.lvl = lvl;
	this.money = money;
	this.dmg = 1;
}
var player = new player(1,20);

function upgradePlayerDamage() {
	var upgradeCost = Math.floor(3 * Math.pow(1.45, player.lvl));
    if (money >= upgradeCost) {  
		player.lvl += 1;
		money -= upgradeCost;
		updatePlayer();
		player.dmg += (player.lvl * 2);;
	}
}

//Tap Function
function tap(number) {
	currentEnemy.health -= number;
	enemyLogic();
	updateDisplay();
};


//Round Numbers
function round(input){
    var output = Math.round(input*100)/100;
	return output;
};



//_________________________The Game_________________________
function gameRun() {
	window.setInterval(function() {
		tap(heroDamage);
		updateDisplay();
		save();
	}, 1000);
}
var graphics = document.getElementById("graphics");
var grafix = graphics.getContext('2d');






//____________Update Functions_____________________________________________
function updateMoney() {
	document.getElementById('money').innerHTML = "Money:" + money;
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
	//document.getElementById('enemyImage').src = currentEnemy.Sprite.src;
	grafix.clearRect(0,0,1280,720);
	grafix.drawImage(currentEnemy.Sprite,200,70);
}

function updateDisplay() {
	updatePlayer();
	updateMoney();
	updateHeroes();
	updateEnemyDisplay();
}
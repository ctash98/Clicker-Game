var graphics = document.getElementById("graphics");
var grafix = graphics.getContext('2d');

//____________Update Functions_____________________________________________
function updateMoney() {
	document.getElementById('money').innerHTML = money;
}

function updatePlayer() {
	document.getElementById('playerlevel').innerHTML = player.lvl;
	var playerUpgradeCost = Math.floor(3 * Math.pow(1.45, player.lvl));
	document.getElementById('playerupgradeCost').innerHTML = playerUpgradeCost;
	document.getElementById('playerDamage').innerHTML = player.dmg;
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

	document.getElementById('chrislvl').innerHTML = chris.lvl;
	chris.upgradeCost = Math.floor(chris.initialcost * Math.pow(1.1, chris.lvl));
	document.getElementById('chrisupgradeCost').innerHTML = round(chris.upgradeCost);
	document.getElementById('chrisdmg').innerHTML = round(chris.dmg);

	document.getElementById('chadlvl').innerHTML = chad.lvl;
	chad.upgradeCost = Math.floor(chad.initialcost * Math.pow(1.1, chad.lvl));
	document.getElementById('chadupgradeCost').innerHTML = round(chad.upgradeCost);
	document.getElementById('chaddmg').innerHTML = round(chad.dmg);
	
	document.getElementById('propertiuslvl').innerHTML = propertius.lvl;
	propertius.upgradeCost = Math.floor(propertius.initialcost * Math.pow(1.1, propertius.lvl));
	document.getElementById('propertiusupgradeCost').innerHTML = round(propertius.upgradeCost);
	document.getElementById('propertiusdmg').innerHTML = round(propertius.dmg);
	
	document.getElementById('catalluslvl').innerHTML = catallus.lvl;
	catallus.upgradeCost = Math.floor(catallus.initialcost * Math.pow(1.1, catallus.lvl));
	document.getElementById('catallusupgradeCost').innerHTML = round(catallus.upgradeCost);
	document.getElementById('catallusdmg').innerHTML = round(catallus.dmg);	
}

function updateEnemyDisplay() {
	document.getElementById('currentEnemy').innerHTML = currentEnemy.name;
	document.getElementById('enemyHealth').innerHTML = currentEnemy.health;
	grafix.clearRect(0,0,1280,720);
	grafix.drawImage(currentEnemy.Sprite,0,0,61,56,120,20,61 * 2,56 * 2);
}

function updateEnemyDisplayHit() {
	grafix.clearRect(0,0,1280,720);
	grafix.drawImage(currentEnemy.Sprite,62,0,61,56,110,20,(61 * 2)/1.4,(56 * 2)/1.4);	
}



function updateFireballGFX() {
	if (!fireball.isUsable()) {
		document.getElementById("fireball-img").style.filter = "grayscale(100%)";
	} else {
		document.getElementById("fireball-img").style.filter = "";
	}
}

function updateTeaGFX() {
	if (!tea.isUsable()) {
		document.getElementById("tea-img").style.filter = "grayscale(100%)";
	} else {
		document.getElementById("tea-img").style.filter = "";
	}
}

function updatePillowGFX() {
	if (!pillow.isUsable()) {
		document.getElementById("pillow-img").style.filter = "grayscale(100%)";
	} else {
		document.getElementById("pillow-img").style.filter = "";
	}
}

function updateSunglassesGFX() {
	if (!sunglasses.isUsable()) {
		document.getElementById("sunglasses-img").style.filter = "grayscale(100%)";
	} else {
		document.getElementById("sunglasses-img").style.filter = "";
	}
}

function updateSparrowGFX() {
	if (!sparrow.isUsable()) {
		document.getElementById("sparrow-img").style.filter = "grayscale(100%)";
	} else {
		document.getElementById("sparrow-img").style.filter = "";
	}
}

function updateHeartbreakGFX() {
	if (!heartbreak.isUsable()) {
		document.getElementById("heartbreak-img").style.filter = "grayscale(100%)";
	} else {
		document.getElementById("heartbreak-img").style.filter = "";
	}
}


function updateAbilityGFX() {
	updateFireballGFX();
	updateTeaGFX();
	updatePillowGFX();
	updateSparrowGFX();
	updateSunglassesGFX();
	updateHeartbreakGFX();
}

function updateDisplay() {
	updatePlayer();
	updateMoney();
	updateHeroes();
	updateEnemyDisplay();
	updateAbilityGFX();
}
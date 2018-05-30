//Heroes
function hero(name,initialdmg,initialcost) {
	this.name = name;
	this.initialcost = initialcost;
	this.initialdmg = initialdmg;
	this.lvl = 0;
	this.dmg = 0;
	this.upgradeCost = 0;
}

function upgrade(hero) {
    var upgradeCost = Math.floor(hero.initialcost * Math.pow(1.1, hero.lvl));
    if (money >= upgradeCost) { 
		hero.dmg = (hero.lvl*hero.initialdmg)+hero.initialdmg;  
		updateHeroDamage();
    	money -= upgradeCost; 
		hero.lvl += 1;
		updateMoney();
		updateHeroes();
	}
}

var heroDamage = 0;

function updateHeroDamage() {
	heroDamage = tod.dmg + james.dmg + chris.dmg + chad.dmg + propertius.dmg + catallus.dmg;
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

//Chris
var chris = new hero ('Chris', 4, 25);
function levelChris() {
	upgrade(chris);
}

//Chad
var chad = new hero ('Chad', 5, 29);
function levelChad() {
	upgrade(chad);
}

//Propertius
var propertius = new hero ('Propertius', 10, 40);
function levelPropertius() {
	upgrade(propertius);
}

//Catallus
var catallus = new hero ('Catallus', 50, 50);
function levelCatallus() {
	upgrade(catallus);
}
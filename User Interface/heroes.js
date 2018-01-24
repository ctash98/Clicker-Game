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
		console.log(tod.dmg);
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

/**
* Abilities
* Property of Alexander Meech 2018
*/
function ability(name,dmg,hero,minlvl,cooldown) {
	this.name = name;
	this.dmg = dmg;
	this.hero = hero;
	this.minlvl = minlvl;
	this.cooldown = cooldown;
	this.lastUse = new Date().getTime() - cooldown;
	this.isOnCooldown = function() {
		var elapsed = new Date().getTime() <= (this.lastUse + this.cooldown);
		return elapsed;
	};
	this.hasUnlocked = function() {
		var unlocked = this.hero.lvl >= this.minlvl;
		return unlocked;
	}
	this.isUsable = function() {
		return !this.isOnCooldown() && this.hasUnlocked();
	};
}

function useAbility(ability) {
	if (!ability.isUsable()) {
		return;
	}
	if (currentEnemy.health <= 0) {
		return;
	}
	var damage = Math.floor(currentEnemy.health * ability.dmg);
	tap(damage, false);
	ability.lastUse = new Date().getTime();
}

//Tod's Fireball
var fireball = new ability('Fireball',.2,tod,10,10000);
function useFireball() {
	useAbility(fireball);
}

//James's Royal Tea
var tea = new ability('Tea',.35,james,10,10000);
function useTea() {
	useAbility(tea);
}

//Chris's Pillow
var pillow = new ability('pillow',.5,chris,10,10000);
function usePillow() {
	useAbility(pillow);
}

//Chad's Shades
var sunglasses = new ability('sunglasses',.65,chad,10,10000);
function useSunglasses() {
	useAbility(sunglasses);
}
//Cynthia's Sparrow
var sparrow = new ability('Sparrow',.85,propertius,10,10000);
function useSparrow() {
	useAbility(sparrow);
}
//Catallus's Heartbreak
var heartbreak = new ability('Heartbreak',1,catallus,10,10000);
function useHeartbreak() {
	useAbility(heartbreak);
}
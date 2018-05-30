function load() {
	var savegame = JSON.parse(localStorage.getItem("storage"));
	
	if (typeof savegame.money !== "undefined") money = savegame.money;
	if (typeof savegame.playerlvl !== "undefined") player.lvl = savegame.playerlvl;
	if (typeof savegame.playerdmg !== "undefined") player.dmg = savegame.playerdmg;
	if (typeof savegame.todlvl !== "undefined") tod.lvl = savegame.todlvl;
	if (typeof savegame.toddmg !== "undefined") tod.dmg = savegame.toddmg;
	if (typeof savegame.jameslvl !== "undefined") james.lvl = savegame.jameslvl;
	if (typeof savegame.jamesdmg !== "undefined") james.dmg = savegame.jamesdmg;
	if (typeof savegame.chrislvl !== "undefined") chris.lvl = savegame.chrislvl;
	if (typeof savegame.chrisdmg !== "undefined") chris.dmg = savegame.chrisdmg;
	if (typeof savegame.chadlvl !== "undefined") chad.lvl = savegame.chadlvl;
	if (typeof savegame.chaddmg !== "undefined") chad.dmg = savegame.chaddmg;
	if (typeof savegame.propertiuslvl !== "undefined") propertius.lvl = savegame.propertiuslvl;
	if (typeof savegame.propertiusdmg !== "undefined") propertius.dmg = savegame.propertiusdmg;
	if (typeof savegame.catalluslvl !== "undefined") catallus.lvl = savegame.catalluslvl;
	if (typeof savegame.catalluslvl !== "undefined") catallus.dmg = savegame.catallusdmg;
	
	updateHeroDamage();
	
	gameRun();
};

function save() {
	var storage = {
		money: money,
		playerlvl: player.lvl,
		playerdmg: player.dmg,
		todlvl: tod.lvl,
		toddmg: tod.dmg,
		jameslvl: james.lvl,
		jamesdmg: james.dmg,
		chrislvl: chris.lvl,
		chrisdmg: chris.dmg,
		chadlvl: chad.lvl,
		chaddmg: chad.dmg,
		propertiuslvl: propertius.lvl,
		propertiusdmg: propertius.dmg,
		catalluslvl: catallus.lvl,
		catallusdmg: catallus.dmg
	}
	localStorage.setItem("storage", JSON.stringify(storage));
}

function deleteSave() {
	var storage = {
		money: 0,
		playerlvl: 1,
		playerdmg:1,
		todlvl: 0,
		toddmg: 0,
		jameslvl: 0,
		jamesdmg: 0,
		chrislvl: 0,
		chrisdmg: 0,
		chadlvl: 0,
		chaddmg: 0,
		propertiuslvl: 0,
		propertiusdmg: 0,
		catalluslvl: 0,
		catallusdmg: 0
	}
	localStorage.setItem("storage",JSON.stringify(storage))
	location.reload();
	
}
function load() {
	var savegame = JSON.parse(localStorage.getItem("storage"));
	
	if (typeof savegame.money !== "undefined") money = savegame.money;
	if (typeof savegame.playerlvl !== "undefined") player.lvl = savegame.playerlvl;
	if (typeof savegame.playerdmg !== "undefined") player.dmg = savegame.playerdmg;
	if (typeof savegame.todlvl !== "undefined") tod.lvl = savegame.todlvl;
	if (typeof savegame.toddmg !== "undefined") tod.dmg = savegame.toddmg;
	if (typeof savegame.jameslvl !== "undefined") james.lvl = savegame.jameslvl;
	if (typeof savegame.jamesdmg !== "undefined") james.dmg = savegame.jamesdmg;
	
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
		jamesdmg: james.dmg
		
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
		jamesdmg: 0
	}
	localStorage.setItem("storage",JSON.stringify(storage))
	location.reload();
	
}
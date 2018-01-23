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
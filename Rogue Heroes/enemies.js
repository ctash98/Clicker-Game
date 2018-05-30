//Enemy Creation
function monster(name,img,health,goldDrop) {
	this.name = name;
	this.Sprite = new Image();
	this.Sprite.src = img;
	this.health = health;
	this.goldDrop = goldDrop;
}

var monsterTypes = ['Slime', 'Pig'];

function createMonster(boss, typeIndex) {
	var type = monsterTypes[typeIndex];
	var imagePath =  /*'Images/frog.png';*/ 'Images/' + type + 'Spritesheet.png';
	var hp = Math.floor(Math.random() * (150 + (heroDamage * 20))) + (20 + (heroDamage * 20));
	var gold = Math.floor(Math.random() * 12) + 3;
	if (boss) {
		type += " Boss";
		hp = Math.floor(Math.random() * (700 + (heroDamage * 20))) + (400 + (heroDamage * 20));
		gold = Math.floor(Math.random() * 90) + 60;
	}
	
	this.monster = new monster(type, imagePath, hp, gold);
}

var enemyNumber = 1;
var enemyType = 0;
var currentEnemy = new createMonster(enemyNumber % 8 == 0, enemyType).monster;

//Enemy Logic (Attack Phase)
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
		return true;
	}
	return false;
}

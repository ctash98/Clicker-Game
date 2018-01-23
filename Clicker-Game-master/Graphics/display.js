var graphics = document.getElementById("graphics");
var grafix = graphics.getContext('2d');

grafix.font = "18px Arial";

//____________Buttons______________________________________________________
function clickableButton (Words,imagePath,x,y,Width,Height,callfunction) {
	this.buttonText = Words;
	this.Sprite = new Image();
	this.Sprite.src = imagePath;
	this.X = x;
	this.Y = y;
	this.width = Width;
	this.height = Height;
	this.onClick = callfunction;
	this.clicked = false;
	buttonArray.push(this);
	
	this.isOverlayed = function() {
		if (mouseX > clickableButton.X + clickableButton.width){ return false};
		if (mouseX < clickableButton.X) {return false};
		if (mouseY > clickableButton.Y + clickableButton.height) {return false};
		if (mouseY < clickableButton.Y) {return false};
		return true;
	};
	
	console.log(clickableButton.isOverlayed);
	
	this.checkClicked = function() {
		if (!clickableButton.clicked && mouseDown && clickableButton.isOverlayed(mouseX, mouseY)) {
			clickableButton.clicked = true;
			clickableButton.onClick();
		} else if (clickableButton.clicked && !(mouseDown && clickableButton.isOverlayed(mouseX, mouseY))) {
			clickableButton.clicked = false;
		}
	};
}

function upgradeButton (characterName, X, Y) {
	this.clickableButton = new clickableButton('Upgrade ' + characterName, 'Images/upgradeButton.png', X, Y, 125, 40, self['level' + characterName]);
}

function tapButton (X, Y) {
	this.clickableButton = new clickableButton('Tap Here', 'Images/tapButton.png', X, Y, 125, 100, tap);
}

var buttonArray = [];

function drawButtons() {
	for (var i in buttonArray) {
		var b = buttonArray[i];
		grafix.drawImage(b.Sprite, b.X, b.Y);
		grafix.fillText(b.buttonText,b.X+(b.width * 0.01),b.Y+ (b.height * 0.5));
	}
}

function tickButtons() {
	for (var i in buttonArray) {
		var b = buttonArray[i];
		b.checkClicked();
	}
}

var todButton = new upgradeButton("tod", 30, 30);

var jamesButton = new upgradeButton("james", 30, 90);

var tapButton = new tapButton(200,50)

drawButtons();

//____________Displays_____________________________________________________

function container(x,y,width,height,backgroundImage) {
	this.Sprite = new Image();
	this.Sprite.src = backgroundImage;
	this.X = x;
	this.Y = y;
	this.width = width;
	this.height = height;
	containerArray.push(this);
}
var containerArray = [];
function drawContainers() {
	for (var i in containerArray) {
		var c = containerArray[i];
		grafix.drawImage(c.Sprite, c.X, c.Y);
	}
}

drawContainers();
enemyContainer = new container(graphics.width/2,15,graphics.width/2,graphics.height,'Images/background1.png');

//____________Update Functions_____________________________________________
function updateMoney() {
	document.getElementById('money').innerHTML = money;
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
	document.getElementById('enemyImage').src = currentEnemy.Sprite.src;
}

function updateDisplay() {
	updatePlayer();
	updateMoney();
	updateHeroes();
	updateEnemyDisplay();
	tickButtons();
}
var graphics = document.getElementById("graphics");
var grafix = graphics.getContext('2d');

grafix.font = "18px Arial";

//____________Buttons______________________________________________________
function clickableButton (Words,imagePath,x,y,width,height,callfunction) {
	this.buttonText = Words;
	this.Sprite = new Image();
	this.Sprite.src = imagePath;
	this.X = x;
	this.Y = y;
	this.width = width;
	this.height = height;
	this.onclick = callfunction;
	buttonArray.push(this);
}

function upgradeButton (characterName, X, Y) {
	this.clickableButton = new clickableButton('Upgrade ' + characterName, 'Images/upgradeButton.png', X, Y, 125, 40, self['level' + characterName]);
}

function tapButton (X, Y) {
	this.clickableButton = new clickableButton('Tap Here', 'Images/tapButton.png', X, Y, 125, 100, tap);
}

var buttonArray = [];

function drawButtons()
{
	for (var i in buttonArray)
	{
		var b = buttonArray[i];
		grafix.drawImage(b.Sprite, b.X, b.Y);
		grafix.fillText(b.buttonText,b.X+(b.width * 0.01),b.Y+ (b.height * 0.5));
	}
}

var todButton = new upgradeButton("tod", 30, 30);

var jamesButton = new upgradeButton("james", 30, 90);

var tapButton = new tapButton(200,50)

drawButtons();

//____________Displays_____________________________________________________

function heroContainer() {
	
}
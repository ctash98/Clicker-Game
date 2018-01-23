//____________Mouse______________________________________________________
var mouseX; var mouseY; var mouseDown; var mouseUp;
document.onmousemove = function(mouse){
	mouseX = mouse.clientX;
	mouseY = mouse.clientY;
}
document.onmousedown = function(mouse){
	mouseDown = true;
	mouseUp = false;
	console.log('Click');
}
document.onmouseup = function(mouse) {
	mouseDown = false;
	mouseUp = true;
}
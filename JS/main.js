var canvas = document.getElementById("Canvas");
var context = canvas.getContext("2d");

//Gobal Variables
var WindowWidth = context.canvas.width;
var WindowHeight = context.canvas.height;

context.canvas.width  = window.innerWidth;
context.canvas.height = window.innerHeight;

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

var BaseImage = document.createElement("img");
    BaseImage.src = "Resources/PonyOne.png";

var DefX = 130;
var Multiply = 0;
var Timer = 0.1;
var ResetTimer = Timer;

var TX = 128;
var TY = 128;

var TileWidth  = 128;
var TileHeight = 128;

var PonyBase = new SpriteUtility();
PonyBase.RenderSprite();

function run()
{
    main(getDeltaTime());
}

function main(DeltaTime)
{
    if(Timer <= 0)
    {
        var MutlipleX  = Multiply > 8 ? TileWidth * 0 : TileWidth * Multiply;
        var MultipleY = 0;
        Multiply = Multiply > 8 ? 0 : Multiply + 1;    
        context.drawImage(BaseImage,MutlipleX,MultipleY,TX,TY,TileWidth,TileHeight, TileWidth * 2, TileHeight * 2);
        
        Timer = ResetTimer;
    }
    else
    {
        Timer -= DeltaTime;
    }
}


// Deltatime and other Utils
function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	
	if(deltaTime > 1)
		deltaTime = 1;
		
	return deltaTime;
}
(function() {
 var onEachFrame;
 if (window.requestAnimationFrame) {
 onEachFrame = function(cb) {
 var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
 _cb();
 };
 } else if (window.mozRequestAnimationFrame) {
 onEachFrame = function(cb) {
 var _cb = function() { cb();
window.mozRequestAnimationFrame(_cb); }
 _cb();
 };
 } else {
 onEachFrame = function(cb) {
 setInterval(cb, 1000 / 60);
 }
 }

 window.onEachFrame = onEachFrame;
})();
window.onEachFrame(run);
//
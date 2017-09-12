var canvas = document.getElementById("Canvas");
var context = canvas.getContext("2d");

//Gobal Variables
var WindowWidth = context.canvas.width;
var WindowHeight = context.canvas.height;

context.canvas.width  = window.innerWidth;
context.canvas.height = window.innerHeight;

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

function main(DeltaTime)
{

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
// Refresh 
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
   window.onEachFrame(main(getDeltaTime()));
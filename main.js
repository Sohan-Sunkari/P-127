var Song1 = 'Travis Scott - I KNOW ？ (Official Audio).mp3';
var Song2 = 'Travis Scott - My Eyes (Best Part Extended) (320 kbps).mp3';

var capture;

var musicFile1, musicFile2;

function preload() {
  musicFile1 = loadSound(Song1);
  musicFile2 = loadSound(Song2);
}

function setup() {
    var canvas = createCanvas(640, 480);
  
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
  
    capture = createCapture(VIDEO);
  
    capture.hide();
  }




function draw() {
    image(capture, 0, 0, width, height);
  }

  
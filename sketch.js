var img;
var cnv;
var catimage;

function setup() {

  cnv = createCanvas(1000,1000);
  img = loadImage('assets/test.png');
 //noCursor();
}
function draw() {

  background(255);
  imageMode(CENTER);
  image(img,width/2, height/2);
  var a = select('#cat');
  a.mouseOver(test);
  a.mouseOut(origin);
  var imgTrackWidth = img.width/2;
  var imgTrackHeight = img.height/2;
  var n = 3;
  if(mouseX>width/2-img.width/2 && mouseX<width/2+img.width/2 &&
    mouseY>height/2-img.height/2 && mouseY<height/2+img.height/2)
  {
    //tint(0, 153, 204, 126);
    filter(POSTERIZE, n);
  }
  else {
    //tint(255);
    filter(POSTERIZE, 255);
  }

}
function test() {
  var image = document.getElementById('#cat');
  var pixelate = new Pixelate(image);
  pixelate.setAmount(0.5).render();
}

function origin() {
  var image = document.querySelector('#cat');
  var pixelate = new Pixelate(image);
  pixelate.setAmount(0).render();
}

var password;
var img;
var isRight=false;
function preload(){
    img = loadImage('img.JPG');
}

function setup() {
  createCanvas(1600, 1200);
}

function draw() {


if(isRight==false){
    password = prompt("请输入密码嗷:");
  if ( password == "27461" ) {
  alert("汪呜汪呜，小猫好聪明~ 新年快乐哟！");
  isRight=true;
  show();
  } else {
  alert("密码不对，略略！");
  }
}

}

function show(){
image(img,0,0,1600,869);

}

var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  wall=createSprite(1100, 200, 60, 200);
car=createSprite(50, 200, 30, 30);
  speed=random(55,90)
weight=random(400,1500)
car.velocityX = speed;
}



function draw() {
  background(80,80,80);  
  drawSprites();
  if (car.x-wall.x < car.width/2 + wall.width/2
    && wall.x-car.x < wall.width/2 + car.width/2
    ){
     var  deformation;
     deformation=0.5*weight*speed*speed/22500
    }

     if (deformation<100){
car.shapeColor = "green"


}
if  (deformation>180){
  car.shapeColor = "red"
  
  
  }
  if (100<deformation<180){
    car.shapeColor = "yellow"
    
    
    }
       
     

drawSprites();}
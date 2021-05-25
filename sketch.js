var car1, car2, car3, car4;
var wall1, wall2, wall3, wall4;
var speed1, weight1, speed2, weight2, speed3, weight3;
var line1, line2, line3;

function setup() {
  createCanvas(1200,400);

  line1= createSprite(600,100,1200,20);
  line2= createSprite(600,180,1200,20);
  line3= createSprite(600,260,1200,20);

  wall1= createSprite(1100,60,20,40);
  wall1.shapeColor="white";
  wall2= createSprite(1100,140,20,40);
  wall2.shapeColor="white";
  wall3= createSprite(1100,220,20,40);
  wall3.shapeColor="white";
  wall4= createSprite(1100,300,20,40);
  wall4.shapeColor="white";

   car1= createSprite(50,60,30,30);
   car2= createSprite(50,140,30,30);
   car3= createSprite(50,220,30,30);
   car4= createSprite(50,300,30,30);

   speed1= random(55,90);
   weight1= random(400,1500);
   speed2= random(55,90);
   weight2= random(400,1500);
   speed3= random(55,90);
   weight3= random(400,1500);
  
}

function draw() {
  background(0,0,0);  

  car2.velocityX= 10;
  car3.velocityX= 10;
  car4.velocityX= 10;

   if(wall2.x-car2.x<(car2.width+wall2.width)/2){
     car2.velocityX=0;
     var deformation= 0.5*weight1*speed1*speed1/22500
     if(deformation>180){
       car2.shapeColor=color(255,0,0);
     }
     if(deformation<180 && deformation>100){
       car2.shapeColor=color(230,230,0);
     }
     if(deformation<100){
       car2.shapeColor=color(0,255,0);
     }
   }

   if(wall3.x-car3.x<(car3.width+wall3.width)/2){
    car3.velocityX=0;
    var deformation= 0.5*weight2*speed2*speed2/22500
    if(deformation>180){
      car3.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car3.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car3.shapeColor=color(0,255,0);
    }
  }

  if(wall4.x-car4.x<(car4.width+wall4.width)/2){
    car4.velocityX=0;
    var deformation= 0.5*weight3*speed3*speed3/22500
    if(deformation>180){
      car4.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car4.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car4.shapeColor=color(0,255,0);
    }
  }

  console.log(speed1);
  console.log(weight1);
  console.log(speed2);
  console.log(weight2);
  console.log(speed3);
  console.log(weight3);

  drawSprites();
}
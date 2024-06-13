// setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 500;

// Aimation variables
let cloud1X = 30;
let cloud2X = 320;
let cloud3X = 170;
let cloud4X = 300;
let sunY = 60;

//car variables
let car1X = 30;
let car1X2 = 40;
let car1XSpeed = 0.5;

let carWindow = 80;
let carWheel1 = 30;
let carWheel2 = 100;

let car2X = 300;
let car2X2 = 320;
let carWindow2 = 350;
let carwheel1X = 300;
let carWheel2X = 380;

//building animation
let buildingX = 30;
let building2X = 170;
let building3X = 300;

//sky variables
let skyR = 173;
let skyG = 216;
let skyB = 230;

let yPressed = false;

// Track frames gone by
let frame = 0;
requestAnimationFrame(draw);

function draw() {
  // sky
  ctx.fillStyle = `rgb(${skyR}, ${skyG}, ${skyB})`;
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  // update timing
  frame++;

  // clouds
  let cloud = document.getElementById("cloud");
  ctx.drawImage(cloud, cloud1X, 110, 100, 70);
  ctx.drawImage(cloud, cloud2X, 30, 100, 70);
  ctx.drawImage(cloud, cloud3X, 50, 100, 70);
  ctx.drawImage(cloud, cloud4X, 110, 100, 70);
  // sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(90, sunY, 50, 0, 2 * Math.PI);
  ctx.fill();

  // buildings
  ctx.beginPath();
  ctx.fillStyle = "gray";
  ctx.fillRect(buildingX, 200, 80, 140);
  ctx.fillRect(building2X, 250, 70, 140);
  ctx.fillRect(building3X, 180, 90, 160);

  // road
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 340, 500, 160);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 420, 50, 10);
  ctx.fillRect(100, 420, 50, 10);
  ctx.fillRect(200, 420, 50, 10);
  ctx.fillRect(300, 420, 50, 10);
  ctx.fillRect(400, 420, 50, 10);
  ctx.fillRect(490, 420, 50, 10);

  // car 1
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(car1X, 350, 90, 50);
  ctx.fillRect(car1X2, 370, 90, 30);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(carWindow, 350, 40, 20);

  // wheels
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(carWheel1, 390, 30, 15);
  ctx.fillRect(carWheel2, 390, 30, 15);

  // car 2
  ctx.beginPath();
  ctx.fillStyle = "#ed4d0e";
  ctx.fillRect(car2X, 440, 90, 50);
  ctx.fillRect(car2X2, 460, 90, 30);

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(carWindow2, 440, 40, 20);

  // wheels 2
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(carwheel1X, 480, 30, 15);
  ctx.fillRect(carWheel2X, 480, 30, 15);

  // Animation
  cloud1X = cloud1X + 1.6;
  cloud2X += 1.4;
  cloud3X += 1.2;
  cloud4X += 1.3;
  // moving clouds
  if (cloud1X >= 500) {
    // reset to the start
    cloud1X = 0;
  }

  if (cloud2X >= 500) {
    cloud2X = 0;
  }

  if (cloud3X >= 500) {
    cloud3X = 0;
  }

  if (cloud4X >= 500) {
    cloud4X = 0;
  }

  // sun
  if (sunY <= 500 && frame >= 10) {
    sunY = sunY + 0.7;
  }

  // sky change
  if (skyR <= 255) {
    skyR++;
  }

  if (skyG >= 165) {
    skyG--;
  }

  if (skyB >= 0) {
    skyB--;
  }

  //  fish1X = fish1X + fish1Xspeed;
  // if (fish1X >= 350) {
  //   fish1Xspeed = -1;
  // }

  // if (fish1X <= 150) {
  //   fish1Xspeed = 1;
  // }
  car1X += 2;
  car1X2 += 2;
  carWheel1 += 2;
  carWindow += 2;
  carWheel2 += 2;

  car2X += 1.6;
  car2X2 += 1.6;
  carwheel1X += 1.6;
  carWheel2X += 1.6;
  carWindow2 += 1.6;

  if (car1X >= 450) {
    car1X = -60;
  }

  if (car1X2 >= 450) {
    car1X2 = -60;
  }

  if (carWheel1 >= 450) {
    carWheel1 = -60;
  }

  if (carWindow >= 450) {
    carWindow = -60;
  }

  if (carWheel2 >= 450) {
    carWheel2 = -60;
  }

  if (car2X2 >= 450) {
    car2X2 = -50;
  }

  if (car2X >= 450) {
    car2X = -50;
  }

  if (carwheel1X >= 450) {
    carwheel1X = -50;
  }

  if (carWheel2X >= 450) {
    carWheel2X = -50;
  }

  if (carWindow2 >= 450) {
    carWindow2 = -50;
  }

  //building animation

  if (buildingX <= 0) {
    buildingX = 480;
  }
  if (yPressed) {
    ctx.beginPath();
    ctx.fillStyle = "purple";
    ctx.fillRect(car1X, 350, 90, 50);
    ctx.fillRect(car1X2, 370, 90, 30);

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(carWindow, 350, 40, 20);

    // wheels
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(carWheel1, 390, 30, 15);
    ctx.fillRect(carWheel2, 390, 30, 15);

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(car2X, 440, 90, 50);
    ctx.fillRect(car2X2, 460, 90, 30);

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(carWindow2, 440, 40, 20);

    // wheels 2
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(carwheel1X, 480, 30, 15);
    ctx.fillRect(carWheel2X, 480, 30, 15);
  }
  requestAnimationFrame(draw);
}

document.addEventListener("keypress", keyboardHandler);

function keyboardHandler(event) {
  if (event.code == "KeyY") {
    console.log("You pressed the Y key and changed the colors!");
    yPressed = true;
  }
}

let radius1 = 250;
let radius2 = 190;
let radius3 = 150;
let x1, y1

// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
    noFill();
    noStroke();
    let current_minute = minute(); 
    setInterval(check_minute, 1000); // call check minute every second
}

function check_minute() {
  // print minute to the console once every minute
  let minute = minute(); 
  if (minute != current_minute){
    console.log(minute);
    current_minute = minute; 
  }
}

// draw() is called 60 times per second
function draw() {
  background(255);
  beginShape(); 
  
  // my abstract clock makes use of two visual indicators for the user to read the time
  // (1) the colors and (2) the number/position of circles

  // circle representing hours
  for (let i = 0; i < hour(); i++) {
    x1 = radius1 * cos(i * TWO_PI / 24) + width / 2;
    y1 = radius1 * sin(i * TWO_PI / 24) + height / 2;
    vertex(x1, y1);

    // map the color of circles to the time of the day according to color of the sun
    let gradient; 
    if (i < 12){
        gradient = map(i, 0, 12, 180, 255);
    } else {
        gradient = map(i, 12, 24, 255, 180);
    }
    fill(255, gradient, 80);
    ellipse(x1, y1, 58, 58);
    noFill();
  }
  
  // circle reprensenting minutes
  for (let i = 0; i < minute(); i++) {
    x1 = radius2 * cos(i * TWO_PI / 60) + width / 2;
    y1 = radius2 * sin(i * TWO_PI / 60) + height / 2;
    vertex(x1, y1);

    // color matching to the gradient for hours for visual consistency
    // even if it does not have meaning for hours and seconds   
    if (i < 30){
        gradient = map(i, 0, 30, 180, 255);
    } else {
        gradient = map(i, 30, 60, 255, 180);
    }
    fill(255, gradient, 80);

    ellipse(x1, y1, 20, 20);
    noFill();
  }

  // circle reprensenting seconds
  for (let i = 0; i < second(); i++) {
    x1 = radius3 * cos(i * TWO_PI / 60) + width / 2;
    y1 = radius3 * sin(i * TWO_PI / 60) + height / 2;
    vertex(x1, y1);

    // color matching to the gradient for hours for visual consistency
    // even if it does not have meaning for hours and seconds
    if (i < 30){
        gradient = map(i, 0, 30, 180, 255);
    } else {
        gradient = map(i, 30, 60, 255, 180);
    }
    fill(255, gradient, 80);

    ellipse(x1, y1, 12, 12);
    noFill();
  }
  endShape();
}

let w = 500;
let h = w * 1.3;

function setup () {
  createCanvas(w, h);
  select('#canvasBorder').size(w * 1.15, h * 1.112);
  noLoop();
}

function draw() {

  let drawPaper = function() {
    stroke(245, 238, 231);
    for (let y = 5; y < 645; y++) {
      line(random(0, 5), y, random(495, 500), y);
    };
    for (let x = 5; x < 495; x++) {
      line(x, random(0, 5), x, random(645, 650));
    } ;
  };
  
  let rainbows = function () {
    // noStroke();
    let colors = ["#22264d", "#af4c21", "#d58b26", "#282c34", "#e6bda5", "#38012b"]
    // "#f5eee7"
    // TODO need to randomize this selection too
    let randCol = floor(random(colors.length));
    // let randCol = colors[floor(random() * colors.length)];

    // for (let c = 0; c < colors.length; c++) {
    // }

    // function drawRainbow () {
    //   for (let w = floor(random(240,250); w > 5; w - floor(rand(-20, -5)) {
    //     for (let h = floor(random(240,250); h > 5; w - floor(rand(-20, -5)) {
    //       let colors = ["#22264d", "#af4c21", "#d58b26", "#282c34", "#e6bda5", "#38012b"]
    //       let randCol = floor(random(colors.length));
    //       translate(width/2, height/4 + 50);
    //       fill(colors[randCol]);
    //       arc(0, 0, w, h, PI, 0, CHORD);
    //   }
    // }

    push();    
    translate(width/2, height/4 + 50);
    fill(colors[randCol]);
    // fill(colors[randCol]);
    arc(0, 0, 250, 250, PI, 0, CHORD);
    // fill(colors[randCol]);
    arc(0, 0, 200, 200, PI, 0, CHORD); 
    // fill(colors[randCol]);
    arc(0, 0, 185, 175, PI, 0, CHORD);
    // fill(colors[randCol]);
    arc(0, 0, 110, 140, PI, 0, CHORD);
    // fill(colors[randCol]);
    arc(0, 0, 75, 110, PI, 0, CHORD);
    // fill(colors[randCol]);
    arc(0, 0, 55, 85, PI, 0, CHORD);
    // fill(colors[randCol]);
    arc(0, 0, 35, 65, PI, 0, CHORD);
    // fill(colors[randCol]);
    arc(0, 0, 15, 35, PI, 0, CHORD);
    // fill(colors[randCol]);
    arc(0, 0, 10, 30, PI, 0, CHORD);
    pop();

    push();    
    translate(width/2, height * 3/4 + 50);
    fill(colors[randCol]);
    // fill(colors[randCol]);
    arc(0, 0, 250, 250, PI, 0, CHORD);
    // fill(colors[randCol]);
    arc(0, 0, 150, 150, PI, 0, CHORD); 
    // fill(colors[randCol]);
    arc(0, 0, 120, 130, PI, 0, CHORD);
    // fill(colors[randCol]);
    arc(0, 0, 110, 120, PI, 0, CHORD);
    // fill(colors[randCol]);
    arc(0, 0, 75, 110, PI, 0, CHORD);
    // fill(colors[randCol]);
    arc(0, 0, 55, 85, PI, 0, CHORD);
    // fill(colors[randCol]);
    arc(0, 0, 35, 65, PI, 0, CHORD);
    // fill(colors[randCol]);
    arc(0, 0, 20, 45, PI, 0, CHORD);
    // fill(colors[randCol]);
    arc(0, 0, 10, 30, PI, 0, CHORD);
    pop();
  }
  
  drawPaper();
  rainbows();    
}

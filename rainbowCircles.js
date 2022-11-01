let w = 500;
let h = w * 1.3;

function setup () {
  createCanvas(w, h);
  select('#canvasBorder').size(w * 1.15, h * 1.112);
  frameRate(1);
};

function draw() {
  clear();
  let drawPaper = function() {
    stroke(245, 238, 231);
    for (let y = 5; y < 645; y++) {
      line(random(0, 5), y, random(495, 500), y);
    };
    for (let x = 5; x < 495; x++) {
      line(x, random(0, 5), x, random(645, 650));
    };
  };

  function rainbowCircle () {
    let w = floor(random(240, 250));
    let h = floor(random(340, 350));
    let colors = ["#4a4e4d", "#0e9aa7", "#3da4ab", "#f6cd61", "#fe8a71", "#96ceb4", "#ff6f69", "#88d8b0","#fff6e9", "#d2e7ff",
    "#d58b26", "#e6bda5", "#38012b", "#ad5331", "#f68620", "#cfd0cb", "#184443", "#d0d1cc", "#ebd1b8"];
    noStroke();
    noFill()
    translate(width / 2, height / 2);
    // stroke(0);

    for (let i = 350; i > 5; i-=floor(random(5, 20))) {
      let randCol = floor(random(colors.length));
      // fill(colors[randCol]);
      stroke(colors[randCol]);
      ellipse(0, 0, w - (w - i), h - (h - i));
    };
  };

  drawPaper();
  rainbowCircle();
};
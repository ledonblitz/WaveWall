function setup() {
    createCanvas(400, 400);
    drawWall();
  }
  
  function drawWall() {
    let numOfColors = 10;
    let bandHeight = height / numOfColors;
  
    for (let i = 0; i < numOfColors; i++) {
      let r = random(255);
      let g = random(255);
      let b = random(255);
      let c = color(r, g, b);
  
      fill(c);
      beginShape();
      curveVertex(0, i * bandHeight);
      for (let j = 0; j < width; j += 20) {
        let y = i * bandHeight + random(-20, 20);
        curveVertex(j, y);
      }
      curveVertex(width, (i + 1) * bandHeight);
      curveVertex(width, height);
      curveVertex(0, height);
      endShape(CLOSE);
    }
  }
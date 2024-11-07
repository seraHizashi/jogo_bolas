let palavra;

function setup() {
  createCanvas(400, 400);
}

  function draw() {
  background("rgb(119,15,15)");
  let palavra = "🔥Hefesto";
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
 let maximo=width;
  let minimo=0;
let quantidade=map(mouseX,0, width, 1,palavra.length);
    let parcial=palavra.substring (0,quantidade);
    text(parcial,200,200)
    
    
   /*if (mouseX < 50) {
    let palavra = " 🔥.";
    text(palavra, 200, 200);
  
  } else if (mouseX < 100) {
    let palavra = "H";
    text(palavra, 200, 200);
  
  } else if (mouseX < 150) {
    let palavra = "He";
    text(palavra, 200, 200);
  
  } else if (mouseX < 200) {
    let palavra = "Hef";
    text(palavra, 200, 200);
 
  } else if (mouseX < 250) {
    let palavra = "Hefe";
    text(palavra, 200, 200);
  
  } else if (mouseX < 300) {
    let palavra = "Hefes";
    text(palavra, 200, 200);
    
  } else if (mouseX < 350) {
    let palavra = "Hefest";
    text(palavra, 200, 200);
    
  }  else if (mouseX < 400) {
    let palavra = "Hefesto";
    text(palavra, 200, 200);
 
  } */
}

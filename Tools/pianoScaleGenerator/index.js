//**********This section draws the piano keys**********
  //gets canvas widget
  var c = document.getElementById("keyCanvas");
  var ctx = c.getContext("2d");
  

  //white keys

  ctx.fillStyle = "FFF"
  ctx.beginPath();
  ctx.rect(5, 5, 20,100);
  ctx.rect(25, 5, 20,100);
  ctx.rect(45, 5, 20,100);
  ctx.rect(65, 5, 20,100);
  ctx.rect(85, 5, 20,100);
  ctx.rect(105, 5, 20,100);
  ctx.rect(125, 5, 20,100);
  ctx.rect(145, 5, 20,100);
  ctx.rect(165, 5, 20,100);
  ctx.rect(185, 5, 20,100);
  ctx.rect(205, 5, 20,100);
  ctx.rect(225, 5, 20,100);
  ctx.rect(245, 5, 20,100);
  ctx.rect(265, 5, 20,100);
  ctx.rect(285, 5, 20,100);
  ctx.stroke()

  //black keys
  ctx.beginPath();
  ctx.fillStyle = "#000";
  
  ctx.rect(20, 5, 10,50); //black
  ctx.rect(40, 5, 10,50); //black

  ctx.rect(80, 5, 10,50); //black
  ctx.rect(100, 5, 10,50); //black
  ctx.rect(120, 5, 10,50); //black

  ctx.rect(160, 5, 10,50); //black 
  ctx.rect(180, 5, 10,50); //black

  ctx.rect(220, 5, 10,50); //black
  ctx.rect(240, 5, 10,50); //black
  ctx.rect(260, 5, 10,50); //black

  ctx.rect(300, 5, 5,50); //black

  ctx.fillText("C", 12, 120);
  ctx.fillText("C", 145 + 6, 120);
  ctx.fillText("C", 285 + 6, 120);
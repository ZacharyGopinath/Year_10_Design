var c = document.getElementById("keyCanvas");
var ctx = c.getContext("2d");


//white keys
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

ctx.fill();

ctx.fillText("C", 12, 120);
ctx.fillText("C", 145 + 6, 120);
ctx.fillText("C", 285 + 6, 120);
/*
ctx.beginPath();
  ctx.fillStyle = "#ff79c6";
  //white - orange marks
  ctx.rect(10,90,10,10) //C
  ctx.rect(30,90,10,10) //D
  ctx.rect(50,90,10,10) //E
  ctx.rect(70,90,10,10) //F
  ctx.rect(90,90,10,10) //G
  ctx.rect(110,90,10,10) //A
  ctx.rect(130,90,10,10) //B
  ctx.rect(150,90,10,10) //C
  ctx.rect(170,90,10,10) //D
  ctx.rect(190,90,10,10) //E
  ctx.rect(210,90,10,10) //F
  ctx.rect(230,90,10,10) //G
  ctx.rect(250,90,10,10) //A
  ctx.rect(270,90,10,10) //B
  ctx.rect(290,90,10,10) //C
        
  //black - orange marks
  ctx.rect(22,45,6,6) //C#
  ctx.rect(42,45,6,6) //D#
  ctx.rect(82,45,6,6) //F#
  ctx.rect(102,45,6,6) ///G#
  ctx.rect(122,45,6,6) //A#
  ctx.rect(162,45,6,6) //C#
  ctx.rect(182,45,6,6) //D#
  
  ctx.rect(222,45,6,6) //F#
  ctx.rect(242,45,6,6) //G#
  ctx.rect(262,45,6,6) //A#
  ctx.fill()
//*/
  notes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];

function calculate(){
  clearMarks();

  var sSelect = document.getElementById("scaleSelector")
  var sType = sSelect.options[sSelect.selectedIndex].value

  var nSelect = document.getElementById("scale_key")
  var nType = nSelect.options[nSelect.selectedIndex].value
  var nType = parseInt(nType)

  if (sType === "2"){
    result = [notes[nType],notes[nType+2],notes[nType+3],notes[nType+5],
    notes[nType+7],notes[nType+8],notes[nType+10],notes[nType+12]]
  } else {
  result = [notes[nType],notes[nType+2],notes[nType+4],notes[nType+5],
  notes[nType+7],notes[nType+9],notes[nType+11],notes[nType+12]]
  }
  console.log(result)
  function clearMarks(){
    ctx.beginPath();
    ctx.fillStyle = "white"
    //white - orange marks
    ctx.rect(10,90,10,10)
    ctx.rect(30,90,10,10)
    ctx.rect(50,90,10,10)
    ctx.rect(70,90,10,10)
    ctx.rect(90,90,10,10)
    ctx.rect(110,90,10,10)
    ctx.rect(130,90,10,10)
    ctx.rect(150,90,10,10)
    ctx.rect(170,90,10,10)
    ctx.rect(190,90,10,10)
    ctx.rect(210,90,10,10)
    ctx.rect(230,90,10,10)
    ctx.rect(250,90,10,10)
    ctx.rect(270,90,10,10)
    ctx.rect(290,90,10,10)
    ctx.fill()

    ctx.beginPath();
    ctx.fillStyle = "black"
    //black - orange marks
    ctx.rect(22,45,6,6)
    ctx.rect(42,45,6,6)
    ctx.rect(82,45,6,6)
    ctx.rect(102,45,6,6)
    ctx.rect(122,45,6,6)
    ctx.rect(162,45,6,6)
    ctx.rect(182,45,6,6)
    
    ctx.rect(222,45,6,6)
    ctx.rect(242,45,6,6)
    ctx.rect(262,45,6,6)
    ctx.fill()
  }
  ctx.beginPath()
  ctx.fillStyle = '#ff79c6'
  for (i=0;i<result.length;i++){
    if (result[i] === 'A') {
      ctx.rect(110,90,10,10) //A
      ctx.rect(250,90,10,10) //A
    }
    else if (result[i] === 'A#') {
      ctx.rect(122,45,6,6) //A#  
      ctx.rect(262,45,6,6) //A#
    }
    else if (result[i] === 'B') {
      ctx.rect(130,90,10,10) //B
      ctx.rect(270,90,10,10) //B
    }
    else if (result[i] === 'C') {
      ctx.rect(10,90,10,10) //C
      ctx.rect(150,90,10,10) //C
      ctx.rect(290,90,10,10) //C
    }
    else if (result[i] === 'C#') {
      ctx.rect(22,45,6,6) //C#
      ctx.rect(162,45,6,6) //C#
    }
    else if (result[i] === 'D') {

      ctx.rect(170,90,10,10) //D 
      ctx.rect(30,90,10,10) //D
    }
    else if (result[i] === 'D#') {

      ctx.rect(182,45,6,6) //D#
      ctx.rect(42,45,6,6) //D#
    }
    else if (result[i] === 'E') {

      ctx.rect(190,90,10,10) //E
      ctx.rect(50,90,10,10) //E
    }
    else if (result[i] === 'F') {

      ctx.rect(210,90,10,10) //F
      ctx.rect(70,90,10,10) //F
    }
    else if (result[i] === 'F#') {

      ctx.rect(82,45,6,6) //F#
      ctx.rect(222,45,6,6) //F#
    }
    else if (result[i] === 'G') {
      ctx.rect(230,90,10,10) //G
      ctx.rect(90,90,10,10) //G
    }
    else if (result[i] === 'G#') {

      ctx.rect(102,45,6,6) //G#
      ctx.rect(242,45,6,6) //G#
    }
  }
  ctx.fill()
}
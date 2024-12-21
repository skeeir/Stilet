//HEALTH
let currentHealth = 100;
const maxHealth = 100;



const healthBar = document.getElementById('health-bar');

function updateHealthBar() {
const healthPercentage = (currentHealth / maxHealth) * 100;
healthBar.style.width = healthPercentage + '%';

}






healthBar.addEventListener('change', (e)=>{
  if (e.target.value === "0"){
    document.getElementById('hed').style.backgroundImage = "url(01.defeat.png)";
  }
})


//DAMAGE

const damage1 = document.getElementById("A1");
const damage2 = document.getElementById("A8");
const damage3 = document.getElementById("A10");
const damage4 = document.getElementById("A15");
const damage5 = document.getElementById("A18");
const damage6 = document.getElementById("A24");
const damage7 = document.getElementById("A27");
const damage8 = document.getElementById("A30");
const damage9 = document.getElementById("A36");
const damage10 = document.getElementById("A39");


damage1.onclick = function(amount){
document.getElementById("A1").disabled = true;
document.getElementById("A2").disabled = true;
document.getElementById("A3").disabled = true;
document.getElementById("A4").disabled = true;



if(true){
setTimeout(function(){
document.getElementById("health-bar-container").style.display = "none";
document.getElementById("bx1").style.visibility = "hidden";
document.getElementById("bx11").style.visibility = "visible";
}, 1000)
}
var amount = 10;
currentHealth = Math.max(0, currentHealth - amount);

if(updateHealthBar >= 50){
  document.getElementById("bx11").style.
    document.getElementById("bx11").style.backgroundImage = "url(01pe.png)";
  
  
}
else if(updateHealthBar <= 0){
  
    document.getElementById("bx11").style.backgroundImage = "url(01defeat.png)";
  
}

document.getElementById("bx1").style.background = "red";
document.getElementById("bx1").style.opacity = 1.5;
document.getElementById("bx1").style.backgroundImage= "url(01HurtLoop.gif)";
document.getElementById("bx1").style.backgroundSize = "530px";
document.getElementById("bx1").style.backgroundPositionY= "65px";
document.getElementById("bx1").style.padding= "1px 0";
document.getElementById("bx1").style.backgroundPosition = "center";



updateHealthBar();
}

damage2.onclick = function(amount){

document.getElementById("A5").disabled = true;
document.getElementById("A6").disabled = true;
document.getElementById("A7").disabled = true;
document.getElementById("A8").disabled = true;

setTimeout(function(){
if(true){
document.getElementById("bx2").style.display = "none";
document.getElementById("bx1").style.visibility = "visible";


}
}, 1000) 

document.getElementById("bx2").style.backgroundColor = "red";

var amount = 10;

document.getElementById("bx2").style.backgroundImage= "url(01HurtLoop.gif)";
document.getElementById("bx2").style.backgroundSize = "430px";
document.getElementById("bx2").style.backgroundSize = "530px";
document.getElementById("bx2").style.backgroundPositionY= "65px";
document.getElementById("bx2").style.backgroundPosition = "center";

currentHealth = Math.max(0, currentHealth - amount);
updateHealthBar();

document.getElementById("bx2").style.opacity = 1.5;






}

damage3.onclick = function(amount){

document.getElementById("A9").disabled = true;
document.getElementById("A10").disabled = true;
document.getElementById("A11").disabled = true;
document.getElementById("A12").disabled = true;
setTimeout(function(){
if(true){
document.getElementById("bx3").style.display = "none";
document.getElementById("bx2").style.visibility = "visible";



}

}, 1000)

document.getElementById("bx3").style.backgroundColor = "red";
document.getElementById("bx3").style.opacity = 1.5;


var amount = 10;

document.getElementById("bx3").style.backgroundImage= "url(01HurtLoop.gif)";
document.getElementById("bx3").style.backgroundSize = "530px";
document.getElementById("bx3").style.backgroundPositionY= "65px";
document.getElementById("bx3").style.padding= "1px 0";
document.getElementById("bx3").style.backgroundPosition = "center";

currentHealth = Math.max(0, currentHealth - amount);
updateHealthBar();


}

damage4.onclick = function(amount){

document.getElementById("A13").disabled = true;
document.getElementById("A14").disabled = true;
document.getElementById("A15").disabled = true;
document.getElementById("A16").disabled = true;
setTimeout(function(){
if(true){
document.getElementById("bx4").style.display = "none";
document.getElementById("bx3").style.visibility = "visible";



}

}, 1000)

document.getElementById("bx4").style.backgroundColor = "red";
document.getElementById("bx4").style.opacity = 1.5;

var amount = 10;

document.getElementById("bx4").style.backgroundImage= "url(01HurtLoop.gif)";
document.getElementById("bx4").style.backgroundSize = "530px";
document.getElementById("bx4").style.backgroundPositionY= "65px";
document.getElementById("bx4").style.padding= "1px 0";
document.getElementById("bx4").style.backgroundPosition = "center";

currentHealth = Math.max(0, currentHealth - amount);
updateHealthBar();


}

damage5.onclick = function(amount){

document.getElementById("A17").disabled = true;
document.getElementById("A18").disabled = true;
document.getElementById("A19").disabled = true;
document.getElementById("A20").disabled = true;
setTimeout(function(){
if(true){
document.getElementById("bx5").style.display = "none";
document.getElementById("bx4").style.visibility = "visible";



}

}, 1000)

document.getElementById("bx5").style.backgroundColor = "red";
document.getElementById("bx5").style.opacity = 1.5;

var amount = 10;

document.getElementById("bx5").style.backgroundImage= "url(01HurtLoop.gif)";
document.getElementById("bx5").style.backgroundSize = "530px";
document.getElementById("bx5").style.backgroundPositionY= "65px";
document.getElementById("bx5").style.padding= "1px 0";
document.getElementById("bx5").style.backgroundPosition = "center";

currentHealth = Math.max(0, currentHealth - amount);
updateHealthBar();


}

damage6.onclick = function(amount){

document.getElementById("A21").disabled = true;
document.getElementById("A22").disabled = true;
document.getElementById("A23").disabled = true;
document.getElementById("A24").disabled = true;
setTimeout(function(){
if(true){
document.getElementById("bx6").style.display = "none";
document.getElementById("bx5").style.visibility = "visible";



}

}, 1000)

document.getElementById("bx6").style.backgroundColor = "red";
document.getElementById("bx6").style.opacity = 1.5;

var amount = 10;

document.getElementById("bx6").style.backgroundImage= "url(01HurtLoop.gif)";
document.getElementById("bx6").style.backgroundSize = "530px";
document.getElementById("bx6").style.backgroundPositionY= "65px";
document.getElementById("bx6").style.padding= "1px 0";
document.getElementById("bx6").style.backgroundPosition = "center";

currentHealth = Math.max(0, currentHealth - amount);
updateHealthBar();


}

damage7.onclick = function(amount){

document.getElementById("A25").disabled = true;
document.getElementById("A26").disabled = true;
document.getElementById("A27").disabled = true;
document.getElementById("A28").disabled = true;
setTimeout(function(){
if(true){
document.getElementById("bx7").style.display = "none";
document.getElementById("bx6").style.visibility = "visible";



}

}, 1000)

document.getElementById("bx7").style.backgroundColor = "red";
document.getElementById("bx7").style.opacity = 1.5;

var amount = 10;

document.getElementById("bx7").style.backgroundImage= "url(01HurtLoop.gif)";
document.getElementById("bx7").style.backgroundSize = "530px";
document.getElementById("bx7").style.backgroundPositionY= "65px";
document.getElementById("bx7").style.padding= "1px 0";
document.getElementById("bx7").style.backgroundPosition = "center";

currentHealth = Math.max(0, currentHealth - amount);
updateHealthBar();


}

damage8.onclick = function(amount){

document.getElementById("A29").disabled = true;
document.getElementById("A30").disabled = true;
document.getElementById("A31").disabled = true;
document.getElementById("A32").disabled = true;
setTimeout(function(){
if(true){
document.getElementById("bx8").style.display = "none";
document.getElementById("bx7").style.visibility = "visible";



}

}, 1000)

document.getElementById("bx8").style.backgroundColor = "red";
document.getElementById("bx8").style.opacity = 1.5;

var amount = 10;

document.getElementById("bx8").style.backgroundImage= "url(01HurtLoop.gif)";
document.getElementById("bx8").style.backgroundSize = "530px";
document.getElementById("bx8").style.backgroundPositionY= "65px";
document.getElementById("bx8").style.padding= "1px 0";
document.getElementById("bx8").style.backgroundPosition = "center";

currentHealth = Math.max(0, currentHealth - amount);
updateHealthBar();


}

damage9.onclick = function(amount){

document.getElementById("A33").disabled = true;
document.getElementById("A34").disabled = true;
document.getElementById("A35").disabled = true;
document.getElementById("A36").disabled = true;
setTimeout(function(){
if(true){
document.getElementById("bx9").style.display = "none";
document.getElementById("bx8").style.visibility = "visible";



}

}, 1000)

document.getElementById("bx9").style.backgroundColor = "red";
document.getElementById("bx9").style.opacity = 1.5;

var amount = 10;

document.getElementById("bx9").style.backgroundImage= "url(01HurtLoop.gif)";
document.getElementById("bx9").style.backgroundSize = "530px";
document.getElementById("bx9").style.backgroundPositionY= "65px";
document.getElementById("bx9").style.padding= "1px 0";
document.getElementById("bx9").style.backgroundPosition = "center";

currentHealth = Math.max(0, currentHealth - amount);
updateHealthBar();


}

damage10.onclick = function(amount){

document.getElementById("A37").disabled = true;
document.getElementById("A38").disabled = true;
document.getElementById("A39").disabled = true;
document.getElementById("A40").disabled = true;
setTimeout(function(){
if(true){
document.getElementById("bx10").style.display = "none";
document.getElementById("bx9").style.visibility = "visible";



}

}, 1500)

document.getElementById("bx10").style.backgroundColor = "red";
document.getElementById("bx10").style.opacity = 1.5;


document.getElementById("bx10").style.backgroundImage= "url(01HurtLoop.gif)";
document.getElementById("bx10").style.backgroundSize = "530px";
document.getElementById("bx10").style.backgroundPositionY= "65px";
document.getElementById("bx10").style.padding= "1px 0";
document.getElementById("bx10").style.backgroundPosition = "center";
var amount = 10;


currentHealth = Math.max(0, currentHealth - amount);
updateHealthBar();


}

//wrong answer
const wrong1 = document.getElementById("A9");
const wrong2 = document.getElementById("A11");
const wrong3 = document.getElementById("A12");

const wrong4 = document.getElementById("A5");
const wrong5 = document.getElementById("A6");
const wrong6 = document.getElementById("A7");

const wrong7 = document.getElementById("A3");
const wrong8 = document.getElementById("A4");
const wrong9 = document.getElementById("A2");


const wrong10 = document.getElementById("A13");
const wrong11 = document.getElementById("A14");
const wrong12 = document.getElementById("A16");

const wrong13 = document.getElementById("A19");
const wrong14 = document.getElementById("A20");
const wrong15 = document.getElementById("A17");

const wrong16 = document.getElementById("A37");
const wrong17 = document.getElementById("A38");
const wrong18 = document.getElementById("A40");

const wrong19 = document.getElementById("A33");
const wrong20 = document.getElementById("A34");
const wrong21 = document.getElementById("A35");

const wrong22 = document.getElementById("A29");
const wrong23 = document.getElementById("A31");
const wrong24 = document.getElementById("A32");

const wrong25 = document.getElementById("A25");
const wrong26 = document.getElementById("A26");
const wrong27 = document.getElementById("A28");

const wrong28 = document.getElementById("A21");
const wrong29 = document.getElementById("A22");
const wrong30 = document.getElementById("A23");


wrong1.onclick = function(){
if(true){
document.getElementById("bx3").style.display = "none";
document.getElementById("bx2").style.visibility = "visible";

document.getElementById("A9").disabled = true;
document.getElementById("A10").disabled = true;
document.getElementById("A11").disabled = true;
document.getElementById("A12").disabled = true;

}
}



wrong2.onclick = function(){
if(true){
document.getElementById("bx3").style.display = "none";
document.getElementById("bx2").style.visibility = "visible";

document.getElementById("A9").disabled = true;
document.getElementById("A10").disabled = true;
document.getElementById("A11").disabled = true;
document.getElementById("A12").disabled = true;
}
}



wrong3.onclick = function(){
if(true){
document.getElementById("bx3").style.display = "none";
document.getElementById("bx2").style.visibility = "visible";

document.getElementById("A9").disabled = true;
document.getElementById("A10").disabled = true;
document.getElementById("A11").disabled = true;
document.getElementById("A12").disabled = true;

}
}

wrong4.onclick = function(){
if(true){
document.getElementById("bx2").style.display = "none";
document.getElementById("bx1").style.visibility = "visible";

document.getElementById("A5").disabled = true;
document.getElementById("A6").disabled = true;
document.getElementById("A7").disabled = true;
document.getElementById("A8").disabled = true;

}
}



wrong5.onclick = function(){
if(true){
document.getElementById("bx2").style.display = "none";
document.getElementById("bx1").style.visibility = "visible";

document.getElementById("A5").disabled = true;
document.getElementById("A6").disabled = true;
document.getElementById("A7").disabled = true;
document.getElementById("A8").disabled = true;

}
}



wrong6.onclick = function(){
if(true){
document.getElementById("bx2").style.display = "none";
document.getElementById("bx1").style.visibility = "visible";

document.getElementById("A5").disabled = true;
document.getElementById("A6").disabled = true;
document.getElementById("A7").disabled = true;
document.getElementById("A8").disabled = true;

}
}

wrong7.onclick = function(){
if(true){
document.getElementById("A1").disabled = true;
document.getElementById("A2").disabled = true;
document.getElementById("A3").disabled = true;
document.getElementById("A4").disabled = true;
document.getElementById("health-bar-container").style.display = "none";
document.getElementById("bx1").style.visibility = "hidden";
document.getElementById("bx11").style.visibility = "visible";
}
}



wrong8.onclick = function(){
if(true){
document.getElementById("A1").disabled = true;
document.getElementById("A2").disabled = true;
document.getElementById("A3").disabled = true;
document.getElementById("A4").disabled = true;
document.getElementById("health-bar-container").style.display = "none";
document.getElementById("bx1").style.visibility = "hidden";
document.getElementById("bx11").style.visibility = "visible";
}
}


wrong9.onclick = function(){
if(true){
document.getElementById("A1").disabled = true;
document.getElementById("A2").disabled = true;
document.getElementById("A3").disabled = true;
document.getElementById("A4").disabled = true;
document.getElementById("health-bar-container").style.display = "none";
document.getElementById("bx1").style.visibility = "hidden";
document.getElementById("bx11").style.visibility = "visible";
}
}

wrong10.onclick = function(){
if(true){
document.getElementById("bx4").style.display = "none";
document.getElementById("bx3").style.visibility = "visible";



document.getElementById("A13").disabled = true;
document.getElementById("A14").disabled = true;
document.getElementById("A15").disabled = true;
document.getElementById("A16").disabled = true;

}
}

wrong11.onclick = function(){
if(true){
document.getElementById("bx4").style.display = "none";
document.getElementById("bx3").style.visibility = "visible";



document.getElementById("A13").disabled = true;
document.getElementById("A14").disabled = true;
document.getElementById("A15").disabled = true;
document.getElementById("A16").disabled = true;
}
}


wrong12.onclick = function(){
if(true){
document.getElementById("bx4").style.display = "none";
document.getElementById("bx3").style.visibility = "visible";


document.getElementById("A13").disabled = true;
document.getElementById("A14").disabled = true;
document.getElementById("A15").disabled = true;
document.getElementById("A16").disabled = true;

}
}

wrong13.onclick = function(){
if(true){
document.getElementById("bx5").style.display = "none";
document.getElementById("bx4").style.visibility = "visible";


document.getElementById("A17").disabled = true;
document.getElementById("A18").disabled = true;
document.getElementById("A19").disabled = true;
document.getElementById("A20").disabled = true;

}
}


wrong14.onclick = function(){
if(true){
document.getElementById("bx5").style.display = "none";
document.getElementById("bx4").style.visibility = "visible";


document.getElementById("A17").disabled = true;
document.getElementById("A18").disabled = true;
document.getElementById("A19").disabled = true;
document.getElementById("A20").disabled = true;


}
}

wrong15.onclick = function(){
if(true){
document.getElementById("bx5").style.display = "none";
document.getElementById("bx4").style.visibility = "visible";


document.getElementById("A17").disabled = true;
document.getElementById("A18").disabled = true;
document.getElementById("A19").disabled = true;
document.getElementById("A20").disabled = true;

}
}

wrong16.onclick = function(){
if(true){
document.getElementById("bx10").style.display = "none";
document.getElementById("bx9").style.visibility = "visible";


document.getElementById("A37").disabled = true;
document.getElementById("A38").disabled = true;
document.getElementById("A39").disabled = true;
document.getElementById("A40").disabled = true;

}
}

wrong17.onclick = function(){
if(true){
document.getElementById("bx10").style.display = "none";
document.getElementById("bx9").style.visibility = "visible";


document.getElementById("A37").disabled = true;
document.getElementById("A38").disabled = true;
document.getElementById("A39").disabled = true;
document.getElementById("A40").disabled = true;

}
}

wrong18.onclick = function(){
if(true){
document.getElementById("bx10").style.display = "none";
document.getElementById("bx9").style.visibility = "visible";



document.getElementById("A37").disabled = true;
document.getElementById("A38").disabled = true;
document.getElementById("A39").disabled = true;
document.getElementById("A40").disabled = true;

}
}


wrong19.onclick = function(){
if(true){
document.getElementById("bx9").style.display = "none";
document.getElementById("bx8").style.visibility = "visible";



document.getElementById("A33").disabled = true;
document.getElementById("A34").disabled = true;
document.getElementById("A35").disabled = true;
document.getElementById("A36").disabled = true;

}
}
wrong20.onclick = function(){
if(true){
document.getElementById("bx9").style.display = "none";
document.getElementById("bx8").style.visibility = "visible";



document.getElementById("A33").disabled = true;
document.getElementById("A34").disabled = true;
document.getElementById("A35").disabled = true;
document.getElementById("A36").disabled = true;

}
}
wrong21.onclick = function(){
if(true){
document.getElementById("bx9").style.display = "none";
document.getElementById("bx8").style.visibility = "visible";



document.getElementById("A33").disabled = true;
document.getElementById("A34").disabled = true;
document.getElementById("A35").disabled = true;
document.getElementById("A36").disabled = true;

}
}

wrong22.onclick = function(){
if(true){
document.getElementById("bx8").style.display = "none";
document.getElementById("bx7").style.visibility = "visible";



document.getElementById("A29").disabled = true;
document.getElementById("A30").disabled = true;
document.getElementById("A31").disabled = true;
document.getElementById("A32").disabled = true;

}
}
wrong23.onclick = function(){
if(true){
document.getElementById("bx8").style.display = "none";
document.getElementById("bx7").style.visibility = "visible";



document.getElementById("A29").disabled = true;
document.getElementById("A30").disabled = true;
document.getElementById("A31").disabled = true;
document.getElementById("A32").disabled = true;

}
}
wrong24.onclick = function(){
if(true){
document.getElementById("bx8").style.display = "none";
document.getElementById("bx7").style.visibility = "visible";



document.getElementById("A29").disabled = true;
document.getElementById("A30").disabled = true;
document.getElementById("A31").disabled = true;
document.getElementById("A32").disabled = true;

}
}

wrong25.onclick = function(){
if(true){
document.getElementById("bx7").style.display = "none";
document.getElementById("bx6").style.visibility = "visible";



document.getElementById("A25").disabled = true;
document.getElementById("A26").disabled = true;
document.getElementById("A27").disabled = true;
document.getElementById("A28").disabled = true;

}
}
wrong26.onclick = function(){
if(true){
document.getElementById("bx7").style.display = "none";
document.getElementById("bx6").style.visibility = "visible";



document.getElementById("A25").disabled = true;
document.getElementById("A26").disabled = true;
document.getElementById("A27").disabled = true;
document.getElementById("A28").disabled = true;

}
}
wrong27.onclick = function(){
if(true){
document.getElementById("bx7").style.display = "none";
document.getElementById("bx6").style.visibility = "visible";



document.getElementById("A25").disabled = true;
document.getElementById("A26").disabled = true;
document.getElementById("A27").disabled = true;
document.getElementById("A28").disabled = true;

}
}

wrong28.onclick = function(){
if(true){
document.getElementById("bx6").style.display = "none";
document.getElementById("bx5").style.visibility = "visible";




document.getElementById("A21").disabled = true;
document.getElementById("A22").disabled = true;
document.getElementById("A23").disabled = true;
document.getElementById("A24").disabled = true;

}
}
wrong29.onclick = function(){
if(true){
document.getElementById("bx6").style.display = "none";
document.getElementById("bx5").style.visibility = "visible";




document.getElementById("A21").disabled = true;
document.getElementById("A22").disabled = true;
document.getElementById("A23").disabled = true;
document.getElementById("A24").disabled = true;

}
}
wrong30.onclick = function(){
if(true){
document.getElementById("bx6").style.display = "none";
document.getElementById("bx5").style.visibility = "visible";




document.getElementById("A21").disabled = true;
document.getElementById("A22").disabled = true;
document.getElementById("A23").disabled = true;
document.getElementById("A24").disabled = true;

}
}




//correct answers
const wa1 = document.getElementById("an1");
const wa4 = document.getElementById("an4");
const wa7 = document.getElementById("an7");
const wa8 = document.getElementById("an12");
const wa14 = document.getElementById("an15");
const wa16 = document.getElementById("an18");
const wa17 = document.getElementById("an20");
const wa18 = document.getElementById("an23");
const wa19 = document.getElementById("an25");
const wa20 = document.getElementById("an29");
//ccbc



//wrong answers
const wa2 = document.getElementById("an2");
const wa3 = document.getElementById("an3");
const wa5 = document.getElementById("an5");
const wa6 = document.getElementById("an6");
const wa9 = document.getElementById("an8");
const wa10 = document.getElementById("an9");
const wa11 = document.getElementById("an10");
 const wa12 = document.getElementById("an11");
 const wa13 = document.getElementById("an14");
 const wa15 = document.getElementById("an13");
 const wa21 = document.getElementById("an16");
 const wa22 = document.getElementById("an17");
 const wa23 = document.getElementById("an19");
 const wa24 = document.getElementById("an21");
 const wa25 = document.getElementById("an24");
 const wa31= document.getElementById("an26");
 const wa26 = document.getElementById("an22");
 const wa28 = document.getElementById("an27");
 const wa29 = document.getElementById("an28");
 const wa30 = document.getElementById("an30");



//display score
var correctCount = 0;

const correctCountDisplay = document.getElementById("ct");

//correct answer functions
wa1.onclick = function(){
    if(true){
        document.getElementById("an1").style.backgroundColor = "#00ff00";
        document.getElementById("an2").style.backgroundColor = "red";
        document.getElementById("an3").style.backgroundColor = "red";
        
        document.getElementById("an1").style.cursor = "not-allowed";
        document.getElementById("an2").style.cursor = "not-allowed";
        document.getElementById("an3").style.cursor = "not-allowed";

        document.getElementById("an1").disabled = true;
        document.getElementById("an2").disabled = true;
        document.getElementById("an3").disabled = true;

       
        document.getElementById("nxt1").disabled = false;
    }
    
    correctCount++;

    correctCountDisplay.innerText = "Corrects: " + correctCount;
    
}
    


wa4.onclick = function(){
    if(true){
        document.getElementById("an5").style.backgroundColor = "red";
        document.getElementById("an4").style.backgroundColor = "#00ff00";
        document.getElementById("an6").style.backgroundColor = "red";
        
        document.getElementById("an4").style.cursor = "not-allowed";
        document.getElementById("an5").style.cursor = "not-allowed";
        document.getElementById("an6").style.cursor = "not-allowed";

        document.getElementById("an4").disabled = true;
        document.getElementById("an5").disabled = true;
        document.getElementById("an6").disabled = true;

        
        document.getElementById("nxt2").disabled = false;
        
    }

    correctCount++;
    
    correctCountDisplay.innerText = "Corrects: " + correctCount;
    
}

wa7.onclick = function(){
    if(true){
        document.getElementById("an9").style.backgroundColor = "red";
        document.getElementById("an8").style.backgroundColor = "red";
        document.getElementById("an7").style.backgroundColor = "#00ff00";

        document.getElementById("an7").style.cursor = "not-allowed";
        document.getElementById("an8").style.cursor = "not-allowed";
        document.getElementById("an9").style.cursor = "not-allowed";

        document.getElementById("an7").disabled = true;
        document.getElementById("an8").disabled = true;
        document.getElementById("an9").disabled = true;

        document.getElementById("nxt3").disabled = false;
        
    }
                                                                                                                                                                                                                                                                                                                                            


    correctCount++;

    correctCountDisplay.innerText = "Corrects: " + correctCount;
    
}

wa8.onclick = function(){
    if(true){
        document.getElementById("an11").style.backgroundColor = "red";
        document.getElementById("an10").style.backgroundColor = "red";
        document.getElementById("an12").style.backgroundColor = "#00ff00";

        document.getElementById("an10").style.cursor = "not-allowed";
        document.getElementById("an11").style.cursor = "not-allowed";
        document.getElementById("an12").style.cursor = "not-allowed";

        document.getElementById("an10").disabled = true;
        document.getElementById("an11").disabled = true;
        document.getElementById("an12").disabled = true;

        document.getElementById("nxt4").disabled = false;
        
    }
                                                                                                                                                                                                                                                                                                                                            


    correctCount++;

    correctCountDisplay.innerText = "Corrects: " + correctCount;
    
}
    
wa14.onclick = function(){
    if(true){
        document.getElementById("an13").style.backgroundColor = "red";
        document.getElementById("an15").style.backgroundColor = "#00ff00";
        document.getElementById("an14").style.backgroundColor = "red";
        
        document.getElementById("an13").style.cursor = "not-allowed";
        document.getElementById("an14").style.cursor = "not-allowed";
        document.getElementById("an15").style.cursor = "not-allowed";
        
        document.getElementById("an13").disabled = true;
        document.getElementById("an14").disabled = true;
        document.getElementById("an15").disabled = true;
        
        document.getElementById("nxt5").disabled = false;
    }

    correctCount++;
    
    correctCountDisplay.innerText = "Corrects: " + correctCount;
}

wa16.onclick = function(){
    if(true){
        document.getElementById("an16").style.backgroundColor = "red";
        document.getElementById("an17").style.backgroundColor = "red";
        document.getElementById("an18").style.backgroundColor = "#00ff00";
        
        document.getElementById("an16").style.cursor = "not-allowed";
        document.getElementById("an17").style.cursor = "not-allowed";
        document.getElementById("an18").style.cursor = "not-allowed";
        
        document.getElementById("an16").disabled = true;
        document.getElementById("an17").disabled = true;
        document.getElementById("an18").disabled = true;
        
        document.getElementById("nxt6").disabled = false;
    }
    correctCount++;
    
    correctCountDisplay.innerText = "Corrects: " + correctCount;    
}

wa17.onclick = function(){
    if(true){
        document.getElementById("an19").style.backgroundColor = "red";
        document.getElementById("an21").style.backgroundColor = "red";
        document.getElementById("an20").style.backgroundColor = "#00ff00";
        
        document.getElementById("an19").style.cursor = "not-allowed";
        document.getElementById("an20").style.cursor = "not-allowed";
        document.getElementById("an21").style.cursor = "not-allowed";
        
        document.getElementById("an19").disabled = true;
        document.getElementById("an20").disabled = true;
        document.getElementById("an21").disabled = true;

        document.getElementById("nxt7").disabled = false;
        
    }

    correctCount++;
    
    correctCountDisplay.innerText = "Corrects: " + correctCount;

}

wa18.onclick = function(){
    if(true){
        document.getElementById("an22").style.backgroundColor = "red";
        document.getElementById("an24").style.backgroundColor = "red";
        document.getElementById("an23").style.backgroundColor = "#00ff00";
        
        document.getElementById("an22").style.cursor = "not-allowed";
        document.getElementById("an23").style.cursor = "not-allowed";
        document.getElementById("an24").style.cursor = "not-allowed";
        
        document.getElementById("an22").disabled = true;
        document.getElementById("an23").disabled = true;
        document.getElementById("an24").disabled = true;
        
        document.getElementById("nxt8").disabled = false;
    }
    correctCount++;
    
    correctCountDisplay.innerText = "Corrects: " + correctCount;
}

wa19.onclick = function(){
    if(true){
        document.getElementById("an26").style.backgroundColor = "red";
        document.getElementById("an25").style.backgroundColor = "#00ff00";
        document.getElementById("an27").style.backgroundColor = "red";
        
        document.getElementById("an25").style.cursor = "not-allowed";
        document.getElementById("an26").style.cursor = "not-allowed";
        document.getElementById("an27").style.cursor = "not-allowed";
        
        document.getElementById("an25").disabled = true;
        document.getElementById("an26").disabled = true;
        document.getElementById("an27").disabled = true;
        
        document.getElementById("nxt9").disabled = false;
    }

    correctCount++;
    
    correctCountDisplay.innerText = "Corrects: " + correctCount;
}

wa20.onclick = function(){
    if(true){
        document.getElementById("an28").style.backgroundColor = "red";
        document.getElementById("an30").style.backgroundColor = "red";
        document.getElementById("an29").style.backgroundColor = "#00ff00";
        
        document.getElementById("an28").style.cursor = "not-allowed";
        document.getElementById("an29").style.cursor = "not-allowed";
        document.getElementById("an30").style.cursor = "not-allowed";
        
        document.getElementById("an28").disabled = true;
        document.getElementById("an29").disabled = true;
        document.getElementById("an30").disabled = true;
        
        document.getElementById("nxt10").disabled = false;
    }
    correctCount++;
    
    correctCountDisplay.innerText = "Corrects: " + correctCount;
}



//wrong answer functions
wa2.onclick = function(){
    if(true){
        document.getElementById("an1").style.backgroundColor = "#00ff00";
        document.getElementById("an2").style.backgroundColor = "red";
        document.getElementById("an3").style.backgroundColor = "red";
        document.getElementById("nxt1").disabled = false;
    }

       
    document.getElementById("an1").style.cursor = "not-allowed";
    document.getElementById("an2").style.cursor = "not-allowed";
    document.getElementById("an3").style.cursor = "not-allowed";

    document.getElementById("an1").disabled = true;
    document.getElementById("an2").disabled = true;
    document.getElementById("an3").disabled = true;

   
    setTimeout(function(){
        alert("Listening differs from simply hearing sounds because you understand and receive what is being said, simply hearing sounds is hearing what is being said but not putting it into your mind");
    }, 1000)
}

wa3.onclick = function(){
    if(true){
        document.getElementById("an1").style.backgroundColor = "#00ff00";
        document.getElementById("an2").style.backgroundColor = "red";
        document.getElementById("an3").style.backgroundColor = "red";

        document.getElementById("nxt1").disabled = false;
    }
   
    document.getElementById("an1").style.cursor = "not-allowed";
    document.getElementById("an2").style.cursor = "not-allowed";
    document.getElementById("an3").style.cursor = "not-allowed";

    document.getElementById("an1").disabled = true;
    document.getElementById("an2").disabled = true;
    document.getElementById("an3").disabled = true;

   
    setTimeout(function(){
        alert("Listening differs from simply hearing sounds because you understand and receive what is being said, simply hearing sounds is   hearing what is being said but not putting it into your mind");
    }, 500)
}

wa5.onclick = function(){
    if(true){
        document.getElementById("an5").style.backgroundColor = "red";
        document.getElementById("an4").style.backgroundColor = "#00ff00";
        document.getElementById("an6").style.backgroundColor = "red";
       
        document.getElementById("an4").style.cursor = "not-allowed";
        document.getElementById("an5").style.cursor = "not-allowed";
        document.getElementById("an6").style.cursor = "not-allowed";

        document.getElementById("an4").disabled = true;
        document.getElementById("an5").disabled = true;
        document.getElementById("an6").disabled = true;

        document.getElementById("nxt2").disabled = false;
       
    }

    setTimeout(function(){
        alert("Hearing is how you hear sounds in communication");
    }, 500)
}

wa6.onclick = function(){
    if(true){
        document.getElementById("an5").style.backgroundColor = "red";
        document.getElementById("an4").style.backgroundColor = "#00ff00";
        document.getElementById("an6").style.backgroundColor = "red";

        document.getElementById("an4").style.cursor = "not-allowed";
        document.getElementById("an5").style.cursor = "not-allowed";
        document.getElementById("an6").style.cursor = "not-allowed";

        document.getElementById("an4").disabled = true;
        document.getElementById("an5").disabled = true;
        document.getElementById("an6").disabled = true;

        

        document.getElementById("nxt2").disabled = false;
        
    }

    setTimeout(function(){
        alert("Hearing is how you hear sounds in communication");
    }, 500)
}

wa9.onclick = function(){
    if(true){
   document.getElementById("an9").style.backgroundColor = "red";
        document.getElementById("an8").style.backgroundColor = "red";
        document.getElementById("an7").style.backgroundColor = "#00ff00";

        document.getElementById("an9").style.cursor = "not-allowed";
        document.getElementById("an8").style.cursor = "not-allowed";
        document.getElementById("an7").style.cursor = "not-allowed";

        document.getElementById("an9").disabled = true;
        document.getElementById("an8").disabled = true;
        document.getElementById("an7").disabled = true;

        
        document.getElementById("nxt3").disabled = false;
        
    }

    setTimeout(function(){
        alert("Stimuli allows you to perceive sounds");
    }, 500)
}

wa10.onclick = function(){
    if(true){
        document.getElementById("an9").style.backgroundColor = "red";
        document.getElementById("an8").style.backgroundColor = "red";
        document.getElementById("an7").style.backgroundColor = "#00ff00";

        document.getElementById("an9").style.cursor = "not-allowed";
        document.getElementById("an8").style.cursor = "not-allowed";
        document.getElementById("an7").style.cursor = "not-allowed";

        document.getElementById("an9").disabled = true;
        document.getElementById("an8").disabled = true;
        document.getElementById("an7").disabled = true;

        
        document.getElementById("nxt3").disabled = false;
        
    }

    setTimeout(function(){
        alert("Stimuli allows you to perceive sounds");
    }, 500)
}

wa11.onclick = function(){
    if(true){
        document.getElementById("an11").style.backgroundColor = "red";
        document.getElementById("an10").style.backgroundColor = "red";
        document.getElementById("an12").style.backgroundColor = "#00ff00";

        document.getElementById("an10").style.cursor = "not-allowed";
        document.getElementById("an11").style.cursor = "not-allowed";
        document.getElementById("an12").style.cursor = "not-allowed";

        document.getElementById("an10").disabled = true;
        document.getElementById("an11").disabled = true;
        document.getElementById("an12").disabled = true;

        
        document.getElementById("nxt4").disabled = false;
    }
    setTimeout(function(){
        alert("Communicative strategies are important because they allow us to be able to communicate our ideas easier");
    }, 500)
}

wa12.onclick = function(){
    if(true){
        document.getElementById("an11").style.backgroundColor = "red";
        document.getElementById("an10").style.backgroundColor = "red";
        document.getElementById("an12").style.backgroundColor = "#00ff00";

        document.getElementById("an10").style.cursor = "not-allowed";
        document.getElementById("an11").style.cursor = "not-allowed";
        document.getElementById("an12").style.cursor = "not-allowed";

        document.getElementById("an10").disabled = true;
        document.getElementById("an11").disabled = true;
        document.getElementById("an12").disabled = true;

        
        document.getElementById("nxt4").disabled = false;
        
    }

    setTimeout(function(){
        alert("Communicative strategies are important because they allow us to be able to communicate our ideas easier");
    }, 500)
}

wa13.onclick = function(){
    if(true){
        document.getElementById("an13").style.backgroundColor = "red";
        document.getElementById("an15").style.backgroundColor = "#00ff00";
        document.getElementById("an14").style.backgroundColor = "red";
        

        document.getElementById("an13").style.cursor = "not-allowed";
        document.getElementById("an14").style.cursor = "not-allowed";
        document.getElementById("an15").style.cursor = "not-allowed";

        document.getElementById("an13").disabled = true;
        document.getElementById("an14").disabled = true;
        document.getElementById("an15").disabled = true;

        document.getElementById("nxt5").disabled = false;
    }
    setTimeout(function(){
        alert("Listening is the act of perceiving and analyzing data");
    }, 500)
}

wa15.onclick = function(){
    if(true){
        document.getElementById("an13").style.backgroundColor = "red";
        document.getElementById("an15").style.backgroundColor = "#00ff00";
        document.getElementById("an14").style.backgroundColor = "red";
        
        document.getElementById("an13").style.cursor = "not-allowed";
        document.getElementById("an14").style.cursor = "not-allowed";
        document.getElementById("an15").style.cursor = "not-allowed";

        document.getElementById("an13").disabled = true;
        document.getElementById("an14").disabled = true;
        document.getElementById("an15").disabled = true;

        document.getElementById("nxt5").disabled = false;
    }
    setTimeout(function(){
        alert("Listening is the act of perceiving and analyzing data");
    }, 500)
}


wa21.onclick = function(){
    if(true){
        document.getElementById("an16").style.backgroundColor = "red";
        document.getElementById("an17").style.backgroundColor = "red";
        document.getElementById("an18").style.backgroundColor = "#00ff00";
        
        document.getElementById("an16").style.cursor = "not-allowed";
        document.getElementById("an17").style.cursor = "not-allowed";
        document.getElementById("an18").style.cursor = "not-allowed";

        document.getElementById("an16").disabled = true;
        document.getElementById("an17").disabled = true;
        document.getElementById("an18").disabled = true;

        
        document.getElementById("nxt6").disabled = false;
    }
    setTimeout(function(){
        alert("To help you understand and analyze the context in communication, it helps you to understand better");
    }, 500)
}

wa22.onclick = function(){
    if(true){
        document.getElementById("an16").style.backgroundColor = "red";
        document.getElementById("an17").style.backgroundColor = "red";
        document.getElementById("an18").style.backgroundColor = "#00ff00";
        
        document.getElementById("an16").style.cursor = "not-allowed";
        document.getElementById("an17").style.cursor = "not-allowed";
        document.getElementById("an18").style.cursor = "not-allowed";

        document.getElementById("an16").disabled = true;
        document.getElementById("an17").disabled = true;
        document.getElementById("an18").disabled = true;

        document.getElementById("nxt6").disabled = false;
    }
    setTimeout(function(){
        alert("To help you understand and analyze the context in communication, it helps you to understand better");
    }, 500)
}

wa23.onclick = function(){
    if(true){
        document.getElementById("an19").style.backgroundColor = "red";
        document.getElementById("an21").style.backgroundColor = "red";
        document.getElementById("an20").style.backgroundColor = "#00ff00";
        
        document.getElementById("an21").style.cursor = "not-allowed";
        document.getElementById("an20").style.cursor = "not-allowed";
        document.getElementById("an19").style.cursor = "not-allowed";

        document.getElementById("an19").disabled = true;
        document.getElementById("an20").disabled = true;
        document.getElementById("an21").disabled = true;
        document.getElementById("nxt7").disabled = false;
    }
    setTimeout(function(){
        alert("Effective listening helps you to understand the concept and intention of the speaker and understand the conversation");
    }, 500)
}

wa24.onclick = function(){
    if(true){
         document.getElementById("an19").style.backgroundColor = "red";
        document.getElementById("an21").style.backgroundColor = "red";
        document.getElementById("an20").style.backgroundColor = "#00ff00";
        
        document.getElementById("an19").style.cursor = "not-allowed";
        document.getElementById("an20").style.cursor = "not-allowed";
        document.getElementById("an21").style.cursor = "not-allowed";   

        document.getElementById("an19").disabled = true;
        document.getElementById("an20").disabled = true;
        document.getElementById("an21").disabled = true;
        document.getElementById("nxt7").disabled = false;
    }
    setTimeout(function(){
        alert("Effective listening helps you to understand the concept and intention of the speaker and understand the conversation");
    }, 500)
}

wa25.onclick = function(){
    if(true){
        document.getElementById("an26").style.backgroundColor = "red";
        document.getElementById("an25").style.backgroundColor = "#00ff00";
        document.getElementById("an27").style.backgroundColor = "red";
        
        document.getElementById("an25").style.cursor = "not-allowed";
        document.getElementById("an26").style.cursor = "not-allowed";
        document.getElementById("an27").style.cursor = "not-allowed";
        
        document.getElementById("nxt7").disabled = false;
    }
    setTimeout(function(){
        alert("Another wrong answer");
    }, 500)
}

wa26.onclick = function(){
    if(true){
        document.getElementById("an22").style.backgroundColor = "red";
        document.getElementById("an24").style.backgroundColor = "red";
        document.getElementById("an23").style.backgroundColor = "#00ff00";
        

        document.getElementById("an22").style.cursor = "not-allowed";
        document.getElementById("an23").style.cursor = "not-allowed";
        document.getElementById("an24").style.cursor = "not-allowed";
        document.getElementById("nxt8").disabled = false;
    }
    setTimeout(function(){
        alert("Listening is the best way to interpret a message so you can analyze the speaker's intentions");
    }, 500)
}


wa27.onclick = function(){
    if(true){
        document.getElementById("an22").style.backgroundColor = "red";
        document.getElementById("an24").style.backgroundColor = "red";
        document.getElementById("an23").style.backgroundColor = "#00ff00";
        

        document.getElementById("an22").style.cursor = "not-allowed";
        document.getElementById("an23").style.cursor = "not-allowed";
        document.getElementById("an24").style.cursor = "not-allowed";
        document.getElementById("nxt8").disabled = false;
    }
    setTimeout(function(){
        alert("Listening is the best way to interpret a message so you can analyze the speaker's intentions");
    }, 500)
}

wa31.onclick = function(){
    if(true){
        document.getElementById("an26").style.backgroundColor = "red";
        document.getElementById("an25").style.backgroundColor = "#00ff00";
        document.getElementById("an27").style.backgroundColor = "red";
        

        document.getElementById("an26").style.cursor = "not-allowed";
        document.getElementById("an25").style.cursor = "not-allowed";
        document.getElementById("an27").style.cursor = "not-allowed";
        document.getElementById("nxt9").disabled = false;
    }
    setTimeout(function(){
        alert("Hearing is the way to do it so that the man can hear");
    }, 500)
}

wa28.onclick = function(){
    if(true){
        document.getElementById("an25").style.backgroundColor = "#00ff00";
        document.getElementById("an26").style.backgroundColor = "red";
        document.getElementById("an27").style.backgroundColor = "red";
        

        document.getElementById("an26").style.cursor = "not-allowed";
        document.getElementById("an25").style.cursor = "not-allowed";
        document.getElementById("an27").style.cursor = "not-allowed";
        document.getElementById("nxt9").disabled = false;
    }
    setTimeout(function(){
        alert("Hearing is the way to do it so that the man can hear");
    }, 500)
}

wa29.onclick = function(){
    if(true){
        document.getElementById("an28").style.backgroundColor = "red";
        document.getElementById("an30").style.backgroundColor = "red";
        document.getElementById("an29").style.backgroundColor = "#00ff00";
        
        
        document.getElementById("an28").style.cursor = "not-allowed";
        document.getElementById("an29").style.cursor = "not-allowed";
        document.getElementById("an30").style.cursor = "not-allowed";
        document.getElementById("nxt10").disabled = false;
    }
    setTimeout(function(){
        alert("Interpreting so that he knows the cause of the noise");
    }, 500)
}

wa30.onclick = function(){  
    if(true){
        document.getElementById("an28").style.backgroundColor = "red";
        document.getElementById("an30").style.backgroundColor = "red";
        document.getElementById("an29").style.backgroundColor = "#00ff00";
        
        
        document.getElementById("an28").style.cursor = "not-allowed";
        document.getElementById("an29").style.cursor = "not-allowed";
        document.getElementById("an30").style.cursor = "not-allowed";
        
        document.getElementById("nxt10").disabled = false;
    }
    setTimeout(function(){
        alert("Interpreting so that he knows the cause of the noise");
    }, 500)
}


//continue buttons

const con1 = document.getElementById("nxt1");
const con2 = document.getElementById("nxt2");
const con3 = document.getElementById("nxt3");
const con4 = document.getElementById("nxt4");
const con5 = document.getElementById("nxt5");
const con6 = document.getElementById("nxt6");
const con7 = document.getElementById("nxt7");
const con8 = document.getElementById("nxt8");
const con9 = document.getElementById("nxt9");
const con10 = document.getElementById("nxt10");
//disabled until true
document.getElementById("nxt10").disabled = true;
document.getElementById("nxt9").disabled = true;
document.getElementById("nxt8").disabled = true;
document.getElementById("nxt7").disabled = true;
document.getElementById("nxt6").disabled = true;
document.getElementById("nxt5").disabled = true;
document.getElementById("nxt4").disabled = true;
document.getElementById("nxt3").disabled = true;
document.getElementById("nxt2").disabled = true;
document.getElementById("nxt1").disabled = true;

//continue buttons function
con1.onclick = function(){
    
    document.getElementById("s1").style.display = "none";
    document.getElementById("s4").style.visibility = "visible";
}

con2.onclick = function(){
    document.getElementById("s2").style.display = "none";
    document.getElementById("s1").style.visibility = "visible";
}

con3.onclick = function(){
    document.getElementById("s3").style.display = "none";
    document.getElementById("s2").style.visibility = "visible";
}

con4.onclick = function(){
    document.getElementById("s4").style.display = "none";
    document.getElementById("s5").style.visibility = "visible";
}

con5.onclick = function(){
    document.getElementById("s5").style.display = "none";
    document.getElementById("s6").style.visibility = "visible";
}

con6.onclick = function(){
    document.getElementById("s6").style.display = "none";
    document.getElementById("s7").style.visibility = "visible";
}

con7.onclick = function(){
    document.getElementById("s7").style.display = "none";
    document.getElementById("s8").style.visibility = "visible";
}

con8.onclick = function(){
    document.getElementById("s8").style.display = "none";
    document.getElementById("s9").style.visibility = "visible";
}

con9.onclick = function(){
    document.getElementById("s9").style.display = "none";
    document.getElementById("s10").style.visibility = "visible";
}

con10.onclick = function(){
    document.getElementById("s10").style.display = "none";
    document.getElementById("hm").style.visibility = "visible";
}
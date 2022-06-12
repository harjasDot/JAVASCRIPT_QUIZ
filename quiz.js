let score=0;
let q=0;


function correct(){
  score=score+1;
  document.getElementById("result").innerHTML="Correct Choice!!"
  document.getElementById("nex").style.display="block";
  document.getElementById("bt"+[q-1]).style.display="none";
}

function incorrect(){
  document.getElementById("result").innerHTML="Oops! Better luck next time!!"
  document.getElementById("nex").style.display="block";
  document.getElementById("bt"+[q-1]).style.display="none";
}

function next(){
  document.getElementById("nex").style.display="none";
  document.getElementById("result").innerHTML=""
  document.getElementById("main_card"+[q-1]).style.display="none";
  document.getElementById("main_card"+[q]).style.display="block";
  q=q+1;
  if (q==7){
    document.getElementById("final").style.display="none";
    alert("YOU SCORED "+ score +"MARKS");
    alert("RELOAD TO START AGAIN")
  }
}
next();

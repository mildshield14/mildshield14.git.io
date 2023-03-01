
var i = 0;
var j=0;
var h=0;
var x="";
let txt1 = "Hello, I'm Vennila Sooben. " 
var txt2="I am a first-year Computer Science student at University of Montreal. "
var txt3="Here's is an insight of my portfolio.";
var speed = 50;

function typeWriter(){

    $("#removal").hide();

    location.replace("email.html");
                 

}

function typeWrite() {
   
    $("#removal").hide();


    x=txt1+txt2+txt3;

  if (i < x.length) {
    document.getElementById("demo").innerHTML += x.charAt(i);
    i++;
   
    setTimeout(typeWriter, speed);
  }

}
  





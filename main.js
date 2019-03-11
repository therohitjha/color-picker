var color1=document.querySelector('.color1');
var color2=document.querySelector('.color2');
var body=document.getElementById('gradient');
var div=document.querySelector('.div');

function getGradient(){
body.style.background='linear-gradient(to bottom,'+color1.value+','+color2.value+')';
document.querySelector('.text1').value=color1.value;
document.querySelector('.text2').value=color2.value;
div.textContent=body.style.background+';';
}

color1.addEventListener('input',getGradient);
color2.addEventListener('input',getGradient);
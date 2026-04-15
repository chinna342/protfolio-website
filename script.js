const words = [
"AI Engineer",
"LLM Developer",
"Automation Specialist",
"ML Builder"
];

let i = 0;
let j = 0;
let deleting = false;

const typing = document.getElementById("typing");


function typeEffect(){

let current = words[i];


if(!deleting){

typing.textContent =
current.substring(0,j++);

if(j > current.length){

deleting = true;

setTimeout(typeEffect,1000);

return;
}

}

else{

typing.textContent =
current.substring(0,j--);

if(j < 0){

deleting = false;

i = (i+1)%words.length;

}

}


setTimeout(
typeEffect,
deleting ? 50 : 100
);

}


typeEffect();



document.addEventListener(
"mousemove",

(e)=>{

let cursor =
document.querySelector(".cursor");

cursor.style.left =
e.clientX+"px";

cursor.style.top =
e.clientY+"px";

});
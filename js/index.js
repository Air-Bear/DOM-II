// Your code goes here
const body = document.querySelector("body");
const bttns = document.getElementsByClassName("btn");
const imgs = document.querySelectorAll("img");
const nav = document.getElementsByClassName("main-navigation");

var rotation = 0;

window.addEventListener("load", (event)=>{
	body.style.backgroundColor = colorGen();
	body.style.transition = ".75s all ease-in-out";

	nav[0].style.zIndex = "10";

	buttons();

});

window.addEventListener("resize", (event) => {
	if(window.innerHeight <= 800 || window.innerWidth <= 800){
		console.log("It's getting cramped!");
	}
});

body.addEventListener("wheel", function(event){
	console.log("weee!");
});

body.addEventListener("keypress", function(event){
		if(event.code !== "Space"){
			rotation += 30;

			if(rotation === 360){
				rotation = 0;
			}
		}
		else{
			rotation = 0;
		}

		imgs.forEach(function(img){
			img.style.transform = "rotate(" + rotation + "deg)";
		});
	});

imgs.forEach((img)=>{
	img.addEventListener("dblclick", function(event){
		this.style.transform = "scale(1.2)";
	});

	img.addEventListener("contextmenu", function(event){
		this.style.transform = "scale(1)";
		event.preventDefault();
	});
});

function buttons(){
	for(var i = 0; i < bttns.length; i++){
		bttns[i].addEventListener("mouseenter", function(){
			this.textContent = "Don't Click!";
		});

		bttns[i].addEventListener("mouseleave", function(){
			this.textContent = "Sign Me Up!";
			this.style.display = "flex";
		});

		bttns[i].addEventListener("click", function(){
			this.textContent = "";
		});
	}
}

setInterval(()=>{
	body.style.backgroundColor = colorGen();
}, 3000)

function colorGen(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return `rgb(${r}, ${g}, ${b})`;
}
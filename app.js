var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click" , function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}		
	}
});

hardBtn.addEventListener("click" , function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});


resetButton.addEventListener("click" , function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colours";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;



for(var i = 0; i < squares.length; i++){
	//add initial colours to squares
	squares[i].style.backgroundColor = colors[i];

	// //add click listeners to squares
	squares[i].addEventListener("click" , function(){
		//grab colour of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to pickedColour
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!"
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!!!"
		}
	});
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
	//change each color to match given color
	squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	// pick a red from 0 to 255
	var r = Math.floor(Math.random()*255 + 1);
	// pick a green from 0 to 255
	var g = Math.floor(Math.random()*255 + 1);
	// pick a blue from 0 to 255
	var b = Math.floor(Math.random()*255 + 1);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
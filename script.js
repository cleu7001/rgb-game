let squares = document.querySelectorAll(".square");
let colorDsplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

let colors =[];
let pickedColor = null;
let numSquares = 6;

init ();

function init() {
	setupModeButtons();
	setupSquares();
	setupResetButton();
	reset();
}

function setupModeButtons() {
	for (let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (let j = 0; j < modeButtons.length; j++) {
				modeButtons[j].classList.toggle("selected");
			}
			numSquares = 3 * (i+1);
			reset();
		});
	}
}

function setupSquares() {
	for(let i = 0; i < squares.length ; i++) {
		squares[i].addEventListener("click", function() {
			let clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!"
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}

function setupResetButton() {
	resetButton.addEventListener("click", function () {
		reset();
	})
}

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	};
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"
}

function changeColors(color) {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	let colors = [];
	for (let i = 0; i < num; i ++) {
		randomColor = getRandomColor();
		colors.push(randomColor);
	}
	return colors;
}

function getRandomColor() {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

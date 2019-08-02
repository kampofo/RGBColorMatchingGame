// genrate all colors
var numSquares = 6;
var pickedColor; 
var colors = [];
var h1 = document.querySelector('h1');
// Select all squares colors and display color
var squares = document.querySelectorAll('.square'); 
var colorDisplay = document.querySelector('#color-display'); 
// select difficulty for game
var difficultyButtons = document.querySelectorAll('.difficulty');
var messageDisplay = document.querySelector("#message"); 
var resetButton = document.querySelector('#reset');

init();

resetButton.addEventListener('click', function() {
    reset();
});


/*************************************************************
                     FUNCTIONS SECTION!!!!!!
**************************************************************/
// initializes difficulty and colors
function init() {
    setDifficulty();
    setSquares();
    reset();
}

// sets up difficulty button event listeners 
function setDifficulty() {
    for (var i = 0; i < difficultyButtons.length; i++) {
        difficultyButtons[i].addEventListener("click", function(){
            difficultyButtons[0].classList.remove("selected");
            difficultyButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // display num of squares to match difficulty
            this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

// initializes click listeners for buttons and set colors for squares
function setSquares() {
    for(var i = 0; i < squares.length; i++) {
        // add click event listeners to sqaures
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            // compare color to clicked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "rgba(0, 0, 0, 0)";
                messageDisplay.textContent = "try again";
            }
        });
    }
}

// assigns colors to all squares
function changeColors(color){
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // change color to match given color
        squares[i].style.backgroundColor = color;
    }
}

// selects color for the game 
function pickColor () {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// generates random colors for squares
function generateRandomColors(num) {
    // make array
    var arr = [];
    // add num random colors to array
    for (i = 0; i < num; i++) {
        arr.push(randomColor());        
    }
    // return array
    return arr;
}

// returns string with randomly generated color
function randomColor() {
    var r = Math.floor(Math.random() * 256); // Pick red value
    var g = Math.floor(Math.random() * 256); // Pick green value
    var b = Math.floor(Math.random() * 256); // Pick blue value
    return 'rgb(' + r + ', ' +  g + ', ' + b + ')';
}

function reset() {
    // generate new colors
    colors = generateRandomColors(numSquares);
    // pick new random color from array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'New Colors';
    h1.style.backgroundColor = "#0b409c";
    messageDisplay.textContent = '';
    // change colors of squares
    for(var i = 0; i < squares.length; i++){
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
}
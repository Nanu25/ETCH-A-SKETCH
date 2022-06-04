const DIM = 8;
const BLACK = 333333;
const WHITE = 'FFFFFF';

var buttons = document.querySelectorAll("button");
var board = document.querySelector(".board");
var rows = document.querySelectorAll("tr");

var tabla = document.createElement('tabla');

let variabila;
let brushColour;
let activeColour;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const randColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
}

function setDefault() {
    buttons.forEach(button => {
        button.style.background = "white";
        button.style.color = `#${BLACK}`;
        brushColour = BLACK;
        activeColour = true;
        mouseDown = false;
    });
}

function generateBoard() {
    for(let i = 0; i < DIM; i++) {
        var row = document.createElement('tr');
        for(let j = 0; j < DIM; j++) {
            var cell = document.createElement('td');
            cell.addEventListener("click", (e) => {
                if(activeColour == true)  {
                    if(brushColour != BLACK && brushColour != WHITE)
                        brushColour = randColor();
                    e.target.style.background = `#${brushColour}`;
                }
            });
            cell.setAttribute('class', 'cell');
            row.append(cell);
        }
        tabla.append(row);
    }
    board.append(tabla);
}

generateBoard();
setDefault();


//Color button
var colorButton = document.querySelector(".color");
colorButton.addEventListener("click", colorButtonPressed)

function colorButtonPressed() {
    setDefault();
    colorButton.style.backgroundColor = `#${BLACK}`;
    colorButton.style.color = "white";
    brushColour = BLACK;
    activeColour = true;
}

//Rainbow button;
var rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener("click", rainbowButtonPressed)

//generez culoare random;
function rainbowButtonPressed() {
    setDefault();
    rainbowButton.style.background = `#${BLACK}`;
    rainbowButton.style.color = "white";
    brushColour = randColor();
}

//Erase Button;
var eraseButton = document.querySelector(".erase");
eraseButton.addEventListener("click", eraseButtonPressed)

//colorez tabla inapoi in alb;
function eraseButtonPressed() {
    setDefault();
    eraseButton.style.background = `#${BLACK}`;
    eraseButton.style.color = "white";
    brushColour = WHITE;
    activeColour = true;
}

//Clear Button
var clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearButtonPressed) 

function clearBoard() {
    tabla.innerHTML = "";
    generateBoard();
}

function clearButtonPressed() {
    setDefault();
    clearButton.style.background = `#${BLACK}`;
    clearButton.style.color = "white";
    clearBoard();
    activeColour = false;
}
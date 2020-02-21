//Creating the 3 choices.
let P = "paper";
let R = "rock";
let S = "scissors";

let player = 0;
let computer = 0;

let prs = "Player wins! Rock beats scissors";
let cpr = "Jigsaw wins. Paper beats rock.";
let psp = "Player wins! Scissors beats paper.";
let crs = "Jigsaw wins. Rock beats scissors.";
let ppr = "Player wins! Paper beats rock.";
let csp = "Jigsaw wins. Scissors beat paper.";
let tie = "It's a tie, try again.";
let win = "You win, this time..."
let loss = "Game over, you lost."

const pscore_span = document.getElementById("pscore");
const cscore_span = document.getElementById("cscore");
const scoreboard_div = document.querySelector("scoreboard");
const text_span = document.getElementById("text");

let playerSelection
let computerSelection

function choose(choice) {
    playerSelection = choice;
}

//Determining the computers "choice".
function computerPlay() {

    let random = ( Math.random() ) * 100;

    if (random > 66.6) {
        computerSelection = R;
    } else if (random < 33.3) {
        computerSelection = P;
    } else {
        computerSelection = S;
    }

}

//Setting up the game rules.
function playRound() {

    //Run computers choice.
    computerPlay()

    //If the game is a tie.
    if (playerSelection.toLowerCase() === computerSelection) {
        text_span.innerHTML = tie;
        console.log("Players score = " + player + ", Computers score = " + computer + ".")

    //If there is a winner.
    } else if ( !(playerSelection.toLowerCase() === computerSelection) ) {
        switch (true) {
            case ( (playerSelection.toLowerCase() === R) && (computerSelection === S) ):
                player++;
                pscore_span.innerHTML = player;
                cscore_span.innerHTML = computer;
                text_span.innerHTML = prs;
                console.log("Players score = " + player + ", Computers score = " + computer + ".")
                break;
            
            case ( (playerSelection.toLowerCase() === R) && (computerSelection === P) ):
                computer++;
                pscore_span.innerHTML = player;
                cscore_span.innerHTML = computer;
                text_span.innerHTML = cpr;
                console.log("Players score = " + player + ", Computers score = " + computer + ".")
                break;

            case ( (playerSelection.toLowerCase() === S) && (computerSelection === P) ):
                player++;
                pscore_span.innerHTML = player;
                cscore_span.innerHTML = computer;
                text_span.innerHTML = psp;
                console.log("Players score = " + player + ", Computers score = " + computer + ".")
                break;

            case ( (playerSelection.toLowerCase() === S) && (computerSelection === R) ):
                computer++;
                pscore_span.innerHTML = player;
                cscore_span.innerHTML = computer;
                text_span.innerHTML = crs;
                console.log("Players score = " + player + ", Computers score = " + computer + ".")
                break;

            case ( (playerSelection.toLowerCase() === P) && (computerSelection === R) ):
                player++;
                pscore_span.innerHTML = player;
                cscore_span.innerHTML = computer;
                text_span.innerHTML = ppr;
                console.log("Players score = " + player + ", Computers score = " + computer + ".")
                break;

            case ( (playerSelection.toLowerCase() === P) && (computerSelection === S) ):
                computer++;
                pscore_span.innerHTML = player;
                cscore_span.innerHTML = computer;
                text_span.innerHTML = csp;
                console.log("Players score = " + player + ", Computers score = " + computer + ".")
                break;
        }
    }
}

function gameOver() {
    if (player > 4) {
        text_span.innerHTML = win;
        text_span.classList.add("win")
    } else if (computer > 4) {
        text_span.innerHTML = loss;
        text_span.classList.add("lost")
    }
}
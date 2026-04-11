
// variables
const startScreen = document.getElementById("startScreen")
const gameScreen = document.getElementById("gameScreen")
const startButton = document.getElementById("startButton")
const backButton = document.getElementById("backButton")
const rockButton = document.getElementById("rockButton")
const paperButton = document.getElementById("paperButton")
const scissorsButton = document.getElementById("scissorsButton")

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice()
{
    return choices[Math.floor(Math.random() * choices.length)];
}

// look at user choice and computer choice to decide who won the round
function compareChoices(user, computer)           
{
    if (user === computer) return "It's a tie !!"
    else if ((user === "Rock" && computer === "Scissors") || (user === "Paper" && computer === "Rock") || (user === "Scissors" && computer === "Paper"))
    {
        return "You Win !!";
    }
    else
    {
        return "Computer Wins !!";
    }
}

let userChoice = "";


// start button switches to game screen
startButton.addEventListener("click", function()
{
    startScreen.style.display = "none";
    gameScreen.style.display = "flex";

});

// back button switches back to start screen
backButton.addEventListener("click", function()
{
    gameScreen.style.display = "none";
    startScreen.style.display = "block";
});

// options buttons
rockButton.addEventListener("click", function()
{
    console.log("rock");
    userChoice = "Rock"
    const computerChoice = getComputerChoice();
    const result = compareChoices(userChoice, computerChoice)
    alert("You chose " + userChoice + "\nComputer chose " + computerChoice + "\n" + result);
});

paperButton.addEventListener("click", function()
{
    console.log("paper");
    userChoice = "Paper"
    const computerChoice = getComputerChoice();
    const result = compareChoices(userChoice, computerChoice)
    alert("You chose " + userChoice + "\nComputer chose " + computerChoice + "\n" + result);
});

scissorsButton.addEventListener("click", function()
{
    console.log("scissors");
    userChoice = "Scissors"
    const computerChoice = getComputerChoice();
    const result = compareChoices(userChoice, computerChoice)
    alert("You chose " + userChoice + "\nComputer chose " + computerChoice + "\n" + result);
});

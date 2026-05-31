// screens
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const winScreen = document.getElementById("winScreen");

// buttons
const startButton = document.getElementById("startButton");
const backButton = document.getElementById("backButton");
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const restartButton = document.getElementById("restartButton");

// text
const resultDiv = document.getElementById("result");
const winnerText = document.getElementById("winnerText");

// choices
const choices = ["Rock", "Paper", "Scissors"];

// scores
const scoreDiv = document.getElementById("scoreboard");
let userScore = 0;
let computerScore = 0;

function updateScore()
{
    scoreDiv.textContent = "You: " + userScore + " | Computer: " + computerScore;
}

function getComputerChoice()
{
    return choices[Math.floor(Math.random() * choices.length)];
}

function compareChoices(user, computer)
{
    if (user === computer) return "Tie!";
    
    if (
        (user === "Rock" && computer === "Scissors") ||
        (user === "Paper" && computer === "Rock") ||
        (user === "Scissors" && computer === "Paper")
    )
    {
        return "You Win!";
    }

    return "Computer Wins!";
}

function playRound(userChoice)
{
    const computerChoice = getComputerChoice();

    resultDiv.style.color = "black";
    resultDiv.textContent = "Rock...Paper...Scissors... SHOOT!";

    setTimeout
    (
        function () 
        {
            const result = compareChoices(userChoice, computerChoice);

            if (result === "You Win!")
            {
                userScore++;
                resultDiv.style.color = "green";
            }
                
            else if (result === "Computer Wins!")
            {
                 computerScore++;
                 resultDiv.style.color = "red"
            }

            else 
            {
                resultDiv.style.color = "black"
            }
               
            resultDiv.textContent =
                "You chose " + userChoice +
                " | Computer chose " + computerChoice +
                " | " + result;

            updateScore();
            checkWinner();
        }, 1000
    );
}

function checkWinner()
{
    if (userScore === 3)
    {
        gameScreen.style.display = "none";
        winScreen.style.display = "flex";
        winnerText.textContent = "🎉 You Won Best of 5!";
    }

    if (computerScore === 3)
    {
        gameScreen.style.display = "none";
        winScreen.style.display = "flex";
        winnerText.textContent = "💻 Computer Won Best of 5!";
    }
}

function resetGame()
{
    userScore = 0;
    computerScore = 0;

    updateScore();

    resultDiv.textContent = "";

    winScreen.style.display = "flex";
    startScreen.style.display = "flex";
}
// start
startButton.addEventListener("click", function ()
{
    startScreen.style.display = "none";
    gameScreen.style.display = "flex";
    updateScore();
});

// back
backButton.addEventListener("click", function ()
{
    gameScreen.style.display = "none";
    startScreen.style.display = "flex";
});

// choices
rockButton.addEventListener("click", () => playRound("Rock"));
paperButton.addEventListener("click", () => playRound("Paper"));
scissorsButton.addEventListener("click", () => playRound("Scissors"));

// restart
restartButton.addEventListener("click", resetGame);
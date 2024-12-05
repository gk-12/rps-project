let humanScore = 0;
let computerScore = 0;


function getComputerChoice()
{

    let game =["r", "p", "s"];

    let computer = Math.floor(Math.random() * game.length);

    let random = game[computer];

    return random;
}

function getHumanChoice()
{
    let human = prompt("Enter: ");

    return human;
}


function playRound(HumanChoice, ComputerChoice)
{
    HumanChoice = getHumanChoice();
    ComputerChoice = getComputerChoice;

    if(HumanChoice === ComputerChoice)
    {
        console.log(`Draw!!! Human: ${HumanChoice} Computer${ComputerChoice}`);
        humanScore++;
        computerScore++;
    }

}
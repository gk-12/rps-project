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
    ComputerChoice = getComputerChoice();


    if(HumanChoice === ComputerChoice)
    {
        humanScore++;
        computerScore++;        
    }
    else if(HumanChoice  === "r" && ComputerChoice === "s" || HumanChoice === "s" && ComputerChoice === "p" || HumanChoice === "p" && ComputerChoice === "r")
    {
        humanScore++;
    }
    else
    {
        computerScore++;
    }

    if(humanScore === computerScore)
    {
        console.log(`Draw!!! human: ${HumanChoice}| computer: ${ComputerChoice}`);
    }
    else if(humanScore > computerScore)
    {
        console.log(`human WON!!! human: ${HumanChoice} | computer: ${ComputerChoice}`);
    }
    else
    {
        console.log(`computer WON!!! human: ${HumanChoice} | computer: ${ComputerChoice}`);
    }

}

playRound(getHumanChoice, getComputerChoice);
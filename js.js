function getComputerChoice()
{

    let game =["r", "p", "s"];

    let computer = Math.floor(Math.random() * game.length);

    return computer;
}


function getHumanChoice()
{
    let computer = getComputerChoice();

    
    return computer;
}

console.log(getHumanChoice());
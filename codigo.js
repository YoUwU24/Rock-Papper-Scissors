alert("Si se cargo");
let HumanScore=0;
let CompScore=0;
let round=0;

function ComputerChoice(){
    let rand= Math.floor(Math.random()*3);

    if(rand ==0){
        return "rock";
    }else if(rand==1){
        return "paper";
    }else{
        return "scissors";
    }
}
function HumanChoice(){
    let choice = prompt("Choose: rock, paper, scissors");
    choice=choice.toLowerCase();
    return choice;
    }

function PlayRound(ComputerChoice,HumanChoice){
    if (HumanChoice==ComputerChoice){
        return ("tie, no points :(");
    }else if(HumanChoice=="rock" && ComputerChoice=="scissors"){
        HumanScore++;
        return ("You Win!");
    }else if (HumanChoice=="rock" && ComputerChoice=="paper"){
        CompScore++;
        return ("You lose :(");
    }else if(HumanChoice=="paper" && ComputerChoice=="rock"){
        HumanScore++;
        return("You win!");
    }else if(HumanChoice== "paper" && ComputerChoice=="scissors"){
        CompScore++;
        return("You lose :(");
    }else if(HumanChoice== "scissors" && ComputerChoice=="rock"){
        CompScore++;
        return("You lose :(");
    } else if(HumanChoice== "scissors" && ComputerChoice=="paper"){
        HumanChoice++;
        return("You win!");
    }
}
while(round<5){
let c=ComputerChoice();
console.log("Computer random choise:",c);
let h=HumanChoice();
console.log("Your choice:",h);

console.log(PlayRound(c,h));
console.log("Your Score: ",HumanScore);
console.log("Computer Score: ",CompScore)
round++;
}
if (HumanScore>CompScore){
    console.log("YOU WIIIN WUUU");
}else if(CompScore>HumanScore){
    console.log("YOU LOSE MUAJAJAJA");
}

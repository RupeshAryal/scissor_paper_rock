let HumanScore = 0;
let ComputerScore = 0;
const display = document.querySelector('.textshow');
const secondDisplay = document.querySelector('.DOMentry');
const score = document.querySelector('.ScoreDisplay');
const ButtonDisable = document.querySelectorAll('.button');
const CreateButton = document.createElement('button');
CreateButton.innerHTML = 'try again';
console.log(CreateButton);

CreateButton.addEventListener('click', ()=>{
    ButtonDisable.forEach((selectedButton)=>{
        selectedButton.disabled = false;
        secondDisplay.innerHTML = '';
        display.innerHTML = 'please select a object to start';
    })
})
function computer() {
    let options = ['scissor','paper', 'rock']
    return options[Math.floor(Math.random()*options.length)];
}
   
function play(playerSelection) {
    let computerSelection = computer();
    if (playerSelection===computerSelection) {
        result(playerSelection, computerSelection,HumanScore, ComputerScore);
        secondDisplay.innerHTML = "<br><br>tie";
    }
    else if((playerSelection == 'rock'&&computerSelection=='scissor')||(playerSelection == 'scissor' && computerSelection == 'paper')||(playerSelection=='paper'&&computerSelection=='rock')){
         
        secondDisplay.innerHTML = '<br><br>human';
        HumanScore++;
        result(playerSelection, computerSelection,HumanScore, ComputerScore);
    }
    else {secondDisplay.innerHTML= '<br><br>computer';
   
    ComputerScore++;
    result(playerSelection, computerSelection,HumanScore, ComputerScore);
    }

    GameEnd(HumanScore, ComputerScore);
    
}

function result(a,b,c,d){
    display.innerHTML="you selected " + " " + a +  " <br> computer selecter   " + "  " + b;
    score.innerHTML= "human " + c + "computer " + d;
}

function GameEnd(playerscore, comptscore) {
    if(playerscore==5 || comptscore == 5)
    {  ButtonDisable.forEach((discord)=>{
        discord.disabled= true;
    })
    
        if (playerscore==5) {
            score.innerHTML = '';
            display.innerHTML = 'human won' + HumanScore + '-' + ComputerScore;
            HumanScore = 0;
            ComputerScore = 0;
            secondDisplay.appendChild(CreateButton)
        }
        else
        {
            score.innerHTML = '';
            display.innerHTML = 'computer  won' + ComputerScore + '-' + HumanScore;
            HumanScore = 0;
            ComputerScore = 0;
            secondDisplay.appendChild(CreateButton)
        }
}
}


let HumanScore = 0;
let ComputerScore = 0;
const display = document.querySelector('.textshow');
const secondDisplay = document.querySelector('.DOMentry');
const score = document.querySelector('.ScoreDisplay');
const ButtonDisable = document.querySelectorAll('.button');
const CreateButton = document.createElement('button');
CreateButton.innerHTML = 'try again';
console.log(CreateButton);

buttonDisabledTrue();

CreateButton.addEventListener('click', ()=>{
        buttonDisabledFalse();
        secondDisplay.innerHTML = '';
        display.innerHTML = 'please select a object to start';
    })
function computer() {                          //this function generate a random selection from the computer
    let options = ['scissor','paper', 'rock']
    return options[Math.floor(Math.random()*options.length)];
}
   
function play(playerSelection) {                //this function start the game 
    
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

function GameEnd(playerscore, comptscore) {             //this function marks the end of the function when the score reaches 5
    if(playerscore==5 || comptscore == 5)
    {  
        buttonDisabledTrue();                           //buttons are disabled at this point
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

const start = document.createElement('button');
const clear = document.createElement('button');
clear.innerHTML = "clear";
start.innerHTML = "start game";
const startButtonDisplay = document.querySelector('.SecondaryButton');
startButtonDisplay.append(start);
startButtonDisplay.appendChild(clear);
clear.addEventListener('click', ()=>{
    clearScore();
})
start.addEventListener('click', ()=>{
    buttonDisabledFalse();
})

function buttonDisabledTrue() {           //this function disable the main three button
    ButtonDisable.forEach((discord)=>{
        discord.disabled= true;
    })
}

function buttonDisabledFalse() {           //this function enable the main three button
    ButtonDisable.forEach((discord)=>{
        discord.disabled= false;
    })
}

function clearScore() {
    HumanScore = 0;
    ComputerScore = 0;
    score.innerHTML= "human " + HumanScore + "computer " + ComputerScore;
}

clear.setAttribute('style', 'width: 120px; height:40px; background-color: orange; border-radius:10px; color:white; font-size: 100;');
start.setAttribute('style', 'width: 120px; height:40px; background-color: orange; border-radius:10px; color:white; font-size: 100;');




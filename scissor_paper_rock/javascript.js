let countHuman=0;
        let coundComputer=0
        function human(){
         let input = prompt("enter your object");
         
        input = input.toLowerCase();
        if (input == 'rock' || input == 'paper' || input == 'scissor') 
        {
            return input; 
        }
        else
        {
            alert("enter a valid object");
         return human();
        }
    }
        
    
    function computer() {
       let  computer1=Math.floor(Math.random()*3);
        if (computer1==0) {
            computer1="rock";
        }
        else if (computer1==1) {
            computer1 = "paper"; 
        }
        else
        {
            computer1= "scissor";
        }
       return computer1;  
    }   
        
    function play(a,b) {
        //console.log("you selected " +a);
                //console.log("computer selected " +b);
                if ((a=='rock'&&b=='rock') || (a=='scissor' && b=='scissor') || (a=='paper' && b== 'paper')) {
                    console.log("its a tie");
                }

                else if ((a=='rock' && b== 'scissor') || (a=='scissor' && b=='paper') || (a=='paper' && b=='rock')) {
                    countHuman++;
                    //console.log("human won");
                }

                else
                coundComputer++
                //console.log("computer won");
            }
            

            //console.log(human());
            //console.log("computer selected " +computer());
           while (countHuman<5 && coundComputer<5) {
        
            play(human(), computer());
            
            console.log("human : " +countHuman + " " + "computer :" + coundComputer);
            
           }

           if (countHuman==5) {
               console.log("human won");
           }
           else
            console.log("computer won");
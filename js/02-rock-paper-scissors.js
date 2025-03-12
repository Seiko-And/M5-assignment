/*
The Rock, Paper, Scissors Game 

Rock, paper, scissors is a classic 2 player game. 
Each player chooses rock, paper or scissors. 

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
*/ 

while(true){
    // Prompt the user for their choice.
    let userChoice = prompt('Please enter Rock or Scissors or Paper.');
   
    // Create the computer’s choice. Generates 3 ramdom numbers.
    let pcChoice = Math.floor((Math.random()* 3));
    console.log(pcChoice); // For testing

    // Reset the number to a string value of rock, paper, or scissors.
    if (pcChoice === 0){
        pcChoice = 'rock';
    }
    else if (pcChoice === 1){
        pcChoice = 'paper';
    }
    else{
        pcChoice = 'scissors';
    }

    // Conditional that determines who wins.
  
    if (userChoice){
        
        userChoice = userChoice.trim().toLowerCase()

        if ((userChoice == 'rock' && pcChoice == 'paper') || 
            (userChoice == 'paper' && pcChoice == 'scissors') ||
            (userChoice == 'scissors' && pcChoice == 'rock'))
            {
            alert(`You lost!! \nYou chose : ${userChoice} \nComputer chose : ${pcChoice}`);
        }
        else if ((userChoice == 'rock' && pcChoice == 'scissors') ||
                (userChoice == 'paper' && pcChoice == 'rock') ||
                (userChoice == 'scissors' && pcChoice == 'paper')){
            alert(`You win!! \nYou chose : ${userChoice} \nComputer chose : ${pcChoice}`);
        }
        else if(userChoice == pcChoice){
            userChoice = prompt(`Even!! \nYou chose : ${userChoice} \nComputer chose : ${pcChoice}\n\n Try again? y / n` ,'y').trim().toLowerCase();
            // What if the result ends in a tie? Figure out how to handle that as well.
            if (userChoice == 'y'){
                continue;
            }
            else{
                break;
            }
        }
        else if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors'){
            alert('Invalid. Please enter Rock or Scissors or Paper.')
            continue;
        }

        userChoice = prompt('Do you want to play again? y / n','y').trim().toLowerCase();
            
            if (userChoice == 'y'){
                continue;
            }
            else{
                break;
            }
    }
    else if (userChoice == null){
        userChoice = prompt('Do you want to exit the game? y / n', 'n');
            if (userChoice == 'n'){
                continue;
            }
            else{
                break;
            }
    }
    else{
        userChoice = prompt('Do you want to exit the game? y / n', 'n');
         console.log(userChoice);
            if (userChoice == 'n'){
                continue;
            }
            else{
                break;
            }
    }
} 



// What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.

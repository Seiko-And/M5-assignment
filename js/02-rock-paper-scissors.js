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
    let playerChoice = prompt('Please enter Rock or Scissors or Paper.');

    // If the player enters something other than rock, paper, or scissors into the prompt? 
    // If the player click the cancel button
    if (playerChoice === null){
        break;
    }
    if (playerChoice){  // If there is input
        playerChoice = playerChoice.trim().toLowerCase()
    }
    if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors'){
        alert('Invalid. Please enter Rock or Scissors or Paper.')
        continue;
    }
   
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
    if ((playerChoice === 'rock' && pcChoice === 'paper') || 
        (playerChoice === 'paper' && pcChoice === 'scissors') ||
        (playerChoice === 'scissors' && pcChoice === 'rock')){

        alert(`You lost!! \nYou chose : ${playerChoice} \nComputer chose : ${pcChoice}`);

    }
    else if ((playerChoice === 'rock' && pcChoice === 'scissors') ||
            (playerChoice === 'paper' && pcChoice === 'rock') ||
            (playerChoice === 'scissors' && pcChoice === 'paper')){

        alert(`You win!! \nYou chose : ${playerChoice} \nComputer chose : ${pcChoice}`);

    }
    else if(playerChoice == pcChoice){

        alert(`Even!! \nYou chose : ${playerChoice} \nComputer chose : ${pcChoice}`)
            
        // What if the result ends in a tie? Figure out how to handle that as well.
        continue;
            
    }
       
    //  Continue or Quite
    playerChoice = prompt('Do you want to play again? y / n','y').trim().toLowerCase();
            
            if (playerChoice === null || playerChoice === 'n'){
                break;
            }
    
} 


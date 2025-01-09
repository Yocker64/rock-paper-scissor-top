

//Starts the game, you could call this the main function

scoreplayer1 = 0;
scoreplayer2 = 0;
let player1;
let player2 = 'Computer';
counter = 1;
let fieldToAppend = document.querySelector('.results');
let player1choice = ''

//This just runs the play round 5 times after getting the name of the human player
//This function makes the player to choose and the computer to generate a random play in order to dispute a match
function playRound() {  //This gets the two names of the players as an input
  
  player2choice = computerChoice();
  console.log(scoreplayer1);
  console.log(scoreplayer2);
  decideWinner(player1, player1choice, player2, player2choice);
}


//Deciding the winner through the old and good logic of paper scissor
function decideWinner(player1, player1choice, player2, player2choice) {
  message =  "";
  if (counter > 5) {
    if (scoreplayer1 > scoreplayer2) {
      alert("It is over, " + player1 + " won!")
    }else if(scoreplayer1 < scoreplayer2){
      alert("It is over, " + player2 + " won!")
    }else{
      alert("The match result is a draw")
    }
    
    }else{
    //Using the fact that no matter the string, if both strings are the same it is a draw
  if (player1choice == player2choice) {
    message = counter + ": Both of you chose the same: " + player1choice + ".\n It is a draw"
  } else if (player1choice == "paper") {
    if (player2choice == "scissors") {
      message = counter + ": It is " + player2 + ", the one who gets the victory";
      scoreplayer2++;
    } else {
      message = counter + ": It is " + player1 + ", the one who gets the victory";
      scoreplayer1++;
    }
  } else if (player1choice == "rock") {
    if (player2choice == "scissors") {
      message = counter + ": It is " + player1 + ", the one who gets the victory";
      scoreplayer1++;
    } else {
      message = counter + ": It is " + player2 + ", the one who gets the victory";
      scoreplayer2++;
    }
  } else {
    if (player2choice == "paper") {
      message = counter + ": It is " + player1 + ", the one who gets the victory";
      scoreplayer1++;
    } else {
      message = counter + ": It is " + player2 + ", the one who gets the victory";
      scoreplayer2++;
    }
  }

  child = document.createElement('p');
  child.innerText = message;
  fieldToAppend.appendChild(child);
  counter ++;
}
}

//Getting the play from the human player
function choice(player) {
    
    //Tryna get a valid input, if that condition is not satisfied, then you cannot continue
  while (true) {
    playerchoice = prompt(player+", What do you want to play? You can choose Rock, Paper, or if you feel adventurous today maybe even the almighty Scissors");  //Trim the string if it has any blank spaces that could mess up the result
    playerchoice.toLowerCase().trim();
    if (playerchoice === "rock") {
      return "rock";
    } else if (playerchoice === "scissors") {
      return "scissors";
    } else if (playerchoice === "paper") {
      return "paper";
    } else {
      alert("You entered a non-valid input; choose again.");
    }
  }
  
}

let buttons = document.querySelector('.buttons')
buttons.addEventListener('click', (event) =>{
  let target = event.target;
  
  switch (target.id) {
    case 'scissors':
      player1choice= 'scissors'
      document.getElementById(target.id).style.backgroundColor = 'blue';
      document.getElementById('rock').style.backgroundColor = 'gray';
      document.getElementById('paper').style.backgroundColor = 'gray';
      break;
    case 'rock':
      player1choice= 'rock'
      document.getElementById(target.id).style.backgroundColor = 'blue';
      document.getElementById('scissors').style.backgroundColor = 'gray';
      document.getElementById('paper').style.backgroundColor = 'gray';
      break;
    case 'paper':
      player1choice= 'paper'
      document.getElementById(target.id).style.backgroundColor = 'blue';
      document.getElementById('scissors').style.backgroundColor = 'gray';
      document.getElementById('rock').style.backgroundColor = 'gray';
      break;
  
    default:
      break;
  }
})
//Get a random choice out of the three we have for the bot
function computerChoice() {
    //Using math floor and then adding one to make the minimum possible 1 and the maximum 3
    number = Math.floor(Math.random() * 3 + 1);
    //Assigning a random string for the game to continue
    if (number == 1) {
      return "scissors";
    } else if (number == 2) {
      return "paper";
    } else {
      return "rock";
    }
  }

  

  //Change the name of the user with the text on the input blank when the button "Add name is pressed"
  function changePlayerName(){
    player1 = document.querySelector('input').value
  }
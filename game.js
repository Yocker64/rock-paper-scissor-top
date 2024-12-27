//Starts the game, you could call this the main function
playGame();

//This just runs the play round 5 times after getting the name of the human player
function playGame(params) {
  const player1 = prompt("What is the name of the player 1");
  const player2 = "Computer";

  for (let i = 0; i < 5; i++) {
    playRound(player1, player2);
  }
}
//This function makes the player to choose and the computer to generate a random play in order to dispute a match
function playRound(player1, player2) {  //This gets the two names of the players as an input
  player1choice = choice(player1);
  player2choice = randomChoicem();
  decideWinner(player1, player1choice, player2, player2choice);
}


//Deciding the winner through the old and good logic of paper scissor
function decideWinner(player1, player1choice, player2, player2choice) {
    //Using the fact that no matter the string, if both strings are the same it is a draw
  if (player1choice == player2choice) {
    alert("Both of you chose the same: " + player1choice + ".\n It is a draw");
  } else if (player1choice == "paper") {
    if (player2choice == "scissors") {
      alert("It is " + player2 + " the one who gets the victory");
    } else {
      alert("It is " + player1 + " the one who gets the victory");
    }
  } else if (player1choice == "rock") {
    if (player2choice == "scissors") {
      alert("It is " + player1 + " the one who gets the victory");
    } else {
      alert("It is " + player2 + " the one who gets the victory");
    }
  } else {
    if (player2choice == "paper") {
      alert("It is " + player1 + " the one who gets the victory");
    } else {
      alert("It is " + player2 + " the one who gets the victory");
    }
  }
}

//Getting the play from the human player
function choice(player) {
    
    //Tryna get a valid input, if that condition is not satisfied, then you cannot continue
  while (true) {
    playerchoice = prompt(
      player,
      "What do you want to play? You can choose Rock, Paper, or if you feel adventurous today maybe even the almighty Scissors"
    )
      .toLowerCase()
      .trim();  //Trim the string if it has any blank spaces that could mess up the result
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


  //Get a random choice out of the three we have for the bot
  function randomChoice() {
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
}

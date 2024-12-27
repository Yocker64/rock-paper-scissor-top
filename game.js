const player1 = prompt('What is the name of the player 1');
        const player2 = prompt('What is the name of the player 2');

        player1choice = choice(player1);
        player2choice = choice(player2);


        decideWinner(player1, player1choice, player2, player2choice);



        function decideWinner(player1, player1choice, player2, player2choice) {
            if (player1choice == player2choice) {
                alert('Both of you chose the same: ' + player1choice+ ".\n It is a draw");
            }else if (player1choice == "paper") {
                if (player2choice == "scissors") {
                    alert("It is "+ player2+ " the one who gets the victory");
                }else{
                    alert("It is "+ player1+ " the one who gets the victory");
                }
            }else if (player1choice == "rock") {
                if (player2choice == "scissors") {
                    alert("It is "+ player1+ " the one who gets the victory");
                }else{
                    alert("It is "+ player2+ " the one who gets the victory");
                }
            }else{
                if (player2choice == "paper") {
                    alert("It is "+ player1+ " the one who gets the victory");
                }else{
                    alert("It is "+ player2+ " the one who gets the victory");
                }
            }
        }
        function choice(player) {

            while (true) {
                playerchoice =  prompt(player, 'What do you want to play? You can choose Rock, Paper, or if you feel adventurous today maybe even the almighty Scissors').toLowerCase().trim();
                if (playerchoice === "rock") {
                    return "rock";
                }else if (playerchoice === "scissors") {
                    return "scissors"
                }else if (playerchoice === "paper") {
                    return "paper"                    
                }else{
                    alert("You entered a non-valid input; choose again.")
                }
            }
            

        }


        
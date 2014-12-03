		var rock = document.getElementById("rock");
		var paper = document.getElementById("paper");
		var scissor = document.getElementById("scissor");
		var userChoice = "";  // not sure about this variable if it is defined correctly 
		var computerChoiceButton = document.getElementsByTagName("button")[0];
		var resetButton = document.getElementsByTagName("button")[1];
		var userScore = document.getElementById("userScore");
		var computerScore = document.getElementById("computerScore");

		uScore = 0;
		compScore = 0; 

		


		computerpaper.style.opacity = 0;
		computerscissor.style.opacity = 0;
		computerrock.style.opacity = 0;
		tie.style.opacity = 0;
		youlose.style.opacity = 0;
		youwin.style.opacity = 0;


		rock.addEventListener("click", function() {
			paper.style.opacity = 0.1;
			scissor.style.opacity = 0.1;
			letsplay.style.opacity = 0;
			userChoice = "rock";
			paper.disabled = true;
			scissor.disabled = true;
		});

		paper.addEventListener("click", function() {
			rock.style.opacity = 0.1;
			scissor.style.opacity = 0.1;
			letsplay.style.opacity = 0;
			userChoice = "paper";
			rock.disabled = true;
			scissor.disabled = true;
		});

		scissor.addEventListener("click", function() {
			paper.style.opacity = 0.1;
			rock.style.opacity = 0.1;
			letsplay.style.opacity = 0;
			userChoice = "scissor";
			paper.disabled = true;
			rock.disabled = true;
		});

		computerChoiceButton.addEventListener("click", function() {
			var computerChoice = Math.random();

			if (computerChoice < 0.34) {
				computerrock.style.opacity = 1;
				computerpaper.style.opacity = 0;
				computerscissor.style.opacity = 0;
				computerChoice = "rock";
			}  else if (computerChoice <= 0.67) {
				computerrock.style.opacity = 0;
				computerpaper.style.opacity = 1;
				computerscissor.style.opacity = 0;
				computerChoice = "paper";
			}  else {
				computerrock.style.opacity = 0;
				computerpaper.style.opacity = 0;
				computerscissor.style.opacity = 1;
				computerChoice = "scissor";
			}


			var compare = function (choice1, choice2) {
    		if (choice1 === choice2) {
        		tie.style.opacity = 1;
        		youlose.style.opacity = 0;
        		youwin.style.opacity = 0;
        		
    	}
    		else if(choice1 === "rock") {
        
        	if(choice2 === "scissors") { //why does it say You Lose when choice1 is rock choice2 scissors?
           		tie.style.opacity = 0;
        		youlose.style.opacity = 0;
        		youwin.style.opacity = 1;
        		userScore.innerHTML = uScore + 1;
        		
        }
        	else {
            	tie.style.opacity = 0;
        		youlose.style.opacity = 1;
        		youwin.style.opacity = 0;
        		computerScore.innerHTML = compScore + 1;
        }
    }
    		else if(choice1 === "paper") {
        
        	if(choice2 === "rock") {
            	tie.style.opacity = 0;
        		youlose.style.opacity = 0;
        		youwin.style.opacity = 1;
        		userScore.innerHTML = uScore + 1;
        } 
        	else {
            	tie.style.opacity = 0;
        		youlose.style.opacity = 1;
        		youwin.style.opacity = 0;
        		computerScore.innerHTML = compScore + 1;
        }
    }
    		else if(choice1 === "scissor") {
        
        	if(choice2 === "rock") {
            	tie.style.opacity = 0;
        		youlose.style.opacity = 1;
        		youwin.style.opacity = 0;
        		computerScore.innerHTML = compScore + 1;
        } 
        	else {
            	tie.style.opacity = 0;
        		youlose.style.opacity = 0;
        		youwin.style.opacity = 1;
        		userScore.innerHTML = uScore + 1;
        }
     }
};
		compare(userChoice, computerChoice)


});
		

		resetButton.addEventListener("click", function() {
		 	computerrock.style.opacity = 0;
		 	computerpaper.style.opacity = 0;
			computerscissor.style.opacity = 0;
			letsplay.style.opacity = 1;
			rock.style.opacity = 1;
			paper.style.opacity = 1;
			scissor.style.opacity = 1;
			tie.style.opacity = 0;
			youlose.style.opacity = 0;
			youwin.style.opacity = 0;
		
		});

		

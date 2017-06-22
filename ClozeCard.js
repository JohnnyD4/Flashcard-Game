var inquirer = require('inquirer');

var emptyQuestion = [];

var emptyCloze = [];

var score = 0;

inquirer.prompt([
		{
			type : "list",
			message : "Do you want to play a flashcard game?",
			choices : ["yes", "no"],
			name : "play"
		}
	])
.then(function(response) {
		
		if(response.play === "no") {
			
			console.log("Have a good day.");
		
		} else {
			runQuestions();
		}

	})


var clozeCard = function(front, cloze) {
	this.front = front;
	this.cloze = cloze;
	this.partial = this.front.replace(this.cloze,"...");	
	
}


var firstPresident = new clozeCard("George Washington was the first president of the United States.", "George Washington");

emptyQuestion.push(firstPresident.partial);

emptyCloze.push(firstPresident.cloze);




var chelseaFootball = new clozeCard("Chelsea FC won the premiere league 4 times", "4");

emptyQuestion.push(chelseaFootball.partial);

emptyCloze.push(chelseaFootball.cloze);


var fratLife = new clozeCard("There are 15 fraternities at UCF", "15");

emptyQuestion.push(fratLife.partial);

emptyCloze.push(fratLife.cloze);

var liam = new clozeCard("Liam is in the Sigma Pi fraternity", "Sigma Pi");

emptyQuestion.push(liam.partial);

emptyCloze.push(liam.cloze);

var dylan = new clozeCard("Delta Upsilon is Dylan's fraternity", "Delta Upsilon")

emptyQuestion.push(dylan.partial);

emptyCloze.push(dylan.cloze);

var ta = new clozeCard("I am not answering that! Is my favorite TA", "I am not answering that!");

emptyQuestion.push(ta.partial);

emptyCloze.push(ta.cloze);

var count = 0;

function runQuestions() {
	
		inquirer.prompt([
			{
				type : "input",
				message : emptyQuestion[count],
				name : "answer"
			}
		]).then(function(response) {
				
				if (response.answer.toLowerCase() === emptyCloze[count].toLowerCase()) {

					score++;

					count++;

					console.log("Correct!");

					countArray();

				} else {

					console.log("Wrong!");		

					count++;

					countArray();
				}

		})
		// console.log(emptyQuestion[i])
}

function countArray() {

	if (count === emptyQuestion.length) {

			console.log("");

			console.log("--------------------");

			console.log("Game over!");

			console.log("You got " + score + " out of " + emptyQuestion.length + " correct.");

			console.log("");

			console.log("--------------------");

			console.log("");

			if (score < 4) {
				inquirer.prompt([
					{
						type: "list",
						message: "Want to redeem yourself?",
						choices: ["Yes, play again", "No, show me the correct answers"],
						name: "playAgain"
					}
				]).then(function(response) {
					if (response.playAgain === "Yes, play again") {

						count = 0; 

						score = 0;

						runQuestions();

					} else {
						count = 0;

						for (var i = 0; i < emptyCloze.length; i++) {

							console.log(i + ". " + emptyCloze[i]);

						}
					}
				})
			} 

	} else {

		runQuestions();

	}


}


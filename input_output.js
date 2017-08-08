// process.stdout.write("\n\nHello World \n\n");
var quizQuestions = [
	"What colour is the bullseye on a standard dartboard?",
	"How many sides has an octagon?",
	"How many arms does a starfish usually have?"
];

var correctAnswers = [
	"red",
	"8",
	"5"
]

var usersAnswers = [];

// process.stdout.write(`${quizQuestions[0]}, \n ${quizQuestions[1]}, \n ${quizQuestions[2]} \n`);

function askQuestion(i){
	process.stdout.write(`\n\n\n${quizQuestions[i]}\n\n`);
}

process.stdin.on('data', function(answer){
	var questionNumber = usersAnswers.length;
	var inputAnswer = answer.toString().trim();
	if(inputAnswer == correctAnswers[questionNumber]){
		process.stdout.write(`${inputAnswer} is correct \n`);
		usersAnswers.push(inputAnswer);

		if(usersAnswers.length < correctAnswers.length){
			askQuestion(usersAnswers.length);
		} else {
			process.exit();
		}

	} else {
		process.stdout.write(`${inputAnswer} is wrong, please try again \n`);
	}
});


process.on('exit', function(){
	process.stdout.write(`\n\n\n Congrates, you have completed the quiz \n\n\n`);
})

askQuestion(0);







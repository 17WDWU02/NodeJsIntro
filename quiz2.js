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
	usersAnswers.push(answer.toString().trim());
	if(usersAnswers.length < correctAnswers.length){
		askQuestion(usersAnswers.length);
	} else {
		process.exit();
	}
});


process.on('exit', function(){
	process.stdout.write(`You answered:\n\n`);
	var count = 0;
	for (var i = 0; i < correctAnswers.length; i++) {
		if(correctAnswers[i] == usersAnswers[i]){
			count++;
			process.stdout.write(`${quizQuestions[i]} : ${usersAnswers[i]} -- correct\n`);
		} else {
			process.stdout.write(`${quizQuestions[i]} : ${usersAnswers[i]} -- incorrect, the answer is ${correctAnswers[i]}\n`);
		}
	};
	process.stdout.write(`\nYou got ${count}/${quizQuestions.length} correct\n\n\n`);
})

askQuestion(0);







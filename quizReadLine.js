var readline = require('readline');

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
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question(quizQuestions[usersAnswers.length], function(answer){
	usersAnswers.push(answer.toString().trim());
	rl.setPrompt(quizQuestions[usersAnswers.length]);
	rl.prompt();
	rl.on('line', function(newAnswer){
		usersAnswers.push(newAnswer.toString().trim());
		if(usersAnswers.length < quizQuestions.length){
			rl.setPrompt(quizQuestions[usersAnswers.length]);
			rl.prompt();
		} else {
			rl.close();
		}
	})
})

rl.on('close',function(){
	console.log(`Your answers are ${usersAnswers}`)
	process.exit();
})
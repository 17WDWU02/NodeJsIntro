var fs = require('fs');
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
var person;

var usersAnswers = [];

if(!fs.existsSync("./quizResults")){
	fs.mkdirSync("./quizResults");
} 

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question(`What is your Name?\n`, function(name){
	person = name;
	if(!fs.existsSync(`./quizResults/${name}.txt`)){
		fs.writeFileSync(`./quizResults/${name}.txt`, `Quiz results for ${name}\n\n`);
	} else {
		console.log("You have already completed the quiz, you can only complete it once");
		rl.close();
	}
	rl.setPrompt(`Welcome ${name}\nQuestion 1: ${quizQuestions[usersAnswers.length]}\n`);
	rl.prompt();
	rl.on('line', function(answer){
		var currentQuestion = usersAnswers.length+1;

		var data = 
`\nQuestion ${currentQuestion}:
Question: ${quizQuestions[usersAnswers.length]}
Your Answer : ${answer}
`
		fs.appendFileSync(`./quizResults/${name}.txt`, data)
		usersAnswers.push(answer.toString().trim().toLowerCase());

		if(usersAnswers.length < quizQuestions.length){
			rl.setPrompt(quizQuestions[usersAnswers.length] + "\n");
			rl.prompt();
		} else {
			rl.close();
		}
	});
	
});

rl.on('close',function(){
	console.log(`Thank you for answering the quiz, please check out your answers in your file\n\n\n`);
	fs.appendFileSync(`./quizResults/${person}.txt`, `\n\n\nThank you for completing the quiz`);
	var count = 0;
	for (var i = 0; i < usersAnswers.length; i++) {
		if(usersAnswers[i] == correctAnswers[i]){
			count++;
			fs.appendFileSync(`./quizResults/${person}.txt`, `\nQuestion ${i+1} was correct`);
		} else {
			fs.appendFileSync(`./quizResults/${person}.txt`, `\nQuestion ${i+1} was incorrect, the real answer was ${correctAnswers[i]}`);
		}
	};
	if(count > (quizQuestions.length/2)){
		var note = "Congratulations";
		var status = "passed";
	} else {
		var note = "Im sorry";
		var status = "failed";
	}
	fs.appendFileSync(`./quizResults/${person}.txt`, `\n\n${note}, you ${status} the quiz
Your overal score was ${count}/${quizQuestions.length}`);
	process.exit();
})


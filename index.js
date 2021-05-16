var readingObj = require('readline-sync');
var chalkObj = require('chalk');

var userName = readingObj.question("may I have your name? ");
console.log();

console.log("Welcome",chalkObj.bold.yellow(userName),"to");
console.log("       ",chalkObj.bgRed.bold("HOW WELL DO YOU KNOW MARVEL MOVIES QUIZ"));
console.log();

console.log("This quiz contains",chalkObj.red.bold("3"),"levels:");
console.log("   1 .",chalkObj.bgBlue("true / false"),"(5 questions)");
console.log("   2 .",chalkObj.bgBlue("MCQ's"),"(7 questions)");
console.log("   3 .",chalkObj.bgBlue("Typed Questions"),"(10 questions)");

console.log();
console.log("You need to score",chalkObj.underline.bold.red("maximum points"),"(in previous level) to go to next level!!");
console.log();


//logic

var levelOneScore = 0 , levelTwoScore = 0 , levelThreeScore = 0; 

//function to play the game

function play(question , correctAnswer ){
  var questionScore = 0;
  var userAnswer = readingObj.question(question);
  if(userAnswer.toUpperCase() === correctAnswer.toUpperCase()){
    console.log(chalkObj.bold.green("CORRECT"));
    console.log();
    questionScore++;
  } else{
    console.log(chalkObj.bold.red("WRONG"));
    console.log("correct answer is:",chalkObj.green.bold(correctAnswer));
    console.log();
  }
  return questionScore;
}



// level 1

var levelOneQuestions = [{
  question: "Captain America can lift Thor's Hammer! (true / false) ",
  answer : "true"},{
    question : "There are Total of 5 infinity stones!(true / false) ",
    answer : "false"},{
    question : "J.A.R.V.I.S was programmed by captain america! (true / false) ",
    answer : "false"},{
      question : "captain america shield was made of VIBRANIUM (true / false) ",
      answer : "true"
    },{
      question : "Vision is an alien? (true / false) ",
      answer : "true"
    }
    ];

console.log("                     ",chalkObj.bold.bgCyan("LEVEL ONE"));


for(var i = 0 ; i < levelOneQuestions.length ;i++){
  levelOneScore += play(levelOneQuestions[i].question , levelOneQuestions[i].answer);
}

console.log("level one score is : ",chalkObj.yellow(levelOneScore));
console.log();

//level 2

if(levelOneScore == 5){

  console.log("You are upgraded to",chalkObj.cyan.bold("level two"),"as yor scored maximun points in previos level :)");
  console.log();
  
  var levelTwoQuestions = [{
    question : "What weapon does thor carry?\n\t1.bow and arrow\n\t2.catapult\n\t3.hammer\n\t4.sword\nyour option: ",
    answer : "3"
  },{
    question : "When was first IRONMAN movie released?\n\t1.2012\n\t2.2008\n\t3.2005\n\t4.2021\nyour option: ",
    answer : "2"
  },{
    question : "What is the strongest metal in the marvel universe?\n\t1.Frelunium\n\t2.Verystrongium\n\t3.Adamantium\n\t4.Vibranium\nyour option: ",
    answer : "3"
  },{
    question : "What is the name of the country Black Panther rules over?\n\t1.Asgard\n\t2.koba\n\t3.wakanda\n\t4.USA\nyour option: ",
    answer : "3"
  },{
    question : "Who is Thor’s father?\n\t1.Loki\n\t2.Odin\n\t3.Zeus\n\t4.Ares\nyour option: ",
    answer : "2"
  },{
    question : "Who plays Iron Man in the Marvel Cinematic Universe?\n\t1.Chris Evans\n\t2.Josh brolin\n\t3.Mark ruffalo\n\t4.Robert Downey Jr.\nyour option: ",
    answer : "4"
  },{
    question : "Name of thor's hammer\n\t1.Mjollnir\n\t2.Magni\n\t3.Menus\n\t4.Magnus\nyour option: ",
    answer : "1"
  }];

  console.log("                     ",chalkObj.bold.bgCyan("LEVEL TWO"));
  console.log();
  console.log("            ",chalkObj.bold.red.bgWhite("give only option number"));

for(var i = 0 ; i < levelTwoQuestions.length ;i++){
  levelTwoScore += play(levelTwoQuestions[i].question , levelTwoQuestions[i].answer);
}

console.log("level two score is : ",chalkObj.yellow(levelTwoScore));
console.log();
}

// level 3
if(levelTwoScore == 7){

  console.log("You are upgraded to",chalkObj.cyan.bold("level Three"),"as yor scored maximun points in previos level :)");
  console.log();

  var levelThreeQuestions = [{
    question : " Who is Tony Stark’s father?(spell with space) ",
    answer : "Howard Stark"
  } , {
    question : "Who is the firstborn child of Odin? ",
    answer : "hela"
  } , {
    question : "who is the leader of S.H.I.E.L.D?(spell with space) ",
    answer : "nick fury"
  } , {
     question : "Where is black panther from? ",
     answer : "wakanda"
  } , {
     question : "Nick Fury wears an eye patch over which eye? (just mention side) ",
     answer : "left"
  } , {
    question : "Who opposed Captain America in Civil War?(spell with space) ",
    answer : "iron man"
  } , {
    question : "Who died in Avengers: Age of Ultron? (spell without space) ",
    answer : "Quicksilver"
  } , {
    question : "Who has the Infinity Gauntlet? ",
    answer : "Thanos"
  } , {
    question : "How many standalone Iron Man movies are there? (number) ",
    answer : "3"
  } , {
    question : "Which planet are Thor and the Hulk on in Thor: Ragnarok? ",
    answer : "sakaara"
  }];

   console.log("                     ",chalkObj.bold.bgCyan("LEVEL THREE"));


for(var i = 0 ; i < levelThreeQuestions.length ;i++){
  levelThreeScore += play(levelThreeQuestions[i].question , levelThreeQuestions[i].answer);
}

console.log("level three score is : ",chalkObj.yellow(levelThreeScore));
console.log();

}
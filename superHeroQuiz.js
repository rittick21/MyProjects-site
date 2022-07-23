// MY CLI APP PROJECT
let readLineSync=require('readline-sync');
let question1={
  question: 'Who is the most intelligent personality of Marvel Avangers \nA.Captain Amarica \nB.Tony Stark \nC.Black Widow \nD.Black Panther?',

  ans:'Tony Stark'
};
let question2={
  question: 'Who is the green guy and gama rediated personality of Marvel Avangers \nA.Captain Amarica \nB.Tony Stark \nC.Hulk \nD.Black Widow?',
  ans:'Hulk'
}
let question3={
  question: 'Who is the Magician personality of Marvel Avangers \nA.Captain Amarica \nB.Tony Stark \nC.Hulk \nD.Dr. Strange?',
  ans:'Dr. Strange'
}
let score=0;
let questionArray=[question1,question2,question3];
function play(question,ans){
   let userAns=readLineSync.question(question);
  if(userAns==ans)
  {
    console.log('You are right');
    score++;
  }
  else{
    console.log('You are wrong');
    score--;
  }
  console.log('Current Score is:',score);
}
for(let i=0;i<questionArray.length;i++){
  play(questionArray[i].question,questionArray[i].ans);
}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (e.g., dinner, brunch, etc.)?",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];


const askQuestion = function (index) {
  rl.question(questions[index], (answer) => {
    profile[questions[index]] = answer;

    if (index === questions.length - 1) {
      generateProfile();
      rl.close();
    } else {
      askQuestion(index + 1);
    }
  });
};

const generateProfile = () => {
  const name = profile["What's your name? Nicknames are also acceptable :)"];
  const activity = profile["What's an activity you like doing?"];
  const music = profile["What do you listen to while doing that?"];
  const meal = profile["Which meal is your favourite (e.g., dinner, brunch, etc.)?"];
  const food = profile["What's your favourite thing to eat for that meal?"];
  const sport = profile["Which sport is your absolute favourite?"];
  const superpower = profile["What is your superpower? In a few words, tell us what you are amazing at!"];

  console.log(`
  My name is ${name}.
  The activity I like is ${activity}.
  I like listen to ${music} when I ${activity}.
  My favorite meal is ${meal}, and my favorite food is ${food}.
  My favorite sport is ${sport}
  My superpower is ${superpower}
`);
};
askQuestion(0);
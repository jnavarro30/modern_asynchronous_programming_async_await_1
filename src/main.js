const { welcome, goodbye, tell } = require("../utils/fortune-teller");

async function getFortune(question) {
    try {
      const response = await tell(question);
      console.log(`Your question was: ${question}`);
      console.log(`Your fortune is: ${response}`);
      return response;
    } catch(error) {
      console.log(`There was an error: ${error}`);
    }
}

async function fullSession(question) { 
  try {
    const greeting = await welcome();
    console.log(greeting);
    const fortune = await getFortune(question);
    const bye = await goodbye();
    console.log(`${fortune} and ${bye}`);
  } catch(error) {
    console.log(`There was an error: ${error}`);
  }
}

module.exports = { getFortune, fullSession };

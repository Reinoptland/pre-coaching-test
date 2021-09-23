// What will be the output of this program?
const fetch = require("node-fetch");

console.log("Let's listen to the wisdom of Kanye");
let quoteCount = 10;

async function listenToKanye() {
  const response = await fetch("https://api.kanye.rest");
  const data = await response.json();
  console.log(`Kanye West says: ${data.quote}`);
  quoteCount--;
  if (quoteCount === 0) {
    console.log("Kanye has spoken!");
  } else {
    listenToKanye();
  }
}

listenToKanye();

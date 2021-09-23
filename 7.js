// What will be the output of this program?
const fetch = require("node-fetch");

console.log("Let's listen to the wisdom of Kanye");

fetch("https://api.kanye.rest")
  .then((res) => res.json())
  .then((data) => {
    console.log(`Kanye West says: ${data.quote}`);
  });

console.log("Kanye has spoken!");

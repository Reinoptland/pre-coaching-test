// What will be the output of this program?
const fetch = require("node-fetch");

console.log("Let's listen to the wisdom of Kanye");

fetch("https://api.kanye.restttt")
  .then((res) => res.json())
  .then((data) => {
    console.log(`Kanye West also says: ${data.quote}`);
  })
  .catch((error) => {
    console.log("Oh no!", error.message);
  })
  .finally(() => {
    console.log("Kanye has spoken!");
  });

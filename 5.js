// What will be the output of this program?
function start() {
  helloThere("Maylis");
  start();
}

function helloThere(person) {
  console.log(`Hello there ${person}`);
  console.log("Great to meet you!");
}

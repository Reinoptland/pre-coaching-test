// What will be the output of this program?
const students = ["Afaf", "Bernard", "Arnoud", "Syakirah", "Jamie"];

const output1 = students.map((student) => student.toUpperCase());
console.log("1", output1);

const output2 = students.find((student) => {
  console.log("WHO IS THIS?", student);
  return student.includes("i");
});
console.log("2", output2);

const output3 = students.reduce((acc, next) => acc + next, "👋");
console.log("3", output3);

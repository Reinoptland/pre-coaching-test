// What will be the output of this program?
const heightM = 1.79;
const weightKG = 82;
const age = 33;

function calculateBMI(height, weight) {
  return (weight / height ** 2).toFixed(2);
}

function calculateDailyCaloriesBurned(height, weight, age) {
  const bmr = 66 + 13.7 * weight + 5 * height * 100 - 6.8 * age;
  console.log(Math.round(bmr));
}

const bmi = calculateBMI(heightM, weightKG);
console.log(`Your bmi is ${bmi}`);
const bmr = calculateDailyCaloriesBurned(heightM, weightKG, age);
console.log(`Even if you do nothing you burn ${bmr} calories a day`);

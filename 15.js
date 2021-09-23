const user = { id: 1, userName: "rein", password: "abcd1234" };

const user2 = user;
const user3 = { ...user };

user.password = "HACKED!";

console.log("user 2:", user2);
console.log("user 3:", user3);

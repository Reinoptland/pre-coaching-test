// What will be the output of this program?
class User {
  constructor(name, password, id) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.loggedIn = false;
  }

  static findById(id) {
    return users.find((user) => user.id === id);
  }

  login(password) {
    if (password === this.password) {
      console.log(`Welcome ${this.name}`);
      this.loggedIn = true;
    } else {
      console.log("Sorry! Wrong password!");
    }
  }
}

const users = [
  new User("Rein", "abcd1234", 1),
  new User("Afaf", "1234abcd", 2),
  new User("Bernard", "1122aabb", 3),
];

const bernard = User.findById(3);
bernard.login("aaaaaaaa");
bernard.login("1122aabb");

const afaf = bernard.findById(2);
afaf.login("1234abcd");

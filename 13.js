// What will be the output of this program?
class Pet {
  constructor(nickName, type, pronoun, sound) {
    this.nickName = nickName;
    this.type = type;
    this.sound = sound;
    this.pronoun = pronoun;
    this.hungryLevel = 0;
  }

  makeSound() {
    console.log(`${this.nickName} says: ${this.sound}`);
  }

  feed() {
    this.hungryLevel--;
    console.log(`You fed ${this.nickName}`);
  }

  play() {
    this.hungryLevel += 3;
    console.log(`You played with ${this.nickName}`);
  }

  info() {
    console.log(`Your pet ${this.nickName} is a ${this.type}`);
    console.log(
      `${this.pronoun} is ${this.hungryLevel > 3 ? "hungry" : "not hungry"}`
    );
  }
}

class Dragon extends Pet {
  constructor(nickName, pronoun) {
    super(nickName, "Dragon", pronoun, "Shriek!");
  }

  play() {
    this.hungryLevel += 7;
    console.log(`You flew around on ${this.nickName}`);
  }

  eatHumans() {
    this.makeSound();
    this.makeSound();
    this.hungryLevel = 0;
    console.log(`Oh you! Bad ${this.nickName}! No eating humans!`);
  }
}

const fluffy = new Dragon("Fluffy", "he");
fluffy.makeSound();
fluffy.play();
fluffy.play();
fluffy.eatHumans();
fluffy.info();

const snoopie = new Pet("Snoopie", "Crocodile", "she", "Grrrowl!");
snoopie.makeSound();
snoopie.play();
snoopie.play();
snoopie.eatHumans();
snoopie.info();
